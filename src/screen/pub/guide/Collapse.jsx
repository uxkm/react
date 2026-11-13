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
  Collapse,
  CollapseItem,
  CollapsePanel,
  FormActions,
  FormField,
  FormLayout,
  Icon,
  Input,
  Space
} from '@/comp'
import { DemoBlock } from '@/screen/pub/widgets/preview/DemoBlock'
import { GuideApiDocs } from '@/screen/pub/widgets/docs/GuideApiDocs'
import { GuideLayout } from '@/screen/pub/layout'
import {
  pageExampleCode,
  pageExampleReturn,
  wrapPageExample
} from '@/screen/pub/lib/pageExampleCode'
import { collapseApiSections } from '@/screen/pub/data/guide/collapseApiSections'

const BASIC_ITEMS = [
  { value: 'panel-1', label: '패널 1' },
  { value: 'panel-2', label: '패널 2' },
  { value: 'panel-3', label: '패널 3' }
]

const DISABLED_ITEMS = [
  { value: 'a', label: '열림 가능' },
  { value: 'b', label: '비활성', disabled: true },
  { value: 'c', label: '다른 칸' }
]

const CUSTOM_MENU = [
  { value: 'overview', label: '개요', icon: 'home' },
  { value: 'settings', label: '설정', icon: 'settings' },
  { value: 'activity', label: '활동(비활성)', disabled: true }
]

/** 데이터 map + 칸별 패널(여러 칸 동시 열림) */
function ControlledCollapse ({
  items = BASIC_ITEMS,
  initial = items[0] ? [items[0].value] : [],
  panelPrefix = '콘텐츠',
  ...props
}) {
  const [value, setValue] = useState(initial)

  return (
    <Collapse {...props} value={value} onChange={setValue}>
      {items.map((item) => (
        <CollapseItem
          key={String(item.value)}
          value={item.value}
          label={item.label}
          icon={item.icon}
          extra={item.extra}
          disabled={item.disabled}
        />
      ))}
      {items.map((item) => (
        <CollapsePanel key={String(item.value)} value={item.value}>
          <p>{panelPrefix}: {item.label}</p>
        </CollapsePanel>
      ))}
    </Collapse>
  )
}

/** 코드보기용 — items map + CollapsePanel */
function compoundCode (options = {}) {
  const {
    props = '',
    items = BASIC_ITEMS,
    panelPrefix = '콘텐츠',
    initial = items[0] ? [items[0].value] : [],
    wrapStart = '',
    wrapEnd = ''
  } = options
  const propLine = props ? ` ${props}` : ''
  const hasIcon = items.some((item) => item.icon)
  const hasExtra = items.some((item) => item.extra)
  const hasDisabled = items.some((item) => item.disabled)
  const initialLit = `[${initial.map((v) => `'${v}'`).join(', ')}]`

  const itemsDecl = `const items = [\n${items.map((item) => {
    const fields = [
      `value: '${item.value}'`,
      item.label != null ? `label: '${item.label}'` : null,
      item.disabled ? 'disabled: true' : null,
      item.icon ? 'icon: <Icon name="…" />' : null,
      item.extra ? `extra: '${item.extra}'` : null
    ].filter(Boolean).join(', ')
    return `  { ${fields} }`
  }).join(',\n')}\n]`

  const itemAttrs = [
    'key={item.value}',
    'value={item.value}',
    'label={item.label}',
    hasIcon ? 'icon={item.icon}' : null,
    hasExtra ? 'extra={item.extra}' : null,
    hasDisabled ? 'disabled={item.disabled}' : null
  ].filter(Boolean).join('\n      ')

  const fragment = `${wrapStart}${itemsDecl}
const [value, setValue] = useState(${initialLit})

<Collapse value={value} onChange={setValue}${propLine}>
  {items.map((item) => (
    <CollapseItem
      ${itemAttrs}
    />
  ))}
  {items.map((item) => (
    <CollapsePanel key={item.value} value={item.value}>
      <p>${panelPrefix}: {item.label}</p>
    </CollapsePanel>
  ))}
</Collapse>${wrapEnd}`

  const compImports = ['Collapse', 'CollapseItem', 'CollapsePanel']
  if (hasIcon) compImports.push('Icon')

  return wrapPageExample(fragment, {
    name: options.name || 'CollapseExample',
    reactImports: ['useState'],
    compImports
  })
}

