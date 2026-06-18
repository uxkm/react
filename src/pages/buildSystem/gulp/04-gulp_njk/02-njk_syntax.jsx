import { useGulpPageMeta } from '@/hooks/useGulpPageMeta'
import { IMG } from '@/config/path'
import CodeBlock from '@/components/code/CodeBlock'

function NjkSyntaxPage() {
  useGulpPageMeta()

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
      		<h2 className="sound_only">요약 설명</h2>
      		<p>
      			<b className="t_blue">njk</b>는 JavaScript의 대부분의 문법을 사용할 수 있을 정도로 강력한 템플릿 엔진입니다.
      			기능이 매우 다양하지만, 이 페이지에서는 자주 사용되는 핵심 문법 위주로 설명합니다.<br />
      			본 커리큘럼에서 소개하는 문법만 잘 활용해도 웹사이트를 보다 편리하고 효율적으로 제작할 수 있습니다.
      		</p>
      		<p className="mt_s">
      			<b className="t_blue">njk</b>의 전체 문법은 <b className="underline">&apos;Nunjucks 템플릿&apos;</b> 페이지에서 확인할 수 있습니다.
      		</p>
      		<a href="https://mozilla.github.io/nunjucks/templating.html" className="mt_m box_link external" target="_blank" rel="noreferrer" title="Nunjucks 템플릿 새창열림">Nunjucks 템플릿 바로가기</a>
      	</blockquote>

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">4.2.1. 변수(set)</h2>
      		<p className="mt_m">
      			JavaScript의 변수와 같습니다. 다만 <code>var</code>, <code>let</code>, <code>const</code>가 아닌 <code>set</code>으로 변수를 선언합니다.<br />
      			변수의 값이 String(문자열)일 경우 반드시 큰따옴표(&quot;) 또는 작은따옴표(&apos;)로 감싸야 합니다.
      		</p>
      		
      <CodeBlock filename="njk - variable syntax" title="njk - variable syntax" language="html" className="uk_gist_code_box mt_ms">
      {`<!-- 문법 -->
      				{% set 변수명 = 변수 값 %}

      				<!-- 변수 선언 -->
      				{% set title = "uxkm" %}

      				<!-- 변수 대입 -->
      				<title>{{ title }}</title>

      				<!-- 빌드 후 -->
      				<title>uxkm</title>`}
      </CodeBlock>

      		<p className="mt_ms">
      			문자 배열을 활용하여 여러 개의 변수를 선언하고 활용할 수 있습니다.
      		</p>
      		
      <CodeBlock filename="array variable 1" title="njk - variable" language="html" className="uk_gist_code_box mt_ms">
      {`<!-- 배열 변수 선언 1 -->
      				{% set pageData = { pageName: "UXKM", pageDescription: "강의와 스터디를 위한 홈페이지 입니다." } %}

      				<!-- 변수 대입 -->
      				<h1>{{ pageData.pageName }}</h1>
      				<p>{{ pageData.pageDescription }}</p>

      				<!-- 빌드 후 -->
      				<h1>UXKM</h1>
      				<p>강의와 스터디를 위한 홈페이지 입니다.</p>`}
      </CodeBlock>

      		
      <CodeBlock filename="array variable 2" title="njk - variable" language="html" className="uk_gist_code_box mt_ms">
      {`<!-- 배열 변수 선언 2 -->
      				{% set items = [
      					{
      						title: "UXKM",
      						Description: "강의와 스터디를 위한 홈페이지 입니다."
      					},
      					{
      						title: "HTML 이란?",
      						Description: "HTML은 'HyperText Markup Language'의 약자입니다."
      					}
      				] %}

      				<!-- 변수 대입 -->
      				{% for item in items %}
      					<section>
      					<h2>{{ item.title }}</h2>
      					<p>{{ item.Description }}</p>
      					</section>
      				{% endfor %}

      				<!-- 빌드 후 -->
      				<section>
      					<h2>UXKM</h2>
      					<p>강의와 스터디를 위한 홈페이지 입니다.</p>
      				</section>

      				<section>
      					<h2>HTML 이란?</h2>
      					<p>HTML은 'HyperText Markup Language'의 약자입니다.</p>
      				</section>`}
      </CodeBlock>

      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">4.2.2. 조건문(if)</h2>
      		<p className="mt_ms">
      			javscript의 <code>if</code> 문과 같습니다.
      			일반적인 <code>if</code>, <code>else</code>, <code>else if</code>가 가능하며 삼항 연산자도 가능합니다.<br />
      			단, <b className="t_blue">njk</b>에서는 <mark>닫는 <code>if</code>도 필수로 선언</mark>되어야 합니다.
      		</p>

      		
      		<article className="indent mt_m">
      			<h3 className="ml_mn t_blue">일반 조건문</h3>
      			
      <CodeBlock filename="njk - if syntax" title="njk - if syntax" language="html" className="uk_gist_code_box all_black mt_ms">
      {`// 한가지 조건
      					{% if 조건 %}
      						It is true
      					{% endif %}

      					// 한가지 이상의 조건
      					{% if 조건1 %}
      						I am hungry
      					{% elif 조건2 %}
      						I am tired
      					{% else %} // 외 조건
      						I am good!
      					{% endif %}`}
      </CodeBlock>

      			<p className="mt_ms">
      				<code>&& (and)</code>, <code>|| (or)</code>도 사용할 수 있습니다. 다만 <b className="t_blue">njk</b>에서는 기호가 아닌 영문으로 사용합니다.
      			</p>
      			
      <CodeBlock filename="njk - else if syntax" title="njk - else if syntax" language="html" className="uk_gist_code_box all_black mt_ms">
      {`// and (&&)
      					{% if 조건1 and 조건2 %}  // 두가지 조건에 모두 만족할 때
      						It is true
      					{% endif %}

      					// or (||)
      					{% if 조건1 or 조건2 %}  // 두가지 조건 중 하나라도 만족할 때
      						It is true
      					{% endif %}`}
      </CodeBlock>

      		</article>

      		
      		<article className="indent mt_ml">
      			<h3 className="ml_mn t_blue">삼항 연산자</h3>
      			<p className="mt_s">
      				javascript의 삼항 연산자와 다르게 <code>else</code>는 선택 사항입니다.
      			</p>
      			
      <CodeBlock filename="njk - ternary operator" title="njk - ternary operator" language="html" className="uk_gist_code_box all_black mt_ms">
      {`//  foo가 진실이면 "true", 그렇지 않으면 "false" 문자열 출력
      					{{ "true" if foo else "false" }}

      					// foo가 진실이면 "true" 문자열 출력
      					{{ "true" if foo }}`}
      </CodeBlock>

      		</article>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">4.2.3. 반복문(for)</h2>

      		<article className="indent mt_ml">
      			<h3 className="ml_mn t_blue">json 데이타를 활용한 반복문</h3>

      			<p className="mt_ms">
      				<i className="filename">_gnb.json</i> 파일에 담긴 데이터를 기반으로 반복문을 구성한 것입니다.<br />
      				이 전 페이지에서 세팅한 것처럼
      				<i className="filename">_gnb.json</i> 파일이 연결되어 있다고 가정해 봅니다.
      			</p>
      			
      <CodeBlock filename="_gnb.json" title="njk - _gnb.json" language="html" className="uk_gist_code_box mt_ms">
      {`{
      					"nav_data": [
      						{
      							"name": "home",
      							"href": "/"
      						},
      						{
      							"name": "intro",
      							"href": "/page/intro.html"
      						},
      						{
      							"name": "history",
      							"href": "/page/history.html"
      						}
      					]
      				}`}
      </CodeBlock>

      			<p className="mt_ms">
      				위 json을 이용하여 반복문을 선언합니다.
      			</p>
      			
      <CodeBlock filename="nav.njk <i>(빌드 전)</i>" title="njk - for" language="html" className="uk_gist_code_box mt_ms">
      {`<nav>
      					{%- for link_append in nav_data %}
      					<a href="{{ link_append.href }}">{{ link_append.name }}</a>
      					{%- endfor %}
      				</nav>`}
      </CodeBlock>

      			<p className="mt_ms">
      				빌드가 진행되면 아래처럼 3개의 <code>&lt;a&gt;</code> 태그가 생성되고, <code>href</code>와 <b>링크 텍스트</b>가 삽입됩니다.
      			</p>
      			
      <CodeBlock filename="nav.html <i>(빌드 후)</i>" title="njk - for" language="html" className="uk_gist_code_box mt_ms">
      {`<nav>
      					<a href="/">home</a>
      					<a href="/page/intro.html">intro</a>
      					<a href="/page/history.html">history</a>
      				</nav>`}
      </CodeBlock>

      			<p className="mt_ms">
      				만약 아이템의 <code>index</code> 값을 추출하고 싶다면 <mark><code>&#123;&#123; loop.index &#125;&#125;</code></mark>를 사용하면 됩니다.
      				<i className="underline">javascript에서는 index가 <b className="t_black">0</b>부터 시작하지만 <b className="t_blue">njk</b>는 <b className="t_black">1</b>부터 시작합니다.</i>
      			</p>
      			
      <CodeBlock filename="loop.index" title="njk - loop.index" language="html" className="uk_gist_code_box mt_ms">
      {`<!-- 배열 -->
      				{% set items = ['안녕하세요', '반갑습니다', '환영합니다'] %}

      				<!-- 빌드 전 -->
      				{%- for loop_text in items %}
      				<p>{{ loop.index }}. {{ loop_text }}</p>
      				{%- endfor %}

      				<!-- 빌드 후 -->
      				<p>1. 안녕하세요</p>
      				<p>2. 반갑습니다</p>
      				<p>3. 환영합니다</p>`}
      </CodeBlock>

      		</article>
      		

      		<article className="indent mt_l">
      			<h3 className="ml_mn t_blue">변수(set)를 활용한 반복문</h3>
      			<p className="mt_ms">
      				JSON 데이터를 사용하지 않고, 변수를 활용한 간단한 반복문입니다.
      			</p>
      			
      <CodeBlock filename="nav.njk (빌드 전)" title="variable & for" language="html" className="uk_gist_code_box mt_ms">
      {`<!-- 변수 선언 -->
      				{% set nav_data = [
      					{
      						"name": "home",
      						"href": "/"
      					},
      					{
      						"name": "intro",
      						"href": "/page/intro.html"
      					},
      					{
      						"name": "history",
      						"href": "/page/history.html"
      					}
      				] %}

      				<!-- 변수를 for문에 적용 -->
      				<nav>
      					{%- for link_append in nav_data %}
      					<a href="{{ link_append.href }}">{{ link_append.name }}</a>
      					{%- endfor %}
      				</nav>`}
      </CodeBlock>

      			<p className="mt_ms">
      				빌드가 진행되면 아래처럼 3개의 <code>&lt;a&gt;</code> 태그가 생성되고, <code>href</code>와 <b>링크 텍스트</b>가 삽입됩니다.
      			</p>
      			
      <CodeBlock filename="nav.html (빌드 후)" title="variable & for" language="html" className="uk_gist_code_box mt_ms">
      {`<!-- 빌드 후 -->
      				<nav>
      					<a href="/">home</a>
      					<a href="/page/intro.html">intro</a>
      					<a href="/page/history.html">history</a>
      				</nav>`}
      </CodeBlock>

      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">4.2.4. 함수(macro)</h2>

      		<p className="mt_ml">
      			재사용 가능한 콘텐츠를 함수의 형태로 정의할 수 있습니다. react의 컴포넌트와 비슷한 개념입니다.
      		</p>

      		<article className="indent mt_l">
      			<h3 className="ml_mn t_blue">매개변수(파라미터)와 인수 값의 이해</h3>
      			<p className="mt_ms">
      				<b>njk</b>의 <b className="t_blue">macro</b>는 <mark>JavaScript의 함수와 비슷하게 동작</mark>합니다.
      				매크로를 정의할 때 <b className="t_black">매개변수(파라미터)</b>를 선언하고,
      				호출할 때 <b className="t_black">인수(아규먼트)</b>를 전달하여 값에 따라 다른 결과를 만들어낼 수 있습니다.<br />
      				따라서 실제로 매크로를 작성하기 전에 함수의 기본 개념(매개변수/인수 개념)을 이해하는 것이 도움이 됩니다.
      			</p>
      			
      <CodeBlock filename="매개변수, 인수" title="njk - macro" language="html" className="uk_gist_code_box all_black mt_ms">
      {`<!-- 매크로 정의: 여기서 'name'은 매개변수 -->
      					{% macro sayHello(name) %}
      						안녕하세요, {{ name }}님!
      					{% endmacro %}

      					<!-- 매크로 호출: 여기서 '홍길동'은 인수 값 -->
      					{{ sayHello("홍길동") }}`}
      </CodeBlock>

      			<dl className="dl_dot_lst mt_ms">
      				<dt><code className="weight-600">macro sayHello(name)</code></dt>
      				<dd>
      					여기서 <code>name</code>은 <i className="underline">매개변수(파라미터)</i> 입니다.
      				</dd>
      				<dd>
      					즉, 이 매크로가 어떤 값을 받을지 정의한 변수입니다.
      				</dd>
      			</dl>
      			<dl className="dl_dot_lst mt_ms">
      				<dt><code className="weight-600">sayHello(&quot;홍길동&quot;)</code></dt>
      				<dd>
      					<code>&quot;홍길동&quot;</code>은 <i className="underline">인수 값(Argument)</i> 입니다.
      				</dd>
      				<dd>
      					매크로를 호출할 때 <code>name</code> 자리에 넘겨주는 실제 값입니다.
      				</dd>
      			</dl>
      			<p className="mt_ms">
      				위 매크로가 빌드되면 <mark><code className="weight-600">&apos;안녕하세요. 홍길동님!&apos;</code></mark>이라는 결과가 출력됩니다.
      			</p>
      		</article>
      		

      		<article className="indent mt_l">
      			<h3 className="ml_mn t_blue">macro 정의</h3>
      			<p className="mt_ms">
      				아래처럼 <i className="filename">_macro.njk</i> 파일에 <code>input, figure</code> 매크로를 정의합니다.
      			</p>
      			
      <CodeBlock filename="_macros.njk" title="njk - macro" language="html" className="uk_gist_code_box all_black mt_ms">
      {`<!-- input macro -->
      					{% macro input( name, placeholder, type='text' ) %}
      						<input type="{{ type }}" name="{{ name }}" placeholder="{{ placeholder }}">
      					{% endmacro %}

      					<!-- figure macro -->
      					{% macro image( src, alt, width="", height="auto" ) %}
      						<figure>
      							<img src="{{ src }}" width="{{ width }}" height="{{ height }}">
      							<figcaption>{{ alt }}</figcaption>
      						</figure>
      					{% endmacro %}`}
      </CodeBlock>

      			<p className="mt_ms">
      				Nunjucks의 macro에서 매개변수를 정의할 때 <strong>기본값(default value)</strong>을 설정할 수 있습니다.<br />
      				이렇게 기본값이 지정된 매개변수는 <b>매크로 호출 시 해당 인수를 생략하면 자동으로 기본값이 사용됩니다.</b><br />
      				따라서 매개변수의 값을 매번 전달하지 않아도 되고, 필요한 경우에만 일부 인수만 전달할 수 있습니다.
      			</p>
      			<p className="mt_s">
      				<mark><code>input macro</code>의 <code className="weight-600">type</code></mark>과
      				<mark><code>figure macro</code>의 <code className="weight-600">height</code></mark>의 기본 값이 미리 선언되어 있습니다.<br />
      				<mark><code>input macro</code></mark>를 적용할 때 <code>type</code>의 값을 선언하지 않으면 <code>text input</code>으로 빌드 되며,<br />
      				<mark><code>figure macro</code></mark>를 적용할 때 <code>height</code>의 값을 선언하지 않으면 <code>height=&quot;auto&quot;</code>로 빌드 됩니다.
      			</p>
      		</article>
      		

      		<article className="indent mt_l">
      			<h3 className="ml_mn t_blue">macro 호출</h3>
      			<p className="mt_ms">
      				<i className="filename">_macro.njk</i> 파일을 호출한 후 필요한 인수 값을 적용하여 <b className="t_blue">macro</b>를 작성합니다.
      			</p>

      			<div className="indent mt_m">
      				<h4 className="ml_mn">위치 기반 인수 전달 (일반 호출)</h4>
      				<p className="mt_s">
      					매개변수 순서대로 인수 값을 적용하는 방법입니다.
      				</p>
      				
      <CodeBlock filename="html <i>(빌드 전)</i>" title="njk - macro" language="html" className="uk_gist_code_box all_black mt_ms">
      {`{%- import '_macro.njk' as macro -%}

      					<!-- input -->
      					<form>
      						{{ macro.input( 'email', 'email을 입력해 주세요.' ) }}
      						{{ macro.input( 'password', '비밀번호를 입력해 주세요.', 'password' ) }}
      					</form>

      					<!-- figure -->
      					{{ macro.image( 'images/intro.png', '안녕하세요. UXKM 입니다.', '100px' ) }}`}
      </CodeBlock>

      			</div>
      			

      			<div className="indent mt_ml">
      				<h4 className="ml_mn">이름 기반 인수 전달 (명시적 호출)</h4>
      				<p className="mt_s">
      					ES6처럼 이름 기반으로 인수 값을 전달하는 방법입니다.<br />
      					적용해야 할 인수가 많을 때 추천되는 방식으로, 인수의 순서가 헷갈릴 때 특히 유용합니다.
      				</p>
      				
      <CodeBlock filename="html <i>(빌드 전)</i>" title="njk - macro" language="html" className="uk_gist_code_box all_black mt_ms">
      {`{%- import '_macro.njk' as macro -%}

      					<!-- input -->
      					<form>
      						{{ macro.input( name='email', placeholder='email을 입력해 주세요.' ) }}
      						{{ macro.input( name='password', placeholder='비밀번호를 입력해 주세요.', type='password' ) }}
      					</form>

      					<!-- figure -->
      					{{ macro.image( src='images/intro.png', alt='안녕하세요. UXKM 입니다.', width='100px' ) }}`}
      </CodeBlock>

      			</div>
      			

      			<article className="indent mt_l">
      				<h3 className="ml_mn t_blue">macro 빌드</h3>
      				<p className="mt_ms">
      					빌드 시 아래와 같이 인수 값이 반영되어 태그가 생성됩니다.
      				</p>
      				
      <CodeBlock filename="html <i>(빌드 후)</i>" title="njk - macro" language="javascript" className="uk_gist_code_box mt_ms">
      {`<!-- input -->
      					<form>
      						<input type="text" name="email" placeholder="email을 입력해 주세요.">
      						<input type="password" name="password" placeholder="비밀번호를 입력해 주세요.">
      					</form>

      					<!-- figure -->
      					<figure>
      						<img src="images/intro.png" width="100px" height="auto">
      						<figcaption>안녕하세요. UXKM 입니다.</figcaption>
      					</figure>`}
      </CodeBlock>

      			</article>
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">4.2.5. include</h2>
      		<p className="mt_ms">
      			반복되는 콘텐츠를 별도 파일로 분리해 <b className="t_blue">include</b> 할 수 있습니다.
      		</p>
      		
      <CodeBlock filename="_header.njk" title="njk - include" language="html" className="uk_gist_code_box mt_ms">
      {`<header>
      					<h1>UXKM</h1>
      					<p>Welcome to...</p>
      				</header>`}
      </CodeBlock>

      		<p className="mt_ms">
      			필요한 페이지에서 <i className="filename">_header.njk</i> 파일을 <b className="t_blue">include</b> 합니다.
      		</p>
      		
      <CodeBlock filename="html <i>(include 선언)</i>" title="njk - include" language="html" className="uk_gist_code_box mt_ms">
      {`<div class="wrap">
      					{% include("_header.njk") %}

      					<p>UXKM 홈페이지의 모든 문서는 UXKM의 자산입니다.</p>
      				</div>`}
      </CodeBlock>

      		<p className="mt_ms">
      			빌드 시 아래처럼 <i className="filename">_header.njk</i>의 콘텐츠가 병합된 상태로 빌드 됩니다.
      		</p>
      		
      <CodeBlock filename="html <i>(빌드 후)</i>" title="njk - include" language="javascript" className="uk_gist_code_box mt_ms">
      {`<!-- include 호출 -->
      				<div class="wrap">
      					<header>
      						<h1>UXKM</h1>
      						<p>Welcome to...</p>
      					</header>

      					<p>UXKM 홈페이지의 모든 문서는 UXKM의 자산입니다.</p>
      				</div>`}
      </CodeBlock>

      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">4.2.6. layout template</h2>
      		<p className="mt_ms">
      			<b>njk</b>에서는 기준이 되는 <b>레이아웃 템플릿(<code>.njk</code> 파일)을 먼저 만들어 두고</b>,
      			각 개별 페이지에서는 이 레이아웃을 <strong>확장(extend)</strong>하여 필요한 콘텐츠만 정의해서 사용할 수 있습니다.<br />
      			이렇게 하면 모든 페이지가 동일한 레이아웃 구조를 공유하면서도 페이지마다 다른 내용만 퍼블리싱(출력)할 수 있습니다.
      		</p>
      		
      <CodeBlock filename="_layout.njk" title="njk - layout template" language="html" className="uk_gist_code_box mt_ms">
      {`<!DOCTYPE html>
      				<html lang="ko">
      					<head>
      						<meta charset="UTF-8">
      						<title>UXKM</title>
      					</head>
      					<body>
      						<div class="wrap">
      							&nbsp;
      							{%- block content %}
      							{%- endblock -%}
      							<!-- // content -->
      							&nbsp;
      						</div>
      						<!-- // wrap -->
      					</body>
      				</html>`}
      </CodeBlock>

      		<p className="mt_ms">
      			위 템플릿에서 콘텐츠 영역은 <code>block <mark>content</mark></code>로 지정되어 있습니다.
      			여기서 <code><mark>content</mark></code>는 해당 블록의 이름으로, 용도에 따라 자유롭게 이름을 지정할 수 있습니다.<br />
      			아래는 개별 페이지에서 템플릿을 호출하고, 해당 <code>block</code> 영역에 콘텐츠를 삽입하는 방법입니다.
      		</p>
      		
      <CodeBlock filename="index.njk <i>빌드 전</i>" title="njk - layout template" language="html" className="uk_gist_code_box mt_ms">
      {`{%- extends "__layout_default.njk" -%}

      				{% block content %}
      					<p>UXKM 홈페이지의 모든 문서는 UXKM의 자산입니다.</p>
      				{% endblock %}`}
      </CodeBlock>

      		<p className="mt_ms">
      			<i className="filename">index.njk</i>를 빌드 하면 아래처럼 <i className="filename">_layout.njk</i>와
      			<i className="filename">index.njk</i>를 병합하여
      			<i className="filename t_blue">index.html</i>로 빌드 됩니다.
      		</p>
      		
      <CodeBlock filename="index.html <i>빌드 후</i>" title="njk - layout template" language="html" className="uk_gist_code_box mt_ms">
      {`<!DOCTYPE html>
      				<html lang="ko">
      					<head>
      						<meta charset="UTF-8">
      						<title>UXKM</title>
      					</head>
      					<body>
      						<div class="wrap">
      							&nbsp;
      							<p>UXKM 홈페이지의 모든 문서는 UXKM의 자산입니다.</p>
      							&nbsp;
      						</div>
      						<!-- //wrap -->
      					</body>
      				</html>`}
      </CodeBlock>

      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">4.2.7. template 상속</h2>
      		<p className="mt_ms">
      			일반적으로, 호출하는 템플릿의 콘텐츠 영역에 새롭게 내용을 채워 넣을 수 있으며,
      			<code>&#123;&#123; super() &#125;&#125;</code>를 이용하면 기존 내용을 유지한 상태로 새로운 내용을 추가할 수도 있습니다.
      			예를 들어, <i className="filename">_content.njk</i> 파일에 아래와 같은 코드가 있다고 가정해 보겠습니다.
      		</p>
      		
      <CodeBlock filename="_content.njk" title="njk - layout inheritance" language="html" className="uk_gist_code_box mt_ms">
      {`<div class="wrap">
      					<!-- content -->
      					{%- block content %}
      						<p>안녕하세요 UXKM 입니다.</p>
      					{%- endblock -%}
      				</div>`}
      </CodeBlock>

      		<p className="mt_ms">
      			<i className="filename">intro.njk</i>에서 위 템플릿을 호출한 후 <code>block content</code>에 새로운 내용을 채우면,
      			기존의 <mark><code>&lt;p&gt;안녕하세요 UXKM 입니다.&lt;/p&gt;</code></mark>는 사라지고 새로 작성한 내용으로 대체됩니다
      		</p>
      		
      <CodeBlock filename="intro.njk (super 사용 전)" title="njk - layout inheritance" language="html" className="uk_gist_code_box mt_ms">
      {`<!-- 빌드 전 -->
      				{%- extends "_content.njk" -%}
      				{%- block content %}
      					<p>반갑습니다. 환영합니다.</p>
      				{%- endblock -%}

      				<!-- 빌드 후 -->
      				<div class="wrap">
      					<!-- content -->
      					<p>반갑습니다. 환영합니다.</p>
      				</div>`}
      </CodeBlock>

      		<p className="mt_ms">
      			<code>&#123;&#123; super() &#125;&#125;</code>를 사용하면 <mark><code>&lt;p&gt;안녕하세요 UXKM 입니다.&lt;/p&gt;</code></mark>가
      			유지되면서 새로 작성한 내용이 추가된 상태로 빌드됩니다.
      		</p>
      		
      <CodeBlock filename="intro.njk (super 사용)" title="njk - layout inheritance" language="html" className="uk_gist_code_box mt_ms">
      {`<!-- 빌드 전 -->
      				{%- extends "_content.njk" -%}
      				{%- block content %}
      					{{ super() }}
      					<p>반갑습니다. 환영합니다.</p>
      				{%- endblock -%}

      				<!-- 빌드 후 -->
      				<div class="wrap">
      					<!-- content -->
      					<p>안녕하세요 UXKM 입니다.</p>
      					<p>반갑습니다. 환영합니다.</p>
      				</div>`}
      </CodeBlock>

      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">4.2.8. 불필요한 공백 제어</h2>
      		<p className="mt_ms">
      			<b>njk</b> 같은 템플릿 엔진에서는 <code>layout 호출(extends)</code>, <code>include</code>, <code>변수 선언</code>,
      			그리고 일부 제어문(<code>set</code>, <code>if</code>, <code>for</code> 등)을 사용할 때,
      			<b>이 자체가 브라우저에 출력되는 HTML에 직접적으로 렌더링되지 않습니다.</b><br />
      			특히 <code>set</code>으로 변수를 선언하면,
      			<b>렌더링 결과에는 변수 선언이 나타나지 않고, 해당 부분은 빈 줄 또는 공백으로 남을 수 있습니다.</b><br />

      			이러한 공백은 빌드된 HTML에서 의도하지 않은 빈 줄, 들여쓰기,
      			공백 라인을 만들어 <b>HTML 소스가 지저분해지거나 용량이 커지는 원인</b>이 되기도 합니다.
      		</p>
      		
      <CodeBlock filename="ex1 Before" title="njk - blank control" language="html" className="uk_gist_code_box mt_ms">
      {`<!-- 빌드 전 -->
      				<div class="wrap">
      					{% set pageName = "main page" %}
      					<p>{{ pageName }}</p>
      				</div>

      				<!-- 빌드 후 -->
      				<div class="wrap">

      					<p>main page</p>
      				</div>`}
      </CodeBlock>

      		<p className="mt_ms">
      			불필요한 빈 줄 또는 공백을 <b>minus 기호(<code>-</code>)</b>를 활용하여 없앨 수 있습니다.
      		</p>
      		
      <CodeBlock filename="ex1 After" title="njk - blank control" language="html" className="uk_gist_code_box mt_ms">
      {`<!-- 문법 -->
      				{%- 내용 -%}

      				<!-- 빌드 전 -->
      				<div class="wrap">
      					{%- set pageName = "main page" -%}
      					<p>{{ pageName }}</p>
      				</div>

      				<!-- 빌드 후 -->
      				<div class="wrap">
      					<p>main page</p>
      				</div>`}
      </CodeBlock>

      		<p className="mt_ms">
      			한 가지 예를 더 들어보겠습니다.<br />
      			<i className="filename">_layout.njk</i>에서 <code>block content</code>를 선언한 후,
      			콘텐츠 페이지에서 해당 <code>content</code>를 적용하고 빌드하면, <mark><code>block</code>을 선언한 부분에 공백이 남게 됩니다.</mark>
      		</p>
      		
      <CodeBlock filename="ex2 Before" title="njk - blank control" language="html" className="uk_gist_code_box mt_ms">
      {`<!-- _layout.njk -->
      				<main role="main">
      					{% block content %}
      					{% endblock %}
      				</main>

      				<!-- index.html(빌드 전) -->
      				{% block content %}
      					<p>안녕하세요. UXKM입니다.</p>
      				{% endblock %}

      				<!-- index.html(빌드 후) -->
      				<main role="main">

      					<p>안녕하세요. UXKM입니다.</p>

      				</main>`}
      </CodeBlock>

      		<p className="mt_ms">
      			이때 <code>block <mark>content</mark></code>를 이용하는 <i className="filename">index.njk</i>에서 <b>minus 기호(<code>-</code>)</b>를 사용하여 공백 라인을 제거할 수 있습니다.
      		</p>
      		
      <CodeBlock filename="ex2 After" title="njk - blank control" language="html" className="uk_gist_code_box mt_ms">
      {`<!-- _layout.njk -->
      				<main role="main">
      					{% block content %}
      					{% endblock %}
      				</main>

      				<!-- index.html(빌드 전) -->
      				{% block content -%}
      					<p>안녕하세요. UXKM입니다.</p>
      				{%- endblock %}

      				<!-- index.html(빌드 후) -->
      				<main role="main">
      					<p>안녕하세요. UXKM입니다.</p>
      				</main>`}
      </CodeBlock>

      	</section>
      	

      	<figure className="img_figure mt_l">
      		<img src={`${IMG.GULP}/04_gulp_02.png`} alt="njk 문법" />
      		<figcaption>
      			njk 문법
      		</figcaption>
      	</figure>
    </>
  )
}

export default NjkSyntaxPage
