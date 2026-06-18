import CodeBlock from "@/components/code/CodeBlock";
import { usePageMeta } from "@/components/common/PageMeta";
import { IMG } from "@/config/path";

const PAGE_LAYOUT = {
  mainClass: "col_element",
  type: "publishing",
  info: true,
  note: true,
  sideMenu: true,
  reference: true,
  contentList: true,
  bottomEditor: true,
};

const PAGE_DATA = {
  title: "col element",
  description:
    "col 요소는 HTML 문서에서 colgroup 요소 내부에 사용되며, 표의 개별 열에 스타일이나 속성을 적용할 수 있도록 지정하는 태그로, span 속성을 통해 한 번에 여러 열에 동일한 속성을 적용할 수 있으며 CSS와 함께 사용해 열의 너비, 배경색, 테두리 등 시각적 속성을 제어할 수 있습니다. 이 페이지에서는 col 요소의 주요 역할 및 특징을 설명하고, col 요소의 용도와 구조적 위치에 따른 사용 예시를 소개합니다.",
  keyword:
    "Markup, HTML, tag, elements, table, caption, colgroup, col, thead, tbody, tfoot, tr, th, td",
};

function ColElementPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          <code>&lt;col&gt;</code> 요소는 <code>&lt;colgroup&gt;</code> 요소
          내부에서 사용되며, <b>표의 개별 열(column)에 스타일이나 속성을 적용하기 위한 태그</b>
          입니다.
          <br />
          <code>span</code> 속성을 통해 <b>여러 열에 한꺼번에 속성을 지정</b>할 수
          있으며, CSS와 함께 사용해 <b>열 너비, 배경색, 테두리 등</b>을 제어할 수
          있습니다.
          <br />
          <code>&lt;col&gt;</code>은 <b>콘텐츠를 포함하지 않는 빈 태그</b>이며,
          시맨틱 구조보다는 <b>표의 레이아웃과 시각적 표현을 보조하는 역할</b>을
          합니다. 표 전체의 구조를 명확히 하고, 스타일링을 간결하게 유지할 때
          유용합니다.
        </p>
        <p className="mt_s">
          보다 유연한 스타일링을 위해 개별 <code>&lt;td&gt;</code> 또는{" "}
          <code>&lt;th&gt;</code> 요소에 CSS로 스타일을 지정하는 방법이 일반적으로
          권장됩니다.
          <br />
          그러나 <code>&lt;colgroup&gt;</code> 및 <code>&lt;col&gt;</code>{" "}
          요소를 완전히 배제해야 한다는 의미는 아니며, 특정 열 전체에 일괄적인
          스타일을 적용할 때는 여전히 유용하게 사용할 수 있습니다.
        </p>
      </blockquote>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주요 역할 및 특징
        </h2>
        <ol className="mt_l ol_lst info_lst gap-column-important-m">
          <li className="weight-600-before t_black_before">
            <strong>개별 열(Column)에 스타일 적용</strong>
            <p>
              <code>&lt;col&gt;</code> 요소는 테이블의 각 열에 배경색, 너비,
              테두리 등의 스타일을 한 번에 적용할 수 있도록 도와줍니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>&lt;colgroup&gt; 요소와 함께 사용</strong>
            <ul className="dot_lst">
              <li>
                <code>&lt;col&gt;</code>은 반드시 <code>&lt;colgroup&gt;</code>의
                자식 요소로만 사용 가능합니다.
              </li>
              <li>
                <code>&lt;colgroup&gt;</code>과 함께 사용하여, 테이블에서 여러
                열에 공통된 스타일을 적용할 수 있습니다.
              </li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>여러 열을 한 번에 스타일링 가능</strong>
            <ul className="dot_lst">
              <li>
                <code>span</code> 속성을 사용하여 여러 열을 그룹화하고, 동일한
                스타일을 한 번에 적용할 수 있습니다.
              </li>
              <li>
                예를 들어, 특정 열의 배경색을 변경하거나, 너비를 설정할 수
                있습니다.
              </li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>CSS를 사용할 수 없는 환경에서 유용</strong>
            <p>
              <code>style</code> 속성을 통해 간단히 열의 스타일을 지정할 수
              있습니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>CSS를 통한 스타일링 가능</strong>
            <p>
              <code>&lt;col&gt;</code>에 <code>class</code> 또는 <code>id</code>를
              지정해 CSS로 스타일링할 수 있습니다.
            </p>
          </li>
        </ol>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          CSS 기본 값
        </h2>
        <p className="mt_l">
          <code>&lt;col&gt;</code> 요소는 아래와 같은 기본값이 적용됩니다.
          <br />
          <mark>
            기본적으로 <code>&lt;col&gt;</code> 요소는 화면에 표시되지 않지만,
            스타일을 적용하면 해당 열에 적용된 스타일이 테이블에 반영됩니다.
          </mark>
        </p>
        <CodeBlock title="col element CSS" className="mt_m" language="css">
          {`col {
  display: table-column;
}`}
        </CodeBlock>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          기본 문법
        </h2>
        <CodeBlock title="col element syntax" className="mt_l" language="html">
          {`<table>
  <colgroup>
    <col> <!-- style 또는 span 적용 -->
    <col> <!-- style 또는 span 적용 -->
  </colgroup>
  <tr>
    <th>제목 셀</th>
    <th>제목 셀</th>
  </tr>
  <tr>
    <td>데이터 셀</td>
    <td>데이터 셀</td>
  </tr>
</table>`}
        </CodeBlock>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn">속성</h2>

        <article className="mt_l indent">
          <h3 className="ml_mn">
            [span] <i className="attr_optional">선택 사항</i>{" "}
            <span className="t_blue el_inline_block">&lt;col span="값"&gt;</span>
          </h3>
          <p className="mt_ms">
            여러 개의 열을 하나로 그룹화하여 동일한 스타일을 적용할 때
            사용합니다.
            <br />
            <code>span="2"</code>는 두 개의 열에 동일한 스타일을 적용하겠다는
            의미입니다.
          </p>
          <CodeBlock title="col 속성 [span]" className="mt_m" language="html">
            {`<col span="2" style="background-color: #f0f0f0">`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [width] <i className="attr_optional">선택 사항 - CSS로 대체</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;col style="width: 값;"&gt;
            </span>
          </h3>
          <p className="mt_ms">
            열의 너비를 지정합니다.
            <br />
            <b className="t_red">HTML4</b> 환경에서는 <code>&lt;col&gt;</code>{" "}
            요소의 <code>width</code> 속성이 공식적으로 지원되었지만,
            <br />
            <b className="t_green">HTML5</b>(2014년 표준화) 부터{" "}
            <code>&lt;col&gt;</code> 요소의 <code>width</code> 속성이
            비표준(deprecated) 처리되었습니다.
          </p>
          <div className="mt_s">
            <strong className="t_red">HTML4 방식(비 권장) : </strong>
            <CodeBlock title="col 속성 [width 속성(html4)]" className="indent mt_s" language="html">
              {`<col width="200">`}
            </CodeBlock>
          </div>
          <div className="mt_m">
            <strong className="t_darkgreen">HTML5 방식(CSS로 대체) : </strong>
            <CodeBlock title="col 속성 [width 속성(html5)]" className="indent mt_s" language="html">
              {`<col style="width: 200px">`}
            </CodeBlock>
          </div>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            글로벌 속성 사용(class, id, style 등)
            <i className="attr_optional">선택 사항</i>
          </h3>
          <p className="mt_ms">
            <code>&lt;col&gt;</code> 요소에는 배경색, 테두리, 너비 등의 스타일을
            적용할 수 있습니다.
            <br />
            인라인 스타일 방식(<code>style</code> 속성 사용)으로 직접 지정할
            수도 있고, <code>class</code>나 <code>id</code>를 활용하여 외부
            CSS에서 스타일을 정의하는 것도 가능합니다.
            <br />
            그러나 <code>text-align</code>과 같은 텍스트 정렬 속성은{" "}
            <code>&lt;col&gt;</code> 요소에 적용되지 않으며, 개별{" "}
            <code>&lt;td&gt;</code> 또는 <code>&lt;th&gt;</code> 요소에서 직접
            지정해야 합니다.
          </p>
          <div className="mt_s">
            <strong>
              <code>style</code> 속성 사용 :{" "}
            </strong>
            <CodeBlock title="col 글로벌 속성 [style]" className="indent mt_s" language="html">
              {`<col style="width: 100px; background-color: #eee;">
<col style="width: 200px; background-color: #f9f9f9;">`}
            </CodeBlock>
          </div>
          <div className="mt_m">
            <strong>
              <code>class</code> 사용 :{" "}
            </strong>
            <CodeBlock title="col 글로벌 속성 [class]" className="indent mt_s" language="html">
              {`<style>
  .col-1 {
    width: 100px; background-color: #eee;
  }
  .col-2 {
    width: 200px; background-color: #f9f9f9;
  }
</style>

<col class="col-1">
<col class="col-2">`}
            </CodeBlock>
          </div>
        </article>
      </section>

      <section className="view_editor indent mt_xxl">
        <h2 className="ml_mn ve_tit">예제</h2>

        <article className="mt_l indent">
          <h3 className="ml_mn">기본적인 열 스타일 적용</h3>
          <div className="view_editor edit_code mt_m">
            <CodeBlock title="기본적인 열 스타일 적용" language="html">
              {`<table>
  <colgroup>
    <col style="background:#f8fafc">
    <col style="background:#eef2ff">
  </colgroup>
  <tr><th>제목 셀</th><th>제목 셀</th></tr>
  <tr><td>데이터 셀</td><td>데이터 셀</td></tr>
</table>`}
            </CodeBlock>
          </div>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">span 속성을 사용해 여러 열에 스타일 적용</h3>
          <div className="view_editor edit_code mt_m">
            <CodeBlock title="span 속성을 사용한 열 스타일" language="html">
              {`<table>
  <colgroup>
    <col span="2" style="background:#f0f0f0">
    <col style="background:#fff">
  </colgroup>
  <tr><th>A</th><th>B</th><th>C</th></tr>
  <tr><td>1</td><td>2</td><td>3</td></tr>
</table>`}
            </CodeBlock>
          </div>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">CSS로 스타일링 제어</h3>
          <div className="view_editor edit_code mt_m">
            <CodeBlock title="CSS로 스타일링 제어" language="html">
              {`<style>
  .col-price { width: 120px; background:#fff7ed; }
</style>
<table>
  <colgroup>
    <col>
    <col class="col-price">
  </colgroup>
  <tr><th>상품</th><th>가격</th></tr>
  <tr><td>노트북</td><td>120만원</td></tr>
</table>`}
            </CodeBlock>
          </div>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주의사항
        </h2>
        <ul className="dot_lst mt_l">
          <li>
            <code>&lt;col&gt;</code>은 단독 사용 불가하며 반드시{" "}
            <code>&lt;colgroup&gt;</code>의 자식 요소로만 사용 가능합니다.
          </li>
          <li>
            <code>&lt;col&gt;</code>을 사용한 스타일링은 모든 셀에 적용되지
            않으므로, 필요에 따라 CSS로 테이블을 제어하는 것이 더 효율적일 수
            있습니다.
          </li>
          <li>
            <code>span</code> 속성은 전체 열의 개수를 초과할 수 없습니다.
            <br />
            <code>span="3"</code>을 사용할 때, 최소한 3개의 열이 존재해야
            합니다.
          </li>
          <li>
            <code>&lt;col&gt;</code>은 스타일이나 속성 지정만 가능하고, 데이터를
            직접 포함할 수 없습니다.
            <br />
            데이터를 포함하려면 <code>&lt;td&gt;</code>, <code>&lt;th&gt;</code>를
            사용해야 합니다.
          </li>
        </ul>
      </section>
      <aside className="browser_support mt_xxl" data-tit="col">
        <ul>
          <li className="ie">지원</li>
          <li className="edge">지원</li>
          <li className="chrome">1.0</li>
          <li className="firefox">1.0</li>
          <li className="opera">지원</li>
          <li className="safari">지원</li>
        </ul>
      </aside>
      <figure className="img_figure mt_l">
        <img src={IMG.HTML + "/08_html_04.png"} alt="col 요소" />
        <figcaption>col 요소</figcaption>
      </figure>
    </>
  );
}

export default ColElementPage;