/** 메뉴 데이터 map + 아이콘 커스텀 · 칸별 패널(panels 맵) */
function CompoundCollapseDemo () {
  const [value, setValue] = useState(['overview'])
  const panels = {
    overview: <p className="collapse_panel-placeholder">콘텐츠: 개요</p>,
    settings: <p className="collapse_panel-placeholder">콘텐츠: 설정</p>,
    activity: <p className="collapse_panel-placeholder">콘텐츠: 활동(비활성)</p>
  }

  return (
    <Collapse value={value} onChange={setValue} skin="bordered">
      {CUSTOM_MENU.map((item) => (
        <CollapseItem key={item.value} value={item.value} disabled={item.disabled}>
          {item.icon && (
            <span className="collapse_leading">
              <Icon name={item.icon} size="100%" />
            </span>
          )}
          <span className="collapse_label">{item.label}</span>
        </CollapseItem>
      ))}
      {CUSTOM_MENU.map((item) => (
        <CollapsePanel key={item.value} value={item.value}>
          {panels[item.value]}
        </CollapsePanel>
      ))}
    </Collapse>
  )
}

function OverviewSlot () {
  return <p className="collapse_panel-placeholder">개요 페이지 슬롯</p>
}

function SettingsSlot () {
  return (
    <Space vertical block size={8}>
      <p className="collapse_panel-placeholder">설정 페이지 슬롯</p>
      <Button size="sm" variant="outline" label="저장" />
    </Space>
  )
}

function ActivitySlot () {
  return <p className="collapse_panel-placeholder">활동 페이지 슬롯</p>
}

const PANEL_SLOTS = {
  overview: OverviewSlot,
  settings: SettingsSlot,
  activity: ActivitySlot
}

/** 메뉴 map + value → 컴포넌트(슬롯) 패널 */
function SlotPanelCollapseDemo () {
  const [value, setValue] = useState(['overview'])

  return (
    <Collapse value={value} onChange={setValue} skin="card">
      {CUSTOM_MENU.map((item) => (
        <CollapseItem key={item.value} value={item.value} disabled={item.disabled}>
          {item.icon && (
            <span className="collapse_leading">
              <Icon name={item.icon} size="100%" />
            </span>
          )}
          <span className="collapse_label">{item.label}</span>
        </CollapseItem>
      ))}
      {CUSTOM_MENU.map((item) => {
        const Panel = PANEL_SLOTS[item.value]
        return (
          <CollapsePanel key={item.value} value={item.value}>
            {Panel ? <Panel /> : null}
          </CollapsePanel>
        )
      })}
    </Collapse>
  )
}

/** CollapseItem + CollapsePanel 조합 */
function CollapsePanelCompoundDemo () {
  const [value, setValue] = useState(['overview'])

  return (
    <Collapse value={value} onChange={setValue} skin="bordered">
      <CollapseItem value="overview" label="개요" />
      <CollapseItem value="settings" label="설정" />
      <CollapseItem value="activity" label="활동" disabled />
      <CollapsePanel value="overview">
        <p className="collapse_panel-placeholder">개요 패널</p>
      </CollapsePanel>
      <CollapsePanel value="settings">
        <p className="collapse_panel-placeholder">설정 패널</p>
      </CollapsePanel>
      <CollapsePanel value="activity">
        <p className="collapse_panel-placeholder">활동 패널</p>
      </CollapsePanel>
    </Collapse>
  )
}

/** items[].content 로 칸별 패널 */
function ContentPropCollapseDemo () {
  const [value, setValue] = useState(['overview'])
  const items = CUSTOM_MENU.map((item) => ({
    ...item,
    icon: item.icon
      ? <Icon name={item.icon} size="100%" />
      : undefined,
    content: (
      <p className="collapse_panel-placeholder">content: {item.label}</p>
    )
  }))

  return (
    <Collapse value={value} onChange={setValue} skin="card" items={items} />
  )
}

