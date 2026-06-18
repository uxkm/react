import { useAccessibilityPageMeta } from '@/hooks/useAccessibilityPageMeta.js'
import { IMG } from '@/config/path'
import CodeBlock from '@/components/code/CodeBlock'

const PAGE_LAYOUT = {
  mainClass: "attrsWidgets",
  type: "accessibility",
  titleSticky: true,
  info: false,
  note: false,
  sideMenu: true,
  reference: true,
  contentList: true,
  depth3Last: true,
  bottomEditor: false
}

const PAGE_DATA = {
  title: "위젯 속성(Widget Attributes) | WAI-ARIA 상태 및 속성",
  description: "WAI-ARIA (Web Accessibility Initiative - Accessible Rich Internet Applications)의 상태 및 속성(State and Properties)은 웹 애플리케이션의 접근성을 향상시키기 위해 HTML 요소에 추가적인 의미와 기능을 부여하는 메커니즘입니다. 이 페이지에서는 WAI-ARIA의 상태 및 속성 중 위젯 속성(Widget Attributes)에 대해 소개합니다.",
  keyword: "Accessibility, a11y, wcag, kwcag, macag, kiosk, 접근성, 웹 콘텐츠 접근성, 한국형 웹 콘텐츠 접근성, 모바일 앱 접근성, 무인정보단밀기 접근성",
}

