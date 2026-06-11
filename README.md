# UXKM React

React 19 + Vite 기반의 퍼블리싱·문서형 학습 사이트입니다. `pnpm`으로 실행·빌드합니다.

## 실행·검증

```bash
pnpm install
pnpm dev
```

```bash
pnpm lint
pnpm build
```

- `pnpm build`: `scripts/optimize-images.mjs`로 `src`·`public` 이미지 최적화 검사·압축 후 Vite 빌드.

## 루트 디렉터리

| 경로                              | 역할                                                                                                  |
| --------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `index.html`                      | Vite 진입 HTML                                                                                        |
| `vite.config.js`                  | Vite·React 플러그인, 에디터 관련 `manualChunks`, 개발 서버에서 정적 확장자 변경 시 풀 리로드 플러그인 |
| `eslint.config.js`                | ESLint 설정                                                                                           |
| `package.json` / `pnpm-lock.yaml` | 의존성·스크립트 (`packageManager`: pnpm)                                                              |
| `public/`                         | 빌드에 그대로 복사되는 정적 자산(이미지, `code_samples` 등)                                           |
| `scripts/`                        | 빌드 보조 스크립트(이미지 최적화)                                                                     |
| `src/`                            | 애플리케이션 소스                                                                                     |
| `dist/`                           | 빌드 산출물(로컬 빌드 시 생성)                                                                        |

## `src/` 구조

```
src/
├── app/                 # 라우팅·Suspense 루트
│   ├── App.jsx
│   └── RouteLoadingFallback.jsx
├── main.jsx             # 엔트리: 전역 SCSS/CSS, 디바이스 클래스·사이드바 상태 초기화 후 App 마운트
├── layouts/
│   └── AppLayout.jsx    # 공통 레이아웃(헤더·푸터·문서 사이드·콘텐츠 리스트·에디터 영역 등)
├── pages/               # 페이지 컴포넌트(URL과 연결, 아래 라우팅 규칙 참고)
│   ├── MainPage.jsx
│   ├── 404.jsx
│   ├── publishing/      # HTML/CSS/SCSS 퍼블리싱 문서
│   ├── accessibility/   # 접근성 섹션
│   ├── buildSystem/     # 빌드 시스템 관련 페이지
│   └── updates/         # 업데이트·공지류 페이지
├── components/
│   ├── layout/          # SiteHeader, SiteFooter, PublishingTopNav 등
│   ├── docs/            # 문서 UI: PageSideMenu, ContentList, DocsPageTemplate 등
│   ├── code/            # CodeMirror 기반 UkEditor, UkEditorTarget
│   └── common/          # PageMeta, PageArticle, Header 등 공통 조각
├── hooks/               # 스크롤 스파이, 헤더 고정, iframe 높이, 탭 스크롤 보정 등
├── data/                # GNB·푸터 메뉴, HTML 마이그레이션 맵, 접근성 네비 등 JSON/JS 데이터
├── utils/               # 디바이스 감지, 코드 샘플 경로, 앱 초기화, 헤더 레이어 DOM 등
├── assets/css/          # 사이트 공통 SCSS(예: uk_common, uk_sub)
├── styles/              # 앱 전역 `app.scss`, `global.css`
```

### `src/data/` 파일

| 파일                         | 역할                                                                                                                                                                             |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `gnbLite.json`               | 사이트 GNB·사이드 구조의 단일 소스. Publishing(HTML/CSS/SCSS)·접근성·빌드 시스템·Updates 등 depth2~4 링크·표시명을 담고, 아래 JS 모듈들이 이 JSON을 읽어 파생 데이터를 만듭니다. |
| `siteNavigation.js`          | `AppLayout` 등에서 쓰는 상단·푸터 메뉴: `topMenus`, `footerDepth1Menus`, `footerDepth2Menus` export.                                                                             |
| `htmlMigrationMap.js`        | HTML 퍼블리싱 카테고리별 페이지 목록·제목·`converted` 플래그(레거시 대비 전환 표시). 문서 네비·마이그레이션 UI에 사용.                                                           |
| `accessibilityNavigation.js` | `gnbLite`의 접근성 트리를 그룹·섹션·페이지 목록 형태로 가공한 `accessibilityNavigation`, 경로로 페이지를 찾는 `findAccessibilityPage` export.                                    |
| `publishingTitles.js`        | `gnbLite`에서 HTML/CSS/SCSS 단원·페이지 표시명을 뽑아 `getPublishingSectionTitle`, `getPublishingPageTitle`로 제공(경로 세그먼트만 있을 때 제목 보강).                           |
| `migrationStatus.js`         | `gnbLite` 메뉴에 등장하는 Publishing·접근성 페이지 수와, 규칙에 맞는 `*Page.jsx` 구현 파일 존재 여부를 집계한 `migrationStatus` 배열 export(진행률·남은 건수 등 표시용).         |

