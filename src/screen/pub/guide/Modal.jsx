'use client'

import { useState } from 'react' // 상태 훅
import { Button, Modal } from '@/comp' // comp
import { LoadOpenOverlayDemo } from '@/screen/pub/widgets/preview/LoadOpenOverlayDemo' // Load Open Overlay Demo 컴포넌트
import { OverlayAccessibilityDemo } from '@/screen/pub/widgets/preview/OverlayAccessibilityDemo' // 키보드·중첩 접근성 예시
import { TimedOverlayDemo } from '@/screen/pub/widgets/preview/TimedOverlayDemo' // Timed Overlay Demo 컴포넌트
import { DemoBlock } from '@/screen/pub/widgets/preview/DemoBlock' // Demo Block 컴포넌트
import { GuideApiDocs } from '@/screen/pub/widgets/docs/GuideApiDocs' // Guide Api Docs 컴포넌트
import { GuideLayout } from '@/screen/pub/layout' // Guide Layout 컴포넌트
import { wrapPageExample } from '@/screen/pub/lib/pageExampleCode' // wrap Page Example
import { modalApiSections } from '@/screen/pub/data/guide/modalApiSections' // modal Api Sections
import { NoticeModalDemo } from '@/screen/pub/widgets/preview/NoticeModalDemo' // Notice Modal Demo 컴포넌트

/** 취소·확인 푸터 버튼 */
function FooterActions ({ onCancel, onConfirm, confirmLabel = '저장', confirmColor = 'primary' }) {
  return (
    <>
      <Button variant="outline" color="default" label="취소" onClick={onCancel} />
      <Button color={confirmColor} label={confirmLabel} onClick={onConfirm} />
    </>
  )
}

/** 버튼으로 열고 닫는 모달 예시 */
function OpenDemo () {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <>
      <Button label="모달 열기" onClick={() => setOpen(true)} />
      <Modal
        open={open}
        title="변경 사항 저장"
        footer={<FooterActions onCancel={close} onConfirm={close} />}
        onClose={close}
        onOpenChange={(next) => {
          if (!next) close()
        }}
      >
        저장하지 않은 내용이 있습니다.
      </Modal>
    </>
  )
}

/** 크기별로 여는 모달 예시 */
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
      <Modal
        open={size !== null}
        size={size || 'md'}
        title={`size="${size}"`}
        footer={<Button label="확인" onClick={close} />}
        onClose={close}
      >
        <code>size</code>에 따라 대화상자 너비가 달라집니다.
      </Modal>
    </>
  )
}

/** adaptive: ≥1440 가운데 lg / 미만 바텀시트 */
function AdaptiveDemo () {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <>
      <Button label="adaptive 모달 열기" onClick={() => setOpen(true)} />
      <Modal
        open={open}
        adaptive
        size="lg"
        title="adaptive 모달"
        footer={<FooterActions onCancel={close} onConfirm={close} />}
        onClose={close}
        onOpenChange={(next) => {
          if (!next) close()
        }}
      >
        뷰포트가 1440px 이상이면 가운데 lg 모달, 미만이면 하단 바텀시트로 표시됩니다.
        창 너비를 바꿔 전환을 확인하세요.
      </Modal>
    </>
  )
}

