/**
 * Card 가이드 — API · Props / 클래스 / 디자인 토큰
 */

const columns = [
  { key: 'name', label: '이름' },
  { key: 'description', label: '설명' },
  { key: 'default', label: '기본값' },
  { key: 'type', label: '타입' }
]

const props = [
  {
    name: 'type · card',
    type: "'course' | 'promotion' | 'image' | 'content' | 'quick-link' | 'testimonial' | 'callout' | 'overlay' | 'news' | 'feature' | 'webzine' · 유형별 데이터",
    default: '—',
    description: 'type과 card를 함께 지정하면 데이터 기반 카드 유형을 렌더합니다. 생략하면 기존 Header·Body·Footer 조합을 사용합니다. 기본 카드에서는 button·submit·reset으로 HTML 버튼의 type을 지정합니다.'
  },
  {
    name: 'imagePosition (webzine)',
    type: "'start' | 'end'",
    default: 'start',
    description: '뉴스·웹진 썸네일의 좌측·우측 배치. 좁은 화면에서도 가로 구조를 유지합니다. --card-webzine-media-width(기본 32%)와 --card-webzine-media-ratio(기본 3 / 2)로 너비·비율을 조정합니다.'
  },
  {
    name: 'layout · slots.badges · slots.meta · slots.footer · actions (course)',
    type: "'vertical' | 'horizontal' · ReactNode",
    default: 'vertical · —',
    description: '과정형 배치와 조합 슬롯. TagGroup·Tag, 일정·평점, Progress, 가격, Button 등을 전달합니다. 배지·정보·푸터·액션은 상세 링크 밖에 배치합니다. 빈 슬롯은 영역을 만들지 않습니다.'
  },
  {
    name: 'slots.labels · slots.schedule · slots.reviews · slots.keywords (course)',
    type: 'ReactNode',
    default: '—',
    description: '과정 목록 조합. labels는 제목 앞 읽기 전용 TagGroup, schedule은 교육일정, reviews는 평점·후기, keywords는 키워드입니다. labels에는 링크·버튼을 넣지 않습니다. 나머지는 상세 링크 밖에 배치하며 빈 영역은 생략합니다.'
  },
  {
    name: 'format (overlay) · imagePosition · tone · actions (feature)',
    type: "'portrait' | 'landscape' · 'start' | 'end' · 'surface' | 'brand' | 'dark' · ReactNode",
    default: 'portrait · start · surface · 기본 CTA',
    description: '오버레이 형식과 분할 소개의 이미지 위치·색상·CTA를 지정합니다. feature의 actions는 기본 링크를 대체합니다. 슬롯에는 Button·Link를 조합합니다. 카드 높이는 --card-overlay-height로 조정합니다.'
  },
  {
    name: 'card.date · card.keywords · card.target',
    type: "string · readonly string[] · '_self' | '_blank'",
    default: '—',
    description: 'overlay·news·content·webzine의 날짜(ISO YYYY-MM-DD)·키워드와 링크의 창 대상입니다. target은 feature·quick-link도 지원하며 새 창은 제목으로 안내합니다. 키워드는 TagGroup·Tag로 표시하며 링크를 중첩하지 않습니다.'
  },
  {
    name: 'image · imageProps · slots.image · priority',
    type: 'string | 이미지 설정 | null · object · ReactNode · boolean',
    default: 'card.image · — · — · false',
    description: '미디어는 slots.image → image → card.image 순서로 적용합니다. course·content·overlay·feature·webzine는 이미지 누락·null·로드 실패 시 미디어 아이콘을 표시합니다. news는 의도적으로 이미지가 없는 유형입니다. slots.image=null은 숨김, 사용자 이미지 슬롯의 실패 처리는 호출부에서 담당합니다. 다른 유형은 image=null이면 숨깁니다. imageProps는 src·alt·width·height·fit·position을 지정합니다.'
  },
  {
    name: 'selected · actions',
    type: 'boolean · ReactNode',
    default: 'false · —',
    description: 'selected는 고객사례 유형의 선택 테두리, actions는 안내 유형의 버튼·링크 영역입니다.'
  },
  {
    name: 'shadow',
    type: 'boolean',
    default: 'false (shadow·elevated variant는 true)',
    description: '기본·호버 그림자 표시 여부. 명시한 값이 variant보다 우선합니다.'
  },
  {
    name: 'variant',
    type: "'bordered' | 'shadow' | 'flat' | 'elevated' | 'ghost' | …",
    default: 'bordered',
    description: '스킨. flat·ghost → card_ghost.'
  },
  {
    name: 'size',
    type: "'sm' | 'md' | 'lg' | 'compact'",
    default: 'md',
    description: '패딩·제목 크기.'
  },
  {
    name: 'title · subtitle',
    type: 'ReactNode',
    default: '—',
    description: '내장 헤더 제목·부제. CardHeader 없이 사용.'
  },
  {
    name: 'as · tag',
    type: 'ElementType · string (tag)',
    default: 'article',
    description: 'as는 HTML 태그 또는 Link 컴포넌트. 사용자 컴포넌트에도 href 전달. href면 a, onClick이면 button.'
  },
  {
    name: 'href',
    type: 'string',
    default: '—',
    description: '링크 카드. card_clickable.'
  },
  {
    name: 'hoverable · horizontal · compact · accent',
    type: 'boolean',
    default: 'false',
    description: '호버·가로·조밀·액센트.'
  },
  {
    name: 'color',
    type: 'string',
    default: '—',
    description: 'color_* (액센트 등과 조합).'
  },
  {
    name: 'disabled',
    type: 'boolean',
    default: 'false',
    description: '비활성. 인터랙티브면 aria-disabled · tabIndex=-1.'
  },
  {
    name: 'ripple',
    type: 'boolean',
    default: 'false',
    description: '클릭 파장 opt-in.'
  },
  {
    name: 'media · header · extra · footer',
    type: 'ReactNode',
    default: '—',
    description: '미디어·커스텀 헤더·우측·푸터.'
  },
  {
    name: 'children',
    type: 'ReactNode',
    default: '—',
    description: 'CardHeader · CardBody · CardFooter 등.'
  },
  {
    name: 'onClick',
    type: '(event) => void',
    default: '—',
    description: '클릭 핸들러. 있으면 button 루트.'
  }
]

