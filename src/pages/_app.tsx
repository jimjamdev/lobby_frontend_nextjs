import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import { store } from '~store/store';
import GlobalStyle from '~styles/globals';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Component {...pageProps} />
    </Provider>
  );
}
