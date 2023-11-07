import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";

interface ApodDescriptionProps {
  isBackgroundImageLoading: boolean;
}

export const ApodButton = styled.button`
  background-color: transparent;
  padding: 7px;
  font-size: 16px;
  cursor: pointer;
  border: 2px solid #303030;
  border-radius: 3px;
  :hover {
    scale: 1.02;
  }
`;

export const ApodButtonText = styled.span`
  z-index: 1;
  white-space: nowrap;
`;

export const ApodDescription = styled.div`
  z-index: 1;
  cursor: pointer;
`;

export const ApodDescriptionInner = styled.div<ApodDescriptionProps>`
  filter: brightness(0.6);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  animation: ${({ isBackgroundImageLoading }) =>
    isBackgroundImageLoading
      ? css`
          ${shakeCenterLloadingAnimation} 2s ease normal none infinite
        `
      : css`
          ${blinkAnimation} 0.6s 2.15s 1.5 both
        `};
  cursor: default;
`;

export const ApodExternalLink = styled.a`
  color: rgb(138 138 238);
`;

const blinkAnimation = keyframes`
  0%,
  50%,
  100% {
    opacity: 1;
  }
  25%,
  75% {
    opacity: 0;
}`;

const shakeCenterLloadingAnimation = keyframes`
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
}`;
