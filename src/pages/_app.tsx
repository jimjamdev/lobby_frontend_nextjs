import type { AppProps } from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import { wrapper } from '~store/store';
import GlobalStyle from '~styles/globals';
import { defaultTheme } from '~styles/theme/default-theme/default-theme';
import { TPage } from '~types/page.types';

export type TApp = AppProps & {
  Component: TPage;
};

export function App({ Component, pageProps }: TApp) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      {getLayout(<Component {...pageProps} />)}
    </ThemeProvider>
  );
}

export default wrapper.withRedux(App);
