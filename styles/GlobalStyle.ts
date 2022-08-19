import { createGlobalStyle } from "styled-components";
const styled = { createGlobalStyle };

export const GlobalStyle = styled.createGlobalStyle`

  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  body {
    background-color: black;
  }

  *,
  *::before,
  ::after {
    box-sizing: inherit;
    color: white;
    padding: 0;
    margin: 0;
    position: relative;
    z-index: 1;
  }

  @font-face {
    font-family: monoton;
    font-weight: 400;
    src: url("/Monoton-Regular.ttf");
  }
`;
