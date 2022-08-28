import styled from "@emotion/styled";

export const MapWrapper = styled.div`
  position: relative;
  height: var(--contact-item-size);
  display: flex;
  color: black;
  .leaflet-container {
    width: 50%;
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
