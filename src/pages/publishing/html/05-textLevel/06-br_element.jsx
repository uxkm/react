import { Suspense, lazy } from "react";
import CodeBlock from "@/components/code/CodeBlock";
import { usePageMeta } from "@/components/common/PageMeta";
import { IMG } from "@/config/path";

const PAGE_LAYOUT = {
  mainClass: "br_element",
  type: "publishing",
  info: true,
  note: true,
  sideMenu: true,
  reference: true,
  contentList: true,
  bottomEditor: true,
};

const PAGE_DATA = {
  title: "br element",
  description:
    "br 요소는 HTML 문서에서 줄바꿈(line break)을 명시적으로 삽입할 때 사용하는 태그로, 단락을 나누는 용도의 p 요소와 달리 같은 문장이나 단락 안에서 강제 개행이 필요할 때 사용되며 시나 노래 가사, 주소, 연락처 등과 같이 연속적인 줄바꿈이 필요한 콘텐츠에 적합합니다. 이 페이지에서는 br 요소의 주요 역할 및 특징을 설명하고, br 요소의 용도와 구조적 위치에 따른 사용 예시를 소개합니다.",
  keyword: "Markup, HTML, tag, elements, br",
};

const UkEditorTarget = lazy(() => import("@/components/code/UkEditorTarget"));

function EditorFallback() {
  return <div className="uk_editor min_height_300" aria-hidden />;
}

function BrElementPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          <code>&lt;br&gt;</code>은 같은 문단 안에서 줄만 바꿔야 할 때 사용하며,
          단락 구분은 <code>&lt;p&gt;</code>가 담당합니다.
        </p>
      </blockquote>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주요 역할 및 특징
        </h2>
        <ol className="mt_l ol_lst info_lst gap-column-important-m">
          <li className="weight-600-before t_black_before">
            <strong>강제 줄바꿈 삽입</strong>
            <ul className="dot_lst">
              <li>
                <code>&lt;br&gt;</code>은 같은 문맥 내에서 줄바꿈이 필요할 때
                사용합니다.
              </li>
              <li>
                주소, 시, 가사처럼 줄 단위 표현이 필요한 콘텐츠에 적합합니다.
              </li>
            </ul>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>의미론적 역할 없음</strong>
            <p>
              <code>&lt;br&gt;</code>은 구조 의미를 부여하지 않는 비시맨틱
              요소입니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>레이아웃 용도 남용 금지</strong>
            <p>
              문단 구분은 <code>&lt;p&gt;</code>와 CSS를 사용하고, 줄바꿈이
              필요한 지점에만 제한적으로 사용하세요.
            </p>
          </li>
        </ol>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          CSS 기본 값
        </h2>
        <CodeBlock title="br element CSS" className="mt_l" language="css">
          {`br {
  display: inline;
}`}
        </CodeBlock>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          기본 문법
        </h2>
        <CodeBlock title="br element syntax" className="mt_l" language="html">
          {`<p>
  안녕하세요.<br />
  여기부터 줄바꿈 됩니다.
</p>`}
        </CodeBlock>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          속성
        </h2>
        <p className="mt_l">
          <code>&lt;br&gt;</code> 요소는 고유 속성이 없으며 글로벌 속성만 사용할
          수 있습니다.
        </p>
      </section>
      <section className="view_editor indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          예제
        </h2>
        <article className="mt_l indent">
          <h3 className="ml_mn">기본 줄바꿈 사용</h3>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/05-textLevel/5.6.br_element_1.html"
                className="min_height_300 mb_result_height_200"
                mode="htmlmixed"
                browser="default"
                theme="moxer"
                title="기본 줄바꿈 사용"
                minHeight="300px"
                result
              />
            </Suspense>
          </div>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">주소 정보 표시</h3>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/05-textLevel/5.6.br_element_2.html"
                className="min_height_300 mb_result_height_200"
                mode="htmlmixed"
                browser="default"
                theme="moxer"
                title="주소 정보 표시"
                minHeight="300px"
                result
              />
            </Suspense>
          </div>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">시 또는 노래 가사 표시</h3>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/05-textLevel/5.6.br_element_3.html"
                className="min_height_300 mb_result_height_200"
                mode="htmlmixed"
                browser="default"
                theme="moxer"
                title="시 또는 노래 가사 표시"
                minHeight="300px"
                result
              />
            </Suspense>
          </div>
        </article>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주의사항
        </h2>
        <ul className="dot_lst mt_l">
          <li>
            긴 텍스트 레이아웃을 <code>&lt;br&gt;</code>로 처리하면 유지보수가
            어려우므로 블록 요소와 CSS를 우선 사용하세요.
          </li>
          <li>
            <code>&lt;br&gt;</code>은 문서 구조 의미를 만들지 않으므로 구조
            표현에는 적절한 시맨틱 요소를 사용해야 합니다.
          </li>
        </ul>
      </section>
      <aside className="browser_support mt_xxl" data-tit="br">
        <ul>
          <li className="ie">지원</li>
          <li className="edge">지원</li>
          <li className="chrome">1.0</li>
          <li className="firefox">1.0</li>
          <li className="opera">지원</li>
          <li className="safari">지원</li>
        </ul>
      </aside>
      <figure className="img_figure mt_l">
        <img src={`${IMG.HTML}/05_html_06.png`} alt="br 요소" />
        <figcaption>br 요소</figcaption>
      </figure>
    </>
  );
}

export default BrElementPage;
