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
  title: "단위 연산 시 주의사항",
  description:
    "SCSS에서 단위 연산 시 주의해야 할 사항들을 상세히 알아봅니다. 단위 호환성, 나눗셈 연산의 특수성, calc() 함수 사용, 일반적인 실수와 해결 방법을 예시와 함께 설명합니다.",
  keyword: "scss 단위 연산, scss 단위 주의사항, scss 나눗셈, scss calc, scss 단위 에러, scss 연산 오류",
};

function UnitPrecautionsPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          SCSS에서 단위 연산을 할 때는 <b>여러 주의사항</b>이 있습니다.
          <br />
          단위 호환성, 나눗셈 연산의 특수성, CSS의{" "}
          <code className="t_blue">calc()</code> 함수와의 차이 등을 이해하면
          연산 오류를 방지할 수 있습니다.
        </p>
        <p className="mt_s">
          이 페이지에서는 단위 연산 시 발생할 수 있는 문제와 그 해결 방법,
          일반적인 실수와 주의사항을 상세히 알아봅니다.
        </p>
      </blockquote>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">단위 호환성</h2>
        <p className="mt_l">
          SCSS에서 연산을 할 때는 <b>단위 호환성</b>을 고려해야 합니다.
          <br />
          모든 단위가 서로 연산 가능한 것은 아닙니다. 단위 규칙을 잘 이해해 두면
          연산 오류를 줄이고, <b>반응형 레이아웃에서 예기치 않은 결과</b>가
          나오는 상황을 예방할 수 있습니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">같은 단위끼리만 연산 가능</h3>
          <p className="mt_m">
            일반적으로 <b>같은 단위끼리만 연산</b>할 수 있습니다.
          </p>
          <CodeBlock
            title="같은 단위 연산 (✅ 가능)"
            language="css"
            className="mt_m"
          >
            {`$size-1: 10px;
$size-2: 20px;

.container {
  width: $size-1 + $size-2;  // 30px (가능)
}`}
          </CodeBlock>
          <CodeBlock
            title="다른 단위 연산 (❌ 에러)"
            language="css"
            className="mt_m"
          >
            {`$size-px: 10px;
$size-em: 2em;

.container {
  width: $size-px + $size-em;  // 에러 발생
}`}
          </CodeBlock>
          <p className="mt_ms">
            <code className="t_blue">px</code>와{" "}
            <code className="t_blue">em</code>처럼{" "}
            <b>다른 단위는 직접 연산할 수 없습니다</b>.
            <br />
            이런 경우 CSS의 <code className="t_blue">calc()</code> 함수를
            사용해야 합니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">호환 가능한 단위</h3>
          <p className="mt_m">
            일부 단위는 <b>호환되어 연산이 가능</b>합니다.
          </p>
          <div className="table_summary value_150 mt_m">
            <ul className="lst_hd">
              <li className="cell value">단위 그룹</li>
              <li className="cell content">호환 단위</li>
              <li className="cell content">설명</li>
            </ul>
            <ul className="lst_bd">
              <li>
                <p className="cell value t_darkgreen">절대 길이</p>
                <p className="cell content" data-title="호환 단위">
                  <code>px</code>, <code>cm</code>, <code>mm</code>,{" "}
                  <code>in</code>, <code>pt</code>, <code>pc</code>
                </p>
                <p className="cell content" data-title="설명">
                  절대 길이 단위끼리는 연산 가능
                </p>
              </li>
              <li>
                <p className="cell value t_darkgreen">상대 길이</p>
                <p className="cell content" data-title="호환 단위">
                  <code>em</code>, <code>rem</code>, <code>%</code>
                </p>
                <p className="cell content" data-title="설명">
                  상대 길이 단위끼리는 연산 가능
                </p>
              </li>
              <li>
                <p className="cell value t_darkgreen">혼합</p>
                <p className="cell content" data-title="호환 단위">
                  절대 길이와 상대 길이는 연산 불가
                </p>
                <p className="cell content" data-title="설명">
                  <code>px + em</code> 같은 연산은 불가능
                </p>
              </li>
            </ul>
          </div>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">나눗셈 연산의 특수성</h2>
        <p className="mt_l">
          나눗셈 연산은 <b>특별한 주의가 필요</b>합니다.
          <br />
          CSS의 <code className="t_blue">font: 12px/1.5</code> 같은 문법과
          충돌할 수 있기 때문입니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">나눗셈이 연산으로 인식되지 않는 경우</h3>
          <p className="mt_m">
            나눗셈은 <b>특정 조건에서만 연산으로 인식</b>됩니다.
          </p>
          <CodeBlock title="나눗셈 인식 조건" language="css" className="mt_m">
            {`$base-size: 16px;

// 연산으로 인식됨
.text {
  font-size: $base-size / 2;        // ✅ 변수와 함께 사용
  padding: (20px / 2);              // ✅ 괄호 사용
  margin: 24px / 2;                 // ✅ 단위가 있는 값
}

// 연산으로 인식 안 됨 (CSS 문법으로 해석)
.text {
  font: 12px/1.5;                   // ❌ CSS의 font 문법 (font-size, line-height의 shorthand 선언)
  border-radius: 10px / 5px;        // ❌ CSS의 border-radius 문법 (가로 / 세로 반지름)
}`}
          </CodeBlock>
          <p className="mt_ms">
            나눗셈을 연산으로 사용하려면{" "}
            <b>변수와 함께 사용하거나 괄호로 감싸야</b> 합니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">안전한 나눗셈 사용법</h3>
          <p className="mt_m">나눗셈을 안전하게 사용하는 방법을 알아봅니다.</p>
          <CodeBlock
            title="안전한 나눗셈 사용법"
            language="css"
            className="mt_m"
          >
            {`$base-size: 16px;
$half-size: $base-size / 2;  // 변수에 저장

.text {
  // 방법 1: 변수 사용
  font-size: $half-size;

  // 방법 2: 괄호 사용
  padding: (20px / 2);

  // 방법 3: 변수와 직접 연산
  margin: $base-size / 2;
}`}
          </CodeBlock>
          <p className="mt_ms">
            가장 안전한 방법은 <b>나눗셈 결과를 변수에 저장</b>하거나{" "}
            <b>괄호로 명확히 표시</b>하는 것입니다.
          </p>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">calc() 함수와의 차이</h2>
        <p className="mt_l">
          SCSS 연산과 CSS의 <code className="t_blue">calc()</code> 함수는{" "}
          <b>다른 방식으로 동작</b>합니다.
          <br />두 방식을 언제 선택해야 하는지 알면, 브라우저에서만 가능한
          계산과 <b>빌드 타임에 미리 처리해 둘 계산</b>을 깔끔하게 나눌 수
          있습니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">SCSS 연산 vs calc()</h3>
          <p className="mt_m">두 방식의 차이를 비교해봅니다.</p>
          <div className="table_summary value_150 mt_m">
            <ul className="lst_hd">
              <li className="cell value">구분</li>
              <li className="cell content">SCSS 연산</li>
              <li className="cell content">calc()</li>
            </ul>
            <ul className="lst_bd">
              <li>
                <p className="cell value t_darkgreen">처리 시점</p>
                <p className="cell content" data-title="SCSS 연산">
                  컴파일 시점 (빌드 타임)
                </p>
                <p className="cell content" data-title="calc()">
                  런타임 (브라우저에서 실행)
                </p>
              </li>
              <li>
                <p className="cell value t_darkgreen">단위 제한</p>
                <p className="cell content" data-title="SCSS 연산">
                  같은 단위끼리만 연산 가능
                </p>
                <p className="cell content" data-title="calc()">
                  다른 단위도 연산 가능 (px + %, em + rem 등)
                </p>
              </li>
              <li>
                <p className="cell value t_darkgreen">결과</p>
                <p className="cell content" data-title="SCSS 연산">
                  계산된 값이 CSS에 포함
                </p>
                <p className="cell content" data-title="calc()">
                  calc() 표현식이 CSS에 그대로 유지
                </p>
              </li>
            </ul>
          </div>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">calc() 사용 예시</h3>
          <p className="mt_m">
            다른 단위를 연산해야 할 때는 <code className="t_blue">calc()</code>
            를 사용합니다.
          </p>
          <CodeBlock title="calc() 사용 예시" language="css" className="mt_m">
            {`$sidebar-width: 300px;

.main-content {
  // SCSS 연산 불가능 (px와 %는 다른 단위)
  // width: 100% - $sidebar-width;  // 에러

  // calc() 사용
  width: calc(100% - #{$sidebar-width});
}`}
          </CodeBlock>
          <p className="mt_ms">
            SCSS 변수를 <code className="t_blue">calc()</code> 안에서 사용할
            때는{" "}
            <b>
              <i className="t_blue">인터폴레이션</i>(
              <code className="t_blue">{"#{}"}</code>)을 사용해야 합니다.
            </b>
          </p>
          <p className="mt_ms ex_box">
            <b className="t_blue">인터폴레이션</b>을 사용해야 하는 이유에
            대해서는 아래 <b className="t_blue">[인터폴레이션 사용]</b> 섹션에서
            자세히 설명합니다.
          </p>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">일반적인 실수와 해결 방법</h2>
        <p className="mt_l">
          단위 연산 시 자주 발생하는 <b>실수와 그 해결 방법</b>을 정리합니다.
          <br />
          실제 프로젝트에서 자주 마주치는 에러 패턴을 미리 알아두면, 나중에 같은
          문제가 생겼을 때 <b>어디부터 의심해야 하는지</b>를 빠르게 떠올릴 수
          있습니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">곱셈에서 두 값 모두 단위를 가진 경우</h3>
          <p className="mt_m">
            곱셈은 <b>하나의 값만 단위를 가져야</b> 합니다.
          </p>
          <CodeBlock title="잘못된 곱셈" language="css" className="mt_m">
            {`// 에러 발생
width: 10px * 5px;  // ❌ 둘 다 단위가 있음`}
          </CodeBlock>
          <CodeBlock title="올바른 곱셈" language="css" className="mt_m">
            {`// 올바른 방법
width: 10px * 5;    // ✅ 하나만 단위
width: 10 * 5px;    // ✅ 하나만 단위`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">나눗셈에서 CSS 문법과 충돌</h3>
          <p className="mt_m">나눗셈이 CSS 문법으로 해석되는 경우입니다.</p>
          <CodeBlock title="나눗셈 충돌 예시" language="css" className="mt_m">
            {`// CSS 문법으로 해석됨 (연산 아님)
.text {
  font: 12px/1.5;  // CSS의 font 문법  (font-size, line-height의 shorthand 선언)
}

// 연산으로 인식하려면
.text {
  font-size: (12px / 1.5);  // 괄호 사용 (12px ÷ 1.5) = 8px
}`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">퍼센트와 다른 단위 연산</h3>
          <p className="mt_m">
            퍼센트는 <b>다른 단위와 직접 연산할 수 없습니다</b>.
          </p>
          <CodeBlock title="퍼센트 연산 에러" language="css" className="mt_m">
            {`// 에러 발생
width: 50% + 20px;  // X: 퍼센트와 px는 연산 불가`}
          </CodeBlock>
          <CodeBlock title="calc() 사용" language="css" className="mt_m">
            {`$padding: 20px;

.container {
  // calc() 사용
  width: calc(50% + #{$padding});
}`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">0 값의 단위 처리</h3>
          <p className="mt_m">
            <code className="t_blue">0</code> 값은 <b>단위가 없어도 됩니다</b>.
          </p>
          <CodeBlock title="0 값 처리" language="css" className="mt_m">
            {`// 둘 다 동일하게 동작
.container {
  margin: 0;
  margin: 0px;
}

// 연산에서도 0은 단위 없이 사용 가능
$base: 16px;
.container {
  padding: $base - 0;  // 16px
}`}
          </CodeBlock>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">인터폴레이션 사용</h2>
        <p className="mt_l">
          인터폴레이션(<code className="t_blue">{"#{}"}</code>)은{" "}
          <b>SCSS 변수를 문자열이나 특정 문맥에서 사용</b>할 때 필요한
          문법입니다.
          <br />
          일반적인 CSS 속성 값에서는 변수를 그대로 사용할 수 있지만,{" "}
          <code className="t_blue">calc()</code> 함수나 문자열, 선택자, 속성명
          등에서는 <b>인터폴레이션을 사용해야</b> 변수가 올바르게 해석됩니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">인터폴레이션이란?</h3>
          <p className="mt_m">
            인터폴레이션은 <b>변수 값을 문자열로 변환하여 삽입</b>하는
            기능입니다.
            <br />
            <code className="t_blue">{"#{$variable}"}</code> 형태로 사용하며,
            변수의 값을 그대로 텍스트로 치환합니다.
          </p>
          <CodeBlock
            title="인터폴레이션 기본 개념"
            language="css"
            className="mt_m"
          >
            {`$size: 16px;

// 일반적인 사용 (인터폴레이션 불필요)
.text {
  font-size: $size;  // 16px (정상 작동)
}

// calc() 안에서 사용 (인터폴레이션 필요)
.container {
  width: calc(100% - #{$size});  // calc(100% - 16px)
}`}
          </CodeBlock>
          <p className="mt_ms">
            일반 CSS 속성에서는 변수를 그대로 사용해도 되지만,{" "}
            <code className="t_blue">calc()</code> 같은 함수 안에서는{" "}
            <b>인터폴레이션이 필요</b>합니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">인터폴레이션이 필요한 이유</h3>
          <p className="mt_m">
            인터폴레이션을 사용하지 않으면 <b>SCSS가 변수를 연산으로 해석</b>
            하려고 시도하거나, <b>문법 오류가 발생</b>할 수 있습니다.
          </p>
          <CodeBlock
            title="인터폴레이션 없이 사용 (❌ 에러)"
            language="css"
            className="mt_m"
          >
            {`$size: 16px;

.container {
  // ❌ 에러: SCSS가 연산으로 해석하려고 시도
  width: calc(100% - $size);
}`}
          </CodeBlock>
          <CodeBlock
            title="인터폴레이션 사용 (✅ 정상)"
            language="css"
            className="mt_m"
          >
            {`$size: 16px;

.container {
  // ✅ 정상: 변수 값이 문자열로 삽입됨
  width: calc(100% - #{$size});
}`}
          </CodeBlock>
          <CodeBlock title="컴파일된 CSS" language="css" className="mt_m">
            {`.container {
  width: calc(100% - 16px);
}`}
          </CodeBlock>
          <p className="mt_ms">
            인터폴레이션을 사용하면 <b>변수 값이 그대로 문자열로 치환</b>되어{" "}
            <code className="t_blue">calc()</code> 함수에 올바르게 전달됩니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">인터폴레이션이 필요한 경우</h3>
          <p className="mt_m">
            다음과 같은 경우에는 <b>반드시 인터폴레이션을 사용</b>해야 합니다.
          </p>

          <div className="mt_l indent">
            <h4 className="ml_mn t_blue">calc() 함수 안에서 사용</h4>
            <p className="mt_ms">
              <code className="t_blue">calc()</code> 함수 안에서는 변수를 직접
              사용할 수 없고, <b>인터폴레이션으로 변수 값을 문자열로 변환</b>
              해야 합니다.
            </p>
            <CodeBlock
              title="calc() 함수 안에서 사용"
              language="css"
              className="mt_m"
            >
              {`$size: 16px;
$padding: 20px;

.container {
  width: calc(100% - #{$size} - #{$padding});
}`}
            </CodeBlock>
          </div>

          <div className="mt_l indent">
            <h4 className="ml_mn t_blue">문자열 안에서 사용</h4>
            <p className="mt_m">
              문자열 안에서 변수를 사용할 때는{" "}
              <b>인터폴레이션으로 변수 값을 텍스트로 삽입</b>할 수 있습니다.
            </p>
            <CodeBlock
              title="문자열 안에서 사용"
              language="css"
              className="mt_m"
            >
              {`$size: 16px;
$color: #0a58ca;

.element::before {
  content: "#{$size} 크기의 텍스트";
  background-image: url("image-#{$color}.png");
}`}
            </CodeBlock>
            <CodeBlock title="컴파일된 CSS" language="css" className="mt_m">
              {`.element::before {
  content: "16px 크기의 텍스트";
  background-image: url("image-#0a58ca.png");
}`}
            </CodeBlock>
          </div>

          <div className="mt_l indent">
            <h4 className="ml_mn t_blue">선택자 안에서 사용</h4>
            <p className="mt_m">
              선택자 이름이나 미디어 쿼리 조건에서 변수를 사용할 때도{" "}
              <b>인터폴레이션이 필요</b>합니다.
            </p>
            <CodeBlock
              title="선택자 안에서 사용"
              language="css"
              className="mt_m"
            >
              {`$size: 16px;
$breakpoint: md;

.element-#{$size} {
  padding: $size;
}

@media (min-width: #{$breakpoint}) {
  .container { width: 100%; }
}`}
            </CodeBlock>
            <CodeBlock title="컴파일된 CSS" language="css" className="mt_m">
              {`.element-16px {
  padding: 16px;
}

@media (min-width: md) {
  .container { width: 100%; }
}`}
            </CodeBlock>
          </div>

          <div className="mt_l indent">
            <h4 className="ml_mn t_blue">속성명에서 사용</h4>
            <p className="mt_ms">
              속성명을 변수로 만들 때도 <b>인터폴레이션을 사용</b>해야 합니다.
            </p>
            <CodeBlock title="속성명에서 사용" language="css" className="mt_m">
              {`$property: margin;

.container {
  #{$property}: 16px;
}`}
            </CodeBlock>
            <CodeBlock title="컴파일된 CSS" language="css" className="mt_m">
              {`.container {
  margin: 16px;
}`}
            </CodeBlock>
          </div>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">인터폴레이션 사용 시 주의사항</h3>
          <p className="mt_m">
            인터폴레이션을 사용할 때 주의해야 할 점들을 알아봅니다.
          </p>
          <CodeBlock
            title="인터폴레이션 주의사항"
            language="css"
            className="mt_m"
          >
            {`$size: 16px;

// ✅ 올바른 사용
.container {
  width: calc(100% - #{$size});
}

// ❌ 잘못된 사용: 인터폴레이션 안에서 연산 불가
.container {
  width: calc(100% - #{$size * 2});  // 에러
}

// ✅ 해결 방법: 연산을 먼저 수행
$double-size: $size * 2;
.container {
  width: calc(100% - #{$double-size});
}`}
          </CodeBlock>
          <p className="mt_ms">
            인터폴레이션 안에서는 <b>연산을 직접 수행할 수 없습니다</b>.
            <br />
            연산이 필요한 경우 <b>변수에 먼저 계산한 값을 저장</b>한 후
            인터폴레이션으로 사용해야 합니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">인터폴레이션 vs 일반 변수 사용</h3>
          <p className="mt_m">
            언제 인터폴레이션을 사용하고, 언제 일반 변수를 사용하는지
            비교해봅니다.
          </p>
          <div className="table_summary value_150 mt_m">
            <ul className="lst_hd">
              <li className="cell value">사용 위치</li>
              <li className="cell content">일반 변수</li>
              <li className="cell content">인터폴레이션</li>
            </ul>
            <ul className="lst_bd">
              <li>
                <p className="cell value t_darkgreen">일반 CSS 속성 값</p>
                <p className="cell content" data-title="일반 변수">
                  <code>$size</code> ✅
                </p>
                <p className="cell content" data-title="인터폴레이션">
                  <code>{"#{$size}"}</code> (불필요하지만 가능)
                </p>
              </li>
              <li>
                <p className="cell value t_darkgreen">calc() 함수</p>
                <p className="cell content" data-title="일반 변수">
                  <code>$size</code> ❌ 에러
                </p>
                <p className="cell content" data-title="인터폴레이션">
                  <code>{"#{$size}"}</code> ✅ 필수
                </p>
              </li>
              <li>
                <p className="cell value t_darkgreen">문자열 안</p>
                <p className="cell content" data-title="일반 변수">
                  <code>$size</code> ❌ 에러
                </p>
                <p className="cell content" data-title="인터폴레이션">
                  <code>{"#{$size}"}</code> ✅ 필수
                </p>
              </li>
              <li>
                <p className="cell value t_darkgreen">선택자</p>
                <p className="cell content" data-title="일반 변수">
                  <code>$size</code> ❌ 에러
                </p>
                <p className="cell content" data-title="인터폴레이션">
                  <code>{"#{$size}"}</code> ✅ 필수
                </p>
              </li>
              <li>
                <p className="cell value t_darkgreen">속성명</p>
                <p className="cell content" data-title="일반 변수">
                  <code>$property</code> ❌ 에러
                </p>
                <p className="cell content" data-title="인터폴레이션">
                  <code>{"#{$property}"}</code> ✅ 필수
                </p>
              </li>
            </ul>
          </div>
          <p className="mt_ms">
            일반 CSS 속성 값에서는 변수를 그대로 사용하는 것이 일반적이지만,{" "}
            <b>특수한 문맥에서는 인터폴레이션이 필수</b>입니다.
          </p>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">모범 사례</h2>
        <p className="mt_l">
          단위 연산을 안전하고 효율적으로 사용하기 위한 <b>모범 사례</b>를
          정리합니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">같은 단위 사용하기</h3>
          <p className="mt_m">
            가능하면 <b>같은 단위를 사용</b>하여 연산하는 것이 가장 안전합니다.
          </p>
          <CodeBlock
            title="같은 단위 사용 예시"
            language="css"
            className="mt_m"
          >
            {`// 좋은 예시: 모두 px 사용
$base: 16px;
$padding: 8px;
$margin: 24px;

.container {
  padding: $base + $padding;  // 24px
  margin: $margin;
}`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">괄호로 명확히 표시</h3>
          <p className="mt_m">
            복잡한 연산은 <b>괄호로 우선순위를 명확히</b> 표시합니다.
          </p>
          <CodeBlock title="괄호 사용 예시" language="css" className="mt_m">
            {`$base: 16px;

.container {
  padding: ($base + 8px) * 2;  // 명확한 우선순위
}`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">calc()와 SCSS 연산 조합</h3>
          <p className="mt_m">
            필요한 경우 <b>SCSS 연산과 calc()를 함께 사용</b>할 수 있습니다.
          </p>
          <CodeBlock title="조합 사용 예시" language="css" className="mt_m">
            {`$base: 16px;
$padding: $base * 2;  // SCSS 연산

.container {
  width: calc(100% - #{$padding});  // calc() 사용
}`}
          </CodeBlock>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">정리</h2>
        <p className="mt_l">
          단위 연산 시 주의사항에 대해 알아본 내용을 정리합니다.
        </p>
        <ul className="dot_lst mt_m indent_small">
          <li>
            <b>단위 호환성</b>: 같은 단위끼리만 연산 가능, 다른 단위는{" "}
            <code>calc()</code> 사용
          </li>
          <li>
            <b>나눗셈 특수성</b>: 변수와 함께 사용하거나 괄호로 감싸야 연산으로
            인식
          </li>
          <li>
            <b>calc()와의 차이</b>: SCSS 연산은 컴파일 시점, calc()는 런타임
          </li>
          <li>
            <b>일반적인 실수</b>: 곱셈에서 두 값 모두 단위, 나눗셈 충돌, 퍼센트
            연산 등
          </li>
          <li>
            <b>인터폴레이션</b>: calc()나 문자열에서 변수 사용 시{" "}
            <code className="t_blue">{"#{}"}</code> 필요
          </li>
          <li>
            <b>모범 사례</b>: 같은 단위 사용, 괄호로 명확히 표시, calc()와 조합
          </li>
        </ul>
        <p className="mt_m">
          다음 페이지에서는 <b>SCSS의 기본 내장 함수</b>에 대해 자세히
          알아봅니다.
        </p>
      </section>

      <figure className="img_figure mt_l">
        <img src={IMG.SCSS + "/05_scss_02.png"} alt="단위 사용 시 주의사항" />
        <figcaption>단위 사용 시 주의사항</figcaption>
      </figure>
    </>
  );
}

export default UnitPrecautionsPage;
