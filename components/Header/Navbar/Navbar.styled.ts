import styled from "@emotion/styled";
import {
  var_headerNavbarBackgroundColor,
  var_HeaderNavbarHeight,
} from "constants/cssVariables";

export const Navbar = styled.nav`
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${var_headerNavbarBackgroundColor};
  padding: 10px;
  margin-top: 0;
  min-height: ${var_HeaderNavbarHeight};

  li {
    list-style: none;
    font-size: 20px;
  }

  menu {
    display: flex;
    justify-content: space-between;

    li {
      margin-left: 20px;
    }
  }
`;

export const LogoWrapper = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 0;

  img {
    width: auto;
    height: 50px;
  }
`;
