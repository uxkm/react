/**
 * Keyword / Keywords 가이드 — API · Props / 클래스 / 디자인 토큰
 */

const columns = [
  { key: 'name', label: '이름' },
  { key: 'description', label: '설명' },
  { key: 'default', label: '기본값' },
  { key: 'type', label: '타입' }
]

const keywordsProps = [
  {
    name: 'expanded · defaultExpanded',
    type: 'boolean',
    default: '— · false',
    description: '펼침 상태입니다. expanded 를 넘기면 제어하고, 생략하면 defaultExpanded 와 내부 상태로 동작합니다. collapsible=false 이면 항상 펼친(wrap) 상태로 취급합니다.'
  },
  {
    name: 'collapsible',
    type: 'boolean',
    default: 'true',
    description: 'true 이면 아이템이 부모 너비를 넘칠 때만 우측 펼침/접기 버튼을 표시합니다. 접힌 상태에서는 1행 + 가로 스크롤입니다. false 이면 토글 없이 항상 줄바꿈합니다.'
  },
  {
    name: 'gap',
    type: 'number (px)',
    default: '8',
    description: '아이템 간격(px)입니다. --keywords-gap 인라인 스타일로 적용됩니다.'
  },
  {
    name: 'round',
    type: 'boolean',
    default: 'false',
    description: 'true 이면 keywords_round 가 붙어 하위 Keyword·토글이 pill 모서리가 됩니다.'
  },
  {
    name: 'toggleDim',
    type: 'boolean',
    default: 'false',
    description: 'true 이면 접힘·넘침일 때 펼침/접기 버튼 왼쪽에 가장자리 딤(페이드)을 표시합니다. keywords_toggle-dim 클래스가 붙습니다.'
  },
  {
    name: 'toggleShape',
    type: "'default' | 'round' | 'circle'",
    default: "'default'",
    description: '펼침/접기 버튼 형태입니다. round 는 pill(keywords_toggle-round), circle 은 원형(keywords_toggle-circle)입니다.'
  },
  {
    name: 'toggleClassName',
    type: 'string',
    default: '—',
    description: '기본 토글·renderToggle 의 toggleClassName 에 합쳐질 추가 클래스입니다.'
  },
  {
    name: 'toggle',
    type: 'ReactNode',
    default: '— (chevron 아이콘)',
    description: '기본 토글 버튼 안 콘텐츠입니다. renderToggle 이 있으면 무시됩니다.'
  },
  {
    name: 'renderToggle',
    type: '(state: KeywordsToggleRenderState) => ReactNode',
    default: '—',
    description: '펼침/접기 영역 슬롯입니다. collapsible 일 때 호출되며 overflowing · expanded · listId · toggleClassName · toggle · expand · collapse 를 받습니다. 반환 노드로 기본 버튼을 대체하며, 표시 여부는 overflowing 으로 직접 제어합니다. 형태·딤을 유지하려면 루트에 toggleClassName 을 붙이세요.'
  },
  {
    name: 'ariaLabel',
    type: 'string',
    default: "''",
    description: '목록 role=group 의 aria-label 입니다.'
  },
  {
    name: 'children',
    type: 'ReactNode',
    default: '—',
    description: 'Keyword 아이템(또는 호환 노드)입니다.'
  },
  {
    name: 'className · ...props',
    type: 'div attributes',
    default: '—',
    description: '루트 클래스와 네이티브 div 속성입니다.'
  }
]

const keywordsEvents = [
  {
    name: 'onExpandedChange',
    type: '(expanded: boolean) => void',
    default: '—',
    description: '펼침/접기 토글 시 호출됩니다. 제어 모드에서는 부모에서 expanded 를 갱신합니다.'
  }
]

const keywordProps = [
  {
    name: 'as',
    type: "'tag' | 'button' | 'link'",
    default: "'tag'",
    description: '시맨틱 요소입니다. tag 는 span, button 은 button, link 는 a 입니다. 겉모습은 keyword 공통 스킨입니다.'
  },
  {
    name: 'href',
    type: 'string',
    default: "''",
    description: 'as="link" 일 때 이동 주소입니다.'
  },
  {
    name: 'color',
    type: "'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'muted'",
    default: "'default'",
    description: '색상입니다. color_* 유틸 클래스가 붙습니다.'
  },
  {
    name: 'variant',
    type: "'filled' | 'solid' | 'outline' | 'borderless'",
    default: "'filled'",
    description: '스킨입니다. filled 는 변형 클래스 없음, solid · outline · borderless 는 keyword_* 클래스가 붙습니다.'
  },
  {
    name: 'size',
    type: "'sm' | 'md' | 'lg'",
    default: "'md'",
    description: '크기입니다. md 는 크기 클래스 없음.'
  },
  {
    name: 'round',
    type: 'boolean',
    default: 'false',
    description: 'pill 모서리(keyword_round)입니다. Keywords round 와 함께 써도 됩니다.'
  },
  {
    name: 'label · children',
    type: 'ReactNode',
    default: '—',
    description: '표시 문구입니다. children 이 있으면 children 이 우선합니다.'
  },
  {
    name: 'selected',
    type: 'boolean',
    default: 'false',
    description: '선택 표시(is-selected). as="button" 이면 aria-pressed 도 반영됩니다.'
  },
  {
    name: 'disabled',
    type: 'boolean',
    default: 'false',
    description: '비활성입니다. 클릭·링크 이동을 막습니다.'
  },
  {
    name: 'className · ...props',
    type: 'element attributes',
    default: '—',
    description: '칩 루트(span · button · a) 클래스와 네이티브 속성입니다.'
  }
]

