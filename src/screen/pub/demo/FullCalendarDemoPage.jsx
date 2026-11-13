'use client'

import { useState } from 'react' // 상태 훅
import {
  FullCalendar, // Full Calendar 컴포넌트
  dayGridPlugin, // day Grid Plugin
  timeGridPlugin, // time Grid Plugin
  interactionPlugin, // interaction Plugin
  formatDate // format Date
} from '@/lib/fullcalendar' // 라이브러리/유틸 · fullcalendar
import { DemoLayout } from '@/screen/pub/layout/DemoLayout' // Demo Layout 컴포넌트
import { DemoBlock } from '@/screen/pub/widgets/preview/DemoBlock' // Demo Block 컴포넌트
import { wrapPageExample } from '@/screen/pub/lib/pageExampleCode' // wrap Page Example

const initialEvents = [
  { id: '1', title: '디자인 리뷰', start: '2026-11-05' },
  { id: '2', title: '배포', start: '2026-11-12' },
  { id: '3', title: '스프린트 회의', start: '2026-11-07T10:00:00', end: '2026-11-07T11:30:00' }
]

/** FullCalendar 데모 */
export default function FullCalendarDemoPage () {
  const [events, setEvents] = useState(initialEvents)
  const [lastAction, setLastAction] = useState('날짜를 클릭하거나 이벤트를 드래그해 보세요.')

  return (
    <DemoLayout
      title="FullCalendar"
      description="@fullcalendar/react + daygrid/timegrid/interaction (@/lib/fullcalendar)"
      slug="fullcalendar"
    >
      <DemoBlock
        title="월/주 뷰 · 날짜 클릭 · 드래그"
        code={wrapPageExample(`const [events, setEvents] = useState([
  { id: '1', title: '디자인 리뷰', start: '2026-11-05' },
  { id: '2', title: '배포', start: '2026-11-12' }
])
const [lastAction, setLastAction] = useState('')

<>
  <p>
    today: {formatDate(new Date(), { month: 'long', year: 'numeric', day: 'numeric', locale: 'ko' })}
    <br />
    {lastAction}
  </p>
  <FullCalendar
    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
    initialView="dayGridMonth"
    headerToolbar={{
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek'
    }}
    editable
    selectable
    events={events}
    height="auto"
    dateClick={(info) => {
      const title = '새 일정 ' + (events.length + 1)
      setEvents((prev) => [...prev, { id: String(Date.now()), title, start: info.dateStr }])
      setLastAction('추가: ' + title + ' (' + info.dateStr + ')')
    }}
    eventDrop={(info) => {
      setEvents((prev) => prev.map((ev) => (
        ev.id === info.event.id
          ? { ...ev, start: info.event.startStr, end: info.event.endStr || undefined }
          : ev
      )))
      setLastAction('이동: ' + info.event.title + ' → ' + info.event.startStr)
    }}
  />
</>`, {
          name: 'FullCalendarExample',
          reactImports: ['useState'],
          compImports: [],
          extraImports: [
            `import {
  FullCalendar,
  dayGridPlugin,
  timeGridPlugin,
  interactionPlugin,
  formatDate
} from '@/lib/fullcalendar'`
          ]
        })}
      >
        <p style={{ margin: '0 0 12px', fontSize: 13, color: 'var(--color-text-muted)' }}>
          today: {formatDate(new Date(), { month: 'long', year: 'numeric', day: 'numeric', locale: 'ko' })}
          <br />
          {lastAction}
        </p>
        <div className="lib-demo-calendar">
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek'
            }}
            editable
            selectable
            events={events}
            height="auto"
            dateClick={(info) => {
              const id = String(Date.now())
              const title = `새 일정 ${events.length + 1}`
              setEvents((prev) => [...prev, { id, title, start: info.dateStr }])
              setLastAction(`추가: ${title} (${info.dateStr})`)
            }}
            eventDrop={(info) => {
              setEvents((prev) => prev.map((ev) => (
                ev.id === info.event.id
                  ? { ...ev, start: info.event.startStr, end: info.event.endStr || undefined }
                  : ev
              )))
              setLastAction(`이동: ${info.event.title} → ${info.event.startStr}`)
            }}
          />
        </div>
      </DemoBlock>
    </DemoLayout>
  )
}