function AttrsWidgetsPart2Page() {
  useAccessibilityPageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  })


  return (
    <>
      <blockquote className="uk_note common_note mt_xxl" role="note">
      	<strong className="sound_only">요약 설명</strong>
      	<p>
      		<b>위젯 속성(Widget Attributes)</b>은 위젯의 동작, 외관, 상호작용 방식을 정의하는 속성을 의미합니다.
      		위젯은 웹 애플리케이션에서 사용자와 상호작용할 수 있는 요소를 나타내며,
      		이들 속성은 위젯이 어떻게 표시되고 작동하는지를 결정합니다.
      		웹 개발에서는 이러한 속성을 사용하여 다양한 사용자 인터페이스 요소를 설정하고 제어할 수 있습니다.<br />
      		특히 장애가 있는 사용자들을 위한 접근성을 개선하기 위해 중요한 역할을 합니다.
      	</p>
      	<p className="reference mt_ms">
      		<a href="https://www.w3.org/WAI/ARIA/apg/" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">WAI-ARIA Authoring Practices</a><br />
      		<a href="https://www.w3.org/TR/wai-aria-1.2/#attrs_widgets" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">W3C ARIA Widget Attributes</a>
      	</p>
      </blockquote>











      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">aria-orientation 속성</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<code>aria-orientation</code> 속성은 ARIA(Accessible Rich Internet Applications)에서 사용하는 속성(Property)으로,
      				UI 요소의 방향(orientation)을 보조 기술(예: 스크린 리더)에 알리는 데 사용됩니다.
      				이 속성은 주로 슬라이더, 탭, 목록 등 방향이 중요한 UI 요소에서 사용됩니다.<br />
      				<code>aria-orientation</code> 속성은 요소가 수직(<code>vertical</code>) 또는 수평(<code>horizontal</code>) 방향으로 배열되어 있는지를 명확하게 전달합니다.
      			</p>
      			<p className="reference mt_ms">
      				<a href="https://www.w3.org/TR/wai-aria-1.2/#aria-orientation" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">WAI-ARIA 1.2 Specification (aria-orientation)</a><br />
      				<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-orientation" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN Web Docs (aria-orientation)</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">aria-orientation 속성 값</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>horizontal</strong>
      					<p>
      						요소가 수평으로 배열되어 있음을 나타냅니다.
      					</p>
      				</li>
      				<li>
      					<strong>vertical</strong>
      					<p>
      						요소가 수직으로 배열되어 있음을 나타냅니다.
      					</p>
      				</li>
      				<li>
      					<strong>기본값 없음</strong>
      					<p>
      						기본적으로 역할에 따라 자동으로 해석됩니다.<br />
      						예를 들어, <code>role=&quot;tablist&quot;</code>는 기본적으로 <code>horizontal</code>로 간주됩니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">연관된 HTML 태그 및 역할</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>&lt;div role="slider"&gt;</strong>
      					<p>
      						슬라이더 요소.
      					</p>
      				</li>
      				<li>
      					<strong>&lt;div role="tablist"&gt;</strong>
      					<p>
      						탭 리스트 요소.
      					</p>
      				</li>
      				<li>
      					<strong>&lt;div role="listbox"&gt;</strong>
      					<p>
      						목록 박스 요소.
      					</p>
      				</li>
      				<li>
      					<strong>&lt;div role="toolbar"&gt;</strong>
      					<p>
      						툴바 요소.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">사용 시 주의사항</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>적절한 값 설정</strong>
      					<p>
      						<code>aria-orientation</code> 속성은 요소의 실제 배열 방향에 따라 정확하게 설정해야 합니다.<br />
      						예를 들어, 수직으로 배열된 탭 리스트는 <code>aria-orientation=&quot;vertical&quot;</code>로 설정해야 합니다.
      					</p>
      				</li>
      				<li>
      					<strong>역할에 따른 기본값 이해</strong>
      					<p>
      						일부 역할(예: <code>role=&quot;tablist&quot;</code>, <code>role=&quot;toolbar&quot;</code>)에는 기본적으로 수평 방향이 적용됩니다.
      						따라서 이 경우 명시적으로 <code>aria-orientation</code>을 설정하지 않아도 됩니다.
      					</p>
      				</li>
      				<li>
      					<strong>사용자 상호작용 고려</strong>
      					<p>
      						사용자가 방향에 따라 키보드 내비게이션(예: 화살표 키)을 할 때,
      						올바르게 설정된 <code>aria-orientation</code>은 보조 기술이 사용자 경험을 정확하게 전달하는 데 도움을 줍니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">잘못된 예시</h4>
      				<p className="mt_s">
      					이 예시는 탭이 실제로는 수평으로 배열되어 있는데도 불구하고 <code>aria-orientation=&quot;vertical&quot;</code>로 설정되었습니다.
      					이는 보조 기술 사용자에게 잘못된 정보를 제공할 수 있습니다.
      				</p>
      				
      <CodeBlock title="aria-orientation 속성 / 잘못된 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="tablist" aria-orientation="vertical">
      							<button role="tab" aria-selected="true" id="tab1">Tab 1</button>
      							<button role="tab" aria-selected="false" id="tab2">Tab 2</button>
      						</div>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">올바른 예시</h4>
      				<p className="mt_s">
      					이 예시는 탭이 실제로 수평으로 배열되어 있으며, aria-orientation=<code>&quot;horizontal&quot;</code>로 올바르게 설정되어 있습니다.
      				</p>
      				
      <CodeBlock title="aria-orientation 속성 / 올바른 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="tablist" aria-orientation="horizontal">
      							<button role="tab" aria-selected="true" id="tab1">Tab 1</button>
      							<button role="tab" aria-selected="false" id="tab2">Tab 2</button>
      						</div>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">수평 탭 리스트 예시</h4>
      				<p className="mt_s">
      					이 예시는 수평으로 배열된 탭 리스트를 나타냅니다.
      					<code>aria-orientation=&quot;horizontal&quot;</code> 속성은 탭이 수평으로 배치되어 있음을 보조 기술에 알립니다.
      				</p>
      				
      <CodeBlock title="aria-orientation 속성 / 수평 탭 리스트" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="tablist" aria-orientation="horizontal">
      							<button role="tab" aria-selected="true" id="tab1">Tab 1</button>
      							<button role="tab" aria-selected="false" id="tab2">Tab 2</button>
      							<button role="tab" aria-selected="false" id="tab3">Tab 3</button>
      						</div>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">수직 슬라이더 예시</h4>
      				<p className="mt_s">
      					이 예시는 수직으로 배열된 슬라이더를 나타냅니다.
      					<code>aria-orientation=&quot;vertical&quot;</code> 속성은 슬라이더가 수직 방향으로 동작함을 보조 기술에 전달합니다.
      				</p>
      				
      <CodeBlock title="aria-orientation 속성 / 수직 슬라이더" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="slider" aria-orientation="vertical" aria-valuemin="0" aria-valuemax="100" aria-valuenow="50" tabindex="0" style="height: 200px;">
      							<!-- Visual representation of the slider -->
      						</div>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">수직 목록 박스 예시</h4>
      				<p className="mt_s">
      					이 예시는 수직으로 배열된 목록 박스를 나타냅니다.
      					<code>aria-orientation=&quot;vertical&quot;</code> 속성은 옵션이 수직 방향으로 배열되어 있음을 보조 기술에 알립니다.
      				</p>
      				
      <CodeBlock title="aria-orientation 속성 / 수직 목록 박스" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="listbox" aria-orientation="vertical">
      							<div role="option" aria-selected="false">Option 1</div>
      							<div role="option" aria-selected="true">Option 2</div>
      							<div role="option" aria-selected="false">Option 3</div>
      						</div>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">부가 활용 예시 - 툴바에서의 방향 설정</h4>
      				<p className="mt_s">
      					이 예시는 수직으로 배열된 툴바를 나타냅니다. 툴바의 버튼들이 수직으로 배치되어 있으므로,
      					<code>aria-orientation=&quot;vertical&quot;</code> 속성을 사용해 보조 기술이 이를 인식하도록 합니다.
      				</p>
      				
      <CodeBlock title="aria-orientation 속성 / 부가 활용 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="toolbar" aria-orientation="vertical">
      							<button>Bold</button>
      							<button>Italic</button>
      							<button>Underline</button>
      						</div>`}
      </CodeBlock>

      			</div>
      			
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">aria-placeholder 속성</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<code>aria-placeholder</code> 속성은 ARIA(Accessible Rich Internet Applications)에서 사용하는 속성(Property)으로,
      				사용자가 입력할 수 있는 필드에 대한 설명 또는 힌트를 보조 기술(예: 스크린 리더)에 전달하는 데 사용됩니다.<br />
      				이 속성은 일반적으로 사용자가 입력을 시작하기 전에 필드에 표시되는 힌트를 나타내는 텍스트를 지정합니다.
      				이 속성은 일반적인 <code>placeholder</code> 속성과 함께 또는 특별한 경우에 사용됩니다.
      			</p>
      			<p className="reference mt_ms">
      				<a href="https://www.w3.org/TR/wai-aria-1.2/#aria-placeholder" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">WAI-ARIA 1.2 Specification (aria-placeholder)</a><br />
      				<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-placeholder" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN Web Docs (aria-placeholder)</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">aria-placeholder 속성 값</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>문자열 값(String)</strong>
      					<p>
      						필드에 입력될 예상 값에 대한 설명이나 힌트로 사용됩니다.<br />
      						예) &quot;Enter your name&quot;, &quot;Type your message here&quot;.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">연관된 HTML 태그</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>&lt;input&gt;</strong>
      					<p>
      						텍스트 입력 필드 요소.
      					</p>
      				</li>
      				<li>
      					<strong>&lt;textarea&gt;</strong>
      					<p>
      						여러 줄 텍스트 입력 필드 요소.
      					</p>
      				</li>
      				<li>
      					<strong>&lt;div role=”textbox”&gt;</strong>
      					<p>
      						텍스트 입력이 가능한 커스텀 컨테이너.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">사용 시 주의사항</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>일관된 사용자 경험</strong>
      					<p>
      						<code>aria-placeholder</code> 속성은 시각적인 플레이스홀더(<code>placeholder</code>) 텍스트와 일관되게 사용해야 하며,
      						시각적으로 제공되지 않은 힌트를 보조 기술 사용자에게만 제공할 때 유용합니다.
      					</p>
      				</li>
      				<li>
      					<strong>기본 placeholder 속성과의 차이</strong>
      					<p>
      						HTML5의 <code>placeholder</code> 속성은 시각적으로 필드에 표시되며, <code>aria-placeholder</code>는 보조 기술을 위한 텍스트를 제공합니다.
      						그러나 <code>placeholder</code> 속성 자체가 이미 보조 기술에서 사용되므로, 보통 <code>aria-placeholder</code>는 특별한 경우에만 사용됩니다.
      					</p>
      				</li>
      				<li>
      					<strong>사용자 상호작용 고려</strong>
      					<p>
      						입력 필드가 활성화될 때 플레이스홀더 텍스트는 일반적으로 사라지므로,
      						<code>aria-placeholder</code>는 필드가 비어 있을 때만 유효한 설명으로 사용됩니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">잘못된 예시</h4>
      				<p className="mt_s">
      					이 예시는 <code>aria-placeholder</code> 속성에 빈 문자열을 사용하고 있어 보조 기술이 유효한 힌트를 제공할 수 없습니다.
      					<code>aria-placeholder</code> 속성 값은 유용하고 명확한 힌트를 제공해야 합니다.
      				</p>
      				
      <CodeBlock title="aria-placeholder 속성 / 잘못된 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<input type="text" aria-placeholder="">`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">올바른 예시</h4>
      				<p className="mt_s">
      					이 예시는 사용자에게 입력할 내용을 명확히 설명하는 <code>aria-placeholder</code> 속성을 사용합니다.
      					보조 기술은 이 정보를 사용자에게 전달하여 입력 필드의 용도를 이해하도록 도와줍니다.
      				</p>
      				
      <CodeBlock title="aria-placeholder 속성 / 올바른 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<input type="text" aria-placeholder="Enter your email address">`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">텍스트 입력 필드에서의 힌트 제공 예시</h4>
      				<p className="mt_s">
      					이 예시는 사용자가 입력해야 할 예상 값을 설명하기 위해 <code>aria-placeholder=&quot;Enter your full name&quot;</code>을 추가하여,
      					보조 기술이 이를 사용자에게 전달하도록 설정합니다.
      				</p>
      				
      <CodeBlock title="aria-placeholder 속성 / input 힌트 제공" language="javascript" className="uk_gist_code_box mt_m">
      {`<input type="text" aria-placeholder="Enter your full name">`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">여러 줄 텍스트 입력 필드에서의 힌트 제공 예시</h4>
      				<p className="mt_s">
      					이 예시는 여러 줄 텍스트 입력 필드에서 사용자에게 제공되는 힌트를 설명하기 위해 <code>aria-placeholder</code> 속성을 사용합니다.
      					이 속성은 보조 기술 사용자에게 입력 필드에 무엇을 입력해야 하는지 설명합니다.
      				</p>
      				
      <CodeBlock title="aria-placeholder 속성 / textarea 힌트 제공" language="javascript" className="uk_gist_code_box mt_m">
      {`<textarea aria-placeholder="Type your detailed message here"></textarea>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">커스텀 텍스트 입력 필드에서의 힌트 제공 예시</h4>
      				<p className="mt_s">
      					이 예시는 커스텀 텍스트 입력 필드에 힌트를 제공하기 위해 <code>aria-placeholder</code> 속성을 사용합니다.
      					시각적으로는 힌트를 제공하지 않지만, 보조 기술은 사용자에게 입력 필드의 목적을 설명합니다.
      				</p>
      				
      <CodeBlock title="aria-placeholder 속성 / 커스텀 필드 힌트 제공" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="textbox" aria-placeholder="Enter your address" contenteditable="true" style="border: 1px solid #ccc; padding: 8px;">
      							<!-- 사용자 입력이 여기에 들어갑니다. -->
      						</div>`}
      </CodeBlock>

      			</div>
      			
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">aria-pressed 상태</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<code>aria-pressed</code> 속성은 ARIA(Accessible Rich Internet Applications)에서 사용하는 상태(state) 속성으로,
      				버튼 요소가 눌려 있는 상태(즉, 활성화된 상태)인지 여부를 보조 기술(예: 스크린 리더)에 알리는 데 사용됩니다.<br />
      				이 속성은 주로 토글 버튼(toggle button)에서 사용되며,
      				사용자가 버튼을 누르거나 해제할 때 해당 버튼이 활성화되었는지 또는 비활성화되었는지를 명확히 전달합니다.
      			</p>
      			<p className="reference mt_ms">
      				<a href="https://www.w3.org/TR/wai-aria-1.2/#aria-pressed" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">WAI-ARIA 1.2 Specification (aria-pressed)</a><br />
      				<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-pressed" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN Web Docs (aria-pressed)</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">aria-pressed 속성 값</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>true</strong>
      					<p>
      						버튼이 눌려 있는 상태(활성화된 상태)임을 나타냅니다.
      					</p>
      				</li>
      				<li>
      					<strong>false</strong>
      					<p>
      						버튼이 눌려 있지 않은 상태(비활성화된 상태)임을 나타냅니다.
      					</p>
      				</li>
      				<li>
      					<strong>mixed</strong>
      					<p>
      						버튼이 혼합 상태에 있음을 나타냅니다. 이 값은 주로 다중 선택 가능 항목에서 사용됩니다.
      					</p>
      				</li>
      				<li>
      					<strong>undefined (속성이 설정되지 않음)</strong>
      					<p>
      						버튼이 토글 가능하지 않거나 아직 결정되지 않은 상태임을 나타냅니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">연관된 HTML 태그</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>&lt;button&gt;</strong>
      					<p>
      						토글 버튼 역할을 하는 버튼 요소.
      					</p>
      				</li>
      				<li>
      					<strong>&lt;div&gt; 또는 &lt;span&gt;</strong>
      					<p>
      						커스텀 버튼 요소(적절한 <code>role=&quot;button&quot;</code>과 함께 사용).
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">사용 시 주의사항</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>정확한 상태 반영</strong>
      					<p>
      						<code>aria-pressed</code> 속성은 버튼의 실제 상태와 일치해야 합니다. 사용자가 버튼을 누를 때마다 상태를 동적으로 업데이트해야 합니다.
      					</p>
      				</li>
      				<li>
      					<strong>보조 기술에 명확한 정보 제공</strong>
      					<p>
      						<code>aria-pressed</code>는 보조 기술이 버튼의 현재 상태를 명확하게 전달하는 데 도움을 주므로, 올바르게 설정하는 것이 중요합니다.
      					</p>
      				</li>
      				<li>
      					<strong>단일 선택과 다중 선택 구분</strong>
      					<p>
      						단일 선택의 경우에는 <code>true</code> 또는 <code>false</code>로 설정하고,
      						다중 선택에서 혼합 상태를 나타내려면 <code>mixed</code> 값을 사용할 수 있습니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">잘못된 예시</h4>
      				<p className="mt_s">
      					이 예시는 <code>aria-pressed=&quot;true&quot;</code>로 설정되어 있지만,
      					버튼의 상태가 동적으로 변경되지 않기 때문에 사용자가 상호작용할 때 버튼의 상태가 업데이트되지 않습니다.
      					이로 인해 사용자는 버튼의 현재 상태를 잘못 인식할 수 있습니다.
      				</p>
      				
      <CodeBlock title="aria-pressed 상태 / 잘못된 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<button aria-pressed="true">Press me</button>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">올바른 예시</h4>
      				<p className="mt_s">
      					이 예시는 버튼이 클릭될 때마다 <code>aria-pressed</code> 속성이 동적으로 업데이트되어,
      					보조 기술이 버튼의 현재 상태를 정확하게 전달할 수 있도록 합니다.
      				</p>
      				
      <CodeBlock title="aria-pressed 상태 / 올바른 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<button aria-pressed="true" id="dynamicButton">Press me</button>

      						<script>
      							document.getElementById('dynamicButton').addEventListener('click', function() {
      								var pressed = this.getAttribute('aria-pressed') === 'true';
      								this.setAttribute('aria-pressed', !pressed);
      							});
      						</script>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">스타일과 함께 상태 표시 예시</h4>
      				<p className="mt_s">
      					이 예시는 버튼의 상태에 따라 스타일이 변경되는 토글 버튼을 구현한 것입니다.
      					버튼이 눌리면 배경색과 텍스트 색상이 변경되며, <code>aria-pressed</code> 속성이 업데이트됩니다.
      				</p>
      				
      <CodeBlock title="aria-pressed 상태 / 스타일과 함께 표시" language="javascript" className="uk_gist_code_box mt_m">
      {`<button aria-pressed="false" id="styledButton" style="background-color: #f0f0f0; border: 1px solid #ccc; padding: 10px;">
      							<span>Subscribe</span>
      						</button>

      						<script>
      							document.getElementById('styledButton').addEventListener('click', function() {
      								var pressed = this.getAttribute('aria-pressed') === 'true';
      								this.setAttribute('aria-pressed', !pressed);
      								this.style.backgroundColor = pressed ? '#f0f0f0' : '#007BFF';
      								this.style.color = pressed ? '#000' : '#FFF';
      							});
      						</script>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">기본 토글 버튼 예시</h4>
      				<p className="mt_s">
      					이 예시는 텍스트 서식 설정에서 <mark>&quot;Bold&quot;</mark> 기능을 위한 토글 버튼을 구현한 것입니다.
      					<code>aria-pressed</code> 속성은 사용자가 버튼을 클릭할 때마다 버튼의 상태를 동적으로 업데이트하여,
      					버튼이 활성화(눌림) 상태인지 비활성화 상태인지 보조 기술에 알립니다.
      				</p>
      				
      <CodeBlock title="aria-pressed 상태 / 기본 토글 버튼" language="javascript" className="uk_gist_code_box mt_m">
      {`<button aria-pressed="false" id="toggleButton">Bold</button>

      						<script>
      							document.getElementById('toggleButton').addEventListener('click', function() {
      								var pressed = this.getAttribute('aria-pressed') === 'true';
      								this.setAttribute('aria-pressed', !pressed);
      							});
      						</script>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">커스텀 토글 버튼 예시</h4>
      				<p className="mt_s">
      					이 예시는 <code>div</code> 요소를 사용한 커스텀 토글 버튼을 구현한 것입니다.
      					<code>aria-pressed</code> 속성은 버튼의 눌림 상태를 나타내며, 사용자가 클릭할 때마다 상태가 변경됩니다.
      				</p>
      				
      <CodeBlock title="aria-pressed 상태 / 커스텀 토글 버튼" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="button" aria-pressed="false" tabindex="0" id="customToggleButton" style="padding: 8px; border: 1px solid #ccc;">
      							<span>Toggle Option</span>
      						</div>

      						<script>
      							document.getElementById('customToggleButton').addEventListener('click', function() {
      								var pressed = this.getAttribute('aria-pressed') === 'true';
      								this.setAttribute('aria-pressed', !pressed);
      							});
      						</script>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">혼합 상태(mixed) 토글 버튼 예시</h4>
      				<p className="mt_s">
      					이 예시는 <mark>&quot;Toggle All&quot;</mark> 버튼에서 사용되는 혼합 상태(<code>mixed</code>) 예시입니다.
      					초기 상태는 <code>mixed</code>로 설정되어 있으며, 사용자가 클릭할 때마다 상태가 <code>true</code> 또는 <code>false</code>로 전환됩니다.
      				</p>
      				
      <CodeBlock title="aria-pressed 상태 / mixed 토글 버튼" language="javascript" className="uk_gist_code_box mt_m">
      {`<button aria-pressed="mixed" id="mixedStateButton">Toggle All</button>

      						<script>
      							document.getElementById('mixedStateButton').addEventListener('click', function() {
      								var pressed = this.getAttribute('aria-pressed');
      								this.setAttribute('aria-pressed', pressed === 'mixed' ? 'true' : 'false');
      							});
      						</script>`}
      </CodeBlock>

      			</div>
      			
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">aria-readonly 속성</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<code>aria-readonly</code> 속성은 ARIA(Accessible Rich Internet Applications)에서 사용하는 속성(Property)으로,
      				특정 UI 요소(예: 입력 필드, 스피너 등)가 읽기 전용 상태임을 보조 기술(예: 스크린 리더)에 알리는 데 사용됩니다.
      				읽기 전용 상태는 사용자가 해당 요소의 내용을 변경할 수 없지만, 여전히 요소의 값을 선택하고 복사할 수 있는 상태를 의미합니다.<br />
      				기본 HTML 요소에서는 <code>readonly</code> 속성을 사용하는 것이 더 권장되지만,
      				커스텀 ARIA 요소에서는 <code>aria-readonly</code> 속성을 사용할 수 있습니다.
      			</p>
      			<p className="reference mt_ms">
      				<a href="https://www.w3.org/TR/wai-aria-1.2/#aria-readonly" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">WAI-ARIA 1.2 Specification (aria-readonly)</a><br />
      				<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-readonly" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN Web Docs (aria-readonly)</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">aria-readonly 속성 값</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>true</strong>
      					<p>
      						요소가 읽기 전용 상태임을 나타냅니다. 사용자는 값을 수정할 수 없지만, 선택 및 복사는 가능합니다.
      					</p>
      				</li>
      				<li>
      					<strong>false (기본값)</strong>
      					<p>
      						요소가 읽기 전용 상태가 아님을 나타냅니다. 사용자는 값을 자유롭게 수정할 수 있습니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">연관된 HTML 태그 및 역할</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>&lt;input&gt;</strong>
      					<p>
      						텍스트 입력 필드 요소.
      					</p>
      				</li>
      				<li>
      					<strong>&lt;textarea&gt;</strong>
      					<p>
      						여러 줄 텍스트 입력 필드 요소.
      					</p>
      				</li>
      				<li>
      					<strong>&lt;div role="textbox"&gt;</strong>
      					<p>
      						텍스트 입력이 가능한 커스텀 컨테이너.
      					</p>
      				</li>
      				<li>
      					<strong>&lt;div role="spinbutton"&gt;</strong>
      					<p>
      						스피너(숫자 증감) 요소.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">사용 시 주의사항</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>적절한 역할과 함께 사용</strong>
      					<p>
      						<code>aria-readonly</code>는 텍스트 입력 필드, 스피너, 또는 기타 수정 가능한 요소에서만 사용해야 합니다.
      					</p>
      				</li>
      				<li>
      					<strong>정확한 상태 반영</strong>
      					<p>
      						<code>aria-readonly</code> 속성 값은 요소의 실제 동작과 일치해야 합니다.
      						읽기 전용인 경우 <code>true</code>, 수정 가능하다면 <code>false</code>로 설정해야 합니다.
      					</p>
      				</li>
      				<li>
      					<strong>기본 HTML 속성과의 차이</strong>
      					<p>
      						<code>aria-readonly</code> 속성은 주로 ARIA 역할을 사용한 커스텀 요소에 사용되며,
      						HTML의 <code>readonly</code> 속성과 유사하지만, HTML5 요소에서는 <code>readonly</code> 속성을 사용하는 것이 권장됩니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">잘못된 예시</h4>
      				<p className="mt_s">
      					이 예시에서는 <code>aria-readonly=&quot;true&quot;</code>가 설정되었지만,
      					기본적으로 HTML의 <code>readonly</code> 속성을 사용하는 것이 더 적절합니다.
      					HTML 요소에서는 <code>readonly</code> 속성을 사용하는 것이 일반적입니다.
      				</p>
      				
      <CodeBlock title="aria-readonly 속성 / 잘못된 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<input type="text" aria-readonly="true">`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">올바른 예시</h4>
      				<p className="mt_s">
      					이 예시는 기본 HTML <code>readonly</code> 속성을 사용하여 텍스트 입력 필드를 읽기 전용으로 설정한 예시입니다.
      					HTML 요소에서 <code>readonly</code> 속성을 사용하는 것이 더 권장됩니다.
      				</p>
      				
      <CodeBlock title="aria-readonly 속성 / 올바른 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<input type="text" readonly value="이 필드는 읽기 전용입니다.">`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">읽기 전용 텍스트 입력 필드 예시</h4>
      				<p className="mt_s">
      					이 예시는 사용자가 값을 변경할 수 없는 읽기 전용 텍스트 입력 필드를 나타냅니다.
      					<code>aria-readonly=&quot;true&quot;</code> 속성은 보조 기술이 이 필드가 읽기 전용임을 인식하도록 합니다.
      				</p>
      				
      <CodeBlock title="aria-readonly 속성 / readonly input" language="javascript" className="uk_gist_code_box mt_m">
      {`<input type="text" aria-readonly="true" value="이 필드는 읽기 전용입니다.">`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">읽기 전용 텍스트 영역 예시</h4>
      				<p className="mt_s">
      					이 예시는 사용자가 내용을 수정할 수 없는 읽기 전용 텍스트 영역을 나타냅니다.
      					보조 기술은 <code>aria-readonly=&quot;true&quot;</code> 속성을 통해 이 상태를 인식합니다.
      				</p>
      				
      <CodeBlock title="aria-readonly 속성 / readonly textarea" language="javascript" className="uk_gist_code_box mt_m">
      {`<textarea aria-readonly="true">
      							이 텍스트는 사용자가 편집할 수 없습니다.
      						</textarea>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">읽기 전용 스피너 예시</h4>
      				<p className="mt_s">
      					이 예시는 숫자 증감이 불가능한 읽기 전용 스피너를 나타냅니다.
      					<code>aria-readonly=&quot;true&quot;</code> 속성은 사용자가 값을 변경할 수 없음을 보조 기술에 알립니다.
      				</p>
      				
      <CodeBlock title="aria-readonly 속성 / readonly 스피너" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="spinbutton" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" aria-readonly="true">
      							10
      						</div>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">읽기 전용 커스텀 텍스트 입력 필드 예시</h4>
      				<p className="mt_s">
      					이 예시는 <code>div</code> 요소를 사용한 커스텀 텍스트 입력 필드로, 읽기 전용 상태를 나타냅니다.
      					<code>aria-readonly=&quot;true&quot;</code> 속성은 이 필드가 사용자가 수정할 수 없는 상태임을 보조 기술에 전달합니다.
      				</p>
      				
      <CodeBlock title="aria-readonly 속성 / readonly 커스텀 필드" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="textbox" aria-readonly="true" contenteditable="false" style="border: 1px solid #ccc; padding: 8px;">
      							이 필드는 읽기 전용입니다.
      						</div>`}
      </CodeBlock>

      			</div>
      			
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">aria-required 속성</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<code>aria-required</code> 속성은 ARIA(Accessible Rich Internet Applications)에서 사용하는 속성(Property)으로,
      				특정 UI 요소(예: 입력 필드)가 사용자가 반드시 입력해야 하는 필수 항목임을 보조 기술(예: 스크린 리더)에 알리는 데 사용됩니다.<br />
      				이 속성은 주로 폼 필드에서 사용되며, 해당 필드가 제출되기 전에 반드시 값이 입력되어야 함을 나타냅니다.
      				HTML5 <code>required</code> 속성과 함께 사용하여 시각적 사용자와 보조 기술 사용자 모두에게 필수성을 전달하는 것이 권장됩니다.
      			</p>
      			<p className="reference mt_ms">
      				<a href="https://www.w3.org/TR/wai-aria-1.2/#aria-required" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">WAI-ARIA 1.2 Specification (aria-required)</a><br />
      				<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-required" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN Web Docs (aria-required)</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">aria-required 속성 값</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>true</strong>
      					<p>
      						해당 필드가 필수 입력 항목임을 나타냅니다.
      					</p>
      				</li>
      				<li>
      					<strong>false (기본값)</strong>
      					<p>
      						해당 필드가 필수 입력 항목이 아님을 나타냅니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">연관된 HTML 태그 및 역할</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>&lt;input&gt;</strong>
      					<p>
      						텍스트 입력 필드 요소.
      					</p>
      				</li>
      				<li>
      					<strong>&lt;textarea&gt;</strong>
      					<p>
      						여러 줄 텍스트 입력 필드 요소.
      					</p>
      				</li>
      				<li>
      					<strong>&lt;select&gt;</strong>
      					<p>
      						드롭다운 선택 필드.
      					</p>
      				</li>
      				<li>
      					<strong>&lt;div role="textbox"&gt;</strong>
      					<p>
      						텍스트 입력이 가능한 커스텀 컨테이너.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">사용 시 주의사항</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>정확한 상태 반영</strong>
      					<p>
      						<code>aria-required</code> 속성 값은 필드가 실제로 필수인지 여부에 따라 정확하게 설정해야 합니다.
      						필수 항목에는 <code>true</code>로, 필수가 아닌 항목에는 설정하지 않거나 <code>false</code>로 설정해야 합니다.
      					</p>
      				</li>
      				<li>
      					<strong>기본 HTML 속성과의 차이</strong>
      					<p>
      						HTML5의 <code>required</code> 속성은 시각적으로 필수 필드를 표시하고, 폼 제출 시 브라우저에서 기본 유효성 검사를 수행합니다.
      						<code>aria-required</code>는 보조 기술에만 영향을 미치며, 시각적인 표현이나 기본 브라우저 유효성 검사에 영향을 주지 않습니다.
      					</p>
      				</li>
      				<li>
      					<strong>일관된 사용자 경험</strong>
      					<p>
      						<code>aria-required</code>와 <code>required</code> 속성을 함께 사용하는 경우,
      						보조 기술 사용자와 시각적 사용자 모두에게 일관된 경험을 제공할 수 있습니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">잘못된 예시</h4>
      				<p className="mt_s">
      					이 예시에서는 <code>aria-required=&quot;true&quot;</code> 속성이 설정되어 있지만, 사용자에게 필수 입력 항목이라는 시각적 표시가 없습니다.
      					시각적 표시를 추가해야 사용자 경험이 일관됩니다.
      				</p>
      				
      <CodeBlock title="aria-required 속성 / 잘못된 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<input type="text" aria-required="true">`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">올바른 예시</h4>
      				<p className="mt_s">
      					이 예시는 HTML5 <code>required</code> 속성과 <code>aria-required</code> 속성을 함께 사용하여,
      					시각적 사용자와 보조 기술 사용자 모두에게 필수 입력 필드임을 명확히 전달합니다.
      				</p>
      				
      <CodeBlock title="aria-required 속성 / 올바른 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<input type="text" aria-required="true" placeholder="Enter your name" required>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">필수 입력 텍스트 필드 예시</h4>
      				<p className="mt_s">
      					이 예시는 필수 텍스트 필드를 포함한 폼을 구현한 것입니다.
      					<code>aria-required=&quot;true&quot;</code>와 <code>required</code> 속성을 함께 사용하여 필수 필드임을 명확히 하고,
      					폼 제출 시 필드가 비어 있을 경우 경고 메시지를 표시합니다.
      				</p>
      				
      <CodeBlock title="aria-required 속성 / 필수 입력 텍스트 필드" language="javascript" className="uk_gist_code_box mt_m">
      {`<form id="exampleForm">
      							<label for="name">Name:</label>
      							<input type="text" id="name" aria-required="true" placeholder="Enter your name" required>
      							<button type="submit">Submit</button>
      						</form>

      						<script>
      							document.getElementById('exampleForm').addEventListener('submit', function(event) {
      								var nameField = document.getElementById('name');
      								if (nameField.value.trim() === '') {
      									event.preventDefault();
      									alert('The name field is required.');
      									nameField.focus();
      								}
      							});
      						</script>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">필수 입력 텍스트 영역 예시</h4>
      				<p className="mt_s">
      					이 예시는 필수 입력이 필요한 텍스트 영역을 나타냅니다.
      					<code>aria-required=&quot;true&quot;</code>와 <code>required</code> 속성을 함께 사용하여,
      					사용자가 입력하지 않으면 폼 제출 시 경고 메시지를 표시합니다.
      				</p>
      				
      <CodeBlock title="aria-required 속성 / 필수 입력 텍스트 영역" language="javascript" className="uk_gist_code_box mt_m">
      {`<form id="messageForm">
      							<label for="message">Message:</label>
      							<textarea id="message" aria-required="true" placeholder="Enter your message" required></textarea>
      							<button type="submit">Submit</button>
      						</form>

      						<script>
      							document.getElementById('messageForm').addEventListener('submit', function(event) {
      								var messageField = document.getElementById('message');
      								if (messageField.value.trim() === '') {
      									event.preventDefault();
      									alert('The message field is required.');
      									messageField.focus();
      								}
      							});
      						</script>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">필수 선택 드롭다운 메뉴 예시</h4>
      				<p className="mt_s">
      					이 예시는 필수 선택 필드를 포함한 드롭다운 메뉴를 구현한 것입니다.
      					<code>aria-required=&quot;true&quot;</code>와 <code>required</code> 속성을 함께 사용하여 필수 선택 필드임을 나타내고,
      					선택하지 않고 폼을 제출하려고 하면 경고 메시지를 표시합니다.
      				</p>
      				
      <CodeBlock title="aria-required 속성 / 필수 선택 드롭다운" language="javascript" className="uk_gist_code_box mt_m">
      {`<form id="countryForm">
      							<label for="country">Country:</label>
      							<select id="country" aria-required="true" required>
      								<option value="">Select a country</option>
      								<option value="usa">United States</option>
      								<option value="canada">Canada</option>
      							</select>
      							<button type="submit">Submit</button>
      						</form>

      						<script>
      							document.getElementById('countryForm').addEventListener('submit', function(event) {
      								var countrySelect = document.getElementById('country');
      								if (countrySelect.value === '') {
      									event.preventDefault();
      									alert('Please select a country.');
      									countrySelect.focus();
      								}
      							});
      						</script>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">커스텀 텍스트 입력 필드에서 필수 입력 설정</h4>
      				<p className="mt_s">
      					이 예시는 <code>div</code> 요소를 사용한 커스텀 텍스트 입력 필드로, 필수 입력 항목임을 나타냅니다.
      					<code>aria-required=&quot;true&quot;</code> 속성은 보조 기술이 이 필드가 필수임을 인식할 수 있도록 하며,
      					사용자가 입력하지 않으면 폼 제출 시 경고 메시지를 표시합니다.
      				</p>
      				
      <CodeBlock title="aria-required 속성 / 커스텀 텍스트 필드" language="javascript" className="uk_gist_code_box mt_m">
      {`<form id="customForm">
      							<label for="customTextbox">Custom Textbox:</label>
      							<div id="customTextbox" role="textbox" aria-required="true" contenteditable="true" style="border: 1px solid #ccc; padding: 8px;"></div>
      							<button type="submit">Submit</button>
      						</form>

      						<script>
      							document.getElementById('customForm').addEventListener('submit', function(event) {
      								var customTextbox = document.getElementById('customTextbox');
      								if (customTextbox.textContent.trim() === '') {
      									event.preventDefault();
      									alert('The custom textbox is required.');
      									customTextbox.focus();
      								}
      							});
      						</script>`}
      </CodeBlock>

      			</div>
      			
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">aria-selected 상태</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<code>aria-selected</code> 속성은 ARIA(Accessible Rich Internet Applications)에서 사용하는 상태(state) 속성으로,
      				특정 UI 요소(예: 목록 항목, 탭, 그리드 셀 등)가 현재 선택된 상태인지 여부를 보조 기술(예: 스크린 리더)에 알리는 데 사용됩니다.<br />
      				이 속성은 주로 사용자가 선택할 수 있는 여러 항목 중 하나가 선택되었음을 나타낼 때 사용됩니다.
      				모든 선택 가능한 항목에 이 속성을 명시적으로 설정하고, 사용자 상호작용에 따라 동적으로 상태를 업데이트하는 것이 중요합니다.
      			</p>
      			<p className="reference mt_ms">
      				<a href="https://www.w3.org/TR/wai-aria-1.2/#aria-selected" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">WAI-ARIA 1.2 Specification (aria-selected)</a><br />
      				<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-selected" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN Web Docs (aria-selected)</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">aria-selected 속성 값</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>true</strong>
      					<p>
      						요소가 현재 선택된 상태임을 나타냅니다.
      					</p>
      				</li>
      				<li>
      					<strong>false (기본값)</strong>
      					<p>
      						요소가 선택되지 않은 상태임을 나타냅니다.
      					</p>
      				</li>
      				<li>
      					<strong>기본값 없음</strong>
      					<p>
      						속성이 없으면 보조 기술에서 선택 상태를 알 수 없습니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">연관된 HTML 태그 및 역할</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>&lt;div role="listbox"&gt;</strong>
      					<p>
      						리스트 박스에서 선택 가능한 항목.
      					</p>
      				</li>
      				<li>
      					<strong>&lt;div role="tablist"&gt;</strong>
      					<p>
      						탭 리스트에서 선택된 탭.
      					</p>
      				</li>
      				<li>
      					<strong>&lt;div role="grid"&gt;</strong>
      					<p>
      						그리드에서 선택된 셀.
      					</p>
      				</li>
      				<li>
      					<strong>&lt;li role="option"&gt;</strong>
      					<p>
      						선택 가능한 리스트 아이템.

      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">사용 시 주의사항</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>정확한 상태 반영</strong>
      					<p>
      						<code>aria-selected</code> 속성 값은 요소의 실제 선택 상태를 정확하게 반영해야 합니다.
      						사용자가 항목을 선택하거나 선택 해제할 때 이 상태를 동적으로 업데이트해야 합니다.
      					</p>
      				</li>
      				<li>
      					<strong>연관된 역할과 함께 사용</strong>
      					<p>
      						<code>aria-selected</code> 속성은
      						<code>role=&quot;option&quot;</code>, <code>role=&quot;tab&quot;</code>, <code>role=&quot;row&quot;</code> 등 선택 가능한 역할을 가진 요소에 주로 사용됩니다.
      					</p>
      				</li>
      				<li>
      					<strong>단일 선택과 다중 선택 구분</strong>
      					<p>
      						<code>aria-selected</code>는 단일 선택과 다중 선택 모두에 사용할 수 있으며, 이를 통해 보조 기술이 현재 선택된 항목을 명확히 전달할 수 있습니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">잘못된 예시</h4>
      				<p className="mt_s">
      					이 예시에서는 <code>aria-selected</code> 속성이 일부 옵션에만 설정되어 있어 보조 기술이 정확한 선택 상태를 인식하기 어려울 수 있습니다.
      					모든 선택 가능한 항목에 <code>aria-selected</code> 속성을 명시적으로 설정해야 합니다.
      				</p>
      				
      <CodeBlock title="aria-selected 상태 / 잘못된 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="listbox">
      							<div role="option" aria-selected="false">Option 1</div>
      							<div role="option">Option 2</div> <!-- aria-selected 속성이 누락됨 -->
      							<div role="option" aria-selected="true">Option 3</div>
      						</div>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">올바른 예시</h4>
      				<p className="mt_s">
      					이 예시는 모든 선택 가능한 항목에 <code>aria-selected</code> 속성이 명시적으로 설정되어 있으며,
      					보조 기술이 각 항목의 선택 상태를 정확하게 인식할 수 있습니다.
      				</p>
      				
      <CodeBlock title="aria-selected 상태 / 올바른 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="listbox">
      							<div role="option" aria-selected="false">Option 1</div>
      							<div role="option" aria-selected="false">Option 2</div>
      							<div role="option" aria-selected="true">Option 3</div>
      						</div>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">단일 선택 리스트 박스 예시</h4>
      				<p className="mt_s">
      					이 예시는 단일 선택이 가능한 리스트 박스를 나타냅니다.
      					<code>aria-selected=&quot;true&quot;</code> 속성이 설정된 항목이 현재 선택된 항목임을 나타내며, 클릭 시 선택 상태가 동적으로 업데이트됩니다.
      				</p>
      				
      <CodeBlock title="aria-selected 상태 / 단일 선택 리스트" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="listbox" id="singleSelectListbox">
      							<div role="option" aria-selected="true" tabindex="0">Option 1</div>
      							<div role="option" aria-selected="false" tabindex="-1">Option 2</div>
      							<div role="option" aria-selected="false" tabindex="-1">Option 3</div>
      						</div>

      						<script>
      							document.getElementById('singleSelectListbox').addEventListener('click', function(event) {
      								if (event.target.getAttribute('role') === 'option') {
      									const options = this.querySelectorAll('[role="option"]');
      									options.forEach(option => {
      										option.setAttribute('aria-selected', 'false');
      										option.setAttribute('tabindex', '-1');
      									});
      									event.target.setAttribute('aria-selected', 'true');
      									event.target.setAttribute('tabindex', '0');
      									event.target.focus();
      								}
      							});
      						</script>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">다중 선택 리스트 박스 예시</h4>
      				<p className="mt_s">
      					이 예시는 다중 선택이 가능한 리스트 박스를 나타냅니다.
      					사용자는 여러 항목을 선택할 수 있으며, 각 항목의 <code>aria-selected</code> 상태는 클릭 시 동적으로 업데이트됩니다.
      				</p>
      				
      <CodeBlock title="aria-selected 상태 / 다중 선택 리스트" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="listbox" id="multiSelectListbox" aria-multiselectable="true">
      							<div role="option" aria-selected="true" tabindex="0">Option 1</div>
      							<div role="option" aria-selected="true" tabindex="0">Option 2</div>
      							<div role="option" aria-selected="false" tabindex="0">Option 3</div>
      						</div>

      						<script>
      							document.getElementById('multiSelectListbox').addEventListener('click', function(event) {
      								if (event.target.getAttribute('role') === 'option') {
      									const isSelected = event.target.getAttribute('aria-selected') === 'true';
      									event.target.setAttribute('aria-selected', !isSelected);
      								}
      							});
      						</script>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">탭 리스트에서 선택된 탭 예시</h4>
      				<p className="mt_s">
      					이 예시는 탭 리스트에서 선택된 탭을 나타냅니다. 사용자가 탭을 클릭할 때, 선택된 탭이 동적으로 업데이트되며, 선택된 탭의 콘텐츠가 표시됩니다.
      				</p>
      				
      <CodeBlock title="aria-selected 상태 / 탭 리스트에서 선택" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="tablist" id="tabListExample">
      							<button role="tab" aria-selected="false" tabindex="-1">Tab 1</button>
      							<button role="tab" aria-selected="true" tabindex="0">Tab 2</button>
      							<button role="tab" aria-selected="false" tabindex="-1">Tab 3</button>
      						</div>
      						<div role="tabpanel">Content for Tab 2</div>

      						<script>
      							document.getElementById('tabListExample').addEventListener('click', function(event) {
      								if (event.target.getAttribute('role') === 'tab') {
      									const tabs = this.querySelectorAll('[role="tab"]');
      									tabs.forEach(tab => {
      										tab.setAttribute('aria-selected', 'false');
      										tab.setAttribute('tabindex', '-1');
      									});
      									event.target.setAttribute('aria-selected', 'true');
      									event.target.setAttribute('tabindex', '0');
      									event.target.focus();
      								}
      							});
      						</script>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">키보드 내비게이션과 함께 사용하는 예시</h4>
      				<p className="mt_s">
      					이 예시는 키보드 내비게이션을 통해 항목 간의 선택 상태를 변경하는 리스트 박스를 구현한 것입니다.
      					사용자가 <i className="key_arrow_down">ArrowDown</i> 및 <i className="key_arrow_up">ArrowUp</i> 키를 사용하여 항목 간에 이동하며,
      					<code>aria-selected</code> 속성이 동적으로 업데이트됩니다.
      				</p>
      				
      <CodeBlock title="aria-selected 상태 / 키보드 함께 사용" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="listbox" id="keyboardListbox" tabindex="0">
      							<div role="option" aria-selected="true" tabindex="0">Option 1</div>
      							<div role="option" aria-selected="false" tabindex="-1">Option 2</div>
      							<div role="option" aria-selected="false" tabindex="-1">Option 3</div>
      						</div>

      						<script>
      							document.getElementById('keyboardListbox').addEventListener('keydown', function(event) {
      								const options = this.querySelectorAll('[role="option"]');
      								let currentIndex = Array.from(options).findIndex(option => option.getAttribute('aria-selected') === 'true');
      								&nbsp;
      								if (event.key === 'ArrowDown') {
      									currentIndex = (currentIndex + 1) % options.length;
      								} else if (event.key === 'ArrowUp') {
      									currentIndex = (currentIndex - 1 + options.length) % options.length;
      								}
      								&nbsp;
      								options.forEach(option => {
      									option.setAttribute('aria-selected', 'false');
      									option.setAttribute('tabindex', '-1');
      								});
      								&nbsp;
      								options[currentIndex].setAttribute('aria-selected', 'true');
      								options[currentIndex].setAttribute('tabindex', '0');
      								options[currentIndex].focus();
      							});
      						</script>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">시멘틱 마크업을 활용한 탭 리스트 예시</h4>
      				<p className="mt_s">
      					이 예시는 시멘틱 마크업을 활용한 탭 리스트를 나타냅니다.
      					각 탭은 <code>aria-selected</code> 속성을 통해 현재 선택된 상태를 나타내며,
      					클릭 시 선택된 탭과 연관된 패널의 콘텐츠가 표시됩니다.
      					이 예시는 시멘틱 HTML 요소인 <code>&lt;ul&gt;</code>와 <code>&lt;li&gt;</code>를 활용하여 더 구조화된 접근성을 제공합니다.
      				</p>
      				
      <CodeBlock title="aria-selected 상태 / 시멘틱 마크업" language="javascript" className="uk_gist_code_box mt_m">
      {`<ul role="tablist">
      							<li role="presentation"><button role="tab" aria-selected="true" id="tab1" aria-controls="panel1">Tab 1</button></li>
      							<li role="presentation"><button role="tab" aria-selected="false" id="tab2" aria-controls="panel2">Tab 2</button></li>
      							<li role="presentation"><button role="tab" aria-selected="false" id="tab3" aria-controls="panel3">Tab 3</button></li>
      						</ul>
      						<div id="panel1" role="tabpanel" aria-labelledby="tab1">Content for Tab 1</div>
      						<div id="panel2" role="tabpanel" aria-labelledby="tab2" hidden>Content for Tab 2</div>
      						<div id="panel3" role="tabpanel" aria-labelledby="tab3" hidden>Content for Tab 3</div>

      						<script>
      							document.querySelectorAll('[role="tab"]').forEach(tab => {
      								tab.addEventListener('click', function() {
      									const tabs = document.querySelectorAll('[role="tab"]');
      									const panels = document.querySelectorAll('[role="tabpanel"]');
      									&nbsp;
      									tabs.forEach(t => {
      										t.setAttribute('aria-selected', 'false');
      										t.setAttribute('tabindex', '-1');
      									});
      									&nbsp;
      									panels.forEach(p => p.hidden = true);
      									&nbsp;
      									this.setAttribute('aria-selected', 'true');
      									this.setAttribute('tabindex', '0');
      									document.getElementById(this.getAttribute('aria-controls')).hidden = false;
      									this.focus();
      								});
      							});
      						</script>`}
      </CodeBlock>

      			</div>
      			
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">aria-sort 속성</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<code>aria-sort</code> 속성은 ARIA(Accessible Rich Internet Applications)에서 사용하는 속성(Property)으로,
      				테이블이나 그리드 내의 열(column)이 현재 어떤 정렬 상태인지 보조 기술(예: 스크린 리더)에 알리는 데 사용됩니다.
      				이 속성은 열 헤더에 적용되며, 사용자가 데이터를 오름차순 또는 내림차순으로 정렬할 수 있는 상황에서 특히 유용합니다.<br />
      				<code>aria-sort</code> 속성을 올바르게 사용하면 보조 기술이 정렬 상태를 정확하게 전달할 수 있어 접근성이 향상됩니다.
      				시멘틱 마크업을 활용하여 구조화된 접근성을 제공하는 것도 좋은 방법입니다.
      			</p>
      			<p className="reference mt_ms">
      				<a href="https://www.w3.org/TR/wai-aria-1.2/#aria-sort" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">WAI-ARIA 1.2 Specification (aria-sort)</a><br />
      				<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-sort" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN Web Docs (aria-sort)</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">aria-sort 속성 값</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>none (기본값)</strong>
      					<p>
      						정렬되지 않은 상태를 나타냅니다.
      					</p>
      				</li>
      				<li>
      					<strong>ascending</strong>
      					<p>
      						오름차순 정렬 상태임을 나타냅니다.
      					</p>
      				</li>
      				<li>
      					<strong>descending</strong>
      					<p>
      						내림차순 정렬 상태임을 나타냅니다.
      					</p>
      				</li>
      				<li>
      					<strong>other</strong>
      					<p>
      						정렬이 되었지만 오름차순이나 내림차순이 아닌 다른 형태의 정렬 상태임을 나타냅니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">연관된 HTML 태그 및 역할</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>&lt;th&gt;</strong>
      					<p>
      						테이블 헤더 셀.
      					</p>
      				</li>
      				<li>
      					<strong>&lt;div role="columnheader"&gt;</strong>
      					<p>
      						그리드 또는 테이블 내의 열 헤더.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">사용 시 주의사항</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>정렬 상태 반영</strong>
      					<p>
      						<code>aria-sort</code> 속성은 열이 실제로 정렬된 상태를 정확히 반영해야 합니다.
      						사용자가 열을 클릭하여 정렬 상태를 변경할 때마다 이 속성을 동적으로 업데이트해야 합니다.
      					</p>
      				</li>
      				<li>
      					<strong>보조 기술 호환성</strong>
      					<p>
      						<code>aria-sort</code>는 스크린 리더와 같은 보조 기술이 현재 정렬 상태를 사용자에게 전달할 수 있도록 돕습니다.
      						시각적으로도 정렬 상태를 표시하는 것이 중요합니다.
      					</p>
      				</li>
      				<li>
      					<strong>명확한 피드백 제공</strong>
      					<p>
      						사용자가 열을 클릭하여 정렬 상태를 변경할 때,
      						시각적인 피드백(예: 화살표 아이콘)과 함께 <code>aria-sort</code> 속성을 업데이트하면 사용자가 정렬 상태를 더 쉽게 인식할 수 있습니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">잘못된 예시</h4>
      				<p className="mt_s">
      					이 예시는 <code>aria-sort</code> 속성이 <mark>Age</mark> 열에만 설정되어 있으며, 사용자가 실제로 정렬 상태를 변경할 수 없습니다.
      					모든 열에 <code>aria-sort</code> 속성을 적용하고, 동적으로 상태를 업데이트해야 합니다.
      				</p>
      				
      <CodeBlock title="aria-sort 속성 / 잘못된 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<table>
      							<thead>
      								<tr>
      									<th id="nameHeader">Name</th>
      									<th id="ageHeader" aria-sort="ascending">Age</th>
      									<th id="cityHeader">City</th>
      								</tr>
      							</thead>
      							<tbody>
      								<tr>
      									<td>John</td>
      									<td>30</td>
      									<td>New York</td>
      								</tr>
      								<tr>
      									<td>Jane</td>
      									<td>25</td>
      									<td>Los Angeles</td>
      								</tr>
      							</tbody>
      						</table>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">올바른 예시</h4>
      				<p className="mt_s">
      					이 예시는 모든 열에 <code>aria-sort</code> 속성이 명시적으로 설정되어 있으며, 보조 기술이 각 열의 정렬 상태를 정확하게 인식할 수 있습니다.
      				</p>
      				
      <CodeBlock title="aria-sort 속성 / 올바른 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<table>
      							<thead>
      								<tr>
      									<th id="nameHeader" aria-sort="ascending">Name</th>
      									<th id="ageHeader" aria-sort="none">Age</th>
      									<th id="cityHeader" aria-sort="none">City</th>
      								</tr>
      							</thead>
      							<tbody>
      								<tr>
      									<td>John</td>
      									<td>30</td>
      									<td>New York</td>
      								</tr>
      								<tr>
      									<td>Jane</td>
      									<td>25</td>
      									<td>Los Angeles</td>
      								</tr>
      							</tbody>
      						</table>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">기본 테이블의 열 정렬 상태 예시</h4>
      				<p className="mt_s">
      					이 예시는 기본 테이블의 열 헤더에 <code>aria-sort</code> 속성을 사용하여 현재 <mark>&quot;Name&quot;</mark> 열이 오름차순으로 정렬된 상태임을 나타냅니다.
      					다른 열은 정렬되지 않은 상태로 표시됩니다.
      				</p>
      				
      <CodeBlock title="aria-sort 속성 / 기본 열 정렬 상태" language="javascript" className="uk_gist_code_box mt_m">
      {`<table>
      							<thead>
      								<tr>
      									<th id="nameHeader" aria-sort="ascending">Name</th>
      									<th id="ageHeader" aria-sort="none">Age</th>
      									<th id="cityHeader" aria-sort="none">City</th>
      								</tr>
      							</thead>
      							<tbody>
      								<tr>
      									<td>John</td>
      									<td>30</td>
      									<td>New York</td>
      								</tr>
      								<tr>
      									<td>Jane</td>
      									<td>25</td>
      									<td>Los Angeles</td>
      								</tr>
      							</tbody>
      						</table>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">동적으로 정렬 상태를 변경하는 테이블 예시</h4>
      				<p className="mt_s">
      					이 예시는 사용자가 열 헤더를 클릭할 때마다 <code>aria-sort</code> 속성이 동적으로 변경되는 테이블을 구현한 것입니다.
      					사용자가 헤더를 클릭할 때, 열의 정렬 상태가 오름차순, 내림차순, 또는 정렬되지 않은 상태로 순환됩니다.
      				</p>
      				
      <CodeBlock title="aria-sort 속성 / 동적 정렬 상태 변경" language="javascript" className="uk_gist_code_box mt_m">
      {`<table id="sortableTable">
      							<thead>
      								<tr>
      									<th id="nameHeader" aria-sort="none">Name</th>
      									<th id="ageHeader" aria-sort="none">Age</th>
      									<th id="cityHeader" aria-sort="none">City</th>
      								</tr>
      							</thead>
      							<tbody>
      								<tr>
      									<td>John</td>
      									<td>30</td>
      									<td>New York</td>
      								</tr>
      								<tr>
      									<td>Jane</td>
      									<td>25</td>
      									<td>Los Angeles</td>
      								</tr>
      							</tbody>
      						</table>

      						<script>
      							document.querySelectorAll('#sortableTable th').forEach(header => {
      								header.addEventListener('click', function() {
      									const currentSort = this.getAttribute('aria-sort');
      									let newSort;
      									&nbsp;
      									// Toggle the sort order
      									if (currentSort === 'ascending') {
      										newSort = 'descending';
      									} else if (currentSort === 'descending') {
      										newSort = 'none';
      									} else {
      										newSort = 'ascending';
      									}
      									&nbsp;
      									// Update the aria-sort attribute
      									document.querySelectorAll('#sortableTable th').forEach(th => th.setAttribute('aria-sort', 'none'));
      									this.setAttribute('aria-sort', newSort);
      									&nbsp;
      									// Example logic to sort the table data (sorting logic not implemented)
      									console.log(\`Sorting \${this.textContent} column in \${newSort} order.\`);
      								});
      							});
      						</script>`}
      </CodeBlock>

      			</div>
      			
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">aria-valuemax 속성</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<code>aria-valuemax</code> 속성은 ARIA(Accessible Rich Internet Applications)에서 사용하는 속성(Property)으로,
      				UI 요소(예: 슬라이더, 스피너 등)에서 허용되는 최대 값을 보조 기술(예: 스크린 리더)에 알리는 데 사용됩니다.<br />
      				이 속성은 주로 사용자가 값을 조정할 수 있는 컨트롤에서 사용되며, 해당 컨트롤의 범위를 명확하게 정의합니다.
      				시멘틱 마크업을 활용하여 구조화된 접근성을 제공하는 것도 중요한 접근 방법입니다.
      			</p>
      			<p className="reference mt_ms">
      				<a href="https://www.w3.org/TR/wai-aria-1.2/#aria-valuemax" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">WAI-ARIA 1.2 Specification (aria-valuemax)</a><br />
      				<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN Web Docs (aria-valuemax)</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">aria-valuemax 속성 값</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>숫자 값</strong>
      					<p>
      						요소가 허용하는 최대 값을 나타냅니다. 이 값은 사용자에게 전달되며, 해당 요소에서 설정할 수 있는 최대 한도를 정의합니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">연관된 HTML 태그 및 역할</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>&lt;input type="range"&gt;</strong>
      					<p>
      						슬라이더.
      					</p>
      				</li>
      				<li>
      					<strong>&lt;div role="slider"&gt;</strong>
      					<p>
      						커스텀 슬라이더.
      					</p>
      				</li>
      				<li>
      					<strong>&lt;div role="spinbutton"&gt;</strong>
      					<p>
      						스피너(숫자 증감) 요소.
      					</p>
      				</li>
      				<li>
      					<strong>&lt;progress&gt;</strong>
      					<p>
      						진행률 표시 요소.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">사용 시 주의사항</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>일관성 유지</strong>
      					<p>
      						<code>aria-valuemax</code> 속성은 UI 요소의 실제 동작과 일치해야 하며, 사용자가 설정할 수 있는 최대 값보다 높거나 낮게 설정하면 안 됩니다.
      					</p>
      				</li>
      				<li>
      					<strong>기본 HTML 속성과의 조화</strong>
      					<p>
      						HTML5 요소(예: <code>&lt;input type="range"&gt;</code>)는 이미 최대 값을 정의할 수 있는 속성(max)을 제공합니다.
      						이 경우, <code>aria-valuemax</code> 속성은 주로 커스텀 컨트롤에 사용되며,
      						이러한 속성과 함께 사용하면 보조 기술 사용자에게 일관된 정보를 전달할 수 있습니다.
      					</p>
      				</li>
      				<li>
      					<strong>보조 기술과의 호환성</strong>
      					<p>
      						이 속성은 보조 기술이 요소의 범위를 인식하도록 돕기 때문에, 특히 시각적으로 요소의 범위를 이해하기 어려운 사용자에게 유용합니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">잘못된 예시</h4>
      				<p className="mt_s">
      					이 예시에서는 <code>aria-valuemax=&quot;50&quot;</code>으로 설정되어 있지만, <code>aria-valuenow</code> 값이 <mark>50</mark>을 초과하고 있습니다.
      					이는 사용자가 최대 값보다 높은 값을 설정할 수 있음을 잘못 전달할 수 있습니다.
      				</p>
      				
      <CodeBlock title="aria-valuemax 속성 / 잘못된 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="slider" aria-valuemin="0" aria-valuemax="50" aria-valuenow="60" tabindex="0">
      							60
      						</div>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">올바른 예시</h4>
      				<p className="mt_s">
      					이 예시는 <code>aria-valuemax</code> 값이 슬라이더의 실제 최대 값과 일치하며, 현재 값이 최대 값을 초과하지 않습니다.
      					보조 기술은 이 정보를 사용하여 올바른 범위를 전달할 수 있습니다.
      				</p>
      				
      <CodeBlock title="aria-valuemax 속성 / 올바른 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="slider" aria-valuemin="0" aria-valuemax="100" aria-valuenow="50" tabindex="0">
      							50
      						</div>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">기본 슬라이더 예시</h4>
      				<p className="mt_s">
      					이 예시는 HTML5 슬라이더 요소를 사용하여 볼륨을 조정하는 슬라이더를 나타냅니다.
      					<code>aria-valuemax=&quot;100&quot;</code> 속성은 슬라이더의 최대 값이 <mark>100</mark>임을 보조 기술에 알립니다.
      				</p>
      				
      <CodeBlock title="aria-valuemax 속성 / 기본 슬라이더" language="javascript" className="uk_gist_code_box mt_m">
      {`<label for="volumeSlider">Volume</label>
      						<input type="range" id="volumeSlider" min="0" max="100" value="50" aria-valuemax="100">`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">커스텀 슬라이더 예시</h4>
      				<p className="mt_s">
      					이 예시는 커스텀 슬라이더를 구현한 것으로, <code>aria-valuemax=&quot;200&quot;</code> 속성을 사용하여 슬라이더의 최대 값을 보조 기술에 전달합니다.
      					사용자는 키보드 <i className="key_arrow">화살표</i> 키를 사용하여 슬라이더 값을 조정할 수 있습니다.
      				</p>
      				
      <CodeBlock title="aria-valuemax 속성 / 커스텀 슬라이더" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="slider" aria-valuemin="0" aria-valuemax="200" aria-valuenow="100" tabindex="0" style="width: 200px; background: lightgray; height: 10px; position: relative;">
      							<div id="sliderThumb" style="width: 10px; height: 20px; background: blue; position: absolute; left: 50%;"></div>
      						</div>

      						<script>
      							document.getElementById('sliderThumb').addEventListener('keydown', function(event) {
      								const slider = this.parentElement;
      								let currentValue = parseInt(slider.getAttribute('aria-valuenow'));
      								const minValue = parseInt(slider.getAttribute('aria-valuemin'));
      								const maxValue = parseInt(slider.getAttribute('aria-valuemax'));
      								&nbsp;
      								if (event.key === 'ArrowRight') {
      									currentValue = Math.min(maxValue, currentValue + 10);
      								} else if (event.key === 'ArrowLeft') {
      									currentValue = Math.max(minValue, currentValue - 10);
      								}
      								&nbsp;
      								slider.setAttribute('aria-valuenow', currentValue);
      								this.style.left = \`\${(currentValue / maxValue) * 100}%\`;
      							});
      						</script>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">스피너 예시</h4>
      				<p className="mt_s">
      					이 예시는 스피너 컨트롤을 구현한 것으로, <code>aria-valuemax=&quot;10&quot;</code> 속성을 사용하여 스피너가 허용하는 최대 값이 10임을 나타냅니다.
      					사용자는 <i className="key_arrow">화살표</i> 키를 사용하여 값을 증감할 수 있습니다.
      				</p>
      				
      <CodeBlock title="aria-valuemax 속성 / 스피너 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="spinbutton" aria-valuemin="1" aria-valuemax="10" aria-valuenow="5" tabindex="0">
      							5
      						</div>

      						<script>
      							document.querySelector('[role="spinbutton"]').addEventListener('keydown', function(event) {
      								let currentValue = parseInt(this.getAttribute('aria-valuenow'));
      								const minValue = parseInt(this.getAttribute('aria-valuemin'));
      								const maxValue = parseInt(this.getAttribute('aria-valuemax'));
      								&nbsp;
      								if (event.key === 'ArrowUp') {
      									currentValue = Math.min(maxValue, currentValue + 1);
      								} else if (event.key === 'ArrowDown') {
      									currentValue = Math.max(minValue, currentValue - 1);
      								}
      								&nbsp;
      								this.setAttribute('aria-valuenow', currentValue);
      								this.textContent = currentValue;
      							});
      						</script>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">시멘틱 마크업을 활용한 진행률 표시 예시</h4>
      				<p className="mt_s">
      					이 예시는 파일 업로드 진행률을 나타내는 <code>progress</code> 요소를 사용하여 시멘틱 마크업을 구현한 것입니다.
      					<code>aria-valuemax=&quot;100&quot;</code> 속성은 진행률의 최대 값이 100임을 보조 기술에 전달합니다.
      				</p>
      				
      <CodeBlock title="aria-valuemax 속성 / 시멘틱 마크업을 활용" language="javascript" className="uk_gist_code_box mt_m">
      {`<progress id="fileProgress" max="100" value="50" aria-valuemax="100"></progress>
      						<label for="fileProgress">File Upload Progress</label>`}
      </CodeBlock>

      			</div>
      			
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">aria-valuemin 속성</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				aria-valuemin 속성은 ARIA(Accessible Rich Internet Applications)에서 사용하는 속성(Property)으로,
      				UI 요소(예: 슬라이더, 스피너 등)에서 허용되는 최소 값을 보조 기술(예: 스크린 리더)에 알리는 데 사용됩니다.<br />
      				이 속성은 주로 사용자가 값을 조정할 수 있는 컨트롤에서 사용되며, 해당 컨트롤의 범위를 명확하게 정의합니다.
      				시멘틱 마크업을 활용하여 구조화된 접근성을 제공하는 것도 중요한 접근 방법입니다.
      			</p>
      			<p className="reference mt_ms">
      				<a href="https://www.w3.org/TR/wai-aria-1.2/#aria-valuemin" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">WAI-ARIA 1.2 Specification (aria-valuemin)</a><br />
      				<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN Web Docs (aria-valuemin)</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">aria-valuemin 속성 값</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>숫자 값</strong>
      					<p>
      						요소가 허용하는 최소 값을 나타냅니다. 이 값은 사용자에게 전달되며,
      						해당 요소에서 설정할 수 있는 최대 한도를 정의합니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">연관된 HTML 태그 및 역할</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>&lt;input type="range"&gt;</strong>
      					<p>
      						슬라이더.
      					</p>
      				</li>
      				<li>
      					<strong>&lt;div role="slider"&gt;</strong>
      					<p>
      						커스텀 슬라이더.
      					</p>
      				</li>
      				<li>
      					<strong>&lt;div role="spinbutton"&gt;</strong>
      					<p>
      						스피너(숫자 증감) 요소.
      					</p>
      				</li>
      				<li>
      					<strong>&lt;progress&gt;</strong>
      					<p>
      						진행률 표시 요소.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">사용 시 주의사항</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>일관성 유지</strong>
      					<p>
      						<code>aria-valuemin</code> 속성은 UI 요소의 실제 동작과 일치해야 하며,
      						사용자가 설정할 수 있는 최소 값보다 높거나 낮게 설정하면 안 됩니다.
      					</p>
      				</li>
      				<li>
      					<strong>기본 HTML 속성과의 조화</strong>
      					<p>
      						HTML5 요소(예: <code>&lt;input type="range"&gt;</code>)는 이미 최소 값을 정의할 수 있는 속성(<code>min</code>)을 제공합니다.
      						이 경우, <code>aria-valuemin</code> 속성은 주로 커스텀 컨트롤에 사용되며,
      						이러한 속성과 함께 사용하면 보조 기술 사용자에게 일관된 정보를 전달할 수 있습니다.
      					</p>
      				</li>
      				<li>
      					<strong>보조 기술과의 호환성</strong>
      					<p>
      						이 속성은 보조 기술이 요소의 범위를 인식하도록 돕기 때문에,
      						특히 시각적으로 요소의 범위를 이해하기 어려운 사용자에게 유용합니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">잘못된 예시</h4>
      				<p className="mt_s">
      					이 예시에서는 <code>aria-valuemin=&quot;10&quot;</code>으로 설정되어 있지만, <code>aria-valuenow</code> 값이 10보다 작습니다.
      					이는 사용자가 최소 값보다 낮은 값을 설정할 수 있음을 잘못 전달할 수 있습니다.
      				</p>
      				
      <CodeBlock title="aria-valuemin 속성 / 잘못된 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="slider" aria-valuemin="10" aria-valuemax="50" aria-valuenow="5" tabindex="0">
      							5
      						</div>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">올바른 예시</h4>
      				<p className="mt_s">
      					이 예시는 <code>aria-valuemin</code> 값이 슬라이더의 실제 최소 값과 일치하며, 현재 값이 최소 값을 초과하지 않습니다.
      					보조 기술은 이 정보를 사용하여 올바른 범위를 전달할 수 있습니다.
      				</p>
      				
      <CodeBlock title="aria-valuemin 속성 / 올바른 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="slider" aria-valuemin="0" aria-valuemax="100" aria-valuenow="50" tabindex="0">
      							50
      						</div>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">기본 슬라이더 예시</h4>
      				<p className="mt_s">
      					이 예시는 HTML5 슬라이더 요소를 사용하여 볼륨을 조정하는 슬라이더를 나타냅니다.
      					<code>aria-valuemin=&quot;0&quot;</code> 속성은 슬라이더의 최소 값이 0임을 보조 기술에 알립니다.
      				</p>
      				
      <CodeBlock title="aria-valuemin 속성 / 기본 슬라이더" language="javascript" className="uk_gist_code_box mt_m">
      {`<!-- 기본 슬라이더 예시 -->
      						<label for="volumeSlider">Volume</label>
      						<input type="range" id="volumeSlider" min="0" max="100" value="50" aria-valuemax="100">`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">커스텀 슬라이더 예시</h4>
      				<p className="mt_s">
      					이 예시는 커스텀 슬라이더를 구현한 것으로, <code>aria-valuemin=&quot;0&quot;</code> 속성을 사용하여 슬라이더의 최소 값을 보조 기술에 전달합니다.
      					사용자는 키보드 <i className="key_arrow">화살표</i> 키를 사용하여 슬라이더 값을 조정할 수 있습니다.
      				</p>
      				
      <CodeBlock title="aria-valuemin 속성 / 커스텀 슬라이더" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="slider" aria-valuemin="0" aria-valuemax="200" aria-valuenow="100" tabindex="0" style="width: 200px; background: lightgray; height: 10px; position: relative;">
      							<div id="sliderThumb" style="width: 10px; height: 20px; background: blue; position: absolute; left: 50%;"></div>
      						</div>

      						<script>
      							document.getElementById('sliderThumb').addEventListener('keydown', function(event) {
      								const slider = this.parentElement;
      								let currentValue = parseInt(slider.getAttribute('aria-valuenow'));
      								const minValue = parseInt(slider.getAttribute('aria-valuemin'));
      								const maxValue = parseInt(slider.getAttribute('aria-valuemax'));
      								&nbsp;
      								if (event.key === 'ArrowRight') {
      									currentValue = Math.min(maxValue, currentValue + 10);
      								} else if (event.key === 'ArrowLeft') {
      									currentValue = Math.max(minValue, currentValue - 10);
      								}
      								&nbsp;
      								slider.setAttribute('aria-valuenow', currentValue);
      								this.style.left = \`\${(currentValue / maxValue) * 100}%\`;
      							});
      						</script>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">스피너 예시</h4>
      				<p className="mt_s">
      					이 예시는 스피너 컨트롤을 구현한 것으로, <code>aria-valuemin=&quot;1&quot;</code> 속성을 사용하여 스피너가 허용하는 최소 값이 1임을 나타냅니다.
      					사용자는 <i className="key_arrow">화살표</i> 키를 사용하여 값을 증감할 수 있습니다.
      				</p>
      				
      <CodeBlock title="aria-valuemin 속성 / 스피너 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="spinbutton" aria-valuemin="1" aria-valuemax="10" aria-valuenow="5" tabindex="0">
      							5
      						</div>

      						<script>
      							document.querySelector('[role="spinbutton"]').addEventListener('keydown', function(event) {
      								let currentValue = parseInt(this.getAttribute('aria-valuenow'));
      								const minValue = parseInt(this.getAttribute('aria-valuemin'));
      								const maxValue = parseInt(this.getAttribute('aria-valuemax'));
      								&nbsp;
      								if (event.key === 'ArrowUp') {
      									currentValue = Math.min(maxValue, currentValue + 1);
      								} else if (event.key === 'ArrowDown') {
      									currentValue = Math.max(minValue, currentValue - 1);
      								}
      								&nbsp;
      								this.setAttribute('aria-valuenow', currentValue);
      								this.textContent = currentValue;
      							});
      						</script>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">시멘틱 마크업을 활용한 진행률 표시 예시</h4>
      				<p className="mt_s">
      					이 예시는 파일 업로드 진행률을 나타내는 <code>progress</code> 요소를 사용하여 시멘틱 마크업을 구현한 것입니다.
      					<code>aria-valuemin=&quot;0&quot;</code> 속성은 진행률의 최소 값이 <code>0</code>임을 보조 기술에 전달합니다.
      				</p>
      				
      <CodeBlock title="aria-valuemin 속성 / 시멘틱 마크업" language="javascript" className="uk_gist_code_box mt_m">
      {`<progress id="fileProgress" max="100" value="50" aria-valuemax="100"></progress>
      						<label for="fileProgress">File Upload Progress</label>`}
      </CodeBlock>

      			</div>
      			
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">aria-valuenow 속성</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<code>aria-valuenow</code> 속성은 ARIA(Accessible Rich Internet Applications)에서 사용하는 속성(Property)으로,
      				UI 요소(예: 슬라이더, 스피너 등)에서 현재 선택된 값 또는 상태를 보조 기술(예: 스크린 리더)에 알리는 데 사용됩니다.<br />
      				이 속성은 사용자가 값을 조정할 수 있는 컨트롤에서 사용되며, 해당 컨트롤의 현재 값을 명확하게 전달합니다.
      				시멘틱 마크업을 활용하여 구조화된 접근성을 제공하는 것도 중요한 접근 방법입니다.
      			</p>
      			<p className="reference mt_ms">
      				<a href="https://www.w3.org/TR/wai-aria-1.2/#aria-valuenow" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">WAI-ARIA 1.2 Specification (aria-valuenow)</a><br />
      				<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN Web Docs (aria-valuenow)</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">aria-valuenow 속성 값</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>숫자 값</strong>
      					<p>
      						요소의 현재 값을 나타냅니다. 이 값은 보조 기술을 통해 사용자에게 전달되며, 해당 요소의 현재 상태를 명확하게 정의합니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">연관된 HTML 태그 및 역할</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>&lt;input type="range"&gt;</strong>
      					<p>
      						슬라이더.
      					</p>
      				</li>
      				<li>
      					<strong>&lt;div role="slider"&gt;</strong>
      					<p>
      						커스텀 슬라이더.
      					</p>
      				</li>
      				<li>
      					<strong>&lt;div role="spinbutton"&gt;</strong>
      					<p>
      						스피너(숫자 증감) 요소.
      					</p>
      				</li>
      				<li>
      					<strong>&lt;progress&gt;</strong>
      					<p>
      						진행률 표시 요소.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">사용 시 주의사항</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>정확한 값 반영</strong>
      					<p>
      						<code>aria-valuenow</code> 속성은 요소의 실제 상태와 일치해야 하며, 사용자 상호작용에 따라 동적으로 업데이트되어야 합니다.
      					</p>
      				</li>
      				<li>
      					<strong>기본 HTML 속성과의 조화</strong>
      					<p>
      						HTML5 요소(예: <code>&lt;input type="range"&gt;</code>)는 이미 현재 값을 정의할 수 있는 속성(<code>value</code>)을 제공합니다.
      						이 경우, <code>aria-valuenow</code> 속성은 주로 커스텀 컨트롤에 사용되며,
      						이러한 속성과 함께 사용하면 보조 기술 사용자에게 일관된 정보를 전달할 수 있습니다.
      					</p>
      				</li>
      				<li>
      					<strong>보조 기술과의 호환성</strong>
      					<p>
      						이 속성은 보조 기술이 요소의 범위를 인식하도록 돕기 때문에,
      						특히 시각적으로 요소의 범위를 이해하기 어려운 사용자에게 유용합니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">잘못된 예시</h4>
      				<p className="mt_s">
      					이 예시에서는 <code>aria-valuenow=&quot;150&quot;</code>으로 설정되어 있지만, 이는 <code>aria-valuemax=&quot;100&quot;</code>을 초과하는 값입니다.
      					이는 사용자가 최대 값보다 높은 값을 설정할 수 있음을 잘못 전달할 수 있습니다.
      				</p>
      				
      <CodeBlock title="aria-valuenow 속성 / 잘못된 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="slider" aria-valuemin="0" aria-valuemax="100" aria-valuenow="150" tabindex="0">
      							150
      						</div>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">올바른 예시</h4>
      				<p className="mt_s">
      					이 예시는 <code>aria-valuenow</code> 값이 슬라이더의 현재 값과 일치하며, 최대 값 또는 최소 값을 초과하지 않습니다.
      					보조 기술은 이 정보를 사용하여 올바른 상태를 전달할 수 있습니다.
      				</p>
      				
      <CodeBlock title="aria-valuenow 속성 / 올바른 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="slider" aria-valuemin="0" aria-valuemax="100" aria-valuenow="50" tabindex="0">
      							50
      						</div>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">기본 슬라이더 예시</h4>
      				<p className="mt_s">
      					이 예시는 HTML5 슬라이더 요소를 사용하여 볼륨을 조정하는 슬라이더를 나타냅니다.
      					<code>aria-valuenow=&quot;50&quot;</code> 속성은 슬라이더의 현재 값이 <code>50</code>임을 보조 기술에 알립니다.
      				</p>
      				
      <CodeBlock title="aria-valuenow 속성 / 기본 슬라이더" language="javascript" className="uk_gist_code_box mt_m">
      {`<!-- 기본 슬라이더 예시 -->
      						<label for="volumeSlider">Volume</label>
      						<input type="range" id="volumeSlider" min="0" max="100" value="50" aria-valuenow="50">`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">커스텀 슬라이더 예시</h4>
      				<p className="mt_s">
      					이 예시는 커스텀 슬라이더를 구현한 것으로,
      					<code>aria-valuenow=&quot;100&quot;</code> 속성을 사용하여 슬라이더의 현재 값을 보조 기술에 전달합니다.
      					사용자는 키보드 <i className="key_arrow">화살표</i> 키를 사용하여 슬라이더 값을 조정할 수 있습니다.
      				</p>
      				
      <CodeBlock title="aria-valuenow 속성 / 커스텀 슬라이더" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="slider" aria-valuemin="0" aria-valuemax="200" aria-valuenow="100" tabindex="0" style="width: 200px; background: lightgray; height: 10px; position: relative;">
      							<div id="sliderThumb" style="width: 10px; height: 20px; background: blue; position: absolute; left: 50%;"></div>
      						</div>

      						<script>
      							document.getElementById('sliderThumb').addEventListener('keydown', function(event) {
      								const slider = this.parentElement;
      								let currentValue = parseInt(slider.getAttribute('aria-valuenow'));
      								const minValue = parseInt(slider.getAttribute('aria-valuemin'));
      								const maxValue = parseInt(slider.getAttribute('aria-valuemax'));
      								&nbsp;
      								if (event.key === 'ArrowRight') {
      									currentValue = Math.min(maxValue, currentValue + 10);
      								} else if (event.key === 'ArrowLeft') {
      									currentValue = Math.max(minValue, currentValue - 10);
      								}
      								&nbsp;
      								slider.setAttribute('aria-valuenow', currentValue);
      								this.style.left = \`\${(currentValue / maxValue) * 100}%\`;
      							});
      						</script>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">스피너 예시</h4>
      				<p className="mt_s">
      					이 예시는 스피너 컨트롤을 구현한 것으로,
      					<code>aria-valuenow=&quot;5&quot;</code> 속성을 사용하여 스피너의 현재 값이 <code>5</code>임을 나타냅니다.
      					사용자는 <i className="key_arrow">화살표</i> 키를 사용하여 값을 증감할 수 있으며, <code>aria-valuenow</code> 속성이 동적으로 업데이트됩니다.
      				</p>
      				
      <CodeBlock title="aria-valuenow 속성 / 스피너 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="spinbutton" aria-valuemin="1" aria-valuemax="10" aria-valuenow="5" tabindex="0">
      							5
      						</div>

      						<script>
      							document.querySelector('[role="spinbutton"]').addEventListener('keydown', function(event) {
      								let currentValue = parseInt(this.getAttribute('aria-valuenow'));
      								const minValue = parseInt(this.getAttribute('aria-valuemin'));
      								const maxValue = parseInt(this.getAttribute('aria-valuemax'));
      								&nbsp;
      								if (event.key === 'ArrowUp') {
      									currentValue = Math.min(maxValue, currentValue + 1);
      								} else if (event.key === 'ArrowDown') {
      									currentValue = Math.max(minValue, currentValue - 1);
      								}
      								&nbsp;
      								this.setAttribute('aria-valuenow', currentValue);
      								this.textContent = currentValue;
      							});
      						</script>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">시멘틱 마크업을 활용한 진행률 표시 예시</h4>
      				<p className="mt_s">
      					이 예시는 파일 업로드 진행률을 나타내는 <code>progress</code> 요소를 사용하여 시멘틱 마크업을 구현한 것입니다.
      					<code>aria-valuenow=&quot;50&quot;</code> 속성은 진행률의 현재 값이 50%임을 보조 기술에 전달합니다.
      				</p>
      				
      <CodeBlock title="aria-valuenow 속성 / 시멘틱 마크업" language="javascript" className="uk_gist_code_box mt_m">
      {`<progress id="fileProgress" max="100" value="50" aria-valuenow="50"></progress>
      						<label for="fileProgress">File Upload Progress</label>`}
      </CodeBlock>

      			</div>
      			
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">aria-valuetext 속성</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<code>aria-valuetext</code> 속성은 ARIA(Accessible Rich Internet Applications)에서 사용하는 속성(Property)으로,
      				UI 요소(예: 슬라이더, 스피너 등)에서 현재 선택된 값의 의미를 텍스트로 보조 기술(예: 스크린 리더)에 전달하는 데 사용됩니다.
      				이 속성은 숫자 값(<code>aria-valuenow</code>)을 보다 의미 있는 텍스트로 변환해 사용자에게 제공할 수 있게 합니다.<br />
      				예를 들어, 슬라이더가 <mark>&quot;50&quot;</mark>이라는 숫자를 나타내고 있을 때,
      				<code>aria-valuetext</code>를 통해 <mark>&quot;중간&quot;</mark>이라는 텍스트를 제공할 수 있습니다.
      				시멘틱 마크업을 활용하여 구조화된 접근성을 제공하는 것도 중요한 접근 방법입니다.
      			</p>
      			<p className="reference mt_ms">
      				<a href="https://www.w3.org/TR/wai-aria-1.2/#aria-valuetext" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">WAI-ARIA 1.2 Specification (aria-valuetext)</a><br />
      				<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuetext" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN Web Docs (aria-valuetext)</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">aria-valuetext 속성 값</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>문자열 값</strong>
      					<p>
      						요소의 현재 값을 텍스트로 표현한 문자열. 이 문자열은 보조 기술을 통해 사용자에게 제공됩니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">연관된 HTML 태그 및 역할</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>&lt;input type="range"&gt;</strong>
      					<p>
      						슬라이더.
      					</p>
      				</li>
      				<li>
      					<strong>&lt;div role="slider"&gt;</strong>
      					<p>
      						커스텀 슬라이더.
      					</p>
      				</li>
      				<li>
      					<strong>&lt;div role="spinbutton"&gt;</strong>
      					<p>
      						스피너(숫자 증감) 요소.
      					</p>
      				</li>
      				<li>
      					<strong>&lt;progress&gt;</strong>
      					<p>
      						진행률 표시 요소.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">사용 시 주의사항</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>숫자 값과 의미의 조화</strong>
      					<p>
      						<code>aria-valuetext</code>는 <code>aria-valuenow</code> 속성으로 전달되는 숫자 값을 보다 의미 있는 텍스트로 변환하는 데 사용됩니다.
      						숫자가 직관적이지 않거나 추가 설명이 필요할 때 사용됩니다.
      					</p>
      				</li>
      				<li>
      					<strong>일관된 정보 제공</strong>
      					<p>
      						<code>aria-valuetext</code>를 설정할 때, 이 텍스트는 요소의 현재 값을 잘 설명해야 하며,
      						보조 기술 사용자에게 혼동을 주지 않도록 해야 합니다.
      					</p>
      				</li>
      				<li>
      					<strong>보조 기술과의 호환성</strong>
      					<p>
      						이 속성은 보조 기술이 요소의 범위를 인식하도록 돕기 때문에, 특히 시각적으로 요소의 범위를 이해하기 어려운 사용자에게 유용합니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">잘못된 예시</h4>
      				<p className="mt_s">
      					이 예시에서는 <code>aria-valuenow=&quot;50&quot;</code>과 <code>aria-valuetext=&quot;150&quot;</code>이 일치하지 않습니다.
      					이로 인해 보조 기술 사용자가 혼란을 겪을 수 있습니다.
      					<code>aria-valuetext</code>는 <code>aria-valuenow</code>와 의미가 일치하는 텍스트로 설정해야 합니다.
      				</p>
      				
      <CodeBlock title="aria-valuetext 속성 / 잘못된 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="slider" aria-valuemin="0" aria-valuemax="100" aria-valuenow="50" aria-valuetext="150" tabindex="0">
      							50
      						</div>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">올바른 예시</h4>
      				<p className="mt_s">
      					이 예시는 <code>aria-valuenow</code> 값이 <code>50</code>이고,
      					<code>aria-valuetext</code>가 이를 설명하는 <mark>&quot;Medium&quot;</mark>으로 설정되어 있으며,
      					보조 기술 사용자에게 일관된 정보를 제공합니다.
      				</p>
      				
      <CodeBlock title="aria-valuetext 속성 / 올바른 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="slider" aria-valuemin="0" aria-valuemax="100" aria-valuenow="50" aria-valuetext="Medium" tabindex="0">
      							50
      						</div>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">기본 슬라이더 예시</h4>
      				<p className="mt_s">
      					이 예시는 HTML5 슬라이더 요소를 사용하여 볼륨을 조정하는 슬라이더를 나타냅니다.
      					<code>aria-valuetext=&quot;Medium&quot;</code> 속성은 슬라이더의 현재 값이 <code>50</code>일 때,
      					이를 <mark>&quot;Medium&quot;</mark>이라는 텍스트로 설명합니다.
      				</p>
      				
      <CodeBlock title="aria-valuetext 속성 / 기본 슬라이더" language="javascript" className="uk_gist_code_box mt_m">
      {`<!-- 기본 슬라이더 예시 -->
      						<label for="volumeSlider">Volume</label>
      						<input type="range" id="volumeSlider" min="0" max="100" value="50" aria-valuenow="50" aria-valuetext="Medium">`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">커스텀 슬라이더 예시</h4>
      				<p className="mt_s">
      					이 예시는 커스텀 슬라이더를 구현한 것으로, <code>aria-valuenow=&quot;100&quot;</code>과 함께
      					<code>aria-valuetext=&quot;Halfway&quot;</code> 속성을 사용하여 슬라이더의 현재 값을 보조 기술에 전달합니다.
      					사용자가 슬라이더 값을 변경할 때, 해당 값에 대한 텍스트 설명도 동적으로 업데이트됩니다.
      				</p>
      				
      <CodeBlock title="aria-valuetext 속성 / 커스텀 슬라이더" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="slider" aria-valuemin="0" aria-valuemax="200" aria-valuenow="100" aria-valuetext="Halfway" tabindex="0" style="width: 200px; background: lightgray; height: 10px; position: relative;">
      							<div id="sliderThumb" style="width: 10px; height: 20px; background: blue; position: absolute; left: 50%;"></div>
      						</div>

      						<script>
      							document.getElementById('sliderThumb').addEventListener('keydown', function(event) {
      								const slider = this.parentElement;
      								let currentValue = parseInt(slider.getAttribute('aria-valuenow'));
      								const minValue = parseInt(slider.getAttribute('aria-valuemin'));
      								const maxValue = parseInt(slider.getAttribute('aria-valuemax'));
      								&nbsp;
      								if (event.key === 'ArrowRight') {
      									currentValue = Math.min(maxValue, currentValue + 10);
      								} else if (event.key === 'ArrowLeft') {
      									currentValue = Math.max(minValue, currentValue - 10);
      								}
      								&nbsp;
      								slider.setAttribute('aria-valuenow', currentValue);
      								slider.setAttribute('aria-valuetext', currentValue === 100 ? "Halfway" : currentValue);
      								this.style.left = \`\${(currentValue / maxValue) * 100}%\`;
      							});
      						</script>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">스피너 예시</h4>
      				<p className="mt_s">
      					이 예시는 스피너 컨트롤을 구현한 것으로, <code>aria-valuenow=&quot;5&quot;</code>와 함께
      					<code>aria-valuetext=&quot;Five&quot;</code> 속성을 사용하여 현재 값을 텍스트로 표현합니다.
      					사용자가 값을 변경할 때, <code>aria-valuetext</code>가 동적으로 업데이트됩니다.
      				</p>
      				
      <CodeBlock title="aria-valuetext 속성 / 스피너 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="spinbutton" aria-valuemin="1" aria-valuemax="10" aria-valuenow="5" aria-valuetext="Five" tabindex="0">
      							5
      						</div>

      						<script>
      							document.querySelector('[role="spinbutton"]').addEventListener('keydown', function(event) {
      								let currentValue = parseInt(this.getAttribute('aria-valuenow'));
      								const minValue = parseInt(this.getAttribute('aria-valuemin'));
      								const maxValue = parseInt(this.getAttribute('aria-valuemax'));
      								&nbsp;
      								if (event.key === 'ArrowUp') {
      									currentValue = Math.min(maxValue, currentValue + 1);
      								} else if (event.key === 'ArrowDown') {
      									currentValue = Math.max(minValue, currentValue - 1);
      								}
      								&nbsp;
      								this.setAttribute('aria-valuenow', currentValue);
      								this.setAttribute('aria-valuetext', currentValue);
      								this.textContent = currentValue;
      							});
      						</script>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">시멘틱 마크업을 활용한 진행률 표시 예시</h4>
      				<p className="mt_s">
      					이 예시는 파일 업로드 진행률을 나타내는 <code>progress</code> 요소를 사용하여 시멘틱 마크업을 구현한 것입니다.
      					<code>aria-valuetext=&quot;50 percent completed&quot;</code> 속성은 진행률의 현재 값을 텍스트로 설명하며,
      					보조 기술 사용자에게 보다 명확한 정보를 제공합니다.
      				</p>
      				
      <CodeBlock title="aria-valuetext 속성 / 시멘틱 마크업" language="javascript" className="uk_gist_code_box mt_m">
      {`<progress id="fileProgress" max="100" value="50" aria-valuenow="50" aria-valuetext="50 percent completed"></progress>
      						<label for="fileProgress">File Upload Progress</label>`}
      </CodeBlock>

      			</div>
      			
      		</article>
      		
      	</section>
      	

      	<figure className="img_figure mt_l">
      		<img src={`${IMG.WAI_ARIA}/03_wai-aria_role_01.png`} alt="위젯 속성(Widget Attributes)" />
      		<figcaption>
      			<b>[위젯 속성(Widget Attributes)]</b><br />
      			<a href={`${IMG.WAI_ARIA}/03_wai-aria_role_01.png`} className="mt_ms box_link" title="새창 열림" target="_blank" rel="noreferrer">크게 보기</a>
      		</figcaption>
      	</figure>


      <footer className="reference_box">
      	<strong className="tit">위젯 속성(Widget Attributes) | WAI-ARIA 상태 및 속성 참조</strong>
      	<ul className="link_lst">
      		<li className="reference"><a href="https://www.w3.org/TR/wai-aria-1.1/" target="_blank" rel="noreferrer" title="새창 열림" className="fas">W3C Accessible Rich Internet Applications (WAI-ARIA) 1.1</a></li>
      		<li className="reference"><a href="https://www.w3.org/TR/wai-aria-1.2/" target="_blank" rel="noreferrer" title="새창 열림" className="fas">W3C Accessible Rich Internet Applications (WAI-ARIA) 1.2</a></li>
      		<li className="reference"><a href="https://www.w3.org/TR/wai-aria-1.3/" target="_blank" rel="noreferrer" title="새창 열림" className="fas">W3C Accessible Rich Internet Applications (WAI-ARIA) 1.3</a></li>
      		<li className="reference"><a href="https://w3c.github.io/aria/" target="_blank" rel="noreferrer" title="새창 열림" className="fas">W3C Editor’s Draft - Accessible Rich Internet Applications (WAI-ARIA) 1.3</a></li>
      		<li className="reference"><a href="https://wicg.github.io/aom/explainer.html" target="_blank" rel="noreferrer" title="새창 열림" className="fas">Accessibility Object Model</a></li>
      		<li className="reference"><a href="https://www.w3.org/TR/wai-aria-1.1/img/rdf_model.svg" target="_blank" rel="noreferrer" title="새창 열림" className="fas">W3C Class diagram of the relationships described in the role data model.</a></li>
      		<li className="reference"><a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Guides" target="_blank" rel="noreferrer" title="새창 열림" className="fas">MDN ARIA guides</a></li>
      	</ul>
      </footer>
    </>
  )
}

export default AttrsWidgetsPart2Page
