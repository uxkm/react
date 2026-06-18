import { Suspense, lazy } from "react";
import CodeBlock from "@/components/code/CodeBlock";
import { usePageMeta } from "@/components/common/PageMeta";
import { IMG } from "@/config/path";
import PublishingPartTabs from "@/components/docs/PublishingPartTabs";
import "../../../../assets/css/css_selectors.scss";

const PAGE_LAYOUT = {
  mainClass: "css_selectors_level_part2",
  type: "publishing",
  info: true,
  note: true,
  sideMenu: true,
  reference: true,
  contentList: true,
  depth3Last: false,
  bottomEditor: false,
};

const PAGE_DATA = {
  title: "CSS 선택자 level 1, 2 part-2",
  description:
    "CSS 선택자는 스타일을 적용할 HTML 요소를 지정하는 방법으로, 요소의 태그명, 클래스, ID, 속성, 구조적 위치 등을 기반으로 요소를 선택할 수 있습니다. 이 페이지에서는 조합 선택자(하위 선택자, 자식 선택자, 인접 형제 선택자, 일반 형제 선택자), 속성 선택자(Attribute Selector), 의사(가상) 클래스(Pseudo-classes)를 함께 소개합니다.",
  keyword:
    "style, css, Cascading Style Sheets, 선택자, selector, 조합 선택자, 속성 선택자, 의사(가상) 클래스",
};

const UkEditorTarget = lazy(
  () => import("@/components/code/UkEditorTarget"),
);

function EditorFallback({ className = "uk_editor min_height_400" }) {
  return <div className={className} aria-hidden />;
}

function SelectorsCommonIntro() {
  return (
    <blockquote className="uk_note common_note mt_xxl" role="note">
      <strong className="sound_only">요약 설명</strong>
      <p>
        선택자는 스타일링하고 싶은 HTML 요소나 부여한 <code>id</code>,{" "}
        <code>class</code>를 지정하는 위치입니다. 선언부에 여러 개의 속성과 속성값이 있을 때는 세미콜론(<code>;</code>)으로 구분하고, 각 선언은 속성과 속성값을 콜론(<code>:</code>)으로 구분합니다.
      </p>
    </blockquote>
  );
}

