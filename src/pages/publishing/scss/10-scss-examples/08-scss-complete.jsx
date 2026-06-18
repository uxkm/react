import { usePageMeta } from "@/components/common/PageMeta";
import { IMG } from "@/config/path";

const PAGE_LAYOUT = {
  mainClass: "scss_start",
  type: "publishing",
  info: false,
  note: false,
  sideMenu: true,
  reference: true,
  contentList: true,
  depth3Last: false,
  bottomEditor: false,
};

const PAGE_DATA = {
  title: "퍼블리싱 가이드 구성 및 마무리",
  description:
    "지금까지 배운 모든 요소(토큰, 레이아웃, 컴포넌트, 테마)를 하나의 퍼블리싱 가이드 문서로 구성하는 방법을 알아봅니다. 스타일 가이드 문서 구조와 컴포넌트 카탈로그 작성 방식을 보여줍니다.",
  keyword:
    "퍼블리싱 가이드, style guide, scss 종합 예제, 컴포넌트 카탈로그, 스타일 가이드 문서, scss 쇼케이스",
};

function ScssCompletePage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          이 페이지는{" "}
          <b>지금까지 배운 모든 요소를 하나의 퍼블리싱 가이드 문서로 통합</b>
          하는 종합 쇼케이스입니다.
          <br />
          스타일 가이드 문서 형태로 레이아웃, 컴포넌트, 폼, 테마 전환, 반응형이
          모두 포함된 컴포넌트 카탈로그를 구성합니다.
          <br />
          {
            '"실무에서 퍼블리싱 가이드를 이런 구조로 만든다"를 그대로 보여주며, 페이지 SCSS는 최소한만 존재하고 대부분은 토큰 + 컴포넌트 조합으로 완성됨을 확인할 수 있습니다.'
          }
        </p>
        <p className="mt_s">
          이 페이지에서는 퍼블리싱 가이드 문서 구성 예시, 컴포넌트 카탈로그 작성
          방법, 테마 전환, 반응형 동작을 상세히 알아봅니다.
        </p>
      </blockquote>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">퍼블리싱 가이드 개요</h2>
        <p className="mt_l">
          이 페이지에서는{" "}
          <b>퍼블리셔와 개발자가 사용할 수 있는 완전한 스타일 가이드 문서</b>를
          구성합니다.
          <br />
          Header, Main, Footer 레이아웃, 각 컴포넌트별 예시와 설명, 코드 예시,
          테마 전환 기능, 반응형 동작이 모두 포함됩니다.
          <br />
          중요한 점은 페이지 전용 SCSS는 거의 필요 없고, 대부분이 이미 만들어둔
          토큰과 컴포넌트의 조합으로 완성된다는 것입니다.
        </p>

        <dl className="dl_dot_lst mt_l">
          <dt className="font-16 mb_s">퍼블리싱 가이드 구성 요소</dt>
          <dd>
            <b>레이아웃</b>: App Layout (Header, Main, Footer)
          </dd>
          <dd>
            <b>컴포넌트 카탈로그</b>: Button, Card, Badge, Divider 등 각
            컴포넌트별 예시와 코드
          </dd>
          <dd>
            <b>폼 컴포넌트</b>: Input, Select, Checkbox, Radio 예시와 상태별
            설명
          </dd>
          <dd>
            <b>테마</b>: Light/Dark 테마 전환
          </dd>
          <dd>
            <b>반응형</b>: 모바일 ↔ 데스크톱 레이아웃 전환
          </dd>
        </dl>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">퍼블리싱 가이드 데모</h2>
        <p className="mt_l">
          지금까지 학습한 모든 컴포넌트와 레이아웃을 포함한 종합 퍼블리싱 가이드
          데모입니다.
          <br />
          <b>Light/Dark 테마 전환</b>과 <b>3단계 반응형 레이아웃</b>(모바일,
          태블릿, 데스크톱)이 모두 포함되어 있습니다.
        </p>
        <p className="mt_s t_blue">
          ※ 코드펜에서는 SCSS 파셜을 사용할 수 없으므로, 이 예시는 사용되는 모든
          토큰과 컴포넌트 스타일을 하나의 SCSS 파일에 모아 작성한 예제입니다.
        </p>
        <iframe
          className="codepen mt_m"
          height={650}
          style={{ width: "100%" }}
          scrolling="no"
          title="10.8. 퍼블리싱 가이드 데모"
          src="https://codepen.io/uxkm/embed/emzYyXX?default-tab=css%2Cresult&theme-id=dark"
          frameBorder="no"
          loading="lazy"
          allowTransparency
        >
          See the Pen{" "}
          <a href="https://codepen.io/uxkm/pen/emzYyXX">
            10.8. 퍼블리싱 가이드 데모
          </a>{" "}
          by UXKM (<a href="https://codepen.io/uxkm">@uxkm</a>) on{" "}
          <a href="https://codepen.io">CodePen</a>.
        </iframe>

        <dl className="dl_dot_lst mt_l">
          <dt className="mb_s">이 데모에는 다음이 모두 포함되어 있습니다:</dt>
          <dd>
            <b>10.1 디자인 토큰</b>: Color, Typography, Spacing, Radius 토큰
          </dd>
          <dd>
            <b>10.2 레이아웃 시스템</b>: App Layout (Header/Main/Footer), 반응형
            Grid
          </dd>
          <dd>
            <b>10.3 핵심 UI 컴포넌트</b>: Button, Card, Badge, Tag, Divider
          </dd>
          <dd>
            <b>10.4 폼 컴포넌트</b>: Input, Select, Checkbox, Radio,
            Helper/Error Message
          </dd>
          <dd>
            <b>10.5 테마 시스템</b>: Light/Dark 테마 전환 (로컬 스토리지 저장
            포함)
          </dd>
          <dd>
            <b>반응형</b>: 모바일(1열) → 태블릿(2열) → 데스크톱(3열) 자동 전환
          </dd>
        </dl>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">퍼블리싱 가이드 활용 방법</h2>
        <p className="mt_l">
          퍼블리싱 가이드를 실무에 활용할 때 고려해야 할 사항들입니다.
        </p>

        <dl className="dl_dot_lst mt_l">
          <dt className="font-16 mb_s">성능 최적화</dt>
          <dd>
            <b>필요한 컴포넌트만 import</b>: 사용하지 않는 컴포넌트는 import하지
            않기
          </dd>
          <dd>
            <b>CSS 분할</b>: 큰 프로젝트는 페이지별로 CSS 분할 고려
          </dd>
          <dd>
            <b>Critical CSS</b>: 초기 렌더링에 필요한 스타일만 먼저 로드
          </dd>
        </dl>

        <dl className="dl_dot_lst mt_l">
          <dt className="font-16 mb_s">유지보수</dt>
          <dd>
            <b>컴포넌트 독립성 유지</b>: 각 컴포넌트가 독립적으로 동작하도록
            설계
          </dd>
          <dd>
            <b>토큰 중심 관리</b>: 디자인 변경은 토큰에서만 수정
          </dd>
          <dd>
            <b>문서화</b>: 각 컴포넌트의 사용법과 변형을 문서화
          </dd>
        </dl>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">최종 정리: SCSS 학습을 마치며</h2>

        <dl className="dl_dot_lst mt_l">
          <dt className="font-16 mb_s">SCSS는 문법이 아니라 설계 도구</dt>
          <dd>
            SCSS의 진짜 가치는 문법을 아는 것이 아니라,{" "}
            <b>스타일을 체계적으로 설계하는 방법</b>을 아는 것입니다.
          </dd>
          <dd>
            변수, 믹스인, 중첩 같은 문법은 도구일 뿐이고, 핵심은 이 도구들을
            사용하여 <b>유지보수 가능하고 확장 가능한 스타일 시스템</b>을 만드는
            것입니다.
          </dd>
        </dl>

        <dl className="dl_dot_lst mt_l">
          <dt className="font-16 mb_s">디자인 시스템은 거창한 게 아니다</dt>
          <dd>
            디자인 시스템은 <b>지금까지 배운 것들을 정리한 결과물</b>입니다.
          </dd>
          <dd>
            tokens, base, layout, components를 체계적으로 정리한 것이 바로
            디자인 시스템입니다.
          </dd>
          <dd>
            특별한 도구나 방법론이 필요한 것이 아니라, 올바른 구조와 원칙을
            따르면 누구나 만들 수 있습니다.
          </dd>
        </dl>

        <dl className="dl_dot_lst mt_l">
          <dt className="font-16 mb_s">이 장을 끝내면</dt>
          <dd>
            이 장을 완료하면 &quot;SCSS를 배웠다&quot;가 아니라,{" "}
            <b>&quot;실무 구조가 머릿속에 그려지는 상태&quot;</b>가 됩니다.
          </dd>
          <dd>
            새로운 프로젝트를 시작할 때 어떻게 구조를 설계해야 할지, 어떤 파일을
            어디에 두어야 할지, 어떻게 확장해야 할지가 명확하게 보이게 됩니다.
            <br />
            <b className="t_blue">
              이것이 바로 실무에서 SCSS를 활용하는 능력입니다.
            </b>
          </dd>
        </dl>
      </section>

      <figure className="img_figure mt_l">
        <img src={IMG.SCSS + "/10_scss_08.png"} alt="퍼블리싱 가이드 데모" />
        <figcaption>퍼블리싱 가이드 데모</figcaption>
      </figure>
    </>
  );
}

export default ScssCompletePage;
