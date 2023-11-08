import styled from "@emotion/styled";
import { var_NavbarHeight } from "src/constants-types/cssVariables";
import ApodDescription from "./ApodDescription";
import { keyframes } from "@emotion/react";
import { MAX_SECTION_SIZE } from "src/constants-types/constants";

const SlideInEllipticBottomAnimation = keyframes`
  0% {
    transform: translateY(600px) rotateX(30deg) scale(0);
    transform-origin: 50% 100%;
    opacity: 0;
  }
  100% {
    box-shadow: 0 0 20px #ffffff34;
    transform: translateY(0) rotateX(0) scale(1);
    transform-origin: 50% -1400px;
    opacity: 1;
    
}`;

export const Hero = styled.section`
  position: relative;
  min-height: 650px;
  height: calc(100vh - ${var_NavbarHeight});
  max-height: ${MAX_SECTION_SIZE.height}px;
  display: grid;
  grid-template-columns: repeat(29, 1fr);
  grid-template-rows: repeat(29, 1fr);
`;

export const AvatarWrapper = styled.div`
  z-index: 1;
  position: relative;
  width: clamp(140px, 25vw, 220px);
  aspect-ratio: 0.747;
  border-radius: 10%;
  grid-column: 21 / span 5;
  grid-row: 8 / span 11;
  overflow: hidden;
  animation-name: ${SlideInEllipticBottomAnimation};
  animation-duration: 2.2s;
  animation-timing-function: ease;
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  opacity: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletPortrait}) {
    grid-column: 22 / span 5;
    grid-row: 2 / span 11;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileLarge}) {
    grid-column: 21 / span 5;
    grid-row: 2 / span 11;
  }
`;

export const UserDescriptionWrapper = styled.h1`
  z-index: 1;
  font: var(--title-regular-large);
  grid-column: 3 / span 15;
  grid-row: 10 / span 14;
  text-align: center;
  letter-spacing: 0.5px;
  word-spacing: 7px;
  font-size: clamp(27px, 8vw, 38px);
  display: inline-block;
  opacity: 0;
  scale: 1.2;
  animation: slideBlurIn 2s ease forwards;

  @keyframes slideBlurIn {
    0% {
      transform: translateX(-1000px);
      filter: blur(4px);
      opacity: 0;
    }

    50% {
      filter: blur(4px);
      opacity: 0.2;
    }

    80% {
      transform: translateX(-10px);
      filter: blur(3px);
      opacity: 0.6;
    }
    100% {
      transform: translateX(0);
      filter: blur(0);
      opacity: 1;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletLandscape}) {
    grid-column: 3 / span 15;
    grid-row: 9 / span 11;

    @media (max-height: ${({ theme }) => theme.breakpoints.tabletLandscape}) {
      grid-column: 3 / span 15;
      grid-row: 7 / span 11;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletPortrait}) {
    font-size: clamp(26px, 5vw, 36px);
    grid-column: 4 / span 24;
    grid-row: 13 / span 11;

    @media (max-height: ${({ theme }) => theme.breakpoints.tabletPortrait}) {
      grid-column: 3 / span 25;
      grid-row: 14 / span 10;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMedium}) {
    font-size: clamp(19px, 8vw, 25px);
    grid-column: 4 / span 24;
    grid-row: 12 / span 11;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    font-size: clamp(19px, 6vw, 25px);
  }
`;

export const ApodDescriptionSt = styled(ApodDescription)`
  grid-column: 2 / span 7;
  grid-row: 25 / span 2;
`;
