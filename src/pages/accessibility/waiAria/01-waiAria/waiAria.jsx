import { useAccessibilityPageMeta } from '@/hooks/useAccessibilityPageMeta.js'
import { IMG } from '@/config/path'
import CodeBlock from '@/components/code/CodeBlock'

const PAGE_LAYOUT = {
  mainClass: "waiAria",
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
  title: "WAI-ARIA란?",
  description: "WAI-ARIA (Web Accessibility Initiative - Accessible Rich Internet Applications)의 역할(Role)은 웹 콘텐츠와 웹 애플리케이션의 접근성을 향상시키기 위해 사용되는 속성입니다. 이 페이지에서는 WAI-ARIA 역사, 중요성, 주요 역할, 핵심 목표에 대해 소개합니다.",
  keyword: "Accessibility, a11y, wcag, kwcag, macag, kiosk, 접근성, 웹 콘텐츠 접근성, 한국형 웹 콘텐츠 접근성, 모바일 앱 접근성, 무인정보단밀기 접근성",
}

function WaiAriaPage() {
  useAccessibilityPageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  })


  return (
    <>









      	<blockquote className="uk_note mt_xxl" role="note">
      		<strong className="sound_only">요약 설명</strong>
      		<p>
      			WAI-ARIA (Web Accessibility Initiative - Accessible Rich Internet Applications)는 웹 콘텐츠와 애플리케이션이
      			장애인에게 더 접근 가능하도록 돕는 W3C의 표준으로,
      			보조 기술이 웹 페이지를 이해하고 상호작용할 수 있도록 역할, 상태, 속성을 정의합니다.
      		</p>
      		<p className="mt_ms">
      			
      			ARIA의 첫 번째 규칙은, 기본적인 HTML 요소들이 이미 사용자 접근성을 위한 기능을 잘 제공하고 있다면,
      			굳이 ARIA를 사용해서 바꾸지 말고 그대로 사용하는 것입니다.<br />
      			<b className="t_black">즉, HTML 자체의 접근성 기능을 먼저 활용해야 합니다.</b>
      		</p>
      	</blockquote>

      	<figure className="mt_xxl img_figure">
      		<figure>
      			<img src={`${IMG.A11Y}/7_1_a11y_1.png`} alt="Web Accessibility Initiative" className="max-w700" />
      			<figcaption>
      				[이미지 출처 : How to use WAI-ARIA]
      			</figcaption>
      		</figure>
      		<figure className="mt_ml">
      			<img src={`${IMG.A11Y}/7_1_a11y_2.png`} alt="role 속성이 적용된 예시" className="max-w700" />
      			<figcaption>
      				[이미지 출처 : pressbooks WAI-ARIA Landmarks]
      			</figcaption>
      		</figure>
      	</figure>

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">WAI-ARIA 핵심 목표 및 기능 요약</h2>

      		<ul className="mt_l dot_lst gap-column-sm">
      			<li>
      				동적인 콘텐츠와 고급 사용자 인터페이스 컨트롤을 위한 웹 접근성 표준으로,
      				스크린 리더 사용자를 포함한 보조 기술 사용자들이 웹 애플리케이션을 효과적으로 사용할 수 있도록 설계되었습니다.
      			</li>
      			<li>
      				HTML에 추가적인 속성을 추가해 접근성을 높이고, 이러한 속성들은 웹 요소의 역할, 상태, 속성을 설명합니다.
      				이를 통해 보조 기술이 웹 콘텐츠를 더 잘 이해하고 사용자에게 전달할 수 있도록 돕습니다.
      				결과적으로 복잡한 웹 애플리케이션에서도 모든 사용자가 원활하게 상호작용할 수 있는 환경을 제공합니다.
      			</li>
      		</ul>
      		<figure className="mt_l img_figure">
      			<a href="https://www.w3.org/TR/wai-aria-1.1/img/rdf_model.svg" title="새창 열림" target="_blank" rel="noreferrer">
      				<img src={`${IMG.A11Y}/7_1_rdf_model.svg`} alt="Class diagram of the relationships described in the role data model." className="max-w1000" />
      			</a>
      			<figcaption>
      				<b>[역할 데이터 모델에 설명된 관계 클래스 다이어그램]</b><br />
      				<a href="https://www.w3.org/TR/wai-aria-1.1/img/rdf_model.svg" className="mt_ms box_link" title="새창 열림" target="_blank" rel="noreferrer">크게 보기</a>
      			</figcaption>
      		</figure>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">WAI-ARIA의 연혁 및 발전</h2>

      		<ol className="mt_l ol_lst info_lst gap-column-ml">
      			<li className="weight-600-before">
      				<strong>2004년: 초기</strong>
      				<p>
      					WAI-ARIA의 개념은 2004년 W3C에서 처음 논의되었습니다.
      					당시 웹 애플리케이션이 점점 더 복잡해지면서, 접근성을 보장할 수 있는 새로운 방법이 필요하다는 인식이 있었습니다.
      				</p>
      			</li>
      			<li className="weight-600-before">
      				<strong>2006년: 첫 번째 공개 작업 초안 <i className="t_blue">(Working Draft)</i></strong>
      				<ul className="dot_lst">
      					<li>
      						WAI-ARIA의 첫 번째 공개 작업 초안 발표하였고,
      						이 초안은 복잡한 웹 애플리케이션에서 동적 콘텐츠와 고급 위젯을 정의하는 방법을 설명합니다.
      					</li>
      					<li>
      						이 초기 버전에서는 기본적인 역할(roles), 속성(properties), 상태(states) 등을 정의했습니다.
      					</li>
      				</ul>
      			</li>
      			<li className="weight-600-before">
      				<strong>2009년: WAI-ARIA 1.0 발표</strong>
      				<ul className="dot_lst">
      					<li>
      						WAI-ARIA 1.0의 첫 번째 권고 초안이 W3C에서 발표되었으며, 이 버전은 웹 접근성을 향상시키기 위한 표준을 제시했습니다.
      					</li>
      					<li>
      						새로운 역할(Roles), 속성(Properties), 상태(States)을 정의했습니다.
      					</li>
      					<li>
      						사용자 인터페이스 구성 요소(UI Components)의 접근성을 정의하는 방법을 제시합니다.
      					</li>
      				</ul>
      			</li>
      			<li className="weight-600-before">
      				<strong>2014년: WAI-ARIA 1.0 권고안 <i className="t_blue">(Recommendation)</i></strong>
      				<p>
      					WAI-ARIA 1.0이 W3C의 권고안으로 공식 발표되었으며,
      					이 버전은 웹 접근성 커뮤니티에서 널리 채택되었고, 다양한 브라우저와 보조 기술에서 지원되기 시작했습니다.
      				</p>
      			</li>
      			<li className="weight-600-before">
      				<strong>2017년: WAI-ARIA 1.1 발표</strong>
      				<ul className="dot_lst">
      					<li>
      						WAI-ARIA 1.1 버전이 발표되었습니다. 이 버전은 WAI-ARIA 1.0의 개선 및 확장을 포함하며,
      						사용자 경험을 개선하기 위한 새로운 롤과 속성들이 추가되었습니다.
      					</li>
      					<li>
      						기존 역할(Role)과 속성(Property)에 대한 명세가 추가로 개선되었습니다.
      					</li>
      					<li>
      						새로운 역할(Role) 및 속성(Property)이 도입되었습니다.
      					</li>
      					<li>
      						스크린 리더와 같은 보조 기술과의 호환성 향상되었습니다.
      					</li>
      				</ul>
      			</li>
      			<li className="weight-600-before">
      				<strong>2021년: WAI-ARIA 1.2 발표</strong>
      				<ul className="dot_lst">
      					<li>
      						WAI-ARIA 1.2가 권고안으로 발표되었습니다. 이 버전은 이전 버전들에서 받은 피드백을 반영하여, 보다 정교한 접근성 요구 사항을 추가하였습니다.
      					</li>
      					<li>
      						사용자 인터페이스 구성 요소의 접근성을 더 세밀하게 조정할 수 있도록 복합 위젯에 대한 정의가 추가되었습니다.
      					</li>
      					<li>
      						사용자 정의 위젯에 대한 접근성 지원을 강화했습니다.
      					</li>
      					<li>
      						라이브 영역(live regions)에 대한 개선된 지침을 제공하여, 동적 콘텐츠가 사용자에게 실시간으로 더 효과적으로 전달될 수 있도록 하였습니다.
      					</li>
      				</ul>
      			</li>
      			<li className="weight-600-before">
      				<strong>현재 ~ : WAI-ARIA 1.3</strong>
      				<p>
      					WAI-ARIA의 다음 버전인 1.3에 대한 논의가 진행 중이며, 웹 접근성 표준을 지속적으로 개선하는 것이 목표입니다.
      					WAI-ARIA 1.3은 사용자 정의 위젯에 대한 지원을 강화하고, 접근성 테스트 및 지원의 자동화를 목표로 할 가능성이 있습니다.<br />
      					이러한 개선은 웹 애플리케이션의 접근성을 더욱 향상시키고, 다양한 사용자들에게 보다 나은 경험을 제공하는 데 기여할 것입니다.
      				</p>
      			</li>
      		</ol>

      		<figure className="img_figure mt_l">
      			<img src={`${IMG.WAI_ARIA}/wai-aria_history.png`} alt="WAI-ARIA의 연혁 및 발전" />
      			<figcaption>
      				<b>[WAI-ARIA의 연혁 및 발전]</b><br />
      				<a href={`${IMG.WAI_ARIA}/wai-aria_history.png`} className="mt_ms box_link" title="새창 열림" target="_blank" rel="noreferrer">크게 보기</a>
      			</figcaption>
      		</figure>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">WAI-ARIA의 중요성</h2>

      		<ol className="mt_l ol_lst info_lst gap-column-ml">
      			<li className="weight-600-before">
      				<strong>웹 접근성 표준화</strong>
      				<p>
      					WAI-ARIA는 동적 콘텐츠와 복잡한 사용자 인터페이스를 포함하는 웹 애플리케이션의 접근성을 보장하기 위해 필수적인 기술 표준입니다.
      				</p>
      			</li>
      			<li className="weight-600-before">
      				<strong>보조 기술과의 통합</strong>
      				<p>
      					WAI-ARIA는 스크린 리더, 화면 확대 소프트웨어 등 보조 기술이 웹 콘텐츠를 보다 정확하게 해석하고 사용자에게 전달할 수 있도록 돕습니다.
      				</p>
      			</li>
      			<li className="weight-600-before">
      				<strong>포용적인 웹 환경 조성</strong>
      				<ul className="dot_lst">
      					<li>
      						WAI-ARIA는 모든 사용자가 웹 애플리케이션을 사용할 수 있도록 보장하여 포용적인 웹 환경을 조성합니다.
      					</li>
      					<li>
      						WAI-ARIA를 웹사이트와 애플리케이션에 적절히 적용하면,
      						장애를 가진 사용자를 포함한 모든 사용자가 웹 콘텐츠를 더 쉽게 접근하고 사용할 수 있습니다.
      					</li>
      				</ul>
      			</li>
      		</ol>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">WAI-ARIA 적용 시 주의사항</h2>

      		<ol className="mt_l ol_lst info_lst gap-column-ml">
      			<li className="weight-600-before">
      				<strong>WAI-ARIA의 남용 방지</strong>
      				<ul className="dot_lst">
      					<li>
      						이미 접근성이 내장된 네이티브 HTML 요소에 불필요하게 WAI-ARIA를 추가하지 않도록 주의해야 합니다.<br />
      						WAI-ARIA는 보조 기술이 네이티브 HTML 요소의 접근성 기능을 이해하지 못할 때 필요하며,
      						네이티브 HTML 요소는 본래 접근성을 제공하므로, 이를 변경하거나 추가적인 WAI-ARIA 속성을 사용하는 것은 오히려 혼란을 초래할 수 있습니다.
      					</li>
      					<li>
      						예) <code>&lt;button&gt;</code> 요소는 이미 접근성이 확보되어 있으므로 추가적인 <code>role=&quot;button&quot;</code> 속성이 불필요합니다.
      					</li>
      				</ul>
      			</li>
      			<li className="weight-600-before">
      				<strong>테스트 필수</strong>
      				<p>
      					다양한 보조 기술(스크린 리더, 키보드 내비게이션 등)과 다양한 브라우저에서 충분히 테스트하여 WAI-ARIA 적용이 의도한 대로 작동하는지 확인해야 합니다.
      				</p>
      			</li>
      			<li className="weight-600-before">
      				<strong>웹 표준 준수</strong>
      				<p>
      					WAI-ARIA를 적용할 때는 웹 표준을 준수하고, 가이드라인에 따라 역할(role), 속성(property), 상태(state)를 올바르게 사용하는 것이 중요합니다.
      				</p>
      			</li>
      		</ol>
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">WAI-ARIA의 주요 역할(Role)</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				WAI-ARIA에서 역할(Role)은 특정 HTML 요소가 웹 페이지 내에서 어떤 기능이나 역할을 하는지를 정의하며,
      				스크린 리더와 같은 보조 기술이 이 정보를 활용하여 사용자가 웹 콘텐츠를 더 쉽게 이해하고 탐색할 수 있도록 돕습니다.
      			</p>
      			<p className="mt_ms">
      				대부분의 시멘틱 마크업 요소들은 기본적인 역할(Role)을 기본적으로 지원합니다.
      				그러나 레거시 시스템이나 특정 요구 사항으로 인해 <code>&lt;div&gt;</code> 요소를 사용해야 하는 경우,
      				WAI-ARIA를 통해 이 요소에 동일한 접근성 역할을 명시적으로 부여하여 사용할 수 있습니다.
      			</p>
      			<p className="mt_ms reference">
      				<a href="https://www.w3.org/TR/wai-aria/#roles" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">Accessible Rich Internet Applications (WAI-ARIA) 1.2 - Roles Model</a><br />
      				<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN WAI-ARIA 역할</a>
      			</p>
      		</blockquote>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">ARIA 역할 유형</h3>

      			<figure className="img_figure mt_l">
      				<img src={`${IMG.WAI_ARIA}/wai-aria_role.png`} alt="ARIA 역할 유형" />
      				<figcaption>
      					<b>[ARIA 역할 유형]</b><br />
      					<a href={`${IMG.WAI_ARIA}/wai-aria_role.png`} className="mt_ms box_link" title="새창 열림" target="_blank" rel="noreferrer">크게 보기</a>
      				</figcaption>
      			</figure>

      			
      			<ol className="mt_ml ol_lst info_lst gap-column-ml">
      				<li className="weight-600-before t_blue_before">
      					<strong className="t_blue">Abstract Roles (추상적 역할)</strong>
      					<ul className="dot_lst">
      						<li>
      							브라우저에서만 사용되는 요소로, 문서 구성 및 간소화에 도움을 줍니다.
      							개발자가 HTML 마크업을 작성할 때는 사용하지 않아야 하며, 참조용으로만 포함됩니다.
      						</li>
      						<li>
      							주요 예시 : <code>command</code>, <code>composite</code>, <code>input</code>, <code>landmark</code>, <code>range</code>,
      							<code>roletype</code>, <code>section</code>, <code>sectionhead</code>, <code>select</code>, <code>structure</code>, <code>widget</code> 및 <code>window</code>
      						</li>
      					</ul>
      				</li>
      				<li className="weight-600-before t_blue_before">
      					<strong className="t_blue">Widget Roles (위젯 역할)</strong>
      					<ul className="dot_lst">
      						<li>
      							UI 요소의 상호작용을 정의하는 역할로, 버튼, 슬라이더, 탭 등과 같은 사용자가 직접 조작할 수 있는 위젯을 포함합니다.
      							Widget Roles는 보조 기술이 이러한 요소들의 기능과 상태를 정확히 이해하고 사용자에게 올바르게 전달하도록 지원합니다.
      						</li>
      						<li>
      							주요 예시 : <code>button</code>, <code>checkbox</code>, <code>gridcell</code>, <code>link</code>, <code>menuitem</code>, <code>menuitemcheckbox</code>,
      							<code>menuitemradio</code>, <code>option</code>, <code>progressbar</code>, <code>radio</code>, <code>textbox</code>
      						</li>
      					</ul>
      				</li>
      				<li className="weight-600-before t_blue_before">
      					<strong className="t_blue">Document Structure (문서 구조 역할)</strong>
      					<ul className="dot_lst">
      						<li>
      							문서 구조 역할은 콘텐츠의 섹션에 대해 구조적 설명을 제공하는 데 사용됩니다.
      							현대 브라우저는 시맨틱 HTML 요소를 지원하므로, 이러한 역할의 대부분은 더 이상 필요하지 않습니다.
      							그러나, 프리젠테이션, 도구 모음, 도구 설명 역할과 같이 HTML에 해당하는 역할이 없는 경우,
      							보조 기술에 문서 구조에 대한 정보를 제공하는 데 유용합니다.
      						</li>
      						
      						<li>
      							주요 예시 : <code>toolbar</code>, <code>tooltip</code>, <code>feed</code>, <code>math</code>, <code>presentation / none</code>,
      							<code>note</code>, <code>application</code>, <code>directory</code>, <code>document</code>, <code>group</code>
      						</li>
      						<li>
      							시멘틱 예시 :<br />
      							<code>article (&lt;article&gt;)</code><br />
      							<code>cell (&lt;td&gt;)</code><br />
      							<code>columnheader (&lt;th scope=”col”&gt;)</code><br />
      							<code>definition (&lt;dfn&gt;)</code><br />
      							<code>figure (&lt;figure&gt;)</code><br />
      							<code>heading (h1~h6)</code><br />
      							<code>img (&lt;img&gt; or &lt;picture&gt;)</code><br />
      							<code>list (&lt;ul&gt; or &lt;ol&gt;)</code><br />
      							<code>listitem (&lt;li&gt;)</code><br />
      							<code>meter (&lt;meter&gt;)</code><br />
      							<code>row (&lt;tr&gt; with &lt;table&gt;)</code><br />
      							<code>rowgroup (&lt;thead&gt;, &lt;tfoot&gt; and &lt;tbody&gt;)</code><br />
      							<code>rowheader (&lt;th scope=”row”&gt;)</code><br />
      							<code>separator (&lt;hr&gt;)</code><br />
      							<code>table (use &lt;table&gt;)</code><br />
      							<code>term (use &lt;dfn&gt;)</code>
      						</li>
      					</ul>
      				</li>
      				<li className="weight-600-before t_blue_before">
      					<strong className="t_blue">Landmark Roles (랜드마크 역할)</strong>
      					<ul className="dot_lst">
      						<li>
      							랜드마크 역할은 웹 페이지의 주요 구역을 식별하고 구조를 정의합니다.
      							페이지의 각 섹션에 레이블을 붙이면, 시각적으로 나타나는 구조적 정보가 프로그래밍 방식으로 표현되어,
      							사용자가 페이지를 보다 효율적으로 탐색할 수 있게 합니다.
      						</li>
      						<li>
      							시멘틱 예시 :<br />
      							<code>banner (document &lt;header&gt;)</code><br />
      							<code>complementary (&lt;aside&gt;)</code><br />
      							<code>contentinfo (document &lt;footer&gt;)</code><br />
      							<code>form (&lt;form&gt;)</code><br />
      							<code>main (&lt;main&gt;)</code><br />
      							<code>navigation (&lt;nav&gt;)</code><br />
      							<code>region (&lt;section&gt;)</code><br />
      							<code>search (&lt;search&gt;)</code>
      						</li>
      					</ul>
      				</li>
      				<li className="weight-600-before t_blue_before">
      					<strong className="t_blue">Live Region Roles (라이브 영역 역할)</strong>
      					<ul className="dot_lst">
      						<li>
      							동적으로 변경되는 콘텐츠를 사용자에게 실시간으로 알리기 위해 사용하는 역할입니다.
      							시각적으로는 변화가 눈에 띄지만, 저시력 또는 시각 장애가 있는 사용자는 스크린 리더와 같은 보조 기술을 통해
      							콘텐츠의 업데이트를 확인할 수 있도록 해야 합니다. 이러한 역할은 보조 기술이 콘텐츠의 변경 사항을 사용자에게
      							정확하게 전달할 수 있도록 돕습니다.
      						</li>
      						<li>
      							주요 예시 : <code>alert</code>, <code>log</code>, <code>marquee</code>, <code>status</code>, <code>timer</code>
      						</li>
      					</ul>
      				</li>
      				<li className="weight-600-before t_blue_before">
      					<strong className="t_blue">Window Roles (윈도우 역할)</strong>
      					<ul className="dot_lst">
      						<li>
      							사용자 인터페이스의 창 요소를 정의하는 역할로, 주로 대화 상자, 모달 창, 툴팁과 같은 UI 구성 요소를 나타냅니다.
      							이러한 요소들은 웹 애플리케이션에서 중요한 정보를 전달하거나 사용자와 상호작용할 때 사용되며,
      							보조 기술이 이들 요소를 인식하고 사용자에게 적절하게 알릴 수 있도록 돕습니다.
      						</li>
      						<li>
      							주요 예시 : <code>alertdialog</code>, <code>dialog</code>, <code>tooltip</code>
      						</li>
      					</ul>
      				</li>
      			</ol>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">자주 사용되는 역할(Role) 예시</h3>

      			<ol className="mt_ml ol_lst info_lst gap-column-l">
      				<li className="weight-600-before t_blue_before">
      					<strong className="t_blue">Role: button</strong>
      					<p>
      						요소를 “버튼”으로(클릭 가능한 요소) 인식합니다.
      					</p>
      					
      <CodeBlock title="Role: button" language="javascript" className="uk_gist_code_box mt_ms">
      {`<!-- 기본 시멘틱 마크업 예시 -->
      							<button type="button">UXKM</button>

      							<!-- role 부여 예시 -->
      							<div role="button" tabindex="0">UXKM</div>`}
      </CodeBlock>

      				</li>
      				

      				<li className="weight-600-before t_blue_before">
      					<strong className="t_blue">Role: alert</strong>
      					<ul className="dot_lst">
      						<li>
      							중요한 메시지를 사용자에게 즉시 전달해야 할 때 사용됩니다. 스크린 리더는 이러한 요소가 등장할 때 자동으로 읽어주어,
      							시각 장애 사용자에게 중요한 정보를 빠르게 전달할 수 있도록 돕습니다.
      						</li>
      						<li>
      							폼 제출 시 오류 메시지를 표시할 때 유용합니다.
      						</li>
      					</ul>
      					
      <CodeBlock title="Role: alert" language="javascript" className="uk_gist_code_box mt_ms">
      {`<div role="alert">중요한 알림 메시지입니다!</div>`}
      </CodeBlock>

      				</li>
      				

      				<li className="weight-600-before t_blue_before">
      					<strong className="t_blue">Role: dialog</strong>
      					<p>
      						대화 상자(Dialog)는 주로 모달 창에서 사용되며, 사용자가 상호작용할 수 있는 별도의 창을 나타냅니다.
      						이 역할은 사용자에게 중요한 정보나 선택을 요구하는 경우에 사용되며,
      						스크린 리더와 같은 보조 기술이 대화 상자를 인식하고 알리도록 돕습니다.
      					</p>
      					
      <CodeBlock title="Role: dialog" language="javascript" className="uk_gist_code_box mt_ms">
      {`<div role="dialog" aria-labelledby="dialogTitle">
      								<h2 id="dialogTitle">Confirm Action</h2>
      								<p>Are you sure you want to proceed?</p>
      							</div>`}
      </CodeBlock>

      				</li>
      				

      				<li className="weight-600-before t_blue_before">
      					<strong className="t_blue">Role: heading</strong>
      					<p>
      						섹션 제목은 콘텐츠의 계층 구조를 정의하는 데 사용되며, <code>aria-level</code> 속성을 통해 제목의 레벨을 설정할 수 있습니다.
      						이 역할은 보조 기술이 제목의 중요도와 위치를 이해하고, 사용자가 콘텐츠를 더 쉽게 탐색할 수 있도록 돕습니다.
      					</p>
      					
      <CodeBlock title="Role: heading" language="javascript" className="uk_gist_code_box mt_ms">
      {`<!-- 기본 시멘틱 마크업 예시 -->
      							<h1>Heading h1</h1>

      							<!-- role 부여 예시 -->
      							<div role="heading" aria-level="1">Heading h1</div>`}
      </CodeBlock>

      				</li>
      				

      				<li className="weight-600-before t_blue_before">
      					<strong className="t_blue">Role: navigation</strong>
      					<p>
      						페이지 내의 내비게이션 링크 그룹을 정의하는 역할을 제공하며, 주로 메뉴, 탐색 바 등에서 사용됩니다.
      						이 역할을 통해 보조 기술은 내비게이션 링크의 구조를 이해하고, 사용자가 웹 페이지의 다양한 섹션으로 쉽게 이동할 수 있도록 돕습니다.
      					</p>
      					
      <CodeBlock title="Role: navigation" language="javascript" className="uk_gist_code_box mt_ms">
      {`<!-- 기본 시멘틱 마크업 예시 -->
      							<nav>
      								<ul>
      									<li><a href="#home">Home</a></li>
      									<li><a href="#about">About</a></li>
      								</ul>
      							</nav>

      							<!-- role 부여 예시 -->
      							<div role="navigation">
      								<ul>
      									<li><a href="#home">Home</a></li>
      									<li><a href="#about">About</a></li>
      								</ul>
      							</div>`}
      </CodeBlock>

      				</li>
      				

      				<li className="weight-600-before t_blue_before">
      					<strong className="t_blue">Role: tab</strong>
      					<p>
      						탭 인터페이스에서 각 탭 요소를 정의하며, tablist와 함께 사용됩니다.
      						이 역할은 사용자가 여러 탭 사이를 전환할 때 각 탭의 기능을 이해할 수 있도록 돕습니다.
      						<code>tablist</code>는 탭의 그룹을 정의하고, 각 탭 요소는 그 그룹 내의 개별 탭을 나타냅니다.
      					</p>
      					
      <CodeBlock title="Role: tab" language="javascript" className="uk_gist_code_box mt_ms">
      {`<div role="tablist">
      								<div role="tab" tabindex="0" aria-selected="true">Tab 1</div>
      								<div role="tab" tabindex="-1" aria-selected="false">Tab 2</div>
      							</div>`}
      </CodeBlock>

      				</li>
      				

      				<li className="weight-600-before t_blue_before">
      					<strong className="t_blue">Role: tabpanel</strong>
      					<p>
      						탭이 선택되었을 때 표시되는 콘텐츠 패널을 정의합니다.
      						이 역할은 각 탭에 해당하는 콘텐츠 영역을 나타내며, 사용자가 탭을 클릭할 때 해당 패널의 내용을 확인할 수 있도록 합니다.
      					</p>
      					
      <CodeBlock title="Role: tabpanel" language="javascript" className="uk_gist_code_box mt_ms">
      {`<div role="tabpanel" aria-labelledby="tab1">Content for Tab 1</div>`}
      </CodeBlock>

      				</li>
      				

      				<li className="weight-600-before t_blue_before">
      					<strong className="t_blue">Role: header</strong>
      					<p>
      						<code>&lt;header&gt;</code> 요소의 역할을 수행하는 <code>&lt;div&gt;</code> 요소에는 <code>role=&quot;banner&quot;</code> 속성을 추가하여
      						이 요소가 페이지의 주요 헤더 역할을 함을 명시합니다.
      						이 역활은 스크린 리더와 같은 보조 기술이 이 <code>&lt;div&gt;</code>가 페이지의 상단 헤더로 인식하도록 도와줍니다.
      					</p>
      					
      <CodeBlock title="Role: header" language="javascript" className="uk_gist_code_box mt_ms">
      {`<!-- 기본 시멘틱 마크업 예시 -->
      							<header>
      								<h1>Website Title</h1>
      								<nav>
      									<ul>
      										<li><a href="#home">Home</a></li>
      										<li><a href="#about">About</a></li>
      									</ul>
      								</nav>
      							</header>

      							<!-- role 부여 예시 - header 역할을 하는 div -->
      							<div role="banner">
      								<h1>Website Title</h1>
      								<nav>
      									<ul>
      										<li><a href="#home">Home</a></li>
      										<li><a href="#about">About</a></li>
      									</ul>
      								</nav>
      							</div>`}
      </CodeBlock>

      				</li>
      				

      				<li className="weight-600-before t_blue_before">
      					<strong className="t_blue">Role: main</strong>
      					<p>
      						<code>&lt;main&gt;</code> 요소의 역할을 수행하는 <code>&lt;div&gt;</code> 요소에는 <code>role=&quot;main&quot;</code> 속성을 추가하여
      						이 요소가 페이지의 주요 콘텐츠 영역을 나타내는 역할을 한다고 명시합니다.
      						이렇게 설정하면 보조 기술이 이 <code>&lt;div&gt;</code>를 페이지의 주요 콘텐츠로 인식하고
      						사용자가 페이지의 중심 콘텐츠를 쉽게 찾을 수 있도록 도와줍니다.
      					</p>
      					
      <CodeBlock title="Role: main" language="javascript" className="uk_gist_code_box mt_ms">
      {`<!-- 기본 시멘틱 마크업 예시 -->
      							<header>
      								<h1>Website Title</h1>
      								<nav>
      									<ul>
      										<li><a href="#home">Home</a></li>
      										<li><a href="#about">About</a></li>
      									</ul>
      								</nav>
      							</header>

      							<!-- role 부여 예시 - main 역할을 하는 div -->
      							<div role="banner">
      								<h1>Website Title</h1>
      								<nav>
      									<ul>
      										<li><a href="#home">Home</a></li>
      										<li><a href="#about">About</a></li>
      									</ul>
      								</nav>
      							</div>`}
      </CodeBlock>

      				</li>
      				

      				<li className="weight-600-before t_blue_before">
      					<strong className="t_blue">Role: section</strong>
      					<p>
      						<code>&lt;section&gt;</code> 요소의 역할을 수행하는 <code>&lt;div&gt;</code> 요소에 <code>role=&quot;region&quot;</code> 속성을 추가하고,
      						<code>aria-labelledby</code> 속성을 사용하여 섹션 제목을 참조할 수 있습니다.
      						이렇게 하면 보조 기술이 해당 <code>&lt;div&gt;</code>를 섹션으로 인식하고, 제목과 함께 관련 콘텐츠를 명확하게 설명할 수 있습니다.
      					</p>
      					
      <CodeBlock title="Role: section" language="javascript" className="uk_gist_code_box mt_ms">
      {`<!-- 기본 시멘틱 마크업 예시 -->
      							<section>
      								<h2>섹션 제목</h2>
      								<p>이 섹션에 대한 내용입니다.</p>
      							</section>

      							<!-- role 부여 예시 - section 역할을 하는 div -->
      							<div role="region" aria-labelledby="section-title">
      								<h2 id="section-title">섹션 제목</h2>
      								<p>이 섹션에 대한 내용입니다.</p>
      							</div>`}
      </CodeBlock>

      				</li>
      				

      				<li className="weight-600-before t_blue_before">
      					<strong className="t_blue">Role: article</strong>
      					<p>
      						<code>&lt;article&gt;</code> 요소의 역할을 수행하는 <code>&lt;div&gt;</code> 요소에 <code>role=&quot;article&quot;</code> 속성을 추가하여,
      						보조 기술이 해당 <code>&lt;div&gt;</code>를 독립적인 콘텐츠 블록(예: 블로그 글, 뉴스 기사 등)으로 인식하게 할 수 있습니다.
      					</p>
      					
      <CodeBlock title="Role: article" language="javascript" className="uk_gist_code_box mt_ms">
      {`<!-- 기본 시멘틱 마크업 예시 -->
      							<article>
      								<h2>기사 제목</h2>
      								<p>이 기사의 내용입니다.</p>
      							</article>

      							<!-- role 부여 예시 - article 역할을 하는 div -->
      							<div role="article">
      								<h2>기사 제목</h2>
      								<p>이 기사의 내용입니다.</p>
      							</div>`}
      </CodeBlock>

      				</li>
      				

      				<li className="weight-600-before t_blue_before">
      					<strong className="t_blue">Role: footer</strong>
      					<p>
      						<code>&lt;footer&gt;</code> 요소의 역할을 수행하는 <code>&lt;div&gt;</code> 요소에 <code>role=&quot;contentinfo&quot;</code> 속성을 추가하여,
      						보조 기술이 해당 <code>&lt;div&gt;</code>를 페이지나 섹션의 푸터(하단 정보 영역)로 인식할 수 있게 합니다.
      					</p>
      					
      <CodeBlock title="Role: footer" language="javascript" className="uk_gist_code_box mt_ms">
      {`<!-- 기본 시멘틱 마크업 예시 -->
      							<footer>
      								<p>&copy; 2024 Company Name. All rights reserved.</p>
      							</footer>

      							<!-- role 부여 예시 - footer 역할을 하는 div -->
      							<div role="contentinfo">
      								<p>&copy; 2024 Company Name. All rights reserved.</p>
      							</div>`}
      </CodeBlock>

      				</li>
      				

      				<li className="weight-600-before t_blue_before">
      					<strong className="t_blue">Role: aside</strong>
      					<p>
      						<code>&lt;aside&gt;</code> 요소의 역할을 수행하는 <code>&lt;div&gt;</code> 요소에 <code>role=&quot;complementary&quot;</code> 속성을 추가하여,
      						보조 기술이 해당 <code>&lt;div&gt;</code>를 주요 콘텐츠와는 별도로 관련된 부가적인 콘텐츠로 인식할 수 있게 합니다.
      					</p>
      					
      <CodeBlock title="Role: aside" language="javascript" className="uk_gist_code_box mt_ms">
      {`// 기본 시멘틱 마크업 예시
      							<aside>
      								<h3>관련 기사</h3>
      								<ul>
      									<li><a href="#link1">관련 기사 1</a></li>
      									<li><a href="#link2">관련 기사 2</a></li>
      								</ul>
      							</aside>

      							// role 부여 예시 - aside  역할을 하는 div
      							<div role="complementary">
      								<h3>관련 기사</h3>
      								<ul>
      									<li><a href="#link1">관련 기사 1</a></li>
      									<li><a href="#link2">관련 기사 2</a></li>
      								</ul>
      							</div>`}
      </CodeBlock>

      				</li>
      				
      			</ol>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">역할(Role) 요약 및 주의사항</h3>

      			<ol className="mt_ml ol_lst info_lst gap-column-ml">
      				<li className="weight-600-before">
      					<strong>역할 부여</strong>
      					<p>
      						<code>&lt;div&gt;</code> 요소에 <code>role</code> 속성을 추가하면, HTML5 요소가 제공하는 접근성 역할을 구현할 수 있습니다.
      						이 기능을 통해 화면에 보이지 않는 정보도 보조 기술에 전달되어, 모든 사용자가 웹 콘텐츠를 보다 쉽게 접근할 수 있게 됩니다.
      					</p>
      				</li>
      				<li className="weight-600-before">
      					<strong>일관된 접근성</strong>
      					<p>
      						보조 기술은 <code>role</code> 속성을 활용하여 웹 요소의 역할을 정확히 이해하고,
      						사용자에게 페이지의 구조와 내용을 명확히 전달할 수 있도록 돕습니다.
      					</p>
      				</li>
      				<li className="weight-600-before">
      					<strong>네이티브 요소 사용 권장</strong>
      					<p>
      						가능한 경우에는 <code>role</code> 속성을 사용하는 대신,
      						HTML5에서 제공하는 네이티브 요소(<code>header</code>, <code>main</code>, <code>section</code>, <code>article</code>, <code>footer</code>, <code>aside</code> 등)를 사용하는 것이 좋습니다.
      						네이티브 요소는 접근성과 의미론적 구조를 기본적으로 지원하므로, 웹 페이지의 구조를 보다 명확하고 일관되게 표현할 수 있습니다.
      					</p>
      				</li>
      			</ol>
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">상태 및 속성(State and Properties)</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			
      			<p>
      				WAI-ARIA 상태 및 속성은 웹 애플리케이션의 접근성을 향상시키기 위해 HTML 요소에 추가적인 의미와 기능을 부여하는 메커니즘입니다.<br />
      				또한, WAI-ARIA 상태 및 속성은 웹 애플리케이션의 접근성을 향상시키는 중요한 도구입니다.
      				이를 적절하게 사용하면 시각적 장애를 가진 사용자도 웹 콘텐츠와 원활하게 상호작용하고,
      				동적인 콘텐츠 변화를 쉽게 인식할 수 있어 웹 접근성이 크게 개선됩니다.
      			</p>
      			<p className="mt_ms">
      				<b className="t_black">상태</b>는 동적으로 변할 수 있는 정보를 나타내며,<br />
      				<b className="t_black">속성</b>은 일반적으로 정적인 정보를 제공합니다.
      			</p>
      			<p className="mt_ms reference">
      				<a href="https://www.w3.org/TR/wai-aria/#states_and_properties" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">Accessible Rich Internet Applications (WAI-ARIA) 1.2 - Supported States and Properties</a><br />
      				<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">MDN WAI-ARIA states and properties</a>
      			</p>
      		</blockquote>

      		<figure className="img_figure mt_l">
      			<img src={`${IMG.WAI_ARIA}/wai-aria_state.png`} alt="상태 및 속성(State and Properties)" />
      			<figcaption>
      				<b>[상태 및 속성(State and Properties)]</b><br />
      				<a href={`${IMG.WAI_ARIA}/wai-aria_state.png`} className="mt_ms box_link" title="새창 열림" target="_blank" rel="noreferrer">크게 보기</a>
      			</figcaption>
      		</figure>

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">상태(State)와 속성(Properties)의 차이점</h3>

      			<ul className="mt_ml dot_lst dot_blue info_lst gap-column-ml">
      				<li className="weight-600-before t_blue_before">
      					<strong className="t_blue">상태(State)</strong>
      					<ul className="dot_lst dot_lst_inner">
      						<li>
      							웹 요소의 동적인 상태를 나타내며, 사용자의 상호작용에 따라 변경될 수 있습니다.
      						</li>
      						<li>
      							HTML 요소의 상태와 특성은 보조 기술이 웹 요소의 현재 상태를 이해하고 사용자에게 전달할 수 있도록 정의됩니다.
      							이러한 상태와 특성은 역할(Role)과 함께 사용되어 웹 콘텐츠의 접근성을 향상시키는 데 기여합니다.
      						</li>
      						<li>
      							예) 선택 여부, 확장 여부, 활성화 상태 등을 포함.
      						</li>
      					</ul>
      				</li>
      				<li className="weight-600-before t_blue_before">
      					<strong className="t_blue">속성(Properties)</strong>
      					<ul className="dot_lst dot_lst_inner">
      						<li>
      							속성은 웹 요소의 고정된 특성을 나타내며, 보조 기술이 이러한 요소를 적절하게 처리할 수 있도록 돕습니다.
      							속성은 일반적으로 페이지 로딩 시 설정되며, 변경되지 않거나 요소의 본질적인 특성을 나타내는 정적 정보를 제공합니다.
      						</li>
      						<li>
      							예) 요소의 레이블, 설명, 역할 등이 속성에 해당.
      						</li>
      					</ul>
      				</li>
      			</ul>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">상태(States) 예시</h3>

      			<ol className="mt_ml ol_lst info_lst gap-column-l">
      				<li className="weight-600-before t_blue_before">
      					<strong className="t_blue">aria-checked</strong>
      					<ul className="dot_lst">
      						<li>
      							체크박스, 라디오 버튼 또는 트리 항목의 선택 상태를 나타냅니다.
      						</li>
      						<li>
      							value : <code>true</code>(선택됨), <code>false</code>(선택되지 않음), <code>mixed</code>(부분 선택됨, 체크박스에만 해당)
      						</li>
      					</ul>
      					
      <CodeBlock title="aria-checked" language="javascript" className="uk_gist_code_box mt_ms">
      {`<div role="checkbox" aria-checked="false" tabindex="0">약관 동의</div>`}
      </CodeBlock>

      				</li>
      				

      				<li className="weight-600-before t_blue_before">
      					<strong className="t_blue">aria-expanded</strong>
      					<ul className="dot_lst">
      						<li>
      							요소가 확장되었는지, 축소되었는지 여부를 나타냅니다. 드롭다운 메뉴, 아코디언 등에서 사용됩니다.
      						</li>
      						<li>
      							value : <code>true</code>(확장됨), <code>false</code>(축소됨)
      						</li>
      					</ul>
      					
      <CodeBlock title="aria-expanded" language="javascript" className="uk_gist_code_box mt_ms">
      {`<button aria-expanded="false" aria-controls="submenu">Menu</button>
      							<ul id="submenu" aria-hidden="true">
      								<li><a href="#item1">Item 1</a></li>
      								<li><a href="#item2">Item 2</a></li>
      							</ul>`}
      </CodeBlock>

      				</li>
      				

      				<li className="weight-600-before t_blue_before">
      					<strong className="t_blue">aria-disabled</strong>
      					<ul className="dot_lst">
      						<li>
      							요소가 비활성화되었음을 나타냅니다. 이 상태에서는 사용자가 요소와 상호작용할 수 없습니다.
      						</li>
      						<li>
      							value : <code>true</code>(비활성화됨), <code>false</code>(활성화됨)
      						</li>
      					</ul>
      					
      <CodeBlock title="aria-disabled" language="javascript" className="uk_gist_code_box mt_ms">
      {`<button aria-disabled="true">Submit</button>`}
      </CodeBlock>

      				</li>
      				

      				<li className="weight-600-before t_blue_before">
      					<strong className="t_blue">aria-hidden</strong>
      					<ul className="dot_lst">
      						<li>
      							요소가 보조 기술에 의해 무시될지를 나타냅니다. 요소가 시각적으로는 보이지만, 보조 기술 사용자에게는 숨겨질 때 사용됩니다
      						</li>
      						<li>
      							value : <code>true</code>(숨김), <code>false</code>(보임)
      						</li>
      					</ul>
      					
      <CodeBlock title="aria-hidden" language="javascript" className="uk_gist_code_box mt_ms">
      {`<div aria-hidden="true">이 콘텐츠는 화면 낭독기가 읽지 않습니다.</div>`}
      </CodeBlock>

      				</li>
      				

      				<li className="weight-600-before t_blue_before">
      					<strong className="t_blue">aria-selected</strong>
      					<ul className="dot_lst">
      						<li>
      							요소가 선택된 상태인지 나타냅니다. 주로 탭, 옵션 리스트 등에서 사용됩니다.
      						</li>
      						<li>
      							value : <code>true</code>(선택됨), <code>false</code>(선택되지 않음)
      						</li>
      					</ul>
      					
      <CodeBlock title="aria-selected" language="javascript" className="uk_gist_code_box mt_ms">
      {`<div role="tablist">
      								<div role="tab" aria-selected="true">Tab 1</div>
      								<div role="tab" aria-selected="false">Tab 2</div>
      							</div>`}
      </CodeBlock>

      				</li>
      				

      				<li className="weight-600-before t_blue_before">
      					<strong className="t_blue">aria-pressed</strong>
      					<ul className="dot_lst">
      						<li>
      							토글 버튼의 눌림 상태를 나타냅니다.
      						</li>
      						<li>
      							value : <code>true</code>(눌림), <code>false</code>(눌리지 않음), <code>mixed</code>(부분적으로 눌림)
      						</li>
      					</ul>
      					
      <CodeBlock title="aria-pressed" language="javascript" className="uk_gist_code_box mt_ms">
      {`<button aria-pressed="false">Bold</button>`}
      </CodeBlock>

      				</li>
      				
      			</ol>
      		</article>
      		

      		<article className="mt_xl indent">
      			<h3 className="ml_mn">속성(Properties) 예시</h3>

      			<ol className="mt_ml ol_lst info_lst gap-column-l">
      				<li className="weight-600-before t_blue_before">
      					<strong className="t_blue">aria-label</strong>
      					<ul className="dot_lst">
      						<li>
      							요소의 레이블을 제공하여, 스크린 리더가 이 레이블을 읽어 사용자에게 요소의 목적을 전달합니다.
      						</li>
      						<li>
      							작성자가 접근성 있는 이름을 제공할 수 없는 역할을 제외한 거의 모든 역할에 사용됩니다.
      						</li>
      						<li>
      							value : <code>string</code>
      						</li>
      					</ul>
      					
      <CodeBlock title="aria-label" language="javascript" className="uk_gist_code_box mt_ms">
      {`<button aria-label="닫기">X</button>
      							<button aria-label="취소">X</button>`}
      </CodeBlock>

      				</li>
      				

      				<li className="weight-600-before t_blue_before">
      					<strong className="t_blue">aria-labelledby</strong>
      					<ul className="dot_lst">
      						<li>
      							<code>aria-labelledby</code> 속성은 다른 요소가 레이블을 제공할 때 사용됩니다.
      							이 속성은 레이블 요소의 ID를 참조하여 해당 요소를 레이블로 지정합니다.
      							<code>aria-labelledby</code>는 접근 가능한 이름을 정의하지만, 레이블 지정 요소를 클릭하여 연결된 입력을 활성화하는 등의 기능은 제공하지 않습니다.
      						</li>
      						<li>
      							작성자가 액세스 가능한 이름을 제공할 수 없는 역할을 제외한 거의 모든 역할에서 사용됩니다.
      						</li>
      						<li>
      							value : <code>ID reference list</code>(ID 참조 목록)
      						</li>
      					</ul>
      					
      <CodeBlock title="aria-labelledby" language="javascript" className="uk_gist_code_box mt_ms">
      {`<h1 id="dialogTitle">대화 상자 제목</h1>
      							<div role="dialog" aria-labelledby="dialogTitle">
      								<p>대화 상자 내용입니다.</p>
      							</div>`}
      </CodeBlock>

      				</li>
      				

      				<li className="weight-600-before t_blue_before">
      					<strong className="t_blue">aria-describedby</strong>
      					<ul className="dot_lst">
      						<li>
      							다른 요소가 추가적인 설명을 제공할 때 사용됩니다. 설명을 제공하는 요소의 ID를 참조합니다.
      						</li>
      						<li>
      							모든 역할에 사용됩니다. 모든 HTML 요소에서도 사용할 수 있습니다.
      						</li>
      						<li>
      							value : <code>ID reference list</code>(ID 참조 목록)
      						</li>
      					</ul>
      					
      <CodeBlock title="aria-describedby" language="javascript" className="uk_gist_code_box mt_ms">
      {`<span id="info">요소의 설명입니다.</span>
      							<input type="text" aria-describedby="info">`}
      </CodeBlock>

      				</li>
      				

      				<li className="weight-600-before t_blue_before">
      					<strong className="t_blue">aria-controls</strong>
      					<ul className="dot_lst">
      						<li>
      							요소가 제어하는 다른 요소의 ID를 참조합니다. 주로 사용자 인터페이스에서 요소 간의 관계를 나타냅니다.
      						</li>
      						<li>
      							모든 역할에서 사용됩니다.
      						</li>
      						<li>
      							value : <code>id list</code>(ID 목록)
      						</li>
      					</ul>
      					
      <CodeBlock title="aria-controls" language="javascript" className="uk_gist_code_box mt_ms">
      {`<button aria-controls="submenu">하위 메뉴 토글</button>
      							<div id="submenu">하위 메뉴 내용</div>`}
      </CodeBlock>

      				</li>
      				

      				<li className="weight-600-before t_blue_before">
      					<strong className="t_blue">aria-live</strong>
      					<ul className="dot_lst">
      						<li>
      							동적으로 변경되는 콘텐츠 영역을 나타내며, 보조 기술이 콘텐츠의 변경 사항을 사용자에게 알리는 방법을 정의합니다.
      						</li>
      						<li>
      							모든 역할에서 사용됩니다.
      						</li>
      						<li>
      							value : <code>off</code>, <code>polite</code>, <code>assertive</code>
      						</li>
      					</ul>
      					
      <CodeBlock title="aria-live" language="javascript" className="uk_gist_code_box mt_ms">
      {`<div aria-live="polite">New message received.</div>`}
      </CodeBlock>

      				</li>
      				

      				<li className="weight-600-before t_blue_before">
      					<strong className="t_blue">aria-valuenow / aria-valuemin / aria-valuemax</strong>
      					<ul className="dot_lst">
      						<li>
      							<code>aria-valuenow</code> : 슬라이더나 프로그레스 바 등에서 <mark>현재 값</mark>을 나타냅니다.
      						</li>
      						<li>
      							<code>aria-valuemin</code> : 슬라이더나 프로그레스 바 등에서 설정할 수 있는 <mark>최소 값</mark>을 나타냅니다.
      						</li>
      						<li>
      							<code>aria-valuemax</code> : 슬라이더나 프로그레스 바 등에서 설정할 수 있는 <mark>최대 값</mark>을 나타냅니다.
      						</li>
      						<li>
      							meter, scrollbar, separator, slider, spinbutton 역할에서 사용됩니다.
      						</li>
      						<li>
      							value : <code>number</code>
      						</li>
      					</ul>
      					
      <CodeBlock title="aria-valuenow/min/max" language="javascript" className="uk_gist_code_box mt_ms">
      {`<div role="slider" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>`}
      </CodeBlock>

      				</li>
      				
      			</ol>
      		</article>
      		
      	</section>
      	

      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">WAI-ARIA 적용 방법</h2>

      			<article className="mt_xl indent">
      				<h3 className="ml_mn">적절한 ARIA 역할(Role) 사용</h3>
      				<ul className="dot_lst mt_m">
      					<li>
      						WAI-ARIA 역할을 사용하여 HTML 요소의 목적을 명확하게 정의합니다.
      					</li>
      					<li>
      						예)
      						<code>div</code>나 <code>span</code> 같은 요소에 <code>role=&quot;button&quot;</code> 속성을 사용하여
      						해당 요소가 스크린 리더와 같은 보조 기술에서 버튼 역할을 수행하는 것으로 인식되도록 해줍니다.
      					</li>
      				</ul>
      				
      <CodeBlock title="적절한 ARIA 역할(Role) 사용" language="javascript" className="uk_gist_code_box mt_ml">
      {`<!--
      								스크린 리더와 같은 보조 기술에 해당 요소가 클릭 가능한 버튼 요소임을 알려주고,
      								tabindex를 제공하여 초점(포커스)이 발생할 수 있게 제공
      							-->
      							<div role="button" tabindex="0">Click Me</div>`}
      </CodeBlock>

      			</article>
      			

      			<article className="mt_xl indent">
      				<h3 className="ml_mn">ARIA 속성(Properties) 활용</h3>
      				<ul className="dot_lst mt_m">
      					<li>
      						요소의 상태나 특성을 명확히 하기 위해 적절한 ARIA 속성을 추가합니다.
      					</li>
      					<li>
      						예) <code>aria-expanded</code>를 사용하여 요소가 확장되었는지 여부를 나타낼 수 있습니다.
      					</li>
      				</ul>
      				
      <CodeBlock title="ARIA 속성(Properties) 활용" language="javascript" className="uk_gist_code_box mt_ml">
      {`<!-- 드롭다운 메뉴의 확장/축소 상태를 보조 기술에 전달 -->
      							<button aria-expanded="false" aria-controls="submenu">Menu</button>
      							<ul id="submenu" aria-hidden="true">
      								<li><a href="#">Item 1</a></li>
      								<li><a href="#">Item 2</a></li>
      							</ul>`}
      </CodeBlock>

      			</article>
      			

      			<article className="mt_xl indent">
      				<h3 className="ml_mn">ARIA 상태(States) 적용</h3>
      				<ul className="dot_lst mt_m">
      					<li>
      						사용자의 상호작용에 따라 변할 수 있는 요소에 대해 ARIA 상태를 설정합니다.
      					</li>
      					<li>
      						예) 체크박스의 상태를 <code>aria-checked</code>로 표시합니다.
      					</li>
      				</ul>
      				
      <CodeBlock title="ARIA 상태(States) 적용" language="javascript" className="uk_gist_code_box mt_ml">
      {`<!-- 사용자가 체크박스를 선택하거나 해제할 때 이 속성이 업데이트됨 -->
      							<div role="checkbox" aria-checked="false" tabindex="0">Accept Terms</div>`}
      </CodeBlock>

      			</article>
      			

      			<article className="mt_xl indent">
      				<h3 className="ml_mn">정확한 레이블 제공</h3>
      				<ul className="dot_lst mt_m">
      					<li>
      						<code>aria-label</code> 또는 <code>aria-labelledby</code>를 사용하여 요소에 명확한 텍스트 레이블을 제공함으로써
      						스크린 리더와 같은 보조 기술 사용자가 요소의 목적을 이해할 수 있도록 함
      					</li>
      				</ul>
      				
      <CodeBlock title="정확한 레이블 제공" language="javascript" className="uk_gist_code_box mt_ml">
      {`<!-- "X" 버튼이 "닫기 또는 취소" 버튼임을 보조 기술 사용자에게 알림 -->
      							<button type="button" aria-label="닫기">X</button>
      							<button type="button" aria-label="취소">X</button>`}
      </CodeBlock>

      			</article>
      			

      			<article className="mt_xl indent">
      				<h3 className="ml_mn">동적 콘텐츠에 aria-live 적용</h3>
      				<ul className="dot_lst mt_m">
      					<li>
      						실시간으로 변경되는 콘텐츠에 <code>aria-live</code> 속성을 사용하여
      						스크린 리더가 해당 변화를 사용자에게 알릴 수 있도록 합니다.
      					</li>
      				</ul>
      				
      <CodeBlock title="동적 콘텐츠에 aria-live 적용" language="javascript" className="uk_gist_code_box mt_ml">
      {`<!-- 메시지가 추가되면 스크린 리더가 사용자에게 이를 알려준다 -->
      							<div aria-live="polite">새로운 메시지가 수신되었습니다.</div>`}
      </CodeBlock>

      			</article>
      			
      	</section>
      	

    </>
  )
}

export default WaiAriaPage
