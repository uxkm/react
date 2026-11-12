'use client'

import { useState } from 'react'
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Carousel,
  CarouselSlide,
  FormActions,
  FormField,
  FormLayout,
  Icon,
  Input,
  Space,
  Tab,
  TabPanel,
  Tabs
} from '@/comp'
import { DemoBlock } from '@/screen/pub/widgets/preview/DemoBlock'
import { GuideApiDocs } from '@/screen/pub/widgets/docs/GuideApiDocs'
import { GuideLayout } from '@/screen/pub/layout'
import { pageExampleCode, pageExampleReturn } from '@/screen/pub/lib/pageExampleCode'
import { tabsApiSections } from '@/screen/pub/data/guide/tabsApiSections'

const BASIC_TABS = [
  { value: 'overview', label: '개요' },
  { value: 'settings', label: '설정' },
  { value: 'activity', label: '활동' }
]

const ICON_TABS = [
  { value: 'home', label: '홈', icon: <Icon name="home" size="100%" /> },
  { value: 'search', label: '검색', icon: <Icon name="search" size="100%" /> },
  { value: 'inbox', label: '수신함', icon: <Icon name="inbox" size="100%" /> }
]

const DISABLED_TABS = [
  { value: 'a', label: '활성' },
  { value: 'b', label: '비활성', disabled: true },
  { value: 'c', label: '대기' }
]

const MANY_TABS = Array.from({ length: 16 }, (_, index) => ({
  value: `t-${index + 1}`,
  label: `메뉴 항목 ${index + 1}`
}))

const CUSTOM_MENU = [
  { value: 'overview', label: '개요', icon: 'home' },
  { value: 'settings', label: '설정', icon: 'settings' },
  { value: 'activity', label: '활동(비활성)', disabled: true }
]

/** 데이터 map + value별 panels 슬롯 */
function ControlledTabs ({
  tabs = BASIC_TABS,
  initial = tabs[0]?.value,
  panelPrefix = '콘텐츠',
  ...props
}) {
  const [value, setValue] = useState(initial)
  const panels = Object.fromEntries(
    tabs.map((tab) => [
      tab.value,
      <p className="tabs_panel-placeholder" key={String(tab.value)}>
        {panelPrefix}: {tab.label}
      </p>
    ])
  )

  return (
    <Tabs {...props} value={value} onChange={setValue}>
      {tabs.map((tab) => (
        <Tab
          key={String(tab.value)}
          value={tab.value}
          label={tab.label}
          icon={tab.icon}
          disabled={tab.disabled}
          closable={tab.closable}
        >
          {panels[tab.value]}
        </Tab>
      ))}
    </Tabs>
  )
}

