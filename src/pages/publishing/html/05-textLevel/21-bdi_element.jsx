import CodeBlock from "@/components/code/CodeBlock";
import { usePageMeta } from "@/components/common/PageMeta";
import { IMG } from "@/config/path";

const PAGE_LAYOUT = {
  mainClass: "bdi_element",
  type: "publishing",
  info: true,
  note: true,
  sideMenu: true,
  reference: true,
  contentList: true,
  bottomEditor: true,
};

const PAGE_DATA = {
  title: "bdi element",
  description:
    "bdi 요소는 HTML 문서에서 텍스트의 방향성을 자동으로 감지하여 주변 콘텐츠와의 시각적 혼란을 방지할 때 사용하는 인라인 태그로, LTR(왼쪽에서 오른쪽)과 RTL(오른쪽에서 왼쪽) 언어가 혼합될 때 bdi로 감싼 텍스트는 자체적으로 방향을 판단하여 올바르게 표시됩니다. 이 페이지에서는 bdi 요소의 주요 역할 및 특징을 설명하고, bdi 요소의 용도와 구조적 위치에 따른 사용 예시를 소개합니다.",
  keyword: "Markup, HTML, HTML5, tag, elements, bdi, Bi-Directional Isolation",
};

function BdiElementPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          <code>&lt;bdi&gt;</code> 요소는 텍스트의 방향성을 자동으로 감지하여
          주변 콘텐츠와의 방향 혼란을 방지하는 시맨틱 태그입니다.
          <br />
          다국어 콘텐츠에서 오른쪽에서 왼쪽(RTL) 언어와 왼쪽에서 오른쪽(LTR)
          언어가 혼합될 때 해당 부분만 독립적으로 처리하여 시각적 배열이 깨지지
          않도록 도와줍니다.
        </p>
      </blockquote>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주요 역할 및 특징
        </h2>
        <ol className="mt_l ol_lst info_lst gap-column-important-m">
          <li className="weight-600-before t_black_before">
            <strong>다국어 지원을 위한 방향 제어</strong>
            <ul className="dot_lst">
              <li>
                <code>&lt;bdi&gt;</code> 내부 텍스트는 부모와 독립적인 방향
                흐름을 가집니다.
              </li>
              <li>
                RTL/LTR 혼합 문장에서 사용자 이름, 외부 데이터 표시에
                유용합니다.
              </li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>자동 방향 감지</strong>
            <p>
              텍스트의 첫 강한 방향 문자에 따라 브라우저가 자동으로 방향을
              결정합니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>bdo와의 차이</strong>
            <p>
              <code>&lt;bdi&gt;</code>는 자동 감지, <code>&lt;bdo&gt;</code>는{" "}
              <code>dir</code>로 강제 지정합니다.
            </p>
          </li>
        </ol>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          CSS 기본 값
        </h2>
        <p className="mt_l">
          <code>&lt;bdi&gt;</code> 요소는 기본적으로 인라인 레벨 요소입니다.
        </p>
        <CodeBlock title="bdi element CSS" className="mt_m" language="css">
          {`bdi {
  display: inline;
  unicode-bidi: isolate;
  direction: inherit;
}`}
        </CodeBlock>
        <p className="mt_m">
          <code>unicode-bidi: isolate</code>는 요소 내부 텍스트 방향을 주변
          문맥과 격리해 표시 안정성을 높입니다.
        </p>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          기본 문법
        </h2>
        <CodeBlock title="bdi element syntax" className="mt_l" language="html">
          {`<bdi>텍스트</bdi>`}
        </CodeBlock>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn">속성</h2>
        <p className="mt_l">
          <code>&lt;bdi&gt;</code> 요소는 고유 속성이 없으며 글로벌 속성(
          <code>class</code>, <code>id</code>, <code>style</code>,{" "}
          <code>aria-*</code>, <code>data-*</code>)만 사용할 수 있습니다.
        </p>
      </section>
      <section className="view_editor indent mt_xxl">
        <h2 className="ml_mn ve_tit">예제</h2>
        <article className="mt_l indent">
          <h3 className="ml_mn">기본 사용법 (자동 방향 감지)</h3>
          <CodeBlock
            title="기본 사용법 (자동 방향 감지)"
            className="mt_m"
            language="html"
          >
            {`<p>사용자 입력: <bdi>مرحبا</bdi></p>`}
          </CodeBlock>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">혼합 언어 환경에서의 문제 해결</h3>
          <CodeBlock
            title="혼합 언어 환경에서의 문제 해결"
            className="mt_m"
            language="html"
          >
            {`<p>사용자 목록:</p>
<ul>
  <li><bdi>김철수</bdi>: 100점</li>
  <li><bdi>مرحبا</bdi>: 90점</li>
  <li><bdi>John</bdi>: 85점</li>
</ul>`}
          </CodeBlock>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">사용자 입력 데이터 보호</h3>
          <CodeBlock
            title="사용자 입력 데이터 보호"
            className="mt_m"
            language="html"
          >
            {`<p>
  새로운 메시지: <bdi>مرحبا</bdi> 님이 메시지를 보냈습니다.
</p>`}
          </CodeBlock>
        </article>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주의사항
        </h2>
        <ul className="dot_lst mt_l">
          <li>
            명시적인 방향 강제가 필요하면 <code>&lt;bdo&gt;</code>와{" "}
            <code>dir</code> 사용이 더 적합할 수 있습니다.
          </li>
          <li>
            다국어 입력이 포함된 UI에서는 실제 화면/스크린리더 동작을 함께
            테스트하세요.
          </li>
          <li>
            단일 방향 텍스트에서는 불필요하며 혼합 언어 콘텐츠에서만 사용하는
            것이 좋습니다.
          </li>
        </ul>
      </section>
      <aside className="browser_support mt_xxl" data-tit="bdi">
        <ul>
          <li className="ie false">지원안함</li>
          <li className="edge false">지원안함</li>
          <li className="chrome">16.0</li>
          <li className="firefox">10.0</li>
          <li className="opera false">지원안함</li>
          <li className="safari false">지원안함</li>
        </ul>
      </aside>
      <figure className="img_figure mt_l">
        <img src={`${IMG.HTML}/05_html_21.png`} alt="bdi 요소" />
        <figcaption>bdi 요소</figcaption>
      </figure>
    </>
  );
}

export default BdiElementPage;
