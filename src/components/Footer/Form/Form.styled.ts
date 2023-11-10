import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { keyframes } from "@mantine/core";

const rotateAnimation = keyframes`
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(180deg);
  }
`;

export const Placeholder = styled.div<{ clicked: boolean }>`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: gray;
  background-size: cover;
  cursor: pointer;
  border: 3px solid red !important;
  animation: ${(props) =>
    props.clicked
      ? css`
          ${rotateAnimation} 0.5s forwards
        `
      : "none"};
`;

export const FormSt = styled.div`
  width: 400px;
  height: 500px;
`;
