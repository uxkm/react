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
  title: "@each 반복문 사용법",
  description:
    "SCSS @each 반복문을 상세히 알아봅니다. @each의 기본 개념, 문법, 리스트와 맵을 순회하는 방법, 중첩 구조 처리, 실제 사용 예시를 초급자가 이해하기 쉬운 예제 중심으로 설명합니다.",
  keyword:
    "scss @each, scss each loop, scss 리스트 순회, scss 맵 순회, scss 반복문",
};

function EachLoopPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          <b>@each 반복문</b>은 SCSS에서{" "}
          <b>리스트나 맵의 각 항목을 하나씩 순회</b>하면서 코드를 실행하는
          기능입니다.
          <br />
          <code className="t_blue">@for</code>가 숫자를 증가시키면서 반복하는
          것과 달리, <code className="t_blue">@each</code>는{" "}
          <b>데이터 구조의 각 항목을 처리</b>합니다.
        </p>
        <p className="mt_s">
          이 페이지에서는 @each 반복문의 기본 개념, 문법, 리스트와 맵을 순회하는
          방법, 중첩 구조 처리, 실제 사용 예시를 초급자가 이해하기 쉬운 예제
          중심으로 상세히 알아봅니다.
        </p>
      </blockquote>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">@each 반복문이란?</h2>
        <p className="mt_l">
          <code className="t_blue">@each</code>는{" "}
          <b>리스트나 맵의 각 항목을 하나씩 가져와서</b> 코드를 실행하는
          반복문입니다.
          <br />
          색상 팔레트, 간격 리스트, 브레이크포인트 맵처럼 데이터 구조를 기반으로
          클래스를 만들 때,{" "}
          <b>데이터 정의만 바꿔도 전체 스타일이 함께 바뀌도록</b> 만들어 주는
          핵심 도구입니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">기본 개념</h3>
          <p className="mt_m">일상 생활에서의 예시로 이해해봅니다:</p>
          <ul className="dot_lst mt_sm indent_small">
            <li>
              <b>{'"장바구니에 있는 각 물건을 하나씩 꺼내서 계산한다"'}</b> →
              장바구니(리스트)의 각 물건(항목)을 처리
            </li>
            <li>
              <b>{'"학생 명단의 각 학생 이름을 하나씩 불러본다"'}</b> →
              명단(리스트)의 각 이름(항목)을 처리
            </li>
          </ul>
          <p className="mt_ms">
            SCSS의 <code className="t_blue">@each</code>도 같은 원리입니다.{" "}
            <b>리스트나 맵의 각 항목을 하나씩 가져와서 처리</b>합니다.
          </p>
          <CodeBlock title="@each 기본 예시" language="css" className="mt_m">
            {`// 색상 리스트
$colors: red, blue, green;

// 각 색상을 하나씩 처리
@each $color in $colors {
  .text-#{$color} {
    color: $color;
  }
}`}
          </CodeBlock>
          <CodeBlock title="컴파일된 CSS" language="css" className="mt_m">
            {`.text-red {
  color: red;
}

.text-blue {
  color: blue;
}

.text-green {
  color: green;
}`}
          </CodeBlock>
          <p className="mt_ms">
            반복문을 사용하면{" "}
            <b>리스트의 각 항목에 대해 클래스를 자동으로 생성</b>할 수 있습니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">@for와 @each의 차이</h3>
          <p className="mt_m">
            <code className="t_blue">@for</code>와{" "}
            <code className="t_blue">@each</code>의 차이를 비교해봅니다.
          </p>
          <div className="table_summary value_150 mt_m">
            <ul className="lst_hd">
              <li className="cell value">구분</li>
              <li className="cell content">@for</li>
              <li className="cell content">@each</li>
            </ul>
            <ul className="lst_bd">
              <li>
                <p className="cell value t_darkgreen">반복 방식</p>
                <p className="cell content" data-title="@for">
                  숫자를 증가시키면서 반복
                </p>
                <p className="cell content" data-title="@each">
                  리스트/맵의 각 항목을 순회
                </p>
              </li>
              <li>
                <p className="cell value t_darkgreen">사용 시기</p>
                <p className="cell content" data-title="@for">
                  숫자 기반 반복이 필요할 때
                </p>
                <p className="cell content" data-title="@each">
                  데이터 구조를 순회할 때
                </p>
              </li>
              <li>
                <p className="cell value t_darkgreen">예시</p>
                <p className="cell content" data-title="@for">
                  <code>@for $i from 1 through 5</code>
                </p>
                <p className="cell content" data-title="@each">
                  <code>@each $color in $colors</code>
                </p>
              </li>
            </ul>
          </div>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">리스트 순회하기</h2>
        <p className="mt_l">
          <code className="t_blue">@each</code>를 사용하여{" "}
          <b>리스트의 각 항목을 순회</b>하는 방법을 알아봅니다.
          <br />
          색상·크기·간격처럼 순서 있는 값들을 리스트로 관리하면,{" "}
          <b>클래스 이름 규칙과 값 규칙을 한 번에 설계</b>할 수 있어 디자인
          시스템을 구현하기 수월해집니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">기본 문법</h3>
          <p className="mt_m">
            <code className="t_blue">@each</code> 뒤에 변수명과 리스트를
            지정합니다.
          </p>
          <CodeBlock title="@each 기본 문법" language="css" className="mt_m">
            {`@each $변수명 in 리스트 {
  // 반복할 코드
}`}
          </CodeBlock>
          <CodeBlock title="실제 예시" language="css" className="mt_m">
            {`$colors: red, blue, green;

@each $color in $colors {
  .bg-#{$color} {
    background-color: $color;
  }
}`}
          </CodeBlock>
          <CodeBlock title="컴파일된 CSS" language="css" className="mt_m">
            {`.bg-red {
  background-color: red;
}

.bg-blue {
  background-color: blue;
}

.bg-green {
  background-color: green;
}`}
          </CodeBlock>
          <p className="mt_ms">
            <code className="t_blue">$color</code>는{" "}
            <b>리스트의 각 항목(red, blue, green)을 하나씩 가져옵니다</b>.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">문자열 리스트 순회</h3>
          <p className="mt_m">
            문자열로 이루어진 리스트를 순회하는 예시입니다.
          </p>
          <CodeBlock title="문자열 리스트 예시" language="css" className="mt_m">
            {`$sizes: small, medium, large;

@each $size in $sizes {
  @if $size == 'small' {
    .text-#{$size} {
      font-size: 14px;
    }
  } @else if $size == 'medium' {
    .text-#{$size} {
      font-size: 16px;
    }
  } @else {
    .text-#{$size} {
      font-size: 18px;
    }
  }
}`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">숫자 리스트 순회</h3>
          <p className="mt_m">숫자로 이루어진 리스트를 순회하는 예시입니다.</p>
          <CodeBlock title="숫자 리스트 예시" language="css" className="mt_m">
            {`$spacings: 8px, 16px, 24px, 32px;

@each $spacing in $spacings {
  .p-#{$spacing} {
    padding: $spacing;
  }
}`}
          </CodeBlock>
          <p className="mt_ms">
            숫자 리스트를 순회하면 <b>각 숫자 값에 대해 클래스를 생성</b>할 수
            있습니다.
          </p>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">맵(Map) 순회하기</h2>
        <p className="mt_l">
          <code className="t_blue">@each</code>를 사용하여{" "}
          <b>맵의 각 키-값 쌍을 순회</b>하는 방법을 알아봅니다.
          <br />
          맵은 이름과 값을 함께 다룰 수 있기 때문에, 버튼 타입·알림 타입·브랜드
          색상처럼 <b>의미 있는 이름과 토큰 값을 연결</b>할 때 특히 유용합니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">맵이란?</h3>
          <p className="mt_m">
            맵은 <b>키(key)와 값(value)의 쌍</b>으로 이루어진 데이터 구조입니다.
            <br />
            JavaScript의 객체나 Python의 딕셔너리와 비슷합니다.
          </p>
          <CodeBlock title="맵 기본 예시" language="css" className="mt_m">
            {`// 맵 정의
$colors: (
  primary: #0a58ca,
  secondary: #6c757d,
  success: #28a745
);`}
          </CodeBlock>
          <p className="mt_ms">
            맵은 <b>관련 있는 데이터를 키-값 쌍으로 묶어서 관리</b>할 때
            유용합니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">맵 순회 기본 문법</h3>
          <p className="mt_m">
            맵을 순회할 때는 <b>키와 값을 각각 변수로 받습니다</b>.
          </p>
          <CodeBlock title="맵 순회 기본 문법" language="css" className="mt_m">
            {`@each $키변수, $값변수 in 맵 {
  /* 반복할 코드 */
}`}
          </CodeBlock>
          <CodeBlock title="실제 예시" language="css" className="mt_m">
            {`$colors: (
  primary: #0a58ca,
  secondary: #6c757d,
  success: #28a745
);

@each $name, $color in $colors {
  .btn-#{$name} {
    background-color: $color;
  }
}`}
          </CodeBlock>
          <CodeBlock title="컴파일된 CSS" language="css" className="mt_m">
            {`.btn-primary {
  background-color: #0a58ca;
}

.btn-secondary {
  background-color: #6c757d;
}

.btn-success {
  background-color: #28a745;
}`}
          </CodeBlock>
          <p className="mt_ms">
            <code className="t_blue">$name</code>은 키(primary, secondary,
            success)를, <code className="t_blue">$color</code>는 값(#0a58ca,
            #6c757d, #28a745)을 가져옵니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">맵 순회 활용 예시</h3>
          <p className="mt_m">
            맵을 순회하여 <b>버튼 스타일을 자동 생성</b>하는 예시입니다.
          </p>
          <CodeBlock
            title="버튼 스타일 자동 생성"
            language="css"
            className="mt_m"
          >
            {`$button-types: (
  primary: #0a58ca,
  secondary: #6c757d,
  success: #28a745,
  danger: #dc3545
);

@each $type, $color in $button-types {
  .button-#{$type} {
    background: $color;
    color: #ffffff;
    padding: 8px 16px;
    border-radius: 4px;

    &:hover {
      background: darken($color, 10%);
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
            {`.button-primary {
  background: #0a58ca;
  color: #ffffff;
  padding: 8px 16px;
  border-radius: 4px;
}
.button-primary:hover {
  background: #084298; /* darken(#0a58ca, 10%) */
}

.button-secondary {
  background: #6c757d;
  color: #ffffff;
  padding: 8px 16px;
  border-radius: 4px;
}
.button-secondary:hover {
  background: #565e64; /* darken(#6c757d, 10%) */
}

/* ... 이하 생략 ... */`}
          </CodeBlock>
          <p className="mt_ms">
            이렇게 하면 <b>4개의 버튼 타입에 대한 스타일이 자동으로 생성</b>
            됩니다.
          </p>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">중첩 리스트/맵 순회</h2>
        <p className="mt_l">
          <b>중첩된 리스트나 맵</b>을 순회하는 방법을 알아봅니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">중첩 리스트 순회</h3>
          <p className="mt_m">
            리스트 안에 리스트가 있는 경우,{" "}
            <b>여러 변수로 각 항목을 받을 수 있습니다</b>.
          </p>
          <CodeBlock title="중첩 리스트 예시" language="css" className="mt_m">
            {`// 중첩 리스트: (이름, 색상) 쌍
$color-list: (primary #0a58ca), (secondary #6c757d), (success #28a745);

@each $name, $color in $color-list {
  .text-#{$name} {
    color: $color;
  }
}`}
          </CodeBlock>
          <CodeBlock title="컴파일된 CSS" language="css" className="mt_m">
            {`.text-primary {
  color: #0a58ca;
}

.text-secondary {
  color: #6c757d;
}

.text-success {
  color: #28a745;
}`}
          </CodeBlock>
          <p className="mt_ms">
            중첩 리스트를 순회하면 <b>여러 값을 한 번에 처리</b>할 수 있습니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">중첩 맵 순회</h3>
          <p className="mt_m">맵 안에 맵이 있는 경우도 순회할 수 있습니다.</p>
          <CodeBlock title="중첩 맵 예시" language="css" className="mt_m">
            {`$theme-colors: (
  light: (
    bg: #ffffff,
    text: #000000
  ),
  dark: (
    bg: #000000,
    text: #ffffff
  )
);

@each $theme-name, $colors in $theme-colors {
  [data-theme="#{$theme-name}"] {
    background: map-get($colors, bg);
    color: map-get($colors, text);
  }
}`}
          </CodeBlock>
          <CodeBlock title="컴파일된 CSS" language="css" className="mt_m">
            {`[data-theme="light"] {
  background: #ffffff;
  color: #000000;
}

[data-theme="dark"] {
  background: #000000;
  color: #ffffff;
}`}
          </CodeBlock>
          <p className="mt_ms">
            이렇게 하면 <b>중첩된 맵 구조도 순회</b>할 수 있습니다.
          </p>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">실제 활용 예시</h2>
        <p className="mt_l">
          <code className="t_blue">@each</code>를 <b>실제 프로젝트에서 활용</b>
          하는 예시를 살펴봅니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">색상 팔레트 자동 생성</h3>
          <p className="mt_m">
            색상 맵을 순회하여 <b>색상 유틸리티 클래스를 자동 생성</b>하는
            예시입니다.
          </p>
          <CodeBlock title="색상 팔레트 예시" language="css" className="mt_m">
            {`$color-palette: (
  primary: #0a58ca,
  secondary: #6c757d,
  success: #28a745,
  danger: #dc3545,
  warning: #ffc107
);

@each $name, $color in $color-palette {
  .bg-#{$name} {
    background-color: $color;
  }

  .text-#{$name} {
    color: $color;
  }

  .border-#{$name} {
    border-color: $color;
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

.text-secondary {
  color: #6c757d;
}

.border-secondary {
  border-color: #6c757d;
}

.bg-success {
  background-color: #28a745;
}

.text-success {
  color: #28a745;
}

.border-success {
  border-color: #28a745;
}

.bg-danger {
  background-color: #dc3545;
}

.text-danger {
  color: #dc3545;
}

.border-danger {
  border-color: #dc3545;
}

.bg-warning {
  background-color: #ffc107;
}

.text-warning {
  color: #ffc107;
}

.border-warning {
  border-color: #ffc107;
}`}
          </CodeBlock>
          <p className="mt_ms">
            이렇게 하면{" "}
            <b>
              5개 색상에 대해 3가지 유틸리티(배경, 텍스트, 테두리)가 자동으로
              생성
            </b>
            되어 총 15개의 클래스가 만들어집니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">아이콘 폰트 클래스 생성</h3>
          <p className="mt_m">
            아이콘 이름 리스트를 순회하여 <b>아이콘 클래스를 자동 생성</b>하는
            예시입니다.
          </p>
          <CodeBlock title="아이콘 클래스 예시" language="css" className="mt_m">
            {`$icons: home, user, settings, search, menu;

@each $icon in $icons {
  .icon-#{$icon}::before {
    content: "";
    display: inline-block;
    width: 16px;
    height: 16px;
    background-image: url("icons/#{$icon}.svg");
  }
}`}
          </CodeBlock>
          <CodeBlock
            title="컴파일된 CSS"
            filename="컴파일된 CSS"
            defaultOpen={false}
            language="css"
            className="mt_ms"
          >
            {`.icon-home::before {
  content: "";
  display: inline-block;
  width: 16px;
  height: 16px;
  background-image: url("icons/home.svg");
}

.icon-user::before {
  content: "";
  display: inline-block;
  width: 16px;
  height: 16px;
  background-image: url("icons/user.svg");
}

.icon-settings::before {
  content: "";
  display: inline-block;
  width: 16px;
  height: 16px;
  background-image: url("icons/settings.svg");
}

.icon-search::before {
  content: "";
  display: inline-block;
  width: 16px;
  height: 16px;
  background-image: url("icons/search.svg");
}

.icon-menu::before {
  content: "";
  display: inline-block;
  width: 16px;
  height: 16px;
  background-image: url("icons/menu.svg");
}`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">브레이크포인트별 스타일 생성</h3>
          <p className="mt_m">
            브레이크포인트 맵을 순회하여 <b>반응형 유틸리티를 자동 생성</b>하는
            예시입니다.
          </p>
          <CodeBlock
            title="브레이크포인트 예시"
            language="css"
            className="mt_m"
          >
            {`$breakpoints: (
  sm: 576px,
  md: 768px,
  lg: 992px,
  xl: 1200px
);

@each $name, $size in $breakpoints {
  @media (min-width: $size) {
    .container-#{$name} {
      max-width: $size;
    }
  }
}`}
          </CodeBlock>
          <CodeBlock
            title="컴파일된 CSS"
            filename="컴파일된 CSS"
            defaultOpen={false}
            language="css"
            className="mt_ms"
          >
            {`@media (min-width: 576px) {
  .container-sm {
    max-width: 576px;
  }
}

