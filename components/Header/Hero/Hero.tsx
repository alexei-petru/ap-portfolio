import React from "react";
import Image from "next/image";
import * as St from "components/Header/Hero/Hero.styled";

import { HERO_AP_DESCRIPTION } from "data/localData";

const Hero = () => {
  return (
    <St.Hero>
      <St.AvatarWrapper>
        <Image objectFit="contain" layout="fill" src={"/me.png"} />
      </St.AvatarWrapper>
      <St.UserDescription>
        {HERO_AP_DESCRIPTION.map((word) => (
          <span>
            {word}
            {"\u00A0"}
          </span>
        ))}
      </St.UserDescription>
      <St.ApodDescription>
        <a href="#">
          <Image
            style={{ opacity: 0.5 }}
            width={94}
            height={68}
            src={"/planet.png"}
          />
          <St.ApodParagraph>APOD Dynamic Image</St.ApodParagraph>
        </a>
      </St.ApodDescription>
    </St.Hero>
  );
};

export default Hero;
