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
  title: "디자인 시스템 구조",
  description:
    "지금까지 만든 코드들을 실제 디자인 시스템 구조로 정리하는 방법을 알아봅니다. tokens, base, layout, components, themes 폴더의 역할과 import/use 흐름을 상세히 설명합니다.",
  keyword:
    "디자인 시스템 구조, design system structure, scss 폴더 구조, tokens base layout components, scss import use",
};

const FOLDER_TREE = `scss/
  ├─ tokens/              // 디자인 토큰 (가장 아래 레이어)
  │   ├─ _tokens-color.scss
  │   ├─ _tokens-typography.scss
  │   ├─ _tokens-spacing.scss
  │   ├─ _tokens-radius.scss
  │   ├─ _tokens-breakpoints.scss
  │   └─ _tokens.scss
  │
  ├─ base/                // 기본 스타일
  │   ├─ _reset.scss
  │   └─ _base.scss
  │
  ├─ layout/              // 레이아웃 시스템
  │   ├─ _layout-app.scss
  │   ├─ _layout-grid.scss
  │   └─ _container.scss
  │
  ├─ components/          // UI 컴포넌트
  │   ├─ _button.scss
  │   ├─ _card.scss
  │   ├─ _input.scss
  │   ├─ _checkbox.scss
  │   └─ ...
  │
  ├─ themes/              // 테마
  │   ├─ _theme-light.scss
  │   ├─ _theme-dark.scss
  │   └─ _themes.scss
  │
  └─ main.scss            // 메인 파일`;

const MAIN_SCSS = `// 1. 디자인 토큰 (가장 먼저)
@use "tokens/tokens";

// 2. 테마 (토큰 이후, base 이전)
@use "themes/themes";

// 3. 기본 스타일 (토큰과 테마 사용)
@use "base/reset";
@use "base/base";

// 4. 레이아웃 시스템
@use "layout/layout-app";
@use "layout/layout-grid";
@use "layout/container";

// 5. UI 컴포넌트
@use "components/button";
@use "components/card";
@use "components/input";
@use "components/checkbox";
@use "components/radio";
// ... 나머지 컴포넌트`;

const TOKENS_FORWARD = `// tokens/_tokens.scss
@forward "tokens-color";
@forward "tokens-typography";
@forward "tokens-spacing";
@forward "tokens-radius";
@forward "tokens-breakpoints";`;

const MAIN_SCSS_SIMPLIFIED = `// 간소화된 main.scss
@use "tokens/tokens";
@use "themes/themes";
@use "base/reset";
@use "base/base";
@use "layout/layout-app";
@use "components/button";
// ...`;

const DEPENDENCY_FLOW = `tokens/          ← (의존 없음, 최하위)
  ↑
themes/         ← tokens 사용
  ↑
base/           ← tokens, themes 사용
  ↑
layout/         ← tokens, themes, base 사용
  ↑
components/     ← tokens, themes, base 사용
  ↑
main.scss       ← 모든 것 사용`;

