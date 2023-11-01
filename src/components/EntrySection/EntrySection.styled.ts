import styled from "@emotion/styled";
import { maxDeviceHeight } from "src/constants/constants";
import { var_NavbarBackgroundFilter } from "src/constants/cssVariables";

export const EntrySection = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  max-height: ${maxDeviceHeight}px;
  margin-bottom: 50px;
`;

export const EntrySectionImageWrapper = styled.div`
  filter: ${var_NavbarBackgroundFilter};
  position: absolute;
  height: 100%;
  width: 100%;
  max-width: ${({ theme }) => theme.breakpoints.desktopQHD};
  z-index: 1;
`;
