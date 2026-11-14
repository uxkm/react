# PUB 코드 구조

퍼블리싱 목록(`/pub`), 컴포넌트 가이드(`/pub/guide`), 라이브러리 데모(`/pub/demo/...`) 전용 구현을 관리합니다. 폴더 이름은 화면·배치·UI·동작·데이터의 역할을 구분합니다. 전체 실행 방법과 프로젝트 구조는 [루트 README](../../../README.md)를 참고합니다.

## 폴더 구성

```text
src/screen/pub/
├── index.jsx                         # /pub 목록 화면과 상태·데이터 연결
├── guide/                            # /pub/guide 소개·컴포넌트·접근성 화면
├── demo/                             # /pub/demo 라이브러리·패턴 예제
├── layout/                           # 목록·가이드·데모의 전체 배치
├── hooks/                            # 가이드 메뉴·브라우저 제목 연결
├── lib/                              # 메뉴 구성·예제 코드 생성 함수
├── data/                             # 소개·접근성·컴포넌트 API 설명
│   └── guide/                        # 컴포넌트별 *ApiSections.js
└── widgets/
    ├── list/                         # 목록 전용 UI와 보조 함수
    │   ├── filter/                   # 검색·폴더 필터·필터 시트
    │   ├── summary/                  # 진행 요약·탭 UI
    │   ├── table/                    # 계층 표·행·링크·비고
    │   ├── state/                    # 로딩·오류 상태
    │   └── lib/                      # 라벨·비고·트리 처리
    ├── navigation/                   # 가이드 좌측 메뉴
    ├── docs/                         # API 표·Markdown 표시
    ├── preview/                      # 실행 예제·코드 보기·오버레이 시연
    └── publishing/                   # 실제 마크업 구현 전 안내
```

`layout/`은 화면 전체의 틀, `widgets/`는 그 안에 배치하는 개별 UI입니다. JSX를 렌더링하지 않는 메뉴 병합·코드 문자열 생성은 `lib/`, React 상태·생명주기를 사용하는 연결은 `hooks/`, 설명 원문은 `data/`에 둡니다.

## 1. `index.jsx` — 퍼블리싱 목록 화면

목록 데이터를 읽고 검색·필터·펼침·비고 모달 상태를 관리하는 화면 진입점입니다. `widgets/list/`의 UI에 데이터와 이벤트를 전달합니다.

| 처리 | 상세 역할 |
| --- | --- |
| 데이터 로드 | `/data/pub/index.json`에서 표시 설정을 읽고, B2B 목록 인덱스에 등록된 분류 JSON을 병렬로 읽습니다. |
| 검색 | 화면명·유형·ID·PageUrl·소스 경로·담당자·일정·상태·기획·디자인·비고를 검색합니다. |
| 목록 상태 | 선택한 폴더, 검색 범위·검색어, 폴더·그룹 펼침, 필터 시트와 비고 모달의 열림을 관리합니다. |
| 진행 표시 | 상태별 집계와 진행률을 계산하고 요약·표에 전달합니다. `SHOW_PROGRESS_META`로 일정·상태·진행률 영역의 표시를 제어합니다. |
| 로딩·오류 | `PubListSkeleton`, `PubLoadError`를 연결하고 재시도를 제공합니다. 스켈레톤 ID는 `pub/index`입니다. |
| 공통 배치 | `PubHeader`, `PageLayoutVisibility`와 공통 탭 제목 유틸리티를 사용합니다. |

작업 상태·담당자·일정·비고 등 실제 목록 내용은 이 파일에 하드코딩하지 않고 `public/data/pub/b2b/`의 JSON을 수정합니다.

## 2. `guide/` — 소개·컴포넌트·접근성 가이드

