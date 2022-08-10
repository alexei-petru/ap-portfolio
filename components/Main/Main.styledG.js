import { createGlobalStyle } from "styled-components";

const styled = { createGlobalStyle };

export const MainGlobalStyles = styled.createGlobalStyle`
  .card-project {
    width: 350px !important;
    justify-content: center;
    height: 100% !important;
  }

  .card-project-div3 img {
    width: 230px !important;
    height: auto !important;
  }

  .card-project-div5 {
    /* border: 2px solid red; */
    /* margin-left: 0; */
    font-size: calc(19px + (21 - 19) * ((100vw - 300px) / (1600 - 300)));
    font-weight: 600;
    word-spacing: 1.1px;
    border: 2px solid red;
  }
  .card-project-div6 {
    /* border: 2px solid red; */
    font-size: 17px !important;
    color: white !important;
    padding: 10px;
  }
  .card-project-div7 {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row-reverse;
    span {
      padding: 5px;
      margin: 1px !important;
    }
  }

  .card::before {
    content: "";
    width: 104%;
    height: 102%;
    border-radius: 8px;
    background-image: linear-gradient(
      var(--rotate),
      #5ddcff,
      #3c67e3 43%,
      #4e00c2
    );
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
      var(--rotate),
      #5ddcff,
      #3c67e3 43%,
      #4e00c2
    );
    opacity: 1;
    transition: opacity 0.5s;
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
