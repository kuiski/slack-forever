import React from 'react'
import Stack from '@mui/material/Stack'

import { Message } from '@/entities/queries/cnannelMessage'
import Typography from '@mui/material/Typography'
import MessageContent from '@/components/ui/message/MessageContent'

const MessageContainer: React.FC<{ messages: Message[] }> = ({ messages }) => {
  if (messages.length == 0) {
    return (
      <Typography variant="body2" sx={{ color: '#888', m: 1 }}>
        メッセージはありません
      </Typography>
    )
  }
  return (
    <Stack spacing={2}>
      {messages.map((message) => (
        <MessageContent message={message} key={message.ts} />
      ))}
    </Stack>
  )
}

export default MessageContainer
