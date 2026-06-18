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
  title: "연산과 함수를 활용한 스타일 관리 예제",
  description:
    "SCSS의 연산과 함수를 실제 프로젝트에서 활용하는 방법을 상세히 알아봅니다. 간격 시스템, 색상 팔레트 자동 생성, 반응형 타이포그래피, 동적 컴포넌트 스타일 등 실무 예제를 제공합니다.",
  keyword:
    "scss 연산 활용, scss 함수 활용, scss 실무 예제, scss 스타일 관리, scss 디자인 시스템, scss 자동화",
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
          SCSS의 연산과 함수를 활용하면 <b>디자인 시스템을 자동화</b>하고,{" "}
          <b>관계 있는 값들을 동적으로 계산</b>할 수 있습니다.
          <br />
          기본 값만 정의하면 나머지는 자동으로 계산되어, 유지보수가 훨씬
          편해집니다.
        </p>
        <p className="mt_s">
          이 페이지에서는 연산과 함수를 활용한 실무 예제를 단계별로 상세히
          살펴보고, 각 예제가 어떻게 동작하는지, 어떤 장점이 있는지 알아봅니다.
        </p>
      </blockquote>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">간격 시스템 자동 생성</h2>
        <p className="mt_l">
          기본 간격을 기준으로 <b>배수 관계의 간격을 자동으로 생성</b>하는
          시스템을 만들어봅니다.
          <br />
          한두 개의 기준 값만 정해 두고 나머지는 연산으로 계산하면,{" "}
          <b>디자인 수정이나 리디자인 시에도 간격을 일관되게 유지</b>할 수
          있습니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">8px 기반 간격 시스템</h3>
          <p className="mt_m">
            기본 간격 8px를 기준으로{" "}
            <b>곱셈 연산을 사용하여 간격 변수를 자동 생성</b>합니다.
          </p>
          <CodeBlock
            title="간격 시스템 자동 생성"
            language="css"
            className="mt_m"
          >
            {`// 기본 간격
$base-spacing: 8px;

// 간격 변수 자동 생성
$spacing-1: $base-spacing;        // 8px
$spacing-2: $base-spacing * 2;    // 16px
$spacing-3: $base-spacing * 3;    // 24px
$spacing-4: $base-spacing * 4;    // 32px
$spacing-5: $base-spacing * 5;    // 40px
$spacing-6: $base-spacing * 6;    // 48px

.card {
  padding: $spacing-2;            // 16px
  margin-bottom: $spacing-3;      // 24px
}`}
          </CodeBlock>
          <p className="mt_ms">
            이렇게 하면 <b>기본 간격만 변경하면 모든 간격이 자동으로 조정</b>
            됩니다.
            <br />
            예를 들어 <code className="t_blue">$base-spacing: 4px;</code>로
            변경하면 모든 간격이 절반으로 줄어듭니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">간격 시스템 활용 예시</h3>
          <p className="mt_m">생성한 간격 변수를 실제 컴포넌트에 활용합니다.</p>
          <CodeBlock title="간격 시스템 활용" language="css" className="mt_m">
            {`$spacing-1: 8px;
$spacing-2: 16px;
$spacing-3: 24px;

.card {
  padding: $spacing-2;
  margin-bottom: $spacing-3;

  .card__title {
    margin-bottom: $spacing-1;
  }

  .card__body {
    margin-top: $spacing-1;
  }
}

.button {
  padding: $spacing-1 $spacing-2;
  margin-right: $spacing-1;
}`}
          </CodeBlock>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">색상 팔레트 자동 생성</h2>
        <p className="mt_l">
          기본 색상에서 <b>함수를 사용하여 색상 팔레트를 자동 생성</b>합니다.
          <br />
          버튼, 배너, 배경 등 여러 컴포넌트에서 같은 규칙으로 밝기·채도를
          조절하면, <b>디자인 전체의 톤이 자연스럽게 맞춰</b> 집니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">밝기 변형 자동 생성</h3>
          <p className="mt_m">
            <code className="t_blue">lighten()</code>과{" "}
            <code className="t_blue">darken()</code> 함수를 사용하여{" "}
            <b>색상 변형을 자동 생성</b>합니다.
          </p>
          <CodeBlock
            title="색상 팔레트 자동 생성"
            language="css"
            className="mt_m"
          >
            {`// 기본 색상
$color-primary: #0a58ca;

// 색상 변형 자동 생성
$color-primary-lighter: lighten($color-primary, 20%);
$color-primary-light: lighten($color-primary, 10%);
$color-primary: $color-primary;  // 기본
$color-primary-dark: darken($color-primary, 10%);
$color-primary-darker: darken($color-primary, 20%);

.button {
  background: $color-primary;
  &:hover {
    background: $color-primary-light;
  }
  &:active {
    background: $color-primary-dark;
  }
}`}
          </CodeBlock>
          <p className="mt_ms">
            이렇게 하면{" "}
            <b>기본 색상만 변경하면 모든 변형 색상이 자동으로 조정</b>됩니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">투명도 변형 자동 생성</h3>
          <p className="mt_m">
            <code className="t_blue">rgba()</code> 함수를 사용하여{" "}
            <b>투명도가 다른 색상을 자동 생성</b>합니다.
          </p>
          <CodeBlock title="투명도 변형 생성" language="css" className="mt_m">
            {`$color-primary: #0a58ca;

// 투명도 변형
$color-primary-10: rgba($color-primary, 0.1);
$color-primary-20: rgba($color-primary, 0.2);
$color-primary-50: rgba($color-primary, 0.5);
$color-primary-80: rgba($color-primary, 0.8);

.overlay {
  background: $color-primary-50;
}

.text-muted {
  color: $color-primary-80;
}`}
          </CodeBlock>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">반응형 타이포그래피</h2>
        <p className="mt_l">
          연산을 사용하여 <b>반응형 폰트 크기를 자동 계산</b>합니다.
          <br />
          뷰포트 크기에 따라 제목과 본문 크기를 일정한 비율로 조정하면,{" "}
          <b>화면 크기가 달라져도 읽기 좋은 타이포그래피</b>를 유지할 수
          있습니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">비율 기반 폰트 크기</h3>
          <p className="mt_m">
            기본 폰트 크기를 기준으로 <b>비율에 맞춰 폰트 크기를 계산</b>합니다.
          </p>
          <CodeBlock
            title="비율 기반 폰트 크기"
            language="css"
            className="mt_m"
          >
            {`$font-size-base: 16px;
$scale-factor: 1.25;  // 타입 스케일 비율

// 폰트 크기 자동 계산
$font-size-xs: round($font-size-base / ($scale-factor * $scale-factor));
$font-size-sm: round($font-size-base / $scale-factor);
$font-size-base: $font-size-base;
$font-size-lg: round($font-size-base * $scale-factor);
$font-size-xl: round($font-size-base * $scale-factor * $scale-factor);

.text-xs { font-size: $font-size-xs; }
.text-sm { font-size: $font-size-sm; }
.text-base { font-size: $font-size-base; }
.text-lg { font-size: $font-size-lg; }
.text-xl { font-size: $font-size-xl; }`}
          </CodeBlock>
          <p className="mt_ms">
            이렇게 하면{" "}
            <b>
              기본 폰트 크기나 비율만 변경하면 모든 폰트 크기가 자동으로 조정
            </b>
            됩니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">미디어 쿼리와 연산 조합</h3>
          <p className="mt_m">
            미디어 쿼리에서도 <b>연산을 사용하여 반응형 폰트 크기를 계산</b>할
            수 있습니다.
          </p>
          <CodeBlock title="반응형 폰트 크기" language="css" className="mt_m">
            {`$font-size-base: 16px;

.heading {
  font-size: $font-size-base;

  @media (min-width: 768px) {
    font-size: $font-size-base * 1.25;  // 20px
  }

  @media (min-width: 1024px) {
    font-size: $font-size-base * 1.5;  // 24px
  }
}`}
          </CodeBlock>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">동적 컴포넌트 스타일</h2>
        <p className="mt_l">
          연산과 함수를 사용하여 <b>컴포넌트 스타일을 동적으로 생성</b>합니다.
          <br />
          기본 크기와 색상만 정해 두고 나머지는 계산에 맡기면,{" "}
          <b>버튼·카드·배지 등 변형이 많은 컴포넌트도 일관성 있게</b> 관리할 수
          있습니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">버튼 크기 변형 자동 생성</h3>
          <p className="mt_m">
            기본 크기를 기준으로 <b>버튼 크기 변형을 자동 계산</b>합니다.
          </p>
          <CodeBlock
            title="버튼 크기 자동 생성"
            language="css"
            className="mt_m"
          >
            {`$button-padding-base: 8px 16px;
$button-font-size-base: 16px;
$scale-factor: 1.2;

.button {
  padding: $button-padding-base;
  font-size: $button-font-size-base;

  // 작은 버튼
  &--small {
    padding: ($button-padding-base * 0.75);
    font-size: round($button-font-size-base / $scale-factor);
  }

  // 큰 버튼
  &--large {
    padding: ($button-padding-base * 1.5);
    font-size: round($button-font-size-base * $scale-factor);
  }
}`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">카드 간격 자동 계산</h3>
          <p className="mt_m">
            컨테이너 너비와 카드 개수를 기준으로 <b>카드 간격을 자동 계산</b>
            합니다.
          </p>
          <CodeBlock
            title="카드 간격 자동 계산"
            language="css"
            className="mt_m"
          >
            {`$container-width: 1200px;
$card-width: 280px;
$cards-per-row: 4;
$card-gap: ($container-width - ($card-width * $cards-per-row)) / ($cards-per-row - 1);

.card-grid {
  display: grid;
  grid-template-columns: repeat($cards-per-row, $card-width);
  gap: $card-gap;
}`}
          </CodeBlock>
          <p className="mt_ms">
            이렇게 하면{" "}
            <b>컨테이너 너비나 카드 개수가 변경되어도 간격이 자동으로 조정</b>
            됩니다.
          </p>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">복합 활용 예시</h2>
        <p className="mt_l">
          연산과 함수를 <b>복합적으로 활용</b>하는 고급 예시를 살펴봅니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">그림자 시스템 자동 생성</h3>
          <p className="mt_m">
            기본 그림자를 기준으로 <b>크기별 그림자를 자동 생성</b>합니다.
          </p>
          <CodeBlock
            title="그림자 시스템 자동 생성"
            language="css"
            className="mt_m"
          >
            {`$shadow-base-x: 0;
$shadow-base-y: 4px;
$shadow-base-blur: 6px;
$shadow-base-spread: 0;
$shadow-color: rgba(0, 0, 0, 0.1);

// 그림자 크기별 자동 생성
$shadow-sm: $shadow-base-x $shadow-base-y ($shadow-base-blur / 2) $shadow-base-spread $shadow-color;
$shadow-md: $shadow-base-x $shadow-base-y $shadow-base-blur $shadow-base-spread $shadow-color;
$shadow-lg: $shadow-base-x ($shadow-base-y * 2) ($shadow-base-blur * 2) $shadow-base-spread $shadow-color;

.card {
  box-shadow: $shadow-md;
}

.modal {
  box-shadow: $shadow-lg;
}`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">테두리 반경 시스템</h3>
          <p className="mt_m">
            기본 반경을 기준으로 <b>크기별 테두리 반경을 자동 생성</b>합니다.
          </p>
          <CodeBlock title="테두리 반경 시스템" language="css" className="mt_m">
            {`$border-radius-base: 4px;

// 테두리 반경 자동 생성
$border-radius-sm: $border-radius-base / 2;  // 2px
$border-radius-md: $border-radius-base;      // 4px
$border-radius-lg: $border-radius-base * 2;  // 8px
$border-radius-xl: $border-radius-base * 3;  // 12px

.button {
  border-radius: $border-radius-md;
}

.card {
  border-radius: $border-radius-lg;
}`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">전환 시간 시스템</h3>
          <p className="mt_m">
            기본 전환 시간을 기준으로 <b>속도별 전환 시간을 자동 생성</b>합니다.
          </p>
          <CodeBlock title="전환 시간 시스템" language="css" className="mt_m">
            {`$transition-base: 0.3s;

// 전환 시간 자동 생성
$transition-fast: $transition-base / 2;   // 0.15s
$transition-normal: $transition-base;       // 0.3s
$transition-slow: $transition-base * 2;    // 0.6s

.button {
  transition: background $transition-normal;
}

.tooltip {
  transition: opacity $transition-fast;
}`}
          </CodeBlock>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">실무 통합 예시</h2>
        <p className="mt_l">
          연산과 함수를 <b>종합적으로 활용</b>한 실무 예시를 살펴봅니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">완전한 디자인 토큰 시스템</h3>
          <p className="mt_m">
            연산과 함수를 사용하여 <b>완전히 자동화된 디자인 토큰 시스템</b>을
            구축합니다.
          </p>
          <CodeBlock title="디자인 토큰 시스템" language="css" className="mt_m">
            {`// ============================================
// 기본 값 정의
// ============================================
$base-spacing: 8px;
$base-font-size: 16px;
$color-primary: #0a58ca;
$scale-factor: 1.25;

// ============================================
// 간격 시스템 (자동 생성)
// ============================================
$spacing-1: $base-spacing;
$spacing-2: $base-spacing * 2;
$spacing-3: $base-spacing * 3;
$spacing-4: $base-spacing * 4;

// ============================================
// 색상 팔레트 (자동 생성)
// ============================================
$color-primary-light: lighten($color-primary, 10%);
$color-primary-dark: darken($color-primary, 10%);
$color-primary-alpha: rgba($color-primary, 0.1);

// ============================================
// 폰트 크기 (자동 생성)
// ============================================
$font-size-sm: round($base-font-size / $scale-factor);
$font-size-base: $base-font-size;
$font-size-lg: round($base-font-size * $scale-factor);

// ============================================
// 컴포넌트 스타일
// ============================================
.button {
  padding: $spacing-1 $spacing-2;
  font-size: $font-size-base;
  background: $color-primary;
  border-radius: $spacing-1;

  &:hover {
    background: $color-primary-light;
  }
}`}
          </CodeBlock>
          <p className="mt_ms">
            이렇게 구성하면{" "}
            <b>기본 값만 변경하면 전체 디자인 시스템이 자동으로 조정</b>됩니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">반응형 그리드 시스템</h3>
          <p className="mt_m">
            연산을 사용하여 <b>반응형 그리드 간격을 자동 계산</b>합니다.
          </p>
          <CodeBlock
            title="반응형 그리드 시스템"
            language="css"
            className="mt_m"
          >
            {`$container-width: 1200px;
$grid-columns: 12;
$grid-gap: 24px;

// 컬럼 너비 자동 계산
$column-width: ($container-width - ($grid-gap * ($grid-columns - 1))) / $grid-columns;

.grid {
  display: grid;
  grid-template-columns: repeat($grid-columns, $column-width);
  gap: $grid-gap;
}

.col-6 {
  grid-column: span 6;
}`}
          </CodeBlock>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue" data-conlist="false">
          연산과 함수 활용의 장점
        </h2>
        <p className="mt_l">
          연산과 함수를 활용하면 얻을 수 있는 <b>주요 장점</b>을 정리합니다.
        </p>

        <dl className="dl_dot_lst mt_l">
          <dt className="font-16 mb_s">자동화와 일관성</dt>
          <dd>
            기본 값만 정의하면 <b>관계 있는 값들이 자동으로 계산</b>되어
            일관성이 유지됩니다.
          </dd>
          <dd>
            예를 들어 기본 간격을 변경하면 모든 간격이 자동으로 조정되므로,{" "}
            <b>수동으로 여러 값을 수정할 필요가 없습니다</b>.
          </dd>
        </dl>

        <dl className="dl_dot_lst mt_l">
          <dt className="font-16 mb_s">유지보수성 향상</dt>
          <dd>
            값들 간의 관계가 <b>코드로 명확하게 표현</b>되어 나중에 수정할 때도
            이해하기 쉽습니다.
          </dd>
          <dd>
            {'"큰 간격은 기본 간격의 3배"라는 관계가 코드에 드러나 있어, '}
            <b>디자인 변경 시에도 빠르게 대응</b>할 수 있습니다.
          </dd>
        </dl>

        <dl className="dl_dot_lst mt_l">
          <dt className="font-16 mb_s">디자인 시스템 구축</dt>
          <dd>
            연산과 함수를 활용하면 <b>체계적인 디자인 시스템을 구축</b>할 수
            있습니다.
          </dd>
          <dd>
            모든 값이 기본 값에서 파생되므로,{" "}
            <b>디자인 토큰을 체계적으로 관리</b>할 수 있습니다.
          </dd>
        </dl>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">주의사항</h2>
        <p className="mt_l">
          연산과 함수를 활용할 때 <b>주의해야 할 사항</b>들을 정리합니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">과도한 자동화 피하기</h3>
          <p className="mt_m">
            모든 것을 자동화할 필요는 없습니다.
            <br />
            <b>의미 있는 관계가 있는 값들만 연산으로 연결</b>하는 것이 좋습니다.
          </p>
          <CodeBlock title="과도한 자동화 예시" language="css" className="mt_m">
            {`// 불필요한 자동화
$random-value: 13px;
$another-value: $random-value * 1.153846;  // 의미 없는 관계`}
          </CodeBlock>
          <p className="mt_ms">
            {
              '의미 있는 관계(예: "2배", "절반")가 있는 경우에만 연산을 사용하는 것이 좋습니다.'
            }
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">가독성 고려</h3>
          <p className="mt_m">
            너무 복잡한 연산은 <b>가독성을 해칠 수 있습니다</b>.
          </p>
          <CodeBlock title="복잡한 연산 예시" language="css" className="mt_m">
            {`// 가독성 낮음
padding: ($base * 2 + $spacing) / 1.5 * 0.8;`}
          </CodeBlock>
          <CodeBlock title="더 나은 방법" language="css" className="mt_m">
            {`// 중간 변수로 분리
$calculated-spacing: $base * 2 + $spacing;
$adjusted-spacing: $calculated-spacing / 1.5 * 0.8;
padding: $adjusted-spacing;`}
          </CodeBlock>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">정리</h2>
        <p className="mt_l">
          연산과 함수를 활용한 스타일 관리 예제에 대해 알아본 내용을 정리합니다.
        </p>
        <ul className="dot_lst mt_m indent_small">
          <li>
            <b>간격 시스템</b>: 기본 간격을 기준으로 배수 관계의 간격 자동 생성
          </li>
          <li>
            <b>색상 팔레트</b>: 기본 색상에서 함수를 사용하여 변형 색상 자동
            생성
          </li>
          <li>
            <b>반응형 타이포그래피</b>: 기본 폰트 크기를 기준으로 비율에 맞춰
            크기 계산
          </li>
          <li>
            <b>동적 컴포넌트</b>: 기본 값을 기준으로 변형 스타일 자동 계산
          </li>
          <li>
            <b>복합 활용</b>: 여러 연산과 함수를 조합하여 완전한 디자인 시스템
            구축
          </li>
          <li>
            <b>장점</b>: 자동화, 일관성, 유지보수성 향상, 디자인 시스템 구축
          </li>
          <li>
            <b>주의사항</b>: 과도한 자동화 피하기, 가독성 고려
          </li>
        </ul>
        <p className="mt_m">
          이제 SCSS의 기본 문법과 변수, 연산, 함수를 모두 배웠습니다. 다음
          섹션에서는 <b>SCSS의 고급 기능</b>들을 하나씩 자세히 알아봅니다.
        </p>
      </section>

      <figure className="img_figure mt_l">
        <img src={IMG.SCSS + "/05_scss_04.png"} alt="연산과 함수 활용 예시" />
        <figcaption>연산과 함수 활용 예시</figcaption>
      </figure>
    </>
  );
}

export default PracticalExamplesPage;
