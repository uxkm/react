import { usePageMeta } from "@/components/common/PageMeta";
import CodeBlock from "@/components/code/CodeBlock";
import { IMG } from "@/config/path";

const PAGE_LAYOUT = {
  mainClass: "html_element",
  type: "publishing",
  info: true,
  note: false,
  sideMenu: true,
  reference: true,
  contentList: true,
  depth3Last: false,
  bottomEditor: true,
};

const PAGE_DATA = {
  title: "HTML 요소",
  description:
    "HTML 요소는 웹 페이지를 구성하는 기본 단위로, 콘텐츠에 구조와 의미를 부여하는 역할을 합니다. 대부분의 요소는 시작 태그와 종료 태그 사이에 콘텐츠가 위치하는 쌍(tag pair) 구조를 가지며, 일부 요소는 내용 없이 단독으로 사용되는 빈 요소(self-closing element)로 작성됩니다. 이 페이지에서는 HTML 문서 작성시 일반적으로 많이 사용되는 HTML 요소(Element)와 모든 요소에 적용할 수 있는 전역 속성(Global Attributes) 설명합니다.",
  keyword:
    "Markup, HTML 요소, 전역 속성, Global Attributes, attributes, attr, element",
};

function HtmlElementPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          HTML 요소는 <b>웹 페이지를 구성하는 기본적인 부분</b>으로,{" "}
          <b>
            시작 태그와 종료 태그로 둘러싸여 있으며, 각 요소는 콘텐츠를 정의하고
            필요에 따라 속성을 포함할 수 있습니다.
          </b>
          <br />
          또한, 요소들은 서로 중첩되어 부모-자식 관계를 형성하고 웹 페이지의
          구조를 구성합니다. 이러한 요소들은 브라우저에 의해 해석되어 사용자에게
          웹 페이지를 시각적으로 표현합니다.
        </p>
      </blockquote>

      <section className="indent mt_xxl">
        <h2 className="ml_mn">태그(Tags)와 콘텐츠(Content)</h2>
        <p className="mt_m">
          태그(Tags)는 HTML 문서에서 요소(Element)를 정의하는 데 사용되는 마크업
          기호입니다. HTML 문서의 구조를 형성하고 콘텐츠를 그룹화하여 웹
          페이지를 설계하는 데 사용됩니다.
          <br />각 태그는 <b>시작 태그</b>(opening tag: <code>&lt;tag&gt;</code>
          )와 <b>종료 태그</b>(closing tag: <code>&lt;/tag&gt;</code>)로
          구성되며, <b>콘텐츠는 이 두 태그 사이에 위치</b>합니다. 이렇게
          콘텐츠를 적절한 태그로 감싸면 웹 브라우저가 문서의 구조를 파악할 수
          있습니다.
        </p>

        <figure className="img_figure mt_m">
          <img
            src={`${IMG.HTML}/uxkm_html_tag_structure.svg`}
            alt="태그(Tags)와 콘텐츠(Content) 설명"
            className="max-w600"
          />
          <figcaption>[요소(Element)의 구성]</figcaption>
        </figure>
        <p className="mt_m">
          <i className="t_blue">
            시작 태그와 종료 태그, 태그 사이에 위치한 내용 및 속성을 모두
            포함하는 개념이 <b>요소(Element)</b> 입니다.
          </i>{" "}
          HTML에서는 다양한 요소(Element)를 사용하여 웹 페이지의 구조와 내용을
          정의합니다.
          <br />
          <i className="t_black">
            일반적으로 많이 사용되는 HTML 요소들은 다음과 같습니다.
          </i>
        </p>

        <div className="counter_list gap-column-important-ml mt_ml">
          <article>
            <h3 className="t_blue">제목 요소(Heading Elements)</h3>
            <p className="mt_s">
              왼쪽 가장 큰 제목(<code>h1</code>)부터 가장 작은 제목(
              <code>h6</code>)까지 있으며, 주로 페이지 제목이나 섹션 제목을
              나타내는 데 사용됩니다.
            </p>
            <CodeBlock title="Heading Elements" language="html">
              {`<h1>, <h2>, <h3>, <h4>, <h5>, <h6>`}
            </CodeBlock>
          </article>
          <article>
            <h3 className="t_blue">단락 요소(Paragraph Element)</h3>
            <p className="mt_s">
              단락을 나타냅니다. 주로 텍스트 블록을 구분하는 데 사용됩니다.
            </p>
            <CodeBlock title="Paragraph Elements" language="html">
              {`<p>`}
            </CodeBlock>
          </article>
          <article>
            <h3 className="t_blue">링크 요소(Anchor Element)</h3>
            <p className="mt_s">
              하이퍼링크를 생성합니다. 다른 페이지로 이동하거나 같은 페이지
              내에서 특정 위치로 이동하는 링크를 만들 때 사용됩니다.
            </p>
            <CodeBlock title="Anchor Elements" language="html">
              {`<a>`}
            </CodeBlock>
          </article>
          <article>
            <h3 className="t_blue">이미지 요소(Image Element)</h3>
            <p className="mt_s">
              이미지를 삽입합니다. 웹 페이지에 이미지를 표시할 때 사용됩니다.
            </p>
            <CodeBlock title="Image Elements" language="html">
              {`<img>`}
            </CodeBlock>
          </article>
          <article>
            <h3 className="t_blue">목록 요소(List Elements)</h3>
            <p className="mt_s">
              왼쪽부터 순서가 없는 목록(<code>&lt;ul&gt;</code>), 순서가 있는
              목록(<code>&lt;ol&gt;</code>), 목록의 항목(<code>&lt;li&gt;</code>
              ) 을 나타냅니다. 주로 항목을 목록으로 구성할 때 사용됩니다.
            </p>
            <CodeBlock title="List Elements" language="html">
              {`<ul>, <ol>, <li>`}
            </CodeBlock>
          </article>
          <article>
            <h3 className="t_blue">폼 요소(Form Elements)</h3>
            <p className="mt_s">
              사용자 입력을 받는 폼을 만들 때 사용됩니다. 텍스트 입력, 버튼,
              드롭다운 목록 등의 요소를 포함합니다.
            </p>
            <CodeBlock title="Form Elements" language="html">
              {`<form>, <input>, <button>, <select>, <option>, <textarea>`}
            </CodeBlock>
          </article>
          <article>
            <h3 className="t_blue">테이블 요소(Table Elements)</h3>
            <p className="mt_s">
              표를 나타냅니다. 행과 열을 나타내는 요소들로 구성됩니다.
            </p>
            <CodeBlock title="Table Elements" language="html">
              {`<table>, <tr>, <th>, <td>`}
            </CodeBlock>
          </article>
          <article>
            <h3 className="t_blue">구역 요소(Semantic Elements)</h3>
            <p className="mt_s">
              문서의 영역을 그룹화하거나 스타일을 적용하기 위해 사용됩니다. 주로
              CSS와 함께 사용되어 레이아웃을 조정하거나 스타일을 적용하는 데에
              사용됩니다.
            </p>
            <CodeBlock title="Semantic Elements" language="html">
              {`<div>, <span>`}
            </CodeBlock>
          </article>
        </div>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn">속성(Attributes)</h2>
        <p className="mt_m">
          HTML 요소의 속성(Attributes)은 해당 요소에 대한 추가 정보를 제공하거나
          요소의 동작을 조정하는 데 사용됩니다.
          <br />각 속성은 속성 이름과 속성 값으로 구성되며, 일반적으로 여는
          태그에 포함됩니다.
        </p>
        <CodeBlock title="Attributes Syntax" language="html">
          {`<태그이름 속성이름="속성값">`}
        </CodeBlock>
        <p className="mt_ms">
          여러 속성을 추가할 때는 공백으로 구분하여 나열할 수 있습니다.
        </p>
        <p className="notice_blue mt_ms">
          <b>중요합니다.</b>
        </p>
        <p>
          HTML 요소의 속성(Attributes)에는{" "}
          <b className="t_blue">전역 속성(Global Attributes)</b>과{" "}
          <b className="t_green">고유 속성(Unique Attributes)</b>이 있습니다.
          <br />
          <i className="t_blue">
            전역 속성(Global Attributes)은 모든 HTML 요소에서 사용할 수 있는
            속성입니다.
          </i>
          <br />
          <i className="t_green">
            반면에 고유 속성(Unique Attributes)은 특정한 HTML 요소에서만 사용할
            수 있는 속성입니다. 이 속성들은 해당 요소의 특정한 기능을 제어하거나
            설정하는 데 사용됩니다.
          </i>
        </p>
        <p className="mt_s">
          <b className="t_blue">
            이 페이지에서는 전역 속성(Global Attributes)에 대한 내용만 다루고
            있으며
          </b>
          ,
          <br />
          고유 속성(Unique Attributes)에 대한 설명은 해당 요소(Element)를
          설명하는 페이지에서 확인할 수 있습니다.
        </p>

        <div className="counter_list gap-column-important-ml mt_ml">
          <article>
            <h3 className="t_blue">class</h3>
            <ul className="dot_lst mt_s">
              <li>
                하나 이상의 클래스를 지정하여 여러 요소를 그룹화하거나 스타일을
                적용하는 데 사용되며, JavaScript에서 요소를 선택하고 조작하는 데
                사용됩니다.
              </li>
              <li>
                한 페이지 내에서 같은 className을 사용할 수 있으며, 한 요소에
                공백으로 구분하여 여러 className을 지정할 수 있습니다.
              </li>
              <li>
                소문자로 시작하며, 특수문자는 언더스코어(_)와 하이픈(-)만 사용할
                수 있습니다.
              </li>
            </ul>
            <CodeBlock title="class(Global Attributes)" language="html">
              {`<div class="container main_container global-attributes">
  <!-- contents -->
</div>`}
            </CodeBlock>
          </article>
          <article>
            <h3 className="t_blue">id</h3>
            <ul className="dot_lst mt_s">
              <li>
                id 속성은 HTML 요소를 고유하게 식별하거나 스타일을 적용하는 데
                사용되며, JavaScript에서 요소를 선택하고 조작하는 데 사용됩니다.
              </li>
              <li>
                문서 내에서 유일해야 하며, 동일한 id를 여러 요소에 적용할 수
                없습니다.
              </li>
              <li>
                소문자로 시작하며, 특수문자는 언더스코어(_)와 하이픈(-)만 사용할
                수 있습니다.
              </li>
            </ul>
            <CodeBlock title="id(Global Attributes)" language="html">
              {`<div id="unique-id">
  <!-- contents -->
</div>`}
            </CodeBlock>
          </article>
          <article>
            <h3 className="t_blue">style</h3>
            <ul className="dot_lst mt_s">
              <li>
                인라인 CSS 스타일을 직접 요소에 적용하여 특정 요소에 스타일을
                지정합니다.
              </li>
              <li>CSS 우선 순위에서는 1순위에 해당합니다.</li>
            </ul>
            <CodeBlock title="style(Global Attributes)" language="html">
              {`<div style="font-size: 16px; color: red;">
  <!-- contents -->
</div>`}
            </CodeBlock>
          </article>
          <article>
            <h3 className="t_blue">title</h3>
            <p className="mt_s">
              요소에 대한 추가 정보를 제공하거나 툴팁으로 표시될 텍스트를
              지정합니다.
            </p>
            <CodeBlock title="title(Global Attributes)" language="html">
              {`<a href="#" title="링크 설명">링크 텍스트</a>`}
            </CodeBlock>
          </article>
          <article>
            <h3 className="t_blue">lang</h3>
            <ul className="dot_lst mt_s">
              <li>
                ISO 639 언어 코드로 요소의 언어를 지정합니다. 검색 엔진은 이
                정보를 사용하여 페이지를 색인화하고 사용자에게 적절한 언어로
                표시합니다.
              </li>
              <li>
                ISO 639는 언어를 식별하기 위한 국제 표준 코드이며, 각 언어에
                고유한 약어를 부여하여 다국어 환경에서 텍스트의 언어를 명확하게
                식별하고 처리하는 데 사용됩니다.
                <br />
                예를 들어, 영어는 "<code>en</code>", 한국어는 "<code>ko</code>
                "로 표시됩니다.
              </li>
            </ul>
            <CodeBlock title="lang(Global Attributes)" language="html">
              {`<html lang="ko">`}
            </CodeBlock>
          </article>
          <article>
            <h3 className="t_blue">tabindex</h3>
            <ul className="dot_lst mt_s">
              <li>
                요소의 탭 순서를 지정합니다. 사용자가 탭 키를 눌렀을 때 요소를
                포커스하는 순서를 결정합니다.
              </li>
              <li>
                <code className="t_blue">tabindex</code> 속성은 정수 값으로
                지정됩니다.
                <br />
                양의 정수 값은 요소를 탭 순서에 포함시키고 순서에 따라 포커스가
                이동하도록 합니다.
                <br />0 값은 요소를 탭 가능하게 만들지만 순서에 따라 포커스
                이동이 일어나지 않습니다.
                <br />
                음의 값은 요소를 탭 순서에서 제외시킵니다.
              </li>
              <li>
                <code className="t_blue">tabindex</code> 속성은 접근성을 높이고
                사용자 경험을 향상시키기 위해 사용되며, 특정 요소의 키보드 탐색
                가능성을 조정하거나 요소 간의 탐색 순서를 제어하는 데
                사용됩니다.
                <br />
                <span className="t_red">
                  하지만 <code className="t_red">tabindex</code> 속성을
                  무분별하게 사용하면 키보드 탐색이 복잡해지고 요소 간의 포커스
                  이동이 예상치 못한 순서로 이루어질 수 있으며, 유지보수가
                  어려워집니다.
                  <b>
                    따라서 tabindex 속성은 꼭 필요한 경우에만 사용해야 합니다.
                  </b>
                </span>
              </li>
            </ul>
            <CodeBlock title="tabindex(Global Attributes)" language="html">
              {`<div tabindex="1">포커스가 가능하게 적용 / 첫 번째 포커스</div>
<div tabindex="2">포커스가 가능하게 적용 / 두 번째 포커스</div>
<div tabindex="-1">포커스 이동 제외</div>
<div tabindex="0">포커스가 가능하게 적용 / 기본 탭 순서 유지</div>`}
            </CodeBlock>
          </article>
          <article>
            <h3 className="t_blue">hidden</h3>
            <ul className="dot_lst mt_s">
              <li>
                <code className="t_blue">hidden</code> 속성은 HTML 요소를
                화면에서 숨기는 데 사용되며, CSS의 <code>display: none;</code>과
                유사한 기능을 합니다. <code className="t_blue">hidden</code>{" "}
                속성을 사용하면 요소는 화면에 렌더링되지 않지만, 여전히 다른
                요소와 상호 작용하며 스크린 리더 등의 보조 기술에서도 감지됩니다
              </li>
              <li>
                <code className="t_blue">hidden</code> 속성은 주로 JavaScript를
                사용하여 동적으로 요소를 숨기거나 나타내는 데 사용됩니다.
              </li>
              <li>
                <code className="t_blue">hidden</code> 속성은 boolean attribute
                (불리언 속성)입니다.
                <br />
                속성 값이 명시되지 않아도 기본적으로 true로 간주되며,{" "}
                <code className="t_blue">hidden</code> 속성이 존재하는
                것만으로도 해당 요소가 숨겨진 상태로 처리됨을 의미합니다.
              </li>
            </ul>
            <CodeBlock title="hidden(Global Attributes)" language="html">
              {`<div hidden>이 요소는 숨겨집니다.</div>`}
            </CodeBlock>
          </article>
          <article>
            <h3 className="t_blue">contenteditable</h3>
            <ul className="dot_lst mt_s">
              <li>
                <code className="t_blue">contenteditable</code> 속성은 HTML
                요소를 사용자가 직접 수정 가능한 상태로 만들어주는데, 마우스
                클릭 또는 키보드 입력을 통해 텍스트를 편집할 수 있게 합니다.
                <br />
                이는 텍스트 편집기(<code>&lt;textarea&gt;</code>)와 유사한
                동작을 제공합니다.
              </li>
              <li>
                <code className="t_blue">contenteditable</code> 속성은 다양한
                HTML 요소에 적용할 수 있으며, <code>&lt;div&gt;</code>,{" "}
                <code>&lt;p&gt;</code>, <code>&lt;span&gt;</code>,{" "}
                <code>&lt;section&gt;</code> 등과 같은 블록 수준 요소나{" "}
                <code>&lt;a&gt;</code>, <code>&lt;em&gt;</code>,{" "}
                <code>&lt;strong&gt;</code>과 같은 인라인 요소 등에 적용할 수
                있습니다.
                <br />
                요소에 <code className="t_blue">contenteditable</code> 속성이
                지정되면 해당 요소 내부의 모든 텍스트와 하위 요소가 편집 가능한
                상태가 됩니다.
              </li>
            </ul>
            <CodeBlock
              title="contenteditable(Global Attributes)"
              language="html"
            >
              {`<div contenteditable="true">
  이 내용은 사용자에 의해 편집 가능합니다.
</div>`}
            </CodeBlock>
          </article>
          <article>
            <h3 className="t_blue">data-*</h3>
            <ul className="dot_lst mt_s">
              <li>
                <code className="t_blue">data-*</code> 속성은 HTML 요소에 사용자
                정의 데이터를 저장하는 데 사용됩니다. 이를 통해 JavaScript로
                해당 데이터를 읽거나 변경할 수 있으며, CSS 선택자로도 이
                데이터에 접근할 수 있습니다. 주로 요소를 선택하고 상호작용하는
                데 활용됩니다.
              </li>
              <li>
                <code className="t_blue">data-*</code> 속성은 개발자가 지정한
                이름으로 구성된 임의의 접두사를 가지며, HTML 요소에 문자열
                값만을 저장할 수 있습니다.
              </li>
            </ul>
            <CodeBlock title="data-*(Global Attributes)" language="html">
              {`<div id="content" data-name="uxkm" data-version="1.2"></div>

<style>
  [data-name] 또는 [data-name="uxkm"] {
    /* style 정의 */
  }
</style>

<script>
  const product = document.getElementById('product');
  const productId = product.dataset.name; // "uxkm"
  const productName = product.dataset.version; // "1.2"
</script>`}
            </CodeBlock>
          </article>
          <article>
            <h3 className="t_blue html5">draggable</h3>
            <p className="mt_s">
              <code className="t_blue">draggable</code> 속성은 HTML5 속성으로
              HTML 요소가 드래그 가능한지 여부를 지정하는 데 사용됩니다. 이
              속성을 사용하여 사용자가 요소를 드래그하여 새 위치로 이동하거나
              다른 목적지로 드래그할 수 있는지를 결정할 수 있습니다.
              <br />
              또한 JavaScript를 사용하여 드래그하는 동작에 대한 추가적인 제어를
              할 수도 있습니다.
            </p>
            <p className="mt_s">
              <code className="t_blue">draggable</code> 속성에는 두 가지 값이
              있습니다.
            </p>
            <ul className="dot_lst indent_small">
              <li>
                <b>true</b>: 요소를 드래그할 수 있습니다.
              </li>
              <li>
                <b>false</b>: 요소를 드래그할 수 없습니다.
              </li>
            </ul>
            <CodeBlock title="draggable(Global Attributes)" language="html">
              {`<div draggable="true">
  이 요소는 드래그 가능합니다.
</div>`}
            </CodeBlock>
          </article>
          <article>
            <h3 className="t_blue">dir</h3>
            <p className="mt_s">
              <code className="t_blue">dir</code> 속성은 HTML 요소의 텍스트
              방향( 글쓰기 방향)을 지정하는 데 사용됩니다. 이 속성은 주로 언어가
              다른 부분이 섞여 있는 다국어 웹 페이지에서 사용됩니다.
              <br />
              <code className="t_blue">dir</code> 속성을 사용하여 텍스트의
              방향을 명시적으로 지정함으로써 웹 페이지에서 다국어 텍스트를
              올바르게 표시할 수 있습니다.
            </p>
            <p className="mt_s">
              <code className="t_blue">dir</code> 속성에는 세 가지 값이
              있습니다.
            </p>
            <ul className="dot_lst indent_small">
              <li>
                <b>ltr (Left-to-Right)</b>: 텍스트가 왼쪽에서 오른쪽으로 흐르는
                언어를 나타냅니다. 한국어 및 대부분의 서양 언어(영어, 프랑스어,
                스페인어 등)가 이 방향을 사용합니다.
              </li>
              <li>
                <b>rtl (Right-to-Left)</b>: 텍스트가 오른쪽에서 왼쪽으로 흐르는
                언어를 나타냅니다. 주로 아랍어, 히브리어, 페르시아어와 같은
                언어가 이 방향을 사용합니다.
              </li>
              <li>
                <b>auto</b>: dir 속성의 기본값으로, 텍스트의 방향을 자동으로
                결정하도록 브라우저에게 위임하는 역할을 합니다.
              </li>
            </ul>
            <CodeBlock title="dir(Global Attributes)" language="html">
              {`<div dir="ltr | rtl | auto">
  <!-- contents -->
</div>`}
            </CodeBlock>
          </article>
        </div>
      </section>

      <section className="mt_xxl indent">
        <h2 className="ml_mn t_blue">한눈에 보는 커리큘럼</h2>
        <figure className="img_figure mt_l">
          <img src={`${IMG.HTML}/01_html_03.png`} alt="HTML 요소 이해하기" />
          <figcaption>HTML 요소 이해하기</figcaption>
        </figure>
        <figure className="img_figure mt_l">
          <img src={`${IMG.HTML}/01_html_03_1.png`} alt="HTML 요소 로드맵" />
          <figcaption>HTML 요소 로드맵</figcaption>
        </figure>
        <figure className="img_figure mt_l">
          <img src={`${IMG.HTML}/01_html_03_1_mo.png`} alt="HTML 요소 로드맵" />
          <figcaption>HTML 요소 로드맵</figcaption>
        </figure>
      </section>
    </>
  );
}

export default HtmlElementPage;
