import { StyledContainer } from "../../styles/Container.styled";
import Hero from "./Hero/Hero";
import Navbar from "./Navbar/Navbar";
import * as St from "./Header.styled";
import HeaderBackground from "components/Header/HeaderBackground";

const Header = () => {
  return (
    <>
      <St.Header>
        <HeaderBackground />
        <StyledContainer>
          <Navbar />
          <Hero />
        </StyledContainer>
      </St.Header>
    </>
  );
};

export default Header;
