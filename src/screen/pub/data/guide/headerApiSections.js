const columns = [
  { key: 'name', label: '이름' },
  { key: 'type', label: '타입' },
  { key: 'default', label: '기본값' },
  { key: 'description', label: '설명' }
]

export const headerApiSections = [{
  title: 'API · Header / PageHeader / AppHeader',
  tables: [{ columns, rows: [
    { name: 'background', type: 'CSS background', default: '기존 테마', description: '기본 배경을 CSS 변수 --app-header-bg로 전달합니다. transparent·색상·그라디언트를 지정할 수 있습니다.' },
    { name: 'scrolledBackground', type: 'CSS background', default: '기본 배경 유지', description: '헤더의 시작 위치가 화면 상단을 지나면 적용합니다. 배너가 있으면 그 높이를 지난 뒤 전환합니다.' },
    { name: 'className · style', type: 'string · CSSProperties + 사용자 CSS 변수', default: '—', description: '실제 공통 헤더에 클래스와 스타일을 전달합니다. style로 직접 지정한 변수는 background props보다 우선합니다.' },
    { name: '--app-header-bg · --app-header-bg-scrolled', type: 'CSS 변수', default: 'var(--color-header-bg) · 기본 배경', description: '기본·스크롤 배경입니다. 헤더 전체에 적용하고 하단 메뉴는 기본적으로 부모 배경을 사용해 반투명 색상이 두 번 겹치지 않게 합니다.' },
    { name: '--app-header-nav-bg', type: 'CSS 변수', default: 'transparent', description: '하단 메뉴 배경을 별도로 지정할 때 사용합니다.' },
    { name: 'is-scrolled · data-scrolled', type: 'class · attribute', default: '스크롤 전 없음', description: 'AppLayout에서 상단 도달 상태를 표시합니다. 맨 위로 복귀하면 제거합니다. 기존 is-scroll-hidden과는 별개입니다.' },
    { name: 'AppLayout headerAppearance', type: 'HeaderAppearance', default: '—', description: '공통 기본 배경·클래스·스타일입니다. 페이지 Header의 설정이 우선하며 페이지 이동 시 이전 설정은 정리됩니다.' },
    { name: 'GuideLayout / PubHeader headerAppearance', type: 'HeaderAppearance', default: '—', description: 'PUB 레이아웃도 같은 외형 설정을 Header에 전달합니다.' }
  ] }]
}]
