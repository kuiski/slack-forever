import React from 'react'
import Head from 'next/head'
import { NoSsr } from '@mui/material'

import { useRouter } from 'next/router'
import { useChannelViewState } from '@/stores/view'

import DefaultLayout from '@/components/layouts/DefaultLayout'
import ChannelMessageContainer from '@/components/ui/channel/ChannelMessageContainer'
import ErrorBoundary from '@/components/hoc/ErrorBoundary'

const Home: React.FC<{}> = (props) => {
  const router = useRouter()
  const viewState = useChannelViewState()

  React.useEffect(() => {
    if (viewState.date && viewState.selected.length > 0) {
      const date = viewState.date || ''
      const ch = viewState.selected.join(',')
      router
        .replace(
          `/?date=${encodeURIComponent(date)}&ch=${encodeURIComponent(ch)}`,
          undefined,
          { shallow: true }
        )
        .then(() => {})
        .catch(console.error)
    }
  }, [viewState, router])

  return (
    <DefaultLayout>
      <Head>
        <title>Slack Forever</title>
        <meta name="description" content="slack log viewer" />
        <link rel="icon" href="/frontend/public/favicon.ico" />
      </Head>
      <main>
        <NoSsr>
          <ErrorBoundary>
            <React.Suspense fallback={'Loading'}>
              <ChannelMessageContainer />
            </React.Suspense>
          </ErrorBoundary>
        </NoSsr>
      </main>
    </DefaultLayout>
  )
}

export default Home
