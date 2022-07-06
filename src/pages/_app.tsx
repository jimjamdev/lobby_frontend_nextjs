import type { AppProps } from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { store } from '~store/store';
import GlobalStyle from '~styles/globals';
import { defaultTheme } from '~styles/theme/default-theme/default-theme';
import { TPage } from '~types/page.types';

export type TApp = AppProps & {
  Component: TPage;
};

export default function App({ Component, pageProps }: TApp) {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <Provider store={store}>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>,
  );
}
