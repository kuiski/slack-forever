import * as React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { SessionProvider } from 'next-auth/react'

import { RecoilRoot } from 'recoil'

import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { CacheProvider, EmotionCache } from '@emotion/react'

import createEmotionCache from '@/lib/createEmotionCache'
import theme from '@/theme'
import { RecoilRelayEnvironment } from 'recoil-relay'
import { relayEnvironment, relayEnvironmentKey } from '@/lib/graphql/relay'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  return (
    <SessionProvider session={pageProps.session}>
      <RecoilRoot>
        <RecoilRelayEnvironment
          environmentKey={relayEnvironmentKey}
          environment={relayEnvironment}
        >
          <CacheProvider value={emotionCache}>
            <Head>
              <meta
                name="viewport"
                content="initial-scale=1, width=device-width"
              />
            </Head>
            <ThemeProvider theme={theme}>
              {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
              <CssBaseline />
              <Component {...pageProps} />
            </ThemeProvider>
          </CacheProvider>
        </RecoilRelayEnvironment>
      </RecoilRoot>
    </SessionProvider>
  )
}
