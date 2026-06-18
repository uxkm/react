import { useAccessibilityPageMeta } from '@/hooks/useAccessibilityPageMeta.js'
import { IMG } from '@/config/path'
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
  title: "견고성 | 접근성 체크리스트(웹 콘텐츠 접근성)",
  description: "웹 콘텐츠 접근성 체크리스트는 다양한 사용자들이 웹 콘텐츠를 문제 없이 이용할 수 있도록 보장하기 위해 설계된 필수 항목들을 제공합니다. 이 페이지에서는 웹 콘텐츠 접근성 체크리스트의 견고성(Robust)에 대해 소개합니다.",
  keyword: "Accessibility, a11y, wcag, kwcag, macag, kiosk, 접근성, 웹 콘텐츠 접근성, 한국형 웹 콘텐츠 접근성, 모바일 앱 접근성, 무인정보단밀기 접근성",
}

function CheckWcagRobustPage() {
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
      		<h2 className="ml_mn" data-conlist="false">마크업 오류 방지</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<b className="t_black">마크업 언어의 요소는 열고 닫음, 중첩 관계 및 속성 선언에 오류가 없어야 합니다.</b><br />
      				HTML 마크업 언어에서 요소는 열고 닫아야 하며, 중첩 관계 및 속성 선언이 정확해야 합니다.
      				이를 통해 문서의 구조를 올바르게 유지하고, 브라우저가 페이지를 정확하게 렌더링할 수 있도록 합니다.
      			</p>
      			<p className="reference mt_ms">
      				HTML5 스펙 문서 :
      				<a href="https://html.spec.whatwg.org/multipage/" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">HTML5 Specification</a><br />
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">예시</h3>
      			
      <CodeBlock title="타이틀" language="javascript" className="uk_gist_code_box mt_m">
      {`<!-- 잘못된 예시 1 : <p> 요소가 닫히지 않아 마크업 오류가 발생 -->
      					<p>Welcome to our website

      					<!-- 올바른 예시 1 : 요소를 열고 닫는 마크업 -->
      					<p>Welcome to our website</p>

      					<!-- 잘못된 예시 2 :  요소의 중첩이 잘못되어 있는 경우 -->
      					<div>
      						<p>This is a paragraph.
      						<div>This is inside a div.____error__</p>__error____
      					____error__</div>__error____

      					<!-- 올바른 예시 2 : 요소의 중첩을 올바르게 하여 구조를 유지 -->
      					<div>
      						<p>This is a paragraph.</p>
      						<div>This is inside a div.</div>
      					</div>`}
      </CodeBlock>

      			<p className="mt_ms">
      				마크업 오류 방지에 대한 예시는 <b>UXKM의 요소 중첩 페이지</b>에서 자세하게 설명되어 있습니다.<br/>
      				<a href="/publishing/html/02-blockInline/05-element_nesting" className="box_link external mt_ms" target="_blank" rel="noreferrer" title="새창 열림"><b>UXKM의 요소 중첩 바로가기</b></a>
      			</p>
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
      		<h2 className="ml_mn" data-conlist="false">웹 애플리케이션 접근성 준수</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<b className="t_black">콘텐츠에 포함된 웹 애플리케이션은 접근성이 있어야 합니다.</b><br />
      				웹사이트, 도구, 기술이 장애를 가진 사람들도 포함하여 모든 사용자에게 접근 가능하도록 설계되는 것을 의미합니다.
      			</p>
      			<p className="reference mt_ms">
      				웹 콘텐츠 접근성 지침(WCAG) 개요 :
      				<a href="https://www.w3.org/WAI/standards-guidelines/wcag/" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">WCAG 2 Overview</a><br />
      				WCAG 2.2 Guidelines :
      				<a href="https://www.w3.org/TR/WCAG22/" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">WCAG 2.2</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_red">잘못된 예시 1</h3>
      			<p className="mt_ms t_red">
      				버튼에 대체 텍스트가 없어 스크린 리더 사용자에게 혼란을 줄 수 있습니다.
      			</p>
      			
      <CodeBlock title="웹 애플리케이션 접근성 준수 - 잘못된 예시 1" language="javascript" className="uk_gist_code_box mt_m">
      {`<button onclick="submitForm()">Submit</button>`}
      </CodeBlock>

      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_green">올바른 예시 1</h3>
      			<p className="mt_ms t_green">
      				<code>aria-label</code> 속성을 사용하여 스크린 리더 사용자에게 버튼의 용도를 설명합니다.
      			</p>
      			
      <CodeBlock title="웹 애플리케이션 접근성 준수 - 올바른 예시 1" language="javascript" className="uk_gist_code_box mt_m">
      {`<button onclick="submitForm()" aria-label="Submit form">Submit</button>`}
      </CodeBlock>

      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_red">잘못된 예시 2</h3>
      			<p className="mt_ms t_red">
      				버튼의 상태 변화(예: 메뉴 열림/닫힘)에 대한 정보를 제공하지 않은 경우, 사용자는 버튼의 현재 상태를 알기 어려워 사용성에 문제가 생길 수 있습니다.
      			</p>
      			
      <CodeBlock title="웹 애플리케이션 접근성 준수 - 잘못된 예시 2" language="javascript" className="uk_gist_code_box mt_m">
      {`<button onclick="submitForm()" aria-label="Submit form">Submit</button>`}
      </CodeBlock>

      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_green">올바른 예시 1</h3>
      			<p className="mt_ms t_green">
      				<code>aria-expanded</code>와 <code>aria-controls</code> 속성을 사용하여 버튼 상태와 관련된 정보를 제공합니다.
      			</p>
      			
      <CodeBlock title="웹 애플리케이션 접근성 준수 - 올바른 예시 2" language="javascript" className="uk_gist_code_box mt_m">
      {`<button onclick="toggleMenu()" aria-expanded="false" aria-controls="menu">Menu</button>
      					<nav id="menu" hidden>
      						<!-- Menu content -->
      					</nav>

      					<script>
      						function toggleMenu() {
      							const button = document.querySelector('button');
      							const menu = document.getElementById('menu');
      							const expanded = button.getAttribute('aria-expanded') === 'true' || false;

      							button.setAttribute('aria-expanded', !expanded);
      							menu.hidden = expanded;
      						}
      					</script>`}
      </CodeBlock>

      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue">검수 방법</h3>
      			<ul className="mt_ms dot_lst gap-column-important-s">
      				<li>
      					<strong className="t_black">자동화 도구 사용</strong>
      					<p>
      						접근성 자동화 검사 도구(예: Axe, WAVE)를 사용하여 페이지를 분석하고 문제점을 발견하였는가?
      					</p>
      				</li>
      				<li>
      					<strong className="t_black">스크린 리더 테스트</strong>
      					<p>
      						NVDA, JAWS와 같은 스크린 리더를 사용하여 웹 애플리케이션이 제대로 읽히는지 확인하였는가?
      					</p>
      				</li>
      				<li>
      					<strong className="t_black">키보드 네비게이션 테스트</strong>
      					<p>
      						마우스 없이 키보드만으로 웹 애플리케이션을 사용할 수 있는지 확인하였는가?
      					</p>
      				</li>
      				<li>
      					<strong className="t_black">색 대비 검사</strong>
      					<p>
      						텍스트와 배경 색상의 대비가 충분한지 확인하였는가?
      					</p>
      				</li>
      				<li>
      					<strong className="t_black">수동 검사</strong>
      					<p>
      						WCAG 지침을 참고하여 수동으로 접근성을 검토하였는가?
      					</p>
      				</li>
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
      	<strong className="tit">견고성 | 접근성 체크리스트(웹 콘텐츠 접근성) - 웹 콘텐츠 접근성 참조</strong>
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

export default CheckWcagRobustPage
