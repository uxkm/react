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
  title: "Vue / React 컴포넌트 스타일 구조",
  description:
    "지금까지 배운 SCSS가 Vue/React 같은 프레임워크에서도 그대로 사용될 수 있음을 보여줍니다. 프레임워크 환경에서의 현실적인 스타일 구조와 컴포넌트 단위 SCSS 연결 방식을 설명합니다.",
  keyword:
    "vue scss, react scss, 프레임워크 scss, component scss, vue component style, react component style",
};

function FrameworkIntegrationPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          SCSS는 프레임워크에 종속되지 않는 독립적인 스타일 시스템입니다.
          <br />
          Vue나 React 같은 프레임워크를 사용하더라도,{" "}
          <b>지금까지 배운 SCSS 구조를 그대로 활용</b>할 수 있습니다.
          <br />
          컴포넌트 구조와 스타일 구조를 1:1로 맞추면, 유지보수성과 일관성을 크게
          향상시킬 수 있습니다.
        </p>
        <p className="mt_s">
          이 페이지에서는 Framework 공통 SCSS, 컴포넌트 단위 SCSS 연결 방식,
          Vue/React 컴포넌트 예시를 상세히 알아봅니다.
        </p>
      </blockquote>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">SCSS와 프레임워크의 관계</h2>
        <p className="mt_l">
          SCSS는 CSS 전처리기이므로, 어떤 프레임워크를 사용하든 상관없이
          동작합니다.
          <br />
          Vue의 Single File Component나 React의 CSS Module에서도 SCSS를 그대로
          사용할 수 있습니다.
          <br />
          중요한 것은 프레임워크가 아니라 <b>스타일 구조를 올바르게 설계</b>하는
          것입니다.
        </p>

        <dl className="dl_dot_lst mt_l">
          <dt className="font-16 mb_s">프레임워크별 SCSS 사용 방식</dt>
          <dd>
            <b>Vue</b>: Single File Component의{" "}
            <code className="t_blue">{`<style lang="scss">`}</code>에서 사용
          </dd>
          <dd>
            <b>React</b>: CSS Module, styled-components, 또는 일반 SCSS 파일로
            사용
          </dd>
          <dd>
            <b>공통점</b>: 모두 SCSS 문법과 구조를 그대로 사용 가능
          </dd>
        </dl>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">공통 SCSS 구조</h2>
        <p className="mt_l">
          프레임워크를 사용하더라도, tokens, base, layout, themes는 공통으로
          관리합니다.
          <br />이 부분은 모든 컴포넌트에서 공유하므로, 프로젝트 루트에 두고
          전역으로 import합니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">공통 SCSS 파일 구조</h3>
          <p className="mt_m">프로젝트 루트의 공통 SCSS 구조입니다.</p>
          <CodeBlock
            title="공통 SCSS 구조"
            language="plaintext"
            className="mt_m"
            lineNumbers={false}
          >
            {`scss/
  ├─ tokens/              // 공통 토큰
  │   ├─ _tokens-color.scss
  │   ├─ _tokens-typography.scss
  │   └─ _tokens.scss
  │
  ├─ base/                // 공통 기본 스타일
  │   ├─ _reset.scss
  │   └─ _base.scss
  │
  ├─ layout/              // 공통 레이아웃
  │   └─ _container.scss
  │
  ├─ themes/              // 공통 테마
  │   ├─ _theme-light.scss
  │   └─ _theme-dark.scss
  │
  └─ main.scss            // 전역 스타일`}
          </CodeBlock>
          <p className="mt_ms">
            이 구조는 프레임워크와 무관하게 동일하게 사용할 수 있습니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">전역 스타일 설정</h3>
          <p className="mt_m">
            프레임워크의 진입점(main.js, index.js 등)에서 공통 SCSS를
            import합니다.
          </p>
          <CodeBlock
            title="main.js (Vue)"
            language="javascript"
            className="mt_m"
          >
            {`// Vue main.js
import { createApp } from 'vue'
import App from './App.vue'
import './scss/main.scss'  // 전역 SCSS import

createApp(App).mount('#app')`}
          </CodeBlock>
          <CodeBlock title="index.js (React)" language="jsx" className="mt_m">
            {`// React index.js
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './scss/main.scss'  // 전역 SCSS import

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)`}
          </CodeBlock>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">컴포넌트 단위 SCSS</h2>
        <p className="mt_l">
          각 컴포넌트의 스타일은 컴포넌트 파일과 함께 두거나, 별도 SCSS 파일로
          분리할 수 있습니다.
          <br />
          컴포넌트 구조와 스타일 구조를 1:1로 맞추면 파일을 찾고 관리하기가
          쉬워집니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">Vue Single File Component</h3>
          <p className="mt_m">
            Vue에서는 컴포넌트 파일 내부에 SCSS를 작성할 수 있습니다.
          </p>
          <CodeBlock title="Button.vue" language="html" className="mt_m">
            {`<template>
  <button :class="['button', \`button--\${type}\`, \`button--\${size}\`]">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    type: { type: String, default: 'primary' },
    size: { type: String, default: 'md' }
  }
}
</script>

<style lang="scss" scoped>
@use '../../scss/tokens/tokens' as *;

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 40px;
  padding: 10px 20px;
  font-size: $font-size-base;
  font-weight: 500;
  line-height: 1.5;
  border: 1px solid transparent;
  border-radius: $radius-md;
  cursor: pointer;
  transition: all 0.15s ease-in-out;
  white-space: nowrap;

  &:hover {
    opacity: 0.85;
  }

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(10, 88, 202, 0.25);
  }
}

.button--primary {
  background-color: $color-primary;
  color: #ffffff;
  border-color: $color-primary;

  &:hover {
    background-color: $color-primary-dark;
    border-color: $color-primary-dark;
    opacity: 1;
  }
}
</style>`}
          </CodeBlock>
          <p className="mt_ms">
            <code className="t_blue">scoped</code> 속성을 사용하면 해당
            컴포넌트에만 스타일이 적용됩니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">Vue에서 별도 SCSS 파일 사용</h3>
          <p className="mt_m">컴포넌트별로 SCSS 파일을 분리하는 방법입니다.</p>
          <CodeBlock title="Button.vue" language="html" className="mt_m">
            {`<template>
  <button :class="['button', \`button--\${type}\`]">
    <slot></slot>
  </button>
</template>

<script>
export default { name: 'Button', props: { type: String } }
</script>

<style lang="scss" src="./Button.scss"></style>`}
          </CodeBlock>
          <CodeBlock title="Button.scss" language="scss" className="mt_m">
            {`@use '../../scss/tokens/tokens' as *;

.button {
  // Button 스타일
}`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">React CSS Module</h3>
          <p className="mt_m">React에서 CSS Module을 사용하는 방법입니다.</p>
          <CodeBlock title="Button.jsx" language="jsx" className="mt_m">
            {`import React from 'react'
import styles from './Button.module.scss'

const Button = ({ type = 'primary', children }) => {
  return (
    <button className={\`\${styles.button} \${styles[\`button--\${type}\`]}\`}>
      {children}
    </button>
  )
}

export default Button`}
          </CodeBlock>
          <CodeBlock
            title="Button.module.scss"
            language="scss"
            className="mt_m"
          >
            {`@use '../../scss/tokens/tokens' as *;

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 40px;
  padding: 10px 20px;
  font-size: $font-size-base;
  font-weight: 500;
  line-height: 1.5;
  border: 1px solid transparent;
  border-radius: $radius-md;
  cursor: pointer;
  transition: all 0.15s ease-in-out;
  white-space: nowrap;

  &:hover {
    opacity: 0.85;
  }

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(10, 88, 202, 0.25);
  }
}

.button--primary {
  background-color: $color-primary;
  color: #ffffff;
  border-color: $color-primary;

  &:hover {
    background-color: $color-primary-dark;
    border-color: $color-primary-dark;
    opacity: 1;
  }
}`}
          </CodeBlock>
          <p className="mt_ms">
            CSS Module을 사용하면 클래스명이 자동으로 고유하게 변환되어 스타일
            충돌을 방지할 수 있습니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">React 일반 SCSS 파일</h3>
          <p className="mt_m">
            일반 SCSS 파일을 import하여 사용하는 방법입니다.
          </p>
          <CodeBlock title="Button.jsx" language="jsx" className="mt_m">
            {`import React from 'react'
import './Button.scss'

const Button = ({ type = 'primary', children }) => {
  return (
    <button className={\`button button--\${type}\`}>
      {children}
    </button>
  )
}

export default Button`}
          </CodeBlock>
          <p className="mt_ms">
            일반 SCSS 파일은 전역으로 적용되므로, BEM 네이밍 컨벤션을 따르는
            것이 중요합니다.
          </p>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">프레임워크별 폴더 구조</h2>
        <p className="mt_l">
          프레임워크 프로젝트에서 SCSS 파일을 구성하는 방법입니다.
          <br />
          컴포넌트 구조와 스타일 구조를 1:1로 맞추면 찾고 관리하기가 쉬워집니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">Vue 프로젝트 구조</h3>
          <p className="mt_m">Vue 프로젝트의 일반적인 SCSS 구조입니다.</p>
          <CodeBlock
            title="Vue 프로젝트 구조"
            language="plaintext"
            className="mt_m"
            lineNumbers={false}
          >
            {`src/
  ├─ components/
  │   ├─ Button/
  │   │   ├─ Button.vue
  │   │   └─ Button.scss        // 선택적
  │   └─ Card/
  │       ├─ Card.vue
  │       └─ Card.scss
  │
  ├─ scss/                      // 공통 SCSS
  │   ├─ tokens/
  │   ├─ base/
  │   ├─ layout/
  │   └─ main.scss
  │
  └─ main.js`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">React 프로젝트 구조</h3>
          <p className="mt_m">React 프로젝트의 일반적인 SCSS 구조입니다.</p>
          <CodeBlock
            title="React 프로젝트 구조"
            language="plaintext"
            className="mt_m"
            lineNumbers={false}
          >
            {`src/
  ├─ components/
  │   ├─ Button/
  │   │   ├─ Button.jsx
  │   │   └─ Button.module.scss  // CSS Module
  │   └─ Card/
  │       ├─ Card.jsx
  │       └─ Card.module.scss
  │
  ├─ scss/                      // 공통 SCSS
  │   ├─ tokens/
  │   ├─ base/
  │   ├─ layout/
  │   └─ main.scss
  │
  └─ index.js`}
          </CodeBlock>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">토큰 공유하기</h2>
        <p className="mt_l">
          공통 토큰을 컴포넌트에서 사용하는 방법입니다.
          <br />
          절대 경로나 별칭(alias)을 사용하면 import 경로를 간단하게 유지할 수
          있습니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">상대 경로 사용</h3>
          <p className="mt_m">상대 경로로 토큰을 import하는 방법입니다.</p>
          <CodeBlock title="Button.scss" language="scss" className="mt_m">
            {`/* components/Button/Button.scss */
@use '../../scss/tokens/tokens' as *;`}
          </CodeBlock>
          <p className="mt_ms">
            상대 경로는 간단하지만, 폴더 구조가 변경되면 경로를 수정해야 합니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">절대 경로 또는 별칭 사용</h3>
          <p className="mt_m">
            별칭을 설정하여 더 간단하게 import하는 방법입니다.
          </p>
          <CodeBlock
            title="vite.config.js"
            language="javascript"
            className="mt_m"
          >
            {`/* vite.config.js (Vite 사용 시) */
export default {
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@scss': path.resolve(__dirname, 'src/scss')
    }
  }
}`}
          </CodeBlock>
          <CodeBlock
            title="Button.scss (별칭 사용)"
            language="scss"
            className="mt_m"
          >
            {`/* 별칭을 사용한 import */
@use '@scss/tokens/tokens' as *;`}
          </CodeBlock>
          <p className="mt_ms">
            별칭을 사용하면 폴더 구조가 변경되어도 import 경로를 유지할 수
            있습니다.
          </p>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">정리</h2>
        <p className="mt_l">
          프레임워크에서 SCSS 사용에 대해 알아본 내용을 정리합니다.
        </p>
        <ul className="dot_lst mt_m indent_small">
          <li>
            <b>SCSS 독립성</b>: SCSS는 프레임워크에 종속되지 않는 독립적 시스템
          </li>
          <li>
            <b>공통 SCSS</b>: tokens, base, layout, themes는 전역으로 공유
          </li>
          <li>
            <b>컴포넌트 SCSS</b>: 컴포넌트별로 분리하거나 컴포넌트 파일 내부에
            작성
          </li>
          <li>
            <b>Vue</b>: Single File Component의{" "}
            <code className="t_blue">&lt;style&gt;</code> 또는 별도 SCSS 파일
          </li>
          <li>
            <b>React</b>: CSS Module 또는 일반 SCSS 파일
          </li>
          <li>
            <b>폴더 구조</b>: 컴포넌트 구조와 스타일 구조를 1:1로 맞추기
          </li>
          <li>
            <b>토큰 공유</b>: 상대 경로 또는 별칭으로 공통 토큰 import
          </li>
        </ul>
        <p className="mt_m">
          다음 페이지에서는 <b>실제 페이지 구성(종합 쇼케이스)</b>을 알아봅니다.
        </p>
      </section>

      <figure className="img_figure mt_l">
        <img src={IMG.SCSS + "/10_scss_07.png"} alt="컴포넌트 스타일 구조" />
        <figcaption>컴포넌트 스타일 구조</figcaption>
      </figure>
    </>
  );
}

export default FrameworkIntegrationPage;