const keywordEvents = [
  {
    name: 'onClick',
    type: '(event) => void',
    default: '—',
    description: '칩 클릭 시 호출됩니다. disabled 이면 호출되지 않습니다.'
  }
]

const classes = [
  {
    name: 'keywords · keywords_list · keywords_toggle',
    type: 'class',
    default: '—',
    description: '목록 루트, 아이템 래퍼, 우측 펼침/접기 버튼입니다.'
  },
  {
    name: 'keywords_collapsible · is-collapsed · is-expanded',
    type: 'class',
    default: '—',
    description: '접힘 가능 모드와 접힘/펼침 상태입니다. 접힘이면 1행+가로 스크롤, 펼침이면 wrap 입니다.'
  },
  {
    name: 'keywords_round',
    type: 'class',
    default: '—',
    description: '목록 단위 pill. 하위 keyword·토글에 radius-pill 을 적용합니다.'
  },
  {
    name: 'keywords_toggle-dim',
    type: 'class',
    default: '—',
    description: 'toggleDim 옵션. 접힘·넘침일 때 리스트 우측을 마스크 페이드합니다(토글 버튼은 가리지 않음).'
  },
  {
    name: 'keywords_toggle-round · keywords_toggle-circle',
    type: 'class',
    default: '—',
    description: 'toggleShape 에 따른 토글 형태(pill · 원형)입니다.'
  },
  {
    name: 'is-overflowing',
    type: 'class',
    default: '—',
    description: '1행 기준 아이템 총 너비가 부모를 넘칠 때 붙습니다. 이때만 keywords_toggle 이 렌더됩니다.'
  },
  {
    name: 'keyword · keyword_round · keyword_sm · keyword_lg · keyword_solid · keyword_outline · keyword_borderless',
    type: 'class',
    default: '—',
    description: '칩 스킨·크기·라운드 변형입니다. color_* 와 함께 씁니다.'
  },
  {
    name: 'is-selected · is-disabled',
    type: 'class',
    default: '—',
    description: '선택·비활성 상태입니다.'
  }
]

const tokens = [
  {
    name: '--keywords-gap',
    type: 'length',
    default: 'var(--space-8) (8px)',
    description: '아이템·토글 간격입니다. gap prop 으로 덮어쓸 수 있습니다.'
  },
  {
    name: '--keywords-dim-width · --keywords-dim-color',
    type: 'length · color',
    default: '1.5rem · var(--color-surface)',
    description: 'toggleDim 가장자리 딤 너비와 페이드 끝 색입니다.'
  },
  {
    name: '--keywords-toggle-size · --keywords-toggle-icon-size',
    type: 'length',
    default: '1.75rem · 0.875rem',
    description: '펼침/접기 버튼과 아이콘 크기입니다.'
  },
  {
    name: '--keywords-padding-y · --keywords-padding-x · --keywords-font-size · --keywords-font-weight',
    type: 'length · number',
    default: '0.2rem · 0.55rem · var(--text-size-xs) · 600',
    description: '칩 여백·글자 크기·굵기입니다.'
  },
  {
    name: '--keywords-radius · --keywords-bg · --keywords-border · --keywords-color',
    type: 'length · color',
    default: 'var(--radius-sm) · surface-raised · border · text',
    description: '칩 모서리·배경·테두리·글자색입니다.'
  }
]

export const keywordApiSections = [
  {
    title: 'API · Keywords Props',
    description: '키워드 목록 컨테이너 props입니다.',
    tables: [{ columns, rows: keywordsProps }]
  },
  {
    title: 'API · Keywords Events',
    tables: [{ columns, rows: keywordsEvents }]
  },
  {
    title: 'API · Keyword Props',
    description: '개별 키워드 칩 props입니다.',
    tables: [{ columns, rows: keywordProps }]
  },
  {
    title: 'API · Keyword Events',
    tables: [{ columns, rows: keywordEvents }]
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
