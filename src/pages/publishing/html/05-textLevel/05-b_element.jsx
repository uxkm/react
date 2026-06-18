import CodeBlock from "@/components/code/CodeBlock";
import { usePageMeta } from "@/components/common/PageMeta";
import { IMG } from "@/config/path";

const PAGE_LAYOUT = {
  mainClass: "b_element",
  type: "publishing",
  info: true,
  note: true,
  sideMenu: true,
  reference: true,
  contentList: true,
  bottomEditor: true,
};

const PAGE_DATA = {
  title: "b element",
  description:
    "b 요소는 HTML 문서에서 텍스트를 굵게 표시하여 시각적으로 강조하는 태그로, 의미상 중요도를 나타내지는 않으며 단순히 시선을 끌거나 주의를 환기시켜야 하는 단어나 구절을 돋보이게 할 때 사용됩니다. 이 페이지에서는 b 요소의 주요 역할 및 특징을 설명하고, b 요소의 용도와 구조적 위치에 따른 사용 예시를 소개합니다.",
  keyword: "Markup, HTML, tag, elements, b",
};

function BElementPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          <code>&lt;b&gt;</code> 요소는 텍스트를 굵게(bold) 표시하는 비시맨틱
          태그로, 의미적인 강조 없이 시각적으로만 두드러지게 보여주고 싶을 때
          사용됩니다.
          <br />
          <code>&lt;strong&gt;</code>처럼 중요성을 나타내지 않으며,
          키워드/제품명 등 시각적 강조 용도에 적합합니다.
        </p>
      </blockquote>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주요 역할 및 특징
        </h2>
        <ol className="mt_l ol_lst info_lst gap-column-important-m">
          <li className="weight-600-before t_black_before">
            <strong>굵은 텍스트 표시</strong>
            <ul className="dot_lst">
              <li>
                <code>&lt;b&gt;</code>는 텍스트를 시각적으로 굵게 표시합니다.
              </li>
              <li>
                의미론적 강조가 아닌 시각적 주목도 향상이 목적일 때 적합합니다.
              </li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>의미론적 강조 없음</strong>
            <p>
              중요성 전달이 필요하면 <code>&lt;strong&gt;</code>, 문장 강세는{" "}
              <code>&lt;em&gt;</code>을 사용하는 것이 더 적절합니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>다른 요소와의 관계</strong>
            <p>
              <code>&lt;b&gt;</code>는 접근성 측면에서 특별한 의미를 제공하지
              않으므로 문맥에 맞는 시맨틱 태그 선택이 중요합니다.
            </p>
          </li>
        </ol>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          CSS 기본 값
        </h2>
        <CodeBlock title="b element CSS" className="mt_l" language="css">
          {`b {
  display: inline;
  font-weight: bold;
}`}
        </CodeBlock>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          기본 문법
        </h2>
        <CodeBlock title="b element syntax" className="mt_l" language="html">
          {`<b>굵게 표시할 텍스트</b>`}
        </CodeBlock>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          속성
        </h2>
        <p className="mt_l">
          <code>&lt;b&gt;</code> 요소는 고유 속성이 없으며 글로벌 속성만
          사용합니다.
        </p>
      </section>
      <section className="view_editor indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          예제
        </h2>
        <article className="mt_l indent">
          <h3 className="ml_mn">단순 텍스트 굵게 표시</h3>
          <CodeBlock
            title="단순 텍스트 굵게 표시"
            className="mt_m"
            language="html"
          >
            {`<p>이 텍스트는 <b>굵게</b> 표시됩니다.</p>`}
          </CodeBlock>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">중요한 정보와 단순 굵기의 구분</h3>
          <CodeBlock
            title="중요한 정보와 단순 굵기의 구분"
            className="mt_m"
            language="html"
          >
            {`<p>주의: <strong>중요한 정보</strong>는 반드시 읽어야 합니다.</p>
<p>상세 정보는 <b>여기</b>를 참조하세요.</p>`}
          </CodeBlock>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">특정 텍스트 부각</h3>
          <CodeBlock title="특정 텍스트 부각" className="mt_m" language="html">
            {`<p>제품 이름: <b>스마트폰 X</b></p>
<p>가격: <b>₩1,200,000</b></p>`}
          </CodeBlock>
        </article>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주의사항
        </h2>
        <ul className="dot_lst mt_l">
          <li>
            텍스트 중요도/강조 목적에 따라 <code>&lt;strong&gt;</code>,{" "}
            <code>&lt;em&gt;</code>, <code>&lt;b&gt;</code>를 구분해 사용하세요.
          </li>
          <li>
            <code>&lt;b&gt;</code>는 스크린 리더에 특별한 의미를 전달하지
            않으므로 진짜 강조가 필요하면 시맨틱 태그나 보조 속성을 고려하세요.
          </li>
          <li>
            문서 전체에 과도하게 사용하면 가독성이 떨어지므로 필요한 범위에만
            제한적으로 사용하는 것이 좋습니다.
          </li>
        </ul>
      </section>
      <aside className="browser_support mt_xxl" data-tit="b">
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
        <img src={`${IMG.HTML}/05_html_05.png`} alt="b 요소" />
        <figcaption>b 요소</figcaption>
      </figure>
    </>
  );
}

export default BElementPage;
