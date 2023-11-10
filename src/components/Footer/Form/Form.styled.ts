import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { keyframes } from "@mantine/core";
import {
  var_ContactItemWidth,
  var_ContactItemHeight,
} from "src/constants-types/cssVariables";
import { boxShadowCard } from "src/styles/StyledReusable.styled";

const rotateAnimation = keyframes`
  from {
    transform: rotateY(180deg);
  }
  to {
    transform: rotateY(0);
  }
`;

export const Placeholder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  z-index: 2;
  transform: rotateY(180deg);
`;

export const palceholderImageDuration = 2000;

export const FormSt = styled.div<{ $isFormLoaded: boolean }>`
  position: relative;
  width: ${var_ContactItemWidth};
  height: 100%;
  min-height: ${var_ContactItemHeight};
  transform: rotateY(180deg);
  animation: ${({ $isFormLoaded }) =>
    $isFormLoaded
      ? css`
          ${rotateAnimation} ${palceholderImageDuration}ms forwards
        `
      : "none"};
  box-shadow: ${boxShadowCard};
`;
