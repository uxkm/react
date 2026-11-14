/**
 * Modal 가이드 — API · Props / Events / 클래스 / 디자인 토큰
 */

const columns = [
  { key: 'name', label: '이름' },
  { key: 'description', label: '설명' },
  { key: 'default', label: '기본값' },
  { key: 'type', label: '타입' }
]

const props = [
  {
    name: 'initialFocusRef',
    type: 'RefObject<HTMLElement | null>',
    default: '제목 → 전체 패널',
    description: '열릴 때 초점을 둘 내부 요소의 ref입니다. 생략하면 제목, 제목이 없으면 전체 패널로 이동합니다. Tab·Shift+Tab은 내부를 순환하고 Escape는 맨 위 대화상자만 닫습니다. 닫힌 뒤 열기 요소로 초점이 돌아갑니다.'
  },
  {
    name: 'aria-label · aria-labelledby · aria-describedby',
    type: 'string',
    default: 'title을 aria-labelledby로 연결',
    description: '호출부에서 접근성 이름·설명을 지정할 수 있습니다. 제목이 없으면 aria-label로 구체적인 이름을 제공하세요. 복잡한 본문 전체를 자동 설명으로 연결하지 않습니다.'
  },
  {
    name: 'backdrop',
    type: 'boolean',
    default: 'true',
    description: '배경 dim 표시 여부입니다. false 이면 dim 을 렌더링하지 않으며 배경 클릭으로 닫히지 않습니다. 닫기 버튼·Escape·자동 닫힘은 유지되며, dim이 없어도 배경 접근은 차단합니다.'
  },
  {
    name: 'openOnLoad',
    type: 'boolean',
    default: '—',
    description: '마운트 시 자동으로 엽니다. open 을 생략했을 때만 적용하며, 지정하면 defaultOpen 보다 우선합니다. 이후 변경으로 다시 열리지는 않습니다.'
  },
  {
    name: 'autoCloseDelay',
    type: 'number (ms)',
    default: '— (자동 닫힘 없음)',
    description: '열린 시점부터 지정 시간 후 닫습니다. 재열림·시간 변경 시 다시 계산하며 수동 닫기·언마운트 시 취소합니다. 0 이하·유효하지 않은 값은 비활성입니다. 제어 모드는 onOpenChange(false) 에서 부모의 open 을 갱신해야 합니다.'
  },
  {
    name: 'open · defaultOpen',
    type: 'boolean',
    default: '— · false',
    description: '열림 상태입니다. open 을 넘기면 제어하고, 생략하면 defaultOpen 과 내부 상태로 동작합니다. 닫기 시 onOpenChange(false) · onClose 가 호출됩니다.'
  },
  {
    name: 'title',
    type: 'ReactNode',
    default: '—',
    description: '헤더에 굵게 표시할 제목입니다. 없어도 헤더에는 닫기 버튼이 남습니다.'
  },
  {
    name: 'children',
    type: 'ReactNode',
    default: '—',
    description: '본문(modal_body)에 표시할 내용입니다.'
  },
  {
    name: 'footer',
    type: 'ReactNode',
    default: '—',
    description: '푸터 버튼 영역입니다. 오른쪽 정렬(modal_footer-end)로 표시되며, 없으면 푸터를 렌더링하지 않습니다.'
  },
  {
    name: 'size',
    type: "'sm' | 'md' | 'lg'",
    default: "'md'",
    description: '대화상자 너비입니다. sm 은 modal_sm, lg 는 modal_lg 클래스가 붙습니다. adaptive 가운데 모드에서도 유지됩니다.'
  },
  {
    name: 'adaptive',
    type: 'boolean',
    default: 'false',
    description: 'true 이면 viewport ≥ adaptiveBreakpoint 에서 가운데 모달, 미만에서 하단 바텀시트로 전환합니다. 생략 시 기존 가운데 모달만 유지합니다.'
  },
  {
    name: 'adaptiveBreakpoint',
    type: "number | 'pc-sm' | 'pc-md' | 'pc-lg' | 'pc-xl'",
    default: "'pc-md' (1440)",
    description: 'adaptive 전환 기준입니다. 숫자(px) 또는 PC 브레이크포인트 토큰명입니다. pc-sm=1024, pc-md=1440, pc-lg=1920, pc-xl=2580.'
  },
  {
    name: 'staticDemo',
    type: 'boolean',
    default: 'false',
    description: 'true 이면 modal_demo-static 클래스를 붙여 modal_demo-frame 안에 고정 표시합니다. 문서 미리보기용입니다.'
  },
  {
    name: 'className · ...props',
    type: 'dialog attributes',
    default: '—',
    description: '루트 클래스와 네이티브 dialog 속성입니다. 실제 오버레이는 showModal()로 배경 접근을 차단합니다. staticDemo는 비모달이며 배경과 초점을 잠그지 않습니다.'
  }
]

const events = [
  {
    name: 'onClose',
    type: '() => void',
    default: '—',
    description: '오버레이·닫기 버튼·Escape·자동 닫힘 시 호출됩니다. 제어 모드에서는 부모에서 open 을 false 로 갱신합니다.'
  },
  {
    name: 'onOpenChange',
    type: '(open: boolean) => void',
    default: '—',
    description: '열림이 바뀔 때 호출됩니다(닫힐 때 false). onClose 와 함께 쓸 수 있습니다. open 을 false 로 바꾸는 동작은 부모에서 처리합니다.'
  }
]

