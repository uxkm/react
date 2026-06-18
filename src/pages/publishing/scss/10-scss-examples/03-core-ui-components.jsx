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
  title: "핵심 UI 컴포넌트",
  description:
    "실무에서 거의 항상 등장하는 기본 UI 컴포넌트(Button, Card, Badge/Tag, Divider)를 SCSS로 구성하는 방법을 알아봅니다. Modifier 기반 구조와 상태 관리를 상세히 설명합니다.",
  keyword:
    "ui 컴포넌트, button component, card component, badge tag, divider, modifier pattern, bem, scss 컴포넌트",
};

function CoreUiComponentsPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          핵심 UI 컴포넌트는 <b>디자인 시스템의 기본 빌딩 블록</b>입니다.
          <br />
          SCSS는 &quot;스타일을 늘리는 도구&quot;가 아니라{" "}
          <b>경우의 수를 구조로 정리하는 도구</b>입니다.
          <br />
          Modifier 기반 구조를 사용하면 컴포넌트의 다양한 변형을 체계적으로
          관리할 수 있습니다.
        </p>
        <p className="mt_s">
          이 페이지에서는 Button, Card, Badge/Tag, Divider 컴포넌트를 Modifier
          패턴으로 구성하는 방법을 상세히 알아봅니다.
        </p>
      </blockquote>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">Modifier 패턴</h2>
        <p className="mt_l">
          <b className="t_blue">Modifier 패턴</b>은 BEM 방법론의 한 부분으로,
          기본 컴포넌트에 변형을 추가하는 방식입니다.
          <br />
          <code className="t_blue">--primary</code>,{" "}
          <code className="t_blue">--sm</code> 같은 Modifier를 사용하면
          컴포넌트의 다양한 상태와 크기를 체계적으로 관리할 수 있습니다.
          <br />
          상태 스타일은 구조로 관리되므로, 새로운 변형을 추가하거나 기존
          스타일을 수정할 때 예측 가능하고 안전합니다.
        </p>

        <dl className="dl_dot_lst mt_l">
          <dt className="font-16 mb_s">Modifier 구조의 장점 장점</dt>
          <dd>
            <b>조합 가능성</b>: 여러 Modifier를 조합하여 다양한 변형 생성
          </dd>
          <dd>
            <b>명확한 의도</b>: 클래스 이름만 봐도 어떤 스타일이 적용되는지 예측
            가능
          </dd>
          <dd>
            <b>유지보수성</b>: 각 변형이 독립적으로 관리되어 수정 범위가 명확
          </dd>
          <dd>
            <b>재사용성</b>: 기본 컴포넌트 스타일을 재사용하면서 변형만 추가
          </dd>
        </dl>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">Button 컴포넌트</h2>
        <p className="mt_l">
          Button은 가장 기본적이면서도 다양한 변형이 필요한 컴포넌트입니다.
          <br />
          type(<code>primary</code>, <code>secondary</code>), size(
          <code>sm</code>, <code>md</code>, <code>lg</code>), state(
          <code>disabled</code>, <code>loading</code>) 등 여러 차원에서 변형이
          필요합니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">기본 Button 구조</h3>
          <p className="mt_m">Button 컴포넌트의 기본 스타일과 구조입니다.</p>
          <CodeBlock title="_button.scss" language="scss" className="mt_m">
            {`@use "../tokens/color" as color;
@use "../tokens/typography" as typo;
@use "../tokens/spacing" as spacing;
@use "../tokens/radius" as radius;

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 40px;
  padding: 10px 20px;
  font-size: typo.$font-size-base;
  font-weight: typo.$font-weight-medium;
  line-height: 1.5;
  border: 1px solid transparent;
  border-radius: radius.$radius-md;
  cursor: pointer;
  transition: all 0.15s ease-in-out;
  text-decoration: none;
  white-space: nowrap;

  &:hover {
    opacity: 0.85;
  }

  &:active {
    transform: translateY(1px);
  }

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(10, 88, 202, 0.25);
  }
}`}
          </CodeBlock>
          <p className="mt_ms">
            기본 Button 스타일에는 모든 버튼에 공통으로 적용될 스타일만
            정의합니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            Button Type Modifier (--primary, --secondary)
          </h3>
          <p className="mt_m">버튼의 타입에 따라 다른 색상을 적용합니다.</p>
          <CodeBlock title="_button.scss" language="scss" className="mt_m">
            {`// Primary 버튼
.button--primary {
  background-color: color.$color-primary;
  color: #ffffff;
  border-color: color.$color-primary;

  &:hover {
    background-color: color.$color-primary-dark;
    border-color: color.$color-primary-dark;
    opacity: 1;
  }

  &:focus {
    box-shadow: 0 0 0 0.2rem rgba(10, 88, 202, 0.25);
  }
}

// Secondary 버튼
.button--secondary {
  background-color: #ffffff;
  color: color.$color-primary;
  border-color: color.$color-primary;

  &:hover {
    background-color: color.$color-primary;
    color: #ffffff;
    border-color: color.$color-primary;
    opacity: 1;
  }

  &:focus {
    box-shadow: 0 0 0 0.2rem rgba(10, 88, 202, 0.25);
  }
}

// Success 버튼
.button--success {
  background-color: color.$color-success;
  color: #ffffff;
  border-color: color.$color-success;

  &:hover {
    background-color: color.$color-success-dark;
    border-color: color.$color-success-dark;
    opacity: 1;
  }

  &:focus {
    box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);
  }
}`}
          </CodeBlock>
          <p className="mt_ms">
            각 타입은 독립적으로 정의되므로, 새로운 타입을 추가하거나 기존
            타입을 수정할 때 다른 타입에 영향을 주지 않습니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">Button Size Modifier (--sm, --md, --lg)</h3>
          <p className="mt_m">버튼의 크기를 조절하는 Modifier입니다.</p>
          <CodeBlock title="_button.scss" language="scss" className="mt_m">
            {`// Small 버튼
.button--sm {
  min-height: 32px;
  padding: 6px 12px;
  font-size: typo.$font-size-sm;
}

// Medium 버튼 (기본값)
.button--md {
  min-height: 40px;
  padding: 10px 20px;
  font-size: typo.$font-size-base;
}

// Large 버튼
.button--lg {
  min-height: 48px;
  padding: 12px 28px;
  font-size: typo.$font-size-lg;
}`}
          </CodeBlock>
          <p className="mt_ms">
            Size Modifier는 Type Modifier와 독립적으로 동작하므로,{" "}
            <code className="t_blue">button--primary--lg</code>처럼 조합하여
            사용할 수 있습니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">Button State (--disabled)</h3>
          <p className="mt_m">버튼의 상태를 나타내는 Modifier입니다.</p>
          <CodeBlock title="_button.scss" language="scss" className="mt_m">
            {`.button--disabled {
  background-color: #e9ecef !important;
  color: #6c757d !important;
  border-color: #e9ecef !important;
  opacity: 1;
  cursor: not-allowed;
  pointer-events: none;

  &:hover {
    background-color: #e9ecef !important;
    color: #6c757d !important;
    border-color: #e9ecef !important;
    opacity: 1;
    transform: none;
  }

  &:active {
    transform: none;
  }
}`}
          </CodeBlock>
          <p className="mt_ms">
            Disabled 상태는 다른 Modifier와 함께 사용되어도 정상적으로
            작동합니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">Button 사용 HTML 예시</h3>
          <p className="mt_m">
            정의한 Button 컴포넌트를 HTML에서 사용하는 방법입니다.
          </p>
          <CodeBlock title="HTML 예시" language="html" className="mt_m">
            {`<!-- Primary: lg, md, sm, md(disabled) -->
<div class="button-group">
  <button class="button button--primary button--lg">Primary Large</button>
  <button class="button button--primary button--md">Primary Medium</button>
  <button class="button button--primary button--sm">Primary Small</button>
  <button class="button button--primary button--md button--disabled">Primary Disabled</button>
</div>

<!-- Secondary: lg, md, sm, md(disabled) -->
<div class="button-group">
  <button class="button button--secondary button--lg">Secondary Large</button>
  <button class="button button--secondary button--md">Secondary Medium</button>
  <button class="button button--secondary button--sm">Secondary Small</button>
  <button class="button button--secondary button--md button--disabled">Secondary Disabled</button>
</div>

<!-- Success: lg, md, sm, md(disabled) -->
<div class="button-group">
  <button class="button button--success button--lg">Success Large</button>
  <button class="button button--success button--md">Success Medium</button>
  <button class="button button--success button--sm">Success Small</button>
  <button class="button button--success button--md button--disabled">Success Disabled</button>
</div>`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">상태별 Button 적용 예시</h3>
          <p className="mt_m t_blue">
            ※ 코드펜에서는 SCSS 파셜을 사용할 수 없으므로, 이 예시는 사용되는
            토큰만을 하나의 SCSS 파일에 모아 작성한 예제입니다.
          </p>
          <iframe
            className="codepen mt_m"
            height={500}
            style={{ width: "100%" }}
            scrolling="no"
            title="10.3. 상태별 Button 적용 예시"
            src="https://codepen.io/uxkm/embed/xbOxLex?default-tab=css%2Cresult&theme-id=dark"
            frameBorder="no"
            loading="lazy"
            allowTransparency
          >
            See the Pen{" "}
            <a href="https://codepen.io/uxkm/pen/xbOxLex">
              10.3. 상태별 Button 적용 예시
            </a>{" "}
            by UXKM (<a href="https://codepen.io/uxkm">@uxkm</a>) on{" "}
            <a href="https://codepen.io">CodePen</a>.
          </iframe>
          <p className="mt_ms">
            코드펜에서는 <code className="t_blue">@use</code>를 사용할 수
            없으므로, 모든 토큰과 컴포넌트 스타일을 하나의 SCSS 파일에
            작성합니다.
            <br />각 Type별로 <b>Size</b> (Large, Medium, Small)와{" "}
            <b>Disabled</b> 상태를 순서대로 보여줍니다.
          </p>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">Card 컴포넌트</h2>
        <p className="mt_l">
          Card는 콘텐츠를 그룹화하여 표시하는 컨테이너 컴포넌트입니다.
          <br />
          일관된 스타일과 적절한 여백, 그림자 효과를 통해 콘텐츠를 명확하게
          구분합니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">기본 Card 구조</h3>
          <p className="mt_m">Card 컴포넌트의 기본 스타일입니다.</p>
          <CodeBlock title="_card.scss" language="scss" className="mt_m">
            {`@use "../tokens/color" as color;
@use "../tokens/spacing" as spacing;
@use "../tokens/radius" as radius;

.card {
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: radius.$radius-lg;
  overflow: hidden;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
}

.card__header {
  padding: 1rem 1.25rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  background-color: rgba(0, 0, 0, 0.03);
}

.card__body {
  padding: 1.25rem;
  flex: 1;
}

.card__footer {
  padding: 0.75rem 1.25rem;
  border-top: 1px solid rgba(0, 0, 0, 0.125);
  background-color: rgba(0, 0, 0, 0.03);
}`}
          </CodeBlock>
          <p className="mt_ms">
            Card는 Header, Body, Footer로 구성되며, 각 영역은 선택적으로 사용할
            수 있습니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">Card Modifier</h3>
          <p className="mt_m">Card의 변형을 만드는 Modifier입니다.</p>
          <CodeBlock title="_card.scss" language="scss" className="mt_m">
            {`// Compact Card (작은 패딩)
.card--compact {
  .card__header,
  .card__body,
  .card__footer {
    padding: 0.75rem 1rem;
  }
}

// Bordered Card (테두리 강조)
.card--bordered {
  border-width: 2px;
  border-color: color.$color-primary;
}

// Shadow Card (그림자 강조)
.card--shadow {
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
}`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">Card 컴포넌트 적용 예시</h3>
          <p className="mt_m t_blue">
            ※ 코드펜에서는 SCSS 파셜을 사용할 수 없으므로, 이 예시는 사용되는
            토큰만을 하나의 SCSS 파일에 모아 작성한 예제입니다.
          </p>
          <iframe
            className="codepen mt_m"
            height={550}
            style={{ width: "100%" }}
            scrolling="no"
            title="10.3. Card 컴포넌트 적용 예시"
            src="https://codepen.io/uxkm/embed/LEZYjoG?default-tab=css%2Cresult&theme-id=dark"
            frameBorder="no"
            loading="lazy"
            allowTransparency
          >
            See the Pen{" "}
            <a href="https://codepen.io/uxkm/pen/LEZYjoG">
              10.3. Card 컴포넌트 적용 예시
            </a>{" "}
            by UXKM (<a href="https://codepen.io/uxkm">@uxkm</a>) on{" "}
            <a href="https://codepen.io">CodePen</a>.
          </iframe>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">Badge &amp; Tag 컴포넌트</h2>
        <p className="mt_l">
          Badge와 Tag는 작은 라벨이나 상태를 표시하는 컴포넌트입니다.
          <br />
          색상과 크기로 다양한 의미를 전달할 수 있습니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">Badge 컴포넌트</h3>
          <p className="mt_m">
            Badge는 작은 원형 또는 둥근 모서리의 라벨입니다.
          </p>
          <CodeBlock title="_badge.scss" language="scss" className="mt_m">
            {`@use "../tokens/color" as color;
@use "../tokens/typography" as typo;
@use "../tokens/spacing" as spacing;
@use "../tokens/radius" as radius;

.badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.8em 1em;
  font-size: 0.75em;
  font-weight: typo.$font-weight-semibold;
  line-height: 1;
  border-radius: radius.$radius-full;
  background-color: #6c757d;
  color: #ffffff;
  vertical-align: baseline;
}

// Badge Type Modifier
.badge--primary {
  background-color: color.$color-primary;
  color: #ffffff;
}

.badge--success {
  background-color: color.$color-success;
  color: #ffffff;
}

.badge--warning {
  background-color: color.$color-warning;
  color: #212529;
}

.badge--error {
  background-color: color.$color-error;
  color: #ffffff;
}`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">Tag 컴포넌트</h3>
          <p className="mt_m">Tag는 Badge보다 더 넓은 형태의 라벨입니다.</p>
          <CodeBlock title="_tag.scss" language="scss" className="mt_m">
            {`@use "../tokens/color" as color;
@use "../tokens/typography" as typo;
@use "../tokens/spacing" as spacing;
@use "../tokens/radius" as radius;

.tag {
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  font-size: typo.$font-size-sm;
  font-weight: typo.$font-weight-medium;
  border-radius: radius.$radius-md;
  background-color: #f8f9fa;
  color: #495057;
  border: 1px solid #dee2e6;
}

// Tag Type Modifier (Badge와 동일한 패턴)
.tag--primary {
  background-color: #cfe2ff;
  color: #084298;
  border-color: #b6d4fe;
}`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">Badge &amp; Tag 사용 HTML 예시</h3>
          <CodeBlock title="HTML" language="html" className="mt_l">
            {`<!-- Badge & Tag 사용 HTML 예시 -->
<div class="badge-group">
  <span class="badge">Default</span>
  <span class="badge badge--primary">Primary</span>
  <span class="badge badge--success">Success</span>
  <span class="badge badge--warning">Warning</span>
  <span class="badge badge--error">Error</span>
</div>

<div class="tag-group">
  <span class="tag">Default Tag</span>
  <span class="tag tag--primary">Primary Tag</span>
</div>`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">Badge &amp; Tag 컴포넌트 적용 예시</h3>
          <p className="mt_m t_blue">
            ※ 코드펜에서는 SCSS 파셜을 사용할 수 없으므로, 이 예시는 사용되는
            토큰만을 하나의 SCSS 파일에 모아 작성한 예제입니다.
          </p>
          <iframe
            className="codepen mt_m"
            height={450}
            style={{ width: "100%" }}
            scrolling="no"
            title="10.3. Badge & Tag 컴포넌트 적용 예시"
            src="https://codepen.io/uxkm/embed/azZbLaB?default-tab=css%2Cresult&theme-id=dark"
            frameBorder="no"
            loading="lazy"
            allowTransparency
          >
            See the Pen{" "}
            <a href="https://codepen.io/uxkm/pen/azZbLaB">
              10.3. Badge &amp; Tag 컴포넌트 적용 예시
            </a>{" "}
            by UXKM (<a href="https://codepen.io/uxkm">@uxkm</a>) on{" "}
            <a href="https://codepen.io">CodePen</a>.
          </iframe>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">Divider 컴포넌트</h2>
        <p className="mt_l">
          Divider는 콘텐츠를 시각적으로 구분하는 구분선입니다.
          <br />
          수평선, 수직선, 텍스트가 포함된 구분선 등 다양한 형태로 사용됩니다.
        </p>
        <CodeBlock title="_divider.scss" language="scss" className="mt_m">
          {`@use "../tokens/color" as color;
@use "../tokens/spacing" as spacing;

.divider {
  width: 100%;
  height: 1px;
  background-color: color.$color-border;
  border: none;
  margin: spacing.$spacing-4 0;
}

// 수직 Divider
.divider--vertical {
  width: 1px;
  height: 100%;
  margin: 0 spacing.$spacing-4;
}

// 텍스트가 포함된 Divider
.divider--with-text {
  display: flex;
  align-items: center;
  text-align: center;
  height: auto;
  margin: spacing.$spacing-4 0;

  &::before,
  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background-color: color.$color-border;
  }

  &::before {
    margin-right: spacing.$spacing-3;
  }

  &::after {
    margin-left: spacing.$spacing-3;
  }
}`}
        </CodeBlock>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">컴포넌트 조합</h2>
        <p className="mt_l">
          정의한 컴포넌트들을 조합하여 더 복잡한 UI를 만드는 방법입니다.
          <br />
          컴포넌트는 독립적으로 동작하면서도 함께 사용될 수 있어야 합니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">Card, Button, Badge 조합 HTML 예시</h3>
          <CodeBlock title="HTML 예시" language="html" className="mt_ml">
            {`<!-- Card, Button, Badge 조합 HTML 예시 -->
<div class="card-demo">
  <div class="card">
    <div class="card__header">
      <h3>프리미엄 플랜</h3>
      <span class="card__badge">Best</span>
    </div>
    <div class="card__body">
      <p class="card__price">₩29,000<span>/month</span></p>
      <p class="card__desc">Spacing & Radius 토큰을 활용해 카드의 여백과 모서리를 일관되게 관리합니다.</p>
    </div>
    <div class="card__footer">
      <button class="card__button">시작하기</button>
    </div>
  </div>
</div>`}
          </CodeBlock>
          <p className="mt_ms">
            각 컴포넌트는 독립적으로 동작하므로, 조합해도 스타일 충돌이 발생하지
            않습니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">컴퍼넌트 조합 예시</h3>
          <p className="mt_m t_blue">
            ※ 코드펜에서는 SCSS 파셜을 사용할 수 없으므로, 이 예시는 사용되는
            토큰만을 하나의 SCSS 파일에 모아 작성한 예제입니다.
          </p>
          <iframe
            className="codepen mt_m"
            height={500}
            style={{ width: "100%" }}
            scrolling="no"
            title="10.3. 컴퍼넌트 조합 예시"
            src="https://codepen.io/uxkm/embed/XJKWeOj?default-tab=css%2Cresult&theme-id=dark"
            frameBorder="no"
            loading="lazy"
            allowTransparency
          >
            See the Pen{" "}
            <a href="https://codepen.io/uxkm/pen/XJKWeOj">
              10.3. 컴퍼넌트 조합 예시
            </a>{" "}
            by UXKM (<a href="https://codepen.io/uxkm">@uxkm</a>) on{" "}
            <a href="https://codepen.io">CodePen</a>.
          </iframe>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">정리</h2>
        <p className="mt_l">
          핵심 UI 컴포넌트 구성에 대해 알아본 내용을 정리합니다.
        </p>
        <ul className="dot_lst mt_m indent_small">
          <li>
            <b>Modifier 패턴</b>: 기본 컴포넌트에 변형을 추가하는 체계적인 방법
          </li>
          <li>
            <b>Button 컴포넌트</b>: Type(--primary, --secondary), Size(--sm,
            --md, --lg), State(--disabled) Modifier
          </li>
          <li>
            <b>Card 컴포넌트</b>: Header, Body, Footer 구조와 다양한 Modifier
          </li>
          <li>
            <b>Badge &amp; Tag</b>: 작은 라벨과 상태 표시를 위한 컴포넌트
          </li>
          <li>
            <b>Divider</b>: 콘텐츠 구분을 위한 구분선 컴포넌트
          </li>
          <li>
            <b>컴포넌트 조합</b>: 독립적인 컴포넌트들을 조합하여 복잡한 UI 구성
          </li>
        </ul>
        <p className="mt_m">
          다음 페이지에서는 <b>폼과 인터랙티브 컴포넌트</b>를 구성하는 방법을
          알아봅니다.
        </p>
      </section>

      <figure className="img_figure mt_l">
        <img src={IMG.SCSS + "/10_scss_03.png"} alt="핵심 UI 컴포넌트" />
        <figcaption>핵심 UI 컴포넌트</figcaption>
      </figure>
    </>
  );
}

export default CoreUiComponentsPage;
