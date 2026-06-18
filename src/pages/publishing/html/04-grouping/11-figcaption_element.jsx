import CodeBlock from "@/components/code/CodeBlock";
import { usePageMeta } from "@/components/common/PageMeta";
import { IMG } from "@/config/path";

const PAGE_LAYOUT = {
  mainClass: "figcaption_element",
  type: "publishing",
  info: true,
  note: true,
  sideMenu: true,
  reference: true,
  contentList: true,
  bottomEditor: true,
};

const PAGE_DATA = {
  title: "figcaption element",
  description:
    "figcaption 요소는 HTML 문서에서 figure 요소 내부에 사용되며, 이미지나 도표, 코드 블록 등 시각 콘텐츠에 대한 설명이나 캡션을 제공하는 태그로, 일반적으로 figure 요소의 첫 번째나 마지막 자식 요소로 위치합니다. 이 페이지에서는 figcaption 요소의 주요 역할 및 특징을 설명하고, figcaption 요소의 용도와 구조적 위치에 따른 사용 예시를 소개합니다.",
  keyword: "Markup, HTML, HTML5, tag, elements, figcaption",
};

function FigcaptionElementPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          <code>&lt;figcaption&gt;</code> 요소는 <code>&lt;figure&gt;</code>{" "}
          요소 내부에서{" "}
          <b>
            해당 시각 콘텐츠(예: 이미지, 그래프, 코드 등)에 대한 설명 또는
            캡션을 제공하는 시맨틱 태그
          </b>
          입니다.
          <br />
          <code>&lt;figure&gt;</code>의 첫 번째 또는 마지막 자식 요소로
          위치하며, 그 콘텐츠가 무엇을 의미하는지 설명하거나 출처 등을 명시하는
          데 사용됩니다. 시각 콘텐츠에 의미를 부여하고, 접근성을 높이는 데
          중요한 역할을 합니다.
        </p>
      </blockquote>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주요 역할 및 특징
        </h2>
        <ol className="mt_l ol_lst info_lst gap-column-important-m">
          <li className="weight-600-before t_black_before">
            <strong>콘텐츠에 대한 설명 제공</strong>
            <ul className="dot_lst">
              <li>
                <code>&lt;figcaption&gt;</code>은 <code>&lt;figure&gt;</code> 내
                콘텐츠에 대한 제목이나 부연 설명을 제공합니다.
              </li>
              <li>예: 이미지 제목, 차트 설명, 코드 블록 부연 설명 등.</li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>figure와 함께 사용</strong>
            <ul className="dot_lst">
              <li>
                <code>&lt;figcaption&gt;</code>는 반드시{" "}
                <code>&lt;figure&gt;</code> 요소의 자식으로 사용되어야 하며,
                독립적으로 사용할 수 없습니다.
              </li>
              <li>
                <code>&lt;figure&gt;</code> 내에서 첫 번째 또는 마지막 요소로
                배치됩니다.
              </li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>의미론적 역할</strong>
            <ul className="dot_lst">
              <li>
                <code>&lt;figcaption&gt;</code>은 콘텐츠의 설명을 구조적으로
                제공하며, 접근성과 SEO 측면에서 유리합니다.
              </li>
              <li>
                스크린 리더는 <code>&lt;figcaption&gt;</code> 내용을 캡션으로
                인식하여 사용자에게 전달합니다.
              </li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>포함 가능한 콘텐츠</strong>
            <ul className="dot_lst">
              <li>텍스트와 인라인 요소를 포함할 수 있습니다.</li>
              <li>
                블록 요소는 포함할 수 없으므로 간단한 설명이나 텍스트로 구성하는
                것이 좋습니다.
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
          <code>&lt;figcaption&gt;</code> 요소는 기본적으로 블록 레벨
          요소입니다.
        </p>
        <CodeBlock
          title="figcaption element CSS"
          className="mt_m"
          language="css"
        >
          {`figcaption {
  display: block;
}`}
        </CodeBlock>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          기본 문법
        </h2>
        <CodeBlock
          title="figcaption element syntax"
          className="mt_l"
          language="html"
        >
          {`<figure>
  <img src="example.jpg" alt="예시 이미지">
  <figcaption>이미지에 대한 설명</figcaption>
</figure>`}
        </CodeBlock>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          속성
        </h2>
        <p className="mt_l">
          <code>&lt;figcaption&gt;</code> 요소는{" "}
          <b className="t_black">고유 속성</b>을 가지지 않으며,{" "}
          <mark>글로벌 속성</mark>(<code>class</code>, <code>id</code>,{" "}
          <code>style</code>, <code>aria-*</code>, <code>data-*</code> 등)만
          사용할 수 있습니다.
        </p>
        <CodeBlock
          title="figcaption element attr"
          className="mt_m"
          language="html"
        >
          {`<figure>
  <img src="example.jpg" alt="예시 이미지">
  <figcaption id="image-caption" class="caption">이미지에 대한 설명</figcaption>
</figure>`}
        </CodeBlock>
      </section>
      <section className="view_editor indent mt_xxl">
        <h2 className="ml_mn ve_tit">예제</h2>
        <article className="mt_l indent">
          <h3 className="ml_mn">이미지와 함께 설명 제공</h3>
          <CodeBlock
            title="이미지와 함께 설명 제공"
            className="mt_m"
            language="html"
          >
            {`<figure>
  <img src="sunset.jpg" alt="저녁 노을" width="600">
  <figcaption>저녁 노을: 평화로운 해질녘의 풍경</figcaption>
</figure>`}
          </CodeBlock>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">비디오와 함께 설명 제공</h3>
          <CodeBlock
            title="비디오와 함께 설명 제공"
            className="mt_m"
            language="html"
          >
            {`<figure>
  <video width="600" controls>
    <source src="documentary.mp4" type="video/mp4">
    <p>이 브라우저는 비디오를 지원하지 않습니다.</p>
  </video>
  <figcaption>자연 다큐멘터리: 지구의 아름다운 생태계를 탐험하는 영상</figcaption>
</figure>`}
          </CodeBlock>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">차트나 데이터 시각화와 함께 설명 제공</h3>
          <CodeBlock
            title="차트나 데이터 시각화와 함께 설명 제공"
            className="mt_m"
            language="html"
          >
            {`<figure>
  <img src="sales-chart.png" alt="2025년 판매 차트" width="600">
  <figcaption>2025년 상반기 판매 차트: 상승하는 판매 추세</figcaption>
</figure>`}
          </CodeBlock>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">접근성을 고려한 설명</h3>
          <CodeBlock
            title="접근성을 고려한 설명"
            className="mt_m"
            language="html"
          >
            {`<figure aria-labelledby="fig1-caption">
  <img src="chart.png" alt="2025년 IT 트렌드 그래프">
  <figcaption id="fig1-caption">2025년 주요 IT 트렌드 차트 설명.</figcaption>
</figure>`}
          </CodeBlock>
        </article>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주의사항
        </h2>
        <ul className="dot_lst mt_l">
          <li>
            <code>&lt;figcaption&gt;</code>은 반드시 <code>&lt;figure&gt;</code>{" "}
            요소 내부에 위치해야 하며, 단독으로 사용할 수 없습니다.
          </li>
          <li>
            <code>&lt;figcaption&gt;</code>은 <code>&lt;figure&gt;</code> 안에서
            첫 번째 또는 마지막 자식 요소로 배치해야 합니다.
          </li>
          <li>
            <code>&lt;figcaption&gt;</code>의 내용이 해당 콘텐츠와 관련이 있음을
            명확히 작성해야 합니다.
          </li>
        </ul>
      </section>

      <aside className="browser_support mt_xxl" data-tit="figcaption">
        <ul>
          <li className="ie">9+</li>
          <li className="edge">지원</li>
          <li className="chrome">8.0</li>
          <li className="firefox">4.0</li>
          <li className="opera">11.0</li>
          <li className="safari">5.1</li>
        </ul>
      </aside>
      <figure className="img_figure mt_l">
        <img src={IMG.HTML + "/04_html_11.png"} alt="figcaption 요소" />
        <figcaption>figcaption 요소</figcaption>
      </figure>
    </>
  );
}

export default FigcaptionElementPage;
