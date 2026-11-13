# 퍼블리싱 목록

Next.js 16 App Router와 React 19 기반 퍼블리싱 작업 환경입니다. 기기별 화면, 공통 UI, 라이브러리 데모를 한 프로젝트에서 관리하고 정적 사이트로 배포합니다.

## 프로젝트 구성

- **화면 작업**: 단일 프로젝트 화면과 스켈레톤을 `src/screen/`에서 관리합니다.
- **UI 가이드**: 공통 컴포넌트의 사용 예제·속성·디자인 토큰을 확인합니다.
- **퍼블리시 목록**: 화면별 경로·작업 상태·비고를 JSON으로 관리합니다.
- **검사 도구**: ESLint, TypeScript와 Playwright 기반 일반 회귀 검사를 사용합니다.

| 경로 | 용도 |
| --- | --- |
| [소개](/pub/guide) | 프로젝트 환경과 작업 방법 |
| [접근성](/pub/guide/accessibility) | KWCAG 2.2 검사 항목과 검수 흐름 |
| [컴포넌트 예제](/pub/guide/button) | 공통 UI 가이드의 시작 화면 |
| [라이브러리 데모](/pub/demo/libs) | 외부 라이브러리 사용 예제 |
| [퍼블리시 목록](/pub) | 화면 목록·진행 상태 |
| `/b2b` | 프로젝트 메인과 하위 화면 |

## 개발 환경

아래 패키지 버전은 현재 `package-lock.json` 기준입니다. Node.js는 `.nvmrc`와 `.node-version`에 맞춥니다.

| 항목 | 현재 구성 |
| --- | --- |
| Node.js | `24.11.1` 고정 · 패키지 최소 조건 `20.9.0` |
| npm | `10` 이상 |
| Next.js | `16.4.5` · App Router |
| React / React DOM | `19.3.1` |
| TypeScript | `5.9.3` · JSX와 TSX 병행 |
| 번들러 | 개발·프로덕션 빌드 모두 **Turbopack** |
| 스타일 | Sass Embedded + PostCSS·Autoprefixer |
| 코드 검사 | ESLint 9 · Flat Config · 경고 허용 안 함 |
| 브라우저 검사 | Playwright `1.65.0` · 일반 회귀 검사 |
| 배포 | `output: 'export'`로 생성한 `out/` 정적 파일 |

지원 대상은 Chrome·Edge·Firefox 111 이상, Safari·iOS Safari 16.4 이상, Android Chrome 111 이상입니다. `browserslist`는 브라우저 버전을 기준으로 설정합니다.

## 시작하기

프로젝트 루트에서 실행합니다. 다음 명령은 macOS·Linux 셸 기준입니다.

```bash
nvm use
npm ci
npm run dev
```

개발 주소는 `http://localhost:8090`입니다. `http://127.0.0.1:8090`도 사용할 수 있습니다. 개발·정적 미리보기 서버는 기본적으로 IPv4와 IPv6를 함께 수신하며, IPv6를 지원하지 않는 환경에서는 IPv4로 실행합니다. OS의 `HOSTNAME` 환경변수는 수신 주소로 사용하지 않습니다. 특정 주소에서만 수신하려면 `BIND_HOST`를 지정합니다. 로컬 인증서가 있으면 `https://localhost:8443`도 함께 제공합니다.

| 작업 | 명령 | 동작 |
| --- | --- | --- |
| 일반 개발 | `npm run dev` | 레지스트리 생성 후 SCSS를 직접 읽는 Turbopack 서버 실행 |
| 스타일만 빌드 | `npm run build:styles` | SCSS를 일반 CSS와 압축 CSS로 변환 (프로덕션용) |
| 화면 레지스트리 갱신 | `npm run generate:registry` | 화면 로더·주소 목록·제목 생성 |
| 프로덕션 빌드 | `npm run build` | 레지스트리·스타일 생성 후 Turbopack으로 정적 사이트 빌드 |
| 빌드 미리보기 | `npm run start` | `out/`을 HTTP와 선택적 HTTPS로 제공 |
| HTTP 미리보기 | `npm run start:http` | `serve`로 `out/`을 HTTP 8090에서 제공 |
| 전체 코드 검사 | `npm run lint` | React·Next.js 규칙 검사 · 경고도 실패 처리 |
| 타입 검사 | `npm run typecheck` | TypeScript 검사 · 산출물 출력 없음 |

