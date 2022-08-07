export interface ChannelMessage {
  id: string
  name: string
  messages: Message[]
}

export interface Message {
  type: string
  ts: string
  subtype?: string
  user?: string
  user_profile?: UserProfile
  text?: string
  blocks?: MessageBlock[]
  files?: UploadFileInfo[]

  // bot
  username?: string
  icons?: BotIcon
}

export interface UserProfile {
  display_name: string
  real_name: string
  image_72: string
}

export interface MessageBlock {
  type: string
  block_id: string
  elements: BlockElement[]
}

interface RichTextSection {
  type: 'rich_text_section'
  elements: Section[]
}

interface RichTextQuote {
  type: 'rich_text_quote'
  elements: Section[]
}

interface RichTextList {
  type: 'rich_text_list'
  elements: RichTextSection[]
}

export type BlockElement = RichTextSection | RichTextList | RichTextQuote

export interface Section {
  type: 'text' | 'link' | 'emoji' | 'user' | 'channel'
  text?: string
  url?: string
  user_id?: string
  emoji?: {
    type: string
    name: string
    unicode?: string
  }
  style?: {
    code: boolean
  }
}

export interface BotIcon {
  image_36?: string
  image_48?: string
  image_72?: string
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
