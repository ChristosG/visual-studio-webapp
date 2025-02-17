import type { AppProps } from 'next/app';
import '../styles/globals.css';
import '../components/Typewriter.css'
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <>
          <Head>
        <title>Christos Grigoriadis</title>
        <meta name="viewport" content="width=device-width, initial-scale=0.6" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp;