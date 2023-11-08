import styled from "@emotion/styled";
import { BREAKPOINTS_APP, CARD_SIZE } from "src/constants-types/constants";

export const Main = styled.main`
  position: relative;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.breakpoints.desktopQHD};
  background-color: #000000c4;
`;

export const MainInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 40px 10px 50px;
`;

export const CardsSection = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  gap: 50px;
  justify-content: space-around;
  align-content: space-evenly;
  grid-template-columns: repeat(auto-fill, ${CARD_SIZE.width}px);
  grid-template-rows: repeat(auto-fill, ${CARD_SIZE.height}px);

  @media (max-width: ${BREAKPOINTS_APP.tabletPortrait}) {
    justify-items: center;
    grid-template-columns: 1fr;
  }
`;
