import { Suspense, lazy } from "react";
import CodeBlock from "@/components/code/CodeBlock";
import { usePageMeta } from "@/components/common/PageMeta";
import { IMG } from "@/config/path";

const PAGE_LAYOUT = {
  mainClass: "li_element",
  type: "publishing",
  info: true,
  note: true,
  sideMenu: true,
  reference: true,
  contentList: true,
  depth3Last: false,
  bottomEditor: true,
};

const PAGE_DATA = {
  title: "li element",
  description:
    "li 요소는 HTML 문서에서 항목 목록을 구성할 때 사용되는 태그로, ul, ol 요소 안에 포함되어 각각의 개별 항목을 정의하며 목록 내에서 하나의 줄 또는 항목을 표현합니다. 이 페이지에서는 li 요소의 주요 역할 및 특징을 설명하고, li 요소의 용도와 구조적 위치에 따른 사용 예시를 소개합니다.",
  keyword: "Markup, HTML, tag, elements, ol, ul, li, 리스트 항목",
};

const UkEditorTarget = lazy(() => import("@/components/code/UkEditorTarget"));

function EditorFallback() {
  return <div className="uk_editor min_height_350" aria-hidden />;
}

function LiElementPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          <code>&lt;li&gt;</code> 요소는 <code>&lt;ul&gt;</code>,{" "}
          <code>&lt;ol&gt;</code>의 목록 요소 안에서
          <b>
            <strong>각 개별 항목(list item)</strong>을 정의하는 태그
          </b>
          입니다.
          <br />
          목록의 한 줄 또는 한 항목을 의미하며, 콘텐츠의 수직 나열이나 절차,
          항목 구분 등 다양한 용도로 사용됩니다.
          <code>&lt;li&gt;</code>는 반드시 직계 부모 요소로{" "}
          <code>&lt;ul&gt;</code>, <code>&lt;ol&gt;</code> 중 하나가 있어야
          하며, 필요에 따라 중첩된 목록도 구성할 수 있습니다.
        </p>
      </blockquote>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주요 역할 및 특징
        </h2>
        <ol className="mt_l ol_lst info_lst gap-column-important-m">
          <li className="weight-600-before t_black_before">
            <strong>목록 항목 정의</strong>
            <ul className="dot_lst">
              <li>
                <code>&lt;li&gt;</code>는 비순서 목록(<code>&lt;ul&gt;</code>)과
                순서 목록(<code>&lt;ol&gt;</code>)의 각 항목을 정의합니다.
              </li>
              <li>
                각각의 <code>&lt;li&gt;</code>는 목록에서 하나의 독립된 항목으로
                취급됩니다.
              </li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before mb_sm">
            <strong>다양한 콘텐츠 포함 가능</strong>
            <ul className="dot_lst">
              <li>
                <code>&lt;li&gt;</code>는 텍스트뿐만 아니라, 이미지, 링크, 서브
                목록 등을 포함할 수 있습니다.
              </li>
              <li>
                예)
                <CodeBlock
                  title="li 내부 콘텐츠"
                  className="mt_sm"
                  language="html"
                >
                  {`<li><a href="#">링크</a></li>
<li><img src="image.jpg" alt="이미지"></li>
<li>
  서브 목록
  <ul>
    <li>서브 목록 아이템</li>
    <li>서브 목록 아이템</li>
  </ul>
</li>`}
                </CodeBlock>
              </li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>구조적 의미 부여</strong>
            <ul className="dot_lst">
              <li>
                <code>&lt;li&gt;</code>는 목록 항목을 그룹화하여 콘텐츠 구조를
                명확히 표현합니다.
              </li>
              <li>
                순서 목록(<code>&lt;ol&gt;</code>)에서는 항목 순서가 중요하고,
                비순서 목록(<code>&lt;ul&gt;</code>)에서는 순서가 중요하지
                않습니다.
              </li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>다른 요소와의 관계</strong>
            <ul className="dot_lst">
              <li>
                <code>&lt;li&gt;</code>는 반드시 <code>&lt;ul&gt;</code> 또는{" "}
                <code>&lt;ol&gt;</code>의 직계 자식으로 위치해야 합니다.
              </li>
              <li>
                단독으로 사용할 수 없으며, 목록의 구성 요소로만 사용됩니다.
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
          <code>&lt;li&gt;</code> 요소는 <code>list-item</code> 요소이며, 별도의
          CSS를 지정하지 않아도 아래와 같은 기본값이 적용됩니다.
        </p>
        <CodeBlock title="li element CSS" className="mt_m" language="css">
          {`li {
  display: list-item;
  list-style-type: inherit;
  margin: 0;
  padding: 0;
}`}
        </CodeBlock>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          기본 문법
        </h2>
        <CodeBlock title="li element syntax" className="mt_l" language="html">
          {`<ul>
  <li>첫 번째 항목</li>
  <li>두 번째 항목</li>
  <li>세 번째 항목</li>
</ul>`}
        </CodeBlock>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          속성
        </h2>
        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [value]
            <i className="attr_optional">선택 사항</i>
            <span className="t_blue el_inline_block">
              &lt;li value="number"&gt;
            </span>
          </h3>
          <p className="mt_ms">
            순서 있는 목록(<code>&lt;ol&gt;</code>)의 <code>&lt;li&gt;</code>
            에만 사용하며, 특정 항목 번호를 수동으로 설정할 수 있습니다.
            <br />
            아래 예제와 같이 첫 번째 <code>&lt;li&gt;</code>에만{" "}
            <code>value</code> 속성을 설정하면, 이후 항목은 자동으로 순서가
            매겨집니다.
          </p>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/04-grouping/4.5.li_element/4.5.li_element_value.html"
                className="min_height_350"
                mode="htmlmixed"
                browser="default"
                theme="moxer"
                title="li value"
                minHeight="350px"
                result
              />
            </Suspense>
          </div>
        </article>
      </section>

      <section className="view_editor indent mt_xxl">
        <h2 className="ml_mn ve_tit">예제</h2>
        <article className="mt_l indent">
          <h3 className="ml_mn">순서 없는 목록의 항목</h3>
          <CodeBlock
            title="순서 없는 목록의 항목"
            className="mt_m"
            language="html"
          >
            {`<ul>
  <li>사과</li>
  <li>바나나</li>
  <li>체리</li>
</ul>`}
          </CodeBlock>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">순서 있는 목록의 항목</h3>
          <CodeBlock
            title="순서 있는 목록의 항목"
            className="mt_m"
            language="html"
          >
            {`<ol>
  <li>단계 1</li>
  <li>단계 2</li>
  <li>단계 3</li>
</ol>`}
          </CodeBlock>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">중첩 목록</h3>
          <CodeBlock title="중첩된 목록" className="mt_m" language="html">
            {`<ul>
  <li>프로그래밍 언어
    <ul>
      <li>Python</li>
      <li>JavaScript</li>
      <li>Java</li>
    </ul>
  </li>
  <li>웹 기술
    <ul>
      <li>HTML</li>
      <li>CSS</li>
    </ul>
  </li>
</ul>`}
          </CodeBlock>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">이미지와 함께 사용하는 목록</h3>
          <CodeBlock
            title="이미지와 함께 사용하는 목록"
            className="mt_m"
            language="html"
          >
            {`<ul>
  <li><img src="apple.jpg" alt="사과"> 사과</li>
  <li><img src="banana.jpg" alt="바나나"> 바나나</li>
</ul>`}
          </CodeBlock>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">링크를 포함한 목록</h3>
          <CodeBlock
            title="링크를 포함한 목록"
            className="mt_m"
            language="html"
          >
            {`<ul>
  <li><a href="https://www.example.com">첫 번째 링크</a></li>
  <li><a href="https://www.example.com">두 번째 링크</a></li>
</ul>`}
          </CodeBlock>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">접근성을 고려한 목록 항목</h3>
          <CodeBlock
            title="접근성을 고려한 목록 항목"
            className="mt_m"
            language="html"
          >
            {`<ul aria-label="과일 목록">
  <li>사과</li>
  <li>바나나</li>
  <li>오렌지</li>
</ul>`}
          </CodeBlock>
        </article>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주의사항
        </h2>
        <ul className="dot_lst mt_l">
          <li>
            <code>&lt;li&gt;</code> 요소는 반드시 <code>&lt;ul&gt;</code> 또는{" "}
            <code>&lt;ol&gt;</code>의 직계 자식으로만 사용해야 하며,
            <code>&lt;li&gt;</code> 요소 단독으로 사용할 수 없습니다.
          </li>
          <li>
            중첩된 목록은 들여쓰기를 적절히 설정하여 가독성을 높이는 것이
            중요합니다. 또한, 중첩된 목록이 명확히 구분되도록 CSS를 활용해
            스타일을 지정하면 사용자 경험이 향상됩니다.
          </li>
        </ul>
      </section>

      <aside className="browser_support mt_xxl" data-tit="li">
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
        <img src={`${IMG.HTML}/04_html_05.png`} alt="li 요소" />
        <figcaption>li 요소</figcaption>
      </figure>
    </>
  );
}

export default LiElementPage;
