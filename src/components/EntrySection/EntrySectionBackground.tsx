import Image from "next/image";
import React from "react";
import { IApodData } from "./EntrySection";
import * as St from "./EntrySection.styled";
import { BREAKPOINTS_APP } from "src/constants-types/constants";

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
          fill
          sizes={`max-width: ${BREAKPOINTS_APP.laptopMedium} 100vw, 50vw`}
          src={entrySectionBackgroundImage.url}
          alt={entrySectionBackgroundImage.title || ""}
          priority={true}
          style={{ objectFit: "cover", zIndex: "0" }}
        />
      )}
    </St.EntrySectionImageWrapper>
  );
};

export default EntrySectionBackground;
