import ApodDescription from "src/components/Header/Hero/ApodDescription";
import * as St from "src/components/Header/Hero/Hero.styled";
import { HERO_AP_DESCRIPTION } from "src/data/localData";
import Image from "next/image";
import { IApodData } from "../Header";

interface IHeroProps extends React.PropsWithChildren {
  headerBackgroundData: IApodData;
}

const Hero = ({ headerBackgroundData }: IHeroProps) => {
  return (
    <St.Hero>
      <St.AvatarWrapper>
        <Image
          objectFit="contain"
          layout="fill"
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
      <ApodDescription headerBackgroundData={headerBackgroundData} />
    </St.Hero>
  );
};

export default Hero;