| 파일·규칙 | 상세 역할 |
| --- | --- |
| `index.jsx` | `/pub/guide` 소개 화면입니다. 루트 README를 `projectReadme.js`로 읽고 `MarkdownDoc`으로 표시합니다. |
| `A11y.jsx` | 접근성 설명과 검토 문서를 연결하는 `/pub/guide/a11y` 화면입니다. |
| `Button.jsx`, `Input.jsx`, `Tabs.jsx` 등 | 해당 공통 컴포넌트를 직접 호출해 옵션별 실행 예제를 보여 줍니다. 예제·코드·API 표를 함께 관리합니다. |
| `Header.jsx`, `TopBanner.jsx`, `Floating.jsx` 등 | 레이아웃·위젯 사용법을 가이드로 보여 줍니다. 실제 공통 구현은 `src/components/`에 있습니다. |

컴포넌트별 API 설명은 `data/guide/{이름}ApiSections.js`, 실제 동작은 `src/components/ui/` 또는 `src/components/widget/`, 외형은 `src/styles/components/`에서 관리합니다. 옵션을 바꾸면 실제 컴포넌트와 예제·설명을 함께 확인합니다.

## 3. `demo/` — 라이브러리·구현 패턴 예제

아래 경로는 `src/screen/pub/demo/` 기준입니다. 라이브러리 래퍼가 있으면 `@/lib/vendor/*`를 사용하며, 각 데모의 초기화·정리·상태 처리는 해당 화면에서 확인합니다.

| 파일 | 시연하는 내용 |
| --- | --- |
| `LibsIndexDemoPage.jsx` | `/pub/demo/libs` 라이브러리 데모 목록 |
| `AjvDemoPage.jsx` | JSON Schema 검증 |
| `AosDemoPage.jsx` | 스크롤 진입 애니메이션 |
| `Base64DemoPage.jsx` | Base64 인코딩·디코딩 |
| `ChartDemoPage.jsx` | 차트 예제 |
| `ClipboardDemoPage.jsx` | 클립보드 복사 |
| `DayjsDemoPage.jsx` | 날짜 처리 |
| `DndDemoPage.jsx` | 드래그·정렬 |
| `FilesizeDemoPage.jsx` | 파일 크기 표시 |
| `FilterScrollDemoPage.jsx` | 필터와 스크롤 연결 패턴 |
| `FullCalendarDemoPage.jsx` | 캘린더 |
| `GsapDemoPage.jsx` | GSAP 애니메이션 |
| `HlsDemoPage.jsx` | HLS 영상 재생 |
| `LodashDemoPage.jsx` | Lodash 유틸리티 |
| `LottieDemoPage.jsx` | Lottie 애니메이션 |
| `SimplebarDemoPage.jsx` | 커스텀 스크롤바 |
| `SortingMenuBasicDemoPage.jsx`, `SortingMenuDemoPage.jsx` | 정렬 메뉴의 기본·확장 예제 |
| `SwiperDemoPage.jsx` | Swiper 슬라이더 |
| `ViewerDemoPage.jsx` | 이미지 뷰어 |
| `WebstompDemoPage.jsx` | STOMP 메시징 연동 |
| `XssDemoPage.jsx` | 입력 콘텐츠 정제 |
| `YoutubeDemoPage.jsx` | YouTube 플레이어 |

## 4. `layout/` — 화면 전체 배치

| 파일 | 상세 역할 |
| --- | --- |
| `index.js` | PubHeader·GuideLayout·DemoLayout의 공개 export 입구입니다. |
| `PubHeader.jsx` | 목록 제목·목록 링크·가이드 새 창 링크를 공통 Header 슬롯에 등록합니다. |
| `GuideLayout.jsx` | 공통 헤더 설정, 좌측 GuideMenu, 카테고리·제목·설명·본문을 배치합니다. 메뉴 표시와 헤더 교체 옵션을 제공합니다. 배너 슬롯은 숨깁니다. |
| `DemoLayout.jsx` | GuideLayout을 조합해 라이브러리 데모의 브랜드·목록 복귀·현재 예제 링크를 통일합니다. |

공통 Header·Footer·Page·LayoutSlot 기반은 `src/components/layout/`을 사용합니다. PUB 전용 레이아웃과 B2B의 `ProjectLayout`은 각각 자신의 영역에서 관리합니다.

## 5. `widgets/list/` — 목록 UI

### 공개 입구와 언어 선택

