import { ApolloContext } from './context'
import { Resolvers, Channel } from './__generated__/server'

export const resolvers: Resolvers<ApolloContext> = {
  Query: {
    viewer: async (_parent, _args, { session }) => {
      return {
        userId: session.user.id,
      }
    },

    users: async (_parent, _args, { slackLog }) => {
      return slackLog.getUsers()
    },
  },

  Viewer: {
    channels: async (_parent, args, { slackLog, session }) => {
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
    members: async (parent, _args, { slackLog }) => {
      return (await slackLog.getChannelMembers(parent.id)) ?? []
    },

    messages: async (parent, args, { slackLog }) => {
      const messages =
        (await slackLog.getChannelMessages(parent.name, args.date)) ?? []
      return {
        edges: messages.filter((message) => message.type === 'message'),
      } as any
    },
  },

  Message: {
    __resolveType: (obj, _context, _info) => {
      // Not implemented message type
      if (obj.type !== 'message') return 'UnknownMessage'

      if (!('subtype' in obj)) {
        return 'UserMessage'
      }

      if (obj.subtype === 'bot_message') return 'BotMessage'
      else if (obj.subtype === 'channel_join') return 'JoinMessage'
      else return 'UnknownMessage'
    },
  },
}
