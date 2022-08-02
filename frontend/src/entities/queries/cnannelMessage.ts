export interface ChannelMessage {
  id: string
  name: string
  messages: Message[]
}

export type Message = JoinChannel | UnknownMessage | UserMessage

export interface JoinChannel {
  __typename: 'JoinChannel'
  type: 'message'
  subtype: 'join_channel'
  ts: string
  user: string
  text: string
}

export interface UserMessage {
  __typename: 'UserMessage'
  type: 'message'
  subtype: undefined
  ts: string
  user: string
  text: string
  user_profile: {
    display_name: string
    image_72: string
  }
}

export interface UnknownMessage {
  __typename: 'UnknownMessage'
  type: 'message'
  subtype: 'bot_message'
  ts: string
  text: string
}
