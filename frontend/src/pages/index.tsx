import React from 'react'
import { GetServerSideProps, NextPage } from 'next'
import { signIn } from 'next-auth/react'
import Home from '@/components/pages/home/Home'

interface PageProps {
  projectId: string | null
}

export const getServerSideProps: GetServerSideProps<PageProps> = async (
  _context
) => {
  return {
    props: {
      projectId: process.env.PROJECT_ID ?? null,
    },
  }
}

const HomePage: NextPage<PageProps> = (props) => {
  return <Home {...props} />
}

export default HomePage
