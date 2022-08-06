import Head from "next/head";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import StyledContainer from "../styles/Container.styled";
import { GlobalStyle } from "../styles/GlobalStyle";

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>A.P. Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
    </>
  );
}
