import Typography from '@mui/material/Typography'
import React from 'react'

interface RichTextProps {
  text: string | undefined
}

const MultilineText: React.FC<RichTextProps> = ({ text }) => {
  if (!text) return <></>

  const texts = text.split(/(\n)/).map((item, index) => {
    return (
      <React.Fragment key={index}>
        {item.match(/\n/) ? <br /> : item}
      </React.Fragment>
    )
  })
  return <>{texts}</>
}

const RichText: React.FC<RichTextProps> = ({ text }) => {
  return (
    <span>
      <MultilineText text={text}></MultilineText>
    </span>
  )
}

export default RichText
