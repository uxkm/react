import { useAccessibilityPageMeta } from '@/hooks/useAccessibilityPageMeta.js'
import { IMG } from '@/config/path'
import { Suspense, lazy } from 'react'
const UkEditorTarget = lazy(() => import('@/components/code/UkEditorTarget'))
function EditorFallback() { return <div className="uk_editor min_height_300" aria-hidden /> }
import CodeBlock from '@/components/code/CodeBlock'

const PAGE_LAYOUT = {
  mainClass: "checkWcag",
  type: "accessibility",
  titleSticky: true,
  info: false,
  note: false,
  sideMenu: true,
  reference: false,
  contentList: true,
  depth3Last: true,
  bottomEditor: false
}

const PAGE_DATA = {
  title: "이해의 용이성 | 접근성 체크리스트(웹 콘텐츠 접근성)",
  description: "웹 콘텐츠 접근성 체크리스트는 다양한 사용자들이 웹 콘텐츠를 문제 없이 이용할 수 있도록 보장하기 위해 설계된 필수 항목들을 제공합니다. 이 페이지에서는 웹 콘텐츠 접근성 체크리스트의 이해의 용이성(Understandable)에 대해 소개합니다.",
  keyword: "Accessibility, a11y, wcag, kwcag, macag, kiosk, 접근성, 웹 콘텐츠 접근성, 한국형 웹 콘텐츠 접근성, 모바일 앱 접근성, 무인정보단밀기 접근성",
}

