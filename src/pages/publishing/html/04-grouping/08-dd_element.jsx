import CodeBlock from "@/components/code/CodeBlock";
import { usePageMeta } from "@/components/common/PageMeta";
import { IMG } from "@/config/path";

const PAGE_LAYOUT = {
  mainClass: "dd_element",
  type: "publishing",
  info: true,
  note: true,
  sideMenu: true,
  reference: true,
  contentList: true,
  bottomEditor: true,
};

const PAGE_DATA = {
  title: "dd element",
  description:
    "dd 요소는 HTML 문서에서 정의 목록을 구성하는 dl 요소 내부에 사용되며, 바로 앞에 위치한 dt 요소에 대한 설명이나 정의 내용을 제공하는 태그로 하나의 dt 요소에 여러 개의 dd 요소를 연결하거나 그 반대로도 사용할 수 있습니다. 이 페이지에서는 dd 요소의 주요 역할 및 특징을 설명하고, dd 요소의 용도와 구조적 위치에 따른 사용 예시를 소개합니다.",
  keyword: "Markup, HTML, tag, elements, dd",
};

function DdElementPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          <code>&lt;dd&gt;</code> 요소는 <code>&lt;dl&gt;</code> 정의 목록
          안에서
          <strong>앞서 정의된 용어(&lt;dt&gt;)에 대한 설명(description)</strong>
          <b>을 제공하는 시맨틱 태그</b>입니다.
          <br />
          하나의 <code>&lt;dt&gt;</code>에 여러 개의 <code>&lt;dd&gt;</code>를
          연결할 수 있으며, 용어에 대한 정의, 의미, 예시 등을 기술하는 데
          사용됩니다. <code>&lt;dl&gt;</code> 목록에서 <code>&lt;dt&gt;</code>와
          함께 사용되어 <b>용어와 설명의 관계를 명확하게 표현</b>하는 구조를
          구성합니다.
        </p>
      </blockquote>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주요 역할 및 특징
        </h2>
        <ol className="mt_l ol_lst info_lst gap-column-important-m">
          <li className="weight-600-before t_black_before">
            <strong>정의 제목에 대한 설명 제공</strong>
            <ul className="dot_lst">
              <li>
                <code>&lt;dd&gt;</code>는 <code>&lt;dt&gt;</code> 요소의 제목을
                설명하거나 부연 정보를 제공합니다.
              </li>
              <li>
                하나의 <code>&lt;dt&gt;</code>에 여러 <code>&lt;dd&gt;</code>를
                연결하여 다양한 설명을 추가할 수 있습니다.
              </li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>구조적 의미 부여</strong>
            <p>
              <code>&lt;dd&gt;</code>는 정의 제목(<code>&lt;dt&gt;</code>)과
              연결되어 정보를 그룹화하며, 문서의 의미론적 구조를 명확히
              만듭니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>다른 요소와의 관계</strong>
            <ul className="dot_lst">
              <li>
                <code>&lt;dd&gt;</code>는 반드시 <code>&lt;dl&gt;</code>{" "}
                내부에서 사용해야 하며, <code>&lt;dt&gt;</code>와 짝을 이루어야
                합니다.
              </li>
              <li>
                <code>&lt;dt&gt;</code>와 달리 기본 스타일에는 들여쓰기가
                적용되어 시각적으로 구분됩니다.
              </li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>여러 설명 지원</strong>
            <p>
              한 용어에 대해 여러 <code>&lt;dd&gt;</code> 요소를 사용하여,
              다양한 설명이나 추가 정보를 나열할 수 있습니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>다양한 콘텐츠 포함 가능</strong>
            <p>
              <code>&lt;dd&gt;</code>는 텍스트뿐 아니라 이미지, 목록, 링크 등
              다양한 콘텐츠를 포함할 수 있어 용어에 대한 상세한 설명을 제공할 수
              있습니다.
            </p>
          </li>
        </ol>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          CSS 기본 값
        </h2>
        <p className="mt_l">
          <code>&lt;dd&gt;</code> 요소는 기본적으로 블록 레벨 요소이며, 별도의
          CSS를 지정하지 않아도 아래와 같은 기본값이 적용됩니다.
        </p>
        <CodeBlock title="dd element CSS" className="mt_m" language="css">
          {`dd {
  display: block;
  margin-inline-start: 40px; /* 들여쓰기 효과 */
}`}
        </CodeBlock>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          기본 문법
        </h2>
        <CodeBlock title="dd element syntax" className="mt_l" language="html">
          {`<dl>
  <dt>용어 1</dt>
  <dd>용어 1에 대한 설명</dd>
  <dt>용어 2</dt>
  <dd>용어 2에 대한 설명</dd>
</dl>`}
        </CodeBlock>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          속성
        </h2>
        <p className="mt_l">
          <code>&lt;dd&gt;</code> 요소는 <b className="t_black">고유 속성</b>을
          가지지 않으며, <mark>글로벌 속성</mark>(<code>class</code>,{" "}
          <code>id</code>, <code>style</code>, <code>aria-*</code>,{" "}
          <code>data-*</code> 등)만 사용할 수 있습니다.
        </p>
        <CodeBlock title="dd element attr" className="mt_m" language="html">
          {`<dl>
  <dt>HTML</dt>
  <dd id="html-description" class="description">웹 페이지의 구조를 정의하는 언어입니다.</dd>
</dl>`}
        </CodeBlock>
      </section>

      <section className="view_editor indent mt_xxl">
        <h2 className="ml_mn ve_tit">예제</h2>
        <article className="mt_l indent">
          <h3 className="ml_mn">기본 정의 목록의 &lt;dd&gt;</h3>
          <CodeBlock
            title="기본 정의 목록의 dd"
            className="mt_m"
            language="html"
          >
            {`<dl>
  <dt>HTML</dt>
  <dd>하이퍼텍스트 마크업 언어로, 웹 페이지를 구조화하는 데 사용됩니다.</dd>
</dl>`}
          </CodeBlock>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">문단과 링크를 포함하는 &lt;dd&gt;</h3>
          <CodeBlock
            title="문단과 링크를 포함하는 dd"
            className="mt_m"
            language="html"
          >
            {`<dl>
  <dt>CSS</dt>
  <dd>
    <p>CSS는 웹 페이지의 스타일과 레이아웃을 정의하는 언어입니다.</p>
    <a href="https://developer.mozilla.org/ko/docs/Web/CSS" target="_blank">CSS 자세히 알아보기</a>
  </dd>
</dl>`}
          </CodeBlock>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">이미지와 목록을 포함하는 &lt;dd&gt;</h3>
          <CodeBlock
            title="이미지와 목록을 포함하는 dd"
            className="mt_m"
            language="html"
          >
            {`<dl>
  <dt>JavaScript</dt>
  <dd>
    <img src="javascript-icon.png" alt="JavaScript 아이콘" width="50">
    <ul>
      <li>동적 웹 페이지 제작</li>
      <li>이벤트 기반 프로그래밍</li>
      <li>클라이언트-서버 통신</li>
    </ul>
  </dd>
</dl>`}
          </CodeBlock>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">dl 요소가 중첩된 &lt;dd&gt;</h3>
          <CodeBlock
            title="dl 요소가 중첩된 dd"
            className="mt_m"
            language="html"
          >
            {`<dl>
  <dt>웹 기술</dt>
  <dd>
    웹 개발에 사용되는 다양한 기술을 포함합니다:
    <dl>
      <dt>HTML</dt>
      <dd>웹 페이지의 구조를 정의하는 언어.</dd>
      <dt>CSS</dt>
      <dd>웹 페이지의 스타일을 정의하는 언어.</dd>
      <dt>JavaScript</dt>
      <dd>웹 페이지에 동적인 기능을 추가하는 언어.</dd>
    </dl>
  </dd>
</dl>`}
          </CodeBlock>
        </article>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주의사항
        </h2>
        <ul className="dot_lst mt_l">
          <li>
            <code>&lt;dd&gt;</code> 요소는 반드시 <code>&lt;dl&gt;</code> 요소의
            직계 자식으로 위치해야 하며, 단독으로 사용될 수 없습니다.
          </li>
          <li>
            <code>&lt;dd&gt;</code>는 항상 <code>&lt;dt&gt;</code>와 함께 쌍을
            이루어야 하며, 용어와 그에 대한 설명을 명확히 구분하여 나열하는 데
            사용해야 합니다.
          </li>
        </ul>
      </section>

      <aside className="browser_support mt_xxl" data-tit="dd">
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
        <img src={IMG.HTML + "/04_html_08.png"} alt="dd 요소" />
        <figcaption>dd 요소</figcaption>
      </figure>
    </>
  );
}

export default DdElementPage;
