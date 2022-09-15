import styled from "@emotion/styled";

export const MapWrapper = styled.div`
  position: relative;
  height: var(--contact-item-height);
  display: flex;
  color: black;
  .leaflet-container {
    width: var(--contact-item-width);
    height: var(--contact-item-height);
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
