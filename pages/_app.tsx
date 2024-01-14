import type { AppProps } from 'next/app'
import Head from 'next/head'


import '@vercel/examples-ui/globals.css'

function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <Head>
        <title>
          705 Lifestyle
        </title>

        <meta name="description" content="705 Lifestyle" />
        <meta name="keywords" content="brand, Vacuum flask, 705, bottle, t-shirt,hoodie,t-shirt pack, water, water bottle" />
        <meta name="author" content="Adylov Bekzot" />
      </Head>

      <Component {...pageProps} />
    </>
  )
}

export default App