### `src/utils/` 파일

| 파일                       | 역할                                                                                                                                                                                                                            |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `deviceDetect.js`          | UA 기반으로 기기·OS·브라우저 클래스를 판별하고, 기존 SCSS가 기대하던 `<html>` 클래스(`.device`, `.desktop`, `.chrome` 등)를 부여. `main.jsx`에서 `applyDetectClassesToHtml()`로 마운트 전 실행.                                 |
| `codeSamples.js`           | `public/code_samples/`를 `/code_samples/...`로 fetch. `getCodeSampleUrl`, `loadCodeSample`(캐시), `clearCodeSampleCache` — 에디터·문서에서 예제 HTML 로드 시 사용.                                                              |
| `appInit.js`               | React 마운트 전 1회 실행 유틸. `restoreSidebarCollapsedState`: `sessionStorage`의 사이드 닫힘 상태를 읽어 `<html>`에 `side_close` 반영(첫 페인트 깜빡임 방지). 상수 `SIDE_TOGGLE_STORAGE_KEY`, `SIDE_TOGGLE_HTML_CLASS` export. |
| `headerLayerDom.js`        | 헤더 전역 레이어(검색·GNB 등) 열림 시 `hd_layer_open` 클래스·`overflow`·`.uk_wrap`/`.uk_header` 폭 고정 등 DOM 잠금(`lockHeaderLayerDom` / `unlockHeaderLayerDom`).                                                             |
| `headerLayerController.js` | `SiteHeader`가 `registerHeaderLayerCloseHandler`로 닫기 핸들러를 등록하고, `useGlobalEscClose` 등이 `requestCloseHeaderLayers()`로 레이어를 닫을 때 쓰는 얇은 브리지 모듈.                                                      |

### `src/hooks/` 파일

| 파일                             | 역할                                                                                                                                                                                                                      |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `useFixedTopLink.js`             | 문서 본문 `.top_link`가 스크롤로 헤더 아래로 지나가면 `.fixed` 토글(레거시 `uk_sub.js` 대응). 폭이 좁은 구간에서는 본문과 겹치지 않도록 고정 비활성화. `AppLayout`에서 1회 마운트.                                        |
| `useScrollSpy.js`                | 고정 헤더 기준선 아래로 들어온 마지막 헤딩 id를 반환. `ContentList` 활성 항목·앵커 하이라이트와 맞추기 위한 뷰포트 기반 스크롤 스파이.                                                                                    |
| `useScrollToTopOnRouteChange.js` | 라우트 변경 시 상단으로 스크롤, 문서 앵커 해시면 헤더 높이를 고려해 해당 요소로 이동. `#gsc.*`(Google CSE)는 앵커로 취급하지 않음. 최초 하드 리로드 1회는 건너뜀. `tabMenuScroll` 상태면 `useTabMenuScrollAdjust`에 위임. |
| `useGoogleCseDefaultHash.js`     | 해시가 없을 때 `#gsc.tab=0`을 `replace`로 붙여 Google 맞춤검색 탭 상태와 호환. 이미 앵커 해시가 있으면 덮어쓰지 않음.                                                                                                     |
| `useTabMenuScrollAdjust.js`      | 탭 링크가 `location.state.tabMenuScroll`과 저장된 `scrollY`로 이동한 경우, 라우트 전환 후 세션에 저장된 스크롤 위치를 복원(레거시 `tab_menu_scroll_adjust` 대응).                                                         |
| `useSitemapDepth3Masonry.js`     | 사이트맵 레이어가 열려 있을 때만 `masonry-layout`으로 `ul.depth3` 배치를 재계산(리사이즈·ResizeObserver 연동).                                                                                                            |
| `useGlobalEscClose.js`           | `html.hd_layer_open`일 때 Escape로 헤더 레이어 닫기 — `headerLayerController`의 `requestCloseHeaderLayers` 호출.                                                                                                          |
| `useHeaderFixedOnScroll.js`      | 스크롤이 소량(10px) 넘어가면 `.uk_header`에 `.fixed` 부여(레거시 `hd_common` 대응).                                                                                                                                       |
| `useResponsiveHtmlClass.js`      | 뷰포트 폭에 따라 `<html>`에 `pc` / `mb` 토글(767px·스크롤바 보정). 공통 SCSS의 `html.pc` / `html.mb` 규칙과 연동. 레이아웃 트리에서 1회 마운트 권장.                                                                      |
| `useIframeAutoHeight.js`         | `.kmtemp_resize_iframe` 래퍼 안 iframe 로드 후 본문 높이만큼 래퍼 높이 조정·`resize_ok` 클래스 부여. 동일 출처만 측정 가능. 라우트(`pathname`)마다 재실행.                                                                |

