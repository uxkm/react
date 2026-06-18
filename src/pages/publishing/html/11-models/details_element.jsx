import { Suspense, lazy } from "react";
import { usePageMeta } from "@/components/common/PageMeta";
import CodeBlock from "@/components/code/CodeBlock";
import { IMG } from "@/config/path";

const PAGE_LAYOUT = {
  mainClass: "details_summary_element",
  type: "publishing",
  info: true,
  note: true,
  sideMenu: true,
  reference: false,
  contentList: true,
};

const PAGE_DATA = {
  title: "details, summary element",
  description:
    "details 요소는 클릭으로 열고 닫는 인터랙티브 콘텐츠 영역을 정의하며, summary 요소는 해당 영역의 제목 역할을 담당합니다.",
  keyword: "Markup, HTML, tag, elements, details, summary",
};

function EditorFallback() {
  return <div className="uk_editor min_height_400" aria-hidden />;
}

const UkEditorTarget = lazy(
  () => import("@/components/code/UkEditorTarget"),
);

function DetailsElementPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          <code>&lt;details&gt;</code> 요소는{" "}
          <b>
            사용자가 클릭하여 내용을 열고 닫을 수 있는 인터랙티브한
            컨테이너(토글 박스)를 정의하는 시맨틱 태그
          </b>
          로, 자주 묻는 질문(FAQ), 추가 설명, 옵션 설정 등
          <b> 숨겨진 정보를 필요할 때 표시</b>할 수 있도록 도와줍니다.
          <br />
          기본적으로 닫힌 상태로 표시되며, <code>open</code> 속성을 추가하면
          처음부터 열린 상태로 렌더링됩니다.
        </p>
        <p className="mt_s">
          <code>&lt;summary&gt;</code> 요소는 <code>&lt;details&gt;</code>{" "}
          요소의 <b>요약 제목 또는 클릭 가능한 트리거 역할</b>을 하며, 해당
          요소를 클릭하면 <code>&lt;details&gt;</code>의 숨겨진 콘텐츠가
          펼쳐지거나 닫힙니다.
          <br />
          <code>&lt;summary&gt;</code>는 반드시 <code>&lt;details&gt;</code>{" "}
          내부에 위치해야 하며, <b>내용을 직관적으로 안내하는 제목 역할</b>을
          합니다.
        </p>
        <p className="mt_s">
          두 요소는 <b>자바스크립트 없이도 접을 수 있는 인터페이스를 제공</b>
          하여 사용자 경험과 접근성을 모두 향상시킬 수 있습니다.
        </p>
      </blockquote>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주요 역할 및 특징
        </h2>
        <ol className="mt_l ol_lst info_lst gap-column-important-m">
          <li className="weight-600-before t_black_before">
            <strong>접고 펼칠 수 있는 정보 패널 생성</strong>
            <p>
              기본적으로 닫힌 상태(collapsed)로 표시되며, 사용자가 클릭하면
              펼쳐집니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>요약 제목 제공을 위한 &lt;summary&gt;와 함께 사용</strong>
            <ul className="dot_lst">
              <li>
                <code>&lt;summary&gt;</code> 요소는 <code>&lt;details&gt;</code>
                의 접힘/펼침을 제어하는 제목 역할을 합니다.
              </li>
              <li>
                <code>&lt;summary&gt;</code> 요소는 <code>&lt;details&gt;</code>{" "}
                요소의 필수 하위 요소가 아닙니다.
                <br />
                <code>&lt;summary&gt;</code>를 생략하면 브라우저에서 기본적으로{" "}
                <mark>
                  <b>"세부정보"(Details)</b>
                </mark>
                라는 텍스트가 제공됩니다.
              </li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>기본 상태 설정 가능 (open 속성)</strong>
            <p>
              <code>open</code> 속성을 사용하면 페이지 로딩 시 기본으로 펼쳐진
              상태로 시작할 수 있습니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>접근성 및 시맨틱 구조에 유리함</strong>
            <p>
              <code>&lt;details&gt;</code>와 <code>&lt;summary&gt;</code>는
              스크린 리더도 지원하며, 키보드 접근성도 기본적으로 제공됩니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>자바스크립트 없이도 동작하는 네이티브 기능</strong>
            <p>
              <code>&lt;details&gt;</code> 요소는 토글 기능을 브라우저가 자동
              처리하므로 별도의 JavaScript 없이 동작합니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>FAQ, 추가 설명, 코드 보기 등 다양한 UI 패턴에 활용</strong>
            <p>"더 보기", "상세 보기"와 같은 기능에 매우 적합합니다.</p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>브라우저 지원</strong>
            <ul className="dot_lst">
              <li>
                HTML5에서 추가된 요소이며, 대부분의 최신 브라우저에서
                지원됩니다.
              </li>
              <li>
                구형 브라우저에서는 <code>&lt;details&gt;</code>가 동작하지 않을
                수 있으므로 대체 UI가 필요할 수 있습니다.
              </li>
            </ul>
          </li>
        </ol>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          콘텐츠 모델
        </h2>

        <article className="mt_l indent">
          <h3 className="ml_mn">
            <code className="font-21-important weight-600">
              &lt;details&gt;
            </code>{" "}
            콘텐츠 모델
          </h3>
          <p className="mt_m">
            <code>&lt;details&gt;</code> 요소는{" "}
            <b>
              <i className="t_black">플로우 콘텐츠</i>(flow content)
            </b>
            ,{" "}
            <b>
              <i className="t_black">섹션 루팅 콘텐츠</i>(sectioning root)
            </b>
            ,{" "}
            <b>
              <i className="t_black">인터랙티브 콘텐츠</i>(interactive content)
            </b>
            에 속합니다.
          </p>
          <ul className="dot_lst info_lst mt_ms">
            <li>
              <strong>플로우 콘텐츠</strong>
              <p>
                대부분의 HTML 요소가 속하는 범주로, 문서 흐름에 포함될 수 있는
                모든 콘텐츠를 포함합니다.
              </p>
            </li>
            <li>
              <strong>섹션 루팅 콘텐츠</strong>
              <p>
                <code>&lt;details&gt;</code> 내부는 별도의 섹션 구조로 간주되며,
                내부에서 <code>&lt;h1&gt; ~ &lt;h6&gt;</code> 요소를 사용할 수
                있습니다.
              </p>
            </li>
            <li>
              <strong>인터랙티브 콘텐츠</strong>
              <p>
                사용자가 열고 닫는 동작을 할 수 있는 인터랙션이 있기 때문에 이
                범주에도 속합니다.
              </p>
            </li>
          </ul>
        </article>

        <article className="mt_l indent">
          <h3 className="ml_mn">
            <code className="font-21-important weight-600">
              &lt;summary&gt;
            </code>{" "}
            콘텐츠 모델
          </h3>
          <p className="mt_m">
            <code>&lt;details&gt;</code> 요소 안에 포함되는{" "}
            <code>&lt;summary&gt;</code>는{" "}
            <b>
              <i className="t_black">메타데이터 콘텐츠</i>(metadata content)
            </b>
            에 속합니다.
            <br />
            <code>&lt;summary&gt;</code>는 <code>&lt;details&gt;</code> 요소의
            제목 역할을 하며, 그 콘텐츠(=세부 정보)의 요약 또는 설명을
            제공합니다.
            <br />
            즉, 본문 콘텐츠를 구성하지 않고,{" "}
            <b>
              다른 콘텐츠(세부 정보)를 설명하거나 대표하는 역할을 하므로
              메타데이터 콘텐츠로 분류됩니다.
            </b>
          </p>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          CSS 기본 값
        </h2>
        <p className="mt_l">
          <code>&lt;details&gt;</code>, <code>&lt;summary&gt;</code> 요소는
          아래와 같은 기본값이 적용됩니다.
        </p>
        <CodeBlock
          title="details, summary element CSS"
          className="mt_m"
          language="css"
        >
          {`details {
  display: block;
}

summary {
  display: block;
  cursor: pointer;
}`}
        </CodeBlock>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          기본 문법
        </h2>
        <CodeBlock
          title="details, summary element syntax"
          className="mt_l"
          language="html"
        >
          {`<details>
  <summary>자세한 정보 보기</summary>
  <p>이것은 숨겨진 내용입니다. 클릭하면 나타납니다.</p>
</details>`}
        </CodeBlock>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn">속성</h2>
        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [open]
            <i className="attr_optional">Boolean - 선택 사항</i>
            <span className="t_blue el_inline_block">&lt;details open&gt;</span>
          </h3>
          <p className="mt_ms">
            <code>open</code> 속성은 <code>&lt;details&gt;</code> 요소가 페이지
            로드 시 기본적으로 열려 있는지 지정합니다.
          </p>
          <ul className="dot_lst mt_sm indent_small">
            <li>
              <code>open</code> 속성이 존재하면 <code>&lt;details&gt;</code>{" "}
              내용이 기본적으로 펼쳐진 상태로 표시됩니다.
            </li>
            <li>
              <code>open</code> 속성이 없으면 사용자가 클릭하기 전까지 내용이
              숨겨진 상태로 유지됩니다.
            </li>
          </ul>
          <CodeBlock
            title="details 속성 [open]"
            className="mt_m"
            language="html"
          >
            {`<details open>
  <summary>기본으로 열림</summary>
  <p>페이지가 로드되자마자 이 내용이 보입니다.</p>
</details>`}
          </CodeBlock>
        </article>
      </section>

      <section className="view_editor indent mt_xxl">
        <h2 className="ml_mn ve_tit">예제</h2>

        <article className="mt_l indent">
          <h3 className="ml_mn">기본적인 사용 예제</h3>
          <Suspense
            fallback={<EditorFallback minHeightClass="min_height_410" />}
          >
            <UkEditorTarget
              target="html/11-models/11.1.details_element_1.html"
              className="mt_m min_height_410 mb_result_height_410"
              mode="htmlmixed"
              browser="default"
              theme="moxer"
              title="기본적인 사용 예제"
              minHeight="410px"
              result
            />
          </Suspense>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">FAQ (CSS 스타일 적용)</h3>
          <Suspense
            fallback={<EditorFallback minHeightClass="min_height_700" />}
          >
            <UkEditorTarget
              target="html/11-models/11.1.details_element_2.html"
              className="mt_m min_height_700 mb_result_height_700"
              mode="htmlmixed"
              browser="default"
              theme="moxer"
              title="FAQ (CSS 스타일 적용)"
              minHeight="700px"
              result
            />
          </Suspense>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주의사항
        </h2>
        <ul className="dot_lst mt_l">
          <li>
            <code>&lt;summary&gt;</code> 요소 없이도{" "}
            <code>&lt;details&gt;</code>는 동작하지만, 가급적 포함하는 것이
            좋습니다.
          </li>
          <li>
            모든 브라우저에서 <code>&lt;details&gt;</code>를 지원하는 것은
            아닙니다.
            <br />
            구형 브라우저에서는 <code>&lt;details&gt;</code>가 동작하지 않을 수
            있으므로, 대체 UI(JavaScript를 활용한 토글 버튼 등)를 고려해야
            합니다.
          </li>
          <li>
            브라우저 기본 스타일 차이를 고려해 CSS로 커스터마이징하는 것이
            좋습니다.
          </li>
        </ul>
      </section>

      <aside className="browser_support mt_xxl" data-tit="details">
        <ul>
          <li className="ie false">지원안함</li>
          <li className="edge false">지원안함</li>
          <li className="chrome">12.0</li>
          <li className="firefox">49.0</li>
          <li className="opera">15.0</li>
          <li className="safari">6.0</li>
        </ul>
      </aside>

      <aside className="reference_box mt_xxl">
        <strong className="tit">참조</strong>
        <ul className="link_lst">
          <li className="reference">
            <a
              href="https://www.w3.org/TR/html51/semantics.html#the-details-element"
              target="_blank"
              className="fas"
              rel="noreferrer"
            >
              W3C details specification
            </a>
          </li>
          <li className="reference">
            <a
              href="https://developer.mozilla.org/ko/docs/Web/HTML/Element/details"
              target="_blank"
              className="fas"
              rel="noreferrer"
            >
              MDN details specification
            </a>
          </li>
        </ul>
      </aside>
      <figure className="img_figure mt_l">
        <img src={IMG.HTML + "/11_html_02.png"} alt="details 요소" />
        <figcaption>details 요소</figcaption>
      </figure>
    </>
  );
}

export default DetailsElementPage;
