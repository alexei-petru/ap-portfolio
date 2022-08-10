import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { StyledNavbar } from "components/Navbar/Navbar.styled";

const Navbar = () => {
  return (
    <StyledNavbar>
      <div>
        <li>A.P.</li>
      </div>
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
    </StyledNavbar>
  );
};

export default Navbar;
