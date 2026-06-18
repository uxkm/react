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
  title: "실무에서 자주 사용하는 변수 구성 예시",
  description:
    "실무 프로젝트에서 실제로 사용하는 변수 구성을 상세히 알아봅니다. 색상 팔레트, 타이포그래피 시스템, 간격 시스템, 브레이크포인트, 그림자, 전환 효과 등 실용적인 변수 구성 예시를 제공합니다.",
  keyword: "scss 실무 변수, scss 변수 구성, scss 디자인 토큰, scss 실무 예시, scss 변수 시스템",
};

function PracticalExamplesPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          실무 프로젝트에서는 <b>체계적인 변수 구성</b>이 중요합니다.
          <br />
          색상, 폰트, 여백뿐만 아니라 브레이크포인트, 그림자, 전환 효과 등도
          변수로 관리하면 <b>일관된 디자인 시스템을 구축</b>할 수 있습니다.
        </p>
        <p className="mt_s">
          이 페이지에서는 실제 프로젝트에서 사용하는 변수 구성을 카테고리별로
          나누어 상세히 살펴보고, 각 변수가 어떻게 활용되는지 예시와 함께
          알아봅니다.
        </p>
      </blockquote>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">색상 팔레트 구성</h2>
        <p className="mt_l">
          실무에서는 <b>체계적인 색상 팔레트</b>를 구성하여 사용합니다.
          <br />
          브랜드 색상, 상태 색상, 중성 색상을 명확히 구분하여 정의하면,
          디자이너와 개발자가 <b>같은 언어로 색상을 이야기</b>할 수 있습니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">완전한 색상 변수 구성 예시</h3>
          <p className="mt_m">실무에서 사용하는 색상 변수 구성을 살펴봅니다.</p>
          <CodeBlock title="색상 변수 구성" language="css" className="mt_m">
            {`// ============================================
// 브랜드 색상
// ============================================
$color-primary: #0a58ca;
$color-primary-light: #3d7dd8;
$color-primary-dark: #084298;
$color-secondary: #6c757d;
$color-secondary-light: #8e9ba7;
$color-secondary-dark: #545b62;

// ============================================
// 상태 색상
// ============================================
$color-success: #28a745;
$color-success-light: #5cb85c;
$color-success-dark: #218838;
$color-danger: #dc3545;
$color-danger-light: #e4606d;
$color-danger-dark: #c82333;
$color-warning: #ffc107;
$color-warning-light: #ffce3a;
$color-warning-dark: #e0a800;
$color-info: #17a2b8;
$color-info-light: #46b8da;
$color-info-dark: #138496;

// ============================================
// 중성 색상
// ============================================
$color-white: #ffffff;
$color-black: #000000;
$color-gray-100: #f8f9fa;
$color-gray-200: #e9ecef;
$color-gray-300: #dee2e6;
$color-gray-400: #ced4da;
$color-gray-500: #adb5bd;
$color-gray-600: #6c757d;
$color-gray-700: #495057;
$color-gray-800: #343a40;
$color-gray-900: #212529;
`}
          </CodeBlock>
          <p className="mt_ms">
            이렇게 구성하면 <b>프로젝트에서 사용할 모든 색상을 한눈에 파악</b>할
            수 있고, 일관된 색상 사용이 가능합니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">의미 기반 색상 변수</h3>
          <p className="mt_m">색상의 용도에 따라 변수를 구성하는 방법입니다.</p>
          <CodeBlock
            title="의미 기반 색상 변수"
            language="css"
            className="mt_m"
          >
            {`// ============================================
// 텍스트 색상
// ============================================
$text-primary: #212529;
$text-secondary: #6c757d;
$text-muted: #adb5bd;
$text-inverse: #ffffff;

// ============================================
// 배경 색상
// ============================================
$bg-primary: #ffffff;
$bg-secondary: #f8f9fa;
$bg-dark: #212529;

// ============================================
// 테두리 색상
// ============================================
$border-color: #dee2e6;
$border-color-light: #e9ecef;
$border-color-dark: #adb5bd;
`}
          </CodeBlock>
          <p className="mt_ms">
            의미 기반 네이밍은 <b>색상의 용도를 명확하게 전달</b>하므로, 어떤
            상황에서 사용해야 할지 바로 알 수 있습니다.
          </p>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">타이포그래피 시스템</h2>
        <p className="mt_l">
          일관된 타이포그래피를 위한 <b>폰트 변수 시스템</b>을 구성합니다.
          <br />
          제목, 본문, 캡션 등 용도별로 폰트를 정리해 두면, 새로운 화면을 설계할
          때도 <b>“어떤 크기·굵기를 써야 할지”를 빠르게 결정</b>할 수 있습니다.
        </p>

        <CodeBlock
          title="타이포그래피 변수 구성"
          language="css"
          className="mt_m"
        >
          {`// ============================================
// 폰트 패밀리
// ============================================
$font-family-base: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
$font-family-heading: Georgia, "Times New Roman", serif;
$font-family-mono: "Courier New", Courier, monospace;

// ============================================
// 폰트 크기
// ============================================
$font-size-xs: 12px;
$font-size-sm: 14px;
$font-size-base: 16px;
$font-size-lg: 18px;
$font-size-xl: 20px;
$font-size-xxl: 24px;
$font-size-h1: 32px;
$font-size-h2: 28px;
$font-size-h3: 24px;
$font-size-h4: 20px;
$font-size-h5: 18px;
$font-size-h6: 16px;

// ============================================
// 폰트 굵기
// ============================================
$font-weight-light: 300;
$font-weight-normal: 400;
$font-weight-medium: 500;
$font-weight-semibold: 600;
$font-weight-bold: 700;

// ============================================
// 줄간격
// ============================================
$line-height-tight: 1.2;
$line-height-normal: 1.5;
$line-height-relaxed: 1.8;
`}
        </CodeBlock>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">간격 시스템 (Spacing System)</h2>
        <p className="mt_l">
          일관된 간격을 위한 <b>체계적인 여백 변수 시스템</b>을 구성합니다.
          <br />
          간격 시스템이 정리되어 있으면, 페이지 곳곳의 margin·padding을 감으로
          맞추는 대신 <b>정해진 단계 안에서 선택</b>할 수 있어 디자인 일관성이
          높아집니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">8px 기반 간격 시스템</h3>
          <p className="mt_m">
            <code>8px</code>를 기본 단위로 하여 <b>배수 관계로 간격을 정의</b>
            하는 방식입니다.
          </p>
          <CodeBlock
            title="8px 기반 간격 시스템"
            language="css"
            className="mt_m"
          >
            {`// 8px 기반 간격 시스템
$spacing-1: 8px;   // 8px * 1
$spacing-2: 16px;  // 8px * 2
$spacing-3: 24px;  // 8px * 3
$spacing-4: 32px;  // 8px * 4
$spacing-5: 40px;  // 8px * 5
$spacing-6: 48px;  // 8px * 6

// 또는 의미 기반 네이밍
$spacing-xs: 4px;
$spacing-sm: 8px;
$spacing-md: 16px;
$spacing-lg: 24px;
$spacing-xl: 32px;
$spacing-xxl: 48px;
`}
          </CodeBlock>
          <p className="mt_ms">
            <code>8px</code> 기반 시스템은{" "}
            <b>디자인 도구(피그마, 스케치 등)와도 잘 맞아</b> 실무에서 많이
            사용됩니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">4px 기반 간격 시스템</h3>
          <p className="mt_m">
            <code>4px</code>를 기본 단위로 하는 더 세밀한 간격 시스템입니다.
          </p>
          <CodeBlock
            title="4px 기반 간격 시스템"
            language="css"
            className="mt_m"
          >
            {`// 4px 기반 간격 시스템
$spacing-1: 4px;
$spacing-2: 8px;
$spacing-3: 12px;
$spacing-4: 16px;
$spacing-5: 20px;
$spacing-6: 24px;
$spacing-8: 32px;
$spacing-10: 40px;
$spacing-12: 48px;
`}
          </CodeBlock>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">브레이크포인트 변수</h2>
        <p className="mt_l">
          반응형 디자인을 위한 <b>미디어 쿼리 브레이크포인트</b>를 변수로
          관리합니다.
          <br />
          브레이크포인트를 변수로 모아두면,{" "}
          <b>디자인 시안이 바뀌거나 지원 기기 범위가 달라져도</b> 한 곳만 수정해
          전체 레이아웃을 조정할 수 있습니다.
        </p>

        <CodeBlock title="브레이크포인트 변수" language="css" className="mt_m">
          {`// 모바일 (기본)
$breakpoint-sm: 576px;   // 작은 태블릿
$breakpoint-md: 768px;   // 태블릿
$breakpoint-lg: 992px;   // 데스크톱
$breakpoint-xl: 1200px;  // 큰 데스크톱
$breakpoint-xxl: 1400px; // 초대형 화면

// 부트스트렙 기준 (기본)
$grid-breakpoints: (
  xs: 0,
  sm: 576px,
  md: 768px,
  lg: 992px,
  xl: 1200px,
  xxl: 1400px
);

// 부트스트렙 최대 너비 기준
$container-max-widths: (
  sm: 540px,
  md: 720px,
  lg: 960px,
  xl: 1140px,
  xxl: 1320px
);
`}
        </CodeBlock>
        <p className="mt_ms">
          브레이크포인트를 변수로 관리하면{" "}
          <b>반응형 디자인 변경 시 한 곳만 수정</b>하면 됩니다.
        </p>
        <CodeBlock
          title="브레이크포인트 사용 예시"
          language="css"
          className="mt_ms"
        >
          {`$breakpoint-md: 768px;

.container {
  width: 100%;

  @media (min-width: $breakpoint-md) {
    max-width: 720px;
  }
}`}
        </CodeBlock>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">그림자 변수</h2>
        <p className="mt_l">
          UI 요소에 깊이감과 계층감을 주는 <b>그림자 효과</b>를 일관되게
          적용하기 위해 <b>그림자 변수</b>를 활용합니다.
          <br />
          카드, 모달, 버튼 등 다양한 컴포넌트에서 그림자 값이 중복되거나
          일관성이 깨지는 것을 방지하기 위해, 크기별로 그림자를 변수로 정의하여
          재사용합니다.
        </p>

        <CodeBlock title="그림자 변수 예시" language="css" className="mt_m">
          {`$shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
$shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
$shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
$shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.15);

.card {
  box-shadow: $shadow-md;
}

.modal {
  box-shadow: $shadow-xl;
}`}
        </CodeBlock>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">전환 효과 변수</h2>
        <p className="mt_l">
          버튼 클릭, 호버, 툴팁 표시 등 인터랙션에서 자연스러운 <b>전환 효과</b>
          를 만들기 위해 <b>시간 변수</b>를 활용합니다.
          <br />각 요소마다 다른 전환 시간을 사용하거나 임의의 값을 지정하면
          애니메이션 속도가 일관되지 않아 사용자 경험이 저하될 수 있습니다.
          따라서 빠름(fast), 보통(normal), 느림(slow) 등의 단계별로 시간 변수를
          정의하여 일관된 애니메이션 속도를 유지합니다.
        </p>

        <CodeBlock title="전환 시간 변수 예시" language="css" className="mt_m">
          {`$transition-fast: 0.15s;
$transition-normal: 0.3s;
$transition-slow: 0.5s;

.button {
  transition: background $transition-normal;
}

.tooltip {
  transition: opacity $transition-fast;
}`}
        </CodeBlock>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">테두리 변수</h2>
        <p className="mt_l">
          입력 필드, 카드, 버튼 등 다양한 UI 요소에서 일관된{" "}
          <b>테두리 스타일</b>을 적용하기 위해 <b>테두리 변수</b>를 활용합니다.
          <br />각 요소마다 테두리 너비, 반경(radius), 색상을 직접 지정하면 값이
          중복되거나 일관성이 깨질 수 있습니다. 따라서 테두리 너비, 반경, 색상을
          변수로 정의하여 재사용함으로써 디자인의 일관성을 유지하고 유지보수를
          용이하게 합니다.
        </p>

        <CodeBlock title="테두리 변수 예시" language="css" className="mt_m">
          {`// 테두리 너비
$border-width: 1px;
$border-width-thick: 2px;

// 테두리 반경
$border-radius-sm: 4px;
$border-radius-md: 8px;
$border-radius-lg: 12px;
$border-radius-full: 9999px;

// 테두리 색상
$border-color: #dee2e6;
$border-color-light: #e9ecef;
`}
        </CodeBlock>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">완전한 변수 파일 예시</h2>
        <p className="mt_l">
          실무에서 사용하는 <b>완전한 변수 파일 구성</b>을 예시로 살펴봅니다.
          모든 변수를 한 파일에 체계적으로 정리한 예시입니다.
        </p>

        <CodeBlock
          title="완전한 변수 파일 예시"
          language="css"
          className="mt_m"
        >
          {`// ============================================
// 색상 변수
// ============================================
$color-primary: #0a58ca;
$color-secondary: #6c757d;
$color-success: #28a745;
$color-danger: #dc3545;
$color-warning: #ffc107;
$color-info: #17a2b8;
$color-white: #ffffff;
$color-black: #000000;
$color-gray-100: #f8f9fa;
$color-gray-500: #adb5bd;
$color-gray-900: #212529;

// ============================================
// 타이포그래피
// ============================================
$font-family-base: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
$font-size-base: 16px;
$font-size-sm: 14px;
$font-size-lg: 18px;
$font-weight-normal: 400;
$font-weight-bold: 700;
$line-height-normal: 1.5;

// ============================================
// 간격 시스템
// ============================================
$spacing-xs: 4px;
$spacing-sm: 8px;
$spacing-md: 16px;
$spacing-lg: 24px;
$spacing-xl: 32px;

// ============================================
// 브레이크포인트
// ============================================
$breakpoint-sm: 576px;
$breakpoint-md: 768px;
$breakpoint-lg: 992px;
$breakpoint-xl: 1200px;

// ============================================
// 그림자
// ============================================
$shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
$shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
$shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);

// ============================================
// 전환 효과
// ============================================
$transition-fast: 0.15s;
$transition-normal: 0.3s;
$transition-slow: 0.5s;

// ============================================
// 테두리
// ============================================
$border-width: 1px;
$border-radius-sm: 4px;
$border-radius-md: 8px;
$border-radius-lg: 12px;
$border-color: #dee2e6;

// ============================================
// 컨테이너 너비
// ============================================
$container-sm: 540px;
$container-md: 720px;
$container-lg: 960px;
$container-xl: 1140px;
`}
        </CodeBlock>
        <p className="mt_ms">
          이렇게 구성하면 <b>프로젝트의 모든 디자인 토큰을 한 곳에서 관리</b>할
          수 있습니다.
        </p>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">변수 활용 예시</h2>
        <p className="mt_l">
          정의한 변수들을 <b>실제 컴포넌트에 활용</b>하는 예시를 살펴봅니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">버튼 컴포넌트</h3>
          <p className="mt_m">여러 변수를 조합하여 버튼 스타일을 작성합니다.</p>
          <CodeBlock
            title="버튼 변수 활용"
            filename="button scss"
            language="css"
            className="mt_m"
            defaultOpen={false}
          >
            {`$color-primary: #0a58ca;
$color-white: #ffffff;
$spacing-sm: 8px;
$spacing-md: 16px;
$font-size-base: 16px;
$font-weight-bold: 700;
$border-radius-md: 8px;
$transition-normal: 0.3s;
$shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
$shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);

.button {
  // 색상
  background: $color-primary;
  color: $color-white;
  border: none;

  // 여백
  padding: $spacing-sm $spacing-md;

  // 폰트
  font-size: $font-size-base;
  font-weight: $font-weight-bold;

  // 테두리
  border-radius: $border-radius-md;

  // 그림자
  box-shadow: $shadow-sm;

  // 전환
  transition: all $transition-normal;
  cursor: pointer;

  &:hover {
    background: darken($color-primary, 8%);
    box-shadow: $shadow-md;
    transform: translateY(-1px);
  }

  &:active {
    background: darken($color-primary, 12%);
    box-shadow: $shadow-sm;
    transform: translateY(0);
  }

  &:focus {
    outline: 2px solid lighten($color-primary, 20%);
    outline-offset: 2px;
  }
}`}
          </CodeBlock>
          <iframe
            className="codepen mt_m"
            height={450}
            style={{ width: "100%" }}
            scrolling="no"
            title="4.4. 버튼 컴포넌트"
            src="https://codepen.io/uxkm/embed/jErEbJM?default-tab=css%2Cresult&theme-id=dark"
            frameBorder="no"
            loading="lazy"
            allowTransparency
          >
            See the Pen{" "}
            <a href="https://codepen.io/uxkm/pen/jErEbJM">4.4. 버튼 컴포넌트</a>{" "}
            by UXKM (<a href="https://codepen.io/uxkm">@uxkm</a>) on{" "}
            <a href="https://codepen.io">CodePen</a>.
          </iframe>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">카드 컴포넌트</h3>
          <p className="mt_m">카드 컴포넌트에서도 다양한 변수를 활용합니다.</p>
          <CodeBlock
            title="카드 변수 활용"
            filename="card scss"
            language="css"
            className="mt_m"
            defaultOpen={false}
          >
            {`$color-white: #ffffff;
$color-gray-200: #e9ecef;
$color-gray-700: #495057;
$color-gray-900: #212529;
$color-primary: #0a58ca;
$spacing-sm: 8px;
$spacing-md: 16px;
$spacing-lg: 24px;
$font-size-base: 16px;
$font-size-lg: 18px;
$font-weight-normal: 400;
$font-weight-bold: 700;
$border-radius-md: 8px;
$shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
$shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
$shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
$transition-normal: 0.3s;

.card {
  // 배경과 테두리
  background: $color-white;
  border: 1px solid $color-gray-200;
  border-radius: $border-radius-md;
  overflow: hidden;

  // 여백
  padding: $spacing-lg;
  margin-bottom: $spacing-lg;

  // 그림자
  box-shadow: $shadow-md;

  // 전환
  transition: all $transition-normal;

  &:hover {
    box-shadow: $shadow-lg;
    transform: translateY(-2px);
  }

  .card__title {
    font-size: $font-size-lg;
    font-weight: $font-weight-bold;
    color: $color-gray-900;
    margin-top: 0;
    margin-bottom: $spacing-md;
  }

  .card__body {
    font-size: $font-size-base;
    color: $color-gray-700;
    line-height: 1.6;
    margin-bottom: $spacing-md;
  }

  .card__link {
    color: $color-primary;
    font-size: $font-size-base;
    font-weight: $font-weight-bold;
    text-decoration: none;
    transition: color $transition-normal;

    &:hover {
      color: darken($color-primary, 10%);
      text-decoration: underline;
    }
  }
}`}
          </CodeBlock>
          <iframe
            className="codepen mt_m"
            height={500}
            style={{ width: "100%" }}
            scrolling="no"
            title="4.4. 카드 컴포넌트"
            src="https://codepen.io/uxkm/embed/OPXPyYP?default-tab=css%2Cresult&theme-id=dark"
            frameBorder="no"
            loading="lazy"
            allowTransparency
          >
            See the Pen{" "}
            <a href="https://codepen.io/uxkm/pen/OPXPyYP">4.4. 카드 컴포넌트</a>{" "}
            by UXKM (<a href="https://codepen.io/uxkm">@uxkm</a>) on{" "}
            <a href="https://codepen.io">CodePen</a>.
          </iframe>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">정리</h2>
        <p className="mt_l">
          실무에서 자주 사용하는 변수 구성 예시에 대해 알아본 내용을 정리합니다.
        </p>
        <ul className="dot_lst mt_m indent_small">
          <li>
            <b>색상 팔레트</b>: 브랜드 색상, 상태 색상, 중성 색상을 체계적으로
            구성
          </li>
          <li>
            <b>타이포그래피 시스템</b>: 폰트 패밀리, 크기, 굵기, 줄간격을 변수로
            관리
          </li>
          <li>
            <b>간격 시스템</b>: 8px 또는 4px 기반으로 일관된 간격 체계 구축
          </li>
          <li>
            <b>브레이크포인트</b>: 반응형 디자인을 위한 미디어 쿼리 값 변수화
          </li>
          <li>
            <b>그림자, 전환, 테두리</b>: 시각적 효과를 위한 변수 구성
          </li>
          <li>
            <b>통합 관리</b>: 모든 변수를 한 파일에 체계적으로 정리하여 관리
          </li>
        </ul>
        <p className="mt_m">
          다음 페이지에서는 <b>CSS 변수와 SCSS 변수의 차이</b>를 자세히
          비교해봅니다.
        </p>
      </section>

      <figure className="img_figure mt_l">
        <img src={IMG.SCSS + "/04_scss_04.png"} alt="실무 활용 예제" />
        <figcaption>실무 활용 예제</figcaption>
      </figure>
    </>
  );
}

export default PracticalExamplesPage;
