'use client'

import { useState } from 'react'
import { Keyword, Keywords } from '@/comp'
import { DemoBlock } from '@/screen/pub/widgets/preview/DemoBlock'
import { GuideApiDocs } from '@/screen/pub/widgets/docs/GuideApiDocs'
import { GuideLayout } from '@/screen/pub/layout'
import { wrapPageExample } from '@/screen/pub/lib/pageExampleCode'
import { keywordApiSections } from '@/screen/pub/data/guide/keywordApiSections'

const SAMPLE = [
  'React', 'Next.js', 'TypeScript', 'SCSS', 'Accessibility',
  'Design System', 'Modal', 'Drawer', 'Tabs', 'Tag',
  'Form', 'Button', 'Icon', 'Tooltip', 'Popover'
]

/** 코드 보기에 SAMPLE 키워드를 전부 펼쳐 쓴다 */
const sampleKeywordsCode = (indent = '  ') =>
  SAMPLE.map((label) => `${indent}<Keyword>${label}</Keyword>`).join('\n')

const SAMPLE_SLICE_8 = SAMPLE.slice(0, 8)
const sampleSlice8Code = (indent = '  ') =>
  SAMPLE_SLICE_8.map((label) => `${indent}<Keyword>${label}</Keyword>`).join('\n')

/** 기본 접힘 목록 */
function CollapseDemo () {
  return (
    <Keywords ariaLabel="키워드 예시">
      {SAMPLE.map((label) => (
        <Keyword key={label}>{label}</Keyword>
      ))}
    </Keywords>
  )
}

/** 접힘 + 토글 가장자리 딤 */
function ToggleDimDemo () {
  return (
    <Keywords toggleDim ariaLabel="딤 키워드 예시">
      {SAMPLE.map((label) => (
        <Keyword key={label}>{label}</Keyword>
      ))}
    </Keywords>
  )
}

/** 토글 슬롯 · 콘텐츠 커스텀 */
function ToggleSlotDemo () {
  return (
    <div className="typo_stack">
      <Keywords
        ariaLabel="토글 문구"
        toggle={<span className="size_sm">더보기</span>}
      >
        {SAMPLE.map((label) => (
          <Keyword key={label}>{label}</Keyword>
        ))}
      </Keywords>
      <Keywords
        toggleDim
        ariaLabel="커스텀 토글 슬롯"
        renderToggle={({ expanded, overflowing, listId, toggle, toggleClassName }) => (
          overflowing
            ? (
              <button
                type="button"
                className={toggleClassName}
                aria-expanded={expanded}
                aria-controls={listId}
                onClick={toggle}
              >
                {expanded ? '접기' : '펼치기'}
              </button>
              )
            : null
        )}
      >
        {SAMPLE.map((label) => (
          <Keyword key={`slot-${label}`}>{label}</Keyword>
        ))}
      </Keywords>
    </div>
  )
}

/** 토글 원형 · pill */
function ToggleShapeDemo () {
  return (
    <div className="typo_stack">
      <Keywords toggleShape="circle" toggleDim ariaLabel="원형 토글">
        {SAMPLE.map((label) => (
          <Keyword key={`circle-${label}`}>{label}</Keyword>
        ))}
      </Keywords>
      <Keywords toggleShape="round" toggleDim ariaLabel="pill 토글">
        {SAMPLE.map((label) => (
          <Keyword key={`round-${label}`}>{label}</Keyword>
        ))}
      </Keywords>
    </div>
  )
}

/** expanded 제어 */
function ControlledDemo () {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="typo_stack">
      <p className="color_muted size_sm">
        펼침: <code>{String(expanded)}</code>
      </p>
      <Keywords
        ariaLabel="제어 키워드"
        expanded={expanded}
        onExpandedChange={setExpanded}
      >
        {SAMPLE.map((label) => (
          <Keyword key={label}>{label}</Keyword>
        ))}
      </Keywords>
    </div>
  )
}

/** as: tag / button / link */
function AsDemo () {
  const [selected, setSelected] = useState('ui')

  return (
    <Keywords ariaLabel="역할별 키워드" defaultExpanded>
      <Keyword>표시용 태그</Keyword>
      <Keyword
        as="button"
        selected={selected === 'ui'}
        onClick={() => setSelected('ui')}
      >
        UI
      </Keyword>
      <Keyword
        as="button"
        selected={selected === 'ux'}
        onClick={() => setSelected('ux')}
      >
        UX
      </Keyword>
      <Keyword as="link" href="#keyword-link">
        문서 링크
      </Keyword>
      <Keyword as="button" disabled>
        비활성
      </Keyword>
    </Keywords>
  )
}

