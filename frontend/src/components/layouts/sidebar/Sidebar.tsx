import React from 'react'

import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import Collapse from '@mui/material/Collapse'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'

import Calender from './Calender'
import ChannelList from './ChannelList'
import ArchiveList from './ArchiveList'
import { useChannelViewMutators, useChannelViewState } from '@/stores/view'
import ListSkeleton from '@/components/ui/ListSkeleton'

export interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = () => {
  const [open, setOpen] = React.useState(true)
  const [openArchive, setOpenArchive] = React.useState(true)
  const { date } = useChannelViewState()
  const { setDate } = useChannelViewMutators()

  const handleClick = () => {
    setOpen(!open)
  }

  const handleClickArchive = () => {
    setOpenArchive(!openArchive)
  }

  return (
    <div>
      <Toolbar>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
        >
          Slack Forever
        </Typography>
      </Toolbar>
      <Divider />
      <Calender date={date} setDate={setDate} />
      <Divider />
      <List dense>
        <ListItemButton onClick={handleClick}>
          <ListItemText primary="チャンネル" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open}>
          <React.Suspense fallback={<ListSkeleton bars={3} />}>
            <ChannelList />
          </React.Suspense>
        </Collapse>
      </List>
      <Divider />
      <List dense>
        <ListItemButton onClick={handleClickArchive}>
          <ListItemText primary="月別" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openArchive}>
          <ArchiveList />
        </Collapse>
      </List>
      <Divider />
    </div>
  )
}

export default Sidebar
