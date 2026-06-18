import { usePageMeta } from '@/components/common/PageMeta'
import PublishingPartTabs from '@/components/docs/PublishingPartTabs'
import { IMG } from '@/config/path'
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
  title: "그리드 레이아웃 - 요약, 함수, 단위",
  description: "CSS Grid는 웹 페이지 컨텐츠를 행과 열로 나눌 수 있는 2차원 레이아웃 시스템으로, display: grid 또는 display: inline-grid로 설정한 요소가 그리드 컨테이너가 되며 그 안에 포함된 자식 요소들이 그리드 아이템이 됩니다. 이 페이지에서는 grid container, grid item, grid track, grid line, grid cell, grid area의 기본 개념, CSS Grid에서 사용하는 함수(repeat, minmax, fit-content), 그리드에서 사용하는 단위(fr, auto, min-content, max-content)를 함께 소개합니다.",
  keyword: "style, css, Cascading Style Sheets, grid, 그리드",
}

function CssGridPart1Page() {
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
      			플랙스박스는 콘텐츠에 초점을 맞추고, 그리드는 레이아웃을 먼저 고려합니다.<br />
      		</p>
      	</blockquote>

      	
      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">그리드 요약설명</h2>
      		<ol className="ol_lst mt_l">
      			<li><code className="t_blue weight-700 bg_none">grid container</code> : 전체 그리드 레이아웃을 감싸는 역할을 수행합니다. <code>display: grid | inline-grid;</code> 속성을 통해 지정할 수 있습니다.</li>
      			<li><code className="t_blue weight-700 bg_none">grid item</code> : <code>grid container</code>에 속해있는 하위 DOM 요소를 뜻합니다.</li>
      			<li><code className="t_blue weight-700 bg_none">grid track</code> : 그리드 레이아웃에 존재하는 행 또는 열을 의미합니다. <code>grid track</code>의 개수는 명시적으로 지정할 수도, 암묵적으로 늘어나게 할 수도 있습니다.</li>
      			<li><code className="t_blue weight-700 bg_none">grid line</code> : <code>grid track</code>을 구분하는 선을 의미합니다. 선의 번호는 위에서 아래로(↓), 왼쪽에서 오른쪽으로(→) 매겨집니다. 그리드 라인의 번호는 <code>1</code>부터 시작된다는 점을 주의해야 합니다.</li>
      			<li><code className="t_blue weight-700 bg_none">grid cell</code> : 그리드 레이아웃에서 가장 작은 단위 요소이며, 테이블의 셀과 유사합니다.</li>
      			<li><code className="t_blue weight-700 bg_none">grid area</code> : 다수의 <code>grid cell</code>로 이루어진 영역을 뜻합니다. <code>grid area</code>는 항상 사각형의 모양을 가져야 합니다. (ㄴ자, ㄱ자 형태 불가능)</li>
      		</ol>
      		<figure className="img_figure mt_ml">
      			<figcaption className="mt_0 weight-600"><code className="bg_none t_444">display: <i className="t_blue">grid</i>;</code></figcaption>
      			<img src={`${IMG.CSS}/grid/uxkm_grid.svg`} alt="display: grid" className="mt_m" /><br />
      			
      		</figure>

      		
      		<article className="indent mt_xl">
      			<h3 className="ml_mn">CSS3 Grid 모듈 속성을 컨테이너, 아이템 별로 정리</h3>
      			<ol className="ol_lst mt_m">
      				<li className="line_code tit_h4">
      					<h4>그리드 컨테이너(grid container)</h4>
      					<p className="mt_ms"><code>display</code> : 그리드 컨테이너를 지정합니다.</p>
      					<p><code>grid-template-rows</code> : 행의 크기를 정의합니다.</p>
      					<p><code>grid-template-columns</code> : 열의 크기를 정의합니다.</p>
      					<p><code>grid-template-areas</code> : 영역 이름을 사용하여 레이아웃을 정의합니다.</p>
      					<p><code>grid-template</code> : 행, 열, 영역을 한 번에 정의합니다.</p>
      					<p><code>row-gap</code> : 행 사이 간격을 설정합니다.</p>
      					<p><code>column-gap</code> : 열 사이 간격을 설정합니다.</p>
      					<p><code>gap</code> : 행과 열 사이 간격을 동시에 설정합니다.</p>
      					<p><code>justify-items</code> : 행 축에서 아이템을 정렬합니다.</p>
      					<p><code>align-items</code> : 열 축에서 아이템을 정렬합니다.</p>
      					<p><code>justify-content</code> : 행 축에서 그리드를 정렬합니다.</p>
      					<p><code>align-content</code> : 열 축에서 그리드를 정렬합니다.</p>
      					<p><code>grid-auto-rows</code> : 암시적 행의 크기를 설정합니다.</p>
      					<p><code>grid-auto-columns</code> : 암시적 열의 크기를 설정합니다.</p>
      					<p><code>grid-auto-flow</code> : 자동 배치 방향을 설정합니다.</p>
      					<p><code>grid</code> : 그리드 관련 속성을 한 번에 설정합니다.</p>
      				</li>
      				<li className="line_code tit_h4 mt_m">
      					<h4>그리드 아이템(grid item)</h4>
      					<p className="mt_ms"><code>grid-row-start</code> : 행 시작 위치를 지정합니다.</p>
      					<p><code>grid-row-end</code> : 행 끝 위치를 지정합니다.</p>
      					<p><code>grid-column-start</code> : 열 시작 위치를 지정합니다.</p>
      					<p><code>grid-column-end</code> : 열 끝 위치를 지정합니다.</p>
      					<p><code>grid-row</code> : 행 시작과 끝을 한 번에 지정합니다.</p>
      					<p><code>grid-column</code> : 열 시작과 끝을 한 번에 지정합니다.</p>
      					<p><code>grid-area</code> : 영역 이름 또는 위치를 지정합니다.</p>
      					<p><code>justify-self</code> : 행 축에서 개별 아이템을 정렬합니다.</p>
      					<p><code>align-self</code> : 열 축에서 개별 아이템을 정렬합니다.</p>
      				</li>
      			</ol>
      		</article>

      		
      		<article className="indent mt_xl">
      			<h3 className="ml_mn">플랙스박스(flexible box) 와 그리드(grid)의 차이점</h3>
      			<ol className="ol_lst mt_m">
      			<li><strong className="weight-500 t_black">플랙스박스</strong> : 레이아웃을 조정할 때 오직 가로 행 혹은 세로 열만 고려하여 작업할 때 사용합니다.</li>
      			<li><strong className="weight-500 t_black">그리드</strong> : 레이아웃을 조정할 때 가로 행과 세로 열 모두를 염두에 두고 작업할 때 사용합니다.</li>
      			</ol>

      			<figure className="img_figure mt_m">
      				<figcaption className="mt_0 weight-600"><code className="bg_none t_444">[ <i className="t_blue">grid</i> vs <i className="t_blue">flex</i> ]</code></figcaption>
      				
      				
      				<img src={`${IMG.CSS}/grid/uxkm_grid_vs_flex.svg`} alt="grid vs flex" className="mt_m" />
      			</figure>
      		</article>
      	</section>

      	
      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">grid에서 사용되는 주요 용어 정리</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				그리드는 컨테이너와 라인으로 행/열을 나누고, 라인 사이 공간인 트랙이 셀과 영역을 만듭니다. 셀 묶음인 area로 아이템을 배치하고, 라인 사이 간격은 gap(row-gap/column-gap)으로 제어합니다.
      			</p>
      		</blockquote>

      		
      		<article className="indent mt_xl">
      			<h3 className="ml_mn t_blue">grid</h3>
      			<p className="mt_m">
      				HTML 요소에 <code>display</code> 속성 값으로 <code>grid</code>를 설정하면 그리드 컨테이너가 됩니다.<br />
      				그리드 컨테이너는 행(rows)과 열(columns)을 가지며, 그리드 아이템을 배치할 수 있습니다.
      			</p>
      			<figure className="img_figure mt_m">
      				<figcaption className="mt_0 weight-600"><code className="bg_none t_444">[ grid ]</code></figcaption>
      				<img src={`${IMG.CSS}/grid/uxkm_grid_grid-terms.svg`} alt="grid" className="mt_m" />
      			</figure>
      		</article>

      		
      		<article className="indent mt_xl">
      			<h3 className="ml_mn t_blue">line</h3>
      			<p className="mt_m">
      				선(line)은 그리드의 행/열을 구분하는 선을 의미합니다.<br />
      				각 선은 라인 번호를 가지며, 그리드 아이템을 배치하는 기준으로 사용됩니다.
      			</p>
      			<figure className="img_figure mt_m">
      				<figcaption className="mt_0 weight-600"><code className="bg_none t_444">[ line ]</code></figcaption>
      				<img src={`${IMG.CSS}/grid/uxkm_grid_line-terms.svg`} alt="line" className="mt_m" />
      				
      			</figure>
      		</article>

      		
      		<article className="indent mt_xl">
      			<h3 className="ml_mn t_blue">track</h3>
      			<p className="mt_m">
      				트랙(track)은 그리드 라인 사이의 행 또는 열 공간을 의미합니다.
      			</p>
      			<figure className="img_figure mt_m">
      				<figcaption className="mt_0 weight-600"><code className="bg_none t_444">[ track ]</code></figcaption>
      				<img src={`${IMG.CSS}/grid/uxkm_grid_track-terms.svg`} alt="track" className="mt_m" />
      				
      			</figure>
      		</article>

      		
      		<article className="indent mt_xl">
      			<h3 className="ml_mn t_blue">cell</h3>
      			<p className="mt_m">
      				셀(cell)은 4개의 그리드 라인이 묶여 그려지는 가장 작은 단위입니다.
      			</p>
      			<figure className="img_figure mt_m">
      				<figcaption className="mt_0 weight-600"><code className="bg_none t_444">[ cell ]</code></figcaption>
      				<img src={`${IMG.CSS}/grid/uxkm_grid_cell-terms.svg`} alt="cell" className="mt_m" />
      				
      			</figure>
      		</article>

      		
      		<article className="indent mt_xl">
      			<h3 className="ml_mn t_blue">area</h3>
      			<p className="mt_m">
      				영역(area)은 하나 이상의 셀로 이루어진 영역입니다.<br />
      				고유한 식별자를 가지며, 식별자를 통해 요소를 배치할 수 있습니다.
      			</p>
      			<figure className="img_figure mt_m">
      				<figcaption className="mt_0 weight-600"><code className="bg_none t_444">[ area ]</code></figcaption>
      				<img src={`${IMG.CSS}/grid/uxkm_grid_area-terms.svg`} alt="cell" className="mt_m" />
      				
      			</figure>
      		</article>

      		
      		<article className="indent mt_xl">
      			<h3 className="ml_mn t_blue">gutters</h3>
      			<p className="mt_m">
      				그리드 거터는 행 또는 열 사이 간격(gap)을 말합니다.<br />
      				<code>gap</code>(<code>row</code>, <code>column</code> 동시 선언), <code>row-gap</code>, <code>column-gap</code> 속성으로 제어합니다.
      			</p>
      			<figure className="img_figure mt_m">
      				<figcaption className="mt_0 weight-600"><code className="bg_none t_444">[ gutters ]</code></figcaption>
      				<img src={`${IMG.CSS}/grid/uxkm_grid_gutters-terms.svg`} alt="gutters" className="mt_m" />
      			</figure>
      		</article>
      	</section>

      	
      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">grid functions</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				반복되는 트랙은 <code>repeat()</code>로 단순화하고, 크기 범위는 <code>minmax()</code>로 유연하게 지정합니다. 고정·자동 값을 섞어 행·열을 정의하고, 반복/최소·최대 패턴을 조합해 유지보수성을 높입니다.
      			</p>
      		</blockquote>

      		
      		<article className="indent mt_xl">
      			<h3 className="ml_mn t_blue">repeat</h3>
      			<p className="mt_m">
      				<code>repeat()</code> 함수는 행/열의 크기 정의를 반복합니다.<br />
      				첫 번째 인자는 반복 횟수, 두 번째 인자는 행/열의 크기 정의를 사용하며, <code>grid-template-rows</code>와 <code>grid-template-columns</code>에서 사용합니다.
      			</p>
      			<p className="reference mt_s"><a href="https://www.w3.org/TR/css-grid-1/#fr-unit" target="_blank" rel="noreferrer" title="새창열림">W3C Flexible Lengths: the fr unit 참조</a></p>

      			<div className="indent mt_l">
      				<h4 className="ml_mn">코드 예제</h4>
      				
      <CodeBlock title="grid functions [repeat()]" language="javascript" className="uk_gist_code_box mt_ms">
      {`.container {
      							display: grid;
      							/* repeat() 함수 사용법 */
      							grid-template-rows: repeat(2, 1fr);        /* 1fr 1fr */
      							grid-template-columns: repeat(3, 1fr 2fr); /* 1fr 2fr 1fr 2fr 1fr 2fr */
      						}`}
      </CodeBlock>


      				<figure className="img_figure mt_m">
      					<figcaption className="mt_0"><code className="bg_none t_444">[ repeat function ]</code></figcaption>
      					<img src={`${IMG.CSS}/grid/uxkm_grid_repeat-function.svg`} alt="repeat function" className="mt_m" />
      				</figure>
      			</div>

      			<div className="indent mt_l">
      				<h4 className="ml_mn">9컬럼 그리드 코드 예제</h4>
      				
      <CodeBlock title="grid functions [repeat() - columns 9]" language="javascript" className="uk_gist_code_box mt_ms">
      {`.container {
      							display: grid;
      							grid-template-columns: 100px 100px 100px 100px 100px 100px 100px 100px 100px;
      							/* 위 코드에 repeat() 함수를 사용하면 아래와 같습니다. */
      							grid-template-columns: repeat(9, 100px);
      						}

      						.container {
      							display: grid;
      							grid-template-rows: [row-start] 200px [row-end row-start] 200px [row-end];
      							grid-template-columns: [col-start] 100px [col-end col-start] 100px [col-end col-start] 100px [col-end];

      							/* 위 코드에 repeat() 함수를 사용하면 아래와 같습니다. */
      							grid-template-rows: repeat(2, [row-start] 200px [row-end]);
      							grid-template-columns: repeat(3, [col-start] 100px [col-end]);

      							/* 위처럼 row, column에 각각 repeat() 함수가 있을 경우 아래처럼 한 줄로 축약 가능합니다. */
      							grid-template: repeat(2, [row-start] 200px [row-end]) / repeat(3, [col-start] 100px [col-end]);
      						}`}
      </CodeBlock>

      			</div>

      			<div className="indent mt_l">
      				<h4 className="ml_mn">12컬럼 그리드 코드 예제</h4>
      				
      <CodeBlock title="grid functions [repeat() - columns 12]" language="javascript" className="uk_gist_code_box mt_ms">
      {`.container {
      							display: grid;
      							grid-template-columns: 1fr 2fr 1fr 2fr 1fr 2fr 1fr 2fr 1fr 2fr 1fr 2fr;
      							/* 위 코드에 repeat() 함수를 사용하면 아래와 같습니다. */
      							grid-template-columns: repeat(6, 1fr 2fr);
      						}`}
      </CodeBlock>

      			</div>
      		</article>

      		
      		<article className="indent mt_xl">
      			<h3 className="ml_mn t_blue">minmax</h3>
      			<p className="mt_m">
      				<code>minmax()</code> 함수는 행/열의 최소/최대 크기를 정의합니다.<br />
      				첫 번째 인수는 최솟값, 두 번째 인수는 최댓값이며, <code>grid-template-rows</code>, <code>grid-template-columns</code>, <code>grid-auto-rows</code>, <code>grid-auto-columns</code>에서 사용합니다.
      			</p>

      			<div className="indent mt_l">
      				<h4 className="ml_mn">코드 예제</h4>
      				
      <CodeBlock title="grid functions [minmax()]" language="javascript" className="uk_gist_code_box mt_ms">
      {`/* 일반 요소에 min-width와 max-width 속성을 동시 지정하는 것과 유사합니다. */
      						.container {
      							display: grid;
      							grid-template-columns: minmax(100px, 1fr) minmax(200px, 1fr);
      						}

      						/*
      						minmax()를 통해 암시적 행/열(Track) 크기를 좀 더 유연하게 사용할 수 있습니다.
      						다음 예제는 암시적 '행/열'의 크기를 최소 '200px/300px'으로 지정하지만 auto를 통해 그리드 아이템의 크기에 따라 확장될 수 있습니다.
      						*/
      						.container {
      							display: grid;
      							grid-auto-rows: minmax(200px, auto);
      							grid-auto-columns: minmax(300px, auto);
      						}

      						.container {
      							display: grid;
      							/* minmax() 함수 사용법 */
      							grid-template-rows: repeat(2, minmax(20px, auto));
      							grid-template-columns: minmax(30px, auto) repeat(3, 1fr);
      						}`}
      </CodeBlock>

      				<figure className="img_figure mt_m">
      					<figcaption className="mt_0"><code className="bg_none t_444">[ minmax function ]</code></figcaption>
      					<img src={`${IMG.CSS}/grid/uxkm_grid_minmax-function.svg`} alt="minmax function" className="mt_m" />
      				</figure>
      			</div>
      		</article>

      		
      		<article className="indent mt_xl">
      			<h3 className="ml_mn t_blue">fit-content</h3>
      			<p className="mt_m">
      				<code>fit-content()</code> 함수는 행/열의 크기를 그리드 아이템의 내용 크기에 맞춥니다.<br />
      				내용의 최대 크기를 인수로 사용하며, <code>minmax(auto, max-content)</code>와 유사합니다.
      			</p>

      			<div className="indent mt_m">
      				<h4 className="ml_mn">코드 예제</h4>
      				
      <CodeBlock title="grid functions [fit-content()]" language="javascript" className="uk_gist_code_box mt_ms">
      {`<style>
      							/*
      								// <length> values
      								fit-content(200px)
      								fit-content(5cm)
      								fit-content(30vw)
      								fit-content(100ch)
      								&nbsp;
      								// <percentage> value
      								fit-content(40%)
      							*/

      							.container {
      								display: grid;
      								grid-template-columns: fit-content(300px) fit-content(300px) 1fr;
      								grid-gap: 5px;
      							}
      						</style>

      						<div id="container">
      							<div>내용만큼만 적용되는 셀의 크기</div>
      							<div>
      								많은 텍스트가 있는 경우 fit-content로 정의한
      								크기가 셀의 최대 크기가 됩니다.
      								fit-content(300px)
      							</div>
      							<div>유연한 셀입니다.</div>
      						</div>`}
      </CodeBlock>

      				<figure className="img_figure mt_m">
      					<figcaption className="mt_0 sound_only"><code className="bg_none t_444">[ grid-template-columns: fit-content(300px) fit-content(300px) 1fr; ]</code></figcaption>
      					<img src={`${IMG.CSS}/grid/uxkm_grid_fit-content-function.svg`} alt="grid-template-columns: fit-content(300px) fit-content(300px) 1fr;" />
      				</figure>
      			</div>
      		</article>
      	</section>

      	
      	<section className="indent mt_xxl">
      		<h2 className="ml_mn">grid units</h2>

      		<blockquote className="uk_note mt_xl" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				그리드에서는 <code>fr</code> 단위로 여유 공간을 비율로 나누고, <code>min-content</code>와 <code>max-content</code>로 콘텐츠 기반 크기를 지정합니다. <code>fr</code>은 길이가 아닌 비율 단위이므로 <code>calc()</code>에서 다른 값과 함께 사용할 수 없습니다.
      			</p>
      		</blockquote>

      		
      		<article className="indent mt_xl">
      			<h3 className="ml_mn t_blue">fr</h3>
      			<p className="mt_m">
      				<code>fr</code>(fractional unit)은 사용 가능한 공간에 대한 비율을 의미합니다.<br />
      				그리드 컨테이너의 여유 공간을 비율로 나눠 설정하며, 퍼센트(<code>%</code>) 단위와 달리 길이가 아니므로 <code>calc()</code> 함수에서 다른 값과 함께 처리할 수 없습니다.
      			</p>
      			<div className="indent mt_m">
      				<h4 className="ml_mn">코드 예제</h4>
      				
      <CodeBlock title="grid units [fr]" language="javascript" className="uk_gist_code_box mt_ms">
      {`/*
      							그리드 컨테이너의 3번째 컬럼에 100px, 4번째 컬럼에 25%를 사용하고
      							남은 공간을 1번째 컬럼에 '1/3', 2번째 컬럼에 '2/3' 만큼 사용합니다.
      						*/
      						.container {
      							display: grid;
      							grid-template-columns: 1fr 2fr 100px 25%;
      						}`}
      </CodeBlock>

      				<figure className="img_figure mt_m">
      					<figcaption className="mt_0">[ <code className="bg_none t_444"><i className="t_blue">fr(fractional unit)</i></code> 사용 예시 ]</figcaption>
      					<img src={`${IMG.CSS}/grid/uxkm_grid_fr-units.svg`} alt="fr(fractional unit) 사용 예시" className="mt_m" />
      				</figure>
      			</div>
      		</article>

      		
      		<article className="indent mt_xl">
      			<h3 className="ml_mn t_blue">min-content</h3>
      			<p className="mt_m">
      				그리드 아이템이 포함하는 내용의 최소 크기를 의미합니다.<br />
      				한글을 사용할 경우 <code>word-break: keep-all;</code>을 선언하면 정상적으로 작동합니다.
      			</p>
      			<div className="indent mt_m">
      				<h4 className="ml_mn">코드 예제</h4>
      				
      <CodeBlock title="grid units [min-content]" language="javascript" className="uk_gist_code_box mt_ms">
      {`<style>
      							.container {
      								display: grid;
      								grid-template-columns: min-content 1fr;
      							}
      						</style>

      						
      						<div class="container">
      							<div class="item">내용의 최소 크기</div>
      							
      						</div>`}
      </CodeBlock>

      				<figure className="img_figure mt_m">
      					<figcaption className="mt_0">[ 한글을 사용하는 경우 <code className="bg_none t_blue">word-break: keep-all;</code>를 설정 ]</figcaption>
      					<img src={`${IMG.CSS}/grid/uxkm_grid_min-content.svg`} alt="한글을 사용하는 경우 word-break: keep-all;를 설정" className="mt_m" />
      				</figure>
      			</div>
      		</article>

      		
      		<article className="indent mt_xl">
      			<h3 className="ml_mn t_blue">max-content</h3>
      			<p className="mt_m">
      				그리드 아이템이 포함하는 내용의 최대 크기를 의미합니다.
      			</p>
      			<div className="indent mt_m">
      				<h4 className="ml_mn">코드 예제</h4>
      				
      <CodeBlock title="grid units [max-content]" language="javascript" className="uk_gist_code_box mt_ms">
      {`.container {
      						display: grid;
      						grid-template-columns: max-content 1fr;
      					}

      					/*
      						그리드 함수들과 같이 더 유용하게 활용할 수 있습니다.
      						다음 예제는 총 3컬럼 그리드를 생성하며 각 열(Track)은 최대 1fr 크기를 가지지만,
      						max-content를 통해 포함된 그리드 아이템의 내용보다 작아질 수 없습니다.
      					*/
      					.container {
      						display: grid;
      						grid-template-columns: repeat(3, minmax(max-content, 1fr));
      					}`}
      </CodeBlock>

      				<figure className="img_figure mt_m">
      					<figcaption className="mt_0"><code className="bg_none t_444">[ min-content / max-content ]</code></figcaption>
      					<img src={`${IMG.CSS}/grid/uxkm_grid_minmax-content.svg`} alt="min-content / max-content" className="mt_m" />
      				</figure>
      			</div>
      		</article>

      		
      		<article className="indent mt_xl">
      			<h3 className="ml_mn t_blue">auto-fill, auto-fit</h3>
      			<p className="mt_m">
      				아이템의 개수를 알 수 없을 때 <code>auto-fit</code>, <code>auto-fill</code>을 사용합니다.<br />
      				<code>repeat()</code> 함수와 함께 사용하며, 행/열의 개수를 자동으로 조정합니다. 반응형 그리드에 유용합니다.
      			</p>
      			<figure className="img_figure mt_m">
      				<figcaption className="mt_0"><code className="bg_none t_444">[ auto-fill & auto-fit ]</code></figcaption>
      				<img src={`${IMG.CSS}/grid/uxkm_grid_auto-fill-fit.svg`} alt="auto-fill과 auto-fit" className="mt_m" />
      			</figure>
      			<div className="indent mt_m">
      				<h4 className="ml_mn">코드 예제</h4>
      				
      <CodeBlock title="grid units [auto-fill, auto-fit]" language="javascript" className="uk_gist_code_box mt_ms">
      {`/*
      							다음 4컬럼 그리드 예제에서 컨테이너의 크기가 아이템들을 수용하기 충분하지 않은 경우 아이템은 넘치기 시작합니다.
      							(아이템의 최소 크기가 100px입니다.)
      						*/
      							.container {
      							display: grid;
      							grid-template-columns: repeat(4, minmax(100px, 1fr));
      						}

      						/*
      							만약 4컬럼 그리드를 고집할 필요가 없다면,
      							다음과 같이 '반복횟수'(repeat() 함수의 첫 번째 인수)를 auto-fill이나 auto-fit으로 수정할 수 있습니다.
      							이는 컨테이너의 크기가 아이템들을 수용하기 충분하지 않을 경우
      							아이템을 자동으로 줄 바꿈 처리하며, 그에 맞게 암시적 행/열도 자동으로 수정합니다.
      						*/
      						.container {
      							display: grid;
      							grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
      						}`}
      </CodeBlock>

      				<figure className="img_figure mt_ml">
      					<figcaption className="mt_0">[ <code className="bg_none t_444">auto-fill</code> 유/무의 차이 ]</figcaption>
      					<img src={`${IMG.CSS}/grid/uxkm_grid_auto-fill_vs_x.svg`} alt="auto-fill 유/무의 차이" className="mt_m" />
      				</figure>
      			</div>
      		</article>

      		
      		<article className="indent mt_xl">
      			<h3 className="ml_mn t_blue">auto-fill과 auto-fit의 차이</h3>
      			<p className="mt_m">
      				<code>auto-fill</code>과 <code>auto-fit</code>의 차이점은 그리드 컨테이너가 하나의 행/열(Track)에 모든 아이템을 수용하고 남는 공간이 있을 때 발생합니다.<br />
      				<code>auto-fill</code>은 남는 공간(빈 트랙)을 그대로 유지하고, <code>auto-fit</code>은 남는 공간을 축소합니다.
      			</p>
      			<div className="indent mt_m">
      				<h4 className="ml_mn">자동 채우기(auto-fill)</h4>
      				<p className="mt_ms">
      					채움(fill)은 반복 횟수만큼 계산하여 처리하지만 정해진 수 이상은 처리하지 않습니다.
      				</p>
      				
      <CodeBlock title="grid units [auto-fill]" language="javascript" className="uk_gist_code_box mt_ms">
      {`.container {
      							display: grid;
      							grid-template-columns: repeat(auto-fill, 1fr 2fr);
      						}`}
      </CodeBlock>

      			</div>
      			<div className="indent mt_ml">
      				<h4 className="ml_mn">자동 채우기(auto-fit)</h4>
      				<p className="mt_ms">
      					맞춤(fit)은 채움과 유사하게 작동하지만, 빈 트랙이 존재할 경우 빈 공간을 나눠 맞춥니다.
      				</p>
      				
      <CodeBlock title="grid units [auto-fit]" language="javascript" className="uk_gist_code_box mt_ms">
      {`.container {
      							display: grid;
      							grid-template-rows: repeat(auto-fit, minmax(80px, auto));
      						}`}
      </CodeBlock>

      			</div>
      			<figure className="img_figure mt_ml">
      				<figcaption className="mt_0"><code className="bg_none t_444">[ auto-fill</code>과 <code className="bg_none t_444">auto-fit</code>의 차이 <code className="bg_none t_444">]</code></figcaption>
      				<img src={`${IMG.CSS}/grid/uxkm_grid_auto-fill-vs-fill.svg`} alt="auto-fill과 auto-fit 비교" className="mt_m" />
      			</figure>
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
      		<img src={`${IMG.CSS}/04_css_05_1.png`} alt="CSS Grid 소개 및 요약" />
      		<figcaption className="reference">
      			CSS Grid 소개 및 요약
      		</figcaption>
      	</figure>

      	<aside className="reference_box mt_xxl">
      		<strong className="tit">그리드 레이아웃 참조</strong>
      		<ul className="link_lst">
      			<li className="reference"><a href="https://www.w3.org/TR/css-grid-1/" target="_blank" rel="noreferrer" className="fas" title="새창열림">W3C CSS Grid Layout Module Level 1</a></li>
      			<li className="reference"><a href="https://www.w3.org/TR/css-grid-2/" target="_blank" rel="noreferrer" className="fas" title="새창열림">W3C CSS Grid Layout Module Level 2</a></li>
      			<li className="reference"><a href="https://www.w3.org/TR/css-align-3/" target="_blank" rel="noreferrer" className="fas" title="새창열림">W3C CSS Box Alignment Module Level 3</a></li>
      			<li className="reference"><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout" target="_blank" rel="noreferrer" className="fas" title="새창열림">MDN CSS Grid Layout</a></li>
      			<li className="reference"><a href="https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Grid_Layout/Relationship_of_grid_layout" target="_blank" rel="noreferrer" className="fas" title="새창열림">MDN Relationship_of_grid_layout</a></li>
      			<li className="reference"><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout" target="_blank" rel="noreferrer" className="fas" title="새창열림">MDN Box alignment in CSS Grid Layout</a></li>
      			<li className="reference"><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Alignment" target="_blank" rel="noreferrer" className="fas" title="새창열림">MDN CSS Box Alignment</a></li>
      			<li className="reference"><a href="https://developer.mozilla.org/en-US/docs/Tools/Page_Inspector/How_to/Examine_grid_layouts" target="_blank" rel="noreferrer" className="fas" title="새창열림">MDN CSS Grid Inspector: Examine grid layouts</a></li>
      			<li className="reference"><a href="https://grid.layoutit.com/" target="_blank" rel="noreferrer" className="fas" title="새창열림">CSS Grid 제작 온라인 도구 | layoutit.com</a></li>
      			<li className="reference"><a href="https://gridbyexample.com/examples/" target="_blank" rel="noreferrer" className="fas" title="새창열림">CSS Grid Layout Example</a></li>
      			<li className="reference"><a href="https://css-tricks.com/snippets/css/complete-guide-grid/" target="_blank" rel="noreferrer" className="fas" title="새창열림">Guide to Grid</a></li>
      			<li className="reference"><a href="http://cssgridgarden.com/#ko" target="_blank" rel="noreferrer" className="fas" title="새창열림">CSS Grid Garden</a></li>
      			<li className="reference"><a href="https://alistapart.com/article/the-story-of-css-grid-from-its-creators/" target="_blank" rel="noreferrer" className="fas" title="새창열림">창시자가 말하는 CSS 그리드 이야기</a></li>
      			<li className="reference"><a href="https://speakerdeck.com/malarkey/art-directing-for-the-web-five-minutes-with-css-template-areas" target="_blank" rel="noreferrer" className="fas" title="새창열림">웹 디자인 방법에 관한 Andy Clarke의 발표 슬라이드</a></li>
      			<li className="reference"><a href="https://uid.gitbook.io/css-grid/" target="_blank" rel="noreferrer" className="fas" title="새창열림">CSS Grid Layout Guidebook by 야무(yamoo9)</a></li>
      			<li className="reference"><a href="https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/dev-guides/hh673533(v=vs.85)?redirectedfrom=MSDN" target="_blank" rel="noreferrer" className="fas" title="새창열림">Microsoft's documentation Grid layout</a></li>
      			<li className="reference"><a href="https://css-tricks.com/css-grid-in-ie-css-grid-and-the-new-autoprefixer/" target="_blank" rel="noreferrer" className="fas" title="새창열림">CSS Grid in IE: CSS Grid and the New Autoprefixer</a></li>
      			<li className="reference"><a href="https://css-tricks.com/css-grid-in-ie-debunking-common-ie-grid-misconceptions/" target="_blank" rel="noreferrer" className="fas" title="새창열림">CSS Grid in IE: Debunking Common IE Grid Misconceptions</a></li>
      			<li className="reference"><a href="https://rachelandrew.co.uk/css/cheatsheets/box-alignment" target="_blank" rel="noreferrer" className="fas" title="새창열림">Box 정렬 치트시트 | rachelandrew.co.uk</a></li>
      			<li className="reference"><a href="https://caniuse.com/#feat=css-grid" target="_blank" rel="noreferrer" className="fas" title="새창열림">supported by all major browsers</a></li>
      		</ul>
      	</aside>
    </>
  )
}

export default CssGridPart1Page
