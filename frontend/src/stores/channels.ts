import React from 'react'
import { atom, useRecoilValue, useSetRecoilState } from 'recoil'

interface SlackChannelsState {
  selected: string[]
  date?: string
}

export const slackChannelState = atom<SlackChannelsState>({
  key: 'SlackChannelState',
  default: {
    selected: [],
    date: '2022-07-10',
  },
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

  const selectChannel = React.useCallback(
    (channelName: string, selectMulti: boolean = false) =>
      setChannelState((channelState) => ({
        ...channelState,
        selected: !selectMulti
          ? [channelName]
          : merge(channelState.selected, channelName),
      })),
    [setChannelState]
  )

  const toggleSelectChannel = React.useCallback(
    (channelName: string, remain: boolean = true) =>
      setChannelState((channelState) => {
        if (channelState.selected.includes(channelName)) {
          if (channelState.selected.length == 1 && remain) {
            return channelState
          } else {
            return {
              ...channelState,
              selected: remove(channelState.selected, channelName),
            } as SlackChannelsState
          }
        } else {
          return {
            ...channelState,
            selected: merge(channelState.selected, channelName),
          }
        }
      }),
    [setChannelState]
  )

  return {
    selectChannel,
    toggleSelectChannel,
  }
}
