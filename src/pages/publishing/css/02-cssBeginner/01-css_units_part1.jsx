import { Suspense, lazy } from "react";
import { usePageMeta } from "@/components/common/PageMeta";
import { IMG } from "@/config/path";
import PublishingPartTabs from "@/components/docs/PublishingPartTabs";

const PAGE_LAYOUT = {
  mainClass: "css_units",
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
  title: "CSS 단위 part-1",
  description:
    "CSS 단위는 요소의 크기, 간격, 색상 등을 정확하게 표현하기 위해 숫자와 함께 사용하는 측정 단위입니다. 이 페이지에서는 글꼴 기준 상대 길이 단위(em, rem, ex, ch), 뷰포트 기준 상대 길이 단위(vw, vh, vmin, vmax), 절대 길이 단위(px, pt, pc, mm, cm, in)를 함께 소개합니다.",
  keyword:
    "style, css, Cascading Style Sheets, 상대 길이 단위, 절대 길이 단위, px, em, %, rem, vw, vh, ch, pt, pc, mm, cm, color, rgb, hsla, hex",
};

const UkEditorTarget = lazy(
  () => import("@/components/code/UkEditorTarget"),
);

function UnitsCommonIntro() {
  return (
    <blockquote className="uk_note common_note mt_xxl" role="note">
      <strong className="sound_only">요약 설명</strong>
      <p>
        CSS 단위는 요소의 크기, 간격, 색상 등을 정확하게 표현하기 위해 숫자와
        함께 사용하는 측정 단위입니다.
      </p>
      <p className="mt_ms">
        CSS 속성 값에 크기나 색상을 지정할 때 단위를 사용하여 브라우저가 값을
        해석하고 화면에 표시할 수 있도록 합니다.
      </p>
      <p className="mt_ms">
        CSS 단위는 크게 <strong>길이 단위</strong>와 <strong>색상 단위</strong>
        로 나뉩니다. 길이 단위는 요소의 크기나 간격을 지정할 때 사용하며, 색상
        단위는 요소의 색상을 표현할 때 사용합니다.
      </p>
    </blockquote>
  );
}

function PageSummaryNote() {
  return (
    <blockquote className="uk_note mt_xxl" role="note">
      <strong className="sound_only">요약 설명</strong>
      <p>
        <strong className="t_blue">{PAGE_DATA.title}</strong>에서는 CSS에서
        사용하는 주요 길이 단위를 다룹니다.
      </p>
      <ul className="dot_lst indent_small mt_s">
        <li className="before_note">
          <strong>상대 길이 단위</strong>
        </li>
        <li className="before_note">
          <strong>절대 길이 단위</strong>
        </li>
      </ul>
      <p className="mt_ms">
        <strong>길이 단위</strong>는 <strong>상대 길이 단위</strong>(
        <code>em</code>, <code>rem</code>, <code>%</code>, <code>vw</code>,{" "}
        <code>vh</code> 등)와 <strong>절대 길이 단위</strong>(<code>px</code>,{" "}
        <code>pt</code>, <code>cm</code> 등)로 구분할 수 있습니다.
      </p>
      <p className="mt_s">
        대부분의 브라우저 기본 폰트 크기는{" "}
        <strong>
          <code>16px = 1em = 100%</code>
        </strong>
        이며, 반응형 웹을 고려할 때는 상대 단위(<code>em</code>,{" "}
        <code>rem</code>, <code>%</code>) 사용을 권장합니다.
      </p>
      <p className="mt_s">
        <strong className="t_red">주의:</strong> 숫자와 단위 사이에는 공백을
        두지 않습니다. 예: <code>2em</code>(○), <code>2 em</code>(×)
      </p>
    </blockquote>
  );
}

function EditorFallback({ className = "uk_editor min_height_400" }) {
  return <div className={className} aria-hidden="true" />;
}

function CodeExample({ target, title, className, minHeight = "400px" }) {
  return (
    <div className="view_editor edit_code mt_m">
      <Suspense fallback={<EditorFallback className={className} />}>
        <UkEditorTarget
          target={target}
          className={className}
          mode="htmlmixed"
          browser="default"
          title={title}
          minHeight={minHeight}
          result
        />
      </Suspense>
    </div>
  );
}

