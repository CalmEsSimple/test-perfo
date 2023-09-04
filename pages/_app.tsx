import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Theme from '../utils/Theme'
import store from '@/state/store';
import { Provider } from 'react-redux';
import { HelmetProvider } from "react-helmet-async";
import NavBar from '@/components/NavBar/NavBar';
import Footer from '@/components/Footer/Footer';
import { ApolloProvider } from '@apollo/client';
import client from '@/utils/apolloClient';

export default ({ Component, pageProps }: AppProps) => {

  return (
    <HelmetProvider>
      <ApolloProvider client={client}>
        <Provider store={store}>
          <Theme>
            <NavBar />
            <Component {...pageProps} />
            <Footer />
          </Theme>
        </Provider>
      </ApolloProvider>
    </HelmetProvider>
  );
}
