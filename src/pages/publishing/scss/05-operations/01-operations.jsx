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
  title: "SCSS에서 가능한 연산 (+, -, *, /)",
  description:
    "SCSS에서 사용할 수 있는 산술 연산자를 상세히 알아봅니다. 덧셈, 뺄셈, 곱셈, 나눗셈의 사용법, 다양한 단위 연산, 연산 우선순위, 실제 활용 예시를 단계별로 설명합니다.",
  keyword: "scss 연산, scss 산술 연산, scss +, scss -, scss *, scss /, scss 계산, scss 수학 연산",
};

function OperationsPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          SCSS는 <b>산술 연산(덧셈, 뺄셈, 곱셈, 나눗셈)</b>을 지원합니다.
          <br />
          변수와 연산을 함께 사용하면 <b>동적으로 값을 계산</b>하여 스타일을
          작성할 수 있어, 일관된 디자인 시스템을 구축하는 데 유용합니다.
        </p>
        <p className="mt_s">
          이 페이지에서는 SCSS의 산술 연산자 사용법, 다양한 단위 연산, 연산
          우선순위, 그리고 실제 프로젝트에서 활용하는 예시를 상세히 알아봅니다.
        </p>
      </blockquote>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">SCSS 연산이란?</h2>
        <p className="mt_l">
          SCSS 연산은 <b>컴파일 시점에 수학적 계산을 수행</b>하여 최종 CSS
          값으로 변환합니다.
          <br />
          변수와 함께 사용하면 <b>관계 있는 값들을 자동으로 계산</b>할 수 있어
          유지보수가 편리합니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">연산의 기본 개념</h3>
          <p className="mt_m">
            SCSS에서는 <b>산술 연산자를 사용하여 값을 계산</b>할 수 있습니다.
          </p>
          <CodeBlock title="기본 연산 예시" language="css" className="mt_m">
            {`$base-size: 16px;

.container {
  width: $base-size * 2;        // 32px (곱하기)
  height: $base-size + 8px;     // 24px (더하기)
  padding: $base-size / 2;      // 8px  (나누기)
  margin: $base-size - 4px;     // 12px (빼기)
}`}
          </CodeBlock>
          <CodeBlock title="컴파일된 CSS" language="css" className="mt_m">
            {`.container {
  width: 32px;
  height: 24px;
  padding: 8px;
  margin: 12px;
}`}
          </CodeBlock>
          <p className="mt_ms">
            연산은 <b>컴파일 시점에 계산</b>되어 최종 CSS에는 계산된 값만
            들어갑니다.
          </p>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">산술 연산자</h2>
        <p className="mt_l">
          SCSS에서 사용할 수 있는 <b>네 가지 기본 산술 연산자</b>를 알아봅니다.
          <br />
          여기서 다루는 연산자는 간격, 너비, 폰트 크기 등을{" "}
          <b>규칙적으로 계산·관리</b>할 때 가장 자주 사용되는 도구입니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">덧셈 (+)</h3>
          <p className="mt_m">
            덧셈 연산자는 <b>두 값을 더합니다</b>.
          </p>
          <CodeBlock title="덧셈 연산 예시" language="css" className="mt_m">
            {`$spacing-sm: 8px;
$spacing-md: 16px;

.card {
  padding: $spacing-sm + $spacing-md;  // 24px
  margin-top: 10px + 5px;              // 15px
}`}
          </CodeBlock>
          <p className="mt_ms">
            덧셈은 <b>같은 단위끼리만 가능</b>합니다.{" "}
            <code className="t_blue">10px + 5</code>처럼{" "}
            <b className="t_red">단위가 다르면 에러가 발생</b>합니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">뺄셈 (-)</h3>
          <p className="mt_m">
            뺄셈 연산자는 <b>두 값의 차이를 계산</b>합니다.
          </p>
          <CodeBlock title="뺄셈 연산 예시" language="css" className="mt_m">
            {`$container-width: 1200px;
$sidebar-width: 300px;

.main-content {
  width: $container-width - $sidebar-width;  // 900px
}`}
          </CodeBlock>
          <p className="mt_ms">
            뺄셈도 <b>같은 단위끼리만 가능</b>합니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">곱셈 (*)</h3>
          <p className="mt_m">
            곱셈 연산자는 <b>두 값을 곱합니다</b>.
          </p>
          <CodeBlock title="곱셈 연산 예시" language="css" className="mt_m">
            {`$base-spacing: 8px;

.card {
  padding: $base-spacing * 2;   // 16px
  margin: $base-spacing * 3;    // 24px
}`}
          </CodeBlock>
          <p className="mt_ms">
            곱셈은 <b>하나의 값만 단위를 가져야 합니다</b>.{" "}
            <code className="t_blue">10px * 5px</code>처럼{" "}
            <b className="t_red">둘 다 단위가 있으면 에러가 발생</b>합니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">나눗셈 (/)</h3>
          <p className="mt_m">
            나눗셈 연산자는 <b>두 값을 나눕니다</b>.
            <br />
            나눗셈은 CSS의 <code className="t_blue">font: 12px/1.5</code> 같은
            문법과 충돌할 수 있어 주의가 필요합니다.
          </p>
          <CodeBlock title="나눗셈 연산 예시" language="css" className="mt_m">
            {`$base-size: 16px;

.text {
  font-size: $base-size / 2;    // 8px
  padding: (20px / 2);          // 10px (괄호 필요)
  margin: (24px / 2);           // 12px
}`}
          </CodeBlock>
          <p className="mt_m">
            나눗셈을 사용할 때는 <b>괄호로 감싸거나 변수와 함께 사용</b>해야
            SCSS가 연산으로 인식합니다.
            <br />
            그렇지 않으면 CSS의 <code className="t_blue">/</code> 문법으로
            해석될 수 있습니다.
          </p>

          <CodeBlock title="괄호가 필요한 이유" language="css" className="mt_m">
            {`// ❌ 잘못된 예시: CSS 문법으로 해석됨
.text {
  font: 12px / 1.5 Arial;        // CSS font shorthand (정상)
  padding: 20px / 2;             // 에러! CSS 문법으로 해석됨
  line-height: 16px / 2;         // 에러! CSS 문법으로 해석됨
}

// ✅ 올바른 예시: 괄호로 연산임을 명시
.text {
  padding: (20px / 2);           // 10px (연산으로 인식)
  line-height: (16px / 2);       // 8px (연산으로 인식)
}

// ✅ 올바른 예시: 변수와 함께 사용하면 괄호 불필요
$base-size: 16px;
.text {
  font-size: $base-size / 2;     // 8px (변수가 있으면 연산으로 인식)
}`}
          </CodeBlock>
          <p className="mt_m">
            SCSS는 <code className="t_blue">/</code> 기호를 만나면{" "}
            <b>CSS의 문법인지 연산인지 자동으로 판단</b>합니다.
            <br />
            하지만 <b>숫자만 나열된 경우</b>(예:{" "}
            <code className="t_blue">20px / 2</code>)는 CSS의{" "}
            <code className="t_blue">font: 12px/1.5</code> 같은 문법과 혼동될 수
            있어 <b className="t_red">연산으로 인식하지 않습니다</b>.
          </p>
          <p className="mt_ms">
            <b>괄호를 사용하면</b> SCSS가 명확하게 <b>{'"이것은 연산이다"'}</b>
            라고 인식할 수 있습니다.
            <br />
            또한 <b>변수와 함께 사용</b>하면(예:{" "}
            <code className="t_blue">$base-size / 2</code>) 변수가 포함되어 있어
            CSS 문법이 아니라는 것을 자동으로 판단하므로 괄호 없이도 연산으로
            인식됩니다.
          </p>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">다양한 단위 연산</h2>
        <p className="mt_l">
          SCSS는 <b>다양한 단위 간 연산</b>을 지원합니다.
          <br />
          픽셀, 퍼센트, 단위 없는 숫자를 함께 사용할 때 어떤 제약이 있는지
          이해해 두면, <b>의도치 않은 계산 결과나 에러</b>를 미리 막을 수
          있습니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">같은 단위 연산</h3>
          <p className="mt_m">
            가장 안전한 방법은 <b>같은 단위끼리 연산</b>하는 것입니다.
          </p>
          <CodeBlock title="같은 단위 연산" language="css" className="mt_m">
            {`$spacing-sm: 8px;
$spacing-md: 16px;

.container {
  padding: $spacing-sm + $spacing-md;  // 24px
  margin: $spacing-md - $spacing-sm;   // 8px
}`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">퍼센트 연산</h3>
          <p className="mt_m">퍼센트와 다른 단위를 연산할 수 있습니다.</p>
          <CodeBlock title="퍼센트 연산 예시" language="css" className="mt_m">
            {`.container {
  width: 50% + 20px;        // ❌ 에러 발생
  width: calc(50% + 20px);  // ✅ CSS calc() 사용
}`}
          </CodeBlock>
          <p className="mt_ms">
            퍼센트와 다른 단위를 직접 연산할 수는 없지만,{" "}
            <b>
              CSS의 <code className="t_blue">calc()</code> 함수
            </b>
            를 사용하면 됩니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">단위 없는 숫자 연산</h3>
          <p className="mt_m">
            단위 없는 숫자(예: <code className="t_blue">1.5</code>,{" "}
            <code className="t_blue">2</code>)는 <b>다른 단위와 연산</b>할 수
            있습니다.
          </p>
          <CodeBlock
            title="단위 없는 숫자 연산"
            language="css"
            className="mt_m"
          >
            {`$base-size: 16px;
$line-height: 1.5;

.text {
  font-size: $base-size;
  line-height: $line-height;  // 1.5 (단위 없음)
  padding: $base-size * 1.5;  // 24px
}`}
          </CodeBlock>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">연산 우선순위</h2>
        <p className="mt_l">
          여러 연산이 함께 사용될 때 <b>연산 우선순위</b>를 이해하는 것이
          중요합니다. SCSS의 연산 우선순위는 일반적인{" "}
          <b>사칙연산 우선순위와 동일</b>합니다.
          <br />
          우선순위를 잘못 이해하면 숫자는 맞는데{" "}
          <b>디자인은 어색한 미묘한 버그</b>가 생기기 쉬우므로, 기본 규칙을 한
          번 정리해 두는 것이 좋습니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">SCSS 연산 우선순위</h3>
          <p className="mt_m">SCSS 연산은 다음과 같은 우선순위를 가집니다.</p>
          <div className="mt_sm indent_small">
            <ol className="ol_lst">
              <li>
                <strong>괄호 ( )</strong> = 가장 높은 우선순위
              </li>
              <li>
                <strong>곱셈 *, 나눗셈 /</strong>
              </li>
              <li>
                <strong>덧셈 +, 뺄셈 -</strong> = 가장 낮은 우선순위
              </li>
            </ol>
          </div>

          <div className="mt_l indent">
            <h4 className="ml_mn">기본 우선순위 예시</h4>
            <p className="mt_s">
              일반적인 수학 규칙과 동일하게{" "}
              <b>곱셈과 나눗셈이 덧셈과 뺄셈보다 우선</b>합니다.
            </p>
            <CodeBlock
              title="연산 우선순위 예시"
              language="css"
              className="mt_ms"
            >
              {`$base: 10px;

.container {
  padding: $base + 5px * 2;  // 20px (5px * 2가 먼저 계산)
  margin: ($base + 5px) * 2; // 30px (괄호 안이 먼저 계산)
}`}
            </CodeBlock>
            <p className="mt_ms">
              위 예시에서 <code className="t_blue">$base + 5px * 2</code>는{" "}
              <code className="t_blue">10px + (5px * 2) = 20px</code>로
              계산됩니다.
            </p>
          </div>

          <div className="mt_l indent">
            <h4 className="ml_mn">우선순위별 상세 예시</h4>
            <p className="mt_s">
              다양한 연산이 섞여 있을 때의 계산 순서를 확인해봅니다.
            </p>
            <CodeBlock title="우선순위별 예시" language="css" className="mt_ms">
              {`$base: 16px;
$multiplier: 2;

.element {
  // 1. 괄호가 가장 먼저 계산됨
  padding: ($base + 4px) * $multiplier;
  // 계산: (16px + 4px) * 2 = 40px

  // 2. 곱셈/나눗셈이 덧셈/뺄셈보다 먼저 계산됨
  margin: $base + 4px * $multiplier;
  // 계산: 16px + (4px * 2) = 24px

  // 3. 같은 우선순위는 왼쪽에서 오른쪽으로
  width: $base * 2 / 4 + 8px;
  // 계산: ((16px * 2) / 4) + 8px = 8px + 8px = 16px

  // 4. 괄호로 명확하게 표현하는 것이 좋음
  height: ($base * $multiplier) / 2 - 4px;
  // 계산: ((16px * 2) / 2) - 4px = 16px - 4px = 12px
}`}
            </CodeBlock>
            <p className="mt_ms">
              복잡한 연산일수록 <b>괄호를 사용하여 우선순위를 명확히</b>{" "}
              표현하는 것이 좋습니다. 이렇게 하면 코드를 읽는 사람도 의도를 쉽게
              이해할 수 있습니다.
            </p>
          </div>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">실제 활용 예시</h2>
        <p className="mt_l">
          연산을 <b>실제 프로젝트에서 활용</b>하는 예시를 살펴봅니다.
          <br />
          여기서는 간격, 레이아웃, 타이포그래피처럼 디자인 시스템에서 자주
          쓰이는 값들을 연산으로 관리해 <b>코드를 어떻게 단순화할 수 있는지</b>
          를 확인합니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">간격 시스템 구축</h3>
          <p className="mt_m">
            기본 간격을 기준으로 <b>배수 관계의 간격을 자동 계산</b>합니다.
          </p>
          <CodeBlock title="간격 시스템 예시" language="css" className="mt_m">
            {`$base-spacing: 8px;

// 간격 변수 자동 생성
$spacing-1: $base-spacing;        // 8px
$spacing-2: $base-spacing * 2;    // 16px
$spacing-3: $base-spacing * 3;    // 24px
$spacing-4: $base-spacing * 4;    // 32px

.card {
  padding: $spacing-2;           // 16px
  margin-bottom: $spacing-3;     // 24px
}`}
          </CodeBlock>
          <p className="mt_ms">
            이렇게 하면 <b>기본 간격만 변경하면 모든 간격이 자동으로 조정</b>
            됩니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">반응형 컨테이너 너비</h3>
          <p className="mt_m">
            기본 너비를 기준으로 <b>여백을 계산하여 컨테이너 너비를 결정</b>
            합니다.
          </p>
          <CodeBlock
            title="컨테이너 너비 계산 예시"
            language="css"
            className="mt_m"
          >
            {`$container-max-width: 1200px;
$container-padding: 16px;

.container {
  max-width: $container-max-width;
  width: $container-max-width - ($container-padding * 2);
  padding: 0 $container-padding;
}`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">폰트 크기 스케일</h3>
          <p className="mt_m">
            기본 폰트 크기를 기준으로 <b>비율에 맞춰 폰트 크기를 계산</b>합니다.
          </p>
          <CodeBlock
            title="폰트 크기 스케일 예시"
            language="css"
            className="mt_m"
          >
            {`$font-size-base: 16px;
$scale-factor: 1.25;

.text-sm {
  font-size: $font-size-base / $scale-factor;  // 12.8px
}

.text-base {
  font-size: $font-size-base;  // 16px
}

.text-lg {
  font-size: $font-size-base * $scale-factor;  // 20px
}`}
          </CodeBlock>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">정리</h2>
        <p className="mt_l">
          SCSS에서 가능한 연산에 대해 알아본 내용을 정리합니다.
        </p>
        <ul className="dot_lst mt_m indent_small">
          <li>
            <b>산술 연산자</b>: 덧셈(+), 뺄셈(-), 곱셈(*), 나눗셈(/) 네 가지
            기본 연산 지원
          </li>
          <li>
            <b>단위 연산</b>: 같은 단위끼리 연산 가능, 단위 없는 숫자는 다른
            단위와 연산 가능
          </li>
          <li>
            <b>연산 우선순위</b>: 곱셈/나눗셈이 덧셈/뺄셈보다 우선, 괄호로
            명확히 지정 가능
          </li>
          <li>
            <b>활용 예시</b>: 간격 시스템, 컨테이너 너비, 폰트 크기 스케일
            등에서 유용
          </li>
        </ul>
        <p className="mt_m">
          다음 페이지에서는 <b>단위 연산 시 주의사항</b>을 자세히 알아봅니다.
        </p>
      </section>

      <figure className="img_figure mt_l">
        <img src={IMG.SCSS + "/05_scss_01.png"} alt="SCSS 연산" />
        <figcaption>SCSS 연산</figcaption>
      </figure>
    </>
  );
}

export default OperationsPage;
