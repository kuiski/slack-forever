import React from 'react'
import { getThumbnail, Message } from '@/entities/queries/cnannelMessage'
import ts2s from '@/lib/helper/ts'

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import MessageAvatar from './MessageAvatar'
import MessageBlock from './MessageBlock'

const MessageContent: React.FC<{ message: Message }> = ({ message }) => {
  if (message.type !== 'message') {
    return <div>Unknown message type: {message.type}</div>
  }

  return (
    <Grid container wrap="nowrap" sx={{ mt: 1 }}>
      <Grid item>
        <MessageAvatar message={message} />
      </Grid>
      <Grid container item direction="column" sx={{ ml: 1 }}>
        <Grid container item>
          <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
            {message.user_profile?.display_name ||
              message.user_profile?.real_name ||
              message.username}
          </Typography>
          <Typography variant="body2" sx={{ ml: 1 }}>
            {ts2s(message.ts)}
          </Typography>
        </Grid>
        <Box sx={{ mt: 1 }}>
          <MessageBody message={message} />
        </Box>
      </Grid>
    </Grid>
  )
}

const MessageBody: React.FC<{ message: Message }> = ({ message }) => {
  if (message.subtype === 'channel_join') {
    return (
      <Typography variant="body2">
        {message.user_profile?.display_name || message.user_profile?.real_name}{' '}
        さんがチャンネルに参加しました
      </Typography>
    )
  }

  return (
    <Typography variant="body2">
      {!message.blocks && message.text}
      {message.blocks?.map((block) => (
        <MessageBlock key={block.block_id} block={block} />
      ))}
      {message.files?.map((file) => {
        const thumb = getThumbnail(file)
        if (!thumb) {
          return null
        }

        return (
          <div key={file.id}>
            <a href={file.url_private} target="_blank" rel="noreferrer">
              <img src={thumb.thumb} />
            </a>
          </div>
        )
      })}
    </Typography>
  )
}

export default MessageContent
