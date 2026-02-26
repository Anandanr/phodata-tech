import type { AppProps } from 'next/app'
import Head from 'next/head'
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Phodata - Technology Consulting &amp; Software Solutions</title>
        <meta name="description" content="Phodata LLC delivers custom software development, cloud infrastructure, fintech solutions, and technology consulting. Based in Albuquerque, NM." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="software development, cloud infrastructure, fintech, technology consulting, API integration, custom software, DevOps, data analytics, Phodata" />
        <meta name="author" content="Phodata LLC" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Phodata - Technology Consulting & Software Solutions" />
        <meta property="og:description" content="Custom software development, cloud infrastructure, and technology consulting for businesses." />
        <meta property="og:url" content="https://phodata.xyz" />
        <meta property="og:site_name" content="Phodata" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Phodata - Technology Consulting & Software Solutions" />
        <meta name="twitter:description" content="Custom software development, cloud infrastructure, and technology consulting for businesses." />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
