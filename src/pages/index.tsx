import Head from "next/head";
import Footer from "src/components/Footer/Footer/Footer";
import Header from "src/components/Header/Header";
import dynamic from "next/dynamic";
import AffixTop from "src/components/overlays/AffixTop";

const Main = dynamic(() => import("../components/Main/Main"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Head>
        <title>A.P. Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.0.1/dist/leaflet.css"
        />
      </Head>
      <AffixTop />
      <Header />
      <Main />
      <Footer />
    </>
  );
}
