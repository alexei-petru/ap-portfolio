import styled from "@emotion/styled";
import { StyledTitleSection } from "styles/StyledReusable.styled";

export const Footer = styled.footer``;

export const FooterTitle = styled(StyledTitleSection)``;

export const FooterInnerWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 100px;
`;

export const MapWrapper = styled.div`
  position: relative;
  height: 400px;
  display: flex;
  color: black;
  margin-right: 20px;
  .leaflet-container {
    height: 400px;
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
`;

export const Form = styled.form`
  color: white;
  input,
  textarea {
    color: black;
  }
`;

export const footerCopyright = styled.p`
  text-align: center;
  padding: 20px;
`;
