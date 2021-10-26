import '@animxyz/core'
import 'styles/globals.css'

import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import Card from '@mui/material/Card'
import { useRouter } from 'next/router'
import type { AppProps } from 'next/app'
import { StrictMode, useEffect } from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { ThemeProvider } from '@mui/material/styles'

import packageJson from 'package.json'
import { useTheme } from 'styles/theme'
import Link from 'components/utils/link.client'
import Menu from 'components/common/menu.client'
import Waves from 'components/common/waves.client'
import Footer from 'components/common/footer.client'
import * as gtag from 'components/integrations/gtag'
import avatar from 'public/static/images/avatar.png'
;({
  name: globalThis.appName,
  website: globalThis.website,
  version: globalThis.version,
  description: globalThis.description,
} = packageJson)

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
      <Head>
        <title>Adrien Lenoir – {globalThis.description}</title>
        <meta
          name="viewport"
          content="minimum-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <Container className="flex flex-col flex-grow justify-center items-center" maxWidth="md">
          <Card className="shadow-2xl p-3 min-w-full overflow-visible mt-16 mb-36 md:mb-4">
            <CardContent className="flex flex-col items-center space-y-3 md:p-6">
              <Link href="/" passHref>
                <Image src={avatar} width={150} height={150} alt="My avatar" placeholder="blur" />
              </Link>

              <div>
                <Typography variant="h4" align="center">
                  Hi, I&apos;m Adrien Lenoir
                </Typography>

                <Typography
                  component="h5"
                  variant="subtitle1"
                  align="center"
                  color="textSecondary"
                  gutterBottom
                >
                  {globalThis.description}
                </Typography>
              </div>

              <Component {...pageProps} />
              <Menu />
            </CardContent>
          </Card>
        </Container>

        <Waves />
        <Footer />
      </ThemeProvider>

      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING_ID}`}
      />
      <Script
        src="https://cdn.lordicon.com/libs/frhvbuzj/lord-icon-2.0.2.js"
        strategy="lazyOnload"
      />
      <Script
        id="analytics"
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