/** 패널별 위젯/모듈: 슬라이드 · 폼 · 카드 */
function PanelSlideModule () {
  return (
    <Carousel ariaLabel="접기 패널 슬라이드" autoplay>
      <CarouselSlide>
        <article className="card card_accent color_primary card_elevated">
          <div className="card_body">
            <p className="typo_overline">이벤트</p>
            <strong className="card_title">신규 가입 혜택</strong>
            <p className="card_subtitle">첫 주문 20% 할인 쿠폰을 드립니다.</p>
          </div>
        </article>
      </CarouselSlide>
      <CarouselSlide>
        <article className="card card_accent color_success card_elevated">
          <div className="card_body">
            <p className="typo_overline">혜택</p>
            <strong className="card_title">무료 배송</strong>
            <p className="card_subtitle">3만 원 이상 구매 시 무료 배송이 적용됩니다.</p>
          </div>
        </article>
      </CarouselSlide>
      <CarouselSlide>
        <article className="card card_accent color_warning card_elevated">
          <div className="card_body">
            <p className="typo_overline">세일</p>
            <strong className="card_title">시즌 세일</strong>
            <p className="card_subtitle">베스트셀러를 최대 50% 할인합니다.</p>
          </div>
        </article>
      </CarouselSlide>
    </Carousel>
  )
}

function PanelFormModule ({ idPrefix = 'collapse-panel' } = {}) {
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
        접기 패널에서 Card 위젯을 호출한 예시입니다. 관련 설명과 액션을 담을 수 있습니다.
      </CardBody>
      <CardFooter>
        <Button size="sm" variant="outline" label="자세히" />
        <Button size="sm" label="열기" />
      </CardFooter>
    </Card>
  )
}

const HeroCarousel = PanelSlideModule
function ContactForm () {
  return <PanelFormModule idPrefix="collapse-page-form" />
}
const ProjectCard = PanelCardModule

const MODULE_PANEL_MAP = {
  slide: PanelSlideModule,
  form: PanelFormModule,
  card: PanelCardModule
}

const MODULE_MENU = [
  { value: 'slide', label: '슬라이드' },
  { value: 'form', label: '폼' },
  { value: 'card', label: '카드' }
]

/** 칸마다 다른 위젯/모듈 패널 */
function ModulePanelsDemo () {
  const [value, setValue] = useState(['slide'])

  return (
    <Collapse value={value} onChange={setValue} skin="card">
      {MODULE_MENU.map((item) => (
        <CollapseItem key={item.value} value={item.value} label={item.label} />
      ))}
      {MODULE_MENU.map((item) => {
        const Panel = MODULE_PANEL_MAP[item.value]
        return (
          <CollapsePanel key={item.value} value={item.value}>
            {Panel ? <Panel /> : null}
          </CollapsePanel>
        )
      })}
    </Collapse>
  )
}

/** 페이지 위젯을 CollapsePanel에 직접 호출 */
function PageWidgetPanelsDemo () {
  const [value, setValue] = useState(['slide'])

  return (
    <Collapse value={value} onChange={setValue} skin="bordered">
      <CollapseItem value="slide" label="슬라이드" />
      <CollapseItem value="form" label="폼" />
      <CollapseItem value="card" label="카드" />
      <CollapsePanel value="slide">
        <HeroCarousel />
      </CollapsePanel>
      <CollapsePanel value="form">
        <ContactForm />
      </CollapsePanel>
      <CollapsePanel value="card">
        <ProjectCard />
      </CollapsePanel>
    </Collapse>
  )
}

