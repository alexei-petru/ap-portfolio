import styled from "@emotion/styled";
import { StyledTitleSection } from "styles/StyledReusable.styled";

export const Footer = styled.footer``;

export const FooterInnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 500px;
  width: 100%;
`;

export const FooterTitle = styled(StyledTitleSection)``;

export const FormWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  display: flex;
  .leaflet-container {
    height: 400px;
    width: 50%;
    min-width: 300px;
  }
  .leaflet-control-zoom span {
    color: black;
  }
  .leaflet-popup-content {
    color: black;
  }
  .leaflet-popup-close-button span {
    color: black;
  }
`;

export const Form = styled.form`
  color: white;
  input,
  textarea {
    color: black;
  }
`;
