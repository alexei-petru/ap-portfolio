import styled from "styled-components";
import {
  headerBackgroundColor,
  headerBackgroundFilter,
  maxDeviceHeight,
} from "../../constants/constants";
headerBackgroundColor;

export const StyledHeader = styled.section`
  position: absolute;
  background-color: ${headerBackgroundColor};
  filter: ${headerBackgroundFilter};
  width: 100%;
  height: 100%;
  max-height: ${maxDeviceHeight};
`;
export default StyledHeader;
