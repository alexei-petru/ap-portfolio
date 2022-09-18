import ApodDescription from "components/Header/Hero/ApodDescription";
import * as St from "components/Header/Hero/Hero.styled";
import { HERO_AP_DESCRIPTION } from "data/localData";
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
          src={"/me.png"}
          priority
          alt="author image"
        />
      </St.AvatarWrapper>
      <St.UserDescription>
        {HERO_AP_DESCRIPTION.map((word, i) => (
          <span key={i + word}>
            {word}
            {"\u00A0"}
          </span>
        ))}
      </St.UserDescription>
      <ApodDescription headerBackgroundData={headerBackgroundData} />
    </St.Hero>
  );
};

export default Hero;
