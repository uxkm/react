import { usePageMeta } from '@/components/common/PageMeta'
import PublishingPartTabs from '@/components/docs/PublishingPartTabs'
import { IMG } from '@/config/path'
import { Suspense, lazy } from 'react'
const UkEditorTarget = lazy(() => import('@/components/code/UkEditorTarget'))
function EditorFallback() { return <div className="uk_editor min_height_300" aria-hidden /> }

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
  title: "그리드 레이아웃 - 명시적, 암시적",
  description: "CSS Grid에서 명시적 그리드는 grid-template-rows, grid-template-columns, grid-template-areas로 정의된 그리드이며, 암시적 그리드는 그리드 아이템이 명시적 그리드 밖에 배치될 때 자동으로 생성되는 그리드입니다. 이 페이지에서는 명시적 그리드와 암시적 그리드의 차이점, grid-auto-rows와 grid-auto-columns를 사용한 암시적 그리드 트랙 크기 설정, grid-auto-flow를 사용한 자동 배치 제어 방법을 함께 소개합니다.",
  keyword: "style, css, Cascading Style Sheets, grid, 그리드",
}

function CssGridPart2Page() {
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
      		<h2 className="ml_mn">명시적 그리드(Explicit Grids)와 암시적 그리드(Implicit Grids)의 차이점</h2>

      		
      		<article className="indent mt_xl">
      			<h3 className="ml_mn t_blue" data-conlist-h4="true">명시적 그리드(Explicit Grids)</h3>
      			<p className="mt_m">
      				<code>grid-template-rows</code>, <code>grid-template-columns</code>, <code>grid-template-areas</code>로 정의된 그리드를 명시적 그리드라고 합니다.<br />
      				속성을 사용하여 격자를 형성하는 선 트랙의 고정된 수를 정의할 수 있습니다.
      			</p>

      			
      			<div className="indent mt_l">
      				<h4 className="ml_mn">4개의 수직 트랙(열)과 2개의 수평 트랙(행)이 있는 명시적 그리드</h4>
      				<figure className="img_figure mt_m">
      					<img src={`${IMG.CSS}/grid/uxkm_grid-explicit-grid.svg`} alt="4개의 수직 트랙(열)과 2개의 수평 트랙(행)이 있는 명시적 그리드" />
      				</figure>
      				<div className="view_editor edit_code mt_m">
      					<Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="/css/step03/4.5.grid/4.5.4.grid-explicit-grid.html" className="uk_editor min_height_400 mb_result_height_400" mode="htmlmixed" theme="moxer" browser="default" result minHeight="400px" mbResultHeight="400px" />
      </Suspense></div>
      			</div>

      			
      			<div className="indent mt_l">
      				<h4 className="ml_mn">반복 표기법으로 생성된 100px 너비의 세로 트랙 4개가 포함된 명시적 그리드</h4>
      				<figure className="img_figure mt_m">
      					<img src={`${IMG.CSS}/grid/uxkm_grid-explicit-grid-auto-fitting.svg`} alt="반복 표기법으로 생성된 100px 너비의 세로 트랙 4개가 포함된 명시적 그리드" />
      				</figure>
      				<div className="view_editor edit_code mt_m">
      					<Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="/css/step03/4.5.grid/4.5.4.grid-explicit-grid-auto-fitting.html" className="uk_editor min_height_400 mb_result_height_400" mode="htmlmixed" theme="moxer" browser="default" result minHeight="400px" mbResultHeight="400px" />
      </Suspense></div>
      			</div>

      			
      			<div className="indent mt_l">
      				<h4 className="ml_mn">그리드 컨테이너에 맞게 너비가 100px인 수직 트랙을 반복</h4>
      				<figure className="img_figure mt_m">
      					<img src={`${IMG.CSS}/grid/uxkm_grid-explicit-grid-auto-fill.svg`} alt="그리드 컨테이너에 맞게 너비가 100px인 수직 트랙을 반복" />
      				</figure>
      				<div className="view_editor edit_code mt_m">
      					<Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="/css/step03/4.5.grid/4.5.4.grid-explicit-grid-auto-fill.html" className="uk_editor min_height_400 mb_result_height_400" mode="htmlmixed" theme="moxer" browser="default" result minHeight="400px" mbResultHeight="400px" />
      </Suspense></div>
      			</div>

      			
      			<div className="indent mt_l">
      				<h4 className="ml_mn">auto-fit 키워드를 사용한 반복 표기법은 그리드 컨테이너에 필요한만큼 많은 트랙을 만듭니다</h4>
      				<figure className="img_figure mt_m">
      					<img src={`${IMG.CSS}/grid/uxkm_grid-explicit-grid-auto-fit.svg`} alt="auto-fit 키워드를 사용한 반복 표기법은 그리드 컨테이너에 필요한만큼 많은 트랙을 만듭니다" />
      				</figure>
      				<div className="view_editor edit_code mt_m">
      					<Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="/css/step03/4.5.grid/4.5.4.grid-explicit-grid-auto-fit.html" className="uk_editor min_height_400 mb_result_height_400" mode="htmlmixed" theme="moxer" browser="default" result minHeight="400px" mbResultHeight="400px" />
      </Suspense></div>
      			</div>

      			
      			<div className="indent mt_l">
      				<h4 className="ml_mn">세로 트랙보다 많은 항목이 있으면 더 많은 행이 추가</h4>
      				<figure className="img_figure mt_m">
      					<img src={`${IMG.CSS}/grid/uxkm_grid-explicit-grid-rows.svg`} alt="세로 트랙보다 많은 항목이 있으면 더 많은 행이 추가" />
      				</figure>
      				<div className="view_editor edit_code mt_m">
      					<Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="/css/step03/4.5.grid/4.5.4.grid-explicit-grid-rows.html" className="uk_editor min_height_400 mb_result_height_400" mode="htmlmixed" theme="moxer" browser="default" result minHeight="400px" mbResultHeight="400px" />
      </Suspense></div>
      			</div>

      			
      			<div className="indent mt_l">
      				<h4 className="ml_mn">두 축에서 auto-fill 키워드를 사용한 반복 표기법</h4>
      				<figure className="img_figure mt_m">
      					<img src={`${IMG.CSS}/grid/uxkm_grid-explicit-grid-auto-fill-both.svg`} alt="두 축에서 auto-fill 키워드를 사용한 반복 표기법" />
      				</figure>
      				<div className="view_editor edit_code mt_m">
      					<Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="/css/step03/4.5.grid/4.5.4.grid-explicit-grid-auto-fill-both.html" className="uk_editor min_height_400 mb_result_height_400" mode="htmlmixed" theme="moxer" browser="default" result minHeight="400px" mbResultHeight="400px" />
      </Suspense></div>
      			</div>
      		</article>

      		
      		<article className="indent mt_xl">
      			<h3 className="ml_mn t_blue" data-conlist-h4="true">암시적 그리드(Implicit Grids)</h3>
      			<p className="mt_m">
      				그리드에 셀보다 많은 그리드 항목이 있거나 그리드 항목이 명시적 그리드 외부에 배치될 때 그리드 컨테이너는 그리드 선을 추가하여 그리드 트랙을 자동으로 생성합니다.<br />
      				이러한 추가 암시적 트랙 및 선과 함께 명시적 그리드는 암시적 그리드를 형성합니다.<br />
      				암시적 트랙은 명시적 그리드의 끝에 추가될 수 없으며, 명시적 그리드를 시작으로 확장해야 합니다.
      			</p>

      			
      			<div className="indent mt_l">
      				<h4 className="ml_mn">암시적 선 및 트랙을 생성하는 명시적 그리드 외부에 배치 된 두 개의 항목</h4>
      				<figure className="img_figure mt_m">
      					<img src={`${IMG.CSS}/grid/uxkm_grid-implicit-grids.svg`} alt="암시적 선 및 트랙을 생성하는 명시적 그리드 외부에 배치 된 두 개의 항목" />
      				</figure>
      				<div className="view_editor edit_code mt_m">
      					<Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="/css/step03/4.5.grid/4.5.4.grid-implicit-grids.html" className="uk_editor min_height_400 mb_result_height_410" mode="htmlmixed" theme="moxer" browser="default" result minHeight="400px" mbResultHeight="410px" />
      </Suspense></div>
      			</div>

      			
      			<div className="indent mt_l">
      				<h4 className="ml_mn">암시적 트랙의 고정 너비 및 높이</h4>
      				<figure className="img_figure mt_m">
      					<img src={`${IMG.CSS}/grid/uxkm_grid-implicit-grids-tracks.svg`} alt="암시적 트랙의 고정 너비 및 높이" />
      				</figure>
      				<div className="view_editor edit_code mt_m">
      					<Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="/css/step03/4.5.grid/4.5.4.grid-implicit-grids-tracks.html" className="uk_editor min_height_400 mb_result_height_410" mode="htmlmixed" theme="moxer" browser="default" result minHeight="400px" mbResultHeight="410px" />
      </Suspense></div>
      			</div>

      			
      			<div className="indent mt_l">
      				<h4 className="ml_mn">한 행과 한 열씩 시작으로 확장된 암시적 그리드</h4>
      				<figure className="img_figure mt_m">
      					<img src={`${IMG.CSS}/grid/uxkm_grid-implicit-grids2.svg`} alt="한 행과 한 열씩 시작으로 확장된 암시적 그리드" />
      				</figure>
      				<div className="view_editor edit_code mt_m">
      					<Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="/css/step03/4.5.grid/4.5.4.grid-implicit-grids-grid.html" className="uk_editor min_height_400 mb_result_height_410" mode="htmlmixed" theme="moxer" browser="default" result minHeight="400px" mbResultHeight="410px" />
      </Suspense></div>
      			</div>

      			
      			<div className="indent mt_l">
      				<h4 className="ml_mn">항목 수가 셀 수를 초과하면 행 대신 새 열이 추가</h4>
      				<figure className="img_figure mt_m">
      					<img src={`${IMG.CSS}/grid/uxkm_grid-implicit-grids-auto-flow.svg`} alt="항목 수가 셀 수를 초과하면 행 대신 새 열이 추가" />
      				</figure>
      				<div className="view_editor edit_code mt_m">
      					<Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="/css/step03/4.5.grid/4.5.4.grid-implicit-grids-auto-flow.html" className="uk_editor min_height_550 mb_result_height_590" mode="htmlmixed" theme="moxer" browser="default" result minHeight="550px" mbResultHeight="590px" />
      </Suspense></div>
      			</div>

      			
      			<div className="indent mt_l">
      				<h4 className="ml_mn">명시적인 선과 트랙이 없는 암시적 그리드</h4>
      				<figure className="img_figure mt_m">
      					<img src={`${IMG.CSS}/grid/uxkm_grid-implicit-grids-only.svg`} alt="명시적인 선과 트랙이 없는 암시적 그리드" />
      				</figure>
      				<div className="view_editor edit_code mt_m">
      					<Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="/css/step03/4.5.grid/4.5.4.grid-implicit-grids-only.html" className="uk_editor min_height_400 mb_result_height_410" mode="htmlmixed" theme="moxer" browser="default" result minHeight="400px" mbResultHeight="410px" />
      </Suspense></div>
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
      		<img src={`${IMG.CSS}/04_css_05_2.png`} alt="CSS Grid 명시적, 암시적" />
      		<figcaption className="reference">
      			CSS Grid 명시적, 암시적
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

export default CssGridPart2Page
