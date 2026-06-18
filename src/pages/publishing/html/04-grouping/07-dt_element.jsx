import CodeBlock from "@/components/code/CodeBlock";
import { usePageMeta } from "@/components/common/PageMeta";
import { IMG } from "@/config/path";

const PAGE_LAYOUT = {
  mainClass: "dt_element",
  type: "publishing",
  info: true,
  note: true,
  sideMenu: true,
  reference: true,
  contentList: true,
  bottomEditor: true,
};

const PAGE_DATA = {
  title: "dt element",
  description:
    "dt 요소는 HTML 문서에서 정의 목록을 구성하는 dl 요소 내부에 사용되며, 설명이 필요한 용어나 항목의 이름을 나타내는 태그로 dd 요소와 함께 쌍을 이루어 정보를 명확하게 전달합니다. 이 페이지에서는 dt 요소의 주요 역할 및 특징을 설명하고, dt 요소의 용도와 구조적 위치에 따른 사용 예시를 소개합니다.",
  keyword: "Markup, HTML, tag, elements, header, dt, definition term element",
};

function DtElementPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          <code>&lt;dt&gt;</code> 요소는 <code>&lt;dl&gt;</code> 정의 목록
          안에서
          <strong>정의될 용어(term)</strong>
          <b>를 나타내는 시맨틱 태그</b>입니다.
          <br />
          해당 용어에 대한 설명은 뒤따르는 <code>&lt;dd&gt;</code> 요소에
          위치하며, <code>&lt;dl&gt;</code> 내부에서는 여러 개의{" "}
          <code>&lt;dt&gt;</code>와 <code>&lt;dd&gt;</code>를 조합해 하나 이상의
          용어-설명 쌍을 만들 수 있습니다. 일반적인 사용처는 사전식 용어 설명,
          FAQ 목록, 키-값 구조 등입니다.
        </p>
      </blockquote>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주요 역할 및 특징
        </h2>
        <ol className="mt_l ol_lst info_lst gap-column-important-m">
          <li className="weight-600-before t_black_before">
            <strong>정의 목록의 제목</strong>
            <ul className="dot_lst">
              <li>
                <code>&lt;dt&gt;</code>는 정의 목록(<code>&lt;dl&gt;</code>)에서
                용어나 항목을 나타냅니다.
              </li>
              <li>
                각 <code>&lt;dt&gt;</code>는 대응되는 <code>&lt;dd&gt;</code>와
                짝을 이룹니다.
              </li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>구조적 의미 부여</strong>
            <ul className="dot_lst">
              <li>
                <code>&lt;dt&gt;</code>는 정의 항목의 제목을 시각적 및
                의미적으로 강조합니다.
              </li>
              <li>
                하나의 <code>&lt;dt&gt;</code>에 여러 <code>&lt;dd&gt;</code>를
                연결할 수 있습니다.
              </li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>다른 요소와의 관계</strong>
            <ul className="dot_lst">
              <li>
                <code>&lt;dt&gt;</code>는 반드시 <code>&lt;dl&gt;</code>{" "}
                내부에서 사용해야 하며 단독으로 사용할 수 없습니다.
              </li>
              <li>
                <code>&lt;dt&gt;</code> 다음에는 <code>&lt;dd&gt;</code> 요소가
                따라와야 합니다.
              </li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>시각적 스타일</strong>
            <p>
              기본적으로 굵은 글꼴로 표시되며, CSS를 사용해 스타일을 변경할 수
              있습니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>다양한 콘텐츠 포함 가능</strong>
            <p>
              <code>&lt;dt&gt;</code> 요소는 단순한 텍스트뿐만 아니라 이미지,
              링크 등 다양한 HTML 요소를 포함할 수 있습니다.
            </p>
          </li>
        </ol>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          CSS 기본 값
        </h2>
        <p className="mt_l">
          <code>&lt;dt&gt;</code> 요소는 기본적으로 블록 레벨 요소이며, 별도의
          CSS를 지정하지 않아도 아래와 같은 기본값이 적용됩니다.
        </p>
        <CodeBlock title="dt element CSS" className="mt_m" language="css">
          {`dt {
  display: block;
  font-weight: bold; /* 기본적으로 텍스트를 강조하기 위해 볼드체로 표시됩니다. */
}`}
        </CodeBlock>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          기본 문법
        </h2>
        <CodeBlock title="dt element syntax" className="mt_l" language="html">
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
          <code>&lt;dt&gt;</code> 요소는 <b className="t_black">고유 속성</b>을
          가지지 않으며, <mark>글로벌 속성</mark>(<code>class</code>,{" "}
          <code>id</code>, <code>style</code>, <code>aria-*</code>,{" "}
          <code>data-*</code> 등)만 사용할 수 있습니다.
        </p>
        <CodeBlock title="dt element attr" className="mt_m" language="html">
          {`<dl>
  <dt id="html-term" class="definition-term">HTML</dt>
  <dd>HyperText Markup Language의 약자입니다.</dd>
</dl>`}
        </CodeBlock>
      </section>

      <section className="view_editor indent mt_xxl">
        <h2 className="ml_mn ve_tit">예제</h2>
        <article className="mt_l indent">
          <h3 className="ml_mn">기본 정의 목록의 &lt;dt&gt;</h3>
          <CodeBlock
            title="기본 정의 목록의 dt"
            className="mt_m"
            language="html"
          >
            {`<dl>
  <dt>HTML</dt>
  <dd>웹 페이지의 구조를 정의합니다.</dd>
  <dt>CSS</dt>
  <dd>웹 페이지의 스타일을 지정합니다.</dd>
</dl>`}
          </CodeBlock>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">강조된 텍스트를 포함하는 &lt;dt&gt;</h3>
          <CodeBlock
            title="강조된 텍스트를 포함하는 dt"
            className="mt_m"
            language="html"
          >
            {`<dl>
  <dt><strong>CSS</strong>란?</dt>
  <dd>웹 페이지의 스타일과 레이아웃을 정의하는 언어입니다.</dd>
</dl>`}
          </CodeBlock>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">이미지를 포함하는 &lt;dt&gt;</h3>
          <CodeBlock
            title="이미지를 포함하는 dt"
            className="mt_m"
            language="html"
          >
            {`<dl>
  <dt><img src="html-icon.png" alt="HTML 아이콘"> HTML</dt>
  <dd>웹 페이지 구조를 정의하는 마크업 언어입니다.</dd>
</dl>`}
          </CodeBlock>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">링크를 포함하는 &lt;dt&gt;</h3>
          <CodeBlock
            title="링크를 포함하는 dt"
            className="mt_m"
            language="html"
          >
            {`<dl>
  <dt><a href="https://developer.mozilla.org/ko/docs/Web/HTML">HTML</a></dt>
  <dd>웹 개발에서 사용하는 마크업 언어에 대한 설명입니다.</dd>
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
            <code>&lt;dt&gt;</code> 요소는 반드시 <code>&lt;dl&gt;</code> 요소의
            직계 자식으로 위치해야 하며, 단독으로 사용될 수 없습니다.
          </li>
          <li>
            <code>&lt;dt&gt;</code>는 항상 <code>&lt;dd&gt;</code>와 함께 쌍을
            이루어야 하며, 용어와 그에 대한 설명을 명확히 구분하여 나열하는 데
            사용해야 합니다.
          </li>
        </ul>
      </section>

      <aside className="browser_support mt_xxl" data-tit="dt">
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
        <img src={IMG.HTML + "/04_html_07.png"} alt="dt 요소" />
        <figcaption>dt 요소</figcaption>
      </figure>
    </>
  );
}

export default DtElementPage;
