import styled from "styled-components";
import { headerBackgroundColor } from "../../constants/constants";

export const StyledNavbar = styled.nav`
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  background-color: ${headerBackgroundColor};
  padding: 20px;
  margin-top: 0;
  border: 2px solid red;

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
