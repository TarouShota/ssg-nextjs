import type { AppProps } from 'next/app'
import '@vercel/examples-ui/globals.css'
import Header from './header'
import Footer from './footer'

function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default App
