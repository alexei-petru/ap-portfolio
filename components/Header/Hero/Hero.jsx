import React from "react";
import Image from "next/image";
import {
  StyledHero,
  StyledApodDescription,
  StyledAvatarWrapper,
  StyledUserDescription,
  StyledApodParagraph,
} from "components/Header/Hero/Hero.styled";

const Hero = () => {
  return (
    <StyledHero>
      <StyledAvatarWrapper>
        <Image objectFit="contain" layout="fill" src={"/me.png"} />
      </StyledAvatarWrapper>
      <StyledUserDescription>
        <span>Hello{'\u00A0'}</span> 
        <span>my{'\u00A0'}</span>
        <span>name{'\u00A0'}</span>
        <span>is{'\u00A0'}</span>
        <span>Alexei{'\u00A0'}</span>
        <span>Petru{'\u00A0'}</span>
        <span>and{'\u00A0'}</span>
        <span>i{'\u00A0'}</span>
        <span>am,{'\u00A0'}</span>
        <span>self-taught{'\u00A0'}</span>
        <span>frontend{'\u00A0'}</span>
        <span>developer.</span>
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
