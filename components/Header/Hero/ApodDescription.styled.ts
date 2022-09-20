import styled from "@emotion/styled";
import Image from "next/image";

export const ApodDescriptionImage = styled(
  ({ isBackgroundImageLoading, ...rest }: any) => Image(rest)
)`
  animation: scale-in-center 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both
    ${({ isBackgroundImageLoading }) => isBackgroundImageLoading && "infinite"};

  @keyframes scale-in-center {
    0% {
      transform: scale(0.5);
      opacity: 1;
    }
    50% {
      transform: scale(1);
      opacity: 1;
    }
    70% {
      transform: scale(0.8);
      opacity: 1;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

export const ApodParagraphWrapper = styled.div``;

export const ApodDescription = styled.div`
  z-index: 1;
  grid-row: 10 / span 1;
  grid-column: 1 / span 3;
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