`npm run dev`는 실행 시 Registry를 생성하고 파일 감시를 계속 실행합니다. 화면·폴더를 추가·삭제·이름 변경하면 라우트와 메뉴를 자동 갱신합니다. 이미지·JSON 등 정적 파일 변경도 브라우저에 자동 반영합니다. 라우트 구조·설정·SCSS 진입점이 바뀌면 감시기가 개발 서버를 자동 재시작합니다. 개발 중에는 SCSS를 직접 읽으며 `src/styles/css/`는 생성하지 않습니다.

## 라우트와 화면 소스

URL은 `src/app/`에서 정의하고, 실제 화면은 `src/screen/`에 둡니다.

```text
.
├── src/
│   ├── app/                # URL·레이아웃·메타데이터·로딩·오류 화면
│   ├── screen/             # 프로젝트 화면·PUB 가이드·데모
│   ├── widgets/            # common/ 및 프로젝트별 위젯
│   ├── modules/            # common/ 및 프로젝트별 기능 영역
│   ├── components/         # 공통 UI·레이아웃·Provider
│   ├── hooks/              # 상태·hydration·키보드·DOM 관련 훅
│   ├── lib/                # 라우팅·정적 경로·외부 라이브러리 연동
│   ├── generated/          # 화면 레지스트리 생성물
│   ├── styles/             # SCSS 원본과 CSS 생성물
│   ├── config/             # 스켈레톤 등 공통 설정
│   ├── utils/              # 문자열·이미지·DOM 등 유틸리티
│   └── assets/             # 번들에 포함할 소량 에셋
├── public/                 # 폰트·이미지·퍼블리시 목록 JSON·가이드 문서
│   └── data/pub/docs/       # 접근성 참고 문서·수동 체크리스트
├── scripts/                # 코드 생성·스타일 빌드·로컬 서버·검사
├── tests/browser/          # 라우팅·번역·메타데이터 등 일반 회귀 검사
└── .vscode/                # 편집 도구 설정(settings.json)
```

| 계층 | 작업 위치와 역할 |
| --- | --- |
| 라우트 | `src/app/**/page.jsx`에서 URL 매개변수·정적 경로·제목을 처리합니다. |
| 화면 | `src/screen/b2b/`에서 JSX 화면과 스켈레톤을 작성합니다. |
| 가이드·데모 | `src/screen/pub/guide/`, `src/screen/pub/demo/`에서 예제를 관리합니다. |
| 공통 컴포넌트 | `src/components/`에서 TSX 기반 UI를 작성하고 `@/comp`로 가져옵니다. |
| 레이아웃 기반 | `src/components/layout/`에서 Header·Footer·Page와 레이아웃 슬롯을 관리합니다. |
| 기능 모듈 | `src/modules/common/`, `src/modules/b2b/`에서 입력·상태·검증을 묶은 기능 영역을 관리합니다. |
| PUB 전용 코드 | `src/screen/pub/` 안에 화면·위젯·모듈·훅·메뉴 처리 로직을 모읍니다. 공통 UI·레이아웃·페이지에서 재사용할 기능은 기존 공통 폴더에 둡니다. |
| 생성물 | `src/generated/registry-*.js`는 스크립트로 생성하며 직접 편집하지 않습니다. |

일반 화면 소스는 Next.js의 예약 라우팅 경로인 `src/pages/`에 두지 않습니다.

동적 화면의 라우트는 빌드 시 `await params`로 매개변수를 읽고 `RegistryPage`로 화면 모듈을 불러옵니다. `generateStaticParams`는 빌드할 주소를 만들고, `generateMetadata`는 페이지 제목을 생성합니다. 화면의 정적인 `Page`·`GuideLayout` 제목이나 `pageTitle` export가 제목 생성에 사용됩니다.

상태·이벤트·브라우저 API가 필요한 컴포넌트에는 `'use client'` 경계를 둡니다. 서버 렌더링과 첫 hydration의 상태를 맞추며, 데이터 로딩 상태는 실제 요청과 연결합니다.