function DesignSystemStructurePage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          디자인 시스템은{" "}
          <b>지금까지 배운 모든 요소들을 체계적으로 정리한 결과물</b>입니다.
          <br />
          SCSS는 파일 구조가 곧 설계이므로, 각 폴더의 역할을 명확히 하고 책임을
          분리하는 것이 중요합니다.
          <br />
          역할이 섞이면 유지보수가 불가능해지므로, 처음부터 올바른 구조로
          설계해야 합니다.
        </p>
        <p className="mt_s">
          이 페이지에서는 tokens, base, layout, components, themes 폴더의 역할,
          각 폴더에 들어갈 파일, 그리고 import/use 흐름을 상세히 알아봅니다.
        </p>
      </blockquote>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">디자인 시스템 폴더 구조</h2>
        <p className="mt_l">
          디자인 시스템의 전체 폴더 구조와 각 폴더의 역할입니다.
          <br />각 폴더는 명확한 책임을 가지며, 다른 폴더에 의존하지 않는
          독립적인 구조를 유지합니다.
        </p>

        <CodeBlock
          title="디자인 시스템 구조"
          className="mt_m"
          lineNumbers={false}
        >
          {FOLDER_TREE}
        </CodeBlock>
        <p className="mt_m">
          위에서 아래로 순서대로 의존성이 흐릅니다. tokens가 가장 아래
          레이어이고, main.scss가 모든 것을 결합합니다.
        </p>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">각 폴더의 역할</h2>
        <p className="mt_l">
          각 폴더가 담당하는 역할과 책임을 명확히 정의합니다.
          <br />
          폴더별로 무엇이 들어가야 하고 무엇이 들어가면 안 되는지 이해하는 것이
          중요합니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">tokens/ 폴더</h3>
          <p className="mt_m">
            <b>역할</b>: 디자인 시스템의 모든 값을 정의하는 폴더입니다.
          </p>
          <ul className="dot_lst mt_sm indent_small">
            <li>
              <b>포함해야 할 것</b>: 색상, 타이포그래피, 간격, 둥근 모서리,
              breakpoint 등의 값 정의
            </li>
            <li>
              <b>포함하면 안 될 것</b>: 실제 CSS 스타일 규칙, 컴포넌트 스타일
            </li>
            <li>
              <b>의존성</b>: 다른 폴더에 의존하지 않음 (가장 아래 레이어)
            </li>
          </ul>
          <p className="mt_ms">
            tokens 폴더는 순수한 값 정의만 포함하며, 실제 스타일을 작성하지
            않습니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">base/ 폴더</h3>
          <p className="mt_m">
            <b>역할</b>: 기본 HTML 요소의 스타일을 정의하는 폴더입니다.
          </p>
          <ul className="dot_lst mt_sm indent_small">
            <li>
              <b>포함해야 할 것</b>: Reset 스타일, 기본 HTML 요소(body, h1-h6,
              p, a 등) 스타일
            </li>
            <li>
              <b>포함하면 안 될 것</b>: 컴포넌트 스타일, 레이아웃 스타일
            </li>
            <li>
              <b>의존성</b>: tokens 폴더만 의존
            </li>
          </ul>
          <p className="mt_ms">
            base 폴더는 프로젝트의 기본 스타일을 정의하며, 모든 컴포넌트의
            기반이 됩니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">layout/ 폴더</h3>
          <p className="mt_m">
            <b>역할</b>: 페이지 레이아웃과 구조를 정의하는 폴더입니다.
          </p>
          <ul className="dot_lst mt_sm indent_small">
            <li>
              <b>포함해야 할 것</b>: App Layout, Grid, Flex 레이아웃, Container
            </li>
            <li>
              <b>포함하면 안 될 것</b>: 컴포넌트 내부 레이아웃, 개별 컴포넌트
              스타일
            </li>
            <li>
              <b>의존성</b>: tokens, base 폴더 의존
            </li>
          </ul>
          <p className="mt_ms">
            layout 폴더는 페이지 전체 구조를 담당하며, 반응형 로직도 여기에서
            관리합니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">components/ 폴더</h3>
          <p className="mt_m">
            <b>역할</b>: 재사용 가능한 UI 컴포넌트를 정의하는 폴더입니다.
          </p>
          <ul className="dot_lst mt_sm indent_small">
            <li>
              <b>포함해야 할 것</b>: Button, Card, Input, Checkbox 등 독립적인
              컴포넌트
            </li>
            <li>
              <b>포함하면 안 될 것</b>: 페이지 특정 스타일, 레이아웃 스타일
            </li>
            <li>
              <b>의존성</b>: tokens, base 폴더 의존 (layout은 선택적)
            </li>
          </ul>
          <p className="mt_ms">
            components 폴더의 각 파일은 독립적으로 동작하며, 다른 컴포넌트에
            의존하지 않습니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">themes/ 폴더</h3>
          <p className="mt_m">
            <b>역할</b>: 테마별 토큰 값을 정의하는 폴더입니다.
          </p>
          <ul className="dot_lst mt_sm indent_small">
            <li>
              <b>포함해야 할 것</b>: Light/Dark 등 테마별 CSS 변수 정의
            </li>
            <li>
              <b>포함하면 안 될 것</b>: 컴포넌트 스타일, 레이아웃 스타일
            </li>
            <li>
              <b>의존성</b>: tokens 폴더 의존 (토큰의 값을 재정의)
            </li>
          </ul>
          <p className="mt_ms">
            themes 폴더는 tokens의 값을 테마별로 재정의하며, 컴포넌트 코드는
            변경하지 않습니다.
          </p>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">main.scss 구성</h2>
        <p className="mt_l">
          main.scss는 모든 파일을 올바른 순서로 import하는 메인 파일입니다.
          <br />
          의존성 순서를 고려하여 import해야 하며, 일반적으로 tokens → base →
          layout → components → themes 순서로 구성합니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">main.scss 작성</h3>
          <p className="mt_m">의존성 순서를 고려한 main.scss 구성입니다.</p>
          <CodeBlock title="main.scss" language="scss" className="mt_m">
            {MAIN_SCSS}
          </CodeBlock>
          <p className="mt_ms">
            이 순서를 지켜야 각 레이어가 필요한 값을 사용할 수 있습니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">@forward를 활용한 구조</h3>
          <p className="mt_m">
            각 폴더에 index 파일을 만들어 @forward로 정리하면 더 체계적으로
            관리할 수 있습니다.
          </p>
          <CodeBlock
            title="tokens/_tokens.scss"
            language="scss"
            className="mt_m"
          >
            {TOKENS_FORWARD}
          </CodeBlock>
          <CodeBlock
            title="main.scss (간소화)"
            language="scss"
            className="mt_m"
          >
            {MAIN_SCSS_SIMPLIFIED}
          </CodeBlock>
          <p className="mt_ms">
            <code>@forward</code>를 사용하면 각 폴더의 내부 구조를 숨기고, 폴더
            단위로 관리할 수 있습니다.
          </p>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">의존성 흐름 시각화</h2>
        <p className="mt_l">
          각 레이어 간의 의존성 관계를 이해하면 올바른 구조를 설계할 수
          있습니다.
          <br />
          의존성은 단방향으로만 흐르며, 아래 레이어는 위 레이어에 의존하지
          않습니다.
          <br />
          아래는 레이어 간 의존성 관계입니다.
        </p>

        <CodeBlock
          title="의존성 흐름 다이어그램"
          className="mt_m"
          lineNumbers={false}
        >
          {DEPENDENCY_FLOW}
        </CodeBlock>
        <p className="mt_m">
          이 구조를 지키면 의존성 순환 문제를 방지하고, 각 레이어를 독립적으로
          테스트하고 수정할 수 있습니다.
        </p>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">실무 적용 팁</h2>
        <p className="mt_l">
          디자인 시스템 구조를 실무에 적용할 때 주의할 사항들입니다.
        </p>

        <dl className="dl_dot_lst mt_l">
          <dt className="font-16 mb_s">폴더 역할 혼동 방지</dt>
          <dd>
            <b>components에 레이아웃 넣지 않기</b>: 페이지 구조는 layout
            폴더에만
          </dd>
          <dd>
            <b>tokens에 스타일 넣지 않기</b>: 값만 정의하고 CSS 규칙은 작성하지
            않음
          </dd>
          <dd>
            <b>base에 컴포넌트 넣지 않기</b>: 기본 HTML 요소만 정의
          </dd>
        </dl>

        <dl className="dl_dot_lst mt_l">
          <dt className="font-16 mb_s">
            점진적 확장 :{" "}
            <span className="t_666 weight-500">
              처음부터 완벽한 구조를 만들기보다, 점진적으로 확장하는 것이
              현실적입니다.
            </span>
          </dt>
          <dd>
            <b>초기</b>: tokens, base, components만으로 시작
          </dd>
          <dd>
            <b>확장</b>: 필요에 따라 layout, themes 추가
          </dd>
          <dd>
            <b>리팩토링</b>: 구조가 커지면 폴더별로 세분화
          </dd>
        </dl>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">정리</h2>
        <p className="mt_l">
          디자인 시스템 SCSS 구조에 대해 알아본 내용을 정리합니다.
        </p>
        <ul className="dot_lst mt_m indent_small">
          <li>
            <b>폴더 구조</b>: tokens, base, layout, components, themes로 역할
            분리
          </li>
          <li>
            <b>각 폴더의 역할</b>: 명확한 책임 범위 정의
          </li>
          <li>
            <b>main.scss 구성</b>: 의존성 순서를 고려한 import 순서
          </li>
          <li>
            <b>의존성 흐름</b>: 단방향 의존성으로 순환 문제 방지
          </li>
          <li>
            <b>@forward 활용</b>: 폴더 단위로 관리하여 구조 간소화
          </li>
          <li>
            <b>실무 적용</b>: 폴더 역할 혼동 방지, 점진적 확장
          </li>
        </ul>
        <p className="mt_m">
          다음 페이지에서는 <b>Vue/React 컴포넌트 스타일 구조</b>를 알아봅니다.
        </p>
      </section>

      <figure className="img_figure mt_l">
        <img src={IMG.SCSS + "/10_scss_06.png"} alt="디자인 시스템 폴더 구조" />
        <figcaption>디자인 시스템 폴더 구조</figcaption>
      </figure>
    </>
  );
}

export default DesignSystemStructurePage;
