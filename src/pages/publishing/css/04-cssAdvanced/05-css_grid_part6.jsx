import { usePageMeta } from '@/components/common/PageMeta'
import '../../../../assets/css/css_grid_part6.scss'
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
  title: "그리드 레이아웃 - 가이드, 데모",
  description: "Box 정렬(Alignment)은 CSS Grid와 Flexbox에서 컨테이너 요소가 포함하는 아이템 자식 요소를 정렬하는 방법으로, 위치 정렬, 기본 정렬, 분산 정렬의 세 가지 유형으로 구분할 수 있으며, 레이아웃 방법에 따라 정렬 동작이 달라집니다. 이 페이지에서는 box 정렬의 핵심 개념, CSS Grid와 Flexbox의 정렬 방법 비교, justify-content와 align-content를 사용한 컨테이너 정렬, justify-items와 align-items를 사용한 아이템 정렬, justify-self와 align-self를 사용한 개별 아이템 정렬, 실제 활용 예제를 함께 소개합니다.",
  keyword: "style, css, Cascading Style Sheets, grid, 그리드, 그리드 레이아웃, grid layout, box정렬",
}

function CssGridPart6Page() {
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
      		<h2 className="ml_mn">box정렬 가이드</h2>
      		<blockquote className="uk_note mt_l" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				Box 정렬(Alignment)의 일부 동작은 레이아웃 방법에 따라 달라집니다.<br />
      				CSS Grid / Flexbox의 각 레이아웃 방법에 따라 아이템 정렬이 어떻게 다르게 설정되는지 비교해봅니다.
      			</p>
      		</blockquote>

      		
      		<article className="mt_xl indent">
      			<h3 className="ml_mn">box 정렬의 핵심 개념</h3>
      			<p className="mt_m">
      				컨테이너 요소는 포함하는 아이템 자식 요소를 정렬할 수 있습니다. 정렬의 유형을 세부적으로 구분하면 다음 3가지로 나눌 수 있습니다.
      			</p>
      			<ol className="ol_lst mt_s indent">
      				<li><strong className="weight-500 t_blue bg_none">위치 정렬</strong> - <code>start</code>, <code>end</code>, <code>center</code>와 같은 키워드</li>
      				<li><strong className="weight-500 t_blue bg_none">기본 정렬</strong> - <code>baseline</code> 키워드와 <code>first</code>/<code>last</code> 수정자(Modifiers)</li>
      				<li><strong className="weight-500 t_blue bg_none">분산 정렬</strong> - <code>stretch</code>, <code>space-between</code>, <code>space-around</code>, <code>space-evenly</code></li>
      			</ol>
      			<p className="mt_ms">
      				이러한 키워드 값의 대부분은 문서의 쓰기 모드(Writing modes)와 관련되어 작동합니다.<br />
      				글의 흐름이 좌 ⟹ 우 방향이라면 그리드 컨테이너의 왼쪽이 start 가 됩니다. 반대로 우 ⟹ 좌 방향이라면 오른쪽이 start가 됩니다.
      			</p>
      			<figure className="img_figure mt_m">
      				<figcaption className="mt_0">[ Box 정렬 좌 ⟹ 우 / 우 ⟹ 좌 ]</figcaption>
      				<img src={`${IMG.CSS}/grid/grid-box-align-start.png`} alt="Box 정렬 좌 ⟹ 우 / 우 ⟹ 좌" className="mt_s max-w800" />
      			</figure>
      		</article>

      		
      		<article className="mt_xl indent">
      			<h3 className="ml_mn">block / inline 축(axis)</h3>
      			<p className="mt_m">
      				블록과 인라인 축은 레이아웃 방법에 따라 다르게 사용됩니다.<br />
      				블록 축은 <code>grid</code>에서는 컬럼(<code>column</code>) 축으로, flexbox에서는 교차(<code>cross</code>) 축으로 사용됩니다.<br />
      				인라인 축은 <code>grid</code>에서는 로우(<code>row</code>) 축으로, flexbox에서는 주(<code>main</code>) 축으로 사용됩니다.<br />
      				<code>grid</code>는 언제나 명시적인 행/열을 가지고 있어 축을 기준으로 하는 정렬을 이해하기 쉽습니다.<br />
      				하지만 flexbox는 주 축(<code>main axis</code>) 방향이 바뀔 때마다 정렬 기준이 변경되므로 주의해야 합니다.
      			</p>
      			<ol className="ol_lst mt_ms indent">
      				<li className="line_code tit_h4 before_blue">
      					<h4 className="weight-700 t_blue">block 축 (수직)</h4>
      					<p>grid - column 축</p>
      					<p>flexbox - cross 축</p>
      				</li>
      				<li className="line_code tit_h4 mt_m before_blue">
      					<h4 className="weight-700 t_blue">inline 축 (수평)</h4>
      					<p>grid - row 축</p>
      					<p>flexbox - main 축</p>
      				</li>
      			</ol>
      			<figure className="img_figure mt_m">
      				<figcaption className="mt_0">[ <code className="bg_none"><i className="t_blue">Block</i> / <i className="t_blue">Inline</i></code> 축(Axis) ]</figcaption>
      				<img src={`${IMG.CSS}/grid/uxkm_grid-box-block_inline.svg`} alt="Block / Inline 축(Axis)" className="mt_s" />
      			</figure>
      		</article>

      		
      		<article className="mt_xl indent">
      			<h3 className="ml_mn">align-self / align-items</h3>
      			<p className="mt_m">
      				<code>align-*</code> 속성은 블록 축(수직 방향)과 관련된 속성입니다.<br />
      				grid 레이아웃은 <code>column</code> 축에 해당되며, 명확하게 수직 방향으로만 정렬이 설정됩니다.<br />
      				반면 flexbox는 <code>flex-direction</code> 속성 설정에 따라 교차 축의 방향이 바뀌기 때문에, 교차 축에 영향을 받는 <code>align-*</code> 속성의 정렬 또한 바뀝니다.
      			</p>
      			<div className="grid_flex mt_m">
      				<h4 className="">grid와 flex 비교</h4>
      				<div className="vs_table mt_ms">
      					<div className="in_table">
      						<h5><code className="bg_none">grid</code></h5>
      						<dl className="h_line">
      							<dt>정렬 컨테이너</dt>
      							<dd>
      								Grid 영역(Area)
      							</dd>
      						</dl>
      						<dl className="h_line">
      							<dt>기본 동작</dt>
      							<dd>
      								일정 비율을 가진 아이템을 제외하고는 <code className="bg_none t_444">stretch</code>가 설정된 것처럼 늘어난 형태로 동작합니다.
      							</dd>
      						</dl>
      						<dl className="h_line">
      							<dt>설정 가능한 값</dt>
      							<dd>
      								<code className="bg_none t_444">
      									auto, normal, start, end, center, stretch,<br />
      									baseline, first-baseline, last-baseline
      								</code>
      							</dd>
      						</dl>
      						<dl className="h_line">
      							<dt>허용 범위</dt>
      							<dd>
      								블록 / 컬럼(<code className="bg_none t_444">column</code>) 축
      							</dd>
      						</dl>
      						<dl className="v_line">
      							<dt>예시</dt>
      							<dd>
      								<code className="bg_none t_blue">align-self</code>의 기본 동작은 <code className="bg_none t_blue">stretch</code> 입니다.<br />
      								<code className="bg_none t_blue">start</code> 값을 설정하면 <mark>그리드 컨테이너 블록 축의 시작 부분에 정렬</mark>됩니다.
      							</dd>
      						</dl>
      						<figure className="img_figure mt_ms">
      							<img src={`${IMG.CSS}/grid/uxkm_grid_g-vs-f_align-self-items1.svg`} alt="grid align-self / align-items" />
      						</figure>
      					</div>
      					<div className="in_table">
      						<h5><code className="bg_none">flex</code></h5>
      						<dl className="h_line">
      							<dt>정렬 컨테이너</dt>
      							<dd>
      								아이템이 있는 Flex 라인
      							</dd>
      						</dl>
      						<dl className="h_line">
      							<dt>기본 동작</dt>
      							<dd>
      								<code className="bg_none t_444">stretch</code> 값이 기본 입니다.
      							</dd>
      						</dl>
      						<dl className="h_line">
      							<dt>설정 가능한 값</dt>
      							<dd>
      								<code className="bg_none t_444">
      									auto, normal, flex-start, flex-end, center, stretch,<br />
      									baseline, first-baseline, last-baseline
      								</code>
      							</dd>
      						</dl>
      						<dl className="h_line">
      							<dt>허용 범위</dt>
      							<dd>
      								블록 / 교차(<code className="bg_none t_444">cross</code>) 축
      							</dd>
      						</dl>
      						<dl className="v_line">
      							<dt>예시</dt>
      							<dd>
      								<code className="bg_none t_blue">align-self</code>의 기본 동작은 <code className="bg_none t_blue">stretch</code> 입니다.
      								<code className="bg_none t_blue">flex-direction</code> 설정 값에 따라 늘어나는 방향이 변경됩니다.<br />
      								<mark><code className="bg_none t_222">row</code>일 경우 <code className="bg_none t_222">height</code></mark>,
      								<mark><code className="bg_none t_222">column</code>일 경우 <code className="bg_none t_222">width</code></mark>로 설정됩니다.<br />
      								<code className="bg_none t_blue">start</code> 값을 설정하면 교차 축의 시작 부분에 정렬됩니다.
      							</dd>
      						</dl>
      						<figure className="img_figure mt_ms">
      							<img src={`${IMG.CSS}/grid/uxkm_grid_g-vs-f_align-self-items2.svg`} alt="flex align-self / align-items" />
      						</figure>
      					</div>
      				</div>
      			</div>
      		</article>

      		
      		<article className="mt_xl indent">
      			<h3 className="ml_mn">justify-self / justify-items</h3>
      			<p className="mt_m">
      				<code>justify-*</code> 속성은 인라인 축(수평 방향)과 관련된 속성입니다.<br />
      				grid 레이아웃은 <code>row</code> 축에 해당되며, 명확하게 수평 방향으로만 정렬이 설정됩니다.<br />
      				반면 flexbox에는 <code>justify-self</code>, <code>justify-items</code>과 같은 속성을 지원하지 않습니다.<br />
      				개별 아이템을 주 축 방향을 기준으로 정렬하고자 한다면 <code>margin</code> 속성을 사용할 수 있습니다.
      			</p>
      			<div className="grid_flex mt_m">
      				<h4 className="">grid와 flex 비교</h4>
      				<div className="vs_table mt_ms">
      					<div className="in_table">
      						<h5><code className="bg_none">grid</code></h5>
      						<dl className="h_line">
      							<dt>정렬 컨테이너</dt>
      							<dd>
      								Grid 영역(Area)
      							</dd>
      						</dl>
      						<dl className="h_line">
      							<dt>기본 동작</dt>
      							<dd>
      								일정 비율을 가진 아이템을 제외하고는 <code className="bg_none t_444">stretch</code>가 설정된 것처럼 늘어난 형태로 동작합니다.
      							</dd>
      						</dl>
      						<dl className="h_line">
      							<dt>설정 가능한 값</dt>
      							<dd>
      								<code className="bg_none t_444">
      									auto, normal, start, end, center, stretch,<br />
      									baseline, first-baseline, last-baseline
      								</code>
      							</dd>
      						</dl>
      						<dl className="h_line">
      							<dt>허용 범위</dt>
      							<dd>
      								인라인 / 행(<code className="bg_none t_444">row</code>) 축
      							</dd>
      						</dl>
      						<dl className="v_line">
      							<dt>예시</dt>
      							<dd>
      								<code className="bg_none t_blue">justify-self</code>의 기본 동작은 <code className="bg_none t_blue">stretch</code> 입니다.<br />
      								<code className="bg_none t_blue">start</code> 값을 설정하면 <mark>그리드 컨테이너 인라인 축의 시작 부분에 정렬</mark>됩니다.
      							</dd>
      						</dl>
      						<figure className="img_figure mt_ms">
      							<img src={`${IMG.CSS}/grid/uxkm_grid_g-vs-f_justify-self-items.svg`} alt="grid justify-self / justify-items" />
      						</figure>
      					</div>
      					<div className="in_table">
      						<h5><code className="bg_none">flex</code></h5>
      						<p className="con_none">
      							<mark><code className="bg_none t_444">justify-self</code> 속성은 Flexbox에 적용되지 않습니다.</mark><br />
      							주 축에 여러 아이템이 존재해 이들 중 하나를 조정할 수 없습니다.
      							주 축에 콘텐츠를 정렬하고자 한다면 아래 작성된 <code className="bg_none t_444">justify-content</code> 속성을 참고하세요.<br /><br />

      							인라인 축에 하나의 아이템만 정렬하고자 한다면, <code className="bg_none t_444">margin</code> 속성을 사용해 아이템을 정렬할 수 있습니다.
      						</p>
      					</div>
      				</div>
      			</div>
      		</article>

      		
      		<article className="mt_xl indent">
      			<h3 className="ml_mn">align-content</h3>
      			<p className="mt_m">
      				<code>align-content</code> 속성은 블록 축(수직 방향)과 관련된 속성입니다.<br />
      				grid 레이아웃은 <code>column</code> 축에 해당되며, 그리드 컨테이너에 여유 공간이 존재할 경우 정렬이 반영됩니다.<br />
      				flexbox 또한 컨테이너에 여유 공간이 있다면 정렬을 수행할 수 있습니다.
      			</p>
      			<div className="grid_flex mt_m">
      				<h4 className="">grid와 flex 비교</h4>
      				<div className="vs_table mt_ms">
      					<div className="in_table">
      						<h5><code className="bg_none">grid</code></h5>
      						<dl className="h_line">
      							<dt>정렬 컨테이너</dt>
      							<dd>
      								Grid 컨테이너(Container)
      							</dd>
      						</dl>
      						<dl className="h_line">
      							<dt>기본 동작</dt>
      							<dd>
      								일정 비율을 가진 아이템을 제외하고는 <code className="bg_none t_444">stretch</code>가 설정된 것처럼 늘어난 형태로 동작합니다.
      							</dd>
      						</dl>
      						<dl className="h_line">
      							<dt>설정 가능한 값</dt>
      							<dd>
      								<code className="bg_none t_444">
      									normal, start, end, center, stretch,<br />
      									space-between, space-around, space-evenly,<br />
      									baseline, first baseline, last baseline
      								</code>
      							</dd>
      						</dl>
      						<dl className="h_line">
      							<dt>허용 범위</dt>
      							<dd>
      								블록 / 열(<code className="bg_none t_444">column</code>) 축
      							</dd>
      						</dl>
      						<dl className="h_line">
      							<dt>요구 조건</dt>
      							<dd>
      								그리드 컨테이너의 여유 공간
      							</dd>
      						</dl>
      						<dl className="v_line">
      							<dt>예시</dt>
      							<dd>
      								그리드 트랙 크기가 컨테이너 크기보다 작은 경우, 시작 부분에 정렬됩니다.<br />
      								<code className="bg_none t_blue">space-between</code> 값을 설정하면 <mark>블록 축(수직 방향)을 기준으로 공간을 분산 정렬</mark>합니다.
      							</dd>
      						</dl>
      						<figure className="img_figure mt_ms">
      							<img src={`${IMG.CSS}/grid/uxkm_grid_g-vs-f_align-content1.svg`} alt="grid align-content" />
      						</figure>
      					</div>
      					<div className="in_table">
      						<h5><code className="bg_none">flex</code></h5>
      						<dl className="h_line">
      							<dt>정렬 컨테이너</dt>
      							<dd>
      								Flex 컨테이너(Container)
      							</dd>
      						</dl>
      						<dl className="h_line">
      							<dt>기본 동작</dt>
      							<dd>
      								<code className="bg_none t_444">stretch</code> 값이 기본 입니다.
      							</dd>
      						</dl>
      						<dl className="h_line">
      							<dt>설정 가능한 값</dt>
      							<dd>
      								<code className="bg_none t_444">
      									normal, flex-start, flex-end, center, stretch,<br />
      									space-between, space-around, space-evenly,<br />
      									baseline, first baseline, last baseline
      								</code>
      							</dd>
      						</dl>
      						<dl className="h_line">
      							<dt>허용 범위</dt>
      							<dd>
      								블록 / 교차(<code className="bg_none t_444">cross</code>) 축
      							</dd>
      						</dl>
      						<dl className="h_line">
      							<dt>요구 조건</dt>
      							<dd>
      								컨테이너가 아이템보다 표시할 수 있는 공간이 주어질 경우, 정렬을 사용할 수 있습니다.
      							</dd>
      						</dl>
      						<dl className="v_line">
      							<dt>예시</dt>
      							<dd>
      								<code className="bg_none t_blue">align-content</code> 속성은 <mark>컨테이너에 여유 공간이 있을 때 공간을 분산 정렬</mark>하도록 설정할 수 있습니다.
      							</dd>
      						</dl>
      						<figure className="img_figure mt_ms">
      							<img src={`${IMG.CSS}/grid/uxkm_grid_g-vs-f_align-content2.svg`} alt="flex align-content" />
      						</figure>
      					</div>
      				</div>
      			</div>
      		</article>

      		
      		<article className="mt_xl indent">
      			<h3 className="ml_mn">justify-content</h3>
      			<p className="mt_m">
      				<code>justify-content</code> 속성은 인라인 축(수평 방향)과 관련된 속성입니다.<br />
      				grid 레이아웃은 <code>row</code> 축에 해당되며, 그리드 컨테이너에 여유 공간이 존재할 경우 정렬이 반영됩니다.<br />
      				flexbox 또한 컨테이너에 여유 공간이 있다면 정렬을 수행할 수 있습니다.
      			</p>
      			<div className="grid_flex mt_m">
      				<h4 className="">grid와 flex 비교</h4>
      				<div className="vs_table mt_ms">
      					<div className="in_table">
      						<h5><code className="bg_none">grid</code></h5>
      						<dl className="h_line">
      							<dt>정렬 컨테이너</dt>
      							<dd>
      								Grid 컨테이너(Container)
      							</dd>
      						</dl>
      						<dl className="h_line">
      							<dt>기본 동작</dt>
      							<dd>
      								일정 비율을 가진 아이템을 제외하고는 <code className="bg_none t_444">stretch</code>가 설정된 것처럼 늘어난 형태로 동작합니다.
      							</dd>
      						</dl>
      						<dl className="h_line">
      							<dt>설정 가능한 값</dt>
      							<dd>
      								<code className="bg_none t_444">
      									normal, start, end, center, stretch,<br />
      									space-between, space-around, space-evenly,<br />
      									baseline, first-baseline, last-baseline
      								</code>
      							</dd>
      						</dl>
      						<dl className="h_line">
      							<dt>허용 범위</dt>
      							<dd>
      								인라인 / 행(<code className="bg_none t_444">row</code>) 축
      							</dd>
      						</dl>
      						<dl className="h_line">
      							<dt>요구 조건</dt>
      							<dd>
      								그리드 컨테이너의 여유 공간
      							</dd>
      						</dl>
      						<dl className="v_line">
      							<dt>예시</dt>
      							<dd>
      								그리드 트랙 크기가 컨테이너 크기보다 작은 경우, 시작 부분에 정렬됩니다.<br />
      								<code className="bg_none t_blue">space-between</code> 값을 설정하면 <mark>인라인 축(수평 방향)을 기준으로 공간을 분산 정렬</mark>합니다.
      							</dd>
      						</dl>
      						<figure className="img_figure mt_ms">
      							<img src={`${IMG.CSS}/grid/uxkm_grid_g-vs-f_justify-content1.svg`} alt="grid justify-content" />
      						</figure>
      					</div>
      					<div className="in_table">
      						<h5><code className="bg_none">flex</code></h5>
      						<dl className="h_line">
      							<dt>정렬 컨테이너</dt>
      							<dd>
      								Flex 컨테이너(Container)
      							</dd>
      						</dl>
      						<dl className="h_line">
      							<dt>기본 동작</dt>
      							<dd>
      								<code className="bg_none t_444">Flexbox</code> 주(<code className="bg_none t_444">main</code>) 축의 기본 값이 <code className="bg_none t_444">flex-start</code> 이기에 잡아 당긴 것처럼 늘어납니다.
      							</dd>
      						</dl>
      						<dl className="h_line">
      							<dt>설정 가능한 값</dt>
      							<dd>
      								<code className="bg_none t_444">
      									normal, flex-start, flex-end, center, stretch,<br />
      									space-between, space-around, space-evenly,<br />
      									baseline, first-baseline, last-baseline
      								</code>
      							</dd>
      						</dl>
      						<dl className="h_line">
      							<dt>허용 범위</dt>
      							<dd>
      								인라인 / 주(main) 축
      							</dd>
      						</dl>
      						<dl className="h_line">
      							<dt>요구 조건</dt>
      							<dd>
      								컨테이너가 아이템보다 표시할 수 있는 공간이 주어질 경우, 정렬을 사용할 수 있습니다.
      							</dd>
      						</dl>
      						<dl className="v_line">
      							<dt>예시</dt>
      							<dd>
      								<code className="bg_none t_blue">justify-content</code> 속성은 <mark>컨테이너에 여유 공간이 있을 때 공간을 분산 정렬</mark>하도록 설정할 수 있습니다.
      							</dd>
      						</dl>
      						<figure className="img_figure mt_ms">
      							<img src={`${IMG.CSS}/grid/uxkm_grid_g-vs-f_justify-content2.svg`} alt="flex justify-content" />
      						</figure>
      					</div>
      				</div>
      			</div>
      		</article>
      	</section>

      	
      	<section className="mt_xxl indent">
      	<h2 className="ml_mn">grid layout demo</h2>

      		
      		<article className="view_editor edit_code mt_l">
      			<h3 className="ve_tit">grid layout</h3>
      			<Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="css/step03/4.5.grid/4.5.grid-layout.html" className="uk_editor indent mt_m min_height_650 mb_result_height_650" mode="htmlmixed" theme="moxer" browser="default" result minHeight="650px" mbResultHeight="650px" />
      </Suspense>
      		</article>

      		
      		<article className="view_editor edit_code mt_xl">
      			<h3 className="ve_tit">grid-auto-flow with out dense</h3>
      			<Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="css/step03/4.5.grid/4.5.grid-layout-normal.html" className="uk_editor indent mt_m min_height_500 mb_result_height_500" mode="htmlmixed" theme="moxer" browser="default" result minHeight="500px" mbResultHeight="500px" />
      </Suspense>
      		</article>

      		
      		<article className="view_editor edit_code mt_xl">
      			<h3 className="ve_tit">grid-auto-flow: dense</h3>
      			<Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="css/step03/4.5.grid/4.5.grid-layout-auto-flow-dense.html" className="uk_editor indent mt_m min_height_500 mb_result_height_500" mode="htmlmixed" theme="moxer" browser="default" result minHeight="500px" mbResultHeight="500px" />
      </Suspense>
      		</article>

      		
      		<article className="view_editor edit_code mt_xl">
      			<h3 className="ve_tit">grid-based 3-column layout with 2-column option</h3>
      			<Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="css/step03/4.5.grid/4.5.grid-layout-3-column.html" className="uk_editor indent mt_m min_height_500 mb_result_height_500" mode="htmlmixed" theme="moxer" browser="default" result minHeight="500px" mbResultHeight="500px" />
      </Suspense>
      		</article>

      		
      		<article className="mt_xl">
      			<h3 className="t_blue">Creating CSS Grid 소개 영상 (한글 자막)</h3>
      			<div className="grid_info_mv indent mt_m">
      				<iframe src="https://cdn.iframe.ly/XrMuzzm" allowFullScreen="" scrolling="no" allow="encrypted-media *; accelerometer; gyroscope; picture-in-picture" title="Creating CSS Grid 소개 영상 (한글 자막)"></iframe>
      			</div>
      			<p className="indent mt_s">출처 : <span className="reference mt_l"><a href="https://youtu.be/lSKmkTesnkM" target="_blank" rel="noreferrer" title="새창열림">https://youtu.be/lSKmkTesnkM</a></span></p>
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
      		<img src={`${IMG.CSS}/04_css_05_6.png`} alt="CSS Grid layout demo" />
      		<figcaption className="reference">
      			CSS Grid layout demo
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

export default CssGridPart6Page