function CssSelectorsLevelPart2Page() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });
  return (
    <>
      <SelectorsCommonIntro />
      <PublishingPartTabs sectionType="css" />
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          <b className="t_blue">CSS 선택자 level 1, 2 part-2</b>에서는
          <br />
        </p>
        <ul className="dot_lst indent_small">
          <li className="before_note">
            <b>조합 선택자(Combinators)</b>
          </li>
          <li className="before_note">
            <b>속성 선택자(Attribute Selector)</b>
          </li>
          <li className="before_note">
            <b>의사(가상) 클래스(Pseudo-classes)</b>에 대해 다룹니다.
          </li>
        </ul>
      </blockquote>

      <section className="txt_ex indent mt_xxl">
        <h2 className="ml_mn">조합 선택자(Combinators)</h2>

        <article className="indent mt_l">
          <h3 className="ml_mn t_blue">
            하위 조합(Descendant combinator) or 하위 선택자
          </h3>
          <p className="mt_ms">
            <strong className="t_black">CSS Level 1</strong> 선택자로, 특정
            요소의 하위에 있는 요소를 선택합니다. 하위 조합 콤비네이터를
            사용하는 선택기를 하위 선택자라고 합니다.
          </p>
          <CodeBlock
            title={"Descendant combinator"}
            language="css"
            className="uk_gist_code_box mt_m"
          >
            {`ul li {
							/* style 작성 */
						}`}
          </CodeBlock>
          <div className="view_editor edit_code mt_m">
            <Suspense
              fallback={
                <EditorFallback
                  className={`uk_editor min_height_450 mb_result_height_740`}
                />
              }
            >
              <UkEditorTarget
                target="css/step01/2.2.selector/2.2.4.1.descendant-combinator.html"
                className={`uk_editor min_height_450 mb_result_height_740`}
                mode="htmlmixed"
                browser="default"
                title={"2.2.4.1.descendant-combinator"}
                minHeight="450px"
                result
              />
            </Suspense>
          </div>
          <aside
            className="browser_support mt_m"
            data-tit="Descendant combinator"
            aria-label="브라우저 지원 현황"
          >
            <ul>
              <li className="ie">지원</li>
              <li className="edge">지원</li>
              <li className="chrome">지원</li>
              <li className="firefox">지원</li>
              <li className="opera">지원</li>
              <li className="safari">지원</li>
            </ul>
          </aside>
        </article>

        <article className="indent mt_xl">
          <h3 className="ml_mn t_blue">자식 연결자(Child combinator)</h3>
          <p className="mt_ms">
            <strong className="t_black">CSS Level 2</strong> 선택자로, 특정
            요소의 자식 요소를 선택합니다. 첫 번째 요소와 일치하는 요소의
            직접적인 하위 요소인 두 번째 선택자와 일치하는 요소만 선택되며, 한
            단계 아래에 있는 요소만 선택합니다.
          </p>
          <CodeBlock
            title={"Child combinator"}
            language="css"
            className="uk_gist_code_box mt_m"
          >
            {`ul > li {
							/* style 작성 */
						}`}
          </CodeBlock>
          <div className="view_editor edit_code mt_m">
            <Suspense
              fallback={
                <EditorFallback
                  className={`uk_editor min_height_450 mb_result_height_460`}
                />
              }
            >
              <UkEditorTarget
                target="css/step01/2.2.selector/2.2.4.2.child-combinator.html"
                className={`uk_editor min_height_450 mb_result_height_460`}
                mode="htmlmixed"
                browser="default"
                title={"2.2.4.2.child-combinator"}
                minHeight="450px"
                result
              />
            </Suspense>
          </div>
          <aside
            className="browser_support mt_m"
            data-tit="Child combinator"
            aria-label="브라우저 지원 현황"
          >
            <ul>
              <li className="ie">7+</li>
              <li className="edge">12.0</li>
              <li className="chrome">1.0</li>
              <li className="firefox">1.0</li>
              <li className="opera">9.2</li>
              <li className="safari">1.3</li>
            </ul>
          </aside>
        </article>

        <article className="indent mt_xl">
          <h3 className="ml_mn t_blue">
            인접한 형제 선택자(Adjacent sibling combinator)
          </h3>
          <p className="mt_ms">
            <strong className="t_black">CSS Level 2</strong> 선택자로, 같은
            부모를 가진 형제 요소 중에서 특정 요소 바로 다음에 오는 요소를
            선택할 때 사용합니다.
            <br />
            선택자A 바로 뒤에 오는 선택자B 요소를 선택하며, A와 B는 같은 부모를
            가져야 하고 A 바로 다음에 B가 와야 합니다. A와 B 사이에 다른 요소가
            있으면 선택되지 않습니다.
          </p>
          <p className="mt_ms t_black">
            <strong>Element + Element(선택자A + 선택자B)</strong>
          </p>
          <CodeBlock
            title={"Adjacent sibling combinator"}
            language="css"
            className="uk_gist_code_box mt_m"
          >
            {`p + ul {
							/* style 작성 */
						}`}
          </CodeBlock>
          <div className="adjacent_sibling mt_m">
            <div className="inner_wrap">
              <ul>
                <li>body</li>
                <li>p</li>
                <li>
                  ul
                  <p className="arr t_black">
                    <span className="t_black">p + ul {"{"}</span>
                    <i className="t_red">color:</i>
                    <i className="t_green">#ff0000</i>
                    <i className="t_red">;</i>
                    <span className="t_black">{"}"}</span>
                  </p>
                  <i className="fas fa-long-arrow-alt-left"></i>
                </li>
                <li>h1</li>
                <li>ul</li>
              </ul>
            </div>
            <p className="txt mt_ms">[인접한 형제 선택자]</p>
          </div>
          <div className="view_editor edit_code mt_m">
            <Suspense
              fallback={
                <EditorFallback
                  className={`uk_editor min_height_450 mb_result_height_480`}
                />
              }
            >
              <UkEditorTarget
                target="css/step01/2.2.selector/2.2.4.3.adjacent-sibling-combinator.html"
                className={`uk_editor min_height_450 mb_result_height_480`}
                mode="htmlmixed"
                browser="default"
                title={"2.2.4.3.adjacent-sibling-combinator"}
                minHeight="450px"
                result
              />
            </Suspense>
          </div>
          <aside
            className="browser_support mt_m"
            data-tit="Adjacent sibling combinator"
            aria-label="브라우저 지원 현황"
          >
            <ul>
              <li className="ie">7+</li>
              <li className="edge">12.0</li>
              <li className="chrome">1.0</li>
              <li className="firefox">1.0</li>
              <li className="opera">9.5</li>
              <li className="safari">1.3</li>
            </ul>
          </aside>
        </article>
      </section>

      <section className="txt_ex indent mt_xxl">
        <h2 className="ml_mn">속성 선택자(Attribute Selector)</h2>
        <p className="mt_l">
          <strong className="t_black">CSS Level 2</strong> 선택자로, 주어진
          속성의 존재 또는 값에 따라 요소를 일치시킵니다.
        </p>
        <CodeBlock
          title={"Attribute Selector"}
          language="css"
          className="uk_gist_code_box mt_m"
        >
          {`a[attribute] { … }
					[attribute='value'] { … }
					[attribute~='bar'] { … }
					[attribute|='en'] { … }`}
        </CodeBlock>

        <article className="indent mt_l">
          <h3 className="ml_mn t_blue">[attribute]</h3>
          <p className="mt_ms">
            지정된 속성을 가진 요소를 선택합니다. (예: <code>h1[title]</code> -{" "}
            <code>[title]</code> 속성을 가진 <code>&lt;h1&gt;</code> 요소를
            선택)
          </p>
        </article>

        <article className="indent mt_l">
          <h3 className="ml_mn t_blue">[attribute="value"]</h3>
          <p className="mt_ms">
            속성의 값이 value인 요소를 선택하며, 속성값이 정확히 일치해야
            합니다. (예: <code>h1[title="abc"]</code> - <code>[title]</code>{" "}
            속성의 값이 <code>abc</code>인 <code>&lt;h1&gt;</code> 요소를 선택)
          </p>
        </article>

        <article className="indent mt_l">
          <h3 className="ml_mn t_blue">[attribute~="value"]</h3>
          <p className="mt_ms">
            속성 값이 공백으로 구분된 여러 단어 중에서 지정된 단어를 포함하는
            요소를 선택합니다.
            <br />
            (예: <code>h1[title~="abc"]</code> - <code>[title]</code> 속성이
            "abc xyz"처럼 공백으로 구분된 단어 중 "abc"를 포함하면 선택됩니다.
            "abcxyz"처럼 공백 없이 붙어있으면 선택되지 않습니다)
          </p>
        </article>

        <article className="indent mt_l">
          <h3 className="ml_mn t_blue">[attribute|="value"]</h3>
          <p className="mt_ms">
            속성 값이 정확히 일치하거나 하이픈(-) 뒤에 다른 값이 오는 형태로
            시작하는 요소를 선택합니다.
            <br />
            (예: <code>h1[title|="abc"]</code> - <code>[title]</code> 속성이
            "abc"이거나 "abc-xyz"처럼 "abc-"로 시작하면 선택됩니다. "abc
            xyz"처럼 공백이 있으면 선택되지 않습니다)
          </p>
        </article>

        <article className="view_editor edit_code mt_l">
          <h3 className="ve_tit">속성 선택자(Attribute Selector) 예제</h3>
          <Suspense
            fallback={
              <EditorFallback
                className={`uk_editor indent min_height_550 mb_result_height_630 mt_m`}
              />
            }
          >
            <UkEditorTarget
              target="css/step01/2.2.selector/2.2.5.attr-selector.html"
              className={`uk_editor indent min_height_550 mb_result_height_630 mt_m`}
              mode="htmlmixed"
              browser="default"
              title={"2.2.5.attr-selector"}
              minHeight="550px"
              result
            />
          </Suspense>
        </article>
        <aside
          className="browser_support mt_m"
          data-tit="Adjacent sibling combinator"
          aria-label="브라우저 지원 현황"
        >
          <ul>
            <li className="ie">7+</li>
            <li className="edge">12.0</li>
            <li className="chrome">1.0</li>
            <li className="firefox">1.0</li>
            <li className="opera">6.0</li>
            <li className="safari">1.0</li>
          </ul>
        </aside>
      </section>

      <section className="txt_ex indent mt_xxl">
        <h2 className="ml_mn">의사(가상) 클래스(Pseudo-classes)</h2>

        <article className="indent mt_l">
          <h3 className="ml_mn t_blue" data-conlist-h4="false">
            링크 셀렉터(Link pseudo-classes), 동적 셀렉터(User action
            pseudo-classes)
          </h3>
          <p className="mt_ms">
            선택자 뒤에 가상 이벤트를 붙이면 특정 이벤트마다 적용할 스타일을
            설정할 수 있으며, 이를 가상(추상) 클래스라고 합니다.
            <br />
            <strong className="t_black">CSS Level 1</strong> 선택자로는{" "}
            <code>E:link</code>, <code>E:visited</code>가 있고,{" "}
            <strong className="t_black">CSS Level 1, 2</strong> 선택자로는{" "}
            <code>E:active</code>, <code>E:hover</code>, <code>E:focus</code>가
            있습니다.
            <br />
            링크의 기본 스타일 효과를 주는 속성과 링크에 활성화를 더해주는
            속성으로 구분하며, <code>:hover</code>는 반드시 <code>:link</code>와{" "}
            <code>:visited</code>가 먼저 정의된 후에 정의되어야 정상적으로
            동작합니다.
            <br />
            <code>:active</code>는 반드시 <code>:hover</code>가 먼저 정의된 후에
            정의되어야 정상적으로 동작합니다.
          </p>
          <CodeBlock
            title={"Pseudo-classes"}
            language="css"
            className="uk_gist_code_box mt_m"
          >
            {`a:link { … }
						a:visited { … }
						a:active { … }
						a:hover { … }
						a:focus { … }`}
          </CodeBlock>
          <article className="mt_l">
            <h4 className="t_blue mt_m">:link</h4>
            <p className="indent mt_ms">
              아직 방문하지 않은 링크를 나타내며, 링크의 기본 상태입니다.
              사용자가 아직 한 번도 이 링크를 통해 연결된 페이지를 방문하지 않은
              상태입니다.
            </p>
          </article>
          <article className="mt_l">
            <h4 className="t_blue mt_m">:visited</h4>
            <p className="indent mt_ms">
              방문한 링크를 나타내며, 사용자가 한 번이라도 이 링크를 통해 연결된
              페이지를 방문한 상태입니다.
            </p>
          </article>
          <article className="mt_l">
            <h4 className="t_blue mt_m">:active</h4>
            <p className="indent mt_ms">
              클릭된 상태를 나타내며, 사용자가 마우스로 링크를 클릭하고 있는
              상태입니다.
            </p>
          </article>
          <article className="mt_l">
            <h4 className="t_blue mt_m">:hover</h4>
            <p className="indent mt_ms">
              마우스가 올라와 있을 때를 나타내며, 사용자의 마우스 커서가 링크
              위에 올라가 있는 상태입니다.
            </p>
          </article>
          <article className="mt_l">
            <h4 className="t_blue mt_m">:focus</h4>
            <p className="indent mt_ms">
              포커스가 들어와 있을 때를 나타내며, 키보드나 마우스의 이벤트 또는
              다른 형태로 해당 요소가 포커스(focus)를 가지고 있는 상태입니다.
            </p>
          </article>
          <article className="view_editor edit_code mt_l">
            <h4 className="ve_tit">링크 셀렉터, 동적 셀렉터 예제</h4>
            <Suspense
              fallback={
                <EditorFallback
                  className={`uk_editor indent min_height_450 mb_result_height_430 mt_m`}
                />
              }
            >
              <UkEditorTarget
                target="css/step01/2.2.selector/2.2.6.1.link-pseudo-class.html"
                className={`uk_editor indent min_height_450 mb_result_height_430 mt_m`}
                mode="htmlmixed"
                browser="default"
                title={"2.2.6.1.link-pseudo-class"}
                minHeight="450px"
                result
              />
            </Suspense>
          </article>
          <aside className="browser_support mt_m" data-tit="Link, User action">
            <ul>
              <li className="ie">지원</li>
              <li className="edge">지원</li>
              <li className="chrome">지원</li>
              <li className="firefox">지원</li>
              <li className="opera">지원</li>
              <li className="safari">지원</li>
            </ul>
          </aside>
        </article>

        <article className="indent mt_xl">
          <h3 className="ml_mn t_blue">
            구조적 의사(가상)클래스(Structural pseudo-class)
          </h3>
          <blockquote className="uk_note mt_m" role="note">
            <strong className="sound_only">요약 설명</strong>
            <p>
              <strong className="t_black">CSS Level 2</strong> 선택자로, 구조
              의사 클래스를 사용하면 HTML 요소의 계층 구조에서 특정 위치에 있는
              요소를 선택할 수 있습니다.
            </p>
          </blockquote>
          <p className="mt_m">
            선택자에 해당하는 요소 유형(타입)에 상관없이 모든 요소 중 첫 번째
            자식인 요소를 선택하며, 부모의 첫 번째 자식 요소를 나타냅니다. 이
            가상 클래스는 CSS2.1에서 먼저 정의되었고 IE7+ 모든 브라우저들이
            지원하고 있습니다.
          </p>
          <CodeBlock
            title={"Structural pseudo-class"}
            language="css"
            className="uk_gist_code_box mt_m"
          >
            {`p:first-child {
							/* style 작성 */
						}`}
          </CodeBlock>
          <div className="view_editor edit_code mt_m">
            <Suspense
              fallback={
                <EditorFallback
                  className={`uk_editor min_height_450 mb_result_height_480`}
                />
              }
            >
              <UkEditorTarget
                target="css/step01/2.2.selector/2.2.6.2.structural-pseudo-class.html"
                className={`uk_editor min_height_450 mb_result_height_480`}
                mode="htmlmixed"
                browser="default"
                title={"2.2.6.2.structural-pseudo-class"}
                minHeight="450px"
                result
              />
            </Suspense>
          </div>
          <aside className="browser_support mt_m" data-tit="first-child">
            <ul>
              <li className="ie">지원</li>
              <li className="edge">지원</li>
              <li className="chrome">지원</li>
              <li className="firefox">지원</li>
              <li className="opera">지원</li>
              <li className="safari">지원</li>
            </ul>
          </aside>
        </article>

        <article className="indent mt_xl">
          <h3 className="ml_mn t_blue">
            언어 의사(가상) 클래스(The language pseudo-class)
          </h3>
          <p className="mt_ms">
            <strong className="t_black">CSS Level 2</strong> 선택자로, 문서의
            언어를 기반으로 요소를 선택합니다. 특정 요소를 언어 설정에 따라
            다르게 표현할 때 사용하며, 최상위 <code>&lt;html&gt;</code> 요소에{" "}
            <code>lang="언어코드"</code>가 있으면 최상위에 있는 것이 먼저
            적용됩니다.
          </p>
          <CodeBlock
            title={"The language pseudo-class"}
            language="css"
            className="uk_gist_code_box mt_m"
          >
            {`p:lang(언어코드) {
							/* style 작성 */
						}`}
          </CodeBlock>
          <div className="view_editor edit_code mt_m">
            <Suspense
              fallback={
                <EditorFallback className={`uk_editor min_height_450`} />
              }
            >
              <UkEditorTarget
                target="css/step01/2.2.selector/2.2.6.3.language-pseudo-class.html"
                className={`uk_editor min_height_450`}
                mode="htmlmixed"
                browser="default"
                title={"2.2.6.3.language-pseudo-class"}
                minHeight="450px"
                result
              />
            </Suspense>
          </div>
          <aside
            className="browser_support mt_m"
            data-tit="language pseudo"
            aria-label="브라우저 지원 현황"
          >
            <ul>
              <li className="ie">8+</li>
              <li className="edge">12.0</li>
              <li className="chrome">1.0</li>
              <li className="firefox">1.0</li>
              <li className="opera">8.0</li>
              <li className="safari">3.1</li>
            </ul>
          </aside>
        </article>
      </section>

      <figure className="img_figure indent mt_l">
        <img src={IMG.CSS + "/02_css_02_2.png"} alt="CSS 선택자" />
        <figcaption className="reference">CSS 선택자</figcaption>
      </figure>

      <aside
        className="reference_box mt_xxl"
        aria-label="CSS 선택자 level 1,2 참조"
      >
        <strong className="tit">CSS 선택자 level 1,2 참조</strong>
        <ul className="link_lst">
          <li className="reference">
            <a
              href="https://www.w3.org/TR/selectors/#selectors"
              target="_blank"
              className="fas"
              title="새창열림"
            >
              W3C Selectors Level
            </a>
          </li>
          <li className="reference">
            <a
              href="https://developer.mozilla.org/ko/docs/Web/CSS/CSS_%EC%84%A0%ED%83%9D%EC%9E%90"
              target="_blank"
              className="fas"
              title="새창열림"
            >
              4 MDN CSS 선택자
            </a>
          </li>
          <li className="reference">
            <a
              href="https://www.w3.org/TR/selectors-3/#specificity"
              target="_blank"
              className="fas"
              title="새창열림"
            >
              CSS 우선순위
            </a>
          </li>
        </ul>
      </aside>
    </>
  );
}
export default CssSelectorsLevelPart2Page;
