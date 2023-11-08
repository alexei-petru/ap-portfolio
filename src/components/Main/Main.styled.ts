import styled from "@emotion/styled";
import { MAX_DEVICE_HEIGHT } from "src/constants/constants";

export const Main = styled.main`
  position: relative;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  height: 100vh;
  max-height: ${MAX_DEVICE_HEIGHT}px;
  max-width: ${({ theme }) => theme.breakpoints.desktopQHD};
  background-color: #000000c4;
`;

export const MainInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const CardsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 300px));
  justify-content: center;
  justify-items: center;
  align-content: center;
  grid-gap: 50px 0;

  @media (max-width: 735px) {
    grid-template-columns: 1fr;
  }
`;

export const CardWrapper = styled.div`
  z-index: 1;
  height: 439px;
  display: flex;
`;
