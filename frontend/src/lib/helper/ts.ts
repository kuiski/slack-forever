import dayjs from 'dayjs'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'

dayjs.extend(timezone)
dayjs.extend(utc)

const ts = (t: string, format: string = 'YYYY/MM/DD HH:mm:ss') => {
  return dayjs.unix(Number.parseFloat(t)).tz('Asia/Tokyo').format(format)
}

export default ts
