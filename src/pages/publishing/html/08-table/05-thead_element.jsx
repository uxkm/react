import { Suspense, lazy } from "react";
import { usePageMeta } from "@/components/common/PageMeta";
import CodeBlock from "@/components/code/CodeBlock";
import { IMG } from "@/config/path";

const PAGE_LAYOUT = {
  mainClass: "thead_element",
  type: "publishing",
  info: true,
  note: true,
  sideMenu: true,
  reference: true,
  contentList: true,
  bottomEditor: true,
};

const PAGE_DATA = {
  title: "thead element",
  description:
    "thead 요소는 HTML 문서에서 table 요소의 머리글 영역을 정의할 때 사용하는 태그로, 내부에 하나 이상의 tr 요소를 포함하고 각 행에는 보통 th 요소를 사용하여 열의 제목이나 분류 기준을 명확하게 표시합니다. 이 페이지에서는 thead 요소의 주요 역할 및 특징을 설명하고, thead 요소의 용도와 구조적 위치에 따른 사용 예시를 소개합니다.",
  keyword:
    "Markup, HTML, tag, elements, table, caption, colgroup, col, thead, tbody, tfoot, tr, th, td",
};

const UkEditorTarget = lazy(
  () => import("@/components/code/UkEditorTarget"),
);

function EditorFallback() {
  return <div className="uk_editor min_height_400" aria-hidden />;
}

function TheadElementPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          <code>&lt;thead&gt;</code> 요소는 <code>&lt;table&gt;</code> 요소
          내에서 <strong>표의 머리글 영역(헤더 행들)</strong>
          <b>을 나타내는 시맨틱 태그</b>로, <b>일반적으로 열 제목이나 각 열의
          의미를 설명하는 데이터를 포함합니다.</b>
          <br />
          내부에는 하나 이상의 <code>&lt;tr&gt;</code>(행)을 포함하고, 각 행
          안에는 보통 <code>&lt;th&gt;</code>(헤더 셀)을 사용하여 내용을
          정의합니다. <code>&lt;tbody&gt;</code>, <code>&lt;tfoot&gt;</code>과
          함께 표의 구조를 명확하게 구분하며, 접근성 향상은 물론{" "}
          <b>스크린 리더와 고급 테이블 기능(예: 고정 헤더)</b> 구현 시에도
          중요한 역할을 합니다.
        </p>
      </blockquote>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주요 역할 및 특징
        </h2>
        <ol className="mt_l ol_lst info_lst gap-column-important-m">
          <li className="weight-600-before t_black_before">
            <strong>테이블의 머리글(헤더) 정의</strong>
            <p>
              <code>&lt;thead&gt;</code>는 테이블의 머리글(열의 제목) 을 지정하고,{" "}
              <code>&lt;tbody&gt;</code>와 <code>&lt;tfoot&gt;</code>으로
              이어지는 데이터와의 구분을 명확히 합니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>테이블 헤더 그룹화</strong>
            <ul className="dot_lst">
              <li>
                <code>&lt;thead&gt;</code> 요소는 테이블의 제목 행(
                <code>&lt;tr&gt;</code>)을 그룹화하는 역할을 합니다.
              </li>
              <li>
                일반적으로 각 열의 제목을 포함하는 <code>&lt;th&gt;</code>{" "}
                요소를 포함합니다.
              </li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>접근성 향상</strong>
            <ul className="dot_lst">
              <li>
                스크린 리더가 머리글과 데이터를 구분해 읽을 수 있어, 시각
                장애인을 위한 접근성이 높아집니다.
              </li>
              <li>
                <code>&lt;th&gt;</code>의 <code>scope</code> 속성과 함께
                사용하면 열 또는 행의 제목임을 명시할 수 있습니다.
              </li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>CSS를 통한 고정 헤더 및 스타일링 가능</strong>
            <ul className="dot_lst">
              <li>
                <code>position: sticky;</code>를 사용해 스크롤 시 고정되는
                헤더를 만들 수 있습니다.
              </li>
              <li>
                <code>background-color</code>, <code>font-weight</code> 등을
                사용해 머리글을 강조할 수 있습니다.
              </li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>반복되는 테이블 헤더</strong>
            <p>
              일부 브라우저 및 PDF 출력 시, <code>&lt;thead&gt;</code> 요소는
              페이지가 넘어갈 때 자동으로 반복 표시될 수 있습니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>정렬 및 필터링 시 유용</strong>
            <p>자바스크립트를 사용해 정렬 및 필터링 기능을 추가할 때 유용합니다.</p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>반드시 &lt;table&gt; 내에서만 사용 가능</strong>
            <ul className="dot_lst">
              <li>
                <code>&lt;thead&gt;</code> 요소는 반드시 <code>&lt;table&gt;</code>{" "}
                내부에서 사용해야 하며,
              </li>
              <li>
                <code>&lt;tbody&gt;</code>, <code>&lt;tfoot&gt;</code>과 함께
                사용하면 테이블의 논리적 구조를 더욱 명확하게 만들 수 있습니다.
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
          <code>&lt;thead&gt;</code> 요소는 아래와 같은 기본값이 적용됩니다.
        </p>
        <CodeBlock title="thead element CSS" className="mt_m" language="css">
          {`thead {
  display: table-header-group;
  font-weight: bold;
  text-align: center;
  vertical-align: middle;
}`}
        </CodeBlock>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          기본 문법
        </h2>
        <CodeBlock title="thead element syntax" className="mt_l" language="html">
          {`<table>
  <thead> <!-- 테이블 헤더 그룹화 -->
    <tr>
      <th>이름</th>
      <th>나이</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>홍길동</td>
      <td>30</td>
    </tr>
    <tr>
      <td>김영희</td>
      <td>25</td>
    </tr>
  </tbody>
</table>`}
        </CodeBlock>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn">속성</h2>
        <p className="mt_l">
          <code>&lt;thead&gt;</code> 요소는 <b className="t_black">고유 속성</b>
          을 가지지 않으며,
          <mark>
            글로벌 속성(<code>class</code>, <code>id</code>, <code>style</code>,{" "}
            <code>aria-*</code>, <code>data-*</code> 등)만 사용할 수 있습니다.
          </mark>
        </p>
      </section>

      <section className="view_editor indent mt_xxl">
        <h2 className="ml_mn ve_tit">예제</h2>

        <article className="mt_l indent">
          <h3 className="ml_mn">
            <code className="font-21-important weight-600">&lt;thead&gt;</code>와
            <code className="font-21-important weight-600">&lt;tbody&gt;</code>를
            사용하여 테이블 구조화
          </h3>
          <CodeBlock
            title="thead와 tbody를 사용하여 테이블 구조화"
            className="mt_m"
            language="html"
          >
            {`<table>
  <thead>
    <tr>
      <th>제품명</th>
      <th>가격</th>
      <th>재고</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>노트북</td>
      <td>1,500,000원</td>
      <td>10개</td>
    </tr>
    <tr>
      <td>스마트폰</td>
      <td>800,000원</td>
      <td>5개</td>
    </tr>
  </tbody>
</table>`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            <code className="font-21-important weight-600">&lt;thead&gt;</code>를
            고정하여 스크롤 시 항상 보이게 설정
          </h3>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/08-table/8.5.thead_element_1.html"
                className="min_height_480 mb_result_height_480"
                result={true}
                mode="htmlmixed"
                theme="moxer"
                browser="default"
                title="thead 고정 스크롤 예제"
                minHeight="480px"
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
            <code>&lt;thead&gt;</code> 요소는 반드시 <code>&lt;table&gt;</code>{" "}
            내부에서 사용해야 하며, 단독으로 사용할 수 없습니다.
          </li>
          <li>
            <code>&lt;thead&gt;</code> 요소는 반드시 <code>&lt;tbody&gt;</code>{" "}
            요소보다 먼저 선언되어야 합니다.
          </li>
          <li>
            <code>&lt;thead&gt;</code> 내의 모든 셀은 <code>&lt;th&gt;</code>를
            사용해 제목으로 지정해야 합니다.
            <br />
            <code>&lt;td&gt;</code>는 사용하지 않는 것이 원칙입니다.
          </li>
        </ul>
      </section>
      <aside className="browser_support mt_xxl" data-tit="thead">
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
        <img src={IMG.HTML + "/08_html_05.png"} alt="thead 요소" />
        <figcaption>thead 요소</figcaption>
      </figure>
    </>
  );
}

export default TheadElementPage;
