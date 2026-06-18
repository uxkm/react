import { usePageMeta } from "@/components/common/PageMeta";
import CodeBlock from "@/components/code/CodeBlock";
import { IMG } from "@/config/path";

const PAGE_LAYOUT = {
  mainClass: "css_cascading",
  type: "publishing",
  info: true,
  note: false,
  sideMenu: true,
  reference: true,
  contentList: true,
  depth3Last: false,
  bottomEditor: false,
};

const PAGE_DATA = {
  title: "CSS 상속과 캐스케이딩",
  description:
    "CSS 상속(Inheritance)은 부모 요소에서 자식 요소로 일부 스타일 속성이 자동으로 전달되는 메커니즘이며, 캐스케이딩(Cascading)은 여러 CSS 규칙이 동일한 HTML 요소에 적용될 때 우선순위를 결정하는 방식입니다. 이 페이지에서는 CSS 상속의 개념과 상속되는 속성의 특징, inherit, initial, unset, revert, all 키워드의 사용법, 캐스케이딩의 우선순위 결정 기준(중요도, 명시도, 소스 순서), 명시도(Specificity) 계산 방법을 함께 소개합니다.",
  keyword:
    "style, css, Cascading Style Sheets, 상속, Inheritance, 캐스케이딩, Cascading, inherit, initial, unset, revert, all, 중요도, Importance, 명시도, Specificity, 소스 순서",
};

function CssCascadingPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          CSS 상속은 부모 요소에서 자식 요소로 일부 스타일 속성이 자동으로
          전달되는 것을 의미합니다. 일반적으로 텍스트 관련 속성에 적용되며, 부모
          요소에서 설정된 스타일이 자식 요소에 적용됩니다.
        </p>
        <p className="mt_s">
          캐스케이딩은 여러 CSS 규칙이 동일한 HTML 요소에 적용될 때 우선순위를
          결정하는 방식으로, 중요도, 명시도, 소스 순서를 기준으로 합니다. 이를
          통해 스타일 충돌 시 우선 적용되는 스타일을 결정할 수 있습니다.
        </p>
        <p className="mt_s">
          상속은 부모 요소에서 자식 요소로 스타일을 전달하는 개념이며,
          캐스케이딩은 여러 스타일 규칙이 동일한 요소에 적용될 때 우선순위를
          결정하는 방식입니다. 이러한 개념을 이해하면 CSS를 보다 효율적으로
          활용할 수 있습니다.
        </p>
      </blockquote>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">상속(Inheritance)</h2>

        <blockquote className="uk_note mt_xl" role="note">
          <strong className="sound_only">상속(Inheritance) 요약 설명</strong>
          <ul className="dot_lst">
            <li>
              CSS의 일부 속성은 부모 요소에서 자식 요소로 상속됩니다. 이는 자식
              요소가 부모 요소의 일부 스타일을 자동으로 상속받게 됨을
              의미합니다.
            </li>
            <li>
              일반적으로 텍스트 관련 속성(글꼴, 글자 크기, 색상 등)은
              상속됩니다. 예를 들어, 부모 요소에{" "}
              <code>font-family: Arial;</code> 속성이 적용되어 있다면 자식
              요소에도 동일한 글꼴이 적용됩니다.
            </li>
            <li>
              하지만 모든 속성이 상속되는 것은 아닙니다. 배경 이미지, 너비,
              높이와 같은 레이아웃과 관련된 속성은 일반적으로 상속되지 않습니다.
            </li>
          </ul>
        </blockquote>

        <article className="tit_h3 indent mt_xl">
          <h3 className="ml_mn">inherit(상속) 키워드</h3>
          <p className="mt_m">
            현재 요소가 상속해야 하는 속성 값을 부모 요소의 속성 값으로
            설정합니다.
            <br />
            예를 들어, 텍스트의 크기를 상속하려면{" "}
            <code>font-size: inherit;</code>와 같이 사용할 수 있습니다.
          </p>
          <CodeBlock title="inherit keyword" language="css" className="mt_m">
            {`p {
  font-size: 16px;
}
p span {
  font-size: inherit; /* 부모 요소(<p>)의 font-size 속성을 상속 */
}`}
          </CodeBlock>
        </article>

        <article className="tit_h3 indent mt_xl">
          <h3 className="ml_mn">initial(초기) 키워드</h3>
          <p className="mt_m">
            속성을 해당 속성의 초기값으로 설정합니다.
            <br />
            즉, 요소의 스타일을 초기화하여 브라우저의 기본 스타일을 사용합니다.
            예를 들어, <code>color: initial;</code>을 사용하면 텍스트 색상이
            브라우저의 기본값으로 설정됩니다.
          </p>
          <CodeBlock title="initial keyword" language="css" className="mt_m">
            {`p {
  color: green;
}
p span {
  color: initial; /* 부모 color를 따르지 않고 속성의 초기값으로 설정 */
}`}
          </CodeBlock>
        </article>

        <article className="tit_h3 indent mt_xl">
          <h3 className="ml_mn">unset 키워드</h3>
          <p className="mt_m">
            상속된 속성의 경우 <code>inherit</code>과 동일하게 작동하고,
            상속되지 않은 속성의 경우 <code>initial</code>과 동일하게
            작동합니다.
            <br />
            즉, 상속된 속성은 부모 요소의 값으로 설정되고, 상속되지 않은 속성은
            초기값으로 설정됩니다.
          </p>
          <p className="mt_sm">
            아래 예제를 보면, 자식 요소(<code>&lt;span&gt;</code>)는 부모 요소(
            <code>&lt;p&gt;</code>)의 폰트 크기와 텍스트 색상을 상속받지만, 줄
            높이와 텍스트 정렬은 초기값으로 설정됩니다.
          </p>
          <CodeBlock title="unset keyword" language="css" className="mt_m">
            {`p {
  font-size: 16px;
  color: green;
}

p span {
  /* font-size, color는 상속된 부모 요소의 값으로 설정 */
  font-size: unset;
  color: unset;

  /* line-height, text-align은 부모에게 상속되지 않기 때문에 초기값으로 설정 */
  line-height: unset;
  text-align: unset;
}`}
          </CodeBlock>
        </article>

        <article className="tit_h3 indent mt_xl">
          <h3 className="ml_mn">revert 키워드</h3>
          <p className="mt_m">
            특정 속성의 모든 값을 해당 속성의 초기값으로 되돌립니다.
            <br />
            이는 <code>initial</code>과는 다르게, 상속 여부에 관계없이 모든
            속성을 초기값으로 설정합니다.
          </p>
          <CodeBlock title="revert keyword" language="css" className="mt_m">
            {`p span {
  color: revert; /* 상속 여부와 관계 없이 특정 속성을 초기값으로 설정 */
}`}
          </CodeBlock>
        </article>

        <article className="tit_h3 indent mt_xl">
          <h3 className="ml_mn">all 키워드</h3>
          <p className="mt_m">
            모든 속성을 한 번에 설정하는데 사용됩니다.
            <br />
            따라서, <code>all: inherit;</code>은 모든 스타일을 부모 요소의
            값으로 상속시키고, <code>all: initial;</code>은 모든 스타일을
            초기값으로 설정합니다.
          </p>
          <CodeBlock title="all keyword" language="css" className="mt_m">
            {`body {
  /* Global values */
  all: initial;
  all: inherit;
  all: unset;

  /* CSS Cascading and Inheritance Level 4 */
  all: revert;
}`}
          </CodeBlock>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">캐스케이딩(Cascading)</h2>

        <blockquote className="uk_note mt_xl" role="note">
          <strong className="sound_only">
            캐스케이딩(Cascading) 요약 설명
          </strong>
          <ul className="dot_lst">
            <li>
              캐스케이딩은 여러 CSS 규칙이 동일한 요소에 적용될 때 우선순위를
              결정하는 방식입니다.
            </li>
            <li>
              캐스케이딩의 우선순위는
              <b>중요도(Importance)</b>, <b>명시도(Specificity)</b>,{" "}
              <b>소스 순서(Source Order)</b> 세 가지 기준에 의해 결정되며,
              스타일 규칙이 충돌할 때 어떤 스타일이 우선적으로 적용되는지를
              결정합니다.
            </li>
            <li>
              캐스케이딩은 다양한 CSS 규칙들 사이의 우선순위를 이해하고, 원하는
              스타일을 적용하는 데 도움을 줍니다.
            </li>
          </ul>
        </blockquote>

        <article className="indent mt_xl">
          <h3 className="ml_mn">중요도(Importance)</h3>

          <ul className="dot_lst mt_m">
            <li>
              속성 값 뒤에 <code>!important</code> 키워드가 있는 경우, 해당
              속성은 다른 모든 것보다 우선시됩니다.
            </li>
            <li>
              일반적으로 <code>!important</code> 키워드는 사용을 지양해야 하며,{" "}
              <b className="t_blue">
                오버라이딩<sup className="sup">1)</sup>
              </b>
              을 어렵게 만들어 코드를 복잡하게 할 수 있습니다.
            </li>
          </ul>
          <p className="mt_m ex_box">
            <span className="t_blue">
              1) <b>오버라이딩</b>이란?
            </span>
            <br />
            동일한 요소에 여러 스타일 규칙이 적용될 때, 더 나중에 선언된 규칙이
            이전에 선언된 규칙을 덮어씁니다.
            <br />
            같은 속성에 대해 나중에 선언된 스타일이 먼저 선언된 스타일을
            덮어씌워 특정 요소에 적용된 스타일을 변경하거나 재정의할 수
            있습니다.
          </p>
        </article>

        <article className="indent mt_xl">
          <h3 className="ml_mn">명시도(Specificity)</h3>

          <ul className="dot_lst mt_m">
            <li>CSS 규칙의 선택자가 구체적일수록 우선순위가 높습니다.</li>
            <li>명시도는 일반적으로 다음과 같은 순서로 결정됩니다.</li>
          </ul>
          <ol className="ol_lst info_lst gap-column-important-s indent mt_m">
            <li className="font-15-important-before">
              <strong className="font-15-important mb_2 t_blue">
                인라인 스타일
              </strong>
              <p>
                HTML 요소에 직접 적용된 스타일은 가장 높은 명시도를 갖습니다.
              </p>
            </li>
            <li className="font-15-important-before">
              <strong className="font-15-important mb_2 t_blue">
                ID 선택자
              </strong>
              <p>
                <code>#</code>으로 시작하는 ID 선택자가 클래스 선택자보다
                우선합니다.
              </p>
            </li>
            <li className="font-15-important-before">
              <strong className="font-15-important mb_2 t_blue">
                클래스, 속성, 가상 선택자
              </strong>
              <p>
                <code>.className</code>, <code>[attr]</code>,{" "}
                <code>:not()</code> 등과 같은 선택자가 일반 요소 선택자보다
                우선합니다.
              </p>
            </li>
            <li className="font-15-important-before">
              <strong className="font-15-important mb_2 t_blue">
                요소 선택자
              </strong>
              <p>
                HTML 요소의 이름으로 된 선택자는 가장 낮은 명시도를 갖습니다.
              </p>
            </li>
          </ol>
        </article>

        <article className="indent mt_xl">
          <h3 className="ml_mn">소스 순서(Source Order)</h3>

          <ul className="dot_lst mt_m">
            <li>
              동일한 중요도와 명시도를 가진 규칙의 경우, 더 아래에 나오는 규칙이
              더 높은 우선순위를 갖습니다.
            </li>
            <li>
              따라서 소스 코드에서 더 나중에 선언되어 있는 규칙이 더 마지막에
              적용되어, 이전에 정의된 규칙을 덮어씁니다.
            </li>
          </ul>
        </article>
      </section>

      <figure className="img_figure indent mt_l">
        <img src={IMG.CSS + "/01_css_04.png"} alt="CSS 우선순위" />
        <figcaption className="reference">CSS 우선순위</figcaption>
      </figure>
    </>
  );
}

export default CssCascadingPage;
