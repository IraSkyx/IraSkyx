/* eslint-disable @next/next/no-document-import-in-page */
import { Html, Head as NextHead, Main, NextScript } from 'next/document'

import Head from '../components/utils/head.server'

export default function Document() {
  return (
    <Html lang="en">
      <NextHead />
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
