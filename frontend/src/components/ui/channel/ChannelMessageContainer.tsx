import React from 'react'

import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'

import { useChannelViewState } from '@/stores/view'
import { useMessages } from '@/stores/messages'
import Typography from '@mui/material/Typography'
import { MessageContainer } from '@/components/ui/message/Message'

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
        <MessageContainer messages={channels[0].messages} />
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
          <MessageContainer messages={channel.messages} />
        </Paper>
      ))}
    </Box>
  )
}

export default ChannelMessageContainer
