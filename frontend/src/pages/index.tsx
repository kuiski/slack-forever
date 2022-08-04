import React from 'react'
import { GetServerSideProps, NextPage } from 'next'
import Home from '@/components/pages/home/Home'
import { useChannelViewMutators } from '@/stores/view'
import head from '@/lib/helper/head'

interface HomePageProps {
  date: string | null
  channels: string | null
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const date = head(context.query.date)
  const channels = head(context.query.ch)

  return {
    props: {
      date,
      channels,
    },
  }
}

const HomePage: NextPage<HomePageProps> = (props) => {
  const { setSelectChannel, setDate } = useChannelViewMutators()
  React.useEffect(() => {
    if (props.date) setDate(new Date(props.date))
    if (props.channels) setSelectChannel(props.channels.split(','))
  }, [])
  return <Home />
}

export default HomePage
