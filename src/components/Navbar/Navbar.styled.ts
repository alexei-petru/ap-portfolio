import styled from "@emotion/styled";
import { AiFillGithub } from "react-icons/ai";
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
    padding: 20px;
    background-color: ${var_NavbarBackgroundColor};
    display: flex;
    justify-content: flex-end;
    align-items: center;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMedium}) {
      padding: 5px;
    }
  }

  li {
    list-style: none;
    font-size: 20px;
    white-space: nowrap;
    margin-left: 20px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMedium}) {
      font-size: 18px;
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
      font-size: 16px;
    }
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

export const GithubLogoWrapper = styled.li`
  min-height: 25px;
  min-width: 25px;
`;

export const GithubLogoLink = styled.a`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const GithubLogoSvg = styled(AiFillGithub)`
  width: 100%;
  height: 100%;
`;
