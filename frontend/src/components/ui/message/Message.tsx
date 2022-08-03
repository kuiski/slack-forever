import React from 'react'

import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'

import {
  getThumbnail,
  JoinMessage,
  UploadMessage,
  Message,
  UserMessage,
} from '@/entities/queries/cnannelMessage'
import ts from '@/lib/helper/ts'
import Typography from '@mui/material/Typography'

export const MessageContainer: React.FC<{ messages: Message[] }> = ({
  messages,
}) => {
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
        <MessageItem message={message} key={message.ts} />
      ))}
    </Stack>
  )
}

export const MessageItem: React.FC<{ message: Message }> = ({ message }) => {
  if (message.__typename === 'UserMessage')
    return <UserMessageItem message={message} />
  else if (message.__typename === 'JoinMessage')
    return <JoinMessageItem message={message} />
  else if (message.__typename === 'UploadMessage')
    return <UploadMessageItem message={message} />
  else return <UnknownMessageItem message={message} />
}

export const UserMessageItem: React.FC<{ message: UserMessage }> = ({
  message,
}) => {
  return (
    <Grid container wrap="nowrap" sx={{ mt: 1 }}>
      <Grid item>
        <Avatar
          alt={message.user_profile.display_name}
          src={message.user_profile.image_72}
        />
      </Grid>
      <Grid container item direction="column" sx={{ ml: 1 }}>
        <Grid container item>
          <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
            {message.user_profile.display_name}
          </Typography>
          <Typography variant="body2" sx={{ ml: 1 }}>
            {ts(message.ts)}
          </Typography>
        </Grid>
        <Box sx={{ mt: 1 }}>
          <Typography variant="body2">{message.text}</Typography>
        </Box>
      </Grid>
    </Grid>
  )
}

export const JoinMessageItem: React.FC<{ message: JoinMessage }> = ({
  message,
}) => {
  return (
    <div>
      <div>{message.ts}</div>
      <div>{message.text}</div>
    </div>
  )
}

export const UploadMessageItem: React.FC<{ message: UploadMessage }> = ({
  message,
}) => {
  return (
    <div>
      <div>{ts(message.ts)}</div>
      <div>{message.text}</div>
      {message.files.map((file) => {
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
      <div></div>
    </div>
  )
}

export const UnknownMessageItem: React.FC<{ message: Message }> = ({
  message,
}) => {
  return (
    <div>
      <div>{message.text}</div>
      <div>{message.ts}</div>
    </div>
  )
}
