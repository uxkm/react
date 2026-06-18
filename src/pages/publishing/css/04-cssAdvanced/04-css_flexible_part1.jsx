import { usePageMeta } from '@/components/common/PageMeta'
import PublishingPartTabs from '@/components/docs/PublishingPartTabs'
import { IMG } from '@/config/path'
import { Suspense, lazy } from 'react'
const UkEditorTarget = lazy(() => import('@/components/code/UkEditorTarget'))
function EditorFallback() { return <div className="uk_editor min_height_300" aria-hidden /> }
import CodeBlock from '@/components/code/CodeBlock'

const PAGE_LAYOUT = {
  mainClass: "css_flexible",
  type: "publishing",
  info: true,
  note: true,
  sideMenu: true,
  reference: false,
  contentList: true,
  depth3Last: false,
  bottomEditor: false
}

const PAGE_DATA = {
  title: "플렉서블 레이아웃 - 소개 및 요약",
  description: "Flexbox는 CSS3에서 도입된 레이아웃 방식으로, 요소의 크기가 불명확하거나 동적으로 변화할 때에도 유연한 레이아웃을 구현할 수 있으며, display: flex 또는 display: inline-flex로 설정한 요소가 플렉스 컨테이너가 되고 그 안에 포함된 자식 요소들이 플렉스 아이템이 됩니다. 이 페이지에서는 Flexbox의 기본 개념, 플렉스 컨테이너와 플렉스 아이템의 구조, 플렉스 라인의 개념, Flexbox의 장점과 활용 방법을 함께 소개합니다.",
  keyword: "style, css, Cascading Style Sheets, flex, 플렉스 박스, flexbox, 레이아웃",
}