## 주요 URL

| URL 형태 | 설명 |
| --- | --- |
| `/` | 프로젝트가 있으면 `/b2b`, 없으면 `/pub`로 이동 |
| `/b2b` | 프로젝트 메인 |
| `/b2b/{menuId}` | 프로젝트 메뉴 메인 |
| `/b2b/{menuId}/{screen}` | 프로젝트 상세 화면 |
| `/pub/guide` | 현재 소개 페이지 |
| `/pub/guide/accessibility` | 접근성 가이드 |
| `/pub/guide/{name}` | 컴포넌트 가이드 |
| `/pub/demo/{name}` | 라이브러리·패턴 데모 |
| `/pub` | 퍼블리시 목록 |

`device` 표시는 `B2B`이며 모든 화면은 `/b2b` 아래에 있습니다. `/b2b/main`처럼 프로젝트 경로 뒤에 `main`이 오는 주소는 프로젝트 루트로 이동합니다.

## 스타일 작업

SCSS 원본은 `src/styles/`에 있습니다.

| 모드 | 스타일 처리 |
| --- | --- |
| `dev` | Turbopack이 SCSS를 직접 컴파일 (`src/styles/css/` 미생성) |
| `build` | 스타일을 먼저 생성하고 `.min.css`로 정적 사이트 빌드 |

스타일 엔트리는 `scripts/build/style-entries.mjs`에서 관리합니다. 공통 `index`, `pub`, `demo`와 프로젝트 페이지 엔트리를 자동 탐색하며 빌드 출력 위치는 `src/styles/css/`입니다. 공용 변수·믹스인이 필요한 SCSS에는 `@use`를 명시합니다.

화면에서는 SCSS를 import합니다. `build`는 `next.config.ts`의 Turbopack 별칭을 통해 압축 CSS로 연결합니다.

## 퍼블리시 목록과 정적 자산

- 프로젝트 설정: `public/data/pub/index.json`
- 화면 목록·상태·비고: `public/data/pub/b2b/`의 JSON
- 가이드 메뉴: `public/data/pub/guide-menu.json`
- 폰트·이미지: `public/fonts/`, `public/images/`
- 예시·샘플·데모용 이미지: `public/images/@dummy/`에 보관하고 `/images/@dummy/파일명`으로 참조합니다.

퍼블리시 목록 JSON과 화면 파일 레지스트리는 별도로 관리합니다. 목록·메뉴 데이터는 브라우저에서 읽으며, 화면 추가 시 목록과 레지스트리에 필요한 내용을 각각 반영합니다.

## 페이지별 공통 영역 표시

화면의 `export const meta`에서 `banner`, `header`, `footer`, `floating`을 `true`·`false`로 제어합니다. `floatingItems: { chat: false, backTop: true }`처럼 플로팅 내부 항목도 `Floating.Item name`별로 제어할 수 있습니다. 생략한 설정은 표시이며, 전체 `floating:false`가 항목별 표시보다 우선합니다.

헤더 위 배너는 `TopBanner`로 만들고 페이지별로는 `PageBanner` 슬롯에 등록합니다. 기본 너비 100%·안쪽 최대 너비 1200px·최소 높이 80px이며, 여러 배너는 슬라이드·페이드 전환, 단일 배너는 정적 표시로 동작합니다. 닫기와 다음 자정까지 하루 숨김을 제공합니다. [상단 배너 가이드](/pub/guide/top-banner)에서 확인할 수 있습니다.

헤더는 `<Header background="transparent" scrolledBackground="var(--color-header-bg-scrolled)" />`처럼 기본·스크롤 배경을 분리할 수 있습니다. 스크롤 색상은 테마 변수 `--color-header-bg-scrolled`로 CSS에서 바꿉니다. `className`과 `style`도 전달하며, SCSS에서는 `--app-header-bg`, `--app-header-bg-scrolled`, `.is-scrolled`로 조정합니다. [헤더 가이드](/pub/guide/header)에서 확인할 수 있습니다.

