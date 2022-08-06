import Image from "next/image";
import React from "react";
import { headerBackgroundFilter, nasaImage } from "../../constants/constants";
import StyledContainer from "../../styles/Container.styled";
import StyledHeader from "../Header/Header.styled";
import Hero from "../Hero/Hero";
import HeroBackground from "../Hero/HeroBackground";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <header>
      <StyledHeader>
        <HeroBackground />
      </StyledHeader>
      <StyledContainer>
        <Navbar />
        <Hero />
      </StyledContainer>
    </header>
  );
};

export default Header;
