import { GlobalStyle } from "src/styles/GlobalStyle";

import { AppProps } from "next/app";
import Head from "next/head";
import { Global, ThemeProvider } from "@emotion/react";
import { APP_THEME } from "src/constants/constants";

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
      <ThemeProvider theme={APP_THEME}>
        <Global styles={GlobalStyle} />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
