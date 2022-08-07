// Ref
// https://raw.githubusercontent.com/slackapi/node-slack-sdk/main/packages/web-api/src/response/ChannelsHistoryResponse.ts

export interface Message {
  attachments?: Attachment[]
  blocks?: Block[]
  bot_id?: string
  bot_profile?: BotProfile
  client_msg_id?: string
  display_as_bot?: boolean
  edited?: Edited
  files?: File[]
  icons?: MessageIcons
  inviter?: string
  latest_reply?: string
  parent_user_id?: string
  reactions?: Reaction[]
  reply_count?: number
  reply_users?: string[]
  reply_users_count?: number
  root?: Root
  subscribed?: boolean
  subtype?: string
  team?: string
  text?: string
  thread_ts?: string
  ts?: string
  type?: string
  upload?: boolean
  user?: string
  username?: string
  x_files?: string[]
}

export interface Attachment {
  actions?: Action[]
  app_unfurl_url?: string
  author_icon?: string
  author_id?: string
  author_link?: string
  author_name?: string
  author_subname?: string
  bot_id?: string
  callback_id?: string
  channel_id?: string
  channel_name?: string
  color?: string
  fallback?: string
  fields?: Field[]
  filename?: string
  footer?: string
  footer_icon?: string
  from_url?: string
  id?: number
  image_bytes?: number
  image_height?: number
  image_url?: string
  image_width?: number
  indent?: boolean
  is_app_unfurl?: boolean
  is_msg_unfurl?: boolean
  is_reply_unfurl?: boolean
  is_thread_root_unfurl?: boolean
  metadata?: Metadata
  mimetype?: string
  mrkdwn_in?: string[]
  msg_subtype?: string
  original_url?: string
  pretext?: string
  service_icon?: string
  service_name?: string
  service_url?: string
  size?: number
  text?: string
  thumb_height?: number
  thumb_url?: string
  thumb_width?: number
  title?: string
  title_link?: string
  ts?: string
  url?: string
  video_html?: string
  video_html_height?: number
  video_html_width?: number
}

export interface Action {
  confirm?: ActionConfirm
  data_source?: string
  id?: string
  min_query_length?: number
  name?: string
  option_groups?: OptionGroup[]
  options?: Option[]
  selected_options?: Option[]
  style?: string
  text?: string
  type?: string
  url?: string
  value?: string
}

export interface ActionConfirm {
  dismiss_text?: string
  ok_text?: string
  text?: string
  title?: string
}

export interface OptionGroup {
  text?: string
}

export interface Option {
  text?: string
  value?: string
}

export interface Field {
  short?: boolean
  title?: string
  value?: string
}

export interface Metadata {
  extension?: string
  format?: string
  original_h?: number
  original_w?: number
  rotation?: number
  thumb_160?: boolean
  thumb_360_h?: number
  thumb_360_w?: number
  thumb_64?: boolean
  thumb_80?: boolean
  thumb_tiny?: string
}

export interface Block {
  accessory?: Accessory
  alt_text?: string
  block_id?: string
  elements?: Element[]
  fallback?: string
  fields?: Text[]
  image_bytes?: number
  image_height?: number
  image_url?: string
  image_width?: number
  text?: Text
  title?: Text
  type?: string
}

export interface Accessory {
  alt_text?: string
  fallback?: string
  image_bytes?: number
  image_height?: number
  image_url?: string
  image_width?: number
  type?: string
}

export interface Element {
  action_id?: string
  alt_text?: string
  confirm?: ElementConfirm
  default_to_current_conversation?: boolean
  fallback?: string
  filter?: Filter
  image_bytes?: number
  image_height?: number
  image_url?: string
  image_width?: number
  initial_channel?: string
  initial_conversation?: string
  initial_date?: string
  initial_option?: InitialOption
  initial_user?: string
  min_query_length?: number
  placeholder?: Text
  response_url_enabled?: boolean
  style?: string
  text?: Text
  type?: string
  url?: string
  value?: string
}

export interface ElementConfirm {
  confirm?: Text
  deny?: Text
  style?: string
  text?: Text
  title?: Text
}

export interface Text {
  emoji?: boolean
  text?: string
  type?: string
  verbatim?: boolean
}

export interface Filter {
  exclude_bot_users?: boolean
  exclude_external_shared_channels?: boolean
}

export interface InitialOption {
  description?: Text
  text?: Text
  url?: string
  value?: string
}

export interface BotProfile {
  app_id?: string
  deleted?: boolean
  icons?: BotProfileIcons
  id?: string
  name?: string
  team_id?: string
  updated?: number
}

export interface BotProfileIcons {
  image_36?: string
  image_48?: string
  image_72?: string
}

export interface Edited {
  ts?: string
  user?: string
}

export interface File {
  created?: number
  display_as_bot?: boolean
  edit_link?: string
  editable?: boolean
  external_id?: string
  external_type?: string
  external_url?: string
  filetype?: string
  has_rich_preview?: boolean
  id?: string
  image_exif_rotation?: number
  is_external?: boolean
  is_public?: boolean
  is_starred?: boolean
  lines?: number
  lines_more?: number
  mimetype?: string
  mode?: string
  name?: string
  original_h?: number
  original_w?: number
  permalink?: string
  permalink_public?: string
  pretty_type?: string
  preview?: string
  preview_highlight?: string
  preview_is_truncated?: boolean
  public_url_shared?: boolean
  size?: number
  thumb_1024?: string
  thumb_1024_h?: number
  thumb_1024_w?: number
  thumb_160?: string
  thumb_360?: string
  thumb_360_h?: number
  thumb_360_w?: number
  thumb_480?: string
  thumb_480_h?: number
  thumb_480_w?: number
  thumb_64?: string
  thumb_720?: string
  thumb_720_h?: number
  thumb_720_w?: number
  thumb_80?: string
  thumb_800?: string
  thumb_800_h?: number
  thumb_800_w?: number
  thumb_960?: string
  thumb_960_h?: number
  thumb_960_w?: number
  thumb_tiny?: string
  timestamp?: number
  title?: string
  url_private?: string
  url_private_download?: string
  user?: string
  username?: string
}

export interface MessageIcons {
  emoji?: string
  image_64?: string
}

export interface Reaction {
  count?: number
  name?: string
  users?: string[]
}

export interface Root {
  bot_id?: string
  bot_profile?: BotProfile
  edited?: Edited
  icons?: MessageIcons
  latest_reply?: string
  parent_user_id?: string
  reply_count?: number
  reply_users?: string[]
  reply_users_count?: number
  subscribed?: boolean
  subtype?: string
  team?: string
  text?: string
  thread_ts?: string
  ts?: string
  type?: string
  user?: string
  username?: string
}
