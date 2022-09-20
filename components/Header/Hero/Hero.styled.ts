import styled from "@emotion/styled";

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
  grid-row: 5 / span 7;
  grid-column: 9 / span 2;
  overflow: hidden;
`;

export const UserDescription = styled.h1`
  z-index: 1;
  font: var(--title-regular-large);
  grid-row: 5 / span 7;
  grid-column: 3 / span 5;
  text-align: center;
  transform: scale(0.9);
  animation: scale 3s forwards cubic-bezier(0.5, 1, 0.89, 1);
  letter-spacing: 0.5px;
  word-spacing: 7px;

  @media (max-width: 842px) {
    grid-column: 3 / span 6;
  }

  @media (max-width: 512px) {
    font-size: clamp(16px, 6vw, 38px);
    grid-row: 5 / span 7;
    grid-column: 5 / span 1;
  }

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

  span:nth-of-type(1) {
    animation: fade-in 0.8s 0.1s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }

  span:nth-of-type(2) {
    animation: fade-in 0.8s 0.2s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }

  span:nth-of-type(3) {
    animation: fade-in 0.8s 0.3s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }

  span:nth-of-type(4) {
    animation: fade-in 0.8s 0.4s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }

  span:nth-of-type(5) {
    animation: fade-in 0.8s 0.5s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }

  span:nth-of-type(6) {
    animation: fade-in 0.8s 0.6s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }

  span:nth-of-type(7) {
    animation: fade-in 0.8s 0.7s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }

  span:nth-of-type(8) {
    animation: fade-in 0.8s 0.8s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }

  span:nth-of-type(9) {
    animation: fade-in 0.8s 0.9s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }

  span:nth-of-type(10) {
    animation: fade-in 0.8s 1s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }

  span:nth-of-type(11) {
    animation: fade-in 0.8s 1.1s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }

  span:nth-of-type(12) {
    animation: fade-in 0.8s 1.2s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }

  span:nth-of-type(13) {
    animation: fade-in 0.8s 1.3s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }

  span:nth-of-type(14) {
    animation: fade-in 0.8s 1.4s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }

  span:nth-of-type(15) {
    animation: fade-in 0.8s 1.5s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }

  span:nth-of-type(16) {
    animation: fade-in 0.8s 1.6s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }

  span:nth-of-type(17) {
    animation: fade-in 0.8s 1.7s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }

  span:nth-of-type(18) {
    animation: fade-in 0.8s 1.8s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }

  @keyframes fade-in {
    100% {
      opacity: 1;
      filter: blur(0);
    }
  }
`;
