import { usePageMeta } from "@/components/common/PageMeta";
import CodeBlock from "@/components/code/CodeBlock";
import { IMG } from "@/config/path";

const PAGE_LAYOUT = {
  mainClass: "scss_start",
  type: "publishing",
  info: false,
  note: false,
  sideMenu: true,
  reference: true,
  contentList: true,
  depth3Last: false,
  bottomEditor: false,
};

const PAGE_DATA = {
  title: "레이아웃 시스템과 반응형 구조",
  description:
    "SCSS로 레이아웃 시스템과 반응형 구조를 구성하는 방법을 알아봅니다. App Layout, Grid/Flex 기반 레이아웃, Breakpoint 변수 정의와 활용 방법을 상세히 설명합니다.",
  keyword:
    "레이아웃 시스템, layout system, 반응형, responsive, breakpoint, scss 미디어쿼리, grid layout, flex layout",
};

function LayoutSystemResponsivePage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          레이아웃 시스템은 <b>페이지 구조를 체계적으로 관리</b>하는 핵심
          요소입니다.
          <br />
          반응형을 &quot;여기저기 흩어진 미디어쿼리&quot;가 아닌 구조 레벨에서
          제어하면, 유지보수성과 일관성이 크게 향상됩니다.
        </p>
        <p className="mt_s">
          이 페이지에서는 App Layout(Header/Main/Footer), Grid/Flex 기반
          레이아웃, Breakpoint 변수 정의와 활용 방법을 상세히 알아봅니다.
        </p>
      </blockquote>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">레이아웃 시스템이란?</h2>
        <p className="mt_l">
          <b className="t_blue">레이아웃 시스템</b>은 페이지의 전체 구조를
          정의하고 관리하는 시스템입니다.
          <br />
          Header, Main, Footer 등의 영역과 그 안에서의 Grid, Flex 레이아웃을
          체계적으로 구성합니다.
          <br />
          반응형은 컴포넌트 안에서 처리하는 것이 아니라 레이아웃 레벨에서
          결정되므로, 레이아웃 시스템에 반응형 로직을 포함시켜야 합니다.
        </p>

        <dl className="dl_dot_lst mt_l">
          <dt className="mb_s">
            <span className="font-16">레이아웃 중심 반응형 설계</span>
            <br />
            <span className="weight-400">
              반응형을 컴포넌트 단위가 아닌 레이아웃 단위로 설계해야 하는
              이유입니다.
            </span>
          </dt>
          <dd>
            <b>일관성 유지</b>: 모든 페이지에서 동일한 breakpoint와 레이아웃
            변화 적용
          </dd>
          <dd>
            <b>유지보수성</b>: breakpoint 변경 시 한 곳만 수정하면 전체에 반영
          </dd>
          <dd>
            <b>예측 가능성</b>: 레이아웃 기준으로 반응형 동작을 예측하고 디버깅
            가능
          </dd>
          <dd>
            <b>확장성</b>: 새로운 레이아웃 패턴 추가 시 기존 구조를 확장하여
            사용
          </dd>
        </dl>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">Breakpoint 변수</h2>
        <p className="mt_l">
          Breakpoint는 <b>디바이스 크기에 따라 레이아웃이 변경되는 지점</b>
          입니다.
          <br />
          픽셀 값이 아니라 의미 있는 이름으로 정의하면, 코드의 가독성이 향상되고
          유지보수가 쉬워집니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">Breakpoint 정의</h3>
          <p className="mt_m">
            실무에서 사용하는 일반적인 breakpoint를 의미 있는 이름으로
            정의합니다.
          </p>
          <CodeBlock title="_breakpoints.scss" language="scss" className="mt_m">
            {`// Breakpoint 토큰
$breakpoint-sm: 576px;   // 작은 모바일
$breakpoint-md: 768px;   // 태블릿
$breakpoint-lg: 992px;   // 작은 데스크톱
$breakpoint-xl: 1200px;  // 큰 데스크톱
$breakpoint-xxl: 1400px; // 매우 큰 데스크톱

// 또는 모바일 퍼스트 방식 (min-width)
$breakpoint-xs: 0;
$breakpoint-sm: 576px;
$breakpoint-md: 768px;
$breakpoint-lg: 992px;
$breakpoint-xl: 1200px;`}
          </CodeBlock>
          <p className="mt_ms">
            Breakpoint는 디바이스 타입보다는 <b>레이아웃이 변경되는 의미</b>로
            정의하는 것이 좋습니다.
            <br />
            예를 들어, &quot;태블릿&quot;보다는 &quot;2단 레이아웃에서 3단
            레이아웃으로 변경되는 지점&quot;이 더 명확합니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">Breakpoint 믹스인</h3>
          <p className="mt_m">
            Breakpoint를 쉽게 사용할 수 있도록 믹스인을 만듭니다.
          </p>
          <CodeBlock
            title="_mixins-breakpoint.scss"
            language="scss"
            className="mt_m"
          >
            {`@use "../tokens/breakpoints" as bp;

// min-width 미디어쿼리 믹스인
@mixin breakpoint-up($name) {
  $min: map-get((
    sm: bp.$breakpoint-sm,
    md: bp.$breakpoint-md,
    lg: bp.$breakpoint-lg,
    xl: bp.$breakpoint-xl
  ), $name);

  @media (min-width: $min) {
    @content;
  }
}

// max-width 미디어쿼리 믹스인
@mixin breakpoint-down($name) {
  $max: map-get((
    sm: bp.$breakpoint-sm - 1px,
    md: bp.$breakpoint-md - 1px,
    lg: bp.$breakpoint-lg - 1px,
    xl: bp.$breakpoint-xl - 1px
  ), $name);

  @media (max-width: $max) {
    @content;
  }
}`}
          </CodeBlock>
          <p className="mt_ms">
            믹스인을 사용하면{" "}
            <code className="t_blue">@media (min-width: 768px)</code> 대신{" "}
            <code className="t_blue">@include breakpoint-up(md)</code>처럼 의미
            있는 이름으로 작성할 수 있습니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">Breakpoint 사용 예시</h3>
          <p className="mt_m">
            정의한 breakpoint 믹스인을 실제 레이아웃에 적용하는 방법입니다.
          </p>
          <CodeBlock title="_grid.scss" language="scss" className="mt_m">
            {`@use "../mixins/breakpoint" as bp;

.grid {
  display: grid;
  grid-template-columns: 1fr;  // 모바일: 1열

  @include bp.breakpoint-up(md) {
    grid-template-columns: repeat(2, 1fr);  // 태블릿: 2열
  }

  @include bp.breakpoint-up(lg) {
    grid-template-columns: repeat(3, 1fr);  // 데스크톱: 3열
  }
}`}
          </CodeBlock>
          <p className="mt_ms">
            이렇게 하면 breakpoint 값이 변경되어도 믹스인 내부만 수정하면
            되므로, 모든 레이아웃에 일괄 적용됩니다.
          </p>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">App Layout (Header / Main / Footer)</h2>
        <p className="mt_l">
          앱의 전체 구조를 정의하는 레이아웃입니다.
          <br />
          Header, Main, Footer 영역을 명확히 구분하고, 각 영역의 역할과 스타일을
          정의합니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">기본 구조</h3>
          <p className="mt_m">
            Header, Main, Footer를 포함한 기본 앱 레이아웃 구조입니다.
          </p>
          <CodeBlock title="_layout-app.scss" language="scss" className="mt_m">
            {`@use "../tokens/spacing" as spacing;

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-height: 100dvh;
  // dvh란? : device viewport height로 모바일 기기의 경우 스크롤 이동에 따라 height값이 변하는 경우가 종종 있습니다.
  // 이 경우 dvh를 사용하여 변화하는 height 값에 대응할 수 있습니다.
  // CSS에서 같은 속성을 여러 번 선언하면, 브라우저가 지원하는 마지막 선언이 적용됩니다.
  // dvh를 지원하는 브라우저: 100dvh 적용 (나중 선언이므로)
  // dvh를 지원하지 않는 브라우저: 100vh 적용 (dvh가 무시되므로 이전 선언인 vh가 적용됨)
}

.app__header {
  flex-shrink: 0;
  padding: spacing.$spacing-4;
  background-color: #ffffff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
}

.app__main {
  flex: 1;
  padding: spacing.$spacing-4;
  background-color: #ffffff;
}

.app__footer {
  flex-shrink: 0;
  padding: spacing.$spacing-4;
  background-color: #f8f9fa;
  border-top: 1px solid rgba(0, 0, 0, 0.125);
}`}
          </CodeBlock>
          <p className="mt_ms">
            <code className="t_blue">flex: 1</code>을 사용하여 Main 영역이 남은
            공간을 모두 차지하도록 하고, Header와 Footer는 항상 상하에
            고정되도록 합니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">반응형 App Layout</h3>
          <p className="mt_m">
            화면 크기에 따라 Header와 Main의 레이아웃을 변경합니다.
          </p>
          <CodeBlock title="_layout-app.scss" language="scss" className="mt_m">
            {`@use "../mixins/breakpoint" as bp;
@use "../tokens/spacing" as spacing;

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-height: 100dvh;

  @include bp.breakpoint-up(lg) {
    flex-direction: row;  // 데스크톱: 가로 배치
  }
}

.app__header {
  flex-shrink: 0;
  padding: spacing.$spacing-4;
  background-color: #ffffff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);

  @include bp.breakpoint-up(lg) {
    width: 240px;  // 데스크톱: 고정 너비 사이드바
    border-right: 1px solid rgba(0, 0, 0, 0.125);
    border-bottom: none;
    box-shadow: 0.125rem 0 0.25rem rgba(0, 0, 0, 0.075);
  }
}

.app__main {
  flex: 1;
  padding: spacing.$spacing-4;

  @include bp.breakpoint-up(lg) {
    padding: spacing.$spacing-6;  // 데스크톱: 더 큰 패딩
  }
}`}
          </CodeBlock>
          <p className="mt_ms">
            모바일에서는 세로 배치(Header 위, Main 아래), 데스크톱에서는 가로
            배치(Header 왼쪽, Main 오른쪽)로 변경됩니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">반응형 App Layout 적용 예시</h3>
          <p className="mt_m t_blue">
            ※ 코드펜에서는 SCSS 파셜을 사용할 수 없으므로, 토큰과 레이아웃
            스타일을 하나의 SCSS 파일에 통합해야 합니다.
          </p>
          <iframe
            className="codepen mt_m"
            height={760}
            style={{ width: "100%" }}
            scrolling="no"
            title="Untitled"
            src="https://codepen.io/uxkm/embed/MYeWjyG?default-tab=css%2Cresult&theme-id=dark"
            frameBorder="no"
            loading="lazy"
            allowTransparency
          >
            See the Pen{" "}
            <a href="https://codepen.io/uxkm/pen/MYeWjyG">Untitled</a> by UXKM (
            <a href="https://codepen.io/uxkm">@uxkm</a>) on{" "}
            <a href="https://codepen.io">CodePen</a>.
          </iframe>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">Grid 기반 레이아웃</h2>
        <p className="mt_l">
          CSS Grid를 사용하여 <b>유연하고 강력한 레이아웃</b>을 구성합니다.
          <br />
          Grid는 2차원 레이아웃을 쉽게 만들 수 있어 복잡한 레이아웃에
          적합합니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">기본 Grid 레이아웃</h3>
          <p className="mt_m">반응형 Grid 레이아웃을 만드는 방법입니다.</p>
          <CodeBlock title="_layout-grid.scss" language="scss" className="mt_m">
            {`@use "../mixins/breakpoint" as bp;
@use "../tokens/spacing" as spacing;

.grid {
  display: grid;
  gap: spacing.$spacing-4;
  grid-template-columns: 1fr;  // 모바일: 1열

  @include bp.breakpoint-up(sm) {
    grid-template-columns: repeat(2, 1fr);  // 작은 태블릿: 2열
  }

  @include bp.breakpoint-up(md) {
    grid-template-columns: repeat(3, 1fr);  // 태블릿: 3열
  }

  @include bp.breakpoint-up(lg) {
    grid-template-columns: repeat(4, 1fr);  // 데스크톱: 4열
  }
}`}
          </CodeBlock>
          <p className="mt_ms">
            화면 크기가 커질수록 열의 개수가 증가하여, 공간을 효율적으로 활용할
            수 있습니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">복잡한 Grid 레이아웃</h3>
          <p className="mt_m">
            Grid의 고급 기능을 활용하여 복잡한 레이아웃을 만드는 방법입니다.
          </p>
          <CodeBlock
            title="_layout-grid-advanced.scss"
            language="scss"
            className="mt_m"
          >
            {`@use "../mixins/breakpoint" as bp;

.grid-advanced {
  display: grid;
  gap: 16px;
  grid-template-columns: 1fr;  // 모바일: 1열

  @include bp.breakpoint-up(md) {
    grid-template-columns: 2fr 1fr;  // 태블릿: 왼쪽 넓게, 오른쪽 좁게
    grid-template-rows: auto 1fr;
  }

  @include bp.breakpoint-up(lg) {
    grid-template-columns: 1fr 2fr 1fr;  // 데스크톱: 3단 레이아웃
  }
}

.grid-advanced__header {
  @include bp.breakpoint-up(md) {
    grid-column: 1 / -1;  // 전체 너비
  }
}

.grid-advanced__main {
  @include bp.breakpoint-up(md) {
    grid-column: 1;
    grid-row: 2;
  }
}

.grid-advanced__sidebar {
  @include bp.breakpoint-up(md) {
    grid-column: 2;
    grid-row: 2;
  }
}`}
          </CodeBlock>
          <p className="mt_ms">
            Grid의 <code className="t_blue">grid-column</code>과{" "}
            <code className="t_blue">grid-row</code>를 사용하면 각 요소의 위치를
            정확히 제어할 수 있습니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">복잡한 Grid 레이아웃 적용 예시</h3>
          <p className="mt_m t_blue">
            ※ 코드펜에서는 SCSS 파셜을 사용할 수 없으므로, 이 예시는 사용되는
            토큰만을 하나의 SCSS 파일에 모아 작성한 예제입니다.
          </p>
          <iframe
            className="codepen mt_m"
            height={760}
            style={{ width: "100%" }}
            scrolling="no"
            title="10.2. 복잡한 Grid 레이아웃 적용 예시"
            src="https://codepen.io/uxkm/embed/ByzadoL?default-tab=css%2Cresult&theme-id=dark"
            frameBorder="no"
            loading="lazy"
            allowTransparency
          >
            See the Pen{" "}
            <a href="https://codepen.io/uxkm/pen/ByzadoL">
              10.2. 복잡한 Grid 레이아웃 적용 예시
            </a>{" "}
            by UXKM (<a href="https://codepen.io/uxkm">@uxkm</a>) on{" "}
            <a href="https://codepen.io">CodePen</a>.
          </iframe>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">Flex 기반 레이아웃</h2>
        <p className="mt_l">
          Flexbox를 사용하여 <b>1차원 레이아웃</b>을 구성합니다.
          <br />
          Flex는 항목들을 한 방향으로 배치할 때 매우 유용하며, 정렬과 공간
          분배를 쉽게 제어할 수 있습니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">Flex 레이아웃 믹스인</h3>
          <p className="mt_m">
            자주 사용하는 Flex 패턴을 믹스인으로 만들어 재사용성을 높입니다.
          </p>
          <CodeBlock title="_mixins-flex.scss" language="scss" className="mt_m">
            {`// Flexbox 중앙 정렬 믹스인
@mixin flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

// Flexbox 양쪽 정렬 믹스인
@mixin flex-between {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

// Flexbox 세로 배치 믹스인
@mixin flex-column {
  display: flex;
  flex-direction: column;
}

// Flexbox 반응형 가로/세로 전환
@mixin flex-responsive {
  display: flex;
  flex-direction: column;

  @include breakpoint-up(md) {
    flex-direction: row;
  }
}`}
          </CodeBlock>
          <p className="mt_ms">
            자주 사용하는 Flex 패턴을 믹스인으로 만들어두면 코드가 간결해지고
            일관성이 유지됩니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">Flex 레이아웃</h3>
          <p className="mt_m">
            정의한 Flex 믹스인을 실제 컴포넌트에 적용하는 방법입니다.
          </p>
          <CodeBlock title="_header.scss" language="scss" className="mt_m">
            {`@use "../mixins/flex" as flex;
@use "../mixins/breakpoint" as bp;
@use "../tokens/spacing" as spacing;

.header {
  @include flex.flex-between;
  padding: spacing.$spacing-4;

  @include bp.breakpoint-down(sm) {
    @include flex.flex-column;
    gap: spacing.$spacing-3;
  }
}

.header__logo {
  font-size: 24px;
  font-weight: bold;
}

.header__nav {
  @include flex.flex-center;
  gap: spacing.$spacing-4;
}`}
          </CodeBlock>
          <p className="mt_ms">
            모바일에서는 세로 배치, 데스크톱에서는 가로 배치로 자동 전환되어
            반응형 레이아웃이 완성됩니다.
          </p>
          <p className="mt_s t_blue">
            ※ Flex 레이아웃의 실제 적용 예시는 이전 섹션의{" "}
            <b>[반응형 App Layout 적용 예시]</b>에서 확인할 수 있습니다.
          </p>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">Container &amp; Wrapper</h2>
        <p className="mt_l">
          <b className="t_blue">Container</b>는 콘텐츠의 최대 너비를 제한하고
          중앙 정렬하는 레이아웃 요소입니다.
          <br />
          실무에서는 모든 콘텐츠가 화면 전체 너비를 사용하지 않고, 적절한 최대
          너비 내에서 표시되어 가독성을 향상시킵니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">Container가 필요한 이유</h3>
          <p className="mt_m">
            대형 모니터에서 텍스트나 콘텐츠가 화면 전체 너비로 펼쳐지면 가독성이
            떨어집니다. Container를 사용하면:
          </p>
          <ul className="dot_lst mt_sm indent_small">
            <li>
              <b>가독성 향상</b>: 적절한 너비로 제한하여 텍스트 읽기 편의성 증가
            </li>
            <li>
              <b>일관성 유지</b>: 모든 화면 크기에서 일관된 레이아웃 제공
            </li>
            <li>
              <b>중앙 정렬</b>: 콘텐츠를 화면 중앙에 배치하여 시각적 균형 확보
            </li>
            <li>
              <b>반응형 대응</b>: 화면 크기에 따라 최대 너비를 조절하여
              모바일부터 데스크톱까지 최적화
            </li>
          </ul>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">반응형 Container</h3>
          <p className="mt_m">
            화면 크기에 따라 최대 너비가 조절되는 컨테이너입니다.
          </p>
          <CodeBlock title="_container.scss" language="scss" className="mt_m">
            {`@use "../mixins/breakpoint" as bp;
@use "../tokens/spacing" as spacing;

.container {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: spacing.$spacing-4;
  padding-right: spacing.$spacing-4;

  @include bp.breakpoint-up(sm) {
    max-width: 540px;
  }

  @include bp.breakpoint-up(md) {
    max-width: 720px;
  }

  @include bp.breakpoint-up(lg) {
    max-width: 960px;
  }

  @include bp.breakpoint-up(xl) {
    max-width: 1140px;
  }
}`}
          </CodeBlock>
          <p className="mt_ms">각 속성의 역할:</p>
          <ul className="dot_lst mt_sm indent_small">
            <li>
              <code className="t_blue">width: 100%</code>: 모바일에서는 화면
              전체 너비 사용
            </li>
            <li>
              <code className="t_blue">
                margin-left: auto; margin-right: auto
              </code>
              : 좌우 마진을 자동으로 설정하여 중앙 정렬
            </li>
            <li>
              <code className="t_blue">padding-left/right</code>: 좌우 패딩으로
              콘텐츠가 화면 가장자리에 붙지 않도록 여백 제공
            </li>
            <li>
              <code className="t_blue">max-width</code>: 화면 크기에 따라 최대
              너비 제한 (모바일: 제한 없음 → 태블릿: 720px → 데스크톱: 1140px)
            </li>
          </ul>
          <p className="mt_ms">
            모바일에서는 전체 너비를 사용하고, 화면이 커질수록 최대 너비가
            증가하여 가독성을 유지합니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">Container vs Wrapper</h3>
          <p className="mt_m">
            Container와 Wrapper는 비슷하지만 사용 목적이 다릅니다.
          </p>
          <ul className="dot_lst mt_sm indent_small">
            <li>
              <b>Container</b>: 콘텐츠의 최대 너비를 제한하고 중앙 정렬하는 데
              사용. 주로 메인 콘텐츠 영역에 적용
            </li>
            <li>
              <b>Wrapper</b>: 여러 요소를 감싸는 일반적인 래퍼 요소. 특정 너비
              제한 없이 레이아웃 구조를 만드는 데 사용
            </li>
          </ul>
          <p className="mt_ms">
            실무에서는 Container를 사용하여 콘텐츠 영역의 너비를 제한하고,
            Wrapper는 더 넓은 의미의 레이아웃 구조를 만들 때 사용합니다.
          </p>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">정리</h2>
        <p className="mt_l">
          레이아웃 시스템과 반응형 구조에 대해 알아본 내용을 정리합니다.
        </p>
        <ul className="dot_lst mt_m indent_small">
          <li>
            <b>레이아웃 중심 반응형</b>: 반응형은 컴포넌트가 아닌 레이아웃
            레벨에서 결정
          </li>
          <li>
            <b>Breakpoint 변수</b>: 의미 있는 이름으로 정의하여 유지보수성 향상
          </li>
          <li>
            <b>Breakpoint 믹스인</b>: 미디어쿼리를 쉽게 사용할 수 있도록
            믹스인으로 래핑
          </li>
          <li>
            <b>App Layout</b>: Header, Main, Footer를 포함한 전체 앱 구조 정의
          </li>
          <li>
            <b>Grid 레이아웃</b>: 2차원 레이아웃을 위한 CSS Grid 활용
          </li>
          <li>
            <b>Flex 레이아웃</b>: 1차원 레이아웃과 정렬을 위한 Flexbox 활용
          </li>
          <li>
            <b>Container</b>: 콘텐츠 최대 너비 제한 및 중앙 정렬
          </li>
        </ul>
        <p className="mt_m">
          다음 페이지에서는 <b>핵심 UI 컴포넌트</b>를 구성하는 방법을
          알아봅니다.
        </p>
      </section>

      <figure className="img_figure mt_l">
        <img
          src={IMG.SCSS + "/10_scss_02.png"}
          alt="레이아웃 시스템과 반응형 구조"
        />
        <figcaption>레이아웃 시스템과 반응형 구조</figcaption>
      </figure>
    </>
  );
}

export default LayoutSystemResponsivePage;
