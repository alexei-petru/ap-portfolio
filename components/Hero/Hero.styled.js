import styled, { createGlobalStyle } from "styled-components";

export const CardStyles = createGlobalStyle`
.card{
    
} 
`;

export const StyledHero = styled.section`
  /* z-index: 1; */
  display: grid;
  padding: 100px 0;

  grid-template-columns: repeat(12, 1fr);
  /* grid-template-rows: repeat(12, 5vw); */
  /* height: 100vh; */
  /* max-height: 1080px; */
`;

export const StyledApodDescription = styled.div`
  z-index: 1;
  grid-row: 4 / span 3;
  grid-column: 1 / span 3;
  margin-top: 50px;
`;

export const StyledAvatarWrapper = styled.div`
  z-index: 2;
  position: relative;
  width: clamp(138px, 17vw, 288px);
  height: clamp(144px, 17vw, 302px);
  border-radius: 10%;
  grid-row: 2 / span 3;
  grid-column: 9 / span 3;
  overflow: hidden;
`;

export const StyledApodParagraph = styled.p`
  margin-top: -50px;
  z-index: 1;
`;

export const StyledUserDescription = styled.h1`
  /* @import url('https://fonts.googleapis.com/css2?family=Monoton&display=swap'); */

  z-index: 1;
  font-size: clamp(16px, 6vw, 48px);
  grid-row: 3 / span 1;
  grid-column: 2 / span 6;
  font-family: monoton;
  text-align: center;
  transform: scale(0.9);
  animation: scale 3s forwards cubic-bezier(0.5, 1, 0.89, 1);
  font-weight: 400;
  letter-spacing: 1px;

  @keyframes scale {
    100% {
      transform: scale(1);
    }
  }

  span {
    display: inline-block;
    opacity: 0;
    filter: blur(4px);
  }

  span:nth-child(1) {
    animation: fade-in 0.8s 0.1s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }

  span:nth-child(2) {
    animation: fade-in 0.8s 0.2s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }

  span:nth-child(3) {
    animation: fade-in 0.8s 0.3s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }

  span:nth-child(4) {
    animation: fade-in 0.8s 0.4s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }

  span:nth-child(5) {
    animation: fade-in 0.8s 0.5s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }

  span:nth-child(6) {
    animation: fade-in 0.8s 0.6s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }

  span:nth-child(7) {
    animation: fade-in 0.8s 0.7s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }

  span:nth-child(8) {
    animation: fade-in 0.8s 0.8s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }

  span:nth-child(9) {
    animation: fade-in 0.8s 0.9s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }

  span:nth-child(10) {
    animation: fade-in 0.8s 1s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }

  span:nth-child(11) {
    animation: fade-in 0.8s 1.1s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }

  span:nth-child(12) {
    animation: fade-in 0.8s 1.2s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }

  span:nth-child(13) {
    animation: fade-in 0.8s 1.3s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }

  span:nth-child(14) {
    animation: fade-in 0.8s 1.4s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }

  span:nth-child(15) {
    animation: fade-in 0.8s 1.5s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }

  span:nth-child(16) {
    animation: fade-in 0.8s 1.6s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }

  span:nth-child(17) {
    animation: fade-in 0.8s 1.7s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }

  span:nth-child(18) {
    animation: fade-in 0.8s 1.8s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }

  @keyframes fade-in {
    100% {
      opacity: 1;
      filter: blur(0);
    }
  }
`;
