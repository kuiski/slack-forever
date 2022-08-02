import React from 'react'

import {
  LocalizationProvider,
  StaticDatePicker,
  PickersDay,
} from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import TextField from '@mui/material/TextField'

interface CalenderProps {
  date: string | undefined
  setDate: (date: Date | null) => void
}

const Calender: React.FC<CalenderProps> = ({ date, setDate }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StaticDatePicker
        displayStaticWrapperAs="desktop"
        openTo="day"
        value={date}
        onChange={setDate}
        renderDay={renderDay}
        renderInput={(params) => <TextField {...params} fullWidth />}
      />
    </LocalizationProvider>
  )
}

const renderDay = (
  day: Date,
  validSelectedDays: Date[],
  pickersDayProps: any
) => {
  return (
    <div role="cell" key={pickersDayProps.key}>
      <PickersDay {...pickersDayProps} />
    </div>
  )
}

export default Calender
