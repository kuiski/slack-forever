import React from 'react'
import { atom, useRecoilValue, useSetRecoilState } from 'recoil'
import { Channel } from '@/entities/channel'

interface SlackChannelsState {
  channels: Channel[]
  selected: string[]
}

const slackChannelState = atom<SlackChannelsState>({
  key: 'SlackChannelState',
  default: {
    channels: [
      { id: 'ai', name: 'ai' },
      { id: 'bi', name: 'bi' },
      { id: 'random', name: 'random' },
      { id: 'ochinpo', name: 'ochinpo' },
      { id: 'paper_read_document', name: 'paper_read_document' },
    ],
    selected: [],
  } as any,
})

const merge = <T>(xs: T[], x: T) => {
  if (xs.includes(x)) return xs
  else return [...xs, x]
}

const remove = <T>(xs: T[], x: T) => {
  return xs.filter((_x) => _x !== x)
}

export const useSlackChannelState = () => {
  return useRecoilValue(slackChannelState)
}

export const useSlackChannelMutators = () => {
  const setChannelState = useSetRecoilState(slackChannelState)

  const setChannels = React.useCallback(
    (channels: Channel[]) =>
      setChannelState((channelState) => ({
        ...channelState,
        channels,
      })),
    [setChannelState]
  )

  const selectChannel = React.useCallback(
    (channelId: string, selectMulti: boolean = false) =>
      setChannelState((channelState) => ({
        ...channelState,
        selected: !selectMulti
          ? [channelId]
          : merge(channelState.selected, channelId),
      })),
    [setChannelState]
  )

  const unselectChannel = React.useCallback(
    (channelId: string) =>
      setChannelState((channelState) => ({
        ...channelState,
        selected: remove(channelState.selected, channelId),
      })),
    [setChannelState]
  )

  const toggleSelectChannel = React.useCallback(
    (channelId: string, remain: boolean = true) =>
      setChannelState((channelState) => {
        if (channelState.selected.includes(channelId)) {
          if (channelState.selected.length == 1 && remain) {
            return channelState
          } else {
            return {
              ...channelState,
              selected: remove(channelState.selected, channelId),
            } as SlackChannelsState
          }
        } else {
          return {
            ...channelState,
            selected: merge(channelState.selected, channelId),
          }
        }
      }),
    [setChannelState]
  )

  return {
    setChannels,
    selectChannel,
    unselectChannel,
    toggleSelectChannel,
  }
}
