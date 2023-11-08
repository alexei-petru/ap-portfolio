import dynamic from "next/dynamic";
import Head from "next/head";
import { useRouter } from "next/router";
import { useCallback, useEffect, useRef, useState } from "react";
import EntrySection from "src/components/EntrySection/EntrySection";
import AffixToTop from "src/components/overlays/AffixToTop";
import { useIntersectionDynamicLoad } from "src/hooks/useIntersectionDynamicLoad";

const DynamicMain = dynamic(() => import("src/components/Main/Main"), {
  loading: () => <p>Loading...</p>,
});
const DynamicFooter = dynamic(() => import("src/components/Footer/Footer"), {
  loading: () => <p>Loading...</p>,
});
export default function Home() {
  const router = useRouter();
  const mainRef = useRef(null);

  const [isShowFooter, setIsShowFooter] = useState(false);
  const [isFooterLazyLoaded, setIsFooterLazyLoaded] = useState(false);

  const isFooterIntersected = useIntersectionDynamicLoad(
    mainRef,
    DynamicFooter,
    0.5,
    4000
  );

  

  const checkFooterVisibility = useCallback(() => {
    return window.location.hash === "#footer" || isFooterIntersected;
  }, [isFooterIntersected]);

  useEffect(() => {
    setIsShowFooter(checkFooterVisibility());
  }, [router.asPath, checkFooterVisibility]);


  return (
    <>
      <Head>
        <title>A.P. Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AffixToTop />
      <EntrySection />
      <div ref={mainRef}>
        <DynamicMain />
      </div>
      {isShowFooter && (
        <DynamicFooter
          onLoaded={() => {
            setIsFooterLazyLoaded(true);
          }}
        />
      )}
    </>
  );
}
