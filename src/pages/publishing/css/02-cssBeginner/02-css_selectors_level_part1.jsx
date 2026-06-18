import { Suspense, lazy } from "react";
import CodeBlock from "@/components/code/CodeBlock";
import { usePageMeta } from "@/components/common/PageMeta";
import { IMG } from "@/config/path";
import PublishingPartTabs from "@/components/docs/PublishingPartTabs";
import "../../../../assets/css/css_selectors.scss";

const PAGE_LAYOUT = {
  mainClass: "css_selectors_level_part1",
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
  title: "CSS 선택자 level 1, 2 part-1",
  description:
    "CSS 선택자는 스타일을 적용할 HTML 요소를 지정하는 방법으로, 요소의 태그명, 클래스, ID, 속성, 구조적 위치 등을 기반으로 요소를 선택할 수 있습니다. 이 페이지에서는 CSS 선택자 우선순위(specificity 계산), 기본 선택자(전체 선택자, 타입 선택자, 클래스 선택자, ID 선택자), 그룹 선택자를 함께 소개합니다.",
  keyword:
    "style, css, Cascading Style Sheets, 선택자, selector, 우선순위, id, class, tag name, 상속",
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
        <code>class</code>를 지정하는 위치입니다. 선언부에 여러 개의 속성과
        속성값이 있을 때는 세미콜론(<code>;</code>)으로 구분하고, 각 선언은
        속성과 속성값을 콜론(
        <code>:</code>)으로 구분합니다.
        <br />
        CSS는 기본적으로 선언된 순서에 따라 적용되지만 각종 선택자와 삽입 위치에
        따라 우선순위가 달라질 수 있으며, 선택자 우선순위는{" "}
        <b>
          [<code>!important</code> &gt; 인라인 스타일 &gt; 아이디 선택자 &gt;
          클래스/속성/가상 선택자 &gt; 태그 선택자 &gt; 전체 선택자]
        </b>{" "}
        순으로 적용됩니다.
      </p>
    </blockquote>
  );
}

