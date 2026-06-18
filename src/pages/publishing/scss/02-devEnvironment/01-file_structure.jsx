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
  title: "SCSS 파일 구조와 확장자 이해",
  description:
    "SCSS 파일의 확장자(.scss, .sass), 파일 구조, 파셜(Partials) 파일의 역할과 네이밍 규칙, 그리고 프로젝트에서 SCSS 파일을 어떻게 구성하는지 상세히 알아봅니다.",
  keyword: "scss 파일 구조, scss 확장자, scss 파일명, 파셜 파일, partials, scss 프로젝트 구조",
};

function FileStructurePage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          SCSS 파일은 <code className="t_blue">.scss</code> 확장자를 사용하며,
          프로젝트 규모가 커질수록 <b>여러 파일로 나누어 관리</b>하는 것이
          중요합니다.
          <br />
          파셜(Partials) 파일은 <code className="t_blue">_</code>로 시작하는
          네이밍 규칙을 따르며,{" "}
          <b>직접 컴파일되지 않고 다른 파일에서 불러와 사용</b>됩니다.
        </p>
        <p className="mt_s">
          이 페이지에서는 SCSS 파일의 확장자 종류, 파일 구조와 네이밍 규칙, 파셜
          파일의 역할, 그리고 실제 프로젝트에서 어떻게 파일을 구성하는지
          단계별로 살펴봅니다.
        </p>
      </blockquote>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">SCSS 파일 확장자</h2>
        <p className="mt_l">
          SCSS 파일은 <b>확장자로 파일 종류를 구분</b>합니다. 같은 Sass
          언어이지만 문법 형식이 다르기 때문에 확장자도 다릅니다.
          <br />
          어떤 확장자를 쓰느냐에 따라{" "}
          <b>코드를 읽는 방식과 팀에서 합의해야 할 규칙</b>이 달라지기 때문에,
          기본 개념을 먼저 이해해 두면 이후 설정과 협업이 훨씬 수월해집니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">.scss 확장자</h3>
          <p className="mt_m">
            <code className="t_blue">.scss</code>는{" "}
            <b>가장 널리 사용되는 SCSS 파일 확장자</b>입니다.
            <br />
            일반 CSS와 거의 동일한 문법을 사용하므로, 기존 CSS 파일을{" "}
            <code className="t_blue">.scss</code>로 바꾸면 바로 SCSS 파일로
            사용할 수 있습니다.
          </p>
          <CodeBlock title=".scss 파일 예시" language="css" className="mt_m">
            {`// style.scss
$primary-color: #0a58ca;
$font-size-base: 16px;

body {
  font-size: $font-size-base;
  color: $primary-color;
}

.button {
  background: $primary-color;
  padding: 8px 16px;
}`}
          </CodeBlock>
          <p className="mt_ms">
            위 예시처럼 <code className="t_blue">.scss</code> 파일은{" "}
            <b>중괄호와 세미콜론을 사용</b>하며, CSS와 동일한 구조로 작성합니다.
            <br />
            변수, 중첩, 믹스인 등 SCSS 기능을 추가해도 기본 구조는 CSS와 같아서{" "}
            <b>기존 CSS 지식을 그대로 활용</b>할 수 있습니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">.sass 확장자</h3>
          <p className="mt_m">
            <code className="t_blue">.sass</code>는{" "}
            <b>인덴트(들여쓰기) 문법을 사용하는 Sass 파일</b>입니다.
            <br />
            중괄호와 세미콜론 없이 들여쓰기만으로 블록을 구분하므로, 문법이 다소
            생소할 수 있습니다.
          </p>
          <CodeBlock title=".sass 파일 예시" language="css" className="mt_m">
            {`// style.sass
$primary-color: #0a58ca
$font-size-base: 16px

body
  font-size: $font-size-base
  color: $primary-color

.button
  background: $primary-color
  padding: 8px 16px`}
          </CodeBlock>
          <p className="mt_ms">
            <code className="t_blue">.sass</code> 파일은{" "}
            <b>들여쓰기에 매우 민감</b>하며, 탭과 스페이스가 섞이면 에러가
            발생할 수 있습니다.
            <br />
            실무에서는{" "}
            <b>
              CSS와 가장 유사한 <code className="t_blue">.scss</code> 형식을
              주로 사용
            </b>
            하므로, 본 커리큘럼에서도 <code className="t_blue">.scss</code>를
            기준으로 설명합니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">확장자 선택 가이드</h3>
          <p className="mt_m">
            프로젝트에서 어떤 확장자를 사용할지 결정할 때는 다음을 고려하세요.
          </p>
          <div className="table_summary value_150 mt_m">
            <ul className="lst_hd">
              <li className="cell value">확장자</li>
              <li className="cell content">특징</li>
              <li className="cell content">추천 상황</li>
            </ul>
            <ul className="lst_bd">
              <li>
                <p className="cell value">
                  <code className="t_darkgreen">.scss</code>
                </p>
                <p className="cell content" data-title="특징">
                  CSS와 동일한 문법, 중괄호·세미콜론 사용, 기존 CSS 코드 재사용
                  용이
                </p>
                <p className="cell content" data-title="추천 상황">
                  대부분의 프로젝트, CSS에서 전환하는 경우, 팀 협업 시
                </p>
              </li>
              <li>
                <p className="cell value">
                  <code className="t_darkgreen">.sass</code>
                </p>
                <p className="cell content" data-title="특징">
                  인덴트 문법, 중괄호·세미콜론 없음, 코드가 더 간결함
                </p>
                <p className="cell content" data-title="추천 상황">
                  Python/Ruby 개발자에게 친숙, 코드 간결성을 중시하는 경우
                </p>
              </li>
            </ul>
          </div>
          <p className="mt_ms">
            <b>
              초보자이거나 팀 프로젝트라면 <code className="t_blue">.scss</code>
              를 선택하는 것을 권장
            </b>
            합니다.
            <br />
            CSS 지식이 있다면 바로 시작할 수 있고, 팀원들도 쉽게 이해할 수 있어
            협업이 원활합니다.
          </p>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">SCSS 파일 구조와 네이밍</h2>
        <p className="mt_l">
          프로젝트 규모가 커질수록 <b>SCSS 파일을 체계적으로 구성</b>하는 것이
          중요합니다.
          <br />
          파일 구조와 네이밍 규칙을 일관되게 유지하면,{" "}
          <b>코드를 찾고 수정하는 시간을 크게 줄일 수 있습니다</b>.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">일반 SCSS 파일</h3>
          <p className="mt_m">
            일반 SCSS 파일은 <b>직접 컴파일되어 CSS 파일로 변환</b>됩니다.
            <br />
            파일명은 <b>소문자와 하이픈(-)</b>을 사용하는 것이 일반적이며, 의미
            있는 이름을 붙입니다.
          </p>
          <CodeBlock
            title="일반 SCSS 파일 예시"
            language="css"
            className="mt_m"
          >
            {`// main.scss (메인 스타일 파일)
// style.scss (스타일 파일)
// components.scss (컴포넌트 모음)
// layout.scss (레이아웃 스타일)`}
          </CodeBlock>
          <p className="mt_ms">
            일반적으로 <b>프로젝트의 진입점이 되는 메인 파일</b>은{" "}
            <code className="t_blue">main.scss</code> 또는{" "}
            <code className="t_blue">style.scss</code>로 명명합니다.
            <br />이 파일에서 다른 파셜 파일들을 불러와 최종 CSS로 컴파일합니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">파셜(Partials) 파일</h3>
          <p className="mt_m">
            파셜 파일은{" "}
            <b>
              언더스코어(<code className="t_blue">_</code>)로 시작하는 파일명
            </b>
            을 사용하며, <b>직접 컴파일되지 않습니다</b>.
            <br />
            다른 SCSS 파일에서 <code className="t_blue">@use</code> 또는{" "}
            <code className="t_blue">@import</code>로 불러와 사용합니다.
          </p>
          <CodeBlock title="파셜 파일 예시" language="css" className="mt_m">
            {`// _variables.scss (변수 정의)
// _mixins.scss (믹스인 정의)
// _buttons.scss (버튼 컴포넌트)
// _cards.scss (카드 컴포넌트)
// _layout.scss (레이아웃 스타일)`}
          </CodeBlock>
          <p className="mt_ms">
            파셜 파일의 <code className="t_blue">_</code> 접두사는{" "}
            <b>&quot;이 파일은 단독으로 컴파일하지 않는다&quot;</b>는
            의미입니다.
            <br />
            불러올 때는 <code className="t_blue">_</code>와 확장자를 생략하고
            파일명만 사용합니다.
          </p>
          <CodeBlock
            title="파셜 파일 불러오기 예시"
            language="css"
            className="mt_ms"
          >
            {`/* main.scss */
@use "variables";  /* _variables.scss 불러오기 */
@use "mixins";     /* _mixins.scss 불러오기 */
@use "buttons";    /* _buttons.scss 불러오기 */`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">파일 네이밍 규칙</h3>
          <p className="mt_m">
            일관된 네이밍 규칙을 따르면 <b>파일을 빠르게 찾고 이해</b>할 수
            있습니다.
          </p>
          <div className="table_summary value_150 mt_m">
            <ul className="lst_hd">
              <li className="cell value">규칙</li>
              <li className="cell content">설명</li>
              <li className="cell content">예시</li>
            </ul>
            <ul className="lst_bd">
              <li>
                <p className="cell value t_darkgreen">소문자 사용</p>
                <p className="cell content" data-title="설명">
                  파일명은 소문자로 작성하여 운영체제 간 호환성을 높입니다
                </p>
                <p className="cell content" data-title="예시">
                  <code>button.scss</code> (O), <code>Button.scss</code> (X)
                </p>
              </li>
              <li>
                <p className="cell value t_darkgreen">하이픈(-) 사용</p>
                <p className="cell content" data-title="설명">
                  단어 구분은 하이픈을 사용하며, 언더스코어는 파셜 접두사에만
                  사용
                </p>
                <p className="cell content" data-title="예시">
                  <code>button-group.scss</code> (O),{" "}
                  <code>button_group.scss</code> (X)
                </p>
              </li>
              <li>
                <p className="cell value t_darkgreen">의미 있는 이름</p>
                <p className="cell content" data-title="설명">
                  파일 내용을 바로 알 수 있도록 명확한 이름을 사용
                </p>
                <p className="cell content" data-title="예시">
                  <code>primary-button.scss</code> (O), <code>btn1.scss</code>{" "}
                  (X)
                </p>
              </li>
              <li>
                <p className="cell value t_darkgreen">파셜 접두사</p>
                <p className="cell content" data-title="설명">
                  파셜 파일은 반드시 <code>_</code>로 시작
                </p>
                <p className="cell content" data-title="예시">
                  <code>_variables.scss</code> (O), <code>variables.scss</code>{" "}
                  (일반 파일)
                </p>
              </li>
            </ul>
          </div>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">프로젝트 파일 구조 예시</h2>
        <p className="mt_l">
          실제 프로젝트에서 SCSS 파일을 어떻게 구성하는지{" "}
          <b>폴더 구조와 함께</b> 살펴봅니다.
          <br />
          작은 프로젝트부터 중간 규모, 대규모까지 여러 예시를 비교해 보면서,{" "}
          <b>내가 진행하는 프로젝트에 어떤 구조가 어울리는지</b> 감을 잡을 수
          있도록 구성했습니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">기본 구조</h3>
          <p className="mt_m">
            작은 프로젝트에서는{" "}
            <b>모든 SCSS 파일을 하나의 폴더에 모아두는 것</b>도 충분합니다.
          </p>
          <CodeBlock title="기본 폴더 구조" language="text" className="mt_m">
            {`project/
├─ scss/
│  ├── _variables.scss
│  ├── _mixins.scss
│  └── main.scss
└─ css/
   ├── main.css (컴파일 결과 : 일반)
   └── main.min.css (컴파일 결과 : 압축)`}
          </CodeBlock>
          <CodeBlock title="main.scss 내용" language="css" className="mt_m">
            {`@use "variables";
@use "mixins";

body {
  font-size: variables.$font-size-base;
}`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">중간 규모 프로젝트 구조</h3>
          <p className="mt_m">
            프로젝트가 커지면 <b>기능별로 폴더를 나누어 관리</b>하는 것이
            좋습니다.
          </p>
          <CodeBlock
            title="중간 규모 폴더 구조"
            language="text"
            className="mt_m"
          >
            {`project/
├─ scss/
│  ├─ abstracts/
│  │  ├── _variables.scss
│  │  ├── _mixins.scss
│  │  └── _functions.scss
│  ├─ base/
│  │  ├── _reset.scss
│  │  └── _typography.scss
│  ├─ components/
│  │  ├── _buttons.scss
│  │  ├── _cards.scss
│  │  └── _forms.scss
│  ├─ layout/
│  │  ├── _header.scss
│  │  ├── _footer.scss
│  │  └── _grid.scss
│  └─ main.scss
└─ css/
   ├── main.css
   └── main.min.css`}
          </CodeBlock>
          <dl className="dl_dot_lst mt_m">
            <dt>각 폴더의 역할은 다음과 같습니다:</dt>
            <dd>
              <b>abstracts</b>: 변수, 믹스인, 함수 등 재사용 가능한 추상화 요소
            </dd>
            <dd>
              <b>base</b>: 리셋, 타이포그래피 등 프로젝트 전반에 적용되는 기본
              스타일
            </dd>
            <dd>
              <b>components</b>: 버튼, 카드, 폼 등 재사용 가능한 UI 컴포넌트
            </dd>
            <dd>
              <b>layout</b>: 헤더, 푸터, 그리드 등 레이아웃 관련 스타일
            </dd>
          </dl>

          <div className="mt_ml indent">
            <h4 className="ml_mn">main.scss</h4>
            <CodeBlock title="main.scss 내용" language="css" className="mt_ms">
              {`// Abstracts
@use "abstracts/variables";
@use "abstracts/mixins";

// Base
@use "base/reset";
@use "base/typography";

// Components
@use "components/buttons";
@use "components/cards";

// Layout
@use "layout/header";
@use "layout/footer";`}
            </CodeBlock>
          </div>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">대규모 프로젝트 구조</h3>
          <p className="mt_m">
            대규모 프로젝트에서는 <b>더 세분화된 폴더 구조</b>를 사용할 수
            있습니다.
          </p>
          <CodeBlock
            title="대규모 프로젝트 구조"
            language="text"
            className="mt_m"
          >
            {`project/
├─ scss/
│  ├─ abstracts/
│  │  ├─ _variables.scss
│  │  ├─ _mixins.scss
│  │  └─ _functions.scss
│  ├─ base/
│  │  ├─ _reset.scss
│  │  └─ _typography.scss
│  ├─ components/
│  │  ├─ buttons/
│  │  │  ├── _button-base.scss
│  │  │  ├── _button-primary.scss
│  │  │  └── _button-secondary.scss
│  │  └─ cards/
│  │     ├── _card-base.scss
│  │     └── _card-featured.scss
│  ├─ pages/
│  │  ├─ _home.scss
│  │  └─ _about.scss
│  ├─ themes/
│  │  └─ _dark.scss
│  └─ main.scss
└─ css/
   ├── main.css
   └── main.min.css`}
          </CodeBlock>
          <p className="mt_ms">
            대규모 프로젝트에서는 <b>컴포넌트를 하위 폴더로 더 세분화</b>하고,
            페이지별 스타일이나 테마 파일도 별도로 관리합니다.
            <br />
            이렇게 구성하면{" "}
            <b>수백 개의 파일이 있어도 필요한 부분을 빠르게 찾을 수 있습니다</b>
            .
          </p>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">파일 구조 설계 팁</h2>
        <p className="mt_l">
          효율적인 SCSS 파일 구조를 만들기 위한 <b>실용적인 가이드라인</b>을
          정리합니다.
          <br />
          앞에서 본 예시 구조들을 그대로 복사해 쓰는 것보다는, 이 섹션의 팁을
          참고해 <b>팀 규모와 프로젝트 특성에 맞게 구조를 조정</b>하는 것이
          중요합니다.
        </p>

        <dl className="dl_dot_lst mt_l">
          <dt className="font-16 mb_s">작은 프로젝트부터 시작하기</dt>
          <dd>
            처음에는 <b>간단한 구조로 시작</b>하고, 프로젝트가 커지면서
            점진적으로 폴더를 추가하는 것이 좋습니다.
          </dd>
          <dd>너무 복잡한 구조는 오히려 관리가 어려울 수 있습니다.</dd>
        </dl>

        <dl className="dl_dot_lst mt_l">
          <dt className="font-16 mb_s">일관된 네이밍 규칙 유지</dt>
          <dd>
            팀 프로젝트라면 <b>파일명과 폴더 구조 규칙을 문서화</b>하고 모든
            팀원이 동일하게 따르도록 합니다.
          </dd>
          <dd>
            예를 들어 &quot;컴포넌트는 단수형으로 명명&quot; 또는 &quot;파셜
            파일은 항상 <code className="t_blue">_</code>로 시작&quot; 같은
            규칙을 정하면 됩니다.
          </dd>
        </dl>

        <dl className="dl_dot_lst mt_l">
          <dt className="font-16 mb_s">main.scss는 최소한으로 유지</dt>
          <dd>
            <p>
              <code className="t_blue">main.scss</code> 파일은{" "}
              <b>다른 파일들을 불러오는 역할만</b> 하도록 구성합니다.
              <br />
              실제 스타일 코드는 각 파셜 파일에 작성하고,{" "}
              <code className="t_blue">main.scss</code>에서는{" "}
              <code className="t_blue">@use</code>로만 연결합니다.
            </p>
            <CodeBlock title="✅ 좋은 예시" language="css" className="mt_s">
              {`/* ✅ main.scss (좋은 예시) */
@use "variables";
@use "mixins";
@use "components/buttons";`}
            </CodeBlock>
            <CodeBlock title="❌ 나쁜 예시" language="css" className="mt_ms">
              {`/* ❌ main.scss (나쁜 예시) */
@use "variables";

/* 스타일 코드를 직접 작성하지 말 것 */
.button {
  background: variables.$primary;
}`}
            </CodeBlock>
          </dd>
        </dl>

        <dl className="dl_dot_lst mt_l">
          <dt className="font-16 mb_s">관련 파일은 함께 두기</dt>
          <dd>
            같은 기능이나 컴포넌트와 관련된 파일들은{" "}
            <b>같은 폴더에 모아두는 것</b>이 좋습니다.
          </dd>
          <dd>
            예를 들어 버튼 관련 모든 스타일(
            <code className="t_blue">_button-base.scss</code>,{" "}
            <code className="t_blue">_button-primary.scss</code> 등)은{" "}
            <code className="t_blue">components/buttons/</code> 폴더에 함께
            둡니다.
          </dd>
        </dl>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">정리</h2>
        <p className="mt_l">
          SCSS 파일 구조와 확장자에 대해 알아본 내용을 정리합니다.
          <br />
          여기에서 다룬 개념들은 이후 챕터에서 SCSS 문법을 더 깊게 배울 때도
          계속해서 반복해 쓰이므로, <b>파일을 어떻게 나누고 이름을 붙일지</b> 한
          번쯤은 자신만의 기준을 정리해 두면 좋습니다.
        </p>
        <ul className="dot_lst mt_m indent_small">
          <li>
            <b>확장자</b>: <code className="t_blue">.scss</code>는 CSS와 유사한
            문법, <code className="t_blue">.sass</code>는 인덴트 문법.
            실무에서는 주로 <code className="t_blue">.scss</code> 사용
          </li>
          <li>
            <b>파셜 파일</b>: <code className="t_blue">_</code>로 시작하며 직접
            컴파일되지 않음. 다른 파일에서 <code className="t_blue">@use</code>
            로 불러와 사용
          </li>
          <li>
            <b>파일 구조</b>: 프로젝트 규모에 따라 단순한 구조부터 세분화된
            구조까지 선택 가능
          </li>
          <li>
            <b>네이밍 규칙</b>: 소문자, 하이픈 사용, 의미 있는 이름으로 일관성
            유지
          </li>
        </ul>
        <p className="mt_m">
          다음 페이지에서는 <b>SCSS 파일이 어떻게 CSS로 컴파일되는지</b>, 그리고
          컴파일 과정에서 어떤 일이 일어나는지 자세히 살펴봅니다.
        </p>
      </section>

      <figure className="img_figure mt_l">
        <img src={IMG.SCSS + "/02_scss_01.png"} alt="SCSS 파일 구조" />
        <figcaption>SCSS 파일 구조</figcaption>
      </figure>
    </>
  );
}

export default FileStructurePage;
