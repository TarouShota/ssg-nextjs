import type { AppProps } from 'next/app'
import Head from 'next/head'


import '@vercel/examples-ui/globals.css'

function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <Head>
        <title>
          705 wacuum flask
        </title>

        <meta name="description" content="705 wacuum flask buy" />
        <meta name="keywords" content="wacuum, wacuum flask, 705, czu, water, water bottle" />
        <meta name="author" content="Adylov Bekzot" />
      </Head>

      <Component {...pageProps} />
    </>
  )
}

export default App
