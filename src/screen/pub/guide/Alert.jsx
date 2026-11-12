'use client'

import { useState } from 'react'
import { Alert, Button, Icon } from '@/comp'
import { LoadOpenOverlayDemo } from '@/screen/pub/widgets/preview/LoadOpenOverlayDemo'
import { TimedOverlayDemo } from '@/screen/pub/widgets/preview/TimedOverlayDemo'
import { DemoBlock } from '@/screen/pub/widgets/preview/DemoBlock'
import { GuideApiDocs } from '@/screen/pub/widgets/docs/GuideApiDocs'
import { GuideLayout } from '@/screen/pub/layout'
import { wrapPageExample } from '@/screen/pub/lib/pageExampleCode'
import { alertApiSections } from '@/screen/pub/data/guide/alertApiSections'

/** open · onOpenChange 로 표시를 제어하는 예시 */
function ControlledDemo () {
  const [open, setOpen] = useState(true)

  return (
    <div className="demo-stack">
      <Button
        size="sm"
        variant="outline"
        label={open ? '알림 숨기기' : '알림 보기'}
        onClick={() => setOpen((prev) => !prev)}
      />
      <Alert
        color="info"
        title="공지"
        closable
        open={open}
        onOpenChange={setOpen}
        onClose={() => {}}
      >
        제어 모드 알림입니다.
      </Alert>
    </div>
  )
}

