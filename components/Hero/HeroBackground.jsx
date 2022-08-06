import React from "react";
import Image from "next/image";
import { headerBackgroundFilter, nasaImage } from "../../constants/constants";
import StyledHeroImageWrapper from "./HeroImageWrapper.styled";

const HeroBackground = () => {
  return (
    <StyledHeroImageWrapper>
      <Image
        style={{ zIndex: "0" }}
        layout="fill"
        objectFit="contain"
        objectPosition={"center"}
        src={nasaImage}
      />
    </StyledHeroImageWrapper>
  );
};

export default HeroBackground;
