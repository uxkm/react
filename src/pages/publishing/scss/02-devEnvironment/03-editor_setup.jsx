import { usePageMeta } from "@/components/common/PageMeta";
import CodeBlock from "@/components/code/CodeBlock";
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
  title: "VS Code / WebStorm에서 SCSS 사용하기",
  description:
    "VS Code와 WebStorm에서 SCSS를 효율적으로 사용하기 위한 설정 방법을 상세히 안내합니다. 확장 프로그램 설치, 자동 컴파일 설정, 문법 하이라이팅, 자동 완성, 디버깅 방법 등을 단계별로 설명합니다.",
  keyword: "vscode scss, webstorm scss, scss 에디터 설정, scss 확장 프로그램, scss 자동 컴파일",
};

function EditorSetupPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          <strong>VS Code</strong>와 <strong>WebStorm</strong>은{" "}
          <b>SCSS 개발을 위한 강력한 기능</b>을 제공합니다.
          <br />
          적절한 확장 프로그램과 설정을 통해{" "}
          <b>문법 하이라이팅, 자동 완성, 자동 컴파일, 디버깅</b> 등을 활용할 수
          있습니다.
        </p>
        <p className="mt_s">
          이 페이지에서는 VS Code와 WebStorm에서 SCSS를 효율적으로 사용하기 위한
          설정 방법을 단계별로 상세히 안내합니다.
        </p>
      </blockquote>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">VS Code에서 SCSS 사용하기</h2>
        <p className="mt_l">
          VS Code는 <b>무료이면서도 강력한 기능</b>을 제공하는 에디터입니다.
          <br />
          SCSS 개발을 위한 확장 프로그램을 설치하고 설정하면,{" "}
          <b>프로페셔널한 개발 환경</b>을 구축할 수 있습니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">필수 확장 프로그램 설치</h3>
          <p className="mt_m">
            VS Code에서 SCSS를 효율적으로 사용하려면 다음 확장 프로그램들을
            설치하는 것을 권장합니다.
          </p>
          <div className="table_summary value_150 mt_m">
            <ul className="lst_hd">
              <li className="cell value">확장 프로그램</li>
              <li className="cell content">주요 기능</li>
              <li className="cell content">설치 방법</li>
            </ul>
            <ul className="lst_bd">
              <li>
                <p className="cell value">
                  <code className="t_darkgreen">Live Sass Compiler</code>
                </p>
                <p className="cell content" data-title="주요 기능">
                  SCSS 파일 저장 시 자동 컴파일, Live Reload, 여러 출력 형식
                  지원
                </p>
                <p className="cell content" data-title="설치 방법">
                  확장 프로그램에서 &quot;Live Sass Compiler&quot; 검색 후 설치
                </p>
              </li>
              <li>
                <p className="cell value">
                  <code className="t_darkgreen">Sass</code>
                </p>
                <p className="cell content" data-title="주요 기능">
                  SCSS/Sass 문법 하이라이팅, 자동 완성, 문법 검사
                </p>
                <p className="cell content" data-title="설치 방법">
                  확장 프로그램에서 &quot;Sass&quot; 검색 후 설치
                </p>
              </li>
              <li>
                <p className="cell value">
                  <code className="t_darkgreen">SCSS IntelliSense</code>
                </p>
                <p className="cell content" data-title="주요 기능">
                  변수, 믹스인, 함수 자동 완성, 정의로 이동, 사용 위치 찾기
                </p>
                <p className="cell content" data-title="설치 방법">
                  확장 프로그램에서 &quot;SCSS IntelliSense&quot; 검색 후 설치
                </p>
              </li>
            </ul>
          </div>
          <p className="mt_ms">
            이 확장 프로그램들을 설치하면{" "}
            <b>SCSS 개발에 필요한 대부분의 기능</b>을 사용할 수 있습니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">Live Sass Compiler 설정</h3>
          <p className="mt_m">
            <b>Live Sass Compiler</b>는 SCSS 파일을 자동으로 컴파일해주는 가장
            인기 있는 확장 프로그램입니다.
            <br />
            설치 후 설정을 통해 컴파일 옵션을 조정할 수 있습니다.
          </p>
          <div className="mt_ml indent">
            <h4 className="ml_mn">설정 파일 생성</h4>
            <p className="mt_ms">
              프로젝트 루트에{" "}
              <i className="filename t_blue">.vscode/settings.json</i> 파일을
              생성하여 Live Sass Compiler 설정을 추가합니다.
            </p>
            <CodeBlock
              title=".vscode/settings.json"
              language="json"
              className="mt_ms"
            >
              {`{
  "liveSassCompile.settings.formats": [
    {
      "format": "expanded",
      "extensionName": ".css",
      "savePath": "/css",
      "savePathSegmentKeys": null,
      "savePathReplaceSegmentsWith": null
    }
  ],
  "liveSassCompile.settings.excludeList": [
    "**/node_modules/**",
    "**/.vscode/**"
  ],
  "liveSassCompile.settings.generateMap": true,
  "liveSassCompile.settings.autoprefix": [
    "> 1%",
    "last 2 versions"
  ]
}`}
            </CodeBlock>
            <p className="mt_ms">
              이 설정으로 <i className="folder">scss</i> 폴더의 SCSS 파일이{" "}
              <i className="folder">css</i> 폴더로 컴파일되고, 소스맵과 자동
              접두사가 생성됩니다.
            </p>
          </div>
          <div className="mt_ml indent">
            <h4 className="ml_mn">사용 방법</h4>
            <p className="mt_ms">
              설정이 완료되면 VS Code 하단 상태바에{" "}
              <b>&quot;Watch Sass&quot;</b> 버튼이 나타납니다.
              <br />이 버튼을 클릭하면 자동 컴파일이 시작되고, SCSS 파일을
              저장할 때마다 자동으로 CSS로 변환됩니다.
            </p>
            <ul className="dot_lst mt_ms indent_small">
              <li>
                <b>Watch Sass 시작</b>: 상태바의 &quot;Watch Sass&quot; 클릭
                또는 <code className="t_blue">Ctrl+Shift+P</code> → &quot;Live
                Sass: Watch Sass&quot;
              </li>
              <li>
                <b>Watch Sass 중지</b>: 상태바의 &quot;Stop Watching Sass&quot;
                클릭 또는 <code className="t_blue">Ctrl+Shift+P</code> →
                &quot;Live Sass: Stop Watching Sass&quot;
              </li>
              <li>
                <b>단일 파일 컴파일</b>:{" "}
                <code className="t_blue">Ctrl+Shift+P</code> → &quot;Live Sass:
                Compile Sass - Without Watch Mode&quot;
              </li>
            </ul>
          </div>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">SCSS IntelliSense 설정</h3>
          <p className="mt_m">
            <b>SCSS IntelliSense</b>는 변수, 믹스인, 함수의 자동 완성과 정의로
            이동 기능을 제공합니다.
            <br />
            설정을 통해 더 정확한 자동 완성을 사용할 수 있습니다.
          </p>
          <CodeBlock
            title=".vscode/settings.json (IntelliSense 설정)"
            language="json"
            className="mt_m"
          >
            {`{
  "scss.lint.unknownAtRules": "ignore",
  "scss.completion.completePropertyWithSemicolon": true,
  "scss.completion.triggerPropertyValueCompletion": true
}`}
          </CodeBlock>
          <p className="mt_ms">
            이 설정으로 SCSS 문법에 맞는 자동 완성과 문법 검사가 활성화됩니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">파일 연결 설정</h3>
          <p className="mt_m">
            VS Code에서 <b>SCSS 파일과 컴파일된 CSS 파일을 연결</b>하면, 개발자
            도구에서 원본 SCSS 위치를 확인할 수 있습니다.
          </p>
          <CodeBlock
            title=".vscode/settings.json (파일 연결)"
            language="json"
            className="mt_m"
          >
            {`{
  "files.associations": {
    "*.scss": "scss",
    "*.sass": "sass"
  }
}`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">자동 포맷팅 설정</h3>
          <p className="mt_m">
            VS Code의 기본 포맷터를 사용하거나 <b>Prettier</b> 확장 프로그램을
            설치하여 SCSS 코드를 자동으로 정리할 수 있습니다.
          </p>
          <CodeBlock
            title=".vscode/settings.json (Prettier 설정)"
            language="json"
            className="mt_m"
          >
            {`{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[scss]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true
  }
}`}
          </CodeBlock>
          <p className="mt_ms">
            이 설정으로 파일 저장 시 자동으로 SCSS 코드가 포맷팅됩니다.
          </p>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">WebStorm에서 SCSS 사용하기</h2>
        <p className="mt_l">
          WebStorm은 <b>SCSS를 기본적으로 지원</b>하는 통합 개발
          환경(IDE)입니다.
          <br />
          별도의 확장 프로그램 설치 없이도{" "}
          <b>문법 하이라이팅, 자동 완성, 자동 컴파일</b> 등의 기능을 사용할 수
          있습니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">SCSS 파일 인식 설정</h3>
          <p className="mt_m">
            WebStorm은 기본적으로 SCSS 파일을 인식하지만,{" "}
            <b>프로젝트 설정에서 SCSS를 활성화</b>하면 더 정확한 기능을 사용할
            수 있습니다.
          </p>
          <ul className="dot_lst mt_ms indent_small">
            <li>
              <b>설정 열기</b>: <code className="t_blue">File</code> →{" "}
              <code className="t_blue">Settings</code> (Windows/Linux) 또는{" "}
              <code className="t_blue">WebStorm</code> →{" "}
              <code className="t_blue">Preferences</code> (Mac)
            </li>
            <li>
              <b>SCSS 활성화</b>:{" "}
              <code className="t_blue">Languages &amp; Frameworks</code> →{" "}
              <code className="t_blue">Stylesheets</code> →{" "}
              <code className="t_blue">Sass/SCSS</code>에서 SCSS 지원 활성화
            </li>
          </ul>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">File Watcher 설정 (자동 컴파일)</h3>
          <p className="mt_m">
            WebStorm의 <b>File Watcher</b> 기능을 사용하면 SCSS 파일 저장 시
            자동으로 CSS로 컴파일됩니다.
          </p>
          <div className="mt_ml indent">
            <h4 className="ml_mn">File Watcher 추가</h4>
            <ol className="ol_lst info_lst gap-column-important-ms mt_ms">
              <li className="t_black_before weight-600-before">
                <strong>설정 열기</strong>
                <p className="mt_s">
                  <code className="t_blue">File</code> →{" "}
                  <code className="t_blue">Settings</code> →{" "}
                  <code className="t_blue">Tools</code> →{" "}
                  <code className="t_blue">File Watchers</code>
                </p>
              </li>
              <li className="t_black_before weight-600-before">
                <strong>Watcher 추가</strong>
                <p className="mt_s">
                  <code className="t_blue">+</code> 버튼 클릭 →{" "}
                  <code className="t_blue">SCSS</code> 선택
                </p>
              </li>
              <li className="t_black_before weight-600-before">
                <strong>설정 구성</strong>
                <p className="mt_s">다음과 같이 설정합니다:</p>
                <ul className="dot_lst mt_sm indent_small">
                  <li>
                    <b>Program</b>: <code className="t_blue">sass</code> (Sass
                    CLI 경로 또는{" "}
                    <code className="t_blue">
                      $ProjectFileDir$/node_modules/.bin/sass
                    </code>
                    )
                  </li>
                  <li>
                    <b>Arguments</b>:{" "}
                    <code className="t_blue">
                      $FileName$:$FileParentDir$/css/$FileNameWithoutExtension$.css
                    </code>
                  </li>
                  <li>
                    <b>Output paths to refresh</b>:{" "}
                    <code className="t_blue">
                      $FileParentDir$/css/$FileNameWithoutExtension$.css
                    </code>
                  </li>
                </ul>
              </li>
            </ol>
            <p className="mt_m">
              이 설정으로 웹스톰에서 SCSS 파일을 저장할 때마다 자동으로 CSS
              파일이 생성됩니다.
            </p>
          </div>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">코드 스타일 설정</h3>
          <p className="mt_m">
            WebStorm에서 <b>SCSS 코드 스타일을 설정</b>하여 일관된 포맷을 유지할
            수 있습니다.
          </p>
          <ul className="dot_lst mt_ms indent_small">
            <li>
              <b>설정 경로</b>: <code className="t_blue">File</code> →{" "}
              <code className="t_blue">Settings</code> →{" "}
              <code className="t_blue">Editor</code> →{" "}
              <code className="t_blue">Code Style</code> →{" "}
              <code className="t_blue">SCSS</code>
            </li>
            <li>
              <b>설정 항목</b>: 들여쓰기, 중괄호 위치, 공백 규칙 등을 설정
            </li>
          </ul>
          <p className="mt_ms">
            설정한 스타일에 맞춰 <code className="t_blue">Ctrl+Alt+L</code>{" "}
            (Windows/Linux) 또는 <code className="t_blue">Cmd+Option+L</code>{" "}
            (Mac)로 코드를 자동 포맷팅할 수 있습니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">자동 완성 및 리팩토링</h3>
          <p className="mt_m">
            WebStorm은 <b>SCSS 변수, 믹스인, 함수의 자동 완성</b>을 기본적으로
            지원합니다.
            <br />
            또한 변수명 변경, 정의로 이동, 사용 위치 찾기 등의 리팩토링 기능도
            제공합니다.
          </p>
          <ul className="dot_lst mt_ms indent_small">
            <li>
              <b>자동 완성</b>: <code className="t_blue">Ctrl+Space</code>{" "}
              (Windows/Linux) 또는 <code className="t_blue">Ctrl+Space</code>{" "}
              (Mac)
            </li>
            <li>
              <b>정의로 이동</b>: <code className="t_blue">Ctrl+B</code>{" "}
              (Windows/Linux) 또는 <code className="t_blue">Cmd+B</code> (Mac)
            </li>
            <li>
              <b>사용 위치 찾기</b>: <code className="t_blue">Alt+F7</code>{" "}
              (Windows/Linux) 또는 <code className="t_blue">Option+F7</code>{" "}
              (Mac)
            </li>
            <li>
              <b>변수명 변경</b>: <code className="t_blue">Shift+F6</code>{" "}
              (Windows/Linux) 또는 <code className="t_blue">Shift+F6</code>{" "}
              (Mac)
            </li>
          </ul>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">디버깅 및 검증</h3>
          <p className="mt_m">
            WebStorm은 <b>SCSS 문법 오류를 실시간으로 검사</b>하고 표시합니다.
            <br />
            에러가 있는 줄에는 빨간 밑줄이 표시되며, 마우스를 올리면 에러
            메시지를 확인할 수 있습니다.
          </p>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">공통 팁 및 모범 사례</h2>
        <p className="mt_l">
          VS Code와 WebStorm 모두에서 유용한 <b>SCSS 개발 팁</b>을 정리합니다.
          <br />
          에디터별 설정을 따로 외우기보다는, 이 섹션의 내용을{" "}
          <b>공통 체크리스트</b>처럼 참고하면 어떤 환경에서도 비슷한 작업 흐름을
          유지할 수 있습니다.
        </p>

        <article className="mt_xl indent">
          <h3 className="ml_mn">소스맵 활용</h3>
          <p className="mt_m">
            소스맵을 활성화하면{" "}
            <b>브라우저 개발자 도구에서 원본 SCSS 파일의 위치</b>를 확인할 수
            있습니다.
            <br />
            디버깅 시 컴파일된 CSS가 아닌 원본 SCSS를 직접 수정할 수 있어
            효율적입니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">자동 저장 활용</h3>
          <p className="mt_m">
            에디터의 <b>자동 저장 기능을 활성화</b>하면 파일을 수정할 때마다
            자동으로 저장되어 컴파일이 즉시 실행됩니다.
            <br />
            VS Code: <code className="t_blue">File</code> →{" "}
            <code className="t_blue">Auto Save</code>
            <br />
            WebStorm: <code className="t_blue">File</code> →{" "}
            <code className="t_blue">Settings</code> →{" "}
            <code className="t_blue">Appearance &amp; Behavior</code> →{" "}
            <code className="t_blue">System Settings</code> →{" "}
            <code className="t_blue">Save files automatically</code>
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">코드 스니펫 활용</h3>
          <p className="mt_m">
            자주 사용하는 SCSS 패턴을 <b>코드 스니펫으로 등록</b>하면 빠르게
            코드를 작성할 수 있습니다.
          </p>
          <CodeBlock
            title="VS Code 스니펫 예시 (.vscode/scss.code-snippets)"
            language="json"
            className="mt_ms"
          >
            {`{
  "SCSS Mixin": {
    "prefix": "mixin",
    "body": [
      "@mixin \${1:name} {",
      "  $0",
      "}"
    ],
    "description": "SCSS Mixin"
  }
}`}
          </CodeBlock>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn">파일 탐색기 활용</h3>
          <p className="mt_m">
            에디터의 파일 탐색기에서 <b>SCSS 파일 구조를 시각적으로 확인</b>하면
            프로젝트 구조를 이해하기 쉽습니다.
            <br />
            파셜 파일(<code className="t_blue">_</code>로 시작)과 일반 파일을
            구분하여 관리할 수 있습니다.
          </p>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">문제 해결</h2>
        <p className="mt_l">
          VS Code와 WebStorm에서 SCSS 사용 시 자주 발생하는{" "}
          <b>문제와 해결 방법</b>을 정리합니다.
          <br />
          실제 작업에서는 &quot;설정이 안 된다&quot;, &quot;자동 컴파일이 안
          돈다&quot;와 같은 상황이 자주 발생하므로, 이 섹션을 통해{" "}
          <b>어디서부터 점검해야 하는지</b>를 미리 익혀두면 좋습니다.
        </p>

        <dl className="dl_dot_lst mt_l">
          <dt className="font-16 mb_s">자동 컴파일이 작동하지 않을 때</dt>
          <dd>
            <b>Watch 모드 활성화 확인</b>: VS Code의 &quot;Watch Sass&quot;
            버튼이 활성화되어 있는지 확인
          </dd>
          <dd>
            <b>설정 파일 확인</b>:{" "}
            <code className="t_blue">.vscode/settings.json</code> 또는
            WebStorm의 File Watcher 설정 확인
          </dd>
          <dd>
            <b>파일 경로 확인</b>: 설정한 경로와 실제 파일 경로가 일치하는지
            확인
          </dd>
          <dd>
            <b>에러 로그 확인</b>: 터미널이나 에디터의 출력 패널에서 에러 메시지
            확인
          </dd>
        </dl>

        <dl className="dl_dot_lst mt_l">
          <dt className="font-16 mb_s">자동 완성이 작동하지 않을 때</dt>
          <dd>
            <b>확장 프로그램 설치 확인</b>: SCSS IntelliSense 등 관련 확장
            프로그램이 설치되어 있는지 확인
          </dd>
          <dd>
            <b>파일 연결 확인</b>: 파일이 SCSS로 인식되고 있는지 확인 (파일
            확장자 확인)
          </dd>
          <dd>
            <b>에디터 재시작</b>: 확장 프로그램 설치 후 에디터를 재시작
          </dd>
        </dl>

        <dl className="dl_dot_lst mt_l">
          <dt className="font-16 mb_s">소스맵이 작동하지 않을 때</dt>
          <dd>
            <b>소스맵 생성 설정 확인</b>: 컴파일 설정에서 소스맵 생성이
            활성화되어 있는지 확인
          </dd>
          <dd>
            <b>브라우저 설정 확인</b>: 브라우저 개발자 도구에서 소스맵 사용이
            활성화되어 있는지 확인
          </dd>
          <dd>
            <b>파일 경로 확인</b>: 소스맵 파일(
            <code className="t_blue">.map</code>)이 CSS 파일과 같은 위치에
            생성되는지 확인
          </dd>
        </dl>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn t_blue">정리</h2>
        <p className="mt_l">
          VS Code와 WebStorm에서 SCSS를 사용하는 방법에 대해 알아본 내용을
          정리합니다.
          <br />
          어떤 에디터를 선택하더라도, <b>자동 컴파일·자동 완성·디버깅 환경</b>을
          한 번 잘 세팅해 두면 이후 SCSS 학습과 실무 적용 속도가 크게
          빨라집니다.
        </p>
        <ul className="dot_lst mt_m indent_small">
          <li>
            <b>VS Code</b>: 확장 프로그램(Live Sass Compiler, Sass, SCSS
            IntelliSense) 설치 및 설정으로 강력한 개발 환경 구축
          </li>
          <li>
            <b>WebStorm</b>: 기본 SCSS 지원, File Watcher 설정으로 자동 컴파일,
            리팩토링 기능 제공
          </li>
          <li>
            <b>공통 기능</b>: 문법 하이라이팅, 자동 완성, 자동 컴파일, 소스맵,
            디버깅 등
          </li>
          <li>
            <b>모범 사례</b>: 소스맵 활용, 자동 저장, 코드 스니펫, 일관된 코드
            스타일 유지
          </li>
        </ul>
        <p className="mt_m">
          다음 섹션에서는 <b>SCSS의 기본 문법</b>에 대해 자세히 배워봅니다.
        </p>
      </section>

      <figure className="img_figure mt_l">
        <img
          src={IMG.SCSS + "/02_scss_03.png"}
          alt="VS Code에서 SCSS 사용하기"
        />
        <figcaption>VS Code에서 SCSS 사용하기</figcaption>
      </figure>
    </>
  );
}

export default EditorSetupPage;
