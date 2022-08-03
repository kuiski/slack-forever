export interface ChannelMessage {
  id: string
  name: string
  messages: Message[]
}

export type Message = JoinMessage | UnknownMessage | UserMessage | UploadMessage

export interface JoinMessage {
  __typename: 'JoinMessage'
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

export interface UploadMessage {
  __typename: 'UploadMessage'
  type: 'message'
  ts: string
  user: string
  text: string
  files: UploadFileInfo[]
}

export interface UploadFileInfo {
  id: string
  permalink: string
  url_private: string
  thumb_360?: string
  thumb_360_w?: string
  thumb_360_h?: string
  thumb_480?: string
  thumb_480_w?: string
  thumb_480_h?: string
  thumb_720?: string
  thumb_720_w?: string
  thumb_720_h?: string
}

export interface UnknownMessage {
  __typename: 'UnknownMessage'
  type: 'message'
  subtype: 'bot_message'
  ts: string
  text: string
}

export const getThumbnail = (
  file: UploadFileInfo,
  prior: number[] = [360, 480, 720]
) => {
  for (const size of prior) {
    const key = `thumb_${size}`
    if (key in file) {
      return {
        thumb: (file as any)[`thumb_${size}`] as string,
        w: (file as any)[`thumb_${size}_w`] as string | undefined,
        h: (file as any)[`thumb_${size}_h`] as string | undefined,
      }
    }
  }

  return undefined
}
