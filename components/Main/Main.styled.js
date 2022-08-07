import styled, { createGlobalStyle } from "styled-components";

export const Main = styled.main``;

export const CardsSection = styled.div`
  padding: 100px 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 500px));
  justify-content: center;
  align-content: center;
  grid-gap: 4vw;
  background-color: black;
`;

export const CardWrapper = styled.div`
  z-index: 1;
  /* width: 200px;
  height: 200px; */
`;

export const MainGlobalStyles = createGlobalStyle`
.newsHeaderCart {
    /* border: 2px solid red; 
    width: 200px; */
}

.card::before {
  content: "";
  width: 104%;
  height: 102%;
  border-radius: 8px;
  background-image: linear-gradient(
    var(--rotate)
    , #5ddcff, #3c67e3 43%, #4e00c2);
    position: absolute;
    z-index: -1;
    top: -1%;
    left: -2%;
    animation: spin 2.5s linear infinite;
}

.card::after {
  position: absolute;
  content: "";
  top: calc(var(--card-height) / 6);
  left: 0;
  right: 0;
  z-index: -1;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  transform: scale(0.8);
  filter: blur(calc(var(--card-height) / 6));
  background-image: linear-gradient(
    var(--rotate)
    , #5ddcff, #3c67e3 43%, #4e00c2);
    opacity: 1;
  transition: opacity .5s;
  animation: spin 2.5s linear infinite;
}

@keyframes spin {
  0% {
    --rotate: 0deg;
  }
  100% {
    --rotate: 360deg;
  }
}
`;
