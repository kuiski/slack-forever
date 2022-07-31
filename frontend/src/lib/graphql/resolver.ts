import { Config } from 'apollo-server-micro'
import { ApolloContext } from './context'
import { SlackLogDatasource } from '@/lib/slack-log'
import { Channel } from '@/entities/channel'
import { Message } from '@/entities/message'

const resolveChannelMembers = (slackLog: SlackLogDatasource, channel: any) => {
  const members = channel.members.map((member: any) => slackLog.getUser(member))
  return {
    ...channel,
    members,
  }
}

export const resolvers: Config['resolvers'] = {
  Query: {
    viewer: async (_parent, _args, { slackLog, session }: ApolloContext) => {
      return {
        userId: session.user.id,
      }
    },

    users: async (_parent, _args, { slackLog }: ApolloContext) => {
      return slackLog.getUsers()
    },
  },

  Viewer: {
    channels: async (
      _parent,
      args: { names?: string[] },
      { slackLog, session }: ApolloContext
    ) => {
      const joinedChannels = await slackLog.getJoinedChannels(session.user.id)
      if (!args.names) {
        return { nodes: joinedChannels }
      } else {
        const res: Channel[] = []
        const errors: string[] = []
        args.names.forEach((name) => {
          const item = joinedChannels.find((ch) => ch.name === name)
          if (item) {
            res.push(item)
          } else {
            errors.push("You don't have permission to read channel #" + name)
          }
        })

        if (errors.length > 0) {
          throw Error(errors.join('\n'))
        }
        return { nodes: res }
      }
    },
  },

  Channel: {
    members: async (parent: any, _args: any, { slackLog }: ApolloContext) => {
      return slackLog.getChannelMembers(parent.id)
    },

    messages: async (
      parent: Channel,
      args: { date: string },
      { slackLog }: ApolloContext
    ) => {
      return {
        edges: await slackLog.getChannelMessages(parent.name, args.date),
      }
    },
  },

  Message: {
    __resolveType: (obj: Message, _context: any, _info: any) => {
      if (obj.type === 'message' && !('subtype' in obj)) {
        return 'TextMessage'
      }
      return 'UnknownMessage'
    },
  },
}
