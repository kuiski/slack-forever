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
                    real_name
                    image_72
                  }
                }
                ... on JoinMessage {
                  user
                  text
                  user_profile {
                    display_name
                    real_name
                    image_72
                  }
                }
                ... on UploadMessage {
                  user
                  text
                  user_profile {
                    display_name
                    real_name
                    image_72
                  }
                  files {
                    id
                    name
                    permalink
                    url_private
                    thumb_360
                    thumb_360_h
                    thumb_360_w
                    thumb_480
                    thumb_480_h
                    thumb_480_w
                    thumb_720
                    thumb_720_h
                    thumb_720_w
                  }
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
