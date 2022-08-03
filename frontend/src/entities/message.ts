export interface MessageBase {
  user: string
  ts: string
}

export interface JoinMessage {
  type: 'message'
  subtype: 'channel_join'
  text: string
}

export interface UserMessage {
  type: 'message'
  text: string
  user_profile: {
    image_72: string
    display_name: string
  }
  reactions?: Reaction[]
  attachments?: Attachment[]
}

export interface UnknownMessage {
  type: string
}

export interface Reaction {
  name: string
  users: string[]
  count: number
}

export interface Attachment {
  service_name: string
  title: string
  title_link: string
  text: string
  thumb_url: string
  thumb_width: number
  thumb_height: number
}

export type Message = MessageBase & (JoinMessage | UserMessage | UnknownMessage)
