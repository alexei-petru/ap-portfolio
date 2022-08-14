import styled from "styled-components";
import { headerNavbarBackgroundColor } from "../../../constants/constants";

export const StyledNavbar = styled.nav`
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  background-color: ${headerNavbarBackgroundColor};
  padding: 20px;
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