페이지에만 필요한 플로팅 버튼·UI는 `PageFloating` 안에 `Floating.Item`을 넣어 공통 플로팅에 추가합니다. 사용 방법은 [컴포넌트 구조](src/components/README.md#페이지별-플로팅)와 [Floating 가이드](/pub/guide/floating)를 참고하세요.

커스텀 UI는 `PageFloating slots={{ 'page-tools': <MyPageTools /> }}`처럼 이름별로 넣을 수 있습니다. `floatingProps={{ boundary: 'footer', boundaryGap: 20 }}`는 푸터 위 정지, `boundary: 'viewport'`는 기존 화면 고정입니다. CSS 선택자·요소·함수로 다른 경계를 지정하거나 `getPosition`으로 좌표를 직접 보정할 수도 있습니다.

## 언어 전환

한국어 원문을 기본으로 태국어·베트남어·러시아어·영어를 선택할 수 있습니다. 화면 문구 번역은 `GlobalTranslator`와 `src/lib/pageTranslate.js`가 브라우저에서 처리합니다.

- 언어 상태·지원 목록: `src/lib/i18n.js`
- 언어 선택 UI: `src/components/widget/LanguageSwitcher.jsx`
- 상태와 전환 API: `src/hooks/useLocale.js`, `src/lib/localeStore.js`

선택한 언어는 `localStorage`에 저장하며 마운트 후 복원합니다. `html`의 `lang`과 `data-locale`도 선택에 맞춰 변경합니다. 원문으로 전환하면 한국어 UI를 다시 표시합니다.

현재는 번역 JSON 파일 대신 Google 번역 엔드포인트로 화면 문구를 요청하는 방식입니다. 외부 네트워크가 필요하며, 서비스 오류·시간 초과 시 화면을 원문으로 복원하고 자동 요청을 중단합니다. 언어 선택 영역의 ‘다시 시도’ 또는 다른 언어 선택으로 재요청할 수 있습니다. 동시 요청은 최대 2개이며 성공한 번역만 캐시합니다. 코드·번역 제외 영역은 번역 대상에서 제외합니다.

## 코드 품질·브라우저 검사

`npm run lint`는 React·Next.js 코드 규칙을 검사하며 `--max-warnings=0`을 적용합니다. 접근성 전용 정적 검사와 axe 검사는 사용하지 않습니다.

```bash
npm run lint
npm run typecheck
npm run build
```

라우팅·번역·메타데이터 등 일반 브라우저 회귀 검사는 다음 명령으로 실행합니다.

```bash
npx playwright install chromium
npm run test:browser
```

테스트는 `tests/browser/`, 보고서는 `reports/browser/html/`, 산출물은 `test-results/browser/`에서 관리합니다. 외부 검증 서버는 `BROWSER_TEST_BASE_URL`, 테스트 포트는 `BROWSER_TEST_PORT`로 지정합니다.

접근성 제작 기준과 수동 체크리스트는 [접근성 가이드](/pub/guide/accessibility)에서 참고할 수 있습니다.

## VS Code 사용

| 파일 | 설정 내용 |
| --- | --- |
| `.vscode/settings.json` | ESLint 저장 시 자동 수정, 프로젝트 TypeScript, 검색·감시 제외 |

JS/TS 파일에서 `TypeScript: Select TypeScript Version` → `Use Workspace Version`을 선택합니다. 개발·빌드·검사는 터미널에서 `package.json`의 npm 명령으로 실행합니다.

JS/TS 저장 시 ESLint가 수정 가능한 항목을 처리합니다. JSON·JSONC는 기본 포매터로 정렬합니다. `.next`는 탐색기에 표시하되 검색·파일 감시에서 제외합니다.

## 설정과 실행 스크립트

| 파일 | 역할 |
| --- | --- |
| `next.config.ts` | `NextConfig` 타입을 사용하는 Next.js·Turbopack·Sass 설정 |
| `eslint.config.mjs` | React·Next.js 코드 검사 규칙 |
| `postcss.config.mjs` | CSS 후처리 설정 |
| `playwright.config.mjs` | 브라우저·테스트 서버·결과 보고서 설정 |
| `scripts/registry.mjs` | 화면 레지스트리·정적 주소·제목 생성 |
| `scripts/build/build-styles.mjs` | SCSS → CSS 변환 |
| `scripts/build/prepare-next.mjs` | Next 메타데이터 호환 패치 |
| `scripts/build/style-entries.mjs` | SCSS 엔트리 목록 |
| `scripts/serve-next.mjs` | 개발용 HTTP·HTTPS 서버 |
| `scripts/serve-static.mjs` | `out/` 정적 미리보기 서버 |

`.mjs`는 Node.js가 ES Module로 실행하는 파일입니다. Next.js 설정은 타입 검사를 위해 `.ts`를 사용하고, 도구 설정과 실행 스크립트에는 지원되는 `.mjs` 형식을 사용합니다.

## 로컬 HTTPS

인증서가 없으면 HTTP만 실행합니다. HTTPS가 필요하면 프로젝트 루트에서 해당 PC용 인증서를 생성합니다.

```bash
mkcert -install
mkdir -p certificates
mkcert -key-file certificates/localhost-key.pem \
  -cert-file certificates/localhost.pem \
  localhost 127.0.0.1 ::1
```

`certificates/localhost-key.pem`과 `certificates/localhost.pem`이 있으면 개발·정적 미리보기 서버가 HTTPS 8443도 제공합니다. 인증서는 Git에서 제외합니다. 포트는 `PORT`, `HTTPS_PORT`로 변경합니다.

## 빌드·배포·정리

`npm run build`로 생성한 `out/`을 정적 호스팅에 배포합니다. 호스팅 서버는 확장자 없는 경로를 해당 `.html`로 연결하고 없는 경로에는 `404.html`을 반환하도록 설정합니다. 로컬 검증에는 `npm run start`를 사용합니다.

정적 export에 포함될 주소는 빌드 시 확정합니다. 요청 시점 서버 처리나 호스팅의 HTTP 리다이렉트가 필요하면 해당 배포 구성을 별도로 적용합니다.

| 명령 | 정리 대상 |
| --- | --- |
| `npm run clean` | `.next`, `out`, 생성 CSS·캐시 |
| `npm run clean:modules` | `node_modules` |
| `npm run clean:all` | 빌드 산출물·캐시와 `node_modules` |

코드와 컴포넌트 구조는 `src/components/README.md`, 라이브러리 연동 목록은 `src/lib/README.md`에서 확인할 수 있습니다.

## 단일 프로젝트와 PUB 독립성

B2B 페이지는 `페이지명/index.tsx` 구조로 작성합니다. 예를 들어 `src/screen/b2b/company/ethics/compliance/index.tsx`는 `/b2b/company/ethics/compliance`로 접속하며 URL에 `index`를 붙이지 않습니다. 각 페이지의 스켈레톤은 `페이지명/skeleton/indexSkeleton.tsx`에 둡니다. 위젯 프리뷰도 같은 폴더 구조를 사용합니다.

프로젝트 화면은 전체메뉴 디자인의 `main`, `contents`, `service`, `insight`, `contact`, `company` 구조에 맞춘 TSX 60개로 관리합니다. 루트 `/b2b`는 `src/screen/b2b/main/index.tsx`를 사용하며, 예를 들어 AX 소개는 `/b2b/contents/ax/overview`, 기업교육문의는 `/b2b/contact/education`, 회사소개는 `/b2b/company/intro`입니다. 이전의 `corpeduc`, `about` 및 문의 화면에 사용하던 `insight` 경로는 새 분류로 변경했습니다.

공통 위젯·레이어의 작업용 프리뷰는 `src/widgets/b2b/previews`에 분리합니다. Registry는 `src/widgets/b2b/previews`를 `/b2b/common/...` 프리뷰 경로로 자동 등록하며, 이 폴더의 생성·삭제도 개발 감시기에 반영됩니다. PUB는 이 프리뷰 컴포넌트를 import하지 않고 JSON의 경로만 표시합니다. 메인 구성 요소·견적 단계·문의 입력 영역은 부모 페이지의 섹션으로 관리하고, 외부 링크와 자동 메일 연계 항목은 정적 페이지로 만들지 않습니다. 외부 링크·메일 항목의 `excludeFromStats`는 퍼블리싱 진행률 집계에서 제외합니다.

프로젝트 PUB 목록은 `public/data/pub/b2b/{main,contents,service,insight,contact,company,common}.json`에 있습니다. 화면 ID·작업 정보·기획/디자인 링크·기존 비고를 대응 화면에 유지하고, 새 화면은 대기 상태로 등록했습니다. 메뉴 계층과 화면별 경로는 `src/screen/b2b/README.md`에 정리했습니다. 전체메뉴 이미지는 메뉴 구성 시안이므로 화면 본문은 퍼블리싱 작업용 골격이며, 실제 시안 마크업은 각 TSX 파일에서 구현합니다. `npm run test:project`로 전체메뉴 기준 60개 파일, 정적 라우트, PUB 내부 경로·섹션 앵커, 작업 정보 보존을 검사합니다.

각 프로젝트 화면의 수동 스켈레톤은 해당 화면과 같은 폴더의 `skeleton/`에 둡니다. 예를 들어 `main/index.tsx`는 `main/skeleton/indexSkeleton.tsx`, `contents/ax/overview/index.tsx`는 `contents/ax/overview/skeleton/indexSkeleton.tsx`를 사용합니다. 위젯 프리뷰도 각 프리뷰 폴더의 `skeleton/` 안에 파일별 스켈레톤을 둡니다. 이 파일들은 보조 컴포넌트이며 라우트로 등록하지 않습니다.

기본은 `auto` 모드입니다. 새 디자인이 확정되면 해당 스켈레톤 파일의 레이아웃을 수정하고 `src/config/skeleton.ts`에 해당 화면을 `manual`로 등록합니다. 각 화면은 `manual`일 때만 전용 스켈레톤을 전달하므로 자동 모드의 첫 방문 폴백에서도 전용 디자인을 사용하지 않습니다. 실제 표시는 `PageLoading`의 `loading` 상태에 따릅니다. 현재 작업용 화면의 `loading={false}`는 실제 데이터 로딩 상태가 생길 때 연결합니다.

```ts
// src/config/skeleton.ts — 디자인이 확정된 화면만 추가
export const SKELETON_PAGE_MODE: Record<string, SkeletonMode> = {
  'b2b/contents/ax/overview': 'manual'
}
```

```bash
npm run project:sync
npm run validate:project
npm run test:project
```

단일 프로젝트의 폴더는 `src/app/b2b`, `src/screen/b2b`, `src/widgets/b2b`, `src/modules/b2b`, `src/styles/pages/b2b`, `public/data/pub/b2b`, `public/assets/b2b`입니다. 작업용 빈 폴더는 그대로 유지하며, 없는 공통 위젯·모듈·이미지 폴더와 B2B 위젯·모듈·자산 폴더는 Registry 생성 시 자동으로 만듭니다.

공통 컴포넌트는 `src/components`, 공통 위젯·모듈은 각 `common/` 폴더에 둡니다. 프로젝트 추가·삭제 명령과 기기별 프로젝트 탭은 사용하지 않습니다.

`public/data/pub/index.json`의 `b2b`에서 목록 이름·설명·표시 이름을 관리합니다. `id`와 `base`는 각각 `b2b`, `b2b/`로 고정합니다. `b2b.generated.json`과 `src/generated/b2b.js`에는 단일 프로젝트 메타데이터만 저장합니다.

`src/app/b2b/page.jsx`, `layout.jsx`, `[...slug]/page.jsx`는 생성기가 관리합니다. 실제 UI는 `src/screen/b2b`에 작성하며 `main/index.tsx`를 메인으로 사용합니다. `dev`, `build`에서 라우트와 설정을 자동 생성·검사하고 개발 중에는 파일 변경을 감시합니다.

PUB 구조와 공통 컴포넌트는 프로젝트에 관계없이 동일하게 유지합니다. `/pub`, `/pub/guide`, `/pub/guide/{name}`, `/pub/demo/{name}`을 제공하며, PUB는 프로젝트 화면·위젯·모듈·스타일·Registry를 가져오지 않습니다. `validate:project`가 직접·간접 의존성과 정적 배포 제약을 검사합니다. 프로젝트 스타일은 `src/styles/pages/b2b`, 이미지는 `public/assets/b2b`에서 관리합니다.


정적 export의 동적 경로는 `generateStaticParams`로 열거하고 `dynamicParams = false`로 제한합니다. 서버의 `params`는 Promise이므로 `await`한 뒤 사용합니다. 서버에서 요청 시점의 `searchParams`를 읽으면 정적 export를 할 수 없으므로, 쿼리가 필요한 UI는 클라이언트에서 읽습니다. `useSearchParams`는 `Suspense`로 감쌉니다. Server Actions, 요청 시점의 cookies/headers, 런타임 API·동적 라우트는 사용하지 않습니다. 빌드 시 실행되는 Server Component와 Registry의 서버 렌더링은 유지합니다.

참고: [Next.js 정적 export](https://nextjs.org/docs/app/guides/static-exports), [page의 비동기 params·searchParams](https://nextjs.org/docs/app/api-reference/file-conventions/page).

## 자동 생성 파일과 수정 위치

`src/generated/`는 원본 화면과 설정으로부터 생성합니다. 직접 수정하지 않고 아래 원본을 수정한 뒤 `npm run generate:registry`로 갱신합니다. `dev`, `build`에서도 자동 실행하며, 개발 서버의 파일 감시기는 변경 시 다시 생성합니다.

| 생성 파일 | 생성 함수·스크립트 | 수정할 원본과 역할 |
| --- | --- | --- |
| `src/generated/b2b.js` | `scripts/project.mjs` → `syncProject()` | `public/data/pub/index.json`의 `b2b`, `src/screen/b2b/` 존재 여부. 단일 B2B 메타데이터이며 화면 폴더가 없으면 `null`입니다. |
| `src/generated/registry-b2b.js` | `scripts/registry.mjs` → `buildProject()` | `src/screen/b2b/`, `src/widgets/b2b/previews/`. 화면 import와 `meta`를 등록합니다. |
| `src/generated/registry-component.js` | `scripts/registry.mjs` → `buildPubPages('guide')` | `src/screen/pub/guide/`. 공통 컴포넌트 가이드 import와 `meta`를 등록합니다. |
| `src/generated/registry-demo.js` | `scripts/registry.mjs` → `buildPubPages('demo')` | `src/screen/pub/demo/`. 데모 import와 `meta`를 등록합니다. |
| `src/generated/registry-ids.js` | `scripts/registry.mjs` | 위 화면들의 B2B 경로 배열 `b2bRoutes`, 가이드·데모 ID와 제목입니다. 화면 파일명, `pageTitle`, `routeId`를 원본에서 수정합니다. |
| `src/generated/pub-pages.js` | `scripts/registry.mjs` | 가이드·데모 화면 목록과 `guideLabel`. 메뉴 분류·순서는 `public/data/pub/guide-menu.json`에서 관리합니다. |
| `src/generated/registry.js` | `scripts/registry.mjs` | 가이드·데모 레지스트리만 묶는 공통 진입점입니다. 생성 방식을 바꾸려면 해당 스크립트를 수정합니다. |

`public/data/pub/b2b.generated.json`과 `src/app/b2b/{page.jsx,layout.jsx,[...slug]/page.jsx}`도 `syncProject()`가 생성합니다. 실제 화면은 `src/screen/b2b`에서 수정합니다. 루트 `index.jsx` 또는 `index.tsx`가 있으면 메인으로 우선 사용하고, 없으면 `main/index.tsx`를 사용합니다. 두 방식 모두 `/b2b`로 열며 `/b2b/main`은 `/b2b`로 이동합니다.

설정은 `b2b` 객체 하나만 지원합니다. 이전 `tabs`, `project`, `projects` 설정과 WEB·MOBILE·project 전용 폴더는 검증 오류로 알립니다. 이전 이름의 생성 메타데이터와 사용하지 않는 `registry-*.js`는 재생성 시 정리합니다. 재생성은 내용이 달라진 파일만 갱신합니다.

## 빈 메타데이터 컨테이너

`htmlLimitedBots: /.*/`로 메타데이터 스트리밍을 비활성화한 현재 구성에서는 Next.js의 빈 `<div hidden>` 메타데이터 래퍼 대신 Fragment를 사용합니다. `scripts/build/prepare-next.mjs`가 설치 후 및 `dev`·`build` 시작 전에 Next.js의 CJS·ESM 메타데이터 모듈에 동일한 호환성 패치를 적용합니다. 메타 태그와 Suspense 경계는 유지합니다. 정적 export와 메타데이터 스트리밍 비활성 설정을 전제로 하며, 해당 설정을 바꾸면 패치를 먼저 검토해야 합니다. 브라우저에서 React 소유 DOM을 사후 삭제하지 않습니다. Next.js 업데이트로 대상 코드가 달라지면 스크립트가 오류를 내므로 패치를 검토한 뒤 업데이트합니다.

## 개발 파일 감시

`npm run dev`는 SCSS 직접 로딩 모드로 파일 감시기를 실행합니다.

| 대상 | 변경 반영 |
| --- | --- |
| `src/screen/pub/guide`, `src/screen/pub/demo` | 하위 JSX·TSX 화면 생성·삭제·이름 변경 시 Registry·정적 경로·메뉴 갱신 |
| `src/app`, 프로젝트 화면 폴더 | 라우트·프로젝트 추가·삭제 감지 및 개발 서버 자동 재시작 |
| `src/components`, `hooks`, `lib`, `widgets`, `modules` 등 | Next Fast Refresh로 코드 변경 반영 |
| `src/styles`와 소스 폴더의 SCSS | 신규 진입점 자동 발견. UI 모드는 CSS 재컴파일 및 삭제된 CSS 산출물 정리 |
| `public` 전체 | 이미지·폰트·동영상·아이콘·CSS·JSON 등의 생성·수정·삭제·이름 변경 후 브라우저 새로고침 |
| 소스에 포함된 이미지·JSON 등 정적 에셋 | 브라우저 새로고침으로 변경 반영 |
| Next·PostCSS·TypeScript 설정, `src/config`, 환경 변수, 스크립트 | 개발 서버 자동 재시작 |

`src/screen/pub/guide/forms/Input.tsx`는 `/pub/guide/forms/input`, `src/screen/pub/demo/charts/ExampleDemoPage.tsx`는 `/pub/demo/charts/example`로 등록됩니다. 하위 폴더의 `index.jsx`·`index.tsx`는 해당 폴더 주소로 등록됩니다. `routeId` export로 경로를 지정하고 `guideLabel` export로 메뉴 이름을 지정할 수 있습니다. 빈 폴더는 페이지로 등록하지 않습니다. 가이드 루트 `Index.jsx`는 기존 `/pub/guide`에서 사용하며, `skeleton`, `widgets`, `modules`, `shared`, `data`, 밑줄로 시작하는 보조 폴더·파일은 가이드·데모 라우트에서 제외합니다.

`guide-menu.json`의 기존 분류·순서·표시명을 유지합니다. 파일이 삭제된 항목은 메뉴에서 제외하며, 새 파일은 「추가 화면」 그룹에 자동으로 표시합니다. 원하는 분류가 있으면 JSON에 해당 항목을 추가합니다.

변경 처리는 debounce와 직렬 실행으로 묶습니다. 생성 파일은 내용이 달라졌을 때만 원자적으로 교체합니다. `src/generated`, `src/styles/css`, `src/styles/dist`, `b2b.generated.json`, `.next`, `out`, `node_modules`는 감시 입력에서 제외해 재생성 순환을 방지합니다. 네이티브 파일 이벤트와 750ms 주기의 스냅샷 검사를 함께 사용하므로 이벤트 누락·네이티브 감시 제한이 있는 환경에서도 동작합니다. 일시적인 소스 오류가 발생해도 감시기는 유지되며 다음 저장 시 다시 처리합니다.

정적 export는 기존과 같이 `npm run build`로 생성합니다. 개발용 새로고침 채널은 개발 서버에서만 제공하며 배포 파일에는 서버 API를 추가하지 않습니다.

```bash
npm run test:watch          # 파일 이벤트·처리 순서·오류 복구·메뉴 검사
npm run test:project       # 프로젝트 및 재귀 guide/demo 라우트 검사
npm run test:watch:browser  # 격리된 dev 서버에서 실제 파일·브라우저 갱신 검사
```
