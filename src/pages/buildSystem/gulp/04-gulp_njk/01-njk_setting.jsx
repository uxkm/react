import { useGulpPageMeta } from '@/hooks/useGulpPageMeta'
import { IMG } from '@/config/path'
import CodeBlock from '@/components/code/CodeBlock'
import TerminalBlock from '@/components/code/TerminalBlock'

function NjkSettingPage() {
  useGulpPageMeta()

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
      		<h2 className="sound_only">요약 설명</h2>
      		<p>
      			기본 HTML만으로는 <code>header</code>, <code>footer</code> 같은 <b>공통 영역(이하 &apos;<i className="underline">공통 영역</i>&apos;)을 include할 수 없어</b>
      			사이트를 구성하는 데 큰 불편함이 있습니다.<br />
      			ASP, PHP, JSP 같은 서버 사이드 언어를 사용하면 공통 영역을 별도의 파일로 분리하여 include할 수 있지만,
      			이를 위해서는 <b>각 언어에 맞는 서버 환경을 따로 설정해야 하는 번거로움</b>이 있습니다.<br />
      			하지만 Gulp에서는 이러한 서버 언어 없이도 <code className="t_darkblue weight-600">gulp-nunjucks-render</code> 같은 패키지를 사용하여
      			<b>공통 영역을 손쉽게 분리하고 재사용할 수 있는 템플릿 기반의 HTML 작성이 가능</b>합니다.
      		</p>
      		<p className="mt_ms">
      			Gulp에는 약 4,000여 개의 다양한 패키지가 존재하며,
      			이 중 HTML을 편집할 때 주로 사용되는 대표적인 패키지로는
      			<code>gulp-nunjucks-render</code>,
      			<code>gulp-file-include</code>,
      			<code>gulp-pug</code> 등이 있습니다.
      			이 가운데 UXKM에서는 <code className="t_darkblue weight-600">gulp-nunjucks-render</code>가 가장 효율적이라고 판단하였고,
      			<i className="underline">실제로 UXKM 웹사이트 제작에도 사용하였습니다.</i><br />
      			따라서 본 커리큘럼에서는 <code className="t_darkblue weight-600">gulp-nunjucks-render</code>를 중심으로 HTML 편집 커리큘럼을 진행합니다.
      		</p>
      	</blockquote>

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">4.1.1. gulp-nunjucks-render란?</h2>
      		<p className="mt_m">
      			<code>gulp-nunjucks-render</code>는 Gulp 작업 흐름에서
      			<b>Nunjucks 템플릿 엔진을 사용하여 HTML 파일을 효율적으로 작성하고 렌더링</b>할 수 있도록 도와주는 플러그인입니다.<br />
      			Nunjucks(이하 <b>njk</b>)는 <strong>모질라(Mozilla)</strong>에서 개발한 HTML 기반 템플릿 언어로,
      			<b>템플릿 상속과 include, layout 기능을 표준으로 지원</b>하여 반복적이고 비효율적인 HTML 작성 과정을 크게 줄여줍니다.
      		</p>
      		<p className="mt_s">
      			정적 웹사이트 개발 시 <b className="t_blue">njk</b>를 사용하면
      			<code>header</code>, <code>footer</code> 같은 <b>공통 영역</b>을 재사용하거나,
      			디자인 구조에 따라 유연하게 레이아웃을 조정할 수 있어 <b>유지보수가 훨씬 쉬워집니다.</b>
      		</p>
      		<p className="mt_s">
      			<b>njk</b>는 <strong>JavaScript의 기본 문법(변수, 조건문, 반복문 등)</strong>을 기반으로 동작하기 때문에,
      			JavaScript에 대한 이해가 있다면 더 효율적으로 활용할 수 있습니다.<br />
      			다만, JavaScript에 익숙하지 않더라도 <b>커리큘럼을 따라가면 기본적인 템플릿 구성과 레이아웃 작성은 충분히 가능</b>하므로
      			부담 없이 학습할 수 있습니다.
      		</p>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">4.1.2. html 폴더 세팅</h2>
      		<p className="mt_m">
      			<b className="t_blue">njk</b>를 활용하려면 파일 확장자를 <code>*.html</code>에서
      			<code>*.njk</code>로 변경해야 합니다.<br />
      			<i className="folder">src</i> 폴더에 있는 <code>*.njk</code> 파일을 퍼블리싱하면 <i className="t_blue">Gulp</i>는 <code>*.html</code>로
      			변환하여 <i className="folder">dist</i> 폴더에 생성합니다.<br />
      		</p>

      		<article className="mt_ml indent">
      			<h3 className="ml_mn t_blue">html 내부에 폴더와 파일 추가</h3>
      			<p className="mt_s">
      				기존 <b className="filename t_777">index.html</b>을
      				<b className="filename t_blue">index.njk</b>로 변경한 후
      				아래와 같이 <i className="folder">html</i> 폴더를 구성하고 <b>각각의 파일에 코드를 복사하세요.</b><br />
      				<mark>
      					아래 코드 중 생소한
      					<b className="t_blue">njk</b> 문법이 있습니다. 다음 &apos;<b className="t_black">Gulp NJK 문법</b>&apos; <b className="t_black">페이지</b>에서 자세하게 소개합니다.
      				</mark>
      			</p>
      			<p className="mt_ms">
      				<img src={`${IMG.GULP}/gulp_html_folder.png`} alt="html 폴더 구조 및 파일 생성" />
      			</p>
      			
      <CodeBlock filename="Copy folders and file names" title="html folder" language="html" className="uk_gist_code_box mt_ms">
      {`/* 폴더와 파일을 구성하세요. */
      					html __folder_name__
      						_template __folder_name__
      							_include __folder_name__
      								_footer.njk __file_name__
      								_header.njk __file_name__
      							_json __folder_name__
      								_gnb.json __file_name__
      							_macro __folder_name__
      								_macro.njk __file_name__
      							_layout.njk __file_name__
      						pages __folder_name__
      							history.njk __file_name__
      							intro.njk __file_name__
      						index.njk __file_name__`}
      </CodeBlock>

      			<div className="mt_ms warning block_warning t_666">
      				<p>
      					
      					언더바(<code>_</code>)로 시작하는 폴더나 파일은 <b>빌드 대상이 아니며</b>,
      					퍼블리싱 단계에서만 사용되는 <b>보조용 파일 및 폴더</b>입니다.<br />
      					예를 들어, <i className="filename t_666">_header.njk</i>, <i className="filename t_666">_footer.njk</i>
      					파일은 <i className="filename t_blue">index.njk</i>, <i className="filename t_blue">intro.njk</i>,
      					<i className="filename t_blue">history.njk</i> 각각의 파일에 병합되어 빌드 됩니다.
      				</p>
      			</div>
      		</article>
      		

      		<article className="mt_ml indent">
      			<h3 className="ml_mn t_blue">_include 파일 세팅 (header, footer)</h3>
      			
      <CodeBlock filename="footer.njk" title="footer.njk" language="html" className="uk_gist_code_box mt_ms">
      {`<footer class=&#34;footer&#34;>
      						<address>&copy; 2022 Gulp Setting</address>
      					</footer>
      					<!-- // footer -->`}
      </CodeBlock>

      			<p className="mt_ms">
      				<i className="filename">_header.njk</i>에서는 <i className="filename">_gnb.json</i>의 <code>data</code>를 이용해서 메뉴를 구성합니다.<br />
      				코드 적용 후 <mark><code>&lt;a&gt;</code> 태그의 tab indent를 반복문 선언 라인에 맞춰주세요.</mark>
      			</p>
      			
      <CodeBlock filename="header.njk" title="header.njk" language="html" className="uk_gist_code_box mt_ms">
      {`<header class="header">
      						<strong>Gulp Setting</strong>
      						<nav>
      							{%- for navigation in gnb_data %}
      							<a href="{{ navigation.href }}">{{ navigation.name }}</a>
      							{%- endfor %}
      						</nav>
      					</header>
      					<!-- // header -->`}
      </CodeBlock>

      		</article>
      		

      		<article className="mt_ml indent">
      			<h3 className="ml_mn t_blue">_json 파일 세팅</h3>
      			<p className="mt_s">
      				<i className="filename">_header.njk</i>의 메뉴 구성에 사용되며, 메뉴 외에 <code>json</code>형식이 필요한 다른 부분에도 사용 가능합니다.
      			</p>
      			
      <CodeBlock filename="_gnb.json" title="_gnb.json" language="html" className="uk_gist_code_box mt_ms">
      {`{
      						"gnb_data": [
      							{
      								"name": "home",
      								"href": "/"
      							},
      							{
      								"name": "intro",
      								"href": "/pages/intro.html"
      							},
      							{
      								"name": "history",
      								"href": "/pages/history.html"
      							}
      						]
      					}`}
      </CodeBlock>

      		</article>
      		

      		<article className="mt_ml indent">
      			<h3 className="ml_mn t_blue">_macro 파일 세팅</h3>
      			<p className="mt_s">
      				<code>macro</code>는 <b className="t_blue">njk</b>의 문법이며,
      				재사용 가능한 콘텐츠를 함수의 형태(function)로 정의하는 문법입니다.
      			</p>
      			
      <CodeBlock filename="_macro.njk" title="_macro.njk" language="html" className="uk_gist_code_box mt_ms">
      {`{%- macro image( class, src, alt, width="", height="auto" ) -%}
      						<figure class="{{ class }}">
      							<img src="{{ src }}" width="{{ width }}" height="{{ height }}">
      							<figcaption>{{ alt }}</figcaption>
      						</figure>
      					{%- endmacro %}`}
      </CodeBlock>

      		</article>
      		

      		<article className="mt_ml indent">
      			<h3 className="ml_mn t_blue">_layout.njk 파일 세팅</h3>
      			<p className="mt_s">
      				공통 레이아웃 템플릿을 설정하는 파일입니다.<br />
      				<b>하나의 템플릿으로 메인과 서브 페이지를 함께 구성할 수도 있고, 메인과 서브를 각각 분리하여 설정할 수도 있습니다.</b>
      				또한, 서브 페이지의 레이아웃이 여러 유형일 경우 <b>각 유형별로 별도의 레이아웃 템플릿을 만들어 설정</b>할 수 있어
      				프로젝트 구조에 맞게 유연하게 대응할 수 있습니다.
      			</p>
      			<p className="mt_s">
      				아래 <code>include</code> 문법은 <b className="t_blue">njk</b>의 정식 <code>include</code> 문법이 아닙니다.<br />
      				<b className="t_blue">njk</b>의 유일한 단점은 빌드 후 생성된 <b>HTML 코드의 들여쓰기(Tab Indent)가 의도한 대로 정리되지 않는다는 점</b>입니다.
      				이 단점은 <code>macro</code>와 <code>filter</code>를 활용해 들여쓰기를 수동으로 조정함으로써 어느 정도 보완할 수 있습니다.<br />
      				또한 <code>-</code>(minus) 기호를 사용하면 <b>불필요한 빈 줄이 생성되는 것을 방지</b>할 수 있습니다.<br />
      				<mark>&apos;<b>Gulp NJK 문법</b>&apos; <b>페이지</b>에서 자세하게 소개합니다.</mark>
      			</p>
      			
      <CodeBlock filename="_layout.njk" title="_layout.njk" language="html" className="uk_gist_code_box mt_ms">
      {`{%- macro include(fileName) -%}
      						{%- include fileName ignore missing -%}
      					{%- endmacro -%}
      					{#- // 들여쓰기(Tab Indent) 조정을 위한 macro -#}

      					<!DOCTYPE html>
      					<html lang="ko">
      					<head>
      						<meta charset="UTF-8">
      						<title>Gulp Setting</title>
      						<link href="/assets/css/style.min.css" rel="stylesheet" />
      					</head>
      					<body>
      					<div class="wrap">
      						{{ include( "_templates/_include/_header.njk" ) | tabIndent(1) }}

      						<main class="container">
      							{% filter tabIndent(1) %}
      								{% block content %}
      								{% endblock %}
      							{%- endfilter %}
      						</main>
      						<!-- // content -->

      						{{ include( "_templates/_include/_footer.njk" ) | tabIndent(1) }}
      					</div>
      					<!-- //wrap -->

      					<script src="/assets/js/main.min.js"></script>
      					</body>
      					</html>`}
      </CodeBlock>

      		</article>
      		

      		<article className="mt_ml indent">
      			<h3 className="ml_mn t_blue">페이지(메인, 서브) 파일 세팅</h3>
      			<p className="mt_s">
      				페이지 소스를 보면 구조가 단순합니다. 레이아웃 없이 콘텐츠만으로 구성되어 있으며,
      				실제 레이아웃은 <i className="filename">_layout.njk</i> 파일과 <b>병합되어 빌드</b>됩니다.<br />
      				각 페이지는 <code>block content</code> 영역 안에 해당 콘텐츠만 삽입하며,
      				<i className="filename">index.njk</i> 파일에서는 <code>macro</code>를 사용하기 위해
      				<i className="filename">_macro.njk</i> 파일을 <code>import</code>합니다.
      			</p>
      			
      <CodeBlock filename="index.njk" title="index.njk" language="html" className="uk_gist_code_box mt_ms">
      {`{%- extends "_templates/_layout.njk" -%}
      					{%- import "_templates/_macro/_macro.njk" as macro -%}

      					{% block content %}
      						<h1>index 페이지 입니다.</h1>
      						{{ macro.image( "image_box", "/assets/images/visual.png", "메인 이미지 입니다.", width="400px" ) }}
      					{%- endblock %}`}
      </CodeBlock>

      			
      <CodeBlock filename="history.njk" title="history.njk" language="html" className="uk_gist_code_box mt_ms">
      {`{%- extends "_templates/_layout.njk" -%}

      					{% block content %}
      						<h1>history 페이지 입니다.</h1>
      					{%- endblock %}`}
      </CodeBlock>

      			
      <CodeBlock filename="intro.njk" title="intro.njk" language="html" className="uk_gist_code_box mt_ms">
      {`{%- extends "_templates/_layout.njk" -%}

      					{% block content %}
      						<h1>intro 페이지 입니다.</h1>
      					{%- endblock %}`}
      </CodeBlock>

      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">4.1.3. njk 및 부가 패키지 설치</h2>
      		<p className="mt_m">
      			<b className="terminal">터미널</b>에서 아래 명령을 실행하여 <mark><b>njk</b>(gulp-nunjucks-render)</mark>와 <i className="under">html 빌드에 필요한 부가적인 패키지</i>를 설치합니다.
      		</p>
      		<TerminalBlock className="terminal_code_box mt_m">
      {`npm i gulp-nunjucks-render -D
      				npm i gulp-plumber -D
      				npm i gulp-cached -D
      				npm i gulp-data -D
      				npm i fs -D
      				npm i del@6.0.0 -D

      				// shorthand
      				npm i gulp-nunjucks-render gulp-plumber gulp-cached gulp-data fs del@6.0.0 -D`}
      </TerminalBlock>

      		<article className="mt_ml indent">
      			<h3 className="ml_mn t_blue">gulp-nunjucks-render</h3>
      			<p className="mt_s">
      				<b>Nunjucks 템플릿 파일(.njk)을 HTML로 렌더링하기 위한 메인 패키지</b>입니다.<br />
      				Gulp 작업 흐름에서 Nunjucks 템플릿을 컴파일하여 최종 HTML 파일을 생성하는 핵심 역할을 담당합니다.
      			</p>
      		</article>
      		

      		<article className="mt_ml indent">
      			<h3 className="ml_mn t_blue">gulp-plumber</h3>

      			<p className="mt_s">
      				Gulp 작업(예: SCSS 컴파일, 템플릿 렌더링 등)을 하다 보면 <b>작은 문법 오류 하나에도 전체 Gulp 프로세스가 멈추는 일이 발생</b>할 수 있습니다.
      				이럴 경우 매번 Gulp를 다시 실행해야 해서 매우 번거롭고 작업 흐름이 끊깁니다.<br />
      				<code className="t_blue">gulp-plumber</code>는
      				Gulp에서 사용하는 <b>에러 처리용 플러그인</b>으로, <b>작업 도중 에러가 발생해도 Gulp 프로세스가 중단되지 않도록 도와줍니다.</b>
      			</p>
      			<dl className="dl_dot_lst mt_s">
      				<dt>
      					<code className="t_blue">gulp-plumber</code>를 사용하면:
      				</dt>
      				<dd>
      					에러가 발생해도 Gulp가 중단되지 않고 계속 작동합니다.
      				</dd>
      				<dd>
      					에러 메시지를 콘솔에 출력하여 문제 원인을 확인할 수 있습니다.
      				</dd>
      				<dd>
      					개발 중 자동 리로드나 watch 기능이 끊기지 않습니다.
      				</dd>
      			</dl>
      		</article>
      		

      		<article className="mt_ml indent">
      			<h3 className="ml_mn t_blue">gulp-cached</h3>
      			<p className="mt_s">
      				Gulp는 기본적으로 <code>src</code> 경로 내 파일 중 하나라도 변경되면, <b>해당 경로에 포함된 모든 파일을 다시 처리</b>합니다.
      				예를 들어 <i className="filename">history.html</i> 하나만 수정해도,
      				<i className="filename">intro.html</i>, <i className="filename">sitemap.html</i> 등 나머지 파일들도 함께 빌드 대상이 됩니다.
      				<b>파일 수가 많을 경우 이로 인해 빌드 시간이 비효율적으로 길어질 수 있습니다.</b><br />

      				<code>gulp-cached</code>는 <b>파일의 변경 여부를 캐시에 저장</b>해,
      				<b>변경된 파일만 <i className="t_blue">Gulp task</i>에서 처리하도록 만들어 줍니다.</b>
      				이 방식은 특히 정적 HTML, 이미지, Sass, JavaScript 파일이 많은 프로젝트에서 <b>처리 시간을 크게 줄이는 데 효과적</b>입니다.
      			</p>
      		</article>
      		

      		<article className="mt_ml indent">
      			<h3 className="ml_mn t_blue">gulp-data</h3>
      			<p className="mt_s">
      				<code className="t_blue">gulp-data</code>는 Gulp에서 사용하는
      				<strong>템플릿 엔진</strong>(Nunjucks, Pug, Handlebars 등)에 <b>외부 데이터를 주입하기 위해 사용되는 플러그인</b>입니다.<br />
      				JSON 파일, front-matter, API 응답, 데이터베이스 결과 등 <b>다양한 형태의 데이터를 템플릿 렌더링 시점에 동적으로 삽입</b>할 수 있습니다.<br />
      			</p>
      			<p className="mt_s">
      				예를 들어, <i className="filename">gnb.json</i> 파일에 정의된 내비게이션 데이터를 불러와 HTML 템플릿에 삽입하면,
      				<b>메뉴 항목을 코드 없이 데이터만으로 관리</b>할 수 있습니다.<br />
      				<code className="t_blue">gulp-data</code>는 각 파일의 경로 정보를 활용해 <b>파일별로 다른 데이터를 적용할 수 있는 점도 큰 장점</b>입니다.
      			</p>
      			<dl className="mt_s dl_dot_lst">
      				<dt>핵심 기능</dt>
      				<dd>
      					Gulp 스트림 안에서 외부 데이터를 불러와 템플릿에 주입할 수 있습니다.
      				</dd>
      				<dd>
      					JSON, YAML, front-matter, 동적 함수, DB 쿼리 등 다양한 데이터 소스 사용 가능합니다.
      				</dd>
      				<dd>
      					템플릿 파일 단위로 다른 데이터 적용이 가능합니다. (예: 파일명 기반 매핑)
      				</dd>
      				<dd>
      					주로 gulp-nunjucks, gulp-pug 등과 함께 사용합니다.
      				</dd>
      			</dl>
      		</article>
      		

      		<article className="mt_ml indent">
      			<h3 className="ml_mn t_blue">fs</h3>
      			<p className="mt_s">
      				<code className="t_blue">fs</code>는 <b>Node.js에서 기본으로 제공하는 파일 시스템(File System) 모듈</b>로,
      				파일이나 디렉토리에 접근하여 <b>생성, 읽기, 쓰기, 삭제 등의 작업을 수행할 수 있게 해줍니다.</b><br />
      				이 모듈을 사용하면 텍스트 파일, JSON 파일, 이미지 파일 등 <b>다양한 파일을 Node.js 코드에서 직접 다룰 수 있으며</b>,
      				동기(<code>fs.readFileSync</code>)와 비동기(<code>fs.readFile</code>) 방식 모두 지원합니다.<br />

      				본 커리큘럼에서는 <code className="t_blue">fs</code>를 사용해 JSON 파일을 읽고,
      				그 데이터를 <b className="t_blue">njk</b> 빌드 과정에 활용합니다.
      			</p>
      		</article>
      		

      		<article className="mt_ml indent">
      			<h3 className="ml_mn t_blue">del</h3>
      			<p className="mt_s">
      				<code className="t_blue">del</code>은 Node.js에서 사용하는 파일 및 폴더 삭제용 유틸리티로,
      				<b>Gulp 등 빌드 도구에서 불필요한 파일이나 디렉터리를 제거할 때 사용됩니다.</b><br />
      				주로 <code>dist</code>, <code>build</code>, <code>temp</code>와 같은 결과물 폴더를
      				<b>빌드 전에 먼저 삭제하여 항상 최신 상태로 재생성</b>할 수 있게 도와줍니다.<br />
      				Gulp에서는 <i className="folder">dist</i> 폴더를 항상 최신 상태로 유지하기 위해,
      				작업 실행 전 <code className="t_blue">del</code>을 사용해 <i className="folder">dist</i> 폴더를 삭제한 후 다시 빌드합니다.
      			</p>
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">4.1.4. gulpfile.babel.js 세팅</h2>
      		<p className="mt_m">
      			이 섹션에서 <b className="t_blue">njk</b> 및 Gulp의 전반적인 흐름을 세팅합니다.<br />
      			<i className="filename">gulpfile.babel.js</i> 파일의 기존 코드를 모두 삭제한 후, 아래 코드를 새로 적용합니다.<br />
      			<mark>영역별 설명은 주석으로 대체합니다.</mark>
      		</p>
      		
      <CodeBlock filename="gulpfile.babel.js" title="gulpfile.babel.js" language="html" className="uk_gist_code_box mt_m">
      {`// import -----------------------------------------------------------
      				import gulp from "gulp";
      				import nunjucksRender from "gulp-nunjucks-render";
      				import plumber from "gulp-plumber";
      				import data from "gulp-data";
      				import cached from "gulp-cached";
      				import fs from "fs";
      				import del from "del";


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
      							str = str.replace(/^(?=.)/gm, new Array(numOfIndents + 1).join('\\t'));
      							if(!firstLine) {
      								str = str.replace(/^\\s+/, "");
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

      				// clean task
      				const clean = () => del([dist]);                       // dist 폴더 삭제


      				// series & parallel (task 그룹화) ----------------------------------

      				// 순차적으로 실행되어야 하는 task 그룹
      				const prepare = gulp.series([ clean ]);

      				// 위 prepare 실행 완료 후 순차적으로 실행되어야 하는 task 그룹
      				const assets = gulp.series([ html ]);


      				// export (gulp 실행 명령어) ----------------------------------------

      				// gulp build 실행 (prepare 실행 후 assets 실행)
      				export const build = gulp.series([ prepare, assets ]);

      				// gulp dev 실행 (build 실행)
      				export const dev = gulp.series([ build ]);`}
      </CodeBlock>

      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">4.1.5. gulp dev 실행</h2>
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
      			<img src={`${IMG.GULP}/gulp_njk_run_dev_cmd.png`} alt="gulp dev 실행시 터미널에 작업내용 출력" />
      		</p>
      		<p className="mt_ms">
      			세팅이 정상적으로 완료되었다면, <i className="terminal">터미널</i>에 위와 같은 메시지가 출력되며
      			<i className="filename">gulpfile.babel.js</i>에 설정한 순서대로 작업이 실행되는 것을 확인할 수 있습니다.
      		</p>
      		<ol className="ol_lst indent_small">
      			<li>
      				<code>dev</code> 작업 시작
      			</li>
      			<li>
      				<i className="folder">dist</i> 폴더 삭제를 위한 <code>clean task</code> 작업 시작 → 삭제 완료 후 종료
      			</li>
      			<li>
      				HTML 빌드를 위한 <code>html task</code> 작업 시작 →
      				<code>*.njk</code> 파일을 <code>*.html</code>로 변환하여 <i className="folder">dist</i> 폴더에 생성 →
      				작업 종료
      			</li>
      			<li>
      				<code>dev</code> 작업 종료
      			</li>
      		</ol>
      		<p className="mt_s">
      			작업이 완료된 후 폴더를 확인해 보면,
      			<i className="folder">dist</i> 폴더가 생성되어 있고 그 안에 <b>변환된 HTML 파일들이 포함</b>되어 있는 것을 볼 수 있습니다.<br />
      			<i className="folder">_template</i> 폴더에 있던 파일들은 모두 <b>병합되어 HTML 파일로 빌드되었기 때문에</b>,
      			<i className="folder">dist</i> 폴더에는 <i className="folder">pages</i> 폴더와 <b>HTML 파일만 존재하는 것이 정상입니다.</b>
      		</p>
      		<p className="mt_ms">
      			<img src={`${IMG.GULP}/gulp_njk_run_dev.png`} alt="gulp dev 실행 후 dist 폴더 및 파일 생성" />
      		</p>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">4.1.6. 빌드 된 html 코드 확인</h2>
      		<p className="mt_m">
      			빌드가 완료된 후 생성된 HTML 파일에서 <strong>들여쓰기(Tab Indent)</strong>가 올바르게 적용되었는지,
      			불필요한 공백은 없는지 확인해 봅니다.<br />
      			각 HTML 파일에 레이아웃과 공통 영역이 정상적으로 병합되어 아래 같은 코드인지 확인해 보세요.
      		</p>
      		
      <CodeBlock filename="index.html" title="index.html" language="css" className="uk_gist_code_box mt_ms">
      {`<!DOCTYPE html>
      				<html lang="ko">
      				<head>
      					<meta charset="UTF-8">
      					<title>Gulp Setting</title>
      					<link href="/assets/css/style.min.css" rel="stylesheet" />
      				</head>
      				<body>
      				<div class="wrap">
      					<header>
      						<strong>Gulp Setting</strong>
      						<nav>
      							<a href="/">home</a>
      							<a href="/pages/intro.html">intro</a>
      							<a href="/pages/history.html">history</a>
      						</nav>
      					</header>
      					<!-- // header -->

      					<main class="container">
      						<h1>index 페이지 입니다.</h1>
      						<figure class="image_box">
      							<img src="/_assets/images/visual.png" width="400px" height="auto">
      							<figcaption>메인 이미지 입니다.</figcaption>
      						</figure>
      					</main>
      					<!-- // content -->

      					<footer>
      						<address>© 2022 Gulp Setting</address>
      					</footer>
      					<!-- // footer -->
      				</div>
      				<!-- //wrap -->

      				<script src="/_assets/js/main.min.js"></script>
      				</body>
      				</html>`}
      </CodeBlock>

      		
      <CodeBlock filename="history.html" title="history.html" language="css" className="uk_gist_code_box mt_ms">
      {`<!DOCTYPE html>
      				<html lang="ko">
      				<head>
      					<meta charset="UTF-8">
      					<title>Gulp Setting</title>
      					<link href="/assets/css/style.min.css" rel="stylesheet" />
      				</head>
      				<body>
      				<div class="wrap">
      					<header>
      						<strong>Gulp Setting</strong>
      						<nav>
      							<a href="/">home</a>
      							<a href="/pages/intro.html">intro</a>
      							<a href="/pages/history.html">history</a>
      						</nav>
      					</header>
      					<!-- // header -->

      					<main class="container">
      						<h1>history 페이지 입니다.</h1>
      					</main>
      					<!-- // content -->

      					<footer>
      						<address>© 2022 Gulp Setting</address>
      					</footer>
      					<!-- // footer -->
      				</div>
      				<!-- //wrap -->

      				<script src="/_assets/js/main.min.js"></script>
      				</body>
      				</html>`}
      </CodeBlock>

      		
      <CodeBlock filename="intro.html" title="intro.html" language="css" className="uk_gist_code_box mt_ms">
      {`<!DOCTYPE html>
      				<html lang="ko">
      				<head>
      					<meta charset="UTF-8">
      					<title>Gulp Setting</title>
      					<link href="/assets/css/style.min.css" rel="stylesheet" />
      				</head>
      				<body>
      				<div class="wrap">
      					<header>
      						<strong>Gulp Setting</strong>
      						<nav>
      							<a href="/">home</a>
      							<a href="/pages/intro.html">intro</a>
      							<a href="/pages/history.html">history</a>
      						</nav>
      					</header>
      					<!-- // header -->

      					<main class="container">
      						<h1>intro 페이지 입니다.</h1>
      					</main>
      					<!-- // content -->

      					<footer>
      						<address>© 2022 Gulp Setting</address>
      					</footer>
      					<!-- // footer -->
      				</div>
      				<!-- //wrap -->

      				<script src="/_assets/js/main.min.js"></script>
      				</body>
      				</html>`}
      </CodeBlock>


      		<p className="mt_m">
      			여기까지 html 편집을 위한 <b className="t_blue">njk(gulp-nunjucks-render)</b> 세팅이 마무리됐습니다.<br />
      			더 효율적이고 체계적인 HTML 구성을 원한다면 <b>Gulp NJK 문법</b> 페이지를 참고하는 것을 추천합니다.<br />
      			<a href="/buildSystem/gulp/04-gulp_njk/02-njk_syntax" className="box_link mt_sm mb_sm">Gulp NJK 문법 바로가기</a>
      		</p>
      		<p className="mt_ms">
      			현재는 <b>HTML 편집을 위한 세팅만 완료된 상태</b>이므로, 생성된 HTML 파일을 브라우저에서 직접 열어보면
      			<b>CSS, JavaScript, 이미지 파일이 제대로 로드되지 않을 수 있습니다.</b><br />
      			이는 아직 <b>웹 서버와 빌드 프로세스가 완전히 구성되지 않았기 때문</b>이며, 정상적인 현상입니다.
      		</p>
      		<p className="mt_ms">
      			다음 단계에서는 <b>웹 서버를 구축</b>하여 <code className="t_blue">gulp dev</code> 실행 시 <b>자동으로 브라우저를 열고</b>,
      			<code className="t_blue">gulp.watch</code>를 통해 <b>파일 변경 사항을 실시간으로 감지해 브라우저에 자동 반영</b>하는 방법을 알아보겠습니다.
      		</p>
      	</section>
      	

      	<hr />

      	<p className="t_blue mt_xxl"><b>아래 내용은 선택사항으로 건너띄워도 커리큘럼 진행에 문제가 되지 않습니다.</b></p>
      	<section className="indent mt_l">
      		<h2 className="ml_mn">4.1.7. 에디터기에서 njk 문법 활성화 (WebStorm 기준)</h2>
      		<p className="mt_m">
      			<b>njk</b> 특수 문법은 에디터에서 기본적으로 인식되지 않아 단색으로 표시되는 경우가 많습니다.
      			이는 퍼블리싱 작업에 직접적인 영향을 주지는 않지만, <b>작업 시 불편함을 초래할 수 있습니다.</b>
      		</p>
      		<p className="mt_s">
      			이 문제는 <b className="t_blue">Twig</b> 플러그인을 활용해 해결할 수 있습니다.<br />
      			<b className="t_blue">Twig</b>는 Symfony 등 PHP 프레임워크에서 널리 사용되는 템플릿 엔진으로,
      			<b>njk</b>와 유사한 문법 구조를 가지고 있어 문법 강조에 적합합니다.<br />
      			플러그인을 설치한 후 <i className="t_black">[file name patterns]</i>에 <code>*.njk</code>를 추가하면,
      			에디터에서 <b>njk</b> 파일도 <b className="t_blue">Twig</b> 문법으로 인식하게 되어 보다 쾌적한 개발 환경을 만들 수 있습니다.
      		</p>

      		<p className="mt_ml mb_0 notice_blue">WebStorm 기준으로 njk 문법 활성화 방법을 설명합니다.</p>

      		<ol className="ol_lst mt_ml indent">
      			<li className="tit_h4 t_black">
      				<strong className="font-16 t_black">Twig install</strong>
      				<p className="mt_sm t_666">
      					<b>&#91;설정(Settings..) <i className="t_aaa">&gt;</i> Plugins&#93;</b> 에서
      					<b className="t_blue">Twig</b>을 검색하고 설치합니다.
      				</p>
      				<p className="mt_s">
      					<img src={`${IMG.GULP}/twig_install.png`} alt="twig 설치" width="598" height="auto" />
      				</p>
      			</li>
      			<li className="tit_h4 t_black mt_ml">
      				<strong className="font-16 t_black">njk 파일 패턴 추가</strong>
      				<p className="mt_sm t_666">
      					<b>&#91;설정(Settings..) <i className="t_aaa">&gt;</i> Editor <i className="t_aaa">&gt;</i> File Types&#93;</b> 에서
      					<b className="t_blue">Twig</b>을 찾고,
      					<b>&#91;file name patterns&#93;</b>에서 <b className="t_blue">*.njk</b> 페턴을 추가합니다.
      				</p>
      				<p className="mt_s">
      					<img src={`${IMG.GULP}/twig_add_pattern.png`} alt="twig의 파일 패턴 추가" width="823" height="auto" />
      				</p>
      			</li>
      			<li className="tit_h4 t_black mt_ml">
      				<strong className="font-16 t_black">Tab indent 설정</strong>
      				<p className="mt_sm t_666">
      					<b>&#91;설정(Settings..) <i className="t_aaa">&gt;</i> Editor <i className="t_aaa">&gt;</i> Code Style <i className="t_aaa">&gt;</i> Twig&#93;</b> 에서
      					각각의 항목을 아래 이미지처럼 수정합니다.
      				</p>
      				<p className="mt_s">
      					<img src={`${IMG.GULP}/twig_tab_size.png`} alt="twig의 Tab indent 설정" width="963" height="auto" />
      				</p>
      			</li>
      		</ol>

      		<p className="mt_ml">
      			<b className="t_blue">Twig</b> 설치 및 세팅을 마친 후 코드를 확인하면 <mark>단색이었던 <b className="t_black">njk 문법이 활성화</b>되어 있는 것을 확인할 수 있습니다.</mark>
      		</p>
      		<figure className="img_figure mt_ms browser_figure">
      			<figure>
      				<img src={`${IMG.GULP}/twig_before.png`} alt="Twig 적용 전 코드 스타일" width="819" height="auto" />
      				<figcaption className="t_red weight-bold">[njk 문법 활성화 전]</figcaption>
      			</figure>
      			<figure className="mt_l">
      				<img src={`${IMG.GULP}/twig_after.png`} alt="Twig 적용 후 활성화 된 코드 스타일" width="819" height="auto" />
      				<figcaption className="t_blue weight-bold">[njk 문법 활성화 적용]</figcaption>
      			</figure>
      		</figure>
      	</section>
      	

      	<figure className="img_figure mt_l">
      		<img src={`${IMG.GULP}/04_gulp_01.png`} alt="njk 세팅" />
      		<figcaption>
      			njk 세팅 
      		</figcaption>
      	</figure>
    </>
  )
}

export default NjkSettingPage
