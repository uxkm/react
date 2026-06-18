import { usePageMeta } from "@/components/common/PageMeta";
import CodeBlock from "@/components/code/CodeBlock";
import { IMG } from "@/config/path";

const PAGE_LAYOUT = {
  mainClass: "css_syntax",
  type: "publishing",
  info: true,
  note: false,
  sideMenu: true,
  reference: true,
  contentList: false,
  depth3Last: false,
  bottomEditor: false,
};

const PAGE_DATA = {
  title: "CSS의 문법",
  description:
    "CSS 문법은 선택자(selector), 속성(property), 값(value)의 조합으로 이루어진 규칙들의 집합으로, HTML 요소를 선택하고 해당 요소에 원하는 스타일을 적용하는 방법을 정의합니다. 이 페이지에서는 CSS 기본 구문의 구성 요소(선택자, 속성, 값, 선언), 선택자의 종류와 사용법, 속성과 값의 관계, 선언부의 구조와 작성 방법을 함께 소개합니다.",
  keyword:
    "style, css, Cascading Style Sheets, 문법, 선택자, 선언부, selector, declaration",
};

function CssSyntaxPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          CSS의 문법은
          <strong>선택자(selector)</strong>, <strong>속성(property)</strong>,{" "}
          <strong>값(value)</strong>의 조합으로 이루어진 규칙들의 집합으로, HTML
          요소를 선택하고 해당 요소에 원하는 스타일을 적용하는 방법을
          정의합니다.
          <br />
          선택자(selector)는 HTML 요소를 지정하며, 속성(property)은 해당 요소에
          적용할 스타일 속성을 정의하고, 값(value)은 각 속성에 대한 설정값을
          나타냅니다. 이러한 규칙들은 중괄호로 묶인 선언 블록으로 구성되어
          있으며, HTML 요소와 스타일을 연결하여 디자인에 맞게 웹 페이지의 모양과
          느낌을 조절합니다.
        </p>
        <p className="mt_s">
          속성(property)은 하나 이상의 값(value)을 가질 수 있으며, 이 값들은
          세미콜론(;)으로 구분하여 나열됩니다. 모든 [속성-값] 쌍은 중괄호(
          <code>{"{ }"}</code>)로 둘러싸여 하나의 규칙을 형성합니다.
        </p>
      </blockquote>

      <section className="mt_xxl indent">
        <h2 className="ml_mn t_blue">CSS 기본 구문</h2>
        <ol className="ol_lst info_lst mt_l">
          <li className="weight-600-before">
            <strong>선택자(Selector)</strong>
            <p>
              CSS는 HTML 요소를 선택하기 위해 선택자를 사용합니다. 선택자는
              스타일을 적용할 HTML 요소를 지정하는 역할을 합니다. 선택자는 HTML
              요소의 태그 이름, 클래스, 아이디 등으로 지정할 수 있습니다.
              <br />
              예를 들어, <code>p</code>, <code>.class-name</code>,{" "}
              <code>#id-name</code>과 같이 사용할 수 있습니다.
            </p>
          </li>
          <li className="weight-600-before">
            <strong>속성(Property)</strong>
            <p>
              CSS 규칙 안에는 선택한 HTML 요소에 적용할 스타일 속성을
              정의합니다. 이는 폰트, 색상, 배경, 여백, 테두리 등 다양한 스타일링
              요소를 포함합니다.
              <br />
              예를 들어, <code>margin</code>, <code>font-size</code>,{" "}
              <code>color</code>, <code>background-color</code>,{" "}
              <code>border</code> 등이 속성에 해당합니다.
            </p>
          </li>
          <li className="weight-600-before">
            <strong>값(Value)</strong>
            <p>
              속성에 대한 설정값을 값으로 정의합니다. 이 값은 해당 속성에 적용될
              실제 스타일의 속성을 지정합니다.
              <br />
              예를 들어, <code>color</code> 속성의 값으로는 색상 이름(
              <code>red</code>, <code>green</code>, <code>blue</code> 등), RGB
              값(<code>rgb(255,0,0)</code>, <code>rgb(0,255,0)</code>,{" "}
              <code>rgb(0,0,255)</code> 등), HEX(<code>#ff0000</code>,{" "}
              <code>#00ff00</code>, <code>#0000ff</code> 등) 코드 등을 사용할 수
              있습니다.
            </p>
          </li>
          <li className="weight-600-before">
            <strong>선언(Declaration)</strong>
            <p>
              선택자와 속성-값의 쌍이 하나의 규칙을 이룹니다. 이를 선언이라고
              합니다.
              <br />각 선언은 선택자에 적용할 스타일을 정의합니다. 선언은 중괄호{" "}
              <code>{"{}"}</code>로 묶여 있습니다.
            </p>
          </li>
          <li className="weight-600-before">
            <strong>규칙(Rule)</strong>
            <p>
              CSS 규칙은 선택자와 선언의 조합으로 이루어집니다. 이 규칙은
              스타일을 특정 HTML 요소에 적용하는 방법을 정의합니다.
              <br />각 규칙은 선택자와 중괄호로 묶인 선언 블록으로 구성됩니다.
            </p>
          </li>
        </ol>
      </section>

      <section className="mt_xxl indent">
        <h2 className="ml_mn t_blue">CSS 구문 예제</h2>

        <p className="mt_l">
          다음은 <code>&lt;p&gt;</code> 태그에 스타일을 정의하는 CSS의 기본 구문
          예제입니다.
        </p>
        <CodeBlock title="CSS Syntax" language="css" className="mt_m">
          {`p {
  font-size: 16px;
  color: blue;
}`}
        </CodeBlock>
        <p className="mt_m">
          이 규칙은 모든 <code>&lt;p&gt;</code> 태그에 대해 글자 색을
          파란색으로, 글자 크기를 16픽셀로 설정합니다.
          <br />이 규칙의 각 항목에 대한 설명은 다음과 같습니다.
        </p>
        <figure className="img_figure mt_m">
          <img
            src={IMG.CSS + "/cssStart/css_syntax.svg"}
            alt="CSS 구문 설명"
            className="max-w650"
          />
          <figcaption>[CSS 구문 설명]</figcaption>
        </figure>
      </section>

      <figure className="img_figure indent mt_l">
        <img src={IMG.CSS + "/01_css_02.png"} alt="CSS 문법" />
        <figcaption className="reference">CSS 문법</figcaption>
      </figure>
    </>
  );
}

export default CssSyntaxPage;
