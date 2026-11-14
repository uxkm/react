'use client'

import { useState } from 'react' // 상태 훅
import {
  DndContext, // Dnd Context 컴포넌트
  closestCenter, // closest Center
  KeyboardSensor,
  sortableKeyboardCoordinates,
  PointerSensor, // Pointer Sensor 컴포넌트
  useSensor, // Sensor 훅
  useSensors, // Sensors 훅
  SortableContext, // Sortable Context 컴포넌트
  useSortable, // Sortable 훅
  arrayMove, // array Move
  verticalListSortingStrategy, // vertical List Sorting Strategy
  CSS // CSS 컴포넌트
} from '@/lib/vendor/dnd' // 라이브러리/유틸 · dnd
import { DemoLayout } from '@/screen/pub/layout/DemoLayout' // Demo Layout 컴포넌트
import { DemoBlock } from '@/screen/pub/widgets/preview/DemoBlock' // Demo Block 컴포넌트
import { wrapPageExample } from '@/screen/pub/lib/pageExampleCode' // wrap Page Example

function SortableItem ({ id, index, count, onMove }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id })
  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  }

  return (
    <li
      ref={setNodeRef}
      className="lib-demo-list_item"
      style={style}
    >
      <button type="button" {...attributes} {...listeners} aria-label={`${id} 순서 이동`}>{id}</button>
      <button type="button" disabled={index === 0} aria-label={`${id} 위로 이동`} onClick={() => onMove(index, index - 1)}>위로</button>
      <button type="button" disabled={index === count - 1} aria-label={`${id} 아래로 이동`} onClick={() => onMove(index, index + 1)}>아래로</button>
    </li>
  )
}

/** @dnd-kit 드래그 정렬 데모 */
export default function DndDemoPage () {
  const [items, setItems] = useState(['Alpha', 'Bravo', 'Charlie', 'Delta'])
  const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 6 } }), useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates }))

  const onDragEnd = (event) => {
    const { active, over } = event
    if (!over || active.id === over.id) return
    setItems((prev) => {
      const oldIndex = prev.indexOf(active.id)
      const newIndex = prev.indexOf(over.id)
      return arrayMove(prev, oldIndex, newIndex)
    })
  }

  return (
    <DemoLayout
      title="DnD Kit"
      description="@dnd-kit/core · sortable · utilities — 목록 드래그 정렬 (@/lib/vendor/dnd)"
      slug="dnd"
    >
      <DemoBlock
        title="세로 목록 정렬"
        code={wrapPageExample(`const [items, setItems] = useState(['Alpha', 'Bravo', 'Charlie', 'Delta'])
const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 6 } }), useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates }))

const onDragEnd = ({ active, over }) => {
  if (!over || active.id === over.id) return
  setItems((prev) => arrayMove(prev, prev.indexOf(active.id), prev.indexOf(over.id)))
}

<DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={onDragEnd}>
  <SortableContext items={items} strategy={verticalListSortingStrategy}>
    <ul className="lib-demo-list">
      {items.map((id, index) => <SortableItem key={id} id={id} index={index} count={items.length} onMove={(from, to) => setItems(previous => arrayMove(previous, from, to))} />)}
    </ul>
  </SortableContext>
</DndContext>`, {
          name: 'DndExample',
          reactImports: ['useState'],
          compImports: [],
          extraImports: [
            `import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  sortableKeyboardCoordinates,
  PointerSensor,
  useSensor,
  useSensors,
  SortableContext,
  useSortable,
  arrayMove,
  verticalListSortingStrategy,
  CSS
} from '@/lib/vendor/dnd'

function SortableItem ({ id, index, count, onMove }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id })
  const style = { transform: CSS.Transform.toString(transform), transition }

  return (
    <li ref={setNodeRef} className="lib-demo-list_item" style={style}>
      <button type="button" {...attributes} {...listeners} aria-label={id + ' 순서 이동'}>{id}</button>
      <button type="button" disabled={index === 0} onClick={() => onMove(index, index - 1)}>위로</button>
      <button type="button" disabled={index === count - 1} onClick={() => onMove(index, index + 1)}>아래로</button>
    </li>
  )
}`
          ]
        })}
      >
        <p style={{ margin: '0 0 12px', color: 'var(--color-text-muted)', fontSize: 13 }}>
          항목을 드래그하거나, 버튼에서 Space로 잡은 뒤 방향키로 이동하고 Space로 놓으세요. Escape로 취소합니다.
        </p>
        <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={onDragEnd} accessibility={{
          screenReaderInstructions: { draggable: 'Space로 항목을 잡고 방향키로 이동합니다. Space로 놓거나 Escape로 취소합니다. 위로·아래로 버튼으로도 순서를 바꿀 수 있습니다.' },
          announcements: {
            onDragStart: ({ active }) => `${active.id} 항목을 잡았습니다.`,
            onDragOver: ({ active, over }) => over ? `${active.id}: ${over.id} 위치` : `${active.id}: 목록 밖`,
            onDragEnd: ({ active }) => `${active.id} 이동을 완료했습니다.`,
            onDragCancel: () => '이동을 취소했습니다.'
          }
        }}>
          <SortableContext items={items} strategy={verticalListSortingStrategy}>
            <ul className="lib-demo-list">
              {items.map((id, index) => <SortableItem key={id} id={id} index={index} count={items.length} onMove={(from, to) => setItems(previous => arrayMove(previous, from, to))} />)}
            </ul>
          </SortableContext>
        </DndContext>
        <pre tabIndex={0} className="lib-demo-pre" style={{ marginTop: 16 }}>
          {JSON.stringify(items, null, 2)}
        </pre>
      </DemoBlock>
    </DemoLayout>
  )
}
