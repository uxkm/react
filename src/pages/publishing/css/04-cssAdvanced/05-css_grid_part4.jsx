import { usePageMeta } from '@/components/common/PageMeta'
import PublishingPartTabs from '@/components/docs/PublishingPartTabs'
import { IMG } from '@/config/path'
import { Suspense, lazy } from 'react'
const UkEditorTarget = lazy(() => import('@/components/code/UkEditorTarget'))
function EditorFallback() { return <div className="uk_editor min_height_300" aria-hidden /> }
import CodeBlock from '@/components/code/CodeBlock'

const PAGE_LAYOUT = {
  mainClass: "css_grid",
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
  title: "그리드 레이아웃 - 부모 속성 part 2",
  description: "CSS Grid의 부모 속성은 그리드 컨테이너에 적용하는 속성들로, display: grid를 설정한 요소에 사용하여 그리드의 구조와 배치 방식을 제어합니다. 이 페이지에서는 grid-template-rows, grid-template-columns, grid-template-areas를 한 번에 설정하는 grid 속기형 속성, 그리드 아이템 간 간격을 설정하는 gap 속성, 그리드 컨테이너 내부의 전체 그리드를 정렬하는 justify-content와 align-content 속성, 그리드 아이템들을 정렬하는 justify-items와 align-items 속성을 함께 소개합니다.",
  keyword: "style, css, Cascading Style Sheets, grid, 그리드, 그리드 레이아웃, grid layout",
}

