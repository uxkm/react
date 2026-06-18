import { Suspense, lazy } from "react";
import CodeBlock from "@/components/code/CodeBlock";
import { usePageMeta } from "@/components/common/PageMeta";
const UkEditorTarget = lazy(() => import("@/components/code/UkEditorTarget"));

const PAGE_LAYOUT = {
  mainClass: "css_list",
  type: "publishing",
  info: true,
  note: true,
  sideMenu: true,
  reference: true,
  contentList: true,
  depth3Last: false,
  bottomEditor: false,
};

const IMG_CSS = "/images/css";

function EditorFallback({ className = "uk_editor min_height_400" }) {
  return <div className={className} aria-hidden />;
}

function CssListPage() {
  usePageMeta({
    title: "List 속성",
    description:
      "CSS의 List 속성은 HTML 리스트(ul, ol) 항목의 마커(숫자, 기호)를 제어하는 속성들로 구성됩니다. 이 페이지에서는 마커의 스타일(list-style-type), 마커로 사용할 이미지(list-style-image), 마커의 위치(list-style-position)를 개별적으로 설정하는 방법과 list-style 축약형 속성을 사용하여 한 번에 설정하는 방법을 함께 소개합니다.",
    keyword:
      "style, css, Cascading Style Sheets, 목록, list, 순서가 있는 목록, 순서가 없는 목록, list-style-type, list-style-image, list-style-position",
    layout: PAGE_LAYOUT,
  });
  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note" aria-label="요약 설명">
        <strong className="sound_only">요약 설명</strong>
        <p>
          CSS의 <code>list</code> 속성은 리스트 항목의 마커(숫자, 기호)를
          제어하는 속성들로 구성됩니다.
          <br />
          마커의 스타일(<code>list-style-type</code>), 마커로 사용할 이미지(
          <code>list-style-image</code>), 마커의 위치(
          <code>list-style-position</code>) 등을 개별적으로 설정하거나,{" "}
          <code>list-style</code> 축약형 속성을 사용하여 한 번에 설정할 수
          있습니다.
        </p>
      </blockquote>

      <section
        className="txt_ex indent mt_xxl"
        aria-label="list-style-type 속성 설명"
      >
        <h2 className="ml_mn">
          <i className="t_blue">list-style-type</i>
        </h2>
        <p className="mt_l">
          리스트 항목 앞에 표시되는 숫자나 기호를 <b>마커(marker)</b>라고
          합니다.
          <br />
          <code>list-style-type</code> 속성으로 다양한 마커를 적용할 수
          있습니다.
          <br />
          마커의 타입은 숫자형(Numeric), 알파벳형(Alphabetic),
          심볼형(Symbolic)으로 구분됩니다.
        </p>
        <CodeBlock
          title={"list-style-type"}
          language="css"
          className="uk_gist_code_box mt_m"
        >
          {`ul {
					list-style-type: Numeric | Alphabetic | Symbolic;
				}`}
        </CodeBlock>
        <div className="ol_lst mt_l">
          <ol>
            <li className="line_code tit_h3">
              <h3 className="mb_s">넘버순(Numeric)</h3>
              <p className="mt_sm">
                decimal : (e.g., 1, 2, 3, ..., 98, 99, 100).
              </p>
              <p>
                decimal-leading-zero : (e.g., 01, 02, 03, ..., 98, 99, 100).
              </p>
              <p>arabic-indic : (e.g., ١‎, ٢‎, ٣‎, ٤‎, ..., ٩٨‎, ٩٩‎, ١٠٠‎).</p>
              <p>armenian, upper-armenian : (e.g., Ա, Բ, Գ, ..., ՂԸ, ՂԹ, Ճ).</p>
              <p>lower-armenian : (e.g., ա, բ, գ, ..., ղը, ղթ, ճ).</p>
              <p>bengali : (e.g., ১, ২, ৩, ..., ৯৮, ৯৯, ১০০).</p>
              <p>cambodian, khmer : (e.g., ១, ២, ៣, ..., ៩៨, ៩៩, ១០០).</p>
              <p>cjk-decimal : (e.g., 一, 二, 三, ..., 九八, 九九, 一〇〇).</p>
              <p>devanagari : (e.g., १, २, ३, ..., ९८, ९९, १००).</p>
              <p>georgian : (e.g., ა, ბ, გ, ..., ჟჱ, ჟთ, რ).</p>
              <p>gujarati : (e.g., ૧, ૨, ૩, ..., ૯૮, ૯૯, ૧૦૦).</p>
              <p>gurmukhi : (e.g., ੧, ੨, ੩, ..., ੯੮, ੯੯, ੧੦੦).</p>
              <p>hebrew : (e.g., א‎, ב‎, ג‎, ..., צח‎, צט‎, ק‎).</p>
              <p>kannada : (e.g., ೧, ೨, ೩, ..., ೯೮, ೯೯, ೧೦೦).</p>
              <p>lao : (e.g., ໑, ໒, ໓, ..., ໙໘, ໙໙, ໑໐໐).</p>
              <p>malayalam : (e.g., ൧, ൨, ൩, ..., ൯൮, ൯൯, ൧൦൦).</p>
              <p>mongolian : (e.g., ᠑, ᠒, ᠓, ..., ᠙᠘, ᠙᠙, ᠑᠐᠐).</p>
              <p>myanmar : (e.g., ၁, ၂, ၃, ..., ၉၈, ၉၉, ၁၀၀).</p>
              <p>oriya : (e.g., ୧, ୨, ୩, ..., ୯୮, ୯୯, ୧୦୦).</p>
              <p>persian : (e.g., ۱, ۲, ۳, ۴, ..., ۹۸, ۹۹, ۱۰۰).</p>
              <p>lower-roman : (e.g., i, ii, iii, ..., xcviii, xcix, c).</p>
              <p>upper-roman : (e.g., I, II, III, ..., XCVIII, XCIX, C).</p>
              <p>tamil : (e.g., ௧, ௨, ௩, ..., ௯௮, ௯௯, ௧௦௦).</p>
              <p>telugu : (e.g., ౧, ౨, ౩, ..., ౯౮, ౯౯, ౧౦౦).</p>
              <p>thai : (e.g., ๑, ๒, ๓, ..., ๙๘, ๙๙, ๑๐๐).</p>
              <p>tibetan : (e.g., ༡, ༢, ༣, ..., ༩༨, ༩༩, ༡༠༠).</p>
            </li>
            <li className="line_code tit_h3 mt_l">
              <h3 className="mb_s">알파벳순(Alphabetic)</h3>
              <p className="mt_sm">
                lower-alpha, lower-latin : (e.g., a, b, c, ..., z, aa, ab).
              </p>
              <p>upper-alpha, upper-latin : (e.g., A, B, C, ..., Z, AA, AB).</p>
              <p>
                cjk-earthly-branch : (e.g., 子, 丑, 寅, ..., 亥, 子子, 子丑).
              </p>
              <p>
                cjk-heavenly-stem : (e.g., 甲, 乙, 丙, ..., 癸, 甲甲, 甲乙).
              </p>
              <p>lower-greek : (e.g., α, β, γ, ..., ω, αα, αβ).</p>
              <p>hiragana : (e.g., あ, い, う, ..., ん, ああ, あい).</p>
              <p>hiragana-iroha : (e.g., い, ろ, は, ..., す, いい, いろ).</p>
              <p>katakana : (e.g., ア, イ, ウ, ..., ン, アア, アイ).</p>
              <p>katakana-iroha : (e.g., イ, ロ, ハ, ..., ス, イイ, イロ)</p>
            </li>
            <li className="line_code tit_h3 mt_l">
              <h3 className="mb_s">심볼(Symbolic)</h3>
              <p className="mt_sm">
                disc, circle, square, disclosure-open, disclosure-closed
              </p>
              <p>disc : • U+2022 BULLET.</p>
              <p>circle : ◦ U+25E6 WHITE BULLET.</p>
              <p>square : ◾ U+25FE BLACK MEDIUM SMALL SQUARE.</p>
            </li>
          </ol>
        </div>
        <div className="view_editor edit_code mt_l">
          <h3 className="ve_tit">list-style-type 예제</h3>
          <Suspense
            fallback={
              <EditorFallback
                className={`uk_editor indent mt_m min_height_450 mb_result_height_450`}
              />
            }
          >
            <UkEditorTarget
              target="css/step01/2.7.list/2.7.list-style-type.html"
              className={`uk_editor indent mt_m min_height_450 mb_result_height_450`}
              mode="htmlmixed"
              browser="default"
              title={"2.7.list-style-type"}
              minHeight="450px"
              result
            />
          </Suspense>
        </div>
      </section>

      <section
        className="txt_ex indent mt_xxl"
        aria-label="list-style-image 속성 설명"
      >
        <h2 className="ml_mn">
          <i className="t_blue">list-style-image</i>
        </h2>
        <p className="mt_l">
          마커로 사용할 이미지를 지정하는 속성입니다.
          <br />
          이미지를 사용하면 기본 마커 대신 지정한 이미지가 표시됩니다.
        </p>
        <CodeBlock
          title={"list-style-image"}
          language="css"
          className="uk_gist_code_box mt_m"
        >
          {`ul {
					list-style-image: url('경로') | none | inherit;
				}`}
        </CodeBlock>
        <div className="view_editor edit_code mt_m">
          <Suspense
            fallback={
              <EditorFallback
                className={`uk_editor min_height_620 mb_result_height_450`}
              />
            }
          >
            <UkEditorTarget
              target="css/step01/2.7.list/2.7.list-style-image.html"
              className={`uk_editor min_height_620 mb_result_height_450`}
              mode="htmlmixed"
              browser="default"
              title={"2.7.list-style-image"}
              minHeight="620px"
              result
            />
          </Suspense>
        </div>
      </section>

      <section
        className="txt_ex indent mt_xxl"
        aria-label="list-style-position 속성 설명"
      >
        <h2 className="ml_mn">
          <i className="t_blue">list-style-position</i>
        </h2>
        <p className="mt_l">
          마커가 리스트 항목의 안쪽에 위치할지 바깥쪽에 위치할지 설정하는
          속성입니다.
          <br />
          기본값은 <code>outside</code>로, 마커가 항목의 바깥쪽에 위치합니다.
          <br />
          <code>inside</code>로 설정하면 마커가 항목의 안쪽에 위치합니다.
        </p>
        <CodeBlock
          title={"list-style-position"}
          language="css"
          className="uk_gist_code_box mt_m"
        >
          {`ul {
					list-style-position: inside | outside | inherit;
				}`}
        </CodeBlock>
        <div className="view_editor edit_code mt_m">
          <Suspense
            fallback={
              <EditorFallback
                className={`uk_editor min_height_650 mb_result_height_450`}
              />
            }
          >
            <UkEditorTarget
              target="css/step01/2.7.list/2.7.list-style-position.html"
              className={`uk_editor min_height_650 mb_result_height_450`}
              mode="htmlmixed"
              browser="default"
              title={"2.7.list-style-position"}
              minHeight="650px"
              result
            />
          </Suspense>
        </div>
      </section>

      <section
        className="txt_ex indent mt_xxl"
        aria-label="list-style 속성 설명"
      >
        <h2 className="ml_mn">
          <i className="t_blue">list-style Shorthand</i>
        </h2>
        <p className="mt_l">
          모든 <code>list-style</code> 속성을 한 줄에 축약형 방식으로 설정할 수
          있습니다.
          <br />
          <code>list-style-type</code>, <code>list-style-position</code>,{" "}
          <code>list-style-image</code>를 한 번에 지정할 수 있습니다.
        </p>
        <CodeBlock
          title={"list-style Shorthand"}
          language="css"
          className="uk_gist_code_box mt_m"
        >
          {`ul {
					list-style: [list-style-type | list-style-position | list-style-image ] | inherit;
				}`}
        </CodeBlock>
        <div className="view_editor edit_code mt_m">
          <Suspense
            fallback={
              <EditorFallback
                className={`uk_editor min_height_630 mb_result_height_450`}
              />
            }
          >
            <UkEditorTarget
              target="css/step01/2.7.list/2.7.list-style.html"
              className={`uk_editor min_height_630 mb_result_height_450`}
              mode="htmlmixed"
              browser="default"
              title={"2.7.list-style"}
              minHeight="630px"
              result
            />
          </Suspense>
        </div>
      </section>

      <figure className="img_figure indent mt_l">
        <img src={`${IMG_CSS}/02_css_07.png`} alt="CSS List" />
        <figcaption className="reference">CSS List</figcaption>
      </figure>

      <aside
        className="browser_support mt_xxl"
        data-tit="list-style"
        aria-label="List 속성 브라우저 지원 현황"
      >
        <ul>
          <li className="ie">4+</li>
          <li className="edge">12.0</li>
          <li className="chrome">1.0</li>
          <li className="firefox">1.0</li>
          <li className="opera">7.0</li>
          <li className="safari">1.0</li>
        </ul>
      </aside>

      <aside className="reference_box mt_xxl" aria-label="List 속성 참조">
        <strong className="tit">List 속성 참조</strong>
        <ul className="link_lst">
          <li className="reference">
            <a
              href="https://www.w3.org/TR/CSS21/generate.html#propdef-list"
              target="_blank"
              className="fas"
              title="새창열림"
            >
              W3C List
            </a>
          </li>
          <li className="reference">
            <a
              href="https://www.w3.org/TR/css-lists-3/"
              target="_blank"
              className="fas"
              title="새창열림"
            >
              W3C CSS Lists Module Level 3
            </a>
          </li>
          <li className="reference">
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type"
              target="_blank"
              className="fas"
              title="새창열림"
            >
              MDN list-style-type
            </a>
          </li>
        </ul>
      </aside>
    </>
  );
}
export default CssListPage;
