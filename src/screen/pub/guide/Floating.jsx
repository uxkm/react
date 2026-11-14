'use client'

import { useRef, useState } from 'react' // React
import { BackTop, Button, Floating, Icon, Space } from '@/comp' // comp
import { DemoBlock } from '@/screen/pub/widgets/preview/DemoBlock' // Demo Block 컴포넌트
import { GuideApiDocs } from '@/screen/pub/widgets/docs/GuideApiDocs' // Guide Api Docs 컴포넌트
import { GuideLayout } from '@/screen/pub/layout' // Guide Layout 컴포넌트
import { ensurePageModule, wrapPageExample } from '@/screen/pub/lib/pageExampleCode' // 라이브러리/유틸 · page Example Code
import { floatingApiSections } from '@/screen/pub/data/guide/floatingApiSections' // floating Api Sections

// 문서 기준 플로팅의 푸터 경계 동작을 확인할 수 있도록 이 가이드에서는 푸터를 표시한다.
export const meta = { footer: true }

const DEMO_PARAS = Array.from({ length: 12 }, (_, index) => (
  <p key={index}>
    스크롤 데모 문단 {index + 1}. Floating 안 BackTop이 target 스크롤 기준으로 나타나는지 확인합니다.
  </p>
))

const DEMO_PARAS_CODE = `Array.from({ length: 12 }, (_, index) => (
  <p key={index}>
    스크롤 데모 문단 {index + 1}. Floating 안 BackTop이 target 스크롤 기준으로 나타나는지 확인합니다.
  </p>
))`

/** 플로팅 보조 액션 버튼(원형 아이콘). iconOnly 는 children 으로 아이콘을 넣는다 */
function FloatAction ({ label = '문의', icon = 'mail', ...rest }) {
  return (
    <Button
      size="md"
      variant="filled"
      color="primary"
      iconOnly
      round
      ariaLabel={label}
      {...rest}
    >
      <Icon name={icon} />
    </Button>
  )
}

/** 내부 스크롤 + Floating(BackTop 포함) — 데모 래퍼 absolute */
function ScrollFloatingDemo ({
  order,
  direction = 'column',
  showChat = true,
  showHelp = false,
  visibilityHeight = 120
}) {
  const scrollerRef = useRef(null)
  const [visible, setVisible] = useState(false)

  return (
    <div className="floating_demo-wrap">
      <div className="floating_demo-scroll" tabIndex={0} ref={scrollerRef}>
        <div className="floating_demo-content">
          <p>
            우측 Floating 스택(컨테이너). BackTop 표시: <code>{String(visible)}</code>
            {order ? <> · order=<code>{JSON.stringify(order)}</code></> : null}
          </p>
          {DEMO_PARAS}
        </div>
      </div>
      <Floating
        placement="bottom-right"
        offsetBottom={16}
        offsetRight={16}
        gap={10}
        direction={direction}
        order={order}
      >
        {showHelp && (
          <Floating.Item name="help">
            <FloatAction label="도움말" icon="info" />
          </Floating.Item>
        )}
        {showChat && (
          <Floating.Item name="chat">
            <FloatAction label="문의" icon="mail" />
          </Floating.Item>
        )}
        <Floating.Item name="backTop">
          <BackTop
            target={() => scrollerRef.current}
            visibilityHeight={visibilityHeight}
            label="맨 위로"
            onVisibleChange={setVisible}
          />
        </Floating.Item>
      </Floating>
    </div>
  )
}

/** 문서(window · DOM 뷰포트) 기준 Floating — 페이지 스크롤·뷰포트 fixed */
function WindowFloatingDemo () {
  const [visible, setVisible] = useState(false)
  const [boundary, setBoundary] = useState('viewport')

  return (
    <div className="floating_demo-window" data-floating-window-demo="">
      <p>
        이 가이드 <strong>문서(페이지)</strong>를 스크롤하면 <strong>뷰포트 우하단</strong>에
        Floating 스택이 <code>position: fixed</code>로 붙습니다.
        BackTop <code>target</code>도 생략(<code>window</code> · <code>data-target=&quot;window&quot;</code>)입니다.
        내부 스크롤 박스가 아닙니다. BackTop 표시: <code>{String(visible)}</code>
      </p>
      <label>
        플로팅 경계
        <select value={boundary} onChange={(event) => setBoundary(event.target.value)}>
          <option value="viewport">뷰포트에 고정</option>
          <option value="footer">푸터 위에서 멈춤</option>
        </select>
      </label>
      <Floating
        boundary={boundary}
        boundaryGap={16}
        placement="bottom-right"
        offsetBottom={24}
        offsetRight={24}
        gap={10}
      >
        <Floating.Item name="chat">
          <FloatAction label="문의(문서)" icon="mail" />
        </Floating.Item>
        <Floating.Item name="backTop">
          <BackTop
            visibilityHeight={280}
            label="맨 위로(문서)"
            onVisibleChange={setVisible}
          />
        </Floating.Item>
      </Floating>
    </div>
  )
}

