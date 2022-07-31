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

import ChannelList from './ChannelList'
import { LocalizationProvider, StaticDatePicker } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import TextField from '@mui/material/TextField'
import ArchiveList from '@/components/layouts/sidebar/ArchiveList'

export interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = () => {
  const [open, setOpen] = React.useState(true)
  const [openArchive, setOpenArchive] = React.useState(true)

  const handleClick = () => {
    setOpen(!open)
  }

  const handleClickArchive = () => {
    setOpenArchive(!openArchive)
  }

  const [startDate, setStartDate] = React.useState<Date | undefined>(new Date())
  const [endDate, setEndDate] = React.useState<Date | undefined>()

  const [value, setValue] = React.useState<Date | null>(new Date())

  const handleDateChange = (
    newValue: Date | null,
    dateType: 'start' | 'end'
  ) => {
    if (dateType == 'start') {
      setStartDate(newValue ?? undefined)
    } else {
      setEndDate(newValue ?? undefined)
    }
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
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <StaticDatePicker
          displayStaticWrapperAs="desktop"
          openTo="day"
          value={value}
          onChange={(newValue) => {
            setValue(newValue)
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
      <Divider />
      <List dense>
        <ListItemButton onClick={handleClick}>
          <ListItemText primary="チャンネル" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open}>
          <React.Suspense fallback={<p>Loading...</p>}>
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
