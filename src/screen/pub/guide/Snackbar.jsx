'use client'

import { useState } from 'react'
import { Button, Icon, Snackbar } from '@/comp'
import { LoadOpenOverlayDemo } from '@/screen/pub/widgets/preview/LoadOpenOverlayDemo'
import { TimedOverlayDemo } from '@/screen/pub/widgets/preview/TimedOverlayDemo'
import { DemoBlock } from '@/screen/pub/widgets/preview/DemoBlock'
import { GuideApiDocs } from '@/screen/pub/widgets/docs/GuideApiDocs'
import { GuideLayout } from '@/screen/pub/layout'
import { wrapPageExample } from '@/screen/pub/lib/pageExampleCode'
import { snackbarApiSections } from '@/screen/pub/data/guide/snackbarApiSections'

/** open · onOpenChange 로 표시를 제어하는 예시 */
function ControlledDemo () {
  const [open, setOpen] = useState(true)

  return (
    <div className="demo-stack">
      <Button
        size="sm"
        variant="outline"
        label={open ? '스낵바 숨기기' : '스낵바 보기'}
        onClick={() => setOpen((prev) => !prev)}
      />
      <Snackbar
        color="info"
        message="제어 모드 스낵바입니다."
        closable
        open={open}
        onOpenChange={setOpen}
        onClose={() => {}}
      />
    </div>
  )
}