### `public/`와의 관계

- 문서·예제에서 참조하는 정적 HTML 등은 `public/code_samples/` 등에 두고, 빌드 후에도 동일 경로로 서빙됩니다.
- 이미지는 `public/images/` 등에 위치합니다.

## 라우팅 (`src/app/App.jsx`)

1. **명시 라우트**  
   일부 경로는 `explicitRouteEntries`에 직접 정의됩니다(예: `/`, HTML 일부 시작 섹션, CSS/SCSS 플레이스홀더, 접근성 인덱스, 와일드카드 리다이렉트, `*` 404).

2. **자동 라우트**  
   `import.meta.glob('../pages/**/*.jsx')`로 잡힌 페이지 중, 명시 목록에 없는 파일은 파일 경로에서 URL을 유도합니다(세그먼트 정규화 규칙은 `App.jsx`의 `normalizeRouteSegment`, `modulePathToRoutePath` 참고).

3. **자동 라우트에서 제외**  
   경로 세그먼트에 `_`로 시작하는 폴더, `__name__` 형태, `__tests__`/`tests`, `drafts`(대소문자 무관)가 포함되면 해당 모듈은 라우트에 올라가지 않습니다. 임시·유틸 JSX는 이 규칙을 활용하세요.

새 **기능 페이지**를 추가할 때는 보통 `src/pages/...`에 `.jsx`를 두면 자동 라우트에 포함되며, **리다이렉트·전용 URL 고정**이 필요하면 `App.jsx`의 명시 라우트와 `explicitPageFiles`를 함께 수정합니다.

## `src/pages/publishing/` 개요

- **`html/`**  
  번호·주제별 폴더(예: `01-htmlStart`, `09-forms`, `11-models`). 각 파일이 한 주제(요소·문서형) 페이지를 담당하는 형태입니다.

- **`css/`**, **`scss/`**  
  단원별 하위 폴더가 있으며, 미구현 구간은 플레이스홀더 페이지로 연결되는 경로가 `App.jsx`에 정의되어 있습니다.

### 페이지 `.jsx` 안에서의 구조 (예시)

퍼블리싱 HTML 문서는 대부분 **`usePageMeta` + 레이아웃 상수 + 본문 마크업 + (선택) `UkEditorTarget`** 패턴을 따릅니다. 구체적인 전개는 `src/pages/publishing/html/01-htmlStart/01-html_start.jsx`를 참고하면 됩니다.

