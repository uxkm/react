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
  title: "그리드 레이아웃 - 자식 속성",
  description: "CSS Grid의 자식 속성은 그리드 아이템에 적용하는 속성들로, 그리드 컨테이너의 자식 요소에 사용하여 각 아이템의 위치와 정렬을 제어합니다. 이 페이지에서는 그리드 아이템의 행 시작과 끝 위치를 설정하는 grid-row-start와 grid-row-end 속성, 열 시작과 끝 위치를 설정하는 grid-column-start와 grid-column-end 속성, 행과 열 위치를 한 번에 설정하는 grid-row와 grid-column 속기형 속성, 그리드 영역을 지정하는 grid-area 속성, 개별 아이템의 정렬을 설정하는 justify-self와 align-self 속성을 함께 소개합니다.",
  keyword: "style, css, Cascading Style Sheets, grid, 그리드, 그리드 레이아웃, grid layout, grid items",
}

function CssGridPart5Page() {
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


      	<section className="mt_xxl indent">
      		<h2 className="ml_mn">자식 속성(properties for the children - grid items)</h2>
      		<blockquote className="uk_note mt_l" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				지정된 컨테이너의 자식 요소들은 자동으로 <code>grid items</code>(아이템)가 됩니다.<br />
      				<code>grid item</code>을 배치하기 위한 속성으로는 <code>grid-row-start</code>, <code>grid-row-end</code>, <code>grid-column-start</code>, <code>grid-column-end</code>가 있습니다.<br />
      				이 속성들은 그리드 선(line)의 '시작 위치'와 '끝 위치'를 지정하며, '숫자', '선 이름', 또는 <code>span</code> 키워드를 사용할 수 있습니다.<br />
      				또한 축약형(shorthands) 속성인 <code>grid-row</code>, <code>grid-column</code>, <code>grid-area</code>를 사용할 수도 있습니다.
      			</p>
      			<p className="mt_s">
      				<code>float</code>, <code>display: inline-block</code>, <code>display: table-cell</code>, <code>vertical-align</code> 및 <code>column-*</code> 속성은 그리드 항목에 영향을 주지 않습니다.
      			</p>
      		</blockquote>

      		
      		<article className="mt_xl indent">
      			<h3 className="ml_mn">grid 아이템</h3>
      			<blockquote className="uk_note mt_m" role="note">
      				<h4 className="sound_only">요약 설명</h4>
      				<p>
      					가벼운 의미로 그리드 아이템은 그리드 컨테이너 내부에 표시되는 플로우 콘텐츠입니다.<br />
      					그리드 컨테이너가 포함하는 자식 콘텐츠는 모두 그리드 아이템이 되며, 요소가 아닌 텍스트일 경우 암시적으로 그리드 아이템이 생성됩니다.
      				</p>
      			</blockquote>
      			<p className="mt_m">
      				그리드 컨테이너 내부에 포함한 자식 요소는 그리드 아이템으로 설정됩니다.<br />
      				요소가 아닌 텍스트가 자식으로 포함된 경우 암시적으로 그리드 아이템이 생성되며, 이 경우 스타일 규칙을 설정할 수 없습니다. 다만 상속 가능한 스타일은 적용됩니다.<br />
      				그리드 아이템에 설정된 <code>float</code> 속성과 <code>display</code> 속성은 모두 무시됩니다.<br />
      				그리드 아이템 사이 공백이 사라집니다.
      			</p>

      			<div className="view_editor edit_code mt_l">
      				<h4 className="ve_tit">grid-item 예제</h4>
      				<Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="css/step03/4.5.grid/4.5.5.2.grid-item.html" className="uk_editor indent mt_m min_height_450 mb_result_height_300" mode="htmlmixed" theme="moxer" browser="default" result minHeight="450px" mbResultHeight="300px" />
      </Suspense></div>
      		</article>

      		
      		<article className="mt_xl indent">
      			<h3 className="ml_mn" data-conlist-h4="true">grid 라인(line) 기반 아이템 배치</h3>
      			<p className="mt_m">
      				그리드 라인을 기반으로 하여 아이템을 배치(레이아웃)할 수 있습니다.
      			</p>
      			<figure className="img_figure mt_m">
      				<img src={`${IMG.CSS}/grid/uxkm_grid-line-rowcolumn.svg`} alt="그리드 라인을 기반으로 하여 아이템을 배치" />
      				<figcaption className="sound_only">[그리드 라인을 기반으로 하여 아이템을 배치]</figcaption>
      			</figure>
      			<ol className="ol_lst mt_m indent">
      				<li><code className="weight-500 t_blue bg_none">&lt;line&gt;</code> : &quot;그리드라인 번호&quot; 또는 &quot;그리드라인을 참조하는 이름&quot;</li>
      				<li><code className="weight-500 t_blue bg_none">span &lt;number&gt;</code> : 상대적으로 범위에 추가 설정하는 기준이 되는 그리드라인 개수</li>
      				<li><code className="weight-500 t_blue bg_none">span &lt;name&gt;</code> : 상대적으로 범위에 추가 설정하는 기준이 되는 그리드라인 참조 이름</li>
      				<li><code className="weight-500 t_blue bg_none">auto</code> : 자동 배치, 자동 span, 기본 span 1</li>
      			</ol>

      			
      			<div className="mt_l indent">
      				<h4 className="ml_mn t_blue">grid-column-start / grid-column-end / grid-row-start / grid-row-end</h4>
      				<p className="mt_ms">
      					그리드 아이템(item)의 열 시작 위치, 열 끝 위치, 행 시작 위치, 행 끝 위치를 지정할 수 있습니다.
      				</p>
      				
      <CodeBlock title="grid column/row [start/end]" language="javascript" className="uk_gist_code_box mt_m">
      {`.item {
      							grid-column-start: [number] | [name] | span [number] | span [name] | auto;
      							grid-column-end: [number] | [name] | span [number] | span [name] | auto;
      							grid-row-start: [number] | [name] | span [number] | span [name] | auto;
      							grid-row-end: [number] | [name] | span [number] | span [name] | auto;
      						}`}
      </CodeBlock>


      				<p className="mt_m">
      					<code>span</code>을 사용해 상대적으로 영역을 설정할 수 있습니다. 그리드 아이템의 기본 <code>span</code> 값은 <code>1</code>입니다.<br />
      					<code>grid-row-end</code> 또는 <code>grid-column-end</code> 설정이 없을 경우 아이템은 기본적으로 1개의 셀(cell)만큼 영역으로 사용됩니다.<br />
      					만약 아이템 배치가 겹쳐지는 상황이 발생하면 <code>z-index</code> 속성 값이 높은 쪽이 위에 배치됩니다.
      				</p>
      				<figure className="img_figure mt_m">
      					<figcaption className="mt_0">[<code className="bg_none t_444">span</code>을 사용해 상대적으로 영역을 설정]</figcaption>
      					<img src={`${IMG.CSS}/grid/uxkm_grid-line-span.svg`} alt="span을 사용해 상대적으로 영역을 설정" className="mt_m" />
      				</figure>

      				<h5 className="mt_ml">아이템 요소의 배치를 그리드 라인 번호 또는 참조 이름을 사용하여 설정</h5>
      				
      <CodeBlock title="grid column/row [start/end]" language="javascript" className="uk_gist_code_box indent mt_ms">
      {`.item-a {
      							grid-column-start: 2;       // line2와 동일
      							grid-column-end: five;
      							grid-row-start: row1-start;
      							grid-row-end: 3;            // third-line과 동일
      						}`}
      </CodeBlock>

      				<figure className="img_figure indent mt_m">
      					<img src={`${IMG.CSS}/grid/uxkm_grid-column-row-start-end-01.svg`} alt="아이템 요소의 배치를 그리드 라인 번호 또는 참조 이름을 사용하여 설정" />
      				</figure>

      				<h5 className="mt_ml">아이템 요소에 span 설정(상대적 범위 추가)을 사용한 레이아웃</h5>
      				
      <CodeBlock title="grid column/row [start/end]" language="javascript" className="uk_gist_code_box indent mt_ms">
      {`.item-b {
      							grid-column-start: 1; // first와 동일
      							grid-column-end: span col4-start;
      							grid-row-start: 2; // row1-end와 동일
      							grid-row-end: span 2;
      						}`}
      </CodeBlock>

      				<figure className="img_figure indent mt_m">
      					<img src={`${IMG.CSS}/grid/uxkm_grid-column-row-start-end-02.svg`} alt="아이템 요소에 span 설정(상대적 범위 추가)을 사용한 레이아웃" />
      				</figure>

      				<aside className="browser_support mt_l" data-tit="grid-[column/row]-[start/end]">
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
      				<h4 className="ml_mn t_blue">grid-column / grid-row</h4>
      				<p className="mt_ms">
      					그리드 아이템 행/열, 시작/끝 배치 설정을 속기형으로 설정할 수 있습니다.<br />
      					<code>grid-column-start + grid-column-end</code> 및 <code>grid-row-start + grid-row-end</code>의 단축 속성(행 시작/끝 위치) / (열 시작/끝 위치)<br />
      					속기형 속성 값으로 시작점만 설정하고 끝점(<code>&lt;end-line&gt;</code>)을 설정하지 않으면 1개 셀(cell)만큼 사용됩니다.
      				</p>
      				
      <CodeBlock title="grid [grid-column/grid-row]" language="javascript" className="uk_gist_code_box mt_ms">
      {`.item {
      							grid-column: <start-line> / <end-line> | <start-line> / span <value>;
      							grid-row: <start-line> / <end-line> | <start-line> / span <value>;
      						}`}
      </CodeBlock>

      				<ol className="ol_lst mt_ms indent">
      					<li><code className="weight-500 t_blue bg_none">&lt;start-line&gt;</code> : 그리드라인 시작점 (번호 또는 참조 이름)</li>
      					<li><code className="weight-500 t_blue bg_none">&lt;end-line&gt;</code> : 그리드라인 끝점 (번호 또는 참조 이름)</li>
      					<li><code className="weight-500 t_blue bg_none">span &lt;value&gt;</code> : 상대적으로 범위에 추가 설정하는 기준이 되는 그리드라인 개수 또는 참조 이름</li>
      				</ol>

      				<h5 className="mt_ml">아이템 요소 배치에 속기형 속성을 사용</h5>
      				
      <CodeBlock title="grid [grid-column/grid-row]" language="javascript" className="uk_gist_code_box indent mt_ms">
      {`.item-c {
      							grid-column: 3 / span 2;  // line2 / five와 동일
      							grid-row: third-line / 4; // third-line / last-line과 동일
      						}`}
      </CodeBlock>

      				<figure className="img_figure indent mt_m">
      					<img src={`${IMG.CSS}/grid/uxkm_grid-column-row-start-end-03.svg`} alt="아이템 요소 배치에 속기형 속성을 사용" />
      				</figure>

      				<aside className="browser_support mt_l" data-tit="grid-column/row">
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

      			<div className="view_editor edit_code mt_l">
      				<h4 className="ve_tit">grid 라인(line) 기반 아이템 배치 예제</h4>
      				<Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="css/step03/4.5.grid/4.5.6.2.grid-line.html" className="uk_editor indent mt_m min_height_450 mb_result_height_450" mode="htmlmixed" theme="moxer" browser="default" result minHeight="450px" mbResultHeight="450px" />
      </Suspense></div>
      		</article>

      		
      		<article className="mt_xl indent">
      			<h3 className="ml_mn" data-conlist-h4="true">grid 영역(area) 기반 아이템 배치</h3>

      			
      			<div className="mt_l indent">
      				<h4 className="ml_mn t_blue">grid-area</h4>
      				<p className="mt_ms">
      					<code>grid-column-start</code>, <code>grid-column-end</code>, <code>grid-row-start</code>, <code>grid-row-end</code>의 단축 속성입니다.<br />
      					혹은 <code>grid-template-areas</code>가 참조할 영역(area) 이름을 설정할 수도 있습니다.<br />
      					영역 이름을 설정할 경우 <code>grid-row</code>와 <code>grid-column</code> 개념은 무시됩니다.
      				</p>
      				
      <CodeBlock title="grid [grid-area]" language="javascript" className="uk_gist_code_box mt_ms">
      {`.item {
      							grid-area: <name> | <row-start> / <column-start> / <row-end> / <column-end>;
      							grid-area: 영역이름;
      						}`}
      </CodeBlock>

      				<ol className="ol_lst mt_ms indent">
      					<li><code className="weight-500 t_blue bg_none">&lt;name&gt;</code> : <code>grid-template-areas</code>에 등록된 참조 이름</li>
      					<li><code className="weight-500 t_blue bg_none">&lt;row-start&gt; / &lt;column-start&gt; / &lt;row-end&gt; / &lt;column-end&gt;</code> : 그리드라인 번호 또는 참조 이름</li>
      				</ol>

      				<h5 className="mt_ml">아래 코드의 아이템(.item)은 모두 같은 의미입니다.</h5>
      				
      <CodeBlock title="grid [grid-area]" language="javascript" className="uk_gist_code_box indent mt_ms">
      {`.item {
      							grid-row: 2 / 3;
      							grid-column: span 2 / -1;
      						}

      						.item {
      							/* '시작 / 시작 / 끝 / 끝'임에 주의해야합니다. */
      							grid-area: 2 / span 2 / 3 / -1;
      						}`}
      </CodeBlock>


      				<h5 className="mt_ml">다음과 같이 영역 이름을 지정해 grid-template-areas에서 참조할 수 있습니다.</h5>
      				
      <CodeBlock title="grid [grid-area]" language="javascript" className="uk_gist_code_box indent mt_ms">
      {`<style>
      							.container {
      								display: grid;
      								grid-template-rows: repeat(4, 90px);
      								grid-template-columns: repeat(3, 1fr);
      								grid-template-areas:
      									"header header header"
      									"main main aside"
      									"main main ."
      									"footer footer footer";
      							}
      							header.item { grid-area: header; }
      							main.item { grid-area: main; }
      							aside.item { grid-area: aside; }
      							footer.item { grid-area: footer; }
      						</style>

      						<div class="container">
      							<header class="item">HEADER</header>
      							<main class="item">MAIN</main>
      							<aside class="item">ASIDE</aside>
      							<footer class="item">FOOTER</footer>
      						</div>`}
      </CodeBlock>


      				<h5 className="mt_ml">grid-area 속성 값으로 grid-template-areas에 사용된 참조 이름을 사용</h5>
      				
      <CodeBlock title="grid [grid-area]" language="javascript" className="uk_gist_code_box indent mt_ms">
      {`.item-d {
      							grid-area: header;
      						}
      						/* grid-row-start / grid-column-start / grid-row-end / grid-column-end 순으로 속성 값을 설정 */

      						.item-d {
      							grid-area: 1 / col4-start / last-line / 6;
      						}
      						/* row1-start / col4-start / last-line / end 와 동일 */`}
      </CodeBlock>

      				<figure className="img_figure indent mt_m">
      					<img src={`${IMG.CSS}/grid/uxkm_grid-area.svg`} alt="grid-area 속성 값으로 grid-template-areas에 사용된 참조 이름을 사용" />
      				</figure>

      				<aside className="browser_support mt_l" data-tit="grid-area">
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

      		
      		<article className="mt_xl indent">
      			<h3 className="ml_mn" data-conlist-h4="true">grid 아이템(item) 순서 정렬</h3>

      			
      			<div className="mt_l indent">
      				<h4 className="ml_mn t_blue">order</h4>
      				<p className="mt_ms">
      					플렉스 또는 그리드 컨테이너 안에서 현재 요소의 배치 순서를 지정할 수 있습니다.<br />
      					단, 순서를 변경해도 접근성에 문제가 발생하지 않는 경우에만 사용해야 합니다.
      				</p>
      				<p className="mt_s">
      					기본값은 <code>0</code>이며, 숫자가 작을수록 앞쪽에, 클수록 뒤쪽에 배치되고, 같은 값일 경우 소스 코드의 순서대로 정렬됩니다.<br />
      					만약 item 요소 중 단 한 개의 요소에 <code>order: 1</code>을 지정한다면 기본값인 <code>0</code>보다 크기에 맨 끝에 위치하게 됩니다.<br />
      					첫 번째 item 요소를 제외한 나머지 요소 중 하나를 첫 번째에 위치시킬 경우 <code>-1</code>을 지정해야 합니다.
      				</p>
      				
      <CodeBlock title="grid [order]" language="javascript" className="uk_gist_code_box mt_ms">
      {`.item:nth-child(n) {
      							order: <Number> or -<Number>;
      						}`}
      </CodeBlock>


      				<h5 className="mt_ml">order 속성을 사용하여 배치 순서를 지정</h5>
      				
      <CodeBlock title="grid [order]" language="javascript" className="uk_gist_code_box indent mt_ms">
      {`.container {
      							display: grid;
      							grid-template-columns: repeat(3, 1fr);
      							grid-template-rows: repeat(2, minmax(50px, auto));
      						}

      						/* 그리드 아이템 순서 설정 (자동 배치 내) */
      						.item1 { order: 2; }
      						.item2 { order: 3; }
      						.item3 { order: 1; }`}
      </CodeBlock>

      				<figure className="img_figure indent mt_m">
      					<img src={`${IMG.CSS}/grid/uxkm_grid-order.svg`} alt="order 속성을 사용하여 배치 순서를 지정" />
      				</figure>

      				<div className="view_editor edit_code mt_ml">
      					<h5 className="ve_tit">order 예제</h5>
      					<Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="css/step03/4.5.grid/4.5.6.4.grid-order.html" className="uk_editor indent min_height_400" mode="htmlmixed" theme="moxer" browser="default" result minHeight="400px" />
      </Suspense></div>

      				<aside className="browser_support mt_l" data-tit="order">
      					<ul>
      						<li className="ie">11+</li>
      						<li className="edge">11.0</li>
      						<li className="chrome">29.0</li>
      						<li className="firefox">28.0</li>
      						<li className="opera">17.0</li>
      						<li className="safari">9.0</li>
      					</ul>
      				</aside>
      			</div>

      			
      			<div className="mt_l indent">
      				<h4 className="ml_mn t_blue">z-index</h4>
      				<p className="mt_ms">
      					그리드 아이템의 쌓이는 순서를 지정할 수 있습니다.
      				</p>
      				
      <CodeBlock title="grid [z-index]" language="javascript" className="uk_gist_code_box mt_ms">
      {`.item1 {
      							grid-area: 1 / 1 / 2 / 3;
      						}

      						.item2 {
      							grid-area: 1 / 2 / 3 / 3;
      							z-index: 1;
      						}

      						.item3 {
      							grid-area: 2 / 2 / 3 / 4;
      						}`}
      </CodeBlock>

      				<figure className="img_figure mt_m">
      					<img src={`${IMG.CSS}/grid/uxkm_grid-z-index.svg`} alt="그리드 아이템의 쌓이는 순서를 지정" />
      				</figure>

      				<div className="view_editor edit_code mt_ml">
      					<h5 className="ve_tit">z-index 예제</h5>
      					<Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="css/step03/4.5.grid/4.5.6.4.grid-z-index.html" className="uk_editor indent min_height_450 mb_result_height_450" mode="htmlmixed" theme="moxer" browser="default" result minHeight="450px" mbResultHeight="450px" />
      </Suspense></div>
      			</div>
      		</article>

      		
      		<article className="mt_xl indent">
      			<h3 className="ml_mn" data-conlist-h4="true">grid 개별 아이템(self) 정렬</h3>

      			
      			<div className="mt_l indent">
      				<h4 className="ml_mn t_blue">align-self</h4>
      				<p className="mt_ms">
      					단일 그리드 아이템을 수직(열 축)으로 정렬할 수 있습니다.<br />
      					열 축을 따라 그리드 아이템 내부 콘텐츠를 정렬하며, 열 축에 따라 정렬하는 <code>justify-self</code> 속성과는 반대입니다.
      				</p>
      				<figure className="img_figure mt_m">
      					<figcaption className="mt_0"><code className="bg_none t_444">.item {'{'} align-self: <i className="t_blue">start</i> | <i className="t_blue">center</i> | <i className="t_blue">end</i> | <i className="t_blue">stretch</i>; {'}'}</code></figcaption>
      					<img src={`${IMG.CSS}/grid/uxkm_grid-align-self-all.svg`} alt="item-a {align-self: start | center | end | stretch;}" className="mt_s" />
      				</figure>
      				<ol className="ol_lst mt_ml indent">
      					
      					<li>
      						<p>
      							<code className="weight-500 t_blue bg_noone">start</code>
      							: 그리드 아이템 영역 열 축 시작점(위쪽)에 콘텐츠를 정렬합니다
      						</p>
      						<figure className="img_figure mt_s">
      							<figcaption className="mt_0"><code className="bg_none t_444">.item-a {'{'} align-self: <i className="t_blue">start</i>; {'}'}</code></figcaption>
      							<img src={`${IMG.CSS}/grid/uxkm_grid-align-self-start.svg`} alt="item-a {align-self: start;}" className="mt_s" />
      						</figure>
      					</li>

      					
      					<li className="mt_m">
      						<p>
      							<code className="weight-500 t_blue bg_noone">center</code>
      							: 그리드 아이템 영역 열 축 중앙에 콘텐츠를 정렬합니다(수직 가운데 정렬)
      						</p>
      						<figure className="img_figure mt_s">
      							<figcaption className="mt_0"><code className="bg_none t_444">.item-a {'{'} align-self: <i className="t_blue">center</i>; {'}'}</code></figcaption>
      							<img src={`${IMG.CSS}/grid/uxkm_grid-align-self-center.svg`} alt="item-a {align-self: center;}" className="mt_s" />
      						</figure>
      					</li>

      					
      					<li className="mt_m">
      						<p>
      							<code className="weight-500 t_blue bg_noone">end</code>
      							: 그리드 아이템 영역 행 축 끝점(아래쪽)에 콘텐츠를 정렬합니다
      						</p>
      						<figure className="img_figure mt_s">
      							<figcaption className="mt_0"><code className="bg_none t_444">.item-a {'{'} align-self: <i className="t_blue">end</i>; {'}'}</code></figcaption>
      							<img src={`${IMG.CSS}/grid/uxkm_grid-align-self-end.svg`} alt="item-a {align-self: end;}" className="mt_s" />
      						</figure>
      					</li>

      					
      					<li className="mt_m">
      						<p>
      							<code className="weight-500 t_blue bg_noone">stretch</code>
      							: 그리드 아이템 영역을 열 축에 가득 채웁니다(열 축을 채우기 위해 그리드 아이템을 늘림)
      						</p>
      						<figure className="img_figure mt_s">
      							<figcaption className="mt_0"><code className="bg_none t_444">.item-a {'{'} align-self: <i className="t_blue">stretch</i>; {'}'}</code></figcaption>
      							<img src={`${IMG.CSS}/grid/uxkm_grid-align-self-stretch.svg`} alt="item-a {align-self: stretch;}" className="mt_s" />
      						</figure>
      					</li>
      				</ol>
      				<aside className="browser_support mt_ml" data-tit="align-self">
      					<ul>
      						<li className="ie">10+ -ms-</li>
      						<li className="edge">16.0</li>
      						<li className="chrome">57.0</li>
      						<li className="firefox">52.0</li>
      						<li className="opera">44.0</li>
      						<li className="safari">10.1</li>
      					</ul>
      				</aside>
      			</div>

      			
      			<div className="mt_l indent">
      				<h4 className="ml_mn t_blue">justify-self</h4>
      				<p className="mt_ms">
      					단일 그리드 아이템을 수평(행 축)으로 정렬할 수 있습니다.<br />
      					행 축을 따라 그리드 아이템 내부 콘텐츠를 정렬하며, 열 축에 따라 정렬하는 <code>align-self</code> 속성과는 반대입니다.<br />
      					모든 항목에 대한 정렬을 설정하려면 <code>justify-items</code> 속성을 통해 컨테이너에서 설정할 수 있습니다.
      				</p>
      				
      				<figure className="img_figure mt_m">
      					<figcaption className="mt_0"><code className="bg_none t_444">.item {'{'} justify-self: <i className="t_blue">start</i> | <i className="t_blue">center</i> | <i className="t_blue">end</i> | <i className="t_blue">stretch</i>; {'}'}</code></figcaption>
      					<img src={`${IMG.CSS}/grid/uxkm_grid-justify-self-all.svg`} alt="item-a {justify-self: start | center | end | stretch;}" className="mt_s" />
      				</figure>
      				<ol className="ol_lst mt_ml indent">
      					
      					<li>
      						<p>
      							<code className="weight-500 t_blue bg_noone">start</code>
      							: 그리드 아이템 영역 행 축 시작점(왼쪽)에 콘텐츠를 정렬합니다
      						</p>
      						<figure className="img_figure mt_s">
      							<figcaption className="mt_0"><code className="bg_none t_444">.item-a {'{'} justify-self: <i className="t_blue">start</i>; {'}'}</code></figcaption>
      							<img src={`${IMG.CSS}/grid/uxkm_grid-justify-self-start.svg`} alt="item-a {justify-self: start;}" className="mt_s" />
      						</figure>
      					</li>

      					
      					<li className="mt_m">
      						<p>
      							<code className="weight-500 t_blue bg_noone">center</code>
      							: 그리드 아이템 영역 행 축 중앙에 콘텐츠를 정렬합니다(수평 가운데 정렬)
      						</p>
      						<figure className="img_figure mt_s">
      							<figcaption className="mt_0"><code className="bg_none t_444">.item-a {'{'} justify-self: <i className="t_blue">center</i>; {'}'}</code></figcaption>
      							<img src={`${IMG.CSS}/grid/uxkm_grid-justify-self-center.svg`} alt="item-a {justify-self: center;}" className="mt_s" />
      						</figure>
      					</li>

      					
      					<li className="mt_m">
      						<p>
      							<code className="weight-500 t_blue bg_noone">end</code>
      							: 그리드 아이템 영역 행 축 끝점(오른쪽)에 콘텐츠를 정렬합니다
      						</p>
      						<figure className="img_figure mt_s">
      							<figcaption className="mt_0"><code className="bg_none t_444">.item-a {'{'} justify-self: <i className="t_blue">end</i>; {'}'}</code></figcaption>
      							<img src={`${IMG.CSS}/grid/uxkm_grid-justify-self-end.svg`} alt="item-a {justify-self: end;}" className="mt_s" />
      						</figure>
      					</li>

      					
      					<li className="mt_m">
      						<p>
      							<code className="weight-500 t_blue bg_noone">stretch</code>
      							: 그리드 아이템 영역을 행 축에 가득 채웁니다(행 축을 채우기 위해 그리드 아이템을 늘림)
      						</p>
      						<figure className="img_figure mt_s">
      							<figcaption className="mt_0"><code className="bg_none t_444">.item-a {'{'} justify-self: <i className="t_blue">stretch</i>; {'}'}</code></figcaption>
      							<img src={`${IMG.CSS}/grid/uxkm_grid-justify-self-stretch.svg`} alt="item-a {justify-self: stretch;}" className="mt_s" />
      						</figure>
      					</li>
      				</ol>
      				<aside className="browser_support mt_ml" data-tit="justify-self">
      					<ul>
      						<li className="ie false">지원안함</li>
      						<li className="edge">16.0</li>
      						<li className="chrome">57.0</li>
      						<li className="firefox">45.0</li>
      						<li className="opera">44.0</li>
      						<li className="safari">10.1</li>
      					</ul>
      				</aside>
      			</div>

      			
      			<div className="mt_l indent">
      				<h4 className="ml_mn t_blue">place-self</h4>
      				<p className="mt_ms">
      					<code>&lt;align-self&gt;</code> / <code>&lt;justify-self&gt;</code>의 단축 속성입니다.
      				</p>
      				<ol className="ol_lst mt_s indent">
      					<li><code className="weight-500 t_blue bg_none">auto</code> : 레이아웃 모드의 &quot;기본&quot; 정렬입니다.</li>
      					<li><code className="weight-500 t_blue bg_none">&lt;align-self&gt; / &lt;justify-self&gt;</code> : 적용 시 첫 번째 값이 <code>align-self</code>이고 두 번째 값이 <code>justify-self</code>입니다. 두 번째 값을 생략하면 첫 번째 값이 두 속성에 모두 할당됩니다.</li>
      				</ol>

      				<h5 className="mt_ml">키워드 값(Keyword values)</h5>
      				
      <CodeBlock title={"grid [place-self : Keyword values]"} language="javascript" className="uk_gist_code_box indent mt_ms">
      {`.item {
      							place-self: auto center;
      							place-self: normal start;
      						}`}
      </CodeBlock>


      				<h5 className="mt_ml">위치 정렬(positional alignment)</h5>
      				
      <CodeBlock title={"grid [place-self : positional alignment]"} language="javascript" className="uk_gist_code_box indent mt_ms">
      {`.item {
      							place-self: center normal;
      							place-self: start auto;
      							place-self: end normal;
      							place-self: self-start auto;
      							place-self: self-end normal;
      							place-self: flex-start auto;
      							place-self: flex-end normal;
      							place-self: left auto;
      							place-self: right normal;
      						}`}
      </CodeBlock>


      				<h5 className="mt_ml">기준선 정렬(baseline alignment)</h5>
      				
      <CodeBlock title={"grid [place-self : baseline alignment]"} language="javascript" className="uk_gist_code_box indent mt_ms">
      {`.item {
      							place-self: baseline normal;
      							place-self: first baseline auto;
      							place-self: last baseline normal;
      							place-self: stretch auto;
      						}`}
      </CodeBlock>


      				<figure className="img_figure mt_ml">
      					<figcaption className="mt_0"><code className="bg_none t_444">.item-a {'{'} place-self: <i className="t_blue">center</i>; {'}'}</code></figcaption>
      					<img src={`${IMG.CSS}/grid/uxkm_grid-place-self-center.svg`} alt="item-a {place-self: center;}" className="mt_s" />
      				</figure>

      				<figure className="img_figure mt_m">
      					<figcaption className="mt_0"><code className="bg_none t_444">.item-a {'{'} place-self: <i className="t_blue">center stretch</i>; {'}'}</code></figcaption>
      					<img src={`${IMG.CSS}/grid/uxkm_grid-place-self-center-stretch.svg`} alt="item-a {place-self: center;}" className="mt_s" />
      				</figure>

      				<aside className="browser_support mt_ml" data-tit="place-self">
      					<ul>
      						<li className="ie false">지원안함</li>
      						<li className="edge false">지원안함</li>
      						<li className="chrome">59.0</li>
      						<li className="firefox">45.0</li>
      						<li className="opera">46.0</li>
      						<li className="safari false">지원안함</li>
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
      		<img src={`${IMG.CSS}/04_css_05_5.png`} alt="CSS Grid 자식 속성" />
      		<figcaption className="reference">
      			CSS Grid 자식 속성
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

export default CssGridPart5Page
