import CodeBlock from "@/components/code/CodeBlock";
import { usePageMeta } from "@/components/common/PageMeta";
import { IMG } from "@/config/path";

const PAGE_LAYOUT = {
  mainClass: "aside_element",
  type: "publishing",
  info: true,
  note: true,
  sideMenu: true,
  reference: true,
  contentList: false,
  bottomEditor: true,
};

const PAGE_DATA = {
  title: "aside element",
  description:
    "aside 요소는 문서의 주요 내용과 직접적인 연관은 없지만, 보조적인 정보나 참고 자료를 제공하는 HTML 태그로, 광고, 관련 링크, 인용문, 사이드바 등 주 콘텐츠를 보완하거나 주변 정보를 제공하는 영역에 사용됩니다. 이 페이지에서는 aside 요소의 주요 역할 및 특징을 설명하고, aside 요소의 용도와 구조적 위치에 따른 사용 예시를 소개합니다.",
  keyword: "Markup, HTML, HTML5, tag, elements, aside",
};

function AsideElementPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          <code>&lt;aside&gt;</code> 요소는{" "}
          <b>
            문서의 주요 흐름과는 직접적으로 관련되지 않은 보조 콘텐츠를 나타내는
            시맨틱 태그
          </b>
          로, 광고, 관련 링크, 사이드바, 팁, 인용문 등과 같이{" "}
          <b>부가적인 정보나 참고 자료를 담는 데 사용</b>됩니다.
          <br />
          문서 전체의 부가정보일 수도 있고, 특정 섹션이나 기사(
          <code>&lt;section&gt;</code>, <code>&lt;article&gt;</code>) 내부의
          보조 내용일 수도 있습니다.
          <br />
          주요 콘텐츠와는 독립적으로 존재하며, 화면상에서는 주로 좌우 측면에
          배치되는 경우가 많습니다.
        </p>
      </blockquote>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주요 역할 및 특징
        </h2>
        <ol className="mt_l ol_lst info_lst gap-column-important-m">
          <li className="weight-600-before t_black_before">
            <strong>부가 정보 제공</strong>
            <ul className="dot_lst">
              <li>
                <code>&lt;aside&gt;</code>는 주요 콘텐츠를 보완하거나 간접적으로
                관련된 정보를 제공합니다.
              </li>
              <li>
                예를 들어 기사 본문에 대한 추가 설명, 인용문, 링크 목록, 광고
                등이 포함될 수 있습니다.
              </li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>문서 구조의 명확화</strong>
            <ul className="dot_lst">
              <li>
                의미론적으로 주 콘텐츠와 보조 콘텐츠를 구분하여 구조를 명확히
                정의합니다.
              </li>
              <li>
                검색 엔진과 스크린 리더가 콘텐츠의 목적을 이해하기 쉽게
                만듭니다.
              </li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>위치에 관계없는 사용</strong>
            <ul className="dot_lst">
              <li>
                <code>&lt;aside&gt;</code>는 항상 페이지의 한쪽에 위치할 필요는
                없으며, 문서 구조에 따라 배치됩니다.
              </li>
              <li>
                문서의 주요 흐름을 방해하지 않고 부가 정보를 제공하는 역할을
                합니다.
              </li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>SEO 및 접근성</strong>
            <ul className="dot_lst">
              <li>
                검색 엔진은 <code>&lt;aside&gt;</code>의 내용을 부가 정보로
                간주하므로, 보조적인 내용이나 관련 링크에 적합합니다.
              </li>
              <li>
                접근성을 위해 <code>&lt;aria-label&gt;</code>이나{" "}
                <code>&lt;aria-labelledby&gt;</code>를 사용하여 보조 콘텐츠의
                목적을 명확히 설명할 수 있습니다.
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
          <code>&lt;aside&gt;</code> 요소는 기본적으로 블록 레벨 요소입니다.
        </p>
        <CodeBlock title="aside element CSS" className="mt_m" language="css">
          {`aside {
  display: block;
}`}
        </CodeBlock>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          기본 문법
        </h2>
        <CodeBlock
          title="aside element syntax"
          className="mt_l"
          language="html"
        >
          {`<aside>
  <!-- 부가적인 콘텐츠 -->
</aside>`}
        </CodeBlock>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          속성
        </h2>
        <p className="mt_l">
          <code>&lt;aside&gt;</code> 요소는 <b className="t_black">고유 속성</b>
          을 가지지 않으며,{" "}
          <mark>
            글로벌 속성(<code>class</code>, <code>id</code>, <code>style</code>,{" "}
            <code>aria-*</code>, <code>data-*</code> 등)만 사용할 수 있습니다.
          </mark>
        </p>
        <CodeBlock title="aside element attr" className="mt_m" language="html">
          {`<aside class="sidebar" role="complementary">
  <!-- 부가적인 콘텐츠 -->
</aside>`}
        </CodeBlock>
      </section>

      <section className="view_editor indent mt_xxl">
        <h2 className="ml_mn ve_tit">예제</h2>

        <article className="mt_l indent">
          <h3 className="ml_mn">블로그의 사이드바로 사용</h3>
          <CodeBlock title="sidebar" className="mt_m" language="html">
            {`<aside>
  <h3>관련 글</h3>
  <ul>
    <li><a href="#">HTML의 기본</a></li>
    <li><a href="#">CSS로 레이아웃 구성하기</a></li>
    <li><a href="#">JavaScript 기초</a></li>
  </ul>
</aside>`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">문서 내부 보조 정보</h3>
          <CodeBlock
            title="supplementary information"
            className="mt_m"
            language="html"
          >
            {`<article>
  <h1>HTML의 의미론적 태그</h1>
  <p>HTML5는 의미론적 태그를 도입하여 문서 구조를 더욱 명확히 했습니다.</p>
  <aside>
    <h2>참고</h2>
    <p>HTML5의 의미론적 태그에는 \`<header>\`, \`<footer>\`, \`<article>\` 등이 포함됩니다.</p>
  </aside>
</article>`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">광고 영역으로 활용</h3>
          <CodeBlock title="ad aside" className="mt_m" language="html">
            {`<aside>
  <h2>광고</h2>
  <a href="/product">
    <img src="/ads/product.jpg" alt="최신 제품 광고">
  </a>
</aside>`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">뉴스 페이지에서 관련 기사 표시</h3>
          <CodeBlock title="related article" className="mt_m" language="html">
            {`<aside>
  <h3>관련 기사</h3>
  <ul>
    <li><a href="#">기술 산업의 새로운 변화</a></li>
    <li><a href="#">AI 기술의 미래</a></li>
    <li><a href="#">웹 개발에서의 최신 트렌드</a></li>
  </ul>
</aside>`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">접근성을 고려한 보조 콘텐츠</h3>
          <CodeBlock title="a11y aside" className="mt_m" language="html">
            {`<aside aria-labelledby="aside-title">
  <h2 id="aside-title">추가 정보</h2>
  <p>이 글에 대한 더 많은 정보를 원하시면 <a href="/details">여기를 클릭하세요</a>.</p>
</aside>`}
          </CodeBlock>
        </article>
      </section>

      <aside className="browser_support mt_xxl" data-tit="aside">
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
        <img src={`${IMG.HTML}/03_html_07.png`} alt="aside 요소" />
        <figcaption>aside 요소</figcaption>
      </figure>
    </>
  );
}

export default AsideElementPage;