function RelativeLengthSection() {
  return (
    <section className="txt_ex indent mt_xxl">
      <h2 className="ml_mn">상대 길이 단위</h2>
      <p className="mt_l">
        상대 길이 단위는 기준값에 따라 크기가 변하는 단위로, 반응형 웹 제작에
        유용합니다.
      </p>
      <p className="mt_s">
        <strong>글꼴 기준:</strong> <code>em</code>, <code>rem</code>,{" "}
        <code>ex</code>, <code>ch</code>는 부모 요소나 루트 요소의 글꼴 크기를
        기준으로 합니다.
      </p>
      <p className="mt_s">
        <strong>뷰포트 기준:</strong> <code>vw</code>, <code>vh</code>,{" "}
        <code>vmin</code>, <code>vmax</code>는 브라우저 창 크기를 기준으로
        합니다.
      </p>

      <article className="mt_l">
        <h3 data-conlist-h4="true">
          글꼴에 상대적인 길이(Font-relative Lengths)
        </h3>
        <div className="ol_lst indent">
          <ol>
            <li className="line_code tit_h4 before_blue mt_l">
              <h4 className="t_blue">em</h4>
              <blockquote className="uk_note mt_ms" role="note">
                <strong className="sound_only">요약 설명</strong>
                <p>
                  <code>em</code>은 <strong>부모 요소의 글꼴 크기</strong>를
                  기준으로 하는 상대 단위입니다.
                </p>
                <p className="mt_s">
                  <code>1em</code>은 부모 요소의 글꼴 크기와 같고,{" "}
                  <code>1.5em</code>은 부모 요소의 글꼴 크기의 1.5배를
                  의미합니다. 부모 요소에 글꼴 크기가 없으면 브라우저
                  기본값(16px)을 기준으로 합니다.
                </p>
                <p className="mt_s">
                  <strong>계산 예시:</strong> 부모 요소가 <code>16px</code>일
                  때, <code>1.5em = 24px</code>이고 <code>0.75em = 12px</code>
                  입니다.
                </p>
              </blockquote>
              <dl className="dl_dot_lst mt_m">
                <dt>특징 :</dt>
                <dd>부모 요소의 글꼴 크기를 기준으로 계산됩니다.</dd>
                <dd>
                  요소가 여러 겹으로 중첩되면 부모의 크기가 계속 곱해져서 예상과
                  다른 크기가 될 수 있습니다.
                </dd>
                <dd>
                  반응형 웹에서 유용하지만, 요소가 많이 중첩된 경우에는 사용에
                  주의가 필요합니다.
                </dd>
              </dl>
              <CodeExample
                target="css/step01/2.1.unit/2.1.1.em.html"
                className="uk_editor min_height_400 mb_result_height_400"
                title="2.1.1.em"
              />
              <figure className="img_figure mt_s">
                <img
                  src={IMG.CSS + "/cssBeginner/img_unit_em.png"}
                  alt="em 단위 결과 캡쳐 화면"
                />
                <figcaption>[em 단위 결과 화면]</figcaption>
              </figure>
            </li>

            <li className="line_code tit_h4 before_blue mt_l">
              <h4 className="t_blue">rem</h4>
              <blockquote className="uk_note mt_ms" role="note">
                <strong className="sound_only">요약 설명</strong>
                <p>
                  <code>rem</code>은 <strong>root em</strong>의 약자로,{" "}
                  <code>&lt;html&gt;</code> 요소(루트 요소)의 글꼴 크기를
                  기준으로 합니다.
                </p>
                <p className="mt_s">
                  부모 요소의 영향을 받지 않아 <code>em</code>보다 예측하기 쉽고
                  계산이 간단하며, 문서 전체에서 일관된 크기를 유지할 수 있어
                  현대 웹 개발에서 많이 사용됩니다.
                </p>
                <p className="mt_s">
                  <strong>em vs rem 비교:</strong>
                  <br />
                  <code>{"html { font-size: 16px; }"}</code>
                  <br />
                  <code>{"body { font-size: 0.5em; }"}</code> → 8px (부모 html의
                  50%)
                  <br />
                  <code>{"div { font-size: 0.5em; }"}</code> → 4px (부모 body의
                  50%)
                  <br />
                  <code>{"p { font-size: 0.5em; }"}</code> → 2px (부모 div의
                  50%)
                  <br />
                  <br />
                  <code>{"body { font-size: 0.5rem; }"}</code> → 8px (html의
                  50%)
                  <br />
                  <code>{"div { font-size: 0.5rem; }"}</code> → 8px (html의 50%)
                  <br />
                  <code>{"p { font-size: 0.5rem; }"}</code> → 8px (html의 50%)
                </p>
              </blockquote>
              <dl className="dl_dot_lst mt_m">
                <dt>특징 :</dt>
                <dd>
                  항상 <code>&lt;html&gt;</code> 요소의 글꼴 크기를 기준으로
                  계산됩니다.
                </dd>
                <dd>
                  부모 요소의 영향을 받지 않아 예측 가능하고 일관적입니다.
                </dd>
                <dd>
                  반응형 웹에서 <code>{"html { font-size: 62.5%; }"}</code>{" "}
                  (10px)로 설정하면 계산이 더 쉬워집니다.
                </dd>
              </dl>
              <CodeExample
                target="css/step01/2.1.unit/2.1.1.rem.html"
                className="uk_editor min_height_400 mb_result_height_250"
                title="2.1.1.rem"
              />
              <figure className="img_figure mt_s">
                <img
                  src={IMG.CSS + "/cssBeginner/img_unit_rem.png"}
                  alt="rem 단위 결과 캡쳐 화면"
                />
                <figcaption>[rem 단위 결과 화면]</figcaption>
              </figure>
            </li>

            <li className="line_code tit_h4 before_blue mt_l">
              <h4 className="t_blue">ex</h4>
              <div className="line_code mt_ms">
                <p>
                  현재 글꼴의 <strong>x 높이</strong>(소문자 'x'의 높이)를
                  기준으로 하는 단위로, 대부분의 글꼴에서{" "}
                  <code>1ex ≈ 0.5em</code>이며 실제 사용은 드뭅니다.
                </p>
              </div>
            </li>

            <li className="line_code tit_h4 before_blue mt_l">
              <h4 className="t_blue">ch</h4>
              <div className="line_code mt_ms">
                <p>
                  현재 글꼴의 숫자 <strong>0</strong>의 너비를 기준으로 하는
                  단위로, 고정폭 글꼴(monospace)에서 유용하며 텍스트 너비를 문자
                  개수로 지정할 때 사용합니다.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </article>

      <article className="mt_xl">
        <h3 data-conlist-h4="true">뷰포트(viewport) 기준 단위</h3>
        <p className="mt_ms indent">
          브라우저 창(뷰포트) 크기를 기준으로 하는 단위로, 반응형 웹에서 화면
          크기에 따라 자동으로 조절됩니다.
        </p>
        <div className="ol_lst indent">
          <ol>
            <li className="line_code tit_h4 before_blue mt_l">
              <h4 className="t_blue">vw (viewport width)</h4>
              <div className="line_code mt_ms">
                <p>
                  뷰포트 너비의 1%로, <code>100vw = 뷰포트 전체 너비</code>
                  입니다. 예를 들어 뷰포트 너비가 1200px일 때{" "}
                  <code>50vw = 600px</code>입니다.
                </p>
              </div>
            </li>
            <li className="line_code tit_h4 before_blue mt_l">
              <h4 className="t_blue">vh (viewport height)</h4>
              <div className="line_code mt_ms">
                <p>
                  뷰포트 높이의 1%로, <code>100vh = 뷰포트 전체 높이</code>
                  입니다. 예를 들어 뷰포트 높이가 800px일 때{" "}
                  <code>50vh = 400px</code>입니다.
                </p>
              </div>
            </li>
            <li className="line_code tit_h4 before_blue mt_l">
              <h4 className="t_blue">vmin (viewport minimum)</h4>
              <div className="line_code mt_ms">
                <p>
                  <code>vw</code>와 <code>vh</code> 중 <strong>작은 값</strong>
                  의 1%입니다. 예를 들어 뷰포트가 1200px × 800px일 때{" "}
                  <code>50vmin = 400px</code>입니다.
                </p>
              </div>
            </li>
            <li className="line_code tit_h4 before_blue mt_l">
              <h4 className="t_blue">vmax (viewport maximum)</h4>
              <div className="line_code mt_ms">
                <p>
                  <code>vw</code>와 <code>vh</code> 중 <strong>큰 값</strong>의
                  1%입니다. 예를 들어 뷰포트가 1200px × 800px일 때{" "}
                  <code>50vmax = 600px</code>입니다.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </article>
    </section>
  );
}

