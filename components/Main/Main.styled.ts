import styled from "styled-components";
import "@fontsource/monoton";

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

export const CardWrapper = styled.div`
  z-index: 1;
`;
