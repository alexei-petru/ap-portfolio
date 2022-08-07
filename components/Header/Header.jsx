import React from "react";
import { StyledContainer } from "../../styles/Container.styled";
import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";
import { StyledHeader } from "./Header.styled";
import HeaderBackground from "./HeaderBackground";
import { StyledMain } from "../Main/Main.styled";

const Header = () => {
  return (
    <>
      <StyledHeader>
        <HeaderBackground />
        <StyledContainer>
          <Navbar />
          <Hero />
        </StyledContainer>
      </StyledHeader>
    </>
  );
};

export default Header;
