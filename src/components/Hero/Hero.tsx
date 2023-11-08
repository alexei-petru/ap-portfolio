import * as St from "src/components/Hero/Hero.styled";
import Image from "next/image";
import { IApodData } from "../EntrySection/EntrySection";
import { StyledContainer } from "src/styles/Container.styled";
import { BREAKPOINTS_APP } from "src/constants-types/constants";
import { HERO_APP_DESCRIPTION } from "src/data/localData";

interface IHeroProps extends React.PropsWithChildren {
  entrySectionBackgroundData: IApodData;
}

const Hero = ({
  entrySectionBackgroundData: headerBackgroundData,
}: IHeroProps) => {
  return (
    <StyledContainer>
      <St.Hero>
        <St.AvatarWrapper>
          <Image
            sizes={`(max-width: ${BREAKPOINTS_APP.mobileMedium}) 100vw,
             (max-width: ${BREAKPOINTS_APP.tabletLandscape}) 50vw,
              33vw`}
            fill
            src={"/me.jpg"}
            priority
            alt="author image"
          />
        </St.AvatarWrapper>
        <St.UserDescriptionWrapper>
          {HERO_APP_DESCRIPTION.text}
        </St.UserDescriptionWrapper>
        <St.ApodDescriptionSt headerBackgroundData={headerBackgroundData} />
      </St.Hero>
    </StyledContainer>
  );
};

export default Hero;
