import React from 'react'

import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'

import {
  useSlackChannelMutators,
  useSlackChannelState,
} from '@/stores/channels'
import { useChannelList } from '@/stores/channelList'

const ChannelList: React.FC = () => {
  const slackChannels = useSlackChannelState()
  const channels = useChannelList()

  const { selectChannel, toggleSelectChannel } = useSlackChannelMutators()

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
