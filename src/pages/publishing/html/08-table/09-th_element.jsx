import { Suspense, lazy } from "react";
import { usePageMeta } from "@/components/common/PageMeta";
import CodeBlock from "@/components/code/CodeBlock";
import { IMG } from "@/config/path";

const PAGE_LAYOUT = {
  mainClass: "th_element",
  type: "publishing",
  info: true,
  note: true,
  sideMenu: true,
  reference: true,
  contentList: true,
  bottomEditor: true,
};

const PAGE_DATA = {
  title: "th element",
  description:
    "th 요소는 HTML 문서에서 table 요소 내의 제목 셀(header cell)을 정의하는 태그로, 반드시 tr 요소 내부에서 사용되며 해당 열이나 행의 의미를 설명하는 용도로 사용되고 브라우저는 기본적으로 굵은 글씨와 가운데 정렬로 렌더링합니다. 이 페이지에서는 th 요소의 주요 역할 및 특징을 설명하고, th 요소의 용도와 구조적 위치에 따른 사용 예시를 소개합니다.",
  keyword:
    "Markup, HTML, tag, elements, table, caption, colgroup, col, thead, tbody, tfoot, tr, th, td",
};

const UkEditorTarget = lazy(
  () => import("@/components/code/UkEditorTarget"),
);

function EditorFallback() {
  return <div className="uk_editor min_height_400" aria-hidden />;
}

function ThElementPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          <code>&lt;th&gt;</code> 요소는 <code>&lt;table&gt;</code> 요소 내에서{" "}
          <strong>표의 제목 셀(header cell)</strong>
          <b>을 나타내는 시맨틱 태그</b>로, <b>보통 열(column) 또는 행(row)의
          내용을 설명하는 데 사용됩니다.</b>
          <br />
          기본적으로 <b>굵은 글씨와 가운데 정렬</b>로 표시되며,{" "}
          <code>&lt;tr&gt;</code> 요소 안에 포함되어 다른 셀(
          <code>&lt;td&gt;</code>)들과 함께 한 행을 구성합니다. <code>scope</code>{" "}
          속성을 사용하면 제목 셀이 <b>행 전체 또는 열 전체에 적용</b>되는지
          명확히 지정할 수 있어, <b>스크린 리더 등 접근성 기술에서도 정확한 정보 전달</b>
          이 가능합니다.
          <br />
          표의 구조와 의미를 명확히 표현하는 데 필수적인 역할을 합니다.
        </p>
      </blockquote>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주요 역할 및 특징
        </h2>
        <ol className="mt_l ol_lst info_lst gap-column-important-m">
          <li className="weight-600-before t_black_before">
            <strong>머리글 셀(헤더 셀) 정의</strong>
            <ul className="dot_lst">
              <li>
                <code>&lt;th&gt;</code> 요소는 열(Column)이나 행(Row)의 제목을
                정의할 때 사용됩니다.
              </li>
              <li>
                기본적으로 글자가 굵고 중앙 정렬되며, 데이터 셀(
                <code>&lt;td&gt;</code>)과 함께 사용됩니다.
              </li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>접근성 향상 (scope 속성 사용)</strong>
            <ul className="dot_lst">
              <li>
                스크린 리더가 머리글 셀과 데이터를 연관지어 읽어주기 때문에 시각
                장애인을 위한 접근성이 높아집니다.
              </li>
              <li>
                <code>scope</code> 속성을 통해 해당 셀의 역할(열 제목, 행 제목,
                그룹 제목)을 명확히 할 수 있습니다.
              </li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>데이터의 이해도 향상</strong>
            <p>
              표를 볼 때 데이터가 어떤 카테고리에 속하는지 쉽게 파악할 수
              있습니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>CSS를 통해 스타일링 가능</strong>
            <p>
              <code>background-color</code>, <code>text-align</code>,{" "}
              <code>font-weight</code> 등을 사용해 다양하게 스타일링할 수
              있습니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>반드시 &lt;table&gt; 내부에서 사용해야 함</strong>
            <p>
              <code>&lt;th&gt;</code> 요소는 <code>&lt;table&gt;</code>의{" "}
              <code>&lt;tr&gt;</code> 내부에서 사용되며, 단독으로 사용할 수
              없습니다.
            </p>
          </li>
        </ol>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          CSS 기본 값
        </h2>
        <p className="mt_l">
          <code>&lt;th&gt;</code> 요소는 아래와 같은 기본값이 적용됩니다.
        </p>
        <CodeBlock title="th element CSS" className="mt_m" language="css">
          {`th {
  display: table-cell;
  vertical-align: inherit;
  font-weight: bold;
  text-align: center;
}`}
        </CodeBlock>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          기본 문법
        </h2>
        <CodeBlock title="th element syntax" className="mt_l" language="html">
          {`<table>
  <tr>
    <th>이름</th> <!-- 머리글 셀(헤더 셀) 정의 -->
    <th>나이</th> <!-- 머리글 셀(헤더 셀) 정의 -->
    <th>직업</th> <!-- 머리글 셀(헤더 셀) 정의 -->
  </tr>
  <tr>
    <td>김철수</td>
    <td>30</td>
    <td>개발자</td>
  </tr>
</table>`}
        </CodeBlock>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn">속성</h2>
        <article className="mt_l indent dp_pc">
          <h3 className="ml_mn t_blue">
            <code className="font-21-important t_blue weight-600">&lt;th&gt;</code>{" "}
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
                  <code>scope</code>
                </p>
                <p className="cell content">헤더의 적용 범위를 지정</p>
              </li>
              <li>
                <p className="cell value">
                  <code>colspan</code>
                </p>
                <p className="cell content">가로로 병합할 셀의 개수를 지정</p>
              </li>
              <li>
                <p className="cell value">
                  <code>rowspan</code>
                </p>
                <p className="cell content">세로로 병합할 셀의 개수를 지정</p>
              </li>
              <li>
                <p className="cell value">
                  <code>headers</code>
                </p>
                <p className="cell content">
                  참조할 다른 <code>&lt;th&gt;</code> 요소의 ID를 지정
                </p>
              </li>
              <li>
                <p className="cell value">
                  <code>abbr</code>
                </p>
                <p className="cell content">헤더 셀의 약어를 지정</p>
              </li>
            </ul>
          </div>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [scope] <i className="attr_optional">선택 사항</i>{" "}
            <span className="t_blue el_inline_block">&lt;th scope="값"&gt;</span>
          </h3>
          <p className="mt_ms">
            테이블의 헤더(<code>&lt;th&gt;</code>)가 어느 영역(열 제목, 행 제목,
            그룹 제목)에 해당하는지 지정하는 속성입니다. 스크린 리더 등의 보조
            기술에서 테이블을 읽을 때 유용합니다.
          </p>
          <dl className="dl_dot_lst mt_s">
            <dt>설정 가능한 값 :</dt>
            <dd className="t_darkgreen">
              <code className="t_darkgreen">col</code> : 현재 열(Column)에 대한
              헤더
            </dd>
            <dd className="t_blue">
              <code className="t_darkblue">row</code> : 현재 행(Row)에 대한 헤더
            </dd>
            <dd>
              <code>colgroup</code> : 여러 열(Column group)에 대한 헤더
            </dd>
            <dd>
              <code>rowgroup</code> : 여러 행(Row group)에 대한 헤더
            </dd>
          </dl>
          <figure className="img_figure mt_m">
            <img src="/images/html/uxkm_img_table_rowcol.svg" alt="table 요소의 부분 설명" />
            <figcaption>[table 요소의 부분 설명]</figcaption>
          </figure>
          <CodeBlock title="th 속성 [scope]" className="mt_m" language="html">
            {`<table>
  <thead>
    <tr>
      <th scope="col">이름</th>
      <th scope="col">나이</th>
      <th scope="col">직업</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">홍길동</th>
      <td>30</td>
      <td>개발자</td>
    </tr>
  </tbody>
</table>`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [colspan] <i className="attr_optional">선택 사항</i>{" "}
            <span className="t_blue el_inline_block">&lt;th colspan="값"&gt;</span>
          </h3>
          <p className="mt_ms">가로로 병합할 셀의 개수를 지정합니다.</p>
          <CodeBlock title="th 속성 [colspan]" className="mt_m" language="html">
            {`<table>
  <tr>
    <th colspan="2">이름 및 나이</th>
    <th>직업</th>
  </tr>
  <tr>
    <td>홍길동</td>
    <td>30</td>
    <td>개발자</td>
  </tr>
</table>`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [rowspan] <i className="attr_optional">선택 사항</i>{" "}
            <span className="t_blue el_inline_block">&lt;th rowspan="값"&gt;</span>
          </h3>
          <p className="mt_ms">세로로 병합할 셀의 개수를 지정합니다.</p>
          <CodeBlock title="th 속성 [rowspan]" className="mt_m" language="html">
            {`<table>
  <tr>
    <th rowspan="2">이름</th>
    <td>홍길동</td>
  </tr>
  <tr>
    <td>이순신</td>
  </tr>
</table>`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [headers] <i className="attr_optional">선택 사항</i>{" "}
            <span className="t_blue el_inline_block">&lt;th headers="값"&gt;</span>
          </h3>
          <p className="mt_ms">
            현재 셀이 연결된 헤더(<code>id</code>가 있는{" "}
            <code>&lt;th&gt;</code> 요소)를 명시적으로 지정하는 역할을 합니다.
          </p>
          <dl className="dl_dot_lst mt_s">
            <dt>형식 :</dt>
            <dd>
              공백으로 구분된 <code>id</code> 리스트
            </dd>
          </dl>
          <CodeBlock title="th 속성 [headers]" className="mt_m" language="html">
            {`<table>
  <thead>
    <tr>
      <th id="room">객실 유형</th>
      <th id="weekday">평일 요금</th>
      <th id="weekend">주말 요금</th>
      <th id="status">예약 가능 여부</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th id="standard" headers="room" scope="row">스탠다드룸</th>
      <td headers="room weekday">₩100,000</td>
      <td headers="room weekend">₩120,000</td>
      <td headers="room status">가능</td>
    </tr>
  </tbody>
</table>`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [abbr] <i className="attr_optional">선택 사항</i>{" "}
            <span className="t_blue el_inline_block">&lt;th abbr="값"&gt;</span>
          </h3>
          <p className="mt_ms">
            표의 제목 셀에 대한 약어나 축약된 정보를 제공합니다. 화면
            낭독기(screen reader)와 같은 접근성 도구에서 활용되어 보다 간결한
            정보를 제공할 수 있습니다.
          </p>
          <CodeBlock title="th 속성 [abbr]" className="mt_m" language="html">
            {`<table>
  <tr>
    <th abbr="나이">Age</th>
    <th>직업</th>
  </tr>
  <tr>
    <td>30</td>
    <td>개발자</td>
  </tr>
</table>`}
          </CodeBlock>
        </article>
      </section>

      <section className="view_editor indent mt_xxl">
        <h2 className="ml_mn ve_tit">예제</h2>
        <article className="mt_l indent">
          <h3 className="ml_mn">펜션 객실 예약 테이블(scope, headers 사용)</h3>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/08-table/8.9.th_element_1.html"
                className="min_height_400 mb_result_height_300"
                result={true}
                mode="htmlmixed"
                theme="moxer"
                browser="default"
                title="펜션 객실 예약 테이블"
                minHeight="400px"
              />
            </Suspense>
          </div>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">학생 성적표(scope, colspan, rowspan 사용)</h3>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/08-table/8.9.th_element_2.html"
                className="min_height_400 mb_result_height_350"
                result={true}
                mode="htmlmixed"
                theme="moxer"
                browser="default"
                title="학생 성적표"
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
            <code>&lt;th&gt;</code>는 <code>&lt;tr&gt;</code> 내부에서만 사용
            가능합니다. <code>&lt;table&gt;</code> 요소 바깥에서{" "}
            <code>&lt;th&gt;</code>를 단독으로 사용할 수 없습니다.
          </li>
          <li>
            스크린 리더가 머리글의 역할을 정확히 인식할 수 있도록{" "}
            <code>scope</code>를 사용하는 것이 좋습니다.
          </li>
          <li>
            <code>&lt;th&gt;</code> 요소는 <code>&lt;td&gt;</code>와 기본 스타일이
            다릅니다. 기본적으로 굵은 글씨와 중앙 정렬이 적용되며, 스타일을
            변경하려면 CSS를 사용해야 합니다.
          </li>
        </ul>
      </section>
      <aside className="browser_support mt_xxl" data-tit="th">
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
        <img src={IMG.HTML + "/08_html_09.png"} alt="th 요소" />
        <figcaption>th 요소</figcaption>
      </figure>
    </>
  );
}

export default ThElementPage;
