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
  }
  .card {
  }
`;