function AbsoluteLengthSection() {
  return (
    <section className="txt_ex indent mt_xxl">
      <h2 className="ml_mn">절대 길이 단위</h2>
      <p className="mt_l">
        절대 길이 단위는 고정된 크기를 가진 단위로, 화면 크기나 부모 요소의
        영향을 받지 않습니다.
      </p>
      <p className="mt_s">
        주로 사용되는 단위는 <code>px</code> (픽셀), <code>pt</code> (포인트),{" "}
        <code>cm</code>, <code>mm</code>, <code>in</code> (인치)이며, 변환
        관계는 <code>1in = 96px = 72pt = 2.54cm</code>입니다.
      </p>
      <p className="mt_s">
        <strong>주의:</strong> 화면에서는 물리적 크기와 정확히 일치하지 않을 수
        있으며, 웹에서는 주로 <code>px</code>를 사용합니다.
      </p>

      <article className="mt_l">
        <h3>px (pixels)</h3>
        <p className="indent mt_ms">
          <code>px</code>는 화면의 픽셀(점)을 의미하는 가장 많이 사용되는 절대
          단위입니다. 이미지 크기와 정확히 맞추거나 고정된 레이아웃이 필요할 때
          사용하며, 화면 크기나 해상도에 따라 실제로 보이는 크기가 달라질 수
          있습니다.
        </p>
      </article>

      <article className="mt_l">
        <h3>pt (points)</h3>
        <p className="indent mt_ms">
          인쇄 매체에서 주로 사용하는 단위입니다.{" "}
          <code>1pt = 1/72인치 ≈ 1.33px</code>입니다.
        </p>
      </article>

      <article className="mt_l">
        <h3>mm, cm, in (물리적 단위)</h3>
        <p className="indent mt_ms">
          물리적 측정 단위입니다. 웹에서는 거의 사용하지 않으며, 주로 인쇄용
          스타일시트에서 사용합니다. 변환 관계:{" "}
          <code>1인치 = 2.54cm = 25.4mm = 96px</code>
        </p>
      </article>

      <article className="mt_l">
        <h3>pc (picas)</h3>
        <p className="indent mt_ms">
          인쇄 매체에서 사용하는 단위입니다. <code>1pc = 12pt = 1/6in</code>
        </p>
      </article>

      <article className="view_editor edit_code mt_l">
        <h3 className="ve_tit">절대 길이 단위 예제</h3>
        <Suspense
          fallback={
            <EditorFallback className="uk_editor indent min_height_550 mb_result_height_550 mt_m" />
          }
        >
          <UkEditorTarget
            target="css/step01/2.1.unit/2.1.2.absolute.length.html"
            className="uk_editor indent min_height_550 mb_result_height_550 mt_m"
            mode="htmlmixed"
            browser="default"
            title="2.1.2.absolute.length"
            minHeight="550px"
            result
          />
        </Suspense>
      </article>
    </section>
  );
}

function CssUnitsPart1Page() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <UnitsCommonIntro />
      <PublishingPartTabs sectionType="css" />
      <PageSummaryNote />
      <RelativeLengthSection />
      <AbsoluteLengthSection />

      <figure className="img_figure indent mt_l">
        <img src={IMG.CSS + "/02_css_01_1.png"} alt="CSS 단위" />
        <figcaption className="reference">CSS 단위</figcaption>
      </figure>
    </>
  );
}

export default CssUnitsPart1Page;
