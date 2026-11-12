/**
 * Floating 가이드 — API · Props / 클래스 / 디자인 토큰
 */

const columns = [
  { key: 'name', label: '이름' },
  { key: 'description', label: '설명' },
  { key: 'default', label: '기본값' },
  { key: 'type', label: '타입' }
]

const props = [
  {
    name: 'slots',
    type: 'Record<string, ReactNode>',
    default: '{}',
    description: '이름별 커스텀 UI입니다. key는 Floating.Item의 name처럼 order와 meta.floatingItems에 연결됩니다. 버튼·카드·입력 등 임의 UI를 넣습니다.'
  },
  {
    name: 'boundary',
    type: "'viewport' | 'footer' | CSS selector | HTMLElement | (() => HTMLElement | null)",
    default: "'viewport'",
    description: 'viewport는 기존 화면 고정입니다. footer는 푸터 상단 위에서 멈추고, 선택자·요소·함수로 다른 경계를 지정할 수 있습니다. 경계가 없거나 숨겨지면 화면 고정으로 동작합니다. 자동 회피는 fixed 배치에 적용합니다.'
  },
  {
    name: 'boundaryGap',
    type: 'number',
    default: '16',
    description: '플로팅 하단과 경계 상단 사이 간격(px)입니다. 스크롤을 되돌리면 원래 여백으로 복귀합니다.'
  },
  {
    name: 'getPosition',
    type: '(context) => CSSProperties | null | undefined',
    default: '—',
    description: 'placement·viewport·floatingRect·boundaryRect·defaultStyle을 받아 좌표를 보정합니다. 최종 style prop이 가장 우선합니다. absolute 배치 등 다른 좌표계도 직접 계산할 수 있습니다.'
  },
  {
    name: 'meta',
    type: '{ floating?: boolean; floatingItems?: Record<string, boolean> }',
    default: '전체·항목 표시',
    description: '컴포넌트 기본 표시 설정입니다. 페이지 export const meta의 floating:false는 전체를 숨기며 floatingItems는 Item의 name별 설정을 우선 적용합니다. 생략한 항목은 표시합니다.'
  },
  {
    name: 'placement',
    type: "'bottom-right' | 'bottom-left' | 'top-right' | 'top-left'",
    default: "'bottom-right'",
    description: '고정 모서리입니다. 기본은 우측 하단입니다. data-placement 으로도 노출됩니다.'
  },
  {
    name: 'offsetBottom',
    type: 'number',
    default: '24',
    description: '하단(또는 top-* 일 때 상단) 여백(px)입니다. Floating 자체가 고정 기준입니다.'
  },
  {
    name: 'offsetRight',
    type: 'number',
    default: '24',
    description: '우측(또는 *-left 일 때 좌측) 여백(px)입니다.'
  },
  {
    name: 'gap',
    type: 'number',
    default: '12',
    description: '아이템 사이 간격(px)입니다.'
  },
  {
    name: 'direction',
    type: "'column' | 'column-reverse' | 'row' | 'row-reverse'",
    default: "'column'",
    description: '스택 방향입니다. column 이면 위→아래(마지막 아이템이 하단). data-direction 으로도 노출됩니다.'
  },
  {
    name: 'order',
    type: 'string[]',
    default: '—',
    description: 'Floating.Item name 배열로 표시 순서를 지정합니다(시작→끝). 없는 name 은 뒤에 붙습니다. data-order 로도 노출됩니다.'
  },
  {
    name: 'children',
    type: 'ReactNode',
    default: '—',
    description: 'Floating.Item · BackTop · 버튼 등입니다. Item 이 아니면 자동으로 Item 으로 감쌉니다.'
  },
  {
    name: 'className · …rest',
    type: 'string · HTMLAttributes',
    default: '—',
    description: '루트(floating) 클래스와 속성입니다. 루트에 data-floating 이 붙습니다.'
  }
]

const itemProps = [
  {
    name: 'name',
    type: 'string',
    default: '—',
    description: 'Floating order 배열과 meta.floatingItems에 매칭할 이름입니다. 버튼·추가 UI별로 고유한 이름을 지정합니다. data-name으로도 노출됩니다.'
  },
  {
    name: 'order',
    type: 'number',
    default: '—',
    description: 'CSS order 값입니다. 작을수록 direction 시작쪽에 가깝습니다. data-order 로도 노출됩니다.'
  },
  {
    name: 'hidden',
    type: 'boolean',
    default: 'false',
    description: 'true 면 아이템을 렌더하지 않아 스택 자리·gap 이 비지 않습니다. BackTop 미표시와 같이 숨긴 버튼 영역이 비어 보이지 않게 할 때 씁니다.'
  },
  {
    name: 'children',
    type: 'ReactNode',
    default: '—',
    description: '아이템 안 콘텐츠입니다. BackTop · Button 등을 넣습니다.'
  }
]