function CheckWcagUnderstandablePage() {
  useAccessibilityPageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  })


  return (
    <>
      <blockquote className="uk_note common_note mt_xxl" role="note">
      	<strong className="sound_only">요약 설명</strong>
      	<p>
      		kwcag 2.2 원칙을 구현하기 위해 14개의 지침을 따라야 하고, 각 지침의 준수 여부를 확인하기 위해 33개의 검사 항목을 마련해야 합니다.<br />
      		검사 항목은 구체적인 테스트가 가능한 기준을 제공하여 웹사이트가 원칙 및 지침을 준수하고 있는지 확인하는 데 사용됩니다.<br />
      		<b>지능정보화기본법 시행규칙 일부개정령(안) 입법예고에 따라 ‘24.9.1부터 심사기준이 변경되며 이에따라 kwcag 2.2 기준으로 체크리스트를 제공합니다.</b>
      	</p>
      </blockquote>










      	<link href="/a11yStart.min.css" rel="stylesheet" />
      	<link href="/checkWcag.min.css" rel="stylesheet" />



      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">기본 언어 표시</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<b className="t_black">주로 사용하는 언어를 명시해야 합니다.</b><br />
      				주로 사용하는 언어를 명시하여, 브라우저와 보조 기술이 페이지의 언어를 올바르게 인식하도록
      				적절한 설정을 적용함으로서 사용자 경험과 접근성을 크게 향상시킬 수 있습니다.
      			</p>
      			<p className="reference mt_ms">
      				WCAG 2.2 Guidelines :
      				<a href="https://www.w3.org/TR/WCAG22/#language-of-page" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">3.1.1 Language of Page</a><br />
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_red">잘못된 예시 1</h3>
      			<p className="mt_ms t_red">
      				페이지의 기본 언어가 명시되지 않아 브라우저와 보조 기술이 언어를 인식할 수 없습니다.
      			</p>
      			
      <CodeBlock title="기본 언어 표시 - 잘못된 예시 1" language="html" className="uk_gist_code_box mt_m">
      {`<!DOCTYPE html>
      					<html>
      						<head>
      							<title>기본 언어 표시 - 잘못된 예시 1</title>
      						</head>
      						<body>
      							<h1>UXKM 홈페이지 입니다.</h1>
      						</body>
      					</html>`}
      </CodeBlock>

      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_green">올바른 예시 1</h3>
      			<p className="mt_ms t_green">
      				<code>lang</code> 속성을 사용하여 페이지의 기본 언어를 한글(ko)로 명시합니다.
      			</p>
      			
      <CodeBlock title="기본 언어 표시 - 올바른 예시 1" language="html" className="uk_gist_code_box mt_m">
      {`<!DOCTYPE html>
      					<html lang="ko"><!-- 기본 언어 명시 -->
      						<head>
      							<meta charset="UTF-8"><!-- 문자 인코딩 설정 -->
      							<title>기본 언어 표시 - 올바른 예시 1</title>
      						</head>
      						<body>
      							<h1>UXKM 홈페이지 입니다.</h1>
      						</body>
      					</html>`}
      </CodeBlock>

      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_red">잘못된 예시 2</h3>
      			<p className="mt_ms t_red">
      				일부 콘텐츠가 스페인어로 되어 있지만 언어가 명시되지 않았습니다.
      			</p>
      			
      <CodeBlock title="기본 언어 표시 - 잘못된 예시 2" language="html" className="uk_gist_code_box mt_m">
      {`<!DOCTYPE html>
      					<html lang="ko">
      						<head>
      							<meta charset="UTF-8">
      							<title>기본 언어 표시 - 잘못된 예시 2</title>
      						</head>
      						<body>
      							<h1>UXKM 홈페이지 입니다.</h1>
      							<p>Bienvenido a nuestro sitio web</p>
      						</body>
      					</html>`}
      </CodeBlock>

      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_green">올바른 예시 2</h3>
      			<p className="mt_ms t_green">
      				<code>lang=&quot;es&quot;</code> 속성을 사용하여 스페인어 콘텐츠를 명시합니다.
      			</p>
      			
      <CodeBlock title="기본 언어 표시 - 올바른 예시 2" language="html" className="uk_gist_code_box mt_m">
      {`<!DOCTYPE html>
      					<html lang="ko">
      						<head>
      							<meta charset="UTF-8">
      							<title>기본 언어 표시 - 잘못된 예시 2</title>
      						</head>
      						<body>
      							<h1>UXKM 홈페이지 입니다.</h1>
      							<p lang="es">Bienvenido a nuestro sitio web</p><!-- 스페인 언어 명시 -->
      						</body>
      					</html>`}
      </CodeBlock>

      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">검수 방법</h3>
      			<ul className="mt_ms dot_lst gap-column-important-sm">
      				<li>HTML 문서의 &lt;html&gt; 태그에 lang 속성이 올바르게 설정되어 있는지 확인하였는가?</li>
      				<li>다국어 콘텐츠가 포함된 경우, 해당 콘텐츠의 lang 속성이 올바르게 설정되어 있는지 확인하였는가?</li>
      				<li>Axe와 같은 접근성 검사 도구를 사용하여 페이지의 언어 설정이 올바른지 평가하였는가?</li>
      				<li>WAVE 도구를 사용하여 페이지의 접근성을 검사하였는가?</li>
      				<li>NVDA, JAWS와 같은 스크린 리더를 사용하여 페이지의 언어가 올바르게 인식되는지 확인하였는가?</li>
      				<li>브라우저의 개발자 도구를 사용하여 HTML 구조를 검사하고, 언어 속성이 올바르게 설정되었는가?</li>
      				<li>Google Search Console과 같은 도구를 사용하여 페이지의 언어 설정이 검색 엔진에 올바르게 인식되는지 확인하였는가?</li>
      			</ul>
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">사용자 요구에 따른 실행</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<b className="t_black">사용자가 의도하지 않은 기능(새 창, 초점에 의한 맥락 변화 등)은 실행되지 않아야 합니다.</b><br />
      				사용자가 의도하지 않은 기능이 실행되지 않도록 하려면, 사용자 인터페이스 요소가 예상치 못한 방식으로 동작하지 않도록 해야 하고,
      				특히 새 창 열기, 자동 포커스 변경 등의 동작은 사용자의 명시적인 동작이나 선택에 의해서만 이루어져야 합니다.
      			</p>
      			<p className="reference mt_ms">
      				WCAG 2.2 Guidelines :
      				<a href="https://www.w3.org/TR/WCAG22/#on-focus" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">3.2.1 On Focus</a><br />
      				WCAG 2.2 Guidelines :
      				<a href="https://www.w3.org/TR/WCAG22/#on-input" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">3.2.2 On Input</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_red">잘못된 예시 1</h3>
      			<p className="mt_ms t_red">
      				사용자가 링크를 클릭할 때, 브라우저 내 이동인지 새 창이 열리는지에 대한 사전 안내가 없어 혼란을 초래할 수 있습니다.
      			</p>
      			
      <CodeBlock title="사용자 요구에 따른 실행 - 잘못된 예시 1" language="javascript" className="uk_gist_code_box mt_m">
      {`<a href="https://uxkm.io" target="_blank">UXKM</a>`}
      </CodeBlock>

      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_green">올바른 예시 1</h3>
      			<p className="mt_ms t_green">
      				<code>title=&quot;새 창 열림&quot;</code> 속성을 명시함으로써 사용자가 해당 링크가 내부 링크인지 새 창인지 구별하여 콘텐츠를 보다 쉽게 이용할 수 있습니다.
      			</p>
      			
      <CodeBlock title="사용자 요구에 따른 실행 - 올바른 예시 1" language="javascript" className="uk_gist_code_box mt_m">
      {`<a href="https://uxkm.io" target="_blank" title="새 창 열림">UXKM</a>`}
      </CodeBlock>

      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_red">잘못된 예시 2</h3>
      			<p className="mt_ms t_red">
      				의도하지 않은 포커스 변화 : 사용자가 username 필드에 포커스를 줄 때 자동으로 password 필드로 포커스가 이동하면 혼란을 초래할 수 있습니다.
      			</p>
      			
      <CodeBlock title="사용자 요구에 따른 실행 - 잘못된 예시 2" language="javascript" className="uk_gist_code_box mt_m">
      {`<input type="text" id="username" onfocus="document.getElementById('password').focus();">
      					<input type="password" id="password">`}
      </CodeBlock>

      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_green">올바른 예시 2</h3>
      			<p className="mt_ms t_green">
      				사용자가 입력 필드 사이를 자유롭게 이동할 수 있도록 자동 포커스 이동을 제거합니다.
      			</p>
      			
      <CodeBlock title="사용자 요구에 따른 실행 - 올바른 예시 2" language="javascript" className="uk_gist_code_box mt_m">
      {`<label for="username">Username:</label>
      					<input type="text" id="username" name="username">

      					<label for="password">Password:</label>
      					<input type="password" id="password" name="password">`}
      </CodeBlock>

      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">검수 방법</h3>
      			<ul className="mt_ms dot_lst gap-column-important-sm">
      				<li>페이지의 링크를 클릭하여 새 창이 열리지 않는지 확인하였는가?</li>
      				<li>입력 필드와 상호작용할 때 의도하지 않은 포커스 변화가 발생하지 않는지 테스트하였는가?</li>
      				<li>Axe와 같은 접근성 검사 도구를 사용하여 의도하지 않은 동작이 없는지 평가하였는가?</li>
      				<li>WAVE 도구를 사용하여 페이지의 접근성을 검사하였는가?</li>
      				<li>NVDA, JAWS와 같은 스크린 리더를 사용하여 상호작용 시 의도하지 않은 기능이 실행되지 않는지 확인하였는가?</li>
      				<li>브라우저의 개발자 도구를 사용하여 이벤트 핸들러와 스크립트를 검사하고, 의도하지 않은 동작이 발생하지 않는지 확인하였는가?</li>
      				<li>다양한 사용자가 웹 사이트를 탐색하며 의도하지 않은 기능이 실행되지 않는지 피드백을 받았는가?</li>
      			</ul>
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">찾기 쉬운 도움 정보</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<b className="t_black">도움 정보가 제공되는 경우, 각 페이지에서 동일한 상대적인 순서로 접근할 수 있어야 합니다.</b><br />
      				도움 정보가 제공되는 경우, 모든 페이지에서 동일한 위치와 접근 방법으로 제공되어야 하고,
      				사용자는 페이지마다 도움 정보를 찾는 데 혼동을 겪지 않고, 일관된 사용자 경험을 제공받을 수 있습니다.
      			</p>
      			<p className="reference mt_ms">
      				WCAG 2.2 Guidelines :
      				<a href="https://www.w3.org/TR/WCAG22/#consistent-navigation" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">3.2.3 Consistent Navigation</a><br />
      				WCAG 2.2 Guidelines :
      				<a href="https://www.w3.org/TR/WCAG22/#consistent-identification" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">3.2.4 Consistent Identification</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_red">잘못된 예시</h3>
      			<p className="mt_ms t_red">
      				페이지마다 도움 정보의 위치와 순서가 다르기 때문에, 사용자가 다른 페이지로 이동할 때마다 도움 정보를 찾는 데 어려움을 겪을 수 있습니다.
      			</p>
      			
      <CodeBlock title="찾기 쉬운 도움 정보 - 잘못된 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<!-- page 1 -->
      					<body>
      						<h1>Page 1</h1>
      						<p>Welcome to Page 1</p>

      						<!-- 도움말 정보가 하단에 위치해 있습니다. -->
      						<footer>
      							<h2>Help Information</h2>
      							<p>If you need help, please contact support at <a href="mailto:support@example.com">support@example.com</a>.</p>
      						</footer>
      					</body>

      					<!-- page 2 -->
      					<body>
      						<h1>Page 2</h1>
      						<p>Welcome to Page 2</p>

      						<!-- 도움말 정보가 사이드바에 위치해 있습니다. -->
      						<aside>
      							<h2>Help Information</h2>
      							<p>If you need help, please contact support at <a href="mailto:support@example.com">support@example.com</a>.</p>
      						</aside>
      					</body>`}
      </CodeBlock>

      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_green">올바른 예시</h3>
      			<p className="mt_ms t_green">
      				모든 페이지에서 도움 정보가 항상 같은 위치에 일관되게 제공함으로써, 사용자는 어떤 페이지에서든 도움 정보를 쉽게 찾을 수 있습니다.
      			</p>
      			
      <CodeBlock title="찾기 쉬운 도움 정보 - 올바른 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<!-- page 1 -->
      					<body>
      						<h1>Page 1</h1>
      						<p>Welcome to Page 1</p>

      						<!-- 도움말 정보가 헤더에 위치해 있습니다. -->
      						<header>
      							<h2>Help Information</h2>
      							<p>If you need help, please contact support at <a href="mailto:support@example.com">support@example.com</a>.</p>
      						</header>
      					</body>

      					<!-- page 2 -->
      					<body>
      						<h1>Page 2</h1>
      						<p>Welcome to Page 2</p>

      						<!-- Page 1과 마찬가지로 도움말 정보가 헤더에 위치해 있습니다. -->
      						<header>
      							<h2>Help Information</h2>
      							<p>If you need help, please contact support at <a href="mailto:support@example.com">support@example.com</a>.</p>
      						</header>
      					</body>`}
      </CodeBlock>

      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">검수 방법</h3>
      			<ul className="mt_ms dot_lst gap-column-important-sm">
      				<li>여러 페이지를 탐색하며 도움 정보가 동일한 위치에 있는지 확인하였는가?</li>
      				<li>도움 정보를 클릭하여 올바른 도움말 페이지로 이동하는지 테스트하였는가?</li>
      				<li>Axe와 같은 접근성 검사 도구를 사용하여 도움 정보의 일관성을 평가하였는가?</li>
      				<li>WAVE 도구를 사용하여 도움 정보의 접근성을 검사하였는가?</li>
      				<li>NVDA, JAWS와 같은 스크린 리더를 사용하여 도움 정보가 각 페이지에서 동일한 방법으로 접근되는지 확인하였는가?</li>
      				<li>브라우저의 개발자 도구를 사용하여 HTML 구조를 검사하고, 도움 정보가 동일한 위치에 일관되게 제공되는지 확인하였는가?</li>
      				<li>다양한 사용자가 웹 사이트를 탐색하며 도움 정보를 찾는 데 어려움이 없는지 피드백을 받았는가?</li>
      			</ul>
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">오류 정정</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<b className="t_black">입력 오류를 정정할 수 있는 방법을 제공해야 합니다.</b><br />
      				입력 오류 정정은 사용자가 폼이나 입력 필드에서 오류를 발생시켰을 때, 이를 사용자에게 알리고 수정할 수 있는 방법을 제공하는 것을 의미합니다.
      			</p>
      			<p className="reference mt_ms">
      				WCAG 2.2 Guidelines :
      				<a href="https://www.w3.org/TR/WCAG22/#error-identification" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">3.3.1 Error Identification</a><br />
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_red">잘못된 예시</h3>
      			<p className="mt_ms t_red">
      				사용자가 폼을 제출한 후 오류가 발생하지만, 오류 메시지가 명확하지 않고, 오류를 수정할 수 있는 방법이 제공되지 않습니다.
      			</p>
      			<div className="view_editor edit_code mt_m">
      <Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="a11y/06-a11yCheck/6.1.3.4.Error_Identification_false.html" className="uk_editor min_height_400 mb_result_height_200" mode="htmlmixed" theme="ayu-mirage" browser="default" result minHeight="400px" mbResultHeight="200px" />
      </Suspense>
      </div>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_green">올바른 예시</h3>
      			<ul className="mt_ms dot_lst dot_green t_green gap-column-sm">
      				<li>
      					입력 오류가 발생할 경우 구체적인 오류 메시지와 함께 어떻게 수정할 수 있는지에 대한 정보를 제공하며,
      					오류가 발생한 입력 필드를 포커스 하여 편리하게 오류를 정정할 수 있도록 합니다.
      				</li>
      				<li>
      					<code>aria-describedby=&quot;nickname-help&quot;</code>를 설정하여 해당 입력필드가 어떤 정보를 요구하는지에 대한 정보를 제공합니다.
      				</li>
      				<li>
      					<code>aria-live=&quot;assertive&quot;</code>를 설정한 후 오류 메시지가 업데이트될 때 화면 낭독 프로그램(screen reader)에 즉시 알리도록
      					하여 사용자에게 오류를 실시간으로 전달합니다.
      				</li>
      			</ul>
      			<div className="view_editor edit_code mt_m">
      <Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="a11y/06-a11yCheck/6.1.3.4.Error_Identification_true.html" className="uk_editor min_height_400" mode="htmlmixed" theme="ayu-mirage" browser="default" result minHeight="400px" />
      </Suspense>
      </div>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">검수 방법</h3>
      			<ul className="mt_ms dot_lst gap-column-important-s">
      				<li>
      					<strong className="t_black">HTML Validator 사용</strong>
      					<p>
      						W3C HTML Validator와 같은 도구를 사용하여 마크업 오류를 자동으로 검수하였는가?
      					</p>
      				</li>
      				<li>
      					<strong className="t_black">브라우저 개발자 도구 사용</strong>
      					<p>
      						브라우저의 개발자 도구(예: Chrome DevTools)를 사용하여 HTML 구조를 확인하였는가?
      					</p>
      				</li>
      				<li>
      					<strong className="t_black">수동 검사</strong>
      					<p>
      						HTML 코드를 수동으로 검토하여 태그의 열고 닫음, 중첩 관계, 속성 선언을 확인하였는가?
      					</p>
      				</li>
      			</ul>
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">레이블 제공</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<b className="t_black">용자 입력에는 대응하는 레이블을 제공해야 합니다.</b><br />
      				사용자 입력 필드에 대응하는 레이블을 제공하는 것은 입력 필드가 어떤 정보를 요구하는지 사용자에게 명확히 전달하기 위함이며,
      				레이블은 입력 필드와 시각적으로 또는 프로그래밍 방식으로 연결되어야 합니다.
      			</p>
      			<p className="reference mt_ms">
      				WCAG 2.2 Guidelines :
      				<a href="https://www.w3.org/TR/WCAG22/#label-in-name" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">2.5.3 Label in Name</a><br />
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_red">잘못된 예시</h3>
      			<p className="mt_ms t_red">
      				입력 필드에 레이블을 제공하지 않습니다.
      			</p>
      			
      <CodeBlock title="레이블 제공 - 잘못된 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<input type="text" id="username">`}
      </CodeBlock>

      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_green">올바른 예시</h3>
      			<p className="mt_ms t_green">
      				레이블의 for 속성과 입력 필드의 id를 연결하여 사용자에게 필드의 목적을 명확히 전달하고,
      				화면 낭독 프로그램(screen reader) 사용자도 입력 필드와 레이블의 관계를 정확히 이해할 수 있습니다.
      			</p>
      			
      <CodeBlock title="레이블 제공 - 올바른 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<label for="username">Username:</label>
      					<input type="text" id="username" name="username">`}
      </CodeBlock>

      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">검수 방법</h3>
      			<ul className="mt_ms dot_lst gap-column-important-sm">
      				<li>입력 필드 옆에 레이블이 있는지 검토하였는가?</li>
      				<li>레이블을 클릭하면 해당 입력 필드로 포커스가 이동하는지 확인하였는가?</li>
      				<li>Axe, WAVE와 같은 접근성 검사 도구를 사용하여 레이블이 올바르게 제공되었는지 확인하였는가?</li>
      				<li>브라우저의 개발자 도구를 사용하여 HTML 구조를 확인하고, 입력 필드와 레이블이 적절히 연결되었는지 확인하였는가?</li>
      				<li>NVDA, JAWS와 같은 스크린 리더를 사용하여 레이블이 입력 필드와 연결되어 올바르게 읽히는지 확인하였는가?</li>
      			</ul>
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">접근 가능한 인증</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<b className="t_black">인증 과정은 인지 기능 테스트에만 의존해서는 안 됩니다.</b><br />
      				접근 가능한 인증은 사용자의 인지 기능에만 의존하지 않는 인증 방법을 제공하는 것을 의미합니다.
      				다양한 인증 방법을 제공하여 모든 사용자가 쉽게 인증 절차를 완료할 수 있도록 해야 합니다.
      			</p>
      			<p className="reference mt_ms">
      				WCAG 2.2 Guidelines :
      				<a href="https://www.w3.org/TR/WCAG22/#accessible-authentication-minimum" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">3.3.8 Accessible Authentication (Minimum)</a><br />
      				Web Authentication :
      				<a href="https://www.w3.org/TR/webauthn-2/" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">An API for accessing Public Key Credentials</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">인증방식의 예</h3>
      			<ul className="mt_ms dot_lst gap-column-sm">
      				<li>브라우저가 아이디/비밀번호를 저장할 수 있도록 마크업된 서식</li>
      				<li>공개인증(OAuth: Open Authorization)을 통한 제3자 인증방식</li>
      				<li>신체(얼굴, 지문 등)나 물건(휴대폰, USB 등)을 이용한 인증</li>
      				<li>사용자 자신에게 익숙하여 별도의 인지적인 노력을 필요로 하지 않는 개인정보(이름, 이메일주소, 전화번호 등) 확인을 통한 인증</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_red">잘못된 예시</h3>
      			<p className="mt_ms t_red">
      				사용자가 수학 문제를 풀어야 인증할 수 있어 인지 기능에 과도하게 의존합니다.
      			</p>
      			
      <CodeBlock title="접근 가능한 인증 - 잘못된 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<form id="captchaForm">
      						<label for="captcha">Please solve the following equation: 3 + 4 = ?</label>
      						<input type="text" id="captcha" name="captcha">
      						<button type="submit">Submit</button>
      					</form>`}
      </CodeBlock>

      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_green">올바른 예시 1</h3>
      			<p className="mt_ms t_green">
      				사용자가 비밀번호 외에도 OTP(One-Time Password)를 사용하여 인증할 수 있는 방법을 제공합니다.
      			</p>
      			<div className="view_editor edit_code mt_m">
      <Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="a11y/06-a11yCheck/6.1.3.6.Accessible_Authentication_true.html" className="uk_editor min_height_400" mode="htmlmixed" theme="ayu-mirage" browser="default" result minHeight="400px" />
      </Suspense>
      </div>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_green">올바른 예시 2</h3>
      			<p className="mt_ms t_green">
      				<b className="t_blue">WebAuthn API<sup className="sup">1)</sup></b>를 사용하여 생체 인식 또는 보안 키를 통한 인증 방법을 제공 합니다.
      			</p>
      			
      <CodeBlock title="접근 가능한 인증 - 올바른 예시 2" language="javascript" className="uk_gist_code_box mt_m">
      {`<form id="webauthnForm">
      						<label for="username">사용자 이름:</label>
      						<input type="text" id="username" name="username">
      						<button type="button" onclick="authenticate()">WebAuthn을 사용하여 인증하기</button>
      						<button type="submit">제출</button>
      					</form>

      					<script>
      						async function authenticate() {
      							// WebAuthn API 사용 예제
      							try {
      								const publicKey = {/* PublicKeyCredentialRequestOptions */};
      								const credential = await navigator.credentials.get({publicKey});
      								// 자격 증명 응답 처리
      								alert('인증 성공');
      							} catch (err) {
      								alert('인증 실패: ' + err);
      							}
      						}
      					</script>`}
      </CodeBlock>

      			<p className="mt_ml ex_box">
      				<span className="t_blue">1) <b>WebAuthn API(Web Authentication API)</b>란?</span><br />
      				웹 애플리케이션에서 사용자 인증을 강화하기 위해 설계된 웹 표준 API입니다.
      				비밀번호를 사용하는 전통적인 인증 방법 대신, 보다 안전하고 편리한 인증 방식을 제공하며,
      				웹에서 강력한 사용자 인증을 지원하기 위해 FIDO2(Fast IDentity Online 2) 프로젝트의 일부로 개발되었습니다.
      			</p>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">검수 방법</h3>
      			<ul className="mt_ms dot_lst gap-column-important-sm">
      				<li>다양한 인증 방법이 제공되는지 확인하였는가?</li>
      				<li>모든 인증 방법이 작동하는지 테스트하였는가?</li>
      				<li>Axe와 같은 접근성 검사 도구를 사용하여 인증 절차의 접근성을 평가하였는가?</li>
      				<li>WAVE 도구를 사용하여 인증 절차의 접근성을 검사하였는가?</li>
      				<li>NVDA, JAWS와 같은 스크린 리더를 사용하여 인증 절차가 올바르게 안내되고 실행되는지 확인하였는가?</li>
      				<li>인지 기능에 제한이 있는 사용자, 시각 장애인, 청각 장애인 등 다양한 사용자가 인증 절차를 테스트하고 피드백을 제공받았는가?</li>
      				<li>브라우저의 개발자 도구를 사용하여 HTML 구조와 스크립트를 검사하고, 다양한 인증 방법이 올바르게 구현되었는지 확인하였는가?</li>
      			</ul>
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">반복 입력 정보</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<b className="t_black">반복되는 입력 정보는 자동 입력 또는 선택 입력할 수 있어야 합니다.</b><br />
      				반복되는 입력 정보를 자동 입력 또는 선택 입력할 수 있게 함으로써 사용자의 편의성을 높이고 입력 오류를 줄일 수 있으며,
      				자동 완성, 드롭다운 목록, 브라우저의 자동 완성 기능 등을 통해 구현할 수 있습니다.
      			</p>
      			<p className="reference mt_ms">
      				WCAG 2.2 Guidelines :
      				<a href="https://www.w3.org/TR/WCAG22/#reflow" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">1.4.10 Reflow</a><br />
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_red">잘못된 예시 1</h3>
      			<p className="mt_ms t_red">
      				사용자가 동일한 주소를 반복적으로 입력하는 상황을 발생시킬 수 있습니다.
      			</p>
      			
      <CodeBlock title="반복 입력 정보 - 잘못된 예시 1" language="javascript" className="uk_gist_code_box mt_m">
      {`<form id="shippingForm">
      						<label for="address">배송 주소:</label>
      						<input type="text" id="address" name="address">

      						<label for="billingAddress">청구 주소:</label>
      						<input type="text" id="billingAddress" name="billingAddress">

      						<button type="submit">제출</button>
      					</form>`}
      </CodeBlock>

      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_green">올바른 예시 1</h3>
      			<p className="mt_ms t_green">
      				체크박스를 선택하면 배송 주소가 자동으로 청구 주소로 복사되어 동일한 주소를 반복 입력할 필요가 없습니다.
      			</p>
      			<div className="view_editor edit_code mt_m">
      <Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="a11y/06-a11yCheck/6.1.3.7.Reflow_true.html" className="uk_editor min_height_400" mode="htmlmixed" theme="ayu-mirage" browser="default" result minHeight="400px" />
      </Suspense>
      </div>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_red">잘못된 예시 2</h3>
      			<p className="mt_ms t_red">
      				사용자가 시/도 명을 직접 입력하면 불편을 초래하고, 오타나 예상치 못한 오류가 발생할 수 있습니다.
      			</p>
      			
      <CodeBlock title="반복 입력 정보 - 잘못된 예시 2" language="javascript" className="uk_gist_code_box mt_m">
      {`<form id="areaForm">
      						<label for="area">시/도 선택:</label>
      						<input type="text" id="area" name="area">

      						<button type="submit">제출</button>
      					</form>`}
      </CodeBlock>

      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_green">올바른 예시 2</h3>
      			<p className="mt_ms t_green">
      				드롭다운 목록을 사용하면 사용자가 시/도 명을 쉽게 선택할 수 있어 입력 필드를 간편하게 이용하고 예상치 못한 오류를 방지할 수 있습니다.
      			</p>
      			
      <CodeBlock title="반복 입력 정보 - 올바른 예시 2" language="javascript" className="uk_gist_code_box mt_m">
      {`<form id="areaForm">
      						<label for="area">시/도 선택:</label>
      						<select id="area" name="area">
      							<option value="Seoul">서울특별시</option>
      							<option value="Busan">부산광역시</option>
      							<option value="Daegu">대구광역시</option>
      							<option value="Incheon">인천광역시</option>
      							<option value="Gwangju">광주광역시</option>
      							<option value="Daejeon">대전광역시</option>
      							<option value="Ulsan">울산광역시</option>
      							<option value="Gyeonggi">경기도</option>
      							<option value="Gangwon">강원도</option>
      							<option value="Chungbuk">충청북도</option>
      							<option value="Chungnam">충청남도</option>
      							<option value="Jeonbuk">전라북도</option>
      							<option value="Jeonnam">전라남도</option>
      							<option value="Gyeongbuk">경상북도</option>
      							<option value="Gyeongnam">경상남도</option>
      							<option value="Jeju">제주특별자치도</option>
      						</select>

      						<button type="submit">제출</button>
      					</form>`}
      </CodeBlock>

      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">검수 방법</h3>
      			<ul className="mt_ms dot_lst gap-column-important-sm">
      				<li>자동 입력 또는 선택 입력 기능이 제대로 작동하는지 확인하였는가?</li>
      				<li>사용자가 반복 입력 정보를 쉽게 입력할 수 있는지 테스트하였는가?</li>
      				<li>Axe, WAVE와 같은 접근성 검사 도구를 사용하여 자동 입력 기능이 접근성을 저해하지 않는지 확인하였는가?</li>
      				<li>NVDA, JAWS와 같은 스크린 리더를 사용하여 자동 입력 또는 선택 입력 기능이 올바르게 안내되고 실행되는지 확인하였는가?</li>
      				<li>브라우저의 개발자 도구를 사용하여 HTML 구조와 스크립트를 검사하고, 자동 입력 또는 선택 입력 기능이 올바르게 구현되었는지 확인하였는가?</li>
      				<li>인지 기능에 제한이 있는 사용자, 시각 장애인, 청각 장애인 등 다양한 사용자가 자동 입력 또는 선택 입력 기능을 테스트하고 피드백을 제공하였는가?</li>
      			</ul>
      		</article>
      		
      	</section>
      	


      <hr />

      <section className="mt_xxl">
      	<h2 data-icon="pen">웹 접근성 요약 보고서 예시</h2>
      	<p className="mt_ml indent">
      		아래 표는 웹 접근성 요약 보고서 예시로, 체크박스의 체크 여부가 저장되지 않습니다.
      	</p>
      	<div className="mt_m indent">
      		<div className="checkWcag_table web_table">
      			<ul className="head">
      				<li className="guide" data-tit="지침(14개) / 검사항목(33개)">지침(14개)</li>
      				<li className="items">
      					<div className="item">
      						<p className="text">검사항목(33개)</p>
      						<p className="check">준수 여부</p>
      					</div>
      				</li>
      			</ul>
      			<div className="body">
      				<ul>
      					<li className="guide">
      						5.1. 대체 텍스트
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">5.1.1. (적절한 대체 텍스트 제공) 텍스트 아닌 콘텐츠는 그 의미나 용도를 인식할 수 있도록 대체 텍스트를 제공해야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						5.2. 멀티미디어 대체수단
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">5.2.1. (자막 제공) 멀티미디어 콘텐츠에는 자막, 대본 또는 수어를 제공해야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						5.3. 적응성
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">5.3.1. (표의 구성) 표는 이해하기 쉽게 구성해야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      						<div className="item">
      							<p className="text">5.3.2. (콘텐츠의 선형구조) 콘텐츠는 논리적인 순서로 제공해야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      						<div className="item">
      							<p className="text">5.3.3. (명확한 지시사항 제공) 지시사항은 모양, 크기, 위치, 방향, 색, 소리 등에 관계없이 인식될 수 있어야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						5.4. 명료성
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">5.4.1. (색에 무관한 콘텐츠 인식) 콘텐츠는 색에 관계없이 인식될 수 있어야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      						<div className="item">
      							<p className="text">5.4.2. (자동 재생 금지) 자동으로 소리가 재생되지 않아야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      						<div className="item">
      							<p className="text">5.4.3. (텍스트 콘텐츠의 명도 대비) 텍스트 콘텐츠와 배경 간의 명도대비는 4.5 대 1 이상이어야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      						<div className="item">
      							<p className="text">5.4.4. (콘텐츠 간의 구분) 이웃한 콘텐츠는 구별될 수 있어야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						6.1. 입력장치 접근성
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">6.1.1. (키보드 사용 보장) 모든 기능은 키보드만으로도 사용할 수 있어야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      						<div className="item">
      							<p className="text">6.1.2. (초점 이동과 표시) 키보드에 의한 초점은 논리적으로 이동해야 하며, 시각적으로 구별할 수 있어야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      						<div className="item">
      							<p className="text">6.1.3. (조작 가능) 사용자 입력 및 콘트롤은 조작 가능하도록 제공되어야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      						<div className="item">
      							<p className="text">6.1.4. (문자 단축키) 문자 단축키는 오동작으로 인한 오류를 방지하여야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						6.2. 충분한 시간 제공
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">6.2.1. (응답시간 조절) 시간제한이 있는 콘텐츠는 응답시간을 조절할 수 있어야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      						<div className="item">
      							<p className="text">6.2.2. (정지 기능 제공) 자동으로 변경되는 콘텐츠는 움직임을 제어할 수 있어야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						6.3. 광과민성 발작 예방
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">6.3.1. (깜빡임과 번쩍임 사용 제한) 초당 3~50회 주기로 깜빡이거나 번쩍이는 콘텐츠를 제공하지 않아야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						6.4 쉬운 내비게이션
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">6.4.1. (반복 영역 건너뛰기) 콘텐츠의 반복되는 영역은 건너뛸 수 있어야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      						<div className="item">
      							<p className="text">6.4.2. (제목 제공) 페이지, 프레임, 콘텐츠 블록에는 적절한 제목을 제공해야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      						<div className="item">
      							<p className="text">6.4.3. (적절한 링크 텍스트) 링크 텍스트는 용도나 목적을 이해할 수 있도록 제공해야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      						<div className="item">
      							<p className="text">6.4.4. (고정된 참조 위치 정보) 전자출판문서 형식의 웹 페이지는 각 페이지로 이동할 수 있는 기능이 있어야 하고, 서식이나 플랫폼에 상관없이 참조 위치 정보를 일관되게 제공ㆍ유지해야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						6.5. 입력 방식
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">6.5.1. (단일 포인터 입력 지원) 다중 포인터 또는 경로기반 동작을 통한 입력은 단일 포인터 입력으로도 조작할 수 있어야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      						<div className="item">
      							<p className="text">6.5.2. (포인터 입력 취소) 단일 포인터 입력으로 실행되는 기능은 취소할 수 있어야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      						<div className="item">
      							<p className="text">6.5.3. (레이블과 네임) 텍스트 또는 텍스트 이미지가 포함된 레이블이 있는 사용자 인터페이스 구성요소는 네임에 시각적으로 표시되는 해당 텍스트를 포함해야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      						<div className="item">
      							<p className="text">6.5.4. (동작기반 작동) 동작기반으로 작동하는 기능은 사용자 인터페이스 구성요소로 조작할 수 있고, 동작기반 기능을 비활성화할 수 있어야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						7.1. 가독성
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">7.1.1. (기본 언어 표시) 주로 사용하는 언어를 명시해야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						7.2. 예측 가능성
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">7.2.1. (사용자 요구에 따른 실행) 사용자가 의도하지 않은 기능(새 창, 초점에 의한 맥락 변화 등)은 실행되지 않아야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      						<div className="item">
      							<p className="text">7.2.2. (찾기 쉬운 도움 정보) 도움 정보가 제공되는 경우, 각 페이지에서 동일한 상대적인 순서로 접근할 수 있어야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						7.3. 입력 도움
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">7.3.1. (오류 정정) 입력 오류를 정정할 수 있는 방법을 제공해야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      						<div className="item">
      							<p className="text">7.3.2. (레이블 제공) 사용자 입력에는 대응하는 레이블을 제공해야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      						<div className="item">
      							<p className="text">7.3.3. (접근 가능한 인증) 인증 과정은 인지 기능 테스트에만 의존해서는 안 된다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      						<div className="item">
      							<p className="text">7.3.4. (반복 입력 정보) 반복되는 입력 정보는 자동 입력 또는 선택 입력할 수 있어야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						8.1. 문법 준수
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">8.1.1. (마크업 오류 방지) 마크업 언어의 요소는 열고 닫음, 중첩 관계 및 속성 선언에 오류가 없어야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				

      				<ul>
      					<li className="guide">
      						8.2. 웹 애플리케이션 접근성
      					</li>
      					<li className="items">
      						<div className="item">
      							<p className="text">8.2.1. (웹 애플리케이션 접근성 준수) 콘텐츠에 포함된 웹 애플리케이션은 접근성이 있어야 한다.</p>
      							<p className="check"><input type="checkbox" /></p>
      						</div>
      					</li>
      				</ul>
      				
      			</div>
      		</div>
      	</div>
      	<figure className="img_figure mt_l">
      		<img src={`${IMG.A11Y}/kwcag_all_checklist.png`} alt="웹 접근성 체크리스트" />
      		<figcaption>
      			웹 접근성 체크리스트
      		</figcaption>
      	</figure>
      	<figure className="img_figure mt_l">
      		<img src={`${IMG.A11Y}/kwcag_all_checklist_mo.png`} alt="웹 접근성 체크리스트" />
      		<figcaption>
      			웹 접근성 체크리스트
      		</figcaption>
      	</figure>
      </section>

      <footer className="reference_box">
      	<strong className="tit">이해의 용이성 | 접근성 체크리스트(웹 콘텐츠 접근성) - 웹 콘텐츠 접근성 참조</strong>
      	<ul className="link_lst">
      		<li className="reference"><a href="https://www.w3.org/TR/WCAG10/" target="_blank" rel="noreferrer" title="새창 열림" className="fas">W3C WCAG 1.0</a></li>
      		<li className="reference"><a href="https://www.w3.org/TR/WCAG20/" target="_blank" rel="noreferrer" title="새창 열림" className="fas">W3C WCAG 2.0</a></li>
      		<li className="reference"><a href="https://www.w3.org/TR/WCAG21/" target="_blank" rel="noreferrer" title="새창 열림" className="fas">W3C WCAG 2.1</a></li>
      		<li className="reference"><a href="https://www.w3.org/TR/WCAG22/" target="_blank" rel="noreferrer" title="새창 열림" className="fas">W3C WCAG 2.2</a></li>
      		<li className="reference"><a href="https://www.w3.org/TR/2021/WD-wcag-3.0-20210121/" target="_blank" rel="noreferrer" title="새창 열림" className="fas">W3C WCAG 3.0 Draft</a></li>
      		<li className="reference"><a href="http://www.kwacc.or.kr/WAI/wcag21/" target="_blank" rel="noreferrer" title="새창 열림" className="fas">W3C WCAG 2.1 한국어</a></li>
      		<li className="reference"><a href="https://www.w3.org/TR/WCAG22/" target="_blank" rel="noreferrer" title="새창 열림" className="fas">W3C Web Content Accessibility Guidelines (WCAG) 2.2</a></li>
      		<li className="reference"><a href="https://www.w3.org/WAI/standards-guidelines/ko#wcag2" target="_blank" rel="noreferrer" title="새창 열림" className="fas">W3C WCAG2 ko</a></li>
      		<li className="reference"><a href="https://www.w3.org/WAI/about/groups/agwg/" target="_blank" rel="noreferrer" title="새창 열림" className="fas">W3C Accessibility Guidelines Working Group</a></li>
      		<li className="reference"><a href="https://www.w3.org/WAI/WCAG21/Techniques/" target="_blank" rel="noreferrer" title="새창 열림" className="fas">W3C Techniques for WCAG 2.1</a></li>
      		<li className="reference"><a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/intro.html#introduction-fourprincs-head" target="_blank" rel="noreferrer" title="새창 열림" className="fas">W3C 접근성의 4가지 원칙</a></li>
      		<li className="reference"><a href="https://developer.mozilla.org/ko/docs/Web/Accessibility/Understanding_WCAG" target="_blank" rel="noreferrer" title="새창 열림" className="fas">MDN 웹 콘텐츠 접근성 지침 이해하기</a></li>
      		<li className="reference"><a href="https://developer.mozilla.org/ko/docs/Learn/Accessibility/What_is_accessibility#accessibility_guidelines_and_the_law" target="_blank" rel="noreferrer" title="새창 열림" className="fas">MDN 접근성이란?</a></li>
      		<li className="reference"><a href="https://nuli.navercorp.com/community/article/1133181" target="_blank" rel="noreferrer" title="새창 열림" className="fas">NULI WCAG 2.2에서 변경된 사항</a></li>
      		<li className="reference"><a href="https://brunch.co.kr/@snclab/55" target="_blank" rel="noreferrer" title="새창 열림" className="fas">brunch WCAG 2.2 작업 초안</a></li>
      		<li className="reference"><a href="https://a11y.gitbook.io/wcag/international-standards" target="_blank" rel="noreferrer" title="새창 열림" className="fas">GITBOOK WCAG 2.1</a></li>
      		<li className="reference"><a href="https://iyu88.github.io//a11y/2023/12/24/web-accessibility-1.html" target="_blank" rel="noreferrer" title="새창 열림" className="fas">WAI 문서로 접근성 이해하기</a></li>
      		<li className="reference"><a href="https://www.deque.com/blog/wcag-2-1-what-is-next-for-accessibility-guidelines/" target="_blank" rel="noreferrer" title="새창 열림" className="fas">deque blog WCAG 2.1</a></li>
      		<li className="reference"><a href="https://seculayerlab.tistory.com/m/48" target="_blank" rel="noreferrer" title="새창 열림" className="fas">웹접근성 국가표준 개정 소개</a></li>
      		<li className="reference"><a href="https://www.samsungfashion.com/webacc.do" target="_blank" rel="noreferrer" title="새창 열림" className="fas">한국형 웹 콘텐츠 접근성 지침 2.2</a></li>
      		<li className="reference"><a href="https://aoa.gitbook.io/skymimo/undefined" target="_blank" rel="noreferrer" title="새창 열림" className="fas">AOA GITBOOK</a></li>
      	</ul>
      </footer>
    </>
  )
}

export default CheckWcagUnderstandablePage