| 파일 | 상세 역할 |
| --- | --- |
| `index.js` | 목록 화면에서 사용하는 위젯과 라벨·트리 함수를 모아 export합니다. |
| `LanguageSwitcher.jsx` | 기존 import 호환을 위해 공통 `src/components/widget/LanguageSwitcher.jsx`를 재export합니다. 신규 코드는 `@/comp`의 LanguageSwitcher를 사용합니다. |

### `filter/` — 검색과 폴더 선택

| 파일 | 상세 역할 |
| --- | --- |
| `PubSearchBar.jsx` | 검색 범위·검색어 입력과 관련 이벤트를 전달합니다. |
| `FolderFilterBar.jsx` | 전체·폴더별 선택 버튼과 개수를 표시합니다. |
| `PubFilterSheet.jsx` | 좁은 화면에서 폴더를 선택하는 dialog 시트입니다. 공통 모달 훅으로 키보드·초점 처리를 연결합니다. |

### `summary/` — 요약 표시

| 파일 | 상세 역할 |
| --- | --- |
| `PubProgressSummary.jsx` | 집계한 진행 현황과 진행률을 표시합니다. |
| `PubTabs.jsx` | 전달받은 탭을 선택하는 UI입니다. 탭이 한 개 이하면 렌더링하지 않으며, 현재 단일 B2B 프로젝트에서 기기별 탭을 추가하는 설정으로 사용하지 않습니다. |

### `table/` — 계층 표와 상세 정보

| 파일 | 상세 역할 |
| --- | --- |
| `PubTable.jsx` | 표 헤더와 폴더·그룹·화면 행을 조합하고 펼침·비고 이벤트를 연결합니다. |
| `PubGroupRow.jsx` | 하위 화면을 묶는 그룹 행과 펼침 상태를 표시합니다. |
| `PubScreenRow.jsx` | 화면 한 행의 이름·유형·ID·URL·파일 경로·담당자·일정·상태·진행률·기획·디자인·비고를 표시합니다. 링크 항목은 상태·진행률을 `-`로 표시합니다. |
| `PathLinkCell.jsx` | PageUrl·기획·디자인의 링크 셀입니다. 상대 B2B 경로·이전 해시 경로·문자열 또는 객체 링크 필드를 정규화하고 검색용 텍스트도 제공합니다. |
| `RemarkModal.jsx` | 비고 이력을 날짜·작성자·내용으로 보여 주는 모달입니다. |
| `useEllipsisTooltip.jsx` | 말줄임된 텍스트의 툴팁 표시와 관련 속성을 관리합니다. |

### `state/` — 로딩과 오류

| 파일 | 상세 역할 |
| --- | --- |
| `PubListSkeleton.jsx` | 목록 화면의 수동 로딩 배치를 구성합니다. |
| `PubSkeletonPiece.jsx` | 목록 스켈레톤에서 재사용하는 작은 표시 조각입니다. |
| `PubLoadError.jsx` | JSON 로딩 오류 메시지와 재시도 UI입니다. |

### `lib/` — 목록 전용 보조 함수

| 파일 | 상세 역할 |
| --- | --- |
| `publishLabels.js` | 상태 라벨·색상, 폴더·화면 표시명, 유형 라벨을 정합니다. 문자열·배열 형태의 비고를 이력으로 정규화하고 미리보기·검색 텍스트를 만듭니다. |
| `publishTree.js` | depth2·depth3의 그룹·리프를 판별하고 최종 항목 수집·페이지 개수·검색 트리 필터·펼침 키 생성을 처리합니다. `type: 'link'` 항목을 구분합니다. |

## 6. 나머지 `widgets/` — 메뉴·문서·예제·작업 안내

