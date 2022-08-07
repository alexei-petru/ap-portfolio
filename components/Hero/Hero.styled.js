import styled, { createGlobalStyle } from "styled-components";

export const CardStyles = createGlobalStyle`
.card{
    
} 
`;

export const StyledHero = styled.section`
  /* z-index: 1; */
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);
  height: 100vh;
  max-height: 1080px;
`;

export const StyledApodDescription = styled.div`
  z-index: 1;
  grid-row: 9 / span 3;
  grid-column: 1 / span 3;
`;

export const StyledAvatarWrapper = styled.div`
  z-index: 2;
  position: relative;
  width: clamp(138px, 20vw, 288px);
  height: clamp(144px, 20vw, 302px);
  border-radius: 10%;
  grid-row: 3 / span 3;
  grid-column: 9 / span 3;
  overflow: hidden;
`;

export const StyledUserDescription = styled.p`
  z-index: 1;
  font-size: clamp(16px, 8vw, 50px);
  grid-row: 5 / span 1;
  grid-column: 2 / span 6;
`;

export const StyledApodParagraph = styled.p`
  margin-top: -50px;
  z-index: 1;
`;
