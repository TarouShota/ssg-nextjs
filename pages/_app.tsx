import type { AppProps } from 'next/app'
import type { LayoutProps } from '@vercel/examples-ui/layout'
import Head from 'next/head'
import { getLayout } from '@vercel/examples-ui'

import '@vercel/examples-ui/globals.css'

function App({ Component, pageProps }: AppProps) {
  const Layout = getLayout<LayoutProps>(Component)

  return (
    <>
      <Head>
        <title>
          997 wacuum flask
        </title>

        <meta name="description" content="997 wacuum flask buy" />
        <meta name="keywords" content="wacuum, wacuum flask, 997, czu, water, water bottle" />
        <meta name="author" content="Adylov Bekzot" />
      </Head>

      <Component {...pageProps} />
    </>
  )
}

export default App
