import Image from "next/image";
import React from "react";
import { IApodData } from "./Header";
// import { IHeaderBackgroundImage } from "components/Header/Header";
import * as St from "./Header.styled";

interface IHeaderBackgroundProps extends React.PropsWithChildren {
  headerBackgroundImage: IApodData;
}

const HeaderBackground = ({
  headerBackgroundImage,
}: IHeaderBackgroundProps) => {
  return (
    <St.HeaderImageWrapper>
      {headerBackgroundImage.url && (
        <Image
          style={{ zIndex: "0" }}
          layout="fill"
          objectFit="cover"
          objectPosition={"center"}
          src={headerBackgroundImage.url}
          alt={headerBackgroundImage.title}
        />
      )}
    </St.HeaderImageWrapper>
  );
};

export default HeaderBackground;
