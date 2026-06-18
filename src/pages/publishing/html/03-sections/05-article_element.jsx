import CodeBlock from "@/components/code/CodeBlock";
import { usePageMeta } from "@/components/common/PageMeta";
import { IMG } from "@/config/path";

const PAGE_LAYOUT = {
  mainClass: "article_element",
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
  title: "article element",
  description:
    "article 요소는 문서, 페이지, 애플리케이션 등에서 독립적으로 구분되어 자체적으로 완결된 콘텐츠 단위를 나타내는 HTML 태그로, 블로그 글, 뉴스 기사, 포럼 게시글, 사용자 리뷰 등 외부로 공유하거나 재사용 가능한 정보를 담는 데 적합합니다. 이 페이지에서는 article 요소의 주요 역할 및 특징을 설명하고, article 요소의 용도와 구조적 위치에 따른 사용 예시를 소개합니다.",
  keyword: "Markup, HTML, HTML5, tag, elements, article",
};

function ArticleElementPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          <code>&lt;article&gt;</code> 요소는{" "}
          <b>
            문서, 페이지, 애플리케이션 등에서 독립적으로 구분되어 재사용 가능한
            콘텐츠 단위를 나타내는 시맨틱 태그
          </b>
          입니다.
          <br />
          블로그 글, 뉴스 기사, 포럼 게시글, 댓글 등과 같이 자체적으로 완결된
          내용을 가진 콘텐츠에 적합하며, 외부로 공유하거나 따로 읽어도 의미가
          전달되는 구조여야 합니다.
          <br />
          보통 제목(<code>&lt;h1&gt;</code> ~ <code>&lt;h6&gt;</code>)과 본문을
          포함하며, 다른 시맨틱 요소(
          <code>&lt;section&gt;</code>, <code>&lt;aside&gt;</code>,{" "}
          <code>&lt;footer&gt;</code> 등)와 함께 사용될 수 있습니다.
        </p>
      </blockquote>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주요 역할 및 특징
        </h2>
        <ol className="mt_l ol_lst info_lst gap-column-important-m">
          <li className="weight-600-before t_black_before">
            <strong>독립적인 콘텐츠 그룹화</strong>
            <ul className="dot_lst">
              <li>
                <code>&lt;article&gt;</code>은 문서 내에서 독립적으로 의미를
                가지는 콘텐츠를 감싸는 데 사용됩니다.
              </li>
              <li>
                예를 들어 블로그 글, 뉴스 기사, 제품 정보 등이 해당됩니다.
              </li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>재사용 가능성</strong>
            <ul className="dot_lst">
              <li>
                <code>&lt;article&gt;</code> 내의 콘텐츠는 다른 문서나
                환경에서도 독립적으로 사용할 수 있습니다.
              </li>
              <li>
                RSS 피드와 같은 외부 시스템에서도 <code>&lt;article&gt;</code>{" "}
                내용이 활용될 수 있습니다.
              </li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>제목 포함 권장</strong>
            <p>
              <code>&lt;article&gt;</code>은 보통 제목(
              <code>&lt;h1 ~ h6&gt;</code>)과 함께 사용해 독립적인 콘텐츠임을
              명확히 표현합니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>다른 요소와의 관계</strong>
            <ul className="dot_lst">
              <li>
                <code>&lt;section&gt;</code>은 문서의 주제를 그룹화하는 반면,{" "}
                <code>&lt;article&gt;</code>은 독립적으로 사용할 수 있는
                콘텐츠에 사용됩니다.
              </li>
              <li>
                <code>&lt;article&gt;</code>은 중첩되어 사용될 수 있으며, 각{" "}
                <code>&lt;article&gt;</code>은 자기완결적인 콘텐츠를 의미합니다.
              </li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>SEO 및 접근성</strong>
            <p>
              검색 엔진과 스크린 리더는 <code>&lt;article&gt;</code>을 통해 문서
              내에서 중요한 콘텐츠를 식별할 수 있습니다.
            </p>
          </li>
        </ol>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          CSS 기본 값
        </h2>
        <p className="mt_l">
          <code>&lt;article&gt;</code> 요소는 기본적으로 블록 레벨 요소입니다.
        </p>
        <CodeBlock title="article element CSS" className="mt_m" language="css">
          {`article {
  display: block;
}`}
        </CodeBlock>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          기본 문법
        </h2>
        <CodeBlock
          title="article element syntax"
          className="mt_l"
          language="html"
        >
          {`<article>
  <!-- 독립적인 콘텐츠 내용 -->
</article>`}
        </CodeBlock>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          속성
        </h2>
        <p className="mt_l">
          <code>&lt;article&gt;</code> 요소는{" "}
          <b className="t_black">고유 속성</b>을 가지지 않으며,{" "}
          <mark>
            글로벌 속성(<code>class</code>, <code>id</code>, <code>style</code>,{" "}
            <code>aria-*</code>, <code>data-*</code> 등)만 사용할 수 있습니다.
          </mark>
        </p>
        <CodeBlock
          title="article element attr"
          className="mt_m"
          language="html"
        >
          {`<article id="post-1" class="blog-post" role="article">
  <!-- 독립적인 콘텐츠 내용 -->
</article>`}
        </CodeBlock>
      </section>

      <section className="view_editor indent mt_xxl">
        <h2 className="ml_mn ve_tit">예제</h2>

        <article className="mt_l indent">
          <h3 className="ml_mn">블로그 포스트</h3>
          <CodeBlock title="blog post" className="mt_m" language="html">
            {`<article>
  <h2>웹 개발의 중요성</h2>
  <p>웹 개발은 오늘날 모든 산업에서 중요한 역할을 하고 있습니다...</p>
  <footer>
    <p>작성자: 홍길동 | 날짜: 2025년 1월 7일</p>
  </footer>
</article>`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">뉴스 기사</h3>
          <CodeBlock title="news article" className="mt_m" language="html">
            {`<article>
  <h1>오늘의 최신 기술 뉴스</h1>
  <p>새로운 기술 혁신이 오늘 발표되었습니다...</p>
  <footer>
    <p>출처: 기술뉴스 | 날짜: 2025년 1월 7일</p>
  </footer>
</article>`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">여러 개의 기사 목록</h3>
          <CodeBlock title="list of articles" className="mt_m" language="html">
            {`<article>
  <h2>최신 스포츠 뉴스</h2>
  <p>오늘의 경기 결과는 매우 흥미로웠습니다...</p>
</article>

<article>
  <h2>과학 분야의 새로운 발견</h2>
  <p>최근의 연구는 인류에게 큰 영향을 미칠 수 있습니다...</p>
</article>`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">포럼 글</h3>
          <CodeBlock title="forum post" className="mt_m" language="html">
            {`<article>
  <h2>웹 개발 포럼: 질문과 답변</h2>
  <p>웹 개발에서 발생하는 문제를 해결하기 위한 좋은 방법이 있을까요?</p>
  <footer>
    <p>작성자: 사용자123 | 댓글: 12</p>
  </footer>
</article>`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">접근성을 고려한 예제</h3>
          <CodeBlock title="a11y article" className="mt_m" language="html">
            {`<article aria-labelledby="article-title">
  <h2 id="article-title">블로그 제목: 접근성을 고려한 웹 개발</h2>
  <p>이 글은 접근성을 고려한 웹 개발의 중요성과 방법에 대해 설명합니다.</p>
</article>`}
          </CodeBlock>
        </article>
      </section>

      <aside className="browser_support mt_xxl" data-tit="article">
        <ul>
          <li className="ie">9+</li>
          <li className="edge">지원</li>
          <li className="chrome">5.0</li>
          <li className="firefox">4.0</li>
          <li className="opera">11.1</li>
          <li className="safari">4.1</li>
        </ul>
      </aside>

      <figure className="img_figure mt_l">
        <img src={`${IMG.HTML}/03_html_05.png`} alt="article 요소" />
        <figcaption>article 요소</figcaption>
      </figure>
    </>
  );
}

export default ArticleElementPage;
