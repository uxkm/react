'use client'

import { useState } from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionPanel,
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
import { accordionApiSections } from '@/screen/pub/data/guide/accordionApiSections'

const BASIC_ITEMS = [
  { value: 'shipping', label: '배송 안내' },
  { value: 'return', label: '교환 · 반품' },
  { value: 'payment', label: '결제' }
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

/** 데이터 map + 단일 패널(내용만 교체) */
function ControlledAccordion ({
  items = BASIC_ITEMS,
  initial = items[0]?.value,
  panelPrefix = '콘텐츠',
  ...props
}) {
  const [value, setValue] = useState(initial)
  const active = items.find((item) => item.value === value)

  return (
    <Accordion {...props} value={value} onChange={setValue}>
      {items.map((item) => (
        <AccordionItem
          key={String(item.value)}
          value={item.value}
          label={item.label}
          icon={item.icon}
          extra={item.extra}
          disabled={item.disabled}
        />
      ))}
      <p>{panelPrefix}: {active?.label}</p>
    </Accordion>
  )
}

/** 코드보기용 — items map + 단일 패널 슬롯 */
function compoundCode (options = {}) {
  const {
    props = '',
    items = BASIC_ITEMS,
    panelPrefix = '콘텐츠',
    initial = items[0]?.value,
    wrapStart = '',
    wrapEnd = ''
  } = options
  const propLine = props ? ` ${props}` : ''
  const hasIcon = items.some((item) => item.icon)
  const hasExtra = items.some((item) => item.extra)
  const hasDisabled = items.some((item) => item.disabled)

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
const [value, setValue] = useState('${initial}')
const active = items.find((item) => item.value === value)

<Accordion value={value} onChange={setValue}${propLine}>
  {items.map((item) => (
    <AccordionItem
      ${itemAttrs}
    />
  ))}
  <p>${panelPrefix}: {active?.label}</p>
</Accordion>${wrapEnd}`

  const compImports = ['Accordion', 'AccordionItem']
  if (hasIcon) compImports.push('Icon')

  return wrapPageExample(fragment, {
    name: options.name || 'AccordionExample',
    reactImports: ['useState'],
    compImports
  })
}

/** 메뉴 데이터 map + 아이콘 커스텀 · 단일 패널 슬롯(children) */
function CompoundAccordionDemo () {
  const [value, setValue] = useState('overview')
  const panels = {
    overview: <p className="accordion_panel-placeholder">콘텐츠: 개요</p>,
    settings: <p className="accordion_panel-placeholder">콘텐츠: 설정</p>,
    activity: <p className="accordion_panel-placeholder">콘텐츠: 활동(비활성)</p>
  }

  return (
    <Accordion value={value} onChange={setValue} skin="bordered">
      {CUSTOM_MENU.map((item) => (
        <AccordionItem key={item.value} value={item.value} disabled={item.disabled}>
          {item.icon && (
            <span className="accordion_leading">
              <Icon name={item.icon} size="100%" />
            </span>
          )}
          <span className="accordion_label">{item.label}</span>
        </AccordionItem>
      ))}
      {panels[value]}
    </Accordion>
  )
}

function OverviewSlot () {
  return <p className="accordion_panel-placeholder">개요 페이지 슬롯</p>
}

function SettingsSlot () {
  return (
    <Space vertical block size={8}>
      <p className="accordion_panel-placeholder">설정 페이지 슬롯</p>
      <Button size="sm" variant="outline" label="저장" />
    </Space>
  )
}

function ActivitySlot () {
  return <p className="accordion_panel-placeholder">활동 페이지 슬롯</p>
}

const PANEL_SLOTS = {
  overview: OverviewSlot,
  settings: SettingsSlot,
  activity: ActivitySlot
}

/** 메뉴 map + value → 컴포넌트(슬롯) 패널 */
function SlotPanelAccordionDemo () {
  const [value, setValue] = useState('overview')
  const Panel = PANEL_SLOTS[value]

  return (
    <Accordion value={value} onChange={setValue} skin="card">
      {CUSTOM_MENU.map((item) => (
        <AccordionItem key={item.value} value={item.value} disabled={item.disabled}>
          {item.icon && (
            <span className="accordion_leading">
              <Icon name={item.icon} size="100%" />
            </span>
          )}
          <span className="accordion_label">{item.label}</span>
        </AccordionItem>
      ))}
      {Panel ? <Panel key={value} /> : null}
    </Accordion>
  )
}

/** AccordionItem + AccordionPanel 조합 */
function AccordionPanelCompoundDemo () {
  const [value, setValue] = useState('overview')

  return (
    <Accordion value={value} onChange={setValue} skin="bordered">
      <AccordionItem value="overview" label="개요" />
      <AccordionItem value="settings" label="설정" />
      <AccordionItem value="activity" label="활동" disabled />
      <AccordionPanel value="overview">
        <p className="accordion_panel-placeholder">개요 패널</p>
      </AccordionPanel>
      <AccordionPanel value="settings">
        <p className="accordion_panel-placeholder">설정 패널</p>
      </AccordionPanel>
      <AccordionPanel value="activity">
        <p className="accordion_panel-placeholder">활동 패널</p>
      </AccordionPanel>
    </Accordion>
  )
}

/** items[].content 로 칸별 패널 */
function ContentPropAccordionDemo () {
  const [value, setValue] = useState('overview')
  const items = CUSTOM_MENU.map((item) => ({
    ...item,
    icon: item.icon
      ? <Icon name={item.icon} size="100%" />
      : undefined,
    content: (
      <p className="accordion_panel-placeholder">content: {item.label}</p>
    )
  }))

  return (
    <Accordion value={value} onChange={setValue} skin="card" items={items} />
  )
}

/** 패널별 위젯/모듈: 슬라이드 · 폼 · 카드 */
function PanelSlideModule () {
  return (
    <Carousel ariaLabel="아코디언 패널 슬라이드" autoplay>
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

function PanelFormModule ({ idPrefix = 'accordion-panel' } = {}) {
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
        아코디언 패널에서 Card 위젯을 호출한 예시입니다. 관련 설명과 액션을 담을 수 있습니다.
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
  return <PanelFormModule idPrefix="accordion-page-form" />
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
  const [value, setValue] = useState('slide')

  return (
    <Accordion value={value} onChange={setValue} skin="card">
      {MODULE_MENU.map((item) => (
        <AccordionItem key={item.value} value={item.value} label={item.label} />
      ))}
      {MODULE_MENU.map((item) => {
        const Panel = MODULE_PANEL_MAP[item.value]
        return (
          <AccordionPanel key={item.value} value={item.value}>
            {Panel ? <Panel /> : null}
          </AccordionPanel>
        )
      })}
    </Accordion>
  )
}

/** 페이지 위젯을 AccordionPanel에 직접 호출 */
function PageWidgetPanelsDemo () {
  const [value, setValue] = useState('slide')

  return (
    <Accordion value={value} onChange={setValue} skin="bordered">
      <AccordionItem value="slide" label="슬라이드" />
      <AccordionItem value="form" label="폼" />
      <AccordionItem value="card" label="카드" />
      <AccordionPanel value="slide">
        <HeroCarousel />
      </AccordionPanel>
      <AccordionPanel value="form">
        <ContactForm />
      </AccordionPanel>
      <AccordionPanel value="card">
        <ProjectCard />
      </AccordionPanel>
    </Accordion>
  )
}

const SECTIONS = [
  {
    title: '기본 사용',
    description: (
      <>
        메뉴는 데이터 <code>map</code>으로 <code>AccordionItem</code>을 돌리고,
        패널은 열린 <code>value</code>에 맞춰 내용만 교체합니다.
        기본 스킨은 <code>bordered</code>(<code>accordion_bordered</code>)입니다.
      </>
    ),
    code: compoundCode({ panelPrefix: '콘텐츠' }),
    preview: (
      <ControlledAccordion />
    )
  },
  {
    title: '스킨(skin)',
    description: (
      <>
        <code>skin</code>은 <code>bordered</code>(기본) · <code>flush</code> · <code>card</code>입니다.
        각각 <code>accordion_bordered</code> · <code>accordion_flush</code> · <code>accordion_card</code>가 붙습니다.
      </>
    ),
    code: [
      compoundCode({ props: 'skin="bordered"', panelPrefix: 'bordered' }),
      compoundCode({ props: 'skin="flush"', panelPrefix: 'flush' }),
      compoundCode({ props: 'skin="card"', panelPrefix: 'card' })
    ].join('\n\n'),
    preview: (
      <Space vertical block size={24}>
        <ControlledAccordion skin="bordered" panelPrefix="bordered" />
        <ControlledAccordion skin="flush" panelPrefix="flush" />
        <ControlledAccordion skin="card" panelPrefix="card" />
      </Space>
    )
  },
  {
    title: '크기',
    description: (
      <>
        <code>size</code>는 <code>sm</code> · <code>md</code>(기본) · <code>lg</code>입니다.
        <code>sm</code> · <code>lg</code>일 때 <code>accordion_sm</code> · <code>accordion_lg</code>가 붙습니다.
      </>
    ),
    code: [
      compoundCode({ props: 'size="sm"', panelPrefix: 'sm' }),
      compoundCode({ props: 'size="md"', panelPrefix: 'md' }),
      compoundCode({ props: 'size="lg"', panelPrefix: 'lg' })
    ].join('\n\n'),
    preview: (
      <Space vertical block size={24}>
        <ControlledAccordion size="sm" panelPrefix="sm" />
        <ControlledAccordion size="md" panelPrefix="md" />
        <ControlledAccordion size="lg" panelPrefix="lg" />
      </Space>
    )
  },
  {
    title: '슬라이드(effect)',
    description: (
      <>
        <code>effect=&quot;slide&quot;</code>이면 펼침·접힘 시 패널 높이가 슬라이드됩니다.
        루트에 <code>data-effect=&quot;slide&quot;</code>가 붙고,
        <code>--accordion-slide-duration</code> · <code>--accordion-slide-easing</code>으로 타이밍을 바꿀 수 있습니다.
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
        <ControlledAccordion effect="slide" panelPrefix="slide" />
        <ControlledAccordion
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
        <code>AccordionPanel</code> 없이 남은 <code>children</code>은 열린 칸 단일 슬롯입니다.
        <code>panels[value]</code>처럼 value별 슬롯 맵을 두면 칸마다 다른 내용을 제어할 수 있습니다.
      </>
    ),
    code: pageExampleCode({
      name: 'AccordionPanelChildrenExample',
      reactImports: ['useState'],
      compImports: ['Accordion', 'AccordionItem', 'Icon'],
      body: pageExampleReturn(
        `<Accordion value={value} onChange={setValue} skin="bordered">
  {menu.map((item) => (
    <AccordionItem key={item.value} value={item.value} disabled={item.disabled}>
      {item.icon && (
        <span className="accordion_leading">
          <Icon name={item.icon} size="100%" />
        </span>
      )}
      <span className="accordion_label">{item.label}</span>
    </AccordionItem>
  ))}
  {panels[value]}
</Accordion>`,
        `const menu = [
  { value: 'overview', label: '개요', icon: 'home' },
  { value: 'settings', label: '설정', icon: 'settings' },
  { value: 'activity', label: '활동(비활성)', disabled: true }
]

const panels = {
  overview: (
    <p className="accordion_panel-placeholder">콘텐츠: 개요</p>
  ),
  settings: (
    <p className="accordion_panel-placeholder">콘텐츠: 설정</p>
  ),
  activity: (
    <p className="accordion_panel-placeholder">콘텐츠: 활동(비활성)</p>
  )
}

const [value, setValue] = useState('overview')`
      )
    }),
    preview: <CompoundAccordionDemo />
  },
  {
    title: '패널 슬롯 · 컴포넌트 맵',
    description: (
      <>
        value → 페이지·슬롯 컴포넌트 맵을 두고 <code>panels[value]</code>로 교체합니다.
        Tabs의 <code>panel</code> prop과 같이 칸별 화면을 연결합니다.
      </>
    ),
    code: pageExampleCode({
      name: 'AccordionSlotPanelExample',
      reactImports: ['useState'],
      compImports: ['Accordion', 'AccordionItem', 'Button', 'Icon', 'Space'],
      body: pageExampleReturn(
        `<Accordion value={value} onChange={setValue} skin="card">
  {menu.map((item) => (
    <AccordionItem key={item.value} value={item.value} disabled={item.disabled}>
      {item.icon && (
        <span className="accordion_leading">
          <Icon name={item.icon} size="100%" />
        </span>
      )}
      <span className="accordion_label">{item.label}</span>
    </AccordionItem>
  ))}
  {Panel ? <Panel key={value} /> : null}
</Accordion>`,
        `function OverviewPage () {
  return <p className="accordion_panel-placeholder">개요 페이지 슬롯</p>
}

function SettingsPage () {
  return (
    <Space vertical block size={8}>
      <p className="accordion_panel-placeholder">설정 페이지 슬롯</p>
      <Button size="sm" variant="outline" label="저장" />
    </Space>
  )
}

function ActivityPage () {
  return <p className="accordion_panel-placeholder">활동 페이지 슬롯</p>
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

const [value, setValue] = useState('overview')
const Panel = PanelMap[value]`
      )
    }),
    preview: <SlotPanelAccordionDemo />
  },
  {
    title: '패널 슬롯 · AccordionPanel',
    description: (
      <>
        <code>AccordionItem</code>과 <code>AccordionPanel</code>을 형제로 두고 <code>value</code>로 연결합니다.
        메뉴와 패널 마크업을 분리할 때 사용합니다.
      </>
    ),
    code: pageExampleCode({
      name: 'AccordionPanelExample',
      reactImports: ['useState'],
      compImports: ['Accordion', 'AccordionItem', 'AccordionPanel'],
      body: pageExampleReturn(
        `<Accordion value={value} onChange={setValue} skin="bordered">
  <AccordionItem value="overview" label="개요" />
  <AccordionItem value="settings" label="설정" />
  <AccordionItem value="activity" label="활동" disabled />
  <AccordionPanel value="overview">
    <p className="accordion_panel-placeholder">개요 패널</p>
  </AccordionPanel>
  <AccordionPanel value="settings">
    <p className="accordion_panel-placeholder">설정 패널</p>
  </AccordionPanel>
  <AccordionPanel value="activity">
    <p className="accordion_panel-placeholder">활동 패널</p>
  </AccordionPanel>
</Accordion>`,
        `const [value, setValue] = useState('overview')`
      )
    }),
    preview: <AccordionPanelCompoundDemo />
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
      name: 'AccordionContentPropExample',
      reactImports: ['useState'],
      compImports: ['Accordion', 'Icon'],
      body: pageExampleReturn(
        `<Accordion value={value} onChange={setValue} skin="card" items={items} />`,
        `const items = [
  {
    value: 'overview',
    label: '개요',
    icon: <Icon name="home" size="100%" />,
    content: <p className="accordion_panel-placeholder">content: 개요</p>
  },
  {
    value: 'settings',
    label: '설정',
    icon: <Icon name="settings" size="100%" />,
    content: <p className="accordion_panel-placeholder">content: 설정</p>
  },
  {
    value: 'activity',
    label: '활동(비활성)',
    disabled: true,
    content: <p className="accordion_panel-placeholder">content: 활동(비활성)</p>
  }
]

const [value, setValue] = useState('overview')`
      )
    }),
    preview: <ContentPropAccordionDemo />
  },
  {
    title: '패널 슬롯 · 위젯/모듈',
    description: (
      <>
        칸마다 다른 위젯·모듈을 호출합니다. 첫 칸은 <code>Carousel</code>(슬라이드),
        둘째는 <code>FormLayout</code> 폼, 셋째는 <code>Card</code>입니다.
        <code>AccordionPanel</code>에 모듈 컴포넌트를 넣습니다.
      </>
    ),
    code: pageExampleCode({
      name: 'AccordionModulePanelsExample',
      reactImports: ['useState'],
      compImports: [
        'Accordion',
        'AccordionItem',
        'AccordionPanel',
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
        'Input'
      ],
      body: pageExampleReturn(
        `<Accordion value={value} onChange={setValue} skin="card">
  {menu.map((item) => (
    <AccordionItem key={item.value} value={item.value} label={item.label} />
  ))}
  {menu.map((item) => {
    const Panel = PanelMap[item.value]
    return (
      <AccordionPanel key={item.value} value={item.value}>
        {Panel ? <Panel /> : null}
      </AccordionPanel>
    )
  })}
</Accordion>`,
        `function PanelSlideModule () {
  return (
    <Carousel ariaLabel="아코디언 패널 슬라이드" autoplay>
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
      <FormField label="이름" htmlFor="accordion-panel-name" required>
        <Input id="accordion-panel-name" placeholder="홍길동" />
      </FormField>
      <FormField label="이메일" htmlFor="accordion-panel-email">
        <Input id="accordion-panel-email" type="email" placeholder="name@example.com" />
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
      <CardBody>아코디언 패널에서 Card 위젯을 호출한 예시입니다.</CardBody>
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
        <code>&lt;ProjectCard /&gt;</code>처럼 <code>AccordionPanel</code>에 그대로 넣습니다.
      </>
    ),
    code: pageExampleCode({
      name: 'AccordionPageWidgetPanelsExample',
      reactImports: ['useState'],
      compImports: ['Accordion', 'AccordionItem', 'AccordionPanel'],
      extraImports: [
        '// 페이지에 이미 있는 위젯',
        "import { HeroCarousel, ContactForm, ProjectCard } from './widgets'"
      ],
      body: pageExampleReturn(
        `<Accordion value={value} onChange={setValue} skin="bordered">
  <AccordionItem value="slide" label="슬라이드" />
  <AccordionItem value="form" label="폼" />
  <AccordionItem value="card" label="카드" />
  <AccordionPanel value="slide">
    <HeroCarousel />
  </AccordionPanel>
  <AccordionPanel value="form">
    <ContactForm />
  </AccordionPanel>
  <AccordionPanel value="card">
    <ProjectCard />
  </AccordionPanel>
</Accordion>`,
        `const [value, setValue] = useState('slide')`
      )
    }),
    preview: <PageWidgetPanelsDemo />
  },
  {
    title: '비활성 · extra',
    description: (
      <>
        <code>disabled</code>인 칸은 <code>is-disabled</code>이며 열 수 없습니다.
        <code>extra</code>는 트리거 오른쪽(<code>accordion_extra</code>)에 둡니다.
      </>
    ),
    code: [
      compoundCode({
        items: DISABLED_ITEMS,
        initial: 'a',
        panelPrefix: '비활성 예시'
      }),
      compoundCode({
        items: [
          { value: 'faq', label: '자주 묻는 질문', extra: '3' },
          { value: 'notice', label: '공지', extra: 'N' }
        ],
        initial: 'faq',
        panelPrefix: 'extra'
      })
    ].join('\n\n'),
    preview: (
      <Space vertical block size={24}>
        <ControlledAccordion
          items={DISABLED_ITEMS}
          initial="a"
          panelPrefix="비활성 예시"
        />
        <ControlledAccordion
          items={[
            { value: 'faq', label: '자주 묻는 질문', extra: '3' },
            { value: 'notice', label: '공지', extra: 'N' }
          ]}
          initial="faq"
          panelPrefix="extra"
        />
      </Space>
    )
  },
  {
    title: 'HTML 마크업',
    description: (
      <>
        스타일 계약은 <code>accordion</code> · <code>accordion_item</code> · <code>accordion_trigger</code> ·
        <code>accordion_panel</code> · <code>accordion_content</code>입니다.
        기본 스킨은 <code>accordion_bordered</code>입니다.
      </>
    ),
    code: `<div class="accordion accordion_bordered">
  <div class="accordion_item is-open">
    <div class="accordion_heading" role="heading" aria-level="3">
      <button type="button" class="accordion_trigger" aria-expanded="true">
        <span class="accordion_label">배송 안내</span>
      </button>
    </div>
    <div class="accordion_panel" role="region">
      <div class="accordion_content">영업일 기준 2~3일 내 출고됩니다.</div>
    </div>
  </div>
  <div class="accordion_item">
    <div class="accordion_heading" role="heading" aria-level="3">
      <button type="button" class="accordion_trigger" aria-expanded="false">
        <span class="accordion_label">교환 · 반품</span>
      </button>
    </div>
  </div>
</div>`,
    preview: (
      <div className="accordion accordion_bordered">
        <div className="accordion_item is-open">
          <div className="accordion_heading" role="heading" aria-level={3}>
            <button type="button" className="accordion_trigger" aria-expanded="true">
              <span className="accordion_label">배송 안내</span>
            </button>
          </div>
          <div className="accordion_panel" role="region">
            <div className="accordion_content">영업일 기준 2~3일 내 출고됩니다.</div>
          </div>
        </div>
        <div className="accordion_item">
          <div className="accordion_heading" role="heading" aria-level={3}>
            <button type="button" className="accordion_trigger" aria-expanded="false">
              <span className="accordion_label">교환 · 반품</span>
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
        제목은 <code>role=&quot;heading&quot;</code>, 트리거는 <code>aria-expanded</code>와
        <code>aria-controls</code>를 둡니다. 패널은 <code>role=&quot;region&quot;</code>입니다.
      </>
    ),
    code: compoundCode({
      props: 'collapsible',
      items: [
        { value: 'a', label: '일반' },
        { value: 'b', label: '알림' }
      ],
      initial: 'a',
      panelPrefix: '설정'
    }),
    preview: (
      <ControlledAccordion
        collapsible
        items={[
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
 * Accordion 가이드 화면.
 * Tabs 와 같이 메뉴는 데이터 map · 패널은 children / AccordionPanel / content / 위젯 슬롯으로 예시를 모은다.
 */
export default function AccordionGuide () {
  return (
    <GuideLayout
      category="기타"
      title="Accordion"
      description="아코디언. 메뉴는 데이터 map으로 AccordionItem을 돌리고, 패널은 children·AccordionPanel·items.content·위젯/모듈 슬롯으로 커스텀합니다. bordered · flush · card · size · effect(slide)를 지원합니다."
    >
      {SECTIONS.map((section) => (
        <DemoBlock
          key={section.title}
          title={section.title}
          description={section.description}
          code={section.code}
          fileName={section.title === 'HTML 마크업' ? 'accordion.html' : 'AccordionExample.jsx'}
        >
          {section.preview}
        </DemoBlock>
      ))}

      <GuideApiDocs sections={accordionApiSections} />
    </GuideLayout>
  )
}
