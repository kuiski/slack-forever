import Head from 'next/head'
import { signIn, signOut, useSession } from 'next-auth/react'

import DefaultLayout from '@/components/layouts/DefaultLayout'
import { NoSsr } from '@mui/material'
import React from 'react'
import ChannelMessageContainer from '@/components/models/channel/ChannelMessageContainer'
import ErrorBoundary from '@/components/hoc/ErrorBoundary'

const Home: React.FC<{}> = (props) => {
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
