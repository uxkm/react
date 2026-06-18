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
  title: "폼과 인터랙티브 컴포넌트",
  description:
    "폼 요소와 인터랙티브 컴포넌트(Input, Select, Checkbox, Radio)를 SCSS로 구성하는 방법을 알아봅니다. Focus, Error, Disabled 상태 관리와 Helper/Error Message를 포함합니다.",
  keyword:
    "폼 컴포넌트, form component, input scss, checkbox radio, form validation, scss 상태 관리",
};

function FormInteractiveComponentsPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          폼과 인터랙티브 컴포넌트는 <b>여러 상태를 가질 수 있어</b> 스타일
          관리가 복잡합니다.
          <br />
          초급자가 가장 헷갈려하는 부분이지만,{" "}
          <b>상태를 클래스 구조로 체계적으로 표현</b>하면 명확하게 관리할 수
          있습니다.
          <br />
          상태가 많을수록 SCSS 구조가 왜 중요한지 체감할 수 있는 영역입니다.
        </p>
        <p className="mt_s">
          이 페이지에서는 Input, Select, Checkbox, Radio 컴포넌트와 Focus,
          Error, Disabled 상태 관리, Helper/Error Message를 상세히 알아봅니다.
        </p>
      </blockquote>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">폼 컴포넌트 상태 관리</h2>
        <p className="mt_l">
          폼 컴포넌트는 <b>여러 상태를 동시에 가질 수 있습니다</b>.
          <br />
          예를 들어, <b>Input</b>은 <i className="t_blue">Focus</i> 상태이면서
          동시에 <i className="t_red">Error</i> 상태일 수 있습니다.
          <br />
          상태를 클래스 구조로 명확하게 표현하면, 각 상태의 스타일을 독립적으로
          관리할 수 있고 조합도 가능합니다.
        </p>

        <dl className="dl_dot_lst mt_l">
          <dt className="font-16 mb_s">상태 클래스 구조</dt>
          <dd>
            <b>기본 상태</b>: <code className="t_blue">.input</code> - 기본
            스타일
          </dd>
          <dd>
            <b>Focus 상태</b>: <code className="t_blue">:focus</code> 또는{" "}
            <code className="t_blue">.input--focused</code>
          </dd>
          <dd>
            <b>Error 상태</b>: <code className="t_blue">.input--error</code> -
            유효성 검사 실패
          </dd>
          <dd>
            <b>Disabled 상태</b>: <code className="t_blue">:disabled</code> 또는{" "}
            <code className="t_blue">.input--disabled</code>
          </dd>
          <dd>
            <b>Success 상태</b>: <code className="t_blue">.input--success</code>{" "}
            - 유효성 검사 통과
          </dd>
        </dl>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">Input 컴포넌트</h2>
        <p className="mt_l">
          Input은 가장 기본적인 폼 요소입니다.
          <br />
          텍스트 입력 필드의 다양한 상태와 크기를 체계적으로 관리하는 방법을
          알아봅니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">기본 Input 스타일</h3>
          <p className="mt_m">Input의 기본 스타일을 정의합니다.</p>
          <CodeBlock title="_input.scss" language="scss" className="mt_m">
            {`@use "../tokens/color" as color;
@use "../tokens/typography" as typo;
@use "../tokens/spacing" as spacing;
@use "../tokens/radius" as radius;

.input {
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: typo.$font-size-base;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #ffffff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: radius.$radius-md;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &::placeholder {
    color: #6c757d;
    opacity: 1;
  }

  &:focus {
    color: #212529;
    background-color: #ffffff;
    border-color: #86b7fe;
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
  }
}`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">Input Focus 상태</h3>
          <p className="mt_m">Input이 포커스를 받았을 때의 스타일입니다.</p>
          <CodeBlock title="_input.scss" language="scss" className="mt_m">
            {`.input {
  // ... 기본 스타일

  &:focus {
    color: #212529;
    background-color: #ffffff;
    border-color: #86b7fe;
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
  }

  // 또는 클래스 기반으로 관리
  &.input--focused {
    border-color: #86b7fe;
    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
  }
}`}
          </CodeBlock>
          <p className="mt_ms">
            Focus 상태에서는 테두리 색상을 변경하고 그림자를 추가하여 사용자의
            주의를 끕니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">Input Error 상태</h3>
          <p className="mt_m">입력값이 유효하지 않을 때의 스타일입니다.</p>
          <CodeBlock title="_input.scss" language="scss" className="mt_m">
            {`.input--error {
  border-color: #dc3545;

  &:focus {
    border-color: #dc3545;
    box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.25);
  }
}`}
          </CodeBlock>
          <p className="mt_ms">
            Error 상태일 때도 Focus 상태와 조합될 수 있도록 스타일을 정의합니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">Input Disabled 상태</h3>
          <p className="mt_m">Input이 비활성화되었을 때의 스타일입니다.</p>
          <CodeBlock title="_input.scss" language="scss" className="mt_m">
            {`.input:disabled,
.input--disabled {
  background-color: #e9ecef;
  color: #6c757d;
  cursor: not-allowed;
  opacity: 1;

  &:focus {
    border-color: color.$color-border;
    box-shadow: none;
  }
}`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">Input Size Modifier</h3>
          <p className="mt_m">Input의 크기를 조절하는 Modifier입니다.</p>
          <CodeBlock title="_input.scss" language="scss" className="mt_m">
            {`.input--sm {
  min-height: 31px;
  padding: 0.25rem 0.5rem;
  font-size: typo.$font-size-sm;
  border-radius: 0.2rem;
}

.input--lg {
  min-height: 48px;
  padding: 0.5rem 1rem;
  font-size: typo.$font-size-lg;
  border-radius: 0.3rem;
}`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">Input 컴포넌트 적용 예시</h3>
          <p className="mt_m t_blue">
            ※ 코드펜에서는 SCSS 파셜을 사용할 수 없으므로, 이 예시는 사용되는
            토큰만을 하나의 SCSS 파일에 모아 작성한 예제입니다.
          </p>
          <iframe
            className="codepen mt_m"
            height={860}
            style={{ width: "100%" }}
            scrolling="no"
            title="10.4. Input 컴포넌트 적용 예시"
            src="https://codepen.io/uxkm/embed/dPXyZmQ?default-tab=css%2Cresult&theme-id=dark"
            frameBorder="no"
            loading="lazy"
            allowTransparency
          >
            See the Pen{" "}
            <a href="https://codepen.io/uxkm/pen/dPXyZmQ">
              10.4. Input 컴포넌트 적용 예시
            </a>{" "}
            by UXKM (<a href="https://codepen.io/uxkm">@uxkm</a>) on{" "}
            <a href="https://codepen.io">CodePen</a>.
          </iframe>
          <p className="mt_ms">
            코드펜에서는 <code className="t_blue">@use</code>를 사용할 수
            없으므로, 모든 토큰과 컴포넌트 스타일을 하나의 SCSS 파일에
            작성합니다.
            <br />
            <b>기본 Input</b>, <b>Focus 상태</b>, <b>Error 상태</b>,{" "}
            <b>Disabled 상태</b>, <b>Size Modifier (Small, Medium, Large)</b>를
            순서대로 보여줍니다.
          </p>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">Select 컴포넌트</h2>
        <p className="mt_l">
          Select는 드롭다운 선택 메뉴를 제공하는 폼 요소입니다.
          <br />
          Input과 유사한 스타일을 공유하면서도 Select만의 특성을 고려해야
          합니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">기본 Select 스타일</h3>
          <p className="mt_m">Select의 기본 스타일을 정의합니다.</p>
          <CodeBlock title="_select.scss" language="scss" className="mt_m">
            {`@use "../tokens/color" as color;
@use "../tokens/spacing" as spacing;
@use "../tokens/radius" as radius;

.select {
  display: block;
  width: 100%;
  padding: 0.375rem 2.25rem 0.375rem 0.75rem;
  font-size: typo.$font-size-base;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 16px 12px;
  border: 1px solid #ced4da;
  border-radius: radius.$radius-md;
  cursor: pointer;
  appearance: none;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:focus {
    border-color: #86b7fe;
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
  }

  &:disabled {
    background-color: #e9ecef;
    color: #6c757d;
    cursor: not-allowed;
    opacity: 1;
  }
}`}
          </CodeBlock>
          <p className="mt_ms">
            Select는 <code className="t_blue">appearance: none</code>으로 기본
            스타일을 제거하고 커스텀 스타일을 적용합니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">Select 컴포넌트 적용 예시</h3>
          <p className="mt_m t_blue">
            ※ 코드펜에서는 SCSS 파셜을 사용할 수 없으므로, 이 예시는 사용되는
            토큰만을 하나의 SCSS 파일에 모아 작성한 예제입니다.
          </p>
          <iframe
            className="codepen mt_m"
            height={500}
            style={{ width: "100%" }}
            scrolling="no"
            title="10.4. Select 컴포넌트 적용 예시"
            src="https://codepen.io/uxkm/embed/pvbodOe?default-tab=css%2Cresult&theme-id=dark"
            frameBorder="no"
            loading="lazy"
            allowTransparency
          >
            See the Pen{" "}
            <a href="https://codepen.io/uxkm/pen/pvbodOe">
              10.4. Select 컴포넌트 적용 예시
            </a>{" "}
            by UXKM (<a href="https://codepen.io/uxkm">@uxkm</a>) on{" "}
            <a href="https://codepen.io">CodePen</a>.
          </iframe>
          <p className="mt_ms">
            코드펜에서는 <code className="t_blue">@use</code>를 사용할 수
            없으므로, 모든 토큰과 컴포넌트 스타일을 하나의 SCSS 파일에
            작성합니다.
            <br />
            <b>기본 Select</b>, <b>Focus 상태</b>, <b>Disabled 상태</b>를
            순서대로 보여줍니다.
          </p>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">Checkbox & Radio 컴포넌트</h2>
        <p className="mt_l">
          Checkbox와 Radio는 선택 여부를 나타내는 인터랙티브 요소입니다.
          <br />
          기본 스타일을 커스터마이징하고, 체크/선택 상태를 시각적으로 표현해야
          합니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">Checkbox 컴포넌트</h3>
          <p className="mt_m">Checkbox의 커스텀 스타일을 만드는 방법입니다.</p>
          <CodeBlock title="_checkbox.scss" language="scss" className="mt_m">
            {`@use "../tokens/color" as color;
@use "../tokens/spacing" as spacing;
@use "../tokens/radius" as radius;

.checkbox {
  display: inline-flex;
  align-items: center;
  cursor: pointer;

  // 실제 input 숨기기
  input[type="checkbox"] {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
  }

  // 커스텀 체크박스
  .checkbox__box {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    margin-right: spacing.$spacing-2;
    border: 2px solid #ced4da;
    border-radius: radius.$radius-sm;
    background-color: #ffffff;
    transition: all 0.15s ease-in-out;
  }

  // 체크 상태
  input:checked + .checkbox__box {
    background-color: color.$color-primary;
    border-color: color.$color-primary;

    &::after {
      content: '✓';
      color: #ffffff;
      font-size: 14px;
      font-weight: bold;
    }
  }

  // Disabled 상태
  input:disabled + .checkbox__box {
    background-color: #e9ecef;
    border-color: #dee2e6;
    cursor: not-allowed;
    opacity: 1;

    &::after {
      border-color: #6c757d;
    }
  }
}`}
          </CodeBlock>
          <p className="mt_ms">
            실제 input은 숨기고, 커스텀 스타일의 체크박스를 만들어{" "}
            <code className="t_blue">:checked</code> 상태에 따라 스타일을
            변경합니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">Checkbox 컴포넌트 적용 예시</h3>
          <p className="mt_m t_blue">
            ※ 코드펜에서는 SCSS 파셜을 사용할 수 없으므로, 이 예시는 사용되는
            토큰만을 하나의 SCSS 파일에 모아 작성한 예제입니다.
          </p>
          <iframe
            className="codepen mt_m"
            height={500}
            style={{ width: "100%" }}
            scrolling="no"
            title="10.4. Checkbox 컴포넌트 적용 예시"
            src="https://codepen.io/uxkm/embed/PwzoOXw?default-tab=css%2Cresult&theme-id=dark"
            frameBorder="no"
            loading="lazy"
            allowTransparency
          >
            See the Pen{" "}
            <a href="https://codepen.io/uxkm/pen/PwzoOXw">
              10.4. Checkbox 컴포넌트 적용 예시
            </a>{" "}
            by UXKM (<a href="https://codepen.io/uxkm">@uxkm</a>) on{" "}
            <a href="https://codepen.io">CodePen</a>.
          </iframe>
          <p className="mt_ms">
            코드펜에서는 <code className="t_blue">@use</code>를 사용할 수
            없으므로, 모든 토큰과 컴포넌트 스타일을 하나의 SCSS 파일에
            작성합니다.
            <br />
            <b>기본 Checkbox</b>, <b>선택된 상태</b>, <b>Disabled 상태</b>를
            순서대로 보여줍니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">Radio 컴포넌트</h3>
          <p className="mt_m">
            Radio는 Checkbox와 유사하지만 원형 모양을 사용합니다.
          </p>
          <CodeBlock title="_radio.scss" language="scss" className="mt_m">
            {`.radio {
  display: inline-flex;
  align-items: center;
  cursor: pointer;

  input[type="radio"] {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
  }

  .radio__circle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    margin-right: spacing.$spacing-2;
    border: 2px solid #ced4da;
    border-radius: radius.$radius-full;
    background-color: #ffffff;
    transition: all 0.15s ease-in-out;
  }

  input:checked + .radio__circle {
    border-color: color.$color-primary;

    &::after {
      content: '';
      width: 10px;
      height: 10px;
      border-radius: radius.$radius-full;
      background-color: color.$color-primary;
    }
  }

  input:disabled + .radio__circle {
    background-color: #e9ecef;
    border-color: #dee2e6;
    cursor: not-allowed;
    opacity: 1;

    &::after {
      background-color: #6c757d;
    }
  }
}`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">Radio 컴포넌트 적용 예시</h3>
          <p className="mt_m t_blue">
            ※ 코드펜에서는 SCSS 파셜을 사용할 수 없으므로, 이 예시는 사용되는
            토큰만을 하나의 SCSS 파일에 모아 작성한 예제입니다.
          </p>
          <iframe
            className="codepen mt_m"
            height={500}
            style={{ width: "100%" }}
            scrolling="no"
            title="10.4. Radio 컴포넌트 적용 예시"
            src="https://codepen.io/uxkm/embed/JoKjOwa?default-tab=css%2Cresult&theme-id=dark"
            frameBorder="no"
            loading="lazy"
            allowTransparency
          >
            See the Pen{" "}
            <a href="https://codepen.io/uxkm/pen/JoKjOwa">
              10.4. Radio 컴포넌트 적용 예시
            </a>{" "}
            by UXKM (<a href="https://codepen.io/uxkm">@uxkm</a>) on{" "}
            <a href="https://codepen.io">CodePen</a>.
          </iframe>
          <p className="mt_ms">
            코드펜에서는 <code className="t_blue">@use</code>를 사용할 수
            없으므로, 모든 토큰과 컴포넌트 스타일을 하나의 SCSS 파일에
            작성합니다.
            <br />
            <b>기본 Radio</b>, <b>선택된 상태</b>, <b>Disabled 상태</b>를
            순서대로 보여줍니다.
          </p>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">Helper & Error Message</h2>
        <p className="mt_l">
          폼 필드 아래에 표시되는 도움말과 에러 메시지입니다.
          <br />
          사용자에게 입력 가이드를 제공하거나 에러를 안내하는 중요한 역할을
          합니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">Form Field 구조</h3>
          <p className="mt_m">Input과 메시지를 함께 관리하는 구조입니다.</p>
          <CodeBlock title="_form-field.scss" language="scss" className="mt_m">
            {`@use "../tokens/color" as color;
@use "../tokens/typography" as typo;
@use "../tokens/spacing" as spacing;

.form-field {
  margin-bottom: spacing.$spacing-4;
}

.form-field__label {
  display: block;
  margin-bottom: 0.5rem;
  font-size: typo.$font-size-sm;
  font-weight: typo.$font-weight-medium;
  color: #212529;
}

.form-field__input {
  width: 100%;
}

.form-field__helper {
  margin-top: 0.25rem;
  font-size: typo.$font-size-xs;
  color: #6c757d;
}

.form-field__error {
  margin-top: 0.25rem;
  font-size: typo.$font-size-xs;
  color: #dc3545;
  display: block;
}

// Error 상태일 때 Input 스타일
.form-field--error {
  .form-field__input {
    border-color: #dc3545;

    &:focus {
      border-color: #dc3545;
      box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.25);
    }
  }
}`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">HTML 구조 예시</h3>
          <p className="mt_m">위 SCSS 구조에 맞는 HTML 마크업입니다.</p>
          <CodeBlock title="HTML 예시" language="html" className="mt_m">
            {`<!-- HTML 구조 예시 -->
<div class="form-field">
  <label class="form-field__label">이메일</label>
  <input type="email" class="input form-field__input" />
  <span class="form-field__helper">올바른 이메일 형식을 입력해주세요.</span>
</div>

<div class="form-field form-field--error">
  <label class="form-field__label">비밀번호</label>
  <input type="password" class="input form-field__input input--error" />
  <span class="form-field__error">비밀번호는 8자 이상이어야 합니다.</span>
</div>`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">Helper & Error Message 적용 예시</h3>
          <p className="mt_m t_blue">
            ※ 코드펜에서는 SCSS 파셜을 사용할 수 없으므로, 이 예시는 사용되는
            토큰만을 하나의 SCSS 파일에 모아 작성한 예제입니다.
          </p>
          <iframe
            className="codepen mt_m"
            height={700}
            style={{ width: "100%" }}
            scrolling="no"
            title="10.4. Helper & Error Message 적용 예시"
            src="https://codepen.io/uxkm/embed/emzYeoy?default-tab=css%2Cresult&theme-id=dark"
            frameBorder="no"
            loading="lazy"
            allowTransparency
          >
            See the Pen{" "}
            <a href="https://codepen.io/uxkm/pen/emzYeoy">
              10.4. Helper &amp; Error Message 적용 예시
            </a>{" "}
            by UXKM (<a href="https://codepen.io/uxkm">@uxkm</a>) on{" "}
            <a href="https://codepen.io">CodePen</a>.
          </iframe>
          <p className="mt_ms">
            코드펜에서는 <code className="t_blue">@use</code>를 사용할 수
            없으므로, 모든 토큰과 컴포넌트 스타일을 하나의 SCSS 파일에
            작성합니다.
            <br />
            <b>Helper 메시지</b>와 <b>Error 메시지</b>가 포함된 폼 필드 예시를
            보여줍니다.
          </p>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">정리</h2>
        <p className="mt_l">
          폼과 인터랙티브 컴포넌트 구성에 대해 알아본 내용을 정리합니다.
        </p>
        <ul className="dot_lst mt_m indent_small">
          <li>
            <b>상태 클래스 구조</b>: 상태를 클래스로 명확하게 표현하여 관리
          </li>
          <li>
            <b>Input 컴포넌트</b>: Focus, Error, Disabled 상태와 Size Modifier
          </li>
          <li>
            <b>Select 컴포넌트</b>: Input과 유사한 스타일을 공유하면서
            Select만의 특성 고려
          </li>
          <li>
            <b>Checkbox & Radio</b>: 커스텀 스타일과 체크/선택 상태 표현
          </li>
          <li>
            <b>Helper & Error Message</b>: Form Field 구조로 Input과 메시지를
            함께 관리
          </li>
          <li>
            <b>상태 조합</b>: 여러 상태가 동시에 적용될 수 있도록 스타일 구성
          </li>
        </ul>
        <p className="mt_m">
          다음 페이지에서는 <b>테마 시스템(Light/Dark)</b>을 구성하는 방법을
          알아봅니다.
        </p>
      </section>

      <figure className="img_figure mt_l">
        <img src={IMG.SCSS + "/10_scss_04.png"} alt="폼 컴포넌트 상태 관리" />
        <figcaption>폼 컴포넌트 상태 관리</figcaption>
      </figure>
    </>
  );
}

export default FormInteractiveComponentsPage;
