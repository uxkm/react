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
  title: "@mixin과 @include 기본 문법",
  description:
    "SCSS 믹스인의 기본 문법을 상세히 알아봅니다. @mixin으로 믹스인을 정의하는 방법, @include로 믹스인을 사용하는 방법, 믹스인 내부에서 @content 사용법, 그리고 실제 예시를 단계별로 설명합니다.",
  keyword:
    "scss @mixin, scss @include, scss 믹스인 문법, scss @content, scss 믹스인 사용법",
};

function BasicSyntaxPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          SCSS 믹스인은 <code className="t_blue">@mixin</code>으로 정의하고{" "}
          <code className="t_blue">@include</code>로 사용합니다.
          <br />
          기본 문법을 익히면{" "}
          <b>재사용 가능한 스타일 블록을 효율적으로 만들고 사용</b>할 수
          있습니다.
        </p>
        <p className="mt_s">
          이 페이지에서는 @mixin과 @include의 기본 문법, @content를 사용한 동적
          콘텐츠 삽입, 그리고 실제 사용 예시를 상세히 알아봅니다.
        </p>
      </blockquote>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">@mixin - 믹스인 정의</h2>
        <p className="mt_l">
          <code className="t_blue">@mixin</code>은 <b>믹스인을 정의</b>할 때
          사용하는 키워드입니다.
          <br />
          믹스인의 이름과 안에 들어갈 스타일 블록을 어떻게 구성하는지가 이후
          재사용성과 가독성에 큰 영향을 주기 때문에, 기본 문법을 확실히 정리해
          두는 것이 좋습니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">기본 문법</h3>
          <p className="mt_m">
            <code className="t_blue">@mixin</code> 뒤에 믹스인 이름을 쓰고,
            중괄호 안에 스타일을 작성합니다.
          </p>
          <CodeBlock title="@mixin 기본 문법" language="css" className="mt_m">
            {`@mixin 믹스인-이름 {
  속성: 값;
  속성: 값;
}`}
          </CodeBlock>
          <CodeBlock title="실제 예시" language="css" className="mt_m">
            {`@mixin button-style {
  padding: 8px 16px;
  background: #0a58ca;
  color: #ffffff;
  border-radius: 4px;
}`}
          </CodeBlock>
          <p className="mt_ms">
            믹스인 이름은 <b>변수명과 동일한 규칙</b>을 따릅니다 (영문자, 숫자,
            하이픈, 언더스코어 사용 가능).
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">믹스인 네이밍 규칙</h3>
          <p className="mt_m">
            믹스인 이름은 <b>의미를 명확하게 전달</b>하는 것이 좋습니다.
          </p>
          <CodeBlock title="좋은 네이밍 예시" language="css" className="mt_m">
            {`// ✅ 좋은 예시: 용도가 명확함
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
@mixin card-shadow {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

// ❌ 나쁜 예시: 의미가 불명확함
@mixin style1 {  // 무엇을 하는지 알 수 없음
  // ...
}
`}
          </CodeBlock>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">@include - 믹스인 사용</h2>
        <p className="mt_l">
          <code className="t_blue">@include</code>는{" "}
          <b>정의한 믹스인을 불러와 사용</b>할 때 사용하는 키워드입니다.
          <br />
          어디에서, 어떤 순서로 믹스인을 포함시키는지에 따라 최종 스타일이
          달라질 수 있으므로,{" "}
          <b>기본 사용법과 함께 여러 믹스인을 조합하는 패턴</b>도 함께 익혀 두면
          좋습니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">기본 문법</h3>
          <p className="mt_m">
            <code className="t_blue">@include</code> 뒤에 믹스인 이름을 씁니다.
          </p>
          <CodeBlock title="@include 기본 문법" language="css" className="mt_m">
            {`@mixin button-style {
  padding: 8px 16px;
  background: #0a58ca;
  color: #ffffff;
}

.button {
  @include button-style;
}`}
          </CodeBlock>
          <CodeBlock title="컴파일된 CSS" language="css" className="mt_m">
            {`.button {
  padding: 8px 16px;
  background: #0a58ca;
  color: #ffffff;
}`}
          </CodeBlock>
          <p className="mt_ms">
            <code className="t_blue">@include</code>를 사용하면{" "}
            <b>믹스인에 정의된 모든 스타일이 해당 위치에 삽입</b>됩니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">여러 믹스인 함께 사용</h3>
          <p className="mt_m">
            하나의 선택자에서 <b>여러 믹스인을 함께 사용</b>할 수 있습니다.
          </p>
          <CodeBlock
            title="여러 믹스인 사용 예시"
            language="css"
            className="mt_m"
          >
            {`@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

@mixin card-shadow {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.card {
  @include flex-center;
  @include card-shadow;
  padding: 16px;
}`}
          </CodeBlock>
          <CodeBlock title="컴파일된 CSS" language="css" className="mt_m">
            {`.card {
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 16px;
}`}
          </CodeBlock>
          <p className="mt_ms">
            여러 믹스인을 사용하면 <b>작은 단위의 믹스인을 조합</b>하여 복잡한
            스타일을 만들 수 있습니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">믹스인과 일반 속성 함께 사용</h3>
          <p className="mt_m">
            믹스인과 <b>일반 속성을 함께 사용</b>할 수 있습니다.
            <br />
            믹스인을 먼저 작성하고 그 아래에 일반 속성을 추가하거나, 반대로 일반
            속성을 먼저 작성하고 믹스인을 나중에 사용해도 됩니다.
          </p>
          <p className="mt_s">
            SCSS에서는{" "}
            <b>믹스인과 일반 속성의 선언 순서에 대한 규칙이 없습니다</b>.
            <br />
            다만 코드의 가독성과 유지보수를 위해,{" "}
            <b>개인 또는 팀 단위로 일관된 순서를 정하는 것이 좋습니다</b>.
            <br />
            일반적으로는 <b>믹스인을 먼저 배치</b>하고 그 아래에 개별 속성을
            작성하는 방식을 많이 사용합니다.
          </p>
          <CodeBlock
            title="믹스인과 속성 함께 사용"
            language="css"
            className="mt_m"
          >
            {`@mixin button-base {
  padding: 8px 16px;
  border-radius: 4px;
}

.button {
  @include button-base;
  background: #0a58ca;  // 추가 속성
  color: #ffffff;       // 추가 속성
}`}
          </CodeBlock>
          <p className="mt_ms">
            이렇게 하면 <b>공통 스타일은 믹스인으로, 개별 스타일은 직접 작성</b>
            할 수 있습니다.
          </p>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">@content - 동적 콘텐츠 삽입</h2>
        <p className="mt_l">
          <code className="t_blue">@content</code>는{" "}
          <b>믹스인을 사용할 때 추가 스타일을 삽입</b>할 수 있게 해주는
          기능입니다.
          <br />
          반응형 레이아웃이나 상태별 스타일처럼{" "}
          <mark>{"“틀은 같지만 안의 내용이 달라지는 패턴”"}</mark>을{" "}
          <b>유연하게 재사용</b>할 수 있게 해 주는 중요한 문법입니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">@content 기본 사용법</h3>
          <p className="mt_m">
            믹스인 내부에 <code className="t_blue">@content</code>를 작성하면,{" "}
            <b>@include 사용 시 추가 스타일을 삽입</b>할 수 있습니다.
          </p>
          <CodeBlock title="@content 기본 예시" language="css" className="mt_m">
            {`// @content를 사용하는 믹스인
@mixin responsive($breakpoint) {
  @media (min-width: $breakpoint) {
    @content;  // 여기에 추가 스타일이 삽입됨
  }
}

.container {
  width: 100%;

  @include responsive(768px) {
    max-width: 720px;  // 이 스타일이 @content 위치에 삽입됨
    margin: 0 auto;
  }
}`}
          </CodeBlock>
          <CodeBlock title="컴파일된 CSS" language="css" className="mt_m">
            {`.container {
  width: 100%;
}

@media (min-width: 768px) {
  .container {
    max-width: 720px;
    margin: 0 auto;
  }
}`}
          </CodeBlock>
          <p className="mt_ms">
            <code className="t_blue">@content</code>를 사용하면{" "}
            <b>믹스인 내부에 동적으로 스타일을 추가</b>할 수 있어 매우
            유연합니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">@content 활용 예시</h3>
          <p className="mt_m">
            <code className="t_blue">@content</code>는{" "}
            <b>미디어 쿼리, 호버 효과, 포커스 효과</b> 등에서 자주 사용됩니다.
          </p>
          <CodeBlock title="@content 활용 예시" language="css" className="mt_m">
            {`// 호버 효과 믹스인
@mixin hover {
  &:hover {
    @content;
  }
}

// 포커스 효과 믹스인
@mixin focus {
  &:focus {
    @content;
  }
}

.button {
  background: #0a58ca;

  @include hover {
    background: #084298;  // 호버 시 배경색 변경
  }

  @include focus {
    outline: 2px solid #0a58ca;  // 포커스 시 아웃라인 추가
  }
}`}
          </CodeBlock>
          <CodeBlock title="컴파일된 CSS" language="css" className="mt_m">
            {`.button {
  background: #0a58ca;
}
.button:hover {
  background: #084298;  // 호버 시 배경색 변경
}
.button:focus {
  outline: 2px solid #0a58ca;  // 포커스 시 아웃라인 추가
}`}
          </CodeBlock>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">믹스인 중첩 사용</h2>
        <p className="mt_l">
          믹스인은 <b>다른 믹스인 안에서도 사용</b>할 수 있습니다.
          <br />
          작은 단위의 믹스인을 조합하여 <b>더 큰 믹스인을 만들</b> 수 있습니다.
        </p>
        <CodeBlock title="믹스인 중첩 예시" language="css" className="mt_m">
          {`// 작은 단위의 믹스인
@mixin flex {
  display: flex;
}

@mixin center {
  justify-content: center;
  align-items: center;
}

// 두 믹스인을 조합
@mixin flex-center {
  @include flex;
  @include center;
}

.container {
  @include flex-center;
}`}
        </CodeBlock>
        <p className="mt_m">
          이렇게 하면 <b>작은 단위의 믹스인을 재사용</b>하여 더 복잡한 믹스인을
          만들 수 있습니다.
        </p>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">실제 사용 예시</h2>
        <p className="mt_l">
          기본 문법을 활용한 <b>실제 사용 예시</b>를 살펴봅니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">버튼 컴포넌트 예시</h3>
          <p className="mt_m">
            믹스인을 사용하여 <b>버튼 컴포넌트를 구성</b>하는 예시입니다.
          </p>
          <CodeBlock title="버튼 컴포넌트 예시" language="css" className="mt_m">
            {`// 기본 버튼 스타일
@mixin button-base {
  padding: 8px 16px;
  border-radius: 4px;
  font-weight: 700;
  cursor: pointer;
  border: none;
}

// Primary 버튼
.button-primary {
  @include button-base;
  background: #0a58ca;
  color: #ffffff;

  &:hover {
    background: #084298;
  }
}

// Secondary 버튼
.button-secondary {
  @include button-base;
  background: #6c757d;
  color: #ffffff;
}`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">카드 컴포넌트 예시</h3>
          <p className="mt_m">
            여러 믹스인을 조합하여 <b>카드 컴포넌트를 구성</b>하는 예시입니다.
          </p>
          <CodeBlock title="카드 컴포넌트 예시" language="css" className="mt_m">
            {`@mixin card-base {
  background: #ffffff;
  border-radius: 8px;
  padding: 16px;
}

@mixin card-shadow {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.card {
  @include card-base;
  @include card-shadow;
  margin-bottom: 24px;
}`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">반응형 레이아웃 예시</h3>
          <p className="mt_m">
            <code className="t_blue">@content</code>를 사용하여{" "}
            <b>반응형 레이아웃을 구성</b>하는 예시입니다.
          </p>
          <CodeBlock
            title="반응형 레이아웃 예시"
            language="css"
            className="mt_m"
          >
            {`@mixin tablet {
  @media (min-width: 768px) {
    @content;
  }
}

@mixin desktop {
  @media (min-width: 1024px) {
    @content;
  }
}

.container {
  width: 100%;

  @include tablet {
    max-width: 720px;
    margin: 0 auto;
  }

  @include desktop {
    max-width: 1140px;
  }
}`}
          </CodeBlock>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">정리</h2>
        <p className="mt_l">
          <code className="t_blue">@mixin</code>과{" "}
          <code className="t_blue">@include</code> 기본 문법에 대해 알아본
          내용을 정리합니다.
        </p>
        <ul className="dot_lst mt_m indent_small">
          <li>
            <b>@mixin</b>: 믹스인을 정의할 때 사용, 믹스인 이름 뒤에 중괄호로
            스타일 작성
          </li>
          <li>
            <b>@include</b>: 정의한 믹스인을 불러와 사용할 때 사용
          </li>
          <li>
            <b>여러 믹스인 사용</b>: 하나의 선택자에서 여러 믹스인을 함께 사용
            가능
          </li>
          <li>
            <b>@content</b>: 믹스인 사용 시 추가 스타일을 동적으로 삽입
          </li>
          <li>
            <b>믹스인 중첩</b>: 믹스인 안에서 다른 믹스인 사용 가능
          </li>
          <li>
            <b>활용 예시</b>: 버튼, 카드, 반응형 레이아웃 등에서 활용
          </li>
        </ul>
        <p className="mt_m">
          다음 페이지에서는 <b>파라미터가 있는 믹스인</b>에 대해 자세히
          알아봅니다.
        </p>
      </section>

      <figure className="img_figure mt_l">
        <img
          src={IMG.SCSS + "/06_scss_02.png"}
          alt="@mixin과 @include의 기본 문법"
        />
        <figcaption>@mixin과 @include의 기본 문법</figcaption>
      </figure>
    </>
  );
}

export default BasicSyntaxPage;