| 단계              | 설명                                                                                                                                                                                                                                                      |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1. import         | `usePageMeta`(`PageMeta.jsx`). 코드 예제가 있으면 `Suspense`·`lazy`로 `UkEditorTarget`을 늦게 불러와 초기 청크를 줄입니다.                                                                                                                                |
| 2. `PAGE_LAYOUT`  | `mainClass`, `type`, `info`, `note`, `sideMenu`, `reference`, `contentList`, `depth3Last`, `bottomEditor` 등. `usePageMeta`가 `document.body`의 `dataset`·클래스에 반영하고, `AppLayout`이 사이드 메뉴·콘텐츠 목차·하단 에디터 영역 표시 여부를 맞춥니다. |
| 3. 메타           | `usePageMeta({ title, description, keyword, layout: PAGE_LAYOUT })` — 문서 제목·설명·키워드·OG 관련 메타와 레이아웃 플래그를 한 번에 동기화합니다.                                                                                                        |
| 4. 본문 JSX       | 요약은 `blockquote.uk_note`, 본론은 `section`·`h2`·목록 등 BEM에 가까운 클래스명으로 작성.                                                                                                                                                                |
| 5. 살아 있는 예제 | `view_editor`/`edit_code` 구역에 `Suspense`로 감싼 `UkEditorTarget`: `target` 값은 예전 `/_code_samples/`와 동일한 상대 경로로, 실제 파일은 `public/code_samples/` 아래에 둡니다(`loadCodeSample` 유틸 참고).                                             |
| 6. export         | `export default function …Page()` 형태로 기본보내기 — 자동 라우트가 이 컴포넌트를 해당 URL에 연결합니다.                                                                                                                                                  |

아래는 위 파일을 **축약한 뼈대**입니다(본문 섹션은 `…`로 생략). **`//` / `{/* */}` 주석**이 각 블록의 역할을 짚습니다.

```jsx
// ---------------------------------------------------------------------------
// 1) import — 페이지 전용으로 쓰는 React API와 메타 훅
// ---------------------------------------------------------------------------
import { Suspense, lazy } from "react"; // 코드 에디터 영역만 늦게 로드할 때 사용
import { usePageMeta } from "@/components/common/PageMeta"; // title·meta·body dataset 동기화

// ---------------------------------------------------------------------------
// 2) 무거운 하위 컴포넌트 lazy — 초기 번들에서 CodeMirror 쪽을 분리
// ---------------------------------------------------------------------------
const UkEditorTarget = lazy(() => import("@/components/code/UkEditorTarget"));

// ---------------------------------------------------------------------------
// 3) PAGE_LAYOUT — AppLayout이 읽는 본문·에디터·목차 UI 스위치 (body dataset 등)
// ---------------------------------------------------------------------------
const PAGE_LAYOUT = {
  mainClass: "html_start", // body에 붙는 페이지별 본문 클래스(스타일 스코프)
  type: "publishing", // publishing / accessibility 등 상위 네비·레이아웃 분기용
  info: true, // 상단/본문 주변 "정보" 블록 노출 여부 등
  note: false, // uk_note 스타일 요약 블록을 레이아웃 옵션으로 켤지(페이지마다 다름)
  sideMenu: true, // 왼쪽 PageSideMenu(문서 트리) 표시
  reference: true, // 참고 링크/영역 표시
  contentList: true, // 오른쪽 목차(ContentList) 표시
  depth3Last: false, // 목차 depth3 마지막 항목 스타일/동작 보정 여부
  bottomEditor: true, // 하단 고정 에디터 슬롯 사용 여부
};

// ---------------------------------------------------------------------------
// 4) 페이지 컴포넌트 — 기본 export 이름은 파일 경로와 무관하게 *Page 권장
// ---------------------------------------------------------------------------
function HtmlStartPage() {
  // 문서 제목·SEO 메타·OG 태그·layout → body data-* 반영, 언마운트 시 이전 값 복원
  usePageMeta({
    title: "HTML이란?", // document.title 및 og:title에 반영(접미사 UXKM 등은 훅 내부 규칙)
    description: "…", // meta description·og:description
    keyword: "…", // meta keywords(없으면 빈 문자열 처리)
    layout: PAGE_LAYOUT, // 위 상수를 그대로 넘김
  });

  return (
    <>
      {/* ------------------------------------------------------------------- */}
      {/* 5) 요약 블록 — role="note", 상단 요약/주의에 공통 클래스 uk_note 사용 */}
      {/* ------------------------------------------------------------------- */}
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>{/* …요약 문단… */}</p>
      </blockquote>

      {/* ------------------------------------------------------------------- */}
      {/* 6) 본문 섹션 — indent, 제목 색(t_blue) 등 기존 SCSS 유틸 조합 */}
      {/* ------------------------------------------------------------------- */}
      <section className="mt_xxl indent">
        <h2 className="ml_mn t_blue">소제목</h2>
        {/* …ol/ul, 문단 등 본문… */}
      </section>

      {/* ------------------------------------------------------------------- */}
      {/* 7) 라이브 코드 예제 구역 — view_editor / edit_code 로 에디터 스타일 적용 */}
      {/* ------------------------------------------------------------------- */}
      <section className="view_editor edit_code mt_xxl">
        {/* 에디터 카드 상단 제목 */}
        <h2 className="ve_tit">예제 제목</h2>
        {/* lazy 청크 로딩 중: 빈 에디터 높이만 확보해 레이아웃 점프 방지 */}
        <Suspense
          fallback={<div className="uk_editor min_height_350" aria-hidden />}
        >
          <UkEditorTarget
            // public/code_samples/ 아래 경로와 동일(서빙 URL은 /code_samples/...)
            target="html/01-htmlStart/1.1.html_basic.html"
            mode="htmlmixed" // CodeMirror 언어 모드(html + css + js 혼합)
            result // true면 미리보기(iframe 결과) 패널 표시
            className="indent mt_ml min_height_350 mb_result_height_250" // 에디터 래퍼 여백·최소 높이
            browser="default" // 결과 iframe UA/뷰포트 프리셋
            theme="ayu-mirage" // 에디터 테마
            title="HTML 기본 구조" // UI에 보이는 예제 제목
            minHeight="350px" // 에디터 영역 최소 높이
          />
        </Suspense>
      </section>

      {/* ------------------------------------------------------------------- */}
      {/* 8) 정적 이미지 — public/images/ 는 빌드 후 /images/ 로 제공 */}
      {/* ------------------------------------------------------------------- */}
      <figure className="img_figure mt_l">
        <img src="/images/html/01_html_01.png" alt="설명" />
        <figcaption>캡션</figcaption>
      </figure>
    </>
  );
}

// ---------------------------------------------------------------------------
// 9) default export — React Router lazy(import) 및 자동 라우트가 이 컴포넌트를 페이지로 사용
// ---------------------------------------------------------------------------
export default HtmlStartPage;
```

