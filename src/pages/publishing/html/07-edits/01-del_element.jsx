import { Suspense, lazy } from "react";
import { usePageMeta } from "@/components/common/PageMeta";
import CodeBlock from "@/components/code/CodeBlock";
import { IMG } from "@/config/path";

const PAGE_LAYOUT = {
  mainClass: "del_element",
  type: "publishing",
  info: true,
  note: true,
  sideMenu: true,
  reference: true,
  contentList: true,
  bottomEditor: true,
};

const PAGE_DATA = {
  title: "del element",
  description:
    "del 요소는 HTML 문서에서 삭제되었거나 더 이상 유효하지 않은 내용을 나타낼 때 사용하는 시맨틱 태그로, 브라우저는 기본적으로 해당 텍스트에 취소선을 적용하며 datetime 속성을 사용해 삭제된 시점을 명시할 수 있습니다. 이 페이지에서는 del 요소의 주요 역할 및 특징을 설명하고, del 요소의 용도와 구조적 위치에 따른 사용 예시를 소개합니다.",
  keyword: "Markup, HTML, tag, elements, del, Deleted Text",
};

const UkEditorTarget = lazy(
  () => import("@/components/code/UkEditorTarget"),
);

function EditorFallback() {
  return <div className="uk_editor min_height_400" aria-hidden />;
}

function DelElementPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          <code>&lt;del&gt;</code> 요소는 문서에서{" "}
          <b>삭제되었거나 더 이상 유효하지 않은 콘텐츠를 나타내는 시맨틱 태그</b>
          로, <b>수정 이력이나 변경 내용을 시각적으로 표현할 때 사용됩니다.</b>
          <br />
          기본적으로{" "}
          <strong>
            취소선(<i style={{ textDecoration: "line-through" }}>strikethrough</i>)
          </strong>
          으로 렌더링되며, <code>datetime</code> 속성을 통해{" "}
          <b>삭제된 시점을 명시</b>할 수 있습니다. 변경 전과 후의 내용을
          비교하거나 기록할 때 <code>&lt;ins&gt;</code> 요소와 함께 사용되며,{" "}
          <b>문서 편집 히스토리를 명확하게 보여주고자 할 때 유용</b>합니다.
        </p>
      </blockquote>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주요 역할 및 특징
        </h2>
        <ol className="mt_l ol_lst info_lst gap-column-important-m">
          <li className="weight-600-before t_black_before">
            <strong>삭제된 텍스트를 시각적으로 표시</strong>
            <p>
              기본적으로 취소선(strikethrough) 을 적용해 삭제된 텍스트임을 명확히
              표시합니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>datetime 속성을 통해 삭제 시점 기록 가능</strong>
            <p>삭제된 날짜와 시간을 ISO 8601 형식으로 지정할 수 있습니다.</p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>&lt;ins&gt; 요소와 함께 사용해 수정 내역 관리</strong>
            <p>
              <code>&lt;del&gt;</code>은 삭제된 텍스트를,{" "}
              <code>&lt;ins&gt;</code>는 새로 추가된 텍스트를 나타내며, 함께
              사용하면 수정 내역을 보다 명확하게 관리할 수 있습니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>SEO 및 접근성 향상</strong>
            <ul className="dot_lst">
              <li>
                <code>&lt;del&gt;</code> 요소를 사용하면 검색 엔진이 문서 변경
                내역을 이해하는 데 도움을 줄 수 있습니다.
              </li>
              <li>
                화면 낭독기(Screen Reader)는 삭제된 텍스트를 인식하여 사용자에게
                알릴 수 있습니다.
              </li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>일반 텍스트뿐만 아니라 HTML 요소도 포함 가능</strong>
            <p>
              <code>&lt;del&gt;</code> 요소 안에는 문장뿐만 아니라 다른 HTML
              요소(<code>&lt;p&gt;</code>, <code>&lt;span&gt;</code>,{" "}
              <code>&lt;a&gt;</code> 등)도 포함할 수 있습니다.
            </p>
          </li>
        </ol>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          CSS 기본 값
        </h2>
        <p className="mt_l">
          <code>&lt;del&gt;</code> 요소는 기본적으로 인라인 레벨 요소이며, 별도의
          CSS를 지정하지 않아도 아래와 같은 기본값이 적용됩니다.
        </p>
        <CodeBlock title="del element CSS" className="mt_m" language="css">
          {`del {
  display: inline;
  text-decoration: line-through; /* 취소선 적용 */
}`}
        </CodeBlock>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          기본 문법
        </h2>
        <CodeBlock title="del element syntax" className="mt_l" language="html">
          {`<del>삭제된 내용</del>`}
        </CodeBlock>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn">속성</h2>
        <article className="mt_l indent">
          <h3 className="ml_mn">
            [cite] <i className="attr_optional">선택 사항</i>{" "}
            <span className="t_blue el_inline_block">&lt;del cite="URL"&gt;</span>
          </h3>
          <p className="mt_ms">
            삭제된 내용의 출처를 명시하는 URL을 제공하는 역할을 합니다. 하지만
            필수 속성은 아니며, 브라우저에서 이를 시각적으로 표시하지는 않습니다.
            <br />
            <code>cite</code> 속성은 텍스트 설명이 아닌 URL만 허용합니다.
          </p>
          <CodeBlock title="del 속성 [cite]" className="mt_m" language="html">
            {`<del cite="https://example.com/reasons">이 문장은 삭제되었습니다.</del>`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            [datetime] <i className="attr_optional">선택 사항</i>{" "}
            <span className="t_blue el_inline_block">
              &lt;del datetime="값"&gt;
            </span>
          </h3>
          <p className="mt_ms">
            문서의 변경 이력을 관리하고 추적이 가능히도록 삭제된 날짜와 시간을
            ISO 8601 형식으로 기록합니다.
          </p>
          <dl className="dl_dot_lst mt_s">
            <dt>형식 :</dt>
            <dd>
              날짜만 : <code>YYYY-MM-DD</code> (예 : <code>2025-02-18</code>)
            </dd>
            <dd>
              날짜와 시간 : <code>YYYY-MM-DDThh:mm:ssZ</code> (예 :{" "}
              <code>2025-02-18T10:30:00Z</code>)
            </dd>
            <dd>
              시간대 포함 : <code>YYYY-MM-DDThh:mm:ss+09:00</code> (예 :{" "}
              <code>2025-02-18T10:30:00+09:00</code>)
            </dd>
          </dl>
          <CodeBlock title="del 속성 [datetime]" className="mt_m" language="html">
            {`<del datetime="2025-02-18T10:30:00Z">이 텍스트는 삭제되었습니다.</del>`}
          </CodeBlock>
        </article>
      </section>

      <section className="view_editor indent mt_xxl">
        <h2 className="ml_mn ve_tit">예제</h2>
        <article className="mt_l indent">
          <h3 className="ml_mn">정가 / 할인가 예제</h3>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/07-edits/7.1.del_element_1.html"
                className="min_height_300 mb_result_height_200"
                result={true}
                mode="htmlmixed"
                theme="moxer"
                browser="default"
                title="정가 / 할인가 예제"
                minHeight="300px"
              />
            </Suspense>
          </div>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">삭제된 날짜와 시간 기록 (datetime 사용)</h3>
          <CodeBlock title="삭제된 날짜와 시간 기록" className="mt_m" language="html">
            {`<del datetime="2025-02-11T14:00:00">이 문장은 삭제되었습니다.</del>`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">
            <code className="font-21-important weight-600">&lt;ins&gt;</code> 요소와
            같이 사용
          </h3>
          <CodeBlock title="del 요소와 같이 사용" className="mt_m" language="html">
            {`<p>
  <del cite="https://example.com/history" datetime="2025-02-18T10:30:00Z">
    구 버전의 텍스트입니다.
  </del>
  <ins datetime="2025-02-18T11:00:00Z">
    새롭게 추가된 텍스트입니다.
  </ins>
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
            <code>&lt;del&gt;</code> 요소는 단순한 스타일링을 위한 취소선이
            아니라, 의미 있는 삭제 기록을 나타낼 때 사용해야 합니다.
            <br />
            스타일이 목적이라면 CSS를 활용(
            <code>text-decoration: line-through;</code>)하는 것이 적절합니다.
          </li>
          <li>
            <code>cite</code> 속성은 텍스트 설명이 아닌 URL만 허용합니다.
          </li>
          <li>
            <code>&lt;s&gt;</code> 요소는 문서에서 더 이상 유효하지 않은 내용을
            나타내지만, 공식적으로 삭제되었다는 의미는 아닙니다.
            <br />
            반면, <code>&lt;del&gt;</code> 요소는 실제로 문서에서 삭제된 내용을
            의미하므로 두 요소를 구분하여 사용해야 합니다.
          </li>
        </ul>
      </section>
      <aside className="browser_support mt_xxl" data-tit="del">
        <ul>
          <li className="ie">지원</li>
          <li className="edge">지원</li>
          <li className="chrome">지원</li>
          <li className="firefox">1.0</li>
          <li className="opera">지원</li>
          <li className="safari">지원</li>
        </ul>
      </aside>
      <figure className="img_figure mt_l">
        <img src={IMG.HTML + "/07_html_01.png"} alt="del 요소" />
        <figcaption>del 요소</figcaption>
      </figure>
    </>
  );
}

export default DelElementPage;
