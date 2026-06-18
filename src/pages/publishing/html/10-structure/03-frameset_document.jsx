import CodeBlock from "@/components/code/CodeBlock";
import { usePageMeta } from "@/components/common/PageMeta";
import { IMG } from "@/config/path";

const PAGE_LAYOUT = {
  mainClass: "frameset_document",
  type: "publishing",
  info: true,
  note: true,
  sideMenu: true,
  reference: true,
  contentList: true,
};

const PAGE_DATA = {
  title: "프레임셋 문서 구조",
  description:
    "프레임셋 문서 구조는 HTML4에서 사용되던 방식으로, frameset 요소를 이용해 하나의 브라우저 창을 여러 영역으로 나누고 각 영역에 개별 HTML 문서를 불러오는 구조이며 주로 메뉴-본문 분할 레이아웃에 활용되었지만 접근성 부족, 검색엔진 비호환, 북마크 문제 등 여러 단점으로 인해 HTML5에서는 완전히 폐지되었습니다. 이 페이지에서는 프레임셋 기본 문법, HTML5에서 프레임셋이 폐지된 이유에 대해 설명합니다.",
  keyword: "Markup, HTML, tag, elements, frameset",
};

function FramesetLegacyPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          프레임셋(frameset)은 HTML4에서 사용되던 <b>문서 분할 방식</b>으로,
          하나의 브라우저 창 안에 여러 개의 HTML 문서를 나누어 동시에 표시하기
          위해 사용되었습니다.
          <br />
          <code>&lt;frameset&gt;</code> 요소는 <code>&lt;body&gt;</code>를
          대체하며,
          <code>&lt;frame&gt;</code> 태그를 통해 각 영역에 다른 문서를
          로드합니다.
        </p>
        <p className="mt_s">
          하지만 프레임셋은{" "}
          <b>접근성 저하, 검색엔진 비호환, 모바일 미지원, 복잡한 유지보수</b>{" "}
          등의 이유로{" "}
          <span className="t_red">
            <b>HTML5에서 공식적으로 폐지(deprecated)</b> 되었으며, 더 이상
            사용이 권장되지 않습니다.
          </span>
          <br />
          현대 웹 개발에서는 <code>&lt;iframe&gt;</code>이나 컴포넌트 기반 SPA
          구조, CSS 레이아웃 기법(Flexbox, Grid) 등이 대체 기술로 사용됩니다.
        </p>
      </blockquote>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          주요 특징
        </h2>
        <ol className="mt_l ol_lst info_lst gap-column-important-m">
          <li className="weight-600-before t_black_before">
            <strong>문서 분할</strong>
            <p>
              한 페이지를 여러 개의 영역(프레임)으로 분할하여 각각 다른 HTML
              문서를 표시합니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>독립적 로딩</strong>
            <p>
              각 프레임은 개별 URL을 가지며, 독립적으로 로드되어 콘텐츠를
              보여줍니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>&lt;body&gt; 대체</strong>
            <p>
              <code>&lt;frameset&gt;</code> 요소는 <code>&lt;body&gt;</code>{" "}
              요소를 대체하며 동시에 사용할 수 없습니다.
            </p>
          </li>
          <li className="weight-600-before t_black_before">
            <strong>링크 타깃 지정</strong>
            <p>
              프레임 간 상호작용을 위해{" "}
              <code>&lt;a target="프레임이름"&gt;</code> 형식을 사용하여 특정
              프레임에 링크를 열 수 있습니다.
            </p>
          </li>
        </ol>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn" data-conlist="false">
          기본 구조
        </h2>
        <p className="mt_ml">
          <code>cols</code> 또는 <code>rows</code> 속성을 사용하여 프레임을 수직
          또는 수평으로 분할할 수 있으며, 각 <code>&lt;frame&gt;</code> 요소에는
          개별 HTML 파일을 지정하여 콘텐츠를 불러옵니다.
        </p>
        <CodeBlock title="프레임셋 기본 구조" className="mt_m" language="html">
          {`<!DOCTYPE html>
<html>
  <head>
    <title>프레임셋 예제</title>
  </head>

  <frameset cols="25%,75%">
    <frame src="menu.html" name="leftFrame">
    <frame src="content.html" name="rightFrame">
  </frameset>
</html>`}
        </CodeBlock>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn">관련 요소</h2>
        <div className="table_summary value_200 mt_l">
          <ul className="lst_hd">
            <li className="cell value">요소</li>
            <li className="cell content">설명</li>
          </ul>
          <ul className="lst_bd">
            <li>
              <p className="cell value">
                <code>&lt;frameset&gt;</code>
              </p>
              <p className="cell content">
                프레임 분할을 정의하며, <code>&lt;body&gt;</code> 대신 사용
              </p>
            </li>
            <li>
              <p className="cell value">
                <code>&lt;frame&gt;</code>
              </p>
              <p className="cell content">각 프레임에 표시할 개별 문서 정의</p>
            </li>
            <li>
              <p className="cell value">
                <code>&lt;noframes&gt;</code>
              </p>
              <p className="cell content">
                프레임을 지원하지 않는 브라우저에 대체 콘텐츠 제공
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_red">HTML5 에서 프레임셋이 폐지된 이유</h2>
        <article className="mt_ml">
          <h3 className="t_red">접근성 문제 (Accessibility Issues)</h3>
          <ol className="mt_m dot_lst info_lst gap-column-important-ms">
            <li className="weight-600-before t_black_before">
              <strong>스크린 리더 지원 부족</strong>
              <p>
                프레임은 서로 독립적인 문서로 구성되어 있기 때문에, 보조
                기술(예: 스크린 리더)은 전체 페이지 구조를 인식하기 어렵습니다.
              </p>
            </li>
            <li className="weight-600-before t_black_before">
              <strong>프레임 간 문맥 전달 실패</strong>
              <p>
                사용자 입장에서는 프레임이 논리적으로 연결되어 있지만,
                보조기기는 이를 별개의 페이지로 해석하여{" "}
                <b>내용 간 흐름을 이해하지 못합니다.</b>
              </p>
            </li>
            <li className="weight-600-before t_black_before">
              <strong>키보드 포커스 제어 어려움</strong>
              <p>
                프레임 내부로 포커스를 이동시키는 것이 까다롭고 예측 불가능하여{" "}
                <b>키보드 사용자에 불리합니다.</b>
              </p>
            </li>
          </ol>
        </article>

        <article className="mt_l">
          <h3 className="t_red">사용자 경험 저하 (UX Issues)</h3>
          <ol className="mt_m dot_lst info_lst gap-column-important-ms">
            <li className="weight-600-before t_black_before">
              <strong>뒤로 가기 버튼 오류</strong>
              <p>
                프레임 내 링크 클릭 시 주소(URL)는 변하지 않아, 사용자가
                브라우저의 ‘뒤로 가기’를 눌러도{" "}
                <b>원래 페이지로 돌아가지 않습니다.</b>
              </p>
            </li>
            <li className="weight-600-before t_black_before">
              <strong>스크롤 혼란</strong>
              <p>
                프레임마다 스크롤이 생기면,{" "}
                <b>전체 페이지가 아닌 부분 스크롤</b>로 인해 사용자가 혼란을
                느끼기 쉽습니다.
              </p>
            </li>
            <li className="weight-600-before t_black_before">
              <strong>모바일 대응 불가</strong>
              <p>
                프레임셋은 고정형 레이아웃에 기반하기 때문에,{" "}
                <b>
                  반응형 웹 디자인에 적합하지 않으며 모바일 브라우저와의
                  호환성도 매우 낮습니다.
                </b>
              </p>
            </li>
          </ol>
        </article>

        <article className="mt_l">
          <h3 className="t_red">검색 엔진 최적화(SEO)에 불리</h3>
          <ol className="mt_m dot_lst info_lst gap-column-important-ms">
            <li className="weight-600-before t_black_before">
              <strong>프레임 내부 문서 별도 인식</strong>
              <p>
                검색 엔진은 프레임 안의 콘텐츠를 <b>별도의 문서로 인덱싱</b>
                하거나 <b>전혀 인식하지 못할 수 있습니다.</b>
              </p>
            </li>
            <li className="weight-600-before t_black_before">
              <strong>문서 구조 파악 실패</strong>
              <p>
                메인 페이지 자체에는 내용이 없고 프레임만 존재하므로, 크롤러가
                페이지의 <b>실질적 주제나 콘텐츠를 파악하지 못합니다.</b>
              </p>
            </li>
          </ol>
        </article>

        <article className="mt_l">
          <h3 className="t_red">유지보수성과 개발 효율성 저하</h3>
          <ol className="mt_m dot_lst info_lst gap-column-important-ms">
            <li className="weight-600-before t_black_before">
              <strong>복잡한 문서 구조</strong>
              <p>
                단일 페이지 안에 여러 개의 HTML 파일을 로드하므로, 수정 시{" "}
                <b>여러 파일을 동시에 수정해야 하는 불편함</b>이 있습니다.
              </p>
            </li>
            <li className="weight-600-before t_black_before">
              <strong>프레임 간 상호작용 어려움</strong>
              <p>
                JavaScript로 프레임 간 통신을 하려면 <code>parent</code>,{" "}
                <code>top</code>, <code>frames[]</code> 등의 접근 방식이
                필요하여 <b>코드가 복잡하고 취약해집니다.</b>
              </p>
            </li>
            <li className="weight-600-before t_black_before">
              <strong>페이지 단위 관리 어려움</strong>
              <p>
                프레임 기반 문서는 페이지 단위로 분리되어 있어서,{" "}
                <b>라우팅·분석·로그 추적이 불편합니다.</b>
              </p>
            </li>
          </ol>
        </article>

        <article className="mt_l">
          <h3 className="t_blue">대체 기술의 등장</h3>
          <ol className="mt_m dot_lst info_lst gap-column-important-ms">
            <li className="weight-600-before t_black_before">
              <strong>&lt;iframe&gt;</strong>
              <p>
                인라인 프레임으로 문서 내의 특정 영역에 외부 콘텐츠를 삽입할 수
                있도록 해줍니다.
              </p>
            </li>
            <li className="weight-600-before t_black_before">
              <strong>SPA (Single Page Application)</strong>
              <p>
                React/Vue/Angular 등은 데이터 상태 변화에 따라 동적으로 콘텐츠를
                렌더링합니다.
              </p>
            </li>
            <li className="weight-600-before t_black_before">
              <strong>CSS Flexbox, Grid</strong>
              <p>
                프레임 분할을 사용하지 않더라도 반응형 레이아웃 구현이
                가능합니다.
              </p>
            </li>
          </ol>
        </article>
      </section>

      <figure className="img_figure mt_l">
        <img src={IMG.HTML + "/10_html_03.png"} alt="HTML4 문서 구조" />
        <figcaption>frameset 문서 구조</figcaption>
      </figure>
    </>
  );
}

export default FramesetLegacyPage;
