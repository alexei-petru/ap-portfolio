import Head from "next/head";
import Footer from "src/components/Footer/Footer/Footer";
import dynamic from "next/dynamic";
import AffixTop from "src/components/overlays/AffixTop";
import EntrySection from "src/components/EntrySection/EntrySection";

const Main = dynamic(() => import("../components/Main/Main"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Head>
        <title>A.P. Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AffixTop />
      <EntrySection />
      <Main />
      <Footer />
    </>
  );
}
