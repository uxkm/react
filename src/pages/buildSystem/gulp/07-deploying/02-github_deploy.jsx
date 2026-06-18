import { useGulpPageMeta } from '@/hooks/useGulpPageMeta'
import { IMG } from '@/config/path'
import CodeBlock from '@/components/code/CodeBlock'
import TerminalBlock from '@/components/code/TerminalBlock'

function GithubDeployPage() {
  useGulpPageMeta()

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
      		<h2 className="sound_only">요약 설명</h2>
      		<p className="t_black" data-nosnippet>
      			<b>UXKM Gulp 강의의 마지막 페이지입니다.</b>
      		</p>
      		<p className="mt_s">
      			Gulp로 만든 정적인 홈페이지를 웹에서 볼 수 있도록 배포하는 과정이 필요합니다.<br />
      			Gulp에서는 <code>gulp-gh-pages</code>를 사용하여 이 작업을 간편하게 할 수 있습니다.
      		</p>
      	</blockquote>

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">7.2.1. gulp-gh-pages 플러그인 설치</h2>
      		<p className="mt_m">
      			<b className="terminal">터미널</b>에서 아래 명령을 실행하여 <mark><code>gulp-gh-pages</code></mark> 플러그인을 설치합니다.
      		</p>
      		<div className="terminal_code_line mt_ms">
      			<div className="terminal_pre pre_add">
      				<code className="terminal_code"><i className="npm">npm</i> <i className="install">install</i> gulp-gh-pages <i className="save">-D</i></code>
      			</div>
      		</div>

      		<article className="mt_ml indent">
      			<h3 className="ml_mn t_blue">gulp-gh-pages</h3>
      			<p className="mt_s">
      				<mark><code>gulp-gh-pages</code></mark>는 Gulp를 사용해 빌드된 파일(<i className="folder">dist</i> 폴더 등)을
      				GitHub의 <code>gh-pages</code> 브랜치에 <b>자동으로 배포할 수 있도록 도와주는 Gulp 플러그인</b>입니다.<br />
      				<b className="t_black">GitHub Pages</b>를 통해 정적 웹사이트를 손쉽게 호스팅할 수 있게 해주며, 배포 과정을 간단한 Gulp 작업으로 자동화할 수 있게 해줍니다.
      			</p>
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">7.2.2. 배포(Deploying)를 위한 파일 세팅</h2>

      		<article className="tit_h3 mt_m indent">
      			<h3 className="ml_mn">package.json 수정</h3>
      			<p className="mt_ms">
      				<i className="filename">package.json</i> 파일을 열고 <code>scripts</code> 부분에 아래처럼 코드를 추가합니다.
      			</p>
      			
      <CodeBlock filename="package.json" title="package.json scripts" language="json" className="mt_ms">
      {`{
      						"scripts": {
      							"dev": "gulp dev",
      							"build": "gulp build",   // add (쉼표 추가)
      							"deploy": "gulp deploy"  // add (한 줄 추가)
      						}
      					}`}
      </CodeBlock>

      		</article>
      		

      		<article className="tit_h3 mt_l indent">
      			<h3 className="ml_mn">gulpfile.babel.js 세팅</h3>
      			<p className="mt_ms">
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
        className="mt_ms"
        defaultOpen={false}
        linkedFullCodeId="github-deploy-gulpfile-full"
      >
      {`// import -----------------------------------------------------------
      					// ··· 기존 import 생략 ···
      					--add--
      					import ghPages from "gulp-gh-pages";


      					// routes -----------------------------------------------------------
      					--no_change--


      					// etc --------------------------------------------------------------
      					--no_change--


      					// task -------------------------------------------------------------

      					// html task --no_change--

      					// css task --no_change--

      					// js task --no_change--

      					// image task --no_change--

      					// clean task --edit-- --edit_txt:clean task 변경 없음, cleanDeploy task 추가
      					const clean = () => del([dist]);                     // dist 폴더 삭제
      					const cleanDeploy = () => del([".publish"]);         // 배포 후 자동 생성된 .publish 폴더 삭제

      					// webserver task --no_change--

      					// watch task --no_change--
      					// watch - 파일 감시 및 삭제를 위한 함수 --no_change--

      					// github pages --add--
      					const gh = () => {
      						return gulp.src(dist+"/**/*")     // 배포할 파일 경로 (dist 폴더의 모든 파일 및 폴더)
      						.pipe(ghPages(                    // GitHub 저장소에 배포
      							// { branch: "view-pages" }     // 옵션을 설정하지 않으면 자동으로 gh-pages 브랜치를 생성하고 배포 (브랜치명 변경 시 사용)
      						));
      					}


      					// series & parallel (task 그룹화) ----------------------------------

      					// 순차적으로 실행되어야 하는 task 그룹 --no_change--

      					// 위 prepare 실행 완료 후 순차적으로 실행되어야 하는 task 그룹 --no_change--

      					// 동시에 여러 개의 task가 실행되어야 하는 그룹 (병렬로 실행) --no_change--


      					// export (gulp 실행 명령어) ----------------------------------------

      					// gulp build 실행 (prepare 실행 후 assets 실행) - build만 실행 --no_change--

      					// gulp dev 실행 (build 실행 후 live 실행) - build 실행 후 live 실행 --no_change--

      					--add--
      					// gulp deploy 실행 (현재 dist 폴더를 배포할 경우 첫째 줄 사용, src를 한 번 더 빌드하여 배포할 경우 둘째 줄 사용)
      					export const deploy = gulp.series([ gh, cleanDeploy ]);
      					// export const deploy = gulp.series([ build, gh, cleanDeploy ]);`}
      </CodeBlock>

      			
      <CodeBlock
        id="github-deploy-gulpfile-full"
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
      					import ghPages from "gulp-gh-pages";


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

      					// image task
      					const image = () => {
      						return gulp.src( path_src.images + '/**/*' )         // 최적화 이미지 대상
      						.pipe( newer( path_dist.images ) )                   // 변경된 파일만 통과, 변경되지 않은 파일 건너뛰기
      						.pipe( imagemin( { verbose:true } ) )                // 이미지 최적화 ( 최적화 된 이미지의 정보 기록 옵션 적용 )
      						.pipe( gulp.dest( path_dist.images ) );              // 최적화 후 생성될 목적지 설정
      					}

      					// clean task
      					const clean = () => del([dist]);                       // dist 폴더 삭제
      					const cleanDeploy = () => del([".publish"]);           // 배포 후 자동 생성된 .publish 폴더 삭제

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

      					// github pages
      					const gh = () => {
      						return gulp.src(dist+"/**/*")     // 배포할 파일 경로 (dist 폴더의 모든 파일 및 폴더)
      						.pipe(ghPages(                    // Github 저장소에 배포
      							// { branch: "view-pages" }     // 옵션을 설정하지 않으면 자동으로 gh-pages 브랜치를 생성하고 배포 (브랜치명 변경 시 사용)
      						));
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

      					// gulp deploy 실행 (현재 dist 폴더를 배포할 경우 첫째 줄 사용, src를 한 번 더 빌드하여 배포할 경우 둘째 줄 사용)
      					export const deploy = gulp.series([ gh, cleanDeploy ]);
      					// export const deploy = gulp.series([ build, gh, cleanDeploy ]);`}
      </CodeBlock>

      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">7.2.3. gulp deploy 실행</h2>
      		<p className="mt_m">
      			<i className="filename">gulpfile.babel.js</i> 파일을 세팅한 후 <b className="terminal">터미널</b>에서
      			아래 명령을 실행합니다.
      		</p>
      		<TerminalBlock className="terminal_code_box mt_ms">
      {`gulp deploy`}
      </TerminalBlock>
      		<p className="notice_red mt_m">
      			중요합니다!
      		</p>
      		<p className="mt_sm">
      			<mark><code className="t_darkblue weight-600">gulp deploy</code> 실행 후 두 가지 오류가 발생할 수 있습니다.<br /></mark>
      		</p>

      		<article className="mt_ml indent">
      			<h3 className="ml_mn t_red"><i>gulp deploy </i>오류사례 1</h3>
      			<p className="mt_ms">
      				<img src={`${IMG.GULP}/gulp_deploy_gh_error1.png`} alt="gulp deploy 실행 시 발생할 수 있는 오류사례1" />
      			</p>
      			<p className="mt_s">
      				<code className="t_red">[gh-pages] No files in the stream.</code> 이 문구가 나오는 이유는,<br />
      				배포 대상인 <i className="folder">dist</i> 폴더가 없어서 발생하는 오류입니다.
      				이럴 경우 <code className="t_green weight-600">gulp build</code> 또는 <code className="t_green weight-600">gulp dev</code>를
      				실행한 후 <code className="t_blue weight-600">gulp deploy</code>를 실행하면 해결됩니다.
      			</p>
      		</article>
      		

      		<article className="mt_ml indent">
      			<h3 className="ml_mn t_red"><i>gulp deploy </i>오류사례 2</h3>
      			<p className="mt_ms">
      				<img src={`${IMG.GULP}/gulp_deploy_gh_error2.png`} alt="gulp deploy 실행 시 발생할 수 있는 오류사례2" />
      			</p>
      			<p className="mt_s">
      				<code className="t_red">TypeError: Can not read properties of null (reading &apos;0&apos;)</code>
      				또는<br />
      				<code className="t_red">TypeError: Can not read property &apos;0&apos; of null</code>
      				문구가 나올 때는 <i className="terminal">터미널</i>에서 아래 명령을 실행합니다.
      			</p>
      			<TerminalBlock className="terminal_code_box mt_ms">
      {`// 한 줄씩 따로 실행
      					cd node_modules/gulp-gh-pages/
      					npm install --save gift@0.10.2
      					cd ../../

      					// 한 번에 실행
      					cd node_modules/gulp-gh-pages/ && npm install --save gift@0.10.2 && cd ../../`}
      </TerminalBlock>
      			<p className="mt_s">
      				<mark>위 작업이 완료된 후 <code className="t_blue weight-600">gulp deploy</code>를 실행하면 해결됩니다.</mark>
      			</p>
      			<p className="mt_sm billiard_text">
      				<i className="sound_only">※ </i>
      				<code>gift</code> 패키지는 <code className="t_blue">gulp-gh-pages</code>가 실행될 때 GitHub 인증에 사용됩니다.<br />
      				우리는 이전 페이지에서 <i className="t_blue weight-600">[GitHub 원격 권한 등록]</i>을 설정했기 때문에 <code>gift</code> 패키지만 설치하면
      				<code className="t_blue">gulp-gh-pages</code>가 GitHub에 업로드할 때 인증을 자동으로 처리합니다.
      			</p>
      		</article>
      		

      		<article className="mt_ml indent">
      			<h3 className="ml_mn t_blue"><i>gulp deploy </i>정상작동</h3>
      			<p className="mt_s">
      				<code className="t_blue">gulp deploy</code>가 정상 작동하면 아래처럼 메시지가 출력됩니다.
      			</p>
      			<p className="mt_s">
      				<img src={`${IMG.GULP}/gulp_deploy_complate1.png`} alt="gulp deploy complete" />
      			</p>
      			<p className="mt_ms">
      				위 내용을 풀어서 설명하면 다음과 같습니다.
      			</p>
      			<ol className="ol_lst mt_sm indent_small">
      				<li><code>gulp-gh-pages</code>가 <i className="folder">dist</i> 폴더를 복사하여 <i className="folder">.publish</i> 폴더를 생성</li>
      				<li><code className="t_blue">gh-pages</code> 브랜치를 생성</li>
      				<li><i className="folder">.publish</i> 폴더의 모든 파일을 스테이징</li>
      				<li>업데이트 날짜와 시간을 메시지로 기록한 후 <b>commit</b></li>
      				<li>원격 저장소에 <b>push</b></li>
      				<li>
      					<code>gulp-gh-pages</code>가 배포를 위해 생성한 <i className="folder">.publish</i> 폴더를
      					<code className="t_blue">cleanDeploy</code> task로 삭제
      				</li>
      			</ol>
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">7.2.4. gh-pages 브랜치 및 웹사이트 확인</h2>
      		<p className="mt_m">
      			배포까지 완료된 후 GitHub의 저장소와 실제 웹상에서 결과물을 확인합니다.
      		</p>

      		<article className="mt_ml indent">
      			<h3 className="ml_mn">gh-pages 브랜치에 배포 결과물 확인</h3>
      			<p className="mt_s">
      				<b className="t_green">main</b> 브랜치 버튼을 클릭하면 <b className="t_blue">gh-pages</b> 브랜치가 생성된 것을 확인할 수 있습니다.<br />
      				<b className="t_blue">gh-pages</b> 브랜치를 클릭하여 <b className="t_blue">gh-pages</b> 브랜치 페이지로 이동합니다.
      			</p>
      			<p className="mt_s">
      				<img src={`${IMG.GULP}/gulp_deploy_repository_complate1.png`} alt="gh-pages 브랜치 확인" className="image_border_black" />
      			</p>
      			<p className="mt_ms">
      				<b className="t_blue">gh-pages</b> 브랜치에 방금 배포한 파일이 반영되어 있으며,
      				로컬 Gulp 폴더의 <i className="folder">dist</i> 폴더와 동일한 구성입니다.<br />
      				즉, 빌드가 완료된 정적 파일만 저장소에 배포된 것을 확인할 수 있습니다.
      			</p>
      			<p className="mt_s">
      				<img src={`${IMG.GULP}/gulp_deploy_repository_complate2.png`} alt="gh-pages 브랜치로 이동하여 배포된 소스 확인" className="image_border_black" />
      			</p>
      		</article>
      		

      		<article className="mt_l indent">
      			<h3 className="ml_mn">온라인상의 웹사이트 확인</h3>
      			<p className="mt_s">
      				브랜치 이름을 그대로 주소창에 입력하면, 로컬 브라우저에서 확인했던 결과물을 동일하게 온라인에서도 확인할 수 있습니다.
      			</p>
      			<p className="mt_s">
      				<img src={`${IMG.GULP}/gulp_deploy_repository_complate3.png`} alt="배포 후 온라인 상의 웹사이트 확인" className="image_border_black" />
      			</p>
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">7.2.5. 마치며..</h2>
      		<p className="mt_m">
      			<b>
      				배포 단계까지 모든 <i className="t_black">UXKM Gulp</i> 커리큘럼이 마무리되었습니다.<br />
      				여기까지 UXKM이 Gulp를 활용해 <i className="t_black underline">현재 여러분이 보고 있는 이 웹사이트를 제작하며 쌓은 경험과 지식을 공유</i>한 내용입니다.<br />
      			</b>
      			이 커리큘럼이 여러분의 프로젝트와 다양한 개발 환경에서 실질적인 도움이 되기를 바랍니다.<br />
      			수고 많으셨습니다.
      		</p>
      		<p className="mt_ms">
      			아래 링크는 UXKM Gulp 예제 주소입니다.
      		</p>
      		<ul className="dot_lst">
      			<li>저장소 : <span className="reference"><a href="https://github.com/UXKM-Gulp/uxkm-gulp.github.io" target="_blank" rel="noreferrer" className="fas">https://github.com/UXKM-Gulp/uxkm-gulp.github.io</a></span></li>
      			<li>웹사이트 : <span className="reference"><a href="https://uxkm-gulp.github.io/" target="_blank" rel="noreferrer" className="fas">https://uxkm-gulp.github.io</a></span></li>
      		</ul>
      	</section>
      	

      	<figure className="img_figure mt_l">
      		<img src={`${IMG.GULP}/07_gulp_02.png`} alt="Github 배포하기" />
      		<figcaption>
      			Github 배포하기
      		</figcaption>
      	</figure>
    </>
  )
}

export default GithubDeployPage
