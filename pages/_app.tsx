import type { AppProps } from 'next/app'
import Head from 'next/head'
import '@/styles/globals.css'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Phodata LLC',
  url: 'https://phodata.xyz',
  logo: 'https://phodata.xyz/favicon.svg',
  description:
    'Cross-border payment infrastructure, stablecoin orchestration APIs, and custom software development.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Albuquerque',
    addressRegion: 'NM',
    addressCountry: 'US',
  },
  sameAs: [],
  knowsAbout: [
    'Cross-border payments',
    'Stablecoin infrastructure',
    'Fintech',
    'Custom software development',
    'Cloud infrastructure',
  ],
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Phodata — Cross-Border Payment Infrastructure &amp; Software Solutions</title>
        <meta name="description" content="Phodata builds stablecoin-powered cross-border payment rails, payout APIs, and fintech products. Plus custom software development and cloud consulting. Based in Albuquerque, NM." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="cross-border payments, stablecoin API, USD to INR, payout API, fintech infrastructure, crypto on-ramp, software development, cloud infrastructure, Phodata" />
        <meta name="author" content="Phodata LLC" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="canonical" href="https://phodata.xyz" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Phodata — Cross-Border Payment Infrastructure & Software Solutions" />
        <meta property="og:description" content="Stablecoin-powered payment rails, payout APIs, and fintech products — plus custom software development and cloud consulting." />
        <meta property="og:url" content="https://phodata.xyz" />
        <meta property="og:site_name" content="Phodata" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Phodata — Cross-Border Payment Infrastructure & Software Solutions" />
        <meta name="twitter:description" content="Stablecoin-powered payment rails, payout APIs, and fintech products — plus custom software development and cloud consulting." />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
