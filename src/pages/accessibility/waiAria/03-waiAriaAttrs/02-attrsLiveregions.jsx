import { useAccessibilityPageMeta } from '@/hooks/useAccessibilityPageMeta.js'
import { IMG } from '@/config/path'
import { Suspense, lazy } from 'react'
const UkEditorTarget = lazy(() => import('@/components/code/UkEditorTarget'))
function EditorFallback() { return <div className="uk_editor min_height_300" aria-hidden /> }
import CodeBlock from '@/components/code/CodeBlock'

const PAGE_LAYOUT = {
  mainClass: "attrsLiveregions",
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
  title: "라이브 영역 속성(Live Region Attributes) | WAI-ARIA 상태 및 속성",
  description: "WAI-ARIA (Web Accessibility Initiative - Accessible Rich Internet Applications)의 상태 및 속성(State and Properties)은 웹 애플리케이션의 접근성을 향상시키기 위해 HTML 요소에 추가적인 의미와 기능을 부여하는 메커니즘입니다. 이 페이지에서는 WAI-ARIA의 상태 및 속성 중 라이브 영역 속성(Live Region Attributes)에 대해 소개합니다.",
  keyword: "Accessibility, a11y, wcag, kwcag, macag, kiosk, 접근성, 웹 콘텐츠 접근성, 한국형 웹 콘텐츠 접근성, 모바일 앱 접근성, 무인정보단밀기 접근성",
}

