'use client'

import { useState } from 'react' // 상태 훅
import { Button, Drawer } from '@/comp' // comp
import { LoadOpenOverlayDemo } from '@/screen/pub/widgets/preview/LoadOpenOverlayDemo' // Load Open Overlay Demo 컴포넌트
import { OverlayA11yDemo } from '@/screen/pub/widgets/preview/OverlayA11yDemo' // 키보드·중첩 접근성 예시
import { TimedOverlayDemo } from '@/screen/pub/widgets/preview/TimedOverlayDemo' // Timed Overlay Demo 컴포넌트
import { DemoBlock } from '@/screen/pub/widgets/preview/DemoBlock' // Demo Block 컴포넌트
import { GuideApiDocs } from '@/screen/pub/widgets/docs/GuideApiDocs' // Guide Api Docs 컴포넌트
import { GuideLayout } from '@/screen/pub/layout' // Guide Layout 컴포넌트
import { wrapPageExample } from '@/screen/pub/lib/pageExampleCode' // wrap Page Example
import { drawerApiSections } from '@/screen/pub/data/guide/drawerApiSections' // drawer Api Sections

/** 취소·확인 푸터 버튼 */
function FooterActions ({ onCancel, onConfirm, confirmLabel = '적용' }) {
  return (
    <>
      <Button variant="outline" color="default" label="취소" onClick={onCancel} />
      <Button color="primary" label={confirmLabel} onClick={onConfirm} />
    </>
  )
}

/** 버튼으로 열고 닫는 서랍 예시 */
function OpenDemo () {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <>
      <Button label="서랍 열기" onClick={() => setOpen(true)} />
      <Drawer
        open={open}
        title="필터"
        footer={<FooterActions onCancel={close} onConfirm={close} />}
        onClose={close}
        onOpenChange={(next) => {
          if (!next) close()
        }}
      >
        조건을 선택하세요.
      </Drawer>
    </>
  )
}

/** 방향별로 여는 서랍 예시 */
function PlacementDemo () {
  const [open, setOpen] = useState(false)
  const [placement, setPlacement] = useState('right')

  return (
    <>
      <div className="demo-row">
        {['left', 'right', 'top', 'bottom'].map((value) => (
          <Button
            key={value}
            variant="outline"
            label={value}
            onClick={() => {
              setPlacement(value)
              setOpen(true)
            }}
          />
        ))}
      </div>
      <Drawer
        open={open}
        placement={placement}
        title={`placement="${placement}"`}
        onClose={() => setOpen(false)}
      >
        화면 <code>{placement}</code> 가장자리에서 열립니다.
      </Drawer>
    </>
  )
}

/** bottom 시트 — 드래그 유/무 */
function BottomSheetDemo () {
  const [open, setOpen] = useState(false)
  const [drag, setDrag] = useState(true)

  return (
    <>
      <div className="demo-row">
        <Button
          variant="outline"
          label="드래그 있음"
          onClick={() => {
            setDrag(true)
            setOpen(true)
          }}
        />
        <Button
          variant="outline"
          label="드래그 없음"
          onClick={() => {
            setDrag(false)
            setOpen(true)
          }}
        />
      </div>
      <Drawer
        open={open}
        placement="bottom"
        draggable={drag}
        title={drag ? '드래그 시트' : '일반 하단 시트'}
        onClose={() => setOpen(false)}
        onOpenChange={(next) => {
          if (!next) setOpen(false)
        }}
      >
        {drag
          ? '상단 바를 아래로 끌면 닫히고, 위로 끌면 확장됩니다.'
          : '핸들 바 없이 닫기 버튼·오버레이로만 닫습니다.'}
      </Drawer>
    </>
  )
}

