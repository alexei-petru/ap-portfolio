import { GlobalStyle } from "styles/GlobalStyle";

import { AppProps } from "next/app";
import Head from "next/head";
import { Global, ThemeProvider } from "@emotion/react";

const theme = {
  colors: {
    primary: "hotpink",
    secondary: "red",
    popoverDropDownBackgroundColor: "#020309",
  },
};

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
      <ThemeProvider theme={theme}>
        <Global styles={GlobalStyle} />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
