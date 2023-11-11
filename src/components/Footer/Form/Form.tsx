import { Loader } from "@mantine/core";
import { useTimeout } from "@mantine/hooks";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";
import { BREAKPOINTS_APP } from "src/constants-types/constants";
import * as St from "./Form.styled";
import { palceholderImageDuration } from "./Form.styled";

const Form = () => {
  const imageTimingMidle = (palceholderImageDuration * 30) / 100;
  const [isLoadStart, setIsLoadStart] = useState(false);
  const [isFormLoaded, setIsFormLoaded] = useState(false);
  const [isPlaceholderImageShown, setIsPlaceholderImageShown] = useState(true);
  const { start: hidePlaceholderImageHandler } = useTimeout(() => {
    setIsPlaceholderImageShown(false);
  }, imageTimingMidle);

  const DynamicForm: React.ComponentType<React.HTMLAttributes<HTMLDivElement>> =
    dynamic(
      () =>
        import("src/components/Footer/Form/FormReal/FormReal").then((m) => {
          if (typeof window !== "undefined") {
            setIsFormLoaded(true);
            hidePlaceholderImageHandler();
          }
          return m.default;
        }),
      {
        loading: () => <div>Contact Us</div>,
        ssr: true,
      },
    );

  return (
    <St.FormSt $isFormLoaded={isFormLoaded}>
      {isPlaceholderImageShown && (
        <Image
          fill
          style={{
            objectFit: "cover",
            zIndex: 1,
            transform: "rotateY(180deg)",
          }}
          quality={100}
          alt="location"
          src={"/form-placeholder.jpg"}
          placeholder="blur"
          blurDataURL={"/form-placeholder.jpg"}
          sizes={`
          (max-width: ${BREAKPOINTS_APP.mobileMedium}) 200vw,
          (max-width: ${BREAKPOINTS_APP.laptopMedium}) 80vw,
            30vw`}
        />
      )}
      {isLoadStart && <DynamicForm />}
      {isPlaceholderImageShown && (
        <St.Placeholder>
          <St.ButtonShowForm
            variant="filled"
            size="lg"
            onClick={() => {
              setIsLoadStart(true);
            }}
          >
            {isLoadStart && (
              <Loader style={{ zIndex: 2 }} color="blue" size="md" />
            )}
            {!isLoadStart && " Open for magic"}
          </St.ButtonShowForm>
        </St.Placeholder>
      )}
    </St.FormSt>
  );
};

export default Form;