/** bottom + draggable — expanded 를 페이지에서 제어하는 예시 */
function ExpandedControlDemo () {
  const [open, setOpen] = useState(false)
  const [expanded, setExpanded] = useState(false)
  const close = () => {
    setOpen(false)
    setExpanded(false)
  }

  return (
    <>
      <div className="demo-row">
        <Button
          label="시트 열기"
          onClick={() => {
            setExpanded(false)
            setOpen(true)
          }}
        />
        <Button
          variant="outline"
          label={expanded ? '축소' : '확장'}
          disabled={!open}
          onClick={() => setExpanded((prev) => !prev)}
        />
      </div>
      <Drawer
        open={open}
        placement="bottom"
        draggable
        expanded={expanded}
        onExpandedChange={setExpanded}
        title="확장 제어 시트"
        onClose={close}
        onOpenChange={(next) => {
          if (!next) close()
        }}
      >
        핸들을 위로 끌거나 페이지의 확장 버튼으로 높이를 바꿉니다.
      </Drawer>
    </>
  )
}

/** 크기별로 여는 서랍 예시 */
function SizeDemo () {
  const [size, setSize] = useState(null)
  const close = () => setSize(null)

  return (
    <>
      <div className="demo-row">
        <Button variant="outline" label="Small" onClick={() => setSize('sm')} />
        <Button variant="outline" label="Medium" onClick={() => setSize('md')} />
        <Button variant="outline" label="Large" onClick={() => setSize('lg')} />
      </div>
      <Drawer
        open={size !== null}
        className={size === 'md' ? undefined : `drawer_${size}`}
        title={size === 'md' ? '기본 크기' : `drawer_${size}`}
        onClose={close}
      >
        className 로 크기 토큰을 바꿉니다.
      </Drawer>
    </>
  )
}

/** adaptive: ≥1440 가운데 모달형 / 미만 하단 시트(+드래그) */
function AdaptiveDemo () {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <>
      <Button label="adaptive 서랍 열기" onClick={() => setOpen(true)} />
      <Drawer
        open={open}
        adaptive
        adaptiveBreakpoint="pc-md"
        draggable
        title="adaptive 서랍"
        footer={<FooterActions onCancel={close} onConfirm={close} />}
        onClose={close}
        onOpenChange={(next) => {
          if (!next) close()
        }}
      >
        뷰포트가 1440px 이상이면 가운데 모달형 패널, 미만이면 하단 시트(드래그 가능)로 표시됩니다.
        창 너비를 바꿔 전환을 확인하세요.
      </Drawer>
    </>
  )
}

