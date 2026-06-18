import { Suspense, lazy } from "react";
import { usePageMeta } from "@/components/common/PageMeta";
import CodeBlock from "@/components/code/CodeBlock";
import { IMG } from "@/config/path";

const PAGE_LAYOUT = {
  mainClass: "td_element",
  type: "publishing",
  info: true,
  note: true,
  sideMenu: true,
  reference: true,
  contentList: true,
  bottomEditor: true,
};

const PAGE_DATA = {
  title: "td element",
  description:
    "td 요소는 HTML 문서에서 table 요소의 일반 데이터 셀(table data cell)을 정의하는 태그로, 반드시 tr 요소 내부에 위치해야 하며 실제 데이터 값을 행과 열 구조에 맞게 배치하는 역할을 합니다. 이 페이지에서는 td 요소의 주요 역할 및 특징을 설명하고, td 요소의 용도와 구조적 위치에 따른 사용 예시를 소개합니다.",
  keyword:
    "Markup, HTML, tag, elements, table, caption, colgroup, col, thead, tbody, tfoot, tr, th, td",
};

const UkEditorTarget = lazy(
  () => import("@/components/code/UkEditorTarget"),
);

function EditorFallback() {
  return <div className="uk_editor min_height_400" aria-hidden />;
}

function TdElementPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          <code>&lt;td&gt;</code> 요소는 <code>&lt;table&gt;</code> 내에서{" "}
          <strong>일반적인 데이터 셀(table data cell)</strong>
          <b>을 나타내는 시맨틱 태그</b>로, <code>&lt;tr&gt;</code> 요소 내부에
          포함되어 <b>표의 실제 콘텐츠를 구성합니다.</b>
          <br />
          각 <code>&lt;td&gt;</code>는 열(column) 하나에 해당하는 데이터를 담으며,
          텍스트, 숫자, 이미지, 링크 등 다양한 콘텐츠를 포함할 수 있습니다.
          제목 셀인 <code>&lt;th&gt;</code>와 달리 기본적으로{" "}
          <b>좌측 정렬과 일반 글씨체</b>로 렌더링되며, 필요에 따라{" "}
          <code>colspan</code>(가로 셀 병합), <code>rowspan</code>(세로 셀 병합)
          속성을 사용해 <b>셀 병합</b>도 가능합니다.
          <br />
          표 구조에서 <b>가장 많이 사용되는 기본 단위</b>입니다.
        </p>
      </blockquote>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주요 역할 및 특징
        </h2>
        <ol className="mt_l ol_lst info_lst gap-column-important-m">
          <li className="weight-600-before t_black_before">
            <strong>데이터 셀 정의</strong>
            <ul className="dot_lst">
              <li>
                <code>&lt;th&gt;</code> 요소와 달리, 일반적인 데이터를 포함하는
                셀입니다.
              </li>
              <li>
                <code>&lt;tr&gt;</code> 내부에서 여러 개의{" "}
                <code>&lt;td&gt;</code> 요소가 사용될 수 있습니다.
              </li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>셀 병합 가능 (colspan, rowspan 속성)</strong>
            <ul className="dot_lst">
              <li>
                <code>colspan</code> : 가로로 셀 병합
              </li>
              <li>
                <code>rowspan</code> : 세로로 셀 병합
              </li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>기본적으로 왼쪽 정렬 및 일반 글꼴 스타일을 가짐</strong>
            <ul className="dot_lst">
              <li>
                <code>&lt;th&gt;</code>와 달리, 글꼴이 굵어지거나 중앙
                정렬되지 않습니다.
              </li>
              <li>정렬, 스타일 등의 변경이 필요하면 CSS를 사용해야 합니다.</li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>반드시 &lt;table&gt; 내부에서 사용해야 함</strong>
            <p>
              <code>&lt;td&gt;</code> 요소는 <code>&lt;table&gt;</code>의{" "}
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
          <code>&lt;td&gt;</code> 요소는 아래와 같은 기본값이 적용됩니다.
        </p>
        <CodeBlock title="td element CSS" className="mt_m" language="css">
          {`td {
  display: table-cell;
  font-weight: normal;
  text-align: left;
  vertical-align: middle;
}`}
        </CodeBlock>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          기본 문법
        </h2>
        <CodeBlock title="td element syntax" className="mt_l" language="html">
          {`<table>
  <tr>
    <th>이름</th>
    <th>나이</th>
    <th>직업</th>
  </tr>
  <tr>
    <td>김철수</td> <!-- 데이터 셀 정의 -->
    <td>30</td> <!-- 데이터 셀 정의 -->
    <td>개발자</td> <!-- 데이터 셀 정의 -->
  </tr>
</table>`}
        </CodeBlock>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn">속성</h2>
        <article className="mt_l indent dp_pc">
          <h3 className="ml_mn t_blue">
            <code className="font-21-important t_blue weight-600">&lt;td&gt;</code>{" "}
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
                  참조할 <code>&lt;th&gt;</code> 요소의 ID를 지정
                </p>
              </li>
              <li>
                <p className="cell value">
                  <code>abbr</code>
                </p>
                <p className="cell content">셀의 약어를 지정</p>
              </li>
            </ul>
          </div>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [colspan] <i className="attr_optional">선택 사항</i>{" "}
            <span className="t_blue el_inline_block">&lt;td colspan="값"&gt;</span>
          </h3>
          <p className="mt_ms">가로로 병합할 셀의 개수를 지정합니다.</p>
          <CodeBlock title="td 속성 [colspan]" className="mt_m" language="html">
            {`<table>
  <tr>
    <td colspan="2">이름 및 나이</td>
    <td>직업</td>
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
            <span className="t_blue el_inline_block">&lt;td rowspan="값"&gt;</span>
          </h3>
          <p className="mt_ms">세로로 병합할 셀의 개수를 지정합니다.</p>
          <CodeBlock title="td 속성 [rowspan]" className="mt_m" language="html">
            {`<table>
  <tr>
    <td rowspan="2">이름</td>
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
            <span className="t_blue el_inline_block">&lt;td headers="값"&gt;</span>
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
          <CodeBlock title="td 속성 [headers]" className="mt_m" language="html">
            {`<table>
  <tr>
    <th id="room">객실 유형</th>
    <th id="weekday">평일 요금</th>
    <th id="weekend">주말 요금</th>
    <th id="status">예약 가능 여부</th>
  </tr>
  <tr>
    <th id="standard" headers="room" scope="row">스탠다드룸</th>
    <td headers="room weekday">₩100,000</td>
    <td headers="room weekend">₩120,000</td>
    <td headers="room status">가능</td>
  </tr>
</table>`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [abbr] <i className="attr_optional">선택 사항</i>{" "}
            <span className="t_blue el_inline_block">&lt;td abbr="값"&gt;</span>
          </h3>
          <p className="mt_ms">
            표의 제목 셀에 대한 약어나 축약된 정보를 제공합니다. 화면
            낭독기(screen reader)와 같은 접근성 도구에서 활용되어 보다 간결한
            정보를 제공할 수 있습니다.
          </p>
          <CodeBlock title="td 속성 [abbr]" className="mt_m" language="html">
            {`<table>
  <tr>
    <td abbr="나이">Age</td>
    <td>직업</td>
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
        <p className="mt_l">
          각 예제는 <code>id</code>, <code>headers</code>, <code>colspan</code>,{" "}
          <code>rowspan</code>, <code>abbr</code>을 활용하여{" "}
          <mark>접근성과 구조를 강화한 예제</mark>입니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">대학 성적표</h3>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/08-table/8.10.td_element_1.html"
                className="min_height_400 mb_result_height_400"
                result={true}
                mode="htmlmixed"
                theme="moxer"
                browser="default"
                title="대학 성적표"
                minHeight="400px"
              />
            </Suspense>
          </div>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">병원 진료 일정표</h3>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/08-table/8.10.td_element_3.html"
                className="min_height_400 mb_result_height_400"
                result={true}
                mode="htmlmixed"
                theme="moxer"
                browser="default"
                title="병원 진료 일정표"
                minHeight="400px"
              />
            </Suspense>
          </div>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">국토교통부 실거래가</h3>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/08-table/8.10.td_element_4.html"
                className="min_height_560 mb_result_height_560"
                result={true}
                mode="htmlmixed"
                theme="moxer"
                browser="default"
                title="국토교통부 실거래가"
                minHeight="560px"
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
            <code>&lt;td&gt;</code> 요소는 반드시 <code>&lt;tr&gt;</code>{" "}
            내부에서 사용해야 합니다. <code>&lt;td&gt;</code>를 단독으로
            사용하거나 <code>&lt;table&gt;</code> 바로 아래 배치하면 올바른 HTML
            구조가 아닙니다.
          </li>
          <li>
            스크린 리더가 머리글과 데이터를 연관 지어 읽을 수 있도록{" "}
            <code>headers</code>를 사용하는 것이 좋습니다.
          </li>
          <li>
            작은 화면에서는 스크롤 또는 숨김 처리가 필요합니다.{" "}
            <code>overflow-x: auto;</code>를 사용해 수평 스크롤을 권장합니다.
          </li>
        </ul>
      </section>
      <aside className="browser_support mt_xxl" data-tit="td">
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
        <img src={IMG.HTML + "/08_html_10.png"} alt="td 요소" />
        <figcaption>td 요소</figcaption>
      </figure>
    </>
  );
}

export default TdElementPage;
