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
  title: "@use, @forward 기본 이해",
  description:
    "SCSS @use와 @forward의 기본 개념을 상세히 알아봅니다. @use의 기본 문법, 네임스페이스, as 키워드, @forward의 개념과 사용법, @use와 @forward의 차이, 그리고 실제 사용 예시를 설명합니다.",
  keyword:
    "scss @use, scss @forward, scss use, scss forward, scss 모듈 시스템, scss 네임스페이스",
};

function UseForwardPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          <b>@use</b>와 <b>@forward</b>는 SCSS의 모듈 시스템에서{" "}
          <b>파일을 불러오고 전달하는 기능</b>입니다.
          <br />
          <code className="t_blue">@use</code>는 파일을 불러와서 사용하고,{" "}
          <code className="t_blue">@forward</code>는 파일을 다른 곳에서 사용할
          수 있게 전달합니다.
        </p>
        <p className="mt_s">
          이 페이지에서는 <code className="t_blue">@use</code>의 기본 문법,
          네임스페이스, <code className="t_blue">as</code> 키워드,
          <code className="t_blue">@forward</code>의 개념과 사용법,{" "}
          <code className="t_blue">@use</code>와{" "}
          <code className="t_blue">@forward</code>의 차이, 그리고 실제 사용
          예시를 상세히 알아봅니다.
        </p>
      </blockquote>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">@use 기본 이해</h2>
        <p className="mt_l">
          <code className="t_blue">@use</code>는{" "}
          <b>파셜 파일을 불러와서 사용</b>하는 기능입니다.
          <br />
          네임스페이스, <code>as</code> 키워드, 네임스페이스 제거 등 기본 문법을
          이해해 두면,
          <b>
            <code>@import</code> 대신 <code>@use</code>를 사용하는 이유와 모듈
            시스템의 장점
          </b>
          을 실무에서 바로 활용할 수 있습니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">@use의 기본 개념</h3>
          <p className="mt_m">
            <code className="t_blue">@use</code>는{" "}
            <b>&quot;이 파일을 사용하겠다&quot;</b>는 의미입니다.
            <br />
            다른 파일에서 정의한 변수, 믹스인, 함수를 가져와서 사용할 수
            있습니다.
          </p>
          <CodeBlock title="@_variables.scss" language="css" className="mt_m">
            {`// _variables.scss
$color-primary: #0a58ca;
$color-secondary: #6c757d;`}
          </CodeBlock>
          <CodeBlock title="@use 기본 예시" language="css" className="mt_m">
            {`/* main.scss */
@use "variables";

.button {
  background: variables.$color-primary;
}`}
          </CodeBlock>
          <p className="mt_ms">
            <code className="t_blue">@use &quot;variables&quot;</code>는{" "}
            <code className="t_blue">_variables.scss</code> 파일을 불러와서
            사용한다는 의미입니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">기본 문법</h3>
          <p className="mt_m">
            <code className="t_blue">@use</code>의 기본 문법은 다음과 같습니다.
          </p>
          <CodeBlock title="@use 기본 문법" language="css" className="mt_m">
            {`@use "파일명";
// 언더스코어와 확장자는 생략 가능`}
          </CodeBlock>
          <CodeBlock title="실제 예시" language="css" className="mt_m">
            {`/* 파일명: _variables.scss */
/* 불러오기: @use "variables"; */

@use "variables";  /* _variables.scss 불러오기 */
@use "mixins";     /* _mixins.scss 불러오기 */
@use "buttons";    /* _buttons.scss 불러오기 */`}
          </CodeBlock>
          <p className="mt_ms">
            언더스코어(<code className="t_blue">_</code>)와 확장자(
            <code className="t_blue">.scss</code>)는 <b>생략할 수 있습니다</b>.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">네임스페이스 사용</h3>
          <p className="mt_m">
            <code className="t_blue">@use</code>로 불러온 변수나 믹스인은{" "}
            <b>네임스페이스(파일명)를 붙여서 사용</b>해야 합니다.
          </p>
          <CodeBlock title="_variables.scss" language="css" className="mt_m">
            {`// _variables.scss
$color-primary: #0a58ca;
$spacing-md: 16px;`}
          </CodeBlock>
          <CodeBlock
            title="네임스페이스 사용 예시"
            language="css"
            className="mt_m"
          >
            {`// main.scss
@use "variables";

.button {
  // 네임스페이스 사용
  background: variables.$color-primary;
  padding: variables.$spacing-md;
}`}
          </CodeBlock>
          <p className="mt_ms">
            네임스페이스를 사용하면 <b>어떤 파일에서 온 변수인지 명확</b>하고,{" "}
            <b>변수 이름 충돌을 방지</b>할 수 있습니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">as 키워드로 네임스페이스 변경</h3>
          <p className="mt_m">
            <code className="t_blue">as</code> 키워드를 사용하여{" "}
            <b>네임스페이스를 변경</b>할 수 있습니다.
          </p>
          <CodeBlock title="_variables.scss" language="css" className="mt_m">
            {`// _variables.scss
$color-primary: #0a58ca;`}
          </CodeBlock>
          <CodeBlock
            title="as 키워드 사용 예시"
            language="css"
            className="mt_m"
          >
            {`// main.scss
@use "variables" as vars;  // 네임스페이스를 vars로 변경

.button {
  background: vars.$color-primary;  // vars 사용
}`}
          </CodeBlock>
          <p className="mt_ms">
            긴 파일명을 <b>짧은 네임스페이스로 변경</b>하여 사용할 수 있습니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">네임스페이스 제거</h3>
          <p className="mt_m">
            <code className="t_blue">as *</code>를(을) 사용하여{" "}
            <b>네임스페이스를 제거</b>할 수 있습니다.
          </p>
          <CodeBlock title="_variables.scss" language="css" className="mt_m">
            {`// _variables.scss
$color-primary: #0a58ca;`}
          </CodeBlock>
          <CodeBlock
            title="네임스페이스 제거 예시"
            language="css"
            className="mt_m"
          >
            {`// main.scss
@use "variables" as *;  // 네임스페이스 제거

.button {
  background: $color-primary;  // 네임스페이스 없이 사용
}`}
          </CodeBlock>
          <p className="mt_ms">
            네임스페이스를 제거하면 <b>@import처럼 사용</b>할 수 있지만,{" "}
            <b>변수 이름 충돌 위험이 있으므로 주의</b>가 필요합니다.
          </p>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">@forward 기본 이해</h2>
        <p className="mt_l">
          <code className="t_blue">@forward</code>는{" "}
          <b>파일을 다른 곳에서 사용할 수 있게 전달</b>하는 기능입니다.
          <br />
          여러 파셜을 하나의 모듈로 묶어서 전달할 때 사용하므로,{" "}
          <b>변수·믹스인을 카테고리별로 그룹화</b>하거나 라이브러리처럼 제공할
          때 특히 유용합니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">@forward의 기본 개념</h3>
          <p className="mt_m">
            <code className="t_blue">@forward</code>는{" "}
            <b>
              &quot;이 파일의 내용을 다른 곳에서도 사용할 수 있게 전달한다&quot;
            </b>
            는 의미입니다.
            <br />
            중간 파일에서 여러 파셜을 모아서 하나의 모듈로 만들 때 사용합니다.
          </p>
          <CodeBlock title="_colors.scss" language="css" className="mt_m">
            {`// _colors.scss
$color-primary: #0a58ca;
$color-secondary: #6c757d;`}
          </CodeBlock>
          <CodeBlock title="_spacing.scss" language="css" className="mt_m">
            {`// _spacing.scss
$spacing-md: 16px;
$spacing-lg: 24px;`}
          </CodeBlock>
          <CodeBlock title="@forward 기본 예시" language="css" className="mt_m">
            {`/* _variables.scss (위 두개의 파셜 파일을 묶어 전달하는 역할) */
@forward "colors";
@forward "spacing";`}
          </CodeBlock>
          <CodeBlock title="main.scss" language="css" className="mt_m">
            {`// main.scss
@use "variables";

.button {
  background: variables.$color-primary;  // colors에서
  padding: variables.$spacing-md;        // spacing에서
}`}
          </CodeBlock>
          <p className="mt_ms">
            <code className="t_blue">_variables.scss</code>가{" "}
            <code className="t_blue">_colors.scss</code>와{" "}
            <code className="t_blue">_spacing.scss</code>를 <b>전달</b>하여,{" "}
            <code className="t_blue">main.scss</code>에서는{" "}
            <code className="t_blue">variables</code> 하나만 불러와도 두 파일의
            내용을 모두 사용할 수 있습니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">@forward의 기본 문법</h3>
          <p className="mt_m">
            <code className="t_blue">@forward</code>의 기본 문법은{" "}
            <code className="t_blue">@use</code>와 동일합니다.
          </p>
          <CodeBlock title="@forward 기본 문법" language="css" className="mt_m">
            {`@forward "파일명";
// 언더스코어와 확장자는 생략 가능`}
          </CodeBlock>
          <CodeBlock title="실제 예시" language="css" className="mt_ms">
            {`// _variables.scss
@forward "colors";
@forward "spacing";
@forward "typography";

// 여러 파일을 하나로 묶어서 전달`}
          </CodeBlock>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">@use와 @forward의 차이</h2>
        <p className="mt_l">
          <code className="t_blue">@use</code>와{" "}
          <code className="t_blue">@forward</code>의 <b>차이점</b>을 명확히
          이해하는 것이 중요합니다.
          <br />
          <code className="t_blue">@use</code>는 현재 파일에서 직접 사용하고,{" "}
          <code className="t_blue">@forward</code>는 다른 파일에서 사용할 수
          있게 전달하는데, 이 차이를 이해하면{" "}
          <b>모듈 구조를 설계할 때 어떤 것을 선택할지</b> 명확하게 판단할 수
          있습니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">@use: 사용</h3>
          <p className="mt_m">
            <code className="t_blue">@use</code>는{" "}
            <b>파일을 불러와서 현재 파일에서 사용</b>합니다.
          </p>
          <CodeBlock title="_variables.scss" language="css" className="mt_m">
            {`// _colors.scss
$color-primary: #0a58ca;`}
          </CodeBlock>
          <CodeBlock title="@use 사용 예시" language="css" className="mt_m">
            {`// _buttons.scss
@use "color";  // colors 불러와서 사용

.button {
  background: color.$color-primary;  // 현재 파일에서 사용
}`}
          </CodeBlock>
          <p className="mt_ms">
            <code className="t_blue">@use</code>는 <b>현재 파일에서만 사용</b>할
            수 있게 합니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">@forward: 전달</h3>
          <p className="mt_m">
            <code className="t_blue">@forward</code>는{" "}
            <b>파일을 다른 곳에서 사용할 수 있게 전달</b>합니다.
          </p>
          <CodeBlock title="_colors.scss" language="css" className="mt_m">
            {`// _colors.scss
$color-primary: #0a58ca;`}
          </CodeBlock>
          <CodeBlock title="@forward 사용 예시" language="css" className="mt_m">
            {`// _variables.scss
@forward "colors";  // colors를 다른 곳에서 사용할 수 있게 전달`}
          </CodeBlock>
          <CodeBlock title="main.scss" language="css" className="mt_m">
            {`// main.scss
@use "variables";  // variables를 사용

.button {
  background: variables.$color-primary;  // colors의 변수 사용 가능
}`}
          </CodeBlock>
          <p className="mt_ms">
            <code className="t_blue">@forward</code>는{" "}
            <b>다른 파일에서도 사용할 수 있게 전달</b>합니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">차이점 비교</h3>
          <p className="mt_m">
            두 기능의 차이를 <b>표로 비교</b>해봅니다.
          </p>
          <div className="table_summary value_150 mt_m">
            <ul className="lst_hd">
              <li className="cell value">구분</li>
              <li className="cell content">@use</li>
              <li className="cell content">@forward</li>
            </ul>
            <ul className="lst_bd">
              <li>
                <p className="cell value t_darkgreen">의미</p>
                <p className="cell content" data-title="@use">
                  사용
                </p>
                <p className="cell content" data-title="@forward">
                  전달
                </p>
              </li>
              <li>
                <p className="cell value t_darkgreen">사용 범위</p>
                <p className="cell content" data-title="@use">
                  현재 파일에서만 사용
                </p>
                <p className="cell content" data-title="@forward">
                  다른 파일에서도 사용 가능
                </p>
              </li>
              <li>
                <p className="cell value t_darkgreen">용도</p>
                <p className="cell content" data-title="@use">
                  파일을 불러와서 직접 사용
                </p>
                <p className="cell content" data-title="@forward">
                  여러 파일을 묶어서 전달
                </p>
              </li>
              <li>
                <p className="cell value t_darkgreen">사용 예시</p>
                <p className="cell content" data-title="@use">
                  <i className="filename">main.scss</i>에서 variables 사용
                </p>
                <p className="cell content" data-title="@forward">
                  <i className="filename">_variables.scss</i>에서 colors,
                  spacing 전달
                </p>
              </li>
            </ul>
          </div>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">@use와 @forward 함께 사용</h2>
        <p className="mt_l">
          <code className="t_blue">@use</code>와{" "}
          <code className="t_blue">@forward</code>를{" "}
          <b>같은 파일에서 함께 사용</b>할 수 있습니다.
          <br />
          <code className="t_blue">@forward</code>로 다른 파일에 전달하면서,{" "}
          <code className="t_blue">@use</code>로 현재 파일에서도 사용하는
          예시입니다.
        </p>

        <ol className="ol_lst info_lst gap-column-important-l mt_xl">
          <li className="weight-700-before font-18-before t_black_before">
            <strong className="font-18">색상 변수 파일 생성</strong>
            <CodeBlock title="_colors.scss" language="css" className="mt_ms">
              {`// _colors.scss
$color-primary: #0a58ca;
$color-secondary: #6c757d;`}
            </CodeBlock>
          </li>

          <li className="weight-600-before font-18-before">
            <strong className="font-18">
              변수 파일에서 @forward와 @use 함께 사용
            </strong>
            <p className="mt_s">
              <code className="t_blue">@forward</code>로 colors를 전달하고,{" "}
              <code className="t_blue">@use</code>로 현재 파일에서도 사용합니다.
            </p>
            <CodeBlock title="_variables.scss" language="css" className="mt_ms">
              {`// _variables.scss
@forward "colors";      // colors를 다른 파일에서 사용할 수 있게 전달
@use "colors" as *;     // colors를 현재 파일에서도 사용 (as *로 네임스페이스 생략)

// 현재 파일에서 colors의 변수 사용
$custom-color: $color-primary;`}
            </CodeBlock>
          </li>

          <li className="weight-600-before font-18-before">
            <strong className="font-18">
              메인 파일에서 variables를 통해 colors 사용
            </strong>
            <p className="mt_s">
              <code className="t_blue">variables</code>를 통해{" "}
              <code className="t_blue">colors</code>의 변수를 사용할 수
              있습니다.
            </p>
            <CodeBlock title="main.scss" language="css" className="mt_ms">
              {`// main.scss
@use "variables";

.button {
  background: variables.$color-primary;  // variables를 통해 colors의 변수 사용
}`}
            </CodeBlock>
          </li>
        </ol>

        <p className="mt_l">
          이렇게 하면 <code className="t_blue">_variables.scss</code>에서
          colors의 변수를 사용하면서, 동시에 다른 파일에서도{" "}
          <code className="t_blue">variables</code>를 통해 colors의 변수에
          접근할 수 있습니다.
        </p>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">실제 활용 예시</h2>
        <p className="mt_l">
          <code className="t_blue">@use</code>와{" "}
          <code className="t_blue">@forward</code>를{" "}
          <b>실제 프로젝트에서 활용</b>하는 예시를 살펴봅니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">변수 모듈 구성</h3>
          <p className="mt_m">
            여러 변수 파일을 <b>하나의 모듈로 묶어서</b> 사용하는 예시입니다.
          </p>
          <CodeBlock title="_colors.scss" language="css" className="mt_m">
            {`// _colors.scss
$color-primary: #0a58ca;
$color-secondary: #6c757d;`}
          </CodeBlock>
          <CodeBlock title="_spacing.scss" language="css" className="mt_m">
            {`// _spacing.scss
$spacing-md: 16px;
$spacing-lg: 24px;`}
          </CodeBlock>
          <CodeBlock title="_typography.scss" language="css" className="mt_m">
            {`// _typography.scss
$font-size-base: 16px;
$font-weight-bold: 700;`}
          </CodeBlock>
          <CodeBlock
            title="_variables.scss (중간 파일)"
            language="css"
            className="mt_m"
          >
            {`/* _variables.scss (중간 파일) */
@forward "colors";
@forward "spacing";
@forward "typography";`}
          </CodeBlock>
          <CodeBlock title="main.scss" language="css" className="mt_m">
            {`/* main.scss */
@use "variables";

.button {
  background: variables.$color-primary;
  padding: variables.$spacing-md;
  font-size: variables.$font-size-base;
}`}
          </CodeBlock>
          <p className="mt_ms">
            이렇게 하면 <b>여러 변수 파일을 하나의 모듈로 묶어서</b> 관리할 수
            있습니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">컴포넌트 모듈 구성</h3>
          <p className="mt_m">
            여러 컴포넌트 파일을 <b>하나의 모듈로 묶어서</b> 사용하는
            예시입니다.
          </p>
          <CodeBlock title="_buttons.scss" language="css" className="mt_m">
            {`/* _buttons.scss */
.button { }`}
          </CodeBlock>
          <CodeBlock title="_cards.scss" language="css" className="mt_m">
            {`/* _cards.scss */
.card { }`}
          </CodeBlock>
          <CodeBlock title="_forms.scss" language="css" className="mt_m">
            {`/* _forms.scss */
.input { }`}
          </CodeBlock>
          <CodeBlock
            title="_components.scss (중간 파일)"
            language="css"
            className="mt_m"
          >
            {`/* _components.scss (중간 파일) */
@forward "buttons";
@forward "cards";
@forward "forms";`}
          </CodeBlock>
          <CodeBlock title="main.scss" language="css" className="mt_m">
            {`// main.scss
@use "variables";
@use "components";

// components 모듈의 모든 컴포넌트 사용 가능`}
          </CodeBlock>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">@forward의 고급 기능</h2>

        <article className="mt_xl indent">
          <h3 className="ml_mn">show와 hide</h3>
          <p className="mt_m">
            <code className="t_blue">show</code>와{" "}
            <code className="t_blue">hide</code>를 사용하여{" "}
            <b>특정 항목만 전달하거나 제외</b>할 수 있습니다.
            <br />
            <code className="t_blue">show</code>는 <b>지정한 항목만 전달</b>
            하고, <code className="t_blue">hide</code>는{" "}
            <b>지정한 항목을 제외</b>하여 나머지를 전달합니다.
          </p>
          <CodeBlock title="_variables.scss" language="css" className="mt_m">
            {`// _variables.scss
$color-primary: #0a58ca;
$color-secondary: #6c757d;
$internal-var: #000000;  // 내부용 변수`}
          </CodeBlock>
          <CodeBlock title="show와 hide 예시" language="css" className="mt_m">
            {`// show
@forward "variables" show $color-primary, $color-secondary;
// $color-primary와 $color-secondary만 전달
// $internal-var는 전달되지 않음

// hide
@forward "variables" hide $internal-var;
// $internal-var를 제외하고 모두 전달`}
          </CodeBlock>
          <p className="mt_ms">
            이렇게 하면 <b>내부용 변수나 믹스인을 숨기고</b>,{" "}
            <b>공개할 항목만 전달</b>할 수 있습니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">as 키워드로 네임스페이스 변경</h3>
          <p className="mt_m">
            <code className="t_blue">@forward</code>에서도{" "}
            <code className="t_blue">as</code> 키워드를 사용할 수 있습니다.
          </p>
          <CodeBlock title="_colors.scss" language="css" className="mt_m">
            {`// _colors.scss
$color-primary: #0a58ca;`}
          </CodeBlock>
          <CodeBlock
            title="@forward에서 as 사용"
            language="css"
            className="mt_m"
          >
            {`// _variables.scss
@forward "colors" as color-*;
// colors의 모든 항목을 color- 접두사로 전달`}
          </CodeBlock>
          <CodeBlock title="color- 접두사 추가" language="css" className="mt_m">
            {`// main.scss
@use "variables";

.button {
  background: variables.$color-primary-color;  // color- 접두사 추가
}`}
          </CodeBlock>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn">
          <i className="t_blue">@use</i>와 <i className="t_blue">@forward</i>{" "}
          사용 가이드
        </h2>
        <p className="mt_l">
          <code className="t_blue">@use</code>와{" "}
          <code className="t_blue">@forward</code>를 <b>언제 어떻게 사용할지</b>{" "}
          가이드라인을 제시합니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">@use를 사용하는 경우</h3>
          <p className="mt_m">
            다음과 같은 경우에는 <b>@use를 사용</b>합니다:
          </p>
          <ul className="dot_lst mt_sm indent_small">
            <li>
              <b>직접 사용</b>: 파일을 불러와서 현재 파일에서 직접 사용할 때
            </li>
            <li>
              <b>메인 파일</b>: main.scss 같은 메인 파일에서 파셜을 불러올 때
            </li>
            <li>
              <b>컴포넌트 파일</b>: 컴포넌트 파일에서 변수나 믹스인을 사용할 때
            </li>
          </ul>
          <CodeBlock title="@use 사용 예시" language="css" className="mt_m">
            {`// main.scss
@use "variables";
@use "mixins";
@use "buttons";

// 직접 사용`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">@forward를 사용하는 경우</h3>
          <p className="mt_m">
            다음과 같은 경우에는 <b>@forward를 사용</b>합니다:
          </p>
          <ul className="dot_lst mt_sm indent_small">
            <li>
              <b>모듈 구성</b>: 여러 파일을 하나의 모듈로 묶을 때
            </li>
            <li>
              <b>중간 파일</b>: 중간 파일에서 여러 파셜을 전달할 때
            </li>
            <li>
              <b>라이브러리 구성</b>: 라이브러리처럼 여러 파일을 묶어서 제공할
              때
            </li>
          </ul>
          <CodeBlock title="@forward 사용 예시" language="css" className="mt_m">
            {`// _variables.scss (중간 파일)
@forward "colors";
@forward "spacing";
@forward "typography";

// 여러 파일을 하나로 묶어서 전달`}
          </CodeBlock>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">정리</h2>
        <p className="mt_l">
          <code className="t_blue">@use</code>,{" "}
          <code className="t_blue">@forward</code> 기본 이해에 대해 알아본
          내용을 정리합니다.
        </p>
        <ul className="dot_lst mt_m indent_small">
          <li>
            <b>@use 기본 개념</b>: 파일을 불러와서 사용하는 기능
          </li>
          <li>
            <b>네임스페이스</b>: 파일명을 네임스페이스로 사용하여 변수 이름 충돌
            방지
          </li>
          <li>
            <b>as 키워드</b>: 네임스페이스 변경 또는 제거 (
            <code className="t_blue">as *</code>,{" "}
            <code className="t_blue">as 별명</code>)
          </li>
          <li>
            <b>@forward 기본 개념</b>: 파일을 다른 곳에서 사용할 수 있게
            전달하는 기능
          </li>
          <li>
            <b>@use vs @forward</b>: <code className="t_blue">@use</code>는
            사용, <code className="t_blue">@forward</code>는 전달
          </li>
          <li>
            <b>함께 사용</b>: 같은 파일에서 <code className="t_blue">@use</code>
            와 <code className="t_blue">@forward</code>를 함께 사용 가능
          </li>
          <li>
            <b>고급 기능</b>: <code className="t_blue">show</code>,{" "}
            <code className="t_blue">hide</code>,{" "}
            <code className="t_blue">as</code> 키워드로 세밀한 제어 가능
          </li>
          <li>
            <b>사용 가이드</b>: 직접 사용은 <code className="t_blue">@use</code>
            , 모듈 구성은 @forward
          </li>
        </ul>
        <p className="mt_m">
          다음 페이지에서는 <b>기본적인 SCSS 폴더 구조 예시</b>를 자세히
          알아봅니다.
        </p>
      </section>

      <figure className="img_figure mt_l">
        <img src={IMG.SCSS + "/09_scss_03.png"} alt="@forward 기본 이해" />
        <figcaption>@forward 기본 이해</figcaption>
      </figure>
    </>
  );
}

export default UseForwardPage;