const SECTIONS = [
  {
    title: '페이지 로드 시 열림 · 자동 닫힘 없음',
    description: 'openOnLoad 만 지정하여 페이지 로드 시 열립니다. autoCloseDelay 를 생략하므로 시간 경과로 닫히지 않습니다. 각 컴포넌트의 기본 닫기 동작은 유지됩니다. 예시 다시 불러오기로 초기 상태를 다시 확인할 수 있습니다.',
    code: wrapPageExample(`<Snackbar openOnLoad closable message="로드 시 열리며 자동으로 닫히지 않습니다." />`, { compImports: ['Snackbar'] }),
    preview: <LoadOpenOverlayDemo component="Snackbar" />
  },
  {
    title: '페이지 진입 시 자동 열림 · 지정 시간 후 닫기',
    description: '호출부에 openOnLoad 와 autoCloseDelay={5000} 을 지정하면 마운트 시 열리고 5초 후 닫힙니다. 시간은 밀리초이며 생략하거나 0 이하이면 자동으로 닫히지 않습니다. 아래 실행 버튼은 페이지 진입을 대신해 예시를 새로 마운트합니다. open 을 직접 제어할 때는 open={open} onOpenChange={setOpen} 으로 연결하고 초기 상태를 true 로 지정하세요.',
    code: wrapPageExample(`<Snackbar openOnLoad autoCloseDelay={5000} closable message="5초 후 닫힙니다." />`, { compImports: ['Snackbar'] }),
    preview: <TimedOverlayDemo component="Snackbar" />
  },
  {
    title: '유형',
    description: (
      <>
        <code>color</code>로 info · success · warning · error를 지정합니다.
        <code>danger</code>는 <code>error</code>와 같습니다. 기본은 <code>info</code>입니다.
      </>
    ),
    code: wrapPageExample(`<Snackbar color="info" message="정보를 저장했습니다." />
<Snackbar color="success" message="업로드가 완료되었습니다." />
<Snackbar color="warning" message="연결이 불안정합니다." />
<Snackbar color="error" message="요청을 처리하지 못했습니다." />`, {
  name: 'SnackbarExample1',
  reactImports: [],
  compImports: ['Snackbar']
}),
    preview: (
      <div className="demo-stack">
        <Snackbar color="info" message="정보를 저장했습니다." />
        <Snackbar color="success" message="업로드가 완료되었습니다." />
        <Snackbar color="warning" message="연결이 불안정합니다." />
        <Snackbar color="error" message="요청을 처리하지 못했습니다." />
      </div>
    )
  },
  {
    title: '문구',
    description: (
      <>
        문구는 <code>message</code> 또는 <code>children</code>으로 전달합니다.
        <code>children</code>이 있으면 <code>message</code>보다 우선합니다.
      </>
    ),
    code: wrapPageExample(`<Snackbar message="message 로 전달한 문구" />
<Snackbar color="success">
  <strong>children</strong> 으로 전달한 문구
</Snackbar>`, {
  name: 'SnackbarExample2',
  reactImports: [],
  compImports: ['Snackbar']
}),
    preview: (
      <div className="demo-stack">
        <Snackbar message="message 로 전달한 문구" />
        <Snackbar color="success">
          <strong>children</strong> 으로 전달한 문구
        </Snackbar>
      </div>
    )
  },
  {
    title: '둥근 모양',
    description: (
      <>
        <code>round</code>는 모서리를 알약(pill) 모양으로 만듭니다.
      </>
    ),
    code: wrapPageExample(`<Snackbar round color="warning" message="연결이 불안정합니다." />
<Snackbar round color="success" message="저장되었습니다." closable />`, {
  name: 'SnackbarExample3',
  reactImports: [],
  compImports: ['Snackbar']
}),
    preview: (
      <div className="demo-stack">
        <Snackbar round color="warning" message="연결이 불안정합니다." />
        <Snackbar round color="success" message="저장되었습니다." closable />
      </div>
    )
  },
  {
    title: '아이콘',
    description: (
      <>
        기본은 색별 <code>Icon</code>(info · check-circle · warning · x-circle)입니다.
        <code>showIcon={'{false}'}</code>로 숨기거나 <code>icon</code>으로 바꿉니다.
      </>
    ),
    code: wrapPageExample(`<Snackbar color="error" showIcon={false} message="아이콘 없는 오류 알림" />
<Snackbar color="success" icon={<Icon name="star" size="100%" />} message="사용자 정의 아이콘" />`, {
  name: 'SnackbarIconExample',
  reactImports: [],
  compImports: ['Icon', 'Snackbar']
}),
    preview: (
      <div className="demo-stack">
        <Snackbar color="error" showIcon={false} message="아이콘 없는 오류 알림" />
        <Snackbar color="success" icon={<Icon name="star" size="100%" />} message="사용자 정의 아이콘" />
      </div>
    )
  },
  {
    title: '닫기',
    description: (
      <>
        <code>closable</code>이면 닫기 버튼이 표시됩니다.
        <code>open</code> · <code>onOpenChange</code>로 표시를 페이지에서 제어하고, <code>onClose</code>로 닫힘 이후 동작을 처리합니다.
      </>
    ),
    code: wrapPageExample(`const [open, setOpen] = useState(true)

<Snackbar
  color="info"
  message="제어 모드 스낵바입니다."
  closable
  open={open}
  onOpenChange={setOpen}
  onClose={() => console.log('closed')}
/>`, {
      name: 'SnackbarExample',
      reactImports: ['useState'],
      compImports: ['Snackbar']
    }),
    preview: <ControlledDemo />
  },
  {
    title: '접근성',
    description: (
      <>
        <code>role</code>은 <code>error</code>(<code>danger</code>)이면 <code>alert</code>, 그 외에는 <code>status</code>로 자동 지정됩니다.
      </>
    ),
    code: wrapPageExample(`<Snackbar color="error" message="필수 항목을 입력해 주세요." />   {/* role="alert" */}
<Snackbar color="info" message="자동 저장되었습니다." />       {/* role="status" */}`, {
  name: 'SnackbarA11yExample',
  reactImports: [],
  compImports: ['Snackbar']
}),
    preview: (
      <div className="demo-stack">
        <Snackbar color="error" message="필수 항목을 입력해 주세요." />
        <Snackbar color="info" message="자동 저장되었습니다." />
      </div>
    )
  }
]

/**
 * Snackbar 가이드 화면.
 * 유형·문구·둥근 모양·아이콘·닫기 예시와 API 문서를 모은다.
 */
export default function SnackbarGuide () {
  return (
    <GuideLayout
      category="피드백"
      title="Snackbar"
      description="짧은 토스트형 알림. color · open · onOpenChange · closable을 조합합니다."
    >
      {SECTIONS.map((section) => (
        <DemoBlock
          key={section.title}
          title={section.title}
          description={section.description}
          code={section.code}
          fileName="SnackbarExample.jsx"
        >
          {section.preview}
        </DemoBlock>
      ))}

      <GuideApiDocs sections={snackbarApiSections} />
    </GuideLayout>
  )
}
