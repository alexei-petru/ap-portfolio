import styled from "@emotion/styled";
import {
  var_NavbarBackgroundColor,
  var_NavbarHeight,
} from "src/constants/cssVariables";

export const Navbar = styled.nav`
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${var_NavbarBackgroundColor};
  padding: 40px;
  margin-top: 0;
  height: ${var_NavbarHeight};
  border-radius: 0 0 10px 10px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    padding: 0;
  }

  li {
    list-style: none;
    font-size: 20px;
    white-space: nowrap;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMedium}) {
      font-size: 16px;
    }
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

export const NavbarBackground = styled.div`
  width: 100%;
  height: ${var_NavbarHeight};
  background-color: ${var_NavbarBackgroundColor};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
`;
