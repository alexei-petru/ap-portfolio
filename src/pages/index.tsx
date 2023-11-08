import Head from "next/head";
import EntrySection from "src/components/EntrySection/EntrySection";
import Footer from "src/components/Footer/Footer";
import Main from "src/components/Main/Main";
import AffixToTop from "src/components/overlays/AffixToTop";

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