function AttrsLiveregionsPage() {
  useAccessibilityPageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  })


  return (
    <>










      	<blockquote className="uk_note mt_xl" role="note">
      		<strong className="sound_only">요약 설명</strong>
      		<p>
      			<b>라이브 영역 속성(Live Region Attributes)</b>은 웹 접근성에서 중요한 역할을 합니다.
      			특히, 화면 판독기(screen reader)를 사용하는 사용자에게 동적인 콘텐츠 업데이트를 효율적으로 알리는 데 사용됩니다.
      			이러한 속성들은 DOM이 변경되었을 때 페이지 전체를 새로고침하지 않고도 업데이트된 내용을 사용자에게 전달할 수 있도록 도와줍니다.
      		</p>
      		<p className="reference mt_ms">
      			<a href="https://www.w3.org/TR/wai-aria-1.2/#live_region_roles" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">WAI-ARIA Live Region Attributes</a><br />
      			<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN: ARIA Live Regions</a>
      		</p>
      	</blockquote>

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn"><i className="t_blue">라이브 영역 속성</i> 요약</h2>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">주요 Live Region 속성</h3>
      			<ul className="mt_m ol_lst info_lst gap-column-important-s">
      				<li className="weight-600-before t_black_before">
      					<strong>aria-live</strong>
      					<p>
      						이 속성은 특정 요소 내에서 콘텐츠가 변경될 때 사용자에게 그 변경사항을 알릴지 여부와 그 방식(긴급도)을 지정합니다.
      						주요 값으로는 <code>off</code>, <code>polite</code>, <code>assertive</code>가 있습니다.
      					</p>
      					<ul className="dot_lst mt_sm">
      						<li>
      							<code>off</code> : 변경된 내용을 알리지 않습니다.
      						</li>
      						<li>
      							<code>assertive</code> : 즉각적으로 콘텐츠 변경을 알립니다.
      						</li>
      						<li>
      							<code>polite</code> : 콘텐츠 변경이 발생하면 다른 사용자 작업이 끝난 후에 알립니다.
      						</li>
      					</ul>
      				</li>
      				<li className="weight-600-before t_black_before">
      					<strong>aria-atomic</strong>
      					<p>
      						이 속성은 <code>aria-live</code> 속성과 함께 사용되며,
      						<code>true</code>로 설정하면 변경된 요소의 전체 콘텐츠를 알리고, <code>false</code>로 설정하면 변경된 부분만 알립니다.
      					</p>
      				</li>
      				<li className="weight-600-before t_black_before">
      					<strong>aria-relevant</strong>
      					<p>
      						이 속성은 어떤 종류의 변경이 사용자에게 알릴지 설정합니다.
      						값으로는 <code>additions</code>, <code>removals</code>, <code>text</code>, <code>all</code> 등이 있습니다.
      					</p>
      				</li>
      				<li className="weight-600-before t_black_before">
      					<strong>aria-busy</strong>
      					<p>
      						이 속성은 특정 영역이 아직 업데이트 중임을 나타냅니다.
      						사용자가 이 영역을 인터랙션하기 전에 작업이 완료될 때까지 기다리도록 합니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">추천하는 활용 방법</h3>
      			<ul className="mt_m ol_lst info_lst gap-column-important-ms">
      				<li className="weight-600-before t_black_before">
      					<strong>aria-live</strong>
      					<ul className="dot_lst gap-column-important-sm">
      						<li>
      							<code>aria-live</code> 속성은 화면 리더가 특정 요소의 내용이 변경될 때 이를 사용자에게 알리도록 지시합니다.
      							이 속성은 실시간으로 업데이트되는 콘텐츠에 주로 사용됩니다.
      						</li>
      						<li>
      							<b className="t_blue">활용 추천</b>: 실시간으로 변화하는 콘텐츠(예: 채팅 메시지, 알림 배너, 실시간 업데이트)에서
      							<code>aria-live=&quot;polite&quot;</code> 또는 <code>aria-live=&quot;assertive&quot;</code>를 사용해 사용자에게 적절한 시점에 변경 사항을 알리도록 설정합니다.
      							<code>polite</code>는 중요한 정보가 아니거나, 방해하지 않고 알리고자 할 때 사용하고,
      							<code>assertive</code>는 중요한 정보로 즉시 알릴 필요가 있을 때 사용합니다.
      						</li>
      					</ul>
      				</li>
      				<li className="weight-600-before t_black_before">
      					<strong>aria-atomic</strong>
      					<ul className="dot_lst gap-column-important-sm">
      						<li>
      							<code>aria-atomic</code> 속성은 특정 요소의 일부 내용이 변경될 때 전체 요소를 화면 리더가 다시 읽어줄지 여부를 결정합니다.
      						</li>
      						<li>
      							<b className="t_blue">활용 추천</b>: 요소의 일부 변경 사항이 전체 의미에 영향을 줄 때 <code>aria-atomic=&quot;true&quot;</code>를 사용합니다.
      							예를 들어, 알림 메시지의 일부가 변경되었을 때,
      							사용자가 그 전체를 다시 읽을 필요가 있다면 이 속성을 적용해 전체 내용을 재알림하도록 할 수 있습니다.
      						</li>
      					</ul>
      				</li>
      				<li className="weight-600-before t_black_before">
      					<strong>aria-relevant</strong>
      					<ul className="dot_lst gap-column-important-sm">
      						<li>
      							<code>aria-relevant</code> 속성은 <code>aria-live</code> 영역 내에서 화면 리더가 어떤 유형의 변경 사항을 사용자에게 알릴지 결정합니다.
      							이 속성은 추가, 삭제, 텍스트 변경 등을 포함합니다.
      						</li>
      						<li>
      							<b className="t_blue">활용 추천</b>: 예를 들어, 요소에 새로운 정보가 추가되거나 삭제될 때만 알리고자 한다면
      							<code>aria-relevant=&quot;additions removals&quot;</code>를 설정합니다.
      							실시간으로 변경되는 데이터 중에서 특정한 변경 사항만 사용자가 알 수 있도록 제한할 수 있습니다.
      						</li>
      					</ul>
      				</li>
      				<li className="weight-600-before t_black_before">
      					<strong>aria-busy</strong>
      					<ul className="dot_lst gap-column-important-sm">
      						<li>
      							<code>aria-busy</code> 속성은 현재 요소나 해당 요소 내의 콘텐츠가 로딩 중임을 나타냅니다.
      							이 속성을 사용하면 화면 리더는 콘텐츠가 완전히 로딩될 때까지 사용자가 이를 상호작용하지 않도록 합니다.
      						</li>
      						<li>
      							<b className="t_blue">활용 추천</b>: 복잡한 콘텐츠가 로딩 중일 때,
      							예를 들어 동적인 리스트나 데이터 테이블이 완전히 로딩될 때까지 <code>aria-busy=&quot;true&quot;</code>를 설정하여
      							사용자가 불완전한 정보와 상호작용하지 않도록 합니다. 로딩이 완료되면 <code>aria-busy=&quot;false&quot;</code>로 설정합니다.
      						</li>
      					</ul>
      				</li>
      				<li className="weight-600-before t_black_before">
      					<strong>결론</strong>
      					<ul className="dot_lst gap-column-important-sm">
      						<li>
      							<code>aria-live</code> 속성이 다양한 상황에서 가장 자주 사용될 가능성이 높습니다.
      							실시간으로 콘텐츠가 업데이트되는 상황에서 유용하며,
      							적절한 알림을 통해 사용자 경험을 향상시킬 수 있습니다.
      						</li>
      						<li>
      							<code>aria-busy</code> 역시 복잡한 동적 콘텐츠를 다룰 때 매우 중요한 속성입니다.
      							콘텐츠가 로딩 중인 경우 사용자가 혼란을 겪지 않도록 보호할 수 있습니다.
      						</li>
      						<li>
      							상황에 맞게 이 속성들을 조합하여 사용하면 웹 접근성을 크게 개선할 수 있습니다.
      						</li>
      					</ul>
      				</li>
      			</ul>
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">aria-atomic 속성</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<code>aria-atomic</code> 속성은 WAI-ARIA(Accessible Rich Internet Applications)의 속성 중 하나로,
      				live region 내에서 콘텐츠가 변경될 때 스크린 리더가 사용자에게 전체 내용을 읽어줄지,
      				아니면 변경된 부분만 읽어줄지를 제어합니다.
      				<code>aria-atomic</code> 속성을 적절히 사용하여 웹 접근성을 높일 수 있습니다.
      			</p>
      			<p className="reference mt_ms">
      				<a href="https://www.w3.org/TR/wai-aria-1.2/#aria-atomic" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">WAI-ARIA 1.2 Specification (aria-atomic)</a><br />
      				<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-atomic" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN Web Docs (aria-atomic)</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">aria-atomic 속성 값</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>true</strong>
      					<p>
      						요소 내에서 콘텐츠가 변경될 때 스크린 리더가 전체 요소의 내용을 읽어줍니다.
      					</p>
      				</li>
      				<li>
      					<strong>false (기본값)</strong>
      					<p>
      						변경된 부분만 스크린 리더가 읽어줍니다.
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
      						<code>&lt;section&gt;</code>,
      						<code>&lt;article&gt;</code>
      						등 대부분의 HTML 요소에서 사용 가능합니다.
      					</p>
      				</li>
      				<li>
      					<strong>연관된 역할</strong>
      					<p>
      						<code>alert</code>, <code>status</code>, <code>log</code>, <code>marquee</code>, <code>timer</code> 등
      						live region과 관련된 ARIA 역할과 함께 사용됩니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">사용 시 주의사항</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>적절한 사용 환경</strong>
      					<p>
      						모든 콘텐츠를 읽어주는 것이 사용자의 경험을 향상시킬 때만 <code>aria-atomic=&quot;true&quot;</code>를 사용해야 합니다.
      						불필요하게 전체 내용을 읽는 것은 오히려 사용자의 혼란을 야기할 수 있습니다.
      					</p>
      				</li>
      				<li>
      					<strong>성능 이슈</strong>
      					<p>
      						<code>aria-atomic=&quot;true&quot;</code>는 스크린 리더가 전체 요소를 다시 읽게 만들기 때문에,
      						복잡하거나 큰 콘텐츠에서는 성능 이슈를 유발할 수 있습니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">잘못된 예시</h4>
      				<p className="mt_s">
      					사용자가 날씨에 대한 추가 정보(기온)을 듣기 위해 <code>aria-atomic=&quot;true&quot;</code>가 필요하지 않음에도 불구하고,
      					전체 내용을 다시 읽게 됩니다. 단순히 추가된 정보만 전달하는 것이 더 바람직합니다.
      				</p>
      				
      <CodeBlock title="aria-atomic 속성 / 잘못된 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div aria-live="polite" aria-atomic="true">
      							<p>현재 날씨: 맑음</p>
      						</div>
      						<script>
      							setTimeout(() => {
      								document.querySelector('div').innerHTML = '<p>현재 날씨: 맑음, 기온: 25도</p>';
      							}, 2000);
      						</script>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">올바른 예시</h4>
      				<p className="mt_s">
      					이 경우 <code>aria-atomic=&quot;false&quot;</code>가 적절합니다.
      					사용자는 변동된 부분(기온)을 듣기만 하면 되기 때문에 전체 내용을 다시 듣지 않아도 됩니다.
      				</p>
      				
      <CodeBlock title="aria-atomic 속성 / 올바른 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div aria-live="polite" aria-atomic="false">
      							<p>현재 날씨: <span id="weather">맑음</span>, 기온: <span id="temperature">22도</span></p>
      						</div>
      						<script>
      							setTimeout(() => {
      								document.getElementById('temperature').textContent = '25도';
      							}, 2000);
      						</script>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">aria-atomic=&quot;true&quot; 사용 예시 - 사용자가 전체 업데이트된 정보를 필요로 할 때</h4>
      				<p className="mt_s">
      					전체 상태를 다시 읽어주는 것이 적절할 때 사용합니다.
      				</p>
      				
      <CodeBlock title="aria-atomic 속성 / true 사용 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div aria-live="assertive" aria-atomic="true">
      							<p>현재 작업 상태: <span id="status">대기 중</span></p>
      						</div>
      						<script>
      							setTimeout(() => {
      								document.getElementById('status').textContent = '완료됨';
      							}, 3000);
      						</script>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">aria-atomic=&quot;false&quot; 사용 예시 - 일부 정보만 업데이트되었을 때</h4>
      				<p className="mt_s">
      					새 메시지만 전달되는 것이 목적이므로, 변경된 부분만 알립니다.
      				</p>
      				
      <CodeBlock title="aria-atomic 속성 / false 사용 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div aria-live="polite" aria-atomic="false">
      							<p>새 메시지: <span id="message">메시지가 없습니다.</span></p>
      						</div>
      						<script>
      							setTimeout(() => {
      								document.getElementById('message').textContent = '새로운 메시지가 도착했습니다.';
      							}, 2000);
      						</script>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">시멘틱 구조의 예시</h4>
      				<p className="mt_s">
      					이 구조에서는 서버 상태의 모든 변화를 사용자에게 알리는 것이 중요하기 때문에 <code>aria-atomic=&quot;true&quot;</code>가 적절합니다.
      					스크린 리더는 전체 상태를 다시 읽어줍니다.
      				</p>
      				
      <CodeBlock title="aria-atomic 속성 / 시멘틱 구조" language="javascript" className="uk_gist_code_box mt_m">
      {`<article role="log" aria-live="polite" aria-atomic="true">
      							<header>
      								<h2>업데이트 로그</h2>
      							</header>
      							<div id="log-content">
      								<p>서버 상태: 안정적</p>
      							</div>
      						</article>
      						<script>
      							setTimeout(() => {
      								document.getElementById('log-content').innerHTML = '<p>서버 상태: 연결 끊김, 자동 복구 시도 중</p>';
      							}, 5000);
      						</script>`}
      </CodeBlock>

      			</div>
      			
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">aria-busy 상태</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<code>aria-busy</code>는 WAI-ARIA(Accessible Rich Internet Applications)에서 정의된 상태(state) 속성 중 하나로,
      				특정 요소가 아직 콘텐츠를 로드하거나 처리 중임을 나타냅니다.<br />
      				이 속성은 사용자가 해당 영역을 상호작용하려 할 때, 작업이 완료되지 않았음을 알리기 위해 사용됩니다.
      				주로 AJAX 요청이나 비동기적인 작업이 수행되는 동안 사용됩니다. <code>aria-busy</code> 속성을 적절하게 활용하여 웹 접근성을 높일 수 있습니다.
      			</p>
      			<p className="reference mt_ms">
      				<a href="https://www.w3.org/TR/wai-aria-1.2/#aria-busy" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">WAI-ARIA 1.2 Specification (aria-busy)</a><br />
      				<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-busy" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN Web Docs (aria-busy)</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">aria-busy 속성 값</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>true</strong>
      					<p>
      						요소가 아직 로딩 중이거나 처리 중임을 나타냅니다.
      						스크린 리더는 이 상태를 감지하여 사용자가 해당 요소와 상호작용하는 것을 방지하거나 주의를 줄 수 있습니다.
      					</p>
      				</li>
      				<li>
      					<strong>false (기본값)</strong>
      					<p>
      						요소가 현재 로딩 중이 아님을 나타냅니다. 작업이 완료되어 사용자와 상호작용할 준비가 되었음을 의미합니다.
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
      						<code>&lt;section&gt;</code>,
      						<code>&lt;article&gt;</code>,
      						<code>&lt;form&gt;</code>,
      						<code>&lt;table&gt;</code>,
      						<code>&lt;ul&gt;</code>
      						등 거의 모든 HTML 요소에서 사용 가능.
      					</p>
      				</li>
      				<li>
      					<strong>연관된 역할</strong>
      					<p>
      						<code>region</code>, <code>alert</code>, <code>dialog</code>, <code>status</code>, <code>log</code> 등
      						다양한 ARIA 역할과 함께 사용될 수 있습니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">사용 시 주의사항</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>작업 상태 표시</strong>
      					<p>
      						<code>aria-busy=&quot;true&quot;</code>를 설정한 후,
      						해당 작업이 완료되면 반드시 <code>aria-busy=&quot;false&quot;</code>로 업데이트해야 합니다.
      						그렇지 않으면 사용자가 해당 요소를 계속 바쁘다고 인식하게 되어 접근성에 문제가 생길 수 있습니다.
      					</p>
      				</li>
      				<li>
      					<strong>동작 완료 시점</strong>
      					<p>
      						비동기 작업이 완료되면 반드시 <code>aria-busy</code> 속성을 <code>false</code>로 설정하여
      						화면 판독기가 이 정보를 인식할 수 있도록 해야 합니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">잘못된 예시</h4>
      				<p className="mt_s">
      					작업이 완료된 후에도 <code>aria-busy=&quot;true&quot;</code> 상태가 유지되어, 사용자는 계속해서 요소가 바쁘다고 인식하게 됩니다.
      				</p>
      				
      <CodeBlock title="aria-busy 상태 / 잘못된 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div id="content" aria-busy="true">
      							<p>데이터를 로드 중입니다...</p>
      						</div>
      						<script>
      							setTimeout(() => {
      								document.getElementById('content').innerHTML = '<p>데이터 로드 완료.</p>';
      								// aria-busy="false"로 설정하는 것을 잊음
      							}, 3000);
      						</script>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">올바른 예시</h4>
      				<p className="mt_s">
      					작업이 완료되면 <code>aria-busy=&quot;false&quot;</code>로 설정하여
      					화면 판독기가 사용자가 이 영역과 상호작용할 수 있음을 알 수 있도록 합니다.
      				</p>
      				
      <CodeBlock title="aria-busy 상태 / 올바른 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div id="content" aria-busy="true">
      							<p>데이터를 로드 중입니다...</p>
      						</div>
      						<script>
      							setTimeout(() => {
      								document.getElementById('content').innerHTML = '<p>데이터 로드 완료.</p>';
      								document.getElementById('content').setAttribute('aria-busy', 'false');
      							}, 3000);
      						</script>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">페이지 섹션이 로드 중일 때</h4>
      				<p className="mt_s">
      					대시보드가 로드 중일 때 <code>aria-busy=&quot;true&quot;</code>를 설정하고, 로드가 완료되면 <code>false</code>로 변경합니다.
      				</p>
      				
      <CodeBlock title="aria-busy 상태 / 섹션이 로드 중" language="javascript" className="uk_gist_code_box mt_m">
      {`<section id="dashboard" aria-busy="true">
      							<p>대시보드를 로드 중입니다...</p>
      						</section>
      						<script>
      							// 예를 들어, AJAX 호출 완료 후
      							setTimeout(() => {
      								document.getElementById('dashboard').innerHTML = '<p>대시보드 로드 완료.</p>';
      								document.getElementById('dashboard').setAttribute('aria-busy', 'false');
      							}, 4000);
      						</script>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">비동기 데이터 업데이트 예시</h4>
      				<p className="mt_s">
      					비동기적으로 데이터를 갱신하는 동안 <code>aria-busy=&quot;true&quot;</code>를 설정하고,
      					갱신이 완료되면 <code>false</code>로 변경합니다.
      				</p>
      				
      <CodeBlock title="aria-busy 상태 / 비동기 업데이트" language="javascript" className="uk_gist_code_box mt_m">
      {`<div id="data-section" aria-busy="true">
      							<p>데이터를 갱신 중입니다...</p>
      						</div>
      						<script>
      							// 데이터 갱신 완료 시
      							setTimeout(() => {
      								document.getElementById('data-section').innerHTML = '<p>데이터 갱신 완료.</p>';
      								document.getElementById('data-section').setAttribute('aria-busy', 'false');
      							}, 2000);
      						</script>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">시멘틱 구조의 예시</h4>
      				<p className="mt_s">
      					업데이트 로그 섹션이 로드 중일 때 사용자가 해당 섹션이 아직 작업 중임을 알 수 있도록 <code>aria-busy=&quot;true&quot;</code>를 사용합니다.
      					로드가 완료되면 <code>false</code>로 설정하여 사용자가 해당 영역을 탐색할 수 있게 합니다.
      				</p>
      				
      <CodeBlock title="aria-busy 상태 / 시멘틱 구조" language="javascript" className="uk_gist_code_box mt_m">
      {`<section role="region" aria-labelledby="updates" aria-busy="true">
      							<h2 id="updates">업데이트 로그</h2>
      							<div id="log">
      								<p>최신 업데이트를 로드 중입니다...</p>
      							</div>
      						</section>
      						<script>
      							setTimeout(() => {
      								document.getElementById('log').innerHTML = '<p>업데이트 로드 완료.</p>';
      								document.querySelector('[role="region"]').setAttribute('aria-busy', 'false');
      							}, 5000);
      						</script>`}
      </CodeBlock>

      			</div>
      			
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">aria-live 속성</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<code>aria-live</code> 속성은 WAI-ARIA(Accessible Rich Internet Applications)에서 사용되는 속성으로,
      				특정 영역의 콘텐츠가 동적으로 변경될 때, 스크린 리더가 사용자에게 그 변경 내용을 자동으로 알릴지 여부를 제어합니다.<br />
      				이 속성은 웹 페이지에서 실시간으로 업데이트되는 콘텐츠(예: 채팅 메시지, 알림, 뉴스 피드 등)에 대한 접근성을 향상시키기 위해 사용됩니다.
      				<code>aria-live</code> 속성을 효과적으로 활용하여 웹 접근성을 개선할 수 있습니다.
      			</p>
      			<p className="reference mt_ms">
      				<a href="https://www.w3.org/TR/wai-aria-1.2/#aria-live" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">WAI-ARIA 1.2 Specification (aria-live)</a><br />
      				<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-live" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN Web Docs (aria-live)</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">aria-live 속성 값</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>off (기본값)</strong>
      					<p>
      						콘텐츠가 변경되어도 스크린 리더가 사용자에게 그 변화를 알리지 않습니다.
      					</p>
      				</li>
      				<li>
      					<strong>polite</strong>
      					<p>
      						콘텐츠가 변경되면, 스크린 리더는 사용자가 현재 작업 중인 내용을 방해하지 않고, 다른 작업이 완료된 후에 변경 내용을 알립니다.
      					</p>
      				</li>
      				<li>
      					<strong>assertive</strong>
      					<p>
      						콘텐츠가 변경되면, 스크린 리더가 즉시 그 변경 내용을 사용자에게 알립니다. 현재 작업 중인 내용을 방해할 수 있습니다.
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
      						<code>&lt;section&gt;</code>,
      						<code>&lt;article&gt;</code>
      						등 대부분의 HTML 요소에서 사용 가능.
      					</p>
      				</li>
      				<li>
      					<strong>연관된 역할</strong>
      					<p>
      						<code>alert</code>, <code>status</code>, <code>log</code>, <code>marquee</code>, <code>timer</code> 등
      						live region과 관련된 ARIA 역할과 함께 사용될 수 있습니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">사용 시 주의사항</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>적절한 값 선택</strong>
      					<p>
      						<code>polite</code>와 <code>assertive</code>의 선택은 상황에 따라 다릅니다.
      						일반적으로 사용자에게 중요한 정보(예: 오류 메시지)일 때는 <code>assertive</code>를 사용하고,
      						그렇지 않은 경우는 <code>polite</code>를 사용하는 것이 좋습니다.
      					</p>
      				</li>
      				<li>
      					<strong>불필요한 알림 방지</strong>
      					<p>
      						<code>aria-live</code> 속성의 남용은 사용자가 불필요한 정보로 인해 혼란스러워질 수 있으므로,
      						실질적으로 중요한 정보에만 이 속성을 적용해야 합니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">잘못된 예시</h4>
      				<p className="mt_s">
      					시계가 매초 업데이트되면서 스크린 리더가 계속해서 사용자를 방해하게 됩니다.
      					<code>assertive</code> 대신 <code>off</code>나 <code>polite</code>가 적절합니다.
      				</p>
      				
      <CodeBlock title="aria-live 속성 / 잘못된 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div aria-live="assertive">
      							<p>현재 시각: 12:00 PM</p>
      						</div>
      						<script>
      							setInterval(() => {
      								document.querySelector('div p').textContent = '현재 시각: ' + new Date().toLocaleTimeString();
      							}, 1000);
      						</script>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">올바른 예시</h4>
      				<p className="mt_s">
      					새 메시지가 도착했을 때 <code>polite</code> 속성을 사용하여 스크린 리더가 다른 작업을 방해하지 않고 알림을 전달합니다.
      				</p>
      				
      <CodeBlock title="aria-live 속성 / 올바른 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div aria-live="polite">
      							<p id="notification">알림이 없습니다.</p>
      						</div>
      						<script>
      							setTimeout(() => {
      								document.getElementById('notification').textContent = '새 메시지가 도착했습니다.';
      							}, 5000);
      						</script>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">aria-live=&quot;off&quot; 사용 예시</h4>
      				<p className="mt_s">
      					화면 판독기 사용자에게 중요하지 않은 정보의 변경사항이 있을 때 <code>aria-live=&quot;off&quot;</code>를 사용합니다.
      				</p>
      				
      <CodeBlock language="javascript" className="uk_gist_code_box mt_m">
      {`<div aria-live="off">
      							<p>이 영역의 업데이트는 화면 판독기로 알리지 않습니다.</p>
      						</div>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">aria-live=&quot;polite&quot; 사용 예시</h4>
      				<p className="mt_s">
      					날씨 정보처럼 사용자가 알아야 하지만 즉시 알릴 필요는 없는 정보에 적합합니다.
      				</p>
      				
      <CodeBlock language="javascript" className="uk_gist_code_box mt_m">
      {`<div aria-live="polite">
      							<p id="weather-update">날씨 정보: 맑음</p>
      						</div>
      						<script>
      							setTimeout(() => {
      								document.getElementById('weather-update').textContent = '날씨 정보: 흐림, 기온 20도';
      							}, 3000);
      						</script>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">aria-live=&quot;assertive&quot; 사용 예시</h4>
      				<p className="mt_s">
      					즉각적인 주의가 필요한 오류 메시지나 경고에는 <code>assertive</code>를 사용하여 사용자에게 즉시 알립니다.
      				</p>
      				
      <CodeBlock language="javascript" className="uk_gist_code_box mt_m">
      {`<div aria-live="assertive">
      							<p id="error-message">오류가 발생했습니다.</p>
      						</div>
      						<script>
      							setTimeout(() => {
      								document.getElementById('error-message').textContent = '서버 연결 실패. 다시 시도하세요.';
      							}, 2000);
      						</script>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">시멘틱 구조의 예시</h4>
      				<p className="mt_s">
      					시스템 알림처럼 즉각적인 반응이 필요한 상황에서는 <code>aria-live=&quot;assertive&quot;</code>를 사용합니다.
      					사용자는 중요한 시스템 상태 변경 사항을 즉시 인식할 수 있습니다.
      				</p>
      				
      <CodeBlock title="aria-live 속성 / 시멘틱 구조" language="javascript" className="uk_gist_code_box mt_m">
      {`<article role="alert" aria-live="assertive">
      							<header>
      								<h2>시스템 알림</h2>
      							</header>
      							<p id="system-update">시스템 상태: 정상 운영 중</p>
      						</article>
      						<script>
      							setTimeout(() => {
      								document.getElementById('system-update').textContent = '시스템 상태: 긴급 유지보수 필요';
      							}, 5000);
      						</script>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">키패드 응용 예시</h4>
      				<p className="mt_s">
      					<code>aria-live=&quot;assertive&quot;</code>사용하여 사용자가 버튼을 클릭할 때 메시지가 여기에 업데이트됩니다.
      					<code>aria-live=&quot;assertive&quot;</code>는 화면 판독기(스크린 리더) 사용자에게 즉시 메시지를 읽어주도록 합니다.<br />
      					숫자 입력과 관련된 간단한 사용자 인터페이스를 구현하는 데 사용될 수 있으며,
      					특히 키패드를 이용한 비밀번호 입력 같은 상황에 유용할 수 있습니다.
      				</p>
      				
      <CodeBlock title="aria-live 속성 / 키패드 응용" language="javascript" className="uk_gist_code_box mt_m">
      {`<!-- 키패드 응용 예시 -->
      						<div class="keypad">
      							<div class="keynumber">
      								<!-- 숫자 버튼 -->
      								<button type="button" class="number">0</button>
      								<button type="button" class="number">1</button>
      								<button type="button" class="number">2</button>
      								<button type="button" class="number">3</button>
      								<button type="button" class="number">4</button>
      								<button type="button" class="number">5</button>
      								<button type="button" class="number">6</button>
      								<button type="button" class="number">7</button>
      								<button type="button" class="number">8</button>
      								<button type="button" class="number">9</button>
      							</div>

      							<div class="function-buttons">
      								<!-- 기능 버튼 -->
      								<button type="button" class="clear number">지우기</button>
      								<button type="button" class="rearr number">재배열</button>
      								<button type="button" class="confirm number">확인</button>
      							</div>

      							<p class="message" aria-live="assertive"></p>
      						</div>

      						<script>
      							document.addEventListener('DOMContentLoaded', function() {
      								const numbers = document.querySelectorAll('.number');
      								const messageBox = document.querySelector('.message');
      								let inputCount = 0;
      								&nbsp;
      								function updateVoiceMessage(text) {
      									messageBox.textContent = text;
      									messageBox.style.visibility = 'visible'; // 메시지 박스를 보이게 함
      								}
      								&nbsp;
      								function clearInput() {
      									inputCount = 0;
      									updateVoiceMessage("입력이 초기화되었습니다.");
      								}
      								&nbsp;
      								function confirmInput() {
      									updateVoiceMessage("입력이 확인되었습니다.");
      								}
      								&nbsp;
      								numbers.forEach(button => {
      									button.addEventListener('click', function() {
      										if (this.classList.contains('clear')) {
      											clearInput();
      										} else if (this.classList.contains('rearr')) {
      											updateVoiceMessage("재배열 기능은 아직 구현되지 않았습니다.");
      										} else if (this.classList.contains('confirm')) {
      											confirmInput();
      										} else {
      											if (inputCount < 7) {
      												inputCount++;
      												updateVoiceMessage(\`총 7자리 중 \${inputCount}번째 입력\`);
      											} else {
      												updateVoiceMessage("최대 입력 개수에 도달했습니다.");
      											}
      										}
      									});
      								});
      							});
      						</script>`}
      </CodeBlock>

      				<div className="view_editor edit_code mt_m">
      <Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="waiAria/03-waiAriaAttrs/3.2.3.aria-live.html" className="uk_editor min_height_480 mb_result_height_480" mode="htmlmixed" theme="ayu-mirage" browser="default" result minHeight="480px" mbResultHeight="480px" />
      </Suspense>
      </div>
      			</div>
      			
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">aria-relevant 속성</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<code>aria-relevant</code> 속성은 WAI-ARIA(Accessible Rich Internet Applications)에서 정의된 속성으로,
      				<code>aria-live</code> 속성과 함께 사용됩니다. 이 속성은 live region 내에서 어떤 종류의 변경 사항이 사용자에게 전달될지를 정의합니다.<br />
      				예를 들어, 요소가 추가, 제거, 또는 변경되었을 때 이를 스크린 리더가 사용자에게 어떻게 알릴지 설정하는 데 사용됩니다.
      				<code>aria-relevant</code> 속성을 적절하게 활용하여 웹 접근성을 개선할 수 있습니다.
      			</p>
      			<p className="reference mt_ms">
      				<a href="https://www.w3.org/TR/wai-aria-1.2/#aria-relevant" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">WAI-ARIA 1.2 Specification (aria-relevant)</a><br />
      				<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-relevant" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN Web Docs (aria-relevant)</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">aria-relevant 속성 값</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>additions</strong>
      					<p>
      						요소가 추가되었을 때 스크린 리더가 이를 사용자에게 알립니다.
      					</p>
      				</li>
      				<li>
      					<strong>removals</strong>
      					<p>
      						요소가 제거되었을 때 스크린 리더가 이를 사용자에게 알립니다.
      					</p>
      				</li>
      				<li>
      					<strong>text</strong>
      					<p>
      						요소의 텍스트가 변경되었을 때 스크린 리더가 이를 사용자에게 알립니다.
      					</p>
      				</li>
      				<li>
      					<strong>all</strong>
      					<p>
      						<code>additions</code>, <code>removals</code>, <code>text</code>의 모든 변경 사항을 스크린 리더가 알립니다.
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
      						<code>&lt;section&gt;</code>,
      						<code>&lt;article&gt;</code> 등 대부분의 HTML 요소에서 사용 가능.
      					</p>
      				</li>
      				<li>
      					<strong>연관된 역할</strong>
      					<p>
      						<code>alert</code>, <code>status</code>, <code>log</code>, <code>timer</code>, <code>marquee</code> 등
      						live region과 관련된 ARIA 역할과 함께 사용됩니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">사용 시 주의사항</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>적절한 변경 사항 선택</strong>
      					<p>
      						<code>aria-relevant</code> 속성 값은 페이지에서 발생하는 업데이트의 중요도에 따라 선택해야 합니다.
      						너무 많은 변경 사항을 알리면 사용자가 혼란스러워질 수 있으므로, 필요한 경우에만 사용합니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-live 속성과의 조합</strong>
      					<p>
      						<code>aria-relevant</code>는 <code>aria-live</code> 속성과 함께 사용될 때 의미가 있습니다.
      						<code>aria-live</code>가 <code>off</code>로 설정된 경우, <code>aria-relevant</code>는 효과가 없습니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">잘못된 예시</h4>
      				<p className="mt_s">
      					<code>aria-relevant=&quot;all&quot;</code>은 모든 변경 사항(추가, 제거, 텍스트 변경)을 알리므로,
      					불필요한 정보가 스크린 리더를 통해 전달될 수 있습니다. 실제로 중요한 변경 사항만 알리는 것이 좋습니다.
      				</p>
      				
      <CodeBlock title="aria-relevant 속성 / 잘못된 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div aria-live="polite" aria-relevant="all">
      							<p>알림: 새로운 메시지가 도착했습니다.</p>
      							<span>추가 정보가 있습니다.</span>
      						</div>
      						<script>
      							setTimeout(() => {
      								document.querySelector('div').innerHTML = '<p>알림: 메시지가 삭제되었습니다.</p>';
      							}, 2000);
      						</script>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">올바른 예시</h4>
      				<p className="mt_s">
      					이 예시에서는 새로운 메시지가 도착했을 때만 스크린 리더가 이를 알리도록 <code>aria-relevant=&quot;additions&quot;</code>를 사용했습니다.
      					사용자가 알아야 할 중요한 정보만 전달됩니다.
      				</p>
      				
      <CodeBlock title="aria-relevant 속성 / 올바른 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div aria-live="polite" aria-relevant="additions">
      							<p id="notifications">알림이 없습니다.</p>
      						</div>
      						<script>
      							setTimeout(() => {
      								let newMessage = document.createElement('p');
      								newMessage.textContent = '새로운 메시지가 도착했습니다.';
      								document.getElementById('notifications').appendChild(newMessage);
      							}, 3000);
      						</script>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">aria-relevant=&quot;additions&quot; 사용 예시</h4>
      				<p className="mt_s">
      					새로운 업데이트가 추가될 때만 알리도록 설정합니다.
      				</p>
      				
      <CodeBlock language="javascript" className="uk_gist_code_box mt_m">
      {`<div aria-live="polite" aria-relevant="additions">
      							<ul id="updates">
      								<li>초기 상태</li>
      							</ul>
      						</div>
      						<script>
      							setTimeout(() => {
      								let newUpdate = document.createElement('li');
      								newUpdate.textContent = '새로운 업데이트가 있습니다.';
      								document.getElementById('updates').appendChild(newUpdate);
      							}, 4000);
      						</script>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">aria-relevant=&quot;removals&quot; 사용 예시</h4>
      				<p className="mt_s">
      					메시지가 제거될 때만 스크린 리더가 이를 알립니다.
      				</p>
      				
      <CodeBlock language="javascript" className="uk_gist_code_box mt_m">
      {`<div aria-live="polite" aria-relevant="removals">
      							<p id="message">이 메시지는 곧 제거됩니다.</p>
      						</div>
      						<script>
      							setTimeout(() => {
      								document.getElementById('message').remove();
      							}, 3000);
      						</script>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">aria-relevant=&quot;text&quot; 사용 예시</h4>
      				<p className="mt_s">
      					텍스트가 변경될 때만 알리도록 설정합니다.
      				</p>
      				
      <CodeBlock language="javascript" className="uk_gist_code_box mt_m">
      {`<div aria-live="polite" aria-relevant="text">
      							<p id="status">현재 상태: 정상</p>
      						</div>
      						<script>
      							setTimeout(() => {
      								document.getElementById('status').textContent = '현재 상태: 오류 발생';
      							}, 5000);
      						</script>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">aria-relevant=&quot;all&quot; 사용 예시</h4>
      				<p className="mt_s">
      					모든 변경 사항(추가, 제거, 텍스트 변경)을 사용자에게 알리도록 설정합니다.
      				</p>
      				
      <CodeBlock language="javascript" className="uk_gist_code_box mt_m">
      {`<div aria-live="assertive" aria-relevant="all">
      							<p id="full-status">시스템 상태: 양호</p>
      						</div>
      						<script>
      							setTimeout(() => {
      								let statusElement = document.getElementById('full-status');
      								statusElement.textContent = '시스템 상태: 경고';
      								let newInfo = document.createElement('p');
      								newInfo.textContent = '추가 정보: CPU 과부하';
      								statusElement.parentNode.appendChild(newInfo);
      							}, 6000);
      						</script>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">시멘틱 구조의 예시</h4>
      				<p className="mt_s">
      					시스템 로그와 같은 영역에서 새로운 로그가 추가되거나 텍스트가 변경될 때만 스크린 리더가 이를 알리도록 설정합니다.
      				</p>
      				
      <CodeBlock title="aria-relevant 속성 / 시멘틱 구조" language="javascript" className="uk_gist_code_box mt_m">
      {`<section role="log" aria-live="polite" aria-relevant="additions text">
      							<header>
      								<h2>시스템 로그</h2>
      							</header>
      							<div id="log-content">
      								<p>로그를 기다리는 중...</p>
      							</div>
      						</section>
      						<script>
      							setTimeout(() => {
      								document.getElementById('log-content').innerHTML = '<p>새로운 로그가 추가되었습니다.</p>';
      							}, 4000);
      						</script>`}
      </CodeBlock>

      			</div>
      			
      		</article>
      		
      	</section>
      	

      	<figure className="img_figure mt_l">
      		<img src={`${IMG.WAI_ARIA}/03_wai-aria_attrs_02.png`} alt="라이브 영역 속성(Live Region Attributes)" />
      		<figcaption>
      			<b>[라이브 영역 속성(Live Region Attributes)]</b><br />
      			<a href={`${IMG.WAI_ARIA}/03_wai-aria_attrs_02.png`} className="mt_ms box_link" title="새창 열림" target="_blank" rel="noreferrer">크게 보기</a>
      		</figcaption>
      	</figure>


      <footer className="reference_box">
      	<strong className="tit">라이브 영역 속성(Live Region Attributes) | WAI-ARIA 상태 및 속성 참조</strong>
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

export default AttrsLiveregionsPage
