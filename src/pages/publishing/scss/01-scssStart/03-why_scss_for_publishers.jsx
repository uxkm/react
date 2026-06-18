import { usePageMeta } from "@/components/common/PageMeta";
import CodeBlock from "@/components/code/CodeBlock";
import CodePenEmbed from "@/components/code/CodePenEmbed";
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
  title: "SCSS가 퍼블리셔에게 중요한 이유",
  description:
    "퍼블리셔가 SCSS(Sass)를 활용해야 하는 실무적인 이유를 정리합니다. 디자인 토큰 관리, 컴포넌트 구조화, 협업 효율, 유지보수 및 배포 안정성까지 SCSS 적용 시 얻을 수 있는 이점을 사례 중심으로 설명합니다.",
  keyword: "scss 필요성, 퍼블리셔 scss, 디자인 토큰, scss 협업",
};

function WhyScssForPublishersPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          퍼블리셔는 많은 컴포넌트와 잦은 디자인 변경을 다루므로,{" "}
          <b>스타일 자산을 안전하게 재사용·관리</b>할 수 있는 도구가 필요합니다.
          <br />
          <b>SCSS</b>는 변수·중첩·믹스인·파셜·모듈 시스템을 제공해{" "}
          <b>디자인 토큰 일원화, 컴포넌트 구조화, 협업 효율, 배포 안정성</b>을
          높입니다.
        </p>
      </blockquote>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">디자인 토큰 일원화</h2>
        <p className="mt_l">
          색상, 여백, 타이포그래피 값을{" "}
          <b className="t_blue">
            토큰 변수<sup className="sup">1)</sup>
          </b>
          로 관리하면 디자인 변경 시 <b>한 곳에서 전체를 제어</b>할 수 있습니다.
          <br />
          다른 페이지나 컴포넌트에 일관된 스타일을 유지하면서, 테마
          변경·다크모드 대응도 용이해집니다.
        </p>
        <p className="mt_ms ex_box">
          <span className="t_blue">
            1) <b>토큰 변수</b>란?
          </span>
          <br />
          디자인에서 반복해서 쓰이는 색상, 여백, 폰트 크기 같은 값을{" "}
          <code className="t_blue">$color-primary</code>,{" "}
          <code className="t_blue">$space</code>처럼 이름을 붙여 모아 둔
          변수입니다.
          <br />이 값을 한 번만 정의해 두면 여러 컴포넌트에서 함께 사용할 수
          있고, 나중에 디자인이 바뀌어도 토큰만 바꾸면 전체 스타일이 한 번에
          갱신됩니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">토큰 예시</h3>

          <CodePenEmbed
            className="mt_m"
            penId="emZaxGG"
            title="1.3. 토큰 예시"
            penTitle="1.3. 토큰 예시"
            height={500}
          />
          <p className="mt_ms">
            이렇게 선언한 토큰은{" "}
            <b>버튼, 카드, 모달 등 모든 컴포넌트에 공통 적용</b>
            할 수 있습니다.
            <br />
            컬러 값을 한 번 교체하면 토큰을 사용하는 모든 영역에서 즉시
            반영되므로, <b>브랜딩 변경이나 다크모드 전환</b>에도 대응하기
            쉽습니다.
          </p>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">컴포넌트 구조화와 재사용</h2>
        <p className="mt_l">
          중첩 문법과 파셜을 활용하면 <b>UI 구조를 코드로 그대로 표현</b>하고,
          공통 패턴을 모듈로 분리해 재사용성을 높일 수 있습니다.
          <br />
          스타일 변경 범위를 명확히 하여 <b>예상치 못한 전역 영향</b>을
          줄입니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">컴포넌트 예시</h3>

          <CodePenEmbed
            className="mt_m"
            penId="bNpyzvp"
            title="1.3. 컴포넌트 예시"
            penTitle="1.3. 컴포넌트 예시"
            height={550}
          />
          <p className="mt_ms">
            컴포넌트 내부 구조를 중첩으로 표현하면{" "}
            <b>제목, 본문, 링크를 한눈에 파악</b>할 수 있고,
            <br />
            스타일 변경 시 <b>해당 블록에만 영향</b>을 주어 전역 충돌을
            줄입니다. 파셜로 분리해 다른 페이지에서도 동일 카드 스타일을
            재사용할 수 있습니다.
          </p>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">협업 효율과 코드 리뷰</h2>
        <p className="mt_l">
          모듈 시스템(<code className="t_blue">@use</code>/
          <code className="t_blue">@forward</code>)과 네임스페이스를 적용하면{" "}
          <b>충돌을 줄이고 의존성</b>을 명확히 할 수 있습니다.
          <br />
          컴포넌트별 파일 구조와 일관된 네이밍을 유지하면{" "}
          <b>
            코드 리뷰와{" "}
            <b className="t_blue">
              온보딩<sup className="sup">1)</sup>
            </b>{" "}
            시간
          </b>
          이 짧아집니다.
        </p>
        <p className="mt_ms ex_box">
          <span className="t_blue">
            1) <b>온보딩</b>이란?
          </span>
          <br />
          새로 합류한 팀원이 프로젝트 구조와 규칙을 이해해 생산성을 내기까지
          거치는 적응 과정을 뜻합니다.
        </p>
        <article className="mt_xl indent">
          <h3 className="ml_mn">네임스페이스 예시</h3>
          <CodeBlock
            title="@use 기반 네임스페이스"
            language="css"
            className="mt_ml"
          >
            {`// _tokens.scss
$primary: #0a58ca;
$radius: 8px;

// _button.scss
@use "tokens" as t;

.btn {
  border-radius: t.$radius;
  background: t.$primary;
}`}
          </CodeBlock>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">유지보수와 배포 안정성</h2>
        <p className="mt_l">
          SCSS를 빌드 파이프라인(Gulp, Webpack 등)과 연결하면{" "}
          <b>린트·자동 정렬·최적화</b>를 적용해 품질을 높일 수 있습니다.
          <br />
          컴파일 결과를 검증하고, 디자인 토큰을 한 번에 교체하며,{" "}
          <b>릴리스마다 안정적으로 배포</b>할 수 있습니다.
        </p>
        <ul className="dot_lst mt_m">
          <li>
            <b>품질 관리</b>: 린트/포맷터로 일관된 코드 스타일 유지
          </li>
          <li>
            <b>빌드 자동화</b>: 압축·오토프리픽스 등 후처리 자동 적용
          </li>
          <li>
            <b>안정 배포</b>: 토큰/컴포넌트 단위 변경으로 영향 범위 예측
          </li>
        </ul>
      </section>

      <figure className="img_figure mt_l">
        <img
          src={IMG.SCSS + "/01_scss_03.png"}
          alt="왜 퍼블리셔에게 SCSS가 필요한가?"
        />
        <figcaption>왜 퍼블리셔에게 SCSS가 필요한가?</figcaption>
      </figure>
    </>
  );
}

export default WhyScssForPublishersPage;
