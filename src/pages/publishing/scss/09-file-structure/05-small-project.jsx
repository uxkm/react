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
  title: "소규모 프로젝트에서의 SCSS 구조 설계",
  description:
    "소규모 프로젝트에서 SCSS 구조를 설계하는 방법을 상세히 알아봅니다. 소규모 프로젝트의 특징, 적합한 폴더 구조, 파일 구성, main.scss 작성법, 확장 가능한 구조 설계, 그리고 실제 예시를 제공합니다.",
  keyword:
    "scss 소규모 프로젝트, scss 작은 프로젝트 구조, scss 구조 설계, scss 파일 구성",
};

function SmallProjectPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          소규모 프로젝트는 <b>간단한 구조로 시작</b>하되,{" "}
          <b>나중에 확장할 수 있는 구조</b>를 설계하는 것이 중요합니다.
          <br />
          너무 복잡한 구조는 오히려 부담이 될 수 있으므로,{" "}
          <b>프로젝트 규모에 맞는 적절한 구조</b>를 선택해야 합니다.
        </p>
        <p className="mt_s">
          이 페이지에서는 소규모 프로젝트의 특징, 적합한 폴더 구조, 파일 구성,
          main.scss 작성법, 확장 가능한 구조 설계, 그리고 실제 예시를 상세히
          알아봅니다.
        </p>
      </blockquote>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">소규모 프로젝트의 특징</h2>
        <p className="mt_l">
          소규모 프로젝트는 <b>다음과 같은 특징</b>을 가집니다.
          <br />
          페이지 수가 적고, 컴포넌트가 적으며, 팀 규모가 작은 프로젝트의 특성을
          이해해 두면, <b>과도한 구조 설계를 피하고 실용적인 구조</b>를 선택할
          수 있습니다.
        </p>

        <dl className="dl_dot_lst mt_l">
          <dt className="font-16 mb_s">소규모 프로젝트란?</dt>
          <dd>
            <b>페이지 수가 적음</b>: 1-5페이지 정도의 작은 웹사이트
          </dd>
          <dd>
            <b>컴포넌트가 적음</b>: 버튼, 카드 등 기본적인 컴포넌트만 사용
          </dd>
          <dd>
            <b>팀 규모가 작음</b>: 1-2명이 작업하는 프로젝트
          </dd>
          <dd>
            <b>기간이 짧음</b>: 빠르게 완성해야 하는 프로젝트
          </dd>
        </dl>

        <dl className="dl_dot_lst mt_l">
          <dt className="font-16 mb_s">소규모 프로젝트의 요구사항</dt>
          <dd>
            <b>간단한 구조</b>: 복잡한 폴더 구조보다는 간단한 구조
          </dd>
          <dd>
            <b>빠른 개발</b>: 구조 설계에 시간을 많이 쓰지 않고 빠르게 개발
          </dd>
          <dd>
            <b>유지보수 용이</b>: 나중에 수정하기 쉬운 구조
          </dd>
          <dd>
            <b>확장 가능성</b>: 필요하면 나중에 확장할 수 있는 구조
          </dd>
        </dl>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">소규모 프로젝트 구조 설계</h2>
        <p className="mt_l">
          소규모 프로젝트에 <b>적합한 구조를 설계</b>하는 방법을 알아봅니다.
          <br />
          최소한의 파일로 시작하되, 각 파일의 역할을 명확히 정의하면,{" "}
          <b>나중에 프로젝트가 커져도 확장하기 쉬운 기반</b>을 만들 수 있습니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">최소한의 구조</h3>
          <p className="mt_m">
            소규모 프로젝트는 <b>최소한의 구조</b>로 시작하는 것이 좋습니다.
          </p>
          <CodeBlock title="최소한의 구조" language="scss" className="mt_m">
            {`scss/
  ├─ _variables.scss    // 변수
  ├─ _mixins.scss       // 믹스인
  ├─ _base.scss         // 기본 스타일
  ├─ _components.scss   // 컴포넌트
  └─ main.scss          // 메인 파일`}
          </CodeBlock>
          <p className="mt_ms">
            이 구조는 <b>간단하면서도 확장 가능</b>합니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">각 파일의 역할</h3>
          <p className="mt_m">
            각 파일이 <b>어떤 역할을 하는지</b> 상세히 설명합니다.
          </p>

          <div className="mt_l indent">
            <h4 className="ml_mn">_variables.scss</h4>
            <p className="mt_ms">
              프로젝트에서 사용하는 <b>모든 변수를 정의</b>합니다.
            </p>
            <CodeBlock
              title="_variables.scss 예시"
              language="scss"
              className="mt_ms"
            >
              {`// _variables.scss
// 색상
$color-primary: #0a58ca;
$color-secondary: #6c757d;

// 간격
$spacing-sm: 8px;
$spacing-md: 16px;
$spacing-lg: 24px;

// 폰트
$font-size-base: 16px;
$font-weight-bold: 700;`}
            </CodeBlock>
          </div>

          <div className="mt_l indent">
            <h4 className="ml_mn">_mixins.scss</h4>
            <p className="mt_ms">
              프로젝트에서 사용하는 <b>모든 믹스인을 정의</b>합니다.
            </p>
            <CodeBlock
              title="_mixins.scss 예시"
              language="scss"
              className="mt_ms"
            >
              {`// _mixins.scss
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

@mixin button-base {
  padding: 8px 16px;
  border-radius: 4px;
}`}
            </CodeBlock>
          </div>

          <div className="mt_l indent">
            <h4 className="ml_mn">_base.scss</h4>
            <p className="mt_ms">
              프로젝트의 <b>기본 스타일을 정의</b>합니다.
            </p>
            <CodeBlock
              title="_base.scss 예시"
              language="scss"
              className="mt_ms"
            >
              {`// _base.scss
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 16px;
  line-height: 1.5;
}`}
            </CodeBlock>
          </div>

          <div className="mt_l indent">
            <h4 className="ml_mn">_components.scss</h4>
            <p className="mt_ms">
              프로젝트에서 사용하는 <b>모든 컴포넌트 스타일을 정의</b>합니다.
            </p>
            <CodeBlock
              title="_components.scss 예시"
              language="scss"
              className="mt_ms"
            >
              {`// _components.scss
.button {
  padding: 8px 16px;
  background: #0a58ca;
  color: #ffffff;
}

.card {
  background: #ffffff;
  border-radius: 8px;
  padding: 16px;
}`}
            </CodeBlock>
          </div>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">main.scss 작성법</h2>
        <p className="mt_l">
          소규모 프로젝트에서 <b>main.scss를 작성</b>하는 방법을 알아봅니다.
          <br />
          <b className="t_black">변수</b> → <b className="t_black">믹스인</b> →{" "}
          <b className="t_black">기본 스타일</b> →{" "}
          <b className="t_black">컴포넌트 순서</b>로 파셜을 불러오면,
          <b>의존성 문제 없이 모든 스타일을 사용</b>할 수 있어 실무에서 바로
          적용할 수 있는 패턴입니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">기본 main.scss</h3>
          <p className="mt_m">
            소규모 프로젝트의 <b>기본 main.scss 구성</b>입니다.
          </p>
          <CodeBlock title="기본 main.scss" language="scss" className="mt_m">
            {`// main.scss
// 1. 변수 (가장 먼저 불러오기)
@use "variables";

// 2. 믹스인 (변수 사용 가능)
@use "mixins";

// 3. 기본 스타일
@use "base";

// 4. 컴포넌트
@use "components";`}
          </CodeBlock>
          <p className="mt_ms">
            이 순서로 불러오면 <b>의존성 문제 없이</b> 모든 스타일을 사용할 수
            있습니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">의존성 순서</h3>
          <p className="mt_m">
            파일을 불러오는 <b>순서가 중요</b>합니다.
          </p>
          <CodeBlock title="의존성 순서 예시" language="scss" className="mt_m">
            {`// ✅ 올바른 순서
@use "variables";  // 1. 변수 (다른 파일에서 사용)
@use "mixins";     // 2. 믹스인 (변수 사용 가능)
@use "base";       // 3. 기본 스타일
@use "components"; // 4. 컴포넌트 (변수, 믹스인 사용 가능)

// ❌ 잘못된 순서
@use "components"; // 에러! variables와 mixins가 아직 불러와지지 않음
@use "variables";`}
          </CodeBlock>
          <p className="mt_ms">
            <b>변수 → 믹스인 → 기본 스타일 → 컴포넌트</b> 순서로 불러오는 것이
            안전합니다.
          </p>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">확장 가능한 구조 설계</h2>
        <p className="mt_l">
          소규모 프로젝트도 <b>나중에 확장할 수 있도록</b> 구조를 설계하는 것이
          좋습니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">초기 구조</h3>
          <p className="mt_m">
            프로젝트 시작 시 <b>간단한 구조</b>로 시작합니다.
          </p>
          <CodeBlock title="초기 구조" language="scss" className="mt_m">
            {`scss/
  ├─ _variables.scss
  ├─ _mixins.scss
  ├─ _components.scss
  └─ main.scss`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">확장 시 구조</h3>
          <p className="mt_m">
            프로젝트가 커지면 <b>파일을 분리</b>하여 확장합니다.
          </p>
          <CodeBlock title="확장 시 구조" language="scss" className="mt_m">
            {`scss/
  ├─ _variables.scss
  ├─ _mixins.scss
  ├─ _base.scss          // 새로 추가
  ├─ _buttons.scss       // components에서 분리
  ├─ _cards.scss         // components에서 분리
  ├─ _forms.scss         // 새로 추가
  └─ main.scss`}
          </CodeBlock>
          <p className="mt_ms">
            이렇게 하면 <b>초기 구조를 유지하면서 점진적으로 확장</b>할 수
            있습니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">확장 가이드라인</h3>
          <p className="mt_m">
            프로젝트를 확장할 때 <b>다음 기준을 참고</b>합니다:
          </p>
          <ul className="dot_lst mt_sm indent_small">
            <li>
              <b>파일이 200줄 이상</b>: 파일을 분리 고려
            </li>
            <li>
              <b>명확한 기능 구분</b>: 버튼, 카드 등 기능이 명확히 구분될 때
              분리
            </li>
            <li>
              <b>여러 곳에서 사용</b>: 특정 컴포넌트가 여러 곳에서 사용될 때
              분리
            </li>
          </ul>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">실제 프로젝트 예시</h2>
        <p className="mt_l">
          이론으로 배운 내용을 실제 프로젝트에 적용하는 것은 쉽지 않을 수
          있습니다.
          <br />
          다음 예시들은 <b>소규모 프로젝트에서 실제로 사용할 수 있는 구조</b>를
          보여줍니다. 각 예시는 프로젝트의 성격과 규모에 따라 어떤 구조가
          적합한지 판단하는 데 도움이 됩니다.
          <br />이 예시들을 참고하여 자신의 프로젝트에 맞는 구조를 선택하고
          조금씩 변형하여 사용하면 됩니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">예시 1: 랜딩 페이지</h3>
          <p className="mt_m">
            <b>단일 페이지 랜딩 페이지</b>의 구조 예시입니다.
          </p>
          <CodeBlock title="랜딩 페이지 구조" language="scss" className="mt_m">
            {`scss/
  ├─ _variables.scss
  │   // $color-primary: #0a58ca;
  │   // $spacing-md: 16px;
  │
  ├─ _mixins.scss
  │   // @mixin flex-center { }
  │
  ├─ _base.scss
  │   // body { }
  │   // h1, h2 { }
  │
  ├─ _components.scss
  │   // .hero { }
  │   // .button { }
  │   // .section { }
  │
  └─ main.scss
      // @use "variables";
      // @use "mixins";
      // @use "base";
      // @use "components";`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">예시 2: 소규모 웹사이트</h3>
          <p className="mt_m">
            <b>3~5페이지 웹사이트</b>의 구조 예시입니다.
          </p>
          <CodeBlock
            title="소규모 웹사이트 구조"
            language="scss"
            className="mt_m"
          >
            {`scss/
  ├─ _variables.scss
  │   /* 색상, 간격, 폰트 변수 */
  │
  ├─ _mixins.scss
  │   /* flex-center, button-base 등 */
  │
  ├─ _base.scss
  │   /* 리셋, 타이포그래피 */
  │
  ├─ _layout.scss
  │   /* 헤더, 푸터, 컨테이너 */
  │
  ├─ _components.scss
  │   /* 버튼, 카드, 폼 등 */
  │
  └─ main.scss
      /* @use "variables"; */
      /* @use "mixins"; */
      /* @use "base"; */
      /* @use "layout"; */
      /* @use "components"; */`}
          </CodeBlock>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">소규모 프로젝트 구조 설계 체크리스트</h2>

        <dl className="dl_dot_lst mt_l">
          <dt className="font-16 mb_s">필수 파일</dt>
          <dd>
            <b>_variables.scss</b>: 변수 정의 (색상, 간격, 폰트 등)
          </dd>
          <dd>
            <b>_mixins.scss</b>: 믹스인 정의 (재사용 가능한 스타일)
          </dd>
          <dd>
            <b>_base.scss</b>: 기본 스타일 (리셋, 타이포그래피)
          </dd>
          <dd>
            <b>_components.scss</b>: 컴포넌트 스타일 (버튼, 카드 등)
          </dd>
          <dd>
            <b>main.scss</b>: 메인 파일 (모든 파셜 불러오기)
          </dd>
        </dl>

        <dl className="dl_dot_lst mt_l">
          <dt className="font-16 mb_s">선택적 파일</dt>
          <dd>
            <b>_layout.scss</b>: 레이아웃 관련 스타일 (헤더, 푸터 등)
          </dd>
          <dd>
            <b>_utilities.scss</b>: 유틸리티 클래스 (마진, 패딩 등)
          </dd>
          <dd>
            <b>_themes.scss</b>: 테마 관련 스타일 (다크 모드 등)
          </dd>
        </dl>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">모범 사례</h2>
        <p className="mt_l">
          소규모 프로젝트에서 <b>구조를 설계할 때 지켜야 할 모범 사례</b>를
          정리합니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">간단하게 시작</h3>
          <p className="mt_m">
            <b>너무 복잡한 구조로 시작하지 말고</b>, 간단하게 시작하는 것이
            좋습니다.
            <br />
            프로젝트가 작을 때는 복잡한 폴더 구조가 오히려 부담이 될 수
            있습니다.
          </p>
          <CodeBlock
            title="❌ 복잡한 구조로 시작 (비추천)"
            language="scss"
            className="mt_m"
          >
            {`// 작은 프로젝트인데 7-1 패턴으로 시작
scss/
  ├─ abstracts/
  ├─ base/
  ├─ components/
  ├─ layout/
  ├─ pages/
  ├─ themes/
  └─ vendors/
// 대부분의 폴더가 비어있거나 1~2개 파일만 있음
// 유지보수가 오히려 어려움`}
          </CodeBlock>
          <CodeBlock
            title="✅ 간단하게 시작 (추천)"
            language="scss"
            className="mt_m"
          >
            {`// 작은 프로젝트에는 단순한 구조로 시작
scss/
  ├─ _variables.scss
  ├─ _mixins.scss
  ├─ _components.scss
  └─ main.scss
// 필요한 것만으로 시작하고, 필요할 때 확장`}
          </CodeBlock>
          <p className="mt_ms">
            <b>필요할 때 점진적으로 확장</b>하는 것이 프로젝트 초기에는 더
            효율적입니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">일관성 유지</h3>
          <p className="mt_m">
            프로젝트 전체에서 <b>일관된 네이밍과 구조</b>를 유지하는 것이
            중요합니다.
            <br />
            일관성 있는 구조는 코드를 찾고 이해하는 데 걸리는 시간을 줄여줍니다.
          </p>
          <CodeBlock
            title="❌ 일관성 없는 네이밍 (비추천)"
            language="scss"
            className="mt_m"
          >
            {`// 네이밍 규칙이 통일되지 않음
_button.scss      // 언더스코어로 시작
button.scss       // 언더스코어 없음
Button.scss       // 대문자로 시작
btn-style.scss    // 줄임말 사용
// 어떤 파일이 어떤 규칙을 따르는지 혼란스러움`}
          </CodeBlock>
          <CodeBlock
            title="✅ 일관된 네이밍 (추천)"
            language="scss"
            className="mt_m"
          >
            {`// 모든 파셜 파일은 언더스코어로 시작
_variables.scss
_mixins.scss
_buttons.scss
_cards.scss
// 모든 컴포넌트는 복수형 사용 (또는 단수형으로 통일)
// 한 가지 규칙으로 통일되어 있어 찾기 쉬움`}
          </CodeBlock>
          <p className="mt_ms">
            프로젝트 시작 전에 <b>네이밍 규칙을 정하고</b>, 모든 파일에 일관되게
            적용하는 것이 중요합니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">확장 가능성 고려</h3>
          <p className="mt_m">
            초기 구조를 설계할 때 <b>나중에 확장할 수 있는 구조</b>를
            고려합니다.
            <br />
            프로젝트가 커질 때 구조를 변경하는 것보다, 처음부터 확장 가능한
            구조로 설계하는 것이 효율적입니다.
          </p>
          <CodeBlock title="초기 구조" language="scss" className="mt_m">
            {`// 프로젝트 초기: 모든 컴포넌트를 하나의 파일에
_components.scss
// - 버튼 스타일
// - 카드 스타일
// - 폼 스타일`}
          </CodeBlock>
          <CodeBlock title="확장 시 구조" language="scss" className="mt_m">
            {`// 프로젝트 확장 시: 기능별로 분리
_buttons.scss   // _components.scss에서 분리
_cards.scss     // _components.scss에서 분리
_forms.scss     // _components.scss에서 분리
// 각 파일이 독립적으로 관리 가능`}
          </CodeBlock>
          <p className="mt_ms">
            초기에는 하나의 파일에 관련 코드를 모아두되,{" "}
            <b>기능별로 섹션을 나누어 작성</b>하면 나중에 분리하기 쉽습니다.
          </p>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">정리</h2>
        <p className="mt_l">
          소규모 프로젝트에서의 SCSS 구조 설계에 대해 알아본 내용을 정리합니다.
        </p>
        <ul className="dot_lst mt_m indent_small">
          <li>
            <b>소규모 프로젝트 특징</b>: 페이지 수 적음, 컴포넌트 적음, 팀 규모
            작음, 기간 짧음
          </li>
          <li>
            <b>최소한의 구조</b>: <code>_variables</code>, <code>_mixins</code>,{" "}
            <code>_base</code>, <code>_components</code>, <code>main.scss</code>
          </li>
          <li>
            <b>각 파일의 역할</b>: 변수, 믹스인, 기본 스타일, 컴포넌트 스타일
          </li>
          <li>
            <b>main.scss 작성법</b>: 의존성 순서 고려 (변수 → 믹스인 → 기본 →
            컴포넌트)
          </li>
          <li>
            <b>확장 가능한 구조</b>: 초기에는 간단하게, 필요시 점진적으로 확장
          </li>
          <li>
            <b>실제 예시</b>: 랜딩 페이지, 소규모 웹사이트 구조 예시
          </li>
          <li>
            <b>모범 사례</b>: 간단하게 시작, 일관성 유지, 확장 가능성 고려
          </li>
        </ul>
        <p className="mt_m">
          지금까지 학습한 SCSS 문법과 구조 설계 방법을 바탕으로, 다음 장에서는{" "}
          <b>실무에서 바로 사용할 수 있는 디자인 시스템 예제</b>를 단계별로
          구성해봅니다.
          <br />
          디자인 토큰, 레이아웃 시스템, UI 컴포넌트, 테마 시스템 등을 실제로
          구현하면서, SCSS가 어떻게 실무 구조로 완성되는지 체감할 수 있습니다.
        </p>
      </section>

      <figure className="img_figure mt_l">
        <img src={IMG.SCSS + "/09_scss_05.png"} alt="소규모 프로젝트의 특징" />
        <figcaption>소규모 프로젝트의 특징</figcaption>
      </figure>
    </>
  );
}

export default SmallProjectPage;
