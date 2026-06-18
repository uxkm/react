import { useAccessibilityPageMeta } from '@/hooks/useAccessibilityPageMeta.js'
import { IMG } from '@/config/path'
import { Suspense, lazy } from 'react'
const UkEditorTarget = lazy(() => import('@/components/code/UkEditorTarget'))
function EditorFallback() { return <div className="uk_editor min_height_300" aria-hidden /> }
import CodeBlock from '@/components/code/CodeBlock'

const PAGE_LAYOUT = {
  mainClass: "attrsDragdrop",
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
  title: "드래그 앤 드롭 속성(Drag-and-Drop Attributes) | WAI-ARIA 상태 및 속성",
  description: "WAI-ARIA (Web Accessibility Initiative - Accessible Rich Internet Applications)의 상태 및 속성(State and Properties)은 웹 애플리케이션의 접근성을 향상시키기 위해 HTML 요소에 추가적인 의미와 기능을 부여하는 메커니즘입니다. 이 페이지에서는 WAI-ARIA의 상태 및 속성 중 드래그 앤 드롭 속성(Drag-and-Drop Attributes)에 대해 소개합니다.",
  keyword: "Accessibility, a11y, wcag, kwcag, macag, kiosk, 접근성, 웹 콘텐츠 접근성, 한국형 웹 콘텐츠 접근성, 모바일 앱 접근성, 무인정보단밀기 접근성",
}

