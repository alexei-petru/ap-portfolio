import styled from "@emotion/styled";

export const Main = styled.main`
  position: relative;
  margin-bottom: 50px;
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
