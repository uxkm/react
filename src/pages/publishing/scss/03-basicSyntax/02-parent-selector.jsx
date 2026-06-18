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
  title: "부모 선택자 &의 역할과 사용법",
  description:
    "SCSS의 부모 선택자 참조 기호(&)를 상세히 알아봅니다. & 기호의 개념, 다양한 사용 패턴(가상 클래스, BEM 네이밍, 중첩된 선택자), 실제 활용 예시를 단계별로 설명합니다.",
  keyword: "scss 부모 선택자, scss &, scss ampersand, scss 부모 참조, scss BEM, scss 가상 클래스",
};

function ParentSelectorPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          <b>부모 선택자 참조 기호(&amp;)</b>는 SCSS에서{" "}
          <b>부모 선택자를 참조</b>할 때 사용하는 특수 기호입니다.
          <br />
          <code className="t_blue">&amp;</code>를 사용하면 가상 클래스(
          <code className="t_blue">:hover</code>,{" "}
          <code className="t_blue">:active</code> 등)를 중첩하거나, BEM 네이밍을
          간결하게 작성할 수 있습니다.
        </p>
        <p className="mt_s">
          이 페이지에서는 &amp; 기호의 기본 개념부터 다양한 사용 패턴, 실제 활용
          예시, 그리고 주의사항까지 상세히 알아봅니다.
        </p>
      </blockquote>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">부모 선택자 참조 기호(&amp;)란?</h2>
        <p className="mt_l">
          <code className="t_blue">&amp;</code> 기호는 SCSS에서{" "}
          <b>부모 선택자를 참조</b>할 때 사용하는 특수 문자입니다.
          <br />
          컴파일 시 <code className="t_blue">&amp;</code>는{" "}
          <b>부모 선택자로 치환</b>되어 최종 CSS 선택자가 완성됩니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">&amp; 기호의 기본 개념</h3>
          <p className="mt_m">
            <code className="t_blue">&amp;</code>는{" "}
            <b>&quot;현재 선택자의 부모&quot;</b>를 의미합니다.
            <br />
            중첩된 선택자 안에서 <code className="t_blue">&amp;</code>를
            사용하면 부모 선택자를 참조할 수 있습니다.
          </p>
          <CodeBlock
            title="& 기호 기본 사용법"
            language="css"
            className="mt_ms"
          >
            {`.button {
  padding: 8px 16px;
  background: #0a58ca;

  &:hover {
    background: #084298;
  }
}`}
          </CodeBlock>
          <p className="mt_ms">
            위 코드에서 <code className="t_blue">&amp;:hover</code>는{" "}
            <b>
              부모 선택자인 <code className="t_blue">.button</code>과 결합
            </b>
            되어 <code className="t_blue">.button:hover</code>가 됩니다.
          </p>
          <CodeBlock title="컴파일된 CSS" language="css" className="mt_ms">
            {`.button {
  padding: 8px 16px;
  background: #0a58ca;
}
.button:hover {
  background: #084298;
}`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">&amp; 없이 작성한 경우</h3>
          <p className="mt_m">
            <code className="t_blue">&amp;</code>를 사용하지 않으면 어떻게
            되는지 비교해봅니다.
          </p>
          <CodeBlock
            title="& 없이 작성 (잘못된 예시)"
            language="css"
            className="mt_ms"
          >
            {`.button {
  padding: 8px 16px;

  :hover {  // & 없이 작성
    background: #084298;
  }
}`}
          </CodeBlock>
          <CodeBlock
            title="컴파일된 CSS (의도와 다름)"
            language="css"
            className="mt_ms"
          >
            {`.button {
  padding: 8px 16px;
}
.button :hover {  // 공백이 있어서 자식 요소의 hover가 됨
  background: #084298;
}`}
          </CodeBlock>
          <p className="mt_ms">
            <code className="t_blue">&amp;</code> 없이 작성하면{" "}
            <b>공백이 생겨 자식 선택자</b>가 되어버립니다.
            <br />
            <code className="t_blue">.button :hover</code>는 &quot;button 안의
            모든 요소에 hover&quot;를 의미하므로, 의도한 대로 동작하지 않습니다.
          </p>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">&amp; 기호의 다양한 사용 패턴</h2>
        <p className="mt_l">
          <code className="t_blue">&amp;</code> 기호는{" "}
          <b>다양한 상황에서 활용</b>할 수 있습니다. 가장 많이 사용되는 패턴들을
          살펴봅니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">가상 클래스와 함께 사용</h3>
          <p className="mt_m">
            <code className="t_blue">&amp;</code>는{" "}
            <b>
              가상 클래스(<code>:hover</code>, <code>:active</code>,{" "}
              <code>:focus</code> 등)와 함께
            </b>{" "}
            자주 사용됩니다.
          </p>
          <CodeBlock
            title="가상 클래스 사용 예시"
            language="css"
            className="mt_ms"
          >
            {`.button {
  padding: 8px 16px;
  background: #0a58ca;
  color: #fff;

  &:hover {
    background: #084298;
  }

  &:active {
    background: #063c86;
  }

  &:focus {
    outline: 2px solid #0a58ca;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
}`}
          </CodeBlock>
          <p className="mt_ms">
            이렇게 작성하면 <b>버튼의 모든 상태 스타일을 한 곳에 모아</b> 관리할
            수 있어 유지보수가 편리합니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">가상 요소와 함께 사용</h3>
          <p className="mt_m">
            <code className="t_blue">&amp;</code>는{" "}
            <b>
              가상 요소(<code>::before</code>, <code>::after</code> 등)와도 함께
            </b>{" "}
            사용할 수 있습니다.
          </p>
          <CodeBlock
            title="가상 요소 사용 예시"
            language="css"
            className="mt_ms"
          >
            {`.button {
  position: relative;
  padding: 8px 16px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
  }

  &::after {
    content: "→";
    margin-left: 4px;
  }
}`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">BEM 네이밍과 함께 사용</h3>
          <p className="mt_m">
            <code className="t_blue">&amp;</code>는{" "}
            <b>
              <b className="t_blue">
                BEM<sup className="sup">1)</sup>
              </b>
              (Block Element Modifier) 방법론
            </b>
            과 함께 사용할 때 특히 유용합니다.
            <br />
            BEM의 요소(Element)와 수정자(Modifier)를 간결하게 작성할 수
            있습니다.
          </p>
          <p className="mt_ms ex_box">
            <span className="t_blue">
              1) <b>BEM</b>이란?
            </span>
            <br />
            BEM은 CSS 클래스 네이밍 방법론으로, <b>Block(블록)</b>,{" "}
            <b>Element(요소)</b>, <b>Modifier(수정자)</b> 세 가지 개념으로 구성
            요소를 명명합니다. 예를 들어{" "}
            <code className="t_blue">.card__title--large</code>에서{" "}
            <code className="t_blue">card</code>는 블록,{" "}
            <code className="t_blue">title</code>은 요소,{" "}
            <code className="t_blue">large</code>는 수정자입니다. BEM을 사용하면
            클래스 이름만 봐도 구조와 역할을 쉽게 파악할 수 있어 유지보수가
            쉬워집니다.
          </p>
          <p className="mt_m">
            BEM 방법론은{" "}
            <b>큰 프로젝트에서 CSS 클래스 이름을 체계적으로 관리</b>하기 위한
            방법입니다. SCSS의 <code className="t_blue">&amp;</code> 기호를
            사용하면 BEM 네이밍을 더욱 간결하고 읽기 쉽게 작성할 수 있습니다.
          </p>

          <div className="mt_l indent">
            <h4 className="ml_mn">BEM Element 작성</h4>
            <p className="mt_ms">
              <code className="t_blue">&amp;__element</code> 형태로 요소를
              작성합니다.
            </p>
            <CodeBlock
              title="BEM Element 예시"
              language="css"
              className="mt_ms"
            >
              {`.card {
  padding: 16px;

  &__title {
    font-size: 18px;
  }

  &__body {
    margin-top: 8px;
  }

  &__link {
    color: #0a58ca;
  }
}`}
            </CodeBlock>
            <p className="mt_ms">
              위 코드는 컴파일되면 <code className="t_blue">.card__title</code>,{" "}
              <code className="t_blue">.card__body</code>,{" "}
              <code className="t_blue">.card__link</code>가 됩니다.
            </p>
            <CodeBlock title="컴파일된 CSS" language="css" className="mt_ms">
              {`.card {
  padding: 16px;
}

.card__title {
  font-size: 18px;
}

.card__body {
  margin-top: 8px;
}

.card__link {
  color: #0a58ca;
}`}
            </CodeBlock>
          </div>
          <div className="mt_l indent">
            <h4 className="ml_mn">BEM Modifier 작성</h4>
            <p className="mt_ms">
              <code className="t_blue">&amp;--modifier</code> 형태로 수정자를
              작성합니다.
            </p>
            <CodeBlock
              title="BEM Modifier 예시"
              language="css"
              className="mt_ms"
            >
              {`.button {
  padding: 8px 16px;

  &--primary {
    background: #0a58ca;
    color: #fff;
  }

  &--secondary {
    background: #6c757d;
    color: #fff;
  }

  &--large {
    padding: 12px 24px;
    font-size: 18px;
  }
}`}
            </CodeBlock>
            <p className="mt_ms">
              위 코드는 컴파일되면{" "}
              <code className="t_blue">.button--primary</code>,{" "}
              <code className="t_blue">.button--secondary</code>,{" "}
              <code className="t_blue">.button--large</code>가 됩니다.
            </p>
            <CodeBlock title="컴파일된 CSS" language="css" className="mt_ms">
              {`.button {
  padding: 8px 16px;
}

.button--primary {
  background: #0a58ca;
  color: #fff;
}

.button--secondary {
  background: #6c757d;
  color: #fff;
}

.button--large {
  padding: 12px 24px;
  font-size: 18px;
}`}
            </CodeBlock>
          </div>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">복합 선택자와 함께 사용</h3>
          <p className="mt_m">
            <code className="t_blue">&amp;</code>는 <b>여러 선택자와 조합</b>
            하여 사용할 수 있습니다.
          </p>
          <CodeBlock title="복합 선택자 예시" language="css" className="mt_m">
            {`.button {
  padding: 8px 16px;

  // .button.active
  &.active {
    background: #28a745;
  }

  // .button.disabled
  &.disabled {
    opacity: 0.5;
  }

  // .button:hover.active
  &:hover.active {
    background: #218838;
  }
}`}
          </CodeBlock>
          <p className="mt_ms">
            이렇게 작성하면 <b>여러 클래스가 동시에 적용된 상태</b>의 스타일을
            명확하게 정의할 수 있습니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">문맥 선택자와 함께 사용</h3>
          <p className="mt_m">
            <code className="t_blue">&amp;</code>는{" "}
            <b>부모 요소의 선택자와 조합</b>하여 사용할 수도 있습니다.
          </p>
          <CodeBlock title="문맥 선택자 예시" language="css" className="mt_m">
            {`.card {
  padding: 16px;

  // .dark-theme .card
  .dark-theme & {
    background: #333;
    color: #fff;
  }

  // .sidebar .card
  .sidebar & {
    padding: 12px;
  }
}`}
          </CodeBlock>
          <p className="mt_ms">
            위 코드는 컴파일 시 아래 예제와 같은 형태로 변환됩니다.
          </p>
          <CodeBlock title="컴파일된 CSS" language="css" className="mt_ms">
            {`.card {
  padding: 16px;
}

.dark-theme .card {
  background: #333;
  color: #fff;
}

.sidebar .card {
  padding: 12px;
}`}
          </CodeBlock>
          <p className="mt_ms">
            <code className="t_blue">&amp;</code>를 뒤에 두면{" "}
            <b>부모 선택자가 뒤에 오는 형태</b>로 컴파일됩니다.
            <br />
            이렇게 하면 특정 컨텍스트에서만 적용되는 스타일을 명확하게 표현할 수
            있습니다.
          </p>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">실제 활용 예시</h2>
        <p className="mt_l">
          <code className="t_blue">&amp;</code> 기호를 활용한{" "}
          <b>실제 프로젝트 예시</b>를 살펴봅니다.
          <br />
          버튼, input, 드롭다운처럼 자주 사용하는 컴포넌트를 예제로 보면서, 이
          문법이 <b>실제 UI 설계와 컴포넌트 구조화에 어떻게 기여하는지</b> 감을
          잡을 수 있습니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">버튼 컴포넌트</h3>
          <p className="mt_m">
            다양한 상태와 변형을 가진 버튼 컴포넌트를{" "}
            <code className="t_blue">&amp;</code>로 작성하는 예시입니다.
          </p>
          <iframe
            className="codepen mt_m"
            height={700}
            style={{ width: "100%" }}
            scrolling="no"
            title="3.2. 부모 선택자 활용 버튼 컴포넌트"
            src="https://codepen.io/uxkm/embed/vEGqOpM?default-tab=css%2Cresult&theme-id=dark"
            frameBorder="no"
            loading="lazy"
            allowTransparency
          >
            See the Pen{" "}
            <a href="https://codepen.io/uxkm/pen/vEGqOpM">
              3.2. 부모 선택자 활용 버튼 컴포넌트
            </a>{" "}
            by UXKM (<a href="https://codepen.io/uxkm">@uxkm</a>) on{" "}
            <a href="https://codepen.io">CodePen</a>.
          </iframe>
          <p className="mt_ms">
            이렇게 작성하면 <b>버튼의 모든 변형과 상태를 한 곳에 모아</b> 관리할
            수 있어 유지보수가 편리합니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">input 컴포넌트</h3>
          <p className="mt_m">BEM 방법론을 사용한 input 컴포넌트 예시입니다.</p>
          <iframe
            className="codepen mt_m"
            height={600}
            style={{ width: "100%" }}
            scrolling="no"
            title="3.2. 부모 선택자 활용 input 컴포넌트"
            src="https://codepen.io/uxkm/embed/PwNrqRo?default-tab=css%2Cresult&theme-id=dark"
            frameBorder="no"
            loading="lazy"
            allowTransparency
          >
            See the Pen{" "}
            <a href="https://codepen.io/uxkm/pen/PwNrqRo">
              3.2. 부모 선택자 활용 input 컴포넌트
            </a>{" "}
            by UXKM (<a href="https://codepen.io/uxkm">@uxkm</a>) on{" "}
            <a href="https://codepen.io">CodePen</a>.
          </iframe>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">Dropdown / Select 컴포넌트</h3>
          <p className="mt_m">
            BEM 방법론을 사용한 Dropdown / Select 컴포넌트 예시입니다.
          </p>
          <iframe
            className="codepen mt_m"
            height={500}
            style={{ width: "100%" }}
            scrolling="no"
            title="3.2. 부모 선택자 활용 Dropdown / Select 컴포넌트"
            src="https://codepen.io/uxkm/embed/bNpPdyB?default-tab=css%2Cresult&theme-id=dark"
            frameBorder="no"
            loading="lazy"
            allowTransparency
          >
            See the Pen{" "}
            <a href="https://codepen.io/uxkm/pen/bNpPdyB">
              3.2. 부모 선택자 활용 Dropdown / Select 컴포넌트
            </a>{" "}
            by UXKM (<a href="https://codepen.io/uxkm">@uxkm</a>) on{" "}
            <a href="https://codepen.io">CodePen</a>.
          </iframe>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">&amp; 사용 시 주의사항</h2>
        <p className="mt_l">
          <code className="t_blue">&amp;</code>는 매우 유용한 기능이지만, 사용할
          때 <b>몇 가지 주의해야 할 점</b>들이 있습니다.
          <br />
          잘못 사용하면 의도하지 않은 CSS 선택자가 생성되거나, 컴파일 에러가
          발생할 수 있습니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">&amp; 앞뒤 공백 주의</h3>
          <p className="mt_m">
            <code className="t_blue">&amp;</code> 앞뒤의 공백에 따라{" "}
            <b>컴파일 결과가 달라집니다</b>.
          </p>
          <CodeBlock title="공백 차이 예시" language="css" className="mt_m">
            {`.button {
  // & 앞에 공백 없음: .button:hover
  &:hover {
    background: #084298;
  }

  // & 앞에 공백 있음: .button :hover (자식 선택자)
  :hover {
    background: #084298;
  }

  // & 뒤에 공백 없음: .button--primary
  &--primary {
    background: #0a58ca;
  }

  // & 뒤에 공백 있음: .button --primary (잘못된 선택자)
  & --primary {
    background: #0a58ca;
  }
}`}
          </CodeBlock>
          <p className="mt_ms">
            <code className="t_blue">&amp;</code>를 사용할 때는{" "}
            <b>앞뒤 공백을 주의</b>해야 합니다.
            <br />
            일반적으로 <code className="t_blue">&amp;</code> 앞뒤에는 공백을
            두지 않습니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">중첩 깊이 고려</h3>
          <p className="mt_m">
            <code className="t_blue">&amp;</code>를 여러 단계 중첩해서 사용하면{" "}
            <b>선택자가 복잡해질 수 있습니다</b>.
          </p>
          <CodeBlock title="복잡한 중첩 예시" language="css" className="mt_m">
            {`.card {
  &__title {
    &--large {
      &:hover {
        // .card__title--large:hover
        color: #0a58ca;
      }
    }
  }
}`}
          </CodeBlock>
          <p className="mt_ms">
            너무 깊게 중첩하면 가독성이 떨어지므로,{" "}
            <b>2-3단계를 넘지 않는 것</b>을 권장합니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">&amp;는 부모 선택자만 참조</h3>
          <p className="mt_m">
            <code className="t_blue">&amp;</code>는{" "}
            <b>직접 부모 선택자만 참조</b>합니다.
            <br />
            할아버지나 조상 선택자는 참조하지 않습니다.
          </p>
          <CodeBlock title="& 참조 범위 예시" language="css" className="mt_m">
            {`.page {
  .section {
    .card {
      // &는 .card만 참조 (직접 부모)
      &:hover {
        // .card:hover (페이지나 섹션은 참조 안 함)
        background: #f0f0f0;
      }
    }
  }
}`}
          </CodeBlock>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">정리</h2>
        <p className="mt_l">
          SCSS 부모 선택자 참조 기호(&amp;)에 대해 알아본 내용을 정리합니다.
        </p>
        <ul className="dot_lst mt_m indent_small">
          <li>
            <b>&amp;의 개념</b>: 부모 선택자를 참조하는 특수 기호, 컴파일 시
            부모 선택자로 치환됨
          </li>
          <li>
            <b>주요 사용 패턴</b>: 가상 클래스/요소, BEM 네이밍, 복합 선택자,
            문맥 선택자
          </li>
          <li>
            <b>BEM과의 조합</b>: &amp;__element, &amp;--modifier 형태로 BEM을
            간결하게 작성 가능
          </li>
          <li>
            <b>주의사항</b>: &amp; 앞뒤 공백 주의, 중첩 깊이 제한, 직접 부모만
            참조
          </li>
        </ul>
        <p className="mt_m">
          다음 페이지에서는 <b>SCSS의 주석 처리 방식</b>에 대해 자세히
          알아봅니다.
        </p>
      </section>

      <figure className="img_figure mt_l">
        <img src={IMG.SCSS + "/03_scss_02.png"} alt="SCSS 부모 선택자" />
        <figcaption>SCSS 부모 선택자</figcaption>
      </figure>
    </>
  );
}

export default ParentSelectorPage;