const SECTIONS = [
  {
    title: '기본 · 접힘/펼침',
    description: (
      <>
        기본은 가로 1행·간격 8px이며, 부모보다 넘치면 가로 스크롤되고 우측 펼침/접기 버튼이 나타납니다.
        펼치면 아이템이 아래로 줄바꿈됩니다. 넘치지 않으면 토글은 숨깁니다.
      </>
    ),
    code: wrapPageExample(`<Keywords ariaLabel="키워드">
${sampleKeywordsCode()}
</Keywords>`, {
      name: 'KeywordsBasicExample',
      reactImports: [],
      compImports: ['Keyword', 'Keywords']
    }),
    preview: <CollapseDemo />
  },
  {
    title: '토글 가장자리 딤',
    description: (
      <>
        <code>toggleDim</code>을 켜면 접힘·넘침일 때 펼침/접기 버튼 왼쪽에 페이드 딤이 붙습니다.
        배경색은 <code>--keywords-dim-color</code>, 너비는 <code>--keywords-dim-width</code>로 조정합니다.
      </>
    ),
    code: wrapPageExample(`<Keywords toggleDim ariaLabel="키워드">
${sampleKeywordsCode()}
</Keywords>`, {
      name: 'KeywordsToggleDimExample',
      reactImports: [],
      compImports: ['Keyword', 'Keywords']
    }),
    preview: <ToggleDimDemo />
  },
  {
    title: '토글 슬롯',
    description: (
      <>
        <code>toggle</code>로 기본 버튼 안 콘텐츠만 바꿀 수 있고,
        <code>renderToggle</code>로 펼침/접기 영역 전체를 슬롯 렌더합니다.
        슬롯에는 <code>expanded</code> · <code>overflowing</code> · <code>toggleClassName</code> · <code>toggle</code> 등이 전달됩니다.
        딤·형태 스타일을 쓰려면 슬롯 루트에 <code>toggleClassName</code>을 그대로 붙이세요.
      </>
    ),
    code: wrapPageExample(`<Keywords toggle={<span className="size_sm">더보기</span>} ariaLabel="토글 문구">
${sampleKeywordsCode()}
</Keywords>

<Keywords
  toggleDim
  ariaLabel="커스텀 토글 슬롯"
  renderToggle={({ expanded, overflowing, listId, toggle, toggleClassName }) =>
    overflowing ? (
      <button
        type="button"
        className={toggleClassName}
        aria-expanded={expanded}
        aria-controls={listId}
        onClick={toggle}
      >
        {expanded ? '접기' : '펼치기'}
      </button>
    ) : null
  }
>
${sampleKeywordsCode()}
</Keywords>`, {
      name: 'KeywordsToggleSlotExample',
      reactImports: [],
      compImports: ['Keyword', 'Keywords']
    }),
    preview: <ToggleSlotDemo />
  },
  {
    title: '토글 형태 · 원형',
    description: (
      <>
        <code>toggleShape</code>으로 펼침/접기 버튼 형태를 바꿉니다.
        <code>default</code> · <code>round</code>(pill) · <code>circle</code>(원형).
        추가 클래스는 <code>toggleClassName</code>으로 붙입니다.
      </>
    ),
    code: wrapPageExample(`<Keywords toggleShape="circle" toggleDim ariaLabel="원형 토글">
${sampleKeywordsCode()}
</Keywords>

<Keywords toggleShape="round" toggleDim ariaLabel="pill 토글">
${sampleKeywordsCode()}
</Keywords>`, {
      name: 'KeywordsToggleShapeExample',
      reactImports: [],
      compImports: ['Keyword', 'Keywords']
    }),
    preview: <ToggleShapeDemo />
  },
  {
    title: '역할 · tag / button / link',
    description: (
      <>
        <code>as</code>로 시맨틱을 고릅니다. 기본 <code>tag</code>(span), <code>button</code>, <code>link</code>(a+href).
        겉모습은 공통 chip이며, 버튼은 <code>selected</code>·<code>onClick</code>으로 필터처럼 쓸 수 있습니다.
      </>
    ),
    code: wrapPageExample(`const [selected, setSelected] = useState('ui')

<Keywords ariaLabel="역할별 키워드" defaultExpanded>
  <Keyword>표시용 태그</Keyword>
  <Keyword
    as="button"
    selected={selected === 'ui'}
    onClick={() => setSelected('ui')}
  >
    UI
  </Keyword>
  <Keyword
    as="button"
    selected={selected === 'ux'}
    onClick={() => setSelected('ux')}
  >
    UX
  </Keyword>
  <Keyword as="link" href="#keyword-link">
    문서 링크
  </Keyword>
  <Keyword as="button" disabled>
    비활성
  </Keyword>
</Keywords>`, {
      name: 'KeywordsAsExample',
      reactImports: ['useState'],
      compImports: ['Keyword', 'Keywords']
    }),
    preview: <AsDemo />
  },
  {
    title: '스타일 · 색 · 라운드',
    description: (
      <>
        <code>color</code> · <code>variant</code> · <code>size</code> · <code>round</code>로 칩 스킨을 지정합니다.
        목록 전체에 pill을 쓰려면 <code>Keywords round</code>를 지정합니다.
      </>
    ),
    code: wrapPageExample(`<Keywords round collapsible={false} ariaLabel="라운드 키워드">
  <Keyword color="primary">Primary</Keyword>
  <Keyword color="success" variant="solid">Solid</Keyword>
  <Keyword color="danger" variant="outline">Outline</Keyword>
  <Keyword color="info" variant="borderless">Borderless</Keyword>
  <Keyword size="sm">Small</Keyword>
  <Keyword size="lg" round>Large round</Keyword>
</Keywords>

<Keywords collapsible={false} ariaLabel="기본 모서리">
  <Keyword color="primary">기본 radius</Keyword>
  <Keyword color="warning" variant="solid">Warning</Keyword>
  <Keyword round color="muted">개별 round</Keyword>
</Keywords>`, {
      name: 'KeywordsStyleExample',
      reactImports: [],
      compImports: ['Keyword', 'Keywords']
    }),
    preview: (
      <div className="typo_stack">
        <Keywords round collapsible={false} ariaLabel="라운드 키워드">
          <Keyword color="primary">Primary</Keyword>
          <Keyword color="success" variant="solid">Solid</Keyword>
          <Keyword color="danger" variant="outline">Outline</Keyword>
          <Keyword color="info" variant="borderless">Borderless</Keyword>
          <Keyword size="sm">Small</Keyword>
          <Keyword size="lg" round>Large round</Keyword>
        </Keywords>
        <Keywords collapsible={false} ariaLabel="기본 모서리">
          <Keyword color="primary">기본 radius</Keyword>
          <Keyword color="warning" variant="solid">Warning</Keyword>
          <Keyword round color="muted">개별 round</Keyword>
        </Keywords>
      </div>
    )
  },
  {
    title: '펼침 제어',
    description: (
      <>
        <code>expanded</code> · <code>onExpandedChange</code>로 페이지에서 펼침을 제어합니다.
        <code>collapsible={'{false}'}</code>이면 토글 없이 항상 줄바꿈합니다.
      </>
    ),
    code: wrapPageExample(`const [expanded, setExpanded] = useState(false)

<Keywords
  expanded={expanded}
  onExpandedChange={setExpanded}
  ariaLabel="제어 키워드"
>
${sampleKeywordsCode()}
</Keywords>`, {
      name: 'KeywordsControlledExample',
      reactImports: ['useState'],
      compImports: ['Keyword', 'Keywords']
    }),
    preview: <ControlledDemo />
  },
  {
    title: '항상 펼침 · collapsible 끄기',
    description: (
      <>
        <code>collapsible={'{false}'}</code>이면 우측 토글을 숨기고 목록만 wrap 으로 표시합니다.
      </>
    ),
    code: wrapPageExample(`<Keywords collapsible={false} ariaLabel="고정 키워드">
${sampleSlice8Code()}
</Keywords>`, {
      name: 'KeywordsAlwaysWrapExample',
      reactImports: [],
      compImports: ['Keyword', 'Keywords']
    }),
    preview: (
      <Keywords collapsible={false} ariaLabel="고정 키워드">
        {SAMPLE_SLICE_8.map((label) => (
          <Keyword key={label}>{label}</Keyword>
        ))}
      </Keywords>
    )
  }
]

export default function KeywordGuidePage () {
  return (
    <GuideLayout
      category="데이터 표시"
      title="Keyword"
      description="키워드 목록. tag·button·link 칩을 가로로 두고 우측에서 펼침/접기합니다."
    >
      {SECTIONS.map((section) => (
        <DemoBlock
          key={section.title}
          title={section.title}
          description={section.description}
          code={section.code}
          fileName="KeywordExample.jsx"
        >
          {section.preview}
        </DemoBlock>
      ))}
      <GuideApiDocs sections={keywordApiSections} />
    </GuideLayout>
  )
}
