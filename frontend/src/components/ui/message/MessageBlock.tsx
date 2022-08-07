import React from 'react'
import Box from '@mui/material/Box'

import {
  MessageBlock,
  BlockElement,
  Section,
} from '@/entities/queries/cnannelMessage'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import RichText from '@/components/ui/message/RichText'

const MessageBlockItem: React.FC<{ block: MessageBlock }> = ({ block }) => {
  return (
    <Stack>
      {block.elements.map((element, idx) => (
        <BlockElementItem key={idx} element={element} />
      ))}
    </Stack>
  )
}

const BlockElementItem: React.FC<{ element: BlockElement }> = ({ element }) => {
  if (element.type === 'rich_text_section') {
    return (
      <Box sx={{ display: 'inline-block' }}>
        {element.elements?.map((blockElement, idx) => (
          <SectionItem key={idx} element={blockElement} />
        ))}
      </Box>
    )
  } else if (element.type === 'rich_text_quote') {
    return (
      <Box
        sx={{ display: 'inline-block', borderLeft: '3px solid #ccc', pl: 1 }}
      >
        {element.elements?.map((blockElement, idx) => (
          <SectionItem key={idx} element={blockElement} />
        ))}
      </Box>
    )
  } else if (element.type === 'rich_text_list') {
    return (
      <ul>
        {element.elements?.map((element, idx) => (
          <li key={idx}>
            <BlockElementItem element={element} />
          </li>
        ))}
      </ul>
    )
  } else {
    return <Box>Unknown element type</Box>
  }
}

const SectionItem: React.FC<{ element: Section }> = ({ element }) => {
  if (element.type === 'text') {
    if (element.style?.code) {
      return (
        <Typography
          variant="body2"
          component="span"
          display="inline"
          sx={{
            border: '1px solid #ccc',
            color: '#c00',
            backgroundColor: '#eee',
            pl: '2px',
            pr: '2px',
          }}
        >
          {element?.text}
        </Typography>
      )
    } else {
      return (
        <Typography variant="body2" component="span" display="inline">
          <RichText text={element?.text} />
        </Typography>
      )
    }
  } else if (element.type === 'link') {
    return (
      <a href={element?.url} target="_blank" rel="noreferrer">
        {element?.url}
      </a>
    )
  } else if (element.type === 'emoji') {
    return (
      <Typography component="span" display="inline">
        :{element.emoji?.name}:
      </Typography>
    )
  } else if (element.type === 'user') {
    return (
      <Typography component="span" display="inline">
        @{element.user_id}
      </Typography>
    )
  } else {
    return (
      <Typography component="span" display="inline">
        Unknown element: {element.type}
      </Typography>
    )
  }
}

export default MessageBlockItem
