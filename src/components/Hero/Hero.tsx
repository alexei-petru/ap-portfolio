import * as St from "src/components/Hero/Hero.styled";
import { HERO_AP_DESCRIPTION } from "src/data/localData";
import Image from "next/image";
import { IApodData } from "../EntrySection/EntrySection";
import { StyledContainer } from "src/styles/Container.styled";
import { BREAKPOINTS_APP } from "src/constants/constants";

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
          {HERO_AP_DESCRIPTION.map((word, i) => (
            <St.UserDescriptionWord
              style={{
                animation: `fade-in 0.8s ${Math.trunc(i / 10)}.${
                  i % 10
                }s forwards cubic-bezier(0.11, 0, 0.5, 0)`,
              }}
              key={i + word}
            >
              {word}
              {"\u00A0"}
            </St.UserDescriptionWord>
          ))}
        </St.UserDescriptionWrapper>
        <St.ApodDescriptionSt headerBackgroundData={headerBackgroundData} />
      </St.Hero>
    </StyledContainer>
  );
};

export default Hero;
