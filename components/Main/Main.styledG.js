import { createGlobalStyle } from "styled-components";

const styled = { createGlobalStyle };

export const MainGlobalStyles = styled.createGlobalStyle`
  .card-projects {
    width: 350px !important;
    justify-content: center;

    div {
      margin: 0 auto;
    }

    div div div {
      :nth-child(1) {
        /* border: 2px solid red; */
        /* margin-left: 0; */
        font-size: calc(19px + (21 - 19) * ((100vw - 300px) / (1600 - 300)));
        font-weight: 600;
        word-spacing: 1.1px;
      }
      :nth-child(2) {
        /* border: 2px solid red; */
        font-size: 17px !important;
        color: white !important;
        padding: 10px;
      }
      :nth-child(3) {
        border: 2px solid violet;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row-reverse;
      }
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
