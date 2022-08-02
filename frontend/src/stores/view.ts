import React from 'react'
import { atom, useRecoilValue, useSetRecoilState } from 'recoil'
import dayjs from 'dayjs'

interface ChannelViewState {
  selected: string[]
  date?: string
}

export const channelViewState = atom<ChannelViewState>({
  key: 'ChannelViewState',
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

export const useChannelViewState = () => {
  return useRecoilValue(channelViewState)
}

export const useChannelViewMutators = () => {
  const setState = useSetRecoilState(channelViewState)

  const selectChannel = React.useCallback(
    (channelName: string, selectMulti: boolean = false) =>
      setState((channelState) => ({
        ...channelState,
        selected: !selectMulti
          ? [channelName]
          : merge(channelState.selected, channelName),
      })),
    [setState]
  )

  const toggleSelectChannel = React.useCallback(
    (channelName: string, remain: boolean = true) =>
      setState((channelState) => {
        if (channelState.selected.includes(channelName)) {
          if (channelState.selected.length == 1 && remain) {
            return channelState
          } else {
            return {
              ...channelState,
              selected: remove(channelState.selected, channelName),
            } as ChannelViewState
          }
        } else {
          return {
            ...channelState,
            selected: merge(channelState.selected, channelName),
          }
        }
      }),
    [setState]
  )

  const setDate = React.useCallback(
    (date: Date | null) => {
      setState((channelState) => {
        if (!date) {
          return {
            ...channelState,
            date: undefined,
          }
        }

        return {
          ...channelState,
          date: dayjs(date).format('YYYY-MM-DD'),
        }
      })
    },
    [setState]
  )

  return {
    selectChannel,
    toggleSelectChannel,
    setDate,
  }
}