const headerProps = [
  { name: 'title', type: 'ReactNode', default: '—', description: '제목(card_title)' },
  { name: 'subtitle', type: 'ReactNode', default: '—', description: '부제(card_subtitle)' },
  { name: 'extra', type: 'ReactNode', default: '—', description: '헤더 우측(card_extra)' },
  { name: 'children', type: 'ReactNode', default: '—', description: 'title·subtitle 대체 메인' }
]

const bodyProps = [
  { name: 'children', type: 'ReactNode', default: '—', description: '카드 본문' }
]

const footerProps = [
  { name: 'between', type: 'boolean', default: 'false', description: '양끝 정렬(card_footer-between)' },
  { name: 'children', type: 'ReactNode', default: '—', description: '하단 액션·메타' }
]

const deckProps = [
  { name: 'columns', type: '2 | 3', default: 'auto', description: '고정 열 수. 없으면 자동 그리드' },
  { name: 'children', type: 'ReactNode', default: '—', description: 'Card 목록' }
]

const classes = [
  { name: 'card · card_inner · card_header · card_body · card_footer', type: 'class', default: '—', description: '구조' },
  { name: 'card_title · card_subtitle · card_extra · card_media', type: 'class', default: '—', description: '파트' },
  { name: 'card_sm · card_lg · card_compact · card_horizontal', type: 'class', default: '—', description: '크기·레이아웃' },
  { name: 'card_shadow · card_elevated · card_ghost · card_borderless', type: 'class', default: '—', description: '스킨' },
  { name: 'card_hover · card_clickable · card_accent · is-disabled', type: 'class', default: '—', description: '동작·상태' },
  { name: 'card_deck · card_deck-2 · card_deck-3', type: 'class', default: '—', description: '그리드' },
  { name: 'card_icon · card_avatar · card_stat · card_media-placeholder', type: 'class', default: '—', description: '아이콘·미디어 보조' }
]

