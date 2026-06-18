import { Suspense, lazy } from "react";
import { usePageMeta } from "@/components/common/PageMeta";
import CodeBlock from "@/components/code/CodeBlock";
import { IMG } from "@/config/path";

const PAGE_LAYOUT = {
  mainClass: "table_element",
  type: "publishing",
  info: true,
  note: true,
  sideMenu: true,
  reference: true,
  contentList: true,
  bottomEditor: true,
};

const PAGE_DATA = {
  title: "table element",
  description:
    "table 요소는 HTML 문서에서 행(row)과 열(column)로 구성된 표 형식의 데이터를 구조화하여 표시할 때 사용하는 태그로, 내부에 tr, th, td 요소를 포함하여 셀 단위로 데이터를 정리하며 caption, thead, tbody, tfoot, colgroup 등을 함께 사용하면 표의 의미 구조를 명확히 하고 접근성과 가독성을 높일 수 있습니다. 이 페이지에서는 table 요소의 주요 역할 및 특징을 설명하고, table 요소의 용도와 구조적 위치에 따른 사용 예시를 소개합니다.",
  keyword:
    "Markup, HTML, tag, elements, table, caption, colgroup, col, thead, tbody, tfoot, tr, th, td",
};

const UkEditorTarget = lazy(
  () => import("@/components/code/UkEditorTarget"),
);

function EditorFallback() {
  return <div className="uk_editor min_height_400" aria-hidden />;
}

function TableElementPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          <code>&lt;table&gt;</code> 요소는{" "}
          <b>
            행(row)과 열(column)로 구성된 표 형식의 데이터를 구조화하여 표시할
            때 사용하는 시맨틱 태그
          </b>
          입니다.
          <br />
          내부에 <code>&lt;tr&gt;</code>(행), <code>&lt;th&gt;</code>(표 제목
          셀), <code>&lt;td&gt;</code>(일반 데이터 셀) 등의 요소를 포함하며,
          정보를 <b>논리적이고 시각적으로 명확하게 정렬</b>할 수 있습니다.{" "}
          <code>caption</code>, <code>thead</code>, <code>tbody</code>,{" "}
          <code>tfoot</code> 등과 함께 사용하면 <b>표의 의미와 구조를 더 명확히 전달</b>
          할 수 있습니다. 이러한 마크업 구성은{" "}
          <b>접근성과 가독성 향상에도 중요한 역할</b>을 합니다.
        </p>
      </blockquote>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주요 역할 및 특징
        </h2>
        <ol className="mt_l ol_lst info_lst gap-column-important-m">
          <li className="weight-600-before t_black_before">
            <strong>데이터를 체계적으로 관리 및 표시</strong>
            <ul className="dot_lst">
              <li>
                행(row)과 열(column)로 구성된 표를 만들어 데이터를 깔끔하고
                체계적으로 표현할 수 있습니다.
              </li>
              <li>
                <code>&lt;tr&gt;</code>(행), <code>&lt;th&gt;</code>(제목 셀),{" "}
                <code>&lt;td&gt;</code>(데이터 셀)과 함께 사용하여 구조적인 표를
                생성할 수 있습니다.
              </li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>
              &lt;caption&gt;, &lt;thead&gt;, &lt;tbody&gt;, &lt;tfoot&gt; 요소를
              활용한 구분
            </strong>
            <ul className="dot_lst">
              <li>
                <code>&lt;caption&gt;</code> : 표의 제목을 지정하거나, 표의 내용의
                요약합니다.
              </li>
              <li>
                <code>&lt;thead&gt;</code> : 표의 머리글(컬럼명)을 정의합니다.
              </li>
              <li>
                <code>&lt;tbody&gt;</code> : 표의 본문을 정의합니다.
              </li>
              <li>
                <code>&lt;tfoot&gt;</code> : 표의 바닥글을 정의합니다.
              </li>
              <li>
                <code>&lt;thead&gt;</code>, <code>&lt;tbody&gt;</code>,{" "}
                <code>&lt;tfoot&gt;</code> 요소를 사용하여 논리적인 그룹화가
                가능합니다.
              </li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>웹페이지에서 정보의 가독성을 높임</strong>
            <p>
              숫자, 통계, 일정, 가격 비교표 등 구조화된 데이터를 효과적으로 표현할
              때 적합합니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>다양한 스타일과 기능 적용 가능</strong>
            <ul className="dot_lst">
              <li>CSS를 활용하여 테이블의 스타일을 조정할 수 있습니다.</li>
              <li>
                <code>border</code>, <code>cellspacing</code>,{" "}
                <code>cellpadding</code>, <code>width</code> 등으로 디자인을
                커스터마이징할 수 있습니다.
              </li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>복합적인 셀 병합 가능 (colspan, rowspan)</strong>
            <ul className="dot_lst">
              <li>
                <code>colspan</code> : 셀을 가로로 병합
              </li>
              <li>
                <code>rowspan</code> : 셀을 세로로 병합
              </li>
            </ul>
          </li>
        </ol>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          CSS 기본 값
        </h2>
        <p className="mt_l">
          <code>&lt;table&gt;</code> 요소의 기본 CSS 값은 브라우저에 따라 다소
          차이가 있을 수 있지만, 일반적으로 다음과 같은 기본 스타일이
          적용됩니다.
        </p>
        <CodeBlock title="table element CSS" className="mt_m" language="css">
          {`table {
  display: table;            /* 요소를 테이블처럼 표시 */
  border-collapse: separate; /* 셀 테두리를 분리 (기본값) */
  border-spacing: 2px;       /* 셀 사이의 간격 (2px 기본 설정) */
  box-sizing: border-box;    /* 테두리와 패딩을 포함한 크기 계산 */
  text-indent: initial;      /* 들여쓰기 기본값 */
  unicode-bidi: isolate;     /* 양방향 텍스트 처리 방식 */
}`}
        </CodeBlock>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          기본 문법
        </h2>
        <CodeBlock title="table element syntax" className="mt_l" language="html">
          {`<table>
  <caption>요약 설명</caption>
  <thead>
    <tr>
      <th>제목 셀</th>
      <th>제목 셀</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>데이터 셀</td>
      <td>데이터 셀</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="2">결과 또는 테이블의 내용을 정리하는 셀</td>
    </tr>
  </tfoot>
</table>`}
        </CodeBlock>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn">속성</h2>
        <blockquote className="uk_note mt_xl" role="note">
          <strong className="sound_only">요약 설명</strong>
          <p>
            <code>&lt;table&gt;</code> 요소에는 다양한 속성이 존재하지만,
            HTML5에서는 스타일 관련 속성(<code>width/height</code>,{" "}
            <code>border</code>, <code>cellspacing</code>,{" "}
            <code>cellpadding</code> 등)은 CSS로 적용하는 것이 권장됩니다.
            <br />
            디자인과 구조를 분리하여 유지보수를 쉽게 하고, 접근성을 높이기
            위함입니다.
          </p>
        </blockquote>

        <article className="mt_xl indent dp_pc">
          <h3 className="ml_mn t_blue">
            <code className="font-21-important t_blue weight-600">&lt;table&gt;</code>{" "}
            속성 요약
          </h3>
          <div className="table_summary value_200 mt_m">
            <ul className="lst_hd">
              <li className="cell value">속성명</li>
              <li className="cell content">설명</li>
            </ul>
            <ul className="lst_bd">
              <li>
                <p className="cell value">
                  <code>border</code>
                </p>
                <p className="cell content">테두리의 두께를 지정</p>
              </li>
              <li>
                <p className="cell value">
                  <code>cellpadding</code>
                </p>
                <p className="cell content">셀 안쪽 여백을 지정</p>
              </li>
              <li>
                <p className="cell value">
                  <code>cellspacing</code>
                </p>
                <p className="cell content">셀 사이 여백을 지정</p>
              </li>
              <li>
                <p className="cell value">
                  <code>summary</code>
                </p>
                <p className="cell content">표의 요약 설명 (접근성)</p>
              </li>
              <li>
                <p className="cell value">
                  <code>width</code> / <code>height</code>
                </p>
                <p className="cell content">테이블의 너비 / 높이를 지정</p>
              </li>
              <li>
                <p className="cell value">
                  <code>align</code>
                </p>
                <p className="cell content">테이블의 정렬 방식 지정</p>
              </li>
              <li>
                <p className="cell value">
                  <code>bgcolor</code>
                </p>
                <p className="cell content">테이블 배경색 지정</p>
              </li>
            </ul>
          </div>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [border] <i className="attr_optional">선택 사항</i>{" "}
            <span className="t_blue el_inline_block">&lt;table border="값"&gt;</span>
          </h3>
          <p className="mt_ms">
            테두리의 두께를 지정합니다. 숫자로 지정하면 <code>px</code> 단위로
            해석됩니다.
            <br />
            HTML5에서는 비추천하며, CSS의 <code>border</code> 사용을 권장합니다.
          </p>
          <div className="mt_s">
            <strong className="t_red">기존 방식(비 권장) : </strong>
            <CodeBlock title="table 속성 [border - 비 권장]" className="indent mt_s" language="html">
              {`<table border="1">
  <tr>
    <td>내용</td>
  </tr>
</table>`}
            </CodeBlock>
          </div>
          <div className="mt_m">
            <strong className="t_darkgreen">CSS로 대체(권장) : </strong>
            <CodeBlock title="table 속성 [border - 권장]" className="indent mt_s" language="css">
              {`table {
  border: 1px solid black;
}`}
            </CodeBlock>
          </div>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [cellpadding] <i className="attr_optional">선택 사항</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;table cellpadding="값"&gt;
            </span>
          </h3>
          <p className="mt_ms">
            안쪽의 여백을 지정합니다. 숫자로 지정하면 <code>px</code> 단위로
            해석됩니다.
            <br />
            HTML5에서는 비추천하며, CSS의 <code>padding</code> 사용을 권장합니다.
          </p>
          <div className="mt_s">
            <strong className="t_red">기존 방식(비 권장) : </strong>
            <CodeBlock title="table 속성 [cellpadding - 비 권장]" className="indent mt_s" language="html">
              {`<table cellpadding="5">
  <tr>
    <td>내용</td>
  </tr>
</table>`}
            </CodeBlock>
          </div>
          <div className="mt_m">
            <strong className="t_darkgreen">CSS로 대체(권장) : </strong>
            <CodeBlock title="table 속성 [cellpadding - 권장]" className="indent mt_s" language="css">
              {`td {
  padding: 5px;
}`}
            </CodeBlock>
          </div>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [cellspacing] <i className="attr_optional">선택 사항</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;table cellspacing="값"&gt;
            </span>
          </h3>
          <p className="mt_ms">
            셀 사이의 여백을 지정합니다. 숫자로 지정하면 <code>px</code> 단위로
            해석됩니다.
            <br />
            HTML5에서는 비추천하며, CSS의 <code>border-spacing</code> 사용을
            권장합니다.
          </p>
          <div className="mt_s">
            <strong className="t_red">기존 방식(비 권장) : </strong>
            <CodeBlock title="table 속성 [cellspacing - 비 권장]" className="indent mt_s" language="html">
              {`<table cellspacing="5">
  <tr>
    <td>내용</td>
  </tr>
</table>`}
            </CodeBlock>
          </div>
          <div className="mt_m">
            <strong className="t_darkgreen">CSS로 대체(권장) : </strong>
            <CodeBlock title="table 속성 [cellspacing - 권장]" className="indent mt_s" language="css">
              {`table {
  border-spacing: 5px;
}`}
            </CodeBlock>
          </div>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [summary] <i className="attr_optional">선택 사항 - 비추천</i>{" "}
            <span className="t_blue el_inline_block">&lt;table summary="값"&gt;</span>
          </h3>
          <p className="mt_ms">
            테이블의 요약 설명을 제공하여 접근성을 높입니다.
            <br />
            HTML5에서는 <code>summary</code> 속성이 제거되었으며,{" "}
            <code>&lt;caption&gt;</code> 또는 ARIA 속성을(<code>aria-label</code>,{" "}
            <code>aria-describedby</code>) 권장합니다.
          </p>
          <div className="mt_s">
            <strong className="t_red">기존 방식(비 권장) : </strong>
            <CodeBlock title="table 속성 [summary - 비 권장]" className="indent mt_s" language="html">
              {`<table summary="요약 설명">
  <tr>
    <td>내용</td>
  </tr>
</table>`}
            </CodeBlock>
          </div>
          <div className="mt_m">
            <strong className="t_darkgreen">
              <code className="t_darkgreen">&lt;caption&gt;</code>으로 대체(권장) :{" "}
            </strong>
            <CodeBlock title="table 속성 [summary - caption]" className="indent mt_s" language="html">
              {`<table>
  <caption>요약 설명</caption>
  <tr>
    <td>내용</td>
  </tr>
</table>`}
            </CodeBlock>
          </div>
          <div className="mt_m">
            <strong className="t_darkgreen">ARIA 속성 사용(권장) : </strong>
            <CodeBlock title="table 속성 [summary - ARIA 속성]" className="indent mt_s" language="html">
              {`<table aria-describedby="요약 설명">
  <tr>
    <td>내용</td>
  </tr>
</table>`}
            </CodeBlock>
          </div>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [width / height] <i className="attr_optional">선택 사항</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;table width="값" height="값"&gt;
            </span>
          </h3>
          <p className="mt_ms">
            테이블의 너비와 높이를 지정합니다. 픽셀(<code>px</code>) 또는 백분율(
            <code>%</code>)로 사이즈를 지정합니다.
            <br />
            HTML5에서는 비추천하며, CSS의 <code>width</code> /{" "}
            <code>height</code> 사용을 권장합니다.
          </p>
          <div className="mt_s">
            <strong className="t_red">기존 방식(비 권장) : </strong>
            <CodeBlock title="table 속성 [width/width - 비 권장]" className="indent mt_s" language="html">
              {`<table width="100%" height="200">
  <tr>
    <td>내용</td>
  </tr>
</table>`}
            </CodeBlock>
          </div>
          <div className="mt_m">
            <strong className="t_darkgreen">CSS로 대체(권장) : </strong>
            <CodeBlock title="table 속성 [width/width - 권장]" className="indent mt_s" language="css">
              {`table {
  width: 100%;
  height: 200px;
}`}
            </CodeBlock>
          </div>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [align] <i className="attr_optional">선택 사항</i>{" "}
            <span className="t_blue el_inline_block">&lt;table align="값"&gt;</span>
          </h3>
          <p className="mt_ms">
            테이블의 정렬 방식을 지정합니다. (<code>&lt;left&gt;</code>,{" "}
            <code>&lt;center&gt;</code>, <code>&lt;right&gt;</code>)
            <br />
            HTML5에서는 비추천하며, CSS의 <code>text-align</code> 또는{" "}
            <code>margin</code> 사용을 권장합니다.
          </p>
          <div className="mt_s">
            <strong className="t_red">기존 방식(비 권장) : </strong>
            <CodeBlock title="table 속성 [align - 비 권장]" className="indent mt_s" language="html">
              {`<table align="center">
  <tr>
    <td>내용</td>
  </tr>
</table>`}
            </CodeBlock>
          </div>
          <div className="mt_m">
            <strong className="t_darkgreen">CSS로 대체(권장) : </strong>
            <CodeBlock title="table 속성 [align - 권장]" className="indent mt_s" language="css">
              {`table {
  margin: 0 auto;
}`}
            </CodeBlock>
          </div>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [bgcolor] <i className="attr_optional">선택 사항</i>{" "}
            <span className="t_blue el_inline_block">&lt;table bgcolor="값"&gt;</span>
          </h3>
          <p className="mt_ms">
            테이블의 배경색을 지정합니다. 색상 이름 또는 hex 코드(
            <code>#FF0000</code>)로 값을 지정합니다.
            <br />
            HTML5에서는 비추천하며, CSS의 <code>background-color</code> 사용을
            권장합니다.
          </p>
          <div className="mt_s">
            <strong className="t_red">기존 방식(비 권장) : </strong>
            <CodeBlock title="table 속성 [bgcolor - 비 권장]" className="indent mt_s" language="html">
              {`<table bgcolor="#FF0000">
  <tr>
    <td>내용</td>
  </tr>
</table>`}
            </CodeBlock>
          </div>
          <div className="mt_m">
            <strong className="t_darkgreen">CSS로 대체(권장) : </strong>
            <CodeBlock title="table 속성 [bgcolor - 권장]" className="indent mt_s" language="css">
              {`table {
  background-color: #FF0000;
}`}
            </CodeBlock>
          </div>
        </article>
      </section>

      <section className="view_editor indent mt_xxl">
        <h2 className="ml_mn ve_tit">예제</h2>
        <article className="mt_l indent">
          <h3 className="ml_mn">기본 테이블 예제</h3>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/08-table/8.1.table_element_1.html"
                className="min_height_400 mb_result_height_400"
                result={true}
                mode="htmlmixed"
                theme="moxer"
                browser="default"
                title="기본 테이블 예제"
                minHeight="400px"
              />
            </Suspense>
          </div>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">셀 병합 예제 (colspan, rowspan)</h3>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/08-table/8.1.table_element_2.html"
                className="min_height_400 mb_result_height_400"
                result={true}
                mode="htmlmixed"
                theme="moxer"
                browser="default"
                title="셀 병합 예제 (colspan, rowspan)"
                minHeight="400px"
              />
            </Suspense>
          </div>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            &lt;thead&gt;, &lt;tbody&gt;, &lt;tfoot&gt;을 활용한 테이블 그룹화
          </h3>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/08-table/8.1.table_element_3.html"
                className="min_height_460 mb_result_height_460"
                result={true}
                mode="htmlmixed"
                theme="moxer"
                browser="default"
                title="thead, tbody, tfoot 활용 테이블 그룹화"
                minHeight="460px"
              />
            </Suspense>
          </div>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            접근성을 고려한 테이블(id, headers, scope, aria-label 사용)
          </h3>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/08-table/8.1.table_element_4.html"
                className="min_height_400 mb_result_height_380"
                result={true}
                mode="htmlmixed"
                theme="moxer"
                browser="default"
                title="접근성을 고려한 테이블"
                minHeight="400px"
              />
            </Suspense>
          </div>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주의사항
        </h2>
        <ul className="dot_lst mt_l">
          <li>
            HTML 속성(<code>border</code>, <code>cellpadding</code>,{" "}
            <code>cellspacing</code>) 대신 CSS를 활용하여 디자인을 조정하는 것이
            더 적절합니다.
          </li>
          <li>
            테이블은 데이터를 구조적으로 정리하는 용도로만 사용해야 합니다.
            <mark>
              웹사이트 레이아웃을 만들 때 <code>&lt;table&gt;</code> 요소를
              사용하는 것은 비효율적이며, CSS를 활용한 레이아웃이 더 적절합니다.
            </mark>
          </li>
          <li>
            표의 크기가 커질 경우 모바일 화면에서 스크롤이 가능하도록 CSS로{" "}
            <code>overflow-x: auto;</code>를 설정해야 합니다.
          </li>
        </ul>
      </section>
      <aside className="browser_support mt_xxl" data-tit="table">
        <ul>
          <li className="ie">지원</li>
          <li className="edge">지원</li>
          <li className="chrome">지원</li>
          <li className="firefox">1.0</li>
          <li className="opera">지원</li>
          <li className="safari">지원</li>
        </ul>
      </aside>
      <figure className="img_figure mt_l">
        <img src={IMG.HTML + "/08_html_01.png"} alt="table 요소" />
        <figcaption>table 요소</figcaption>
      </figure>
    </>
  );
}

export default TableElementPage;
