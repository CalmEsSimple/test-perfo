import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Theme from '../utils/Theme'
import store from '@/state/store';
import { Provider } from 'react-redux';
import { HelmetProvider } from "react-helmet-async";
import dynamic from 'next/dynamic'
import NavBar from '@/components/NavBar/NavBar';
import Footer from '@/components/Footer/Footer';
import { ApolloProvider } from '@apollo/client';
import client from '@/utils/apolloClient';
const Chat = dynamic(() => import('../components/Chat/Chat'));

export default ({ Component, pageProps }: AppProps) => {

  return (
    <HelmetProvider>
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=GTM-WRDJ2XNM`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>

      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          alt="fbpx"
          src="https://www.facebook.com/tr?id=645843929278280&ev=PageView&noscript=1"
        />
  </noscript>

      <ApolloProvider client={client}>
        <Provider store={store}>
          <Theme>
            <Chat />
            {/*<NavBar />*/}
            <Component {...pageProps} />
            <Footer />
          </Theme>
        </Provider>
      </ApolloProvider>
    </HelmetProvider>
  );
}
