# 컴포넌트 구조

디자인 시스템 컴포넌트를 역할별로 나눕니다. React(`.tsx`) + 공개 입구 `index.js` 기준입니다.

```
src/components/
  ui/           기본·레이아웃·폼·피드백·데이터·내비게이션·기타
  widget/       AppHeader, AppFooter, AppLayout, TopBanner
  layout/       Header, Footer, Page, PageHeader, LayoutSlot, LayoutContext, PageLayoutVisibility, PageFloating
  providers/    AppProviders
  shared/       컴포넌트가 공유하는 계약 (.ts 만)
  index.js      공개 export
```

## 레이아웃과 기능 모듈 구분

- `src/components/layout/`: 페이지의 헤더·푸터·본문 설정과 레이아웃 슬롯을 연결하는 공통 기반 컴포넌트입니다.
- `src/widgets/b2b/`: GNB·Footer 등 프로젝트 전용 위젯을 구현합니다. `previews/`는 위젯을 개별 주소에서 확인하는 화면입니다.
- `src/modules/common/`, `src/modules/b2b/`: 문의 폼·견적 단계처럼 입력·상태·검증을 묶은 기능 영역을 구현합니다.

화면에서는 `import { Page, Header, Footer } from '@/comp'`로 레이아웃 컴포넌트를 사용합니다.

## PUB와 공통 코드 구분

퍼블리싱 도구·가이드·데모 전용 코드는 `src/screen/pub/` 아래에 모읍니다. 최상위 `widgets/`, `modules/`, `hooks/`, `lib/`에 별도의 `pub/` 폴더를 만들지 않습니다.

- `src/screen/pub/layout/`: `PubHeader`·`GuideLayout`·`DemoLayout`의 화면 배치와 헤더 구성
- `src/screen/pub/widgets/`: 목록·메뉴·문서·미리보기·퍼블리싱 안내 UI
- `src/screen/pub/hooks/`: 메뉴·가이드 제목 훅
- `src/screen/pub/lib/`: 메뉴 병합·코드 예제 생성 로직
- `src/screen/pub/data/`: 가이드·API 설명 데이터
- `src/screen/pub/guide/`, `src/screen/pub/demo/`, `src/screen/pub/index.jsx`: PUB 화면

일반 페이지에서도 사용하는 UI·레이아웃·훅·유틸리티·라이브러리 연동은 공통 위치에 둡니다. 프로젝트 디자인·업무에 종속된 화면과 위젯은 `src/screen/b2b/`, `src/widgets/b2b/`, `src/modules/b2b/`에서 관리합니다.

`PublishingPlaceholder`는 프로젝트 화면 경로에서 사용하더라도 실제 UI 구현 전 화면 정보를 보여 주는 퍼블리싱 작업 도구이므로 PUB 안에 둡니다.

## 표시 제어와 작업 전 안내

- `PageLayoutVisibility`: `meta.banner`·`meta.header`·`meta.footer`·`meta.floating`·`meta.floatingItems`를 공통 레이아웃과 플로팅에 전달합니다. 등록된 화면은 `RegistryPage`에서 연결하며, 퍼블 목록·오류·404 화면에서도 사용합니다. 자체 화면은 렌더하지 않습니다.
- `PublishingPlaceholder`: B2B 화면과 위젯 프리뷰에서 실제 마크업 작업 전에 화면명·ID·URL·하위 링크를 보여 줍니다. 로딩 스켈레톤과는 별개이며 실제 UI를 구현할 때 교체합니다.

## 사용

```js
import { Button, Container, Input } from '@/comp'
```

```jsx
<Button variant="filled" color="primary" size="md" label="확인" />
```

Button API는 `variant` · `color` · `size` · `round` · `block` · `loading` 계약을 따릅니다.

## 헤더 배경과 스크롤 상태

`Header`, `PageHeader`, `AppHeader`는 기본 배경과 스크롤 후 배경을 지원합니다. 공통 기본값은 `AppLayout`의 `headerAppearance`에 지정하며 페이지의 `Header` 설정이 우선합니다.

```jsx
<Header background="transparent" scrolledBackground="#ffffff" className="service-header" />

<Header style={{ '--app-header-bg': 'transparent', '--app-header-bg-scrolled': '#ffffff' }} />
```

SCSS에서도 같은 CSS 변수를 지정할 수 있습니다.

```scss
.service-header {
  --app-header-bg: transparent;
  --app-header-bg-scrolled: #ffffff;
}
.service-header.is-scrolled { box-shadow: 0 2px 12px rgb(0 0 0 / 8%); }
```

헤더의 문서상 시작 위치가 화면 상단을 지나면 `is-scrolled`와 `data-scrolled="true"`가 붙고, 위로 복귀하면 제거됩니다. 상단 배너가 있으면 헤더가 실제 상단에 도달한 뒤 전환합니다. 기존 스크롤 숨김(`is-scroll-hidden`)은 별개로 유지합니다.

옵션을 생략하면 기존 테마를 유지하고, 스크롤 배경만 생략하면 기본 배경을 유지합니다. `style`의 변수가 props보다 우선하며 인라인 변수는 SCSS 변수보다 우선합니다. 하단 메뉴 배경을 별도로 지정하려면 `--app-header-nav-bg`를 사용합니다. 기존 배경 블러를 끄려면 style의 `backdropFilter`·`WebkitBackdropFilter` 또는 SCSS를 지정합니다.

`Header`의 페이지 설정은 이동 시 정리됩니다. 커스텀 헤더는 루트에 `className`과 `style`을 전달해야 공통 외형 설정이 적용됩니다.

## 헤더 위 배너