const SECTIONS = [
  {
    title: '키보드와 스크린리더',
    description: '열면 지정한 입력란에 초점을 둡니다. Tab·Shift+Tab은 내부를 순환하며, Escape는 맨 위 대화상자만 닫고 열기 버튼으로 초점을 돌립니다. 제목은 접근성 이름으로 연결되며, 배경은 모달이 닫힐 때까지 접근할 수 없습니다.',
    preview: <OverlayAccessibilityDemo component="Modal" />
  },
  {
    title: '배경 dim 숨기기',
    description: 'backdrop 의 기본값은 true 입니다. false 를 지정하면 배경 dim 없이 표시하고 배경 클릭으로 닫히지 않습니다. 닫기 버튼은 그대로 사용할 수 있습니다. 미리보기는 프레임 안에 표시합니다.',
    code: wrapPageExample(`<Modal openOnLoad backdrop={false} title="배경 dim 없음">배경 dim 없이 표시합니다.</Modal>`, { compImports: ['Modal'] }),
    preview: <LoadOpenOverlayDemo component="Modal" backdrop={false} />
  },
  {
    title: '페이지 로드 시 열림 · 자동 닫힘 없음',
    description: 'openOnLoad 만 지정하여 페이지 로드 시 열립니다. autoCloseDelay 를 생략하므로 시간 경과로 닫히지 않습니다. 각 컴포넌트의 기본 닫기 동작은 유지됩니다. 예시 다시 불러오기로 초기 상태를 다시 확인할 수 있습니다. 가이드 미리보기는 staticDemo 로 프레임 안에 표시하며, 실제 페이지에서는 코드 예시처럼 사용합니다.',
    code: wrapPageExample(`<Modal openOnLoad title="안내">로드 시 열리며 자동으로 닫히지 않습니다.</Modal>`, { compImports: ['Modal'] }),
    preview: <LoadOpenOverlayDemo component="Modal" />
  },
  {
    title: '페이지 진입 시 자동 열림 · 지정 시간 후 닫기',
    description: '호출부에 openOnLoad 와 autoCloseDelay={5000} 을 지정하면 마운트 시 열리고 5초 후 닫힙니다. 시간은 밀리초이며 생략하거나 0 이하이면 자동으로 닫히지 않습니다. 아래 실행 버튼은 페이지 진입을 대신해 예시를 새로 마운트합니다. open 을 직접 제어할 때는 open={open} onOpenChange={setOpen} 으로 연결하고 초기 상태를 true 로 지정하세요.',
    code: wrapPageExample(`<Modal openOnLoad autoCloseDelay={5000} title="안내">5초 후 닫힙니다.</Modal>`, { compImports: ['Modal'] }),
    preview: <TimedOverlayDemo component="Modal" />
  },
  {
    title: '공지사항 · 오늘 하루 보지 않기',
    description: (
      <>
        체크 후 닫으면 다음 자정까지 숨기며 새로고침 후에도 유지합니다. 체크하지 않으면 다시 열 수 있습니다.
        가이드에서는 버튼으로 열고, 페이지 진입 시 자동으로 표시하려면 <code>open</code>의 초기값을 true로 지정합니다.
        공지별로 저장 키를 다르게 지정하세요.
      </>
    ),
    code: wrapPageExample(`const [open, setOpen] = useState(false) // 페이지 진입 시 자동 표시는 true
const [hideToday, setHideToday] = useState(false)
const hydrated = useHydrated()
const { isHidden, dismiss } = useDailyDismissal('notice-maintenance-v1')
const close = () => {
  if (hideToday) dismiss(true)
  setOpen(false)
  setHideToday(false)
}

<Button label="공지사항 모달 열기" disabled={!hydrated || isHidden} onClick={() => setOpen(true)} />
{hydrated && isHidden && <p role="status">공지사항을 오늘 하루 숨겼습니다.</p>}
<Modal
  open={hydrated && open && !isHidden}
  title="공지사항"
  onClose={close}
  footer={
    <Flex align="center" justify="between" gap="sm" wrap style={{ width: '100%' }}>
      <Checkbox label="오늘 하루 보지 않기" checked={hideToday} onChange={(event) => setHideToday(event.target.checked)} />
      <Button label="닫기" onClick={close} />
    </Flex>
  }
>
  <h2>서비스 이용 안내</h2>
  <p>공지사항 내용을 입력하세요.</p>
</Modal>`, {
      name: 'NoticeModalExample',
      reactImports: ['useState'],
      compImports: ['Button', 'Checkbox', 'Flex', 'Modal'],
      extraImports: ["import { useDailyDismissal } from '@/hooks/interaction/useDailyDismissal'", "import { useHydrated } from '@/hooks/react/useHydrated'"]
    }),
    preview: <NoticeModalDemo />
  },
  {
    title: '열기와 닫기',
    description: (
      <>
        <code>open</code>이 <code>true</code>일 때만 렌더링됩니다.
        오버레이나 닫기 버튼(<code>Icon</code> <code>close</code>)을 누르면 <code>onClose</code>와 <code>onOpenChange(false)</code>가 호출되므로, 부모에서 <code>open</code> 상태를 직접 바꿉니다.
      </>
    ),
    code: wrapPageExample(`const [open, setOpen] = useState(false)

<Button label="모달 열기" onClick={() => setOpen(true)} />
<Modal
  open={open}
  title="변경 사항 저장"
  footer={
    <>
      <Button variant="outline" color="default" label="취소" onClick={() => setOpen(false)} />
      <Button label="저장" onClick={() => setOpen(false)} />
    </>
  }
  onClose={() => setOpen(false)}
  onOpenChange={(next) => { if (!next) setOpen(false) }}
>
  저장하지 않은 내용이 있습니다.
</Modal>`, {
      name: 'ModalExample',
      reactImports: ['useState'],
      compImports: ['Modal', 'Button']
    }),
    preview: <OpenDemo />
  },
  {
    title: '제목과 본문',
    description: (
      <>
        <code>title</code>은 헤더에 굵게 표시되고, 본문은 <code>children</code>으로 전달합니다.
        <code>title</code>이 없어도 헤더에는 닫기 버튼이 남습니다.
      </>
    ),
    code: wrapPageExample(`<div className="modal_demo-frame modal_demo-frame-compact">
  <Modal staticDemo open title="제목이 있는 모달">본문 내용입니다.</Modal>
</div>
<div className="modal_demo-frame modal_demo-frame-compact">
  <Modal staticDemo open>제목 없이 본문만 있는 모달입니다.</Modal>
</div>`, {
  name: 'ModalExample1',
  reactImports: [],
  compImports: ['Modal']
}),
    preview: (
      <div className="demo-stack">
        <div className="modal_demo-frame modal_demo-frame-compact">
          <Modal staticDemo open title="제목이 있는 모달">본문 내용입니다.</Modal>
        </div>
        <div className="modal_demo-frame modal_demo-frame-compact">
          <Modal staticDemo open>제목 없이 본문만 있는 모달입니다.</Modal>
        </div>
      </div>
    )
  },
  {
    title: '크기',
    description: (
      <>
        <code>size</code>는 sm · md · lg입니다. 기본은 <code>md</code>이며,
        <code>modal_sm</code> · <code>modal_lg</code> 클래스가 붙어 너비 토큰이 바뀝니다.
      </>
    ),
    code: wrapPageExample(`<Modal open={open} size="sm" title="Small" onClose={close}>작은 모달</Modal>
<Modal open={open} size="md" title="Medium" onClose={close}>기본 모달</Modal>
<Modal open={open} size="lg" title="Large" onClose={close}>큰 모달</Modal>`, {
  name: 'ModalSizeExample',
  reactImports: [],
  compImports: ['Modal']
}),
    preview: <SizeDemo />
  },
  {
    title: '반응형 · adaptive',
    description: (
      <>
        <code>adaptive</code>를 켜면 기본 기준(<code>adaptiveBreakpoint=&quot;pc-md&quot;</code> · 1440px) 이상에서는 가운데 모달(<code>size</code> 유지),
        미만에서는 하단 바텀시트로 전환합니다. 옵션이 없으면 기존 가운데 모달만 유지됩니다.
        기준은 숫자(px) 또는 <code>pc-sm</code> · <code>pc-md</code> · <code>pc-lg</code> · <code>pc-xl</code>로 바꿀 수 있습니다.
      </>
    ),
    code: wrapPageExample(`<Modal
  open={open}
  adaptive
  size="lg"
  title="adaptive 모달"
  onClose={close}
>
  ≥1440 가운데 lg · &lt;1440 바텀시트
</Modal>`, {
  name: 'ModalAdaptiveExample',
  reactImports: [],
  compImports: ['Modal']
}),
    preview: <AdaptiveDemo />
  },
  {
    title: '푸터 액션',
    description: (
      <>
        <code>footer</code>로 취소·확인 같은 버튼을 전달하면 오른쪽 정렬(<code>modal_footer-end</code>) 푸터로 표시됩니다.
        <code>footer</code>가 없으면 푸터 영역은 렌더링되지 않습니다.
      </>
    ),
    code: wrapPageExample(`<Modal
  open
  title="항목 삭제"
  footer={
    <>
      <Button variant="outline" color="default" label="취소" />
      <Button color="danger" label="삭제" />
    </>
  }
>
  선택한 항목을 삭제하시겠습니까?
</Modal>`, {
  name: 'ModalExample3',
  reactImports: [],
  compImports: ['Button', 'Modal']
}),
    preview: (
      <div className="modal_demo-frame">
        <Modal
          staticDemo
          open
          title="항목 삭제"
          footer={<FooterActions onCancel={() => {}} onConfirm={() => {}} confirmLabel="삭제" confirmColor="danger" />}
        >
          선택한 항목을 삭제하시겠습니까?
        </Modal>
      </div>
    )
  },
  {
    title: '문서용 고정 미리보기',
    description: (
      <>
        <code>staticDemo</code>는 모달을 뷰포트 대신 <code>modal_demo-frame</code> 안에 고정해 보여 줍니다.
        가이드 미리보기용이며, 실제 화면에서는 쓰지 않습니다.
      </>
    ),
    code: wrapPageExample(`<div className="modal_demo-frame">
  <Modal staticDemo open title="고정 미리보기">프레임 안에 표시됩니다.</Modal>
</div>`, {
  name: 'ModalScrollExample',
  reactImports: [],
  compImports: ['Modal']
}),
    preview: (
      <div className="modal_demo-frame">
        <Modal staticDemo open title="고정 미리보기">프레임 안에 표시됩니다.</Modal>
      </div>
    )
  },
  {
    title: '스타일 클래스 확장',
    description: (
      <>
        <code>className</code>으로 <code>modal_scrollable</code> · <code>modal_fullscreen</code> 같은 공통 스킨 클래스를 루트에 붙일 수 있습니다.
        <code>modal_scrollable</code>은 본문이 길 때 본문만 스크롤합니다.
      </>
    ),
    code: wrapPageExample(`<Modal open title="스크롤 본문" className="modal_scrollable" onClose={close}>
  {/* 긴 본문 */}
</Modal>`, {
  name: 'ModalExample5',
  reactImports: [],
  compImports: ['Modal']
}),
    preview: (
      <div className="modal_demo-frame modal_demo-frame-compact">
        <Modal staticDemo open title="스크롤 본문" className="modal_scrollable">
          {Array.from({ length: 8 }, (_, i) => (
            <p key={i}>긴 본문 {i + 1}번째 줄입니다. 내용이 길면 본문 영역만 스크롤됩니다.</p>
          ))}
        </Modal>
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
    code: wrapPageExample(`<Modal open title="확인" aria-label="확인 대화상자" onClose={close}>
  내용
</Modal>`, {
  name: 'ModalA11yExample',
  reactImports: [],
  compImports: ['Modal']
}),
    preview: (
      <div className="modal_demo-frame modal_demo-frame-compact">
        <Modal staticDemo open title="확인" aria-label="확인 대화상자">내용</Modal>
      </div>
    )
  }
]

/**
 * Modal 가이드 화면.
 * 열기·닫기, 제목, 크기, 푸터 액션 예시와 API 문서를 모은다.
 */
export default function ModalGuide () {
  return (
    <GuideLayout
      category="피드백"
      title="Modal"
      description="화면 중앙 대화상자. open · title · size · footer로 구성합니다."
    >
      {SECTIONS.map((section) => (
        <DemoBlock
          key={section.title}
          title={section.title}
          description={section.description}
          code={section.code}
          fileName="ModalExample.jsx"
        >
          {section.preview}
        </DemoBlock>
      ))}

      <GuideApiDocs sections={modalApiSections} />
    </GuideLayout>
  )
}
