import { useState } from "react";
import { usePageMeta } from "@/components/common/PageMeta";

const PAGE_LAYOUT = {
  mainClass: "content_model",
  type: "publishing",
  info: true,
  note: true,
  sideMenu: true,
  reference: false,
  contentList: true,
};

const PAGE_DATA = {
  title: "콘텐츠 모델(Content models)",
  description:
    "콘텐츠 모델(Content models)은 HTML5에서 body 요소에서 사용되는 대부분의 요소를 포함하는 플로우 콘텐츠 그룹과 서로 유사한 특성을 가진 요소끼리 묶어둔 6개의 콘텐츠 그룹으로 구성되며 일부 HTML 요소는 여러 콘텐츠 그룹에 동시에 속할 수 있습니다. 이 페이지에서는 콘텐츠 모델의 분류와 각 카테고리별 요소들을 소개합니다.",
  keyword: "Markup, HTML, W3C, 콘텐츠 모델, Content models, details, details element, 인터랙티브 요소",
};

const MODEL_TABS = [
  {
    key: "flow",
    label: "Flow",
    title: "플로우 콘텐츠(Flow Content)",
    content:
      "a, abbr, address, area(map 요소의 자식 요소인 경우), article, aside, audio, b, bdi, bdo, blockquote, br, button, canvas, cite, code, command, datalist, del, details, dfn, div, dl, em, embed, fieldset, figure, footer, form, h1, h2, h3, h4, h5, h6, header, hgroup, hr, i, iframe, img, input, ins, kbd, keygen, label, map, mark, math, menu, meter, nav, noscript, object, ol, output, p, pre, progress, q, ruby, s, samp, script, section, select, small, span, strong, style(scoped 속성이 있으면), sub, sup, svg, table, textarea, time, ul, var, video, wbr, text",
  },
  {
    key: "metadata",
    label: "Metadata",
    title: "메타데이터 콘텐츠(Metadata Content)",
    content: "base, link, meta, noscript, script, style, template, title",
  },
  {
    key: "interactive",
    label: "Interactive",
    title: "인터랙티브 콘텐츠(Interactive Content)",
    content:
      "a, audio(controls 속성이 있으면), button, details, embed, iframe, img(usemap 속성이 있으면), input(type 속성이 hidden 상태가 아니면), keygen, label, menu(type 속성이 toolbar 상태면), object(usemap 속성이 있으면), select, textarea, video(controls 속성이 있으면)",
  },
  {
    key: "heading",
    label: "Heading",
    title: "헤딩 콘텐츠(Heading Content)",
    content: "h1, h2, h3, h4, h5, h6",
  },
  {
    key: "sectioning",
    label: "Sectioning",
    title: "섹션 콘텐츠(Section Conetnt)",
    content: "article, aside, nav, section",
  },
  {
    key: "phrasing",
    label: "Phrasing",
    title: "프레이징 콘텐츠(Phrasing Content)",
    content:
      "a(프레이징 콘텐츠만을 포함하는 경우), abbr, area(map 요소의 자식요소인 경우), audio, b, bdi, bdo, br, button, canvas, cite, code, command, datalist, del(프레이징 콘텐츠을 포함하는 경우), dfn, em, embed, i, iframe, img, input, ins(프레이징 콘텐츠만을 포함하는 경우), kbd, keygen, label, map(프레이징 콘텐츠만을 포함하는 경우), mark, math, meter, noscript, object, output, progress, q, ruby, s, samp, script, select, small, span, strong, sub, sup, svg, textarea, time, var, video, wbr, text",
  },
  {
    key: "embedded",
    label: "Embedded",
    title: "임베디드 콘텐츠(Embedded Content)",
    content: "audio, canvas, embed, iframe, img, math, object, svg, video",
  },
];

function ModelsPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  const [activeTab, setActiveTab] = useState("flow");
  const activeIndex = MODEL_TABS.findIndex((tab) => tab.key === activeTab);

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          HTML5의 콘텐츠 모델은 <code>&lt;body&gt;</code> 요소에서 사용되는
          대부분의 요소를 포함하는 플로우 콘텐츠 그룹과 서로 유사한 특성을 가진
          요소끼리 묶어둔 6개의 콘텐츠 그룹으로 구성됩니다.
          <br />
          일부 HTML 요소는 여러 콘텐츠 그룹에 동시에 속할 수 있습니다. 또한 어떤
          콘텐츠 그룹에도 속하지 않는 일부 요소도 있습니다.
        </p>
      </blockquote>

      <section className="indent mt_xxl">
        <h2 className="ml_mn">콘텐츠 모델 분류</h2>
        <div className="content_models mt_l">
          <p className="info">
            아래 <span className="t_blue">카테고리 콘텐츠를 클릭</span>하여 각
            카테고리 별 요소를 확인할 수 있습니다.
          </p>

          <div className="tab_wrap">
            <ul>
              {MODEL_TABS.map((tab) => (
                <li
                  key={tab.key}
                  className={`${tab.key} ${activeTab === tab.key ? "on" : ""}`.trim()}
                  onClick={() => setActiveTab(tab.key)}
                >
                  <i>{tab.label}</i>
                </li>
              ))}
            </ul>
          </div>

          <div className="result_wrap">
            {MODEL_TABS.map((tab) => (
              <dl
                key={tab.key}
                className={activeTab === tab.key ? "on" : undefined}
              >
                <dt>{tab.title}</dt>
                <dd>{tab.content}</dd>
              </dl>
            ))}
          </div>

          <p className="reference mt_m">
            자료 출처 :{" "}
            <a
              href="https://www.w3.org/TR/html52/dom.html#content-models"
              target="_blank"
              rel="noreferrer"
            >
              https://www.w3.org/TR/html52/dom.html#content-models
            </a>
          </p>
        </div>

        <article className="indent mt_xl">
          <h3 className="ml_mn">
            {MODEL_TABS[activeIndex].title.split("(")[0].trim()}
            <span className="t_blue">
              ({MODEL_TABS[activeIndex].label} Content)
            </span>
          </h3>
          <p className="mt_ms">
            선택한 카테고리에 속하는 요소 목록입니다. 자세한 규칙은 W3C 문서를
            참고하세요.
          </p>
          <div className="line_code mt_ms">
            <p>
              <code>{MODEL_TABS[activeIndex].content}</code>
            </p>
          </div>
          <div className="ol_lst mt_ms">
            <ol>
              <li>
                일반적으로 아무 플로우 콘텐츠 모델을 포함할 수 있는 콘텐츠
                모델은 최소한 하나의 공백이 아닌 텍스트 노드를 포함하거나, 또는
                최소한 하나의 임베디드 콘텐츠(아래 다시 설명)를 포함하여야
                합니다. 이러한 결과로 <code>&lt;del&gt;</code> 요소 및 그 자식
                요소들은 <code>&lt;del&gt;</code> 요소의 부모 엘리먼트가 될 수
                없습니다.
              </li>
              <li className="mt_sm">
                위의 요구사항은 강력하게 지켜야 할 내용은 아니며, 스크립트로
                데이터를 채우기 위해 자리를 잡아 두는 목적 등의 정당한 이유로
                요소가 비어 있을 수 있습니다.
              </li>
            </ol>
          </div>
        </article>

        <article className="indent mt_xl">
          <h3 className="ml_mn">
            메타데이터 콘텐츠 <span className="t_blue">(Metadata Content)</span>
          </h3>
          <p className="mt_ms">
            웹 문서와 관련된 정보를 표현하는 콘텐츠와 다른 문서와의 관계를
            유지하는 콘텐츠입니다.
            <br />
            메타 데이터 콘텐츠 는 나머지 콘텐츠의 프리젠테이션 또는 동작을 설정,
            다른 문서와 문서의 관계를 설정하거나 다른 "대역 외"정보를 전달하는
            콘텐츠입니다.
          </p>
          <div className="line_code mt_ms">
            <p>
              <code>
                base, link, meta, noscript, script, style, template, title
              </code>
            </p>
          </div>
        </article>

        <article className="indent mt_xl">
          <h3 className="ml_mn">
            섹션 콘텐츠 <span className="t_blue">(Section Conetnt)</span>
          </h3>
          <p className="mt_ms">
            웹 문서의 섹션 영역을 정의하는 요소입니다.
            <br />
            섹션 콘텐츠는 헤딩과 푸터의 유효범위를 지정합니다.
            <br />
            제목과 그 내용을 포함하는 범위를 지정합니다.
          </p>
          <div className="line_code mt_ms">
            <p>
              <code>article, aside, nav, section</code>
            </p>
          </div>
        </article>

        <article className="indent mt_xl">
          <h3 className="ml_mn">
            헤딩 콘텐츠 <span className="t_blue">(Heading Conetnt)</span>
          </h3>
          <p className="mt_ms">
            헤딩 콘텐츠는 섹션(섹션 콘텐츠나 또는 헤딩 콘텐츠에 의해 암시적으로
            마크업 된 영역)의 헤더를 정의합니다.
          </p>
          <div className="line_code mt_ms">
            <p>
              <code>h1, h2, h3, h4, h5, h6</code>
            </p>
          </div>
        </article>

        <article className="indent mt_xl">
          <h3 className="ml_mn">
            프레이징 콘텐츠 <span className="t_blue">(Phrasing Conetnt)</span>
          </h3>
          <p className="mt_ms">
            프레이징 콘텐츠는 문장과 텍스트가 관련된 요소입니다.
            <br />
            프레이징 콘텐츠는 문서의 텍스트이며, 그 텍스트를 단락 내부레벨에서
            마크업을 하는 요소입니다.
            <br />
            프레이징 콘텐츠가 모여 문단을 구성합니다.
            <br />
            일반적으로 프레이징 콘텐츠 모델 요소를 포함할 수 있는 요소들은 최소
            하나의 공백이 아닌 텍스트를 포함하거나 또는 최소 하나의 임베디드
            콘텐츠를 포함하여야 합니다.
          </p>
          <div className="line_code mt_ms">
            <p>
              <code>{MODEL_TABS[5].content}</code>
            </p>
          </div>
        </article>

        <article className="indent mt_xl">
          <h3 className="ml_mn">
            임베디드 콘텐츠 <span className="t_blue">(Embedded Conetnt)</span>
          </h3>
          <p className="mt_ms">
            다른 소스를 가져오거나 삽입시키는 컨텐츠와 관련된 요소입니다.
            <br />
            임베디드 콘텐츠는 다른 리소스(음악, 영상 등)를 문서에 삽입하는
            콘텐츠나, 문서에 삽입된 다른 형태에서 유래한 콘텐츠를 말합니다.
            <br />
            HTML의 네임스페이스에 속하지 않으면서, 콘텐츠를 포함하고 있지만
            메타데이터가 아닌 것들을 임베디드 콘텐츠라 합니다.(SVG등)
            <br />
            임베디드 콘텐츠 요소 중 일부는 외부 리소스가 사용이 불가능 할때
            사용할 대체 콘텐츠를 갖습니다.
          </p>
          <div className="line_code mt_ms">
            <p>
              <code>{MODEL_TABS[6].content}</code>
            </p>
          </div>
        </article>

        <article className="indent mt_xl">
          <h3 className="ml_mn">
            인터랙티브 콘텐츠{" "}
            <span className="t_blue">(Interactive Conetnt)</span>
          </h3>
          <p className="mt_ms">
            인터랙티브 콘텐츠는 사용자와의 상호작용을 위해 사용되는
            콘텐츠입니다.
          </p>
          <div className="line_code mt_ms">
            <p>
              <code>{MODEL_TABS[2].content}</code>
            </p>
          </div>
        </article>
      </section>

      <footer className="reference_box mt_xxl">
        <strong className="tit">콘텐츠 모델(Content models) 참조</strong>
        <ul className="link_lst">
          <li className="reference">
            <a
              href="https://www.w3.org/TR/html52/dom.html#content-models"
              target="_blank"
              className="fas"
              rel="noreferrer"
            >
              W3C 문서
            </a>
          </li>
          <li className="reference">
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories"
              target="_blank"
              className="fas"
              rel="noreferrer"
            >
              MDN 문서
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}

export default ModelsPage;
