import { Config } from 'apollo-server-micro'
import { ApolloContext } from './context'
import { SlackLogDatasource } from '@/lib/slack-log'

const resolveChannelMembers = (slackLog: SlackLogDatasource, channel: any) => {
  const members = channel.members.map((member: any) => slackLog.getUser(member))
  return {
    ...channel,
    members,
  }
}

export const resolvers: Config['resolvers'] = {
  Query: {
    channels: async (_parent, _args, { slackLog, session }: ApolloContext) => {
      return slackLog.getJoinedChannels(session.user.id)
    },

    users: async (_parent, _args, { slackLog }: ApolloContext) => {
      return slackLog.getUsers()
    },
  },

  Channel: {
    async members(parent: any, _args: any, { slackLog }: ApolloContext) {
      return slackLog.getChannelMembers(parent.id)
    },
  },
}
