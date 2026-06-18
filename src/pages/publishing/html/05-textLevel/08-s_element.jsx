import { Suspense, lazy } from "react";
import CodeBlock from "@/components/code/CodeBlock";
import { usePageMeta } from "@/components/common/PageMeta";
import { IMG } from "@/config/path";

const PAGE_LAYOUT = {
  mainClass: "s_element",
  type: "publishing",
  info: true,
  note: true,
  sideMenu: true,
  reference: true,
  contentList: true,
  bottomEditor: true,
};

const PAGE_DATA = {
  title: "s element",
  description:
    "s 요소는 HTML 문서에서 더 이상 유효하지 않거나 변경된 내용을 시각적으로 나타낼 때 사용하는 인라인 태그로, 브라우저는 기본적으로 텍스트에 취소선을 적용하여 수정 전 정보, 만료된 가격, 폐기된 항목 등 변동된 상태임을 표현할 때 사용됩니다. 이 페이지에서는 s 요소의 주요 역할 및 특징을 설명하고, s 요소의 용도와 구조적 위치에 따른 사용 예시를 소개합니다.",
  keyword: "Markup, HTML, tag, elements, s",
};

const UkEditorTarget = lazy(() => import("@/components/code/UkEditorTarget"));

function EditorFallback() {
  return <div className="uk_editor min_height_400" aria-hidden />;
}

function SElementPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          <code>&lt;s&gt;</code>는 삭제가 아닌, 현재 기준으로 유효하지 않음을
          나타낼 때 사용합니다.
        </p>
      </blockquote>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주요 역할 및 특징
        </h2>
        <ul className="dot_lst mt_l">
          <li>
            가격 변경, 종료된 이벤트처럼 더 이상 맞지 않는 정보를 표시합니다.
          </li>
          <li>
            문서 편집 이력(삭제 표시)에는 <code>del</code> 사용이 더 적합합니다.
          </li>
        </ul>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          CSS 기본 값
        </h2>
        <CodeBlock title="s element CSS" className="mt_l" language="css">
          {`s {
  display: inline;
  text-decoration: line-through;
}`}
        </CodeBlock>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          기본 문법
        </h2>
        <CodeBlock title="s element syntax" className="mt_l" language="html">
          {`<s>유효하지 않은 콘텐츠</s>`}
        </CodeBlock>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          속성
        </h2>
        <p className="mt_l">
          <code>&lt;s&gt;</code> 요소는 고유 속성이 없으며 글로벌 속성만
          사용합니다.
        </p>
      </section>
      <section className="view_editor indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          예제
        </h2>
        <article className="mt_l indent">
          <h3 className="ml_mn">가격 할인 정보</h3>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/05-textLevel/5.8.s_element_1.html"
                className="min_height_400 mb_result_height_360"
                mode="htmlmixed"
                browser="default"
                theme="moxer"
                title="가격 할인 정보"
                minHeight="400px"
                result
              />
            </Suspense>
          </div>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">폐기된 정보 표시</h3>
          <div className="view_editor edit_code mt_m">
            <Suspense fallback={<EditorFallback />}>
              <UkEditorTarget
                target="html/05-textLevel/5.8.s_element_2.html"
                className="min_height_300 mb_result_height_200"
                mode="htmlmixed"
                browser="default"
                theme="moxer"
                title="폐기된 정보 표시"
                minHeight="300px"
                result
              />
            </Suspense>
          </div>
        </article>
        <article className="mt_xl indent">
          <h3 className="ml_mn">취소선과 의미 강조의 조합</h3>
          <CodeBlock
            title="취소선과 의미 강조의 조합"
            className="mt_m"
            language="html"
          >
            {`<p>
  과거 정책: <s>무료 배송</s><br>
  현재 정책: <strong>구매 금액 $50 이상 무료 배송</strong>
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
            <code>&lt;s&gt;</code>는 단순 취소선 스타일이 아니라 "더 이상
            유효하지 않음" 의미일 때 사용하세요.
          </li>
          <li>
            삭제 의미를 전달해야 한다면 <code>&lt;del&gt;</code>이 더
            적합합니다.
          </li>
          <li>
            단순 장식용 취소선은 CSS <code>text-decoration: line-through;</code>
            로 처리하는 것이 좋습니다.
          </li>
        </ul>
      </section>
      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          <code className="font-24-important">&lt;s&gt;</code> vs{" "}
          <code className="font-24-important">&lt;del&gt;</code>
        </h2>
        <CodeBlock title="s vs del" className="mt_l" language="html">
          {`<!-- s: 더 이상 유효하지 않음 -->
<p><s>정가 50,000원</s> 현재가 30,000원</p>

<!-- del: 문서에서 삭제됨 -->
<p>이전 정책 <del>무료 반품</del></p>`}
        </CodeBlock>
      </section>
      <aside className="browser_support mt_xxl" data-tit="s">
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
        <img src={`${IMG.HTML}/05_html_08.png`} alt="s 요소" />
        <figcaption>s 요소</figcaption>
      </figure>
    </>
  );
}

export default SElementPage;
