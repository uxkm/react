import CodeBlock from "@/components/code/CodeBlock";
import { usePageMeta } from "@/components/common/PageMeta";
import { IMG } from "@/config/path";

const PAGE_LAYOUT = {
  mainClass: "tr_element",
  type: "publishing",
  info: true,
  note: true,
  sideMenu: true,
  reference: true,
  contentList: true,
  bottomEditor: true,
};

const PAGE_DATA = {
  title: "tr element",
  description:
    "tr 요소는 HTML 문서에서 table 요소의 하나의 행(row)을 정의하는 태그로, thead, tbody, tfoot과 같은 표의 구조적 영역 내부에 위치하며 각 행은 하나 이상의 th 또는 td 요소로 구성됩니다. 이 페이지에서는 tr 요소의 주요 역할 및 특징을 설명하고, tr 요소의 용도와 구조적 위치에 따른 사용 예시를 소개합니다.",
  keyword:
    "Markup, HTML, tag, elements, table, caption, colgroup, col, thead, tbody, tfoot, tr, th, td",
};

function TrElementPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          <code>&lt;tr&gt;</code> 요소는 <code>&lt;table&gt;</code> 요소 안에서{" "}
          <b>하나의 행(row)을 정의하는 시맨틱 태그</b>로,{" "}
          <code>&lt;thead&gt;</code>, <code>&lt;tbody&gt;</code>,{" "}
          <code>&lt;tfoot&gt;</code> 등 <b>표의 각 영역 내부에서 사용됩니다.</b>
          <br />
          <code>&lt;tr&gt;</code>은 내부에 <code>&lt;th&gt;</code>(제목 셀) 또는{" "}
          <code>&lt;td&gt;</code>(일반 셀)을 포함하며, 각 셀들을 가로로
          나열하여 <b>하나의 수평 행</b>을 구성합니다.
          <br />
          모든 테이블 데이터는 하나 이상의 <code>&lt;tr&gt;</code> 요소로 묶어,{" "}
          <b>표의 각 행을 논리적으로 구성하고 정렬</b>할 수 있습니다.
          <br />
          <code>&lt;tr&gt;</code>은 표 구조에서 <b>가장 기본적인 반복 단위</b>로
          사용됩니다.
        </p>
      </blockquote>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주요 역할 및 특징
        </h2>
        <ol className="mt_l ol_lst info_lst gap-column-important-m">
          <li className="weight-600-before t_black_before">
            <strong>테이블의 행(Row) 정의</strong>
            <ul className="dot_lst">
              <li>
                <code>&lt;tr&gt;</code> 요소는 <code>&lt;table&gt;</code> 내부에서
                테이블의 한 줄을 나타내는 기본적인 요소입니다.
              </li>
              <li>
                한 개 이상의 <code>&lt;td&gt;</code> 또는{" "}
                <code>&lt;th&gt;</code> 요소를 포함하여 열(Column)들을 구성할 수
                있습니다.
              </li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>반드시 &lt;table&gt; 내부에서 사용해야 함</strong>
            <p>
              <code>&lt;tr&gt;</code> 요소는 단독으로 사용할 수 없으며, 반드시{" "}
              <code>&lt;table&gt;</code>, <code>&lt;thead&gt;</code>,{" "}
              <code>&lt;tbody&gt;</code>, <code>&lt;tfoot&gt;</code> 내부에서
              사용해야 합니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>CSS를 활용하여 스타일 적용 가능</strong>
            <ul className="dot_lst">
              <li>
                <code>&lt;tr&gt;</code> 자체에는 스타일이 없지만, CSS를 활용하여
                배경색, 높이, 테두리 등의 스타일을 설정할 수 있습니다.
              </li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>JavaScript와의 호환성</strong>
            <p>DOM을 통해 동적으로 행을 추가, 삭제할 수 있으며, 자주 사용됩니다.</p>
          </li>
        </ol>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          CSS 기본 값
        </h2>
        <p className="mt_l">
          <code>&lt;tr&gt;</code> 요소는 아래와 같은 기본값이 적용됩니다.
        </p>
        <CodeBlock title="tr element CSS" className="mt_m" language="css">
          {`tr {
  display: table-row;
}`}
        </CodeBlock>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          기본 문법
        </h2>
        <CodeBlock title="tr element syntax" className="mt_l" language="html">
          {`<table>
  <tr> <!-- 테이블의 행(Row) 정의 -->
    <th>이름</th>
    <th>나이</th>
    <th>직업</th>
  </tr>
  <tr> <!-- 테이블의 행(Row) 정의 -->
    <td>김철수</td>
    <td>30</td>
    <td>개발자</td>
  </tr>
</table>`}
        </CodeBlock>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn">속성</h2>
        <p className="mt_l">
          <code>&lt;tr&gt;</code> 요소는 <b className="t_black">고유 속성</b>을
          가지지 않으며,
          <mark>
            글로벌 속성(<code>class</code>, <code>id</code>, <code>style</code>,{" "}
            <code>aria-*</code>, <code>data-*</code> 등)만 사용할 수 있습니다.
          </mark>
        </p>
      </section>

      <section className="view_editor indent mt_xxl">
        <h2 className="ml_mn ve_tit">예제</h2>
        <div className="mt_l">
          <p>
            <span className="underline">
              <mark>
                <code>&lt;tr&gt;</code> 요소는 단독으로 사용하면 의미가 없습니다.
              </mark>
              <code>&lt;tr&gt;</code> 요소는 <code>&lt;table&gt;</code> 요소의
              내부에서 <code>&lt;th&gt;</code>, <code>&lt;td&gt;</code> 요소의
              부모 요소로 사용되어, 테이블의 행(Row)을 정의하는 역할을 합니다.
            </span>
            <br />
            다음 섹션(<i className="t_blue weight-800">th element</i>,{" "}
            <i className="t_blue weight-800">td element</i>)에서{" "}
            <code>&lt;tr&gt;</code> 요소와 함께 사용하는 예제를 확인할 수
            있습니다.
          </p>
          <a
            href="/publishing/html/08-table/09-th_element"
            target="_blank"
            title="새창 열림"
            className="box_link external mt_m mr_4"
          >
            <b>th element</b> 비로가기
          </a>
          <a
            href="/publishing/html/08-table/10-td_element"
            target="_blank"
            title="새창 열림"
            className="box_link external mt_m"
          >
            <b>td element</b> 비로가기
          </a>
        </div>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주의사항
        </h2>
        <ul className="dot_lst mt_l">
          <li>
            <code>&lt;tr&gt;</code>는 반드시 <code>&lt;table&gt;</code> 내에서만
            사용 가능합니다.
          </li>
          <li>
            <code>&lt;tr&gt;</code> 내부에는 반드시 <code>&lt;th&gt;</code> 또는{" "}
            <code>&lt;td&gt;</code>가 있어야 합니다.
            <br />
            <code>&lt;tr&gt;</code> 요소는 행을 나타내는 역할만 하므로, 셀(
            <code>&lt;th&gt;</code> 또는 <code>&lt;td&gt;</code>)을 포함하지
            않으면 아무것도 표시되지 않습니다.
          </li>
        </ul>
      </section>
      <aside className="browser_support mt_xxl" data-tit="tr">
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
        <img src={IMG.HTML + "/08_html_08.png"} alt="tr 요소" />
        <figcaption>tr 요소</figcaption>
      </figure>
    </>
  );
}

export default TrElementPage;