@media (min-width: 768px) {
  .container-md {
    max-width: 768px;
  }
}

@media (min-width: 992px) {
  .container-lg {
    max-width: 992px;
  }
}

@media (min-width: 1200px) {
  .container-xl {
    max-width: 1200px;
  }
}`}
          </CodeBlock>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">조건문과 함께 사용</h2>
        <p className="mt_l">
          <code className="t_blue">@each</code> 안에서 <b>조건문을 사용</b>하여
          더 유연한 코드를 작성할 수 있습니다.
          <br />
          아래는 <code className="t_blue">@each</code> 안에서{" "}
          <b>조건문으로 특정 항목만 처리</b>하는 예시입니다.
        </p>
        <CodeBlock title="조건문과 @each 조합" language="css" className="mt_m">
          {`$colors: (
  primary: #0a58ca,
  secondary: #6c757d,
  success: #28a745,
  danger: #dc3545
);

@each $name, $color in $colors {
  // primary와 success만 처리
  @if $name == 'primary' or $name == 'success' {
    .button-#{$name} {
      background: $color;
    }
  }
}`}
        </CodeBlock>
        <p className="mt_m">
          이렇게 하면 <b>특정 조건을 만족하는 항목만 처리</b>할 수 있습니다.
        </p>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">@for와 @each 비교</h2>
        <p className="mt_l">
          <code className="t_blue">@for</code>와{" "}
          <code className="t_blue">@each</code>를 <b>언제 사용할지</b>{" "}
          비교해봅니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">@for를 사용하는 경우</h3>
          <p className="mt_m">
            다음과 같은 경우에는 <b>@for를 사용</b>하는 것이 좋습니다:
          </p>
          <ul className="dot_lst mt_sm indent_small">
            <li>
              <b>숫자 기반 반복</b>: 1부터 10까지 같은 패턴으로 반복
            </li>
            <li>
              <b>순차적 증가</b>: 숫자가 1씩 증가하면서 반복
            </li>
            <li>
              <b>계산 기반</b>: 숫자를 계산하여 값 생성
            </li>
          </ul>
          <CodeBlock title="@for 사용 예시" language="css" className="mt_m">
            {`// @for 사용 적합
