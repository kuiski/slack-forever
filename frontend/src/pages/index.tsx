import React from 'react'
import { GetServerSideProps, NextPage } from 'next'
import Home from '@/components/pages/home/Home'
import { useChannelViewMutators } from '@/stores/view'
import head from '@/lib/helper/head'

interface HomePageProps {
  date: string | null
  channels: string[] | null
}
export const getServerSideProps: GetServerSideProps = (context) => {
  const channels = context.query.ch
    ? decodeURIComponent(head(context.query.ch) as string).split(',')
    : null
  return {
    props: {
      date: context.query.date ?? null,
      channels,
    },
  }
}

const HomePage: NextPage<HomePageProps> = (props) => {
  const { setSelectChannel, setDate } = useChannelViewMutators()
  React.useEffect(() => {
    if (props.date) setDate(new Date(props.date))
    if (props.channels) setSelectChannel(props.channels)
  }, [])
  return <Home />
}

export default HomePage
