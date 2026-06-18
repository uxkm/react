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
  title: "SCSS의 기본 내장 함수",
  description:
    "SCSS의 기본 내장 함수를 상세히 알아봅니다. 색상 함수(lighten, darken, mix, rgba), 숫자 함수(round, ceil, floor), 문자열 함수, 리스트 함수 등을 예시와 함께 설명합니다.",
  keyword:
    "scss 함수, scss 내장 함수, scss lighten, scss darken, scss mix, scss 색상 함수, scss 숫자 함수",
};

function BuiltinFunctionsPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          SCSS는 <b>다양한 내장 함수</b>를 제공합니다.
          <br />
          색상 조작, 숫자 계산, 문자열 처리 등{" "}
          <b>자주 사용하는 작업을 함수로 쉽게 처리</b>할 수 있어, 코드 작성
          효율이 크게 향상됩니다.
        </p>
        <p className="mt_s">
          이 페이지에서는 SCSS의 주요 내장 함수들을 카테고리별로 나누어 상세히
          알아보고, 각 함수의 사용법과 실제 활용 예시를 제공합니다.
        </p>
      </blockquote>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">SCSS 내장 함수란?</h2>
        <p className="mt_l">
          SCSS 내장 함수는 <b>컴파일 시점에 실행되는 함수</b>입니다.
          <br />
          색상 조작, 숫자 계산, 문자열 처리 등 다양한 작업을 수행할 수 있습니다.
          반복해서 등장하는 계산을 함수로 맡기면,{" "}
          <b>스타일을 더 적은 코드로, 더 일관되게</b> 관리할 수 있습니다.
          <br />
          SCSS 함수는 <b>함수명(인자)</b> 형태로 사용합니다.
        </p>

        <CodeBlock title="함수 사용 예시" language="css" className="mt_m">
          {`$primary-color: #0a58ca;

.button {
  // lighten 함수 사용
  background: lighten($primary-color, 10%);
}`}
        </CodeBlock>
        <CodeBlock title="컴파일 후 CSS" language="css" className="mt_m">
          {`/* #0a58ca 색상을 10% 밝게 조정한 결과(#136ef3)가 적용됩니다. */
.button {
  background: #136ef3;
}`}
        </CodeBlock>
        <p className="mt_m">
          함수는 <b>컴파일 시점에 계산</b>되어 최종 CSS에는 결과값만 들어갑니다.
        </p>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">색상 함수</h2>
        <p className="mt_l">
          색상을 조작하는 <b>가장 많이 사용되는 함수들</b>을 알아봅니다.
          <br />
          <code>hover·active</code> 상태나 다크 모드 색상을 일일이 손으로
          계산하는 대신, <b>함수를 이용해 규칙적으로 생성</b>하는 방법을 익히는
          것이 목표입니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            <i className="t_blue">lighten()</i> - 색상을 밝게
          </h3>
          <p className="mt_m">
            <code className="t_blue">lighten()</code> 함수는{" "}
            <b>색상을 지정한 비율만큼 밝게</b> 만듭니다.
          </p>
          <CodeBlock title="lighten() 예시" language="css" className="mt_m">
            {`$primary-color: #0a58ca;

.button {
  background: $primary-color;
  // 10% 더 밝게
  &:hover {
    background: lighten($primary-color, 10%);
  }
}`}
          </CodeBlock>
          <CodeBlock title="컴파일된 CSS" language="css" className="mt_m">
            {`.button {
  background: #0a58ca;
}
.button:hover {
  background: #3d7dd8;
}`}
          </CodeBlock>
          <p className="mt_ms">
            <code className="t_blue">lighten()</code>은{" "}
            <b>호버 상태나 활성 상태의 색상을 자동으로 생성</b>할 때 유용합니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            <i className="t_blue">darken()</i> - 색상을 어둡게
          </h3>
          <p className="mt_m">
            <code className="t_blue">darken()</code> 함수는{" "}
            <b>색상을 지정한 비율만큼 어둡게</b> 만듭니다.
          </p>
          <CodeBlock title="darken() 예시" language="css" className="mt_m">
            {`$primary-color: #0a58ca;

.button {
  background: $primary-color;
  // 10% 더 어둡게
  &:active {
    background: darken($primary-color, 10%);
  }
}`}
          </CodeBlock>
          <CodeBlock title="컴파일된 CSS" language="css" className="mt_m">
            {`.button {
  background: #0a58ca;
}
.button:active {
  background: #0844a0;
}`}
          </CodeBlock>
          <p className="mt_ms">
            <code className="t_blue">darken()</code>은{" "}
            <b>활성 상태나 강조된 요소의 색상을 자동으로 생성</b>할 때
            유용합니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            <i className="t_blue">mix()</i> - 두 색상 섞기
          </h3>
          <p className="mt_m">
            <code className="t_blue">mix()</code> 함수는{" "}
            <b>두 색상을 지정한 비율로 섞습니다</b>.
          </p>
          <CodeBlock title="mix() 예시" language="css" className="mt_m">
            {`$color-primary: #0a58ca;
$color-white: #ffffff;

.button {
  // 80% primary, 20% white
  background: mix($color-primary, $color-white, 80%);
}`}
          </CodeBlock>
          <CodeBlock title="컴파일된 CSS" language="css" className="mt_m">
            {`.button {
  background: #2d6fd4;
}`}
          </CodeBlock>
          <p className="mt_ms">
            <code className="t_blue">mix()</code>는{" "}
            <b>색상의 투명도나 밝기를 조절</b>할 때 유용합니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            <i className="t_blue">rgba()</i> - 투명도 조절
          </h3>
          <p className="mt_m">
            SCSS의 <code className="t_blue">rgba()</code> 함수는{" "}
            <b>색상에 투명도를 추가</b>할 수 있습니다.
          </p>
          <CodeBlock title="rgba() 예시" language="css" className="mt_m">
            {`$primary-color: #0a58ca;

.overlay {
  background: rgba($primary-color, 0.5);  // 50% 투명도
}

.text {
  color: rgba($primary-color, 0.8);  // 80% 불투명도
}`}
          </CodeBlock>
          <CodeBlock title="컴파일된 CSS" language="css" className="mt_m">
            {`.overlay {
  background: rgba(10, 88, 202, 0.5);
}

.text {
  color: rgba(10, 88, 202, 0.8);
}`}
          </CodeBlock>
          <p className="mt_ms">
            SCSS의 <code className="t_blue">rgba()</code> 함수는{" "}
            <b>색상 변수를 직접 사용</b>하여 투명도를 조절할 수 있습니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">기타 색상 함수</h3>
          <p className="mt_m">다른 유용한 색상 함수들도 있습니다.</p>
          <div className="table_summary value_150 mt_m">
            <ul className="lst_hd">
              <li className="cell value">함수</li>
              <li className="cell content">설명</li>
              <li className="cell content">예시</li>
            </ul>
            <ul className="lst_bd">
              <li>
                <p className="cell value">
                  <code className="t_darkgreen">saturate()</code>
                </p>
                <p className="cell content" data-title="설명">
                  색상의 채도를 높임
                </p>
                <p className="cell content" data-title="예시">
                  <code>saturate($color, 20%)</code>
                </p>
              </li>
              <li>
                <p className="cell value">
                  <code className="t_darkgreen">desaturate()</code>
                </p>
                <p className="cell content" data-title="설명">
                  색상의 채도를 낮춤
                </p>
                <p className="cell content" data-title="예시">
                  <code>desaturate($color, 20%)</code>
                </p>
              </li>
              <li>
                <p className="cell value">
                  <code className="t_darkgreen">adjust-hue()</code>
                </p>
                <p className="cell content" data-title="설명">
                  색상의 색조를 조절
                </p>
                <p className="cell content" data-title="예시">
                  <code>adjust-hue($color, 30deg)</code>
                </p>
              </li>
              <li>
                <p className="cell value">
                  <code className="t_darkgreen">complement()</code>
                </p>
                <p className="cell content" data-title="설명">
                  보색(complementary color) 반환
                </p>
                <p className="cell content" data-title="예시">
                  <code>complement($color)</code>
                </p>
              </li>
            </ul>
          </div>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">숫자 함수</h2>
        <p className="mt_l">
          숫자를 처리하는 <b>유용한 함수들</b>을 알아봅니다.
          <br />
          폰트 크기, 간격, 비율 계산처럼 스타일 곳곳에서 사용하는 숫자들을{" "}
          <b>반올림·올림·내림·퍼센트 변환</b>으로 정리하면, 보다 자연스러운
          값들을 만들 수 있습니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            <i className="t_blue">round()</i> - 반올림
          </h3>
          <p className="mt_m">
            <code className="t_blue">round()</code> 함수는{" "}
            <b>숫자를 가장 가까운 정수로 반올림</b>합니다.
          </p>
          <CodeBlock title="round() 예시" language="css" className="mt_m">
            {`$base-size: 16px;

.text {
  font-size: round($base-size * 1.5);  // 24px
}`}
          </CodeBlock>
          <CodeBlock title="컴파일된 CSS" language="css" className="mt_m">
            {`.text {
  font-size: 24px;
}`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            <i className="t_blue">ceil()</i> - 올림
          </h3>
          <p className="mt_m">
            <code className="t_blue">ceil()</code> 함수는 <b>숫자를 올림</b>
            합니다.
          </p>
          <CodeBlock title="ceil() 예시" language="css" className="mt_m">
            {`$base-size: 16px;

.text {
  font-size: ceil($base-size * 1.3);  // 21px (20.8px 올림)
}`}
          </CodeBlock>
          <CodeBlock title="컴파일된 CSS" language="css" className="mt_m">
            {`.text {
  font-size: 21px;
}`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            <i className="t_blue">floor()</i> - 내림
          </h3>
          <p className="mt_m">
            <code className="t_blue">floor()</code> 함수는 <b>숫자를 내림</b>
            합니다.
          </p>
          <CodeBlock title="floor() 예시" language="css" className="mt_m">
            {`$base-size: 16px;

.text {
  font-size: floor($base-size * 1.3);  // 20px (20.8px 내림)
}`}
          </CodeBlock>
          <CodeBlock title="컴파일된 CSS" language="css" className="mt_m">
            {`.text {
  font-size: 20px;
}`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            <i className="t_blue">percentage()</i> - 퍼센트 변환
          </h3>
          <p className="mt_m">
            <code className="t_blue">percentage()</code> 함수는{" "}
            <b>소수를 퍼센트로 변환</b>합니다.
          </p>
          <CodeBlock title="percentage() 예시" language="css" className="mt_m">
            {`$ratio: 0.5;

.container {
  width: percentage($ratio);  // 50%
}`}
          </CodeBlock>
          <CodeBlock title="컴파일된 CSS" language="css" className="mt_m">
            {`.container {
  width: 50%;
}`}
          </CodeBlock>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">문자열 함수</h2>
        <p className="mt_l">
          문자열을 처리하는 <b>유용한 함수들</b>을 알아봅니다.
          <br />
          아이콘 폰트, 데이터 속성, content 값처럼 문자열을 많이 다루는 경우,{" "}
          <b>따옴표 추가·제거나 대소문자 변환</b>을 함수로 처리하면 실수를 줄일
          수 있습니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            <i className="t_blue">quote()</i> /{" "}
            <i className="t_blue">unquote()</i>
          </h3>
          <p className="mt_m">
            <code className="t_blue">quote()</code>는 문자열에 따옴표를
            추가하고, <code className="t_blue">unquote()</code>는 따옴표를
            제거합니다.
          </p>
          <CodeBlock title="quote/unquote 예시" language="css" className="mt_m">
            {`$font-family: Arial;

.text {
  font-family: quote($font-family);  // "Arial"
  font-family: unquote("Arial");    // Arial
}`}
          </CodeBlock>
          <CodeBlock title="컴파일된 CSS" language="css" className="mt_m">
            {`.text {
  font-family: "Arial";
  font-family: Arial;
}`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            <i className="t_blue">to-upper-case()</i> /{" "}
            <i className="t_blue">to-lower-case()</i>
          </h3>
          <p className="mt_m">
            문자열을 대문자(<code className="t_blue">to-upper-case()</code>)나
            소문자(<code className="t_blue">to-lower-case()</code>)로
            변환합니다.
          </p>
          <CodeBlock title="대소문자 변환 예시" language="css" className="mt_m">
            {`$text: "Hello";

.text::before {
  content: to-upper-case($text);  // "HELLO"
}
.text::before {
  content: to-lower-case($text);  // "hello"
}`}
          </CodeBlock>
          <CodeBlock title="컴파일된 CSS" language="css" className="mt_m">
            {`.text::before {
  content: "HELLO";
}
.text::before {
  content: "hello";
}`}
          </CodeBlock>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">리스트 함수</h2>
        <p className="mt_l">
          리스트(배열)를 처리하는 <b>함수들</b>을 알아봅니다.
          <br />
          여러 개의 간격·색상·브레이크포인트를 리스트로 관리하면,{" "}
          <b>반복문과 함께 사용</b>하여 유틸리티 클래스를 자동 생성하기
          쉬워집니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            <i className="t_blue">length()</i> - 리스트 길이
          </h3>
          <p className="mt_m">
            <code className="t_blue">length()</code> 함수는{" "}
            <b>리스트의 항목 개수를 반환</b>합니다.
          </p>
          <CodeBlock title="length() 예시" language="css" className="mt_m">
            {`$spacings: 8px, 16px, 24px, 32px;

// 리스트 길이: 4
$count: length($spacings);`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            <i className="t_blue">nth()</i> - n번째 항목 가져오기
          </h3>
          <p className="mt_m">
            <code className="t_blue">nth()</code> 함수는{" "}
            <b>리스트의 n번째 항목을 반환</b>합니다.
          </p>
          <CodeBlock title="nth() 예시" language="css" className="mt_m">
            {`$spacings: 8px, 16px, 24px, 32px;

.card {
  padding: nth($spacings, 2);  // 16px (두 번째 항목)
}`}
          </CodeBlock>
          <CodeBlock title="컴파일된 CSS" language="css" className="mt_m">
            {`.card {
  padding: 16px;
}`}
          </CodeBlock>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">실제 활용 예시</h2>
        <p className="mt_l">
          내장 함수를 <b>실제 프로젝트에서 활용</b>하는 예시를 살펴봅니다.
          <br />
          버튼 상태 색상, 카드 그림자 등 구체적인 컴포넌트를 통해, 함수가{" "}
          <b>디자인 토큰과 컴포넌트 스타일을 연결</b>하는 모습까지 함께 보게
          됩니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">버튼 상태 색상 자동 생성</h3>
          <p className="mt_m">
            기본 색상에서 <b>함수를 사용하여 상태별 색상을 자동 생성</b>합니다.
          </p>
          <CodeBlock
            title="상태 색상 자동 생성"
            language="css"
            className="mt_m"
          >
            {`$color-primary: #0a58ca;

.button {
  background: $color-primary;

  &:hover {
    background: lighten($color-primary, 10%);
  }

  &:active {
    background: darken($color-primary, 10%);
  }

  &:disabled {
    background: desaturate($color-primary, 50%);
    opacity: 0.5;
  }
}`}
          </CodeBlock>
          <CodeBlock title="컴파일된 CSS" language="css" className="mt_m">
            {`.button {
  background: #0a58ca;
}
.button:hover {
  background: #3d7dd8;
}
.button:active {
  background: #0844a0;
}
.button:disabled {
  background: #4d6a8a;
  opacity: 0.5;
}`}
          </CodeBlock>
          <p className="mt_ms">
            이렇게 하면{" "}
            <b>기본 색상만 변경하면 모든 상태 색상이 자동으로 조정</b>됩니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">그림자 색상 생성</h3>
          <p className="mt_m">
            배경 색상에 맞춰 <b>그림자 색상을 자동으로 생성</b>합니다.
          </p>
          <CodeBlock title="그림자 색상 생성" language="css" className="mt_m">
            {`$bg-color: #ffffff;

.card {
  background: $bg-color;
  box-shadow: 0 4px 6px rgba(darken($bg-color, 50%), 0.1);
}`}
          </CodeBlock>
          <CodeBlock title="컴파일된 CSS" language="css" className="mt_m">
            {`.card {
  background: #ffffff;
  box-shadow: 0 4px 6px rgba(128, 128, 128, 0.1);
}`}
          </CodeBlock>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">함수 조합(중첩) 사용</h2>
        <p className="mt_l">
          여러 함수를 <b>조합(중첩)하여 사용</b>하는 예시를 살펴봅니다.
          <br />
          lighten, rgba 등 여러 함수를 한 줄에서 함께 사용하면,{" "}
          <b>디자인 시안에 가까운 미묘한 효과</b>도 코드로 깔끔하게 표현할 수
          있습니다.
        </p>

        <CodeBlock title="함수 중첩 예시" language="css" className="mt_m">
          {`$primary-color: #0a58ca;

.button {
  // lighten과 rgba를 조합
  background: rgba(lighten($primary-color, 20%), 0.8);
}`}
        </CodeBlock>
        <CodeBlock title="컴파일된 CSS" language="css" className="mt_m">
          {`.button {
  background: rgba(70, 130, 230, 0.8);
}`}
        </CodeBlock>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">정리</h2>
        <p className="mt_l">
          SCSS 기본 내장 함수에 대해 알아본 내용을 정리합니다.
        </p>
        <ul className="dot_lst mt_m indent_small">
          <li>
            <b>색상 함수</b>: <code>lighten()</code>, <code>darken()</code>,{" "}
            <code>mix()</code>, <code>rgba()</code> 등으로 색상 조작
          </li>
          <li>
            <b>숫자 함수</b>: <code>round()</code>, <code>ceil()</code>,{" "}
            <code>floor()</code>, <code>percentage()</code> 등으로 숫자 처리
          </li>
          <li>
            <b>문자열 함수</b>: <code>quote()</code>, <code>unquote()</code>,{" "}
            <code>to-upper-case()</code> 등으로 문자열 처리
          </li>
          <li>
            <b>리스트 함수</b>: <code>length()</code>, <code>nth()</code> 등으로
            리스트 처리
          </li>
          <li>
            <b>활용 예시</b>: 버튼 상태 색상 자동 생성, 그림자 색상 생성 등
          </li>
          <li>
            <b>함수 조합</b>: 여러 함수를 중첩하여 사용 가능
          </li>
        </ul>
        <p className="mt_m">
          다음 페이지에서는 <b>연산과 함수를 활용한 스타일 관리 예제</b>를
          자세히 알아봅니다.
        </p>
      </section>

      <figure className="img_figure mt_l">
        <img src={IMG.SCSS + "/05_scss_03.png"} alt="SCSS 기본 내장 함수" />
        <figcaption>SCSS 기본 내장 함수</figcaption>
      </figure>
    </>
  );
}

export default BuiltinFunctionsPage;