function CssSelectorsLevelPart1Page() {
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
          <b className="t_blue">CSS 선택자 level 1, 2 part-1</b>에서는
          <br />
        </p>
        <ul className="dot_lst indent_small">
          <li className="before_note">
            <b>CSS 선택자 우선순위(specificity 계산)</b>
          </li>
          <li className="before_note">
            <b>기본 선택자</b>
          </li>
          <li className="before_note">
            <b>그룹 선택자</b>에 대해 다룹니다.
          </li>
        </ul>
      </blockquote>

      <section className="txt_ex indent mt_xxl">
        <h2 className="ml_mn">CSS 선택자 우선순위 (specificity 계산)</h2>
        <p className="mt_l">
          더 구체적인 선택자가 더 일반적인 선택자보다 우선하며, 가상 요소와 가상
          클래스는 각각 일반적인 요소와 클래스와 같이 계산됩니다.
          <br />
          선택자의 우선순위는 3개의 숫자(a, b, c)를 조합해서 계산하며, 선택자를
          어떻게 조합하느냐에 따라 우선순위가 달라집니다.
          <br />
          선택자의 우선순위를 잘 이해하면 스타일을 효율적으로 관리할 수
          있습니다.
        </p>
        <div className="ol_lst mt_ml">
          <strong className="font-16 t_black">
            선택자의 우선순위를 계산하는 방법은 아래와 같습니다.
          </strong>
          <ol className="indent mt_s">
            <li>선택자 중 ID 선택자의 개수를 셉니다 (= a)</li>
            <li>
              선택자 중 클래스 선택자, 속성 선택자, 의사(가상) 클래스의 개수를
              셉니다 (= b)
            </li>
            <li>선택자 중 타입 선택자와 의사 요소의 개수를 셉니다 (= c)</li>
            <li>전역 선택자(가상 요소)는 무시합니다.</li>
          </ol>
        </div>
        <div className="ol_lst mt_ml">
          <strong className="font-16 t_black">
            기본적인 선택자 우선순위는 아래와 같습니다.
          </strong>
          <ol className="indent mt_s">
            <li>속성 값 뒤에 !important 를 붙인 속성</li>
            <li>HTML에서 style을 직접 지정한 속성</li>
            <li>#id 로 지정한 속성</li>
            <li>.클래스, :추상클래스 로 지정한 속성</li>
            <li>태그이름 으로 지정한 속성</li>
            <li>상위 객체에 의해 상속된 속성</li>
          </ol>
        </div>
        <div className="css_specificity indent mt_ml">
          <strong className="font-16 t_black ml_mn">
            같은 우선순위를 가진 선택자가 여러 개 있을 때는, 더 구체적인
            선택자(요소를 더 많이 지정한 선택자)가 우선되며, 모든 설정이 같다면
            나중에 선언한 스타일이 적용됩니다.
          </strong>
          <div className="table_basic specificity1 mt_m">
            <ul className="lst_bd">
              <li>
                <p className="cell tit">* {}</p>
                <p className="cell con">
                  a=0 b=0 c=0 d=0 <br className="dp_sm" />→ specificity =
                  0,0,0,0
                </p>
              </li>
              <li>
                <p className="cell tit">li {}</p>
                <p className="cell con">
                  a=0 b=0 c=0 d=1 <br className="dp_sm" />→ specificity =
                  0,0,0,1
                </p>
              </li>
              <li>
                <p className="cell tit">li:first-line {}</p>
                <p className="cell con">
                  a=0 b=0 c=0 d=2 <br className="dp_sm" />→ specificity =
                  0,0,0,2
                </p>
              </li>
              <li>
                <p className="cell tit">ul li {}</p>
                <p className="cell con">
                  a=0 b=0 c=0 d=2 <br className="dp_sm" />→ specificity =
                  0,0,0,2
                </p>
              </li>
              <li>
                <p className="cell tit">ul ol+li {}</p>
                <p className="cell con">
                  a=0 b=0 c=0 d=3 <br className="dp_sm" />→ specificity =
                  0,0,0,3
                </p>
              </li>
              <li>
                <p className="cell tit">h1 + *[rel=up] {}</p>
                <p className="cell con">
                  a=0 b=0 c=1 d=1 <br className="dp_sm" />→ specificity =
                  0,0,1,1
                </p>
              </li>
              <li>
                <p className="cell tit">ul ol li.red {}</p>
                <p className="cell con">
                  a=0 b=0 c=1 d=3 <br className="dp_sm" />→ specificity =
                  0,0,1,3
                </p>
              </li>
              <li>
                <p className="cell tit">li.red.level {}</p>
                <p className="cell con">
                  a=0 b=0 c=2 d=1 <br className="dp_sm" />→ specificity =
                  0,0,2,1
                </p>
              </li>
              <li>
                <p className="cell tit">#x34y {}</p>
                <p className="cell con">
                  a=0 b=1 c=0 d=0 <br className="dp_sm" />→ specificity =
                  0,1,0,0
                </p>
              </li>
              <li>
                <p className="cell tit">{"style={{}}"}</p>
                <p className="cell con">
                  a=1 b=0 c=0 d=0 <br className="dp_sm" />→ specificity =
                  1,0,0,0{" "}
                </p>
              </li>
            </ul>
          </div>
          <div className="table_basic specificity2 mt_s">
            <ul className="lst_hd">
              <li className="cell tit"></li>
              <li className="cell con_a">a</li>
              <li className="cell con_b">b</li>
              <li className="cell con_c">c</li>
              <li className="cell equals"></li>
              <li className="cell result">선택자 우선순위 계산</li>
            </ul>
            <ul className="lst_bd">
              <li>
                <p className="cell tit">* {}</p>
                <p className="cell con_a">0</p>
                <p className="cell con_b">0</p>
                <p className="cell con_c">0</p>
                <p className="cell equals">=</p>
                <p className="cell result">0</p>
              </li>
              <li>
                <p className="cell tit">li {}</p>
                <p className="cell con_a">0</p>
                <p className="cell con_b">0</p>
                <p className="cell con_c">1</p>
                <p className="cell equals">=</p>
                <p className="cell result">1</p>
              </li>
              <li>
                <p className="cell tit">ul li {}</p>
                <p className="cell con_a">0</p>
                <p className="cell con_b">0</p>
                <p className="cell con_c">2</p>
                <p className="cell equals">=</p>
                <p className="cell result">2</p>
              </li>
              <li>
                <p className="cell tit">ul ol+li {}</p>
                <p className="cell con_a">0</p>
                <p className="cell con_b">0</p>
                <p className="cell con_c">3</p>
                <p className="cell equals">=</p>
                <p className="cell result">3</p>
              </li>
              <li>
                <p className="cell tit">li.num {}</p>
                <p className="cell con_a">0</p>
                <p className="cell con_b">1</p>
                <p className="cell con_c">1</p>
                <p className="cell equals">=</p>
                <p className="cell result">11</p>
              </li>
              <li>
                <p className="cell tit">ul+ol li.num {}</p>
                <p className="cell con_a">0</p>
                <p className="cell con_b">1</p>
                <p className="cell con_c">3</p>
                <p className="cell equals">=</p>
                <p className="cell result">13</p>
              </li>
              <li>
                <p className="cell tit">li.num.last {}</p>
                <p className="cell con_a">0</p>
                <p className="cell con_b">2</p>
                <p className="cell con_c">1</p>
                <p className="cell equals">=</p>
                <p className="cell result">21</p>
              </li>
              <li>
                <p className="cell tit">#wrap {}</p>
                <p className="cell con_a">1</p>
                <p className="cell con_b">0</p>
                <p className="cell con_c">0</p>
                <p className="cell equals">=</p>
                <p className="cell result">100</p>
              </li>
              <li>
                <p className="cell tit">p#wrap {}</p>
                <p className="cell con_a">1</p>
                <p className="cell con_b">0</p>
                <p className="cell con_c">1</p>
                <p className="cell equals">=</p>
                <p className="cell result">101</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="txt_ex indent mt_xxl">
        <h2 className="ml_mn">기본 선택자(Basic Selectors)</h2>
        <blockquote className="uk_note mt_l" role="note">
          <strong className="sound_only">요약 설명</strong>
          <p>
            자주 사용하는 선택자로 CSS 기초 지식을 배우는 단계입니다. 기본
            선택자에는 전체 선택자(Universal Selectors), 타입 선택자(Type
            Selectors), 아이디 선택자(ID Selectors), 클래스 선택자(Class
            Selectors)로 구분할 수 있습니다.
          </p>
        </blockquote>

        <article className="indent mt_xl">
          <h3 className="ml_mn t_blue">전체 선택자(Universal Selectors)</h3>
          <p className="mt_ms">
            <strong className="t_black">CSS Level 2</strong> 선택자로, HTML 문서
            내부의 모든 요소를 선택합니다. 별표(*)로 나타내며, 별표는 생략할 수
            있어 <code>*.warning</code>와 <code>.warning</code>은 동일합니다.
          </p>
          <div className="ol_lst">
            <ol>
              <li className="line_code tit_h4 mt_ml">
                <h4>기본 예시</h4>
                <CodeBlock
                  title={"Universal Selectors"}
                  language="css"
                  className="uk_gist_code_box mt_m"
                >
                  {`* {
										/* style 작성 */
									}`}
                </CodeBlock>
                <div className="view_editor edit_code mt_m">
                  <Suspense
                    fallback={
                      <EditorFallback
                        className={`uk_editor min_height_450 mb_result_height_740 mt_m`}
                      />
                    }
                  >
                    <UkEditorTarget
                      target="css/step01/2.2.selector/2.2.2.1.universal-selector.html"
                      className={`uk_editor min_height_450 mb_result_height_740 mt_m`}
                      mode="htmlmixed"
                      browser="default"
                      title={"2.2.2.1.universal-selector"}
                      minHeight="450px"
                      result
                    />
                  </Suspense>
                </div>
              </li>
              <li className="line_code tit_h4 mt_l">
                <h4>응용 예시</h4>
                <CodeBlock
                  title={"Universal Selectors"}
                  language="css"
                  className="uk_gist_code_box mt_m"
                >
                  {`*.warning {
										/* style 작성 */
									}`}
                </CodeBlock>
                <div className="view_editor edit_code mt_m">
                  <Suspense
                    fallback={
                      <EditorFallback
                        className={`uk_editor min_height_450 mb_result_height_250 mt_m`}
                      />
                    }
                  >
                    <UkEditorTarget
                      target="css/step01/2.2.selector/2.2.2.1.universal-selector2.html"
                      className={`uk_editor min_height_450 mb_result_height_250 mt_m`}
                      mode="htmlmixed"
                      browser="default"
                      title={"2.2.2.1.universal-selector2"}
                      minHeight="450px"
                      result
                    />
                  </Suspense>
                </div>
              </li>
            </ol>
          </div>
          <aside
            className="browser_support mt_l"
            data-tit="Universal Selectors"
            aria-label="브라우저 지원 현황"
          >
            <ul>
              <li className="ie">9+</li>
              <li className="edge">지원</li>
              <li className="chrome">지원</li>
              <li className="firefox">지원</li>
              <li className="opera">지원</li>
              <li className="safari">지원</li>
            </ul>
          </aside>
        </article>

        <article className="indent mt_xl">
          <h3 className="ml_mn t_blue">타입 선택자(Type Selectors)</h3>
          <p className="mt_ms">
            <strong className="t_black">CSS Level 1</strong> 선택자로,{" "}
            <code>&lt;h1&gt;</code>, <code>&lt;p&gt;</code>,{" "}
            <code>&lt;div&gt;</code>, <code>&lt;span&gt;</code> 등 HTML
            요소(Element)를 선택하는 선택자입니다.
          </p>
          <CodeBlock
            title={"Type Selectors"}
            language="css"
            className="uk_gist_code_box mt_m"
          >
            {`Element {
							/* style 작성 */
						}`}
          </CodeBlock>
          <div className="view_editor edit_code mt_m">
            <Suspense
              fallback={
                <EditorFallback
                  className={`uk_editor min_height_450 mb_result_height_740 mt_m`}
                />
              }
            >
              <UkEditorTarget
                target="css/step01/2.2.selector/2.2.2.2.type-selector.html"
                className={`uk_editor min_height_450 mb_result_height_740 mt_m`}
                mode="htmlmixed"
                browser="default"
                title={"2.2.2.2.type-selector"}
                minHeight="450px"
                result
              />
            </Suspense>
          </div>
          <aside className="browser_support mt_m" data-tit="Type Selectors">
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
          <h3 className="ml_mn t_blue">아이디 선택자(ID Selectors)</h3>
          <p className="mt_ms">
            <strong className="t_black">CSS Level 1</strong> 선택자로, 특정 값을{" "}
            <code>[id]</code> 속성(attribute)의 값으로 갖는 요소(element)를
            선택합니다. 속성값 앞에 <code>#</code>을 붙여 아이디임을 나타냅니다.
          </p>
          <CodeBlock
            title={"ID Selectors"}
            language="css"
            className="uk_gist_code_box mt_m"
          >
            {`#idname {
							/* style 작성 */
						}`}
          </CodeBlock>
          <div className="view_editor edit_code mt_m">
            <Suspense
              fallback={
                <EditorFallback
                  className={`uk_editor min_height_450 mb_result_height_740 mt_m`}
                />
              }
            >
              <UkEditorTarget
                target="css/step01/2.2.selector/2.2.2.3.id-selector.html"
                className={`uk_editor min_height_450 mb_result_height_740 mt_m`}
                mode="htmlmixed"
                browser="default"
                title={"2.2.2.3.id-selector"}
                minHeight="450px"
                result
              />
            </Suspense>
          </div>
          <aside className="browser_support mt_m" data-tit="ID Selectors">
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
          <h3 className="ml_mn t_blue">클래스 선택자(Class Selectors)</h3>
          <p className="mt_ms">
            <strong className="t_black">CSS Level 1</strong> 선택자로, 특정 값을{" "}
            <code>[class]</code> 속성(attribute)의 값으로 갖는 요소(element)를
            선택합니다. 속성값 앞에 <code>.</code>을 붙여 클래스임을 나타냅니다.
          </p>
          <CodeBlock
            title={"Class Selectors"}
            language="css"
            className="uk_gist_code_box mt_m"
          >
            {`.classname {
							/* style 작성 */
						}`}
          </CodeBlock>
          <div className="view_editor edit_code mt_m">
            <Suspense
              fallback={
                <EditorFallback
                  className={`uk_editor min_height_450 mb_result_height_740 mt_m`}
                />
              }
            >
              <UkEditorTarget
                target="css/step01/2.2.selector/2.2.2.4.class-selector.html"
                className={`uk_editor min_height_450 mb_result_height_740 mt_m`}
                mode="htmlmixed"
                browser="default"
                title={"2.2.2.4.class-selector"}
                minHeight="450px"
                result
              />
            </Suspense>
          </div>
          <aside className="browser_support mt_m" data-tit="Class Selectors">
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
      </section>

      <section className="txt_ex indent mt_xxl">
        <h2 className="ml_mn">그룹 선택자(Grouping selectors)</h2>
        <blockquote className="uk_note mt_l" role="note">
          <strong className="sound_only">요약 설명</strong>
          <p>
            그룹 선택자(Grouping selectors)는 모든 선택자를 콤마(,)로 조합하여
            그룹으로 묶어 작성할 수 있습니다.
          </p>
        </blockquote>
        <CodeBlock
          title={"Grouping Selectors"}
          language="css"
          className="uk_gist_code_box mt_l"
        >
          {`/* Element, Element, Element */
						div, p, h1 {
							/* style 작성 */
						}`}
        </CodeBlock>
        <div className="view_editor edit_code mt_l">
          <Suspense
            fallback={
              <EditorFallback
                className={`uk_editor min_height_450 mb_result_height_740 mt_m`}
              />
            }
          >
            <UkEditorTarget
              target="css/step01/2.2.selector/2.2.3.group-selector.html"
              className={`uk_editor min_height_450 mb_result_height_740 mt_m`}
              mode="htmlmixed"
              browser="default"
              title={"2.2.3.group-selector"}
              minHeight="450px"
              result
            />
          </Suspense>
        </div>
        <aside
          className="browser_support mt_m"
          data-tit="Grouping selectors"
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
      </section>

      <figure className="img_figure indent mt_l">
        <img src={IMG.CSS + "/02_css_02_1.png"} alt="CSS 선택자" />
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
export default CssSelectorsLevelPart1Page;
