import { createGlobalStyle } from "styled-components";
const styled = { createGlobalStyle };

export const GlobalStyle = styled.createGlobalStyle`
  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-family: "Times New Roman", Times, serif;
  }

  body {
    background-color: black;
    user-select: text;
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
`;
