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
  title: "플렉서블 레이아웃 - 부모 속성 part 2",
  description: "Flexbox의 부모 속성은 플렉스 컨테이너에 적용하는 속성들로, display: flex를 설정한 요소에 사용하여 플렉스 아이템들의 배치 방식을 제어합니다. 이 페이지에서는 주축을 따라 플렉스 아이템을 정렬하는 justify-content 속성, 교차축을 따라 여러 줄의 플렉스 아이템을 정렬하는 align-content 속성, 교차축을 따라 단일 줄의 플렉스 아이템을 정렬하는 align-items 속성을 함께 소개합니다.",
  keyword: "style, css, Cascading Style Sheets, flex, 플렉스 박스, flexbox, 레이아웃, 부모요소, justify-content, align-content, align-items",
}

function CssFlexiblePart3Page() {
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

      <blockquote className="uk_note mt_xxl" role="note">
      		<strong className="sound_only">요약 설명</strong>
      		<p>
      			<b className="t_blue">플렉서블 레이아웃 - 부모 속성 part 2</b>에서는<br />
      		</p>
      		<ul className="dot_lst indent_small">
      			<li className="before_note"><b>justify-content</b></li>
      			<li className="before_note"><b>align-content</b></li>
      			<li className="before_note"><b>align-items</b>에 대한 내용을 다루고 있습니다.</li>
      		</ul>
      	</blockquote>

      	
      	<section className="mt_xxl indent">
      		<h2 className="ml_mn">부모 속성(Properties for the Parent - Flexbox Container)</h2>
      		<p className="mt_l"><code>display: flex;</code>를 설정한 요소입니다.</p>
      		<figure className="img_figure mt_m">
      			<figcaption className="mt_0">[Flexbox Container]</figcaption>
      			<img src={`${IMG.CSS}/flexbox/uxkm_flex-container.svg`} alt="Flexbox Container" className="mt_s" />
      		</figure>

      		
      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue" data-conlist-h4="true">justify-content</h3>
      			<p className="mt_m">
      				<code>justify-content</code> 속성은 주축(main axis)을 따라 플렉스 요소를 정렬하는 방식을 설정합니다.<br />
      				기본 값은 <code>flex-start</code>입니다.
      			</p>
      			<p className="reference mt_s"><a href="https://www.w3.org/TR/css-flexbox-1/#justify-content-property" target="_blank" rel="noreferrer" title="새창열림">w3.org/TR/css-flexbox-1/#justify-content-property</a></p>
      			
      <CodeBlock title="Flex properties [justify-content]" language="javascript" className="uk_gist_code_box mt_m">
      {`div {
      						justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly | start | end | left | right ... + safe | unsafe;
      					}`}
      </CodeBlock>

      			<figure className="img_figure mt_ml">
      				<figcaption className="mt_0">[<code className="bg_none t_blue">justify-content</code>를 시각적으로 설명하는 다이어그램]</figcaption>
      				<img src={`${IMG.CSS}/flexbox/uxkm_flex-justify-content_pc.svg`} alt="justify-content를 시각적으로 설명하는 다이어그램" className="mt_m dp_md_pc mg_center" />
      				<img src={`${IMG.CSS}/flexbox/uxkm_flex-justify-content_md.svg`} alt="justify-content를 시각적으로 설명하는 다이어그램" className="mt_m dp_md mg_center" />
      			</figure>

      			<div className="ol_lst">
      				<ol>
      					
      					<li className="tit_h4 mt_l">
      						<h4>flex-start (기본값)</h4>
      						<p className="mt_ms">기본값이며, 플렉스 요소가 플렉스 컨테이너의 앞쪽(왼쪽)부터 배치됩니다.</p>
      						
      <CodeBlock title={"Flex properties [justify-content : flex-start]"} language="javascript" className="uk_gist_code_box mt_ms">
      {`div {
      									justify-content: flex-start;
      								}`}
      </CodeBlock>

      						<figure className="img_figure mt_m">
      							<figcaption className="mt_0"><code className="bg_none t_444">justify-content: <i className="t_blue">flex-start</i>;</code></figcaption>
      							<img src={`${IMG.CSS}/flexbox/uxkm_flexbox-justify-content-flex-start.svg`} alt="flex-justify-content: flex-start;" className="mt_s" />
      						</figure>
      					</li>

      					
      					<li className="tit_h4 mt_l">
      						<h4>flex-end</h4>
      						<p className="mt_ms">플렉스 요소가 플렉스 컨테이너의 뒤쪽(오른쪽)부터 배치됩니다.</p>
      						
      <CodeBlock title={"Flex properties [justify-content : flex-end]"} language="javascript" className="uk_gist_code_box mt_ms">
      {`div {
      									justify-content: flex-end;
      								}`}
      </CodeBlock>

      						<figure className="img_figure mt_m">
      							<figcaption className="mt_0"><code className="bg_none t_444">justify-content: <i className="t_blue">flex-end</i>;</code></figcaption>
      							<img src={`${IMG.CSS}/flexbox/uxkm_flexbox-justify-content-flex-end.svg`} alt="flex-justify-content: flex-end;" className="mt_s" />
      						</figure>
      					</li>

      					
      					<li className="tit_h4 mt_l">
      						<h4>center</h4>
      						<p className="mt_ms">플렉스 요소가 플렉스 컨테이너의 가운데에 배치됩니다. (Items를 가운데 정렬 항목이 선을 따라 중앙에 위치)</p>
      						
      <CodeBlock title={"Flex properties [justify-content : center]"} language="javascript" className="uk_gist_code_box mt_ms">
      {`div {
      									justify-content: center;
      								}`}
      </CodeBlock>

      						<figure className="img_figure mt_m">
      							<figcaption className="mt_0"><code className="bg_none t_444">justify-content: <i className="t_blue">center</i>;</code></figcaption>
      							<img src={`${IMG.CSS}/flexbox/uxkm_flexbox-justify-content-center.svg`} alt="flex-justify-content: center;" className="mt_s" />
      						</figure>
      					</li>

      					
      					<li className="tit_h4 mt_l">
      						<h4>space-between</h4>
      						<p className="mt_ms">
      							플렉스 요소 사이에 여유 공간을 두고 양쪽 끝에 마춰 배치됩니다.<br />
      							(시작 Item은 시작점에, 마지막 Item은 끝점에 정렬되고 나머지 Items는 사이에 고르게 정렬됩니다. 라인에 균등하게 분배)
      						</p>
      						
      <CodeBlock title={"Flex properties [justify-content : space-between]"} language="javascript" className="uk_gist_code_box mt_ms">
      {`div {
      									justify-content: space-between;
      								}`}
      </CodeBlock>

      						<figure className="img_figure mt_m">
      							<figcaption className="mt_0"><code className="bg_none t_444">justify-content: <i className="t_blue">space-between</i>;</code></figcaption>
      							<img src={`${IMG.CSS}/flexbox/uxkm_flexbox-justify-content-space-between.svg`} alt="flex-justify-content: space-between;" className="mt_s" />
      						</figure>
      					</li>

      					
      					<li className="tit_h4 mt_l">
      						<h4>space-around</h4>
      						<p className="mt_ms">
      							플렉스 요소의 양 옆에 동일한 여유 공간을 두고 배치됩니다.<br />
      							(Items를 균등한 여백을 포함하여 정렬합니다. 항목은 동일한 간격으로 줄에 균등하게 분배)
      						</p>
      						
      <CodeBlock title={"Flex properties [justify-content : space-around]"} language="javascript" className="uk_gist_code_box mt_ms">
      {`div {
      									justify-content: space-around;
      								}`}
      </CodeBlock>

      						<figure className="img_figure mt_m">
      							<figcaption className="mt_0"><code className="bg_none t_444">justify-content: <i className="t_blue">space-around</i>;</code></figcaption>
      							<img src={`${IMG.CSS}/flexbox/uxkm_flexbox-justify-content-space-around.svg`} alt="flex-justify-content: space-around;" className="mt_s" />
      						</figure>
      					</li>

      					
      					<li className="tit_h4 mt_l">
      						<h4>space-evenly</h4>
      						<p className="mt_ms">
      							플렉스 요소의 사이의 양쪽 간격이 동일하게 배치됩니다.
      						</p>
      						
      <CodeBlock title={"Flex properties [justify-content : space-evenly]"} language="javascript" className="uk_gist_code_box mt_ms">
      {`div {
      									justify-content: space-evenly;
      								}`}
      </CodeBlock>

      						<figure className="img_figure mt_m">
      							<figcaption className="mt_0"><code className="bg_none t_444">justify-content: <i className="t_blue">space-evenly</i>;</code></figcaption>
      							<img src={`${IMG.CSS}/flexbox/uxkm_flexbox-justify-content-space-evenly.svg`} alt="flex-justify-content: space-evenly;" className="mt_s" />
      						</figure>
      					</li>
      				</ol>
      			</div>

      			<div className="view_editor edit_code mt_l">
      				<h4 className="ve_tit">justify-content 예제</h4>
      				<Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="/css/step03/4.4.flexible/4.4.1.flexible-justify-content.html" className="uk_editor indent min_height_550 mb_result_height_500" mode="htmlmixed" theme="moxer" browser="default" result minHeight="550px" mbResultHeight="500px" />
      </Suspense></div>
      			<aside className="browser_support mt_ml" data-tit="flex-flow" aria-label="브라우저 지원 현황">
      				<ul>
      					<li className="ie">10+ -ms-</li>
      					<li className="edge">12.0</li>
      					<li className="chrome">29.0</li>
      					<li className="firefox">28.0</li>
      					<li className="opera">17.0</li>
      					<li className="safari">9.0</li>
      				</ul>
      			</aside>
      		</article>

      		
      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue" data-conlist-h4="true">align-content</h3>
      			<p className="mt_m">
      				<code>flex container</code>의 교차 축(cross-axis)을 기준으로 <code>flex item</code>을 수직 정렬합니다.<br />
      				참고로 <code>justify-content</code> 속성은 <code>flex container</code>의 main axis를 기준으로 <code>flex item</code>을 수평 정렬합니다.
      			</p>
      			<p className="mt_s">
      				주의할 점은 <code>flex item</code>이 한 줄일 경우 작동하지 않으며, 2줄 이상에 <code>flex container</code>에 여백이 있는 경우에만 의미가 있습니다.<br />
      				또한 <code>flex-wrap</code> 속성에 <code>nowrap</code>이 선언되어 있으면 <code>flex item</code>이 한 줄로 정렬되기 때문에 이 경우에도 의미가 없습니다.<br />
      				<code>flex item</code>이 한 줄일 경우 <code>align-items</code> 속성을 사용해야 합니다.
      			</p>
      			<p className="reference mt_s"><a href="https://www.w3.org/TR/css-flexbox-1/#align-content-property" target="_blank" rel="noreferrer" title="새창열림">w3.org/TR/css-flexbox-1/#align-content-property</a></p>
      			
      <CodeBlock title="Flex properties [align-content]" language="javascript" className="uk_gist_code_box mt_m">
      {`div {
      						align-content: stretch | flex-start | center | flex-end | space-between | space-around | space-evenly | start | end | baseline | first baseline | last baseline + ... safe | unsafe;
      					}`}
      </CodeBlock>

      			<figure className="img_figure mt_ml">
      				<figcaption className="mt_0">[<code className="bg_none t_blue">align-content</code>를 시각적으로 설명하는 다이어그램]</figcaption>
      				<img src={`${IMG.CSS}/flexbox/uxkm_flex-align-content_pc.svg`} alt="align-content를 시각적으로 설명하는 다이어그램" className="mt_m dp_md_pc mg_center" />
      				<img src={`${IMG.CSS}/flexbox/uxkm_flex-align-content_md.svg`} alt="align-content를 시각적으로 설명하는 다이어그램" className="mt_m dp_md mg_center" />
      			</figure>

      			<div className="ol_lst">
      				<ol>
      					
      					<li className="tit_h4 mt_l">
      						<h4>stretch (기본값)</h4>
      						<p className="mt_ms">기본값이며, flex container의 교차 축을 채우기 위해 flex Items을 늘립니다.</p>
      						
      <CodeBlock title={"Flex properties [align-content : stretch]"} language="javascript" className="uk_gist_code_box mt_ms">
      {`div {
      									align-content: stretch;
      								}`}
      </CodeBlock>

      						<figure className="img_figure mt_m">
      							<figcaption className="mt_0"><code className="bg_none t_444">align-content : <i className="t_blue">stretch</i>;</code></figcaption>
      							<img src={`${IMG.CSS}/flexbox/uxkm_flexbox-align-content-stretch.svg`} alt="align-content : stretch;" className="mt_s" />
      						</figure>
      					</li>

      					
      					<li className="tit_h4 mt_l">
      						<h4>flex-start</h4>
      						<p className="mt_ms">flex Items을 시작점(위쪽) 기준으로 정렬합니다.</p>
      						
      <CodeBlock title={"Flex properties [align-content : flex-start]"} language="javascript" className="uk_gist_code_box mt_ms">
      {`div {
      									align-content: flex-start;
      								}`}
      </CodeBlock>

      						<figure className="img_figure mt_m">
      							<figcaption className="mt_0"><code className="bg_none t_444">align-content : <i className="t_blue">flex-start</i>;</code></figcaption>
      							<img src={`${IMG.CSS}/flexbox/uxkm_flexbox-align-content-flex-start.svg`} alt="align-content : flex-start;" className="mt_s" />
      						</figure>
      					</li>

      					
      					<li className="tit_h4 mt_l">
      						<h4>center</h4>
      						<p className="mt_ms">flex Items을 flex container 교차축 기준 가운데로 정렬합니다.</p>
      						
      <CodeBlock title={"Flex properties [align-content : center]"} language="javascript" className="uk_gist_code_box mt_ms">
      {`div {
      									align-content: center;
      								}`}
      </CodeBlock>

      						<figure className="img_figure mt_m">
      							<figcaption className="mt_0"><code className="bg_none t_444">align-content : <i className="t_blue">center</i>;</code></figcaption>
      							<img src={`${IMG.CSS}/flexbox/uxkm_flexbox-align-content-center.svg`} alt="align-content : center;" className="mt_s" />
      						</figure>
      					</li>

      					
      					<li className="tit_h4 mt_l">
      						<h4>flex-end</h4>
      						<p className="mt_ms">flex Items을 끝점(아래쪽) 기준으로 정렬합니다.</p>
      						
      <CodeBlock title={"Flex properties [align-content : flex-end]"} language="javascript" className="uk_gist_code_box mt_ms">
      {`div {
      									align-content: flex-end;
      								}`}
      </CodeBlock>

      						<figure className="img_figure mt_m">
      							<figcaption className="mt_0"><code className="bg_none t_444">align-content : <i className="t_blue">flex-end</i>;</code></figcaption>
      							<img src={`${IMG.CSS}/flexbox/uxkm_flexbox-align-content-flex-end.svg`} alt="align-content : flex-end;" className="mt_s" />
      						</figure>
      					</li>

      					
      					<li className="tit_h4 mt_l">
      						<h4>space-between</h4>
      						<p className="mt_ms">flex Items이 위/아래 기준 양쪽 끝에 정렬되고 나머지 flex Items은 위/아래 사이 공간에 고르게 정렬됩니다.</p>
      						
      <CodeBlock title={"Flex properties [align-content : space-between]"} language="javascript" className="uk_gist_code_box mt_ms">
      {`div {
      									align-content: space-between;
      								}`}
      </CodeBlock>

      						<figure className="img_figure mt_m">
      							<figcaption className="mt_0"><code className="bg_none t_444">align-content : <i className="t_blue">space-between</i>;</code></figcaption>
      							<img src={`${IMG.CSS}/flexbox/uxkm_flexbox-align-content-space-between.svg`} alt="align-content : space-between;" className="mt_s" />
      						</figure>
      					</li>

      					
      					<li className="tit_h4 mt_l">
      						<h4>space-around</h4>
      						<p className="mt_ms">flex Item의 각 행이 동일한 여유공간을 두고 정렬됩니다. (중간의 행은 더 큰 여유공간이 있는 것처럼 보여집니다.)</p>
      						
      <CodeBlock title={"Flex properties [align-content : space-around]"} language="javascript" className="uk_gist_code_box mt_ms">
      {`div {
      									align-content: space-around;
      								}`}
      </CodeBlock>

      						<figure className="img_figure mt_m">
      							<figcaption className="mt_0"><code className="bg_none t_444">align-content : <i className="t_blue">space-around</i>;</code></figcaption>
      							<img src={`${IMG.CSS}/flexbox/uxkm_flexbox-align-content-space-around.svg`} alt="align-content : space-around;" className="mt_s" />
      						</figure>
      					</li>

      					
      					<li className="tit_h4 mt_l">
      						<h4>space-evenly</h4>
      						<p className="mt_ms">flex Item의 각 행이 flex container의 여백을 균등하게 나누어 정렬됩니다.</p>
      						
      <CodeBlock title={"Flex properties [align-content : space-evenly]"} language="javascript" className="uk_gist_code_box mt_ms">
      {`div {
      									align-content: space-evenly;
      								}`}
      </CodeBlock>

      						<figure className="img_figure mt_m">
      							<figcaption className="mt_0"><code className="bg_none t_444">align-content : <i className="t_blue">space-evenly</i>;</code></figcaption>
      							<img src={`${IMG.CSS}/flexbox/uxkm_flexbox-align-content-space-evenly.svg`} alt="align-content : space-evenly;" className="mt_s" />
      						</figure>
      					</li>
      				</ol>
      			</div>

      			<div className="view_editor edit_code mt_l">
      				<h4 className="ve_tit">align-content 예제</h4>
      				<Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="/css/step03/4.4.flexible/4.4.1.flexible-align-content.html" className="uk_editor indent min_height_550 mb_result_height_520" mode="htmlmixed" theme="moxer" browser="default" result minHeight="550px" mbResultHeight="520px" />
      </Suspense></div>
      			<aside className="browser_support mt_ml" data-tit="align-content" aria-label="브라우저 지원 현황">
      				<ul>
      					<li className="ie">10+ -ms-</li>
      					<li className="edge">12.0</li>
      					<li className="chrome">29.0</li>
      					<li className="firefox">28.0</li>
      					<li className="opera">17.0</li>
      					<li className="safari">9.0</li>
      				</ul>
      			</aside>
      		</article>

      		
      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue" data-conlist-h4="true">align-items</h3>
      			<p className="mt_m">
      				<code>align-items</code>는 <code>flex container</code>에 지정하는 속성이며, <code>flex container</code>의 교차축(세로)을 기준으로 <code>flex item</code>을 정렬합니다.
      				<code>align-items</code> 속성은 모든 <code>flex item</code>에 적용됩니다. (<code>align-items</code> 속성은 모든 직속 자식의 <code>align-self</code>를 지정합니다.)
      			</p>
      			<p className="mt_s">
      				<code>align-items</code> 속성은 플렉스박스에서는 교차 축을 기준으로 아이템을 정렬하고, 그리드 레이아웃에서는 각 아이템의 그리드 영역 내에서 블록 축을 기준으로 정렬합니다.
      			</p>
      			<p className="reference mt_s"><a href="https://www.w3.org/TR/css-flexbox-1/#propdef-align-items" target="_blank" rel="noreferrer" title="새창열림">w3.org/TR/css-flexbox-1/#propdef-align-items</a></p>
      			
      <CodeBlock title="Flex properties [align-items]" language="javascript" className="uk_gist_code_box mt_m">
      {`<style>
      						div {
      							align-items: stretch | flex-start | center | flex-end | baseline | first baseline | last baseline | start | end | self-start | self-end + ... safe | unsafe;
      						}
      					</style>`}
      </CodeBlock>

      			<figure className="img_figure mt_ml">
      				<figcaption className="mt_0">[<code className="bg_none t_blue">align-items</code>를 시각적으로 설명하는 다이어그램]</figcaption>
      				<img src={`${IMG.CSS}/flexbox/uxkm_flex-align-items_pc.svg`} alt="align-items를 시각적으로 설명하는 다이어그램" className="mt_m dp_md_pc mg_center" />
      				<img src={`${IMG.CSS}/flexbox/uxkm_flex-align-items_md.svg`} alt="align-items를 시각적으로 설명하는 다이어그램" className="mt_m dp_md mg_center" />
      			</figure>

      			<div className="ol_lst">
      				<ol>
      					
      					<li className="tit_h4 mt_l">
      						<h4>stretch (기본값)</h4>
      						<p className="mt_ms">
      							기본값이며,
      							모든 <code>flex item</code>은 <code>flex container</code>의 높이(cross start에서 cross end까지의 높이)에 꽉찬 높이를 갖습니다.<br />
      							(flex container의 교차 축을 채우기 위해 Items를 늘립니다.)
      						</p>
      						
      <CodeBlock title={"Flex properties [align-items : stretch]"} language="javascript" className="uk_gist_code_box mt_ms">
      {`div {
      									align-items: stretch;
      								}`}
      </CodeBlock>

      						<figure className="img_figure mt_m">
      							<figcaption className="mt_0"><code className="bg_none t_444">align-items: <i className="t_blue">stretch</i>;</code></figcaption>
      							<img src={`${IMG.CSS}/flexbox/uxkm_flexbox-align-items-stretch.svg`} alt="align-items : stretch;" className="mt_s" />
      						</figure>
      					</li>

      					
      					<li className="tit_h4 mt_l">
      						<h4>flex-start</h4>
      						<p className="mt_ms">
      							모든 <code>flex item</code>은 <code>flex container</code>의 cross start(위쪽) 기준으로 정렬됩니다.
      						</p>
      						
      <CodeBlock title={"Flex properties [align-items : flex-start]"} language="javascript" className="uk_gist_code_box mt_ms">
      {`div {
      									align-items: flex-start;
      								}`}
      </CodeBlock>

      						<figure className="img_figure mt_m">
      							<figcaption className="mt_0"><code className="bg_none t_444">align-items: <i className="t_blue">flex-start</i>;</code></figcaption>
      							<img src={`${IMG.CSS}/flexbox/uxkm_flexbox-align-items-flex-start.svg`} alt="align-items : flex-start;" className="mt_s" />
      						</figure>
      					</li>

      					
      					<li className="tit_h4 mt_l">
      						<h4>center</h4>
      						<p className="mt_ms">
      							모든 <code>flex item</code>은 <code>flex container</code>의 교차축(cross axis) 기준 중앙에 정렬됩니다.
      						</p>
      						
      <CodeBlock title={"Flex properties [align-items : center]"} language="javascript" className="uk_gist_code_box mt_ms">
      {`div {
      									align-items: center;
      								}`}
      </CodeBlock>

      						<figure className="img_figure mt_m">
      							<figcaption className="mt_0"><code className="bg_none t_444">align-items: <i className="t_blue">center</i>;</code></figcaption>
      							<img src={`${IMG.CSS}/flexbox/uxkm_flexbox-align-items-center.svg`} alt="align-items : center;" className="mt_s" />
      						</figure>
      					</li>

      					
      					<li className="tit_h4 mt_l">
      						<h4>flex-end</h4>
      						<p className="mt_ms">
      							모든 <code>flex item</code>은 <code>flex container</code>의 cross end(아래쪽) 기준으로 정렬됩니다.
      						</p>
      						
      <CodeBlock title={"Flex properties [align-items : flex-end]"} language="javascript" className="uk_gist_code_box mt_ms">
      {`div {
      									align-items: flex-end;
      								}`}
      </CodeBlock>

      						<figure className="img_figure mt_m">
      							<figcaption className="mt_0"><code className="bg_none t_444">align-items: <i className="t_blue">flex-end</i>;</code></figcaption>
      							<img src={`${IMG.CSS}/flexbox/uxkm_flexbox-align-items-flex-end.svg`} alt="align-items : flex-end;" className="mt_s" />
      						</figure>
      					</li>

      					
      					<li className="tit_h4 mt_l">
      						<h4>baseline</h4>
      						<p className="mt_ms">
      							모든 <code>flex item</code>은 문자 기준선에 마춰 정렬됩니다.
      						</p>
      						
      <CodeBlock title={"Flex properties [align-items : baseline]"} language="javascript" className="uk_gist_code_box mt_ms">
      {`div {
      									align-items: baseline;
      									align-items: first baseline;
      									align-items: last baseline; //오버플로우 정렬 (위치 정렬 전용)
      									align-items: safe center;
      									align-items: unsafe center;
      								}`}
      </CodeBlock>

      						<figure className="img_figure mt_m">
      							<figcaption className="mt_0"><code className="bg_none t_444">align-items: <i className="t_blue">baseline</i>;</code></figcaption>
      							<img src={`${IMG.CSS}/flexbox/uxkm_flexbox-align-items-baseline.svg`} alt="align-items : baseline;" className="mt_s" /><br />
      							<img src={`${IMG.CSS}/flexbox/uxkm_flexbox-typo_baseline.svg`} alt="align-items : baseline;" className="mt_ml" /><br />
      						</figure>
      					</li>
      				</ol>
      			</div>

      			<div className="view_editor edit_code mt_l">
      				<h4 className="ve_tit">align-items 예제</h4>
      				<Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="/css/step03/4.4.flexible/4.4.1.flexible-align-items.html" className="uk_editor indent min_height_650 mb_result_height_650" mode="htmlmixed" theme="moxer" browser="default" result minHeight="650px" mbResultHeight="650px" />
      </Suspense></div>
      			<aside className="browser_support mt_ml" data-tit="align-items" aria-label="브라우저 지원 현황">
      				<ul>
      					<li className="ie">10+ -ms-</li>
      					<li className="edge">12.0</li>
      					<li className="chrome">29.0</li>
      					<li className="firefox">28.0</li>
      					<li className="opera">17.0</li>
      					<li className="safari">9.0</li>
      				</ul>
      			</aside>
      		</article>
      	</section>

      	<figure className="img_figure indent mt_l">
      		<img src={`${IMG.CSS}/04_css_04_3.png`} alt="Flexbox 정렬 심화 & 실전 패턴" />
      		<figcaption className="reference">
      			Flexbox 정렬 심화 & 실전 패턴
      		</figcaption>
      	</figure>

      	<aside className="reference_box mt_xxl" aria-label="플렉서블 박스 레이아웃 참조">
      		<strong className="tit">플렉서블 박스 레이아웃 참조</strong>
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

export default CssFlexiblePart3Page
