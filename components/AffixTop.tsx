import { Affix, Button, Transition } from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";

function AffixTop() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <>
      <Affix position={{ bottom: 20, right: 20 }}>
        <Transition transition="slide-up" mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <Button
              // leftIcon={<AiOutlineArrowUp size={16} />}
              style={{ width: "120px", height: "auto", ...transitionStyles }}
              onClick={() => scrollTo({ y: 0 })}
              color={"black.0"}
            >
              <img
                style={{ width: "100%", height: "100%" }}
                src="./work-in-progress.png"
                alt="work in progress"
              />
            </Button>
          )}
        </Transition>
      </Affix>
    </>
  );
}

export default AffixTop;