| 폴더·파일 | 상세 역할 |
| --- | --- |
| `navigation/GuideMenu.jsx` | 가이드·위젯·데모의 좌측 메뉴를 표시하고 현재 경로를 반영합니다. |
| `docs/GuideApiDocs.jsx` | API 섹션 데이터를 속성·타입·기본값·설명 표로 표시합니다. |
| `docs/MarkdownDoc.jsx` | 소개·접근성 등의 Markdown 본문을 화면에 표시합니다. |
| `preview/DemoBlock.jsx` | 실행 예제와 코드 보기 토글·복사 기능을 묶는 블록입니다. |
| `preview/LoadOpenOverlayDemo.jsx` | 처음 렌더링할 때 열리고 자동 닫힘을 설정하지 않은 오버레이 예제입니다. |
| `preview/TimedOverlayDemo.jsx` | 실행 버튼으로 예제를 마운트하고 5초 후 닫힘을 확인합니다. |
| `preview/NoticeModalDemo.jsx` | 공지 모달과 다음 자정까지 하루 숨김을 시연합니다. |
| `preview/OverlayA11yDemo.jsx` | 모달·Drawer의 제목·초기 초점·중첩 등 접근성 동작을 확인하는 예제입니다. |
| `publishing/PublishingPlaceholder.jsx` | 실제 마크업 전 화면명·ID·주소·하위 링크를 보여 주는 작업용 안내입니다. 로딩 스켈레톤과 역할이 다릅니다. |

## 7. `hooks/`, `lib/`, `data/` — 동작과 설명 원문

| 파일·폴더 | 상세 역할 |
| --- | --- |
| `hooks/useGuideMenu.js` | `guide-menu.json`을 읽고 생성된 `pubPages`와 병합합니다. 요청을 캐시하고 실패하면 기본 메뉴로 복구합니다. 소개·접근성·데모 홈 경로도 제공합니다. |
| `hooks/useGuideTitle.js` | 가이드 제목과 섹션 이름을 브라우저 탭 제목에 연결합니다. |
| `lib/guideMenu.mjs` | JSON의 기존 분류·순서·이름과 실제 화면 목록을 병합하는 함수입니다. 삭제한 화면은 제외하고 새 화면은 추가 목록에 반영합니다. |
| `lib/pageExampleCode.js` | 가이드에서 보여 줄 페이지 사용 예제 코드를 문자열로 구성합니다. |
| `data/projectReadme.js` | 루트 README를 import하고 소개 레이아웃용 첫 문단과 본문을 분리합니다. 소개 내용 수정은 루트 README에서 합니다. |
| `data/a11yDoc.js` | 접근성 가이드 본문과 검사 문서 안내 원문입니다. 수동 체크리스트 Markdown을 읽어 접근성 본문 안에 삽입합니다. |
| `data/guide/*ApiSections.js` | 컴포넌트별 API 설명 데이터입니다. 예: `buttonApiSections.js`, `carouselApiSections.js`, `topBannerApiSections.js`. 파일은 설명을 제공하며 컴포넌트 동작은 구현하지 않습니다. |

## PUB 밖에서 연결하는 파일

PUB 전용 소스는 이 폴더에 모으되, Next.js 라우트·공개 JSON·스타일·생성기는 각자의 위치를 사용합니다.

| 위치 | 연결 역할 |
| --- | --- |
| `src/app/pub/` | URL·정적 경로·metadata·스타일 진입점 연결 |
| `public/data/pub/index.json` | 목록 제목·B2B 표시 설정 |
| `public/data/pub/b2b/index.json` | 목록 분류 순서와 읽을 JSON 파일 |
| `public/data/pub/b2b/*.json` | 화면 계층과 작업 정보 |
| `public/data/pub/guide-menu.json` | 가이드 메뉴의 componentGroups·widgetItems·데모 분류와 표시명 |
| `public/data/pub/docs/a11y/` | 수동 체크리스트와 검토 문서 |
| `src/styles/pub.scss`, `src/styles/pages/pub/_index.scss` | 목록 스타일 진입점과 본문 스타일 |
| `src/styles/demo.scss`, `src/styles/pages/pub/demo/` | 가이드·데모 배치와 예제 스타일 |
| `src/generated/pub-pages.js` | 실제 가이드·데모 화면의 자동 생성 목록 |
| `src/generated/registry-component.js`, `registry-demo.js`, `registry-ids.js` | 화면 import·정적 경로·제목 생성물 |
| `scripts/generate/registry.mjs` | 화면 탐색·레지스트리 생성 |
| `scripts/generate/validate-project.mjs` | PUB의 프로젝트 코드 의존성과 정적 배포 제약 검증 |