/** 코드보기용 — tabs map + value별 패널 슬롯(panels) */
function compoundCode (options = {}) {
  const {
    props = '',
    tabs = BASIC_TABS,
    panelPrefix = '콘텐츠',
    initial = tabs[0]?.value,
    wrapStart = '',
    wrapEnd = '',
    name = 'TabsExample'
  } = options
  const propLine = props ? ` ${props}` : ''
  const hasIcon = tabs.some((tab) => tab.icon)
  const hasDisabled = tabs.some((tab) => tab.disabled)
  const hasClosable = tabs.some((tab) => tab.closable)

  const tabsDecl = tabs.length > 6
    ? `const tabs = Array.from({ length: ${tabs.length} }, (_, index) => ({\n` +
      `  value: \`t-\${index + 1}\`,\n` +
      `  label: \`메뉴 항목 \${index + 1}\`\n` +
      '}))'
    : `const tabs = [\n${tabs.map((tab) => {
      const fields = [
        `value: '${tab.value}'`,
        tab.label != null ? `label: '${tab.label}'` : null,
        tab.disabled ? 'disabled: true' : null,
        tab.closable ? 'closable: true' : null,
        tab.icon ? 'icon: <Icon name="…" size="100%" />' : null
      ].filter(Boolean).join(', ')
      return `  { ${fields} }`
    }).join(',\n')}\n]`

  const panelsDecl = tabs.length > 6
    ? `const panels = Object.fromEntries(\n` +
      `  tabs.map((tab) => [\n` +
      `    tab.value,\n` +
      `    <p className="tabs_panel-placeholder" key={tab.value}>${panelPrefix}: {tab.label}</p>\n` +
      `  ])\n` +
      ')'
    : `const panels = {\n${tabs.map((tab) => (
      `  '${tab.value}': (\n` +
      `    <p className="tabs_panel-placeholder">${panelPrefix}: ${tab.label}</p>\n` +
      '  )'
    )).join(',\n')}\n}`

  const tabAttrs = [
    'key={tab.value}',
    'value={tab.value}',
    'label={tab.label}',
    hasIcon ? 'icon={tab.icon}' : null,
    hasDisabled ? 'disabled={tab.disabled}' : null,
    hasClosable ? 'closable={tab.closable}' : null
  ].filter(Boolean).join('\n      ')

  const tabsJsx = `<Tabs value={value} onChange={setValue}${propLine}>
  {tabs.map((tab) => (
    <Tab
      ${tabAttrs}
    >
      {panels[tab.value]}
    </Tab>
  ))}
</Tabs>`

  const jsx = wrapStart
    ? `${wrapStart.replace(/\n$/, '')}\n  ${tabsJsx.split('\n').join('\n  ')}\n${wrapEnd.replace(/^\n/, '')}`
    : tabsJsx

  return pageExampleCode({
    name,
    reactImports: ['useState'],
    compImports: hasIcon ? ['Icon', 'Tab', 'Tabs'] : ['Tab', 'Tabs'],
    body: pageExampleReturn(
      jsx,
      `${tabsDecl}

${panelsDecl}

const [value, setValue] = useState('${initial}')`
    )
  })
}

/** 메뉴 map + label · children(panels 맵) 패널 슬롯 */
function CompoundTabsDemo () {
  const [value, setValue] = useState('overview')
  const panels = {
    overview: <p className="tabs_panel-placeholder">콘텐츠: 개요</p>,
    settings: <p className="tabs_panel-placeholder">콘텐츠: 설정</p>,
    activity: <p className="tabs_panel-placeholder">콘텐츠: 활동(비활성)</p>
  }

  return (
    <Tabs value={value} onChange={setValue} indicatorSlide>
      {CUSTOM_MENU.map((tab) => (
        <Tab
          key={tab.value}
          value={tab.value}
          label={tab.label}
          icon={tab.icon
            ? (
              <Icon name={tab.icon} size="100%" />
              )
            : undefined}
          disabled={tab.disabled}
        >
          {panels[tab.value]}
        </Tab>
      ))}
    </Tabs>
  )
}

function OverviewSlot () {
  return <p className="tabs_panel-placeholder">개요 페이지 슬롯</p>
}

function SettingsSlot () {
  return (
    <Space vertical block size={8}>
      <p className="tabs_panel-placeholder">설정 페이지 슬롯</p>
      <Button size="sm" variant="outline" label="저장" />
    </Space>
  )
}

function ActivitySlot () {
  return <p className="tabs_panel-placeholder">활동 페이지 슬롯</p>
}

const PANEL_SLOTS = {
  overview: OverviewSlot,
  settings: SettingsSlot,
  activity: ActivitySlot
}

/** 메뉴 map + panel prop 으로 탭별 컴포넌트 슬롯 */
function SlotPanelTabsDemo () {
  const [value, setValue] = useState('overview')

  return (
    <Tabs value={value} onChange={setValue} indicatorSlide>
      {CUSTOM_MENU.map((tab) => {
        const Panel = PANEL_SLOTS[tab.value]
        return (
          <Tab
            key={tab.value}
            value={tab.value}
            label={tab.label}
            icon={tab.icon
              ? (
                <Icon name={tab.icon} size="100%" />
                )
              : undefined}
            disabled={tab.disabled}
            panel={Panel ? <Panel /> : null}
          />
        )
      })}
    </Tabs>
  )
}

/** Tab + TabPanel 조합 */
function TabPanelCompoundDemo () {
  const [value, setValue] = useState('overview')

  return (
    <Tabs value={value} onChange={setValue} indicatorSlide>
      <Tab value="overview" label="개요" />
      <Tab value="settings" label="설정" />
      <Tab value="activity" label="활동" disabled />
      <TabPanel value="overview">
        <p className="tabs_panel-placeholder">개요 패널</p>
      </TabPanel>
      <TabPanel value="settings">
        <p className="tabs_panel-placeholder">설정 패널</p>
      </TabPanel>
      <TabPanel value="activity">
        <p className="tabs_panel-placeholder">활동 패널</p>
      </TabPanel>
    </Tabs>
  )
}

/** 패널별 위젯/모듈: 슬라이드 · 폼 · 카드 */
function PanelSlideModule () {
  return (
    <Carousel ariaLabel="탭 패널 슬라이드" autoplay>
      <CarouselSlide>
        <article className="card card_accent color_primary card_elevated">
          <div className="card_body">
            <p className="typo_overline">이벤트</p>
            <h3 className="card_title">신규 가입 혜택</h3>
            <p className="card_subtitle">첫 주문 20% 할인 쿠폰을 드립니다.</p>
          </div>
        </article>
      </CarouselSlide>
      <CarouselSlide>
        <article className="card card_accent color_success card_elevated">
          <div className="card_body">
            <p className="typo_overline">혜택</p>
            <h3 className="card_title">무료 배송</h3>
            <p className="card_subtitle">3만 원 이상 구매 시 무료 배송이 적용됩니다.</p>
          </div>
        </article>
      </CarouselSlide>
      <CarouselSlide>
        <article className="card card_accent color_warning card_elevated">
          <div className="card_body">
            <p className="typo_overline">세일</p>
            <h3 className="card_title">시즌 세일</h3>
            <p className="card_subtitle">베스트셀러를 최대 50% 할인합니다.</p>
          </div>
        </article>
      </CarouselSlide>
    </Carousel>
  )
}

function PanelFormModule ({ idPrefix = 'tabs-panel' } = {}) {
  return (
    <FormLayout>
      <FormField label="이름" htmlFor={`${idPrefix}-name`} required>
        <Input id={`${idPrefix}-name`} placeholder="홍길동" />
      </FormField>
      <FormField label="이메일" htmlFor={`${idPrefix}-email`}>
        <Input id={`${idPrefix}-email`} type="email" placeholder="name@example.com" />
      </FormField>
      <FormActions>
        <Button variant="outline" color="default" label="취소" />
        <Button label="저장" />
      </FormActions>
    </FormLayout>
  )
}

function PanelCardModule () {
  return (
    <Card style={{ maxWidth: 360, width: '100%' }}>
      <CardHeader title="프로젝트 카드" subtitle="모듈 패널 예시" />
      <CardBody>
        탭 패널에서 Card 위젯을 호출한 예시입니다. 관련 설명과 액션을 담을 수 있습니다.
      </CardBody>
      <CardFooter>
        <Button size="sm" variant="outline" label="자세히" />
        <Button size="sm" label="열기" />
      </CardFooter>
    </Card>
  )
}

/** 페이지에 이미 있는 위젯 — Tabs에서 그대로 호출 */
const HeroCarousel = PanelSlideModule
function ContactForm () {
  return <PanelFormModule idPrefix="tabs-page-form" />
}
const ProjectCard = PanelCardModule

const MODULE_PANEL_MAP = {
  slide: PanelSlideModule,
  form: PanelFormModule,
  card: PanelCardModule
}

const MODULE_TABS = [
  { value: 'slide', label: '슬라이드' },
  { value: 'form', label: '폼' },
  { value: 'card', label: '카드' }
]

/** 탭마다 다른 위젯/모듈 패널 */
function ModulePanelsDemo () {
  const [value, setValue] = useState('slide')

  return (
    <Tabs value={value} onChange={setValue} indicatorSlide>
      {MODULE_TABS.map((tab) => {
        const Panel = MODULE_PANEL_MAP[tab.value]
        return (
          <Tab
            key={tab.value}
            value={tab.value}
            label={tab.label}
            panel={Panel ? <Panel /> : null}
          />
        )
      })}
    </Tabs>
  )
}

/** 페이지 위젯을 panel에 직접 호출 */
function PageWidgetPanelsDemo () {
  const [value, setValue] = useState('slide')

  return (
    <Tabs value={value} onChange={setValue} indicatorSlide>
      <Tab value="slide" label="슬라이드" panel={<HeroCarousel />} />
      <Tab value="form" label="폼" panel={<ContactForm />} />
      <Tab value="card" label="카드" panel={<ProjectCard />} />
    </Tabs>
  )
}

/** 닫기 가능한 탭 — 메뉴 map · 패널 내용 교체 */
function ClosableTabsDemo () {
  const [items, setItems] = useState([
    { value: 'doc-1', label: '문서 1', closable: true },
    { value: 'doc-2', label: '문서 2', closable: true },
    { value: 'doc-3', label: '문서 3', closable: true }
  ])
  const [value, setValue] = useState('doc-1')

  const onClose = (closed) => {
    setItems((prev) => {
      const next = prev.filter((item) => item.value !== closed)
      if (closed === value && next.length) {
        setValue(next[0].value)
      } else if (!next.length) {
        setValue('')
      }
      return next
    })
  }

  if (!items.length) {
    return (
      <Space vertical block size={12}>
        <p className="tabs_panel-placeholder">열린 탭이 없습니다.</p>
        <Button
          size="sm"
          variant="outline"
          label="탭 다시 열기"
          onClick={() => {
            setItems([
              { value: 'doc-1', label: '문서 1', closable: true },
              { value: 'doc-2', label: '문서 2', closable: true }
            ])
            setValue('doc-1')
          }}
        />
      </Space>
    )
  }

  return (
    <Tabs
      value={value}
      onChange={setValue}
      onClose={onClose}
      extra={<Button size="sm" variant="ghost" label="추가" />}
    >
      {items.map((tab) => (
        <Tab
          key={tab.value}
          value={tab.value}
          label={tab.label}
          closable={tab.closable}
        >
          <p className="tabs_panel-placeholder">{tab.label} 내용</p>
        </Tab>
      ))}
    </Tabs>
  )
}

const SECTIONS = [
  {
    title: '기본 사용',
    description: (
      <>
        메뉴는 데이터 <code>map</code>으로 <code>Tab</code>을 돌립니다.
        <code>label</code>과 함께 <code>children</code>에 넣으면 탭별 패널 슬롯으로 표시됩니다.
        기본 스킨은 <code>line</code>(<code>tabs_line</code>)이며, 선택 탭에 <code>is-active</code>와
        <code>aria-selected</code>가 붙습니다.
      </>
    ),
    code: compoundCode({ panelPrefix: '콘텐츠' }),
    preview: <ControlledTabs />
  },
  {
    title: '변형(variant)',
    description: (
      <>
        <code>variant</code>는 <code>line</code>(기본) · <code>card</code> · <code>pill</code>입니다.
        각각 <code>tabs_line</code> · <code>tabs_card</code> · <code>tabs_pill</code>이 붙습니다.
      </>
    ),
    code: [
      compoundCode({ props: 'variant="line"', panelPrefix: 'line' }),
      compoundCode({ props: 'variant="card"', panelPrefix: 'card' }),
      compoundCode({ props: 'variant="pill"', panelPrefix: 'pill' })
    ].join('\n\n'),
    preview: (
      <Space vertical block size={24}>
        <ControlledTabs variant="line" panelPrefix="line" />
        <ControlledTabs variant="card" panelPrefix="card" />
        <ControlledTabs variant="pill" panelPrefix="pill" />
      </Space>
    )
  },
  {
    title: '인디케이터 슬라이드',
    description: (
      <>
        <code>indicatorSlide</code>이면 <code>tabs_indicator-slide</code>와
        <code>tabs_indicator</code>가 붙고, 활성 탭을 따라 인디케이터가 이동합니다.
        <code>line</code>은 밑줄(세로면 옆줄), <code>pill</code>은 배경이 슬라이드합니다.
        <code>layout=&quot;equal&quot;</code>은 균등 분할입니다.
      </>
    ),
    code: [
      compoundCode({ props: 'indicatorSlide variant="line"', panelPrefix: 'line slide' }),
      compoundCode({ props: 'indicatorSlide variant="pill"', panelPrefix: 'pill slide' }),
      compoundCode({
        props: 'indicatorSlide layout="equal" variant="line"',
        panelPrefix: 'equal slide'
      }),
      compoundCode({
        props: 'indicatorSlide vertical variant="line"',
        panelPrefix: 'vertical slide',
        wrapStart: '<div className="tabs_demo-narrow">\n',
        wrapEnd: '\n</div>'
      })
    ].join('\n\n'),
    preview: (
      <Space vertical block size={24}>
        <ControlledTabs indicatorSlide variant="line" panelPrefix="line slide" />
        <ControlledTabs indicatorSlide variant="pill" panelPrefix="pill slide" />
        <ControlledTabs
          indicatorSlide
          layout="equal"
          variant="line"
          panelPrefix="equal slide"
        />
        <div className="tabs_demo-narrow">
          <ControlledTabs
            indicatorSlide
            vertical
            variant="line"
            panelPrefix="vertical slide"
          />
        </div>
      </Space>
    )
  },
  {
    title: '스크롤 네비 · 딤 · 선택',
    description: (
      <>
        <code>layout=&quot;scroll&quot;</code>이면 좌·우 <code>Icon button</code>(<code>tabs_nav</code>)이 붙습니다.
        예시는 컨테이너 너비 100% 기준이며, 좁아지면 스크롤·네비가 반응형으로 동작합니다.
        <code>navFade</code>로 가장자리 딤을 켜고, <code>navSelect</code>이면 이전/다음 클릭 시 인접 탭을 선택합니다.
      </>
    ),
    code: [
      compoundCode({
        props: 'indicatorSlide layout="scroll"',
        tabs: MANY_TABS,
        initial: 't-1',
        panelPrefix: 'scroll',
        wrapStart: '<div className="tabs_demo-fluid">\n',
        wrapEnd: '\n</div>'
      }),
      compoundCode({
        props: 'indicatorSlide layout="scroll" navFade',
        tabs: MANY_TABS,
        initial: 't-1',
        panelPrefix: 'navFade',
        wrapStart: '<div className="tabs_demo-fluid">\n',
        wrapEnd: '\n</div>'
      }),
      compoundCode({
        props: 'indicatorSlide layout="scroll" navSelect',
        tabs: MANY_TABS,
        initial: 't-1',
        panelPrefix: 'navSelect',
        wrapStart: '<div className="tabs_demo-fluid">\n',
        wrapEnd: '\n</div>'
      }),
      compoundCode({
        props: 'indicatorSlide layout="scroll" navFade navSelect',
        tabs: MANY_TABS,
        initial: 't-1',
        panelPrefix: 'navFade + navSelect',
        wrapStart: '<div className="tabs_demo-fluid">\n',
        wrapEnd: '\n</div>'
      })
    ].join('\n\n'),
    preview: (
      <Space vertical block size={24}>
        <div className="tabs_demo-fluid">
          <ControlledTabs
            indicatorSlide
            layout="scroll"
            tabs={MANY_TABS}
            initial="t-1"
            panelPrefix="scroll"
          />
        </div>
        <div className="tabs_demo-fluid">
          <ControlledTabs
            indicatorSlide
            layout="scroll"
            navFade
            tabs={MANY_TABS}
            initial="t-1"
            panelPrefix="navFade"
          />
        </div>
        <div className="tabs_demo-fluid">
          <ControlledTabs
            indicatorSlide
            layout="scroll"
            navSelect
            tabs={MANY_TABS}
            initial="t-1"
            panelPrefix="navSelect"
          />
        </div>
        <div className="tabs_demo-fluid">
          <ControlledTabs
            indicatorSlide
            layout="scroll"
            navFade
            navSelect
            tabs={MANY_TABS}
            initial="t-1"
            panelPrefix="navFade + navSelect"
          />
        </div>
      </Space>
    )
  },
  {
    title: '네비 버튼 스타일',
    description: (
      <>
        <code>navVariant</code>는 <code>outline</code>(기본) · <code>ghost</code> · <code>soft</code>입니다.
        <code>navColor</code>로 Icon 색(<code>primary</code> · <code>muted</code> 등)을 바꿀 수 있고,
        <code>navClassName</code>으로 클래스를 더할 수 있습니다.
      </>
    ),
    code: [
      compoundCode({
        props: 'layout="scroll" navVariant="outline"',
        tabs: MANY_TABS,
        initial: 't-1',
        panelPrefix: 'outline',
        wrapStart: '<div className="tabs_demo-fluid">\n',
        wrapEnd: '\n</div>'
      }),
      compoundCode({
        props: 'layout="scroll" navVariant="ghost" navColor="muted"',
        tabs: MANY_TABS,
        initial: 't-1',
        panelPrefix: 'ghost · muted',
        wrapStart: '<div className="tabs_demo-fluid">\n',
        wrapEnd: '\n</div>'
      }),
      compoundCode({
        props: 'layout="scroll" navVariant="soft" navColor="primary"',
        tabs: MANY_TABS,
        initial: 't-1',
        panelPrefix: 'soft · primary',
        wrapStart: '<div className="tabs_demo-fluid">\n',
        wrapEnd: '\n</div>'
      })
    ].join('\n\n'),
    preview: (
      <Space vertical block size={24}>
        <div className="tabs_demo-fluid">
          <ControlledTabs
            layout="scroll"
            navVariant="outline"
            tabs={MANY_TABS}
            initial="t-1"
            panelPrefix="outline"
          />
        </div>
        <div className="tabs_demo-fluid">
          <ControlledTabs
            layout="scroll"
            navVariant="ghost"
            navColor="muted"
            tabs={MANY_TABS}
            initial="t-1"
            panelPrefix="ghost · muted"
          />
        </div>
        <div className="tabs_demo-fluid">
          <ControlledTabs
            layout="scroll"
            navVariant="soft"
            navColor="primary"
            tabs={MANY_TABS}
            initial="t-1"
            panelPrefix="soft · primary"
          />
        </div>
      </Space>
    )
  },
  {
    title: '패널 슬롯 · children',
    description: (
      <>
        <code>Tab</code>에 <code>label</code>을 주고 <code>children</code>에 패널을 넣습니다.
        <code>panels[tab.value]</code>처럼 value별 슬롯 맵을 두면 탭마다 다른 내용을 제어할 수 있습니다.
      </>
    ),
    code: pageExampleCode({
      name: 'TabsPanelChildrenExample',
      reactImports: ['useState'],
      compImports: ['Icon', 'Tab', 'Tabs'],
      body: pageExampleReturn(
        `<Tabs value={value} onChange={setValue} indicatorSlide>
  {menu.map((tab) => (
    <Tab
      key={tab.value}
      value={tab.value}
      label={tab.label}
      icon={tab.icon ? <Icon name={tab.icon} size="100%" /> : undefined}
      disabled={tab.disabled}
    >
      {panels[tab.value]}
    </Tab>
  ))}
</Tabs>`,
        `const menu = [
  { value: 'overview', label: '개요', icon: 'home' },
  { value: 'settings', label: '설정', icon: 'settings' },
  { value: 'activity', label: '활동(비활성)', disabled: true }
]

const panels = {
  overview: (
    <p className="tabs_panel-placeholder">콘텐츠: 개요</p>
  ),
  settings: (
    <p className="tabs_panel-placeholder">콘텐츠: 설정</p>
  ),
  activity: (
    <p className="tabs_panel-placeholder">콘텐츠: 활동(비활성)</p>
  )
}

const [value, setValue] = useState('overview')`
      )
    }),
    preview: <CompoundTabsDemo />
  },
  {
    title: '패널 슬롯 · panel prop',
    description: (
      <>
        <code>panel</code> prop에 페이지·슬롯 컴포넌트를 넘깁니다.
        <code>PanelMap[tab.value]</code>로 탭별 화면을 연결합니다.
      </>
    ),
    code: pageExampleCode({
      name: 'TabsPanelPropExample',
      reactImports: ['useState'],
      compImports: ['Button', 'Icon', 'Space', 'Tab', 'Tabs'],
      body: pageExampleReturn(
        `<Tabs value={value} onChange={setValue} indicatorSlide>
  {menu.map((tab) => {
    const Panel = PanelMap[tab.value]
    return (
      <Tab
        key={tab.value}
        value={tab.value}
        label={tab.label}
        icon={tab.icon ? <Icon name={tab.icon} size="100%" /> : undefined}
        disabled={tab.disabled}
        panel={Panel ? <Panel /> : null}
      />
    )
  })}
</Tabs>`,
        `function OverviewPage () {
  return <p className="tabs_panel-placeholder">개요 페이지 슬롯</p>
}

function SettingsPage () {
  return (
    <Space vertical block size={8}>
      <p className="tabs_panel-placeholder">설정 페이지 슬롯</p>
      <Button size="sm" variant="outline" label="저장" />
    </Space>
  )
}

function ActivityPage () {
  return <p className="tabs_panel-placeholder">활동 페이지 슬롯</p>
}

const menu = [
  { value: 'overview', label: '개요', icon: 'home' },
  { value: 'settings', label: '설정', icon: 'settings' },
  { value: 'activity', label: '활동(비활성)', disabled: true }
]

const PanelMap = {
  overview: OverviewPage,
  settings: SettingsPage,
  activity: ActivityPage
}

const [value, setValue] = useState('overview')`
      )
    }),
    preview: <SlotPanelTabsDemo />
  },
  {
    title: '패널 슬롯 · TabPanel',
    description: (
      <>
        <code>Tab</code>과 <code>TabPanel</code>을 형제로 두고 <code>value</code>로 연결합니다.
        메뉴와 패널 마크업을 분리할 때 사용합니다.
      </>
    ),
    code: pageExampleCode({
      name: 'TabsTabPanelExample',
      reactImports: ['useState'],
      compImports: ['Tab', 'TabPanel', 'Tabs'],
      body: pageExampleReturn(
        `<Tabs value={value} onChange={setValue} indicatorSlide>
  <Tab value="overview" label="개요" />
  <Tab value="settings" label="설정" />
  <Tab value="activity" label="활동" disabled />
  <TabPanel value="overview">
    <p className="tabs_panel-placeholder">개요 패널</p>
  </TabPanel>
  <TabPanel value="settings">
    <p className="tabs_panel-placeholder">설정 패널</p>
  </TabPanel>
  <TabPanel value="activity">
    <p className="tabs_panel-placeholder">활동 패널</p>
  </TabPanel>
</Tabs>`,
        `const [value, setValue] = useState('overview')`
      )
    }),
    preview: <TabPanelCompoundDemo />
  },
  {
    title: '패널 슬롯 · 위젯/모듈',
    description: (
      <>
        탭마다 다른 위젯·모듈을 호출합니다. 첫 탭은 <code>Carousel</code>(슬라이드),
        둘째는 <code>FormLayout</code> 폼 요소, 셋째는 <code>Card</code>입니다.
        <code>panel</code> prop에 모듈 컴포넌트를 넘깁니다.
      </>
    ),
    code: pageExampleCode({
      name: 'TabsModulePanelsExample',
      reactImports: ['useState'],
      compImports: [
        'Button',
        'Card',
        'CardBody',
        'CardFooter',
        'CardHeader',
        'Carousel',
        'CarouselSlide',
        'FormActions',
        'FormField',
        'FormLayout',
        'Input',
        'Tab',
        'Tabs'
      ],
      body: pageExampleReturn(
        `<Tabs value={value} onChange={setValue} indicatorSlide>
  {menu.map((tab) => {
    const Panel = PanelMap[tab.value]
    return (
      <Tab
        key={tab.value}
        value={tab.value}
        label={tab.label}
        panel={Panel ? <Panel /> : null}
      />
    )
  })}
</Tabs>`,
        `function PanelSlideModule () {
  return (
    <Carousel ariaLabel="탭 패널 슬라이드" autoplay>
      <CarouselSlide>
        <article className="card card_accent color_primary card_elevated">
          <div className="card_body">
            <p className="typo_overline">이벤트</p>
            <h3 className="card_title">신규 가입 혜택</h3>
            <p className="card_subtitle">첫 주문 20% 할인 쿠폰을 드립니다.</p>
          </div>
        </article>
      </CarouselSlide>
      <CarouselSlide>
        <article className="card card_accent color_success card_elevated">
          <div className="card_body">
            <p className="typo_overline">혜택</p>
            <h3 className="card_title">무료 배송</h3>
            <p className="card_subtitle">3만 원 이상 구매 시 무료 배송이 적용됩니다.</p>
          </div>
        </article>
      </CarouselSlide>
      <CarouselSlide>
        <article className="card card_accent color_warning card_elevated">
          <div className="card_body">
            <p className="typo_overline">세일</p>
            <h3 className="card_title">시즌 세일</h3>
            <p className="card_subtitle">베스트셀러를 최대 50% 할인합니다.</p>
          </div>
        </article>
      </CarouselSlide>
    </Carousel>
  )
}

function PanelFormModule () {
  return (
    <FormLayout>
      <FormField label="이름" htmlFor="tabs-panel-name" required>
        <Input id="tabs-panel-name" placeholder="홍길동" />
      </FormField>
      <FormField label="이메일" htmlFor="tabs-panel-email">
        <Input id="tabs-panel-email" type="email" placeholder="name@example.com" />
      </FormField>
      <FormActions>
        <Button variant="outline" color="default" label="취소" />
        <Button label="저장" />
      </FormActions>
    </FormLayout>
  )
}

function PanelCardModule () {
  return (
    <Card style={{ maxWidth: 360, width: '100%' }}>
      <CardHeader title="프로젝트 카드" subtitle="모듈 패널 예시" />
      <CardBody>
        탭 패널에서 Card 위젯을 호출한 예시입니다.
      </CardBody>
      <CardFooter>
        <Button size="sm" variant="outline" label="자세히" />
        <Button size="sm" label="열기" />
      </CardFooter>
    </Card>
  )
}

const menu = [
  { value: 'slide', label: '슬라이드' },
  { value: 'form', label: '폼' },
  { value: 'card', label: '카드' }
]

const PanelMap = {
  slide: PanelSlideModule,
  form: PanelFormModule,
  card: PanelCardModule
}

const [value, setValue] = useState('slide')`
      )
    }),
    preview: <ModulePanelsDemo />
  },
  {
    title: '패널 슬롯 · 페이지 위젯 호출',
    description: (
      <>
        페이지에 이미 위젯이 있다면 모듈을 새로 감싸지 않고{' '}
        <code>&lt;HeroCarousel /&gt;</code> · <code>&lt;ContactForm /&gt;</code> ·{' '}
        <code>&lt;ProjectCard /&gt;</code>처럼 <code>panel</code>에 그대로 넘깁니다.
      </>
    ),
    code: pageExampleCode({
      name: 'TabsPageWidgetPanelsExample',
      reactImports: ['useState'],
      compImports: ['Tab', 'Tabs'],
      extraImports: [
        "// 페이지에 이미 있는 위젯",
        "import { HeroCarousel, ContactForm, ProjectCard } from './widgets'"
      ],
      body: pageExampleReturn(
        `<Tabs value={value} onChange={setValue} indicatorSlide>
  <Tab value="slide" label="슬라이드" panel={<HeroCarousel />} />
  <Tab value="form" label="폼" panel={<ContactForm />} />
  <Tab value="card" label="카드" panel={<ProjectCard />} />
</Tabs>`,
        `const [value, setValue] = useState('slide')`
      )
    }),
    preview: <PageWidgetPanelsDemo />
  },
  {
    title: '크기',
    description: (
      <>
        <code>size</code>는 <code>sm</code> · <code>md</code>(기본) · <code>lg</code>입니다.
        <code>sm</code> · <code>lg</code>일 때 <code>tabs_sm</code> · <code>tabs_lg</code>가 붙습니다.
      </>
    ),
    code: [
      compoundCode({ props: 'size="sm"', panelPrefix: 'sm' }),
      compoundCode({ props: 'size="md"', panelPrefix: 'md' }),
      compoundCode({ props: 'size="lg"', panelPrefix: 'lg' })
    ].join('\n\n'),
    preview: (
      <Space vertical block size={24}>
        <ControlledTabs size="sm" panelPrefix="sm" />
        <ControlledTabs size="md" panelPrefix="md" />
        <ControlledTabs size="lg" panelPrefix="lg" />
      </Space>
    )
  },
  {
    title: '세로 · 균등 · 스크롤',
    description: (
      <>
        <code>vertical</code>은 세로 탭, <code>layout=&quot;equal&quot;</code>은 가로 균등 분할,
        <code>layout=&quot;scroll&quot;</code>은 좌·우 이전/다음 네비, <code>scrollable</code>은 스크롤바만 붙입니다.
      </>
    ),
    code: [
      compoundCode({
        props: 'vertical',
        panelPrefix: 'vertical',
        wrapStart: '<div className="tabs_demo-narrow">\n',
        wrapEnd: '\n</div>'
      }),
      compoundCode({ props: 'layout="equal"', panelPrefix: 'equal' }),
      compoundCode({
        props: 'layout="scroll"',
        tabs: MANY_TABS,
        initial: 't-1',
        panelPrefix: 'scroll nav',
        wrapStart: '<div className="tabs_demo-fluid">\n',
        wrapEnd: '\n</div>'
      }),
      compoundCode({
        props: 'scrollable',
        tabs: MANY_TABS,
        initial: 't-1',
        panelPrefix: 'scrollable',
        wrapStart: '<div className="tabs_demo-fluid">\n',
        wrapEnd: '\n</div>'
      })
    ].join('\n\n'),
    preview: (
      <Space vertical block size={24}>
        <div className="tabs_demo-narrow">
          <ControlledTabs vertical panelPrefix="vertical" />
        </div>
        <ControlledTabs layout="equal" panelPrefix="equal" />
        <div className="tabs_demo-fluid">
          <ControlledTabs
            layout="scroll"
            tabs={MANY_TABS}
            initial="t-1"
            panelPrefix="scroll nav"
          />
        </div>
        <div className="tabs_demo-fluid">
          <ControlledTabs
            scrollable
            tabs={MANY_TABS}
            initial="t-1"
            panelPrefix="scrollable"
          />
        </div>
      </Space>
    )
  },
  {
    title: '아이콘 · 비활성',
    description: (
      <>
        <code>Tab</code>의 <code>icon</code>은 <code>tabs_icon</code>에 표시됩니다.
        <code>disabled</code>인 탭은 <code>is-disabled</code>이며 선택할 수 없습니다.
      </>
    ),
    code: [
      compoundCode({
        tabs: [
          { value: 'home', label: '홈', icon: true },
          { value: 'search', label: '검색', icon: true },
          { value: 'inbox', label: '수신함', icon: true }
        ],
        initial: 'home',
        panelPrefix: '아이콘'
      }),
      compoundCode({
        tabs: DISABLED_TABS,
        initial: 'a',
        panelPrefix: '비활성 예시'
      })
    ].join('\n\n'),
    preview: (
      <Space vertical block size={24}>
        <ControlledTabs tabs={ICON_TABS} initial="home" panelPrefix="아이콘" />
        <ControlledTabs tabs={DISABLED_TABS} initial="a" panelPrefix="비활성 예시" />
      </Space>
    )
  },
  {
    title: '닫기 · extra',
    description: (
      <>
        <code>Tab</code>의 <code>closable</code>이면 ×(<code>tabs_close</code>)가 붙고
        <code>onClose</code>가 호출됩니다. <code>extra</code>는 바 오른쪽(<code>tabs_extra</code>)에 둡니다.
      </>
    ),
    code: pageExampleCode({
      name: 'TabsClosableExample',
      reactImports: ['useState'],
      compImports: ['Button', 'Tab', 'Tabs'],
      body: pageExampleReturn(
        `<Tabs
  value={value}
  onChange={setValue}
  onClose={(closed) => {
    setItems((prev) => prev.filter((item) => item.value !== closed))
  }}
  extra={<Button size="sm" variant="ghost" label="추가" />}
>
  {items.map((tab) => (
    <Tab
      key={tab.value}
      value={tab.value}
      label={tab.label}
      closable={tab.closable}
    >
      <p className="tabs_panel-placeholder">{tab.label} 내용</p>
    </Tab>
  ))}
</Tabs>`,
        `const [items, setItems] = useState([
  { value: 'doc-1', label: '문서 1', closable: true },
  { value: 'doc-2', label: '문서 2', closable: true },
  { value: 'doc-3', label: '문서 3', closable: true }
])
const [value, setValue] = useState('doc-1')`
      )
    }),
    preview: <ClosableTabsDemo />
  },
  {
    title: 'HTML 마크업',
    description: (
      <>
        스타일 계약은 <code>tabs</code> · <code>tabs_bar</code> · <code>tabs_list</code> · <code>tabs_tab</code> ·
        <code>tabs_panel</code>입니다. 기본 스킨은 <code>tabs_line</code>입니다.
      </>
    ),
    code: `<div class="tabs tabs_line">
  <div class="tabs_bar">
    <div class="tabs_list-wrap">
      <div class="tabs_list" role="tablist" aria-label="섹션">
        <button type="button" class="tabs_tab is-active" role="tab" aria-selected="true">
          <span class="tabs_label">개요</span>
        </button>
        <button type="button" class="tabs_tab" role="tab" aria-selected="false" tabindex="-1">
          <span class="tabs_label">설정</span>
        </button>
        <button type="button" class="tabs_tab" role="tab" aria-selected="false" tabindex="-1">
          <span class="tabs_label">활동</span>
        </button>
      </div>
    </div>
  </div>
  <div class="tabs_panels">
    <div class="tabs_panel" role="tabpanel">
      <p class="tabs_panel-placeholder">개요 패널</p>
    </div>
  </div>
</div>`,
    preview: (
      <div className="tabs tabs_line">
        <div className="tabs_bar">
          <div className="tabs_list-wrap">
            <div className="tabs_list" role="tablist" aria-label="섹션">
              <button
                type="button"
                className="tabs_tab is-active"
                role="tab"
                aria-selected="true"
              >
                <span className="tabs_label">개요</span>
              </button>
              <button
                type="button"
                className="tabs_tab"
                role="tab"
                aria-selected="false"
                tabIndex={-1}
              >
                <span className="tabs_label">설정</span>
              </button>
              <button
                type="button"
                className="tabs_tab"
                role="tab"
                aria-selected="false"
                tabIndex={-1}
              >
                <span className="tabs_label">활동</span>
              </button>
            </div>
          </div>
        </div>
        <div className="tabs_panels">
          <div className="tabs_panel" role="tabpanel">
            <p className="tabs_panel-placeholder">개요 패널</p>
          </div>
        </div>
      </div>
    )
  },
  {
    title: '접근성',
    description: (
      <>
        <code>tablist</code>에 <code>aria-label</code>(기본 &quot;섹션&quot;)을 둡니다.
        활성 탭은 <code>aria-selected=&quot;true&quot;</code>, 비활성 탭은 <code>tabIndex=-1</code>입니다.
        세로일 때는 <code>aria-orientation=&quot;vertical&quot;</code>입니다.
      </>
    ),
    code: compoundCode({
      props: 'label="설정 탭"',
      tabs: [
        { value: 'a', label: '일반' },
        { value: 'b', label: '알림' }
      ],
      initial: 'a',
      panelPrefix: '설정'
    }),
    preview: (
      <ControlledTabs
        label="설정 탭"
        tabs={[
          { value: 'a', label: '일반' },
          { value: 'b', label: '알림' }
        ]}
        initial="a"
        panelPrefix="설정"
      />
    )
  }
]

/**
 * Tabs 가이드 화면.
 * 메뉴는 데이터 map · 패널은 Tab children / panel / TabPanel 슬롯으로 구성한다.
 */
export default function TabsGuide () {
  return (
    <GuideLayout
      category="네비게이션"
      title="Tabs"
      description="탭 전환. 메뉴는 데이터 map으로 Tab을 돌리고, 패널은 label+children · panel prop · TabPanel 슬롯으로 탭별 내용을 제어합니다. line · card · pill · indicatorSlide · navFade · navSelect · scroll을 지원합니다."
    >
      {SECTIONS.map((section) => (
        <DemoBlock
          key={section.title}
          title={section.title}
          description={section.description}
          code={section.code}
          fileName={section.title === 'HTML 마크업' ? 'tabs.html' : 'TabsExample.jsx'}
        >
          {section.preview}
        </DemoBlock>
      ))}

      <GuideApiDocs sections={tabsApiSections} />
    </GuideLayout>
  )
}
