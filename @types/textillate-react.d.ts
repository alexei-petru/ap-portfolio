import { Component } from "react";

declare module "textillate-react" {
  /**
   * Shared animation effects common to both 'in' and 'out' animations
   */
  export type SharedAnimationEffect =
    | "flash"
    | "bounce"
    | "shake"
    | "tada"
    | "swing"
    | "wobble"
    | "pulse"
    | "flip";

  /**
   * Animation effects specifically for 'in' animations
   */
  export type AnimationEffectIn =
    | SharedAnimationEffect
    | "flipInX"
    | "flipInY"
    | "fadeIn"
    | "fadeInUp"
    | "fadeInDown"
    | "fadeInLeft"
    | "fadeInRight"
    | "fadeInUpBig"
    | "fadeInDownBig"
    | "fadeInLeftBig"
    | "fadeInRightBig"
    | "bounceIn"
    | "bounceInDown"
    | "bounceInUp"
    | "bounceInLeft"
    | "bounceInRight"
    | "rotateIn"
    | "rotateInDownLeft"
    | "rotateInDownRight"
    | "rotateInUpLeft"
    | "rotateInUpRight"
    | "rollIn";

  /**
   * Animation effects specifically for 'out' animations
   */
  export type AnimationEffectOut =
    | SharedAnimationEffect
    | "flipOutX"
    | "flipOutY"
    | "fadeOut"
    | "fadeOutUp"
    | "fadeOutDown"
    | "fadeOutLeft"
    | "fadeOutRight"
    | "fadeOutUpBig"
    | "fadeOutDownBig"
    | "fadeOutLeftBig"
    | "fadeOutRightBig"
    | "bounceOut"
    | "bounceOutDown"
    | "bounceOutUp"
    | "bounceOutLeft"
    | "bounceOutRight"
    | "rotateOut"
    | "rotateOutDownLeft"
    | "rotateOutDownRight"
    | "rotateOutUpLeft"
    | "rotateOutUpRight"
    | "hinge"
    | "rollOut";

  interface AnimationSettings<T> {
    /**
     *  set the effect name
     */
    effect?: T;

    /**
     * set the delay factor applied to each consecutive character
     */
    delayScale?: number;

    /**
     * set the delay between each character
     */
    delay?: number;

    /**
     * set to true to animate all the characters at the same time
     */
    sync?: boolean;

    /**
     * randomize the character sequence
     * (note that shuffle doesn't make sense with sync = true)
     */
    shuffle?: boolean;

    /**
     * reverse the character sequence
     * (note that reverse doesn't make sense with sync = true)
     */
    reverse?: boolean;

    /**
     * Callback that executes once the animation has finished
     */
    callback?: () => void;
  }

  export type AnimationSettingsIn = AnimationSettings<AnimationEffectIn>;
  export type AnimationSettingsOut = AnimationSettings<AnimationEffectOut>;
  export interface AnimationOptions {
    /**
     *The default selector to use when detecting multiple texts to animate
     */
    selector?: string;

    /**
     * Enable looping
     */
    loop?: boolean;

    /**
     *  Sets the minimum display time for each text before it is replaced
     */
    minDisplayTime?: number;

    /**
     * Sets the initial delay before starting the animation
     * (note that depending on the in effect you may need to manually apply
     * visibility: hidden to the element before running this plugin)
     */
    initialDelay?: number;

    /**
     * Set whether or not to automatically start animating
     */
    autoStart?: boolean;

    /**
     * Custom set of 'in' effects. This affects whether or not the
     * character is shown/hidden before or after an animation.
     */
    inEffects?: AnimationEffectIn[];

    /**
     *  Custom set of 'out' effects
     */
    outEffects?: AnimationEffectOut[];

    /**
     *  In animation settings
     */
    in?: AnimationSettingsIn;

    /**
     *   Out animation settings
     */
    out?: AnimationSettingsOut;

    /**
     *   Callback that executes once textillate has finished
     */
    callback?: () => void;

    /**
     *  Set the type of token to animate (available types: 'char' and 'word')
     */
    type?: "char" | "word";
  }

  export type TextillateEventType =
    /**
     * triggered when textillate starts
     */
    | "start.tlt"
    /**
     * triggered when the in animation begins
     */
    | "inAnimationBegin.tlt"
    /**
     * triggered when the in animation ends
     */
    | "inAnimationEnd.tlt"
    /**
     * triggered when the out animation begins
     */
    | "outAnimationBegin.tlt"
    /**
     * triggered when the out animation ends
     */
    | "outAnimationEnd.tlt"
    /**
     * triggered when textillate ends
     */
    | "end.tlt";

  export interface TextillateController {
    /**
     * Manually start/restart textillate
     */
    start: () => void;
    /**
     * Manually pause/stop textillate
     */
    stop: () => void;
    /**
     * Trigger the current text's in animation
     */
    in: () => void;
    /**
     * Trigger the current text's out animation
     */
    out: () => void;
    on: (
      event: TextillateEventType,
      callback: (e: TextillateEventObject) => void
    ) => void;
  }

  export interface TextillateEventObject {
    eventType: TextillateEventType;
    target: HTMLElement;
  }

  export interface TextillateProps {
    option?: AnimationOptions;
    controller?: (controller: TextillateController) => void;
    children?: React.ReactNode;
  }

  export class Textillate extends Component<TextillateProps> {}
}
