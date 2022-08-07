import React from 'react'
import Avatar from '@mui/material/Avatar'
import { Message } from '@/entities/queries/cnannelMessage'

const MessageAvatar: React.FC<{ message: Message }> = ({ message }) => {
  if (message.subtype === 'bot_message') {
    return <Avatar alt={message.username} src={message.icons?.image_72} />
  } else {
    return (
      <Avatar
        alt={message.user_profile?.display_name}
        src={message.user_profile?.image_72}
      />
    )
  }
}

export default MessageAvatar