const SECTIONS = [
  {
    title: '기본 사용',
    description: (
      <>
        메뉴는 데이터 <code>map</code>으로 <code>CollapseItem</code>을 돌리고,
        패널은 칸별 <code>CollapsePanel</code>로 둡니다. Accordion과 달리
        <code>value</code>는 배열이며 <strong>여러 칸을 동시에</strong> 열 수 있습니다.
        기본 스킨은 <code>bordered</code>(<code>collapse_bordered</code>)입니다.
      </>
    ),
    code: compoundCode({ panelPrefix: '콘텐츠' }),
    preview: <ControlledCollapse />
  },
  {
    title: '스킨(skin)',
    description: (
      <>
        <code>skin</code>은 <code>bordered</code>(기본) · <code>ghost</code> · <code>card</code>입니다.
        각각 <code>collapse_bordered</code> · <code>collapse_ghost</code> · <code>collapse_card</code>가 붙습니다.
      </>
    ),
    code: [
      compoundCode({ props: 'skin="bordered"', panelPrefix: 'bordered' }),
      compoundCode({ props: 'skin="ghost"', panelPrefix: 'ghost' }),
      compoundCode({ props: 'skin="card"', panelPrefix: 'card' })
    ].join('\n\n'),
    preview: (
      <Space vertical block size={24}>
        <ControlledCollapse skin="bordered" panelPrefix="bordered" />
        <ControlledCollapse skin="ghost" panelPrefix="ghost" />
        <ControlledCollapse skin="card" panelPrefix="card" />
      </Space>
    )
  },
  {
    title: '크기',
    description: (
      <>
        <code>size</code>는 <code>sm</code> · <code>md</code>(기본) · <code>lg</code>입니다.
        <code>sm</code> · <code>lg</code>일 때 <code>collapse_sm</code> · <code>collapse_lg</code>가 붙습니다.
      </>
    ),
    code: [
      compoundCode({ props: 'size="sm"', panelPrefix: 'sm' }),
      compoundCode({ props: 'size="md"', panelPrefix: 'md' }),
      compoundCode({ props: 'size="lg"', panelPrefix: 'lg' })
    ].join('\n\n'),
    preview: (
      <Space vertical block size={24}>
        <ControlledCollapse size="sm" panelPrefix="sm" />
        <ControlledCollapse size="md" panelPrefix="md" />
        <ControlledCollapse size="lg" panelPrefix="lg" />
      </Space>
    )
  },
  {
    title: '슬라이드(effect)',
    description: (
      <>
        <code>effect=&quot;slide&quot;</code>이면 펼침·접힘 시 패널 높이가 슬라이드됩니다.
        루트에 <code>data-effect=&quot;slide&quot;</code>가 붙고,
        <code>--collapse-slide-duration</code> · <code>--collapse-slide-easing</code>으로 타이밍을 바꿀 수 있습니다.
        <code>prefers-reduced-motion</code>이면 즉시 전환합니다.
      </>
    ),
    code: [
      compoundCode({ props: 'effect="slide"', panelPrefix: 'slide' }),
      compoundCode({
        props: 'effect="slide" skin="card"',
        panelPrefix: 'slide · card'
      })
    ].join('\n\n'),
    preview: (
      <Space vertical block size={24}>
        <ControlledCollapse effect="slide" panelPrefix="slide" />
        <ControlledCollapse
          effect="slide"
          skin="card"
          panelPrefix="slide · card"
        />
      </Space>
    )
  },
  {
    title: '패널 슬롯 · children',
    description: (
      <>
        메뉴는 데이터 <code>map</code>으로 <code>CollapseItem</code>을 돌리고,
        패널은 칸별 <code>CollapsePanel</code>에 <code>panels[item.value]</code> 슬롯을 넣습니다.
        여러 칸을 동시에 열 수 있으므로 칸별 패널을 권장합니다.
      </>
    ),
    code: pageExampleCode({
      name: 'CollapsePanelChildrenExample',
      reactImports: ['useState'],
      compImports: ['Collapse', 'CollapseItem', 'CollapsePanel', 'Icon'],
      body: pageExampleReturn(
        `<Collapse value={value} onChange={setValue} skin="bordered">
  {menu.map((item) => (
    <CollapseItem key={item.value} value={item.value} disabled={item.disabled}>
      {item.icon && (
        <span className="collapse_leading">
          <Icon name={item.icon} size="100%" />
        </span>
      )}
      <span className="collapse_label">{item.label}</span>
    </CollapseItem>
  ))}
  {menu.map((item) => (
    <CollapsePanel key={item.value} value={item.value}>
      {panels[item.value]}
    </CollapsePanel>
  ))}
</Collapse>`,
        `const menu = [
  { value: 'overview', label: '개요', icon: 'home' },
  { value: 'settings', label: '설정', icon: 'settings' },
  { value: 'activity', label: '활동(비활성)', disabled: true }
]

const panels = {
  overview: (
    <p className="collapse_panel-placeholder">콘텐츠: 개요</p>
  ),
  settings: (
    <p className="collapse_panel-placeholder">콘텐츠: 설정</p>
  ),
  activity: (
    <p className="collapse_panel-placeholder">콘텐츠: 활동(비활성)</p>
  )
}

const [value, setValue] = useState(['overview'])`
      )
    }),
    preview: <CompoundCollapseDemo />
  },
  {
    title: '패널 슬롯 · 컴포넌트 맵',
    description: (
      <>
        value → 페이지·슬롯 컴포넌트 맵을 두고 <code>CollapsePanel</code> 안에서
        <code>PanelMap[item.value]</code>로 칸별 화면을 연결합니다.
      </>
    ),
    code: pageExampleCode({
      name: 'CollapseSlotPanelExample',
      reactImports: ['useState'],
      compImports: ['Button', 'Collapse', 'CollapseItem', 'CollapsePanel', 'Icon', 'Space'],
      body: pageExampleReturn(
        `<Collapse value={value} onChange={setValue} skin="card">
  {menu.map((item) => (
    <CollapseItem key={item.value} value={item.value} disabled={item.disabled}>
      {item.icon && (
        <span className="collapse_leading">
          <Icon name={item.icon} size="100%" />
        </span>
      )}
      <span className="collapse_label">{item.label}</span>
    </CollapseItem>
  ))}
  {menu.map((item) => {
    const Panel = PanelMap[item.value]
    return (
      <CollapsePanel key={item.value} value={item.value}>
        {Panel ? <Panel /> : null}
      </CollapsePanel>
    )
  })}
</Collapse>`,
        `function OverviewPage () {
  return <p className="collapse_panel-placeholder">개요 페이지 슬롯</p>
}

function SettingsPage () {
  return (
    <Space vertical block size={8}>
      <p className="collapse_panel-placeholder">설정 페이지 슬롯</p>
      <Button size="sm" variant="outline" label="저장" />
    </Space>
  )
}

function ActivityPage () {
  return <p className="collapse_panel-placeholder">활동 페이지 슬롯</p>
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

const [value, setValue] = useState(['overview'])`
      )
    }),
    preview: <SlotPanelCollapseDemo />
  },
  {
    title: '패널 슬롯 · CollapsePanel',
    description: (
      <>
        <code>CollapseItem</code>과 <code>CollapsePanel</code>을 형제로 두고 <code>value</code>로 연결합니다.
        메뉴와 패널 마크업을 분리할 때 사용합니다.
      </>
    ),
    code: pageExampleCode({
      name: 'CollapsePanelExample',
      reactImports: ['useState'],
      compImports: ['Collapse', 'CollapseItem', 'CollapsePanel'],
      body: pageExampleReturn(
        `<Collapse value={value} onChange={setValue} skin="bordered">
  <CollapseItem value="overview" label="개요" />
  <CollapseItem value="settings" label="설정" />
  <CollapseItem value="activity" label="활동" disabled />
  <CollapsePanel value="overview">
    <p className="collapse_panel-placeholder">개요 패널</p>
  </CollapsePanel>
  <CollapsePanel value="settings">
    <p className="collapse_panel-placeholder">설정 패널</p>
  </CollapsePanel>
  <CollapsePanel value="activity">
    <p className="collapse_panel-placeholder">활동 패널</p>
  </CollapsePanel>
</Collapse>`,
        `const [value, setValue] = useState(['overview'])`
      )
    }),
    preview: <CollapsePanelCompoundDemo />
  },
  {
    title: '패널 슬롯 · items content',
    description: (
      <>
        <code>items</code> 배열의 <code>content</code>에 칸별 패널을 넣습니다.
        데이터만으로 메뉴·패널을 함께 구성할 때 사용합니다.
      </>
    ),
    code: pageExampleCode({
      name: 'CollapseContentPropExample',
      reactImports: ['useState'],
      compImports: ['Collapse', 'Icon'],
      body: pageExampleReturn(
        `<Collapse value={value} onChange={setValue} skin="card" items={items} />`,
        `const items = [
  {
    value: 'overview',
    label: '개요',
    icon: <Icon name="home" size="100%" />,
    content: <p className="collapse_panel-placeholder">content: 개요</p>
  },
  {
    value: 'settings',
    label: '설정',
    icon: <Icon name="settings" size="100%" />,
    content: <p className="collapse_panel-placeholder">content: 설정</p>
  },
  {
    value: 'activity',
    label: '활동(비활성)',
    disabled: true,
    content: <p className="collapse_panel-placeholder">content: 활동(비활성)</p>
  }
]

const [value, setValue] = useState(['overview'])`
      )
    }),
    preview: <ContentPropCollapseDemo />
  },
  {
    title: '패널 슬롯 · 위젯/모듈',
    description: (
      <>
        칸마다 다른 위젯·모듈을 호출합니다. 첫 칸은 <code>Carousel</code>(슬라이드),
        둘째는 <code>FormLayout</code> 폼, 셋째는 <code>Card</code>입니다.
        <code>CollapsePanel</code>에 모듈 컴포넌트를 넣습니다.
      </>
    ),
    code: pageExampleCode({
      name: 'CollapseModulePanelsExample',
      reactImports: ['useState'],
      compImports: [
        'Button',
        'Card',
        'CardBody',
        'CardFooter',
        'CardHeader',
        'Carousel',
        'CarouselSlide',
        'Collapse',
        'CollapseItem',
        'CollapsePanel',
        'FormActions',
        'FormField',
        'FormLayout',
        'Input'
      ],
      body: pageExampleReturn(
        `<Collapse value={value} onChange={setValue} skin="card">
  {menu.map((item) => (
    <CollapseItem key={item.value} value={item.value} label={item.label} />
  ))}
  {menu.map((item) => {
    const Panel = PanelMap[item.value]
    return (
      <CollapsePanel key={item.value} value={item.value}>
        {Panel ? <Panel /> : null}
      </CollapsePanel>
    )
  })}
</Collapse>`,
        `function PanelSlideModule () {
  return (
    <Carousel ariaLabel="접기 패널 슬라이드" autoplay>
      <CarouselSlide>
        <article className="card card_accent color_primary card_elevated">
          <div className="card_body">
            <p className="typo_overline">이벤트</p>
            <strong className="card_title">신규 가입 혜택</strong>
            <p className="card_subtitle">첫 주문 20% 할인 쿠폰을 드립니다.</p>
          </div>
        </article>
      </CarouselSlide>
      {/* … */}
    </Carousel>
  )
}

function PanelFormModule () {
  return (
    <FormLayout>
      <FormField label="이름" htmlFor="collapse-panel-name" required>
        <Input id="collapse-panel-name" placeholder="홍길동" />
      </FormField>
      <FormField label="이메일" htmlFor="collapse-panel-email">
        <Input id="collapse-panel-email" type="email" placeholder="name@example.com" />
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
      <CardBody>접기 패널에서 Card 위젯을 호출한 예시입니다.</CardBody>
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

const [value, setValue] = useState(['slide'])`
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
        <code>&lt;ProjectCard /&gt;</code>처럼 <code>CollapsePanel</code>에 그대로 넣습니다.
      </>
    ),
    code: pageExampleCode({
      name: 'CollapsePageWidgetPanelsExample',
      reactImports: ['useState'],
      compImports: ['Collapse', 'CollapseItem', 'CollapsePanel'],
      extraImports: [
        '// 페이지에 이미 있는 위젯',
        "import { HeroCarousel, ContactForm, ProjectCard } from './widgets'"
      ],
      body: pageExampleReturn(
        `<Collapse value={value} onChange={setValue} skin="bordered">
  <CollapseItem value="slide" label="슬라이드" />
  <CollapseItem value="form" label="폼" />
  <CollapseItem value="card" label="카드" />
  <CollapsePanel value="slide">
    <HeroCarousel />
  </CollapsePanel>
  <CollapsePanel value="form">
    <ContactForm />
  </CollapsePanel>
  <CollapsePanel value="card">
    <ProjectCard />
  </CollapsePanel>
</Collapse>`,
        `const [value, setValue] = useState(['slide'])`
      )
    }),
    preview: <PageWidgetPanelsDemo />
  },
  {
    title: '비활성 · extra',
    description: (
      <>
        <code>disabled</code>인 칸은 <code>is-disabled</code>이며 열 수 없습니다.
        <code>extra</code>는 트리거 오른쪽(<code>collapse_extra</code>)에 둡니다.
      </>
    ),
    code: [
      compoundCode({
        items: DISABLED_ITEMS,
        initial: ['a'],
        panelPrefix: '비활성 예시'
      }),
      compoundCode({
        items: [
          { value: 'faq', label: '자주 묻는 질문', extra: '3' },
          { value: 'notice', label: '공지', extra: 'N' }
        ],
        initial: ['faq'],
        panelPrefix: 'extra'
      })
    ].join('\n\n'),
    preview: (
      <Space vertical block size={24}>
        <ControlledCollapse
          items={DISABLED_ITEMS}
          initial={['a']}
          panelPrefix="비활성 예시"
        />
        <ControlledCollapse
          items={[
            { value: 'faq', label: '자주 묻는 질문', extra: '3' },
            { value: 'notice', label: '공지', extra: 'N' }
          ]}
          initial={['faq']}
          panelPrefix="extra"
        />
      </Space>
    )
  },
  {
    title: 'HTML 마크업',
    description: (
      <>
        스타일 계약은 <code>collapse_group</code> · <code>collapse_panel</code> · <code>collapse_trigger</code> ·
        <code>collapse_body</code> · <code>collapse_content</code>입니다.
        기본 스킨은 <code>collapse_bordered</code>입니다.
      </>
    ),
    code: `<div class="collapse_group collapse_bordered">
  <div class="collapse_panel is-open">
    <div class="collapse_header">
      <button type="button" class="collapse_trigger" aria-expanded="true">
        <span class="collapse_label">패널 1</span>
      </button>
    </div>
    <div class="collapse_body" role="region">
      <div class="collapse_content">첫 번째 내용입니다.</div>
    </div>
  </div>
  <div class="collapse_panel">
    <div class="collapse_header">
      <button type="button" class="collapse_trigger" aria-expanded="false">
        <span class="collapse_label">패널 2</span>
      </button>
    </div>
  </div>
</div>`,
    preview: (
      <div className="collapse_group collapse_bordered">
        <div className="collapse_panel is-open">
          <div className="collapse_header">
            <button type="button" className="collapse_trigger" aria-expanded="true">
              <span className="collapse_label">패널 1</span>
            </button>
          </div>
          <div className="collapse_body" role="region">
            <div className="collapse_content">첫 번째 내용입니다.</div>
          </div>
        </div>
        <div className="collapse_panel">
          <div className="collapse_header">
            <button type="button" className="collapse_trigger" aria-expanded="false">
              <span className="collapse_label">패널 2</span>
            </button>
          </div>
        </div>
      </div>
    )
  },
  {
    title: '접근성',
    description: (
      <>
        트리거는 <code>aria-expanded</code>와 <code>aria-controls</code>를 둡니다.
        패널 본문은 <code>role=&quot;region&quot;</code>입니다. 여러 칸이 동시에 열려도 각각 연결됩니다.
      </>
    ),
    code: compoundCode({
      items: [
        { value: 'a', label: '일반' },
        { value: 'b', label: '알림' }
      ],
      initial: ['a'],
      panelPrefix: '설정'
    }),
    preview: (
      <ControlledCollapse
        items={[
          { value: 'a', label: '일반' },
          { value: 'b', label: '알림' }
        ]}
        initial={['a']}
        panelPrefix="설정"
      />
    )
  }
]

/**
 * Collapse 가이드 화면.
 * Tabs · Accordion 과 같이 메뉴는 데이터 map · 패널은 CollapsePanel / content / 위젯 슬롯으로 예시를 모은다.
 */
export default function CollapseGuide () {
  return (
    <GuideLayout
      category="기타"
      title="Collapse"
      description="접기 패널 그룹. 메뉴는 데이터 map으로 CollapseItem을 돌리고, 패널은 CollapsePanel·items.content·위젯/모듈 슬롯으로 커스텀합니다. Accordion과 달리 여러 칸을 동시에 열 수 있으며, bordered · ghost · card · size · effect(slide)를 지원합니다."
    >
      {SECTIONS.map((section) => (
        <DemoBlock
          key={section.title}
          title={section.title}
          description={section.description}
          code={section.code}
          fileName={section.title === 'HTML 마크업' ? 'collapse.html' : 'CollapseExample.jsx'}
        >
          {section.preview}
        </DemoBlock>
      ))}

      <GuideApiDocs sections={collapseApiSections} />
    </GuideLayout>
  )
}
