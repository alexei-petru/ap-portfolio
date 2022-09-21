import styled from "@emotion/styled";

interface IApodDescriptionWrapper {
  isBackgroundImageLoading: boolean;
}

export const ApodDescriptionWrapper = styled.div<IApodDescriptionWrapper>`
  filter: brightness(0.6);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  /* 
 animation: shake-center-loading 2s ease normal none infinite;
  /* animation: blink-1 0.6s both ; */
  animation: ${({ isBackgroundImageLoading }) =>
    isBackgroundImageLoading
      ? "shake-center-loading 2s ease normal none infinite;"
      : "blink-1 0.6s 2.1s 1.5 both ;"};

  @keyframes blink-1 {
    0%,
    50%,
    100% {
      opacity: 1;
    }
    25%,
    75% {
      opacity: 0;
    }
  }


  @keyframes shake-center-loading {
    0% {
      transform: rotate(0deg) scale(0.5);
      transform-origin: 50% 50%;
    }
    10% {
      transform: rotate(3deg) scale(0.6);
    }
    20% {
      transform: rotate(-5deg) scale(0.7);
    }
    30% {
      transform: rotate(5deg) scale(0.8);
    }
    40% {
      transform: rotate(-5deg) scale(0.9);
    }
    50% {
      transform: rotate(5deg) scale(1);
    }
    60% {
      transform: rotate(-5deg) scale(0.9);
    }
    70% {
      transform: rotate(5deg) scale(0.8);
    }
    80% {
      transform: rotate(-3deg) scale(0.7);
    }
    90% {
      transform: rotate(3deg) scale(0.6);
    }
    100% {
      transform: rotate(0deg) scale(0.5);
      transform-origin: 50% 50%;
    }
  }
`;

export const ApodParagraphWrapper = styled.div``;

export const ApodParagrap = styled.p`
  text-align: end;
`;

export const ApodDescription = styled.div`
  z-index: 1;
  grid-row: 10 / span 1;
  grid-column: 1 / span 2;
  cursor: pointer;

  @media (max-width: 512px) {
    z-index: 1;
    grid-row: 10 / span 1;
    grid-column: 2 / span 4;
    cursor: pointer;
  }
`;

export const ApodParagraph = styled.p`
  margin-top: -50px;
  z-index: 1;
`;
