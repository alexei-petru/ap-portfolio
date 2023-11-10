import styled from "@emotion/styled";
import { var_NavbarBackgroundFilter } from "src/constants-types/cssVariables";

export const EntrySection = styled.header`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const EntrySectionImageWrapper = styled.div`
  position: absolute;
  filter: ${var_NavbarBackgroundFilter};
  opacity: 0.5;
  width: 100%;
  height: 100%;
  top: 0;
  max-width: ${({ theme }) => theme.breakpoints.desktopQHD};
  z-index: 1;
`;
