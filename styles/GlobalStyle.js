import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
  scroll-behavior: smooth;
}

body   {
  background-color: black;
}

*,
*::before,
::after {
  box-sizing: inherit;
  color:white;
  padding: 0;
  margin: 0;
}
`;
