import React from 'react'
import Skeleton from '@mui/material/Skeleton'

interface ListSkeletonProps {
  bars?: number
}

const ListSkeleton: React.FC<ListSkeletonProps> = ({ bars }) => {
  const count = bars ?? 5
  const arr = [...Array(count)]
  return (
    <>
      {arr.map((n) => (
        <Skeleton key={n} />
      ))}
    </>
  )
}

export default ListSkeleton
