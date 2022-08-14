import { StyledContainer } from "../../styles/Container.styled";
import Hero from "./Hero/Hero";
import Navbar from "./Navbar/Navbar";
import { StyledHeader } from "./Header.styled";
import HeaderBackground from "components/Header/HeaderBackground";

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
