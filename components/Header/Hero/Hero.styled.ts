import styled from "styled-components";
import "@fontsource/monoton";

export const Hero = styled.section`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  /* grid-template-rows: repeat(12, calc(100vh / 12)); */
  max-height: 1080px;
  height: 100%;
`;

export const AvatarWrapper = styled.div`
  z-index: 2;
  position: relative;
  width: clamp(138px, 25vw, 288px);
  height: clamp(144px, 25vw, 199px);
  border-radius: 10%;
  grid-row: 4 / span 3;
  grid-column: 9 / span 2;
  overflow: hidden;
`;

export const ApodParagraphWrapper = styled.div``;

export const ApodDescription = styled.div`
  z-index: 1;
  grid-row: 7 / span 3;
  grid-column: 1 / span 3;
  cursor: pointer;
`;

export const ApodParagraph = styled.p`
  margin-top: -50px;
  z-index: 1;
`;

export const UserDescription = styled.h1`
  z-index: 1;
  font-size: clamp(16px, 5vw, 38px);
  grid-row: 5 / span 1;
  grid-column: 2 / span 6;
  font-family: "monoton", "Times New Roman", Times, serif;
  text-align: center;
  transform: scale(0.9);
  animation: scale 3s forwards cubic-bezier(0.5, 1, 0.89, 1);
  font-weight: 400;
  letter-spacing: 0.5px;
  word-spacing: 3px;

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
