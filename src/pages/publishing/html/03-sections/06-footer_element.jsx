import CodeBlock from "@/components/code/CodeBlock";
import { usePageMeta } from "@/components/common/PageMeta";
import { IMG } from "@/config/path";

const PAGE_LAYOUT = {
  mainClass: "footer_element",
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
  title: "footer element",
  description:
    "footer 요소는 문서나 섹션의 꼬리말(바닥글) 역할을 하는 HTML 태그로, 일반적으로 저작권 정보, 작성자 정보, 관련 링크, 하단 내비게이션 등 해당 영역을 마무리하거나 보조하는 콘텐츠를 포함하며 문서 전체나 개별 콘텐츠 블록 내에서도 사용될 수 있습니다. 이 페이지에서는 footer 요소의 주요 역할 및 특징을 설명하고, footer 요소의 용도와 구조적 위치에 따른 사용 예시를 소개합니다.",
  keyword: "Markup, HTML, HTML5, tag, elements, footer",
};

function FooterElementPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          <code>&lt;footer&gt;</code> 요소는{" "}
          <b>문서 전체나 개별 섹션의 바닥글(꼬리말)을 나타내는 시맨틱 태그</b>
          로, 작성자 정보, 저작권, 관련 링크, 하단 내비게이션 등{" "}
          <b>해당 영역을 마무리하는 내용</b>을 포함합니다.
          <br />
          문서 전체의 푸터로 사용할 수도 있고, <code>
            &lt;article&gt;
          </code>, <code>&lt;section&gt;</code>, <code>&lt;aside&gt;</code>{" "}
          내부에서도 부분적인 푸터로 사용할 수 있습니다.
          <br />
          하나의 문서 안에 여러 개의 <code>&lt;footer&gt;</code>를 사용할 수
          있으며, 구조적으로 해당 콘텐츠의 끝이라는 의미를 부여합니다.
        </p>
      </blockquote>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주요 역할 및 특징
        </h2>
        <ol className="mt_l ol_lst info_lst gap-column-important-m">
          <li className="weight-600-before t_black_before">
            <strong>문서나 섹션의 요약 정보 제공</strong>
            <ul className="dot_lst">
              <li>
                페이지 전체나 섹션의 끝부분에서 부가적인 정보(저작권, 제작자
                정보)를 표시합니다.
              </li>
              <li>
                <code>&lt;footer&gt;</code>는 문서 전체나{" "}
                <code>&lt;article&gt;</code>, <code>&lt;section&gt;</code>과
                같은 콘텐츠 그룹 내에서도 사용할 수 있습니다.
              </li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>구조적 의미 부여</strong>
            <ul className="dot_lst">
              <li>
                <code>&lt;footer&gt;</code>는 해당 영역이 문서나 섹션의
                끝부분임을 명확히 정의합니다.
              </li>
              <li>
                시각적 구조뿐만 아니라 의미론적 구조를 강화하여 SEO와 접근성을
                높입니다.
              </li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>다른 요소와의 관계</strong>
            <ul className="dot_lst">
              <li>
                <code>&lt;header&gt;</code>는 문서나 섹션의 머리말을 나타내는
                반면, <code>&lt;footer&gt;</code>는 끝부분을 나타냅니다.
              </li>
              <li>
                <code>&lt;footer&gt;</code> 내부에는 텍스트, 링크, 이미지, 작은
                내비게이션 메뉴 등이 포함될 수 있습니다.
              </li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>반복 사용 가능</strong>
            <p>
              페이지마다 고유한 <code>&lt;footer&gt;</code>를 가질 수 있으며,
              섹션이나 <code>&lt;article&gt;</code>과 같은 특정 콘텐츠
              단위에서도 사용 가능합니다.
            </p>
          </li>
        </ol>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          CSS 기본 값
        </h2>
        <p className="mt_l">
          <code>&lt;footer&gt;</code> 요소는 기본적으로 블록 레벨 요소입니다.
        </p>
        <CodeBlock title="footer element CSS" className="mt_m" language="css">
          {`footer {
  display: block;
}`}
        </CodeBlock>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          기본 문법
        </h2>
        <CodeBlock
          title="footer element syntax"
          className="mt_l"
          language="html"
        >
          {`<footer>
  <!-- 푸터 콘텐츠 -->
</footer>`}
        </CodeBlock>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          속성
        </h2>
        <p className="mt_l">
          <code>&lt;footer&gt;</code> 요소는{" "}
          <b className="t_black">고유 속성</b>을 가지지 않으며,{" "}
          <mark>
            글로벌 속성(<code>class</code>, <code>id</code>, <code>style</code>,{" "}
            <code>aria-*</code>, <code>data-*</code> 등)만 사용할 수 있습니다.
          </mark>
        </p>
        <CodeBlock title="footer element attr" className="mt_m" language="html">
          {`<footer id="main-footer" class="footer-section" role="contentinfo">
  <!-- 푸터 콘텐츠 -->
</footer>`}
        </CodeBlock>
      </section>

      <section className="view_editor indent mt_xxl">
        <h2 className="ml_mn ve_tit">예제</h2>

        <article className="mt_l indent">
          <h3 className="ml_mn">페이지 전체의 푸터</h3>
          <CodeBlock title="website footer" className="mt_m" language="html">
            {`<footer>
  <p>&copy; 2025 My Website. All rights reserved.</p>
  <p>Contact: support@mywebsite.com</p>
</footer>`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">섹션 내부의 푸터</h3>
          <CodeBlock title="section footer" className="mt_m" language="html">
            {`<section>
  <h2>회사 소개</h2>
  <p>우리 회사는 혁신적인 기술을 개발합니다.</p>
  <footer>
    <p>문의: contact@company.com</p>
  </footer>
</section>`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">블로그 포스트에서 작성자 정보 표시</h3>
          <CodeBlock title="blog footer" className="mt_m" language="html">
            {`<article>
  <h2>웹 개발의 최신 트렌드</h2>
  <p>오늘날의 웹 개발은 계속 진화하고 있습니다...</p>
  <footer>
    <p>작성자: 홍길동 | 날짜: 2025년 1월 10일</p>
  </footer>
</article>`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">접근성을 고려한 푸터</h3>
          <CodeBlock title="a11y footer" className="mt_m" language="html">
            {`<footer aria-labelledby="footer-heading">
  <h2 id="footer-heading">사이트 정보</h2>
  <p>&copy; 2025 웹사이트 이름</p>
  <nav aria-label="하단 메뉴">
    <ul>
      <li><a href="/privacy">개인정보처리방침</a></li>
      <li><a href="/terms">이용약관</a></li>
      <li><a href="/contact">문의하기</a></li>
    </ul>
  </nav>
</footer>`}
          </CodeBlock>
        </article>
      </section>

      <aside className="browser_support mt_xxl" data-tit="footer">
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
        <img src={`${IMG.HTML}/03_html_06.png`} alt="footer 요소" />
        <figcaption>footer 요소</figcaption>
      </figure>
    </>
  );
}

export default FooterElementPage;
