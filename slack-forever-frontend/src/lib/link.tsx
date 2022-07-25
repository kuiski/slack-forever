import * as React from 'react'
import Link from 'next/link'

interface Props {
  children: React.ReactNode
  href: string | URL
  as?: string
}

export default function MyNextLink(props: Props) {
  return (
    <Link href={props.href} as={props.as} passHref>
      {props.children}
    </Link>
  )
}