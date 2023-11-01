import styled from "@emotion/styled";
import { maxDeviceHeight } from "src/constants/constants";
import { var_NavbarBackgroundFilter } from "src/constants/cssVariables";

export const EntrySection = styled.header<{ height: number }>`
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

export const EntrySectionImageWrapper = styled.div`
  filter: ${var_NavbarBackgroundFilter};
  position: absolute;
  height: 100%;
  width: 100%;
  max-width: 2440px;
  z-index: 1;
`;
