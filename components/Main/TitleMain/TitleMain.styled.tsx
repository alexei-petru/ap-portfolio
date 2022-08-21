import styled from "@emotion/styled";

export const ProjectsTitle = styled.h2`
  font-family: "monoton", "Times New Roman", Times, serif;
  font-size: clamp(25px, 5vw, 33px);
  font-weight: 500;
  text-align: center;
  letter-spacing: 3px;

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