### 목록 데이터가 화면에 표시되는 흐름

```text
public/data/pub/index.json                 목록 이름·B2B 설정
  → public/data/pub/b2b/index.json         분류별 JSON의 순서
    → common.json·main.json 등            화면 트리·작업 정보
      → screen/pub/index.jsx              로드·검색·집계·상태
        → widgets/list/                   필터·요약·표·비고 UI
```

폴더 JSON의 `depth2`에는 화면 항목이나 `depth3` 배열을 가진 그룹이 들어갑니다. 화면 항목의 `pageUrl`은 열 주소, `filePath`는 작업 소스 경로이며 서로 용도가 다릅니다. 상태는 `done`·`active`·`pending`·`delayed`를 사용합니다. `excludeFromStats`는 외부 링크·중복 항목 등의 진행률 집계 제외에 사용합니다.

### 가이드·데모가 URL과 메뉴로 연결되는 흐름

```text
guide/ 또는 demo/ 화면 파일
  → generate:registry
    → generated의 화면 import·주소·제목·pubPages
      → app/pub의 라우트가 RegistryPage로 화면 렌더링
      → useGuideMenu가 guide-menu.json과 pubPages 병합
        → GuideMenu에 분류·표시명·현재 경로 표시
```

화면 파일이 URL 등록의 원본이고 `guide-menu.json`은 메뉴 분류·순서·표시명의 원본입니다. 생성물을 직접 수정하지 않습니다. 위젯 가이드 항목은 `widgetItems`로 관리하며 URL은 `/pub/guide/...`를 유지합니다.

## 추가·수정할 때의 규칙

1. 공통 UI의 실제 동작은 `src/components/`, B2B 디자인·업무는 `screen/b2b/`·`widgets/b2b/`·`modules/b2b/`에서 수정합니다. PUB는 프로젝트 화면·위젯·모듈·스타일·화면 Registry를 import하지 않습니다. 목록에는 JSON의 경로를 표시합니다.
2. PUB 전용 구현은 이 폴더의 역할별 하위 폴더에 둡니다. 최상위 `src/widgets`·`modules`·`hooks`·`lib`에 별도 `pub/` 폴더를 만들지 않습니다. 일반 페이지에서 재사용하는 코드는 공통 위치를 사용합니다.
3. 가이드·데모 화면에는 `GuideLayout` 또는 `DemoLayout`을 사용합니다. 예제 블록은 `DemoBlock`, API 설명은 `GuideApiDocs`로 조합합니다.
4. 하위 화면은 재귀 등록됩니다. 예: `guide/forms/Input.tsx` → `/pub/guide/forms/input`. 하위 `index.tsx`는 폴더 주소를 사용합니다. `routeId`로 경로, `guideLabel`로 메뉴 이름을 지정할 수 있습니다.
5. `skeleton`, `widgets`, `modules`, `shared`, `data`, 밑줄로 시작하는 보조 폴더·파일은 가이드·데모 라우트에서 제외됩니다. 화면 내부 보조 구현을 별도 파일로 뺄 때 이 규칙을 따릅니다.
6. 화면 추가·삭제 후 `npm run generate:registry`로 등록·경계를 검증합니다. 개발 서버에서는 감시기가 자동 갱신합니다. 메뉴의 원하는 분류는 `guide-menu.json`에서 지정합니다.

```jsx
import { GuideLayout } from '@/screen/pub/layout'
import { DemoBlock } from '@/screen/pub/widgets/preview/DemoBlock'
import { Button } from '@/comp'

export default function ExampleGuide () {
  return (
    <GuideLayout title="예제" description="버튼 사용 방법">
      <DemoBlock title="기본" code={'<Button label="확인" />'}>
        <Button label="확인" />
      </DemoBlock>
    </GuideLayout>
  )
}
```
