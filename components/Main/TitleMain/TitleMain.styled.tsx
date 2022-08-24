import styled from "@emotion/styled";
import { StyledTitleSection } from "styles/StyledReusable.styled";

export const ProjectsTitle = styled(StyledTitleSection)`
  svg {
    margin: auto 0;
    width: 22px;
    margin-left: 5px;
    cursor: pointer;
  }
`;

export const ProjectsTitleWrapper = styled.div``;

export const ProjectsInfoPopup = styled.div`
  background-color: #ffffff73;
  width: max-content;
  padding: 10px;
  border-radius: 5px;
  color: black;
`;

export const BsInfoWrapper = styled.span`
  display: inline-flex;
`;

export const BsInfoText = styled.p`
  svg {
    margin-left: 2px;
    fill: #f6756e;
    font-size: 18px;
  }
`;
