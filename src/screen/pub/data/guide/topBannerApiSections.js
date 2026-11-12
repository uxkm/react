const columns = [
  { key: 'name', label: '이름' },
  { key: 'type', label: '타입' },
  { key: 'default', label: '기본값' },
  { key: 'description', label: '설명' }
]

export const topBannerApiSections = [{
  title: 'API · TopBanner / PageBanner',
  description: 'TopBanner는 실제 배너 UI, PageBanner는 해당 페이지의 배너를 공통 헤더 위에 등록하는 슬롯 컴포넌트입니다. props는 동일합니다.',
  tables: [{ columns, rows: [
    { name: 'items', type: '{ id, content, href?, target? }[]', default: '—', description: '배너 목록입니다. id는 고유하게 지정하며 content에는 원하는 React UI를 넣습니다. 1개면 슬라이더를 생성하지 않습니다.' },
    { name: 'children', type: 'ReactNode', default: '—', description: 'items를 생략하면 단일 배너 콘텐츠로 사용합니다. 콘텐츠가 없으면 영역을 만들지 않습니다.' },
    { name: 'width', type: 'CSS width', default: '100%', description: '바깥 너비입니다. 숫자는 px이며 최대 너비는 부모 영역을 넘지 않습니다.' },
    { name: 'innerMaxWidth', type: 'CSS max-width', default: '1200', description: '안쪽 영역의 최대 너비입니다. margin-inline:auto로 가운데 정렬합니다.' },
    { name: 'height', type: 'CSS min-height', default: '80', description: '콘텐츠 최소 높이입니다. 모바일·긴 콘텐츠에서는 필요한 만큼 늘어납니다.' },
    { name: 'contentAlign', type: 'left | center | right', default: 'center', description: '안쪽 콘텐츠의 가로 정렬입니다.' },
    { name: 'effect', type: 'slide | fade', default: 'slide', description: '2개 이상일 때만 적용하는 전환 효과입니다.' },
    { name: 'autoplay · interval', type: 'boolean · number', default: 'true · 5000', description: '자동 재생과 전환 간격(ms)입니다. 재생/정지 버튼을 제공하며, 마우스·키보드로 배너를 조작하는 동안 일시 정지합니다.' },
    { name: 'storageKey', type: 'string', default: 'app-top-banner', description: '하루 숨김 저장 키입니다. 캠페인별로 구분합니다. 오늘 하루 열지 않기를 선택하고 닫으면 브라우저 현지 시간의 다음 자정까지 숨깁니다.' },
    { name: 'showTodayOption · closable', type: 'boolean', default: 'true · true', description: '오늘 하루 열지 않기 옵션과 닫기 버튼을 표시합니다. 체크하지 않고 닫으면 새로고침 시 다시 표시합니다.' },
    { name: 'onClose', type: '(reason: close | today) => void', default: '—', description: '사용자가 닫을 때 닫기 사유를 전달합니다.' },
    { name: 'meta.banner', type: 'boolean', default: 'true', description: '페이지에서 등록된 배너의 표시를 제어합니다. true가 콘텐츠를 새로 생성하지는 않습니다.' }
  ] }]
}]
