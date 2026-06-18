import CodeBlock from "@/components/code/CodeBlock";
import { usePageMeta } from "@/components/common/PageMeta";
import { IMG } from "@/config/path";

const PAGE_LAYOUT = {
  mainClass: "address_element",
  type: "publishing",
  info: true,
  note: true,
  sideMenu: true,
  reference: true,
  contentList: true,
  bottomEditor: true,
};

const PAGE_DATA = {
  title: "address element",
  description:
    "address 요소는 HTML 문서에서 작성자나 관련 인물, 조직의 연락처 정보를 나타내는 태그로, 보통 이메일, 전화번호, 실제 주소, 소셜 링크 등 문서나 섹션의 소유자와 관련된 정보를 제공하는 데 사용되며 일반적으로 페이지 하단의 footer 요소 안에 자주 배치됩니다. 이 페이지에서는 address 요소의 주요 역할 및 특징을 설명하고, address 요소의 용도와 구조적 위치에 따른 사용 예시를 소개합니다.",
  keyword: "Markup, HTML, HTML5, tag, elements, address",
};

function AddressElementPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          <code>&lt;address&gt;</code> 요소는{" "}
          <b>
            문서나 콘텐츠의 작성자 또는 관련 인물·조직의 연락처 정보를 나타내는
            시맨틱 태그
          </b>
          입니다.
          <br />
          일반적으로 이름, 이메일, 전화번호, 물리적 주소, 소셜 링크 등 연락
          가능한 정보를 포함하며, 보통 문서의 <code>&lt;footer&gt;</code>{" "}
          영역에서 사용됩니다. 시각적으로는 기울임체로 표현되며, 문서 전체 또는
          특정 콘텐츠의 소유자 정보를 구분짓는 데 적합합니다.
        </p>
      </blockquote>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주요 역할 및 특징
        </h2>
        <ol className="mt_l ol_lst info_lst gap-column-important-m">
          <li className="weight-600-before t_black_before">
            <strong>연락처 정보 표현</strong>
            <ul className="dot_lst">
              <li>
                <code>&lt;address&gt;</code>는 이메일 주소, 물리적 주소,
                전화번호 등의 연락처 정보를 나타내는 데 사용됩니다.
              </li>
              <li>
                주로 문서 작성자나 관련 조직의 정보를 제공하는 데 적합합니다.
              </li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>위치 및 용도</strong>
            <ul className="dot_lst">
              <li>
                <code>&lt;address&gt;</code>는 문서 전체의 연락처 정보를 나타낼
                수도 있고, 특정 섹션이나 <code>&lt;article&gt;</code>과 관련된
                정보일 수도 있습니다.
              </li>
              <li>
                <code>&lt;address&gt;</code>는 보통 문서의 최하단(예: 페이지
                푸터)이나 특정 섹션과 관련된 연락처 정보가 필요할 때 사용됩니다.
              </li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>의미론적 태그</strong>
            <p>
              <code>&lt;address&gt;</code>는 연락처 정보를 의미론적으로
              정의하며, 검색 엔진과 스크린 리더가 이 정보를 쉽게 파악할 수
              있도록 돕습니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>포함 가능한 콘텐츠</strong>
            <p>
              텍스트와 인라인 요소(<code>&lt;a&gt;</code> 등)를 포함할 수
              있지만, 다른 블록 요소는 포함하지 않습니다.
            </p>
          </li>
        </ol>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          CSS 기본 값
        </h2>
        <p className="mt_l">
          <code>&lt;address&gt;</code> 요소는 기본적으로 블록 레벨 요소이며,
          별도의 CSS를 지정하지 않아도 아래와 같은 기본값이 적용됩니다.
        </p>
        <CodeBlock title="address element CSS" className="mt_m" language="css">
          {`address {
  display: block;
  font-style: italic; /* 기본적으로 이탤릭체로 표시됩니다. */
}`}
        </CodeBlock>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          기본 문법
        </h2>
        <CodeBlock
          title="address element syntax"
          className="mt_l"
          language="html"
        >
          {`<address>
  <!-- 연락처 정보 콘텐츠 -->
</address>`}
        </CodeBlock>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          속성
        </h2>
        <p className="mt_l">
          <code>&lt;address&gt;</code> 요소는{" "}
          <b className="t_black">고유 속성</b>을 가지지 않으며,{" "}
          <mark>글로벌 속성</mark>(<code>class</code>, <code>id</code>,{" "}
          <code>style</code>, <code>aria-*</code>, <code>data-*</code> 등)만
          사용할 수 있습니다.
        </p>
        <CodeBlock
          title="address element attr"
          className="mt_m"
          language="html"
        >
          {`<address id="contact-info" class="contact-details">
  <!-- 연락처 정보 콘텐츠 -->
</address>`}
        </CodeBlock>
      </section>
      <section className="view_editor indent mt_xxl">
        <h2 className="ml_mn ve_tit">예제</h2>
        <article className="mt_l indent">
          <h3 className="ml_mn">문서 전체의 연락처 정보</h3>
          <CodeBlock
            title="문서 전체의 연락처 정보"
            className="mt_m"
            language="html"
          >
            {`<footer>
  <address>
    작성자: 홍길동<br>
    이메일: <a href="mailto:example@example.com">example@example.com</a><br>
    전화: <a href="tel:+821012345678">+82 10-1234-5678</a>
  </address>
</footer>`}
          </CodeBlock>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">회사 정보 제공</h3>
          <CodeBlock title="회사 정보 제공" className="mt_m" language="html">
            {`<address>
  회사명: ABC Corp<br>
  주소: 1234 강남대로, 서울, 대한민국<br>
  이메일: <a href="mailto:support@abc.com">support@abc.com</a><br>
  전화: <a href="tel:+821012345678">+82 10-1234-5678</a>
</address>`}
          </CodeBlock>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">블로그 게시물의 작성자 정보</h3>
          <CodeBlock
            title="블로그 게시물의 작성자 정보"
            className="mt_m"
            language="html"
          >
            {`<article>
  <h1>웹 개발 트렌드</h1>
  <p>2025년의 최신 웹 개발 트렌드에 대해 알아봅니다.</p>
  <footer>
    <address>
      작성자: <a href="mailto:author@example.com">author@example.com</a>
    </address>
  </footer>
</article>`}
          </CodeBlock>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">접근성을 고려한 연락처 정보</h3>
          <CodeBlock
            title="a11y 접근성을 고려한 연락처 정보"
            className="mt_m"
            language="html"
          >
            {`<address aria-label="연락처 정보">
  ABC Corp<br>
  이메일: <a href="mailto:info@abc.com">info@abc.com</a><br>
  전화: <a href="tel:+821012345678">+82 10-1234-5678</a>
</address>`}
          </CodeBlock>
        </article>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주의사항
        </h2>
        <ul className="dot_lst mt_l">
          <li>
            &lt;address&gt;는 문맥상 연락처 정보를 나타내는 데만 사용해야 하며,
            단순 스타일링 목적으로 사용하면 안됩니다.
          </li>
          <li>
            &lt;address&gt; 내부에는 다른 블록 요소를 포함할 수 없습니다.
            필요하다면 적절히 텍스트와 인라인 요소로 구성해야 합니다.
          </li>
        </ul>
      </section>

      <aside className="browser_support mt_xxl" data-tit="address">
        <ul>
          <li className="ie">지원</li>
          <li className="edge">지원</li>
          <li className="chrome">지원</li>
          <li className="firefox">1.0</li>
          <li className="opera">지원</li>
          <li className="safari">1.0</li>
        </ul>
      </aside>
      <figure className="img_figure mt_l">
        <img src={IMG.HTML + "/04_html_09.png"} alt="address 요소" />
        <figcaption>address 요소</figcaption>
      </figure>
    </>
  );
}

export default AddressElementPage;
