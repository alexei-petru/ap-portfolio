import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { GlobalStyle } from "styles/GlobalStyle";

import { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import { Global } from "@emotion/react";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider
        // withGlobalStyles
        // withNormalizeCSS
        theme={{
          colors: {
            black: ["#000000", "#181818", "#26262618"],
          },
          colorScheme: "dark",
        }}
      >
        <Global styles={GlobalStyle} />
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}
