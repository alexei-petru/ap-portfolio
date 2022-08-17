import React from "react";
import { AiFillGithub } from "react-icons/ai";
import * as St from "components/Header/Navbar/Navbar.styled";

const Navbar = () => {
  return (
    <St.Navbar>
      <St.LogoWrapper>
        <li>A.P.</li>
        <img src="./work-in-progress.png" alt="work in progress" />
      </St.LogoWrapper>
      <menu>
        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="https://github.com/Allex191" target={"_blank"}>
            <AiFillGithub />
          </a>
        </li>
      </menu>
    </St.Navbar>
  );
};

export default Navbar;
