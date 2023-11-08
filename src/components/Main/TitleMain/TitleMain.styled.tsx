import styled from "@emotion/styled";
import { BsInfoCircle } from "react-icons/bs";
import { StyledTitleSection } from "src/styles/StyledReusable.styled";

export const ProjectsTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 26px 0 42px 0;
`;

export const ProjectsTitle = styled(StyledTitleSection)`
  svg {
    margin: auto 0;
    width: 22px;
    margin-left: 5px;
    cursor: pointer;
  }
`;

export const ProjectsInfoPopup = styled.div`
  background-color: #ffffff73;
  width: max-content;
  padding: 10px;
  border-radius: 5px;
  color: black;
`;

export const InfoBtn = styled.button`
  display: inline-flex;
  align-items: center;
  background-color: transparent;
  border: 0;
  width: fit-content;
  margin-left: 10px;
`;

export const BsInfoCircleSt = styled(BsInfoCircle)`
  :hover {
    scale: 1.15;
    cursor: pointer;
    transition: scale 0.1s;
  }
`;
