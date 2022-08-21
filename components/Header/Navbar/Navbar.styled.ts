import styled from "@emotion/styled";
import { headerNavbarBackgroundColor } from "../../../constants/constants";

export const Navbar = styled.nav`
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${headerNavbarBackgroundColor};
  padding: 10px;
  margin-top: 0;

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
