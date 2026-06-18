import { usePageMeta } from "@/components/common/PageMeta";
import CodeBlock from "@/components/code/CodeBlock";
import { IMG } from "@/config/path";

const PAGE_LAYOUT = {
  mainClass: "css_apply",
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
  title: "CSS 선언방식",
  description:
    "CSS 선언 방식은 HTML 문서에 스타일을 적용하는 다양한 방법을 제공하며, 각 방식은 상황에 따라 적절한 선택이 필요합니다. 이 페이지에서는 내부 스타일 시트(Internal Style Sheet)를 통한 HTML 문서 내 스타일 정의, 외부 스타일 시트(External Style Sheet)를 통한 별도 CSS 파일 연결 방식, 인라인 스타일(Inline Style)을 통한 요소별 직접 스타일 적용, @import를 사용한 스타일 시트 포함 방법을 함께 소개합니다.",
  keyword:
    "style, css, Cascading Style Sheets, 선언 방법, 인라인 스타일, 내부 스타일, 외부 스타일, Inline style, Internal style, External style",
};

function CssApplyPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          CSS 선언 방식에는
          <strong>내부 스타일 시트</strong>, <strong>외부 스타일 시트</strong>,{" "}
          <strong>인라인 스타일</strong>, 그리고
          <strong>@import를 사용한 스타일 시트 </strong>가 있습니다.
          <br />각 방식은 HTML 요소에 스타일을 적용하는 다양한 방법을 제공하며,
          상황에 따라 적절한 방법을 선택할 수 있습니다.
        </p>
      </blockquote>

      <section className="indent mt_xxl">
        <h2 className="ml_mn">내부 스타일 시트(Internal Style Sheet)</h2>

        <ul className="dot_lst mt_l">
          <li>
            내부 스타일 방식은 HTML 문서 내의 <code>&lt;head&gt;</code> 요소에{" "}
            <code>&lt;style&gt;</code> 요소를 사용하여 CSS 코드를 직접 작성하는
            방식입니다.
            <br />
          </li>
          <li>
            <code>&lt;head&gt;</code> 요소에 넣는 것이 정석이지만, HTML5.2
            권고안(2017년 12월 14일 발표)에 따르면 <code>&lt;body&gt;</code>{" "}
            안에 <code>&lt;style&gt;</code>
            사용이 가능하다고 명시됩니다.
          </li>
          <li>
            이 방법은 한 HTML 문서 내에서만 해당하는 스타일을 정의할 때
            사용됩니다.
          </li>
        </ul>
        <CodeBlock
          title="Internal Style Sheet"
          language="html"
          className="mt_m"
        >
          {`<head>
  <style type="text/css">
    h1 {font-size:20px}
    p {font-size:16px}
  </style>
</head>`}
        </CodeBlock>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">
          외부 스타일 시트(External Style Sheet) <strong>[권장방식]</strong>
        </h2>

        <ul className="dot_lst mt_l">
          <li>
            별도의 CSS 파일을 만들고, HTML 문서 내의 <code>&lt;head&gt;</code>{" "}
            요소에 <code>&lt;link&gt;</code> 요소를 이용하여 CSS 파일을 연결하는
            방식입니다.
          </li>
          <li>
            외부 스타일 시트는 웹 사이트 전체의 스타일을 하나의 파일에서 관리할
            수 있게 해주며, 여러 HTML 문서에서 동일한 스타일을 쉽게 적용할 수
            있도록 도와줍니다.
          </li>
          <li className="t_blue">
            <strong>
              현재 권장하는 방식이며, 유지 보수를 용이하게 하고 안정성을
              확보하는 가장 좋은 방법입니다.
            </strong>
          </li>
        </ul>
        <CodeBlock
          title="External Style Sheet"
          language="html"
          className="mt_m"
        >
          {`<head>
  <link rel="stylesheet" type="text/css" href="reset.css">
</head>`}
        </CodeBlock>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn">인라인 스타일(Inline style)</h2>

        <ul className="dot_lst mt_l">
          <li>
            HTML 요소에 직접 style 속성을 사용하여 스타일을 지정하는 방식입니다.
          </li>
          <li className="t_red">
            이 방식은 한 번 설정된 스타일을 변경하기가 어려울 수 있으며, 이로
            인해 스타일 시트를 사용하는 많은 이점을 잃게 될 수 있기 때문에 꼭
            필요한 경우에만 사용해야 합니다.
          </li>
          <li>
            동일한 HTML 요소에 다른 방식의 style을 적용해도 인라인 스타일 방식이
            우선 적용됩니다.
          </li>
          <li>이 방법은 특정 요소에만 스타일을 적용하고자 할 때 사용됩니다.</li>
        </ul>
        <CodeBlock title="Inline style CSS" language="html" className="mt_m">
          {`<body>
  <h1 style="font-size:20px;">uxkm.github.io</h1>
</body>`}
        </CodeBlock>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn">
          @import 규칙을 이용한 스타일 시트 (Imported Style Sheet)
        </h2>

        <ul className="dot_lst mt_l">
          <li>
            내부(Internal) 또는 외부(External) 스타일 시트 내에 다른 CSS 파일을
            가져와서 사용하는 방식입니다. 요약하면, CSS 파일 내부에서 다른 CSS
            파일을 가져와서 사용하는 방식입니다.
          </li>
          <li>
            이 방식은 CSS를 적용하기 전에 CSS 문서의 최상위에 선언하여 불러와야
            합니다.
          </li>
          <li>
            이 방법은 여러 개의 CSS 파일을 사용하지만 하나의 파일로 합쳐져
            전달될 때 유용합니다.
          </li>
        </ul>
        <CodeBlock title="@import style CSS" language="html" className="mt_m">
          {`<!-- 내부 스타일 시트(Internal Style Sheet)에 사용하는 방법 -->
<head>
  <style type="text/css">
    @import url('reset.css');
    h1 {font-size:20px}
    p {font-size:16px}
  </style>
</head>`}
        </CodeBlock>
        <CodeBlock title="@import style CSS" language="css" className="mt_m">
          {`/* 외부 스타일 시트(External Style Sheet)에 사용하는 방법 */
@import url('reset.css');
h1 {font-size:20px}
p {font-size:16px}`}
        </CodeBlock>
      </section>

      <figure className="img_figure indent mt_l">
        <img src={IMG.CSS + "/01_css_03.png"} alt="CSS 적용 방법" />
        <figcaption className="reference">CSS 적용 방법</figcaption>
      </figure>
    </>
  );
}

export default CssApplyPage;