**다른 패턴:** 접근성 등 일부 페이지는 `DocsPageTemplate`으로 요약(`summary`)과 `children`만 넘기고, 내부에서 `PageMeta`를 선택적으로 쓰는 형태입니다. 예: `src/pages/accessibility/a11y/04-a11yCag/04-kioskEnvironment.jsx`.

## README 유지보수 가이드

기능적으로 의미 있는 파일·폴더가 추가되거나 책임이 바뀔 때, **동일 PR 또는 직후 커밋**에서 이 README를 함께 갱신하는 것을 권장합니다.

| 변경 유형                                              | README에 반영할 내용 예시                                                               |
| ------------------------------------------------------ | --------------------------------------------------------------------------------------- |
| 새 최상위 디렉터리 또는 빌드·도구 설정                 | 루트 표에 행 추가, 스크립트·설명 보강                                                   |
| 새 `src/pages` 영역(새 도메인 폴더)                    | `src/` 트리 또는 별도 소절에 폴더 목적 한 줄 설명                                       |
| 라우팅 규칙 변경                                       | 「라우팅」절 수정(명시 vs 자동, 제외 규칙)                                              |
| 공통 UI·데이터 계층 추가                               | `components/` 트리 또는 표에 항목 추가. `data`/`utils`/`hooks`는 아래 전용 표에 행 추가 |
| 정적 자산 규칙 변경                                    | `public/` 설명 업데이트                                                                 |
| 페이지 관용 구조·`PAGE_LAYOUT`·`usePageMeta` 계약 변경 | 「페이지 `.jsx` 안에서의 구조」절과 예시 코드 동기화                                    |

문서에 넣을 내용은 **폴더/파일이 하는 역할 한 줄**과 **다른 코드가 어떻게 참조하는지** 정도면 충분합니다. 세부 구현은 코드 주석에 두고, README는 탐색용 개요를 유지합니다.
