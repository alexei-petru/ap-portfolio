import styled from "@emotion/styled";
import {
  headerBackgroundColor,
  headerBackgroundFilter,
  maxDeviceHeight,
} from "constants/constants";
headerBackgroundColor;

export const Header = styled.header<{ height: number }>`
  display: flex;
  justify-content: center;
  width: 100%;
  height: ${(props) =>
    props.height > maxDeviceHeight
      ? maxDeviceHeight + "px"
      : props.height + `px`};
  min-height: 680px;
`;

export const HeaderImageWrapper = styled.div`
  filter: ${headerBackgroundFilter};
  position: absolute;
  height: 100%;
  width: 100%;
  max-width: 2440px;
  z-index: 1;
`;
