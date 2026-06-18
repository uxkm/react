import { useAccessibilityPageMeta } from '@/hooks/useAccessibilityPageMeta.js'
import { IMG } from '@/config/path'
import CodeBlock from '@/components/code/CodeBlock'

const PAGE_LAYOUT = {
  mainClass: "rolesWindow",
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
  title: "윈도우 역할(Window Roles) | WAI-ARIA 역할",
  description: "WAI-ARIA (Web Accessibility Initiative - Accessible Rich Internet Applications)의 역할(Role)은 웹 콘텐츠와 웹 애플리케이션의 접근성을 향상시키기 위해 사용되는 속성입니다. 이 페이지에서는 WAI-ARIA의 역할 중 윈도우 역할(Window Roles)에 대해 소개합니다.",
  keyword: "Accessibility, a11y, wcag, kwcag, macag, kiosk, 접근성, 웹 콘텐츠 접근성, 한국형 웹 콘텐츠 접근성, 모바일 앱 접근성, 무인정보단밀기 접근성",
}

function RolesWindowPage() {
  useAccessibilityPageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  })


  return (
    <>










      	<blockquote className="uk_note mt_xl" role="note">
      		<strong className="sound_only">요약 설명</strong>
      		<p>
      			<b>윈도우 역할(Window Roles)</b>은 웹 애플리케이션의 창과 같은 인터페이스 구성 요소를 정의하는 데 사용됩니다.
      			이 역할들은 사용자와 상호작용하는 다양한 창 요소를 나타내며,
      			보조 기술을 사용하는 사용자들이 창 요소를 올바르게 이해하고 사용할 수 있도록 도와줍니다.
      		</p>
      		<p className="reference mt_ms">
      			<a href="https://www.w3.org/TR/wai-aria-1.2/#window_roles" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">W3C ARIA Window Roles</a><br />
      		</p>
      	</blockquote>

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">alertdialog 역할</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<code>alertdialog</code> 역할은 사용자에게 즉각적인 주의를 요구하는 경고 메시지와 상호작용할 수 있는 대화 상자를 나타냅니다.
      				이 역할은 중요한 경고나 확인 요청을 포함하며, 사용자가 즉시 반응해야 하는 상황에서 사용됩니다.
      				<code>alertdialog</code>는 일반적인 <code>alert</code>와 달리, 사용자로부터 입력을 받을 수 있는 인터랙티브 요소(예: 버튼, 텍스트 필드)를 포함할 수 있습니다.
      			</p>
      			<p className="reference mt_ms">
      				<a href="https://www.w3.org/TR/wai-aria-1.2/#alertdialog" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">W3C ARIA alertdialog</a><br />
      				<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/alertdialog_role" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN ARIA alertdialog</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">기본 설명</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<code>alertdialog</code> 역할은 사용자에게 중요한 경고나 메시지를 전달하고,
      					사용자의 응답이 필요한 대화 상자를 나타냅니다.
      					이 역할은 긴급한 상황에서 사용되며, 사용자가 반드시 상호작용해야 하는 상황에만 사용해야 합니다.
      				</li>
      				<li>
      					<strong>모달 대화 상자</strong>
      					<p>
      						<code>alertdialog</code>는 보통 모달 대화 상자로 사용되며,
      						사용자가 대화 상자가 열려 있는 동안 다른 페이지 요소와 상호작용할 수 없도록 설정됩니다.
      					</p>
      				</li>
      				<li>
      					<strong>중요한 점</strong>
      					<p>
      						<code>alertdialog</code> 역할을 사용할 때는 대화 상자의 제목과 설명을 명확하게 제공하여,
      						사용자가 이 대화 상자의 목적을 이해하고, 필요한 응답을 쉽게 제공할 수 있도록 해야 합니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">사용 시 주의사항</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>모달 대화 상자</strong>
      					<p>
      						<code>alertdialog</code>는 주로 모달 대화 상자로 사용됩니다.
      						사용자가 대화 상자 외의 페이지 콘텐츠와 상호작용할 수 없도록 하기 위해 <code>aria-modal=&quot;true&quot;</code>
      						속성을 사용하는 것이 일반적입니다.
      					</p>
      				</li>
      				<li>
      					<strong>포커스 관리</strong>
      					<p>
      						<code>alertdialog</code>가 활성화되면, 자동으로 포커스가 대화 상자로 이동하여
      						사용자가 키보드를 사용해 쉽게 상호작용할 수 있도록 해야 합니다.
      						대화 상자를 닫으면 포커스가 원래 위치로 돌아가야 합니다.
      					</p>
      				</li>
      				<li>
      					<strong>레이블과 설명 제공</strong>
      					<p>
      						<code>aria-labelledby</code> 및 <code>aria-describedby</code> 속성을 사용해 대화 상자의 제목과 설명을 명확히 지정하여,
      						보조 기술 사용자들이 대화 상자의 목적과 내용을 쉽게 이해할 수 있도록 해야 합니다.
      					</p>
      				</li>
      				<li>
      					<strong>적절한 키보드 내비게이션</strong>
      					<p>
      						<code>alertdialog</code> 내에서 키보드 탐색이 원활하게 작동하도록 해야 하며,
      						<i className="key_tab">Tab</i> 키를 사용해 대화 상자 내의 모든 상호작용 요소를 탐색할 수 있도록 설정해야 합니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">상속된 상태 및 속성</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>aria-labelledby</strong>
      					<p>
      						대화 상자의 제목을 참조합니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-describedby</strong>
      					<p>
      						대화 상자의 내용을 설명합니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-modal</strong>
      					<p>
      						대화 상자가 모달인지 여부를 지정하며, 모달 대화 상자는 페이지의 나머지 부분과의 상호작용을 제한합니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-live</strong>
      					<p>
      						기본적으로 <code>aria-live=&quot;assertive&quot;</code> 속성을 가지며, 보조 기술이 이 대화 상자를 즉시 사용자에게 알리도록 합니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">기본 alertdialog 역할 사용 예시</h4>
      				<p className="mt_s">
      					이 예시는 파일 삭제를 확인하는 경고 대화 상자를 정의한 것입니다.
      					<code>alertdialog</code> 역할을 사용해, 보조 기술이 이 대화 상자가 즉각적인 응답을 요구한다는 것을 알립니다.
      					<code>aria-labelledby</code> 속성은 대화 상자의 제목을 참조하고,
      					<code>aria-describedby</code> 속성은 대화 상자의 내용을 설명합니다.
      				</p>
      				
      <CodeBlock title="alertdialog 역할 / 기본 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="alertdialog" aria-labelledby="alertTitle" aria-describedby="alertDesc">
      							<h2 id="alertTitle">Delete Confirmation</h2>
      							<p id="alertDesc">Are you sure you want to delete this file? This action cannot be undone.</p>
      							<button id="confirmDelete">Yes, delete it</button>
      							<button id="cancelDelete">Cancel</button>
      						</div>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">모달 alertdialog 예시</h4>
      				<p className="mt_s">
      					이 예시는 세션 타임아웃을 알리고 사용자가 세션을 연장하거나 로그아웃할 수 있는 모달 대화 상자를 구현한 것입니다.
      					<code>aria-modal=&quot;true&quot;</code> 속성은 이 대화 상자가 모달임을 지정하여, 사용자가 대화 상자 외의 페이지와 상호작용할 수 없게 합니다.
      				</p>
      				
      <CodeBlock title="alertdialog 역할 / 모달 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="alertdialog" aria-modal="true" aria-labelledby="alertTitle" aria-describedby="alertDesc">
      							<h2 id="alertTitle">Session Timeout</h2>
      							<p id="alertDesc">Your session is about to expire. Would you like to extend your session?</p>
      							<button id="extendSession">Extend Session</button>
      							<button id="logout">Log Out</button>
      						</div>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">자동 포커스 관리가 포함된 alertdialog 예시</h4>
      				<p className="mt_s">
      					이 예시는 <code>alertdialog</code>가 나타날 때 자동으로 포커스를 관리하여,
      					대화 상자가 활성화되면 사용자가 즉시 응답할 수 있도록 합니다.
      					<code>tabindex=&quot;-1&quot;</code>은 대화 상자가 초기 포커스를 받을 수 있도록 설정합니다.
      				</p>
      				
      <CodeBlock title="alertdialog 역할 / 자동 포커스 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="alertdialog" aria-labelledby="alertTitle" aria-describedby="alertDesc" tabindex="-1">
      							<h2 id="alertTitle">Unsaved Changes</h2>
      							<p id="alertDesc">You have unsaved changes. Do you want to save them before exiting?</p>
      							<button id="saveChanges">Save</button>
      							<button id="discardChanges">Discard</button>
      							<button id="cancelExit">Cancel</button>
      						</div>

      						<script>
      							document.querySelector('[role="alertdialog"]').focus();
      						</script>`}
      </CodeBlock>

      			</div>
      			
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">dialog 역할</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<code>alertdialog</code> 역할은 사용자에게 즉각적인 주의를 요구하는 경고 메시지와 상호작용할 수 있는 대화 상자를 나타냅니다.
      				이 역할은 중요한 경고나 확인 요청을 포함하며, 사용자가 즉시 반응해야 하는 상황에서 사용됩니다.
      				<code>alertdialog</code>는 일반적인 <code>alert</code>과 달리,
      				사용자로부터 입력을 받을 수 있는 인터랙티브 요소(예: 버튼, 텍스트 필드)를 포함할 수 있습니다.
      			</p>
      			<p className="reference mt_ms">
      				<a href="https://www.w3.org/TR/wai-aria-1.2/#dialog" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">W3C ARIA dialog</a><br />
      				<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/dialog_role" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN ARIA dialog</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">기본 설명</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<code>dialog</code> 역할은 웹 페이지에서 사용자와 상호작용하는 대화 상자를 나타내며,
      					보조 기술이 이 콘텐츠를 대화 상자로 인식할 수 있도록 도와줍니다.
      					사용자가 특정 작업을 수행하거나 결정을 내리기 위한 정보를 제공할 때 주로 사용됩니다.
      				</li>
      				<li>
      					<strong>포커스 관리</strong>
      					<p>
      						<code>dialog</code>가 활성화되면, 포커스가 자동으로 대화 상자 내로 이동되어야 합니다.
      						이는 사용자가 대화 상자와 상호작용할 수 있도록 돕는 중요한 부분입니다.
      					</p>
      				</li>
      				<li>
      					<strong>중요한 점</strong>
      					<p>
      						대화 상자의 제목과 내용을 명확히 정의하기 위해 <code>aria-labelledby</code> 및 <code>aria-describedby</code> 속성을 사용해야 하며,
      						모달 대화 상자의 경우 <code>aria-modal</code> 속성을 사용하여 사용자 상호작용을 제어해야 합니다.
      						이를 통해 사용자 경험과 접근성을 모두 향상시킬 수 있습니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">사용 시 주의사항</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>모달 대화 상자</strong>
      					<p>
      						<code>dialog</code> 역할은 주로 모달 대화 상자에 사용됩니다.
      						모달 대화 상자를 정의할 때는 <code>aria-modal=&quot;true&quot;</code> 속성을 사용하여
      						사용자가 대화 상자 외의 페이지 콘텐츠와 상호작용할 수 없도록 해야 합니다.
      					</p>
      				</li>
      				<li>
      					<strong>포커스 관리</strong>
      					<p>
      						<code>dialog</code>가 활성화되면, 자동으로 포커스가 대화 상자 내의 첫 번째 상호작용 요소로 이동하여
      						사용자가 키보드를 통해 쉽게 상호작용할 수 있도록 해야 합니다.
      						대화 상자가 닫히면 포커스가 원래 위치로 돌아가야 합니다.
      					</p>
      				</li>
      				<li>
      					<strong>레이블과 설명 제공</strong>
      					<p>
      						<code>aria-labelledby</code> 및 <code>aria-describedby</code> 속성을 사용하여 대화 상자의 제목과 설명을 명확하게 제공해야 합니다.
      						이는 보조 기술 사용자들이 대화 상자의 목적과 내용을 쉽게 이해할 수 있도록 돕습니다.
      					</p>
      				</li>
      				<li>
      					<strong>적절한 키보드 내비게이션</strong>
      					<p>
      						대화 상자 내에서 <i className="key_tab">Tab</i> 키를 사용해 모든 상호작용 요소를 탐색할 수 있도록 설정해야 하며,
      						<i className="key_esc">Esc</i> 키를 사용해 대화 상자를 닫을 수 있어야 합니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">상속된 상태 및 속성</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>aria-labelledby</strong>
      					<p>
      						대화 상자의 제목을 참조합니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-describedby</strong>
      					<p>
      						대화 상자의 내용을 설명합니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-modal</strong>
      					<p>
      						대화 상자가 모달인지 여부를 지정하며, 모달 대화 상자는 페이지의 나머지 부분과의 상호작용을 제한합니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">기본 dialog 역할 사용 예시</h4>
      				<p className="mt_s">
      					이 예시는 사용자 설정을 조정할 수 있는 기본 대화 상자를 정의한 것입니다.
      					<code>dialog</code> 역할을 사용하여, 보조 기술이 이 요소를 대화 상자로 인식할 수 있습니다.
      					<code>aria-labelledby</code> 속성은 대화 상자의 제목을 참조하고,
      					<code>aria-describedby</code> 속성은 대화 상자의 내용을 설명합니다.
      				</p>
      				
      <CodeBlock title="dialog 역할 / 기본 역할" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="dialog" aria-labelledby="dialogTitle" aria-describedby="dialogDesc">
      							<h2 id="dialogTitle">User Preferences</h2>
      							<p id="dialogDesc">Adjust your settings below:</p>
      							<label for="setting1">Enable notifications</label>
      							<input type="checkbox" id="setting1">
      							<button type="button">Save</button>
      							<button type="button">Cancel</button>
      						</div>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">모달 dialog 예시</h4>
      				<p className="mt_s">
      					이 예시는 사용자가 페이지를 벗어나기 전에 변경 사항을 저장할지 묻는 모달 대화 상자입니다.
      					<code>aria-modal=&quot;true&quot;</code> 속성은 이 대화 상자가 모달임을 나타내며,
      					사용자가 대화 상자가 열린 동안 다른 페이지 요소와 상호작용할 수 없도록 합니다.
      				</p>
      				
      <CodeBlock title="dialog 역할 / 모달 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="dialog" aria-modal="true" aria-labelledby="dialogTitle" aria-describedby="dialogDesc">
      							<h2 id="dialogTitle">Save Changes</h2>
      							<p id="dialogDesc">Do you want to save your changes before exiting?</p>
      							<button type="button">Save</button>
      							<button type="button">Don't Save</button>
      							<button type="button">Cancel</button>
      						</div>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">비모달 dialog 예시</h4>
      				<p className="mt_s">
      					이 예시는 사용자에게 도움말 정보를 제공하는 비모달 대화 상자를 나타냅니다.
      					이 대화 상자는 페이지의 다른 부분과 동시에 상호작용할 수 있도록 설계되어 있으며, 모달 속성이 없습니다.
      				</p>
      				
      <CodeBlock title="dialog 역할 / 비모달 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="dialog" aria-labelledby="dialogTitle" aria-describedby="dialogDesc">
      							<h2 id="dialogTitle">Help Information</h2>
      							<p id="dialogDesc">Here is some helpful information about using this feature...</p>
      							<button type="button">Close</button>
      						</div>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">자동 포커스 관리가 포함된 dialog 예시</h4>
      				<p className="mt_s">
      					이 예시는 사용자가 로그인해야 하는 모달 대화 상자를 나타내며, 자동으로 포커스가 대화 상자로 이동합니다.
      					이로 인해 사용자는 대화 상자가 나타나자마자 키보드를 사용해 상호작용할 수 있습니다.
      				</p>
      				
      <CodeBlock title="dialog 역할 / 자동 포커스 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="dialog" aria-labelledby="dialogTitle" aria-describedby="dialogDesc" tabindex="-1">
      							<h2 id="dialogTitle">Login Required</h2>
      							<p id="dialogDesc">Please log in to continue.</p>
      							<label for="username">Username</label>
      							<input type="text" id="username" tabindex="0">
      							<label for="password">Password</label>
      							<input type="password" id="password">
      							<button type="button">Log In</button>
      							<button type="button">Cancel</button>
      						</div>

      						<script>
      							document.querySelector('[role="dialog"]').focus();
      						</script>`}
      </CodeBlock>

      			</div>
      			
      		</article>
      		
      	</section>
      	

      	<figure className="img_figure mt_l">
      		<img src={`${IMG.WAI_ARIA}/02_wai-aria_role_06.png`} alt="윈도우 역할(Window Roles)" />
      		<figcaption>
      			<b>[윈도우 역할(Window Roles)]</b><br />
      			<a href={`${IMG.WAI_ARIA}/02_wai-aria_role_06.png`} className="mt_ms box_link" title="새창 열림" target="_blank" rel="noreferrer">크게 보기</a>
      		</figcaption>
      	</figure>


      <footer className="reference_box">
      	<strong className="tit">윈도우 역할(Window Roles) | WAI-ARIA 역할 참조</strong>
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

export default RolesWindowPage
