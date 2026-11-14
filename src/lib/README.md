# lib — 라이브러리·애플리케이션 연동

공용 라이브러리 래퍼와 라우팅·정적 화면·언어 상태 연동을 `@/lib/*`로 관리합니다. 컴포넌트와 데모 화면은 필요한 모듈을 가져와 사용합니다.

| 폴더 | 모듈 | 패키지·역할 |
| --- | --- | --- |
| `router/` | `@/lib/router` | `next/link`, `next/navigation` 기반 Link·NavLink 호환 래퍼 |
| `page/` | `@/lib/page/RegistryPage` | 서버에서 레지스트리의 화면 모듈 로드·렌더링 |
| `page/` | `@/lib/page/staticParams` | App Router `generateStaticParams`용 주소 목록 |
| `page/` | `@/lib/page/routeMetadata` | 생성한 화면 제목을 Next.js metadata에 전달 |
| `page/` | `@/lib/page/siteTitle` | 클라이언트의 브라우저 탭 제목 유틸리티 |
| `i18n/` | `@/lib/i18n/localeStore` | Zustand 기반 언어·번역 진행 상태 |
| `i18n/` | `@/lib/i18n/i18n` | 지원 언어·선택 저장·문서 언어 동기화 |
| `i18n/` | `@/lib/i18n/pageTranslate` | 브라우저 DOM 문구 번역·캐시·진행률 처리 |
| `layout/` | `@/lib/layout/breakpoints` | 반응형 브레이크포인트 |
| `vendor/` | `@/lib/vendor/fullcalendar` | FullCalendar React 연동 |
| `vendor/` | `@/lib/vendor/swiper` | Swiper React 컴포넌트·모듈·스타일 |
| `vendor/` | `@/lib/vendor/lottie` | Lottie React·Web 연동 |
| `vendor/` | `@/lib/vendor/clipboard` | clipboard-copy |
| `vendor/` | `@/lib/vendor/dnd` | dnd-kit |
| `vendor/` | `@/lib/vendor/viewer` | Viewer.js 이미지 뷰어 |
| `vendor/` | `@/lib/vendor/simplebar` | SimpleBar React |
| `vendor/` | `@/lib/vendor/youtube` | react-youtube |
| `vendor/` | `@/lib/vendor/amcharts` | amcharts 5 |
| `vendor/` | `@/lib/vendor/dayjs` | 날짜 처리 |

언어 전환은 번역 JSON을 읽는 구조가 아닙니다. `GlobalTranslator`가 `pageTranslate`를 통해 외부 번역 엔드포인트에 화면 문구를 요청합니다. 장애 시 원문을 복원하고 사용자 재시도 전까지 요청을 중단합니다. 성공 응답만 캐시하며 언어 변경·DOM 변경·언마운트 시 진행 요청을 취소합니다. `useLocale`는 현재 언어와 진행률·오류·재시도 API를 제공합니다.

`RegistryPage`는 서버 전용입니다. 상태·이벤트와 브라우저 API가 필요한 UI에서는 클라이언트 경계를 명시하고, 브라우저 라이브러리 초기화·해제는 커밋 후에 처리합니다.

실제 예제는 [라이브러리 데모](/pub/demo/libs), [공통 UI 가이드](/pub/guide/button), [접근성 가이드](/pub/guide/accessibility)에서 확인할 수 있습니다.