const tokens = [
  {
    name: '--card-padding · --card-padding-sm · --card-padding-lg',
    type: 'length',
    default: 'var(--space-lg) · var(--space-md) · var(--space-xl)',
    description: '크기별 내부 여백'
  },
  {
    name: '--card-radius · --card-shadow · --card-shadow-md',
    type: 'mixed',
    default: '—',
    description: '모서리·그림자'
  },
  {
    name: '--card-media-ratio · --card-horizontal-media-width',
    type: 'mixed',
    default: '16 / 9 · 7.5rem',
    description: '미디어 비율·가로형 너비'
  }
]

export const cardApiSections = [
  {
    title: 'API · 카드 유형 데이터',
    description: 'Card는 @/comp에서 가져옵니다. 유형별 필수 데이터는 TypeScript가 검사하며, 화면 콘텐츠는 호출 위치에서 관리합니다.',
    tables: [{ columns, rows: [
      { name: 'course', type: 'CourseCardData · CourseCardProps', default: '—', description: 'id · title · href, 선택 category · description · image. layout으로 세로·가로 배치, slots로 배지·정보·푸터, actions로 독립 버튼을 조합합니다.' },
      { name: 'promotion', type: 'PromotionCardData', default: '—', description: 'id · title · description · href · action, 선택 image. CTA만 링크입니다.' },
      { name: 'image', type: 'ImageCardData', default: '—', description: 'id · title · description · href · action · tone(mint | lavender), 선택 image. 카드 전체가 링크입니다.' },
      { name: 'content', type: 'ContentCardData', default: '—', description: 'id · category · title · href, 선택 description · image · date · keywords · target. 카드 전체가 링크입니다.' },
      { name: 'overlay', type: 'OverlayCardData · OverlayCardProps', default: '—', description: 'id · title · href, 선택 category · date · description · keywords · image · target. 이미지 위에 정보가 겹치는 전체 링크이며 format으로 세로·가로 형식을 선택합니다.' },
      { name: 'news', type: 'NewsCardData', default: '—', description: 'id · title · href, 선택 category · date · description · keywords · target. 이미지 영역 없이 텍스트만 표시하는 전체 링크입니다.' },
      { name: 'webzine', type: 'WebzineCardData · WebzineCardProps', default: '—', description: 'id · title · href, 선택 category · date · description · keywords · image · target. imagePosition=start|end로 좌측·우측 썸네일을 배치합니다. 전체 링크이며 기본 미디어 실패 대체 표시를 지원합니다.' },
      { name: 'feature', type: 'FeatureCardData · FeatureCardProps', default: '—', description: 'id · title · description · href · action, 선택 category · image · target. 이미지와 본문을 분할하고 CTA만 링크로 제공합니다. actions로 교체할 수 있습니다.' },
      { name: 'quick-link', type: 'QuickLinkCardData', default: '—', description: 'id · title · href · icon · tone(cream | gray | sage | surface), 선택 description · target. 카드 전체가 링크입니다.' },
      { name: 'testimonial', type: 'TestimonialCardData', default: '—', description: 'category · quote · author, 선택 image. Stat의 testimonial 구조를 재사용합니다.' },
      { name: 'callout', type: 'CalloutCardData', default: '—', description: 'title · description, 선택 id. actions를 별도로 지정합니다.' }
    ] }]
  },
  {
    title: 'API · Card Props',
    description: 'React · Next.js Card props입니다. 본문은 CardBody 등으로 구성합니다.',
    tables: [{ columns, rows: props }]
  },
  {
    title: 'API · CardHeader Props',
    tables: [{ columns, rows: headerProps }]
  },
  {
    title: 'API · CardBody Props',
    tables: [{ columns, rows: bodyProps }]
  },
  {
    title: 'API · CardFooter Props',
    tables: [{ columns, rows: footerProps }]
  },
  {
    title: 'API · CardDeck Props',
    tables: [{ columns, rows: deckProps }]
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
