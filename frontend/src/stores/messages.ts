import { graphQLSelector } from 'recoil-relay'
import { relayEnvironmentKey } from '@/lib/graphql/relay'
import { graphql } from 'relay-runtime'
import { getNode } from '@/lib/relay/getNode'
import { useRecoilValue } from 'recoil'
import { slackChannelState } from '@/stores/channels'
import { messages_MessagesQuery$data } from './__generated__/messages_MessagesQuery.graphql'

export type ChannelQueryResult = {
  id: string
  name: string
  messages: {
    type: string
    ts: string
    text?: string
  }[]
}[]

const mapResponse = (data: messages_MessagesQuery$data): ChannelQueryResult => {
  const channels = data.viewer.channels?.nodes ?? []
  return channels.map((channel) => ({
    id: channel?.id ?? '',
    name: channel?.name ?? '',
    messages: (channel?.messages?.edges as any) || [],
  }))
}

export const MessagesQuery = graphQLSelector({
  key: 'MessageList',
  environment: relayEnvironmentKey,
  query: getNode(graphql`
    query messages_MessagesQuery($names: [String!], $date: String!) {
      viewer {
        channels(names: $names) {
          nodes {
            id
            name
            messages(date: $date) {
              edges {
                type
                ts
                ... on TextMessage {
                  text
                }
              }
            }
          }
        }
      }
    }
  `),
  default: null,
  variables: ({ get }) => {
    const channelState = get(slackChannelState)
    return {
      names: channelState.selected,
      date: channelState.date,
    }
  },
  mapResponse: mapResponse,
})

export const useMessages = () => {
  return useRecoilValue(MessagesQuery)
}
