import Head from "next/head";
import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import dynamic from "next/dynamic";

const Main = dynamic(() => import("../components/Main/Main"), { ssr: false });

export default function Home() {
  return (
    <>
      <Head>
        <title>A.P. Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main />
      <Footer />
    </>
  );
}
