import React from "react";
import Image from "next/image";
import StyledHero from "./Hero.styled";
import AvatarWrapper from "./AvatarWrapper.styled";
import StyledUserDescription from "./UserDescription.styled";
import StyledApodDescription from "./ApodDescription.styled";
import StyledApodParagraph from "./ApodParagraph.styled";

const Hero = () => {
  return (
    <StyledHero>
      <AvatarWrapper>
        <Image objectFit="contain" layout="fill" src={"/me.png"} />
      </AvatarWrapper>
      <StyledUserDescription>
        Hello, my name is Alexei Petru and i am a frontend developer.
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
