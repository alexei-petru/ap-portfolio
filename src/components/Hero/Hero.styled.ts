import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { MAX_SECTION_SIZE } from "src/constants-types/constants";
import { var_NavbarHeight } from "src/constants-types/cssVariables";
import ApodDescription from "./ApodDescription/ApodDescription";
import { AvatarAnimationKeys, avatarAnimationNames } from "./Hero";

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

interface AvatarWrapperProps {
  currentAnimation: AvatarAnimationKeys;
}

export const AvatarWrapper = styled.div<AvatarWrapperProps>`
  z-index: 1;
  position: relative;
  width: clamp(140px, 25vw, 220px);
  aspect-ratio: 0.747;
  border-radius: 10%;
  grid-column: 21 / span 5;
  grid-row: 9 / span 11;
  overflow: hidden;
  animation: ${({ currentAnimation }) => {
    if (currentAnimation === avatarAnimationNames.entry) {
      return css`
        ${SlideInEllipticBottomAnimation} 1.5s ease 0s 1 normal forwards
      `;
    }
    if (currentAnimation === avatarAnimationNames.second) {
      return css`tada 1s ease-in-out forwards`;
    }
    if (currentAnimation === avatarAnimationNames.third) {
      return css`rotate 0.7s ease-in-out forwards`;
    }
  }};
  opacity: 1;

  @keyframes rotate {
    0%,
    100% {
      transform: rotateY(0deg);
    }
    50% {
      transform: rotateY(-180deg);
    }
  }

  @keyframes tada {
    0% {
      transform: scale(1);
    }
    10%,
    20% {
      transform: scale(0.9) rotate(-3deg);
    }
    30%,
    50%,
    70%,
    90% {
      transform: scale(1.1) rotate(3deg);
    }
    40%,
    60%,
    80% {
      transform: scale(1.1) rotate(-3deg);
    }
    100% {
      transform: scale(1) rotate(0deg);
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletPortrait}) {
    grid-column: 22 / span 5;
    grid-row: 2 / span 11;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileLarge}) {
    grid-column: 21 / span 5;
    grid-row: 2 / span 11;
  }
`;

export const UserDescriptionWrapper = styled.div`
  z-index: 1;
  grid-column: 3 / span 15;
  grid-row: 10 / span 14;

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
