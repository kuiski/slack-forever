import { graphQLSelector } from 'recoil-relay'
import { relayEnvironmentKey } from '@/lib/graphql/relay'
import { graphql } from 'relay-runtime'
import { getNode } from '@/lib/relay/getNode'
import { useRecoilValue } from 'recoil'

interface ChannelInfo {
  id: string
  name: string
}

export const channelListQuery = graphQLSelector({
  key: 'ChannelList',
  environment: relayEnvironmentKey,
  query: getNode(graphql`
    query channelList_ChannelListQuery {
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

export const useChannelList = (): ChannelInfo[] => {
  const channels = useRecoilValue(channelListQuery)
  return channels ?? []
}
