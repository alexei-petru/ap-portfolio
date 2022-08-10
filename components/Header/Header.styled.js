import styled from "styled-components";
import {
  headerBackgroundColor,
  headerBackgroundFilter,
  maxDeviceHeight,
} from "constants/constants";
headerBackgroundColor;

export const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  max-height: ${maxDeviceHeight};
`;

export const StyledHeaderImageWrapper = styled.div`
  filter: ${headerBackgroundFilter};
  /* background-color: ${headerBackgroundColor}; */
  position: absolute;
  height: 100%;
  width: 100%;
  max-height: 1080px;
  max-width: 2440px;
  z-index: 1;
`;
