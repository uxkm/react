import { Suspense, lazy } from "react";
import CodeBlock from "@/components/code/CodeBlock";
import { usePageMeta } from "@/components/common/PageMeta";
import { IMG } from "@/config/path";

const PAGE_LAYOUT = {
  mainClass: "sup_element",
  type: "publishing",
  info: true,
  note: true,
  sideMenu: true,
  reference: true,
  contentList: false,
  bottomEditor: true,
};

const PAGE_DATA = {
  title: "sup element",
  description:
    "sup 요소는 HTML 문서에서 텍스트를 윗첨자 형태로 표시할 때 사용하는 인라인 태그로, 수학 지수, 단위 표시, 각주 번호 등 기준선보다 위쪽에 작게 표시해야 하는 내용을 표현할 때 사용되며 브라우저는 해당 텍스트를 기준선 위로 올려 렌더링합니다. 이 페이지에서는 sup 요소의 주요 역할 및 특징을 설명하고, sup 요소의 용도와 구조적 위치에 따른 사용 예시를 소개합니다.",
  keyword: "Markup, HTML, tag, elements, sup",
};

const UkEditorTarget = lazy(() => import("@/components/code/UkEditorTarget"));

function EditorFallback() {
  return <div className="uk_editor min_height_450" aria-hidden />;
}

function SupElementPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          <code>&lt;sup&gt;</code>는 지수, 각주 번호처럼 기준선 위 표기가 필요한
          경우 사용합니다.
        </p>
      </blockquote>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주요 역할 및 특징
        </h2>
        <ul className="dot_lst mt_l">
          <li>수학 지수 표현과 각주 번호 표기에 주로 사용됩니다.</li>
          <li>
            마찬가지로 단순 스타일 목적이 아닌 의미 있는 윗첨자일 때 사용하는
            것이 좋습니다.
          </li>
        </ul>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          CSS 기본 값
        </h2>
        <CodeBlock title="sup element CSS" className="mt_l" language="css">
          {`sup {
  display: inline;
  vertical-align: super;
  font-size: smaller;
}`}
        </CodeBlock>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          기본 문법
        </h2>
        <CodeBlock title="sup element syntax" className="mt_l" language="html">
          {`<sup>위 첨자</sup>`}
        </CodeBlock>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          속성
        </h2>
        <p className="mt_l">
          <code>&lt;sup&gt;</code> 요소는 고유 속성이 없으며 글로벌 속성만
          사용합니다.
        </p>
      </section>
      <section className="view_editor indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          예제
        </h2>
        <article className="mt_l indent">
          <h3 className="ml_mn">상황별 예제</h3>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/05-textLevel/5.11.sup_element_1.html"
                className="min_height_450 mb_result_height_430"
                mode="htmlmixed"
                browser="default"
                theme="moxer"
                title="상황별 예제"
                minHeight="450px"
                result
              />
            </Suspense>
          </div>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">CSS로 스타일 변경</h3>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/05-textLevel/5.11.sup_element_2.html"
                className="min_height_300 mb_result_height_200"
                mode="htmlmixed"
                browser="default"
                theme="moxer"
                title="CSS로 스타일 변경"
                minHeight="300px"
                result
              />
            </Suspense>
          </div>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">접근성을 고려한 위 첨자</h3>
          <CodeBlock
            title="접근성을 고려한 위 첨자"
            className="mt_m"
            language="html"
          >
            {`<p>
  수학식: x<sup aria-label="위 첨자 2">2</sup> + y<sup>2</sup> = z<sup>2</sup>
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
            <code>&lt;sup&gt;</code>는 위첨자 의미가 있을 때만 사용하고 단순
            스타일 목적 사용은 피하세요.
          </li>
          <li>
            스크린 리더 전달이 중요하면 <code>aria-label</code> 같은 보조
            속성으로 의미를 보완하세요.
          </li>
          <li>
            긴 텍스트를 전체 윗첨자로 처리하면 가독성이 크게 떨어지므로 필요한
            기호/숫자 단위로만 사용하세요.
          </li>
        </ul>
      </section>
      <aside className="browser_support mt_xxl" data-tit="sup">
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
        <img src={`${IMG.HTML}/05_html_11.png`} alt="sup 요소" />
        <figcaption>sup 요소</figcaption>
      </figure>
    </>
  );
}

export default SupElementPage;
