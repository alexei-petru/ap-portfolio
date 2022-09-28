import ApodDescription from "components/Header/Hero/ApodDescription";
import * as St from "components/Header/Hero/Hero.styled";
import { HERO_AP_DESCRIPTION } from "data/localData";
import Image from "next/image";

const Hero = ({ headerBackgroundData }) => {
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
      <St.UserDescriptionWrapper>
        {HERO_AP_DESCRIPTION.map((word, i) => (
          <St.UserDescriptionWord
            style={{
              animation: `fade-in 0.8s ${Math.trunc(i / 10)}.${
                i % 10
              }s forwards cubic-bezier(0.11, 0, 0.5, 0);`,
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
