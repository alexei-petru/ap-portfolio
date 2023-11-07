import { Button, Transition } from "@mantine/core";
import { useMediaQuery, useWindowScroll } from "@mantine/hooks";
import { FaArrowUp } from "react-icons/fa";
import * as St from "./AffixToTop.styled";
import { BREAKPOINTS_APP } from "src/constants/constants";

const AffixToTop = () => {
  const [scroll, scrollTo] = useWindowScroll();
  const isSmallScreen = useMediaQuery(
    `(max-width:${BREAKPOINTS_APP.mobileMedium} )`
  );

  return (
    <>
      <St.StyledAffix>
        <Transition transition="slide-up" mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <Button
              color="dark"
              title="Go to top"
              aria-label="Go to top"
              size={isSmallScreen ? "xs" : "xl"}
              style={transitionStyles}
              onClick={() => scrollTo({ y: 0 })}
            >
              <FaArrowUp
                style={{
                  width: 30,
                  height: 30,
                }}
              />
            </Button>
          )}
        </Transition>
      </St.StyledAffix>
    </>
  );
};

export default AffixToTop;
