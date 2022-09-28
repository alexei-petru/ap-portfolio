import styled from "@emotion/styled";
import { var_ContactItemHeight, var_ContactItemWidth } from "constants/cssVariables";

export const MapWrapper = styled.div`
  position: relative;
  height: ${var_ContactItemHeight};;
  display: flex;
  color: black;
  .leaflet-container {
    width: ${var_ContactItemWidth};
    height: ${var_ContactItemHeight};
    min-width: 300px;
  }
  .leaflet-control-zoom span {
    color: inherit;
  }
  .leaflet-popup-content {
    color: inherit;
  }
  .leaflet-popup-close-button span {
    color: inherit;
  }
  .leaflet-popup-content-wrapper {
  }
`;
