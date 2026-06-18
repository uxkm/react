import { Suspense, lazy } from "react";
import { usePageMeta } from "@/components/common/PageMeta";
import { IMG } from '@/config/path'

const PAGE_LAYOUT = {
  mainClass: "html_start",
  type: "publishing",
  info: true,
  note: false,
  sideMenu: true,
  reference: true,
  contentList: true,
  depth3Last: false,
  bottomEditor: true,
};

const PAGE_DATA = {
  title: "HTML이란?",
  description:
    "HTML은 하이퍼텍스트 마크업 언어(Hypertext Markup Language)의 약자로, 웹 페이지의 구조를 정의하는 마크업 언어입니다. 이 페이지에서는 HTML 사용 목적 및 특징, HTML의 역사와 표준화 과정의 발전, HTML 기본 구조 예시를 함께 소개합니다.",
  keyword:
    "Markup, HTML, HTML5, HTML이란?, 마크업, HTML 사용 목적, HTML의 역사, ",
}

const UkEditorTarget = lazy(
  () => import("@/components/code/UkEditorTarget"),
);

function EditorFallback() {
  return <div className="uk_editor min_height_350" aria-hidden />;
}

function HtmlStartPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          HTML은{" "}
          <strong>
            하이퍼텍스트 마크업 언어(Hypertext Markup Language)의 약자
          </strong>
          로, <strong>웹 페이지의 구조를 정의하는 마크업 언어</strong>입니다.
          <br />
          제목, 단락, 이미지, 링크 등을 사용하여 콘텐츠를 구조화하고,
          하이퍼링크를 생성하며, 멀티미디어 콘텐츠를 삽입하고, 웹 폼을 만들어
          사용자 입력을 받을 수 있습니다. 이는 웹 페이지의 기본적인 뼈대를
          형성하고 사용자와 상호작용할 수 있는 요소를 제공합니다.
        </p>
        <p className="mt_s">
          <strong className="t_black">
            HTML은 웹 페이지의 기본적인 구조를 정의하고
          </strong>
          ,
          <br />
          CSS(Cascading Style Sheets)는 이를 꾸미고 스타일링하며,
          <br />
          JavaScript는 동적인 기능을 추가하여 웹 페이지를 보다 생동감 있고
          상호작용적으로 만듭니다.
        </p>
      </blockquote>

      <section className="mt_xxl indent">
        <h2 className="ml_mn t_blue">HTML 사용 목적</h2>
        <ol className="ol_lst info_lst mt_m">
          <li>
            <strong>구조화된 문서</strong>
            <p>
              HTML은 웹 페이지의 구조를 설명하여 제목, 단락, 목록, 이미지, 링크
              등의 요소를 사용하여 문서를 구조화합니다.
            </p>
          </li>
          <li>
            <strong>하이퍼링크</strong>
            <p>
              HTML은 하이퍼링크를 생성하여 다른 웹 페이지로 연결할 수 있도록
              합니다. 이를 통해 사용자는 웹 페이지 간에 쉽게 이동할 수 있습니다.
            </p>
          </li>
          <li>
            <strong>멀티미디어 삽입</strong>
            <p>
              HTML은 이미지, 오디오, 비디오 등의 멀티미디어 콘텐츠를 웹 페이지에
              삽입할 수 있도록 합니다.
            </p>
          </li>
          <li>
            <strong>웹 폼</strong>
            <p>
              HTML은 사용자로부터 정보를 수집하기 위한 웹 폼을 생성할 수
              있습니다. 이를 통해 사용자는 텍스트 입력, 라디오 버튼, 체크 박스,
              드롭다운 목록 등을 통해 정보를 제출할 수 있습니다.
            </p>
          </li>
          <li>
            <strong>크로스 플랫폼 호환</strong>
            <p>
              HTML은 다양한 디바이스와 브라우저에서 호환되며, 웹 페이지가 여러
              플랫폼에서 일관되게 보이고 작동할 수 있도록 합니다.
            </p>
          </li>
        </ol>
      </section>

      <section className="mt_xxl indent">
        <h2 className="ml_mn t_blue">HTML의 역사와 표준화 과정의 발전</h2>
        <p className="mt_m">
          HTML 표준화 과정은 웹 기술의 발전과 함께 진화해왔습니다.
          <br />
          여기에는 웹의 확장성, 접근성, 보안성을 개선하고 웹 페이지를 보다
          효율적으로 작성할 수 있는 방법을 제공하는 데 초점이 맞춰졌습니다.
        </p>
        <ol className="ol_lst info_lst mt_m">
          <li>
            <strong>HTML의 탄생과 초기 개발</strong>
            <p>
              HTML은 1989년 팀 버너스리(Tim Berners-Lee)와 그의 동료들에 의해
              개발되었습니다. 당시 CERN(유럽 입자 물리학 연구소)에서 정보를
              공유하기 위한 방법으로 고안되었습니다.
              <br />그 당시 HTML은 단순한 텍스트 기반의 마크업 언어로,
              하이퍼링크를 사용하여 문서들을 서로 연결할 수 있는 기능을
              제공했습니다. 처음에는 웹의 기초를 다지는 단계였으며, 웹 페이지의
              디자인이나 다양한 미디어 요소 등은 고려되지 않았습니다.
            </p>
          </li>
          <li>
            <strong>표준화의 필요성 인식</strong>
            <p>
              초기에는 HTML은 여러 가지 버전이 동시에 존재하고, 각각의 브라우저
              제조사들이 독자적으로 HTML을 해석하고 구현했습니다.
              <br />
              이는 웹 페이지의 호환성 문제를 야기했고, 사용자들은 동일한 웹
              페이지가 서로 다른 브라우저에서 다르게 보여진다는 문제를
              겪었습니다.
              <br />
              이러한 문제점을 해결하기 위해 HTML의 표준화가 필요하다는 인식이
              커졌습니다.
            </p>
          </li>
          <li>
            <strong>W3C의 설립과 표준화 과정의 시작</strong>
            <p>
              1994년에는 팀 버너스리를 비롯한 웹 커뮤니티가 모여 W3C(World Wide
              Web Consortium)을 설립했습니다.
              <br />
              W3C는 웹의 발전과 표준화를 위한 주요 기구로서 HTML과 CSS 등의 웹
              기술 표준을 제정하고 유지하는 역할을 수행합니다. 이후 W3C는 HTML의
              표준화를 위한 작업을 시작하게 되었습니다.
            </p>
          </li>
          <li>
            <strong>HTML의 표준화 과정</strong>
            <p>
              HTML의 표준화는 W3C의 HTML Working Group을 통해 이루어졌습니다. 이
              그룹은 HTML의 새로운 버전을 개발하고 관리하기 위한 작업을
              진행하며, 다양한 전문가들과 커뮤니티의 참여를 통해 표준을
              제정합니다.
              <br />
              HTML의 각 버전은 다양한 요구사항과 피드백을 반영하여 계속해서
              업데이트되고 개선되었습니다.
            </p>
          </li>
          <li>
            <strong>HTML4의 등장과 XHTML의 시도</strong>
            <p>
              1997년에는 HTML4가 W3C에서 표준으로 제정되었습니다.
              <br />
              HTML4는 이미지 맵, 폼, 테이블 등의 요소들이 추가되었고, 웹
              개발자들에게 더 많은 기능과 유연성을 제공했습니다.
              <br />
              이후 XHTML(Extensible Hypertext Markup Language)이라는 XML 기반의
              HTML이 시도되었으나 널리 채택되지는 않았습니다.
            </p>
          </li>
          <li className="t_blue_before">
            <strong className="t_blue">
              HTML5의 등장과 Living Standard로의 전환
            </strong>
            <p>
              HTML5는 웹 표준의 최신 버전으로, 2014년 W3C에서 공식 표준으로
              발표되었습니다. HTML5는 멀티미디어 요소와 API를 포함하여 많은
              새로운 기능을 도입했습니다. 이전 버전들과 달리 더 많은 기능을
              내장하고 있어서 웹 애플리케이션의 개발이 보다 쉽고 효율적으로
              이루어질 수 있습니다. 또한, HTML5는 모바일 기기와 같은 다양한
              환경에서도 잘 동작하도록 설계되었습니다.
            </p>
            <p className="mt_s">
              HTML5는 &quot;Living Standard&quot;로서 지속적으로 업데이트되고
              있으며, HTML의 향후 버전이 점진적으로 발전하고 업데이트되는 것을
              의미합니다.
              <br />
              이러한 접근 방식은 빠르게 변화하는 웹 환경에 더 나은 대응을
              가능하게 하며, 새로운 요구사항이나 기술의 발전에 대응할 수 있도록
              합니다.
              <br />
              Living Standard의 도입은 HTML의 표준화 과정에 있어서 지속적인
              개선과 발전을 이끌어내는 데 기여하고 있습니다.
            </p>
          </li>
        </ol>
        <p className="mt_ms">
          이러한 과정을 통해 HTML은 웹의 핵심 기술로서 발전해왔으며, 현재는
          HTML5가 주요 표준으로 자리 잡고 있습니다.
          <br />
          HTML의 표준화는 웹 개발에서 필수적인 요소로서, 웹의 발전과 함께
          지속적으로 진행되고 있습니다.
        </p>
      </section>

      <section className="mt_xxl indent">
        <h2 className="ml_mn html5 t_blue">HTML5의 특징</h2>
        <p className="mt_m">
          HTML5는 현재 웹 개발에서 가장 널리 사용되는 HTML 버전 중 하나입니다.
          <br />
          HTML5는 웹 개발자들이 보다 풍부하고 동적인 웹 페이지 및 웹
          애플리케이션을 개발할 수 있도록 도와줍니다.
        </p>
        <ol className="ol_lst info_lst mt_m">
          <li>
            <strong>멀티미디어 지원</strong>
            <p>
              HTML5는 비디오, 오디오, 그래픽 등과 같은 멀티미디어 요소를
              내장하여 웹 개발자들이 이러한 요소를 쉽게 웹 페이지에 포함시킬 수
              있도록 지원합니다.
              <br />
              이는 외부 플러그인 없이도 비디오 및 오디오 재생을 가능케 합니다.
            </p>
          </li>
          <li>
            <strong>시맨틱 요소의 도입</strong>
            <p>
              HTML5는 시맨틱 요소를 도입하여 콘텐츠의 의미를 명확히 할 수 있도록
              합니다.
              <br />
              이러한 요소에는 <code>&lt;header&gt;</code>,{" "}
              <code>&lt;footer&gt;</code>, <code>&lt;nav&gt;</code>,{" "}
              <code>&lt;article&gt;</code>, <code>&lt;section&gt;</code>등이
              포함됩니다. 이를 통해 웹 페이지의 구조를 더 잘 이해하고 검색 엔진
              최적화(SEO)를 향상시킬 수 있습니다.
            </p>
          </li>
          <li>
            <strong>폼 개선</strong>
            <p>
              HTML5는 폼 요소를 개선하여 사용자 경험을 향상시킵니다.
              <br />
              새로운 입력 타입과 속성을 도입하여 사용자가 더 쉽게 입력을
              완료하고 검증할 수 있도록 합니다. 예를 들어, 이메일, 전화번호,
              날짜 등의 입력 유형을 지원합니다.
            </p>
          </li>
          <li>
            <strong>오프라인 및 저장소 기능</strong>
            <p>
              HTML5는 웹 애플리케이션의 오프라인 작동을 지원하고 로컬 데이터를
              저장할 수 있는 기능을 제공합니다.
              <br />
              오프라인에서도 웹 애플리케이션을 사용할 수 있으며, 로컬로 데이터를
              저장하여 오프라인 상태에서도 작업을 수행할 수 있습니다.
            </p>
          </li>
          <li>
            <strong>그래픽 및 캔버스 지원</strong>
            <p>
              HTML5는 <code>&lt;canvas&gt;</code> 요소를 도입하여 동적 그래픽 및
              애니메이션을 생성할 수 있는 기능을 제공합니다.
              <br />더 많은 그래픽 요소를 웹 페이지에 추가하고 웹 애플리케이션을
              더욱 다이내믹하게 만들 수 있습니다.
            </p>
          </li>
          <li>
            <strong>웹 소켓</strong>
            <p>
              HTML5는 웹 소켓을 지원하여 실시간 양방향 통신을 가능하게 합니다.
              <br />
              서버와 클라이언트 간에 데이터를 실시간으로 전송하고 처리할 수
              있습니다.
            </p>
          </li>
        </ol>
      </section>

      <section className="view_editor edit_code mt_xxl">
        <h2 className="ve_tit">HTML 기본 구조</h2>
        <Suspense fallback={<EditorFallback />}>
          <UkEditorTarget
            target="html/01-htmlStart/1.1.html_basic.html"
            className="indent mt_ml min_height_350 mb_result_height_250"
            mode="htmlmixed"
            browser="default"
            theme="ayu-mirage"
            title="HTML 기본 구조"
            minHeight="350px"
            result
          />
        </Suspense>
      </section>

      <section className="mt_xxl indent">
        <h2 className="ml_mn t_blue">한눈에 보는 커리큘럼</h2>
        <figure className="img_figure mt_l">
          <img src={`${IMG.HTML}/01_html_01.png`} alt="HTML 시작하기" />
          <figcaption>HTML 시작하기</figcaption>
        </figure>
      </section>
    </>
  );
}

export default HtmlStartPage;
