import React from 'react'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'

import { LocalizationProvider } from '@mui/x-date-pickers'
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker'
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

export interface DateRangeSelectorProps {
  start?: Date
  end?: Date
  onChange: (newValue: Date | null, dateType: 'start' | 'end') => void
}

const DateRangeSelector: React.FC<DateRangeSelectorProps> = ({
  start,
  end,
  onChange,
}) => {
  const onStartChange = React.useCallback(
    (d: Date | null) => {
      onChange(d, 'start')
    },
    [onChange]
  )

  const onEndChange = React.useCallback(
    (d: Date | null) => {
      onChange(d, 'end')
    },
    [onChange]
  )

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box
        sx={{
          display: { xs: 'none', sm: 'block' },
          pt: 2,
          pb: 2,
          ml: 1,
          mr: 1,
        }}
      >
        {/* PC View */}
        <DesktopDatePicker
          label="開始日"
          inputFormat="YYYY/MM/DD"
          value={start ?? null}
          onChange={onStartChange}
          renderInput={(params) => <TextField {...params} />}
        />
        <Typography>〜</Typography>
        <DesktopDatePicker
          label="終了日"
          inputFormat="YYYY/MM/DD"
          value={end ?? null}
          onChange={onEndChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </Box>
      <Box
        sx={{
          display: { xs: 'block', sm: 'none' },
          pt: 2,
          pb: 2,
          ml: 1,
          mr: 1,
        }}
      >
        {/* Mobile View */}
        <MobileDatePicker
          label="開始日"
          inputFormat="YYYY/MM/DD"
          value={start ?? null}
          onChange={onStartChange}
          renderInput={(params) => <TextField {...params} />}
        />
        <Typography>〜</Typography>
        <MobileDatePicker
          label="終了日"
          inputFormat="YYYY/MM/DD"
          value={end ?? null}
          onChange={onEndChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </Box>
    </LocalizationProvider>
  )
}

export default DateRangeSelector
