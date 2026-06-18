import { useAccessibilityPageMeta } from '@/hooks/useAccessibilityPageMeta.js'
import { IMG } from '@/config/path'
import CodeBlock from '@/components/code/CodeBlock'

const PAGE_LAYOUT = {
  mainClass: "rolesLandmark",
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
  title: "랜드마크 역할(Landmark Roles) | WAI-ARIA 역할",
  description: "WAI-ARIA (Web Accessibility Initiative - Accessible Rich Internet Applications)의 역할(Role)은 웹 콘텐츠와 웹 애플리케이션의 접근성을 향상시키기 위해 사용되는 속성입니다. 이 페이지에서는 WAI-ARIA의 역할 중 랜드마크 역할(Landmark Roles)에 대해 소개합니다.",
  keyword: "Accessibility, a11y, wcag, kwcag, macag, kiosk, 접근성, 웹 콘텐츠 접근성, 한국형 웹 콘텐츠 접근성, 모바일 앱 접근성, 무인정보단밀기 접근성",
}

function RolesLandmarkPage() {
  useAccessibilityPageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  })


  return (
    <>










      	<blockquote className="uk_note mt_xl" role="note">
      		<strong className="sound_only">요약 설명</strong>
      		<p>
      			<b>랜드마크 역할(Landmark Roles)</b>은 웹 페이지에서 주요 영역을 식별하고 쉽게 탐색할 수 있도록 도와주는 ARIA 역할입니다.
      			이 역할들은 페이지의 중요한 섹션을 구분하여 보조 기술을 사용하는 사용자들이 빠르게 페이지의 주요 콘텐츠로 이동할 수 있도록 합니다.
      			또한, 웹 페이지의 구조를 정의하고, 페이지 내에서 중요한 영역을 강조하는 데 사용됩니다.
      		</p>
      		<p className="reference mt_ms">
      			<a href="https://www.w3.org/TR/wai-aria-1.2/#landmark_roles" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">W3C ARIA Landmark Roles</a><br />
      		</p>
      	</blockquote>

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">banner 역할</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<code>banner</code> 역할은 기본적으로 시멘틱 마크업 사용을 권장하며 웹 페이지의 상단에 위치하는 주목할 만한 영역을 나타냅니다.
      				이 역할은 일반적으로 웹사이트의 로고, 제목, 주요 탐색 링크 등을 포함하는 페이지의 헤더 부분에 사용됩니다.
      				<code>banner</code> 역할은 사이트 전체에 걸쳐 일관되게 반복되는 콘텐츠를 나타내며,
      				사용자가 페이지의 주요 제목과 탐색 메뉴를 쉽게 찾을 수 있도록 돕습니다.
      			</p>
      			<p className="reference mt_ms">
      				<a href="https://www.w3.org/TR/wai-aria-1.2/#banner" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">W3C ARIA banner</a><br />
      				<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/banner_role" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN ARIA banner</a><br />
      				<a href="/publishing/html/03-sections/01-header_element" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">UXKM : header element</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">기본 설명</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>시멘틱 마크업 추천</strong>
      					<p>
      						<code>banner</code> 역할은 웹 페이지의 상단에 있는 중요한 영역을 정의하는 데 사용됩니다.
      						가능하면 시멘틱 마크업인 <code>&lt;header&gt;</code>를 사용하는 것이 좋으며,
      						특정 상황에서만 비시멘틱 요소에 <code>role=&quot;banner&quot;</code>를 추가하여 사용할 수 있습니다.
      					</p>
      				</li>
      				<li>
      					<strong>중요한 점</strong>
      					<p>
      						<code>banner</code> 역할은 한 페이지에 하나만 존재해야 하며,
      						사이트의 주요 제목, 로고, 탐색 메뉴 등을 포함하는 영역에만 사용해야 합니다.
      						이는 사용자 경험과 접근성을 향상시키기 위한 중요한 지침입니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">사용 시 주의사항</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>페이지에 하나만 사용</strong>
      					<p>
      						<code>banner</code> 역할은 페이지 내에서 단 한 번만 사용되어야 하며, 사이트 전체에 걸쳐 일관되게 반복되는 헤더 부분에 사용됩니다.
      					</p>
      				</li>
      				<li>
      					<strong>헤더 내 주요 콘텐츠 포함</strong>
      					<p>
      						<code>banner</code> 역할은 웹 페이지의 중요한 상단 콘텐츠를 포함해야 합니다.
      						여기에는 로고, 제목, 사이트 네비게이션 메뉴 등이 포함될 수 있습니다.
      					</p>
      				</li>
      				<li>
      					<strong>중복 사용 금지</strong>
      					<p>
      						페이지 내에 여러 개의 <code>banner</code> 역할을 사용하는 것은 접근성을 저해할 수 있습니다.
      						페이지의 헤더 역할을 명확히 하기 위해 하나의 <code>banner</code> 역할만 사용해야 합니다.
      					</p>
      				</li>
      				<li>
      					<strong>정확한 요소 선택</strong>
      					<p>
      						<code>div</code>와 같은 비시멘틱 요소를 사용해 <code>role=&quot;banner&quot;</code>를 지정할 수 있지만,
      						가능하면 <code>&lt;header&gt;</code>와 같은 시멘틱 요소를 사용하는 것이 더 좋습니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">상속된 상태 및 속성</h3>
      			<p className="mt_m">
      				<code>banner</code> 역할은 특별한 상속된 상태나 속성이 없습니다.
      				주로 사이트의 헤더와 같은 중요한 정보가 포함된 영역을 나타내며,
      				추가적인 ARIA 상태나 속성을 필요로 하지 않습니다.
      			</p>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">잘못된 예시</h4>
      				<p className="mt_s">
      					이 예시는 한 페이지에 두 개의 <code>banner</code> 역할을 사용하고 있습니다.
      					<code>banner</code> 역할은 페이지에 하나만 사용해야 하며, 중복 사용은 접근성을 저해할 수 있습니다.
      				</p>
      				
      <CodeBlock title="banner 역할 / 잘못된 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="banner">
      							<h1>Main Site</h1>
      							<img src="logo.png" alt="Logo">
      						</div>

      						<div role="banner">
      							<h1>Secondary Site</h1>
      							<img src="secondary-logo.png" alt="Secondary Logo">
      						</div>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">올바른 예시</h4>
      				<p className="mt_s">
      					이 예시는 하나의 <code>banner</code> 역할을 사용하여 페이지의 주요 헤더를 명확하게 정의합니다.
      					이 헤더는 사이트의 제목, 로고, 주요 탐색 메뉴를 포함하고 있습니다.
      				</p>
      				
      <CodeBlock title="banner 역할 / 올바른 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="banner">
      							<h1>Main Site</h1>
      							<img src="logo.png" alt="Logo">
      							<nav role="navigation">
      								<ul>
      									<li><a href="#home">Home</a></li>
      									<li><a href="#about">About</a></li>
      									<li><a href="#services">Services</a></li>
      									<li><a href="#contact">Contact</a></li>
      								</ul>
      							</nav>
      						</div>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">(권장) 시멘틱 사용 예시</h4>
      				<p className="mt_s">
      					이 예시는 시멘틱 요소인 <code>&lt;header&gt;</code>를 사용하여 <code>banner</code> 역할을 자연스럽게 수행합니다.
      					HTML5 시멘틱 마크업을 사용하면, 보조 기술은 자동으로 이 영역을 페이지의 헤더로 인식합니다.
      					추가적인 ARIA 속성 없이도 접근성이 보장되며, 코드의 가독성도 높아집니다.
      				</p>
      				
      <CodeBlock title="banner 역할 / 시멘틱 사용 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<header>
      							<h1>Main Site</h1>
      							<img src="logo.png" alt="Logo">
      							<nav>
      								<ul>
      									<li><a href="#home">Home</a></li>
      									<li><a href="#about">About</a></li>
      									<li><a href="#services">Services</a></li>
      									<li><a href="#contact">Contact</a></li>
      								</ul>
      							</nav>
      						</header>`}
      </CodeBlock>

      			</div>
      			
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">complementary 역할</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<code>complementary</code> 역할은 웹 페이지에서 주 콘텐츠와 직접적인 연관은 없지만,
      				부가적인 정보를 제공하는 콘텐츠 영역을 나타냅니다.
      				이 역할은 주로 페이지의 주요 콘텐츠와는 독립적으로 보조적인 정보를 제공하는 경우에 사용되며,
      				보조 기술이 이러한 정보를 주요 콘텐츠와 구분하여 인식할 수 있도록 도와줍니다.
      			</p>
      			<p className="reference mt_ms">
      				<a href="https://www.w3.org/TR/wai-aria-1.2/#complementary" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">W3C ARIA complementary</a><br />
      				<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/complementary_role" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN ARIA complementary</a><br />
      				<a href="/publishing/html/03-sections/07-aside_element" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">UXKM : aside element</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">기본 설명</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<code>complementary</code> 역할은 주 콘텐츠와는 독립적으로 작동하는 보조적인 정보를 제공하는 데 사용됩니다.
      					이 역할을 사용할 때는 페이지의 주요 콘텐츠와 명확하게 구분되도록 설계해야 하며, 페이지에 하나 이상 존재할 수 있습니다.
      </li>
      				<li>
      					<strong>시멘틱 마크업 추천</strong>
      					<p>
      						가능하다면 <code>&lt;aside&gt;</code>와 같은 시멘틱 요소를 사용하여 이 역할을 수행하는 것이 좋습니다.
      						시멘틱 마크업은 코드의 가독성과 의미를 높이고, 보조 기술에서 자연스럽게 인식되도록 합니다.
      					</p>
      				</li>
      				<li>
      					<strong>중요한 점</strong>
      					<p>
      						<code>complementary</code> 역할은 보조적인 정보에만 사용해야 하며, 필수적인 정보는 포함하지 않아야 합니다.
      						이 역할을 적절히 사용하면 사용자가 부가적인 정보를 쉽게 접근하고, 이해할 수 있도록 도와줄 수 있습니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">사용 시 주의사항</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>보조적인 정보 제공에만 사용</strong>
      					<p>
      						<code>complementary</code> 역할은 주 콘텐츠와는 독립적인 보조 정보를 제공하는 영역에만 사용해야 합니다.
      						이 영역의 콘텐츠는 페이지의 주요 목적을 보완하지만, 주 콘텐츠와 혼동되지 않도록 해야 합니다.
      					</p>
      				</li>
      				<li>
      					<strong>페이지에 하나 이상 사용 가능</strong>
      					<p>
      						한 페이지에 여러 개의 <code>complementary</code> 영역이 있을 수 있지만,
      						각각의 영역은 독립적이고 보조적인 정보를 제공해야 합니다.
      					</p>
      				</li>
      				<li>
      					<strong>명확한 구분</strong>
      					<p>
      						주 콘텐츠와 <code>complementary</code> 콘텐츠가 명확히 구분되도록 디자인해야 하며,
      						보조 기술이 이 구분을 인식할 수 있도록 해야 합니다.
      					</p>
      				</li>
      				<li>
      					<strong>중요하지 않은 정보에 사용 금지</strong>
      					<p>
      						페이지에서 필수적인 정보는 <code>complementary</code> 역할에 포함시키지 말아야 합니다.
      						이 역할은 보조적인 정보에만 사용해야 합니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">상속된 상태 및 속성</h3>
      			<p className="mt_m">
      				<code>complementary</code> 역할은 특별히 상속된 상태나 속성이 없습니다.
      				주로 보조적인 콘텐츠를 제공하는 영역을 지정하는 데 사용되며, 추가적인 ARIA 속성은 요구되지 않습니다.
      			</p>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">잘못된 예시</h4>
      				<p className="mt_s">
      					이 예시는 <code>complementary</code> 역할을 페이지의 주 콘텐츠에 사용하고 있습니다.
      					<code>complementary</code>는 주 콘텐츠가 아닌, 보조적인 정보를 제공하는 데 사용되어야 합니다.
      				</p>
      				
      <CodeBlock title="complementary 역할 / 잘못된 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="complementary">
      							<h2>Main Content</h2>
      							<p>This is the primary content of the page, containing the most important information.</p>
      						</div>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">올바른 예시</h4>
      				<p className="mt_s">
      					이 예시는 페이지의 주요 콘텐츠와 관련된 관련 기사를 제공하는 <code>complementary</code> 역할을 적절하게 사용한 예입니다.
      					이 영역의 정보는 보조적인 것이며, 페이지의 주요 콘텐츠와는 독립적으로 제공됩니다.
      				</p>
      				
      <CodeBlock title="complementary 역할 / 올바른 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="complementary">
      							<h2>Related Articles</h2>
      							<ul>
      								<li><a href="#article1">Understanding ARIA Roles</a></li>
      								<li><a href="#article2">Accessible Web Design Practices</a></li>
      							</ul>
      						</div>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">(권장) 시멘틱 사용 예시</h4>
      				<p className="mt_s">
      					이 예시는 시멘틱 요소인 <code>&lt;aside&gt;</code>를 사용하여 보조적인 정보를 제공하는 영역을 정의한 것입니다.
      					<code>&lt;aside&gt;</code>는 HTML5에서 기본적으로 <code>complementary</code> 역할을 수행하며,
      					보조 기술이 이 영역을 독립적인 보조 콘텐츠로 인식합니다.
      				</p>
      				
      <CodeBlock title="complementary 역할 / 시멘틱 사용 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<aside>
      							<h2>Related Articles</h2>
      							<ul>
      								<li><a href="#article1">Understanding ARIA Roles</a></li>
      								<li><a href="#article2">Accessible Web Design Practices</a></li>
      							</ul>
      						</aside>`}
      </CodeBlock>

      			</div>
      			
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">contentinfo 역할</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<code>contentinfo</code> 역할은 웹 페이지나 애플리케이션의 바닥글 영역을 나타내는 데 사용됩니다.
      				이 영역은 일반적으로 저작권 정보, 법적 고지, 사이트 맵 링크, 연락처 정보 등을 포함하며,
      				페이지의 주요 콘텐츠와는 독립적으로 페이지의 전반적인 정보와 관련된 내용을 제공합니다.
      			</p>
      			<p className="reference mt_ms">
      				<a href="https://www.w3.org/TR/wai-aria-1.2/#contentinfo" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">W3C ARIA contentinfo</a><br />
      				<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/contentinfo_role" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN ARIA contentinfo</a><br />
      				<a href="/publishing/html/03-sections/06-footer_element" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">UXKM : footer element</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">기본 설명</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<code>contentinfo</code> 역할은 웹 페이지나 섹션의 바닥글 영역을 정의하는 데 사용됩니다.
      					이 역할을 사용할 때는 페이지의 주요 콘텐츠와는 독립적인 바닥글 정보만을 포함해야 합니다.
      </li>
      				<li>
      					<strong>시멘틱 마크업 추천</strong>
      					<p>
      						가능하다면 <code>&lt;footer&gt;</code>와 같은 시멘틱 요소를 사용하여 이 역할을 수행하는 것이 좋습니다.
      						시멘틱 마크업은 코드의 가독성과 의미를 높이고, 보조 기술에서 자연스럽게 인식되도록 합니다.
      					</p>
      				</li>
      				<li>
      					<strong>중요한 점</strong>
      					<p>
      						<code>contentinfo</code> 역할은 페이지에서 하나만 존재해야 하며,
      						주요 콘텐츠와 독립적인 저작권 정보, 법적 고지 등을 포함하는 데 사용해야 합니다.
      						올바르게 사용하면 사용자에게 중요한 바닥글 정보를 효율적으로 전달할 수 있습니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">사용 시 주의사항</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>페이지에 하나만 사용</strong>
      					<p>
      						<code>contentinfo</code> 역할은 페이지 내에서 단 하나만 사용되어야 합니다.
      						이 역할은 페이지나 섹션의 바닥글에 해당하는 정보만을 나타내야 합니다.
      					</p>
      				</li>
      				<li>
      					<strong>중요한 바닥글 정보 제공</strong>
      					<p>
      						이 역할은 법적 고지, 저작권 정보, 사이트의 전반적인 정보 등을 포함하는 바닥글에 사용됩니다.
      						보조 기술이 이 정보를 중요하게 인식할 수 있도록 설정해야 합니다.
      					</p>
      				</li>
      				<li>
      					<strong>다른 역할과 혼동하지 않도록 사용</strong>
      					<p>
      						<code>contentinfo</code> 역할은 페이지의 주요 바닥글에만 사용해야 하며,
      						일반적인 내비게이션이나 주요 콘텐츠와 섞여 사용해서는 안 됩니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">상속된 상태 및 속성</h3>
      			<p className="mt_m">
      				<code>contentinfo</code> 역할은 특별히 상속된 상태나 속성이 없습니다.
      				주로 페이지의 하단에 위치한 저작권 정보나 관련 링크를 포함하는 영역을 지정하는 데 사용되며,
      				추가적인 ARIA 속성은 요구되지 않습니다.
      			</p>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">잘못된 예시</h4>
      				<p className="mt_s">
      					이 예시는 <code>contentinfo</code> 역할을 페이지의 주요 콘텐츠에 사용하고 있습니다.
      					<code>contentinfo</code> 역할은 페이지의 바닥글에만 사용해야 하며, 주 콘텐츠에 적용하면 안 됩니다.
      				</p>
      				
      <CodeBlock title="contentinfo 역할 / 잘못된 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="contentinfo">
      							<h1>Welcome to Our Website</h1>
      							<p>This is the main content of the website.</p>
      						</div>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">올바른 예시</h4>
      				<p className="mt_s">
      					이 예시는 저작권 정보와 법적 링크를 포함하는 바닥글에 <code>contentinfo</code> 역할을 적절히 사용한 예입니다.
      					이 영역은 페이지의 주요 콘텐츠와는 독립적인 정보를 제공합니다.
      				</p>
      				
      <CodeBlock title="contentinfo 역할 / 올바른 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="contentinfo">
      							<p>&copy; 2024 My Website. All rights reserved.</p>
      							<a href="/privacy-policy">Privacy Policy</a> | <a href="/terms-of-service">Terms of Service</a>
      						</div>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">(권장) 시멘틱 사용 예시</h4>
      				<p className="mt_s">
      					이 예시는 시멘틱 요소인 <code>&lt;footer&gt;</code>를 사용하여 바닥글 정보를 정의한 것입니다.
      					<code>&lt;footer&gt;</code>는 HTML5에서 기본적으로 <code>contentinfo</code> 역할을 수행하며,
      					보조 기술이 이 영역을 페이지의 바닥글 정보로 자동 인식합니다.
      				</p>
      				
      <CodeBlock title="contentinfo 역할 / 시멘틱 사용 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<footer>
      							<p>&copy; 2024 My Website. All rights reserved.</p>
      							<a href="/privacy-policy">Privacy Policy</a> | <a href="/terms-of-service">Terms of Service</a>
      						</footer>`}
      </CodeBlock>

      			</div>
      			
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">form 역할</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<code>form</code> 역할은 사용자가 데이터를 입력하고 이를 서버로 제출할 수 있는 인터페이스를 나타냅니다.
      				이 역할은 HTML 폼 요소와 함께 사용되며, 보조 기술이 사용자가 데이터를 입력하고 전송할 수 있는 영역을 명확하게 인식하도록 도와줍니다.
      				기본적으로 HTML <code>&lt;form&gt;</code> 요소는 자동으로 <code>form</code> 역할을 가집니다.
      			</p>
      			<p className="reference mt_ms">
      				<a href="https://www.w3.org/TR/wai-aria-1.2/#form" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">W3C ARIA form</a><br />
      				<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/form_role" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN ARIA form</a><br />
      				<a href="/publishing/html/09-forms/01-form_element" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">UXKM : form element</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">기본 설명</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<code>form</code> 역할은 사용자 데이터 입력 및 제출을 위한 인터페이스를 나타내며,
      					일반적으로 <code>&lt;form&gt;</code> 요소에 암시적으로 적용됩니다.
      					그러나 필요에 따라 비시멘틱 요소에 폼 역할을 부여할 때 <code>role=&quot;form&quot;</code>을 사용할 수 있습니다.
      </li>
      				<li>
      					<strong>시멘틱 마크업 추천</strong>
      					<p>
      						가능하면 <code>&lt;form&gt;</code>과 같은 시멘틱 요소를 사용하여 폼을 정의하는 것이 좋습니다.
      						이 방법은 HTML 문서의 의미를 명확히 하고, 접근성을 자연스럽게 향상시킵니다.
      					</p>
      				</li>
      				<li>
      					<strong>중요한 점</strong>
      					<p>
      						폼에 명확한 레이블과 설명을 제공하여, 사용자가 폼의 목적을 쉽게 이해할 수 있도록 해야 합니다.
      						여러 폼이 있는 페이지에서는 각 폼을 명확히 구분할 수 있도록 추가적인 ARIA 속성을 사용하면 좋습니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">사용 시 주의사항</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>중복 사용 피하기</strong>
      					<p>
      						일반적으로 <code>&lt;form&gt;</code> 요소에는 <code>form</code> 역할이 암시적으로 적용되므로,
      						별도로 <code>role=&quot;form&quot;</code>을 추가할 필요는 없습니다.
      						그러나 비시멘틱 요소에 폼 역할을 부여할 때 <code>role=&quot;form&quot;</code>을 사용할 수 있습니다.
      					</p>
      				</li>
      				<li>
      					<strong>명확한 레이블 제공</strong>
      					<p>
      						<code>form</code> 역할을 사용할 때는 폼의 목적을 명확히 하기 위해 <code>aria-labelledby</code>
      						또는 <code>aria-describedby</code> 속성을 사용해 폼에 대한 레이블과 설명을 제공하는 것이 좋습니다.
      					</p>
      				</li>
      				<li>
      					<strong>하나의 페이지에 여러 폼이 있는 경우</strong>
      					<p>
      						페이지에 여러 폼이 있는 경우, 각 폼에 명확한 레이블을 제공해 사용자가 폼의 목적을 쉽게 파악할 수 있도록 해야 합니다.
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
      						폼의 제목을 참조합니다. 폼의 목적을 명확히 하기 위해 사용됩니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-describedby</strong>
      					<p>
      						폼에 대한 추가 설명을 제공합니다. 폼 사용법이나 추가적인 정보를 전달할 때 사용됩니다.
      					</p>
      				</li>
      				<li>
      					<strong>기타 상속된 속성</strong>
      					<p>
      						폼의 특성에 따라 추가적인 ARIA 속성을 사용할 수 있습니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">잘못된 예시</h4>
      				<p className="mt_s">
      					이 예시는 <code>div</code> 요소에 <code>role=&quot;form&quot;</code>을 사용했지만, <code>&lt;form&gt;</code> 요소를 사용하지 않았습니다.
      					<code>&lt;form&gt;</code> 요소를 사용해야 전송 기능이 제대로 작동하며, 보조 기술이 이 영역을 올바르게 인식합니다.
      				</p>
      				
      <CodeBlock title="form 역할 / 잘못된 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="form">
      							<label for="username">Username:</label>
      							<input type="text" id="username" name="username">
      							<button type="submit">Submit</button>
      						</div>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">올바른 예시</h4>
      				<p className="mt_s">
      					이 예시는 <code>&lt;form&gt;</code> 요소에 <code>role=&quot;form&quot;</code>을 명시적으로 지정하고,
      					폼에 대한 레이블을 <code>aria-labelledby</code> 속성을 통해 제공하여 폼의 목적을 명확히 했습니다.
      				</p>
      				
      <CodeBlock title="form 역할 / 올바른 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<form role="form" aria-labelledby="loginFormTitle">
      							<h2 id="loginFormTitle">Login Form</h2>
      							<label for="username">Username:</label>
      							<input type="text" id="username" name="username">
      							<label for="password">Password:</label>
      							<input type="password" id="password" name="password">
      							<button type="submit">Submit</button>
      						</form>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">(권장) 시멘틱 사용 예시</h4>
      				<p className="mt_s">
      					이 예시는 시멘틱 요소인 <code>&lt;form&gt;</code>을 사용하여 폼을 정의한 것입니다.
      					<code>&lt;form&gt;</code> 요소는 기본적으로 <code>form</code> 역할을 가지므로, 추가적인 ARIA 속성이 필요하지 않습니다.
      					보조 기술이 이 요소를 자동으로 인식하고, 폼의 목적을 명확히 전달할 수 있습니다.
      				</p>
      				
      <CodeBlock title="form 역할 / 시멘틱 사용 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<form>
      							<h2>Login Form</h2>
      							<label for="username">Username:</label>
      							<input type="text" id="username" name="username">
      							<label for="password">Password:</label>
      							<input type="password" id="password" name="password">
      							<button type="submit">Submit</button>
      						</form>`}
      </CodeBlock>

      			</div>
      			
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">main 역할</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<code>main</code> 역할은 웹 페이지에서 주요 콘텐츠 영역을 나타냅니다.
      				이 역할은 페이지의 핵심 콘텐츠를 포함하며, 보조 기술이 이 영역을 페이지의 주요 부분으로 인식하도록 도와줍니다.
      				<code>main</code> 역할은 페이지 내에서 유일해야 하며, 보조 기술이 사용자가 이 영역으로 빠르게 접근할 수 있도록 지원합니다.
      			</p>
      			<p className="reference mt_ms">
      				<a href="https://www.w3.org/TR/wai-aria-1.2/#main" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">W3C ARIA main</a><br />
      				<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/main_role" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN ARIA main</a><br />
      				<a href="/publishing/html/04-grouping/01-main_element" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">UXKM : main element</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">기본 설명</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<code>main</code> 역할은 웹 페이지의 주요 콘텐츠를 나타내며, 페이지 내에서 유일하게 사용됩니다.
      					이 역할을 사용할 때는 보조적인 콘텐츠와 명확히 구분하여 페이지의 핵심 정보를 제공하는 데 집중해야 합니다.
      </li>
      				<li>
      					<strong>시멘틱 마크업 추천</strong>
      					<p>
      						가능하면 <code>&lt;main&gt;</code>과 같은 시멘틱 요소를 사용하여 이 역할을 수행하는 것이 좋습니다.
      						시멘틱 마크업은 코드의 가독성과 의미를 높이고, 접근성을 자연스럽게 향상시킵니다.
      					</p>
      				</li>
      				<li>
      					<strong>중요한 점</strong>
      					<p>
      						<code>main</code> 역할은 한 페이지에 하나만 존재해야 하며, 주요 콘텐츠를 포함하는 데 사용해야 합니다.
      						이 역할을 적절히 사용하면 보조 기술 사용자가 페이지의 핵심 콘텐츠에 빠르게 접근할 수 있도록 도울 수 있습니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">사용 시 주의사항</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>페이지에 하나만 사용</strong>
      					<p>
      						<code>main</code> 역할은 페이지 내에서 단 하나만 사용해야 합니다.
      						이 역할은 페이지의 주요 콘텐츠를 나타내므로,
      						여러 개의 <code>main</code> 역할이 존재하면 사용자가 주요 콘텐츠를 인식하는 데 혼란을 겪을 수 있습니다.
      					</p>
      				</li>
      				<li>
      					<strong>보조적 콘텐츠와 분리</strong>
      					<p>
      						<code>main</code> 역할은 페이지의 핵심 콘텐츠에만 사용되어야 하며,
      						보조적 콘텐츠(예: 사이드바, 광고)에는 사용해서는 안 됩니다.
      					</p>
      				</li>
      				<li>
      					<strong>적절한 HTML 요소 사용</strong>
      					<p>
      						가능하면 HTML5의 <code>&lt;main&gt;</code> 요소를 사용하여 이 역할을 자연스럽게 부여하는 것이 좋습니다.
      						이는 접근성을 높이고, 보조 기술이 주요 콘텐츠를 쉽게 탐색할 수 있도록 합니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">상속된 상태 및 속성</h3>
      			<p className="mt_m">
      				<code>main</code> 역할은 특별히 상속된 상태나 속성이 없습니다.
      				이 역할은 페이지 내에서 핵심적인 정보를 담고 있는 부분을 나타내며, 추가적인 ARIA 속성은 요구되지 않습니다.
      			</p>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">잘못된 예시</h4>
      				<p className="mt_s">
      					이 예시는 페이지에 두 개의 <code>main</code> 역할을 사용하고 있습니다.
      					<code>main</code> 역할은 페이지 내에서 하나만 사용되어야 하며, 페이지의 주요 콘텐츠를 나타내는 데 사용됩니다.
      				</p>
      				
      <CodeBlock title="main 역할 / 잘못된 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="main">
      							<h1>Welcome to Our Website</h1>
      							<p>This is the main content.</p>
      						</div>

      						<div role="main">
      							<h1>Another Section</h1>
      							<p>This is additional content.</p>
      						</div>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">올바른 예시</h4>
      				<p className="mt_s">
      					이 예시는 페이지에 단 하나의 <code>main</code> 역할을 사용하여 페이지의 주요 콘텐츠를 명확히 정의하고 있습니다.
      					이 콘텐츠는 페이지의 핵심 정보를 포함하고 있습니다.
      				</p>
      				
      <CodeBlock title="main 역할 / 올바른 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="main">
      							<h1>Welcome to Our Website</h1>
      							<p>This is the main content of the page, where the most important information is displayed.</p>
      						</div>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">(권장) 시멘틱 사용 예시</h4>
      				<p className="mt_s">
      					이 예시는 시멘틱 요소인 <code>&lt;main&gt;</code>을 사용하여 페이지의 주요 콘텐츠를 정의한 것입니다.
      					<code>&lt;main&gt;</code> 요소는 기본적으로 <code>main</code> 역할을 가지므로, 추가적인 ARIA 속성이 필요하지 않으며,
      					보조 기술이 이 요소를 자동으로 인식하게 합니다.
      				</p>
      				
      <CodeBlock title="main 역할 / 시멘틱 사용 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<main>
      							<h1>Welcome to Our Website</h1>
      							<p>This is the main content of the page, where the most important information is displayed.</p>
      						</main>`}
      </CodeBlock>

      			</div>
      			
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">navigation 역할</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<code>navigation</code> 역할은 웹 페이지에서 탐색 링크 모음을 나타냅니다.
      				이 역할은 사용자가 사이트의 다른 페이지나 섹션으로 이동할 수 있도록 돕는 주요 탐색 메뉴에 적용됩니다.
      				보조 기술은 <code>navigation</code> 역할을 통해 이 영역이 탐색 목적으로 사용된다는 것을 인식하여,
      				사용자가 사이트의 구조를 쉽게 파악하고 탐색할 수 있도록 도와줍니다.
      			</p>
      			<p className="reference mt_ms">
      				<a href="https://www.w3.org/TR/wai-aria-1.2/#navigation" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">W3C ARIA navigation</a><br />
      				<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/navigation_role" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN ARIA navigation</a><br />
      				<a href="/publishing/html/03-sections/04-nav_element" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">UXKM : nav element</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">기본 설명</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<code>navigation</code> 역할은 웹 페이지에서 사용자가 사이트를 탐색할 수 있도록 돕는 중요한 역할을 합니다.
      					이 역할을 사용할 때는 탐색 링크가 명확히 그룹화되도록 하며, 보조 기술이 이 영역을 탐색 메뉴로 인식하게 해야 합니다.
      </li>
      				<li>
      					<strong>시멘틱 마크업 추천</strong>
      					<p>
      						가능하면 <code>&lt;nav&gt;</code>와 같은 시멘틱 요소를 사용하여 탐색 메뉴를 정의하는 것이 좋습니다.
      						이 방법은 HTML 문서의 의미를 명확히 하고, 접근성을 자연스럽게 향상시킵니다.
      					</p>
      				</li>
      				<li>
      					<strong>중요한 점</strong>
      					<p>
      						페이지에 여러 개의 <code>navigation</code> 역할이 있을 수 있지만, 각각의 탐색 메뉴는 명확히 구분되고,
      						레이블을 통해 그 목적이 명확하게 전달되어야 합니다.
      						이는 사용자 경험을 향상시키고, 보조 기술 사용자가 사이트를 쉽게 탐색할 수 있도록 도와줍니
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">사용 시 주의사항</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>명확한 구분</strong>
      					<p>
      						한 페이지에 여러 개의 <code>navigation</code> 역할을 사용할 수 있지만, 각각의 탐색 메뉴가 명확히 구분되도록 해야 합니다.<br />
      						예를 들어, 상단 내비게이션과 하단 내비게이션의 역할을 분명히 하여 사용자가 쉽게 이해할 수 있도록 해야 합니다.
      					</p>
      				</li>
      				<li>
      					<strong>적절한 요소 사용</strong>
      					<p>
      						가능하면 HTML5의 <code>&lt;nav&gt;</code> 요소를 사용하여 시멘틱하게 탐색 메뉴를 정의하는 것이 좋습니다.
      						그러나 필요에 따라 비시멘틱 요소에 <code>role=&quot;navigation&quot;</code>을 사용할 수도 있습니다.
      					</p>
      				</li>
      				<li>
      					<strong>레이블 제공</strong>
      					<p>
      						여러 개의 <code>navigation</code> 역할이 있는 경우,
      						각 탐색 메뉴의 목적을 명확히 하기 위해 <code>aria-label</code> 또는 <code>aria-labelledby</code> 속성을 사용하여 레이블을 제공하는 것이 좋습니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">상속된 상태 및 속성</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>aria-label</strong>
      					<p>
      						탐색 메뉴의 레이블을 제공하여 보조 기술이 사용자가 어떤 탐색 메뉴에 접근하고 있는지 알 수 있도록 합니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-labelledby</strong>
      					<p>
      						탐색 메뉴의 제목을 참조하여 보조 기술이 탐색 메뉴의 목적을 명확히 전달할 수 있도록 합니다.
      					</p>
      				</li>
      				<li>
      					<strong>기타 상속된 속성</strong>
      					<p>
      						없음. navigation 역할은 탐색 메뉴를 정의하는 데 사용되며, 추가적인 상태나 속성을 요구하지 않습니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">잘못된 예시</h4>
      				<p className="mt_s">
      					이 예시는 <code>navigation</code> 역할을 페이지의 일반적인 콘텐츠에 사용하고 있습니다.
      					<code>navigation</code> 역할은 탐색 링크를 그룹화하는 데만 사용되어야 하며, 일반 콘텐츠에 사용해서는 안 됩니다.
      				</p>
      				
      <CodeBlock title="navigation 역할 / 잘못된 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="navigation">
      							<h1>About Us</h1>
      							<p>Welcome to the About Us page...</p>
      						</div>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">올바른 예시</h4>
      				<p className="mt_s">
      					이 예시는 <code>role=&quot;navigation&quot;</code>을 사용하여 주요 탐색 메뉴를 정의하고,
      					<code>aria-label</code> 속성을 통해 보조 기술 사용자에게 탐색 메뉴의 목적을 명확히 전달하고 있습니다.
      				</p>
      				
      <CodeBlock title="navigation 역할 / 올바른 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="navigation" aria-label="Main navigation">
      							<ul>
      								<li><a href="#home">Home</a></li>
      								<li><a href="#about">About Us</a></li>
      								<li><a href="#services">Services</a></li>
      								<li><a href="#contact">Contact</a></li>
      							</ul>
      						</div>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">(권장) 시멘틱 사용 예시</h4>
      				<p className="mt_s">
      					이 예시는 시멘틱 요소인 <code>&lt;nav&gt;</code>를 사용하여 탐색 메뉴를 정의한 것입니다.
      					<code>&lt;nav&gt;</code> 요소는 기본적으로 <code>navigation</code> 역할을 가지므로, 추가적인 ARIA 속성이 필요 없지만,
      					<code>aria-labelledby</code> 속성을 사용해 탐색 메뉴의 제목을 명확히 하고 있습니다.
      				</p>
      				
      <CodeBlock title="navigation 역할 / 시멘틱 사용 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<nav aria-labelledby="mainnav">
      							<h2 id="mainnav">Main navigation</h2>
      							<ul>
      								<li><a href="#home">Home</a></li>
      								<li><a href="#about">About Us</a></li>
      								<li><a href="#services">Services</a></li>
      								<li><a href="#contact">Contact</a></li>
      							</ul>
      						</nav>`}
      </CodeBlock>

      			</div>
      			
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">region 역할</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<code>region</code> 역할은 웹 페이지의 특정 콘텐츠 영역을 나타내며,
      				이 영역이 사용자에게 중요한 정보나 기능을 제공한다는 것을 보조 기술에 알립니다.
      				<code>region</code> 역할은 보통 <code>aria-labelledby</code> 속성과 함께 사용되어, 이 영역에 대한 명확한 레이블을 제공하고,
      				사용자가 쉽게 이 영역을 탐색하고 이해할 수 있도록 합니다.
      			</p>
      			<p className="reference mt_ms">
      				<a href="https://www.w3.org/TR/wai-aria-1.2/#region" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">W3C ARIA region</a><br />
      				<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/region_role" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN ARIA region</a><br />
      				<a href="/publishing/html/04-grouping/01-main_element" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">UXKM : main element</a><br />
      				<a href="/publishing/html/03-sections/03-section_element" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">UXKM : section element</a><br />
      				<a href="/publishing/html/03-sections/07-aside_element" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">UXKM : aside element</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">기본 설명</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<code>region</code> 역할은 웹 페이지에서 중요한 콘텐츠 영역을 지정하는 데 사용됩니다.
      					이 역할은 보조 기술이 해당 영역을 강조하고, 사용자가 이 영역에 빠르게 접근할 수 있도록 돕습니다.
      </li>
      				<li>
      					<strong>시멘틱 마크업 추천</strong>
      					<p>
      						가능하면 <code>&lt;section&gt;</code>, <code>&lt;aside&gt;</code>, <code>&lt;main&gt;</code> 등 시멘틱 요소를 사용하여 콘텐츠 영역을 정의하는 것이 좋습니다.
      						시멘틱 요소는 본래의 의미를 통해 접근성을 제공하며, 불필요한 <code>region</code> 역할의 사용을 줄일 수 있습니다.
      					</p>
      				</li>
      				<li>
      					<strong>중요한 점</strong>
      					<p>
      						<code>region</code> 역할을 사용할 때는 명확한 레이블을 제공하여 사용자가 이 영역의 목적을 쉽게 이해할 수 있도록 해야 합니다.
      						중요한 정보나 기능을 담고 있는 영역에만 이 역할을 사용하고, 사용을 남발하지 않도록 주의해야 합니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">사용 시 주의사항</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>명확한 레이블 제공</strong>
      					<p>
      						<code>region</code> 역할을 사용할 때는 <code>aria-labelledby</code> 또는 <code>aria-label</code> 속성을 사용하여 이 영역의 목적을 명확히 해야 합니다.
      						이를 통해 보조 기술 사용자가 이 영역을 쉽게 이해하고 탐색할 수 있습니다.
      					</p>
      				</li>
      				<li>
      					<strong>중복 사용 자제</strong>
      					<p>
      						페이지 내에 너무 많은 <code>region</code> 역할을 사용하면, 보조 기술 사용자가 중요한 영역을 식별하는 데 혼란을 겪을 수 있습니다.
      						중요한 정보나 기능에만 사용해야 합니다.
      					</p>
      				</li>
      				<li>
      					<strong>기존 시멘틱 요소와 함께 사용</strong>
      					<p>
      						시멘틱 HTML5 요소(예: <code>&lt;section&gt;</code>, <code>&lt;aside&gt;</code>, <code>&lt;main&gt;</code>)는 이미 특정 콘텐츠를 강조하는 의미를 가지므로,
      						불필요한 경우 <code>region</code> 역할을 추가하지 않는 것이 좋습니다.
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
      						이 속성은 <code>region</code> 역할이 적용된 영역에 대한 제목을 지정합니다. 보조 기술이 이 제목을 사용하여 영역을 설명하게 됩니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-label</strong>
      					<p>
      						이 속성은 <code>region</code> 역할이 적용된 영역에 대한 레이블을 제공하여, 사용자가 이 영역의 목적을 쉽게 이해할 수 있도록 돕습니다.
      					</p>
      				</li>
      				<li>
      					<strong>기타 상속된 속성</strong>
      					<p>
      						없음. <code>region</code> 역할은 중요한 콘텐츠 영역을 나타내는 데 사용되며, 추가적인 상태나 속성을 요구하지 않습니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">잘못된 예시</h4>
      				<p className="mt_s">
      					이 예시는 두 개의 <code>region</code> 역할이 사용되었으나,
      					각각의 <code>region</code>이 어떤 내용을 담고 있는지 명확히 알 수 있는 레이블이 제공되지 않았습니다.
      					또한, 필요 이상으로 많은 <code>region</code> 역할이 사용되었습니다.
      				</p>
      				
      <CodeBlock title="region 역할 / 잘못된 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="region">
      							<h2>Main Content</h2>
      							<p>This is the main content of the page.</p>
      						</div>

      						<div role="region">
      							<h2>Additional Content</h2>
      							<p>This is some additional content.</p>
      						</div>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">올바른 예시</h4>
      				<p className="mt_s">
      					이 예시는 <code>role=&quot;region&quot;</code>을 사용하여 중요한 콘텐츠 영역을 정의하고,
      					<code>aria-labelledby</code> 속성을 통해 해당 영역의 제목을 제공하여 보조 기술이 이 영역을 명확히 설명하고 있습니다.
      				</p>
      				
      <CodeBlock title="region 역할 / 올바른 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="region" aria-labelledby="main-content">
      							<h2 id="main-content">Main Content</h2>
      							<p>This is the main content of the page, where the most important information is displayed.</p>
      						</div>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">(권장) 시멘틱 사용 예시</h4>
      				<p className="mt_s">
      					이 예시는 시멘틱 요소인 <code>&lt;section&gt;</code>을 사용하여 관련 기사 목록을 정의한 것입니다.
      					<code>&lt;section&gt;</code> 요소는 이미 특정 콘텐츠 영역을 나타내는 의미를 가지며,
      					<code>aria-labelledby</code> 속성을 추가하여 이 영역의 제목을 명확히 하고 있습니다.
      					이 방법은 불필요한 <code>region</code> 역할의 사용을 피하면서도 접근성을 보장합니다.
      				</p>
      				
      <CodeBlock title="region 역할 / 시멘틱 사용 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<section aria-labelledby="related-articles">
      							<h2 id="related-articles">Related Articles</h2>
      							<ul>
      								<li><a href="#article1">Understanding ARIA Roles</a></li>
      								<li><a href="#article2">Accessible Web Design Practices</a></li>
      							</ul>
      						</section>`}
      </CodeBlock>

      			</div>
      			
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn" data-conlist="false">search 역할</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				<code>search</code> 역할은 웹 페이지에서 검색 기능을 제공하는 영역을 나타냅니다.
      				이 역할은 사용자가 사이트나 애플리케이션 내에서 특정 정보를 검색할 수 있는 기능을 명확하게 지정합니다.
      				보조 기술은 <code>search</code> 역할을 통해 이 영역이 검색 목적을 가진다는 것을 인식하고, 사용자에게 이를 알립니다.
      			</p>
      			<p className="reference mt_ms">
      				<a href="https://www.w3.org/TR/wai-aria-1.2/#search" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">W3C ARIA search</a><br />
      				<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/search_role" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN ARIA search</a><br />
      				<a href="/publishing/html/09-forms/03-input_element_part1#inner_link:search" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">UXKM : input="search" element</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">기본 설명</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<code>search</code> 역할은 웹 페이지에서 검색 기능을 제공하는 영역을 나타냅니다.
      					이 역할을 사용할 때는 검색 기능이 포함된 UI 요소에만 적용해야 하며, 검색 영역이 명확히 레이블링되도록 설정해야 합니다.
      </li>
      				<li>
      					<strong>시멘틱 마크업 추천</strong>
      					<p>
      						가능하면 HTML5 시멘틱 요소와 속성(예: <code>&lt;input type="search"&gt;</code>, <code>&lt;form&gt;</code>)을 사용하여 검색 기능을 정의하는 것이 좋습니다.
      						이는 코드의 의미를 명확히 하고, 접근성을 자연스럽게 향상시킵니다.
      					</p>
      				</li>
      				<li>
      					<strong>중요한 점</strong>
      					<p>
      						<code>search</code> 역할은 페이지 내에서 검색 인터페이스의 목적을 명확히 전달하는 데 사용되며,
      						사용자가 쉽게 접근하고 이해할 수 있도록 설정해야 합니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">사용 시 주의사항</h3>
      			<ul className="mt_m dot_lst info_lst gap-column-important-s">
      				<li>
      					<strong>적절한 레이블 제공</strong>
      					<p>
      						<code>search</code> 역할을 사용할 때는 검색 영역에 명확한 레이블을 제공하여,
      						사용자가 이 영역이 검색 기능임을 쉽게 인식할 수 있도록 해야 합니다.
      					</p>
      				</li>
      				<li>
      					<strong>검색 기능과 일치하게 사용</strong>
      					<p>
      						이 역할은 검색 기능이 포함된 영역에만 사용해야 하며, 검색과 무관한 다른 콘텐츠 영역에 사용해서는 안 됩니다.
      					</p>
      				</li>
      				<li>
      					<strong>페이지 내 유일한 검색 영역</strong>
      					<p>
      						페이지 내에서 검색 기능이 여러 개 있을 수 있지만, 각 검색 기능이 명확하게 구분되도록 설정해야 합니다.
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
      						검색 영역에 대한 제목을 참조합니다. 이 속성을 통해 보조 기술이 사용자가 검색 인터페이스임을 명확히 이해할 수 있도록 돕습니다.
      					</p>
      				</li>
      				<li>
      					<strong>aria-label</strong>
      					<p>
      						검색 영역에 대한 레이블을 제공하여, 사용자가 검색 영역의 목적을 쉽게 이해할 수 있도록 합니다.
      					</p>
      				</li>
      				<li>
      					<strong>기타 상속된 속성</strong>
      					<p>
      						없음. <code>search</code> 역할은 검색 기능을 나타내는 데 사용되며, 추가적인 상태나 속성을 요구하지 않습니다.
      					</p>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue code_title">예시</h3>

      			<div className="mt_ml indent">
      				<h4 className="ml_mn">잘못된 예시</h4>
      				<p className="mt_s">
      					이 예시는 <code>search</code> 역할을 검색 기능이 아닌 일반 콘텐츠 영역에 사용하고 있습니다.
      					<code>search</code> 역할은 검색 인터페이스에만 사용해야 하며, 일반적인 콘텐츠에 적용해서는 안 됩니다.
      				</p>
      				
      <CodeBlock title="search 역할 / 잘못된 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="search">
      							<h2>Our Latest Articles</h2>
      							<ul>
      								<li><a href="#article1">Article 1</a></li>
      								<li><a href="#article2">Article 2</a></li>
      							</ul>
      						</div>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">올바른 예시</h4>
      				<p className="mt_s">
      					이 예시는 <code>role=&quot;search&quot;</code>을 사용하여 검색 인터페이스를 정의하고 있습니다.
      					검색 입력 필드와 검색 버튼이 그룹화되어 있으며, 사용자가 검색 기능임을 명확히 인식할 수 있습니다.
      				</p>
      				
      <CodeBlock title="search 역할 / 올바른 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<div role="search">
      							<label for="site-search">Search the site:</label>
      							<input type="search" id="site-search" name="q" aria-label="Search through site content">
      							<button type="submit">Search</button>
      						</div>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">시멘틱 사용 예시</h4>
      				<p className="mt_s">
      					이 예시는 시멘틱 요소인 <code>&lt;form&gt;</code>에 <code>role=&quot;search&quot;</code>를 명시적으로 지정하여 검색 인터페이스를 정의한 것입니다.
      					추가적으로 <code>aria-label</code> 속성을 사용해 검색 영역의 목적을 명확히 하고 있습니다.
      				</p>
      				
      <CodeBlock title="search 역할 / 시멘틱 사용 예시" language="javascript" className="uk_gist_code_box mt_m">
      {`<form role="search" aria-label="Site-wide search">
      							<label for="search">Search:</label>
      							<input type="search" id="search" name="search">
      							<button type="submit">Search</button>
      						</form>`}
      </CodeBlock>

      			</div>
      			

      			<div className="mt_l indent">
      				<h4 className="ml_mn">(권장) HTML5 시멘틱 마크업 사용 예시</h4>
      				<p className="mt_s">
      					이 예시는 시멘틱 요소인 <code>&lt;form&gt;</code>과 <code>&lt;input type="search"&gt;</code>를 사용하여 검색 기능을 정의한 것입니다.
      					HTML5 시멘틱 마크업은 기본적으로 검색 역할을 수행하므로, 추가적인 ARIA 속성이 필요하지 않습니다.
      				</p>
      				
      <CodeBlock title="search 역할 / 시멘틱 마크업" language="javascript" className="uk_gist_code_box mt_m">
      {`<form>
      							<label for="search">Search:</label>
      							<input type="search" id="search" name="search">
      							<button type="submit">Search</button>
      						</form>`}
      </CodeBlock>

      			</div>
      			
      		</article>
      		
      	</section>
      	
      	
      	<figure className="img_figure mt_l">
      		<img src={`${IMG.WAI_ARIA}/02_wai-aria_role_04.png`} alt="랜드마크 역할(Landmark Roles)" />
      		<figcaption>
      			<b>[랜드마크 역할(Landmark Roles)]</b><br />
      			<a href={`${IMG.WAI_ARIA}/02_wai-aria_role_04.png`} className="mt_ms box_link" title="새창 열림" target="_blank" rel="noreferrer">크게 보기</a>
      		</figcaption>
      	</figure>


      <footer className="reference_box">
      	<strong className="tit">랜드마크 역할(Landmark Roles) | WAI-ARIA 역할 참조</strong>
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

export default RolesLandmarkPage