공통 배너는 `<AppLayout banner={<TopBanner items={banners} storageKey="campaign-id" />}>`로 등록합니다. 페이지별 배너는 `<PageBanner items={banners} />`로 같은 슬롯에 등록하며, 페이지 배너가 공통 배너보다 우선합니다. `meta.banner: false`는 해당 페이지의 배너를 숨깁니다.

PUB의 GuideLayout에서는 배너 슬롯을 숨겨 가이드·데모의 상단에 배너가 나오지 않게 합니다. 본문 안의 TopBanner 미리보기는 그대로 사용할 수 있습니다.

바깥 너비는 기본 `100%`, 가운데 정렬되는 안쪽 최대 너비는 `1200px`, 콘텐츠 최소 높이는 `80px`입니다. `width`, `innerMaxWidth`, `height`, `contentAlign`으로 변경할 수 있습니다. 헤더는 기존처럼 sticky이며 배너는 문서 흐름의 헤더 위에 위치합니다.

```jsx
<PageBanner
  width="100%"
  innerMaxWidth={1200}
  height={80}
  effect="fade"
  storageKey="campaign-2026-11"
  items={[
    { id: 'notice', content: <strong>주요 안내</strong>, href: '/notice' },
    { id: 'event', content: <span>이벤트 안내</span> }
  ]}
/>
```

배너 1개는 슬라이더·전환·자동 재생·이동 버튼 없이 표시합니다. 2개 이상은 기존 Carousel을 사용해 `slide` 또는 `fade` 전환, 자동 재생, 이전·다음, 페이지 번호, 재생·정지를 제공합니다. 기본 전환 간격은 5초이며 `interval`로 조절합니다.

“오늘 하루 열지 않기”를 선택하고 닫으면 브라우저 현지 시간의 다음 자정까지 localStorage에 기록합니다. 캠페인이 바뀌면 `storageKey`도 변경합니다. 체크하지 않고 닫으면 현재 표시만 닫고 새로고침 시 다시 표시합니다. 저장소 사용이 제한되어도 현재 화면은 닫을 수 있습니다.

## 페이지별 플로팅

화면 파일에서 정적인 `export const meta` 객체를 선언합니다. 전체 영역은 `floating`, 항목별 표시는 `floatingItems`에서 `Floating.Item`의 `name`으로 지정합니다. 생략하면 표시합니다.

```jsx
export const meta = {
  header: true,
  footer: true,
  floating: true,
  floatingItems: { chat: false, backTop: true, 'page-help': true }
}
```

공통 항목은 `AppLayout`의 `floating`에 `Floating.Item` 목록으로 전달하고, 배치는 `floatingProps`로 설정합니다. 페이지 전용 버튼·UI는 다음처럼 추가합니다.

```jsx
import { Button, Floating, PageFloating } from '@/comp'

<PageFloating>
  <Floating.Item name="page-help"><Button>페이지 도움말</Button></Floating.Item>
</PageFloating>
```

페이지 이동·언마운트 시 이전 추가 항목과 표시 설정은 정리됩니다. 전체 `floating:false`는 항목별 `true`보다 우선하며, `true`는 등록된 항목의 표시를 허용할 뿐 새 항목을 만들거나 BackTop의 스크롤 조건을 강제하지 않습니다. 항목 이름은 공통·페이지 항목을 통틀어 고유하게 지정합니다. 모든 항목이 숨겨지면 플로팅 컨테이너도 렌더하지 않습니다.

페이지 본문에서 직접 사용하는 `Floating`에도 페이지 meta가 적용됩니다. 컴포넌트 자체의 기본값은 `<Floating meta={{ floatingItems: { chat: false } }}>`로 지정할 수 있으며, 항목별 설정은 페이지 meta가 우선합니다. 기존 `Floating.Item hidden`은 표시를 허용한 항목을 추가로 숨기는 용도로 유지합니다.

### 커스텀 슬롯과 위치 조정

```jsx
<PageFloating
  floatingProps={{ boundary: 'footer', boundaryGap: 20, offsetBottom: 24 }}
  slots={{
    'page-tools': <MyPageTools />,
    'page-notice': <MyPageNotice />
  }}
/>
```

`slots`는 버튼·입력·카드 등 임의 UI를 이름별로 등록합니다. 이름은 `meta.floatingItems`와 `order`에도 사용합니다. `Floating`에 직접 전달하거나 기존 `children`과 함께 사용할 수 있습니다.

| 설정 | 동작 |
| --- | --- |
| `boundary="viewport"` | 기존처럼 뷰포트에 고정합니다. 기본값입니다. |
| `boundary="footer"` | 푸터 상단에서 `boundaryGap`만큼 떨어져 멈춥니다. 푸터가 없거나 숨겨지면 뷰포트 고정을 유지합니다. |
| `boundary="#stop-area"` | 지정한 영역 상단 위에서 멈춥니다. HTMLElement나 `() => ref.current`도 전달할 수 있습니다. |
| `getPosition={callback}` | 기본 좌표를 바탕으로 사용자 정의 좌표를 반환합니다. |

스크롤·창 크기·플로팅 내용·경계 요소·페이지 높이가 바뀌면 위치를 다시 계산합니다. 자동 경계 회피는 `position: fixed` 기준이며, absolute 등 다른 좌표계는 `getPosition`으로 직접 보정합니다.

```jsx
<Floating
  boundary="footer"
  boundaryGap={16}
  getPosition={({ defaultStyle }) => ({ ...defaultStyle, right: 48 })}
  slots={{ custom: <MyCustomUI /> }}
/>
```

`PageFloating.floatingProps`는 해당 페이지에서만 공통 배치 설정을 덮어쓰며, 페이지 이동 시 초기화됩니다. 기존 `style` prop은 계산 결과보다 우선하므로 직접 좌표를 고정하면 자동 경계 조정도 해당 좌표를 덮어쓰지 않습니다.
