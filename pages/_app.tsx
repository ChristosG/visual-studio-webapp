import type { AppProps } from 'next/app';
import '../styles/globals.css';
import '../components/Typewriter.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;