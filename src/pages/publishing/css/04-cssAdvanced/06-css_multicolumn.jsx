import { usePageMeta } from '@/components/common/PageMeta'
import { IMG } from '@/config/path'
import { Suspense, lazy } from 'react'
const UkEditorTarget = lazy(() => import('@/components/code/UkEditorTarget'))
function EditorFallback() { return <div className="uk_editor min_height_300" aria-hidden /> }
import CodeBlock from '@/components/code/CodeBlock'

const PAGE_LAYOUT = {
  mainClass: "css_multicolumn",
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
  title: "멀티 컬럼 레이아웃",
  description: "CSS의 멀티 컬럼(multi-column) 레이아웃은 신문과 같이 여러 개의 칼럼으로 콘텐츠를 구성할 수 있도록 해주는 기능으로, 긴 텍스트를 여러 칼럼으로 나누어 가독성을 높일 수 있습니다. 이 페이지에서는 칼럼의 개수를 설정하는 column-count 속성, 칼럼의 너비를 설정하는 column-width 속성, 칼럼 간 간격을 설정하는 column-gap 속성, 칼럼을 병합하는 column-span 속성, 칼럼 사이의 구분선을 설정하는 column-rule 속성, column-width와 column-count를 한 번에 설정하는 columns 단축 속성을 함께 소개합니다.",
  keyword: "style, css, Cascading Style Sheets, 다단, 다중 칼럼, multi-column, layout, multi-column layout",
}

function CssMulticolumnPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  })

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
      		<strong className="sound_only">요약 설명</strong>
      		<p>
      			CSS의 멀티 컬럼(multi-column) 레이아웃은 신문과 같이 여러 개의 칼럼(column)으로 콘텐츠를 구성할 수 있도록 해줍니다.<br />
      			이 기능을 사용하면 긴 텍스트를 여러 칼럼으로 나누어 가독성을 높일 수 있으며, <code>column-count</code>, <code>column-width</code>, <code>column-gap</code> 등의 속성을 통해 칼럼의 개수, 너비, 간격을 조절할 수 있습니다.
      		</p>
      		<p className="mt_s">
      			또한 <code>column-span</code>으로 칼럼을 병합하거나, <code>column-rule</code>로 칼럼 사이의 구분선을 설정할 수 있으며, <code>columns</code> 단축 속성을 사용하면 <code>column-width</code>와 <code>column-count</code>를 한 번에 설정할 수 있습니다.
      		</p>
      	</blockquote>

      	
      	<section className="mt_xxl indent" data-conlist="false">
      		<h2 className="ml_mn"><i className="t_blue">column-count</i></h2>
      		<p className="mt_l">
      			요소를 몇 개의 칼럼(column)으로 나눌지 설정합니다. 블록 요소에 적용할 열 수를 정수 값으로 지정하며, 값이 <code>auto</code>인 경우 열 수는 <code>column-width</code>와 같은 다른 CSS 속성에 의해 결정됩니다.
      		</p>
      		
      <CodeBlock title="multi-column [count]" language="javascript" className="uk_gist_code_box mt_m">
      {`div {
      					column-count: number | auto | initial | inherits;
      				}`}
      </CodeBlock>

      		<ol className="ol_lst mt_m indent">
      			<li><code className="weight-500 t_blue bg_none">auto</code> : 초기값</li>
      			<li><code className="weight-500 t_blue bg_none">number</code> : 칼럼(column)의 개수를 지정하는 정수 값입니다.</li>
      		</ol>

      		<div className="view_editor edit_code mt_xl">
      			<h3 className="ve_tit">multi-column count 예제</h3>
      			<Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="css/step03/4.6.multi-column/4.6.multi-column-count.html" className="uk_editor indent mt_m min_height_450" mode="htmlmixed" theme="moxer" browser="default" result minHeight="450px" />
      </Suspense></div>
      	</section>

      	
      	<section className="mt_xxl indent" data-conlist="false">
      		<h2 className="ml_mn"><i className="t_blue">column-gap</i></h2>
      		<p className="mt_l">칼럼 사이의 간격을 설정합니다.</p>
      		
      <CodeBlock title="multi-column [gap]" language="javascript" className="uk_gist_code_box mt_m">
      {`div {
      					column-gap: length(px, em) | percentage(%) | normal | initial | inherit;
      				}`}
      </CodeBlock>


      		<div className="view_editor edit_code mt_xl">
      			<h3 className="ve_tit">multi-column gap 예제</h3>
      			<Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="css/step03/4.6.multi-column/4.6.multi-column-gap.html" className="uk_editor indent mt_m min_height_450" mode="htmlmixed" theme="moxer" browser="default" result minHeight="450px" />
      </Suspense></div>
      	</section>

      	
      	<section className="mt_xxl indent" data-conlist="false">
      		<h2 className="ml_mn"><i className="t_blue">column-width</i></h2>
      		<p className="mt_l">칼럼의 너비를 설정합니다.</p>
      		
      <CodeBlock title="multi-column [width]" language="javascript" className="uk_gist_code_box mt_m">
      {`div {
      					column-width: auto | length(px, em, vw) | initial | inherit;
      				}`}
      </CodeBlock>


      		<div className="view_editor edit_code mt_l">
      			<h3 className="ve_tit">multi-column width 예제</h3>
      			<Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="css/step03/4.6.multi-column/4.6.multi-column-width.html" className="uk_editor indent mt_m min_height_450" mode="htmlmixed" theme="moxer" browser="default" result minHeight="450px" />
      </Suspense></div>
      	</section>

      	
      	<section className="mt_xxl indent" data-conlist="false">
      		<h2 className="ml_mn"><i className="t_blue">column-span</i></h2>
      		<p className="mt_l">
      			요소가 몇 개의 칼럼(column)을 병합해서 표현할지 설정합니다. 값을 <code>all</code>로 설정하면 요소가 나타나기 전에 모든 열에서 자동으로 균형을 맞추며, 이 요소는 새로운 블록 서식 컨텍스트를 설정합니다. 둘 이상의 열에 걸쳐있는 요소를 스패닝 요소라고 합니다.
      		</p>
      		
      <CodeBlock title="multi-column [span]" language="javascript" className="uk_gist_code_box mt_m">
      {`div {
      					column-span: none | all | initial | inherit;
      				}`}
      </CodeBlock>


      		<div className="view_editor edit_code mt_l">
      			<h3 className="ve_tit">multi-column span 예제</h3>
      			<Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="css/step03/4.6.multi-column/4.6.multi-column-span.html" className="uk_editor indent mt_m min_height_450 mb_result_height_430" mode="htmlmixed" theme="moxer" browser="default" result minHeight="450px" mbResultHeight="430px" />
      </Suspense></div>
      	</section>

      	
      	<section className="mt_xxl indent" data-conlist="false">
      		<h2 className="ml_mn"><i className="t_blue">column-fill</i></h2>
      		<p className="mt_l">칼럼을 어떻게 채울지 설정합니다.</p>
      		
      <CodeBlock title="multi-column [fill]" language="javascript" className="uk_gist_code_box mt_m">
      {`div {
      					column-fill: auto | balance | initial | inherit;
      				}`}
      </CodeBlock>

      		<ol className="ol_lst mt_m indent">
      			<li><code className="weight-500 t_blue bg_none">balance</code> : 콘텐츠 내용보다 높이가 길다면 균형을 이루어 각 열의 아래쪽 부분을 빈 공간으로 남겨 둡니다.</li>
      			<li><code className="weight-500 t_blue bg_none">auto</code> : 열 채우기를 <code>height</code>에 맞추어 자동으로 설정합니다. 다음 열로 이동하기 전에 각 열을 위에서 아래로 완전히 채우는 효과가 있습니다.</li>
      		</ol>

      		<div className="view_editor edit_code mt_l">
      			<h3 className="ve_tit">multi-column fill 예제</h3>
      			<Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="css/step03/4.6.multi-column/4.6.multi-column-fill.html" className="uk_editor indent mt_m min_height_500 mb_result_height_480" mode="htmlmixed" theme="moxer" browser="default" result minHeight="500px" mbResultHeight="480px" />
      </Suspense></div>
      	</section>

      	
      	<section className="mt_xxl indent">
      		<h2 className="ml_mn"><i className="t_blue">column-rule-style</i></h2>
      		<p className="mt_l">칼럼 사이에 들어갈 라인의 스타일을 설정합니다.</p>
      		
      <CodeBlock title="multi-column [column-rule-style]" language="javascript" className="uk_gist_code_box mt_m">
      {`div {
      					/* <'border-style'> values */
      					column-rule-style: none;
      					column-rule-style: hidden;
      					column-rule-style: dotted;
      					column-rule-style: dashed;
      					column-rule-style: solid;
      					column-rule-style: double;
      					column-rule-style: groove;
      					column-rule-style: ridge;
      					column-rule-style: inset;
      					column-rule-style: outset;

      					/* Global values */
      					column-rule-style: inherit;
      					column-rule-style: initial;
      					column-rule-style: unset;
      				}`}
      </CodeBlock>

      	</section>

      	
      	<section className="mt_xxl indent">
      		<h2 className="ml_mn"><i className="t_blue">column-rule-color</i></h2>
      		<p className="mt_l">칼럼 사이에 들어갈 라인의 색상을 설정합니다.</p>
      		
      <CodeBlock title="multi-column [column-rule-color]" language="javascript" className="uk_gist_code_box mt_m">
      {`div {
      					/* <color> values */
      					column-rule-color: red;
      					column-rule-color: rgb(192, 56, 78);
      					column-rule-color: transparent;
      					column-rule-color: hsla(0, 100%, 50%, 0.6);
      					/* CSS Colors Level 4부터는 hsl()도 동일하게 작동: hsl(0, 100%, 50%, 0.6) */

      					/* Global values */
      					column-rule-color: inherit;
      					column-rule-color: initial;
      					column-rule-color: unset;
      				}`}
      </CodeBlock>

      	</section>

      	
      	<section className="mt_xxl indent" data-conlist="false">
      		<h2 className="ml_mn"><i className="t_blue">column-rule</i></h2>
      		<p className="mt_l">칼럼 사이의 구분선(rule)에 대한 <code>column-rule-width</code>, <code>column-rule-style</code>, <code>column-rule-color</code> 속성을 한 줄에 설정할 수 있습니다.</p>
      		
      <CodeBlock title="multi-column [column-rule]" language="javascript" className="uk_gist_code_box mt_m">
      {`div {
      					column-rule: column-rule-width | column-rule-style | column-rule-color | initial | inherit;

      					column-rule: dotted;
      					column-rule: solid 8px;
      					column-rule: solid blue;
      					column-rule: thick inset blue;
      				}`}
      </CodeBlock>


      		<div className="view_editor edit_code mt_xl">
      			<h3 className="ve_tit">multi-column rule 예제</h3>
      			<Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="css/step03/4.6.multi-column/4.6.multi-column-rule.html" className="uk_editor indent mt_m min_height_450" mode="htmlmixed" theme="moxer" browser="default" result minHeight="450px" />
      </Suspense></div>
      	</section>

      	
      	<section className="mt_xxl indent" data-conlist="false">
      		<h2 className="ml_mn"><i className="t_blue">columns</i></h2>
      		<p className="mt_l"><code>column-width</code>와 <code>column-count</code> 속성을 한 줄에 설정할 수 있는 단축 속성입니다.</p>
      		
      <CodeBlock title="multi-column [columns]" language="javascript" className="uk_gist_code_box mt_m">
      {`div {
      					columns: <'column-width'> || <'column-count'>;

      					/* Column width */
      					columns: 18em;

      					/* Column count */
      					columns: auto;
      					columns: 2;

      					/* Both column width and count */
      					columns: 2 auto;
      					columns: auto 12em;
      					columns: auto auto;
      				}`}
      </CodeBlock>


      		<div className="view_editor edit_code mt_xl">
      			<h3 className="ve_tit">multi-column columns 예제</h3>
      			<Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="css/step03/4.6.multi-column/4.6.multi-columns.html" className="uk_editor indent mt_m min_height_590 mb_result_height_600" mode="htmlmixed" theme="moxer" browser="default" result minHeight="590px" mbResultHeight="600px" />
      </Suspense></div>
      	</section>

      	<aside className="browser_support mt_xxl" data-tit="multi-column layout">
      		<ul>
      			<li className="ie">10+</li>
      			<li className="edge">76 -ms-</li>
      			<li className="chrome">50+ -webkit-</li>
      			<li className="firefox">52+ -moz-</li>
      			<li className="opera">15+ -webkit-</li>
      			<li className="safari">9.0</li>
      		</ul>
      	</aside>

      	<figure className="img_figure indent mt_l">
      		<img src={`${IMG.CSS}/04_css_06.png`} alt="CSS Multi-column Layout" />
      		<figcaption className="reference">
      			CSS Multi-column Layout
      		</figcaption>
      	</figure>

      	<aside className="reference_box mt_xxl">
      		<strong className="tit">멀티 컬럼 레이아웃 참조</strong>
      		<ul className="link_lst">
      			<li className="reference"><a href="https://www.w3.org/TR/css-multicol-1/" target="_blank" rel="noreferrer" className="fas" title="새창열림">W3C CSS Multi-column Layout Module Level 1</a></li>
      			<li className="reference"><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Columns/Using_multi-column_layouts" target="_blank" rel="noreferrer" className="fas" title="새창열림">MDN multi-column layouts</a></li>
      			<li className="reference"><a href="https://caniuse.com/#feat=multicolumn" target="_blank" rel="noreferrer" className="fas" title="새창열림">caniuse.com CSS3 Multiple column layout</a></li>
      		</ul>
      	</aside>
    </>
  )
}

export default CssMulticolumnPage
