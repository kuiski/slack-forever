import React from 'react'

interface MessagesContainerProps {
  channels: string[]
  date: Date
}

/**
 * 1日分のデータを保持するコンテナ
 * @param channels 選択中のチャンネル名
 * @param date 日付
 */
const MessagesContainer: React.FC<MessagesContainerProps> = ({
  channels,
  date,
}) => {
  return <div>{channels.join(', ')}</div>
}

export default MessagesContainer
