/** 날짜·시간 라이브러리. 한국어, UTC, 상대 시간, 형식 파싱을 켠다 */
import dayjs from 'dayjs' // dayjs
import utc from 'dayjs/plugin/utc' // utc
import timezone from 'dayjs/plugin/timezone' // timezone
import relativeTime from 'dayjs/plugin/relativeTime' // relative Time
import customParseFormat from 'dayjs/plugin/customParseFormat' // custom Parse Format
import 'dayjs/locale/ko' // dayjs 패키지

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(relativeTime)
dayjs.extend(customParseFormat)
dayjs.locale('ko')

export { dayjs }
export default dayjs