function CssFlexiblePart1Page() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  })

  return (
    <>
      <blockquote className="uk_note common_note mt_xxl" role="note">
      	<strong className="sound_only">요약 설명</strong>
      	<p>
      		<b>Flex</b>(Flexbox)는 <strong className="t_black">CSS3</strong>에서 도입된 레이아웃 방식으로, 요소의 크기가 불명확하거나 동적으로 변화할 때에도 유연한 레이아웃을 구현할 수 있습니다.<br />
      		플렉스 컨테이너(부모 요소)와 플렉스 요소(자식 요소)로 구성되며, <code>display: flex</code> 또는 <code>display: inline-flex</code>로 설정한 요소가 플렉스 컨테이너가 됩니다.
      	</p>
      	<p className="mt_ms">
      		복잡한 레이아웃도 적은 코드로 간단하게 표현할 수 있으며, 다양한 화면 크기와 기기에서 요소들이 자동으로 재정렬되어 반응형 웹을 구현하는 데 유용합니다.<br />
      		과거에는 <code>float</code>이 주로 사용되었지만, 현재는 <code>flex</code> 또는 <code>grid</code>가 주로 사용됩니다.
      	</p>
      </blockquote>
      <PublishingPartTabs sectionType="css" />



      	
      	<section className="mt_xxl indent">
      		<h2 className="ml_mn">flexbox 소개</h2>
      		<p className="mt_l">
      			플렉스 박스는 플렉스 컨테이너(flex container)와 플렉스 요소(flex item)로 구성됩니다.<br />
      			플렉스 컨테이너는 <code>display: flex</code> 또는 <code>display: inline-flex</code>로 설정한 요소이며, 플렉스 요소는 그 안에 포함된 자식 요소입니다.
      		</p>
      		<p className="mt_s">
      			플렉스 요소는 플렉스 컨테이너 안에서 플렉스 라인(flex line)이라는 가상의 선을 따라 배치됩니다.<br />
      			기본적으로 하나의 플렉스 컨테이너는 하나의 플렉스 라인만 가지며, <code>direction</code> 속성으로 방향을 변경할 수 있습니다.
      		</p>
      		<p className="mt_s">
      			과거에는 <b className="t_black">Internet Explorer</b> 8, 9가 지원하지 않고,
      			<b className="t_black">IE</b> 10, 11도 일부만 지원하며 모바일 브라우저 외에 활용도가 낮았지만,
      			현재는 <b className="t_black">IE</b>를 사용하지 않기 때문에 <i className="underline">모든 브라우저에서 문제없이 사용할 수 있습니다.</i>
      		</p>
      	</section>

      	
      	<section className="mt_xxl indent">
      		<h2 className="ml_mn">Flexbox 속성 요약 설명</h2>
      		<figure className="img_figure mt_l">
      			<figcaption className="mt_0">[<code className="bg_none t_444">Flexbox</code> 기본 구조]</figcaption>
      			<img src={`${IMG.CSS}/flexbox/uxkm_flex-base.svg`} alt="Flexbox 기본 구조" className="mt_s" />
      		</figure>
      		<div className="ol_lst">
      			<ol>
      				<li className="line_code tit_h3 mt_l">
      					<h3>Flexbox 컨테이너 속성</h3>
      					<p className="mt_ms"><code className="t_blue weight-500">display</code> : HTML 요소에 대한 박스의 타입을 명시합니다. <code>flex | inline-flex</code></p>
      					<p><code className="t_blue weight-500">flex-direction</code> : <code>Flex Items</code>의 주 축(main-axis)을 설정합니다. (방향을 설정)</p>
      					<p><code className="t_blue weight-500">flex-wrap</code> : <code>Flex Items</code>의 여러 줄 묶음(줄 바꿈) 설정합니다. (<code>flex</code> 라인에 더 이상의 여유 공간이 없을 때, <code>flex</code> 요소의 위치를 다음 줄로 넘길지를 설정)</p>
      					<p><code className="t_blue weight-500">flex-flow</code> : <code>flex-direction</code> 속성과 <code>flex-wrap</code> 속성의 축약 표기법 입니다.</p>
      					<p><code className="t_blue weight-500">align-content</code> : 교차 축(cross-axis)의 정렬 방법을 설정합니다.(2줄 이상) (<code>flex-wrap</code> 속성의 동작을 변경할 수 있으며, <code>flex</code> 요소를 정렬하는 대신에 flex 라인을 정렬)</p>
      					<p><code className="t_blue weight-500">justify-content</code> : 주 축(main-axis)의 정렬 방법을 설정합니다. (<code>flex</code> 요소의 수평 방향 정렬 방식을 설정)</p>
      					<p><code className="t_blue weight-500">align-items</code> : 교차 축(cross-axis)에서 <code>Items</code>의 정렬 방법을 설정합니다.(1줄) (<code>flex</code> 요소의 수직 방향 정렬 방식을 설정)</p>
      				</li>
      				<li className="line_code tit_h3 mt_l">
      					<h3>Flexbox 아이템 속성</h3>
      					<p className="mt_ms"><code className="t_blue weight-500">flex-grow</code> : <code>flex item</code>의 너비에 대한 확대 인자(flex grow factor)를 지정합니다.</p>
      					<p><code className="t_blue weight-500">flex-shrink</code> : <code>flex item</code>의 너비에 대한 축소 인자(flex shrink factor)를 지정합니다.</p>
      					<p><code className="t_blue weight-500">flex-basis</code> : <code>flex item</code>의 너비를 결정합니다.</p>
      					<p><code className="t_blue weight-500">flex</code> : <code>flex-grow</code>, <code>flex-shrink</code>, <code>flex-basis</code> 축약 표기법 입니다. 같은 <code>flex</code> 컨테이너 안에 있는 <code>flex</code> 요소의 너비를 상대적으로 설정합니다.</p>
      					<p><code className="t_blue weight-500">align-self</code> : <code>flex</code> 요소마다 서로 다른 <code>align</code> 속성값을 설정합니다. Cross Axis에서 단일 항목을 정렬합니다.</p>
      					<p><code className="t_blue weight-500">order</code> : <code>flex</code> 컨테이너 안에 있는 <code>flex</code> 요소들의 순서를 설정합니다. 낮은 숫자의 항목은 왼쪽으로 이동하고 높은 숫자의 항목은 오른쪽으로 이동합니다.</p>
      				</li>
      			</ol>
      		</div>
      	</section>

      	
      	<section className="mt_xxl indent">
      		<h2 className="ml_mn">flexbox 장점 요약</h2>
      		<ol className="ol_lst mt_l">
      			<li>1줄의 코드 추가로 수평 정렬이 가능합니다.</li>
      			<li>요소의 상하좌우 정렬, 순서 변경이 간단합니다.</li>
      			<li>요소가 간격 조절이 간단합니다.</li>
      			<li>서로 다른 <code>height</code>를 갖는 요소의 수평정렬 시, 간단히 상하중앙 정렬이 가능합니다.</li>
      		</ol>
      	</section>

      	
      	<section className="mt_xxl indent">
      		<h2 className="ml_mn">Flexbox 사용</h2>
      		<figure className="img_figure mt_l">
      			
      			<figcaption className="mt_0">[<code className="bg_none t_444">Flexbox</code> 용어]</figcaption>
      			<img src={`${IMG.CSS}/flexbox/uxkm_flex_terminology.svg`} alt="Flexbox terminology diagram from official W3C specification." className="mt_m" />
      		</figure>

      		
      		<article className="ol_lst mt_l">
      			<strong className="t_black weight-500 font-16">
      				Flexbox 속성의 값에 따라 flex 항목은 main axis(기본 축) 또는 cross axis(교차 축)을 따라 flex 컨테이너 안에 배치됩니다.<br />
      				주 축(main-axis)과 교차 축(cross-axis)의 개념은 다음과 같습니다.
      			</strong>
      			<ol className="indent mt_ms">
      				<li>값 <code>row</code>는 <code>Items</code>를 수평축으로 표시하므로 이때는 주 축이 수평이며 교차 축은 수직이 됩니다.</li>
      				<li>반대로 값 <code>column</code>은 <code>Items</code>를 수직축으로 표시하므로 주 축은 수직이며 교차 축은 수평이 됩니다.</li>
      				<li>즉, 방향(수평, 수직)에 따라 주 축과 교차 축이 달라집니다.</li>
      			</ol>
      			<figure className="img_figure indent mt_m">
      				<figcaption className="mt_0">[주 축(<code className="bg_none t_444">main-axis</code>)과 교차 축(<code className="bg_none t_444">cross-axis</code>)]</figcaption>
      				<img src={`${IMG.CSS}/flexbox/uxkm_flex-direction-main-axis.svg`} alt="주 축(main-axis)과 교차 축(cross-axis)" className="mt_m" />
      			</figure>
      		</article>

      		<article className="ol_lst mt_xl">
      			<strong className="t_black weight-500 font-16">시작점(flex-start)과 끝점(flex-end)의 개념은 다음과 같습니다.</strong>
      			<ol className="indent mt_s">
      				<li>이는 주 축이나 교차 축의 시작하는 지점과 끝나는 지점을 지칭합니다.</li>
      				<li>역시 방향에 따라 시작점과 끝점이 달라집니다.</li>
      			</ol>
      			<figure className="img_figure indent mt_m">
      				<figcaption className="mt_0">[시작점(<code className="bg_none t_444">flex-start</code>)과 끝점(<code className="bg_none t_444">flex-end</code>)]</figcaption>
      				<img src={`${IMG.CSS}/flexbox/uxkm_flex-direction-main(cross)-start.svg`} alt="시작점(flex-start)과 끝점(flex-end)" className="mt_m" />
      				
      			</figure>
      		</article>

      		<article className="mt_xl">
      			<p><code>flexbox</code>를 사용하려면 먼저 부모 컨테이너에 <code>display: flex;</code>속성을 CSS에 추가하여 부모 컨테이너를 <code>flex</code> 컨테이너로 변환해야 합니다.</p>
      			<p className="t_blue">
      				<strong>참고:</strong> 최신 브라우저에서는 <code>display: flex;</code>만 사용하면 충분하며, 아래의 주석 처리된 구식 문법은 <b>레거시 브라우저 지원용</b>으로만 참고하세요.
      			</p>
      			
      <CodeBlock title="flexbox" language="javascript" className="uk_gist_code_box indent mt_m">
      {`div {
      					display: flex;
      				}
      				/* 구형 브라우저 지원용 (현재는 대부분 불필요) */
      				/* display: -webkit-box; // OLD - iOS 6-, Safari 3.1-6 */
      				/* display: -moz-box; // OLD - Firefox 19- */
      				/* display: -ms-flexbox; // TWEENER - IE 10 */
      				/* display: -webkit-flex; // NEW - Chrome */`}
      </CodeBlock>

      		</article>
      		

      		<article className="mt_xl">
      			<p>
      				부모 요소가 <code>inline</code> 요소인 경우 <code>inline-flex</code>을 지정합니다.<br />
      				<code>flex</code> 또는 <code>inline-flex</code>는 부모 요소에 반드시 지정해야하는 유일한 속성이며 자식 요소는 자동적으로 <code>flex item</code>이 됩니다.
      			</p>
      			
      <CodeBlock title="flexbox" language="javascript" className="uk_gist_code_box indent mt_m">
      {`div {
      					display: inline-flex;
      				}`}
      </CodeBlock>

      		</article>
      		<aside className="browser_support mt_xl" data-tit="inline-flex">
      			<ul>
      				<li className="ie">10+ -ms-</li>
      				<li className="edge">12.0</li>
      				<li className="chrome">21.0</li>
      				<li className="firefox">28.0</li>
      				<li className="opera">12.1</li>
      				<li className="safari">6.1</li>
      			</ul>
      		</aside>
      	</section>

      	<section className="view_editor edit_code mt_xxl">
      		<h2 className="ve_tit">Flexbox 예제</h2>
      		<Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="/css/step03/4.4.flexible/4.4.flexible.html" className="uk_editor mt_ml indent min_height_450 mb_result_height_350" mode="htmlmixed" theme="moxer" browser="default" result minHeight="450px" mbResultHeight="350px" />
      </Suspense>
      	</section>

      	<figure className="img_figure indent mt_l">
      		<img src={`${IMG.CSS}/04_css_04_1.png`} alt="Flexbox 소개 및 요약" />
      		<figcaption className="reference">
      			Flexbox 소개 및 요약
      		</figcaption>
      	</figure>

      	<aside className="reference_box mt_xxl">
      		<h2 className="tit">플렉서블 박스 레이아웃 참조</h2>
      		<ul className="link_lst">
      			<li className="reference"><a href="https://www.w3.org/TR/css-flexbox-1/" target="_blank" rel="noreferrer" className="fas" title="새창열림">W3C CSS Flexible Box Layout Module Level 1</a></li>
      			<li className="reference"><a href="https://drafts.csswg.org/css-align/" target="_blank" rel="noreferrer" className="fas" title="새창열림">W3C CSS Box Alignment Module Level 3</a></li>
      			<li className="reference"><a href="https://www.w3.org/TR/css-writing-modes-3/#writing-mode" target="_blank" rel="noreferrer" className="fas" title="새창열림">W3C CSS Writing Modes Level 3</a></li>
      			<li className="reference"><a href="https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Flexible_Box_Layout" target="_blank" rel="noreferrer" className="fas" title="새창열림">MDN CSS Flexible Box</a></li>
      			<li className="reference"><a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_blank" rel="noreferrer" className="fas" title="새창열림">A Complete Guide to Flexbox (CSS-Tricks)</a></li>
      			<li className="reference"><a href="https://www.tutorialspoint.com/flexbox/" target="_blank" rel="noreferrer" className="fas" title="새창열림">Flexbox Tutorial for Beginners (Tutorials Point)</a></li>
      			<li className="reference"><a href="https://webdesign.tutsplus.com/tutorials/a-comprehensive-guide-to-flexbox-alignment--cms-30183" target="_blank" rel="noreferrer" className="fas" title="새창열림">A Guide to Flexbox Alignment (Web Design Tuts)</a></li>
      			<li className="reference"><a href="http://yoksel.github.io/flex-cheatsheet/" target="_blank" rel="noreferrer" className="fas" title="새창열림">flex-cheatsheet</a></li>
      			<li className="reference"><a href="https://jonneal.dev/flexibility/" target="_blank" rel="noreferrer" className="fas" title="새창열림">flex-cheatsheet</a></li>
      			<li className="reference"><a href="https://www.freecodecamp.org/news/flexbox-the-ultimate-css-flex-cheatsheet/" target="_blank" rel="noreferrer" className="fas" title="새창열림">CSS Flex Cheatsheet (freeCodeCamp)</a></li>
      			<li className="reference"><a href="https://dev.opera.com/articles/flexbox-basics/" target="_blank" rel="noreferrer" className="fas" title="새창열림">Flexbox at Opera</a></li>
      			<li className="reference"><a href="https://bocoup.com/blog/dive-into-flexbox" target="_blank" rel="noreferrer" className="fas" title="새창열림">Diving into Flexbox by Bocoup</a></li>
      			<li className="reference"><a href="https://css-tricks.com/using-flexbox/" target="_blank" rel="noreferrer" className="fas" title="새창열림">Mixing syntaxes for best browser support on CSS-Tricks</a></li>
      			<li className="reference"><a href="https://www.alsacreations.com/tuto/lire/1493-css3-flexbox-layout-module.html" target="_blank" rel="noreferrer" className="fas" title="새창열림">Flexbox by Raphael Goetter (FR)</a></li>
      			<li className="reference"><a href="https://bennettfeely.com/flexplorer/" target="_blank" rel="noreferrer" className="fas" title="새창열림">Flexplorer by Bennett Feely</a></li>
      			<li className="reference"><a href="https://css-tricks.com/using-flexbox/" target="_blank" rel="noreferrer" className="fas" title="새창열림">flexbox 구버전과 신버전 브라우저 지원을 위한 최고의 방법</a></li>
      			<li className="reference"><a href="https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/dev-guides/hh673531(v=vs.85)?redirectedfrom=MSDN" target="_blank" rel="noreferrer" className="fas" title="새창열림">IE flexbox 참고 자료</a></li>
      		</ul>
      	</aside>
    </>
  )
}

export default CssFlexiblePart1Page