const FLOAT_ACTION_CODE = `function FloatAction ({ label = '문의', icon = 'mail', ...rest }) {
  return (
    <Button
      size="md"
      variant="filled"
      color="primary"
      iconOnly
      round
      ariaLabel={label}
      {...rest}
    >
      <Icon name={icon} />
    </Button>
  )
}`

/** 로컬 meta로 전체·항목별 표시를 확인하는 미리보기 */
function FloatingMetaDemo () {
  const [showFloating, setShowFloating] = useState(true)
  const [showChat, setShowChat] = useState(true)
  const [showExtra, setShowExtra] = useState(false)
  return (
    <div data-floating-meta-demo="">
      <Space>
        <Button onClick={() => setShowFloating((value) => !value)}>전체 표시 전환</Button>
        <Button onClick={() => setShowChat((value) => !value)}>상담 표시 전환</Button>
        <Button onClick={() => setShowExtra((value) => !value)}>페이지 추가 항목 전환</Button>
      </Space>
      <div className="floating_demo-wrap floating_demo-preview">
        <Floating
          meta={{ floating: showFloating, floatingItems: { chat: showChat, 'page-help': showExtra } }}
          style={{ position: 'absolute' }}
        >
          <Floating.Item name="chat"><Button>상담</Button></Floating.Item>
          <Floating.Item name="page-help"><Button>페이지 도움말</Button></Floating.Item>
          <Floating.Item name="backTop"><Button>맨 위로</Button></Floating.Item>
        </Floating>
      </div>
    </div>
  )
}

function FloatingSlotsDemo () {
  const [showCustom, setShowCustom] = useState(true)
  return (
    <div data-floating-slots-demo="">
      <Button onClick={() => setShowCustom((value) => !value)}>커스텀 영역 표시 전환</Button>
      <div className="floating_demo-wrap floating_demo-preview" style={{ minHeight: 200 }}>
        <Floating
          style={{ position: 'absolute' }}
          meta={{ floatingItems: { 'page-tools': showCustom } }}
          slots={{ 'page-tools': (
            <div>
              <strong>페이지 전용 UI</strong>
              <input aria-label="플로팅 메모" placeholder="직접 입력할 수 있습니다" />
              <Button size="sm">저장</Button>
            </div>
          ) }}
        />
      </div>
    </div>
  )
}

