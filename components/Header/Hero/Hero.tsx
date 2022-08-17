import React from "react";
import Image from "next/image";
import {
  StyledHero,
  StyledApodDescription,
  StyledAvatarWrapper,
  StyledUserDescription,
  StyledApodParagraph,
} from "components/Header/Hero/Hero.styled";

import { HERO_AP_DESCRIPTION } from "data/localData";

const Hero = () => {
  return (
    <StyledHero>
      <StyledAvatarWrapper>
        <Image objectFit="contain" layout="fill" src={"/me.png"} />
      </StyledAvatarWrapper>
      <StyledUserDescription>
        {HERO_AP_DESCRIPTION.map((word) => (
          <span>
            {word}
            {"\u00A0"}
          </span>
        ))}
      </StyledUserDescription>
      <StyledApodDescription>
        <a href="#">
          <Image
            style={{ opacity: 0.5 }}
            width={94}
            height={68}
            src={"/planet.png"}
          />
          <StyledApodParagraph>APOD Dynamic Image</StyledApodParagraph>
        </a>
      </StyledApodDescription>
    </StyledHero>
  );
};

export default Hero;
