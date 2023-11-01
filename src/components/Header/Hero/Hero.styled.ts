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
  width: clamp(138px, 25vw, 220px);
  aspect-ratio: 0.747;
  border-radius: 10%;
  grid-row: 5 / span 7;
  grid-column: 9 / span 2;
  overflow: hidden;
  animation-name: slide-in-elliptic-bottom-fwd;
  animation-duration: 2.2s;
  animation-timing-function: ease;
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  opacity: 0;

  @keyframes slide-in-elliptic-bottom-fwd {
    0% {
      transform: translateY(600px) rotateX(30deg) scale(0);
      transform-origin: 50% 100%;
      opacity: 0;
    }
    100% {
      transform: translateY(0) rotateX(0) scale(1);
      transform-origin: 50% -1400px;
      opacity: 1;
    }
  }
`;

export const UserDescriptionWrapper = styled.h1`
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
`;
export const UserDescriptionWord = styled.span`
  display: inline-block;
  opacity: 0;
  filter: blur(4px);

  @keyframes fade-in {
    100% {
      opacity: 1;
      filter: blur(0);
    }
  }
`;
