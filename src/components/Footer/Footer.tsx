import { StyledContainer } from "src/styles/Container.styled";
import * as St from "./Footer.styled";
import Image from "next/image";
import { BREAKPOINTS_APP } from "src/constants-types/constants";
import { useGetCurrentYear } from "src/hooks/useGetCurrentYear";
import dynamic from "next/dynamic";

const DynamicForm = dynamic(() => import("src/components/Footer/Form/Form"), {
  ssr: false,
});

const Footer = () => {
  const currentYear = useGetCurrentYear();
  return (
    <>
      <St.Footer id="contact">
        <St.FooterBackgroundWrapper>
          <Image
            fill
            style={{ objectFit: "cover" }}
            alt=""
            src={"/ufo-background.png"}
            priority
            sizes={`max-width: ${BREAKPOINTS_APP.laptopMedium} 100vw, 50vw`}
          />
        </St.FooterBackgroundWrapper>
        <StyledContainer>
          <St.FooterInner>
            <St.FooterTitle>Contact</St.FooterTitle>
            <St.MapFormFooterWrapper>
              <St.MapWrapper>
                <Image
                  fill
                  style={{ objectFit: "cover" }}
                  quality={100}
                  alt="location"
                  src={"/location.png"}
                  sizes={`max-width: ${BREAKPOINTS_APP.laptopMedium} 100vw, 50vw`}
                />
              </St.MapWrapper>
              <DynamicForm />
            </St.MapFormFooterWrapper>
            <St.footerCopyright>
              {`Designed and developed with ❤ by Alexei Petru. © ${currentYear}`}
            </St.footerCopyright>
          </St.FooterInner>
        </StyledContainer>
      </St.Footer>
    </>
  );
};

export default Footer;
