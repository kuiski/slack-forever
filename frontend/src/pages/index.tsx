import React from 'react'
import { GetServerSideProps, NextPage } from 'next'
import { signIn } from 'next-auth/react'
import Home from '@/components/pages/home/Home'

const HomePage: NextPage = (props) => {
  return <Home {...props} />
}

export default HomePage
