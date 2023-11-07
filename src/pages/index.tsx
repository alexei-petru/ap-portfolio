import dynamic from "next/dynamic";
import Head from "next/head";
import EntrySection from "src/components/EntrySection/EntrySection";
import AffixToTop from "src/components/overlays/AffixToTop";

const ReactNebulaClient = dynamic(
  () => import("@flodlc/nebula").then((mod) => mod.ReactNebula),
  {
    ssr: false,
  }
);

const MainLazy = dynamic(() =>
  import("src/components/Main/Main").then((mod) => mod.default)
);

const FooterLazy = dynamic(() =>
  import("src/components/Footer/Footer").then((mod) => mod.default)
);
export default function Home() {
  return (
    <>
      <Head>
        <title>A.P. Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
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
      <MainLazy />
      <FooterLazy />
    </>
  );
}
