import React from "react";
import { AiFillGithub } from "react-icons/ai";
import * as St from "src/components/Navbar/Navbar.styled";
import { StyledContainer } from "src/styles/Container.styled";

const Navbar = () => {
  return (
    <St.NavbarBackground>
      <StyledContainer>
        <St.Navbar>
          <St.LogoWrapper>
            <li>A.P. Portfolio</li>
          </St.LogoWrapper>
          <menu>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a
                rel="noreferrer"
                href="https://github.com/alexei-petru"
                target={"_blank"}
              >
                <AiFillGithub />
              </a>
            </li>
          </menu>
        </St.Navbar>
      </StyledContainer>
    </St.NavbarBackground>
  );
};

export default Navbar;
