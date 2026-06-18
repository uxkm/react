import CodeBlock from "@/components/code/CodeBlock";
import { usePageMeta } from "@/components/common/PageMeta";
import { IMG } from "@/config/path";

const PAGE_LAYOUT = {
  mainClass: "figure_element",
  type: "publishing",
  info: true,
  note: true,
  sideMenu: true,
  reference: true,
  contentList: true,
  bottomEditor: true,
};

const PAGE_DATA = {
  title: "figure element",
  description:
    "figure 요소는 HTML 문서에서 이미지, 도표, 코드 블록 등 본문과는 독립적인 시각 콘텐츠를 묶는 태그로, 일반적으로 설명을 제공하는 figcaption 요소와 함께 사용되며 콘텐츠에 대한 캡션을 제공하거나 출처를 표시하는 데 활용됩니다. 이 페이지에서는 figure 요소의 주요 역할 및 특징을 설명하고, figure 요소의 용도와 구조적 위치에 따른 사용 예시를 소개합니다.",
  keyword: "Markup, HTML, HTML5, tag, elements, figure",
};

function FigureElementPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          <code>&lt;figure&gt;</code> 요소는{" "}
          <b>독립적인 시각적 콘텐츠를 그룹화하는 시맨틱 태그</b>로,{" "}
          <b>
            이미지, 다이어그램, 코드 샘플, 차트 등의 부가적인 콘텐츠를
            포함합니다.
          </b>
          <br />
          본문과는 별도로 참조 가능한 콘텐츠 블록을 나타내며,{" "}
          <code>&lt;figcaption&gt;</code> 요소와 함께 사용하여 설명이나 캡션을
          추가할 수 있습니다. 또한, 문서의 주요 흐름과 구조적으로 구분되며,
          이동하거나 반복 사용이 가능하다는 특징이 있습니다.
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
                <code>&lt;figure&gt;</code>는 이미지, 도표, 차트 등과 같은
                콘텐츠를 그룹화하여 문서의 의미를 명확히 합니다.
              </li>
              <li>
                문서의 주요 흐름과 관련된 부가적인 정보를 제공하지만, 독립적으로
                사용할 수도 있습니다.
              </li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>figcaption과 함께 사용</strong>
            <ul className="dot_lst">
              <li>
                <code>&lt;figure&gt;</code> 내부에{" "}
                <code>&lt;figcaption&gt;</code>를 추가하여 콘텐츠에 대한
                설명이나 제목을 제공할 수 있습니다.
              </li>
              <li>
                <code>&lt;figcaption&gt;</code>는 선택적 요소이며,{" "}
                <code>&lt;figure&gt;</code>의 첫 번째 또는 마지막 요소로
                배치됩니다.
              </li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>독립적 사용 가능</strong>
            <p>
              <code>&lt;figure&gt;</code>에 포함된 콘텐츠는 문서의 나머지 부분과
              독립적으로 사용할 수 있으며, 제거하더라도 문서의 의미가 손상되지
              않아야 합니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>다양한 콘텐츠 지원</strong>
            <p>
              이미지(<code>&lt;img&gt;</code>), 비디오(
              <code>&lt;video&gt;</code>), 오디오(
              <code>&lt;audio&gt;</code>), 코드 블록(
              <code>&lt;pre&gt;</code>), 차트 등 다양한 콘텐츠를 포함할 수
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
          <code>&lt;figure&gt;</code> 요소는 기본적으로 블록 레벨 요소입니다.
        </p>
        <CodeBlock title="figure element CSS" className="mt_m" language="css">
          {`figure {
  display: block;
}`}
        </CodeBlock>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          기본 문법
        </h2>
        <CodeBlock
          title="figure element syntax"
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
          <code>&lt;figure&gt;</code> 요소는{" "}
          <b className="t_black">고유 속성</b>을 가지지 않으며,{" "}
          <mark>글로벌 속성</mark>(<code>class</code>, <code>id</code>,{" "}
          <code>style</code>, <code>aria-*</code>, <code>data-*</code> 등)만
          사용할 수 있습니다.
        </p>
        <CodeBlock title="figure element attr" className="mt_m" language="html">
          {`<!-- 속성 -->
<figure id="image-example" class="example-figure">
  <img src="example.jpg" alt="예시 이미지">
  <figcaption>이미지에 대한 설명</figcaption>
</figure>`}
        </CodeBlock>
      </section>
      <section className="view_editor indent mt_xxl">
        <h2 className="ml_mn ve_tit">예제</h2>
        <article className="mt_l indent">
          <h3 className="ml_mn">이미지와 설명</h3>
          <CodeBlock title="이미지와 설명" className="mt_m" language="html">
            {`<figure>
  <img src="mountain.jpg" alt="산의 풍경">
  <figcaption>아름다운 산의 풍경</figcaption>
</figure>`}
          </CodeBlock>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">코드 블록과 설명</h3>
          <CodeBlock title="코드 블록과 설명" className="mt_m" language="html">
            {`<figure>
  <pre>
    <code>
      console.log('Hello, World!');
    </code>
  </pre>
  <figcaption>간단한 JavaScript 출력 예제</figcaption>
</figure>`}
          </CodeBlock>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">동영상과 캡션</h3>
          <CodeBlock title="동영상과 캡션" className="mt_m" language="html">
            {`<figure>
  <video controls>
    <source src="video.mp4" type="video/mp4">
    동영상을 지원하지 않는 브라우저입니다.
  </video>
  <figcaption>웹 개발에 대한 동영상 설명.</figcaption>
</figure>`}
          </CodeBlock>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">표와 설명</h3>
          <CodeBlock title="표와 설명" className="mt_m" language="html">
            {`<figure>
  <table>
    <tr>
      <th>이름</th>
      <th>점수</th>
    </tr>
    <tr>
      <td>홍길동</td>
      <td>90</td>
    </tr>
    <tr>
      <td>김철수</td>
      <td>85</td>
    </tr>
  </table>
  <figcaption>학생들의 시험 점수</figcaption>
</figure>`}
          </CodeBlock>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">중첩된 figure</h3>
          <CodeBlock title="중첩된 figure" className="mt_m" language="html">
            {`<figure>
  <img src="nature.jpg" alt="아름다운 자연 풍경" width="600">
  <figcaption>자연 풍경 사진: 산과 호수</figcaption>

  <figure>
    <img src="mountain.jpg" alt="눈 덮인 산" width="300">
    <figcaption>눈 덮인 산</figcaption>
  </figure>

  <figure>
    <img src="lake.jpg" alt="맑은 호수" width="300">
    <figcaption>맑은 호수</figcaption>
  </figure>
</figure>`}
          </CodeBlock>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">접근성을 고려한 콘텐츠</h3>
          <CodeBlock
            title="접근성을 고려한 콘텐츠"
            className="mt_m"
            language="html"
          >
            {`<figure aria-labelledby="fig1-caption">
  <img src="chart.png" alt="2025년 IT 트렌드 차트">
  <figcaption id="fig1-caption">2025년 주요 IT 트렌드 그래프</figcaption>
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
            <code>&lt;figure&gt;</code>에 포함된 콘텐츠는 문서의 주요 흐름과
            독립적으로 사용될 수 있어야 하며, 제거하더라도 문서의 의미가
            훼손되지 않아야 합니다.
          </li>
          <li>
            <code>&lt;figcaption&gt;</code>은 <code>&lt;figure&gt;</code>의 필수
            요소는 아니지만, 시각적 콘텐츠에 대한 설명이 필요할 경우 추가하여
            접근성을 향상시킬 수 있습니다.
          </li>
        </ul>
      </section>

      <aside className="browser_support mt_xxl" data-tit="figure">
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
        <img src={IMG.HTML + "/04_html_10.png"} alt="figure 요소" />
        <figcaption>figure 요소</figcaption>
      </figure>
    </>
  );
}

export default FigureElementPage;
