import React from "react";
import { AiFillGithub } from "react-icons/ai";
import * as St from "components/Header/Navbar/Navbar.styled";

const Navbar = () => {
  return (
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
  );
};

export default Navbar;