const classes = [
  {
    name: 'modal · modal_dialog',
    type: 'class',
    default: '—',
    description: '모달 루트(고정 오버레이 레이아웃)와 중앙 대화상자입니다. open 이면 is-open 이 함께 붙습니다.'
  },
  {
    name: 'modal_backdrop',
    type: 'class',
    default: '—',
    description: '배경 오버레이입니다. 클릭하면 onClose 가 호출됩니다.'
  },
  {
    name: 'modal_header · modal_title · modal_close',
    type: 'class',
    default: '—',
    description: '헤더 영역, 제목(HTML 마크업용 클래스), 닫기 버튼입니다. React Modal 은 제목을 h2로 그리고, 닫기 버튼 안에는 Icon close 가 들어갑니다.'
  },
  {
    name: 'modal_body · modal_footer',
    type: 'class',
    default: '—',
    description: '본문과 푸터 영역입니다.'
  },
  {
    name: 'modal_footer-start · modal_footer-center · modal_footer-end · modal_footer-between',
    type: 'class',
    default: '—',
    description: '푸터 정렬 변형입니다. React Modal 의 footer 는 modal_footer-end 로 고정됩니다.'
  },
  {
    name: 'modal_footer-even · modal_footer-even-1-2 · modal_footer-even-2-1 · modal_footer-no-pad-b',
    type: 'class',
    default: '—',
    description: '푸터 버튼 균등 너비, 좌우 비율, 하단 패딩 제거 변형입니다.'
  },
  {
    name: 'modal_footer-group',
    type: 'class',
    default: '—',
    description: 'modal_footer-between 에서 좌·우에 묶는 버튼 그룹입니다.'
  },
  {
    name: 'modal_sm · modal_lg · modal_fullscreen',
    type: 'class',
    default: '—',
    description: '크기 변형입니다. fullscreen 은 className 으로 직접 붙입니다.'
  },
  {
    name: 'modal_adaptive · is-adaptive-sheet',
    type: 'class',
    default: '—',
    description: 'adaptive 루트와 바텀시트 모드입니다. data-adaptive-breakpoint 에 해석된 px 가 붙습니다.'
  },
  {
    name: 'modal_scrollable',
    type: 'class',
    default: '—',
    description: '본문이 길 때 본문만 스크롤합니다. className 으로 붙입니다.'
  },
  {
    name: 'modal_demo-static · modal_demo-frame · modal_demo-frame-compact',
    type: 'class',
    default: '—',
    description: '문서 미리보기용 고정 배치와 프레임(기본·낮은 높이)입니다.'
  },
  {
    name: 'is-open · is-stack-covered',
    type: 'class',
    default: '—',
    description: '표시 상태와 중첩 시 하위 레이어 상태입니다. body.is-modal-open 은 스크롤을 잠급니다.'
  }
]

const tokens = [
  {
    name: '--modal-z-index · --modal-margin',
    type: 'number · length',
    default: '300 · var(--space-md)',
    description: '모달 레이어 순서와 화면 가장자리 여백입니다.'
  },
  {
    name: '--modal-width · --modal-width-sm · --modal-width-lg',
    type: 'length',
    default: '32rem · 24rem · 48rem',
    description: '기본·sm·lg 대화상자 너비입니다.'
  },
  {
    name: '--modal-bg · --modal-radius · --modal-shadow',
    type: 'color · length · shadow',
    default: 'var(--color-surface) · var(--radius-lg) · var(--shadow-lg)',
    description: '대화상자 배경, 모서리 반경, 그림자입니다.'
  },
  {
    name: '--modal-header-gap · --modal-header-padding-y · --modal-header-padding-x',
    type: 'length',
    default: 'var(--space-sm) · var(--space-md) · var(--space-lg)',
    description: '헤더 요소 간격과 내부 여백입니다.'
  },
  {
    name: '--modal-title-font-size · --modal-title-font-weight',
    type: 'length · number',
    default: 'var(--text-size-lg) · 600',
    description: '제목 글자 크기와 굵기입니다.'
  },
  {
    name: '--modal-close-size · --modal-close-icon-size',
    type: 'length',
    default: '2rem · 1.125rem',
    description: '닫기 버튼 크기와 안의 Icon 크기입니다.'
  },
  {
    name: '--modal-body-padding-y · --modal-body-padding-x · --modal-body-font-size',
    type: 'length',
    default: 'var(--space-lg) · var(--space-lg) · var(--text-size-sm)',
    description: '본문 여백과 글자 크기입니다.'
  },
  {
    name: '--modal-footer-gap · --modal-footer-padding-y · --modal-footer-padding-x',
    type: 'length',
    default: 'var(--space-sm) · var(--space-md) · var(--space-lg)',
    description: '푸터 버튼 간격과 내부 여백입니다.'
  },
  {
    name: '--modal-adaptive-sheet-max-height',
    type: 'length',
    default: '90vh',
    description: 'adaptive 바텀시트 대화상자의 최대 높이입니다.'
  }
]

export const modalApiSections = [
  {
    title: 'API · Props',
    description: 'React · Next.js Modal props입니다.',
    tables: [{ columns, rows: props }]
  },
  {
    title: 'API · Events',
    tables: [{ columns, rows: events }]
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