const classes = [
  {
    name: 'floating · floating_item',
    type: 'class',
    default: '—',
    description: '루트 스택 · 아이템 칸입니다. 루트는 position:fixed(데모 래퍼 안에서는 absolute)입니다.'
  },
  {
    name: 'data-floating · data-placement · data-direction · data-order',
    type: 'attr',
    default: '—',
    description: 'Floating 활성화·배치·방향·순서 속성입니다.'
  },
  {
    name: 'data-floating-item · data-name · data-order',
    type: 'attr',
    default: '—',
    description: '아이템 속성입니다. name · order 와 대응합니다.'
  },
  {
    name: 'back_top.is-in-floating · data-in-floating',
    type: 'class · attr',
    default: '—',
    description: 'BackTop 이 Floating 안에 있을 때 붙습니다. 자체 fixed/오프셋이 해제되고 Floating 스택 기준으로 배치됩니다. is-visible 이 없으면 display:none 으로 자리도 비웁니다.'
  },
  {
    name: 'floating_item.is-hidden · [hidden]',
    type: 'class · attr',
    default: '—',
    description: '숨긴 아이템입니다. 스택에서 제거되어 빈 영역·gap 이 남지 않습니다. props.hidden 이면 렌더 자체를 생략합니다.'
  },
  {
    name: 'floating_demo-wrap · floating_demo-scroll · floating_demo-content',
    type: 'class',
    default: '—',
    description: '가이드 데모용 래퍼·스크롤·본문입니다. 래퍼 안 Floating 은 absolute 입니다. 너비 100%입니다.'
  },
  {
    name: 'floating_demo-window',
    type: 'class',
    default: '—',
    description: '문서(window) 기준 데모 안내 박스입니다. Floating 자체는 뷰포트 fixed 로 붙습니다.'
  }
]

const tokens = [
  {
    name: '--floating-z-index',
    type: 'token',
    default: '30',
    description: '고정 시 쌓임 순서입니다. BackTop(--back-top-z-index)보다 위에 두는 것을 권장합니다.'
  },
  {
    name: '--floating-gap · --floating-offset-bottom/right',
    type: 'token',
    default: '—',
    description: '기본 간격·여백 토큰입니다. props 가 있으면 인라인으로 덮습니다.'
  }
]

export const floatingApiSections = [
  {
    title: 'API · PageFloating / 페이지 meta',
    description: 'PageFloating은 페이지 전용 Floating.Item을 공통 플로팅 뒤에 추가합니다. 페이지 이동 시 이전 항목은 정리합니다. meta는 화면 파일의 정적인 export const 객체로 선언합니다.',
    tables: [{ columns, rows: [
      { name: 'meta.floating', type: 'boolean', default: 'true', description: 'false면 모든 플로팅을 숨깁니다. true는 실제로 등록한 항목의 표시를 허용합니다.' },
      { name: 'meta.floatingItems', type: 'Record<string, boolean>', default: '{}', description: 'Item name별 표시 여부입니다. 명시하지 않은 이름은 표시합니다. true가 항목을 새로 생성하지는 않습니다.' },
      { name: 'PageFloating children', type: 'ReactNode', default: '—', description: '해당 페이지에 추가할 Floating.Item입니다. 공통 항목은 AppLayout의 floating에 지정합니다.' },
      { name: 'PageFloating slots', type: 'Record<string, ReactNode>', default: '{}', description: '페이지 전용 커스텀 UI를 이름별로 추가합니다. children과 함께 사용할 수 있습니다.' },
      { name: 'PageFloating floatingProps', type: 'FloatingProps (children·slots 제외)', default: '—', description: '페이지별 경계·간격·정렬·좌표 콜백입니다. 공통 AppLayout 설정보다 우선하며 페이지 이동 시 정리됩니다.' },
      { name: 'AppLayout floating · floatingProps', type: 'ReactNode · FloatingProps', default: '—', description: '공통 플로팅 항목과 배치·정렬 설정입니다. 추가 항목도 같은 컨테이너와 페이지 meta를 사용합니다.' }
    ] }]
  },
  {
    title: 'API · Props',
    description: 'React · Next.js Floating props입니다. placement · offset · gap · direction · order 로 우측 플로팅 스택을 구성합니다.',
    tables: [{ columns, rows: props }]
  },
  {
    title: 'API · Floating.Item',
    description: '스택 한 칸입니다. name 으로 order 배열에 매칭하고, order 숫자로 CSS order 를 줍니다.',
    tables: [{ columns, rows: itemProps }]
  },
  {
    title: '공통 API · 클래스',
    tables: [{ columns, rows: classes }]
  },
  {
    title: '공통 API · 디자인 토큰',
    tables: [{ columns, rows: tokens }]
  }
]
