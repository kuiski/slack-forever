import { gql, Config } from "apollo-server-micro";

export const typeDefs: Config["typeDefs"] = gql`
  type User {
    id: String
    team_id: String
    name: String
    deleted: Boolean
    profile: UserProfile
    updated: Int
  }

  type UserProfile {
    title: String
    real_name: String
    real_name_normalized: String
    display_name: String
    status_text: String
    status_emoji: String
    avatar_hash: String
    image_24: String
    image_32: String
    image_48: String
    image_72: String
    image_192: String
    image_512: String
    image_original: String
    team: String
  }

  type Channel {
    id: String
    name: String
    created: Int
    creator: String
    is_archived: Boolean
    is_general: Boolean
    members: [User!]
    topic: ChannelTopic
    purpose: ChannelPurpose
  }

  type ChannelTopic {
    value: String
    creator: String
    lastSet: Int
  }

  type ChannelPurpose {
    value: String
    creator: String
    lastSet: Int
  }

  type Query {
    users: [User]
    channels: [Channel]
  }
`;
