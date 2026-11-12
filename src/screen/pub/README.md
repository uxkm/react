# PUB 코드 구조

퍼블리싱 목록·가이드·데모 전용 코드를 이 폴더에서 관리합니다. 일반 페이지에서도 재사용하는 UI·레이아웃·훅·유틸리티는 공통 소스를 사용합니다.

| 경로 | 역할 |
| --- | --- |
| `index.jsx` | 퍼블리싱 목록 화면과 목록 상태 관리 |
| `guide/` | 컴포넌트 가이드 화면 |
| `demo/` | 라이브러리 데모 화면 |
| `layout/` | 전체 화면 배치와 헤더 구성: `PubHeader`, `GuideLayout`, `DemoLayout` |
| `widgets/list/` | 목록의 검색·필터·표·진행 요약·오류·로딩 UI |
| `widgets/navigation/` | 가이드 메뉴 |
| `widgets/docs/` | API 표와 마크다운 문서 표시 |
| `widgets/preview/` | 미리보기와 코드 보기 블록 |
| `widgets/publishing/` | 실제 UI 구현 전 안내(`PublishingPlaceholder`) |
| `hooks/` | PUB 메뉴와 가이드 제목 훅 |
| `lib/` | 메뉴 병합과 코드 예제 문자열 생성 |
| `data/` | 가이드·API 설명 데이터 |

레이아웃과 개별 위젯은 각각의 역할에 맞는 경로에서 가져옵니다.

```jsx
import { GuideLayout } from '@/screen/pub/layout'
import { DemoBlock } from '@/screen/pub/widgets/preview/DemoBlock'
import { wrapPageExample } from '@/screen/pub/lib/pageExampleCode'
```

`layout/`은 공통 `src/components/layout/`의 헤더·푸터·페이지 슬롯 기능을 활용합니다. 프로젝트 고유 위젯과 화면은 PUB 안에 두지 않습니다.

좌측 메뉴의 기본 UI 분류는 `public/data/pub/guide-menu.json`의 `componentGroups`, Header·TopBanner 등 별도의 위젯 분류는 `widgetItems`에서 관리합니다. 위젯 항목은 컴포넌트 분류와 자동 추가 목록에서 제외하며, 페이지 URL은 기존 `/pub/guide/...`를 유지합니다.
