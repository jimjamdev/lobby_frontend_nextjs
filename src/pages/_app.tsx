import type { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import { wrapper } from '~store/store';
import GlobalStyle from '~styles/globals';
import { defaultTheme } from '~styles/theme/default-theme/default-theme';
import { TPage } from '~types/pages/Page.types';

const {
  default: fetch, Headers, Request, Response,
} = require('node-fetch');

Object.assign(globalThis, {
  fetch,
  Headers,
  Request,
  Response,
  AbortController,
});

export type TApp = AppProps & {
  Component: TPage;
};

export function App({ Component, pageProps }: TApp) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Head>
        <title>Green Jade</title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </ThemeProvider>
  );
}

export default wrapper.withRedux(App);