const SECTIONS = [
  {
    title: '페이지 로드 시 열림 · 자동 닫힘 없음',
    description: 'openOnLoad 만 지정하여 페이지 로드 시 열립니다. autoCloseDelay 를 생략하므로 시간 경과로 닫히지 않습니다. 각 컴포넌트의 기본 닫기 동작은 유지됩니다. 예시 다시 불러오기로 초기 상태를 다시 확인할 수 있습니다.',
    code: wrapPageExample(`<Alert openOnLoad closable title="안내">로드 시 열리며 자동으로 닫히지 않습니다.</Alert>`, { compImports: ['Alert'] }),
    preview: <LoadOpenOverlayDemo component="Alert" />
  },
  {
    title: '페이지 진입 시 자동 열림 · 지정 시간 후 닫기',
    description: '호출부에 openOnLoad 와 autoCloseDelay={5000} 을 지정하면 마운트 시 열리고 5초 후 닫힙니다. 시간은 밀리초이며 생략하거나 0 이하이면 자동으로 닫히지 않습니다. 아래 실행 버튼은 페이지 진입을 대신해 예시를 새로 마운트합니다. open 을 직접 제어할 때는 open={open} onOpenChange={setOpen} 으로 연결하고 초기 상태를 true 로 지정하세요.',
    code: wrapPageExample(`<Alert openOnLoad autoCloseDelay={5000} closable title="안내">5초 후 닫힙니다.</Alert>`, { compImports: ['Alert'] }),
    preview: <TimedOverlayDemo component="Alert" />
  },
  {
    title: '유형',
    description: (
      <>
        <code>color</code>로 info · success · warning · danger를 지정합니다.
        기본은 <code>info</code>입니다.
      </>
    ),
    code: wrapPageExample(`<Alert color="info">정보 알림입니다.</Alert>
<Alert color="success">성공 알림입니다.</Alert>
<Alert color="warning">경고 알림입니다.</Alert>
<Alert color="danger">위험 알림입니다.</Alert>`, {
  name: 'AlertExample1',
  reactImports: [],
  compImports: ['Alert']
}),
    preview: (
      <div className="demo-stack">
        <Alert color="info">정보 알림입니다.</Alert>
        <Alert color="success">성공 알림입니다.</Alert>
        <Alert color="warning">경고 알림입니다.</Alert>
        <Alert color="danger">위험 알림입니다.</Alert>
      </div>
    )
  },
  {
    title: '제목과 본문',
    description: (
      <>
        <code>title</code>은 굵게 표시되고, 본문은 <code>children</code> 또는 <code>description</code>으로 전달합니다.
      </>
    ),
    code: wrapPageExample(`<Alert color="info" title="정보">변경 사항이 저장되었습니다.</Alert>
<Alert color="success" title="완료" description="결제가 정상적으로 처리되었습니다." />
<Alert color="warning" title="제목만 있는 알림" />`, {
  name: 'AlertExample2',
  reactImports: [],
  compImports: ['Alert']
}),
    preview: (
      <div className="demo-stack">
        <Alert color="info" title="정보">변경 사항이 저장되었습니다.</Alert>
        <Alert color="success" title="완료" description="결제가 정상적으로 처리되었습니다." />
        <Alert color="warning" title="제목만 있는 알림" />
      </div>
    )
  },
  {
    title: '크기',
    description: (
      <>
        <code>size</code>는 sm · md · lg입니다. 기본은 <code>md</code>입니다.
      </>
    ),
    code: wrapPageExample(`<Alert size="sm" title="Small — alert_sm">작은 알림입니다.</Alert>
<Alert title="Medium — 기본">기본 크기 알림입니다.</Alert>
<Alert size="lg" title="Large — alert_lg">큰 알림입니다.</Alert>`, {
  name: 'AlertSizeExample',
  reactImports: [],
  compImports: ['Alert']
}),
    preview: (
      <div className="demo-stack">
        <Alert size="sm" title="Small — alert_sm">작은 알림입니다.</Alert>
        <Alert title="Medium — 기본">기본 크기 알림입니다.</Alert>
        <Alert size="lg" title="Large — alert_lg">큰 알림입니다.</Alert>
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
    code: wrapPageExample(`<Alert color="danger" showIcon={false}>아이콘 없는 위험 알림</Alert>
<Alert color="success" icon={<Icon name="star" size="100%" />}>사용자 정의 아이콘</Alert>`, {
  name: 'AlertIconExample',
  reactImports: [],
  compImports: ['Alert', 'Icon']
}),
    preview: (
      <div className="demo-stack">
        <Alert color="danger" showIcon={false}>아이콘 없는 위험 알림</Alert>
        <Alert color="success" icon={<Icon name="star" size="100%" />}>사용자 정의 아이콘</Alert>
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

<Alert
  color="info"
  title="공지"
  closable
  open={open}
  onOpenChange={setOpen}
  onClose={() => console.log('closed')}
>
  제어 모드 알림입니다.
</Alert>`, {
      name: 'AlertExample',
      reactImports: ['useState'],
      compImports: ['Alert']
    }),
    preview: <ControlledDemo />
  },
  {
    title: '액션',
    description: (
      <>
        <code>actions</code>로 본문 아래에 버튼을 배치합니다.
      </>
    ),
    code: wrapPageExample(`<Alert
  color="warning"
  title="세션 만료 예정"
  actions={(
    <>
      <Button size="sm" label="연장" />
      <Button size="sm" variant="outline" color="default" label="닫기" />
    </>
  )}
>
  5분 후 로그아웃됩니다.
</Alert>`, {
  name: 'AlertExample5',
  reactImports: [],
  compImports: ['Alert', 'Button']
}),
    preview: (
      <div className="demo-stack">
        <Alert
          color="warning"
          title="세션 만료 예정"
          actions={(
            <>
              <Button size="sm" label="연장" />
              <Button size="sm" variant="outline" color="default" label="닫기" />
            </>
          )}
        >
          5분 후 로그아웃됩니다.
        </Alert>
      </div>
    )
  },
  {
    title: '배너',
    description: (
      <>
        <code>banner</code>는 모서리와 좌우 테두리를 없애 페이지 상단 공지로 사용합니다.
      </>
    ),
    code: wrapPageExample(`<Alert banner color="info" title="점검 안내">오늘 02:00~04:00 서비스 점검이 있습니다.</Alert>`, {
  name: 'AlertExample6',
  reactImports: [],
  compImports: ['Alert']
}),
    preview: (
      <div className="demo-stack">
        <Alert banner color="info" title="점검 안내">
          오늘 02:00~04:00 서비스 점검이 있습니다.
        </Alert>
      </div>
    )
  },
  {
    title: '접근성',
    description: (
      <>
        기본 <code>role</code>은 <code>alert</code>(즉시 읽힘)입니다.
        덜 긴급한 안내는 <code>role=&quot;status&quot;</code>로 바꿉니다.
      </>
    ),
    code: wrapPageExample(`<Alert color="danger" title="오류">필수 항목을 입력해 주세요.</Alert>
<Alert role="status" color="info" title="안내">자동 저장되었습니다.</Alert>`, {
  name: 'AlertA11yExample',
  reactImports: [],
  compImports: ['Alert']
}),
    preview: (
      <div className="demo-stack">
        <Alert color="danger" title="오류">필수 항목을 입력해 주세요.</Alert>
        <Alert role="status" color="info" title="안내">자동 저장되었습니다.</Alert>
      </div>
    )
  }
]

/**
 * Alert 가이드 화면.
 * 유형·크기·아이콘·닫기·액션·배너 예시와 API 문서를 모은다.
 */
export default function AlertGuide () {
  return (
    <GuideLayout
      category="피드백"
      title="Alert"
      description="인라인 알림 배너. color · open · onOpenChange · closable · actions · banner를 조합합니다."
    >
      {SECTIONS.map((section) => (
        <DemoBlock
          key={section.title}
          title={section.title}
          description={section.description}
          code={section.code}
          fileName="AlertExample.jsx"
        >
          {section.preview}
        </DemoBlock>
      ))}

      <GuideApiDocs sections={alertApiSections} />
    </GuideLayout>
  )
}
