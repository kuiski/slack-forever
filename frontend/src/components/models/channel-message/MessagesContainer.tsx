import React from 'react'
import { useRecoilValue } from 'recoil'
import { channelListQuery } from '@/stores/channelList'
import { useSlackChannelState } from '@/stores/channels'
import { useMessages } from '@/stores/messages'
import Typography from '@mui/material/Typography'

/**
 * 1日分のデータを保持するコンテナ
 * @param channels 選択中のチャンネル名
 * @param date 日付
 */
const MessagesContainer: React.FC = () => {
  const { selected, date } = useSlackChannelState()

  if (selected.length === 0 || !date) {
    return <div>Default Content</div>
  } else {
    return (
      <div>
        <React.Suspense fallback={'loading'}>
          <MessageContentContainer />
        </React.Suspense>
      </div>
    )
  }
}

const MessageContentContainer = () => {
  const channels = useMessages()
  if (!channels) return null

  return (
    <div>
      {channels.map((channel) => (
        <div>
          <Typography variant="h6">#{channel.name}</Typography>
          <Messages messages={channel.messages} />
        </div>
      ))}
    </div>
  )
}

const Messages = ({ messages }: { messages: any }) => {
  return (
    <ul>
      {messages.map((message) => (
        <li>
          <div>{message.text ?? '&lt;Unknown message type&gt;'}</div>
        </li>
      ))}
    </ul>
  )
}

export default MessagesContainer
