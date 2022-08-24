import ApodDescription from "components/Header/Hero/ApodDescription";
import * as St from "components/Header/Hero/Hero.styled";
import { HERO_AP_DESCRIPTION } from "data/localData";
import Image from "next/image";

const Hero = () => {
  return (
    <St.Hero>
      <St.AvatarWrapper>
        <Image objectFit="contain" layout="fill" src={"/me.png"} priority />
      </St.AvatarWrapper>
      <St.UserDescription>
        {HERO_AP_DESCRIPTION.map((word) => (
          <span>
            {word}
            {"\u00A0"}
          </span>
        ))}
      </St.UserDescription>
      <ApodDescription />
    </St.Hero>
  );
};

export default Hero;
