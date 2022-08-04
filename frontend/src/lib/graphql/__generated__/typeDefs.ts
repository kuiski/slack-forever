import { gql, Config } from "apollo-server-micro"

export const typeDefs: Config['typeDefs'] = gql`
schema {
  query: Query
}

type BotIcon {
  image_36: String
  image_48: String
  image_72: String
}

type BotMessage implements Message {
  icons: BotIcon!
  subtype: String!
  text: String!
  ts: String!
  type: String!
  username: String!
}

type Channel {
  created: Int!
  creator: String!
  id: String!
  is_archived: Boolean!
  is_general: Boolean!
  members: [User!]
  messages(date: String!): ChannelMessagesConnection
  name: String!
  purpose: ChannelPurpose!
  topic: ChannelTopic!
}

type ChannelMessagesConnection {
  date: String!
  edges: [Message]
}

type ChannelMessagesEdge {
  node: [Message]
}

type ChannelPurpose {
  creator: String
  lastSet: Int
  value: String
}

type ChannelTopic {
  creator: String
  lastSet: Int
  value: String
}

type ChannelsConnection {
  nodes: [Channel]
}

type JoinMessage implements Message {
  subtype: String!
  text: String!
  ts: String!
  type: String!
  user: String!
  user_profile: UserProfile
}

interface Message {
  text: String!
  ts: String!
  type: String!
}

type Query {
  users: [User!]
  viewer: Viewer!
}

type UnknownMessage implements Message {
  subtype: String
  text: String!
  ts: String!
  type: String!
}

type UploadFileInfo {
  id: String!
  name: String!
  permalink: String
  thumb_360: String
  thumb_360_h: String
  thumb_360_w: String
  thumb_480: String
  thumb_480_h: String
  thumb_480_w: String
  thumb_720: String
  thumb_720_h: String
  thumb_720_w: String
  url_private: String
}

type UploadMessage implements Message {
  files: [UploadFileInfo!]
  text: String!
  ts: String!
  type: String!
  user: String!
  user_profile: UserProfile
}

type User {
  deleted: Boolean
  id: String
  name: String
  profile: UserProfile
  team_id: String
  updated: Int
}

type UserMessage implements Message {
  text: String!
  ts: String!
  type: String!
  user: String!
  user_profile: UserProfile
}

type UserProfile {
  avatar_hash: String
  display_name: String
  image_24: String
  image_32: String
  image_48: String
  image_72: String
  image_192: String
  image_512: String
  image_original: String
  is_restricted: Boolean
  real_name: String
  real_name_normalized: String
  status_emoji: String
  status_text: String
  team: String
  title: String
}

type Viewer {
  channels(names: [String!]): ChannelsConnection
  userId: String!
}
`;
