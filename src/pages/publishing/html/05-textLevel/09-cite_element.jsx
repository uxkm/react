import { Suspense, lazy } from "react";
import CodeBlock from "@/components/code/CodeBlock";
import { usePageMeta } from "@/components/common/PageMeta";
import { IMG } from "@/config/path";

const PAGE_LAYOUT = {
  mainClass: "cite_element",
  type: "publishing",
  info: true,
  note: true,
  sideMenu: true,
  reference: true,
  contentList: true,
  bottomEditor: true,
};

const PAGE_DATA = {
  title: "cite element",
  description:
    "cite 요소는 HTML 문서에서 창작물의 제목이나 인용 출처를 명시할 때 사용하는 인라인 태그로, 책, 영화, 논문, 웹사이트, 예술 작품 등 저작물의 이름을 나타낼 때 사용되며 브라우저는 일반적으로 기울임체로 렌더링합니다.",
  keyword: "Markup, HTML, tag, elements, cite",
};

const UkEditorTarget = lazy(() => import("@/components/code/UkEditorTarget"));

function EditorFallback() {
  return <div className="uk_editor min_height_300" aria-hidden />;
}

function CiteElementPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          <code>&lt;cite&gt;</code> 요소는 창작물의 제목이나 출처를 나타내는
          시맨틱 태그로, 책/영화/논문/웹사이트 등 작품명 또는 인용 출처를 명시할
          때 사용합니다.
          <br />
          보통 기울임체로 렌더링되며 <code>&lt;blockquote&gt;</code>,{" "}
          <code>&lt;q&gt;</code>와 함께 사용하면 인용 맥락을 더 명확히 전달할 수
          있습니다.
        </p>
      </blockquote>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주요 역할 및 특징
        </h2>
        <ol className="mt_l ol_lst info_lst gap-column-important-m">
          <li className="weight-600-before t_black_before">
            <strong>창작물의 출처/제목 표시</strong>
            <ul className="dot_lst">
              <li>
                <code>&lt;cite&gt;</code>는 창작물 제목 또는 참조 자료 출처를
                명시합니다.
              </li>
              <li>예: 책/영화/기사/논문 제목.</li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>의미론적 강조</strong>
            <p>
              단순 스타일링이 아니라 출처 정보를 의미론적으로 구분해 전달합니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>스펙 준수</strong>
            <p>
              사람 이름이 아닌 "창작물/출처 제목"에 사용하는 것이 원칙입니다.
            </p>
          </li>
        </ol>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          CSS 기본 값
        </h2>
        <CodeBlock title="cite element CSS" className="mt_l" language="css">
          {`cite {
  display: inline;
  font-style: italic;
}`}
        </CodeBlock>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          기본 문법
        </h2>
        <CodeBlock title="cite element syntax" className="mt_l" language="html">
          {`<cite>작품 또는 자료 제목</cite>`}
        </CodeBlock>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          속성
        </h2>
        <p className="mt_l">
          <code>&lt;cite&gt;</code> 요소는 고유 속성이 없으며 글로벌 속성만
          사용합니다.
        </p>
        <CodeBlock title="cite element attr" className="mt_m" language="html">
          {`<p id="citation">
  참고 도서: <cite class="book-title">HTML5 가이드</cite>
</p>`}
        </CodeBlock>
      </section>
      <section className="view_editor indent mt_xxl">
        <h2 className="ml_mn ve_tit">예제</h2>
        <article className="mt_l indent">
          <h3 className="ml_mn">책 제목 참조</h3>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/05-textLevel/5.9.cite_element.html"
                className="min_height_300 mb_result_height_200"
                mode="htmlmixed"
                browser="default"
                theme="moxer"
                title="책 제목 참조"
                minHeight="300px"
                result
              />
            </Suspense>
          </div>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">영화 제목 표시</h3>
          <CodeBlock title="영화 제목 표시" className="mt_m" language="html">
            {`<p>
  저는 영화 <cite>인터스텔라</cite>를 감명 깊게 보았습니다.
</p>`}
          </CodeBlock>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">인용문의 출처</h3>
          <CodeBlock title="인용문의 출처" className="mt_m" language="html">
            {`<blockquote>
  "웹 표준은 개발자들에게 큰 이점을 제공합니다."
  <footer>출처: <cite>W3C 웹 표준 문서</cite></footer>
</blockquote>`}
          </CodeBlock>
        </article>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주의사항
        </h2>
        <ul className="dot_lst mt_l">
          <li>
            <code>&lt;cite&gt;</code>는 단순 이탤릭 스타일 목적이 아니라 출처나
            작품 제목을 나타낼 때 사용하세요.
          </li>
          <li>
            인용문 본문은 <code>&lt;blockquote&gt;</code> 또는{" "}
            <code>&lt;q&gt;</code>
            로, 출처 표시는 <code>&lt;cite&gt;</code>로 역할을 구분하는 것이
            좋습니다.
          </li>
        </ul>
      </section>
      <aside className="browser_support mt_xxl" data-tit="cite">
        <ul>
          <li className="ie">지원</li>
          <li className="edge">지원</li>
          <li className="chrome">지원</li>
          <li className="firefox">지원</li>
          <li className="opera">지원</li>
          <li className="safari">지원</li>
        </ul>
      </aside>
      <figure className="img_figure mt_l">
        <img src={`${IMG.HTML}/05_html_09.png`} alt="cite 요소" />
        <figcaption>cite 요소</figcaption>
      </figure>
    </>
  );
}

export default CiteElementPage;
