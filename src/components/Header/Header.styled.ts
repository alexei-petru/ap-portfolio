import styled from "@emotion/styled";
import { maxDeviceHeight } from "src/constants/constants";
import {
  var_headerBackgroundFilter,
  var_headerNavbarBackgroundColor,
  var_HeaderNavbarHeight,
} from "src/constants/cssVariables";

export const Header = styled.header<{ height: number }>`
  display: flex;
  justify-content: center;
  width: 100%;
  height: ${(props) =>
    props.height > maxDeviceHeight
      ? maxDeviceHeight + "px"
      : props.height + `px`};
  min-height: 680px;
  margin-bottom: 50px;
`;

export const HeaderImageWrapper = styled.div`
  filter: ${var_headerBackgroundFilter};
  position: absolute;
  height: 100%;
  width: 100%;
  max-width: 2440px;
  z-index: 1;
`;

export const HeaderNavbarBackground = styled.div`
  width: 100%;
  height: ${var_HeaderNavbarHeight};
  background-color: ${var_headerNavbarBackgroundColor};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
`;
