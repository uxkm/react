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
  title: "_partial.scss 개념",
  description:
    "SCSS 파셜(Partial) 파일의 개념을 상세히 알아봅니다. 파셜이란 무엇인지, 언더스코어(_)의 의미, 파셜 파일의 특징, @import와 @use의 차이, 그리고 실제 사용 예시를 설명합니다.",
  keyword: "scss partial, scss 파셜, scss _파일, scss 언더스코어, scss 모듈",
};

function PartialConceptPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          <b>파셜(Partial)</b>은 SCSS에서{" "}
          <b>다른 파일에서 불러와 사용하는 파일</b>입니다.
          <br />
          파일명 앞에 <code className="t_blue">_</code>(언더스코어)를 붙이면
          파셜이 되며, <b>컴파일되지 않고 다른 파일에서만 사용</b>됩니다.
        </p>
        <p className="mt_s">
          이 페이지에서는 파셜의 기본 개념, 언더스코어의 의미, 파셜 파일의 특징,
          @import와 @use의 차이, 그리고 실제 사용 예시를 상세히 알아봅니다.
        </p>
      </blockquote>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">파셜(Partial)이란?</h2>
        <p className="mt_l">
          파셜은 <b>{'"일부"'}</b>라는 의미로,{" "}
          <b>다른 파일에서 불러와 사용하는 SCSS 파일</b>입니다.
          <br />
          언더스코어(<code>_</code>)로 시작하는 파일은 컴파일되지 않고 다른
          파일에서만 사용되므로, <b>변수·믹스인·컴포넌트를 모듈 단위로 분리</b>
          해 재사용하고 관리하는 핵심 개념입니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">기본 개념</h3>
          <p className="mt_m">
            파셜은{" "}
            <b>
              언더스코어(<code className="t_blue">_</code>)로 시작
            </b>
            하는 파일로, <b>독립적으로 컴파일되지 않고</b> 다른 파일에서
            불러와서 사용합니다.
          </p>
          <CodeBlock title="파셜 파일 예시" language="css" className="mt_m">
            {`// _variables.scss (파셜 파일)
$color-primary: #0a58ca;
$color-secondary: #6c757d;

// 이 파일은 컴파일되지 않음
// 다른 파일에서 불러와서 사용`}
          </CodeBlock>
          <p className="mt_ms">
            파일을 불러올 때는 <b>언더스코어를 생략</b>합니다.
          </p>
          <CodeBlock
            title="메인 파일에서 사용"
            language="css"
            className="mt_ms"
          >
            {`// main.scss (메인 파일)
@use "variables";  // _variables.scss 불러오기

.button-group {
  .button {
    background: variables.$color-primary;
  }
}`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">언더스코어(_)의 의미</h3>
          <p className="mt_m">
            파일명 앞에 <code className="t_blue">_</code>(언더스코어)를 붙이면{" "}
            <b>SCSS 컴파일러가 이 파일을 컴파일하지 않습니다</b>.
          </p>
          <div className="table_summary value_150 mt_m">
            <ul className="lst_hd">
              <li className="cell value">파일명</li>
              <li className="cell content">컴파일 여부</li>
              <li className="cell content">용도</li>
            </ul>
            <ul className="lst_bd">
              <li>
                <p className="cell value">
                  <code className="t_darkgreen">_variables.scss</code>
                </p>
                <p className="cell content" data-title="컴파일 여부">
                  컴파일 안 됨
                </p>
                <p className="cell content" data-title="용도">
                  다른 파일에서 불러와 사용
                </p>
              </li>
              <li>
                <p className="cell value">
                  <code className="t_darkgreen">variables.scss</code>
                </p>
                <p className="cell content" data-title="컴파일 여부">
                  컴파일됨
                </p>
                <p className="cell content" data-title="용도">
                  독립적으로 컴파일되는 파일
                </p>
              </li>
              <li>
                <p className="cell value">
                  <code className="t_darkgreen">main.scss</code>
                </p>
                <p className="cell content" data-title="컴파일 여부">
                  컴파일됨
                </p>
                <p className="cell content" data-title="용도">
                  최종 CSS로 컴파일되는 메인 파일
                </p>
              </li>
            </ul>
          </div>
          <p className="mt_ms">
            언더스코어를 붙이면{" "}
            <b>{'"이 파일은 다른 곳에서 불러와 쓰는 파일이다"'}</b>라는
            의미입니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">파셜 파일의 특징</h3>
          <p className="mt_m">파셜 파일은 다음과 같은 특징을 가집니다:</p>
          <ul className="dot_lst mt_sm indent_small">
            <li>
              <b>컴파일되지 않음</b>: 언더스코어로 시작하는 파일은 CSS로
              컴파일되지 않음
            </li>
            <li>
              <b>재사용 목적</b>: 다른 파일에서 불러와서 사용하기 위한 파일
            </li>
            <li>
              <b>모듈화</b>: 관련 있는 코드를 하나의 파일로 묶어서 관리
            </li>
            <li>
              <b>네이밍 규칙</b>: 파일명 앞에 언더스코어(_)를 붙임
            </li>
          </ul>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">파셜 파일 사용 예시</h2>
        <p className="mt_l">
          파셜 파일을 <b>실제로 어떻게 사용하는지</b> 예시를 살펴봅니다.
          <br />
          <b>파셜 생성</b> → <b>메인 파일에서 불러오기</b> → <b>컴파일 과정</b>
          을 단계별로 따라가면,
          <b>실무에서 변수·믹스인·컴포넌트를 어떻게 모듈화하는지</b> 바로 적용할
          수 있습니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">기본 사용법</h3>
          <p className="mt_m">
            파셜 파일을 만들고 메인 파일에서 불러오는 기본 예시입니다.
          </p>

          <div className="mt_l indent">
            <h4 className="ml_mn">1단계: 파셜 파일 생성</h4>
            <CodeBlock title="_variables.scss" language="css" className="mt_ms">
              {`// _variables.scss
$color-primary: #0a58ca;
$color-secondary: #6c757d;
$spacing-md: 16px;`}
            </CodeBlock>
          </div>

          <div className="mt_l indent">
            <h4 className="ml_mn">2단계: 메인 파일에서 불러오기</h4>
            <CodeBlock title="main.scss" language="css" className="mt_ms">
              {`/* main.scss */
@use "variables";

.button {
  background: variables.$color-primary;
  padding: variables.$spacing-md;
}`}
            </CodeBlock>
          </div>

          <div className="mt_l indent">
            <h4 className="ml_mn">3단계: 컴파일 결과</h4>
            <CodeBlock title="main.css" language="css" className="mt_ms">
              {`.button {
  background: #0a58ca;
  padding: 16px;
}
/* _variables.scss는 컴파일되지 않음 */
/* main.scss만 컴파일됨 */`}
            </CodeBlock>
          </div>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">여러 파셜 파일 사용</h3>
          <p className="mt_m">
            메인 파일에서 <b>여러 파셜 파일을 불러와 사용</b>하는 예시입니다.
          </p>
          <CodeBlock
            title="여러 파셜 파일 사용"
            language="css"
            className="mt_m"
          >
            {`// main.scss
@use "variables";  // _variables.scss
@use "mixins";      // _mixins.scss
@use "buttons";     // _buttons.scss
@use "cards";       // _cards.scss

// 각 파셜 파일의 변수와 믹스인 사용
.button {
  @include mixins.button-base;
  background: variables.$color-primary;
}`}
          </CodeBlock>
          <p className="mt_ms">
            이렇게 하면 <b>각 파셜 파일의 내용이 메인 파일에 포함</b>되어 하나의
            CSS 파일로 컴파일됩니다.
          </p>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">파셜 파일 네이밍 규칙</h2>
        <p className="mt_l">
          파셜 파일의 <b>네이밍 규칙</b>을 알아봅니다.
          <br />
          언더스코어 필수, 불러올 때 생략 규칙 등을 정확히 이해해 두면,{" "}
          <b>팀 프로젝트에서 일관된 파일 구조를 유지</b>하고 실수로 인한 컴파일
          오류를 방지할 수 있습니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">언더스코어 필수</h3>
          <p className="mt_m">
            파셜 파일은{" "}
            <b>
              반드시 언더스코어(<code className="t_blue">_</code>)로 시작
            </b>
            해야 합니다.
          </p>
          <CodeBlock title="파셜 파일 네이밍" language="css" className="mt_m">
            {`/* ✅ 올바른 파셜 파일명 */
_variables.scss
_mixins.scss
_buttons.scss

/* ❌ 잘못된 파셜 파일명 (컴파일됨) */
variables.scss
mixins.scss
buttons.scss`}
          </CodeBlock>
          <p className="mt_ms">
            언더스코어가 없으면 <b>독립적으로 컴파일</b>되어 CSS 파일이
            생성됩니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">불러올 때 언더스코어 생략</h3>
          <p className="mt_m">
            파셜 파일을 불러올 때는 <b>언더스코어를 생략</b>합니다.
          </p>
          <CodeBlock title="불러오기 예시" language="css" className="mt_m">
            {`/* 파일명: _variables.scss */
/* 불러올 때: @use "variables"; (언더스코어 생략) */

@use "variables";  /* _variables.scss 불러오기 */
@use "mixins";     /* _mixins.scss 불러오기 */
@use "buttons";    /* _buttons.scss 불러오기 */`}
          </CodeBlock>
          <p className="mt_ms">
            SCSS 컴파일러가 <b>자동으로 언더스코어를 찾아서</b> 파일을
            불러옵니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">네이밍 가이드</h3>
          <p className="mt_m">
            파셜 파일의 <b>좋은 네이밍 예시</b>를 살펴봅니다.
          </p>
          <CodeBlock title="좋은 네이밍 예시" language="css" className="mt_m">
            {`// 기능별 네이밍
_variables.scss    // 변수
_mixins.scss       // 믹스인
_buttons.scss      // 버튼 컴포넌트
_cards.scss        // 카드 컴포넌트

// 카테고리별 네이밍
_base.scss         // 기본 스타일
_layout.scss       // 레이아웃
_components.scss   // 컴포넌트
_utilities.scss    // 유틸리티`}
          </CodeBlock>
          <p className="mt_ms">
            파일명만 봐도 <b>무엇을 담고 있는지 알 수 있도록</b> 명확하게
            네이밍하는 것이 좋습니다.
          </p>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">파셜 파일의 역할</h2>
        <p className="mt_l">
          파셜 파일이 프로젝트에서 <b>어떤 역할을 하는지</b> 살펴봅니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">코드 모듈화</h3>
          <p className="mt_m">
            파셜 파일은 <b>관련 있는 코드를 하나의 모듈로 묶어서</b> 관리합니다.
          </p>
          <CodeBlock title="모듈화 예시" language="css" className="mt_m">
            {`// _variables.scss (변수 모듈)
$color-primary: #0a58ca;
$color-secondary: #6c757d;

// _mixins.scss (믹스인 모듈)
@mixin button-base { }
@mixin card-base { }

// _buttons.scss (버튼 모듈)
.button { }
.button-primary { }

// 각 모듈이 명확한 역할을 가짐`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">재사용성 향상</h3>
          <p className="mt_m">
            파셜 파일은 <b>다른 프로젝트에서도 재사용</b>할 수 있습니다.
          </p>
          <CodeBlock title="재사용 예시" language="css" className="mt_m">
            {`// 프로젝트 A에서 만든 _variables.scss
// 프로젝트 B에서도 사용 가능

// 프로젝트 B의 main.scss
@use "variables";  // 프로젝트 A의 변수 재사용

.button {
  background: variables.$color-primary;
}`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">의존성 관리</h3>
          <p className="mt_m">
            파셜 파일을 사용하면 <b>파일 간의 의존성을 명확하게</b> 관리할 수
            있습니다.
          </p>
          <CodeBlock title="의존성 관리 예시" language="css" className="mt_m">
            {`// main.scss
@use "variables";  // 변수 먼저 불러오기
@use "mixins";     // 믹스인 (변수 사용 가능)
@use "buttons";    // 버튼 (변수, 믹스인 사용 가능)

// 의존성 순서가 명확함
// variables → mixins → buttons`}
          </CodeBlock>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn">
          <i className="t_green">@import</i> vs <i className="t_blue">@use</i>
        </h2>
        <p className="mt_l">
          파셜 파일을 불러오는 방법에는{" "}
          <code className="t_darkgreen">@import</code>와{" "}
          <code className="t_blue">@use</code>가 있습니다.
          <br />
          각각의 차이와 사용법을 알아봅니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            <i className="t_green">@import</i> (구식 방법)
          </h3>
          <p className="mt_m">
            <code className="t_darkgreen">@import</code>는 <b>구식 방법</b>이며,
            여러 문제가 있습니다.
          </p>
          <CodeBlock title="@import 사용" language="css" className="mt_m">
            {`// @import 사용 (구식)
@import "variables";
@import "mixins";

.button {
  background: $color-primary;  // 네임스페이스 없이 사용
}`}
          </CodeBlock>
          <p className="mt_ms">
            <code className="t_darkgreen">@import</code>의 문제점:
          </p>
          <ul className="dot_lst mt_sm indent_small">
            <li>
              <b>전역 스코프</b>: 모든 변수와 믹스인이 전역으로 노출됨
            </li>
            <li>
              <b>중복 로드</b>: 같은 파일을 여러 번 불러올 수 있음
            </li>
            <li>
              <b>순서 의존성</b>: 불러오는 순서가 중요함
            </li>
            <li>
              <b>네임스페이스 없음</b>: 변수 이름 충돌 가능
            </li>
          </ul>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            <i className="t_blue">@use</i> (권장 방법)
          </h3>
          <p className="mt_m">
            <code className="t_blue">@use</code>는 <b>현대적인 방법</b>이며,
            여러 장점이 있습니다.
          </p>
          <CodeBlock title="@use 사용" language="css" className="mt_m">
            {`// @use 사용 (권장)
@use "variables";
@use "mixins";

.button {
  background: variables.$color-primary;  // 네임스페이스 사용
}`}
          </CodeBlock>
          <p className="mt_ms">
            <code className="t_blue">@use</code>의 장점:
          </p>
          <ul className="dot_lst mt_ms indent_small">
            <li>
              <b>네임스페이스</b>: 변수 이름 충돌 방지
            </li>
            <li>
              <b>한 번만 로드</b>: 같은 파일을 여러 번 불러와도 한 번만 로드
            </li>
            <li>
              <b>명확한 의존성</b>: 파일 간 의존성이 명확함
            </li>
            <li>
              <b>순서 독립</b>: 불러오는 순서가 중요하지 않음
            </li>
          </ul>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            <i className="t_darkgreen">@import</i> vs{" "}
            <i className="t_blue">@use</i> 비교
          </h3>
          <p className="mt_m">
            두 방법의 차이를 <b>표로 비교</b>해봅니다.
          </p>
          <div className="table_summary value_150 mt_m">
            <ul className="lst_hd">
              <li className="cell value">구분</li>
              <li className="cell content">@import</li>
              <li className="cell content">@use</li>
            </ul>
            <ul className="lst_bd">
              <li>
                <p className="cell value t_darkgreen">네임스페이스</p>
                <p className="cell content" data-title="@import">
                  없음 (전역)
                </p>
                <p className="cell content" data-title="@use">
                  있음 (파일명)
                </p>
              </li>
              <li>
                <p className="cell value t_darkgreen">중복 로드</p>
                <p className="cell content" data-title="@import">
                  가능 (여러 번 로드)
                </p>
                <p className="cell content" data-title="@use">
                  불가능 (한 번만 로드)
                </p>
              </li>
              <li>
                <p className="cell value t_darkgreen">순서 의존성</p>
                <p className="cell content" data-title="@import">
                  중요함
                </p>
                <p className="cell content" data-title="@use">
                  중요하지 않음
                </p>
              </li>
              <li>
                <p className="cell value t_darkgreen">권장 여부</p>
                <p className="cell content" data-title="@import">
                  권장하지 않음
                </p>
                <p className="cell content" data-title="@use">
                  권장
                </p>
              </li>
            </ul>
          </div>
          <p className="mt_ms">
            현재는{" "}
            <b>
              <code className="t_blue">@use</code>를 사용하는 것을 권장
            </b>
            합니다.
          </p>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">파셜 파일 구조 예시</h2>
        <p className="mt_l">
          실제 프로젝트에서 <b>파셜 파일을 어떻게 구성하는지</b> 예시를
          살펴봅니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">기본 파셜 파일 구조</h3>
          <p className="mt_m">
            작은 프로젝트에서 사용하는 <b>기본 파셜 파일 구조</b>입니다.
          </p>
          <CodeBlock title="기본 파셜 구조" language="css" className="mt_m">
            {`// 프로젝트 구조
scss/
  ├─ _variables.scss    // 변수
  ├─ _mixins.scss       // 믹스인
  ├─ _buttons.scss      // 버튼
  ├─ _cards.scss        // 카드
  └─ main.scss          // 메인 파일`}
          </CodeBlock>
          <CodeBlock title="main.scss" language="css" className="mt_m">
            {`/* main.scss */
@use "variables";
@use "mixins";
@use "buttons";
@use "cards";`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">카테고리별 파셜 구조</h3>
          <p className="mt_m">
            카테고리별로 <b>파셜 파일을 구성</b>하는 예시입니다.
          </p>
          <CodeBlock title="카테고리별 구조" language="css" className="mt_m">
            {`// 프로젝트 구조
scss/
  ├─ base/
  │   ├─ _reset.scss
  │   └─ _typography.scss
  ├─ components/
  │   ├─ _buttons.scss
  │   ├─ _cards.scss
  │   └─ _forms.scss
  ├─ layout/
  │   ├─ _header.scss
  │   ├─ _footer.scss
  │   └─ _grid.scss
  ├─ _variables.scss
  ├─ _mixins.scss
  └─ main.scss`}
          </CodeBlock>
          <CodeBlock title="main.scss" language="css" className="mt_m">
            {`/* main.scss */
@use "variables";
@use "mixins";
@use "base/reset";
@use "base/typography";
@use "components/buttons";
@use "components/cards";
@use "layout/header";`}
          </CodeBlock>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">정리</h2>
        <p className="mt_l">
          <b className="t_blue">_partial.scss</b> 개념에 대해 알아본 내용을
          정리합니다.
        </p>
        <ul className="dot_lst mt_m indent_small">
          <li>
            <b>파셜의 개념</b>: 다른 파일에서 불러와 사용하는 파일,
            언더스코어(_)로 시작
          </li>
          <li>
            <b>언더스코어의 의미</b>: 컴파일되지 않고 다른 파일에서만 사용
          </li>
          <li>
            <b>파셜의 특징</b>: 컴파일 안 됨, 재사용 목적, 모듈화, 네이밍 규칙
          </li>
          <li>
            <b>네이밍 규칙</b>: 언더스코어로 시작, 불러올 때는 언더스코어 생략
          </li>
          <li>
            <b>파셜의 역할</b>: 코드 모듈화, 재사용성 향상, 의존성 관리
          </li>
          <li>
            <b>@import vs @use</b>: <code className="t_blue">@use</code>를 권장
            (네임스페이스, 중복 방지, 명확한 의존성)
          </li>
          <li>
            <b>파일 구조</b>: 기본 구조, 카테고리별 구조 예시
          </li>
        </ul>
        <p className="mt_m">
          다음 페이지에서는 <b>@use, @forward 기본 개념과 차이</b>를 자세히
          알아봅니다.
        </p>
      </section>

      <figure className="img_figure mt_l">
        <img src={IMG.SCSS + "/09_scss_02.png"} alt="파셜(Partial) 개념" />
        <figcaption>파셜(Partial) 개념</figcaption>
      </figure>
    </>
  );
}

export default PartialConceptPage;
