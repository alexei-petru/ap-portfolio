import styled, { createGlobalStyle } from "styled-components";

export const Main = styled.main``;

export const CardsSection = styled.div`
  padding: 100px 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 300px));
  justify-content: center;
  align-content: center;
  grid-gap: 4vw;
  background-color: black;
`;

export const CardWrapper = styled.div`
  z-index: 1;
`;
