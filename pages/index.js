import Head from "next/head";
import { StyledContainer } from "../styles/Container.styled";

export default function Home() {
  return (
    <>
      <Head>
        <title>A.P. Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StyledContainer className="container">
        <nav style={{ display: "flex", justifyContent: "space:between" }}>
          <div className="logo">
            <img src="/vercel.svg" alt="" />
          </div>
          <menu>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </menu>
        </nav>
      </StyledContainer>
    </>
  );
}
