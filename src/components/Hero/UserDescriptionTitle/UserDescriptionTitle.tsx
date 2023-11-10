import { HERO_APP_DESCRIPTION } from "src/data/localData";
import {
  AnimationEffectIn,
  AnimationEffectOut,
  Textillate,
} from "textillate-react";
import * as St from "./UserDescriptionTitle.styled";
import { useState } from "react";

const selectedAnimationEffects: {
  in: AnimationEffectIn;
  out: AnimationEffectOut;
}[] = [
  { in: "bounceIn", out: "bounceOutDown" },
  { in: "rotateIn", out: "rotateOut" },
  { in: "flipInX", out: "flipOutY" },
  { in: "rollIn", out: "rollOut" },
  { in: "fadeInLeftBig", out: "fadeOutLeftBig" },
  { in: "flip", out: "flip" },
  { in: "tada", out: "tada" },
];

const UserDescriptionTitle = ({ setIsTitleAnimationFinished }) => {
  const [animationInIndexState, setAnimationInIndexState] = useState(0);

  const animationOptions = {
    loop: true,
    in: {
      effect: selectedAnimationEffects[animationInIndexState]?.in,
      delay: 25,
    },
    out: {
      effect: selectedAnimationEffects[animationInIndexState]?.out,
      delay: 25,
      callback: () => {
        changeAnimationEffect();
        setIsTitleAnimationFinished(true);
      },
    },
  };

  const changeAnimationEffect = () => {
    setAnimationInIndexState((currentIndex) => {
      const nextAnimationIndexOrReset =
        currentIndex >= selectedAnimationEffects.length - 1
          ? 0
          : currentIndex + 1;
      const nextValue = nextAnimationIndexOrReset;
      return nextValue;
    });
  };

  return (
    <div>
      <St.UserDescriptionTitleSt>
        <Textillate key={animationInIndexState} option={animationOptions}>
          {HERO_APP_DESCRIPTION.text}
        </Textillate>
      </St.UserDescriptionTitleSt>
    </div>
  );
};
export default UserDescriptionTitle;
