import Head from 'next/head'
import Script from 'next/script'
import { useRouter } from 'next/router'
import createCache from '@emotion/cache'
import { StrictMode, useEffect } from 'react'
import { CacheProvider } from '@emotion/react'
import { ThemeProvider } from '@material-ui/core/styles'

import type { AppProps } from 'next/app'

import '@animxyz/core'
import 'styles/globals.css'
import packageJson from 'package.json'
import { useTheme } from 'styles/theme'
import * as gtag from 'components/integrations/gtag'

({
  name: globalThis.appName,
  website: globalThis.website,
  version: globalThis.version,
  description: globalThis.description,
} = packageJson)

const cache = createCache({ key: 'css', prepend: true })
cache.compat = true

function App({ Component, pageProps }: AppProps) {
  const theme = useTheme()
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: string) => gtag.pageview(url)
    router.events.on('routeChangeComplete', handleRouteChange)

    return () => router.events.off('routeChangeComplete', handleRouteChange)
  }, [router.events])

  return (
    <StrictMode>
      <CacheProvider value={cache}>
        <Head>
          <title>Skyx Portfolio</title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
          />
        </Head>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>

      <Script
        src="https://www.googletagmanager.com/gtag/js"
        id={process.env.NEXT_PUBLIC_GA_TRACKING_ID}
      />
      <Script
        src="https://cdn.lordicon.com/libs/frhvbuzj/lord-icon-2.0.2.js"
        strategy="lazyOnload"
      />
      <Script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_TRACKING_ID}', {
                page_path: window.location.pathname,
            });
        `,
        }}
      />
    </StrictMode>
  )
}
export default App
