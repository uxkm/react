import { usePageMeta } from '@/components/common/PageMeta'
import '../../../../assets/css/css_flexible_part2.scss'
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
  title: "플렉서블 레이아웃 - 부모 속성 part 1",
  description: "Flexbox의 부모 속성은 플렉스 컨테이너에 적용하는 속성들로, display: flex를 설정한 요소에 사용하여 플렉스 아이템들의 배치 방식을 제어합니다. 이 페이지에서는 플렉스 컨테이너를 만드는 display 속성, 플렉스 아이템 간 간격을 설정하는 gap 속성, 플렉스 아이템의 주축 방향을 설정하는 flex-direction 속성, 플렉스 아이템의 줄바꿈을 설정하는 flex-wrap 속성, flex-direction과 flex-wrap을 한 번에 설정하는 flex-flow 축약형 속성을 함께 소개합니다.",
  keyword: "style, css, Cascading Style Sheets, flex, 플렉스 박스, flexbox, 레이아웃, 부모요소, display, flex-direction, flex-wrap, flex-flow",
}

function CssFlexiblePart2Page() {
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
      			<b className="t_blue">플렉서블 레이아웃 - 부모 속성 part 1</b>에서는<br />
      		</p>
      		<ul className="dot_lst indent_small">
      			<li className="before_note"><b>display</b></li>
      			<li className="before_note"><b>gap</b></li>
      			<li className="before_note"><b>flex-direction</b></li>
      			<li className="before_note"><b>flex-wrap</b></li>
      			<li className="before_note"><b>flex-flow</b>에 대한 내용을 다루고 있습니다.</li>
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
      			<h3 className="ml_mn t_blue">display</h3>
      			<p className="mt_m">
      				플렉스 환경을 구성합니다.<br />
      				페이지 섹션에서 flexbox를 사용하려면 먼저 부모 컨테이너 <code>display: flex;</code>를 CSS에 추가하여 부모 컨테이너를 flex 컨테이너로 변환해야 합니다.<br />
      				<code>display: flex;</code> 를 할당함으로써 부모 컨테이너에 대해 가로로 배열됩니다.
      				이렇게 하면 flexbox가 컨테이너 내에서 항목을 기본적으로 왼쪽에서 오른쪽으로 배치합니다.<br />
      				CSS의 다단 레이아웃(<code>columns</code>) 속성은 플렉스 컨테이너에 적용되지 않습니다.
      			</p>
      			<p className="reference mt_s"><a href="https://www.w3.org/TR/css-flexbox-1/#flex-containers" target="_blank" rel="noreferrer" title="새창열림">w3.org/TR/css-flexbox-1/#flex-containers</a></p>
      			
      <CodeBlock title="Flex properties [display]" language="javascript" className="uk_gist_code_box mt_m">
      {`div {
      						display: flex | inline-flex;
      					}`}
      </CodeBlock>

      			<aside className="browser_support mt_ml" data-tit="flex / inline-flex">
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
      			<h3 className="ml_mn t_blue">gap</h3>
      			<p className="mt_m">
      				<code>gap</code> 속성은 플렉스 컨테이너 내에서 플렉스 요소들 사이의 간격을 설정합니다.<br />
      				이 속성을 사용하면 각 요소에 개별적으로 <code>margin</code>을 적용하지 않고도 일관된 간격을 유지할 수 있습니다.<br />
      				<code>gap</code>은 <code>row-gap</code>(행 간격)과 <code>column-gap</code>(열 간격)을 한 번에 설정하는 축약형 속성입니다.
      			</p>
      			<p className="reference mt_s"><a href="https://www.w3.org/TR/css-align-3/#propdef-gap" target="_blank" rel="noreferrer" title="새창열림">w3.org/TR/css-align-3/#propdef-gap</a></p>
      			
      <CodeBlock title="Flex properties [gap]" language="javascript" className="uk_gist_code_box mt_m">
      {`div {
      						gap: <column-gap>; <row-gap>
      						/* 또는 */
      						gap: <length>;
      					}`}
      </CodeBlock>

      			<div className="view_editor edit_code mt_m">
      				<Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="/css/step03/4.4.flexible/4.4.1.flexible-gap.html" className="uk_editor min_height_630 mb_result_height_630" mode="htmlmixed" theme="moxer" browser="default" result minHeight="630px" mbResultHeight="630px" />
      </Suspense></div>
      			<aside className="browser_support mt_ml" data-tit="gap">
      				<ul>
      					<li className="ie">지원 안 함</li>
      					<li className="edge">84.0</li>
      					<li className="chrome">84.0</li>
      					<li className="firefox">63.0</li>
      					<li className="opera">70.0</li>
      					<li className="safari">14.1</li>
      				</ul>
      			</aside>
      		</article>

      		
      		<article className="mt_xl indent">
      			<h3 className="ml_mn t_blue" data-conlist-h4="true">flex-direction</h3>
      			<p className="mt_m">
      				<code>flex-direction</code> 속성은 플렉스 컨테이너 내에서 플렉스 요소가 배치될 주축(main axis) 방향을 설정합니다.<br />
      				Flexbox에서는 &quot;수평&quot;과 &quot;수직&quot; 대신 <b>주축(main axis)</b>과 <b>교차 축(cross axis)</b>이라는 용어를 사용합니다.
      			</p>
      			<p className="mt_s">
      				기본값은 <code>row</code>이며, 명시적으로 설정하지 않아도 주축을 따라 플렉스 요소가 왼쪽에서 오른쪽으로 배치됩니다.<br />
      				<code>column</code>으로 변경하면 주축이 세로 방향이 되어 플렉스 요소가 위에서 아래로 배치됩니다.<br />
      				이 속성은 플렉스 컨테이너에 지정하며, 모든 플렉스 요소의 흐름 방향을 제어합니다.
      			</p>
      			<p className="mt_s">
      				<code>float</code> 레이아웃에서는 <code>clearfix</code>를 사용해야 했지만, Flexbox는 <code>display: flex</code>만으로 자동 정렬되므로 <code>clearfix</code>가 필요 없습니다.
      			</p>
      			<p className="reference mt_s"><a href="https://www.w3.org/TR/css-flexbox-1/#flex-direction-property" target="_blank" rel="noreferrer" title="새창열림">w3.org/TR/css-flexbox-1/#flex-direction-property</a></p>
      			
      <CodeBlock title="Flex properties [flex-direction]" language="javascript" className="uk_gist_code_box mt_m">
      {`div {
      						flex-direction: row | row-reverse | column | column-reverse;
      					}`}
      </CodeBlock>

      			<figure className="img_figure mt_ml">
      				<figcaption className="mt_0">[<code className="bg_none t_blue">flex-direction</code>을 시각적으로 설명하는 다이어그램]</figcaption>
      				<img src={`${IMG.CSS}/flexbox/uxkm_flex-direction.svg`} alt="flex-direction을 시각적으로 설명하는 다이어그램" className="mt_m" />
      			</figure>

      			<div className="ol_lst">
      				<ol>
      					
      					<li className="tit_h4 mt_l before_blue">
      						<h4 className="t_blue">주측(main axis)과 교차축(cross axis)의 이해</h4>
      						<p className="mt_ms">
      							위 요약에 언급됐듯이 <code>flex</code>에서 수평과 수직은 올바른 용어가 아닙니다.
      							대신 <b className="t_blue">주축(main axis)</b> 및 <b className="t_blue">교차 축(cross axis)</b>으로 불리며 사용됩니다.<br />
      							주축은 <code>flex-direction</code>에 의해 정의되며 4개의 값<code>(row | row-reverse | column | column-reverse)</code>을 가질 수 있습니다.
      						</p>
      						<figure className="img_figure mt_m">
      							<figcaption className="mt_0"><code className="bg_none t_blue">row</code> 또는 <code className="bg_none t_blue">row-reverse</code>의 <mark>주축은 인라인 방향(가로 행)</mark>이며, <mark>교차 축은 블록 방향(세로 열)</mark>입니다.</figcaption>
      							<img src={`${IMG.CSS}/flexbox/uxkm_flex_main_axis(row).svg`} alt="flex-direction:row; 기준 main axis" className="mt_m" />
      						</figure>
      						<figure className="img_figure mt_m">
      							<figcaption className="mt_0"><code className="bg_none t_blue">column</code> 또는 <code className="bg_none t_blue">column-reverse</code>의 <mark>주축은 블록 방향(세로 열)</mark>이며, <mark>교차 축은 인라인 방향(가로 행)</mark>입니다.</figcaption>
      							<img src={`${IMG.CSS}/flexbox/uxkm_flex_main_axis(column).svg`} alt="flex-direction:column; 기준 main axis" className="mt_m" />
      						</figure>

      						<p className="mt_m">
      							<code>flex-direction</code>이 선언되지 않으면 기본값인 <code>row</code>가 적용되므로 <mark>주축은 인라인 방향(가로 행)</mark>이며, <mark>교차 축은 블록 방향(세로 열)</mark>입니다.
      						</p>
      					</li>

      					
      					<li className="tit_h4 mt_l">
      						<h4>row (기본값)</h4>
      						
      						<p className="mt_ms">기본 설정으로, 플렉스 요소가 왼쪽에서 오른쪽으로 배치됩니다.</p>
      						
      <CodeBlock title={"Flex properties [flex-direction : row]"} language="javascript" className="uk_gist_code_box mt_ms">
      {`div {
      									flex-direction: row;
      								}`}
      </CodeBlock>

      						<figure className="img_figure mt_m">
      							<figcaption className="mt_0"><code className="bg_none t_444">flex-direction: <i className="t_blue">row</i>;</code></figcaption>
      							<img src={`${IMG.CSS}/flexbox/uxkm_flexbox-flex-direction-row.svg`} alt="flex-direction: row;" className="mt_s" />
      						</figure>
      					</li>

      					
      					<li className="tit_h4 mt_l">
      						<h4>row-reverse</h4>
      						
      						<p className="mt_ms">플렉스 요소가 오른쪽에서 왼쪽으로 배치됩니다.</p>
      						
      <CodeBlock title={"Flex properties [flex-direction : row-reverse]"} language="javascript" className="uk_gist_code_box mt_ms">
      {`div {
      									flex-direction: row-reverse;
      								}`}
      </CodeBlock>

      						<figure className="img_figure mt_m">
      							<figcaption className="mt_0"><code className="bg_none t_444">flex-direction: <i className="t_blue">row-reverse</i>;</code></figcaption>
      							<img src={`${IMG.CSS}/flexbox/uxkm_flexbox-flex-direction-row-reverse.svg`} alt="flex-direction: row-reverse;" className="mt_s" />
      						</figure>
      					</li>

      					
      					<li className="tit_h4 mt_l">
      						<h4>column</h4>
      						<p className="mt_ms">플렉스 요소가 위쪽에서 아래쪽으로 배치됩니다.</p>
      						
      <CodeBlock title={"Flex properties [flex-direction : column]"} language="javascript" className="uk_gist_code_box mt_ms">
      {`div {
      									flex-direction: column;
      								}`}
      </CodeBlock>

      						<figure className="img_figure mt_m">
      							<figcaption className="mt_0"><code className="bg_none t_444">flex-direction: <i className="t_blue">column</i>;</code></figcaption>
      							<img src={`${IMG.CSS}/flexbox/uxkm_flexbox-flex-direction-column.svg`} alt="flex-direction: column;" className="mt_s" />
      						</figure>
      					</li>

      					
      					<li className="tit_h4 mt_l">
      						<h4>column-reverse</h4>
      						<p className="mt_ms">플렉스 요소가 아래쪽에서 위쪽으로 배치됩니다</p>
      						
      <CodeBlock title={"Flex properties [flex-direction : column-reverse]"} language="javascript" className="uk_gist_code_box mt_ms">
      {`div {
      									flex-direction: column-reverse;
      								}`}
      </CodeBlock>

      						<figure className="img_figure mt_m">
      							<figcaption className="mt_0"><code className="bg_none t_444">flex-direction: <i className="t_blue">column-reverse</i>;</code></figcaption>
      							<img src={`${IMG.CSS}/flexbox/uxkm_flexbox-flex-direction-column-reverse.svg`} alt="flex-direction: column-reverse;" className="mt_s" />
      						</figure>
      					</li>

      					
      					<li className="tit_h4 mt_l">
      						<h4>속성 비교</h4>
      						<div className="flex_direction_compare mt_m">
      							<dl className="row_column">
      								<dt><code className="s1">row</code> vs <code className="s2">column</code></dt>
      								<dd>
      									<div>
      										<p>1</p>
      										<p>2</p>
      										<p>3</p>
      										<p>4</p>
      									</div>
      								</dd>
      							</dl>
      							<dl className="column_reverse">
      								<dt><code className="s1">column</code> vs <code className="s2">column-reverse</code></dt>
      								<dd>
      									<div>
      										<p>1</p>
      										<p>2</p>
      										<p>3</p>
      										<p>4</p>
      									</div>
      								</dd>
      							</dl>
      						</div>
      					</li>
      				</ol>
      			</div>

      			<figure className="img_figure indent mt_l">
      				<figcaption className="mt_0">[<code className="bg_none t_blue">flex-direction</code> 예시]</figcaption>
      				<img src={`${IMG.CSS}/flexbox/uxkm_flexbox-flex-direction.svg`} alt="flex-direction 예시" className="mt_m" />
      			</figure>
      			<div className="view_editor edit_code mt_ml">
      				<h4 className="ve_tit">주측(main axis)과 교차축(cross axis) 예제</h4>
      				<Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="/css/step03/4.4.flexible/4.4.1.flexible-flex-direction.html" className="uk_editor indent mt_m min_height_550 mb_result_height_500" mode="htmlmixed" theme="moxer" browser="default" result minHeight="550px" mbResultHeight="500px" />
      </Suspense></div>
      			<aside className="browser_support mt_ml" data-tit="flex-direction">
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
      			<h3 className="ml_mn t_blue" data-conlist-h4="true">flex-wrap</h3>
      			<p className="mt_m">
      				<code>flex-wrap</code> 속성은 플렉스 요소를 한 줄로 배치할지, 여러 줄로 배치할지 결정합니다.<br />
      				<code>flex</code> 컨테이너의 <code>width</code>보다 <code>flex item</code>들의 <code>width</code>의 합계가 더 큰 경우,
      				<i className="t_blue">한 줄로 표현</i>할 것인지, <i className="t_blue">여러 줄로 표현</i>할 것인지를 지정합니다.
      			</p>
      			<p className="reference mt_s"><a href="https://www.w3.org/TR/css-flexbox-1/#flex-wrap-property" target="_blank" rel="noreferrer" title="새창열림">w3.org/TR/css-flexbox-1/#flex-wrap-property</a></p>
      			
      <CodeBlock title="Flex properties [flex-wrap]" language="javascript" className="uk_gist_code_box mt_m">
      {`div {
      						flex-wrap: nowrap | wrap | wrap-reverse;
      					}`}
      </CodeBlock>

      			<figure className="img_figure mt_ml">
      				<figcaption className="mt_0">[<code className="bg_none t_blue">flex-wrap</code>을 시각적으로 설명하는 다이어그램]</figcaption>
      				
      				<img src={`${IMG.CSS}/flexbox/uxkm_flex-wrap.svg`} alt="flex-direction 예시" className="mt_m" />
      			</figure>

      			<div className="ol_lst">
      				<ol>
      					
      					<li className="tit_h4 mt_l">
      						<h4>nowrap (기본값)</h4>
      						<p className="mt_ms">기본값이며, flex item을 줄바꿈 하지 않고 1행에 배치합니다.</p>
      						
      <CodeBlock title={"Flex properties [flex-wrap : nowrap]"} language="javascript" className="uk_gist_code_box mt_ms">
      {`div {
      									flex-wrap: nowrap;
      								}`}
      </CodeBlock>

      						<figure className="img_figure mt_m">
      							<figcaption className="mt_0"><code className="bg_none t_444">flex-wrap: <i className="t_blue">nowrap</i>;</code></figcaption>
      							<img src={`${IMG.CSS}/flexbox/uxkm_flexbox-flex-wrap-nowrap.svg`} alt="flex-wrap: nowrap;" className="mt_s" />
      						</figure>
      					</li>

      					
      					<li className="tit_h4 mt_l">
      						<h4>wrap</h4>
      						<p className="mt_ms">
      							<code>flex item</code>들의 <code>width</code>의 합계가 <code>flex</code> 컨테이너의 <code>width</code>보다 큰 경우
      							<code>flex item</code>을 복수의 행으로 배치합니다.<br />
      							기본적으로 좌에서 우로, 위에서 아래로 배치됩니다.
      						</p>
      						
      <CodeBlock title={"Flex properties [flex-wrap : wrap]"} language="javascript" className="uk_gist_code_box mt_ms">
      {`div {
      									flex-wrap: wrap;
      								}`}
      </CodeBlock>

      						<figure className="img_figure mt_m">
      							<figcaption className="mt_0"><code className="bg_none t_444">flex-wrap: <i className="t_blue">wrap</i>;</code></figcaption>
      							<img src={`${IMG.CSS}/flexbox/uxkm_flexbox-flex-wrap-wrap.svg`} alt="flex-wrap: wrap;" className="mt_s" />
      						</figure>
      					</li>

      					
      					<li className="tit_h4 mt_l">
      						<h4>wrap-reverse</h4>
      						<p className="mt_ms"><code>flex-wrap: wrap;</code>과 동일하나 아래에서 위로 배치됩니다.</p>
      						
      <CodeBlock title={"Flex properties [flex-wrap : wrap-reverse]"} language="javascript" className="uk_gist_code_box mt_ms">
      {`div {
      									flex-wrap: wrap-reverse;
      								}`}
      </CodeBlock>

      						<figure className="img_figure mt_m">
      							<figcaption className="mt_0"><code className="bg_none t_444">flex-wrap: <i className="t_blue">wrap-reverse</i>;</code></figcaption>
      							<img src={`${IMG.CSS}/flexbox/uxkm_flexbox-flex-wrap-wrap-reverse.svg`} alt="flex-wrap: wrap-reverse;" className="mt_s" />
      						</figure>
      					</li>
      				</ol>
      			</div>

      			<div className="view_editor edit_code mt_l">
      				<h4 className="ve_tit">flex-wrap 예제</h4>
      				<Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="/css/step03/4.4.flexible/4.4.1.flexible-flex-wrap.html" className="uk_editor indent min_height_550 mb_result_height_500" mode="htmlmixed" theme="moxer" browser="default" result minHeight="550px" mbResultHeight="500px" />
      </Suspense></div>
      			<aside className="browser_support mt_ml" data-tit="flex-wrap">
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
      			<h3 className="ml_mn t_blue" data-conlist-h4="true">flex-flow</h3>
      			<p className="mt_m">
      				<code>flex-flow</code> 속성은 <code>flex-direction</code> 속성과 <code>flex-wrap</code> 속성을 설정하기 위한 <i>shorthand</i>입니다.<br />
      				기본값은 <code>row nowrap</code>입니다.
      			</p>
      			<p className="reference mt_s"><a href="https://www.w3.org/TR/css-flexbox-1/#flex-flow-property" target="_blank" rel="noreferrer" title="새창열림">w3.org/TR/css-flexbox-1/#flex-flow-property</a></p>
      			
      <CodeBlock title="Flex properties [flex-flow]" language="javascript" className="uk_gist_code_box mt_m">
      {`div {
      						flex-flow: <flex-direction> || <flex-wrap>;
      					}`}
      </CodeBlock>

      			<figure className="img_figure mt_ml">
      				<figcaption className="mt_0">[수평 언어(영어), 수직 언어(일본어)의 배치와 방향 차이를 보여주는 이미지]</figcaption>
      				<img src={`${IMG.CSS}/flexbox/uxkm_flex-flow-example.svg`} alt="수평 언어(영어), 수직 언어(일본어)의 배치와 방향 차이를 보여주는 이미지" className="mt_m" />
      			</figure>

      			<div className="view_editor edit_code mt_ml">
      				<h4 className="ve_tit">flex-flow 예제</h4>
      				<Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="/css/step03/4.4.flexible/4.4.1.flexible-flex-flow.html" className="uk_editor indent mt_m min_height_550 mb_result_height_500" mode="htmlmixed" theme="moxer" browser="default" result minHeight="550px" mbResultHeight="500px" />
      </Suspense></div>
      			<aside className="browser_support mt_ml" data-tit="flex-flow">
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
      		<img src={`${IMG.CSS}/04_css_04_2.png`} alt="Flexbox 속성 상세 및 실전 활용" />
      		<figcaption className="reference">
      			Flexbox 속성 상세 및 실전 활용
      		</figcaption>
      	</figure>

      	<aside className="reference_box mt_xxl">
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

export default CssFlexiblePart2Page
