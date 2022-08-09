import React from "react";
import Image from "next/image";
import {
  StyledHero,
  StyledApodDescription,
  StyledAvatarWrapper,
  StyledUserDescription,
  StyledApodParagraph,
} from "./Hero.styled";

const Hero = () => {
  return (
    <StyledHero>
      <StyledAvatarWrapper>
        <Image objectFit="contain" layout="fill" src={"/me.png"} />
      </StyledAvatarWrapper>
      <StyledUserDescription>
        Hello, my name is Alexei Petru and i am self-taught  frontend developer.
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
      {/* <Card className="card"></Card> */}
      {/* <CardStyles /> */}
    </StyledHero>
  );
};

export default Hero;
