import Image from "next/image";
import React from "react";
import { nasaImage } from "../../constants/constants";
import { StyledHeaderImageWrapper } from "./Header.styled";

const HeroBackground = () => {
  return (
    <StyledHeaderImageWrapper>
      <Image
        style={{ zIndex: "0" }}
        layout="fill"
        objectFit="cover"
        objectPosition={"center"}
        src={nasaImage}
      />
    </StyledHeaderImageWrapper>
  );
};

export default HeroBackground;