function CssGridPart4Page() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  })

  return (
    <>
      <blockquote className="uk_note common_note mt_xxl" role="note">
      	<strong className="sound_only">요약 설명</strong>
      	<p>
      		<b>CSS Grid</b>는 웹 페이지 컨텐츠를 행과 열로 나눌 수 있는 <b>2차원 레이아웃 시스템</b>입니다.<br />
      		<code>display: grid</code> 또는 <code>display: inline-grid</code>로 설정한 요소가 그리드 컨테이너가 되며, 그 안에 포함된 자식 요소들이 그리드 아이템이 됩니다.
      	</p>
      	<p className="mt_ms">
      		<code>flex</code>는 1차원 레이아웃(행 또는 열)을 다루지만, <code>grid</code>는 2차원 레이아웃(행과 열)을 다룹니다.<br />
      		복잡한 레이아웃을 구현하는 데 유용하며, 브라우저 대부분이 완벽하게 지원하고 있습니다.
      	</p>
      </blockquote>
      <PublishingPartTabs sectionType="css" />

      <blockquote className="uk_note mt_xxl" role="note">
      		<strong className="sound_only">요약 설명</strong>
      		<p>
      			<b className="t_blue">그리드 레이아웃 - 부모 속성 part 2</b>에서는<br />
      		</p>
      		<ul className="dot_lst indent_small">
      			<li className="before_note"><b><code>grid</code> 속기형 속성</b></li>
      			<li className="before_note"><b><code>grid</code> 거터</b></li>
      			<li className="before_note"><b><code>grid</code> 콘텐츠(content) 정렬</b></li>
      			<li className="before_note"><b><code>grid</code> 아이템(items) 정렬</b>에 대한 내용을 다루고 있습니다.</li>
      		</ul>
      	</blockquote>

      	
      	<section className="mt_xxl indent">
      		<h2 className="ml_mn">부모 속성(properties for the parent - grid container)</h2>

      		
      		<article className="indent mt_xl">
      			<h3 className="ml_mn" data-conlist-h4="true">grid 속기형 속성</h3>
      			<blockquote className="uk_note mt_ml" role="note">
      				<strong className="sound_only">요약 설명</strong>
      				<p>
      					하나의 속성에 다음 속성들을 모두 일괄 설정할 수 있는 grid 속기형 속성입니다.<br />
      					<code>grid-template-rows</code><br />
      					<code>grid-template-columns</code><br />
      					<code>grid-template-areas</code><br />
      					<code>grid-auto-rows</code><br />
      					<code>grid-auto-columns</code><br />
      					<code>grid-auto-flow</code>
      				</p>
      			</blockquote>

      			
      			<div className="mt_l indent">
      				<h4 className="ml_mn t_blue">grid</h4>
      				<p className="mt_ms">
      					<code>grid-template-xxx</code>과 <code>grid-auto-xxx</code>의 단축 속성을 설명합니다.<br />
      					명시적 그리드 속성 <code>(grid-template-rows, grid-template-columns, grid-template-areas)</code>,<br />
      					암시적 그리드 속성 <code>(grid-auto-rows, grid-auto-columns, grid-auto-flow)</code>을 축약형으로 선언합니다.
      				</p>
      				<ol className="ol_lst mt_s indent">
      					<li><code className="weight-500 t_blue bg_none">none</code> : 모든 속성을 초기 값으로 적용</li>
      					<li>
      						<code className="weight-500 t_blue bg_none">&lt;grid-template-rows&gt; / &lt;grid-template-columns&gt;</code> :
      						<code>grid-tempate-rows</code> / <code>grid-template-columns</code> 속성 설정
      					</li>
      					<li>
      						<code className="weight-500 t_blue bg_none">&lt;grid-auto-flow&gt; [&lt;grid-auto-rows&gt; [/ &lt;grid-auto-columns&gt;]]</code> :
      						<code>grid-auto-flow</code> / <code>grid-auto-rows</code> / <code>grid-auto-columns</code> 속성 설정
      					</li>
      				</ol>

      				
      <CodeBlock title="grid [shorthand]" language="javascript" className="uk_gist_code_box mt_m">
      {`.container {
      							display: grid;

      							/* <'grid-template'> values */
      							grid: none;
      							grid: "a" 100px "b" 1fr;
      							grid: [linename1] "a" 100px [linename2];
      							grid: "a" 200px "b" min-content;
      							grid: "a" minmax(100px, max-content) "b" 20%;
      							grid: 100px / 200px;
      							grid: minmax(400px, min-content) / repeat(auto-fill, 50px);

      							/* <'grid-template-rows'> / [ auto-flow && dense ] <'grid-auto-columns'> values */
      							grid: 200px / auto-flow;
      							grid: 30% / auto-flow dense;
      							grid: repeat(3, [line1 line2 line3] 200px) / auto-flow 300px;
      							grid: [line1] minmax(20em, max-content) / auto-flow dense 40%;

      							/* [ auto-flow && dense ] <'grid-auto-rows'> / <'grid-template-columns'> values */
      							grid: auto-flow / 200px;
      							grid: auto-flow dense / 30%;
      							grid: auto-flow 300px / repeat(3, [line1 line2 line3] 200px);
      							grid: auto-flow dense 40% / [line1] minmax(20em, max-content);
      						}`}
      </CodeBlock>


      				<h5 className="mt_ml">기본 값</h5>
      				
      <CodeBlock title="grid [shorthand]" language="javascript" className="uk_gist_code_box indent mt_ms">
      {`.container {
      							display: grid;
      							grid-template-rows: none;
      							grid-template-columns: none;
      							grid-template-areas: none;
      							grid-auto-rows: auto;
      							grid-auto-columns: auto;
      							grid-auto-flow: row;
      							grid-column-gap: 0;
      							grid-row-gap: 0;
      							column-gap: normal;
      							row-gap: normal;
      						}`}
      </CodeBlock>


      				<h5 className="mt_ml">예시1</h5>
      				
      <CodeBlock title="grid [shorthand]" language="javascript" className="uk_gist_code_box indent mt_ms">
      {`.container {
      							display: grid;
      							grid: 100px 300px / 3fr 1fr;
      							/* 위 방식은 아래 방식처럼 각각 사용한것과 동일합니다. */
      							grid-template-rows: 100px 300px;
      							grid-template-columns: 3fr 1fr;
      						}`}
      </CodeBlock>


      				<h5 className="mt_ml">예시2</h5>
      				
      <CodeBlock title="grid [shorthand]" language="javascript" className="uk_gist_code_box indent mt_ms">
      {`.container {
      							display: grid;
      							grid: auto-flow / 200px 1fr;
      							/* 위 방식은 아래 방식처럼 각각 사용한것과 동일합니다. */
      							grid-auto-flow: row;
      							grid-template-columns: 200px 1fr;
      						}`}
      </CodeBlock>


      				<h5 className="mt_ml">예시3</h5>
      				
      <CodeBlock title="grid [shorthand]" language="javascript" className="uk_gist_code_box indent mt_ms">
      {`.container {
      							display: grid;
      							grid: auto-flow dense 100px / 1fr 2fr;
      							/* 위 방식은 아래 방식처럼 각각 사용한것과 동일합니다. */
      							grid-auto-flow: row dense;
      							grid-auto-rows: 100px;
      							grid-template-columns: 1fr 2fr;
      						}`}
      </CodeBlock>


      				<h5 className="mt_ml">예시4</h5>
      				
      <CodeBlock title="grid [shorthand]" language="javascript" className="uk_gist_code_box indent mt_ms">
      {`.container {
      							display: grid;
      							rid: 100px 300px / auto-flow 200px;
      							/* 위 방식은 아래 방식처럼 각각 사용한것과 동일합니다.
      							grid-template-rows: 100px 300px;
      							grid-auto-flow: column;
      							grid-auto-columns: 200px;
      						}`}
      </CodeBlock>


      				<h5 className="mt_ml">예시5</h5>
      				
      <CodeBlock title="grid [shorthand]" language="javascript" className="uk_gist_code_box indent mt_ms">
      {`.container {
      							display: grid;
      							grid:
      								[row1-start] "header header header" 1fr [row1-end]
      								[row2-start] "footer footer footer" 25px [row2-end]
      								/ auto 50px auto;

      							/* 위 방식은 아래 방식처럼 각각 사용한것과 동일합니다. */
      							grid-template-areas:
      								"header header header"
      								"footer footer footer";
      							grid-template-rows: [row1-start] 1fr [row1-end row2-start] 25px [row2-end];
      							grid-template-columns: auto 50px auto;
      						}`}
      </CodeBlock>


      				<div className="view_editor edit_code mt_ml">
      					<h5 className="ve_tit">grid shorthand 예제</h5>
      					<Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="css/step03/4.5.grid/4.5.grid.html" className="uk_editor indent min_height_500 mb_result_height_400" mode="htmlmixed" theme="moxer" browser="default" result minHeight="500px" mbResultHeight="400px" />
      </Suspense></div>
      			</div>

      			<aside className="browser_support mt_l" data-tit="grid shorthand">
      				<ul>
      					<li className="ie false">지원안함</li>
      					<li className="edge">16.0</li>
      					<li className="chrome">57.0</li>
      					<li className="firefox">52.0</li>
      					<li className="opera">44.0</li>
      					<li className="safari">10.1</li>
      				</ul>
      			</aside>
      		</article>

      		
      		<article className="indent mt_xl">
      			<h3 className="ml_mn" data-conlist-h4="true">grid 거터</h3>
      			<p className="mt_m">
      				그리드 라인(행/열) 사이 간격(gap)을 조정합니다.<br />
      				그리드 거터 속성의 이름 앞에 붙어 있던 <code>grid-</code> 는 모두 제외 되었습니다. 이전에 사용되던 이름은 <code>grid-row-gap</code>, <code>grid-column-gap</code>, <code>gap</code> 입니다.<br />
      				모든 브라우저 호환 이전까지는 예전 이름을 사용하거나, <span className="reference mt_l"><a href="https://jonneal.dev/postcss-gap-properties/" target="_blank" rel="noreferrer" title="새창열림">postcss-gap-properties</a></span>를 사용할 수 있습니다.
      			</p>

      			
      			<div className="mt_l indent">
      				<h4 className="ml_mn t_blue">column-gap(grid-column-gap) / row-gap(grid-row-gap)</h4>
      				<p className="mt_ms">
      					열과 열 사이 및 행과 행 사이의 간격(line)을 지정할 수 있습니다.<br />
      					<code>grid-</code> 접두사가 제거되어 <code>grid-column-gap = column-gap</code>, <code>grid-row-gap = row-gap</code>으로 이름이 변경되었습니다.<br />
      					<code>grid-</code> 접두사가 없는 속성은 <strong className="t_black">Chrome</strong> 68 이상, <strong className="t_black">Safari</strong> 11.2 릴리스 50 이상 및 <strong className="t_black">Opera</strong> 54 이상에서 지원됩니다.
      				</p>
      				<ol className="ol_lst mt_ms indent">
      					<li><code className="weight-500 t_blue bg_noone">column-gap</code> : <code>&lt;line-size&gt;</code></li>
      					<li><code className="weight-500 t_blue bg_noone">row-gap</code> : <code>&lt;line-size&gt;</code></li>
      				</ol>
      				
      <CodeBlock title="grid [column-gap / row-gap]" language="javascript" className="uk_gist_code_box mt_m">
      {`.container {
      							display: grid;
      							grid-column-gap: <line-size>;
      							grid-row-gap: <line-size>;
      						}

      						/* 예제 */
      						.container {
      							display: grid;
      							grid-template-columns: 100px 50px 100px;
      							grid-template-rows: 80px auto 80px;
      							grid-column-gap: 10px;
      							grid-row-gap: 15px;
      						}`}
      </CodeBlock>

      				<figure className="img_figure mt_m">
      					<figcaption className="mt_0">[<code className="bg_none t_blue">gutters</code>는 외부 모서리가 아닌 열 / 행 사이에만 작성됩니다.]</figcaption>
      					<img src={`${IMG.CSS}/grid/uxkm_grid-gap.svg`} alt="gutters는 외부 모서리가 아닌 열 / 행 사이에만 작성됩니다." className="mt_m" />
      				</figure>
      				<aside className="browser_support mt_m" data-tit="column-gap/row-gap">
      					<ul>
      						<li className="ie false">지원안함</li>
      						<li className="edge">16.0</li>
      						<li className="chrome">57.0</li>
      						<li className="firefox">52.0</li>
      						<li className="opera">44.0</li>
      						<li className="safari">10.1</li>
      					</ul>
      				</aside>
      			</div>

      			
      			<div className="mt_l indent">
      				<h4 className="ml_mn t_blue">gap(grid-gap)</h4>
      				<p className="mt_ms">
      					<code>column-gap / row-gap</code> 의 축약(shorthand) 속성입니다.<br />
      					<code>grid-</code> 접두사가 제거되고 <code>grid-gap = gap</code> 으로 이름이 변경되었습니다.<br />
      					<code>grid-</code> 접두사가 없는 속성은 chrome 68 이상, safari 11.2 릴리스 50 이상 및 opera 54 이상에서 지원됩니다.<br />
      					그리드 거터 속성의 이름 앞에 붙어 있던 <code>grid-</code>는 모두 제외되었습니다. 이전에 사용되던 이름은 <code>grid-row-gap</code>, <code>grid-column-gap</code>, <code>gap</code>입니다.
      				</p>
      				<p className="mt_s">
      					모든 브라우저 호환 이전까지는 예전 이름을 사용하거나 postcss-gap-properties를 사용할 수 있습니다.<br />
      					그리드 행/열 사이 간격을 조정할 수 있으며, 퍼센트 값은 콘텐츠 영역에 상대적으로 설정됩니다.
      				</p>
      				<ol className="ol_lst mt_s indent">
      					<li><strong className="weight-500 t_blue bg_noone">축약(shorthand) 속성 - gap</strong> : <code>&lt;grid-row-gap&gt; &lt;grid-column-gap&gt;</code></li>
      				</ol>
      				
      <CodeBlock title="grid [grid-gap]" language="javascript" className="uk_gist_code_box mt_m">
      {`.container {
      							display: grid;
      							grid-gap: <grid-row-gap> <grid-column-gap>;
      						}

      						/* 예제 */
      						.container {
      							display: grid;
      							grid-template-rows: 80px auto 80px;
      							grid-template-columns: 100px 50px 100px;
      							/* 행 사이 간격 설정 */
      							row-gap: 10px;
      							/* 열 사이 간격 설정 */
      							column-gap: 15px;
      						}

      						/* 축약형 */
      						.container {
      							display: grid;
      							grid-template: 80px auto 80px / 100px 50px 100px;
      							/* 행/열 사이 간격 설정 */
      							gap: 10px 15px;
      						}

      						/* grid-gap 값으로 1개만 입력하면 행/열 사이 간격이 동일하게 설정됩니다. */
      						.container {
      							display: grid;
      							gap: 20px; /* or grid-row-gap: 20px; grid-column-gap: 20px; */
      						}`}
      </CodeBlock>

      				<aside className="browser_support mt_m" data-tit="gap(grid-gap)">
      					<ul>
      						<li className="ie false">지원안함</li>
      						<li className="edge">16.0</li>
      						<li className="chrome">57.0</li>
      						<li className="firefox">52.0</li>
      						<li className="opera">44.0</li>
      						<li className="safari">10.1</li>
      					</ul>
      				</aside>
      			</div>
      		</article>

      		
      		<article className="indent mt_xl">
      			<h3 className="ml_mn" data-conlist-h4="true">grid 콘텐츠(content) 정렬</h3>

      			
      			<div className="mt_l indent">
      				<h4 className="ml_mn t_blue">align-content</h4>
      				<p className="mt_ms">
      					열과 열 사이 및 행과 행 사이의 간격(line)을 지정할 수 있습니다.<br />
      					<code>grid-</code> 접두사가 제거되어 <code>grid-column-gap = column-gap</code>, <code>grid-row-gap = row-gap</code>으로 이름이 변경되었습니다.<br />
      					<code>grid-</code> 접두사가 없는 속성은 <strong className="t_black">Chrome</strong> 68 이상, <strong className="t_black">Safari</strong> 11.2 릴리스 50 이상 및 <strong className="t_black">Opera</strong> 54 이상에서 지원됩니다.
      				</p>
      				
      <CodeBlock title="grid [align-content]" language="javascript" className="uk_gist_code_box mt_m">
      {`.container {
      							display: grid;
      							align-content : start | center | end | stretch | space-between | space-around | space-evenly;
      						}`}
      </CodeBlock>

      				<ol className="ol_lst mt_ml indent">
      					
      					<li>
      						<p>
      							<code className="weight-500 t_blue bg_noone">start</code>
      							: 그리드 컨테이너 영역의 시작점(위쪽)에 아이템 트랙을 정렬합니다
      						</p>
      						<figure className="img_figure mt_s">
      							<figcaption className="mt_0"><code className="bg_none t_444">align-content: <i className="t_blue">start</i>;</code></figcaption>
      							<img src={`${IMG.CSS}/grid/uxkm_grid-align-content-start.svg`} alt="align-content: start" className="mt_s" />
      						</figure>
      					</li>

      					
      					<li className="mt_m">
      						<p>
      							<code className="weight-500 t_blue bg_noone">center</code>
      							: 그리드 컨테이너 영역의 중앙에 아이템 트랙을 정렬합니다(수직 가운데 정렬)
      						</p>
      						<figure className="img_figure mt_s">
      							<figcaption className="mt_0"><code className="bg_none t_444">align-content: <i className="t_blue">center</i>;</code></figcaption>
      							<img src={`${IMG.CSS}/grid/uxkm_grid-align-content-center.svg`} alt="align-content: center" className="mt_s" />
      						</figure>
      					</li>

      					
      					<li className="mt_m">
      						<p>
      							<code className="weight-500 t_blue bg_noone">end</code>
      							: 그리드 컨테이너 영역의 끝점(아래쪽)에 아이템 트랙을 정렬합니다
      						</p>
      						<figure className="img_figure mt_s">
      							<figcaption className="mt_0"><code className="bg_none t_444">align-content: <i className="t_blue">end</i>;</code></figcaption>
      							<img src={`${IMG.CSS}/grid/uxkm_grid-align-content-end.svg`} alt="align-content: end" className="mt_s" />
      						</figure>
      					</li>

      					
      					<li className="mt_m">
      						<p>
      							<code className="weight-500 t_blue bg_noone">stretch</code>
      							: 그리드 컨테이너 영역을 아이템 트랙 크기를 조정하여 채움(열 축을 채우기 위해 그리드 콘텐츠를 늘림)
      						</p>
      						<figure className="img_figure mt_s">
      							<figcaption className="mt_0"><code className="bg_none t_444">align-content: <i className="t_blue">stretch</i>;</code></figcaption>
      							<img src={`${IMG.CSS}/grid/uxkm_grid-align-content-stretch.svg`} alt="align-content: stretch" className="mt_s" />
      						</figure>
      					</li>

      					
      					<li className="mt_m">
      						<p>
      							<code className="weight-500 t_blue bg_noone">space-between</code>
      							: 그리드 컨테이너 영역의 양 가장자리 공백 없이 아이템 트랙(열) 사이 공간을 나눕니다(첫 행은 시작점에, 끝 행은 끝점에 정렬되고 나머지 여백으로 고르게 정렬)
      						</p>
      						<figure className="img_figure mt_s">
      							<figcaption className="mt_0"><code className="bg_none t_444">align-content: <i className="t_blue">space-between</i>;</code></figcaption>
      							<img src={`${IMG.CSS}/grid/uxkm_grid-align-content-space-between.svg`} alt="align-content: space-between" className="mt_s" />
      						</figure>
      					</li>

      					
      					<li className="mt_m">
      						<p>
      							<code className="weight-500 t_blue bg_noone">space-around</code>
      							: 그리드 컨테이너의 남은 영역을 아이템 트랙(열)이 좌/우 공간으로 나눕니다(양 가장자리 공간은 아이템 그룹 사이 간격의 1/2)(각 행 위아래에 여백을 고르게 정렬)
      						</p>
      						<figure className="img_figure mt_s">
      							<figcaption className="mt_0"><code className="bg_none t_444">align-content: <i className="t_blue">space-around</i>;</code></figcaption>
      							<img src={`${IMG.CSS}/grid/uxkm_grid-align-content-space-around.svg`} alt="align-content: space-around" className="mt_s" />
      						</figure>
      					</li>

      					
      					<li className="mt_m">
      						<p>
      							<code className="weight-500 t_blue bg_noone">space-evenly</code>
      							: <code>space-around</code>와 비슷해 보이지만, 공간을 모두 동일하게 나누는 점이 다릅니다(모든 여백을 고르게 정렬)
      						</p>
      						<figure className="img_figure mt_s">
      							<figcaption className="mt_0"><code className="bg_none t_444">align-content: <i className="t_blue">space-evenly</i>;</code></figcaption>
      							<img src={`${IMG.CSS}/grid/uxkm_grid-align-content-space-evenly.svg`} alt="align-content: space-evenly" className="mt_s" />
      						</figure>
      					</li>
      				</ol>
      				<aside className="browser_support mt_ml" data-tit="align-content">
      					<ul>
      						<li className="ie false">지원안함</li>
      						<li className="edge">16.0</li>
      						<li className="chrome">57.0</li>
      						<li className="firefox">52.0</li>
      						<li className="opera">44.0</li>
      						<li className="safari">10.1</li>
      					</ul>
      				</aside>
      			</div>

      			
      			<div className="mt_l indent">
      				<h4 className="ml_mn t_blue">justify-content</h4>
      				<p className="mt_ms">
      					그리드 콘텐츠를 수평(행 축)으로 정렬할 수 있습니다.<br />
      					그리드 컨테이너의 크기보다 작은 그리드 아이템 트랙(<code>px</code>와 같은 고정 단위로 설정된 경우)의 크기라면 아이템 트랙을 정렬할 수 있습니다.<br />
      					이 속성은 행(row) 축을 따라 그리드 아이템 트랙을 정렬하며, <code>align-content</code> 속성과 반대 방향입니다.
      				</p>
      				
      <CodeBlock title="grid [justify-content]" language="javascript" className="uk_gist_code_box mt_m">
      {`.container {
      							display: grid;
      							justify-content: start | end | center | stretch | space-between | space-around | space-evenly;
      						}`}
      </CodeBlock>

      				<ol className="ol_lst mt_ml indent">

      					
      					<li>
      						<p>
      							<code className="weight-500 t_blue bg_noone">start</code>
      							: 그리드 컨테이너 영역의 시작점(왼쪽)에 아이템 트랙을 정렬합니다
      						</p>
      						<figure className="img_figure mt_s">
      							<figcaption className="mt_0"><code className="bg_none t_444">justify-content: <i className="t_blue">start</i>;</code></figcaption>
      							<img src={`${IMG.CSS}/grid/uxkm_grid-justify-content-start.svg`} alt="justify-content: start" className="mt_s" />
      						</figure>
      					</li>

      					
      					<li className="mt_m">
      						<p>
      							<code className="weight-500 t_blue bg_noone">center</code>
      							: 그리드 컨테이너 영역의 중앙에 아이템 트랙을 정렬
      						</p>
      						<figure className="img_figure mt_s">
      							<figcaption className="mt_0"><code className="bg_none t_444">justify-content: <i className="t_blue">center</i>;</code></figcaption>
      							<img src={`${IMG.CSS}/grid/uxkm_grid-justify-content-center.svg`} alt="justify-content: center" className="mt_s" />
      						</figure>
      					</li>

      					
      					<li className="mt_m">
      						<p>
      							<code className="weight-500 t_blue bg_noone">end</code>
      							: 그리드 컨테이너 영역의 끝점(오른쪽)에 아이템 트랙을 정렬합니다
      						</p>
      						<figure className="img_figure mt_s">
      							<figcaption className="mt_0"><code className="bg_none t_444">justify-content: <i className="t_blue">end</i>;</code></figcaption>
      							<img src={`${IMG.CSS}/grid/uxkm_grid-justify-content-end.svg`} alt="justify-content: end" className="mt_s" />
      						</figure>
      					</li>

      					
      					<li className="mt_m">
      						<p>
      							<code className="weight-500 t_blue bg_noone">stretch</code>
      							: 그리드 컨테이너 영역을 아이템 트랙 크기를 조정하여 채움(행 축을 채우기 위해 그리드 콘텐츠를 늘림)
      						</p>
      						<figure className="img_figure mt_s">
      							<figcaption className="mt_0"><code className="bg_none t_444">justify-content: <i className="t_blue">stretch</i>;</code></figcaption>
      							<img src={`${IMG.CSS}/grid/uxkm_grid-justify-content-stretch.svg`} alt="justify-content: stretch" className="mt_s" />
      						</figure>
      					</li>

      					
      					<li className="mt_m">
      						<p>
      							<code className="weight-500 t_blue bg_noone">space-between</code>
      							: 그리드 컨테이너 영역의 양 가장자리 공백 없이 아이템 트랙(열) 사이 공간을 나눕니다(첫 열은 시작점에, 끝 열은 끝점에 정렬되고 나머지 여백으로 고르게 정렬)
      						</p>
      						<figure className="img_figure mt_s">
      							<figcaption className="mt_0"><code className="bg_none t_444">justify-content: <i className="t_blue">space-between</i>;</code></figcaption>
      							<img src={`${IMG.CSS}/grid/uxkm_grid-justify-content-space-between.svg`} alt="justify-content: space-between" className="mt_s" />
      						</figure>
      					</li>

      					
      					<li className="mt_m">
      						<p>
      							<code className="weight-500 t_blue bg_noone">space-around</code>
      							: 그리드 컨테이너의 남은 영역을 아이템 트랙(열)이 좌/우 공간으로 나눔(양 가장자리 공간은 아이템 그룹 사이 간격의 1/2)(각 열 좌우에 여백을 고르게 정렬)
      						</p>
      						<figure className="img_figure mt_s">
      							<figcaption className="mt_0"><code className="bg_none t_444">justify-content: <i className="t_blue">space-around</i>;</code></figcaption>
      							<img src={`${IMG.CSS}/grid/uxkm_grid-justify-content-space-around.svg`} alt="justify-content: space-around" className="mt_s" />
      						</figure>
      					</li>

      					
      					<li className="mt_m">
      						<p>
      							<code className="weight-500 t_blue bg_noone">space-evenly</code>
      							: <code>space-around</code>와 비슷해보이지만, 공간을 모두 동일하게 나누는 점이 다름(모든 여백을 고르게 정렬)
      						</p>
      						<figure className="img_figure mt_s">
      							<figcaption className="mt_0"><code className="bg_none t_444">justify-content: <i className="t_blue">space-evenly</i>;</code></figcaption>
      							<img src={`${IMG.CSS}/grid/uxkm_grid-justify-content-space-evenly.svg`} alt="justify-content: space-evenly" className="mt_s" />
      						</figure>
      					</li>
      				</ol>
      				<aside className="browser_support mt_ml" data-tit="justify-content">
      					<ul>
      						<li className="ie false">지원안함</li>
      						<li className="edge">16.0</li>
      						<li className="chrome">57.0</li>
      						<li className="firefox">52.0</li>
      						<li className="opera">44.0</li>
      						<li className="safari">10.1</li>
      					</ul>
      				</aside>
      			</div>

      			
      			<div className="mt_l indent">
      				<h4 className="ml_mn t_blue">place-content</h4>
      				<p className="mt_ms">
      					<code>&lt;align-content&gt;</code> / <code>&lt;justify-content&gt;</code>의 단축 속성입니다.<br />
      					첫 번째 값은 <code>align-content</code>속성 값이고 두 번째 값은 <code>justify-content</code> 속성 값입니다.<br />
      					firefox버전 60부터는 <code>align-content</code> 및 <code>justify-content</code>에 모두 유효한 경우 단일 값만 지정할 수 있습니다.
      				</p>

      				<h5 className="mt_ml">위치 정렬(positional alignment)</h5>
      				<p className="indent mt_sm"><code>align-content</code>는 왼쪽(left)과 오른쪽(right) 값을 사용하지 않습니다.</p>
      				
      <CodeBlock title={"grid [place-content : positional alignment]"} language="javascript" className="uk_gist_code_box indent mt_ms">
      {`.container {
      							display: grid;
      							place-content: center start;
      							place-content: start center;
      							place-content: end left;
      							place-content: flex-start center;
      							place-content: flex-end center;
      						}`}
      </CodeBlock>


      				<h5 className="mt_ml">기준선 정렬(baseline alignment)</h5>
      				<p className="indent mt_sm"><code>justify-content</code>는 기준 값을 사용하지 않습니다.</p>
      				
      <CodeBlock title={"grid [place-content : baseline alignment]"} language="javascript" className="uk_gist_code_box indent mt_ms">
      {`.container {
      							display: grid;
      							place-content: baseline center;
      							place-content: first baseline space-evenly;
      							place-content: last baseline right;
      						}`}
      </CodeBlock>


      				<h5 className="mt_ml">분산 정렬(distributed alignment)</h5>
      				
      <CodeBlock title={"grid [place-content : distributed alignment]"} language="javascript" className="uk_gist_code_box indent mt_ms">
      {`.container {
      							display: grid;
      							place-content: space-between space-evenly;
      							place-content: space-around space-evenly;
      							place-content: space-evenly stretch;
      							place-content: stretch space-evenly;
      						}`}
      </CodeBlock>


      				<aside className="browser_support mt_ml" data-tit="place-content">
      					<ul>
      						<li className="ie false">지원안함</li>
      						<li className="edge false">지원안함</li>
      						<li className="chrome">59.0</li>
      						<li className="firefox">53.0</li>
      						<li className="opera">64.0</li>
      						<li className="safari">11.0</li>
      					</ul>
      				</aside>
      			</div>
      		</article>

      		
      		<article className="indent mt_xl">
      			<h3 className="ml_mn" data-conlist-h4="true">grid 아이템(items) 정렬</h3>

      			
      			<div className="mt_l indent">
      				<h4 className="ml_mn t_blue">align-items</h4>
      				<p className="mt_ms">
      					그리드 아이템(items)들을 수직(열 축) 정렬합니다.<br />
      					열(column) 축을 따라 그리드 아이템 내부 콘텐츠를 정렬합니다. (<code>justify-items</code> 속성의 반대)<br />
      					이 설정은 그리드 컨테이너 내부 모든 그리드 아이템에 적용됩니다.<br />
      					개별 그리드 아이템에 행축 콘텐츠 정렬 속성을 적용하려면 <code>align-self</code> 속성을 사용할 수 있습니다.
      				</p>
      				
      <CodeBlock title="grid [align-items]" language="javascript" className="uk_gist_code_box mt_m">
      {`.container {
      							display: grid;
      							align-items: start | end | center | stretch;
      						}`}
      </CodeBlock>

      				<ol className="ol_lst mt_ml indent">
      					
      					<li>
      						<p>
      							<code className="weight-500 t_blue bg_noone">start</code>
      							: 그리드 영역의 시작점(위쪽)에 콘텐츠 정렬
      						</p>
      						<figure className="img_figure mt_s">
      							<figcaption className="mt_0"><code className="bg_none t_444">align-items: <i className="t_blue">start</i>;</code></figcaption>
      							<img src={`${IMG.CSS}/grid/uxkm_grid-align-items-start.svg`} alt="align-items: start" className="mt_s" />
      						</figure>
      					</li>

      					
      					<li className="mt_m">
      						<p>
      							<code className="weight-500 t_blue bg_noone">center</code>
      							: 그리드 영역의 중앙에 콘텐츠 정렬(수직 가운데 정렬)
      						</p>
      						<figure className="img_figure mt_s">
      							<figcaption className="mt_0"><code className="bg_none t_444">align-items: <i className="t_blue">center</i>;</code></figcaption>
      							<img src={`${IMG.CSS}/grid/uxkm_grid-align-items-center.svg`} alt="align-items: center" className="mt_s" />
      						</figure>
      					</li>

      					
      					<li className="mt_m">
      						<p>
      							<code className="weight-500 t_blue bg_noone">end</code>
      							: 그리드 영역의 끝점(아래쪽)에 콘텐츠 정렬
      						</p>
      						<figure className="img_figure mt_s">
      							<figcaption className="mt_0"><code className="bg_none t_444">align-items: <i className="t_blue">end</i>;</code></figcaption>
      							<img src={`${IMG.CSS}/grid/uxkm_grid-align-items-end.svg`} alt="align-items: end" className="mt_s" />
      						</figure>
      					</li>

      					
      					<li className="mt_m">
      						<p>
      							<code className="weight-500 t_blue bg_noone">stretch</code>
      							: 기본값으로 그리드 영역 전체 너비를 채움(열 축을 채우기 위해 그리드 아이템을 늘림)
      						</p>
      						<figure className="img_figure mt_s">
      							<figcaption className="mt_0"><code className="bg_none t_444">align-items: <i className="t_blue">stretch</i>;</code></figcaption>
      							<img src={`${IMG.CSS}/grid/uxkm_grid-align-items-stretch.svg`} alt="align-items: stretch" className="mt_s" />
      						</figure>
      					</li>
      				</ol>
      				<aside className="browser_support mt_ml" data-tit="align-items">
      					<ul>
      						<li className="ie false">지원안함</li>
      						<li className="edge">16.0</li>
      						<li className="chrome">57.0</li>
      						<li className="firefox">52.0</li>
      						<li className="opera">44.0</li>
      						<li className="safari">10.1</li>
      					</ul>
      				</aside>
      			</div>

      			
      			<div className="mt_l indent">
      				<h4 className="ml_mn t_blue">justify-items</h4>
      				<p className="mt_ms">
      					그리드 아이템들을 수평(행 축) 정렬합니다.<br />
      					행 축을 따라 그리드 아이템 내부 콘텐츠를 정렬합니다. (열 축에 따라 정렬하는 align-self 속성과는 반대)
      				</p>
      				
      <CodeBlock title="grid [justify-items]" language="javascript" className="uk_gist_code_box mt_m">
      {`.container {
      							display: grid;
      							justify-items: start | end | center | stretch;
      						}`}
      </CodeBlock>

      				<ol className="ol_lst mt_ml indent">
      					
      					<li>
      						<p>
      							<code className="weight-500 t_blue bg_noone">start</code>
      							: 그리드 아이템 영역 행 축 시작점(왼쪽)에 콘텐츠를 정렬
      						</p>
      						<figure className="img_figure mt_s">
      							<figcaption className="mt_0"><code className="bg_none t_444">justify-items: <i className="t_blue">start</i>;</code></figcaption>
      							<img src={`${IMG.CSS}/grid/uxkm_grid-justify-items-start.svg`} alt="justify-items: start" className="mt_s" />
      						</figure>
      					</li>

      					
      					<li className="mt_m">
      						<p>
      							<code className="weight-500 t_blue bg_noone">center</code>
      							: 그리드 아이템 영역 행 축 중앙에 콘텐츠를 정렬(수평 가운데 정렬)
      						</p>
      						<figure className="img_figure mt_s">
      							<figcaption className="mt_0"><code className="bg_none t_444">justify-items: <i className="t_blue">center</i>;</code></figcaption>
      							<img src={`${IMG.CSS}/grid/uxkm_grid-justify-items-center.svg`} alt="justify-items: center" className="mt_s" />
      						</figure>
      					</li>

      					
      					<li className="mt_m">
      						<p>
      							<code className="weight-500 t_blue bg_noone">end</code>
      							: 그리드 아이템 영역 행 축 끝점(오른쪽)에 콘텐츠를 정렬
      						</p>
      						<figure className="img_figure mt_s">
      							<figcaption className="mt_0"><code className="bg_none t_444">justify-items: <i className="t_blue">end</i>;</code></figcaption>
      							<img src={`${IMG.CSS}/grid/uxkm_grid-justify-items-end.svg`} alt="justify-items: end" className="mt_s" />
      						</figure>
      					</li>

      					
      					<li className="mt_m">
      						<p>
      							<code className="weight-500 t_blue bg_noone">stretch</code>
      							: 그리드 아이템 영역을 행 축에 가득 채움(행 축을 채우기 위해 그리드 아이템을 늘림)
      						</p>
      						<figure className="img_figure mt_s">
      							<figcaption className="mt_0"><code className="bg_none t_444">justify-items: <i className="t_blue">stretch</i>;</code></figcaption>
      							<img src={`${IMG.CSS}/grid/uxkm_grid-justify-items-stretch.svg`} alt="justify-items: stretch" className="mt_s" />
      						</figure>
      					</li>
      				</ol>
      				<aside className="browser_support mt_ml" data-tit="justify-items">
      					<ul>
      						<li className="ie false">지원안함</li>
      						<li className="edge">16.0</li>
      						<li className="chrome">57.0</li>
      						<li className="firefox">52.0</li>
      						<li className="opera">44.0</li>
      						<li className="safari">10.1</li>
      					</ul>
      				</aside>
      			</div>

      			
      			<div className="mt_l indent">
      				<h4 className="ml_mn t_blue">place-items</h4>
      				<p className="mt_ms">
      					<code>align-items</code>와 <code>justify-items</code>의 단축 속성입니다.<br />
      					첫 번째 값은 <code>align-items</code> 속성 값이고 두 번째 값은 <code>justify-items</code> 속성 값입니다.
      				</p>

      				<h5 className="mt_ml">키워드 값(Keyword values)</h5>
      				
      <CodeBlock title={"grid [place-items : Keyword values]"} language="javascript" className="uk_gist_code_box indent mt_ms">
      {`.container {
      							display: grid;
      							place-items: auto center;
      							place-items: normal start;
      						}`}
      </CodeBlock>


      				<h5 className="mt_ml">위치 정렬(positional alignment)</h5>
      				
      <CodeBlock title={"grid [place-items : positional alignment]"} language="javascript" className="uk_gist_code_box indent mt_ms">
      {`.container {
      							display: grid;
      							place-items: center normal;
      							place-items: start auto;
      							place-items: end normal;
      							place-items: self-start auto;
      							place-items: self-end normal;
      							place-items: flex-start auto;
      							place-items: flex-end normal;
      							place-items: left auto;
      							place-items: right normal;
      						}`}
      </CodeBlock>


      				<h5 className="mt_ml">기준선 정렬(baseline alignment)</h5>
      				
      <CodeBlock title={"grid [place-items : baseline alignment]"} language="javascript" className="uk_gist_code_box indent mt_ms">
      {`.container {
      							display: grid;
      							place-items: baseline normal;
      							place-items: first baseline auto;
      							place-items: last baseline normal;
      							place-items: stretch auto;
      						}`}
      </CodeBlock>


      				<aside className="browser_support mt_ml" data-tit="place-items">
      					<ul>
      						<li className="ie false">지원안함</li>
      						<li className="edge false">지원안함</li>
      						<li className="chrome">59.0</li>
      						<li className="firefox">45.0</li>
      						<li className="opera">46.0</li>
      						<li className="safari">11.0</li>
      					</ul>
      				</aside>
      			</div>
      		</article>
      	</section>

      	<aside className="browser_support mt_xxl" data-tit="grid">
      		<ul>
      			<li className="ie">10+ -ms-</li>
      			<li className="edge">16.0</li>
      			<li className="chrome">57.0</li>
      			<li className="firefox">52.0</li>
      			<li className="opera">44.0</li>
      			<li className="safari">10.1</li>
      		</ul>
      	</aside>

      	<figure className="img_figure indent mt_l">
      		<img src={`${IMG.CSS}/04_css_05_4.png`} alt="CSS Grid 부모 속성 part 2" />
      		<figcaption className="reference">
      			CSS Grid 부모 속성 part 2
      		</figcaption>
      	</figure>

      	<aside className="reference_box mt_xxl">
      		<strong className="tit">그리드 레이아웃 참조</strong>
      		<ul className="link_lst">
      			<li className="reference"><a href="https://www.w3.org/TR/css-grid-1/" target="_blank" rel="noreferrer" className="fas" title="새창열림">w3c css grid layout module level 1</a></li>
      			<li className="reference"><a href="https://www.w3.org/TR/css-grid-2/" target="_blank" rel="noreferrer" className="fas" title="새창열림">w3c css grid layout module level 2</a></li>
      			<li className="reference"><a href="https://www.w3.org/TR/css-align-3/" target="_blank" rel="noreferrer" className="fas" title="새창열림">w3c css box alignment module level 3</a></li>
      			<li className="reference"><a href="https://developer.mozilla.org/en-us/docs/web/css/css_grid_layout" target="_blank" rel="noreferrer" className="fas" title="새창열림">mdn css grid layout</a></li>
      			<li className="reference"><a href="https://developer.mozilla.org/ko/docs/web/css/css_grid_layout/relationship_of_grid_layout" target="_blank" rel="noreferrer" className="fas" title="새창열림">mdn relationship_of_grid_layout</a></li>
      			<li className="reference"><a href="https://developer.mozilla.org/en-us/docs/web/css/css_grid_layout/box_alignment_in_css_grid_layout" target="_blank" rel="noreferrer" className="fas" title="새창열림">mdn box alignment in css grid layout</a></li>
      			<li className="reference"><a href="https://developer.mozilla.org/en-us/docs/web/css/css_box_alignment" target="_blank" rel="noreferrer" className="fas" title="새창열림">mdn css box alignment</a></li>
      			<li className="reference"><a href="https://developer.mozilla.org/en-us/docs/tools/page_inspector/how_to/examine_grid_layouts" target="_blank" rel="noreferrer" className="fas" title="새창열림">mdn css grid inspector: examine grid layouts</a></li>
      			<li className="reference"><a href="https://grid.layoutit.com/" target="_blank" rel="noreferrer" className="fas" title="새창열림">css grid 제작 온라인 도구 | layoutit.com</a></li>
      			<li className="reference"><a href="https://gridbyexample.com/examples/" target="_blank" rel="noreferrer" className="fas" title="새창열림">css grid layout example</a></li>
      			<li className="reference"><a href="https://css-tricks.com/snippets/css/complete-guide-grid/" target="_blank" rel="noreferrer" className="fas" title="새창열림">guide to grid</a></li>
      			<li className="reference"><a href="http://cssgridgarden.com/#ko" target="_blank" rel="noreferrer" className="fas" title="새창열림">css grid garden</a></li>
      			<li className="reference"><a href="https://alistapart.com/article/the-story-of-css-grid-from-its-creators/" target="_blank" rel="noreferrer" className="fas" title="새창열림">창시자가 말하는 css 그리드 이야기</a></li>
      			<li className="reference"><a href="https://speakerdeck.com/malarkey/art-directing-for-the-web-five-minutes-with-css-template-areas" target="_blank" rel="noreferrer" className="fas" title="새창열림">웹 디자인 방법에 관한 andy clarke의 발표 슬라이드</a></li>
      			<li className="reference"><a href="https://uid.gitbook.io/css-grid/" target="_blank" rel="noreferrer" className="fas" title="새창열림">css grid layout guidebook by 야무(yamoo9)</a></li>
      			<li className="reference"><a href="https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/dev-guides/hh673533(v=vs.85)?redirectedfrom=msdn" target="_blank" rel="noreferrer" className="fas" title="새창열림">microsoft's documentation grid layout</a></li>
      			<li className="reference"><a href="https://css-tricks.com/css-grid-in-ie-css-grid-and-the-new-autoprefixer/" target="_blank" rel="noreferrer" className="fas" title="새창열림">css grid in ie: css grid and the new autoprefixer</a></li>
      			<li className="reference"><a href="https://css-tricks.com/css-grid-in-ie-debunking-common-ie-grid-misconceptions/" target="_blank" rel="noreferrer" className="fas" title="새창열림">css grid in ie: debunking common ie grid misconceptions</a></li>
      			<li className="reference"><a href="https://rachelandrew.co.uk/css/cheatsheets/box-alignment" target="_blank" rel="noreferrer" className="fas" title="새창열림">box 정렬 치트시트 | rachelandrew.co.uk</a></li>
      			<li className="reference"><a href="https://caniuse.com/#feat=css-grid" target="_blank" rel="noreferrer" className="fas" title="새창열림">supported by all major browsers</a></li>
      		</ul>
      	</aside>
    </>
  )
}

export default CssGridPart4Page
