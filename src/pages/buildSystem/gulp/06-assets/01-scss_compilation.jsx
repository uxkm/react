import { useGulpPageMeta } from '@/hooks/useGulpPageMeta'
import { IMG } from '@/config/path'
import CodeBlock from '@/components/code/CodeBlock'
import TerminalBlock from '@/components/code/TerminalBlock'
import '@/assets/css/gulp_scss_compilation.scss'

function ScssCompilationPage() {
  useGulpPageMeta()

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
      		<h2 className="sound_only">요약 설명</h2>
      		<p>
      			편리하고 효율적인 CSS 코딩을 위해 Gulp에 <i className="t_black">Sass(SCSS)</i>를 세팅합니다.<br />
      			웹에서는 <i className="t_black">Sass(SCSS)</i>가 직접 동작하지 않으므로 웹에서 동작 가능한 표준의 CSS로 컴파일(Compile) 해야 합니다.<br />
      			<code>gulp-sass</code>와 관련 부가 패키지를 세팅하여 Gulp에서 편리하게 <i className="t_black">Sass(SCSS)</i>를 컴파일(Compile) 하는 방법을 알아봅니다.
      		</p>
      	</blockquote>

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">6.1.1. Sass(SCSS)란?</h2>
      		<p className="mt_m">
      			<b className="t_black">Sass(SCSS)</b>는 <b>CSS 문법과 매우 유사한 CSS 전처리기(CSS Preprocessor)</b>입니다.<br />
      			표준 CSS에는 없는 <b className="underline">선택자 중첩(Nesting)</b>, <b className="underline">조건문</b>, <b className="underline">반복문</b>, <b className="underline">다양한 단위(Unit)의 연산</b> 등의 기능을 제공하여
      			<b>더 편리하고 효율적으로 스타일을 작성</b>할 수 있습니다.
      		</p>
      		<p className="mt_ms">
      			주요 CSS 전처리기로는 <mark>Sass(SCSS)</mark>, <mark>Less</mark>, <mark>Stylus</mark>가 있습니다.<br />
      			이 중 <b><mark>Sass(SCSS)는 2006년부터 시작된 가장 오래된 CSS 확장 언어</mark>로, 높은 성숙도와 풍부한 커뮤니티를 보유</b>하고 있으며,
      			<b>Less와 Stylus의 장점을 모두 갖추고 있어 가장 보편적으로 사용</b>됩니다.<br />
      			따라서 본 커리큘럼에서는 <b>Sass(SCSS)로 세팅을 진행</b>합니다.
      		</p>
      		<p className="mt_ms">
      			CSS를 할 줄 안다면 <b>Sass(SCSS)에 적응하는 데 큰 무리가 없을 정도로 진입 장벽이 낮습니다.</b><br />
      			Sass(SCSS)를 완전히 활용하려면 충분한 학습이 필요하지만, <b>간단하게 중첩(Nesting)과 변수($, variable)만 사용해도
      			코드 작성 효율을 크게 향상</b>시킬 수 있습니다.
      		</p>
      		<p>
      			<b>Sass(SCSS) 문법 등 자세한 커리큘럼은 추후 업데이트될 예정입니다.</b>
      		</p>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">6.1.2. Sass 및 부가 패키지 설치</h2>
      		<p className="mt_m">
      			<b className="terminal">터미널</b>에서 아래 명령을 실행하여 <code>gulp-sass</code>와 <i className="under">Sass 컴파일(Compile)에 필요한 부가적인 패키지</i>를 설치합니다.
      		</p>
      		<TerminalBlock className="terminal_code_box mt_m">
      {`npm install gulp-sass -D            // Sass 컴파일 기본 패키지
      				npm install dart-sass -D            // Sass 컴파일러 및 최신 CSS 기능을 위한 패키지
      				npm install gulp-dependents -D      // 종속된 SCSS 파일(@import) 파일 감지
      				npm install autoprefixer@9.8.5 -D   // 고려할 브라우저 버전 설정
      				npm install gulp-postcss -D         // 고려할 브라우저 버전에 맞춰 컴파일
      				npm install gulp-sourcemaps -D      // 개발자 모드에서 SCSS 디버깅을 위한 패키지 설치
      				npm install gulp-minify-css -D      // CSS 압축
      				npm install gulp-rename -D          // 파일 이름 변경

      				// shorthand
      				npm i gulp-sass dart-sass gulp-dependents autoprefixer@9.8.5 gulp-postcss gulp-sourcemaps gulp-minify-css gulp-rename -D`}
      </TerminalBlock>

      		<article className="mt_ml indent">
      			<h3 className="ml_mn t_blue">gulp-sass / dart-sass</h3>
      			<p className="mt_s">
      				<code>gulp-sass</code>를 사용하려면 <mark><code>gulp-sass</code> 자체와 Sass 컴파일러를 모두 설치</mark>해야 합니다.
      			</p>
      			<p className="mt_s">
      				<code className="t_blue">dart-sass</code>는 <b>Dart 언어로 작성된 Sass 컴파일러</b>로, 현재 <b>Sass의 공식 권장 구현</b>입니다.<br />
      				원래 Sass는 Ruby로 작성되었지만, <code className="t_blue">dart-sass</code>는 <b>더 빠른 컴파일 속도</b>와 <b>더 자세하고 의미 있는 오류 메시지</b>를 제공합니다.<br />
      				또한 Ruby의 업데이트와 관련된 버전 충돌 문제 없이 <b>Sass의 최신 기능을 지속적으로 지원</b>하며,
      				<b>모든 주요 브라우저와 최신 CSS 기능을 안정적으로 컴파일</b>할 수 있습니다.
      			</p>
      		</article>
      		

      		<article className="mt_ml indent">
      			<h3 className="ml_mn t_blue">gulp-dependents</h3>
      			<p className="mt_s">
      				파일 간의 <b>종속성을 추적</b>하고 현재 스트림에 있는 파일에 종속되는 모든 파일을 추가하여
      				PCs, less, scss, sass의 <b>*증분 빌드</b>를 가능하게 하는 Gulp 플러그인입니다.
      			</p>
      			<p className="mt_ms ex_box">
      				<b className="t_blue">*증분 빌드</b>란?<br />
      				효율적인 빌드를 위해 <b>이전에 빌드된, 아직까지 최신 상태인 구성 요소는 다시 빌드하지 않게 해주는 방식</b>입니다.
      			</p>
      		</article>
      		

      		<article className="mt_ml indent">
      			<h3 className="ml_mn t_blue">gulp-postcss / autoprefixer</h3>
      			<p className="mt_s">
      				<code className="t_blue">PostCSS</code>는 Sass(SCSS), LESS 등의 CSS 전처리기와 반대로 <b>CSS 후처리기</b>입니다.<br />
      				<b>JavaScript 기반 플러그인을 사용하는 소프트웨어 개발 도구</b>로, 특정 플러그인을 조합하여 원하는 CSS 변환 과정을 정의할 수 있습니다.<br />
      			</p>
      			<p className="mt_s">
      				<code className="t_blue">Autoprefixer</code>는 <code className="t_blue">PostCSS</code>의 가장 유명한 플러그인 중 하나로,
      				<mark><b>벤더 접두사(Vendor Prefix. &apos;-webkit-&apos;, &apos;-moz-&apos;, &apos;-ms-&apos;, &apos;-o-&apos;)를 자동으로 추가해 주는 역할</b></mark>을 합니다.<br />
      				표준 CSS 코드를 작성하고 <code className="t_blue">Autoprefixer</code>를 사용하면,
      				<b>다양한 브라우저에 필요한 벤더 접두사를 자동으로 추가</b>하여 일관된 스타일을 유지할 수 있습니다.
      			</p>
      			
      <CodeBlock title="Autoprefixer" language="scss" className="uk_gist_code_box mt_m">
      {`/* 컴파일 전 Sass(SCSS) 코드 */
      					.box {
      						display: flex;
      						flex-direction: column;
      					}

      					/* 컴파일 후 Autoprefixer가 적용 된 CSS 코드 */
      					.box {
      						display: -webkit-box;
      						display: -ms-flexbox;
      						display: flex;
      						-webkit-box-orient: vertical;
      						-webkit-box-direction: normal;
      						   -ms-flex-direction: column;
      						       flex-direction: column;
      					}`}
      </CodeBlock>

      		</article>
      		

      		<article className="mt_ml indent">
      			<h3 className="ml_mn t_blue">gulp-sourcemaps</h3>
      			<p className="mt_s">
      				소스맵(<code className="t_blue">sourcemaps</code>)은 <b>컴파일된 코드와 원본 코드 간의 위치를 매핑해주는 파일</b>입니다.<br />
      				브라우저 개발자 도구에서 <b>원본 파일의 위치를 정확히 표시</b>하여 디버깅을 용이하게 해줍니다.
      			</p>
      			<p className="mt_s">
      				일반 CSS를 사용하면 개발자 도구를 통해 <b>해당 요소에 적용된 스타일을 쉽게 찾아 디버깅</b>할 수 있습니다.
      			</p>
      			<p className="mt_s">
      				하지만 Sass(SCSS)를 사용하면 HTML에 <b>원본 Sass(SCSS) 파일이 아닌 컴파일된 CSS 파일을 연결</b>하기 때문에
      				개발자 도구에서 <b>원본 파일의 위치를 확인하기 어렵습니다.</b><br />
      				(Sass(SCSS)는 웹에서 직접 동작하지 않으므로 컴파일 후 CSS 파일을 연결해야 합니다.)
      			</p>
      			
      <CodeBlock title="Sass(SCSS) 링크의 잘못된 예제" language="scss" className="uk_gist_code_box mt_m">
      {`/* Sass(SCSS) 직접 링크의 잘못된 예 (CSS가 적용되지 않습니다.) */
      					<link href="style.scss" rel="stylesheet" />

      					/* style.scss로 작업 후 컴파일 된 style.css로 연결해야 합니다. */
      					<link href="style.css" rel="stylesheet" />`}
      </CodeBlock>

      			<p className="mt_ms">
      				<code className="t_blue">gulp-sourcemaps</code>를 설정하면 <b>개발자 도구에서 원본 Sass(SCSS) 파일의 위치를 정확히 표시</b>하므로
      				위에서 언급한 불편함을 해소할 수 있습니다.
      			</p>
      			<figure className="img_figure mt_ms sourcemaps_figure">
      				<figure>
      					<img src={`${IMG.GULP}/gulp-sourcemaps_ex1.png`} alt="Sourcemaps이 적용되지 않은 경우" />
      					<figcaption className="t_red weight-bold">[Sourcemaps이 적용되지 않은 경우]</figcaption>
      				</figure>
      				<figure className="mt_l">
      					<img src={`${IMG.GULP}/gulp-sourcemaps_ex2.png`} alt="Sourcemaps이 적용된 경우" />
      					<figcaption className="t_blue weight-bold">[Sourcemaps이 적용된 경우]</figcaption>
      				</figure>
      			</figure>
      		</article>
      		

      		<article className="mt_ml indent">
      			<h3 className="ml_mn t_blue">gulp-minify-css / gulp-rename</h3>
      			<p className="mt_s">
      				<code className="t_blue">gulp-minify-css</code>는 <b>CSS를 압축하여 코드를 최소화</b>할 수 있습니다.<br />
      				줄바꿈과 띄어쓰기도 각각 <b>1byte</b>의 용량을 차지하므로,
      				짧은 CSS의 경우 용량 부담이 없지만 <b>코드가 많은 CSS일 경우 부담이 될 수 있습니다.</b><br />
      				<code className="t_blue">gulp-minify-css</code>를 이용해서 <b>줄바꿈과 띄어쓰기를 제거하여 용량을 줄이고</b>,
      				줄인 용량만큼 <b>파일 전송량도 줄일 수 있습니다.</b><br />
      			</p>
      			<p className="mt_s">
      				<code className="t_blue">gulp-minify-css</code>로 압축한 코드를<br />
      				<code className="t_blue">gulp-rename</code>을 이용하여 <b>파일 이름을 변경하여 새 파일을 생성</b>할 수 있습니다.<br />
      				압축된 새 파일의 이름에는 보통 <b>minify</b>의 줄임말인 <b className="t_black">min</b>을 붙입니다.<br />
      				따라서 컴파일 후 <i className="filename">파일명.css</i>, <i className="filename">파일명.min.css</i> 이렇게 <b>두 개의 파일이 생성</b>됩니다.
      			</p>
      			<p className="mt_s">
      				이 과정을 생략한다고 해서 표준에 어긋나거나 오류가 발생하는 것은 아닙니다.<br />
      				하지만 <b>사이트를 최적화하는 목적으로 조금의 용량이라도 줄일 수 있다면 의미가 있습니다.</b>
      			</p>
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">6.1.3. gulpfile.babel.js 세팅</h2>
      		<p className="mt_m">
      			<b className="filename">gulpfile.babel.js</b> 파일의 코드를 아래처럼 추가 및 수정합니다. (영역별 설명은 주석으로 표시합니다.)<br />
      			<span className="underline">
      				<i className="t_green">변경이 없는 부분</i>은 생략되며,
      				<i className="t_blue">추가된 부분</i>과 <i className="t_red">수정, 삭제된 부분</i>의 코드만 표시됩니다.
      			</span>
      			<br />
      			또한 <i className="t_green">변경 없음</i>,
      			<i className="t_blue">추가된 부분</i>,
      			<i className="t_red">수정, 삭제된 부분</i>을 표시하는 텍스트는 마우스로 드래그해도 선택되지 않으므로 코드를 편리하게 복사할 수 있습니다.
      			<br />
      			<mark>전체 코드는 에디터 오른쪽의 <code>[View full code]</code>를 클릭하여 확인할 수 있습니다.</mark>
      		</p>
      		
      <CodeBlock
        filename="gulpfile.babel.js"
        title="gulpfile.babel.js"
        language="javascript"
        className="mt_m"
        defaultOpen={false}
        linkedFullCodeId="assets-scss-gulpfile-full"
      >
      {`// import -----------------------------------------------------------
      				// ··· 기존 import 생략 ···
      				--add--
      				import gulpSass from "gulp-sass";
      				import dartSass from "dart-sass";
      				import sourcemaps from "gulp-sourcemaps";
      				import minificss from "gulp-minify-css";
      				import autoprefixer from "autoprefixer";
      				import postCss from "gulp-postcss";
      				import rename from "gulp-rename";
      				import dependents from "gulp-dependents";


      				// routes -----------------------------------------------------------
      				--no_change--


      				// etc --------------------------------------------------------------
      				--no_change--


      				// task -------------------------------------------------------------

      				// html task --no_change--

      				// css task --add--
      				const css = () => {
      					//scss 옵션 정의
      					const sass = gulpSass(dartSass);                        // ECMAScript 모듈(최신 Node.js 14 이상에서 지원됨)에서 사용하기 위해 선언
      					const options = {
      						scss : {
      							outputStyle: "expanded",                            // 컴파일 스타일: nested(default), expanded, compact, compressed
      							indentType: "space",                                // 들여쓰기 스타일: space(default), tab
      							indentWidth: 2,                                     // 들여쓰기 칸 수 (Default : 2)
      							precision: 8,                                       // 컴파일 된 CSS 의 소수점 자리수 (Type : Integer , Default : 5)
      							sourceComments: true,                               // 주석 제거 여부 (Default : false)
      							compiler: dartSass,                                 // 컴파일 도구
      						},
      						postcss: [ autoprefixer({
      							overrideBrowserslist: 'last 2 versions',            // 최신 브라우저 기준 하위 2개의 버전까지 컴파일
      						}) ]
      					};

      					return gulp.src(
      						path_src.css + '/**/*.scss',                          // 컴파일 대상 scss파일 찾기
      						{ since: gulp.lastRun(css) }                          // 변경된 파일에 대해서만 컴파일 진행
      					)
      					.pipe( plumber({errorHandler:onErrorHandler}) )         // 에러 발생 시 gulp 종료 방지 및 에러 핸들링
      					// *.css 생성
      					.pipe( dependents() )                                   // 현재 스트림에 있는 파일에 종속되는 모든 파일을 추가
      					.pipe( sourcemaps.init() )                              // 소스맵 작성
      					.pipe( sass(options.scss).on('error', sass.logError) )  // scss 옵션 적용 및 에러 발생 시 watch가 멈추지 않도록 logError 설정
      					.pipe( postCss(options.postcss) )                       // 하위 브라우저 고려
      					.pipe( sourcemaps.write() )                             // 소스맵 적용
      					.pipe( gulp.dest(path_dist.css) )                       // 컴파일 후 css파일이 생성될 목적지 설정
      					// *.min.css 생성
      					.pipe( minificss() )                                    // 컴파일된 css 압축
      					.pipe( rename({ suffix: '.min' }) )                     // 압축파일 *.min.css 생성
      					.pipe( sourcemaps.write() )                             // 소스맵 적용
      					.pipe( gulp.dest(path_dist.css) );                      // 컴파일 후 css파일이 생성될 목적지 설정
      				}

      				// clean task --no_change--

      				// webserver task --no_change--

      				// watch task --edit-- --edit_txt:sass watch 추가
      				const watch = () => {
      					// njk(html) watch  --no_change--
      					const html_watcher = gulp.watch(path_src.html + "/**/*", html);
      					file_management(html_watcher, path_src.html, path_dist.html);

      					// sass watch --add--
      					const scss_watcher = gulp.watch(path_src.css + "/**/*", css);
      					file_management(scss_watcher, path_src.css, path_dist.css);
      				}
      				// watch - 파일 감시 및 삭제를 위한 함수 --no_change--


      				// series & parallel (task 그룹화) ----------------------------------

      				// 순차적으로 실행되어야 하는 task 그룹 --no_change--

      				// 위 prepare 실행 완료 후 순차적으로 실행되어야 하는 task 그룹 --edit-- --edit_txt:css task 추가
      				const assets = gulp.series([ html, css ]);

      				// 동시에 여러 개의 task가 실행되어야 하는 그룹 (병렬로 실행) --no_change--


      				// export (gulp 실행 명령어) ----------------------------------------

      				// gulp build 실행 (prepare 실행 후 assets 실행) - build만 실행 --no_change--

      				// gulp dev 실행 (build 실행 후 live 실행) - build 실행 후 live 실행 --no_change--`}
      </CodeBlock>

      		
      <CodeBlock
        id="assets-scss-gulpfile-full"
        filename="gulpfile.babel.js - full code"
        title="gulpfile.babel.js - full code"
        language="javascript"
        className="full_code_layer"
        isFullCodeLayer
      >
      {`// import -----------------------------------------------------------
      				import gulp from "gulp";
      				import nunjucksRender from "gulp-nunjucks-render";
      				import plumber from "gulp-plumber";
      				import data from "gulp-data";
      				import cached from "gulp-cached";
      				import fs from "fs";
      				import del from "del";
      				import ws from "gulp-webserver";
      				import path from "path";
      				import gulpSass from "gulp-sass";
      				import dartSass from "dart-sass";
      				import sourcemaps from "gulp-sourcemaps";
      				import minificss from "gulp-minify-css";
      				import autoprefixer from "autoprefixer";
      				import postCss from "gulp-postcss";
      				import rename from "gulp-rename";
      				import dependents from "gulp-dependents";


      				// routes -----------------------------------------------------------
      				const src = './src';
      				const dist = './dist';
      				const ass = '/assets';

      				// src 폴더의 경로 설정
      				const path_src = {
      					html: src + '/html',
      					css: src + ass + '/css',
      					images: src + ass + '/images',
      					js: src + ass + '/js',
      				}

      				// 빌드될 dist 폴더의 경로 설정
      				const path_dist = {
      					html: dist,
      					css: dist + ass + '/css',
      					images: dist + ass + '/images',
      					js: dist + ass + '/js',
      				};


      				// etc --------------------------------------------------------------
      				const onErrorHandler = (error) => console.log(error);  // plumber option (에러 발생 시 에러 로그 출력)


      				// task -------------------------------------------------------------

      				// html task
      				const html = () => {
      					// 들여쓰기(Tab Indent) 조정을 위한 함수
      					const manageEnvironment = (environment) => {
      						environment.addFilter('tabIndent', (str, numOfIndents, firstLine) => {
      							str = str.replace(/^(?=.)/gm, new Array(numOfIndents + 1).join('\t'));
      							if(!firstLine) {
      								str = str.replace(/^\s+/, "");
      							}
      							return str;
      						});
      					};

      					// _gnb.json 파일 적용을 위한 변수
      					const gnbJson = JSON.parse(fs.readFileSync(path_src.html + '/_templates/_json/_gnb.json'));
      					const json_all = {...gnbJson};
      					const datafile = () => {
      						return json_all;
      					}

      					// njk 빌드
      					return gulp.src([
      						path_src.html + '/**/*',                           // 빌드할 njk 파일 경로
      						'!' + path_src.html + '/**/_*',                    // 경로 중 제외할 njk 파일(빌드 때 병합될 파일)
      						'!' + path_src.html + '/**/_*/**/*'                // 경로 중 제외할 폴더 및 폴더의 njk 파일(빌드 때 병합될 파일)
      					])
      					.pipe( plumber({errorHandler:onErrorHandler}) )      // 에러 발생 시 gulp 종료 방지 및 에러 핸들링
      					.pipe( data( datafile) )                             // _gnb.json 적용
      					.pipe( nunjucksRender({                              // njk 적용
      						envOptions: {                                      // njk 옵션 설정
      							autoescape: false,                               // njk 문법의 오류가 있더라도 진행
      						},
      						manageEnv: manageEnvironment,                      // 들여쓰기(Tab Indent) 함수 적용
      						path: [path_src.html],                             // html 폴더 전체 경로
      					}) )
      					.pipe( cached('html') )                              // 변경된 파일 캐시 저장
      					.pipe( gulp.dest(path_dist.html) )                   // 빌드 후 html 파일이 생성될 목적지 설정
      				}

      				// css task
      				const css = () => {
      					//scss 옵션 정의
      					const sass = gulpSass(dartSass);                        // ECMAScript 모듈(최신 Node.js 14 이상에서 지원됨)에서 사용하기 위해 선언
      					const options = {
      						scss : {
      							outputStyle: "expanded",                            // 컴파일 스타일: nested(default), expanded, compact, compressed
      							indentType: "space",                                // 들여쓰기 스타일: space(default), tab
      							indentWidth: 2,                                     // 들여쓰기 칸 수 (Default : 2)
      							precision: 8,                                       // 컴파일 된 CSS 의 소수점 자리수 (Type : Integer , Default : 5)
      							sourceComments: true,                               // 주석 제거 여부 (Default : false)
      							compiler: dartSass,                                 // 컴파일 도구
      						},
      						postcss: [ autoprefixer({
      							overrideBrowserslist: 'last 2 versions',            // 최신 브라우저 기준 하위 2개의 버전까지 컴파일
      						}) ]
      					};

      					return gulp.src(
      						path_src.css + '/**/*.scss',                          // 컴파일 대상 scss파일 찾기
      						{ since: gulp.lastRun(css) }                          // 변경된 파일에 대해서만 컴파일 진행
      					)
      					.pipe( plumber({errorHandler:onErrorHandler}) )         // 에러 발생 시 gulp 종료 방지 및 에러 핸들링
      					// *.css 생성
      					.pipe( dependents() )                                   // 현재 스트림에 있는 파일에 종속되는 모든 파일을 추가
      					.pipe( sourcemaps.init() )                              // 소스맵 작성
      					.pipe( sass(options.scss).on('error', sass.logError) )  // scss 옵션 적용 및 에러 발생 시 watch가 멈추지 않도록 logError 설정
      					.pipe( postCss(options.postcss) )                       // 하위 브라우저 고려
      					.pipe( sourcemaps.write() )                             // 소스맵 적용
      					.pipe( gulp.dest(path_dist.css) )                       // 컴파일 후 css파일이 생성될 목적지 설정
      					// *.min.css 생성
      					.pipe( minificss() )                                    // 컴파일된 css 압축
      					.pipe( rename({ suffix: '.min' }) )                     // 압축파일 *.min.css 생성
      					.pipe( sourcemaps.write() )                             // 소스맵 적용
      					.pipe( gulp.dest(path_dist.css) );                      // 컴파일 후 css파일이 생성될 목적지 설정
      				}

      				// clean task
      				const clean = () => del([dist]);                       // dist 폴더 삭제

      				// webserver task
      				const webserver = () => {
      					return gulp.src(dist)                                // webserver를 실행할 폴더 경로
      					.pipe(
      						ws({                                               // webserver 옵션 설정
      							// port: 8000,                                   // 기본 8000, 필요 시 변경 가능
      							livereload: true,                                // 작업 중 파일 저장 시 브라우저 자동 새로고침 (기본 false)
      							open: true                                       // Gulp 실행 시 자동으로 브라우저를 열고 localhost 서버 시작 (기본 false)
      						})
      					);
      				}

      				// watch task
      				const watch = () => {
      					// njk(html) watch
      					const html_watcher = gulp.watch(path_src.html + "/**/*", html);
      					file_management(html_watcher, path_src.html, path_dist.html);

      					// sass watch
      					const scss_watcher = gulp.watch(path_src.css + "/**/*", css);
      					file_management(scss_watcher, path_src.css, path_dist.css);
      				}
      				// watch - 파일 감시 및 삭제를 위한 함수
      				const file_management = (watcher_target, src_path, dist_path) => {
      					watcher_target.on('unlink', (filepath) => {
      						const filePathFromSrc = path.relative(path.resolve(src_path), filepath);
      						const extension_type = filePathFromSrc.split('.')[filePathFromSrc.split('.').length-1];

      						// scss 삭제 (min 파일까지 삭제)
      						if( extension_type === 'scss' ){
      							const destFilePath_css = path.resolve(dist_path, filePathFromSrc).replace('.scss','.css');
      							del.sync(destFilePath_css);
      							const destFilePath_minCss = path.resolve(dist_path, filePathFromSrc).replace('.scss','.min.css');
      							del.sync(destFilePath_minCss);
      						}

      						// js 삭제 (min 파일까지 삭제)
      						else if( extension_type === 'js' ){
      							const destFilePath_js = path.resolve(dist_path, filePathFromSrc);
      							del.sync(destFilePath_js);
      							const destFilePath_minJs = path.resolve(dist_path, filePathFromSrc).replace('.js','.min.js');
      							del.sync(destFilePath_minJs);
      						}

      						// njk(html) 삭제
      						else if( extension_type === 'njk' ){
      							const destFilePath_html = path.resolve(dist_path, filePathFromSrc).replace('.njk','.html');
      							console.log(destFilePath_html);
      							del.sync(destFilePath_html);
      						}

      						// 위 파일 외 삭제
      						else{
      							const destFilePath = path.resolve(dist_path, filePathFromSrc);
      							console.log(destFilePath);
      							del.sync(destFilePath);
      						}
      					});
      				}


      				// series & parallel (task 그룹화) ----------------------------------

      				// 순차적으로 실행되어야 하는 task 그룹
      				const prepare = gulp.series([ clean ]);

      				// 위 prepare 실행 완료 후 순차적으로 실행되어야 하는 task 그룹
      				const assets = gulp.series([ html, css ]);

      				// 동시에 여러 개의 task가 실행되어야 하는 그룹 (병렬로 실행)
      				const live = gulp.parallel([ webserver, watch ]);


      				// export (gulp 실행 명령어) ----------------------------------------

      				// gulp build 실행 (prepare 실행 후 assets 실행) - build만 실행
      				export const build = gulp.series([ prepare, assets ]);

      				// gulp dev 실행 (build 실행 후 live 실행) - build 실행 후 live 실행
      				export const dev = gulp.series([ build, live ]);`}
      </CodeBlock>

      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">6.1.4. gulp dev 실행</h2>
      		<p className="mt_m">
      			<i className="filename">gulpfile.babel.js</i> 파일을 세팅한 후 <b className="terminal">터미널</b>에서
      			아래 명령을 실행합니다.
      		</p>
      		<TerminalBlock className="terminal_code_box mt_m">
      {`gulp dev`}
      </TerminalBlock>
      		<p className="mt_ms">
      			Gulp가 실행되고 <b className="terminal">터미널</b>에 Gulp의 작업 내용이 출력됩니다.
      		</p>
      		<p className="mt_ms">
      			<img src={`${IMG.GULP}/gulp_css_run_dev_cmd1.png`} alt="gulp dev 실행시 터미널에 작업내용 출력" />
      		</p>
      		<p className="mt_ms">
      			세팅한 작업 순서에 따라 <code>html</code> 다음으로
      			<mark><code>css</code></mark>가 실행되는 것을 확인할 수 있습니다.<br />
      			간혹 <code>css task</code> 사이에 아래와 같이 browserslist를 업데이트하라는 메시지가 출력이 되는 경우가 있습니다.<br />
      		</p>
      		<p className="mt_ms">
      			<img src={`${IMG.GULP}/gulp_css_run_dev_cmd2.png`} alt="browserslist update message" />
      		</p>
      		<p className="mt_ms">
      			지속적으로 업데이트되는 브라우저에 대응하기 위한 것으로, 이 메시지가 노출되면 Gulp를 종료(Ctrl + C 후 y 입력)하고 업데이트를 진행합니다.<br />
      			<b className="terminal">터미널</b>에서 아래 명령을 실행합니다.
      		</p>
      		<TerminalBlock className="terminal_code_box mt_ms">
      {`npx update-browserslist-db@latest`}
      </TerminalBlock>
      		<p className="mt_ms">
      			자동으로 설치가 완료되지 않고 중간에 설치를 계속 진행할지 물어보는 단계가 있습니다. (아래 이미지 빨간 줄)<br />
      			<code>y</code> 클릭 후 설치를 계속합니다.
      		</p>
      		<p className="mt_ms">
      			<img src={`${IMG.GULP}/gulp_css_run_dev_cmd3.png`} alt="browserslist update procee" />
      		</p>
      		<p className="mt_ms">
      			위 이미지처럼 출력되면 browserslist가 성공적으로 업데이트되고, 업데이트 메시지가 당분간 나오지 않습니다.<br />
      			<b>browserslist는 지속적으로 업데이트되기 때문에 시간이 지나면 다시 나타납니다.</b>
      		</p>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">6.1.5. 빌드된 Sass(SCSS) 결과물 확인</h2>

      		<article className="mt_ml indent">
      			<h3 className="ml_mn">6.1.5.1. CSS가 적용된 브라우저 확인</h3>
      			<p className="mt_s">
      				미리 세팅한 SCSS가 CSS로 컴파일 되어 브라우저에 적용됩니다.
      			</p>
      			<figure className="img_figure mt_ms browser_figure">
      				<figure>
      					<img src={`${IMG.GULP}/gulp_css_run_dev_browser_before.png`} alt="CSS 적용 전" />
      					<figcaption className="t_red weight-bold">[CSS 적용 전]</figcaption>
      				</figure>
      				<figure>
      					<img src={`${IMG.GULP}/gulp_css_run_dev_browser_after.png`} alt="CSS 적용 후" />
      					<figcaption className="t_blue weight-bold">[CSS 적용 후]</figcaption>
      				</figure>
      			</figure>
      		</article>
      		

      		<article className="mt_ml indent">
      			<h3 className="ml_mn">6.1.5.2. dist &gt; assets 폴더와 css 파일 확인</h3>
      			<p className="mt_s">
      				<i className="folder">dist &gt; assets &gt; css</i> 폴더 안에 <i className="filename t_blue">style.css</i>와 <i className="filename t_blue">style.min.css</i>
      				파일이 컴파일되어 있는 것을 확인할 수 있습니다.<br />
      				<i className="folder">src</i> 폴더의 <i className="filename">_reset.scss</i>와 <i className="filename">_variable.scss</i>는
      				<i className="underline"><i className="filename t_blue">style.scss</i>에 병합</i>되어 컴파일되기 때문에
      				<i className="folder">dist</i> 폴더에는 존재하지 않습니다.
      			</p>
      			<p className="mt_ms">
      				<img src={`${IMG.GULP}/gulp_css_run_folder.png`} alt="빌드 후 dist &gt; assets &gt; css 폴더 확인" />
      			</p>
      		</article>
      		

      		<article className="mt_ml indent">
      			<h3 className="ml_mn">6.1.5.3. 컴파일된 css 코드 확인</h3>
      			<p className="mt_s">
      				병합된 <i className="filename">_reset.scss</i> 코드와 <mark>브라우저별 접두어가 적용된 CSS 결과물</mark>을 확인합니다.
      			</p>
      			
      <CodeBlock filename="style.css" title="style.css" language="css" className="mt_ms" defaultOpen={false}>
      {`html, body, div, span, applet, object, iframe,
      					h1, h2, h3, h4, h5, h6, p, blockquote, pre,
      					a, abbr, acronym, address, big, cite, code,
      					del, dfn, em, img, ins, kbd, q, s, samp,
      					small, strike, strong, sub, sup, tt, var,
      					b, u, i, center,
      					dl, dt, dd, ol, ul, li,
      					fieldset, form, label, legend,
      					table, caption, tbody, tfoot, thead, tr, th, td,
      					article, aside, canvas, details, embed,
      					figure, figcaption, footer, header, hgroup,
      					menu, nav, output, ruby, section, summary,
      					time, mark, audio, video {
      						margin: 0;
      						padding: 0;
      						border: 0;
      						font-size: 100%;
      						font: inherit;
      						vertical-align: baseline;
      					}

      					/* HTML5 display-role reset for older browsers */
      					article, aside, details, figcaption, figure,
      					footer, header, hgroup, menu, nav, section {
      						display: block;
      					}

      					body {
      						line-height: 1;
      					}

      					ol, ul {
      						list-style: none;
      					}

      					blockquote, q {
      						quotes: none;
      					}

      					blockquote:before, blockquote:after,
      					q:before, q:after {
      						content: "";
      						content: none;
      					}

      					table {
      						border-collapse: collapse;
      						border-spacing: 0;
      					}

      					html {
      						background-color: #ddd;
      					}

      					.wrap {
      						margin: 0 20px;
      					}
      					.wrap .header {
      						display: -webkit-box;
      						display: -ms-flexbox;
      						display: flex;
      						-webkit-box-align: center;
      								-ms-flex-align: center;
      										align-items: center;
      						-webkit-box-pack: justify;
      								-ms-flex-pack: justify;
      										justify-content: space-between;
      						padding: 15px;
      						background-color: #ccc;
      					}
      					.wrap .container h1 {
      						margin-top: 20px;
      						font-size: 26px;
      						font-weight: bolder;
      						color: #006be2;
      					}
      					.wrap .container .image_box {
      						overflow: hidden;
      						display: -webkit-box;
      						display: -ms-flexbox;
      						display: flex;
      						-webkit-box-orient: vertical;
      						-webkit-box-direction: normal;
      								-ms-flex-direction: column;
      										flex-direction: column;
      						margin-top: 20px;
      						padding: 10px;
      						background-color: #fff;
      						-webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      										box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      						border-radius: 10px;
      					}
      					.wrap .footer {
      						margin-top: 20px;
      					}
      					/*# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9yZXNldC5zY3NzIiwic3R5bGUuY3NzIiwic3R5bGUuc2NzcyIsIl92YXJpYWJsZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7O0VBYUMsU0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtBQ0NEOztBRENBLGdEQUFBO0FBQ0E7O0VBRUMsY0FBQTtBQ0VEOztBREFBO0VBQ0MsY0FBQTtBQ0dEOztBRERBO0VBQ0MsZ0JBQUE7QUNJRDs7QURGQTtFQUNDLFlBQUE7QUNLRDs7QURIQTs7RUFFQyxXQUFBO0VBQ0EsYUFBQTtBQ01EOztBREpBO0VBQ0MseUJBQUE7RUFDQSxpQkFBQTtBQ09EOztBQzVDQTtFQUNDLHNCQ0xVO0FGb0RYOztBQzVDQTtFQUNDLGNBQUE7QUQrQ0Q7QUM3Q0M7RUFDQyxvQkFBQTtFQUFBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO01BQUEsc0JBQUE7VUFBQSxtQkFBQTtFQUNBLHlCQUFBO01BQUEsc0JBQUE7VUFBQSw4QkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBRCtDRjtBQzNDRTtFQUNDLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0N2QlU7QUZvRWI7QUMzQ0U7RUFDQyxnQkFBQTtFQUNBLG9CQUFBO0VBQUEsb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtNQUFBLDBCQUFBO1VBQUEsc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLCtDQUFBO1VBQUEsdUNBQUE7RUFDQSxtQkFBQTtBRDZDSDtBQ3pDQztFQUNDLGdCQUFBO0FEMkNGIiwiZmlsZSI6InN0eWxlLmNzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcclxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxyXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXHJcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcclxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcclxuYiwgdSwgaSwgY2VudGVyLFxyXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxyXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcclxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXHJcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLFxyXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsXHJcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxyXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xyXG5cdG1hcmdpbjogMDtcclxuXHRwYWRkaW5nOiAwO1xyXG5cdGJvcmRlcjogMDtcclxuXHRmb250LXNpemU6IDEwMCU7XHJcblx0Zm9udDogaW5oZXJpdDtcclxuXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XHJcbn1cclxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xyXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLFxyXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbmJvZHkge1xyXG5cdGxpbmUtaGVpZ2h0OiAxO1xyXG59XHJcbm9sLCB1bCB7XHJcblx0bGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5ibG9ja3F1b3RlLCBxIHtcclxuXHRxdW90ZXM6IG5vbmU7XHJcbn1cclxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXHJcbnE6YmVmb3JlLCBxOmFmdGVyIHtcclxuXHRjb250ZW50OiAnJztcclxuXHRjb250ZW50OiBub25lO1xyXG59XHJcbnRhYmxlIHtcclxuXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG5cdGJvcmRlci1zcGFjaW5nOiAwO1xyXG59IiwiaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcbmIsIHUsIGksIGNlbnRlcixcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiAwO1xuICBmb250LXNpemU6IDEwMCU7XG4gIGZvbnQ6IGluaGVyaXQ7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cblxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5ib2R5IHtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG5cbm9sLCB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbmJsb2NrcXVvdGUsIHEge1xuICBxdW90ZXM6IG5vbmU7XG59XG5cbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBjb250ZW50OiBub25lO1xufVxuXG50YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xufVxuXG5odG1sIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbn1cblxuLndyYXAge1xuICBtYXJnaW46IDAgMjBweDtcbn1cbi53cmFwIC5oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG59XG4ud3JhcCAuY29udGFpbmVyIGgxIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgZm9udC1zaXplOiAyNnB4O1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBjb2xvcjogIzAwNmJlMjtcbn1cbi53cmFwIC5jb250YWluZXIgLmltYWdlX2JveCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi53cmFwIC5mb290ZXIge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufSIsIkBjaGFyc2V0IFwidXRmLThcIjtcclxuQGltcG9ydCAnX3Jlc2V0JztcclxuQGltcG9ydCAnX3ZhcmlhYmxlJztcclxuXHJcbmh0bWwge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICRiZy1jb2xvcjtcclxufVxyXG5cclxuLndyYXAge1xyXG5cdG1hcmdpbjowIDIwcHg7XHJcblxyXG5cdC5oZWFkZXIge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0XHRwYWRkaW5nOiAxNXB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2NjYztcclxuXHR9XHJcblxyXG5cdC5jb250YWluZXIge1xyXG5cdFx0aDEge1xyXG5cdFx0XHRtYXJnaW4tdG9wOiAyMHB4O1xyXG5cdFx0XHRmb250LXNpemU6IDI2cHg7XHJcblx0XHRcdGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcblx0XHRcdGNvbG9yOiAkZm9udC1jb2xvcjtcclxuXHRcdH1cclxuXHRcdC5pbWFnZV9ib3gge1xyXG5cdFx0XHRvdmVyZmxvdzpoaWRkZW47XHJcblx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRcdG1hcmdpbi10b3A6IDIwcHg7XHJcblx0XHRcdHBhZGRpbmc6IDEwcHg7XHJcblx0XHRcdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcblx0XHRcdGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwwLDAsLjEpO1xyXG5cdFx0XHRib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LmZvb3RlciB7XHJcblx0XHRtYXJnaW4tdG9wOiAyMHB4O1xyXG5cdH1cclxufSIsIiRiZy1jb2xvcjogI2RkZDtcclxuJGZvbnQtY29sb3I6ICMwMDZiZTI7Il19 */`}
      </CodeBlock>

      			
      <CodeBlock filename="style.min.css" title="style.min.css" language="css" className="mt_m" defaultOpen={false}>
      {`a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{margin:0;padding:0;border:0;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:"";content:none}table{border-collapse:collapse;border-spacing:0}html{background-color:#ddd}.wrap{margin:0 20px}.wrap .header{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding:15px;background-color:#ccc}.wrap .container h1{margin-top:20px;font-size:26px;font-weight:bolder;color:#006be2}.wrap .container .image_box{overflow:hidden;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin-top:20px;padding:10px;background-color:#fff;-webkit-box-shadow:0 0 10px rgba(0,0,0,.1);box-shadow:0 0 10px rgba(0,0,0,.1);border-radius:10px}.wrap .footer{margin-top:20px}
      					/*# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlLmNzcyIsIl9yZXNldC5zY3NzIiwic3R5bGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxFQUFHLEtBQU0sUUFBUyxRQ0ZsQixPRFNBLFFBQVMsTUFHRyxNQVBaLEVBSDJCLElBREEsV0NEM0IsS0RTZ0IsT0FEVCxRQUhFLE9BSHVCLEtBQU0sS0FJOUIsR0FIUixJQU13QixRQU5uQixJQ0hMLElETUEsR0FBSSxHQUhNLEdBTXVCLE1BRmpDLFNBR1EsV0FBUixPQUFvQixPQUhWLEtBTlYsR0FBSSxHQUFJLEdBQUksR0FBSSxHQUFJLEdBU1EsT0FBUSxPQ1ZwQyxLREtNLEVDTE4sT0RHYyxJQUFLLElBQUssSUFJUixNQUFPLE9BREgsR0FNZCxLQUROLEtBQU0sSUNYTixPRE1ZLEdBS0QsT0FWYSxFQUFlLElBRVYsRUFRVixLQVJhLEVBQUcsS0FRVixRQVB6QixNQ0pBLEtESU8sT0FBUSxPQUFRLElBT1csUUFQTixJQUk1QixNQUFnQixNQUE2QixHQUF0QixNQUFrQixHQUFYLE1BSTlCLEtBSnFDLEdBSkosR0FDOUIsRUFDYSxHQUZxQixJQVFsQixNQ0NsQixPQUFBLEVBQ0EsUUFBQSxFQUNBLE9BQUEsRUFFQSxLQUFBLFFBQ0EsZUFBQSxTQUdELFFBQUEsTUFBQSxRQUFBLFdBQUEsT0RFQSxPQUFRLE9BQVEsT0FBUSxLQUFNLElBQUssUUNBbEMsUUFBQSxNQUVELEtBQ0MsWUFBQSxFQUVELEdBQUEsR0FDQyxXQUFBLEtBRUQsV0FBQSxFQUNDLE9BQUEsS0FFRCxpQkFBQSxrQkRNVSxRQUFWLFNDSkMsUUFBQSxHQUNBLFFBQUEsS0FFRCxNQUNDLGdCQUFBLFNBQ0EsZUFBQSxFQ3JDRCxLQUNDLGlCQUFBLEtBR0QsTUFDQyxPQUFBLEVBQUEsS0FFQSxjQUNDLFFBQUEsWUFBQSxRQUFBLFlBQUEsUUFBQSxLQUNBLGtCQUFBLE9BQUEsZUFBQSxPQUFBLFlBQUEsT0FDQSxpQkFBQSxRQUFBLGNBQUEsUUFBQSxnQkFBQSxjQUNBLFFBQUEsS0FDQSxpQkFBQSxLQUlBLG9CQUNDLFdBQUEsS0FDQSxVQUFBLEtBQ0EsWUFBQSxPQUNBLE1BQUEsUUFFRCw0QkFDQyxTQUFBLE9BQ0EsUUFBQSxZQUFBLFFBQUEsWUFBQSxRQUFBLEtBQ0EsbUJBQUEsU0FBQSxzQkFBQSxPQUFBLG1CQUFBLE9BQUEsZUFBQSxPQUNBLFdBQUEsS0FDQSxRQUFBLEtBQ0EsaUJBQUEsS0FDQSxtQkFBQSxFQUFBLEVBQUEsS0FBQSxlQUFBLFdBQUEsRUFBQSxFQUFBLEtBQUEsZUFDQSxjQUFBLEtBSUYsY0FDQyxXQUFBIiwiZmlsZSI6InN0eWxlLm1pbi5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxuYiwgdSwgaSwgY2VudGVyLFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IDA7XG4gIGZvbnQtc2l6ZTogMTAwJTtcbiAgZm9udDogaW5oZXJpdDtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbmJvZHkge1xuICBsaW5lLWhlaWdodDogMTtcbn1cblxub2wsIHVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuYmxvY2txdW90ZSwgcSB7XG4gIHF1b3Rlczogbm9uZTtcbn1cblxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXG5xOmJlZm9yZSwgcTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGNvbnRlbnQ6IG5vbmU7XG59XG5cbnRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG59XG5cbmh0bWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xufVxuXG4ud3JhcCB7XG4gIG1hcmdpbjogMCAyMHB4O1xufVxuLndyYXAgLmhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbn1cbi53cmFwIC5jb250YWluZXIgaDEge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBmb250LXNpemU6IDI2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGNvbG9yOiAjMDA2YmUyO1xufVxuLndyYXAgLmNvbnRhaW5lciAuaW1hZ2VfYm94IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLndyYXAgLmZvb3RlciB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59IiwiaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxyXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXHJcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcclxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxyXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxyXG5iLCB1LCBpLCBjZW50ZXIsXHJcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXHJcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxyXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcclxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsXHJcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCxcclxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXHJcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XHJcblx0bWFyZ2luOiAwO1xyXG5cdHBhZGRpbmc6IDA7XHJcblx0Ym9yZGVyOiAwO1xyXG5cdGZvbnQtc2l6ZTogMTAwJTtcclxuXHRmb250OiBpbmhlcml0O1xyXG5cdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcclxufVxyXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXHJcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsXHJcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcbn1cclxuYm9keSB7XHJcblx0bGluZS1oZWlnaHQ6IDE7XHJcbn1cclxub2wsIHVsIHtcclxuXHRsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcbmJsb2NrcXVvdGUsIHEge1xyXG5cdHF1b3Rlczogbm9uZTtcclxufVxyXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcclxucTpiZWZvcmUsIHE6YWZ0ZXIge1xyXG5cdGNvbnRlbnQ6ICcnO1xyXG5cdGNvbnRlbnQ6IG5vbmU7XHJcbn1cclxudGFibGUge1xyXG5cdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcblx0Ym9yZGVyLXNwYWNpbmc6IDA7XHJcbn0iLCJAY2hhcnNldCBcInV0Zi04XCI7XHJcbkBpbXBvcnQgJ19yZXNldCc7XHJcbkBpbXBvcnQgJ192YXJpYWJsZSc7XHJcblxyXG5odG1sIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAkYmctY29sb3I7XHJcbn1cclxuXHJcbi53cmFwIHtcclxuXHRtYXJnaW46MCAyMHB4O1xyXG5cclxuXHQuaGVhZGVyIHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0cGFkZGluZzogMTVweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNjY2M7XHJcblx0fVxyXG5cclxuXHQuY29udGFpbmVyIHtcclxuXHRcdGgxIHtcclxuXHRcdFx0bWFyZ2luLXRvcDogMjBweDtcclxuXHRcdFx0Zm9udC1zaXplOiAyNnB4O1xyXG5cdFx0XHRmb250LXdlaWdodDogYm9sZGVyO1xyXG5cdFx0XHRjb2xvcjogJGZvbnQtY29sb3I7XHJcblx0XHR9XHJcblx0XHQuaW1hZ2VfYm94IHtcclxuXHRcdFx0b3ZlcmZsb3c6aGlkZGVuO1xyXG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0XHRtYXJnaW4tdG9wOiAyMHB4O1xyXG5cdFx0XHRwYWRkaW5nOiAxMHB4O1xyXG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cdFx0XHRib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsMCwwLC4xKTtcclxuXHRcdFx0Ym9yZGVyLXJhZGl1czogMTBweDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC5mb290ZXIge1xyXG5cdFx0bWFyZ2luLXRvcDogMjBweDtcclxuXHR9XHJcbn0iXX0= */`}
      </CodeBlock>

      		</article>
      		

      		<article className="mt_ml indent">
      			<h3 className="ml_mn">6.1.5.4. 컴파일 동작 확인</h3>
      			<p className="mt_s">
      				아래 동영상처럼 실시간으로 SCSS가 컴파일 되는지 확인해 보세요.
      			</p>
      			<div className="mt_ms youtube_box" style={{ '--padding-top': "56.25%" }}>
      				<iframe width="560" height="315" src="https://www.youtube.com/embed/Y1dGF01-lvQ?si=xTrWlN-KWSQLtxpi" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      			</div>
      		</article>
      		
      	</section>
      	

      	<figure className="img_figure mt_l">
      		<img src={`${IMG.GULP}/06_gulp_01.png`} alt="SCSS 컴파일 설정" />
      		<figcaption>
      			SCSS 컴파일 설정
      		</figcaption>
      	</figure>
    </>
  )
}

export default ScssCompilationPage
