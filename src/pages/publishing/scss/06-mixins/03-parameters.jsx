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
  title: "파라미터가 있는 믹스인",
  description:
    "SCSS 믹스인에 파라미터를 전달하는 방법을 상세히 알아봅니다. 기본 파라미터, 여러 파라미터, 기본값 설정, 키워드 인자, 그리고 실제 활용 예시를 단계별로 설명합니다.",
  keyword:
    "scss 믹스인 파라미터, scss mixin parameter, scss 믹스인 인자, scss 기본값, scss 키워드 인자",
};

function ParametersPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          믹스인에 <b>파라미터(인자)를 전달</b>하면,{" "}
          <b>같은 패턴을 다양한 값으로 재사용</b>할 수 있습니다.
          <br />
          파라미터를 사용하면 더 유연하고 강력한 믹스인을 만들 수 있습니다.
        </p>
        <p className="mt_s">
          이 페이지에서는 파라미터가 있는 믹스인의 기본 문법, 기본값 설정, 여러
          파라미터 사용, 키워드 인자, 그리고 실제 활용 예시를 상세히 알아봅니다.
        </p>
      </blockquote>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">파라미터 기본 문법</h2>
        <p className="mt_l">
          믹스인에 <b>파라미터를 전달</b>하는 기본 방법을 알아봅니다.
          <br />
          같은 믹스인으로 색상·크기·간격 등을 바꿔 쓰려면 파라미터 문법을
          이해하는 것이 필수이기 때문에, 이후 예제를 보기 전에{" "}
          <b>기본 형태와 동작 방식</b>을 먼저 정리합니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">단일 파라미터</h3>
          <p className="mt_m">
            믹스인 이름 뒤에 <b>괄호 안에 파라미터 이름</b>을 작성합니다.
          </p>
          <CodeBlock title="단일 파라미터 예시" language="css" className="mt_m">
            {`// 파라미터가 있는 믹스인 정의
@mixin button($bg-color) {
  padding: 8px 16px;
  background-color: $bg-color;
  color: #ffffff;
  border-radius: 4px;
}

// 파라미터와 함께 사용
.button-primary {
  @include button(#0a58ca);
}

.button-success {
  @include button(#28a745);
}`}
          </CodeBlock>
          <CodeBlock title="컴파일된 CSS" language="css" className="mt_m">
            {`.button-primary {
  padding: 8px 16px;
  background-color: #0a58ca; // 배경 색상만 다르게 적용
  color: #ffffff;
  border-radius: 4px;
}

.button-success {
  padding: 8px 16px;
  background-color: #28a745; // 배경 색상만 다르게 적용
  color: #ffffff;
  border-radius: 4px;
}`}
          </CodeBlock>
          <p className="mt_ms">
            파라미터를 사용하면 <b>같은 패턴을 다양한 값으로 재사용</b>할 수
            있습니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">여러 파라미터</h3>
          <p className="mt_m">
            믹스인에 <b>여러 파라미터를 전달</b>할 수 있습니다.
          </p>
          <CodeBlock title="여러 파라미터 예시" language="css" className="mt_m">
            {`// 여러 파라미터가 있는 믹스인
@mixin button($bg-color, $text-color, $padding) {
  padding: $padding;
  background: $bg-color;
  color: $text-color;
  border-radius: 4px;
}

.button-primary {
  @include button(#0a58ca, #ffffff, 8px 16px);
}

.button-outline {
  @include button(transparent, #0a58ca, 10px 20px);
}`}
          </CodeBlock>
          <p className="mt_ms">
            여러 파라미터를 사용할 때는{" "}
            <b className="t_red">반드시 파라미터 순서대로 값을 전달</b>해야
            합니다.
            <br />
            순서를 잘못 전달하면 의도하지 않은 결과가 나올 수 있습니다.
          </p>
          <CodeBlock
            title="잘못된 예시 (❌ 순서 오류)"
            language="css"
            className="mt_m"
          >
            {`@mixin button($bg-color, $text-color, $padding) {
  padding: $padding;
  background: $bg-color;
  color: $text-color;
}

// ❌ 잘못된 순서: 배경색과 텍스트 색상이 바뀜
.button {
  @include button(#ffffff, #0a58ca, 8px 16px);
  // 의도: 배경 #0a58ca, 텍스트 #ffffff
  // 실제: 배경 #ffffff, 텍스트 #0a58ca (반대로 적용됨)
}`}
          </CodeBlock>
          <CodeBlock
            title="올바른 예시 (✅ 순서 준수)"
            language="css"
            className="mt_m"
          >
            {`// ✅ 올바른 순서: 파라미터 정의 순서대로 전달
.button {
  @include button(#0a58ca, #ffffff, 8px 16px);
  // 배경 #0a58ca, 텍스트 #ffffff (의도한 대로 적용됨)
}`}
          </CodeBlock>
          <p className="mt_m">
            따라서 여러 파라미터를 사용할 때는{" "}
            <b>믹스인 정의에서 선언한 파라미터 순서를 정확히 따라야</b> 합니다.
          </p>
          <p className="mt_ms">
            하지만 파라미터가 많아질수록{" "}
            <b>순서를 기억하기 어렵고 가독성이 떨어집니다</b>.
            <br />
            예를 들어{" "}
            <code className="t_blue">
              @include button(#0a58ca, #ffffff, 8px 16px, 4px, solid, 2px)
            </code>
            처럼 여러 값을 나열하면,{" "}
            <b>각 값이 어떤 파라미터에 해당하는지 구분하기 어렵습니다</b>.
          </p>
          <p className="mt_ms">
            이런 경우에는 <b className="t_blue">키워드 인자</b>를 사용하는 것이
            좋습니다.
            <br />
            키워드 인자를 사용하면 <b>파라미터 이름을 명시</b>하여 순서에
            상관없이 값을 전달할 수 있고,{" "}
            <b>코드의 가독성과 유지보수성이 크게 향상</b>됩니다.
            <br />
            키워드 인자의 사용 방법은 아래{" "}
            <b className="t_blue">[키워드 인자]</b> 섹션에서 자세히 설명합니다.
          </p>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">기본값 설정</h2>
        <p className="mt_l">
          파라미터에 <b>기본값을 설정</b>하면, 값을 전달하지 않아도 됩니다.
          <br />
          자주 쓰는 값은 기본값으로 두고, 필요할 때만 덮어쓰면 믹스인을{" "}
          <b>더 단순한 문법으로, 더 다양한 상황에</b> 적용할 수 있습니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">기본값 문법</h3>
          <p className="mt_m">
            파라미터 이름 뒤에 <code className="t_blue">:</code>를 쓰고 기본값을
            지정합니다.
          </p>
          <CodeBlock title="기본값 설정 예시" language="css" className="mt_m">
            {`// 기본값이 있는 믹스인
@mixin button($bg-color: #0a58ca, $text-color: #ffffff) {
  padding: 8px 16px;
  background-color: $bg-color;
  color: $text-color;
  border-radius: 4px;
}

// 기본값 사용
.button-default {
  @include button;  // 모든 파라미터 기본값 사용
}

// 일부만 변경
.button-custom {
  @include button(#28a745);  // 첫 번째 파라미터만 변경
}`}
          </CodeBlock>
          <CodeBlock title="컴파일된 CSS" language="css" className="mt_m">
            {`.button-default {
  padding: 8px 16px;
  background-color: #0a58ca;
  color: #ffffff;
  border-radius: 4px;
}

.button-custom {
  padding: 8px 16px;
  background-color: #28a745;
  color: #ffffff;
  border-radius: 4px;
}`}
          </CodeBlock>
          <p className="mt_ms">
            기본값을 설정하면 <b>필요한 파라미터만 전달</b>할 수 있어 사용이
            편리합니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">일부 파라미터만 기본값 설정</h3>
          <p className="mt_m">
            모든 파라미터에 기본값을 설정할 필요는 없습니다.
            <br />
            <b>일부 파라미터만 기본값을 설정</b>할 수 있습니다.
          </p>
          <CodeBlock title="일부 기본값 예시" language="css" className="mt_m">
            {`// 첫 번째는 필수, 두 번째는 기본값
@mixin button($bg-color, $text-color: #ffffff) {
  padding: 8px 16px;
  background-color: $bg-color;
  color: $text-color;
}

.button {
  @include button(#0a58ca);  // $text-color는 기본값 사용
}`}
          </CodeBlock>
          <CodeBlock title="컴파일된 CSS" language="css" className="mt_m">
            {`.button {
  padding: 8px 16px;
  background-color: #0a58ca;
  color: #ffffff;            // $text-color는 기본값 사용
}`}
          </CodeBlock>
          <p className="mt_ms">
            <b>기본값이 없는 파라미터는 반드시 전달</b>해야 하고, 기본값이 있는
            파라미터는 선택적으로 전달할 수 있습니다.
          </p>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">키워드 인자</h2>
        <p className="mt_l">
          키워드 인자는 <b>파라미터 이름을 명시</b>하여 값을 전달하는
          방식입니다.
          <br />
          위치 인자처럼 순서에 의존하지 않고,{" "}
          <b className="t_blue">$파라미터명: 값</b> 형태로 전달합니다.
          <br />
          <mark>
            인자가 많아졌을 때 순서에 의존하지 않고 코드를 읽기 쉽게 만들 수
            있어서, <b>팀 프로젝트나 장기 유지보수</b>에서 특히 도움이 됩니다.
          </mark>
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">키워드 인자란?</h3>
          <p className="mt_m">
            키워드 인자는 <b>파라미터 이름과 값을 함께 명시</b>하여 전달하는
            방식입니다. 위치 인자와 달리 <b>순서에 상관없이</b> 값을 전달할 수
            있어, 코드의 가독성과 안정성이 크게 향상됩니다.
            <br />
            키워드 인자를 사용하면{" "}
            <b>각 값이 어떤 파라미터에 해당하는지 명확하게 알 수 있어</b> 코드를
            읽고 이해하기 쉬워집니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">키워드 인자 기본 사용법</h3>
          <p className="mt_m">
            키워드 인자는 <b className="t_blue">$파라미터명: 값</b> 형태로
            사용하며, <b>순서에 상관없이 전달</b>할 수 있습니다.
          </p>
          <CodeBlock title="키워드 인자 예시" language="css" className="mt_m">
            {`@mixin button($bg-color, $text-color, $padding) {
  padding: $padding;
  background-color: $bg-color;
  color: $text-color;
}

// 순서대로 전달 (위치 인자)
.button1 {
  @include button(#0a58ca, #ffffff, 8px 16px);
}

// 키워드 인자로 전달 (순서 무관)
.button2 {
  @include button($padding: 10px 20px, $bg-color: #28a745, $text-color: #ffffff);
}`}
          </CodeBlock>
          <CodeBlock title="컴파일된 CSS" language="css" className="mt_m">
            {`.button1 {
  padding: 8px 16px;
  background-color: #0a58ca;
  color: #ffffff;
}

.button2 {
  padding: 10px 20px;
  background-color: #28a745;
  color: #ffffff;
}`}
          </CodeBlock>
          <p className="mt_ms">
            키워드 인자를 사용하면 <b>파라미터가 많을 때 가독성이 향상</b>되고,
            실수로 순서를 잘못 전달하는 것을 방지할 수 있습니다.
            <br />
            또한 <b>파라미터 이름을 명시</b>하므로, 나중에 코드를 다시 읽을 때
            각 값의 의미를 쉽게 파악할 수 있습니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">키워드 인자의 장점</h3>
          <p className="mt_m">
            키워드 인자를 사용하면 다음과 같은 장점이 있습니다.
          </p>
          <CodeBlock
            title="파라미터가 많을 때 비교"
            language="css"
            className="mt_m"
          >
            {`@mixin card($bg-color, $padding, $border-radius, $box-shadow, $margin) {
  background: $bg-color;
  padding: $padding;
  border-radius: $border-radius;
  box-shadow: $box-shadow;
  margin: $margin;
}

// ❌ 위치 인자: 각 값이 무엇인지 알기 어려움
.card1 {
  @include card(#ffffff, 16px, 8px, 0 2px 4px rgba(0,0,0,0.1), 20px);
}

// ✅ 키워드 인자: 각 값의 의미가 명확함
.card2 {
  @include card(
    $bg-color: #ffffff,
    $padding: 16px,
    $border-radius: 8px,
    $box-shadow: 0 2px 4px rgba(0,0,0,0.1),
    $margin: 20px
  );
}`}
          </CodeBlock>
          <CodeBlock title="컴파일된 CSS" language="css" className="mt_m">
            {`.card1 {
  background: #ffffff;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 20px;
}

.card2 {
  background: #ffffff;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 20px;
}`}
          </CodeBlock>
          <p className="mt_ms">
            위치 인자로는{" "}
            <b>각 값이 어떤 파라미터에 해당하는지 알기 어렵지만</b>, 키워드
            인자를 사용하면 <b>코드를 읽는 사람이 각 값의 의미를 즉시 이해</b>할
            수 있습니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">키워드 인자와 위치 인자 혼합</h3>
          <p className="mt_m">
            키워드 인자와 위치 인자를 <b>함께 사용</b>할 수 있습니다.
          </p>
          <p className="mt_s">
            다만 <b className="t_red">키워드 인자는 반드시 위치 인자 뒤에</b>{" "}
            와야 합니다.
            <br />이 규칙이 필요한 이유는{" "}
            <b>위치 인자가 순서에 따라 파라미터에 매핑</b>되기 때문입니다.
          </p>
          <p className="mt_s">
            만약 키워드 인자가 먼저 오면, 그 뒤에 오는 위치 인자가{" "}
            <b>어느 파라미터에 해당하는지 모호</b>해집니다.
            <br />
            예를 들어{" "}
            <code className="t_blue">
              @include button($bg-color: #0a58ca, #ffffff)
            </code>
            처럼 키워드 인자 뒤에 위치 인자가 오면,{" "}
            <code className="t_blue">#ffffff</code>가{" "}
            <code className="t_blue">$text-color</code>인지{" "}
            <code className="t_blue">$padding</code>인지 구분할 수 없어 에러가
            발생합니다.
          </p>
          <CodeBlock title="혼합 사용 예시" language="css" className="mt_m">
            {`@mixin button($bg-color, $text-color, $padding) {
  padding: $padding;
  background: $bg-color;
  color: $text-color;
}

// ✅ 올바른 사용: 첫 번째는 위치 인자, 나머지는 키워드 인자
.button {
  @include button(#0a58ca, $padding: 10px 20px, $text-color: #ffffff);
}`}
          </CodeBlock>
          <CodeBlock title="컴파일된 CSS" language="css" className="mt_m">
            {`.button {
  padding: 10px 20px;
  background: #0a58ca;
  color: #ffffff;
}`}
          </CodeBlock>
          <CodeBlock
            title="잘못된 사용 (❌ 에러)"
            language="css"
            className="mt_m"
          >
            {`// ❌ 에러: 키워드 인자가 위치 인자 앞에 오면 안 됨
.button {
  @include button($bg-color: #0a58ca, #ffffff, $padding: 10px 20px);
}`}
          </CodeBlock>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">실제 활용 예시</h2>
        <p className="mt_l">
          파라미터가 있는 믹스인을 <b>실제 프로젝트에서 활용</b>하는 예시를
          살펴봅니다.
          <br />
          버튼, 카드, 레이아웃처럼 다양한 변형이 필요한 컴포넌트에 파라미터
          믹스인을 적용하면, <b>클래스 수는 줄이고 표현력은 높이는</b> 패턴을
          경험할 수 있습니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">버튼 믹스인</h3>
          <p className="mt_m">
            색상과 크기를 파라미터로 받는 <b>버튼 믹스인</b> 예시입니다.
          </p>
          <CodeBlock title="버튼 믹스인 예시" language="css" className="mt_m">
            {`@mixin button($bg-color: #0a58ca, $text-color: #ffffff, $padding: 8px 16px) {
  padding: $padding;
  background: $bg-color;
  color: $text-color;
  border-radius: 4px;
  font-weight: 700;
  cursor: pointer;
  border: none;

  &:hover {
    background: darken($bg-color, 10%);
  }
}

.button-primary {
  @include button;
}

.button-success {
  @include button(#28a745);
}

.button-large {
  @include button($padding: 12px 24px);
}`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">그림자 믹스인</h3>
          <p className="mt_m">
            그림자 속성을 파라미터로 받는 <b>그림자 믹스인</b> 예시입니다.
          </p>
          <CodeBlock title="그림자 믹스인 예시" language="css" className="mt_m">
            {`@mixin shadow($x: 0, $y: 4px, $blur: 6px, $spread: 0, $color: rgba(0, 0, 0, 0.1)) {
  box-shadow: $x $y $blur $spread $color;
}

.card {
  @include shadow;
}

.modal {
  @include shadow(0, 10px, 15px, 0, rgba(0, 0, 0, 0.2));
}`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">반응형 미디어 쿼리 믹스인</h3>
          <p className="mt_m">
            브레이크포인트를 파라미터로 받는 <b>반응형 믹스인</b> 예시입니다.
          </p>
          <CodeBlock title="반응형 믹스인 예시" language="css" className="mt_m">
            {`@mixin responsive($breakpoint) {
  @media (min-width: $breakpoint) {
    @content;
  }
}

.container {
  width: 100%;

  @include responsive(768px) {
    max-width: 720px;
    margin: 0 auto;
  }

  @include responsive(1024px) {
    max-width: 1140px;
  }
}`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">Flexbox 레이아웃 믹스인</h3>
          <p className="mt_m">
            Flexbox 속성을 파라미터로 받는 <b>레이아웃 믹스인</b> 예시입니다.
          </p>
          <CodeBlock
            title="Flexbox 믹스인 예시"
            language="css"
            className="mt_m"
          >
            {`@mixin flex($direction: row, $justify: flex-start, $align: stretch, $gap: 0) {
  display: flex;
  flex-direction: $direction;
  justify-content: $justify;
  align-items: $align;
  gap: $gap;
}

.container {
  @include flex(row, space-between, center, 16px);
}

.vertical-center {
  @include flex($justify: center, $align: center);
}`}
          </CodeBlock>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">파라미터 사용 시 주의사항</h2>
        <p className="mt_l">
          파라미터를 사용할 때 <b>주의해야 할 사항</b>들을 정리합니다.
        </p>

        <dl className="dl_dot_lst mt_l">
          <dt className="font-16 mb_s">필수 파라미터는 앞에 배치</dt>
          <dd>
            <p>
              기본값이 없는 <b>필수 파라미터는 앞에 배치</b>하는 것이 좋습니다.
            </p>
            <CodeBlock title="좋은 예시" language="css" className="mt_s">
              {`// 필수 파라미터가 앞에 있음
@mixin button($bg-color, $text-color: #ffffff) {
  // ...
}`}
            </CodeBlock>
            <CodeBlock title="나쁜 예시" language="css" className="mt_ms">
              {`// 필수 파라미터가 뒤에 있음 (사용이 불편함)
@mixin button($text-color: #ffffff, $bg-color) {
  // ...
}`}
            </CodeBlock>
          </dd>
        </dl>

        <dl className="dl_dot_lst mt_l">
          <dt className="font-16 mb_s">파라미터 개수 제한</dt>
          <dd>
            파라미터가 너무 많으면 <b>사용하기 어려워집니다</b>. 일반적으로{" "}
            <b>3-5개 이하</b>가 적절합니다.
          </dd>
          <dd>
            파라미터가 많다면 <b>객체나 맵을 사용</b>하거나,{" "}
            <b>여러 개의 작은 믹스인으로 분리</b>하는 것을 고려해보세요.
          </dd>
        </dl>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">정리</h2>
        <p className="mt_l">
          파라미터가 있는 믹스인에 대해 알아본 내용을 정리합니다.
        </p>
        <ul className="dot_lst mt_m indent_small">
          <li>
            <b>기본 문법</b>: 괄호 안에 파라미터 이름 작성,{" "}
            <code>@include</code> 사용 시 값 전달
          </li>
          <li>
            <b>여러 파라미터</b>: 쉼표로 구분하여 여러 파라미터 전달 가능
          </li>
          <li>
            <b>기본값 설정</b>: 파라미터 이름 뒤에 : 기본값 형태로 설정
          </li>
          <li>
            <b>키워드 인자</b>: 파라미터 이름과 함께 값을 전달하여 순서 무관하게
            사용
          </li>
          <li>
            <b>활용 예시</b>: 버튼, 그림자, 반응형, Flexbox 등에서 활용
          </li>
          <li>
            <b>주의사항</b>: 필수 파라미터는 앞에 배치, 파라미터 개수 제한
          </li>
        </ul>
        <p className="mt_m">
          다음 페이지에서는 <b>반복되는 스타일을 믹스인으로 정리하는 방법</b>을
          자세히 알아봅니다.
        </p>
      </section>

      <figure className="img_figure mt_l">
        <img src={IMG.SCSS + "/06_scss_03.png"} alt="파라미터가 있는 믹스인" />
        <figcaption>파라미터가 있는 믹스인</figcaption>
      </figure>
    </>
  );
}

export default ParametersPage;
