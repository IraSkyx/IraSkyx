import { Head as NextHead } from 'next/document'
import Document, { Html, Main, NextScript } from 'next/document'

import Head from '../components/utils/Head'

export default class MyDocument extends Document {
  render() {
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
}
