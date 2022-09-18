import Image from "next/image";
import { IServerResponse } from "pages/api/types";
import React, { useEffect } from "react";
import { nasaImage } from "../../constants/constants";
import * as St from "./Header.styled";



const HeaderBackground = () => {
  useEffect(() => {
    const getBackgroundImage = async () => {
      const response = await fetch("/api/headerBackground/headerBackground");
      const responseData: IServerResponse = await response.json();
      console.log("responseData", responseData);
    };
    try {
      getBackgroundImage();
    } catch (error) {
      console.log("error", error);
    }
  }, []);

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

export default HeaderBackground;
