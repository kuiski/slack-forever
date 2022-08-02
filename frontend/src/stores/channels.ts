import { graphQLSelector } from 'recoil-relay'
import { relayEnvironmentKey } from '@/lib/graphql/relay'
import { graphql } from 'relay-runtime'
import { getNode } from '@/lib/relay/getNode'
import { useRecoilValue } from 'recoil'
import { ChannelInfo } from '@/entities/queries/channelList'

export const channelListQuery = graphQLSelector({
  key: 'ChannelList',
  environment: relayEnvironmentKey,
  query: getNode(graphql`
    query channels_ChannelListQuery {
      viewer {
        channels {
          nodes {
            id
            name
          }
        }
      }
    }
  `),
  default: null,
  variables: {},
  mapResponse: (data) => data?.viewer?.channels?.nodes as ChannelInfo[],
})

export const useChannels = (): ChannelInfo[] => {
  const channels = useRecoilValue(channelListQuery)
  return channels ?? []
}