function AttrsDragdropPage() {
  useAccessibilityPageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  })


  return (
    <>










      	<blockquote className="uk_note mt_xl" role="note">
      		<strong className="sound_only">요약 설명</strong>
      		<p>
      			WAI-ARIA (Web Accessibility Initiative - Accessible Rich Internet Applications)에서 정의한
      			<b>드래그 앤 드롭 속성(Drag-and-Drop Attributes) 속성</b>은 사용자가 마우스나 터치를 사용하지 않고도 드래그 앤 드롭 기능을 활용할 수 있도록 돕습니다.<br />
      			특히, 보조 기술을 사용하는 사용자에게 현재 인터페이스에서 발생하는 드래그 앤 드롭과 관련된 상태와 피드백을 제공하여 접근성을 크게 향상시킵니다.
      		</p>
      		<p className="reference mt_ms">
      			<a href="https://www.w3.org/TR/wai-aria-1.2/#attrs_dragdrop" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">W3C ARIA Drag-and-Drop Attributes</a><br />
      			<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques#drag_drop_attributes" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN: ARIA Drag & drop attributes</a>
      		</p>
      	</blockquote>

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">aria-dropeffect 속성(권장되지 않음)</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<code>aria-dropeffect</code> 속성은 WAI-ARIA(WAI-Accessible Rich Internet Applications)에서 정의된 속성 중 하나로,
      				드래그 앤 드롭 인터페이스에서 사용자가 드래그 가능한 객체가 특정 드롭 영역에 놓였을 때 어떤 효과가 발생할지를 나타냅니다.<br />
      				<b className="t_black">그러나, WAI-ARIA 1.2에서는 <code className="t_black weight-600">aria-dropeffect</code> 속성이 더 이상 사용되지 않는 것으로 권장됩니다.</b>
      				대신, HTML5의 네이티브 드래그 앤 드롭 이벤트와 속성을 사용하여 접근성을 관리하는 것이 좋습니다
      			</p>
      			<p className="reference mt_ms">
      				<a href="https://www.w3.org/TR/wai-aria-1.2/#aria-dropeffect" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">WAI-ARIA 1.2 Specification (aria-dropeffect)</a><br />
      				<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-dropeffect" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN Web Docs (aria-dropeffect)</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">aria-dropeffect 속성 값</h3>
      			<p className="mt_m">
      				WAI-ARIA 1.2에서는 <code>aria-dropeffect</code> 속성의 사용이 권장되지 않지만,
      				이 속성은 여전히 다음과 같은 값들을 가질 수 있습니다.
      			</p>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>copy</strong>
      					<p>
      						드래그된 객체가 드롭되면 원본 객체가 복사됩니다.
      					</p>
      				</li>
      				<li>
      					<strong>move</strong>
      					<p>
      						드래그된 객체가 드롭되면 원본 객체가 이동됩니다.
      					</p>
      				</li>
      				<li>
      					<strong>link</strong>
      					<p>
      						드래그된 객체가 드롭되면 원본 객체에 대한 링크가 생성됩니다.
      					</p>
      				</li>
      				<li>
      					<strong>execute</strong>
      					<p>
      						드래그된 객체가 드롭되면 실행 액션이 발생합니다.
      					</p>
      				</li>
      				<li>
      					<strong>popup</strong>
      					<p>
      						드래그된 객체가 드롭되면 새 창이나 팝업이 생성됩니다.
      					</p>
      				</li>
      				<li>
      					<strong>none</strong>
      					<p>
      						드롭 효과가 발생하지 않음을 명시합니다.
      					</p>
      			</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">연관된 HTML 태그 및 역할</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>연관된 태그</strong>
      					<p>
      						<code>&lt;div&gt;</code>,
      						<code>&lt;span&gt;</code>,
      						<code>&lt;p&gt;</code>,
      						<code>&lt;li&gt;</code>,
      						<code>&lt;ul&gt;</code>,
      						<code>&lt;section&gt;</code>,
      						<code>&lt;article&gt;</code> 등 대부분의 HTML 요소에서 사용 가능합니다.
      					</p>
      				</li>
      				<li>
      					<strong>연관된 역할</strong>
      					<p>
      						드롭 가능한 요소에 대해 사용될 수 있으며,
      						<code>group</code>, <code>region</code>, <code>listbox</code>, <code>grid</code>, <code>tree</code>,
      						<code>tabpanel</code> 등의 역할과 함께 사용할 수 있습니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">사용 시 주의사항</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>더 이상 권장되지 않음</strong>
      					<p>
      						<code>aria-dropeffect</code>는 WAI-ARIA 1.2에서 사용을 피하는 것이 좋습니다.
      						HTML5의 드래그 앤 드롭 API와 같은 네이티브 기능을 사용하는 것이 권장됩니다.
      					</p>
      				</li>
      				<li>
      					<strong>최신 접근성 표준 준수</strong>
      					<p>
      						최신 접근성 표준에 맞춰 드래그 앤 드롭 인터페이스를 설계하고, 가능한 경우 키보드 지원을 포함하는 것이 중요합니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">잘못된 예시</h4>
      				<p className="mt_s">
      					WAI-ARIA 1.2에서는 <code>aria-dropeffect</code>의 사용이 권장되지 않으므로, 이 속성을 사용하지 않는 것이 좋습니다.
      				</p>
      				
      <CodeBlock title="aria-dropeffect 속성 / 잘못된 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div id="dropzone" aria-dropeffect="move">
      							드롭 가능한 영역입니다.
      						</div>

      						<script>
      							// 이 예시는 aria-dropeffect 사용을 보여주지만, 현대 접근성 표준에 맞지 않습니다.
      							document.getElementById('dropzone').addEventListener('dragover', (event) => {
      								event.preventDefault();
      							});
      							document.getElementById('dropzone').addEventListener('drop', (event) => {
      								event.preventDefault();
      								console.log('Object moved');
      							});
      						</script>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">올바른 예시</h4>
      				<p className="mt_s">
      					이 예시에서는 <code>aria-dropeffect</code> 대신 HTML5의 네이티브 이벤트와
      					ARIA 역할 및 속성(<code>role=&quot;region&quot;</code>, <code>aria-label</code>)을 사용하여 접근성을 유지합니다.
      				</p>
      				
      <CodeBlock title="aria-dropeffect 속성 / 올바른 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div id="dropzone" role="region" aria-label="드롭 가능한 영역" ondragover="event.preventDefault()">
      							드래그 앤 드롭을 사용해 파일을 여기에 업로드하세요.
      						</div>

      						<script>
      							document.getElementById('dropzone').addEventListener('drop', (event) => {
      								event.preventDefault();
      								console.log('File dropped');
      							});
      						</script>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">파일을 복사하는 드롭 효과 구현 예시</h4>
      				
      <CodeBlock title="aria-dropeffect 속성 / 파일 복사" language="javascript" className="uk_gist_code_box mt_m">
      {`<div id="copyzone" role="region" aria-label="복사할 수 있는 드롭 영역" ondragover="event.preventDefault()">
      							파일을 여기에 드롭하여 복사하세요.
      						</div>

      						<script>
      							document.getElementById('copyzone').addEventListener('drop', (event) => {
      								event.preventDefault();
      								console.log('File copied');
      							});
      						</script>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">링크를 생성하는 드롭 효과 구현 예시</h4>
      				
      <CodeBlock title="aria-dropeffect 속성 / 링크를 생성" language="javascript" className="uk_gist_code_box mt_m">
      {`<div id="linkzone" role="region" aria-label="링크 생성 가능한 드롭 영역" ondragover="event.preventDefault()">
      							링크를 생성하려면 여기에 드롭하세요.
      						</div>

      						<script>
      							document.getElementById('linkzone').addEventListener('drop', (event) => {
      								event.preventDefault();
      								console.log('Link created');
      							});
      						</script>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">시멘틱 구조의 예시</h4>
      				<p className="mt_s">
      					이 구조는 접근성을 높이기 위해 HTML5 드래그 앤 드롭 API와 ARIA 속성을 사용하여 파일 드롭 영역을 구현한 예시입니다.
      					<code>aria-dropeffect</code> 대신 최신 접근성 표준을 따릅니다.
      				</p>
      				
      <CodeBlock title="aria-dropeffect 속성 / 시멘틱 구조" language="javascript" className="uk_gist_code_box mt_m">
      {`<section role="region" aria-labelledby="drop-title">
      							<h2 id="drop-title">파일 드롭 영역</h2>
      							<div id="dropzone" ondragover="event.preventDefault()" aria-label="여기에 파일을 드롭하세요">
      								드래그 앤 드롭으로 파일을 업로드하세요.
      							</div>
      						</section>

      						<script>
      							document.getElementById('dropzone').addEventListener('drop', (event) => {
      								event.preventDefault();
      								console.log('File dropped');
      							});
      						</script>`}
      </CodeBlock>

      			</div>
      			
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">aria-grabbed 상태(권장되지 않음)</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<code>aria-grabbed</code> 속성은 WAI-ARIA(Accessible Rich Internet Applications)에서 정의된 속성 중 하나로,
      				<mark>드래그 앤 드롭 인터페이스에서 사용자가 특정 요소를 &quot;잡았는지&quot; (즉, 드래그 중인지) 여부를 나타냅니다.</mark>
      				이 속성은 주로 스크린 리더 사용자에게 현재 요소가 드래그되고 있는 상태임을 알리는 데 사용됩니다.<br />
      				<b className="t_black">그러나, WAI-ARIA 1.2에서는 <code className="t_black weight-600">aria-grabbed</code> 속성이 더 이상 권장되지 않습니다.</b>
      				대신, HTML5 네이티브 드래그 앤 드롭 이벤트를 사용하는 것이 권장됩니다.
      			</p>
      			<p className="reference mt_ms">
      				<a href="https://www.w3.org/TR/wai-aria-1.2/#aria-grabbed" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">WAI-ARIA 1.2 Specification (aria-grabbed)</a><br />
      				<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-grabbed" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN Web Docs (aria-grabbed)</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">aria-grabbed 속성 값</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>true</strong>
      					<p>
      						요소가 현재 사용자가 <mark>&quot;잡은&quot;</mark> (드래그 중인) 상태임을 나타냅니다.
      					</p>
      				</li>
      				<li>
      					<strong>false</strong>
      					<p>
      						요소가 현재 <mark>&quot;잡히지 않은&quot;</mark> (드래그되지 않은) 상태임을 나타냅니다.
      					</p>
      				</li>
      				<li>
      					<strong>undefined</strong>
      					<p>
      						<code>aria-grabbed</code> 속성이 없으면, 기본적으로 요소가 드래그되지 않은 상태로 간주됩니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">연관된 HTML 태그 및 역할</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>연관된 태그</strong>
      					<p>
      						<code>&lt;div&gt;</code>,
      						<code>&lt;span&gt;</code>,
      						<code>&lt;li&gt;</code>,
      						<code>&lt;img&gt;</code>,
      						<code>&lt;p&gt;</code>,
      						<code>&lt;section&gt;</code>,
      						<code>&lt;acticle&gt;</code> 등 대부분의 HTML 요소에서 사용 가능.
      					</p>
      				</li>
      				<li>
      					<strong>연관된 역할</strong>
      					<p>
      						드래그 가능한 요소와 관련하여 사용할 수 있으며,
      						<code>listitem</code>, <code>treeitem</code>, <code>gridcell</code>, <code>row</code>,
      						<code>option</code> 등의 역할과 함께 사용할 수 있습니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">사용 시 주의사항</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>더 이상 권장되지 않음</strong>
      					<p>
      						<code>aria-grabbed</code>는 WAI-ARIA 1.2에서 사용을 피하는 것이 좋습니다.
      						HTML5의 드래그 앤 드롭 API와 같은 네이티브 기능을 사용하는 것이 권장됩니다.
      					</p>
      				</li>
      				<li>
      					<strong>대체 방법</strong>
      					<p>
      						HTML5의 <code>draggable</code> 속성과 드래그 이벤트(<code>dragstart</code>, <code>dragend</code> 등)를 사용하여
      						드래그 상태를 처리하는 것이 더 나은 접근성 표준을 준수하는 방법입니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">잘못된 예시</h4>
      				<p className="mt_s">
      					WAI-ARIA 1.2에서 더 이상 <code>aria-grabbed</code>의 사용이 권장되지 않습니다.
      					대신 최신 HTML5 드래그 앤 드롭 API를 사용해야 합니다.
      				</p>
      				
      <CodeBlock title="aria-grabbed 상태 / 잘못된 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div id="draggable-item" aria-grabbed="true">
      							이 항목을 드래그 중입니다.
      						</div>

      						<script>
      							document.getElementById('draggable-item').addEventListener('dragend', () => {
      								document.getElementById('draggable-item').setAttribute('aria-grabbed', 'false');
      							});
      						</script>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">올바른 예시</h4>
      				<p className="mt_s">
      					이 예시에서는 <code>aria-grabbed</code>를 사용하지 않고 HTML5의 네이티브 드래그 앤 드롭 이벤트를 사용하여 드래그 상태를 관리합니다.
      				</p>
      				
      <CodeBlock title="aria-grabbed 상태 / 올바른 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div id="draggable-item" draggable="true" aria-label="드래그 가능한 항목">
      							이 항목을 드래그하세요.
      						</div>

      						<div id="dropzone" aria-label="드롭 가능한 영역" ondragover="event.preventDefault()">
      							<p>여기에 드롭하세요.</p>
      						</div>

      						<script>
      							const draggableItem = document.getElementById('draggable-item');
      							const dropzone = document.getElementById('dropzone');

      							draggableItem.addEventListener('dragstart', () => {
      								draggableItem.setAttribute('aria-grabbed', 'true');
      								draggableItem.style.opacity = '0.5'; // 드래그 중 아이템 반투명
      							});

      							draggableItem.addEventListener('dragend', () => {
      								draggableItem.setAttribute('aria-grabbed', 'false');
      								draggableItem.style.opacity = '1'; // 드래그 끝난 후 다시 불투명
      							});

      							dropzone.addEventListener('dragover', (event) => {
      								event.preventDefault();
      								dropzone.classList.add('drag-over'); // 드래그 중일 때 시각적 피드백
      							});

      							dropzone.addEventListener('dragleave', () => {
      								dropzone.classList.remove('drag-over'); // 드래그가 영역을 벗어날 때
      							});

      							dropzone.addEventListener('drop', (event) => {
      								event.preventDefault();
      								dropzone.classList.remove('drag-over');
      								dropzone.innerHTML = '<p>아이템이 성공적으로 드롭되었습니다!</p>';
      								console.log('Item dropped');
      							});
      						</script>`}
      </CodeBlock>

      				<div className="view_editor edit_code mt_ml">
      <Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="waiAria/03-waiAriaAttrs/3.3.2.aria-grabbed.html" className="uk_editor min_height_330 mb_result_height_300" mode="htmlmixed" theme="ayu-mirage" browser="default" result minHeight="330px" mbResultHeight="300px" />
      </Suspense>
      </div>
      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">드래그 상태를 나타내는 예시 (권장되지 않음)</h4>
      				<p className="mt_s">
      					WAI-ARIA 1.2에서는 이 방법이 더 이상 권장되지 않습니다.
      				</p>
      				
      <CodeBlock title="aria-grabbed 상태 / 드래그 상태" language="javascript" className="uk_gist_code_box mt_m">
      {`<div id="item" aria-grabbed="true">
      							이 항목은 드래그 중입니다.
      						</div>

      						<script>
      							document.getElementById('item').addEventListener('dragend', () => {
      								document.getElementById('item').setAttribute('aria-grabbed', 'false');
      							});
      						</script>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">HTML5 드래그 앤 드롭을 사용한 드래그 상태 관리 예시</h4>
      				<p className="mt_s">
      					이 예시는 최신 접근성을 고려한 구현 방법을 보여줍니다.
      				</p>
      				
      <CodeBlock title="aria-grabbed 상태 / HTML5 드래그 상태" language="javascript" className="uk_gist_code_box mt_m">
      {`<div id="draggable" draggable="true" aria-label="드래그 가능한 항목">
      							이 항목을 드래그하세요.
      						</div>

      						<script>
      							const draggable = document.getElementById('draggable');
      							draggable.addEventListener('dragstart', () => {
      								draggable.setAttribute('aria-grabbed', 'true');
      							});
      							draggable.addEventListener('dragend', () => {
      								draggable.setAttribute('aria-grabbed', 'false');
      							});
      						</script>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">시멘틱 구조의 예시</h4>
      				<p className="mt_s">
      					이 예시는 접근성을 고려한 드래그 앤 드롭 인터페이스를 구현하는 예시로,
      					<code>aria-grabbed</code> 대신 HTML5 네이티브 드래그 앤 드롭 API를 사용합니다.
      				</p>
      				
      <CodeBlock title="aria-grabbed 상태 / 시멘틱 구조" language="javascript" className="uk_gist_code_box mt_m">
      {`<section role="region" aria-labelledby="drag-drop-section">
      							<h2 id="drag-drop-section">드래그 앤 드롭 영역</h2>
      							<div id="draggable" draggable="true" aria-label="드래그 가능한 항목">
      								드래그하여 이동할 항목
      							</div>
      							<div id="dropzone" aria-label="드롭 가능한 영역" ondragover="event.preventDefault()">
      								여기에 드롭하세요.
      							</div>
      						</section>

      						<script>
      							const draggable = document.getElementById('draggable');
      							draggable.addEventListener('dragstart', () => {
      								draggable.setAttribute('aria-grabbed', 'true');
      							});
      							draggable.addEventListener('dragend', () => {
      								draggable.setAttribute('aria-grabbed', 'false');
      							});
      						</script>`}
      </CodeBlock>

      			</div>
      			
      		</article>
      		
      	</section>
      	

      	<figure className="img_figure mt_l">
      		<img src={`${IMG.WAI_ARIA}/03_wai-aria_attrs_03.png`} alt="드래그 앤 드롭 속성(Drag-and-Drop Attributes)" />
      		<figcaption>
      			<b>[드래그 앤 드롭 속성(Drag-and-Drop Attributes)]</b><br />
      			<a href={`${IMG.WAI_ARIA}/03_wai-aria_attrs_03.png`} className="mt_ms box_link" title="새창 열림" target="_blank" rel="noreferrer">크게 보기</a>
      		</figcaption>
      	</figure>


      <footer className="reference_box">
      	<strong className="tit">드래그 앤 드롭 속성(Drag-and-Drop Attributes) | WAI-ARIA 상태 및 속성 참조</strong>
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

export default AttrsDragdropPage