const SECTIONS = [
  {
    title: '키보드와 스크린리더',
    description: '열면 지정한 입력란에 초점을 둡니다. Tab·Shift+Tab은 내부를 순환하며, Escape는 맨 위 대화상자만 닫고 열기 버튼으로 초점을 돌립니다. 제목은 접근성 이름으로 연결되며, 배경은 모달이 닫힐 때까지 접근할 수 없습니다.',
    preview: <OverlayA11yDemo component="Drawer" />
  },
  {
    title: '배경 dim 숨기기',
    description: 'backdrop 의 기본값은 true 입니다. false 를 지정하면 배경 dim 없이 표시하고 배경 클릭으로 닫히지 않습니다. 닫기 버튼은 그대로 사용할 수 있습니다. 미리보기는 프레임 안에 표시합니다.',
    code: wrapPageExample(`<Drawer openOnLoad placement="bottom" backdrop={false} title="배경 dim 없음">배경 dim 없이 표시합니다.</Drawer>`, { compImports: ['Drawer'] }),
    preview: <LoadOpenOverlayDemo component="Drawer" placement="bottom" backdrop={false} />
  },
  {
    title: '페이지 로드 시 열림 · 자동 닫힘 없음',
    description: 'openOnLoad 와 placement="bottom" 을 지정하여 페이지 로드 시 하단에서 열립니다. autoCloseDelay 를 생략하므로 시간 경과로 닫히지 않습니다. 각 컴포넌트의 기본 닫기 동작은 유지됩니다. 예시 다시 불러오기로 초기 상태를 다시 확인할 수 있습니다. 가이드 미리보기는 staticDemo 로 프레임 안에 표시하며, 실제 페이지에서는 코드 예시처럼 사용합니다.',
    code: wrapPageExample(`<Drawer openOnLoad placement="bottom" title="안내">로드 시 열리며 자동으로 닫히지 않습니다.</Drawer>`, { compImports: ['Drawer'] }),
    preview: <LoadOpenOverlayDemo component="Drawer" placement="bottom" />
  },
  {
    title: '페이지 진입 시 자동 열림 · 지정 시간 후 닫기',
    description: '호출부에 openOnLoad, placement="bottom", autoCloseDelay={5000} 을 지정하면 마운트 시 하단에서 열리고 5초 후 닫힙니다. 시간은 밀리초이며 생략하거나 0 이하이면 자동으로 닫히지 않습니다. 아래 실행 버튼은 페이지 진입을 대신해 예시를 새로 마운트합니다. open 을 직접 제어할 때는 open={open} onOpenChange={setOpen} 으로 연결하고 초기 상태를 true 로 지정하세요.',
    code: wrapPageExample(`<Drawer openOnLoad placement="bottom" autoCloseDelay={5000} title="안내">5초 후 닫힙니다.</Drawer>`, { compImports: ['Drawer'] }),
    preview: <TimedOverlayDemo component="Drawer" placement="bottom" />
  },
  {
    title: '열기와 닫기',
    description: (
      <>
        <code>open</code>에 맞춰 가장자리에서 슬라이드로 열리고 닫힙니다.
        오버레이나 닫기 버튼(<code>Icon</code> <code>close</code>)을 누르면 <code>onClose</code>와 <code>onOpenChange(false)</code>가 호출되므로, 부모에서 <code>open</code> 상태를 직접 바꿉니다.
      </>
    ),
    code: wrapPageExample(`const [open, setOpen] = useState(false)

<Button label="서랍 열기" onClick={() => setOpen(true)} />
<Drawer
  open={open}
  title="필터"
  footer={
    <>
      <Button variant="outline" color="default" label="취소" onClick={() => setOpen(false)} />
      <Button label="적용" onClick={() => setOpen(false)} />
    </>
  }
  onClose={() => setOpen(false)}
  onOpenChange={(next) => { if (!next) setOpen(false) }}
>
  조건을 선택하세요.
</Drawer>`, {
      name: 'DrawerExample',
      reactImports: ['useState'],
      compImports: ['Drawer', 'Button']
    }),
    preview: <OpenDemo />
  },
  {
    title: '배치',
    description: (
      <>
        <code>placement</code>는 left · right · top · bottom입니다. 기본은 <code>right</code>이며,
        <code>drawer_placement-*</code> 클래스가 붙습니다.
      </>
    ),
    code: wrapPageExample(`<Drawer open={open} placement="left" title="left" onClose={close}>내용</Drawer>
<Drawer open={open} placement="right" title="right" onClose={close}>내용</Drawer>
<Drawer open={open} placement="top" title="top" onClose={close}>내용</Drawer>
<Drawer open={open} placement="bottom" title="bottom" onClose={close}>내용</Drawer>`, {
  name: 'DrawerExample1',
  reactImports: [],
  compImports: ['Drawer']
}),
    preview: <PlacementDemo />
  },
  {
    title: '하단 시트 · 드래그',
    description: (
      <>
        <code>placement=&quot;bottom&quot;</code>에서 <code>draggable</code>이면 상단에 핸들 바가 보이고 드래그로 닫기·확장할 수 있습니다.
        <code>draggable</code>이 없으면 바를 표시하지 않으며 닫기 버튼·오버레이만 사용합니다.
        닫힐 때 <code>onClose</code>와 함께 <code>onOpenChange(false)</code>가 호출됩니다.
      </>
    ),
    code: wrapPageExample(`<Drawer
  open={open}
  placement="bottom"
  draggable
  title="드래그 시트"
  onClose={close}
  onOpenChange={(next) => { if (!next) setOpen(false) }}
>
  상단 바를 드래그하세요.
</Drawer>
<Drawer open={open} placement="bottom" title="일반 하단 시트" onClose={close}>
  핸들 바 없음
</Drawer>`, {
  name: 'DrawerExample2',
  reactImports: [],
  compImports: ['Drawer']
}),
    preview: <BottomSheetDemo />
  },
  {
    title: '반응형 · adaptive',
    description: (
      <>
        <code>adaptive</code>를 켜면 기본 기준(<code>adaptiveBreakpoint=&quot;pc-md&quot;</code> · 1440px) 이상에서는 가운데 모달형 패널,
        미만에서는 <code>placement</code>를 무시하고 하단 시트로 전환합니다.
        하단일 때 <code>draggable</code>이면 핸들·드래그가 유지됩니다. 옵션이 없으면 기존 placement 동작만 유지됩니다.
      </>
    ),
    code: wrapPageExample(`<Drawer
  open={open}
  adaptive
  adaptiveBreakpoint="pc-md"
  draggable
  title="adaptive 서랍"
  onClose={close}
>
  ≥1440 가운데 모달형 · &lt;1440 하단 시트
</Drawer>`, {
  name: 'DrawerAdaptiveExample',
  reactImports: [],
  compImports: ['Drawer']
}),
    preview: <AdaptiveDemo />
  },
  {
    title: '하단 시트 · 확장 제어',
    description: (
      <>
        <code>expanded</code> · <code>onExpandedChange</code>로 확장 높이를 페이지에서 제어합니다.
        비제어는 <code>defaultExpanded</code>를 씁니다. 페이지 버튼으로도 토글할 수 있습니다.
      </>
    ),
    code: wrapPageExample(`const [open, setOpen] = useState(false)
const [expanded, setExpanded] = useState(false)

<Button label="시트 열기" onClick={() => setOpen(true)} />
<Button
  variant="outline"
  label={expanded ? '축소' : '확장'}
  onClick={() => setExpanded((prev) => !prev)}
/>
<Drawer
  open={open}
  placement="bottom"
  draggable
  expanded={expanded}
  onExpandedChange={setExpanded}
  title="확장 제어 시트"
  onClose={() => setOpen(false)}
  onOpenChange={(next) => { if (!next) setOpen(false) }}
>
  핸들 드래그 또는 버튼으로 확장합니다.
</Drawer>`, {
      name: 'DrawerExpandedExample',
      reactImports: ['useState'],
      compImports: ['Drawer', 'Button']
    }),
    preview: <ExpandedControlDemo />
  },
  {
    title: '제목과 본문',
    description: (
      <>
        <code>title</code>은 헤더에 굵게 표시되고, 본문은 <code>children</code>으로 전달합니다.
        <code>title</code>이 없어도 빈 제목 영역이 남아 닫기 버튼은 항상 오른쪽 끝에 위치합니다.
      </>
    ),
    code: wrapPageExample(`<div className="drawer_demo-frame drawer_demo-frame-compact">
  <Drawer staticDemo open title="제목이 있는 서랍">본문 내용입니다.</Drawer>
</div>
<div className="drawer_demo-frame drawer_demo-frame-compact">
  <Drawer staticDemo open>제목 없이 본문만 있는 서랍입니다.</Drawer>
</div>`, {
  name: 'DrawerExample3',
  reactImports: [],
  compImports: ['Drawer']
}),
    preview: (
      <div className="demo-stack">
        <div className="drawer_demo-frame drawer_demo-frame-compact">
          <Drawer staticDemo open title="제목이 있는 서랍">본문 내용입니다.</Drawer>
        </div>
        <div className="drawer_demo-frame drawer_demo-frame-compact">
          <Drawer staticDemo open>제목 없이 본문만 있는 서랍입니다.</Drawer>
        </div>
      </div>
    )
  },
  {
    title: '크기',
    description: (
      <>
        크기는 <code>className</code>에 <code>drawer_sm</code> · <code>drawer_lg</code>를 붙여 바꿉니다. 기본(클래스 없음)은 중간 크기입니다.
        left·right는 너비, top·bottom은 높이 토큰이 바뀝니다.
      </>
    ),
    code: wrapPageExample(`<Drawer open={open} className="drawer_sm" title="Small" onClose={close}>작은 서랍</Drawer>
<Drawer open={open} title="Medium" onClose={close}>기본 서랍</Drawer>
<Drawer open={open} className="drawer_lg" title="Large" onClose={close}>큰 서랍</Drawer>`, {
  name: 'DrawerSizeExample',
  reactImports: [],
  compImports: ['Drawer']
}),
    preview: <SizeDemo />
  },
  {
    title: '푸터 액션',
    description: (
      <>
        <code>footer</code>로 취소·확인 같은 버튼을 전달하면 오른쪽 정렬(<code>drawer_footer-end</code>) 푸터로 표시됩니다.
        <code>footer</code>가 없으면 푸터 영역은 렌더링되지 않습니다.
      </>
    ),
    code: wrapPageExample(`<Drawer
  open
  title="필터"
  footer={
    <>
      <Button variant="outline" color="default" label="취소" />
      <Button color="primary" label="적용" />
    </>
  }
>
  조건을 선택하세요.
</Drawer>`, {
  name: 'DrawerExample5',
  reactImports: [],
  compImports: ['Button', 'Drawer']
}),
    preview: (
      <div className="drawer_demo-frame drawer_demo-frame-compact">
        <Drawer
          staticDemo
          open
          title="필터"
          footer={<FooterActions onCancel={() => {}} onConfirm={() => {}} />}
        >
          조건을 선택하세요.
        </Drawer>
      </div>
    )
  },
  {
    title: '문서용 고정 미리보기',
    description: (
      <>
        <code>staticDemo</code>는 서랍을 뷰포트 대신 <code>drawer_demo-frame</code> 안에 고정해 보여 줍니다.
        가이드 미리보기용이며, 실제 화면에서는 쓰지 않습니다.
      </>
    ),
    code: wrapPageExample(`<div className="drawer_demo-frame">
  <Drawer staticDemo open title="고정 미리보기">프레임 안에 표시됩니다.</Drawer>
</div>`, {
  name: 'DrawerScrollExample',
  reactImports: [],
  compImports: ['Drawer']
}),
    preview: (
      <div className="drawer_demo-frame">
        <Drawer staticDemo open title="고정 미리보기">프레임 안에 표시됩니다.</Drawer>
      </div>
    )
  },
  {
    title: '접근성',
    description: (
      <>
        루트에 <code>role=&quot;dialog&quot;</code> · <code>aria-modal=&quot;true&quot;</code>가 자동 지정되고, 닫기 버튼에는 <code>aria-label=&quot;닫기&quot;</code>가 있습니다.
        <code>aria-label</code> 등 네이티브 dialog 속성은 루트로 전달됩니다.
      </>
    ),
    code: wrapPageExample(`<Drawer open title="상세" aria-label="상세 서랍" onClose={close}>
  내용
</Drawer>`, {
  name: 'DrawerA11yExample',
  reactImports: [],
  compImports: ['Drawer']
}),
    preview: (
      <div className="drawer_demo-frame drawer_demo-frame-compact">
        <Drawer staticDemo open title="상세" aria-label="상세 서랍">내용</Drawer>
      </div>
    )
  }
]

/**
 * Drawer 가이드 화면.
 * 열기·닫기, 배치, 제목, 크기, 푸터 액션 예시와 API 문서를 모은다.
 */
export default function DrawerGuide () {
  return (
    <GuideLayout
      category="피드백"
      title="Drawer"
      description="화면 가장자리 패널. open · placement · title · footer · expanded로 구성합니다."
    >
      {SECTIONS.map((section) => (
        <DemoBlock
          key={section.title}
          title={section.title}
          description={section.description}
          code={section.code}
          fileName="DrawerExample.jsx"
        >
          {section.preview}
        </DemoBlock>
      ))}

      <GuideApiDocs sections={drawerApiSections} />
    </GuideLayout>
  )
}
