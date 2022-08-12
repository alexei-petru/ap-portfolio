import styled, { createGlobalStyle } from "styled-components";

export const Main = styled.main`
  padding: 50px;
`;

export const CardsSection = styled.div`
  padding: 100px 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 300px));
  justify-content: center;
  align-content: center;
  grid-gap: 20px;
  background-color: black; 
`;

export const ProjectsTitle = styled.h2`
  font-family: monoton;
  font-size: clamp(16px, 6vw, 32px);
  font-weight: 500;
  text-align: center;
`;

export const CardWrapper = styled.div`
  z-index: 1;
`;
