import { usePageMeta } from "@/components/common/PageMeta";
import { IMG } from "@/config/path";

const PAGE_LAYOUT = {
  mainClass: "css_start",
  type: "publishing",
  info: true,
  note: false,
  sideMenu: true,
  reference: true,
  contentList: true,
  depth3Last: false,
  bottomEditor: false,
};

const PAGE_DATA = {
  title: "CSS란?",
  description:
    "CSS(Cascading Style Sheets)는 웹 페이지의 표현을 설명하기 위한 스타일시트 언어로, 콘텐츠의 글꼴, 색상, 크기, 간격, 레이아웃 등을 제어하여 웹 페이지의 디자인을 결정하는 중요한 기술입니다. 이 페이지에서는 CSS의 정의와 사용 목적, HTML과 CSS의 관계 및 역할, CSS의 발전과 역사, CSS 모듈화와 표준화 과정을 함께 소개합니다.",
  keyword:
    "style, css, Cascading Style Sheets, css란, CSS를 사용하는 이유, CSS의 발전과 역사, CSS 모듈, CSS 표준",
};

function CssIntroPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          CSS(또는 Cascading Style Sheets)는 웹 페이지의 디자인과 스타일을
          정의하는 언어입니다.
          <br />
          CSS를 사용하여 웹 페이지의 디자인과 레이아웃을 조정하는 것은 웹
          개발에서 중요한 부분 중 하나이며, HTML 구조에 CSS를 입힘으로써 웹
          페이지가 더욱 시각적으로 매력적이고 사용자 친화적인 디자인을 갖출 수
          있습니다.
        </p>
        <p className="mt_s">
          CSS는 웹 페이지의 &apos;옷&apos;이라고 할 수 있습니다.
          <br />
          html 구조에 스타일을 입혀 시각적인 효과를 부여하고, 여러 HTML 요소들의
          레이아웃, 색상, 글꼴, 간격 등을 설정하여 사용자에게 더 나은 시각적
          경험을 제공합니다.
        </p>
        <p className="mt_s">
          HTML은 웹 페이지의 기본적인 구조를 정의하고,
          <br />
          <b className="t_black">
            CSS(Cascading Style Sheets)는 이를 꾸미고 스타일링하며
          </b>
          ,<br />
          JavaScript는 동적인 기능을 추가하여 웹 페이지를 보다 생동감 있고
          상호작용적으로 만듭니다.
        </p>
      </blockquote>

      <section className="mt_xxl indent">
        <h2 className="ml_mn t_blue">CSS를 사용하는 이유</h2>
        <ol className="ol_lst info_lst mt_l">
          <li>
            <strong>디자인 및 스타일 정의</strong>
            <p>
              CSS를 사용하면 웹 페이지의 모양과 느낌을 완전히 커스터마이징할 수
              있습니다.
              <br />
              색상, 글꼴, 크기, 간격 등과 같은 다양한 스타일 속성을 사용하여 웹
              페이지의 요소들을 디자인할 수 있습니다.
            </p>
          </li>
          <li>
            <strong>레이아웃 제어</strong>
            <p>
              CSS를 사용하여 웹 페이지의 레이아웃을 조정할 수 있습니다.
              <br />
              플렉스박스, 그리드, 포지셔닝 등의 기술을 사용하여 요소의 배치와
              위치를 제어할 수 있습니다. 웹 페이지의 레이아웃을 유연하게
              조정하고 다양한 디바이스 및 화면 크기에 대응할 수 있습니다.
            </p>
          </li>
          <li>
            <strong>일관성 유지</strong>
            <p>
              CSS를 사용하면 웹 사이트의 일관된 디자인을 유지할 수 있습니다.
              <br />한 번 정의된 스타일을 여러 요소에 적용하여 일관된 모양과
              느낌을 유지할 수 있습니다. 이를 통해 사용자들은 웹 사이트를 더
              쉽게 이해하고 탐색할 수 있습니다.
            </p>
          </li>
          <li>
            <strong>속도와 성능</strong>
            <p>
              CSS를 사용하면 웹 페이지의 로딩 시간을 줄일 수 있습니다.
              <br />
              HTML에 비해 파일 크기가 작고 다운로드 시간이 적게 소요되므로 웹
              페이지의 성능이 향상됩니다.
            </p>
          </li>
          <li>
            <strong>유지보수성</strong>
            <p>
              CSS를 사용하면 스타일을 따로 분리하여 관리할 수 있습니다.
              <br />
              이를 통해 웹 사이트의 디자인을 변경하거나 업데이트할 때 스타일
              시트만 수정하면 되므로 유지보수가 용이해집니다. 또한 CSS를
              사용하여 스타일 시트를 모듈화하고 재사용함으로써 코드를 조직화하고
              유지보수성을 높일 수 있습니다.
            </p>
          </li>
          <li>
            <strong>반응형 웹 디자인</strong>
            <p>
              CSS를 사용하여 반응형 웹 디자인을 구현할 수 있습니다.
              <br />
              미디어 쿼리를 사용하여 화면 크기에 따라 스타일을 동적으로 조정할
              수 있으며, 그 결과로 웹 페이지가 다양한 디바이스에서 일관된 사용자
              경험을 제공할 수 있습니다.
            </p>
          </li>
          <li>
            <strong>시맨틱 스타일링</strong>
            <p>
              CSS를 사용하여 HTML의 시맨틱 요소를 스타일링할 수 있습니다.
              <br />
              시맨틱 요소는 콘텐츠의 의미를 명확히 하고 웹 페이지의 구조를
              이해하기 쉽게 만들며 검색 엔진 최적화(SEO)를 개선하고 웹 페이지의
              접근성을 향상시킬 수 있습니다.
            </p>
          </li>
        </ol>
      </section>

      <section className="mt_xxl indent">
        <h2 className="ml_mn t_blue">CSS의 발전과 역사</h2>
        <p className="mt_m">
          CSS의 발전과 역사는 웹 기술의 발전과 밀접하게 연관되어 있습니다.
          <br />
          CSS는 웹 디자인 및 개발에서 중요한 부분을 차지하고 있으며, 지속적인
          발전을 통해 웹 페이지의 디자인과 사용자 경험을 지속적으로 향상시키고
          있습니다.
        </p>
        <ol className="ol_lst info_lst mt_ms">
          <li>
            <strong>CSS의 등장과 초기 단계</strong>
            <p>
              CSS를 사용하기 전에는 HTML의 <code>&lt;font&gt;</code>나{" "}
              <code>&lt;center&gt;</code>와 같은 태그를 사용하여 스타일을
              적용하여 유지보수가 어려웠고 구조와 디자인의 분리가 되지
              않았습니다.
            </p>
            <p>
              <b className="t_blue">
                CSS는 HTML의 디자인과 스타일을 분리하기 위한 목적으로
                개발되었습니다.
              </b>
              <br />
              HTML은 웹 페이지의 구조를 정의하는데 중점을 두었고, CSS는 이
              구조를 꾸며주고 스타일을 부여하는 역할을 하였습니다. 이는 웹
              페이지의 구조와 스타일을 분리함으로써 유지보수성을 높이고 코드를
              더욱 깔끔하게 만들기 위한 노력의 일환으로 탄생하였습니다.
            </p>
          </li>
          <li>
            <strong>CSS1</strong>
            <p>
              CSS1은 1996년에 W3C에 의해 공식 권고안으로 발표되었습니다. 이 초기
              버전은 HTML 문서에 CSS 스타일을 적용하는 방법을 정의했으며,
              기본적인 스타일링 기능을 제공했습니다.
              <br />
              그러나 초기 버전의 CSS는 브라우저 호환성 문제와 구현상의 한계로
              인해 제약이 많았습니다.
            </p>
          </li>
          <li>
            <strong>CSS2</strong>
            <p>
              CSS2는 1998년에 발표되었습니다. 이 버전에서는 CSS1의 한계를
              극복하고 다양한 스타일링 기능을 추가했습니다. 박스 모델, 포지셔닝,
              텍스트 및 배경 속성 등이 도입되었고, 다양한 미디어 타입 및 프린트
              스타일링을 지원하였습니다.
              <br />
              그러나 이 역시 브라우저 호환성 문제가 여전히 존재했습니다.
            </p>
          </li>
          <li>
            <strong>브라우저 호환성 문제</strong>
            <p>
              2000년대에 들어서면서 브라우저의 다양성이 높아졌고, CSS의 발전
              과정에서 가장 큰 문제는 브라우저 간의 호환성 문제였습니다.
              <br />각 브라우저 제조사들이 자체적으로 CSS 해석 엔진을 개발하여
              독자적인 방식으로 CSS를 해석했습니다. 이로 인해 동일한 CSS 코드가
              다른 브라우저에서는 다르게 표현되는 문제가 발생했습니다.
            </p>
          </li>
          <li>
            <strong>CSS3와 모듈화</strong>
            <p>
              CSS3는 모듈화된 방식으로 개발되었습니다. 이는 CSS를 작은 모듈로
              분할하여 기능을 개별적으로 업데이트할 수 있도록 했습니다.
              <br />
              CSS3에서는 그래디언트, 그림자, 변형, 애니메이션 등 다양한 새로운
              기능이 추가되었으며, 반응형 웹 디자인을 위한 미디어 쿼리도
              도입되었습니다.
            </p>
          </li>
          <li>
            <strong>Flexbox 및 Grid</strong>
            <p>
              CSS3에서는 Flexbox와 Grid와 같은 레이아웃 관련 기능이
              도입되었습니다.
              <br />
              이러한 기능은 복잡한 레이아웃을 쉽게 구현할 수 있게 해주었습니다.
            </p>
          </li>
          <li>
            <strong>CSS 프레임워크 및 전처리기</strong>
            <p>
              최근에는 CSS 프레임워크와 CSS 전처리기의 등장으로 CSS의 개발과
              관리가 더욱 효율적으로 이루어지게 되었습니다. 이를 통해 개발자는
              더욱 간편하게 반응형 웹 페이지를 구축할 수 있게 되었습니다.
              <br />
              CSS 프레임워크는 일반적인 디자인 패턴을 미리 구현해 놓은 것으로,
              Bootstrap, Foundation 등이 대표적이며, CSS 전처리기는 CSS의 기능을
              확장하고 코드 작성을 보다 효율적으로 만들어주는 Sass, Less와 같은
              도구를 말합니다.
            </p>
          </li>
        </ol>
      </section>

      <section className="mt_xxl indent">
        <h2 className="ml_mn t_blue">CSS 모듈과 표준화 과정</h2>
        <p className="mt_m">
          CSS 모듈과 표준화 과정은 CSS의 발전과 웹 기술의 표준화를 위해 중요한
          역할을 하며, 웹 개발자들이 안정적이고 효율적으로 CSS를 사용할 수
          있도록 지원합니다.
        </p>

        <article className="indent mt_ml">
          <h3 className="ml_mn">CSS 모듈이란?</h3>
          <ul className="dot_lst mt_ms">
            <li>
              CSS 모듈은 특정 기능이나 주제에 대한 CSS 스타일을 모아놓은
              것입니다. 각 모듈은 CSS의 특정 부분을 다루며, 예를 들어 그리드
              시스템, 텍스트 스타일링, 애니메이션 등이 있습니다.
            </li>
            <li>
              각 CSS 모듈은 W3C(World Wide Web consotium)에서 정의하고, 개별적으로 버전
              관리 및 업데이트됩니다.
            </li>
            <li>
              CSS 모듈은 모듈화된 디자인을 재사용하고, 개발자들이 필요한 기능을
              선택적으로 사용할 수 있도록 합니다.
            </li>
          </ul>
        </article>

        <article className="indent mt_ml">
          <h3 className="ml_mn" data-conlist-h4="true">
            표준화 과정
          </h3>

          <div className="mt_ms indent">
            <h4 className="t_blue ml_mn">
              {" "}
              CSS의 초기 단계 (1996년 - 2000년대 초반)
            </h4>
            <ul className="dot_lst mt_s">
              <li>
                CSS는 초기에는 하나의 큰 명세로 발표되었으며, 여러 기능이 하나의
                명세에 포함되어 있었습니다.
              </li>
              <li>
                이 당시에는 CSS가 표준화되기 전에 다양한 브라우저에서 서로 다른
                방식으로 해석되어 호환성 문제가 심각했습니다.
              </li>
            </ul>
          </div>

          <div className="mt_ms indent">
            <h4 className="t_blue ml_mn">
              CSS의 모듈화와 표준화 (2000년대 중반 이후)
            </h4>
            <ul className="dot_lst mt_s">
              <li>
                2000년대 중반부터 CSS는 모듈화된 방식으로 개발되기 시작했습니다.
                각 모듈은 특정 기능이나 주제에 대한 CSS 스타일을 정의하고,
                개별적으로 버전 관리되었습니다.
              </li>
              <li>
                이러한 모듈화된 접근 방식은 CSS의 발전을 가속화하고, 특정 기능을
                보다 효율적으로 개발하고 관리할 수 있게 했습니다.
              </li>
              <li>
                동시에 W3C는 CSS를 공식적으로 표준화하기 위한 프로세스를
                정립했습니다. 이는 CSS의 버전 간 호환성을 개선하고, 브라우저
                제조사와 웹 개발자 간의 협력을 촉진하기 위한 것이었습니다.
              </li>
            </ul>
          </div>

          <div className="mt_ms indent">
            <h4 className="t_blue ml_mn">CSS 표준화 프로세스 (현재)</h4>
            <p className="mt_s">
              CSS는 W3C에서 정의하는 표준화 기구에 따라 개발되고 있습니다.
              <br />
              아래에 나열된 CSS 표준화 프로세스는 6단계로 구성되어 있지만,{" "}
              <b className="t_blue">주로 4단계로 진행</b>
              됩니다.
            </p>
            <ol className="ol_lst info_lst mt_s">
              <li className="font-14-important-before">
                <strong className="font-14-important t_666">
                  제안 - Proposal
                </strong>
                <p>
                  CSS의 새로운 기능 또는 수정 사항은 개발자나 웹 표준 전문가들에
                  의해 제안됩니다.
                  <br />
                  이러한 제안은 W3C의 CSS Working Group이나 다른 관련된 기구를
                  통해 발표될 수 있습니다.
                </p>
              </li>
              <li className="font-14-important-before t_blue_before weight-600-before">
                <strong className="font-14-important t_blue">
                  작업 초안 - Working Draft (WD)
                </strong>
                <p>
                  제안된 기능에 대한 초안이 작성됩니다.
                  <br />이 초안은 특정 기능이나 속성이 어떻게 동작해야 하는지,
                  구문은 어떻게 되어야 하는지 등을 설명합니다.
                </p>
              </li>
              <li className="font-14-important-before">
                <strong className="font-14-important t_666">
                  커뮤니티 피드백 - Community Feedback
                </strong>
                <p>
                  작업 초안이 공개되면 개발자 및 웹 커뮤니티로부터 피드백을
                  수집합니다.
                  <br />이 피드백은 제안된 기능의 유용성, 구현 가능성, 호환성
                  등에 대한 의견을 반영합니다.
                </p>
              </li>
              <li className="font-14-important-before t_blue_before weight-600-before">
                <strong className="font-14-important t_blue">
                  후보 추천 - Candidate Recommendation (CR)
                </strong>
                <p>
                  작업 초안에 대한 피드백을 반영하여 표준의 후보가 될 만한
                  수준에 도달하면, 후보 추천 단계로 진입합니다.
                  <br />이 단계에서는 기술적인 세부 사항을 확정하고, 다양한
                  브라우저 및 플랫폼에서의 구현 가능성을 확인합니다.
                </p>
              </li>
              <li className="font-14-important-before t_blue_before weight-600-before">
                <strong className="font-14-important t_blue">
                  제안 추천 - Proposed Recommendation (PR)
                </strong>
                <p>
                  후보 추천 단계에서 충분한 검증을 거친 후에는 제안 추천 단계로
                  진입합니다.
                  <br />이 단계에서는 표준화된 텍스트 문서로서 제안이 완성되고,
                  최종적으로 표준화 프로세스를 완료하기 전에 마지막 검토가
                  이루어집니다.
                </p>
              </li>
              <li className="font-14-important-before t_blue_before weight-600-before">
                <strong className="font-14-important t_blue">
                  권고안 - Recommendation (REC)
                </strong>
                <p>
                  최종적으로 표준으로 승격된 단계입니다.
                  <br />
                  제안 추천 단계에서 마지막 검토를 거친 후에는 표준화된 권고안이
                  발표됩니다. 이 권고안은 CSS의 공식적인 표준으로서 채택되며,
                  CSS의 향후 버전이 개발될 때까지 기본적인 기능을 제공합니다.
                </p>
              </li>
            </ol>
            <p className="mt_ms">
              CSS 모듈 역시 다양한 브라우저와 디바이스에서 사용자 경험을
              일관되게 제공하기 위해 표준화 과정을 거쳐 최종적으로 표준으로
              제정됩니다.
            </p>
          </div>
        </article>

        <figure className="img_figure indent mt_l">
          <img
            src={IMG.CSS + "/cssStart/uxkm_CSS_Modules_and_Snapshots.svg"}
            alt="모듈과 표준화 과정(Modules and the standardization process)"
            style={{ width: "100%", maxWidth: 900 }}
          />
          <figcaption className="reference">[모듈과 표준화 과정]</figcaption>
        </figure>
      </section>

      <figure className="img_figure indent mt_l">
        <img src={IMG.CSS + "/01_css_01.png"} alt="CSS란?" />
        <figcaption className="reference">CSS란?</figcaption>
      </figure>
    </>
  );
}

export default CssIntroPage;
