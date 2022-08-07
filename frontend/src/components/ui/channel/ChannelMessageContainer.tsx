import React from 'react'

import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'

import { useChannelViewState } from '@/stores/view'
import { useMessages } from '@/stores/messages'
import Typography from '@mui/material/Typography'
import MessageContent from '@/components/ui/message/MessageContent'

const ChannelMessageContainer: React.FC = () => {
  const { selected, date } = useChannelViewState()

  if (selected.length === 0 || !date) {
    return null
  }

  return (
    <Box>
      <React.Suspense fallback={'loading'}>
        <MessageContentContainer />
      </React.Suspense>
    </Box>
  )
}

const MessageContentContainer = () => {
  const channels = useMessages()
  if (!channels) return null

  const multiChannel = channels.length > 1

  if (channels.length === 1) {
    return (
      <Box
        sx={{
          textOverflow: 'hidden',
          width: '100%',
          p: 1,
        }}
      >
        <Typography variant="h6">#{channels[0].name}</Typography>
        {channels[0].messages?.map((message) => (
          <MessageContent key={message.ts} message={message} />
        ))}
      </Box>
    )
  }

  return (
    <Box
      sx={{
        p: multiChannel ? 1 : 0,
        pb: 0,
        textOverflow: 'hidden',
        width: '100%',
      }}
    >
      {channels.map((channel) => (
        <Paper key={channel.id} sx={{ padding: 1, mb: multiChannel ? 1 : 0 }}>
          <Typography variant="h6" sx={{ mb: 1 }}>
            #{channel.name}
          </Typography>
          {channel.messages?.map((message) => (
            <MessageContent key={message.ts} message={message} />
          ))}
        </Paper>
      ))}
    </Box>
  )
}

export default ChannelMessageContainer
