import Head from "next/head";
import EntrySection from "src/components/EntrySection/EntrySection";

// import loadable from "@loadable/component";
import Main from "src/components/Main/Main";
import Footer from "src/components/Footer/Footer";
import AffixToTop from "src/components/overlays/AffixToTop";
// import { Main } from "next/document";
// const Main = loadable(() => import("src/components/Main/Main"));
// const Footer = loadable(() => import("src/components/Footer/Footer"));

export default function Home() {
  return (
    <>
      <Head>
        <title>A.P. Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AffixToTop />
      <EntrySection />
      <Main />
      <Footer />
    </>
  );
}
