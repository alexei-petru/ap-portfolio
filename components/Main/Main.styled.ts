import styled from "styled-components";

export const Main = styled.main`
  padding: 50px;
`;

export const CardsSection = styled.div`
  padding: 100px 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 300px));
  justify-content: center;
  justify-items: center;
  align-content: center;
  grid-gap: 50px 0;
  background-color: black;
`;

export const ProjectsTitle = styled.h2`
  font-family: monoton;
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

export const CardWrapper = styled.div`
  z-index: 1;
`;
