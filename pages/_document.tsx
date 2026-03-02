import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content="Phodata builds stablecoin-powered cross-border payment rails, payout APIs, and fintech products. Plus custom software development and cloud consulting." />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Poppins:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="bg-dark-900 text-white antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
