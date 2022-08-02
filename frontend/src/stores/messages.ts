import { useRecoilValue } from 'recoil'
import { graphQLSelector } from 'recoil-relay'
import { graphql } from 'relay-runtime'
import { relayEnvironmentKey } from '@/lib/graphql/relay'
import { getNode } from '@/lib/relay/getNode'
import { channelViewState } from '@/stores/view'
import { ChannelMessage, Message } from '@/entities/queries/cnannelMessage'
import { messages_MessagesQuery$data } from './__generated__/messages_MessagesQuery.graphql'

const mapResponse = (data: messages_MessagesQuery$data): ChannelMessage[] => {
  const channels = data.viewer.channels?.nodes ?? []
  return channels.map((channel) => ({
    id: channel?.id ?? '',
    name: channel?.name ?? '',
    messages: (channel?.messages?.edges as any as Message[]) || [],
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
                __typename
                type
                ts
                ... on UserMessage {
                  user
                  text
                  user_profile {
                    display_name
                    image_72
                  }
                }
                ... on JoinMessage {
                  user
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
    const channelState = get(channelViewState)
    return {
      names: channelState.selected,
      date: channelState.date,
    }
  },
  mapResponse,
})

export const useMessages = () => {
  return useRecoilValue(MessagesQuery)
}
