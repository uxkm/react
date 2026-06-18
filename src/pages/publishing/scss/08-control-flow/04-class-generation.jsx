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
  title: "반복문을 활용한 클래스 자동 생성",
  description:
    "SCSS 반복문(@for, @each)을 활용하여 유틸리티 클래스를 자동 생성하는 방법을 상세히 알아봅니다. 간격 유틸리티, 색상 유틸리티, 그리드 시스템, 반응형 유틸리티 등 실제 프로젝트에서 사용하는 클래스 생성 예시를 제공합니다.",
  keyword:
    "scss 클래스 자동 생성, scss 유틸리티 클래스, scss 반복문 활용, scss 자동화",
};

function ClassGenerationPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          반복문을 활용하면 <b>유틸리티 클래스를 자동으로 생성</b>할 수
          있습니다.
          <br />
          수동으로 수십 개의 클래스를 작성하는 대신,{" "}
          <b>반복문으로 한 번에 생성</b>하여 코드 작성 시간을 크게 줄일 수
          있습니다.
        </p>
        <p className="mt_s">
          이 페이지에서는 반복문을 활용하여 간격 유틸리티, 색상 유틸리티, 그리드
          시스템, 반응형 유틸리티 등 실제 프로젝트에서 사용하는 클래스를 자동
          생성하는 방법을 상세히 알아봅니다.
        </p>
      </blockquote>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">클래스 자동 생성이란?</h2>
        <p className="mt_l">
          클래스 자동 생성은{" "}
          <b>반복문을 사용하여 유사한 패턴의 클래스를 자동으로 만들어내는 것</b>
          입니다.
          <br />
          디자인 시스템의 간격·색상·그리드처럼 규칙적인 패턴을 코드로 옮길 때,{" "}
          <b>유틸리티 클래스를 수동 작성하는 수고를 크게 줄이고</b> 일관성을
          유지하는 데 도움이 됩니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">수동 작성 vs 자동 생성</h3>
          <p className="mt_m">
            수동으로 작성하면 <b>같은 패턴을 반복</b>해야 합니다.
          </p>
          <CodeBlock title="수동 작성 예시" language="css" className="mt_m">
            {`/* 수동으로 10개 클래스 작성 */
.mt-1 { margin-top: 8px; }
.mt-2 { margin-top: 16px; }
.mt-3 { margin-top: 24px; }
.mt-4 { margin-top: 32px; }
.mt-5 { margin-top: 40px; }
.mt-6 { margin-top: 48px; }
.mt-7 { margin-top: 56px; }
.mt-8 { margin-top: 64px; }
.mt-9 { margin-top: 72px; }
.mt-10 { margin-top: 80px; }

/*
같은 패턴을 10번 반복 작성
수정 시에도 10곳을 모두 수정해야 함
*/`}
          </CodeBlock>
          <CodeBlock title="자동 생성 예시" language="css" className="mt_m">
            {`// 반복문으로 자동 생성
@for $i from 1 through 10 {
  .mt-#{$i} {
    margin-top: #{$i * 8}px;
  }
}

// 한 번만 작성하면 10개 클래스 자동 생성
// 수정도 한 곳만 수정하면 됨`}
          </CodeBlock>
          <p className="mt_ms">
            반복문을 사용하면 <b>코드가 훨씬 간결</b>해지고,{" "}
            <b>유지보수도 쉬워집니다</b>.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">자동 생성의 장점</h3>
          <p className="mt_m">
            클래스를 자동 생성하면 다음과 같은 장점이 있습니다:
          </p>
          <ul className="dot_lst mt_sm indent_small">
            <li>
              <b>코드 작성 시간 단축</b>: 수십 개의 클래스를 한 번에 생성
            </li>
            <li>
              <b>일관성 보장</b>: 같은 패턴으로 생성되어 일관성 유지
            </li>
            <li>
              <b>유지보수 용이</b>: 수정 시 한 곳만 수정하면 모든 클래스에 반영
            </li>
            <li>
              <b>실수 방지</b>: 수동 작성 시 발생할 수 있는 오타나 누락 방지
            </li>
          </ul>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">간격 유틸리티 클래스 생성</h2>
        <p className="mt_l">
          마진과 패딩 유틸리티 클래스를 <b>반복문으로 자동 생성</b>하는 방법을
          알아봅니다.
          <br />
          디자인 시스템에서 정의한 스페이싱 스케일을 기반으로,{" "}
          <b>
            <code>mt-1</code>, <code>mt-2</code> 같은 규칙적인 유틸리티
          </b>
          를 한 번에 만들어 두면 화면 구현 속도가 크게 빨라집니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">기본 마진/패딩 유틸리티</h3>
          <p className="mt_m">
            <code className="t_blue">@for</code>를 사용하여{" "}
            <b>마진과 패딩 유틸리티를 자동 생성</b>합니다.
          </p>
          <CodeBlock
            title="기본 마진/패딩 유틸리티"
            language="css"
            className="mt_m"
          >
            {`// 마진 탑 유틸리티
@for $i from 1 through 10 {
  .mt-#{$i} {
    margin-top: #{$i * 8}px;
  }
}

// 패딩 유틸리티
@for $i from 1 through 10 {
  .p-#{$i} {
    padding: #{$i * 8}px;
  }
}`}
          </CodeBlock>
          <CodeBlock
            title="컴파일된 CSS (일부)"
            language="css"
            className="mt_m"
          >
            {`.mt-1 { margin-top: 8px; }
.mt-2 { margin-top: 16px; }
.mt-3 { margin-top: 24px; }
.mt-4 { margin-top: 32px; }
.mt-5 { margin-top: 40px; }
/* ... (생략)... */

.p-1 { padding: 8px; }
.p-2 { padding: 16px; }
.p-3 { padding: 24px; }
/* ... (생략) ... */`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">방향별 마진/패딩 유틸리티</h3>
          <p className="mt_m">
            <code className="t_blue">@each</code>와{" "}
            <code className="t_blue">@for</code>를 조합하여{" "}
            <b>방향별 유틸리티를 생성</b>합니다.
          </p>
          <CodeBlock title="방향별 유틸리티" language="css" className="mt_m">
            {`$directions: (
  t: top,
  r: right,
  b: bottom,
  l: left
);

@each $short, $full in $directions {
  @for $i from 1 through 10 {
    // 마진
    .m#{$short}-#{$i} {
      margin-#{$full}: #{$i * 8}px;
    }

    // 패딩
    .p#{$short}-#{$i} {
      padding-#{$full}: #{$i * 8}px;
    }
  }
}`}
          </CodeBlock>
          <CodeBlock
            title="컴파일된 CSS (일부)"
            language="css"
            className="mt_m"
          >
            {`.mt-1 { margin-top: 8px; }
.mr-1 { margin-right: 8px; }
.mb-1 { margin-bottom: 8px; }
.ml-1 { margin-left: 8px; }
.mt-2 { margin-top: 16px; }
/* ... (생략) ... */

.pt-1 { padding-top: 8px; }
.pr-1 { padding-right: 8px; }
/* ... (생략) ... */`}
          </CodeBlock>
          <p className="mt_ms">
            이렇게 하면{" "}
            <b>
              4개 방향 × 10개 크기 = 40개의 마진 클래스와 40개의 패딩 클래스가
              자동으로 생성
            </b>
            됩니다.
          </p>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">색상 유틸리티 클래스 생성</h2>
        <p className="mt_l">
          색상 유틸리티 클래스를 <b>@each로 자동 생성</b>하는 방법을 알아봅니다.
          <br />
          브랜드 컬러, 피드백 컬러(성공/위험/경고 등)를 맵으로 관리하면,{" "}
          <b>배경·텍스트·테두리 유틸리티를 일관된 규칙으로 대량 생성</b>할 수
          있습니다.
        </p>

        <CodeBlock title="색상 유틸리티 예시" language="css" className="mt_m">
          {`$colors: (
  primary: #0a58ca,
  secondary: #6c757d,
  success: #28a745,
  danger: #dc3545,
  warning: #ffc107,
  info: #17a2b8
);

@each $name, $color in $colors {
  // 배경색
  .bg-#{$name} {
    background-color: $color;
  }

  // 텍스트 색상
  .text-#{$name} {
    color: $color;
  }

  // 테두리 색상
  .border-#{$name} {
    border-color: $color;
  }
}`}
        </CodeBlock>
        <CodeBlock title="컴파일된 CSS (일부)" language="css" className="mt_m">
          {`.bg-primary {
  background-color: #0a58ca;
}

.text-primary {
  color: #0a58ca;
}

.border-primary {
  border-color: #0a58ca;
}

.bg-secondary {
  background-color: #6c757d;
}
/* ... (생략) ... */`}
        </CodeBlock>
        <p className="mt_m">
          이렇게 하면{" "}
          <b>6개 색상 × 3가지 유틸리티 = 18개의 클래스가 자동으로 생성</b>
          됩니다.
        </p>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">그리드 시스템 클래스 생성</h2>
        <p className="mt_l">
          그리드 컬럼 클래스를 <b>반복문으로 자동 생성</b>하는 방법을
          알아봅니다.
          <br />
          12컬럼 레이아웃처럼 규칙적인 비율을 사용하는 경우, 반복문으로
          컬럼·오프셋 클래스를 만들면 <b>레이아웃 변경에도 유연하게 대응</b>할
          수 있습니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">12컬럼 그리드 시스템</h3>
          <p className="mt_m">
            <code className="t_blue">@for</code>를 사용하여{" "}
            <b>12컬럼 그리드 시스템을 생성</b>합니다.
          </p>
          <CodeBlock title="12컬럼 그리드 예시" language="css" className="mt_m">
            {`// 기본 그리드 컬럼
@for $i from 1 through 12 {
  .col-#{$i} {
    width: percentage($i / 12);
  }
}

// 오프셋 컬럼
@for $i from 1 through 11 {
  .offset-#{$i} {
    margin-left: percentage($i / 12);
  }
}`}
          </CodeBlock>
          <CodeBlock
            title="컴파일된 CSS (일부)"
            language="css"
            className="mt_m"
          >
            {`.col-1 { width: 8.33333%; }
.col-2 { width: 16.66667%; }
.col-3 { width: 25%; }
.col-4 { width: 33.33333%; }
.col-5 { width: 41.66667%; }
.col-6 { width: 50%; }
/* ... (생략) ... */

.offset-1 { margin-left: 8.33333%; }
.offset-2 { margin-left: 16.66667%; }
/* ... (생략) ... */`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">반응형 그리드 시스템</h3>
          <p className="mt_m">
            브레이크포인트별로 <b>그리드 클래스를 생성</b>하는 예시입니다.
          </p>
          <CodeBlock title="반응형 그리드 예시" language="css" className="mt_m">
            {`$breakpoints: (
  sm: 576px,
  md: 768px,
  lg: 992px,
  xl: 1200px
);

@each $name, $size in $breakpoints {
  @media (min-width: $size) {
    @for $i from 1 through 12 {
      .col-#{$name}-#{$i} {
        width: percentage($i / 12);
      }
    }
  }
}`}
          </CodeBlock>
          <CodeBlock
            title="컴파일된 CSS (일부)"
            filename="컴파일된 CSS"
            defaultOpen={false}
            language="css"
            className="mt_m"
          >
            {`@media (min-width: 576px) {
  .col-sm-1 {
    width: 8.3333333333%;
  }

  .col-sm-2 {
    width: 16.6666666667%;
  }

  .col-sm-3 {
    width: 25%;
  }

  .col-sm-4 {
    width: 33.3333333333%;
  }

  .col-sm-5 {
    width: 41.6666666667%;
  }

  .col-sm-6 {
    width: 50%;
  }

  .col-sm-7 {
    width: 58.3333333333%;
  }

  .col-sm-8 {
    width: 66.6666666667%;
  }

  .col-sm-9 {
    width: 75%;
  }

  .col-sm-10 {
    width: 83.3333333333%;
  }

  .col-sm-11 {
    width: 91.6666666667%;
  }

  .col-sm-12 {
    width: 100%;
  }
}

@media (min-width: 768px) {
  .col-md-1 {
    width: 8.3333333333%;
  }

  .col-md-2 {
    width: 16.6666666667%;
  }

  .col-md-3 {
    width: 25%;
  }

  .col-md-4 {
    width: 33.3333333333%;
  }

  .col-md-5 {
    width: 41.6666666667%;
  }

  .col-md-6 {
    width: 50%;
  }

  .col-md-7 {
    width: 58.3333333333%;
  }

  .col-md-8 {
    width: 66.6666666667%;
  }

  .col-md-9 {
    width: 75%;
  }

  .col-md-10 {
    width: 83.3333333333%;
  }

  .col-md-11 {
    width: 91.6666666667%;
  }

  .col-md-12 {
    width: 100%;
  }
}

/* col-lg-* 와 col-xl-* 도 동일한 패턴으로 생성됩니다 */`}
          </CodeBlock>
          <p className="mt_ms">
            이렇게 하면{" "}
            <b>
              4개 브레이크포인트 × 12개 컬럼 = 48개의 반응형 그리드 클래스가
              자동으로 생성
            </b>
            됩니다.
          </p>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">폰트 크기 유틸리티 생성</h2>
        <p className="mt_l">
          폰트 크기 유틸리티 클래스를 <b>반복문으로 자동 생성</b>하는 방법을
          알아봅니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">기본 폰트 크기 유틸리티</h3>
          <p className="mt_m">
            <code className="t_blue">@for</code>를 사용하여{" "}
            <b>폰트 크기 유틸리티를 생성</b>합니다.
          </p>
          <CodeBlock
            title="폰트 크기 유틸리티 예시"
            language="css"
            className="mt_m"
          >
            {`@for $i from 1 through 6 {
  .text-#{$i} {
    font-size: #{$i * 4 + 12}px;
  }
}`}
          </CodeBlock>
          <CodeBlock title="컴파일된 CSS" language="css" className="mt_m">
            {`.text-1 { font-size: 16px; }
.text-2 { font-size: 20px; }
.text-3 { font-size: 24px; }
.text-4 { font-size: 28px; }
.text-5 { font-size: 32px; }
.text-6 { font-size: 36px; }`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">의미 기반 폰트 크기</h3>
          <p className="mt_m">
            <code className="t_blue">@each</code>를 사용하여{" "}
            <b>의미 기반 폰트 크기를 생성</b>합니다.
          </p>
          <CodeBlock
            title="의미 기반 폰트 크기 예시"
            language="css"
            className="mt_m"
          >
            {`$font-sizes: (
  xs: 12px,
  sm: 14px,
  base: 16px,
  lg: 18px,
  xl: 20px,
  xxl: 24px
);

@each $name, $size in $font-sizes {
  .text-#{$name} {
    font-size: $size;
  }
}`}
          </CodeBlock>
          <CodeBlock title="컴파일된 CSS" language="css" className="mt_m">
            {`.text-xs { font-size: 12px; }
.text-sm { font-size: 14px; }
.text-base { font-size: 16px; }
.text-lg { font-size: 18px; }
.text-xl { font-size: 20px; }
.text-xxl { font-size: 24px; }`}
          </CodeBlock>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">복합 스페이싱 시스템</h2>
        <p className="mt_l">
          <b>여러 반복문을 조합</b>하면 복잡한 유틸리티 클래스를 효율적으로
          생성할 수 있습니다.
          <br />
          이번 예시에서는 방향과 크기를 조합하여{" "}
          <b>완전한 스페이싱 시스템을 생성</b>하는 방법을 알아봅니다.
        </p>

        <CodeBlock title="스페이싱 시스템 예시" language="css" className="mt_m">
          {`$spacing-scale: (
  0: 0,
  1: 4px,
  2: 8px,
  3: 16px,
  4: 24px,
  5: 32px
);

$directions: (
  t: top,
  r: right,
  b: bottom,
  l: left,
  x: (left, right),
  y: (top, bottom)
);

@each $dir-name, $dir-value in $directions {
  @each $scale, $size in $spacing-scale {
    @if type-of($dir-value) == 'list' {
      // x, y는 두 방향
      .m#{$dir-name}-#{$scale} {
        @each $d in $dir-value {
          margin-#{$d}: $size;
        }
      }
    } @else {
      // 단일 방향
      .m#{$dir-name}-#{$scale} {
        margin-#{$dir-value}: $size;
      }
    }
  }
}`}
        </CodeBlock>
        <CodeBlock
          title="컴파일된 CSS"
          filename="컴파일된 CSS"
          defaultOpen={false}
          language="css"
          className="mt_m"
        >
          {`.mt-0 { margin-top: 0; }
.mt-1 { margin-top: 4px; }
.mt-2 { margin-top: 8px; }
.mt-3 { margin-top: 16px; }
.mt-4 { margin-top: 24px; }
.mt-5 { margin-top: 32px; }
.mr-0 { margin-right: 0; }
.mr-1 { margin-right: 4px; }
.mr-2 { margin-right: 8px; }
.mr-3 { margin-right: 16px; }
.mr-4 { margin-right: 24px; }
.mr-5 { margin-right: 32px; }
.mb-0 { margin-bottom: 0; }
.mb-1 { margin-bottom: 4px; }
.mb-2 { margin-bottom: 8px; }
.mb-3 { margin-bottom: 16px; }
.mb-4 { margin-bottom: 24px; }
.mb-5 { margin-bottom: 32px; }
.ml-0 { margin-left: 0; }
.ml-1 { margin-left: 4px; }
.ml-2 { margin-left: 8px; }
.ml-3 { margin-left: 16px; }
.ml-4 { margin-left: 24px; }
.ml-5 { margin-left: 32px; }
.mx-0 { margin-left: 0; margin-right: 0; }
.mx-1 { margin-left: 4px; margin-right: 4px; }
.mx-2 { margin-left: 8px; margin-right: 8px; }
.mx-3 { margin-left: 16px; margin-right: 16px; }
.mx-4 { margin-left: 24px; margin-right: 24px; }
.mx-5 { margin-left: 32px; margin-right: 32px; }
.my-0 { margin-top: 0; margin-bottom: 0; }
.my-1 { margin-top: 4px; margin-bottom: 4px; }
.my-2 { margin-top: 8px; margin-bottom: 8px; }
.my-3 { margin-top: 16px; margin-bottom: 16px; }
.my-4 { margin-top: 24px; margin-bottom: 24px; }
.my-5 { margin-top: 32px; margin-bottom: 32px; }`}
        </CodeBlock>
        <p className="mt_m">
          이렇게 하면{" "}
          <b>
            6개 방향 × 6개 크기 = 36개의 마진 유틸리티 클래스가 자동으로 생성
          </b>
          됩니다.
        </p>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">실무 통합 예시</h2>
        <p className="mt_l">
          실무에서는 <b>여러 반복문을 조합</b>하여 간격, 색상, 폰트 크기, 그리드
          등의 유틸리티를 <b>하나의 파일에 통합</b>하여 사용합니다.
          <br />
          아래 예시는 실제 프로젝트에서 활용할 수 있는{" "}
          <b>완전한 유틸리티 클래스 시스템</b>의 구조입니다.
        </p>

        <CodeBlock
          title="완전한 유틸리티 시스템"
          language="css"
          className="mt_m"
        >
          {`// ============================================
// 간격 유틸리티
// ============================================
@for $i from 1 through 10 {
  .mt-#{$i} { margin-top: #{$i * 8}px; }
  .mb-#{$i} { margin-bottom: #{$i * 8}px; }
  .ml-#{$i} { margin-left: #{$i * 8}px; }
  .mr-#{$i} { margin-right: #{$i * 8}px; }
  .p-#{$i} { padding: #{$i * 8}px; }
}

// ============================================
// 색상 유틸리티
// ============================================
$colors: (
  primary: #0a58ca,
  secondary: #6c757d,
  success: #28a745,
  danger: #dc3545
);

@each $name, $color in $colors {
  .bg-#{$name} { background-color: $color; }
  .text-#{$name} { color: $color; }
  .border-#{$name} { border-color: $color; }
}

// ============================================
// 폰트 크기 유틸리티
// ============================================
$font-sizes: (
  sm: 14px,
  base: 16px,
  lg: 18px,
  xl: 20px
);

@each $name, $size in $font-sizes {
  .text-#{$name} {
    font-size: $size;
  }
}

// ============================================
// 그리드 시스템
// ============================================
@for $i from 1 through 12 {
  .col-#{$i} {
    width: percentage($i / 12);
  }
}

// ============================================
// z-index 유틸리티
// ============================================
@for $i from 1 through 10 {
  .z-#{$i} {
    z-index: $i * 10;
  }
}`}
        </CodeBlock>
        <p className="mt_m">
          이렇게 구성하면{" "}
          <b>프로젝트에서 사용할 모든 유틸리티 클래스를 자동으로 생성</b>할 수
          있습니다.
        </p>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">정리</h2>
        <p className="mt_l">
          반복문을 활용한 클래스 자동 생성에 대해 알아본 내용을 정리합니다.
        </p>
        <ul className="dot_lst mt_m indent_small">
          <li>
            <b>클래스 자동 생성의 개념</b>: 반복문으로 유사한 패턴의 클래스를
            자동 생성
          </li>
          <li>
            <b>간격 유틸리티</b>: 마진, 패딩 유틸리티를{" "}
            <code className="t_blue">@for</code>로 자동 생성
          </li>
          <li>
            <b>색상 유틸리티</b>: 색상 맵을{" "}
            <code className="t_blue">@each</code>로 순회하여 배경, 텍스트,
            테두리 유틸리티 생성
          </li>
          <li>
            <b>그리드 시스템</b>: 12컬럼 그리드와 반응형 그리드를 자동 생성
          </li>
          <li>
            <b>폰트 크기 유틸리티</b>: 폰트 크기 유틸리티를 자동 생성
          </li>
          <li>
            <b>복합 유틸리티</b>: 여러 반복문을 조합하여 복잡한 유틸리티 생성
          </li>
          <li>
            <b>실무 통합</b>: 모든 유틸리티를 하나의 시스템으로 통합
          </li>
        </ul>
        <p className="mt_m">
          다음 페이지에서는 <b>초급자가 이해하기 쉬운 예제 중심 설명</b>을
          자세히 알아봅니다.
        </p>
      </section>

      <figure className="img_figure mt_l">
        <img src={IMG.SCSS + "/08_scss_04.png"} alt="클래스 생성" />
        <figcaption>클래스 생성</figcaption>
      </figure>
    </>
  );
}

export default ClassGenerationPage;