const SECTIONS = [
  {
    title: '커스텀 UI 슬롯 · 페이지별 배치',
    description: (
      <>
        <code>slots</code>에 이름과 UI를 전달하면 해당 이름의 플로팅 항목으로 등록됩니다.
        버튼·입력·카드 등 임의의 UI를 넣을 수 있고 <code>meta.floatingItems</code>와
        <code>order</code>에 같은 이름을 사용합니다.
      </>
    ),
    code: `'use client'
import { Button, PageFloating } from '@/comp'

export const meta = { floating: true, floatingItems: { 'page-tools': true } }

export default function ExamplePage () {
  return (
    <PageFloating
      floatingProps={{ boundary: 'footer', boundaryGap: 20, offsetBottom: 24 }}
      slots={{ 'page-tools': (
        <div>
          <p>이 페이지에서만 제공하는 영역</p>
          <input aria-label="메모" />
          <Button>저장</Button>
        </div>
      ) }}
    />
  )
}

// 직접 사용하는 Floating에도 같은 slots와 배치 옵션을 전달할 수 있습니다.
// boundary="viewport": 기존 화면 고정(기본값)
// boundary="footer": 푸터 위에서 멈춤
// boundary="#stop-area": 지정한 영역 위에서 멈춤
// getPosition={({ defaultStyle }) => ({ ...defaultStyle, right: 48 })}: 직접 좌표 보정`,
    preview: <FloatingSlotsDemo />
  },
  {
    title: '페이지 meta · 전체와 항목별 표시',
    description: (
      <>
        페이지의 <code>meta.floating</code>은 전체, <code>meta.floatingItems</code>는
        <code>Floating.Item name</code>별 표시를 제어합니다. 생략하면 표시하며,
        전체가 false면 내부 항목이 true여도 숨깁니다. 아래 미리보기는 Floating의 로컬 meta로 동작을 보여 줍니다.
      </>
    ),
    code: `'use client'

import { Button, Floating, PageFloating } from '@/comp'

export const meta = {
  header: true,
  footer: true,
  floating: true,
  floatingItems: {
    chat: false,
    backTop: true,
    'page-help': true
  }
}

export default function ExamplePage () {
  return (
    <>
      <h1>페이지 내용</h1>
      <PageFloating>
        <Floating.Item name="page-help">
          <Button>이 페이지 도움말</Button>
        </Floating.Item>
      </PageFloating>
    </>
  )
}`,
    preview: <FloatingMetaDemo />
  },
  {
    title: '기본 사용',
    description: (
      <>
        <code>Floating</code>은 우측(기본 <code>bottom-right</code>)에 고정되는 액션 스택입니다.
        <code>Floating.Item</code>에 버튼·<code>BackTop</code> 등을 넣습니다.
        BackTop이 안에 있으면 고정 기준은 Floating이며, Top 버튼은 스택 <strong>하단</strong>에 둡니다.
      </>
    ),
    code: wrapPageExample(`${FLOAT_ACTION_CODE}

<div className="floating_demo-wrap floating_demo-preview">
  <Floating
    placement="bottom-right"
    offsetBottom={16}
    offsetRight={16}
    gap={10}
    style={{ position: 'absolute' }}
  >
    <Floating.Item name="chat">
      <FloatAction label="문의" icon="mail" />
    </Floating.Item>
    <Floating.Item name="backTop">
      <BackTop label="맨 위로" />
    </Floating.Item>
  </Floating>
</div>`, {
      name: 'FloatingExample',
      reactImports: [],
      compImports: ['BackTop', 'Button', 'Floating', 'Icon']
    }),
    preview: (
      <div className="floating_demo-wrap floating_demo-preview">
        <Floating placement="bottom-right" offsetBottom={16} offsetRight={16} gap={10} style={{ position: 'absolute' }}>
          <Floating.Item name="chat">
            <FloatAction />
          </Floating.Item>
          <Floating.Item name="backTop">
            <div className="back_top is-visible is-in-floating" data-back-top="" data-in-floating="" style={{ opacity: 1, visibility: 'visible', pointerEvents: 'auto', transform: 'none', position: 'static' }}>
              <button type="button" className="back_top_btn back_top_primary" aria-label="맨 위로">
                <Icon name="chevron-down" className="back_top_icon" aria-hidden />
                <span className="back_top_label">맨 위로</span>
              </button>
            </div>
          </Floating.Item>
        </Floating>
      </div>
    )
  },
  {
    title: '스크롤 · 내부 컨테이너',
    description: (
      <>
        데모 스크롤 박스 + 래퍼 안 <code>absolute</code> Floating입니다.
        BackTop <code>target</code>은 내부 스크롤(<code>data-target=&quot;container&quot;</code>).
        <code>data-in-floating</code>으로 자체 fixed는 해제되고, 스택 위치 기준은 Floating입니다.
      </>
    ),
    code: ensurePageModule(`import { useRef, useState } from 'react'
import { BackTop, Button, Floating, Icon } from '@/comp'

const DEMO_PARAS = ${DEMO_PARAS_CODE}

${FLOAT_ACTION_CODE}

function FloatingScrollExample () {
  const scrollerRef = useRef(null)
  const [visible, setVisible] = useState(false)

  return (
    <div className="floating_demo-wrap">
      <div className="floating_demo-scroll" tabIndex={0} ref={scrollerRef}>
        <div className="floating_demo-content">
          <p>
            우측 Floating 스택(컨테이너). BackTop 표시: {String(visible)}
          </p>
          {DEMO_PARAS}
        </div>
      </div>
      <Floating
        placement="bottom-right"
        offsetBottom={16}
        offsetRight={16}
        gap={10}
      >
        <Floating.Item name="chat">
          <FloatAction label="문의" icon="mail" />
        </Floating.Item>
        <Floating.Item name="backTop">
          <BackTop
            target={() => scrollerRef.current}
            visibilityHeight={120}
            label="맨 위로"
            onVisibleChange={setVisible}
          />
        </Floating.Item>
      </Floating>
    </div>
  )
}`, 'FloatingScrollExample'),
    preview: <ScrollFloatingDemo />
  },
  {
    title: '스크롤 · 문서(window)',
    description: (
      <>
        Floating 기본은 <code>position: fixed</code>로 <strong>문서 DOM 뷰포트</strong> 우하단에 붙습니다.
        BackTop도 <code>target</code> 생략(<code>window</code>)이라 페이지 스크롤에 반응합니다.
        이 가이드를 스크롤해 확인하세요. 내부 컨테이너 데모와 대비됩니다.
      </>
    ),
    code: ensurePageModule(`import { useState } from 'react'
import { BackTop, Button, Floating, Icon } from '@/comp'

${FLOAT_ACTION_CODE}

function FloatingWindowExample () {
  const [visible, setVisible] = useState(false)

  return (
    <div className="floating_demo-window">
      <p>
        이 가이드 문서(페이지)를 스크롤하면 뷰포트 우하단에 Floating 스택이
        position: fixed 로 붙습니다. BackTop target 도 생략(window · data-target=&quot;window&quot;)입니다.
        내부 스크롤 박스가 아닙니다. BackTop 표시: {String(visible)}
      </p>
      <Floating
        placement="bottom-right"
        offsetBottom={24}
        offsetRight={24}
        gap={10}
      >
        <Floating.Item name="chat">
          <FloatAction label="문의(문서)" icon="mail" />
        </Floating.Item>
        <Floating.Item name="backTop">
          <BackTop
            visibilityHeight={280}
            label="맨 위로(문서)"
            onVisibleChange={setVisible}
          />
        </Floating.Item>
      </Floating>
    </div>
  )
}`, 'FloatingWindowExample'),
    preview: <WindowFloatingDemo />
  },
  {
    title: '순서(order)',
    description: (
      <>
        아이템은 있을 수도·없을 수도 있고, 순서도 바뀔 수 있습니다.
        <code>order=&#123;[&apos;backTop&apos;, &apos;chat&apos;]&#125;</code>처럼
        <code>Floating.Item name</code> 배열로 위→아래 순서를 지정합니다.
        아이템별 <code>order</code> 숫자(CSS order)도 지원합니다.
      </>
    ),
    code: ensurePageModule(`import { useRef, useState } from 'react'
import { BackTop, Button, Floating, Icon, Space } from '@/comp'

const DEMO_PARAS = ${DEMO_PARAS_CODE}

${FLOAT_ACTION_CODE}

function ScrollFloatingDemo ({ order, showHelp = false }) {
  const scrollerRef = useRef(null)
  const [visible, setVisible] = useState(false)

  return (
    <div className="floating_demo-wrap">
      <div className="floating_demo-scroll" tabIndex={0} ref={scrollerRef}>
        <div className="floating_demo-content">
          <p>
            우측 Floating 스택(컨테이너). BackTop 표시: {String(visible)}
            {' · order='}{JSON.stringify(order)}
          </p>
          {DEMO_PARAS}
        </div>
      </div>
      <Floating
        placement="bottom-right"
        offsetBottom={16}
        offsetRight={16}
        gap={10}
        order={order}
      >
        {showHelp && (
          <Floating.Item name="help">
            <FloatAction label="도움말" icon="info" />
          </Floating.Item>
        )}
        <Floating.Item name="chat">
          <FloatAction label="문의" icon="mail" />
        </Floating.Item>
        <Floating.Item name="backTop">
          <BackTop
            target={() => scrollerRef.current}
            visibilityHeight={120}
            label="맨 위로"
            onVisibleChange={setVisible}
          />
        </Floating.Item>
      </Floating>
    </div>
  )
}

export default function FloatingOrderExample () {
  return (
    <Space vertical block size={24}>
      <ScrollFloatingDemo
        showHelp
        order={['chat', 'help', 'backTop']}
      />
      <ScrollFloatingDemo
        showHelp
        order={['backTop', 'help', 'chat']}
      />
    </Space>
  )
}`),
    preview: (
      <Space vertical block size={24}>
        <ScrollFloatingDemo
          showHelp
          order={['chat', 'help', 'backTop']}
        />
        <ScrollFloatingDemo
          showHelp
          order={['backTop', 'help', 'chat']}
        />
      </Space>
    )
  },
  {
    title: '방향(direction)',
    description: (
      <>
        <code>direction</code>으로 스택 방향을 바꿉니다.
        기본 <code>column</code>은 위→아래(마지막이 하단).
        <code>column-reverse</code>면 시각적 상하가 뒤집힙니다.
      </>
    ),
    code: ensurePageModule(`import { useRef, useState } from 'react'
import { BackTop, Button, Floating, Icon } from '@/comp'

const DEMO_PARAS = ${DEMO_PARAS_CODE}

${FLOAT_ACTION_CODE}

function FloatingDirectionExample () {
  const scrollerRef = useRef(null)
  const [visible, setVisible] = useState(false)

  return (
    <div className="floating_demo-wrap">
      <div className="floating_demo-scroll" tabIndex={0} ref={scrollerRef}>
        <div className="floating_demo-content">
          <p>
            우측 Floating 스택(컨테이너). BackTop 표시: {String(visible)}
            {' · order=["chat","backTop"] · direction="column-reverse"'}
          </p>
          {DEMO_PARAS}
        </div>
      </div>
      <Floating
        placement="bottom-right"
        offsetBottom={16}
        offsetRight={16}
        gap={10}
        direction="column-reverse"
        order={['chat', 'backTop']}
      >
        <Floating.Item name="chat">
          <FloatAction label="문의" icon="mail" />
        </Floating.Item>
        <Floating.Item name="backTop">
          <BackTop
            target={() => scrollerRef.current}
            visibilityHeight={120}
            label="맨 위로"
            onVisibleChange={setVisible}
          />
        </Floating.Item>
      </Floating>
    </div>
  )
}`, 'FloatingDirectionExample'),
    preview: (
      <ScrollFloatingDemo
        direction="column-reverse"
        order={['chat', 'backTop']}
      />
    )
  },
  {
    title: 'HTML 마크업',
    description: (
      <>
        스타일 계약은 <code>floating</code> · <code>floating_item</code>입니다.
        BackTop이 안에 있으면 <code>back_top is-in-floating</code>이 붙습니다.
      </>
    ),
    code: `<div class="floating_demo-wrap floating_demo-preview">
  <div
    class="floating"
    data-floating
    data-placement="bottom-right"
    data-direction="column"
    style="position: absolute; bottom: 16px; right: 16px; gap: 10px;"
  >
    <div class="floating_item" data-floating-item data-name="chat">
      <button
        type="button"
        class="btn btn_filled color_primary btn_round btn_icon-only"
        aria-label="문의"
      >
        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M4 6h16v12H4z" />
          <path d="m4 7 8 6 8-6" />
        </svg>
      </button>
    </div>
    <div class="floating_item" data-floating-item data-name="backTop">
      <div
        class="back_top is-visible is-in-floating"
        data-back-top
        data-in-floating
        data-target="container"
      >
        <button type="button" class="back_top_btn back_top_primary" aria-label="맨 위로">
          <svg class="back_top_icon icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="m6 9 6 6 6-6" />
          </svg>
          <span class="back_top_label">맨 위로</span>
        </button>
      </div>
    </div>
  </div>
</div>`,
    preview: (
      <div className="floating_demo-wrap floating_demo-preview">
        <div
          className="floating"
          data-floating=""
          data-placement="bottom-right"
          data-direction="column"
          style={{ position: 'absolute', bottom: 16, right: 16, gap: 10 }}
        >
          <div className="floating_item" data-floating-item="" data-name="chat">
            <FloatAction />
          </div>
          <div className="floating_item" data-floating-item="" data-name="backTop">
            <div className="back_top is-visible is-in-floating" data-back-top="" data-in-floating="" style={{ opacity: 1, visibility: 'visible', pointerEvents: 'auto', transform: 'none' }}>
              <button type="button" className="back_top_btn back_top_primary" aria-label="맨 위로">
                <Icon name="chevron-down" className="back_top_icon" aria-hidden />
                <span className="back_top_label">맨 위로</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
]

/**
 * Floating 가이드 화면.
 * 우측 플로팅 스택 · BackTop 연동 · order · direction 예시와 API 문서를 모은다.
 */
export default function FloatingGuide () {
  return (
    <GuideLayout
      category="기타"
      title="Floating"
      description="우측 고정 액션 스택. BackTop·버튼을 담고, placement · order · direction으로 위치와 순서를 맞춥니다."
    >
      {SECTIONS.map((section) => (
        <DemoBlock
          key={section.title}
          title={section.title}
          description={section.description}
          code={section.code}
          fileName={section.title === 'HTML 마크업' ? 'floating.html' : 'FloatingExample.jsx'}
        >
          {section.preview}
        </DemoBlock>
      ))}

      <GuideApiDocs sections={floatingApiSections} />
    </GuideLayout>
  )
}
