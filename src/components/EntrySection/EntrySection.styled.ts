import styled from "@emotion/styled";
import { MAX_DEVICE_HEIGHT } from "src/constants/constants";
import { var_NavbarBackgroundFilter } from "src/constants/cssVariables";

export const EntrySection = styled.header`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  /* min-height: ${({ theme }) => theme.breakpoints.tabletPortrait};
  height: 100vh;
  max-height: ${MAX_DEVICE_HEIGHT}px; */
  margin-bottom: 50px;
`;

export const EntrySectionImageWrapper = styled.div`
  position: absolute;
  filter: ${var_NavbarBackgroundFilter};
  width: 100%;
  height: 100%;
  top: 0;
  max-width: ${({ theme }) => theme.breakpoints.desktopQHD};
  z-index: 1;
`;
