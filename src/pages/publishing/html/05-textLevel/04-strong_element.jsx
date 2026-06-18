import CodeBlock from "@/components/code/CodeBlock";
import { usePageMeta } from "@/components/common/PageMeta";
import { IMG } from "@/config/path";

const PAGE_LAYOUT = {
  mainClass: "strong_element",
  type: "publishing",
  info: true,
  note: true,
  sideMenu: true,
  reference: true,
  contentList: true,
  bottomEditor: true,
};

const PAGE_DATA = {
  title: "strong element",
  description:
    "strong 요소는 HTML 문서에서 의미상 중요한 텍스트를 강조할 때 사용하는 태그로, 브라우저는 기본적으로 굵은 글씨로 렌더링하며 보조 기술에서는 강조된 어조로 읽히도록 처리합니다. 이 페이지에서는 strong 요소의 주요 역할 및 특징을 설명하고, strong 요소의 용도와 구조적 위치에 따른 사용 예시를 소개합니다.",
  keyword: "Markup, HTML, tag, elements, strong",
};

function StrongElementPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          <code>&lt;strong&gt;</code>은 시각적 볼드뿐 아니라{" "}
          <b>의미적 중요도</b>를 전달합니다.
        </p>
      </blockquote>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주요 역할 및 특징
        </h2>
        <ol className="mt_l ol_lst info_lst gap-column-important-m">
          <li className="weight-600-before t_black_before">
            <strong>강한 의미적 강조</strong>
            <ul className="dot_lst">
              <li>
                <code>&lt;strong&gt;</code>은 경고, 핵심 정보, 필수 안내처럼
                중요한 내용을 표현할 때 사용합니다.
              </li>
              <li>시각적 볼드뿐 아니라 의미적 중요도를 함께 전달합니다.</li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>보조 기술 연계</strong>
            <p>
              스크린 리더가 일반 텍스트보다 강한 어조로 읽어 중요도를 전달할 수
              있습니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>다른 강조 요소와의 차이</strong>
            <p>
              <code>&lt;em&gt;</code>은 문장 강세, <code>&lt;b&gt;</code>는
              시각적 볼드에 가깝고, <code>&lt;strong&gt;</code>은 의미상
              중요성을 나타냅니다.
            </p>
          </li>
        </ol>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          CSS 기본 값
        </h2>
        <CodeBlock title="strong element CSS" className="mt_l" language="css">
          {`strong {
  display: inline;
  font-weight: bold;
}`}
        </CodeBlock>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          기본 문법
        </h2>
        <CodeBlock
          title="strong element syntax"
          className="mt_l"
          language="html"
        >
          {`<strong>강조할 텍스트</strong>`}
        </CodeBlock>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          속성
        </h2>
        <p className="mt_l">
          <code>&lt;strong&gt;</code> 요소는 고유 속성이 없으며 글로벌 속성만
          사용할 수 있습니다.
        </p>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          예제
        </h2>
        <CodeBlock title="기본 텍스트 강조" className="mt_l" language="html">
          {`<p>회원 가입 시 <strong>비밀번호</strong>를 안전하게 설정하세요.</p>`}
        </CodeBlock>
        <CodeBlock
          title="strong nested example"
          className="mt_l"
          language="html"
        >
          {`<p>이 문장은 <strong>중요</strong>하며, <strong><strong>매우 중요</strong></strong>합니다.</p>`}
        </CodeBlock>
        <CodeBlock
          title="접근성을 고려한 강조"
          className="mt_m"
          language="html"
        >
          {`<p aria-label="이 문장은 중요한 경고를 포함합니다.">
  <strong>경고:</strong> 이 작업은 취소할 수 없습니다.
</p>`}
        </CodeBlock>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주의사항
        </h2>
        <ul className="dot_lst mt_l">
          <li>
            모든 굵은 텍스트를 <code>strong</code>으로 작성하지 말고, 의미적으로
            중요할 때만 사용합니다.
          </li>
          <li>
            과도한 사용은 강조 효과를 떨어뜨리므로 정말 중요한 정보에만 제한해
            사용하세요.
          </li>
        </ul>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          <code className="font-24-important weight-600">&lt;strong&gt;</code>{" "}
          vs <code className="font-24-important weight-600">&lt;em&gt;</code>
        </h2>
        <CodeBlock title="strong vs em" className="mt_l" language="html">
          {`<p><strong>경고:</strong> 지금 저장하지 않으면 데이터가 손실됩니다.</p>
<p>이 기능은 <em>정말</em> 유용합니다.</p>`}
        </CodeBlock>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          <code className="font-24-important weight-600">&lt;strong&gt;</code>{" "}
          vs <code className="font-24-important weight-600">&lt;b&gt;</code>
        </h2>
        <CodeBlock title="strong vs b" className="mt_l" language="html">
          {`<p><strong>중요:</strong> 인증 코드를 외부에 공유하지 마세요.</p>
<p>제품명: <b>UXKM Pro</b></p>`}
        </CodeBlock>
      </section>
      <aside className="browser_support mt_xxl" data-tit="strong">
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
        <img src={`${IMG.HTML}/05_html_04.png`} alt="strong 요소" />
        <figcaption>strong 요소</figcaption>
      </figure>
    </>
  );
}

export default StrongElementPage;
