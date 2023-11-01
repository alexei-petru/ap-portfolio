import Image from "next/image";
import React from "react";
import { IApodData } from "./EntrySection";
import * as St from "./EntrySection.styled";

interface IEntrySectionBackgroundProps extends React.PropsWithChildren {
  entrySectionBackgroundImage: IApodData;
}

const EntrySectionBackground = ({
  entrySectionBackgroundImage: entrySectionBackgroundImage,
}: IEntrySectionBackgroundProps) => {
  return (
    <St.EntrySectionImageWrapper>
      {entrySectionBackgroundImage.url && (
        <Image
          style={{ zIndex: "0" }}
          layout="fill"
          objectFit="cover"
          objectPosition={"center"}
          src={entrySectionBackgroundImage.url}
          alt={entrySectionBackgroundImage.title}
          priority={true}
        />
      )}
    </St.EntrySectionImageWrapper>
  );
};

export default EntrySectionBackground;
