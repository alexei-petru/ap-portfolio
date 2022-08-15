import styled from "styled-components";
import {
  headerBackgroundColor,
  headerBackgroundFilter,
  maxDeviceHeight,
} from "constants/constants";
headerBackgroundColor;

export const Header = styled.header`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
  max-height: ${maxDeviceHeight};
`;

export const HeaderImageWrapper = styled.div`
  filter: ${headerBackgroundFilter};
  position: absolute;
  height: 100%;
  width: 100%;
  max-width: 2440px;
  z-index: 1;
`;
