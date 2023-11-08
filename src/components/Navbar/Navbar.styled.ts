import styled from "@emotion/styled";
import {
  var_NavbarBackgroundColor,
  var_NavbarHeight,
} from "src/constants-types/cssVariables";

export const Navbar = styled.nav`
  position: relative;
  z-index: 2;
  width: 100%;

  ul {
    height: ${var_NavbarHeight};
    width: 100%;
    margin-top: 0;
    border-radius: 0 0 10px 10px;
    padding: 40px;
    background-color: ${var_NavbarBackgroundColor};
    display: flex;
    justify-content: flex-end;
    align-items: center;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
      padding: 2px;
    }
  }

  li {
    list-style: none;
    font-size: 20px;
    white-space: nowrap;
    margin-left: 20px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMedium}) {
      font-size: 16px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
      font-size: 14px;
      white-space: normal;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    padding: 0;
  }
`;

export const LogoWrapper = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 0;
  margin-right: auto;

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
