import type { AppProps } from 'next/app';
import '../styles/globals.css';
import '../components/Typewriter.css'
import { AnimatePresence } from 'framer-motion'

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <AnimatePresence mode="wait">
      <Component {...pageProps} />;
    </AnimatePresence>
  )
}

export default MyApp;