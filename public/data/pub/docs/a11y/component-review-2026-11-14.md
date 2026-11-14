# 공통 컴포넌트 접근성 검토 (2026-11-14)

페이지·위젯·모듈까지 확대한 후속 결과는 [전체 접근성 검토](site-review-2026-11-14.md)에 정리했습니다.

검토 범위: `src/components/ui`의 64개 파일과 공통 widget·layout. 프로젝트별 전체 화면·업무 데이터·외부 차트 인스턴스는 별도 범위입니다.

검토 기준: [WAI-ARIA APG](https://www.w3.org/WAI/ARIA/apg/patterns/), WCAG 2.2 A·AA의 키보드, 이름·역할·값, 초점 및 텍스트 대비·조작 영역. 자동 검사는 axe-core로 가이드의 기본 상태를 측정하며, 열림·닫힘과 방향키 상태는 Playwright 회귀 테스트로 보완합니다.

자동 검사 통과는 접근성 인증을 뜻하지 않습니다. VoiceOver·NVDA 실제 음성 출력, 터치 스크린리더, 운영 데이터·커스텀 슬롯·임의 색상 조합·외부 차트 렌더러는 수동 확인이 필요합니다.

## 공통 widget·layout

- AppLayout: 본문 바로가기와 초점 가능한 main을 추가했습니다. 모바일 가이드의 고정 좌측 메뉴는 위로 옮겨 본문 조작 영역이 잘리지 않도록 했습니다. LayoutContext·LayoutSlot·Page·PageHeader·Header·Footer·PageBanner·PageFloating·PageLayoutVisibility는 레이아웃 상태·슬롯 전달 계약을 확인했습니다.
- LanguageSwitcher: 방향키·Home·End·Escape·Tab, 선택 후 초점 복귀와 menuitemradio 단일 진입을 추가했습니다.
- AppHeader·AppFooter: 네이티브 탐색·링크·레이아웃 의미를 확인했습니다. TopBanner는 초점 진입 정지와 닫기 버튼을 확인했습니다.
- GlobalTranslator·AppProviders·DevelopmentRefresh·RouteRedirect와 shared 타입은 UI 조작을 생성하지 않는 연결 코드로 분리했습니다. 번역 결과의 접근성 이름은 실제 번역 데이터로 추가 확인해야 합니다.

## UI 파일별 결과

| 파일 | 검토 결과·호출 계약 |
| --- | --- |
| `Accordion` | Enter·Space, 펼침 상태·패널 연결 확인. 내부 캐러셀 조작 영역 보완. |
| `Affix` | DOM 순서 유지와 장식용 자리 요소 숨김 확인. |
| `Alert` | 알림 역할·닫기 이름 확인. 설명 대비 보완. |
| `AutoSkeleton` | 실제 콘텐츠와 로딩 골격 분리·aria-busy 확인. |
| `Avatar` | 이미지 alt·대체 아이콘·장식 숨김 계약 확인. 사진의 설명은 호출부에서 제공. |
| `BackTop` | 키보드 실행 후 본문/스크롤 영역에 초점 이동, 동작 줄이기 설정 반영. |
| `Badge` | 이름이 있는 배지에는 img/status, BadgeWrap에는 group 역할을 연결. 의미 있는 점에는 ariaLabel 필요. |
| `Breadcrumb` | 현재 경로·탐색 이름 확인. 경로 펼침 버튼 제거 후 새 링크로 초점 이동. |
| `Button` | 네이티브 Enter·Space, disabled·loading·이름 전달 확인. outline의 다크 대비 보완. |
| `Calendar` | 기본 역할을 application에서 group으로 수정해 스크린리더의 일반 탐색 모드를 유지. 날짜 버튼 확인. 휠 listbox에 방향키·Home·End와 roving tabindex 추가. |
| `Card` | 링크·버튼 루트와 disabled 확인. 클릭형 카드 내부에 다른 조작 요소를 중첩하지 않는 호출 계약 필요. |
| `Carousel` | 화면 밖 슬라이드 inert·aria-hidden, 초점 진입 시 정지, 방향키 범위 제한, 동작 줄이기 설정, pagination 24px 조작 영역 보완. |
| `Chart` | figure·figcaption 및 네이티브 속성 전달 확인. 실제 차트 데이터·대체 표/설명은 렌더러 호출부 책임. |
| `ChartD3` | Chart 어댑터. 데이터 렌더링과 대체 표/설명은 호출부 책임. |
| `ChartEcharts` | Chart 어댑터. 라이브러리별 ARIA·키보드 설정은 인스턴스 생성부 책임. |
| `ChartHighcharts` | Chart 어댑터. 라이브러리 접근성 모듈과 데이터 설명은 인스턴스 생성부 책임. |
| `ChartUs` | Chart 어댑터. 실제 데이터의 텍스트 대안은 호출부 책임. |
| `Checkbox` | 네이티브 checked·indeterminate·disabled 확인. ariaLabel을 실제 input에도 전달. |
| `Collapse` | 네이티브 토글·패널 연결 확인. 제목 대비·내부 캐러셀 조작 영역 보완. |
| `Container` | 배치용 래퍼. 키보드·ARIA 역할을 불필요하게 추가하지 않음. |
| `DatePicker` | 입력에서 Enter·Space·아래 방향키 열기, 날짜 방향키·Home·End·PageUp/Down, Escape 초점 복귀, 숨김 패널·날짜 범위·지우기 초점 보완. |
| `Divider` | 구분선·방향과 장식 숨김 확인. |
| `Drawer` | 이전 검토 반영. native dialog, 이름·설명, Tab 순환, Escape, 중첩, 초점 복귀와 키보드 핸들 확인. |
| `Dropdown` | menu 소유 구조 수정. 방향키·Home·End·문자 탐색·Escape·Tab·선택 후 초점 복귀 추가. |
| `Empty` | 상태 메시지·장식 이미지 숨김 확인. |
| `Flex` | 배치 전용. DOM 순서와 호출부 속성 유지. |
| `Floating` | 배치 전용. 삽입된 조작 요소를 유지. 데모 스크롤 영역의 초점 진입 보완. |
| `FormLayout` | form·label htmlFor·오류 alert 확인. 반복 렌더링되는 예제의 ID를 useId로 분리하고 중복 라벨 제거. required와 도움말/오류 aria-describedby는 실제 입력 호출부에서도 연결해야 함. |
| `Grid` | 배치 전용. 시각적 배치와 읽기 순서가 달라지는 호출부는 별도 확인 필요. |
| `Icon` | circle·square 클릭형도 네이티브 button으로 렌더해 키보드·disabled 의미 일치. |
| `Input` | 네이티브 입력·invalid·지우기 초점 복귀 확인. 지우기 조작 영역 24px로 확대. |
| `Keywords` | 접기 상태·controls 확인. 사용자 토글 문구를 접근성 이름에 유지하고 가로 스크롤 영역 초점 진입 추가. |
| `Link` | 네이티브 링크 및 disabled 처리 확인. 의미 있는 링크 이름은 호출부 책임. |
| `List` | ul·ol·dl 및 정의 목록 구조 확인. |
| `Lottie` | 이미지 이름, 내부 그래픽 장식 숨김, 재생 정지 버튼 및 reduced motion 확인. |
| `Menu` | 접힌 하위 메뉴가 실제로 숨겨지도록 수정. 구분선의 list 구조 수정. |
| `Modal` | 이전 검토 반영. native dialog, 이름·설명, Tab 순환, Escape, 중첩, 초점 복귀와 본문 스크롤 확인. |
| `Navbar` | 토글 expanded·controls 확인. Escape 닫기와 토글 초점 복귀 추가. |
| `PageLoading` | 로딩 status·aria-busy·자동/수동 스켈레톤 분리 확인. |
| `PageSkeleton` | 장식 골격 숨김 확인. 상태 메시지는 PageLoading에서 제공. |
| `Pagination` | nav 이름·현재 페이지·이전/다음 비활성·페이지 점프 Enter 확인. |
| `Popover` | 비모달 패널 이름·trigger controls 연결, 내부 초점·Escape·초점 복귀 추가. |
| `Progress` | progressbar 이름·범위·불확정 값 처리 확인. |
| `Radio` | 동일 name의 네이티브 라디오 탐색 확인. ariaLabel을 실제 input에도 전달. |
| `Rate` | 네이티브 라디오 확인. 0.5점과 정수점의 이름 구분, disabled 초기화 버튼 보완. |
| `RouteLoading` | 로딩 status·aria-busy 및 이름 확인. |
| `Select` | 네이티브 select 키보드와 오류·라벨 속성 전달 확인. |
| `Skeleton` | 장식 요소의 aria-hidden 확인. |
| `Slider` | 네이티브 range·label·valuetext·증감 버튼·비활성 확인. 값 제어 시 onChange에서 갱신 필요. |
| `Snackbar` | error의 alert 및 일반 status, 닫기 버튼 이름 확인. |
| `Space` | 배치 전용. DOM 순서 유지. |
| `Spin` | status·이름·busy 및 장식 indicator 확인. |
| `Stat` | 텍스트 지표와 Avatar 조합 확인. 고객사례 분류 라벨 대비 보완. |
| `Steps` | 현재 단계 aria-current·네이티브 이동 버튼·비활성 확인. |
| `Switch` | 네이티브 checkbox 기반 switch 역할·상태·이름 확인. |
| `Table` | 네이티브 표·열 scope·스크롤 region 초점 진입 확인. 복합 헤더와 caption은 호출부 책임. |
| `Tabs` | 방향키·Home·End·Delete, 패널 이름·controls 연결과 초점 진입 보완. 닫기 조작의 중첩 인터랙티브 요소 제거. |
| `Tag` | 선택 버튼·제거 버튼을 형제로 분리한 구조와 pressed·disabled 확인. |
| `Textarea` | 지우기 초점·오류·문자 수 status 확인. 지우기 조작 영역 24px로 확대. |
| `Timeline` | 순서·날짜 텍스트와 장식 dot 확인. |
| `Tooltip` | 실제 버튼/링크에 describedby 연결. 텍스트 트리거 초점 진입과 Escape 닫기 추가. |
| `Tree` | 행 기반 treeitem 및 aria-owns 그룹 소유, 단일 Tab 진입, 방향키·Home·End·선택·토글, 이름·메타·조작 영역 보완. |
| `Typography` | 의미 태그·설명 텍스트 확인. mark의 다크 테마 글자색과 pre 스크롤의 키보드 진입 보완. |
| `Upload` | 네이티브 파일 입력·label·삭제 버튼 이름·progressbar 확인. 실제 업로드 결과/오류 정보는 호출부에서 제공. |

## 검증 결과

최종 브라우저 검증은 **278개 모두 통과**했습니다.

- 56개 가이드 × 라이트·다크 × 데스크톱·모바일 = 224회 axe 검사: 감지된 위반 0건. 같은 범위의 중복 ID와 펼쳐진 컨트롤의 끊어진 aria-controls 참조도 0건입니다.
- 공통 컴포넌트 키보드 회귀 20개와 Modal·Drawer·알림·타이머 회귀 34개를 통과했습니다.
- 프로젝트 검사 16개, 전체 ESLint, 스타일 생성 및 Next.js webpack 프로덕션 빌드를 통과했습니다.
- axe의 incomplete는 총 256개 검사 그룹입니다. 이미지·SVG 및 겹침에 따른 대비, 조건부 패널 연결, 기호 버튼 등 수동 판정이 필요한 결과이며 통과 건수에 포함하지 않았습니다. 실제 스크린리더 음성 출력과 운영 데이터 검증은 별도로 필요합니다.

테스트: `tests/browser/component-audit.spec.mjs`, `component-keyboard.spec.mjs`, `dialog-a11y.spec.mjs`, `overlay-timing.spec.mjs`, `modal-notice.spec.mjs`.
검사 엔진: axe-core 4.14.0. 테마 전환 애니메이션의 중간 색상 대신 정지 상태의 대비를 검사합니다.

개별 axe 결과: `reports/a11y/*-{light,dark}-{desktop,mobile}-chromium.json`. `incomplete` 결과는 수동 판정 대상이며 오류가 없다는 의미로 처리하지 않습니다.

## 유지할 호출 규칙

- 입력에는 보이는 label 또는 aria-label을 제공합니다. required·aria-invalid·aria-describedby를 실제 input/select/textarea와 연결합니다.
- 제어형 value·open·selected 상태는 변경 콜백에서 부모 상태에 반영합니다. 고정된 value와 갱신하지 않는 콜백은 읽기 전용으로 간주해야 합니다.
- 클릭형 Card, Tab의 custom/renderTab, Tooltip·Popover의 trigger에 중첩 버튼을 만들지 않습니다. 커스텀 마크업은 별도 키보드 검증이 필요합니다.
- 링크·아이콘 버튼·의미 있는 이미지·차트에는 사용 목적을 설명하는 이름이나 텍스트 대안을 제공합니다.
- Tree의 prefix·labelSlot에 추가 컨트롤을 넣거나 다중 선택을 사용할 때는 호출부의 선택 상태와 multiselectable 설정을 일치시킵니다.