@for $i from 1 through 10 {
  .mt-#{$i} {
    margin-top: #{$i * 8}px;
  }
}`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">@each를 사용하는 경우</h3>
          <p className="mt_m">
            다음과 같은 경우에는 <b>@each를 사용</b>하는 것이 좋습니다:
          </p>
          <ul className="dot_lst mt_sm indent_small">
            <li>
              <b>데이터 구조 순회</b>: 리스트나 맵의 각 항목을 처리
            </li>
            <li>
              <b>이름 기반 반복</b>: 색상 이름, 아이콘 이름 등 의미 있는
              이름으로 반복
            </li>
            <li>
              <b>키-값 쌍 처리</b>: 맵의 키와 값을 함께 사용
            </li>
          </ul>
          <CodeBlock title="@each 사용 예시" language="css" className="mt_m">
            {`// @each 사용 적합
$colors: (
  primary: #0a58ca,
  secondary: #6c757d
);

@each $name, $color in $colors {
  .btn-#{$name} {
    background: $color;
  }
}`}
          </CodeBlock>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">정리</h2>
        <p className="mt_l">
          <code>@each</code> 반복문 사용법에 대해 알아본 내용을 정리합니다.
        </p>
        <ul className="dot_lst mt_m indent_small">
          <li>
            <b>@each의 개념</b>: 리스트나 맵의 각 항목을 하나씩 순회하면서 코드
            실행
          </li>
          <li>
            <b>리스트 순회</b>: <code>@each $변수 in</code> 리스트 형태로 순회
          </li>
          <li>
            <b>맵 순회</b>: <code>@each $키, $값 in 맵</code> 형태로 키-값 쌍
            순회
          </li>
          <li>
            <b>중첩 구조</b>: 중첩된 리스트나 맵도 순회 가능
          </li>
          <li>
            <b>활용 예시</b>: 색상 팔레트, 아이콘 클래스, 브레이크포인트별
            스타일 생성
          </li>
          <li>
            <b>조건문과 조합</b>: @each 안에서 조건문 사용 가능
          </li>
          <li>
            <b>@for와 비교</b>: 숫자 기반은 <code>@for</code>, 데이터 구조는{" "}
            <code>@each</code>
          </li>
        </ul>
        <p className="mt_m">
          다음 페이지에서는 <b>반복문을 활용한 클래스 자동 생성</b>을 자세히
          알아봅니다.
        </p>
      </section>

      <figure className="img_figure mt_l">
        <img src={IMG.SCSS + "/08_scss_03.png"} alt="@each 반복문" />
        <figcaption>@each 반복문</figcaption>
      </figure>
    </>
  );
}

export default EachLoopPage;
