import React from 'react'

import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'

import { useChannelViewMutators, useChannelViewState } from '@/stores/view'
import { useChannels } from '@/stores/channels'

const ChannelList: React.FC = () => {
  const slackChannels = useChannelViewState()
  const channels = useChannels()

  const { selectChannel, toggleSelectChannel } = useChannelViewMutators()

  const onClickChannel = (
    e: React.MouseEvent<HTMLElement>,
    channelId: string
  ) => {
    if (e.shiftKey) {
      toggleSelectChannel(channelId)
    } else {
      selectChannel(channelId)
    }
  }

  return (
    <List dense component="div" disablePadding>
      {channels.map((ch) => (
        <ListItem key={ch.name} disablePadding>
          <ListItemButton
            selected={slackChannels.selected.includes(ch.name)}
            onClick={(e) => onClickChannel(e, ch.name)}
          >
            <ListItemText primary={'#  ' + ch.name} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  )
}

export default ChannelList
