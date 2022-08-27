import Image from "next/image";
import React from "react";
import { nasaImage } from "../../constants/constants";
import * as St from "./Header.styled";

const HeroBackground = () => {
  return (
    <St.HeaderImageWrapper>
      <Image
        style={{ zIndex: "0" }}
        layout="fill"
        objectFit="cover"
        objectPosition={"center"}
        src={nasaImage}
        alt="apod Image"
      />
    </St.HeaderImageWrapper>
  );
};

export default HeroBackground;
