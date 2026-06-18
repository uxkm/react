import { Suspense, lazy } from "react";
import { usePageMeta } from "@/components/common/PageMeta";
import CodeBlock from "@/components/code/CodeBlock";
import { IMG } from "@/config/path";

const PAGE_LAYOUT = {
  mainClass: "tfoot_element",
  type: "publishing",
  info: true,
  note: true,
  sideMenu: true,
  reference: true,
  contentList: true,
  bottomEditor: true,
};

const PAGE_DATA = {
  title: "tfoot element",
  description:
    "tfoot 요소는 HTML 문서에서 table 요소의 바닥글 영역을 정의하는 태그로, 주로 합계, 요약, 주석 등 표 전체를 정리하거나 마무리하는 데이터를 제공할 때 사용되며 내부에는 하나 이상의 tr 요소가 포함되고 td 또는 th 요소로 내용을 구성합니다. 이 페이지에서는 tfoot 요소의 주요 역할 및 특징을 설명하고, tfoot 요소의 용도와 구조적 위치에 따른 사용 예시를 소개합니다.",
  keyword:
    "Markup, HTML, tag, elements, table, caption, colgroup, col, thead, tbody, tfoot, tr, th, td",
};

const UkEditorTarget = lazy(
  () => import("@/components/code/UkEditorTarget"),
);

function EditorFallback() {
  return <div className="uk_editor min_height_400" aria-hidden />;
}

function TfootElementPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          <code>&lt;tfoot&gt;</code> 요소는 <code>&lt;table&gt;</code> 요소
          내에서 <b>표의 바닥글(요약 또는 합계 등)을 나타내는 시맨틱 태그</b>로,{" "}
          <b>주로 표 본문의 계산 결과나 요약 정보를 하단에 제공할 때 사용됩니다.</b>
          <br />
          내부에는 하나 이상의 <code>&lt;tr&gt;</code>(행)을 포함하며,{" "}
          <code>&lt;td&gt;</code> 또는 <code>&lt;th&gt;</code> 요소를 통해
          내용을 구성합니다.
          <br />
          HTML 구조상 <code>&lt;thead&gt;</code>,{" "}
          <code className="weight-600 t_purple">&lt;tfoot&gt;</code>,{" "}
          <code>&lt;tbody&gt;</code> 순으로 작성하는 것이 일반적이지만,{" "}
          <code>&lt;thead&gt;</code>, <code>&lt;tbody&gt;</code>,{" "}
          <code className="weight-600 t_purple">&lt;tfoot&gt;</code> 순서로
          작성해도 표준에 어긋나는 것은 아닙니다.
          <br />
          즉, <b>작성 순서와 관계없이 실제 화면에서는 바닥글로 표시</b>되며,{" "}
          <b>요약이나 총합 등의 정보를 하단에 고정된 구조로 제공</b>할 수
          있습니다.
          <br />
          데이터의 요약이나 고정 바닥글을 제공할 때 유용하며, 접근성과 테이블
          구조 이해도를 높이는 데 도움을 줍니다.
        </p>
      </blockquote>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주요 역할 및 특징
        </h2>
        <ol className="mt_l ol_lst info_lst gap-column-important-m">
          <li className="weight-600-before t_black_before">
            <strong>테이블의 바닥글(푸터) 정의</strong>
            <ul className="dot_lst">
              <li>
                총합, 요약, 메모, 출처 등의 정보를 담아, 테이블의 마무리 역할을
                합니다.
              </li>
              <li>예: "총 합계", "출처: 내부 자료" 등.</li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>&lt;thead&gt;, &lt;tbody&gt;와 함께 사용 가능</strong>
            <p>
              <code>&lt;thead&gt;</code>, <code>&lt;tbody&gt;</code>와 함께
              사용하여 테이블을 논리적으로 구조화할 수 있습니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>접근성 향상</strong>
            <p>
              스크린 리더가 머리글, 본문, 바닥글을 구별해 읽어주기 때문에 시각
              장애인에게 유용합니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>반복되는 테이블에서 유용</strong>
            <p>
              페이지가 넘어가는 테이블을 출력할 때 <code>&lt;tfoot&gt;</code>에
              포함된 내용이 각 페이지마다 반복 표시될 수 있습니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>CSS를 통한 고정 바닥글 구현 가능</strong>
            <p>
              <code>position: sticky;</code>를 사용해 스크롤 시에도 하단에
              고정할 수 있습니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>반드시 &lt;table&gt; 내에서 사용</strong>
            <p>
              <code>&lt;tfoot&gt;</code> 요소는 반드시 <code>&lt;table&gt;</code>{" "}
              내부에서 사용해야 하며, 단독으로 사용할 수 없습니다.
            </p>
          </li>
        </ol>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          CSS 기본 값
        </h2>
        <p className="mt_l">
          <code>&lt;tfoot&gt;</code> 요소는 아래와 같은 기본값이 적용됩니다.
        </p>
        <CodeBlock title="tfoot element CSS" className="mt_m" language="css">
          {`tfoot {
  display: table-footer-group;
  vertical-align: middle;
}`}
        </CodeBlock>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          기본 문법
        </h2>
        <CodeBlock title="tfoot element syntax" className="mt_l" language="html">
          {`<table>
  <thead>
    <tr>
      <th>상품명</th>
      <th>가격</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>노트북</td>
      <td>1,500,000원</td>
    </tr>
    <tr>
      <td>스마트폰</td>
      <td>800,000원</td>
    </tr>
  </tbody>
  <tfoot> <!-- 테이블의 바닥글(푸터) 정의 -->
    <tr>
      <td>총 합계</td>
      <td>3,100,000원</td>
    </tr>
  </tfoot>
</table>`}
        </CodeBlock>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn">속성</h2>
        <p className="mt_l">
          <code>&lt;tfoot&gt;</code> 요소는 <b className="t_black">고유 속성</b>을
          가지지 않으며,
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
            <code className="font-21-important weight-600">&lt;thead&gt;</code>,
            <code className="font-21-important weight-600">&lt;tbody&gt;</code>,
            <code className="font-21-important weight-600">&lt;tfoot&gt;</code>을
            함께 사용
          </h3>
          <CodeBlock title="테이블 구조화" className="mt_m" language="html">
            {`<table>
  <thead>
    <tr>
      <th>이름</th>
      <th>과목</th>
      <th>점수</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>김철수</td>
      <td>수학</td>
      <td>90</td>
    </tr>
    <tr>
      <td>이영희</td>
      <td>국어</td>
      <td>85</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colSpan="2">평균 점수</td>
      <td>87.5</td>
    </tr>
  </tfoot>
</table>`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">고정 바닥글 (position: sticky 사용)</h3>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/08-table/8.7.tfoot_element_1.html"
                className="min_height_480 mb_result_height_480"
                result={true}
                mode="htmlmixed"
                theme="moxer"
                browser="default"
                title="고정 바닥글 예제"
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
            표준 상에서는 <code>&lt;thead&gt;</code> 다음,{" "}
            <code>&lt;tbody&gt;</code> 이전에 두는 것이 권장되지만, 위치에
            상관없이 작동하며 브라우저는 자동으로 테이블의 하단에 표시합니다.
          </li>
          <li>
            <code>&lt;tfoot&gt;</code>은 선택적 요소이며, 테이블이 작동하는 데
            필수 요소는 아닙니다.
          </li>
          <li>
            <code>&lt;tfoot&gt;</code> 내에는 반드시 <code>&lt;tr&gt;</code>와
            함께 <code>&lt;td&gt;</code> 또는 <code>&lt;th&gt;</code>를
            사용해야 합니다.
          </li>
        </ul>
      </section>
      <aside className="browser_support mt_xxl" data-tit="tfoot">
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
        <img src={IMG.HTML + "/08_html_07.png"} alt="tfoot 요소" />
        <figcaption>tfoot 요소</figcaption>
      </figure>
    </>
  );
}

export default TfootElementPage;
