import dynamic from "next/dynamic";
import Head from "next/head";
import EntrySection from "src/components/EntrySection/EntrySection";
import Footer from "src/components/Footer/Footer";
import Main from "src/components/Main/Main";
import AffixToTop from "src/components/overlays/AffixToTop";

const ReactNebulaClient = dynamic(
  () => import("@flodlc/nebula").then((mod) => mod.ReactNebula),
  {
    loading: () => <div style={{ opacity: 0.01 }}>Loading</div>,
    ssr: false,
  },
);

export default function Home() {
  return (
    <>
      <Head>
        <title>AP Portfolio</title>
      </Head>
      <ReactNebulaClient
        config={{
          starsCount: 1000,
          starsColor: "#FFFFFF",
          starsRotationSpeed: 5.4,
          cometFrequence: 100,
          nebulasIntensity: 28,
          bgColor: "rgb(8,8,8)",
          sunScale: 0.8,
          planetsScale: 2.9,
          solarSystemOrbite: 43,
          solarSystemSpeedOrbit: 20,
        }}
      />
      <AffixToTop />
      <EntrySection />
      <Main />
      <Footer />
    </>
  );
}
