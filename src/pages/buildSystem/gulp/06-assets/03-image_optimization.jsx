import { useGulpPageMeta } from '@/hooks/useGulpPageMeta'
import { IMG } from '@/config/path'
import CodeBlock from '@/components/code/CodeBlock'
import TerminalBlock from '@/components/code/TerminalBlock'
import '@/assets/css/gulp_scss_compilation.scss'

function ImageOptimizationPage() {
  useGulpPageMeta()

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
      		<h2 className="sound_only">요약 설명</h2>
      		<p>
      			이미지 최적화는 Gulp 작업뿐만 아니라 모든 웹 및 모바일 환경에서 권장되는 작업으로, 성능 향상에 도움이 됩니다.<br />
      			Gulp를 사용하면 더 편리하게 이미지 최적화 환경을 설정할 수 있습니다.
      		</p>
      	</blockquote>

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">6.3.1. 이미지 최적화가 필요한 이유</h2>

      		<ol className="ol_lst info_lst gap-column-important-ms mt_m">
      			<li className="t_black_before weight-600-before">
      				<strong>로딩 속도 개선</strong>
      				<p>
      					최적화되지 않은 이미지는 파일 크기가 크기 때문에 웹 페이지의 로딩 속도를 늦출 수 있습니다.
      					이미지 최적화를 통해 파일 크기를 줄여 더 빠른 로딩을 구현할 수 있습니다.
      				</p>
      			</li>
      			<li className="t_black_before weight-600-before">
      				<strong>대역폭 절약</strong>
      				<p>
      					이미지 최적화는 파일 크기를 감소시키므로, 사용자가 데이터를 다운로드하는 데 필요한 대역폭을 절약할 수 있습니다.
      					특히 모바일 사용자와 저속 인터넷 연결을 갖고 있는 사용자들에게 도움이 됩니다.
      				</p>
      			</li>
      			<li className="t_black_before weight-600-before">
      				<strong>검색 엔진 최적화 (SEO)</strong>
      				<p>
      					웹 페이지의 로딩 속도는 검색 엔진 최적화에도 영향을 미칩니다.
      					최적화된 이미지를 사용하면 검색 엔진에서 더 긍정적으로 평가할 수 있습니다.
      				</p>
      			</li>
      			<li className="t_black_before weight-600-before">
      				<strong>사용자 경험 향상</strong>
      				<p>
      					이미지 최적화를 통해 웹 페이지의 성능이 향상되면 사용자 경험이 개선됩니다.
      					빠른 로딩 이미지는 사용자가 더 빨리 콘텐츠를 볼 수 있도록 도와줍니다.
      				</p>
      			</li>
      		</ol>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">6.3.2. 패키지 설치</h2>
      		<p className="mt_m">
      			<b className="terminal">터미널</b>에서 아래 명령을 실행하여 <mark><code>gulp-image</code></mark> 패키지를 설치합니다.
      		</p>
      		<TerminalBlock className="terminal_code_box mt_m">
      {`npm install gulp-imagemin@7.1.0 -D  // 이미지 최적화를 위한 패키지
      				npm install gulp-newer -D           // 변경된 파일만 파이프라인 통과, 변경되지 않은 파일은 건너뛰기

      				// shorthand
      				npm i gulp-imagemin@7.1.0 gulp-newer -D`}
      </TerminalBlock>

      		<article className="mt_ml indent">
      			<h3 className="ml_mn t_blue">gulp-imagemin</h3>
      			<p className="mt_s">
      				<code className="t_blue">gulp-imagemin</code>은 <b>Gulp를 사용하여 이미지 최적화를 수행하는 플러그인</b>으로,
      				<b>다양한 이미지 형식을 지원</b>하고 <b>Gulp의 파이프라인을 활용하여 이미지 최적화 작업을 자동화</b>할 수 있습니다.
      			</p>
      			<ul className="dot_lst indent_small mt_sm">
      				<li><b>이미지 최적화</b>: <code className="t_blue">gulp-imagemin</code>은 <b>다양한 이미지 최적화 도구 및 알고리즘을 사용하여 이미지를 압축하고 최적화</b>합니다.</li>
      				<li><b>다양한 이미지 형식 지원</b>: <b>JPEG, PNG, GIF, SVG 등 다양한 이미지 형식을 지원</b>하며, 각 형식에 대한 최적화를 수행할 수 있습니다.</li>
      				<li><b>Gulp 파이프라인 통합</b>: <b>Gulp의 파이프라인을 활용하여 이미지 최적화 작업을 다른 Gulp 작업과 연결하여 자동화</b>할 수 있습니다.</li>
      				<li><b>옵션 설정</b>: <b>최적화 옵션을 설정하여 이미지 처리의 세부적인 동작을 조정</b>할 수 있습니다.</li>
      			</ul>
      		</article>
      		

      		<article className="mt_ml indent">
      			<h3 className="ml_mn t_blue">gulp-newer</h3>
      			<p className="mt_s">
      				<code className="t_blue">gulp-newer</code>는 <b>변경된 파일만을 필터링하여 통과시키는 Gulp 플러그인</b>입니다.<br />
      				<b>변경된 이미지 파일만 최적화하여 전체 이미지를 다시 처리하지 않아도 되므로 빌드 시간을 단축</b>할 수 있습니다.
      			</p>
      			<ul className="dot_lst indent_small mt_sm">
      				<li><b>변경된 파일만 전달</b>: <b>대상 폴더에 있는 파일을 기준으로 소스 파일과 대상 파일을 비교</b>합니다. <b>소스 파일이 대상 파일보다 최신인 경우에만 해당 파일을 통과</b>시킵니다.</li>
      				<li><b>변경 감지</b>: <b>파일의 수정 시간을 기준으로 변경 여부를 감지</b>합니다. <b>이전 실행에서 생성된 대상 파일과 수정된 소스 파일을 비교하여 변경된 파일만을 선택</b>합니다.</li>
      				<li><b>빌드 최적화</b>: 주로 <b>이미지 최적화나 파일 복사와 같은 작업에서 사용되어 변경된 파일만을 선택하여 처리함으로써 빌드 시간을 최적화</b>합니다.</li>
      			</ul>
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn t_red">6.3.3. gulpfile.babel.js 세팅 방향 선택</h2>
      		<p className="mt_ml notice_red">중요합니다!</p>
      		<p className="mt_sm">
      			<b className="underline">이미지는 웹 사이트 대부분의 용량을 차지합니다.</b><br />
      			본 커리큘럼에서는 하나의 이미지만 사용하기 때문에 큰 문제가 되지 않지만,
      			실제 웹사이트에서는 이미지 총 용량이 2~5MB를 넘는 경우가 흔합니다.<br />
      			이미지가 많고 용량이 클 경우, <b>이미지 최적화 작업으로 인해 Gulp의 초기 빌드 속도가 느려질 수 있습니다.</b>
      		</p>
      		<p className="mt_s">
      			그래서 이번엔 두 가지 방식으로 <b className="filename">gulpfile.babel.js</b>를 세팅합니다.
      		</p>
      		<ol className="ol_lst indent">
      			<li className="before_blue before_bold">
      				<b className="t_blue">실시간 이미지 최적화 프로세스 설정</b>: <b>image task</b>가 실행될 때 이미지 최적화도 같이 진행됩니다.<br />
      				<i className="t_blue">(단, 이미지가 많고 용량이 클 경우 그만큼 초기 빌드 시간이 늘어납니다.)</i>
      			</li>
      			<li className="before_green before_bold">
      				<b className="t_green">독립적인 이미지 최적화 프로세스 설정</b>: <b>image task</b>가 실행되어도 이미지 최적화는 실행되지 않습니다.
      				이미지 최적화는 필요할 때 별도로 진행합니다.<br />
      				<i className="t_green">(필요할 때만 이미지 최적화를 실행하기 때문에 초기 빌드 속도에 영향을 미치지 않습니다.)</i>
      			</li>
      		</ol>
      		<p className="mt_s">
      			본 Gulp 커리큘럼은 조금 더 이해하기 쉬운 <b className="t_blue">1번 방식</b>으로 마무리되지만,
      			실제 프로젝트에서 사용하고 이미지가 많다면 <b className="t_green">2번 방식</b>을 추천합니다.<br />
      			<i className="t_red">※ 아래 세팅 방법 중에서 프로젝트에 가장 적합한 방법을 선택하여 진행해 주세요.</i>
      		</p>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn t_blue">6.3.4-1. 실시간 이미지 최적화 프로세스 설정</h2>

      		<article className="mt_m indent">
      			<h3 className="ml_mn t_blue">gulpfile.babel.js 세팅</h3>
      			
      <CodeBlock
        filename="gulpfile.babel.js"
        title="gulpfile.babel.js"
        language="javascript"
        className="mt_m"
        defaultOpen={false}
        linkedFullCodeId="assets-image-live-gulpfile-full"
      >
      {`// import -----------------------------------------------------------
      					// ··· 기존 import 생략 ···
      					--add--
      					import imagemin from "gulp-imagemin";
      					import newer from "gulp-newer";


      					// routes -----------------------------------------------------------
      					--no_change--


      					// etc --------------------------------------------------------------
      					--no_change--


      					// task -------------------------------------------------------------

      					// html task --no_change--

      					// css task --no_change--

      					// js task --no_change--

      					// image task --add--
      					const image = () => {
      						return gulp.src( path_src.images + '/**/*' )         // 최적화 이미지 대상
      						.pipe( newer( path_dist.images ) )                   // 변경된 파일만 통과, 변경되지 않은 파일 건너뛰기
      						.pipe( imagemin( { verbose:true } ) )                // 이미지 최적화 ( 최적화 된 이미지의 정보 기록 옵션 적용 )
      						.pipe( gulp.dest( path_dist.images ) );              // 최적화 후 생성될 목적지 설정
      					}

      					// clean task --no_change--

      					// webserver task --no_change--

      					// watch task --edit-- --edit_txt:image watch 추가
      					const watch = () => {
      						// njk(html) watch  --no_change--
      						const html_watcher = gulp.watch(path_src.html + "/**/*", html);
      						file_management(html_watcher, path_src.html, path_dist.html);

      						// sass watch --no_change--
      						const scss_watcher = gulp.watch(path_src.css + "/**/*", css);
      						file_management(scss_watcher, path_src.css, path_dist.css);

      						// js watch --no_change--
      						const js_watcher = gulp.watch(path_src.js + "/**/*", js);
      						file_management(js_watcher, path_src.js, path_dist.js);

      						// image watch --add--
      						const image_watcher = gulp.watch(path_src.images + "/**/*", image);
      						file_management(image_watcher, path_src.images, path_dist.images);
      					}
      					// watch - 파일 감시 및 삭제를 위한 함수 --no_change--


      					// series & parallel (task 그룹화) ----------------------------------

      					// 순차적으로 실행되어야 하는 task 그룹 --edit-- --edit_txt:image task 추가
      					const prepare = gulp.series([ clean, image ]);

      					// 위 prepare 실행 완료 후 순차적으로 실행되어야 하는 task 그룹 --no_change--

      					// 동시에 여러 개의 task가 실행되어야 하는 그룹 (병렬로 실행) --no_change--


      					// export (gulp 실행 명령어) ----------------------------------------

      					// gulp build 실행 (prepare 실행 후 assets 실행) - build만 실행 --no_change--

      					// gulp dev 실행 (build 실행 후 live 실행) - build 실행 후 live 실행 --no_change--`}
      </CodeBlock>

      			
      <CodeBlock
        id="assets-image-live-gulpfile-full"
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
      					import imagemin from "gulp-imagemin";
      					import newer from "gulp-newer";


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
      							path_src.js + '/main.js'                                  // 트렌스파일 대상 경로 (util.js 는 main.js 에 import 하기 때문에 호출 안함)
      						])
      						.pipe( sourcemaps.init({ loadMaps: true }) )                // 소스맵 초기화 (기존의 소스 맵을 유지하고 수정하는 데 사용하기 위해 옵션 설정)
      						.pipe( bro({                                                // 트렌스파일 시작
      							transform: [
      								babelify.configure({ presets: ['@babel/preset-env'] }), // ES6 이상의 문법을 일반 브라우저가 코드를 이해할 수 있도록 변환
      								[ 'uglifyify', { global: true } ]                       // 코드 최소화 및 난독화
      							]
      						}) )
      						.pipe( sourcemaps.write('./') )                             // 소스맵 작성
      						.pipe(minify({                                              // 트렌스파일된 코드 압축 및 min 파일 생성
      							ext: { min: '.min.js' },                                  // 축소된 파일을 출력하는 파일 이름의 접미사 설정
      							ignoreFiles: ['-min.js']                                  // 해당 패턴과 일치하는 파일을 축소하지 않음
      						}))
      						.pipe( gulp.dest(path_dist.js) );                           // 트렌스파일 후 생성될 목적지 설정
      					}

      					// image task
      					const image = () => {
      						return gulp.src( path_src.images + '/**/*' )         // 최적화 이미지 대상
      						.pipe( newer( path_dist.images ) )                   // 변경된 파일만 통과, 변경되지 않은 파일 건너뛰기
      						.pipe( imagemin( { verbose:true } ) )                // 이미지 최적화 ( 최적화 된 이미지의 정보 기록 옵션 적용 )
      						.pipe( gulp.dest( path_dist.images ) );              // 최적화 후 생성될 목적지 설정
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

      						// image watch
      						const image_watcher = gulp.watch(path_src.images + "/**/*", image);
      						file_management(image_watcher, path_src.images, path_dist.images);
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
      					const prepare = gulp.series([ clean, image ]);

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

      		</article>
      		

      		<article className="mt_ml indent">
      			<h3 className="ml_mn t_blue">gulp dev 실행</h3>
      			<p className="mt_ms">
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
      				<img src={`${IMG.GULP}/gulp_image_run_dev_cmd1.png`} alt="gulp dev 실행시 터미널에 작업내용 출력" />
      			</p>
      			<p className="mt_ms">
      				<code>clean</code> 다음으로 <mark><code>image task</code></mark>가 실행되고,<br />
      				<mark><code>gulp-imagemin</code></mark>이 <i className="filename">visual.png</i> 파일을 어느 정도 최적화했는지에 대한 메시지가 출력됩니다.
      			</p>
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn t_green">6.3.4-2. 독립적인 이미지 최적화 프로세스 설정</h2>

      		<article className="mt_m indent">
      			<h3 className="ml_mn t_green">gulpfile.babel.js 세팅</h3>
      			
      <CodeBlock
        filename="gulpfile.babel.js"
        title="gulpfile.babel.js"
        language="javascript"
        className="mt_m"
        defaultOpen={false}
        linkedFullCodeId="assets-image-min-gulpfile-full"
      >
      {`// import -----------------------------------------------------------
      					// ··· 기존 import 생략 ···
      					--add--
      					import imagemin from "gulp-imagemin";


      					// routes -----------------------------------------------------------
      					--no_change--


      					// etc --------------------------------------------------------------
      					--no_change--


      					// task -------------------------------------------------------------

      					// html task --no_change--

      					// css task --no_change--

      					// js task --no_change--

      					// image task --add--
      					// 이미지를 단순히 src에서 dist로 이동
      					const image = () => {
      						return gulp.src( path_src.images + '/**/*' )         // dist로 이동할 이미지 대상
      						.pipe( gulp.dest( path_dist.images ) );              // 이동 목적지 설정
      					}
      					// 이미지 최적화 후 dist로 이동
      					const image_optimization = () => {
      						return gulp.src( path_src.images + '/**/*' )         // 최적화 이미지 대상
      						.pipe( imagemin( { verbose:true } ) )                // 이미지 최적화 ( 최적화 된 이미지의 정보 기록 옵션 적용 )
      						.pipe( gulp.dest( path_dist.images ) );              // 최적화 후 생성될 목적지 설정
      					}

      					// clean task --no_change--

      					// webserver task --no_change--

      					// watch task --edit-- --edit_txt:image watch 추가
      					const watch = () => {
      						// njk(html) watch  --no_change--
      						const html_watcher = gulp.watch(path_src.html + "/**/*", html);
      						file_management(html_watcher, path_src.html, path_dist.html);

      						// sass watch --no_change--
      						const scss_watcher = gulp.watch(path_src.css + "/**/*", css);
      						file_management(scss_watcher, path_src.css, path_dist.css);

      						// js watch --no_change--
      						const js_watcher = gulp.watch(path_src.js + "/**/*", js);
      						file_management(js_watcher, path_src.js, path_dist.js);

      						// image watch --add--
      						const image_watcher = gulp.watch(path_src.images + "/**/*", image);
      						file_management(image_watcher, path_src.images, path_dist.images);
      					}
      					// watch - 파일 감시 및 삭제를 위한 함수 --no_change--


      					// series & parallel (task 그룹화) ----------------------------------

      					// 순차적으로 실행되어야 하는 task 그룹 --edit-- --edit_txt:image task 추가
      					const prepare = gulp.series([ clean, image ]);

      					// 위 prepare 실행 완료 후 순차적으로 실행되어야 하는 task 그룹 --no_change--

      					// 동시에 여러 개의 task가 실행되어야 하는 그룹 (병렬로 실행) --no_change--


      					// export (gulp 실행 명령어) ----------------------------------------

      					// gulp build 실행 (prepare 실행 후 assets 실행) - build만 실행 --no_change--

      					// gulp dev 실행 (build 실행 후 live 실행) - build 실행 후 live 실행 --no_change--

      					// gulp image_min 실행 (이미지 최적화 하나만을 위한 명령) --add--
      					export const image_min = gulp.series([ image_optimization ]);`}
      </CodeBlock>

      			
      <CodeBlock
        id="assets-image-min-gulpfile-full"
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
      					import imagemin from "gulp-imagemin";


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
      							path_src.js + '/main.js'                                  // 트렌스파일 대상 경로 (util.js 는 main.js 에 import 하기 때문에 호출 안함)
      						])
      						.pipe( sourcemaps.init({ loadMaps: true }) )                // 소스맵 초기화 (기존의 소스 맵을 유지하고 수정하는 데 사용하기 위해 옵션 설정)
      						.pipe( bro({                                                // 트렌스파일 시작
      							transform: [
      								babelify.configure({ presets: ['@babel/preset-env'] }), // ES6 이상의 문법을 일반 브라우저가 코드를 이해할 수 있도록 변환
      								[ 'uglifyify', { global: true } ]                       // 코드 최소화 및 난독화
      							]
      						}) )
      						.pipe( sourcemaps.write('./') )                             // 소스맵 작성
      						.pipe(minify({                                              // 트렌스파일된 코드 압축 및 min 파일 생성
      							ext: { min: '.min.js' },                                  // 축소된 파일을 출력하는 파일 이름의 접미사 설정
      							ignoreFiles: ['-min.js']                                  // 해당 패턴과 일치하는 파일을 축소하지 않음
      						}))
      						.pipe( gulp.dest(path_dist.js) );                           // 트렌스파일 후 생성될 목적지 설정
      					}

      					// image task
      					// 이미지를 단순히 src에서 dist로 이동
      					const image = () => {
      						return gulp.src( path_src.images + '/**/*' )         // dist로 이동할 이미지 대상
      						.pipe( gulp.dest( path_dist.images ) );              // 이동 목적지 설정
      					}
      					// 이미지 최적화 후 dist로 이동
      					const image_optimization = () => {
      						return gulp.src( path_src.images + '/**/*' )         // 최적화 이미지 대상
      						.pipe( imagemin( { verbose:true } ) )                // 이미지 최적화 ( 최적화 된 이미지의 정보 기록 옵션 적용 )
      						.pipe( gulp.dest( path_dist.images ) );              // 최적화 후 생성될 목적지 설정
      					}

      					// clean task
      					const clean = () => del([dist]);                       // dist 폴더 삭제

      					// webserver task
      					const webserver = () => {
      						return gulp.src(dist)                                // webserver를 실행 할 폴더 경로
      						.pipe(
      							ws({                                               // webserver 옵션 설정
      								port: 8300,                                      // 기본 8000, 필요 시 변경 가능
      								livereload: true,                                // 작업 중 파일 저장 시 브라우저 자동 새로고침 (기본 false)
      								open: true                                       // Gulp 실행 시 자동으로 브라우저를 띄우고 localhost 서버 열기 (기본 false)
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

      						// image watch
      						const image_watcher = gulp.watch(path_src.images + "/**/*", image);
      						file_management(image_watcher, path_src.images, path_dist.images);
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
      					const prepare = gulp.series([ clean, image ]);

      					// 위 prepare 실행 완료 후 순차적으로 실행되어야 하는 task 그룹
      					const assets = gulp.series([ html, css, js ]);

      					// 동시에 여러 개의 task가 실행되어야 하는 그룹 (병렬로 실행)
      					const live = gulp.parallel([ webserver, watch ]);


      					// export (gulp 실행 명령어) ----------------------------------------

      					// gulp build 실행 (prepare 실행 후 assets 실행) - build만 실행
      					export const build = gulp.series([ prepare, assets ]);

      					// gulp dev 실행 (build 실행 후 live 실행) - build 실행 후 live 실행
      					export const dev = gulp.series([ build, live ]);

      					// gulp image_min 실행 (이미지 최적화 하나만을 위한 명령)
      					export const image_min = gulp.series([ image_optimization ]);`}
      </CodeBlock>

      		</article>
      		

      		<article className="mt_ml indent">
      			<h3 className="ml_mn t_green">gulp dev 실행</h3>
      			<p className="mt_ms">
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
      				<img src={`${IMG.GULP}/gulp_image_run_dev_cmd2.png`} alt="gulp dev 실행시 터미널에 작업내용 출력" />
      			</p>
      			<p className="mt_ms">
      				<code>clean</code> 다음으로 <mark><code>image task</code></mark>가 실행됩니다.<br />
      				<i className="t_blue">실시간 이미지 최적화 프로세스 설정</i>과는 달리, 이미지 최적화 작업을 하지 않고
      				단순히 <b>src 폴더의 이미지를 dist 폴더로 옮기는 작업만 진행</b>하기에 <mark><code>image task</code></mark>의 작업 시간도 짧습니다.
      			</p>
      		</article>
      		

      		<article className="mt_ml indent">
      			<h3 className="ml_mn t_green">gulp image_min 실행 (이미지 최적화)</h3>
      			<p className="mt_ms">
      				<mark>프로젝트 작업 중 이미지 최적화가 필요한 시점에 <code>gulp dev</code>를 종료하지 않고</mark>,
      				새로운 <b className="terminal">터미널</b>을 열고 아래 명령을 실행합니다.<br />
      				(같은 폴더에 여러 개의 터미널을 열 수 있습니다.)
      			</p>
      			<TerminalBlock className="terminal_code_box mt_m">
      {`gulp image_min`}
      </TerminalBlock>
      			<p className="mt_ms">
      				<code>image_min</code>이 단독으로 실행되고 <b className="terminal">터미널</b>에 <code>image_min</code>의 작업 내용이 출력됩니다.
      			</p>
      			<p className="mt_ms">
      				<img src={`${IMG.GULP}/gulp_image_run_dev_cmd3.png`} alt="gulp image_min 실행시 터미널에 작업내용 출력" />
      			</p>
      			<p className="mt_ms">
      				<b>
      					<i className="filename">visual.png</i> 파일에 대한 이미지 최적화가 진행되고,
      					이미지 최적화를 마친 <code>image_min</code> 프로세스는 자동으로 종료됩니다.
      				</b>
      			</p>
      			<p className="mt_s">
      				이렇게 <b className="t_green">이미지 최적화 프로세스를 별도로 실행하는 방식</b>은,
      				<b>빌드 시간 단축과 작업 효율성 측면에서 유리합니다.</b>
      				다만, <i className="underline">이미지 최적화를 수동으로 실행해야 하는 번거로움이 있다는 단점도 존재</i>합니다.<br />
      				이처럼 각 방식에는 장단점이 있으며, 프로젝트의 성격이나 팀의 작업 방식에 따라 어떤 방식이 더 적합할지 판단해 선택하면 됩니다.
      			</p>
      			<p className="mt_s">
      				위의 두 가지 방법 외에도,
      				<b>배포 단계에서만 이미지 최적화를 자동으로 실행하도록 설정할 수도 있습니다.</b><br />
      				다만, 이 방법은 응용 단계에 해당하므로 본 커리큘럼에서는 다루지 않습니다.
      			</p>
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">6.3.5. 빌드된 image 결과물 확인</h2>

      		<article className="mt_ml indent">
      			<h3 className="ml_mn">6.3.5.1. image가 적용된 브라우저 확인</h3>
      			<p className="mt_s">
      				<code>image task</code>를 세팅하기 전에는 <b>브라우저에서 이미지를 찾지 못해 Console에 경고 메시지가 표시</b>되었지만,<br />
      				이제는 <b className="t_blue">이미지가 정상적으로 표시되며 경고 메시지도 사라졌습니다.</b>
      			</p>
      			<figure className="img_figure mt_ms browser_figure">
      				<figure>
      					<img src={`${IMG.GULP}/gulp_css_run_dev_browser_after.png`} alt="image 적용 전" />
      					<figcaption className="t_red weight-bold">[image 적용 전]</figcaption>
      				</figure>
      				<figure>
      					<img src={`${IMG.GULP}/gulp_image_run_dev_browser_after.png`} alt="image 적용 후" />
      					<figcaption className="t_blue weight-bold">[image 적용 후]</figcaption>
      				</figure>
      			</figure>
      			<p className="mt_s">
      				또한, 이미지 용량이 <i className="t_red">886KB</i>에서 <i className="t_blue">854KB</i>로 줄어든 것을 확인할 수 있습니다.
      			</p>
      			<p className="mt_s">
      				<img src={`${IMG.GULP}/gulp_image_run_dev_imagemin.png`} alt="gulp-imagemin을 적용하여 visual.png의 이미지 용량이 886KB 에서 854KB 로 줄어듬" />
      			</p>
      		</article>
      		

      		<article className="mt_ml indent">
      			<h3 className="ml_mn">6.3.5.2. dist &gt; assets 폴더와 image 파일 확인</h3>
      			<p className="mt_s">
      				<i className="folder">dist &gt; assets &gt; images</i> 폴더 안에 <i className="filename">visual.png</i> 파일이 있는 것을 확인할 수 있습니다.
      			</p>
      			<p className="mt_ms">
      				<img src={`${IMG.GULP}/gulp_image_run_folder.png`} alt="빌드 후 dist &gt; assets &gt; image 폴더 확인" />
      			</p>
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">6.3.6. 로컬 작업을 위한 Gulp 세팅을 마치며</h2>
      		<p className="mt_m">
      			<b>여기까지 로컬 환경에서의 Gulp 설정을 성공적으로 완료했습니다.</b><br />
      			처음 접하는 시스템과 언어로 낯설 수 있었지만, <b>웹 퍼블리싱을 위한 기본적인 세팅을 잘 마무리</b>하였습니다.
      		</p>
      		<p className="mt_s">
      			아직 Gulp가 익숙하지 않고, 커리큘럼 없이 혼자 세팅하는 것은 당연히 어렵게 느껴질 수 있습니다.<br />
      			하지만 <b>한 번의 세팅으로 끝나는 것이 아니라 반복하고 응용하는 과정을 거치다 보면
      			점차 Gulp에 익숙해지고 자연스럽게 활용할 수 있게 될 것입니다.</b>
      		</p>
      		<p className="mt_ms notice_blue">
      			<b>Gulp는 여기까지만 해도 충분합니다. 다음 커리큘럼은 선택사항입니다.</b>
      		</p>
      		<p className="mt_s">
      			다음 섹션에서는 <code className="t_blue">gulp-gh-pages</code> 패키지를 활용하여 <b>Gulp로 빌드한 결과물을 GitHub에 배포하는 방법</b>을 다룹니다.<br />

      			<span className="t_blue">
      				<b>이 과정은 Git과 GitHub의 기본적인 사용법을 알고 있다는 전제 하에 진행됩니다.</b><br />
      				따라서 Git이나 GitHub 사용이 익숙하지 않다면, 본격적인 커리큘럼을 따라가기 전에 <b>Git과 GitHub의 기본 개념과 사용법을 먼저 익히는 것을 권장</b>합니다.
      			</span>
      		</p>
      		<p className="mt_s">
      			※ 다음 커리큘럼에서는 <b>[실시간 이미지 최적화 프로세스로 설정]</b>한
      			<i className="filename t_blue">gulpfile.babel.js</i> 파일을 기준으로 이어서 진행하며,
      			<b className="t_red">Git과 GitHub를 설명하는 내용은 다루지 않습니다.</b>
      		</p>
      	</section>
      	

      	<figure className="img_figure mt_l">
      		<img src={`${IMG.GULP}/06_gulp_03.png`} alt="이미지 최적화 설정" />
      		<figcaption>
      			이미지 최적화 설정
      		</figcaption>
      	</figure>
    </>
  )
}

export default ImageOptimizationPage
