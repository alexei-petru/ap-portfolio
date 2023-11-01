import { Button, Transition } from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";
import Image from "next/image";
import { StyledAffix } from "./AffixTop.styled";

function AffixTop() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <>
      <StyledAffix position={{ bottom: 20, right: 20 }}>
        <Transition transition="slide-up" mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <Button
              // leftIcon={<AiOutlineArrowUp size={16} />}
              style={{ width: "120px", height: "auto", ...transitionStyles }}
              onClick={() => scrollTo({ y: 0 })}
              color={"black.0"}
            >
              <Image
                src="/work-in-progress.png"
                alt="work in progress"
                width={"100%"}
                height={"90px"}
              />
            </Button>
          )}
        </Transition>
      </StyledAffix>
    </>
  );
}

export default AffixTop;
