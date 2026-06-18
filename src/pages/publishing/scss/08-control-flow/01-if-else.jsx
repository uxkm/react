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
  title: "@if, @else 조건문 이해하기",
  description:
    "SCSS 조건문(@if, @else, @else if)을 상세히 알아봅니다. 조건문의 기본 개념, 문법, 다양한 사용 예시, 믹스인과 함께 사용하는 방법, 그리고 초급자가 이해하기 쉬운 예제 중심으로 설명합니다.",
  keyword:
    "scss 조건문, scss @if, scss @else, scss 조건, scss if else, scss 제어문",
};

function IfElsePage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          <b>조건문</b>은 SCSS에서 <b>조건에 따라 다른 스타일을 적용</b>할 수
          있게 해주는 기능입니다.
          <br />
          <code className="t_blue">@if</code>,{" "}
          <code className="t_blue">@else</code>,{" "}
          <code className="t_blue">@else if</code>를 사용하여{" "}
          <b>상황에 맞는 스타일을 동적으로 생성</b>할 수 있습니다.
        </p>
        <p className="mt_s">
          이 페이지에서는 조건문의 기본 개념, 문법, 다양한 사용 예시, 믹스인과
          함께 사용하는 방법을 초급자가 이해하기 쉬운 예제 중심으로 상세히
          알아봅니다.
        </p>
      </blockquote>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">조건문이란?</h2>
        <p className="mt_l">
          조건문은 <b>{'"만약 ~라면"'}</b>이라는 조건에 따라 다른 코드를
          실행하는 기능입니다.
          <br />
          SCSS에서 조건문을 사용하면 <b>상황에 따라 다른 스타일을 적용</b>할 수
          있고, 테마나 상태에 따라 스타일을 분기하는 등{" "}
          <b>유연한 디자인 구현</b>이 가능해집니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">조건문의 기본 개념</h3>
          <p className="mt_m">일상 생활에서도 조건문을 사용합니다:</p>
          <ul className="dot_lst mt_sm indent_small">
            <li>
              <b>
                {
                  '"만약 비가 오면 우산을 가져가고, 그렇지 않으면 가져가지 않는다"'
                }
              </b>
            </li>
            <li>
              <b>
                {
                  '"만약 점수가 90점 이상이면 A, 80점 이상이면 B, 그렇지 않으면 C"'
                }
              </b>
            </li>
          </ul>
          <p className="mt_ms">
            SCSS 조건문도 같은 원리입니다.{" "}
            <b>조건을 확인하고 그에 맞는 스타일을 적용</b>합니다.
          </p>
          <CodeBlock title="조건문 기본 예시" language="css" className="mt_m">
            {`// 만약 $theme가 'dark'라면 어두운 배경 사용
$theme: 'dark';

@if $theme == 'dark' {
  body {
    background: #000000;
    color: #ffffff;
  }
}`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">조건문이 필요한 이유</h3>
          <p className="mt_m">
            조건문을 사용하면 <b>하나의 믹스인이나 함수로 여러 상황을 처리</b>할
            수 있습니다.
          </p>
          <CodeBlock title="조건문 없이 작성" language="css" className="mt_m">
            {`// 조건문 없이 여러 믹스인을 만들어야 함
@mixin button-primary {
  background: #0a58ca;
  color: #ffffff;
}

@mixin button-secondary {
  background: #6c757d;
  color: #ffffff;
}

@mixin button-success {
  background: #28a745;
  color: #ffffff;
}

// 각각 따로 사용해야 함
.button-primary {
  @include button-primary;
}`}
          </CodeBlock>
          <CodeBlock title="조건문 사용" language="css" className="mt_m">
            {`// 조건문으로 하나의 믹스인으로 처리
@mixin button($type) {
  @if $type == 'primary' {
    background: #0a58ca;
  } @else if $type == 'secondary' {
    background: #6c757d;
  } @else if $type == 'success' {
    background: #28a745;
  }

  color: #ffffff;
}

.button-primary {
  @include button('primary');
}`}
          </CodeBlock>
          <p className="mt_ms">
            조건문을 사용하면 <b>하나의 믹스인으로 여러 상황을 처리</b>할 수
            있어 코드가 훨씬 간결해집니다.
          </p>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">@if 기본 문법</h2>
        <p className="mt_l">
          <code className="t_blue">@if</code>는 <b>가장 기본적인 조건문</b>
          입니다.
          <br />
          조건을 어떻게 작성하고, 어떤 블록이 실행되는지 이해해 두면 이후{" "}
          <code className="t_blue">@else</code>,{" "}
          <code className="t_blue">@else if</code>를 조합할 때도{" "}
          <b>예측 가능한 스타일 분기</b>를 만들 수 있습니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">기본 구조</h3>
          <p className="mt_m">
            <code className="t_blue">@if</code> 뒤에 조건을 쓰고, 중괄호 안에
            실행할 코드를 작성합니다.
          </p>
          <CodeBlock title="@if 기본 구조" language="css" className="mt_m">
            {`@if 조건 {
  // 조건이 참일 때 실행할 코드
}`}
          </CodeBlock>
          <CodeBlock title="실제 예시" language="css" className="mt_m">
            {`$is-dark: true;

@if $is-dark {
  body {
    background: #000000;
    color: #ffffff;
  }
}`}
          </CodeBlock>
          <p className="mt_ms">
            <code className="t_blue">$is-dark</code>가{" "}
            <code className="t_blue">true</code>이면 중괄호 안의 코드가
            실행됩니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">비교 연산자</h3>
          <p className="mt_m">
            조건문에서 사용할 수 있는 <b>비교 연산자</b>들입니다.
          </p>
          <div className="table_summary value_150 mt_m">
            <ul className="lst_hd">
              <li className="cell value">연산자</li>
              <li className="cell content">의미</li>
              <li className="cell content">예시</li>
            </ul>
            <ul className="lst_bd">
              <li>
                <p className="cell value">
                  <code className="t_darkgreen">==</code>
                </p>
                <p className="cell content" data-title="의미">
                  같다
                </p>
                <p className="cell content" data-title="예시">
                  <code>$color == 'red'</code>
                </p>
              </li>
              <li>
                <p className="cell value">
                  <code className="t_darkgreen">!=</code>
                </p>
                <p className="cell content" data-title="의미">
                  다르다
                </p>
                <p className="cell content" data-title="예시">
                  <code>$color != 'red'</code>
                </p>
              </li>
              <li>
                <p className="cell value">
                  <code className="t_darkgreen">{">"}</code>
                </p>
                <p className="cell content" data-title="의미">
                  보다 크다
                </p>
                <p className="cell content" data-title="예시">
                  <code>{"$size > 10"}</code>
                </p>
              </li>
              <li>
                <p className="cell value">
                  <code className="t_darkgreen">{"<"}</code>
                </p>
                <p className="cell content" data-title="의미">
                  보다 작다
                </p>
                <p className="cell content" data-title="예시">
                  <code>{"$size < 10"}</code>
                </p>
              </li>
              <li>
                <p className="cell value">
                  <code className="t_darkgreen">{">="}</code>
                </p>
                <p className="cell content" data-title="의미">
                  보다 크거나 같다
                </p>
                <p className="cell content" data-title="예시">
                  <code>{"$size >= 10"}</code>
                </p>
              </li>
              <li>
                <p className="cell value">
                  <code className="t_darkgreen">{"<="}</code>
                </p>
                <p className="cell content" data-title="의미">
                  보다 작거나 같다
                </p>
                <p className="cell content" data-title="예시">
                  <code>{"$size <= 10"}</code>
                </p>
              </li>
            </ul>
          </div>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">간단한 예시</h3>
          <p className="mt_m">
            조건문을 사용한 <b>간단한 예시</b>를 살펴봅니다.
          </p>
          <CodeBlock title="간단한 조건문 예시" language="css" className="mt_m">
            {`$theme: 'dark';

@if $theme == 'dark' {
  body {
    background: #000000;
    color: #ffffff;
  }
}`}
          </CodeBlock>
          <CodeBlock title="컴파일된 CSS" language="css" className="mt_m">
            {`body {
  background: #000000;
  color: #ffffff;
}`}
          </CodeBlock>
          <p className="mt_ms">
            <code className="t_blue">$theme</code>가{" "}
            <code className="t_blue">'dark'</code>이므로 조건이 참이 되어
            스타일이 적용됩니다.
          </p>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">@else 사용하기</h2>
        <p className="mt_l">
          <code className="t_blue">@else</code>는 <b>조건이 거짓일 때 실행</b>할
          코드를 작성합니다.
          <br />
          다크/라이트 테마처럼 두 가지 경우를 나누는 상황에서, @else를 함께
          사용하면 <b>모든 경우를 빠짐없이 처리</b>할 수 있어 스타일 누락을
          방지할 수 있습니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">@else 기본 구조</h3>
          <p className="mt_m">
            <code className="t_blue">@if</code> 뒤에{" "}
            <code className="t_blue">@else</code>를 추가하여 두 가지 경우를
            처리할 수 있습니다.
          </p>
          <CodeBlock title="@else 기본 구조" language="css" className="mt_m">
            {`@if 조건 {
  // 조건이 참일 때
} @else {
  // 조건이 거짓일 때
}`}
          </CodeBlock>
          <CodeBlock title="실제 예시" language="css" className="mt_m">
            {`$theme: 'light';

@if $theme == 'dark' {
  body {
    background: #000000;
    color: #ffffff;
  }
} @else {
  body {
    background: #ffffff;
    color: #000000;
  }
}`}
          </CodeBlock>
          <CodeBlock title="컴파일된 CSS" language="css" className="mt_m">
            {`body {
  background: #ffffff;
  color: #000000;
}`}
          </CodeBlock>
          <p className="mt_ms">
            <code className="t_blue">$theme</code>가{" "}
            <code className="t_blue">'dark'</code>가 아니므로{" "}
            <code className="t_blue">@else</code> 블록이 실행됩니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">실제 활용 예시</h3>
          <p className="mt_m">
            <code className="t_blue">@else</code>를 사용한 <b>실제 활용 예시</b>
            를 살펴봅니다.
          </p>
          <CodeBlock title="버튼 크기 예시" language="css" className="mt_m">
            {`@mixin button($size) {
  @if $size == 'large' {
    padding: 12px 24px;
    font-size: 18px;
  } @else {
    padding: 8px 16px;
    font-size: 16px;
  }
}

.button-large {
  @include button('large');
}

.button-normal {
  @include button('normal');
}`}
          </CodeBlock>
          <p className="mt_ms">
            이렇게 하면 <b>크기에 따라 다른 패딩과 폰트 크기</b>를 적용할 수
            있습니다.
          </p>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">@else if 사용하기</h2>
        <p className="mt_l">
          <code className="t_blue">@else if</code>는{" "}
          <b>여러 조건을 순차적으로 확인</b>할 때 사용합니다.
          <br />
          등급, 상태, 크기처럼 경우의 수가 셋 이상인 상황에서,{" "}
          <b>조건 순서와 범위를 잘 설계</b>하면 유지보수가 쉬운 분기 구조를 만들
          수 있습니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">@else if 기본 구조</h3>
          <p className="mt_m">
            <code className="t_blue">@if</code>와{" "}
            <code className="t_blue">@else</code> 사이에{" "}
            <code className="t_blue">@else if</code>를 추가하여 여러 조건을
            확인할 수 있습니다.
          </p>
          <CodeBlock title="@else if 기본 구조" language="css" className="mt_m">
            {`@if 조건1 {
  // 조건1이 참일 때
} @else if 조건2 {
  // 조건2가 참일 때
} @else {
  // 모든 조건이 거짓일 때
}`}
          </CodeBlock>
          <CodeBlock title="실제 예시" language="css" className="mt_m">
            {`$size: 'medium';

@if $size == 'small' {
  .container {
    padding: 8px;
  }
} @else if $size == 'medium' {
  .container {
    padding: 16px;
  }
} @else if $size == 'large' {
  .container {
    padding: 24px;
  }
} @else {
  .container {
    padding: 16px;  // 기본값
  }
}`}
          </CodeBlock>
          <CodeBlock title="컴파일된 CSS" language="css" className="mt_m">
            {`.container {
  padding: 16px;
}`}
          </CodeBlock>
          <p className="mt_ms">
            <code className="t_blue">$size</code>가{" "}
            <code className="t_blue">'medium'</code>이므로 두 번째 조건이 참이
            되어 해당 스타일이 적용됩니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">여러 조건 확인 예시</h3>
          <p className="mt_m">
            <code className="t_blue">@else if</code>를 여러 번 사용하여{" "}
            <b>여러 조건을 확인</b>하는 예시입니다.
          </p>
          <CodeBlock title="여러 조건 예시" language="css" className="mt_m">
            {`@mixin button($type) {
  @if $type == 'primary' {
    background: #0a58ca;
    color: #ffffff;
  } @else if $type == 'secondary' {
    background: #6c757d;
    color: #ffffff;
  } @else if $type == 'success' {
    background: #28a745;
    color: #ffffff;
  } @else if $type == 'danger' {
    background: #dc3545;
    color: #ffffff;
  } @else {
    background: #f8f9fa;
    color: #212529;
  }
}

.button-primary {
  @include button('primary');
}`}
          </CodeBlock>
          <CodeBlock title="컴파일된 CSS" language="css" className="mt_m">
            {`.button-primary {
  background: #0a58ca;
  color: #ffffff;
}`}
          </CodeBlock>
          <p className="mt_ms">
            이렇게 하면 <b>버튼 타입에 따라 다른 색상</b>을 적용할 수 있습니다.
          </p>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">논리 연산자 사용</h2>
        <p className="mt_l">
          <b>논리 연산자</b>를 사용하여 더 복잡한 조건을 만들 수 있습니다.
          <br />
          <code className="t_blue">and</code>,{" "}
          <code className="t_blue">or</code>,{" "}
          <code className="t_blue">not</code> 같은 연산자를 이해해 두면,{" "}
          <b>디자인 시스템의 다양한 상태 조합</b>을 깔끔하게 표현할 수 있습니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">and 연산자</h3>
          <p className="mt_m">
            <code className="t_blue">and</code>는 <b>모든 조건이 참일 때</b>만
            실행합니다.
          </p>
          <CodeBlock title="and 연산자 예시" language="css" className="mt_m">
            {`$theme: 'dark';
$size: 'large';

@if $theme == 'dark' and $size == 'large' {
  body {
    background: #000000;
    font-size: 18px;
  }
}`}
          </CodeBlock>
          <p className="mt_ms">
            <code className="t_blue">$theme</code>가{" "}
            <code className="t_blue">'dark'</code>이고{" "}
            <code className="t_blue">$size</code>가{" "}
            <code className="t_blue">'large'</code>일 때만 실행됩니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">or 연산자</h3>
          <p className="mt_m">
            <code className="t_blue">or</code>는 <b>하나라도 조건이 참이면</b>{" "}
            실행합니다.
          </p>
          <CodeBlock title="or 연산자 예시" language="css" className="mt_m">
            {`$device: 'mobile';

@if $device == 'mobile' or $device == 'tablet' {
  .container {
    width: 100%;
  }
}`}
          </CodeBlock>
          <p className="mt_ms">
            <code className="t_blue">$device</code>가{" "}
            <code className="t_blue">'mobile'</code>이거나{" "}
            <code className="t_blue">'tablet'</code>이면 실행됩니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">not 연산자</h3>
          <p className="mt_m">
            <code className="t_blue">not</code>은 <b>조건을 반대로</b> 만듭니다.
          </p>
          <CodeBlock title="not 연산자 예시" language="css" className="mt_m">
            {`$is-mobile: false;

@if not $is-mobile {
  .container {
    max-width: 1200px;
  }
}`}
          </CodeBlock>
          <p className="mt_ms">
            <code className="t_blue">$is-mobile</code>가{" "}
            <code className="t_blue">false</code>이면 (즉, 모바일이 아니면)
            실행됩니다.
          </p>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">믹스인과 함께 사용</h2>
        <p className="mt_l">
          조건문은 <b>믹스인과 함께 사용</b>하면 매우 강력합니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">파라미터에 따른 조건 분기</h3>
          <p className="mt_m">
            믹스인의 파라미터에 따라 <b>조건문으로 다른 스타일을 적용</b>할 수
            있습니다.
          </p>
          <CodeBlock
            title="믹스인과 조건문 예시"
            language="css"
            className="mt_m"
          >
            {`@mixin button($type, $size: 'medium') {
  // 타입에 따른 색상
  @if $type == 'primary' {
    background: #0a58ca;
  } @else if $type == 'secondary' {
    background: #6c757d;
  } @else {
    background: #f8f9fa;
  }

  // 크기에 따른 패딩
  @if $size == 'small' {
    padding: 6px 12px;
    font-size: 14px;
  } @else if $size == 'large' {
    padding: 12px 24px;
    font-size: 18px;
  } @else {
    padding: 8px 16px;
    font-size: 16px;
  }

  color: #ffffff;
  border-radius: 4px;
}

.button {
  @include button('primary', 'large');
}`}
          </CodeBlock>
          <p className="mt_ms">
            이렇게 하면 <b>타입과 크기에 따라 다양한 버튼 스타일</b>을 하나의
            믹스인으로 만들 수 있습니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">조건부 속성 적용</h3>
          <p className="mt_m">
            조건에 따라 <b>특정 속성만 적용</b>할 수도 있습니다.
          </p>
          <CodeBlock title="조건부 속성 예시" language="css" className="mt_m">
            {`@mixin card($shadow: true) {
  background: #ffffff;
  border-radius: 8px;
  padding: 16px;

  @if $shadow {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
}

.card-with-shadow {
  @include card(true);
}

.card-no-shadow {
  @include card(false);
}`}
          </CodeBlock>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">실제 활용 예시</h2>
        <p className="mt_l">
          조건문을 <b>실제 프로젝트에서 활용</b>하는 예시를 살펴봅니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">반응형 그리드 시스템</h3>
          <p className="mt_m">
            컬럼 개수에 따라 <b>다른 그리드 스타일을 적용</b>하는 예시입니다.
          </p>
          <CodeBlock title="반응형 그리드 예시" language="css" className="mt_m">
            {`@mixin grid($columns) {
  display: grid;
  gap: 16px;

  @if $columns == 1 {
    grid-template-columns: 1fr;
  } @else if $columns == 2 {
    grid-template-columns: repeat(2, 1fr);
  } @else if $columns == 3 {
    grid-template-columns: repeat(3, 1fr);
  } @else if $columns == 4 {
    grid-template-columns: repeat(4, 1fr);
  } @else {
    grid-template-columns: repeat(12, 1fr);
  }
}

.grid-2 {
  @include grid(2);
}

.grid-3 {
  @include grid(3);
}`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">테마 시스템</h3>
          <p className="mt_m">
            테마에 따라 <b>다른 색상을 적용</b>하는 예시입니다.
          </p>
          <CodeBlock title="테마 시스템 예시" language="css" className="mt_m">
            {`@mixin theme($theme-name) {
  @if $theme-name == 'light' {
    --bg-color: #ffffff;
    --text-color: #000000;
  } @else if $theme-name == 'dark' {
    --bg-color: #000000;
    --text-color: #ffffff;
  } @else if $theme-name == 'blue' {
    --bg-color: #0a58ca;
    --text-color: #ffffff;
  }
}

:root {
  @include theme('light');
}

[data-theme="dark"] {
  @include theme('dark');
}`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">유틸리티 클래스 생성</h3>
          <p className="mt_m">
            조건문을 사용하여 <b>유틸리티 클래스를 동적으로 생성</b>할 수
            있습니다.
          </p>
          <CodeBlock
            title="유틸리티 클래스 예시"
            language="css"
            className="mt_m"
          >
            {`@mixin spacing-utility($direction, $size) {
  @if $direction == 'margin' {
    margin: $size;
  } @else if $direction == 'padding' {
    padding: $size;
  }

  @if $size == 'small' {
    $value: 8px;
  } @else if $size == 'medium' {
    $value: 16px;
  } @else {
    $value: 24px;
  }
}

.mt-small {
  @include spacing-utility('margin', 'small');
}`}
          </CodeBlock>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">조건문 사용 시 주의사항</h2>
        <p className="mt_l">
          조건문을 사용할 때 <b>주의해야 할 사항</b>들을 정리합니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">조건 순서</h3>
          <p className="mt_m">
            조건은 <b>위에서 아래로 순차적으로 확인</b>됩니다.
            <br />
            먼저 만족하는 조건이 실행되므로, <b>순서가 중요</b>합니다.
          </p>
          <CodeBlock title="조건 순서 예시" language="css" className="mt_m">
            {`$size: 15;

// 잘못된 순서
@if $size > 10 {
  // 이 조건이 먼저 실행됨
} @else if $size > 20 {
  // 이 조건은 실행되지 않음
}

// 올바른 순서
@if $size > 20 {
  // 더 구체적인 조건을 먼저
} @else if $size > 10 {
  // 그 다음 조건
}`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">기본값 처리</h3>
          <p className="mt_m">
            모든 조건이 만족되지 않을 경우를 대비하여{" "}
            <b>@else로 기본값을 제공</b>하는 것이 좋습니다.
          </p>
          <CodeBlock title="기본값 처리 예시" language="css" className="mt_m">
            {`@mixin button($type) {
  @if $type == 'primary' {
    background: #0a58ca;
  } @else if $type == 'secondary' {
    background: #6c757d;
  } @else {
    // 예상하지 못한 값에 대한 기본값
    background: #f8f9fa;
  }
}`}
          </CodeBlock>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">정리</h2>
        <p className="mt_l">
          <code>@if</code>, <code>@else</code> 조건문에 대해 알아본 내용을
          정리합니다.
        </p>
        <ul className="dot_lst mt_m indent_small">
          <li>
            <b>조건문의 개념</b>: 조건에 따라 다른 스타일을 적용하는 기능
          </li>
          <li>
            <b>@if 기본 문법</b>: 조건이 참일 때 실행할 코드 작성
          </li>
          <li>
            <b>@else</b>: 조건이 거짓일 때 실행할 코드 작성
          </li>
          <li>
            <b>@else if</b>: 여러 조건을 순차적으로 확인
          </li>
          <li>
            <b>논리 연산자</b>: <code>and</code>, <code>or</code>,{" "}
            <code>not</code>을 사용하여 복잡한 조건 생성
          </li>
          <li>
            <b>믹스인과 함께 사용</b>: 파라미터에 따라 조건 분기, 조건부 속성
            적용
          </li>
          <li>
            <b>활용 예시</b>: 반응형 그리드, 테마 시스템, 유틸리티 클래스 생성
          </li>
          <li>
            <b>주의사항</b>: 조건 순서, 기본값 처리
          </li>
        </ul>
        <p className="mt_m">
          다음 페이지에서는 <b>@for 반복문의 기본 구조</b>를 자세히 알아봅니다.
        </p>
      </section>

      <figure className="img_figure mt_l">
        <img src={IMG.SCSS + "/08_scss_01.png"} alt="@if, @else 조건문" />
        <figcaption>@if, @else 조건문</figcaption>
      </figure>
    </>
  );
}

export default IfElsePage;
