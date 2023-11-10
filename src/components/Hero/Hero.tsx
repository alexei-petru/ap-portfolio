import Image from "next/image";
import { useState } from "react";
import * as St from "src/components/Hero/Hero.styled";
import { BREAKPOINTS_APP } from "src/constants-types/constants";
import { HERO_APP_DESCRIPTION } from "src/data/localData";
import { StyledContainer } from "src/styles/Container.styled";
import { IApodData } from "../EntrySection/EntrySection";

import React from "react";
import dynamic from "next/dynamic";

// fix for LCP:  setting opacity to 0 will greatly decrease LCP
const UserDescriptionTitleLazy = dynamic(
  () => import("./UserDescriptionTitle/UserDescriptionTitle"),
  {
    ssr: false,
    loading: () => (
      <h1 style={{ opacity: 0.01, zIndex: -1 }}>{HERO_APP_DESCRIPTION.text}</h1>
    ),
  },
);

interface IHeroProps extends React.PropsWithChildren {
  entrySectionBackgroundData: IApodData;
}

export const avatarAnimationNames = {
  entry: "entry",
  second: "second",
  third: "third",
} as const;

export type AvatarAnimationKeys =
  (typeof avatarAnimationNames)[keyof typeof avatarAnimationNames];

const Hero = ({
  entrySectionBackgroundData: headerBackgroundData,
}: IHeroProps) => {
  const [currentAnimation, setCurrentAnimation] = useState<AvatarAnimationKeys>(
    avatarAnimationNames.entry,
  );

  const setCurrentAnimationHandler = () => {
    if (currentAnimation === avatarAnimationNames.entry) {
      setCurrentAnimation(avatarAnimationNames.second);
      return;
    }
    if (currentAnimation === avatarAnimationNames.second) {
      setCurrentAnimation(avatarAnimationNames.third);
      return;
    }
    if (currentAnimation === avatarAnimationNames.third) {
      setCurrentAnimation(avatarAnimationNames.second);
      return;
    }
  };

  return (
    <StyledContainer>
      <St.Hero>
        <St.AvatarWrapper currentAnimation={currentAnimation}>
          <Image
            fill
            style={{ objectFit: "cover" }}
            sizes={`(max-width: ${BREAKPOINTS_APP.mobileMedium}) 80vw,
             (max-width: ${BREAKPOINTS_APP.tabletLandscape}) 50vw,
              33vw`}
            src={"/me.jpg"}
            priority
            alt="author image"
          />
        </St.AvatarWrapper>
        <St.UserDescriptionWrapper>
          <UserDescriptionTitleLazy
            setIsTitleAnimationFinished={setCurrentAnimationHandler}
          />
        </St.UserDescriptionWrapper>
        <St.ApodDescriptionSt headerBackgroundData={headerBackgroundData} />
      </St.Hero>
    </StyledContainer>
  );
};

export default Hero;
