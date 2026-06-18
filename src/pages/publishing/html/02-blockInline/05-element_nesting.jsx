import { usePageMeta } from "@/components/common/PageMeta";
import { IMG } from "@/config/path";
import CodeBlock from "@/components/code/CodeBlock";

const PAGE_LAYOUT = {
  mainClass: "element_nesting",
  type: "publishing",
  info: true,
  note: true,
  sideMenu: true,
  reference: false,
  contentList: true,
  depth3Last: false,
  bottomEditor: true,
};

const PAGE_DATA = {
  title: "요소 중첩",
  description:
    "요소 중첩(Nesting)이란 HTML 문서에서 한 요소 안에 다른 요소를 포함하는 구조를 의미합니다. 이 페이지에서는 요소 중첩의 개념과 기본 규칙, 중첩 예시와 주의사항을 소개합니다.",
  keyword: "Markup, HTML, 요소 중첩, nesting",
};

function ElementNestingPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          <strong>요소 중첩(Nesting Elements)</strong>은 HTML 문서에서{" "}
          <b>
            한 요소 안에 다른 요소를 포함하여 구조적 관계를 형성하는 것을 의미
          </b>
          합니다.
          <br />
          HTML은 <strong>트리 구조(DOM)</strong>
          <b>로 구성</b>되기 때문에, 요소 간의 중첩은{" "}
          <b>콘텐츠의 계층과 의미를 정의하는 데 필수</b>적입니다. 중첩 시에는{" "}
          <b>올바른 열고 닫기 순서</b>를 지켜야 하며, 특정 요소는{" "}
          <strong>
            어떤 요소 안에 들어갈 수 있는지에 대한 규칙(허용된 자식 요소)
          </strong>
          이 정해져 있습니다.
          <br />
          잘못된 중첩은 <b>브라우저 렌더링 오류나 접근성 문제</b>로 이어질 수
          있으므로 주의가 필요합니다.
        </p>
      </blockquote>

      <section className="mt_xxl indent">
        <h2 className="ml_mn">요소 중첩의 기본 규칙</h2>
        <ol className="ol_lst info_lst gap-column-l mt_l">
          <li className="weight-600-before t_black_before">
            <strong>올바른 계층 구조</strong>
            <ul className="dot_lst">
              <li>
                블록 요소는 다른 블록 요소나 인라인 요소를 포함할 수 있습니다.
                <br />
                <mark>
                  단, <code>&lt;p&gt;</code> 요소는 블록 요소이지만 다른 블록
                  요소가 포함될 수 없고, 인라인 요소만 포함될 수 있습니다.
                </mark>
              </li>
              <li>
                인라인 요소는 다른 인라인 요소를 포함할 수 있지만, 블록 요소를
                포함할 수는 없습니다.
              </li>
            </ul>
          </li>

          <li className="weight-600-before t_black_before">
            <strong>닫는(폐쇄) 태그</strong>
            <ul className="dot_lst">
              <li>
                모든 HTML 요소는 올바르게 닫혀야 합니다. 중첩된 요소가 있는
                경우, 닫는 태그는 열리는 태그의 반대 순서로 닫아야 합니다.
              </li>
              <li>
                <mark>
                  단,{" "}
                  <code>
                    &lt;meta&gt;, &lt;a&gt;, &lt;img&gt;, &lt;br&gt;, &lt;hr&gt;
                  </code>{" "}
                  같은 단일 요소는 닫는 태그 없이 사용 가능합니다.
                </mark>
              </li>
            </ul>
          </li>
        </ol>
      </section>

      <section className="mt_xxl indent">
        <h2 className="ml_mn">부모 요소와 자식 요소</h2>
        <p className="mt_ml">
          HTML 요소 중첩에서 부모와 자식 관계는 HTML 문서의 구조를 이해하는 데
          중요한 개념입니다.
          <br />
          부모와 자식 관계를 통해 문서의 계층 구조를 정의하고, 요소 간의 관계를
          명확하게 할 수 있습니다.
        </p>
        <ol className="ol_lst info_lst gap-column-l mt_ml">
          <li className="weight-600-before t_black_before">
            <strong>부모 요소 (Parent Element)</strong>
            <ul className="dot_lst">
              <li>다른 요소를 포함하는 요소를 부모 요소라고 합니다.</li>
              <li>
                부모 요소는 자식 요소를 감싸고 있으며, 자식 요소의 바로 상위
                계층에 위치합니다.
              </li>
            </ul>
          </li>

          <li className="weight-600-before t_black_before">
            <strong>자식 요소 (Child Element)</strong>
            <ul className="dot_lst">
              <li>다른 요소 안에 포함된 요소를 자식 요소라고 합니다.</li>
              <li>
                자식 요소는 부모 요소에 포함되며, 부모 요소의 바로 하위 계층에
                위치합니다.
              </li>
            </ul>
          </li>

          <li className="weight-600-before t_black_before">
            <strong>부모와 자식 관계의 시각화</strong>
            <CodeBlock title="부모와 자식 관계의 시각화" language="html">
              {`<div class="nesting">        <!-- 부모 요소 -->
  <h1>UXKM</h1>              <!-- 자식 요소 -->
  <div class="el">           <!-- 자식 요소 & 부모 요소 -->
    <p>여러분을 환영합니다.</p>   <!-- 자식 요소 -->
  </div>
</div>`}
            </CodeBlock>
            <ul className="dot_lst mt_m">
              <li>
                위 예제에서{" "}
                <code className="t_purple">
                  &lt;div class=&quot;nesting&quot;&gt;
                </code>
                는 최상위 부모 요소입니다.
              </li>
              <li>
                <code className="t_darkgreen">&lt;h1&gt;</code>,{" "}
                <code className="t_darkgreen">
                  &lt;div class=&quot;el&quot;&gt;
                </code>
                , <code className="t_blue">&lt;p&gt;</code> 모두{" "}
                <code className="t_purple">
                  &lt;div class=&quot;nesting&quot;&gt;
                </code>
                의 자식 요소입니다.
              </li>
              <li>
                <code className="t_darkgreen">
                  &lt;div class=&quot;el&quot;&gt;
                </code>
                은{" "}
                <code className="t_purple">
                  &lt;div class=&quot;nesting&quot;&gt;
                </code>
                의 자식 요소이자, 동시에{" "}
                <code className="t_blue">&lt;p&gt;</code> 요소의 부모
                요소입니다.
              </li>
            </ul>
          </li>
        </ol>
      </section>

      <section className="mt_xxl indent">
        <h2 className="ml_mn">
          요소 중첩의 <i className="t_red">잘못된 예</i>와{" "}
          <i className="t_green">올바른 예</i>
        </h2>
        <p className="mt_ml">
          요소의 중첩이 잘못되면 레이아웃 전체가 망가질 수 있으므로, 마크업 시
          요소가 적절히 중첩되었는지 확인해야 합니다.
          <br />
          아래는 요소 중첩의 <b className="t_red">잘못된 예</b>와{" "}
          <b className="t_green">올바른 예</b>입니다.
        </p>

        <article className="mt_l indent">
          <h3 className="ml_mn">문단과 강조</h3>
          <ul className="dot_lst mt_m gap-column-ml info_lst">
            <li className="before_red">
              <strong className="t_red">잘못된 예</strong>
              <p>
                첫 번째 예제는{" "}
                <i className="underline">
                  열린 태그의 반대 순서로 닫아야 하는 규칙
                </i>
                을 지키지 않았고,
                <br />두 번째 예제는{" "}
                <i className="underline">
                  인라인 요소 안에 블록 요소가 들어갈 수 없는 규칙
                </i>
                을 지키지 않았습니다.
              </p>
              <CodeBlock
                title="문단과 강조 - 요소 중첩의 잘못된 예"
                language="html"
              >
                {`<!-- 닫는 태그의 순서가 잘못된 예 -->
<p>
  블록 요소(단락) 안에 <strong>인라인 요소(강조)____error__</p>__error____가 중첩되어 있습니다.
____error__</span>__error____

<!-- 인라인 요소에 블록 요소가 잘못 중첩된 예 -->
<span>
  <p>블록 요소(단락) 안에 <strong>인라인 요소(강조)</strong>가 중첩되어 있습니다.____error__</p>__error____
____error__</span>__error____`}
              </CodeBlock>
            </li>
            <li className="before_green">
              <strong className="t_green">올바른 예</strong>
              <CodeBlock
                title="문단과 강조 - 요소 중첩의 올바른 예"
                language="html"
              >
                {`<p>
  블록 요소(단락) 안에 <strong>인라인 요소(강조)</strong>가 중첩되어 있습니다.
</p>`}
              </CodeBlock>
            </li>
          </ul>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">리스트와 링크</h3>
          <ul className="dot_lst mt_m gap-column-ml info_lst">
            <li className="before_red">
              <strong className="t_red">잘못된 예</strong>
              <p>
                첫 번째 예제는 필수 요소가 누락되었습니다.{" "}
                <code>&lt;ul&gt;</code> 요소의{" "}
                <i className="underline">직계 자식</i>(한 단계 밑)으로{" "}
                <code>&lt;li&gt;</code> 요소가 반드시 있어야 합니다.
                <br />두 번째 예제는 <code>&lt;a&gt;</code>요소를 단지
                않았습니다.
              </p>
              <CodeBlock
                title="리스트와 링크 - 요소 중첩의 잘못된 예"
                language="html"
              >
                {`<!-- ul 요소의 필수 직계 자식 요소인 li 요소를 누락한 예 -->
<ul>
  <a href="#home">홈</a>
  <a href="#about">소개</a>
  <a href="#contact">연락처</a>
____error__</ul>__error____

<!-- a 요소를 닫지 않은 예 -->
<ul>
  <li><a href="#home">홈____error__</li>__error____
  <li><a href="#about">소개____error__</li>__error____
  <li><a href="#contact">연락처____error__</li>__error____
____error__</ul>__error____`}
              </CodeBlock>
            </li>
            <li className="before_green">
              <strong className="t_green">올바른 예</strong>
              <CodeBlock
                title="리스트와 링크 - 요소 중첩의 올바른 예"
                language="html"
              >
                {`<ul>
  <li><a href="#home">홈</a></li>
  <li><a href="#about">소개</a></li>
  <li><a href="#contact">연락처</a></li>
</ul>`}
              </CodeBlock>
            </li>
          </ul>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">표 데이터</h3>
          <ul className="dot_lst mt_m gap-column-ml info_lst">
            <li className="before_red">
              <strong className="t_red">잘못된 예</strong>
              <CodeBlock
                title="표 데이터 - 요소 중첩의 잘못된 예"
                language="html"
              >
                {`<!-- 잘못된 중첩: tr 요소가 td 요소 안에 직접 중첩됨 -->
<table>
  <tr>
    <td>첫 번째 셀</td>
    ____error__<tr>__error____
      ____error__<td>잘못된 행</td>__error____
    ____error__</tr>__error____
  </tr>
</table>

<!-- 잘못된 중첩: td 요소 안에 또 다른 td 요소가 중첩됨 -->
<table>
  <tr>
    <td>첫 번째 셀</td>
    <td>두 번째 셀
      ____error__<td>잘못된 셀</td>__error____
    </td>
  </tr>
</table>

<!-- 잘못된 중첩: thead 요소 안에 tbody 요소가 중첩됨 -->
<table>
  <thead>
    <tr>
      <th>헤더 셀</th>
      ____error__<tbody>__error____
        ____error__<tr>__error____
          ____error__<td>본문 셀</td>__error____
        ____error__</tr>__error____
      ____error__</tbody>__error____
    </tr>
  </thead>
</table>`}
              </CodeBlock>
            </li>
            <li className="before_green">
              <strong className="t_green">올바른 예</strong>
              <CodeBlock
                title="표 데이터 - 요소 중첩의 올바른 예"
                language="html"
              >
                {`<table>
  <thead>
    <tr>
      <th>헤더 셀</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>본문 셀</td>
    </tr>
  </tbody>
</table>`}
              </CodeBlock>
            </li>
          </ul>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">시멘틱 레이아웃</h3>
          <ul className="dot_lst mt_m gap-column-ml info_lst">
            <li className="before_red">
              <strong className="t_red">잘못된 예</strong>
              <p>
                제목 요소 안에 블록 요소를 포함하는 것은 권장되지 않습니다.
                <br />
                제목 요소(<code>&lt;h1&gt;</code>, <code>&lt;h2&gt;</code>,{" "}
                <code>&lt;h3&gt;</code>, 등)는 인라인 텍스트 콘텐츠를 포함하도록
                설계되었기 때문에, 블록 요소를 포함하면 시맨틱 구조가 어긋나고,
                브라우저의 기본 동작을 방해할 수 있습니다.
              </p>
              <CodeBlock
                title="시멘틱 레이아웃 - 요소 중첩의 잘못된 예"
                language="html"
              >
                {`<body>
  <h1>
    웹사이트 제목
    <!-- 잘못된 중첩: h1 요소 안에 nav 요소가 중첩됨 -->
    ____error__<nav>__error____
      ____error__<ul>__error____
        ____error__<li><a href="#home">홈</a></li>__error____
        ____error__<li><a href="#about">소개</a></li>__error____
        ____error__<li><a href="#contact">연락처</a></li>__error____
      ____error__</ul>__error____
    ____error__</nav>__error____
  </h1>

  <main>
    <article>
      <h3>첫 번째 독립된 콘텐츠 제목</h3>
      <p>첫 번째 독립된 콘텐츠 내용</p>
    ____error__</section>__error____ <!-- 잘못된 중첩: article 요소로 시작했으나 section 요소로 닫힘 -->
    <article>
      <h3>두 번째 독립된 콘텐츠 제목</h3>
      <p>두 번째 독립된 콘텐츠 내용</p>
    </article>
    ____error__</article>__error____ <!-- 잘못된 중첩: article 요소가 두번 닫힘 -->
  </main>

  <footer>
    <p>저작권 © 2019</p>
  </footer>
</body>`}
              </CodeBlock>
            </li>
            <li className="before_green">
              <strong className="t_green">올바른 예</strong>
              <CodeBlock
                title="시멘틱 레이아웃 - 요소 중첩의 올바른 예"
                language="html"
              >
                {`<body>
  <header>
    <h1>웹사이트 제목</h1>
    <nav>
      <ul>
        <li><a href="#home">홈</a></li>
        <li><a href="#about">소개</a></li>
        <li><a href="#contact">연락처</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <h2>콘텐츠 제목</h2>
    <article>
      <h3>첫 번째 독립된 콘텐츠 제목</h3>
      <p>첫 번째 독립된 콘텐츠 내용</p>
    </article>
    <article>
      <h3>두 번째 독립된 콘텐츠 제목</h3>
      <p>두 번째 독립된 콘텐츠 내용</p>
    </article>
  </main>

  <footer>
    <p>저작권 © 2019</p>
  </footer>
</body>`}
              </CodeBlock>
            </li>
          </ul>
        </article>
      </section>

      <figure className="img_figure mt_l">
        <img src={`${IMG.HTML}/02_html_05.png`} alt="요소 중첩" />
        <figcaption>요소 중첩</figcaption>
      </figure>
    </>
  );
}

export default ElementNestingPage;
