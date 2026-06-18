import { useGulpPageMeta } from '@/hooks/useGulpPageMeta'
import { IMG } from '@/config/path'
import CodeBlock from '@/components/code/CodeBlock'
import TerminalBlock from '@/components/code/TerminalBlock'

function BabelSupportPage() {
  useGulpPageMeta()

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
      		<h2 className="sound_only">요약 설명</h2>
      		<p>
      			브라우저에는 다양한 종류와 버전이 있고, 다양한 자바스크립트 엔진이 있습니다.<br />
      			모든 브라우저 사용자가 최신 버전의 브라우저를 사용하는 건 불가능한 일이고, 모든 사용자에 대한 일괄 업데이트를 적용한다는 것도 불가능한 일입니다.<br />
      			그렇다고 구형 브라우저에서 구동이 되는 프로그램을 만들기 위해 지저분한 코드를 계속 쓸 수는 없는 일이며,
      			최신 기능을 포기하고 개발하는 것도 말이 안 되는 일입니다.
      		</p>
      		<p className="mt_s">
      			최신의 javascript 코드를 작성하면서도 최대한 많은 사람들이 사용하는 데에 불편함이 없도록 만들어주는게 바벨(Babel)입니다.
      		</p>
      	</blockquote>

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">6.2.1. Babel 이란?</h2>
      		<p className="mt_m">
      			<mark><code>Babel</code></mark>은
      			<i className="underline t_blue">
      				ECMAScript 2015(ES6) 이상의 JavaScript 코드를 이전 버전으로 변환해 주는 오픈 소스 트랜스파일러입니다.
      			</i>
      			최신 JavaScript 문법과 기능을 사용해 코드를 작성한 뒤,
      			<mark><code>Babel</code></mark>을 통해 구형 브라우저나 환경에서도 실행될 수 있도록 변환할 수 있습니다.<br />
      			<mark><code>Babel</code></mark>은 다양한 플러그인과 프리셋을 지원하여, 필요에 따라 변환 규칙을 자유롭게 설정할 수 있습니다.
      			주로 프론트엔드 개발에서 브라우저 호환성과 최신 문법 사용을 위해 널리 활용됩니다.
      		</p>
      		<ol className="ol_lst info_lst gap-column-important-ms mt_m">
      			<li className="t_black_before weight-600-before">
      				<strong>ES6+ 문법 변환</strong>
      				<p>
      					<mark><code>Babel</code></mark>은 ES6 이상의 JavaScript 문법을 ES5로 변환해 줍니다.
      					예를 들면, 화살표 함수, 클래스, <code>let</code> 및 <code>const</code> 키워드 등이 있습니다.
      				</p>
      			</li>
      			<li className="t_black_before weight-600-before">
      				<strong>모듈 변환</strong>
      				<p>
      					<mark><code>Babel</code></mark>은 모듈 시스템을 지원하지 않는 환경에서 사용되는
      					CommonJS나 AMD와 같은 모듈 시스템을 변환해 줍니다.
      				</p>
      			</li>
      			<li className="t_black_before weight-600-before">
      				<strong>환경 대응 (Polyfill)</strong>
      				<p>
      					<mark><code>Babel</code></mark>은 브라우저나 환경이 지원하지 않는 새로운 JavaScript 메서드나 함수를
      					사용할 수 있도록 폴리필(polyfill)을 제공합니다. 이를 통해 새로운 기능을 구현할 때 호환성 문제를 해결할 수 있습니다.
      				</p>
      			</li>
      			<li className="t_black_before weight-600-before">
      				<strong>트랜스파일러 (Transpiler)</strong>
      				<p>
      					<mark><code>Babel</code></mark>은 소스 코드를 받아서 변환만 하는 트랜스파일러로,
      					코드의 실행 흐름을 변경하지 않습니다.
      				</p>
      			</li>
      		</ol>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">6.2.2. 패키지 설치</h2>
      		<p className="mt_m">
      			<b className="terminal">터미널</b>에서 아래 명령을 실행하여 패키지를 설치합니다.
      		</p>
      		<TerminalBlock className="terminal_code_box mt_m">
      {`npm install gulp-bro -D            // browserify로 gulp에서 보다 쉽게 코드를 변환할 수 이게 해줌
      				npm install babelify -D            // ES6 이상의 문법을 일반 브라우저가 코드를 이해할 수 있도록 변환
      				npm install uglifyify -D           // 코드 최소화 및 난독화
      				npm install gulp-minify -D         // min 파일로 압축

      				// shorthand
      				npm i gulp-bro babelify uglifyify gulp-minify -D`}
      </TerminalBlock>

      		<article className="mt_ml indent">
      			<h3 className="ml_mn t_blue">gulp-bro</h3>
      			<p className="mt_s">
      				<code className="t_blue">gulp-bro</code>는 <b>Gulp에서 Browserify를 실행할 수 있도록 도와주는 Gulp 플러그인</b>입니다.<br />
      				<code className="t_blue">Browserify</code>는 <b>CommonJS 스타일의 모듈을 브라우저에서 사용 가능한 형태로 번들링하는 도구</b>로서,
      				<code className="t_blue">gulp-bro</code>를 사용하면 <b>Gulp와 Browserify를 쉽게 통합</b>할 수 있습니다.
      			</p>
      			<p className="mt_s">
      				<code className="t_blue">gulp-bro</code>를 사용하면 <code className="t_blue">Browserify</code>와 함께 <b>다른 플러그인들을 함께 사용하여 소스맵 생성, Babel 변환 등을 수행</b>할 수 있습니다.<br />
      				이를 통해 <b>모던 JavaScript 코드를 브라우저에서 실행 가능한 형태로 변환하고 최적화</b>할 수 있습니다.
      			</p>
      		</article>
      		

      		<article className="mt_ml indent">
      			<h3 className="ml_mn t_blue">babelify</h3>
      			<p className="mt_s">
      				<code className="t_blue">babelify</code>는 <b>Browserify의 transform 플러그인</b>으로,
      				<b>ES6+ 코드를 이전 버전의 JavaScript로 변환</b>하는 데 사용됩니다.<br />
      				주로 <b>최신 ECMAScript 표준을 준수하는 코드를 브라우저에서 지원되는 이전 버전의 JavaScript로 변환</b>할 때 사용됩니다.<br />
      			</p>
      			<p className="mt_s">
      				<code className="t_blue">babelify</code>는 <b>Babel을 Browserify에서 사용할 수 있도록 도와주는 플러그인</b>이며,
      				<b className="t_darkblue">Babel은 ES6+ 코드를 ES5로 변환해 주는 데에 특화</b>되어 있습니다.
      			</p>
      		</article>
      		

      		<article className="mt_ml indent">
      			<h3 className="ml_mn t_blue">uglifyify</h3>
      			<p className="mt_s">
      				<code className="t_blue">uglifyify</code>는 <b>Browserify의 transform 플러그인</b>으로,
      				<b>Browserify 번들에 속한 JavaScript 파일을 압축</b>하는 데 사용됩니다.<br />
      				주로 <b>브라우저에서 실행되는 클라이언트 측 JavaScript 코드를 최소화하고 압축</b>하는 데 사용됩니다.
      			</p>
      			<p className="mt_s">
      				<code className="t_blue">uglifyify</code>는 <code className="t_blue">UglifyJS</code>를 사용하여 <b>JavaScript 코드를 압축하고 난독화</b>합니다.<br />
      				이는 <b>코드 크기를 줄이고 웹 페이지 로딩 속도를 향상시키는 데 도움이</b> 됩니다.
      			</p>
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">6.2.3. gulpfile.babel.js 세팅</h2>
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
        linkedFullCodeId="assets-babel-gulpfile-full"
      >
      {`// import -----------------------------------------------------------
      				// ··· 기존 import 생략 ···
      				--add--
      				import bro from "gulp-bro";
      				import babelify from "babelify";
      				import minify from "gulp-minify";


      				// routes -----------------------------------------------------------
      				--no_change--


      				// etc --------------------------------------------------------------
      				--no_change--


      				// task -------------------------------------------------------------

      				// html task --no_change--

      				// css task --no_change--

      				// js task
      				const js = () => {
      					return gulp.src([
      						path_src.js + '/main.js'                                  // 트랜스파일 대상 경로 (util.js는 main.js에 import 하기 때문에 호출 안함)
      					])
      					.pipe( sourcemaps.init({ loadMaps: true }) )                // 소스맵 초기화 (기존의 소스 맵을 유지하고 수정하는 데 사용하기 위해 옵션 설정)
      					.pipe( bro({                                                // 트랜스파일 시작
      						transform: [
      							babelify.configure({ presets: ['@babel/preset-env'] }), // ES6 이상의 문법을 일반 브라우저가 코드를 이해할 수 있도록 변환
      							[ 'uglifyify', { global: true } ]                       // 코드 최소화 및 난독화
      						]
      					}) )
      					.pipe( sourcemaps.write('./') )                             // 소스맵 작성
      					.pipe(minify({                                              // 트랜스파일된 코드 압축 및 min 파일 생성
      						ext: { min: '.min.js' },                                  // 축소된 파일을 출력하는 파일 이름의 접미사 설정
      						ignoreFiles: ['-min.js']                                  // 해당 패턴과 일치하는 파일을 축소하지 않음
      					}))
      					.pipe( gulp.dest(path_dist.js) );                           // 트랜스파일 후 생성될 목적지 설정
      				}

      				// clean task --no_change--

      				// webserver task --no_change--

      				// watch task --edit-- --edit_txt:js watch 추가
      				const watch = () => {
      					// njk(html) watch  --no_change--
      					const html_watcher = gulp.watch(path_src.html + "/**/*", html);
      					file_management(html_watcher, path_src.html, path_dist.html);

      					// sass watch --no_change--
      					const scss_watcher = gulp.watch(path_src.css + "/**/*", css);
      					file_management(scss_watcher, path_src.css, path_dist.css);

      					// js watch --add--
      					const js_watcher = gulp.watch(path_src.js + "/**/*", js);
      					file_management(js_watcher, path_src.js, path_dist.js);
      				}
      				// watch - 파일 감시 및 삭제를 위한 함수 --no_change--


      				// series & parallel (task 그룹화) ----------------------------------

      				// 순차적으로 실행되어야 하는 task 그룹 --no_change--

      				// 위 prepare 실행 완료 후 순차적으로 실행되어야 하는 task 그룹 --edit-- --edit_txt:js task 추가
      				const assets = gulp.series([ html, css, js ]);

      				// 동시에 여러 개의 task가 실행되어야 하는 그룹 (병렬로 실행) --no_change--


      				// export (gulp 실행 명령어) ----------------------------------------

      				// gulp build 실행 (prepare 실행 후 assets 실행) - build만 실행 --no_change--

      				// gulp dev 실행 (build 실행 후 live 실행) - build 실행 후 live 실행 --no_change--`}
      </CodeBlock>

      		
      <CodeBlock
        id="assets-babel-gulpfile-full"
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
      				import bro from "gulp-bro";
      				import babelify from "babelify";
      				import minify from "gulp-minify";


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

      				// js task
      				const js = () => {
      					return gulp.src([
      						path_src.js + '/main.js'                                  // 트랜스파일 대상 경로 (util.js는 main.js에 import 하기 때문에 호출 안함)
      					])
      					.pipe( sourcemaps.init({ loadMaps: true }) )                // 소스맵 초기화 (기존의 소스 맵을 유지하고 수정하는 데 사용하기 위해 옵션 설정)
      					.pipe( bro({                                                // 트랜스파일 시작
      						transform: [
      							babelify.configure({ presets: ['@babel/preset-env'] }), // ES6 이상의 문법을 일반 브라우저가 코드를 이해할 수 있도록 변환
      							[ 'uglifyify', { global: true } ]                       // 코드 최소화 및 난독화
      						]
      					}) )
      					.pipe( sourcemaps.write('./') )                             // 소스맵 작성
      					.pipe(minify({                                              // 트랜스파일된 코드 압축 및 min 파일 생성
      						ext: { min: '.min.js' },                                  // 축소된 파일을 출력하는 파일 이름의 접미사 설정
      						ignoreFiles: ['-min.js']                                  // 해당 패턴과 일치하는 파일을 축소하지 않음
      					}))
      					.pipe( gulp.dest(path_dist.js) );                           // 트랜스파일 후 생성될 목적지 설정
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

      					// js watch
      					const js_watcher = gulp.watch(path_src.js + "/**/*", js);
      					file_management(js_watcher, path_src.js, path_dist.js);
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
      							del.sync(destFilePath_html);
      						}

      						// 위 파일 외 삭제
      						else{
      							const destFilePath = path.resolve(dist_path, filePathFromSrc);
      							del.sync(destFilePath);
      						}
      					});
      				}


      				// series & parallel (task 그룹화) ----------------------------------

      				// 순차적으로 실행되어야 하는 task 그룹
      				const prepare = gulp.series([ clean ]);

      				// 위 prepare 실행 완료 후 순차적으로 실행되어야 하는 task 그룹
      				const assets = gulp.series([ html, css, js ]);

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
      		<h2 className="ml_mn">6.2.4. gulp dev 실행</h2>
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
      			<img src={`${IMG.GULP}/gulp_js_run_dev_cmd.png`} alt="gulp dev 실행시 터미널에 작업내용 출력" />
      		</p>
      		<p className="mt_ms">
      			<code>css</code> 다음으로 <mark><code>js</code></mark>가 실행되는 것을 확인할 수 있습니다.
      		</p>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">6.2.5. 빌드된 js 결과물 확인</h2>

      		<article className="mt_ml indent">
      			<h3 className="ml_mn">6.2.5.1. js 파일 확인</h3>
      			<p className="mt_s">
      				<i className="folder">dist &gt; assets &gt; js</i> 폴더 안에 <i className="filename">main.js</i>와 <i className="filename">main.js.map</i>,
      				<i className="filename">main.min.js</i>
      				파일이 트랜스파일되어 있는 것을 확인할 수 있습니다.<br />
      				<i className="folder">src</i> 폴더의 <i className="filename">util.js</i>는
      				<i className="underline"><i className="filename">main.js</i>에 병합</i>되어 트랜스파일되기 때문에
      				<i className="folder">dist</i> 폴더에는 존재하지 않습니다.
      			</p>
      			<p className="mt_ms">
      				<img src={`${IMG.GULP}/gulp_js_run_folder.png`} alt="빌드 후 dist &gt; assets &gt; js 폴더 확인" />
      			</p>
      		</article>
      		

      		<article className="mt_ml indent">
      			<h3 className="ml_mn">6.2.5.2. Console 확인</h3>
      			<p className="mt_s">
      				우리는 이전에 <i className="filename">main.js</i>, <i className="filename">util.js</i> 두 개의 파일을 미리 세팅하였습니다.<br />
      				(<mark>2. Gulp 기본 설정</mark> &gt; <mark>2.4. Gulp 기초 세팅(페이지)</mark> &gt; <mark>2.4.3. 작업 폴더 생성 및 기초 파일 세팅</mark> &gt; <mark>js 파일 세팅</mark>)
      			</p>
      			<p className="mt_s">
      				미리 세팅한 스크립트의 내용은 <code>Console</code>에 두 개의 랜덤한 숫자를 표시하라는 내용입니다.<br />
      				<code>Console</code>에 표시될 첫 번째 숫자는 <code>0~9</code>, 두 번째 숫자는 <code>10~19</code>입니다.
      			</p>
      			<p className="mt_s">
      				<mark>빌드가 완료된 후 개발자 모드를 열고 콘솔에 숫자가 표시되는지 확인합니다.</mark><br />
      				(개발자 모드 열기: <b>F12</b> 또는 <b>브라우저 우클릭 메뉴</b> &gt; <b>검사</b>)
      			</p>
      			<p className="mt_s t_red">
      				※ <code className="t_red">Console</code>의 경고 문구는 <i className="filename t_red">visual.png</i> 이미지를 불러오지 못하여 생긴 경고이므로 정상입니다.
      				다음 섹션 [<b>6.3. image 최적화</b>]에서 image task를 세팅합니다.
      			</p>
      			<div className="mt_ms youtube_box" style={{ '--padding-top': "56.25%" }}>
      				<iframe width="560" height="315" src="https://www.youtube.com/embed/2pWXwAr_-Eg?si=A0qDyN7FWFxAuUHj" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      			</div>
      		</article>
      		
      	</section>
      	

      	<figure className="img_figure mt_l">
      		<img src={`${IMG.GULP}/06_gulp_02.png`} alt="Babel Support 설정" />
      		<figcaption>
      			Babel Support 설정
      		</figcaption>
      	</figure>
    </>
  )
}

export default BabelSupportPage
