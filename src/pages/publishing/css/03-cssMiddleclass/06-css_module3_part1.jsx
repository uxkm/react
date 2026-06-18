import { usePageMeta } from '@/components/common/PageMeta'
import PublishingPartTabs from '@/components/docs/PublishingPartTabs'
import { IMG } from '@/config/path'
import { Suspense, lazy } from 'react'
const UkEditorTarget = lazy(() => import('@/components/code/UkEditorTarget'))
function EditorFallback() { return <div className="uk_editor min_height_300" aria-hidden /> }
import CodeBlock from '@/components/code/CodeBlock'

const PAGE_LAYOUT = {
  mainClass: "css_module3_part1",
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
  title: "CSS3 Module part-1",
  description: "CSS3 Module Level 3은 W3C에서 제공하는 CSS(Cascading Style Sheets) 모듈화 표준으로, 기존 CSS2의 기능을 확장하고 새로운 레이아웃 및 스타일링 기능을 제공합니다. 이 페이지에서는 CSS positioned layout module Level 3의 position: sticky 속성, CSS background and border module Level 3의 배경 및 테두리 관련 속성, CSS overflow module Level 3의 콘텐츠 오버플로우 처리 방법을 함께 소개합니다.",
  keyword: "style, css, Cascading Style Sheets, css3, 모듈, level3, css3에 신규 추가된 속성, positioned, background and border, overflow",
}

function CssModule3Part1Page() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  })

  return (
    <>
      <blockquote className="uk_note common_note mt_xxl" role="note">
      	<strong className="sound_only">요약 설명</strong>
      	<p>
      		<b>CSS3 Module</b>은 <strong className="t_black">W3C</strong>의 CSS Working Group이 표준화 작업을 효율적으로 진행하기 위해 CSS를 기능별로 나눈 작은 컴포넌트 단위입니다.<br />
      		각 모듈은 특정 기능이나 주제에 대한 CSS 속성들을 모아놓은 것으로, 예를 들어 배경과 테두리, 레이아웃, 애니메이션 등을 독립적으로 다룹니다.
      	</p>
      	<p className="mt_ms">
      		<b>CSS3</b>는 공식적인 단일 표준이 아니라 여러 모듈로 구성되며, 각 모듈은 독립적으로 표준화 과정을 거칩니다.<br />
      		이를 통해 필요한 기능만 선택적으로 사용할 수 있으며, 새로운 요구사항이 발생할 때마다 새로운 모듈이 추가됩니다.
      	</p>
      </blockquote>
      <PublishingPartTabs sectionType="css" />

      <blockquote className="uk_note mt_xxl" role="note">
      		<strong className="sound_only">요약 설명</strong>
      		<p>
      			<b className="t_blue">CSS3 Module part-1</b>에서는 CSS3 모듈의 속성 중<br />
      		</p>
      		<ul className="dot_lst indent_small">
      			<li className="before_note"><b>CSS positioned layout module Level 3</b></li>
      			<li className="before_note"><b>CSS background and border module Level 3</b></li>
      			<li className="before_note"><b>CSS overflow module Level 3</b>에 대한 내용을 다루고 있습니다.</li>
      		</ul>
      		
      	</blockquote>

      	
      	<section className="txt_ex mt_xxl">
      		<h2> 요약</h2>

      		
      		<article className="indent_max mt_l">
      			<h3 className="ml_mn"><i className="t_blue">CSS3</i>에서 새롭게 추가되거나 변경된 대표적인 기능</h3>
      			<div className="ol_lst mt_m">
      				<ol>
      					<li>선택자(Selectors) Level 3</li>
      					<li>미디어 쿼리(Media Queries) Level 3</li>
      					<li>색(Color) Level 3</li>
      					<li>네임스페이스(Namespaces)</li>
      				</ol>
      			</div>
      		</article>

      		
      		<article className="indent_max mt_l">
      			<h3 className="ml_mn"><i className="t_blue">CSS3</i>를 구성하고 있는 주요 모듈</h3>
      			<div className="ol_lst mt_m">
      				<ol>
      					<li>선택자(Selectors)</li>
      					<li>박스 모델(Box Model)</li>
      					<li>배경(Backgrounds)</li>
      					<li>이미지(Image Values and Replaced Content)</li>
      					<li>텍스트 효과(Text Effects)</li>
      					<li>2D 변형(Transformations)</li>
      					<li>3D 변형(Transformations)</li>
      					<li>애니메이션(Animations)</li>
      					<li>다중 칼럼(Multiple Column) 레이아웃</li>
      					<li>사용자 인터페이스(User Interface)</li>
      				</ol>
      			</div>
      		</article>
      	</section>

      	
      	<section className="txt_ex indent mt_xxl">
      		<h2 className="ml_mn">CSS positioned layout module Level 3</h2>

      		
      		<article className="indent mt_l">
      			<h3 className="ml_mn"><i className="t_blue">position: sticky</i> 속성</h3>
      			<p className="mt_m">
      				사파리 브라우저를 위한 <code>-webkit-</code> 접두어가 필요합니다.
      			</p>
      			
      <CodeBlock title={"position: sticky"} language="javascript" className="uk_gist_code_box mt_m">
      {`position: -webkit-sticky;
      					position: sticky;`}
      </CodeBlock>

      			<p className="mt_m">
      				<code>position: sticky</code> 속성을 적용한 박스는 평소에 문서 안에서 <code>position: static</code> 상태와 같이 일반적인 흐름에 따르지만, 스크롤 위치가 임계점에 이르면 <code>position: fixed</code>와 같이 박스를 화면에 고정할 수 있는 속성입니다.
      			</p>
      			<p className="mt_s">
      				아직 Working Draft 단계이며, <strong className="t_black">Internet Explorer 11</strong> 브라우저와 안드로이드 4.x 이하 버전에서 지원하지 않습니다.<br />
      				최신 명세를 지원하는 브라우저에서는 이 속성이 동작하지만, 지원하지 않는 브라우저에서는 <code>position: static</code> 상태만 표시하기 때문에 어색하지 않게 표시할 수 있습니다.
      			</p>
      			<div className="ol_lst indent mt_ml">
      				<h4 className="ml_mn">sticky 박스의 특징</h4>
      				<ol className="mt_s">
      					<li><code>sticky</code> 박스는 <code>top</code>, <code>right</code>, <code>bottom</code>, <code>left</code> 속성 중 하나 이상이 필수입니다.</li>
      					<li><code>fixed</code> 박스는 뷰포트에 고정하지만, <code>sticky</code> 박스는 스크롤 박스에 고정합니다. 즉, 스크롤 박스가 offset 기준입니다.</li>
      					<li>뷰포트와 스크롤 박스가 동일한 것처럼 보일 수 있지만, 뷰포트는 하나뿐이고 스크롤 박스는 문서 안에서 여러 개 생성할 수 있습니다.</li>
      					<li><code>sticky</code> 박스를 스크롤 박스에 고정하는 임계점은 스크롤 위치가 결정하며, <code>sticky</code> 박스 자신과 부모의 위치와 크기도 임계점에 영향을 미칩니다.</li>
      					<li><code>sticky</code> 박스의 부모 박스가 스크롤 박스를 벗어나면 <code>sticky</code> 박스는 다시 일반적인 흐름에 따릅니다.</li>
      					<li><code>sticky</code> 박스와 스크롤 박스 사이에 <code>overflow: hidden</code> 속성을 적용한 박스가 끼어들면 <code>sticky</code> 박스는 일반적인 흐름에 따릅니다.</li>
      				</ol>
      				<div className="line_code">
      					<p className="mt_ms">
      						이전에는 JavaScript만을 사용해 구현해야 했던 스크롤 인터렉션을 <code>position: sticky</code>를 통해 CSS만으로 구현할 수 있게 되었습니다.<br />
      						완전히 JavaScript를 배제하기는 어렵지만, CSS의 성능과 다양한 속성들이 추가됨에 따라 CSS로 대체 가능한 부분을 연구하여 활용하는 것이 좋습니다.
      					</p>
      				</div>
      			</div>
      			<div className="ol_lst indent mt_ml">
      				<h4 className="ml_mn"><i className="t_blue">@supports</i> 규칙을 이용한 지원 브라우저 분기하기</h4>
      				<p className="mt_s">
      					<code>position: sticky</code> 속성을 지원하는 브라우저에만 이 스타일을 적용하려면 <code>@supports</code> 규칙을 이용할 수 있습니다.<br />
      					단, 이방법 역시 <code>@supports</code> 규칙이 IE 11 브라우저에서 지원 안 하기에 적절하게 사용해야 합니다.
      				</p>
      				
      <CodeBlock title="@supports" language="javascript" className="uk_gist_code_box mt_ms">
      {`@supports (position: sticky) or (position: -webkit-sticky) {
      							.sticky {
      								position: -webkit-sticky; /* 사파리 브라우저 지원 */
      								position: sticky;
      								top: 4px;
      								background: red;
      							}
      						}`}
      </CodeBlock>

      			</div>
      		</article>

      		<div className="view_editor edit_code mt_xl">
      			<h3 className="ve_tit">position: sticky 예제 (List)</h3>
      			<Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="css/step02/3.6.css3-module/3.6.1.css3-position-sticky.html" className="uk_editor indent mt_m min_height_500 mb_result_height_500" mode="htmlmixed" theme="moxer" browser="default" result minHeight="500px" mbResultHeight="500px" />
      </Suspense></div>
      		<div className="view_editor edit_code mt_l">
      			<h3 className="ve_tit">position: sticky 예제 (Parallax scrolling)</h3>
      			<Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="css/step02/3.6.css3-module/3.6.1.css3-position-sticky2.html" className="uk_editor indent mt_m min_height_500 mb_result_height_500" mode="htmlmixed" theme="moxer" browser="default" result minHeight="500px" mbResultHeight="500px" />
      </Suspense></div>
      		<div className="view_editor edit_code mt_l">
      			<h3 className="ve_tit">position: sticky 예제 (Sticky slider nav)</h3>
      			<Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="css/step02/3.6.css3-module/3.6.1.css3-position-sticky3.html" className="uk_editor indent mt_m min_height_500 mb_result_height_500" mode="htmlmixed" theme="moxer" browser="default" result minHeight="500px" mbResultHeight="500px" />
      </Suspense></div>

      		<aside className="browser_support mt_l" data-tit="position: sticky">
      			<ul>
      				<li className="ie false">지원안함</li>
      				<li className="edge">12.0</li>
      				<li className="chrome">56.0</li>
      				<li className="firefox">59.0 / 32.0 -moz-</li>
      				<li className="opera">43.0</li>
      				<li className="safari">8.0 / 6.1 -webkit-</li>
      			</ul>
      		</aside>

      		<aside className="reference_box mt_xl">
      			<strong className="tit">sticky 참조</strong>
      			<ul className="link_lst">
      				<li className="reference"><a href="https://www.w3.org/TR/css-position-3/#sticky-pos" target="_blank" rel="noreferrer" className="fas" title="새창열림">W3C CSS Positioned Layout Module Level 3</a></li>
      				<li className="reference"><a href="https://www.w3.org/TR/css-conditional-3/#at-supports" target="_blank" rel="noreferrer" className="fas" title="새창열림">W3C CSS Conditional Rules Module Level 3</a></li>
      				<li className="reference"><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/position" target="_blank" rel="noreferrer" className="fas" title="새창열림">MDN CSS position</a></li>
      				<li className="reference"><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/@supports" target="_blank" rel="noreferrer" className="fas" title="새창열림">MDN @supports</a></li>
      				<li className="reference"><a href="https://css-tricks.com/position-sticky-2/" target="_blank" rel="noreferrer" className="fas" title="새창열림">CSS-TRICKS position:sticky</a></li>
      				<li className="reference"><a href="https://caniuse.com/#search=sticky" target="_blank" rel="noreferrer" className="fas" title="새창열림">Can I use CSS position:sticky</a></li>
      				<li className="reference"><a href="https://caniuse.com/#feat=css-featurequeries" target="_blank" rel="noreferrer" className="fas" title="새창열림">Can I use CSS Feature Queries</a></li>
      				<li className="reference"><a href="https://medium.com/@elad/css-position-sticky-how-it-really-works-54cd01dc2d46" target="_blank" rel="noreferrer" className="fas" title="새창열림">Example of CSS Position Sticky</a></li>
      			</ul>
      		</aside>
      	</section>

      	
      	<section className="txt_ex indent mt_xxl">
      		<h2 className="ml_mn">CSS background and border module Level 3</h2>

      		
      		<article className="indent mt_l">
      			<h3 className="ml_mn"><i className="t_blue">border-image</i> 속성</h3>
      			<p className="mt_m">
      				<code>border-image</code>는 <code>border-image-source</code>, <code>border-image-slice</code>, <code>border-image-width</code>, <code>border-image-outset</code>, <code>border-image-repeat</code>의 단축 속성입니다.<br />
      				다른 단축 속성과 마찬가지로, 생략한 속성은 초기값으로 설정됩니다.
      			</p>
      			
      <CodeBlock title="border-image" language="javascript" className="uk_gist_code_box mt_m">
      {`div {
      						/* 이미지 | 슬라이스 */
      						border-image: linear-gradient(red, blue) 27;

      						/* 이미지 | 슬라이스 | 반복 */
      						border-image: url(''/images/border.png'') 27 space;

      						/* 이미지 | 슬라이스 | 너비 */
      						border-image: linear-gradient(red, blue) 27 / 35px;

      						/* 이미지 | 슬라이스 | 너비 | 거리 | 반복 */
      						border-image: url('/images/border.png') 27 23 / 50px 30px / 1rem round space;
      					}`}
      </CodeBlock>


      			<div className="view_editor edit_code mt_l">
      				<h4 className="ve_tit">border-image 예제</h4>
      				<Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="css/step02/3.6.css3-module/3.6.2.css3-border-image.html" className="uk_editor indent mt_m min_height_470 mb_result_height_480" mode="htmlmixed" theme="moxer" browser="default" result minHeight="470px" mbResultHeight="480px" />
      </Suspense></div>

      			<aside className="browser_support mt_m" data-tit="border-image">
      				<ul>
      					<li className="ie">11+</li>
      					<li className="edge">12.0</li>
      					<li className="chrome">16.0</li>
      					<li className="firefox">15.0</li>
      					<li className="opera">11.0</li>
      					<li className="safari">6.0</li>
      				</ul>
      			</aside>
      		</article>

      		
      		<article className="indent mt_xl">
      			<h3 className="ml_mn"><i className="t_blue">border-image-outset</i> 속성</h3>
      			<p className="mt_m">
      				<code>border-image-outset</code> CSS 속성은 요소의 테두리 상자와 테두리 이미지의 거리를 설정합니다.<br />
      				<code>border-image-outset</code>으로 인해 요소 바깥에 그려지는 테두리로는 스크롤이 생기지 않으며 마우스 이벤트를 잡아낼 수도 없습니다.
      			</p>

      			
      <CodeBlock title="border-image-outset" language="javascript" className="uk_gist_code_box mt_m">
      {`div {
      						/* length 값 */
      						border-image-outset: 1rem;

      						/* number 값 */
      						border-image-outset: 1.5;

      						/* 세로방향 | 가로방향 */
      						border-image-outset: 1 1.2;

      						/* 위 | 가로방향 | 아래 */
      						border-image-outset: 30px 2 45px;

      						/* 위 | 오른쪽 | 아래 | 왼쪽 */
      						border-image-outset: 7px 12px 14px 5px;

      						/* 전역 값 */
      						border-image-outset: inherit;
      						border-image-outset: initial;
      						border-image-outset: unset;
      					}`}
      </CodeBlock>


      			<aside className="browser_support mt_m" data-tit="border-image-outset">
      				<ul>
      					<li className="ie">11+</li>
      					<li className="edge">12.0</li>
      					<li className="chrome">15.0</li>
      					<li className="firefox">15.0</li>
      					<li className="opera">15.0</li>
      					<li className="safari">6.0</li>
      				</ul>
      			</aside>
      		</article>

      		
      		<article className="indent mt_xl">
      			<h3 className="ml_mn"><i className="t_blue">border-image-repeat</i> 속성</h3>
      			<p className="mt_m">
      				<code>border-image-repeat</code> CSS 속성은 원본 이미지의 모서리 영역을 요소의 테두리 이미지 크기에 맞춰 조절할 때 사용할 방법을 지정합니다.<br />
      				<code>[ stretch | repeat | round | space ]{'{'}1,2{'}'}</code>
      			</p>
      			<div className="ol_lst indent mt_m">
      				<ol>
      					<li className="line_code font14">
      						<strong className="mb_sm">stretch</strong>
      						<p>원본 이미지의 모서리 영역을 늘리거나 줄여 간격을 채웁니다.</p>
      					</li>
      					<li className="line_code font14 mt_sm">
      						<strong className="mb_sm">repeat</strong>
      						<p>원본 이미지의 모서리 영역을 타일처럼 반복해 간격을 채웁니다. 크기가 맞지 않으면 마지막 이미지는 잘릴 수 있습니다.</p>
      					</li>
      					<li className="line_code font14 mt_sm">
      						<strong className="mb_sm">round</strong>
      						<p>원본 이미지의 모서리 영역을 타일처럼 반복해 간격을 채웁니다. 크기가 맞지 않으면 늘어나거나 줄어들 수 있습니다.</p>
      					</li>
      					<li className="line_code font14 mt_sm">
      						<strong className="mb_sm">space</strong>
      						<p>원본 이미지의 모서리 영역을 타일처럼 반복해 간격을 채웁니다. 크기가 맞지 않으면 각 타일에 균등하게 공백을 배치합니다.</p>
      					</li>
      				</ol>
      			</div>

      			
      <CodeBlock title="border-image-repeat" language="javascript" className="uk_gist_code_box mt_m">
      {`div {
      						/* 키워드 값 */
      						border-image-repeat: stretch;
      						border-image-repeat: repeat;
      						border-image-repeat: round;
      						border-image-repeat: space;

      						/* 세로방향 | 가로방향 */
      						border-image-repeat: round stretch;

      						/* 전역 값 */
      						border-image-repeat: inherit;
      						border-image-repeat: initial;
      						border-image-repeat: unset;
      					}`}
      </CodeBlock>


      			<aside className="browser_support mt_m" data-tit="border-image-repeat">
      				<ul>
      					<li className="ie">11+</li>
      					<li className="edge">12.0</li>
      					<li className="chrome">15.0</li>
      					<li className="firefox">15.0</li>
      					<li className="opera">15.0</li>
      					<li className="safari">6.0</li>
      				</ul>
      			</aside>
      		</article>

      		
      		<article className="indent mt_xl">
      			<h3 className="ml_mn"><i className="t_blue">border-image-slice</i> 속성</h3>
      			<p className="mt_m">
      				<code>border-image-slice</code> CSS 속성은 <code>border-image-source</code>로 설정한 이미지를 여러 개의 영역으로 나눕니다.<br />
      				이렇게 나눠진 영역이 요소의 테두리 이미지를 이룹니다.
      			</p>
      			<figure className="img_figure mt_m">
      				<img src={`${IMG.CSS}/cssMiddleclass/uxkm_border-image-slice.svg`} alt="border-image-slice" />
      				<figcaption>[border-image-slice]</figcaption>
      			</figure>
      			<div className="ol_lst indent mt_m">
      				<ol>
      					<li>1-4번 구역은 꼭지점 영역입니다. 코너 영역은 최종 테두리 이미지에서도 코너를 이루며 한 번씩만 그려집니다.</li>
      					<li>5-8번 구역은 모서리 영역입니다. 모서리 영역은 최종 테두리 이미지의 크기에 맞도록 반복하여 그리거나 크기를 조정하는 등 변형됩니다.</li>
      					<li>9번 구역은 중앙 영역입니다. 기본값으로는 쓰이지 않지만, fill 키워드를 지정한 경우 배경 이미지처럼 사용합니다.</li>
      				</ol>
      			</div>

      			<p className="mt_m">
      				<code>border-image-repeat, border-image-width, border-image-outset</code> 속성이 최종 테두리 이미지에서 각 영역의 사용 방법을 지정합니다.
      			</p>
      			
      <CodeBlock title="border-image-slice" language="javascript" className="uk_gist_code_box mt_m">
      {`div {
      						/* 모든 방향 */
      						border-image-slice: 30%;

      						/* 세로방향 | 가로방향 */
      						border-image-slice: 10% 30%;

      						/* 위 | 가로방향 | 아래 */
      						border-image-slice: 30 30% 45;

      						/* 위 | 오른쪽 | 아래 | 왼쪽 */
      						border-image-slice: 7 12 14 5;

      						/* \`fill\` 키워드 */
      						border-image-slice: 10% fill 7 12;

      						/* 전역 값 */
      						border-image-slice: inherit;
      						border-image-slice: initial;
      						border-image-slice: unset;
      					}`}
      </CodeBlock>


      			<aside className="browser_support mt_m" data-tit="border-image-slice">
      				<ul>
      					<li className="ie">11+</li>
      					<li className="edge">12.0</li>
      					<li className="chrome">15.0</li>
      					<li className="firefox">15.0</li>
      					<li className="opera">15.0</li>
      					<li className="safari">6.0</li>
      				</ul>
      			</aside>
      		</article>

      		
      		<article className="indent mt_xl">
      			<h3 className="ml_mn"><i className="t_blue">border-image-source</i> 속성</h3>
      			<p className="mt_m">
      				<code>border-image-source</code> CSS 속성은 요소의 테두리 이미지로 사용할 원본 이미지를 지정합니다.
      			</p>
      			
      <CodeBlock title="border-image-source" language="javascript" className="uk_gist_code_box mt_m">
      {`div {
      						/* 키워드 값 */
      						border-image-source: none;

      						/* image 값 */
      						border-image-source: url('image.jpg');
      						border-image-source: linear-gradient(to top, red, yellow);

      						/* 전역 값 */
      						border-image-source: inherit;
      						border-image-source: initial;
      						border-image-source: unset;
      					}`}
      </CodeBlock>


      			<aside className="browser_support mt_m" data-tit="border-image-source">
      				<ul>
      					<li className="ie">11+</li>
      					<li className="edge">12.0</li>
      					<li className="chrome">15.0</li>
      					<li className="firefox">15.0</li>
      					<li className="opera">15.0</li>
      					<li className="safari">6.0</li>
      				</ul>
      			</aside>
      		</article>

      		
      		<article className="indent mt_xl">
      			<h3 className="ml_mn"><i className="t_blue">border-image-width</i> 속성</h3>
      			<p className="mt_m">
      				<code>border-image-width</code> CSS 속성은 요소 테두리 이미지의 너비를 설정합니다.<br />
      				속성의 값이 <code>border-width</code>보다 크다면 테두리 이미지는 안쪽 여백(과 콘텐츠) 영역을 침범하여 그려집니다.
      			</p>
      			
      <CodeBlock title="border-image-width" language="javascript" className="uk_gist_code_box mt_m">
      {`div {
      						/* 키워드 값 */
      						border-image-width: auto;

      						/* 값 */
      						border-image-width: 1rem;

      						/* 값 */
      						border-image-width: 25%;

      						/* 값 */
      						border-image-width: 3;

      						/* 세로방향 | 가로방향 */
      						border-image-width: 2em 3em;

      						/* 위 | 가로방향 | 아래 */
      						border-image-width: 5% 15% 10%;

      						/* 위 | 오른쪽 | 아래 | 왼쪽 */
      						border-image-width: 5% 2em 10% auto;

      						/* 전역 값 */
      						border-image-width: inherit;
      						border-image-width: initial;
      						border-image-width: unset;
      					}`}
      </CodeBlock>


      			<aside className="browser_support mt_m" data-tit="border-image-width">
      				<ul>
      					<li className="ie">11+</li>
      					<li className="edge">12.0</li>
      					<li className="chrome">15.0</li>
      					<li className="firefox">13.0</li>
      					<li className="opera">15.0</li>
      					<li className="safari">6.0</li>
      				</ul>
      			</aside>
      		</article>
      	</section>

      	
      	<section className="txt_ex indent mt_xxl">
      		<h2 className="ml_mn">CSS overflow module Level 3</h2>

      		
      		<article className="indent mt_l">
      			<h3 className="ml_mn"><i className="t_blue">-webkit-line-clamp</i> 속성 <i className="fab fa-css3-alt"></i></h3>
      			<p className="mt_m">
      				<strong className="t_black">CSS Module Level 3</strong><br />
      				여러 줄의 말줄임에 사용합니다. <mark>webkit 계열 브라우저에서만 작동</mark>합니다.
      			</p>

      			
      <CodeBlock title="-webkit-line-clamp" language="javascript" className="uk_gist_code_box mt_m">
      {`p {
      						/* Keyword value */
      						-webkit-line-clamp: none;

      						/* <integer> values */
      						-webkit-line-clamp: 3;
      						-webkit-line-clamp: 10;

      						/* Global values */
      						-webkit-line-clamp: inherit;
      						-webkit-line-clamp: initial;
      						-webkit-line-clamp: unset;
      					}`}
      </CodeBlock>


      			<div className="view_editor edit_code mt_l">
      				<h4 className="ve_tit">-webkit-line-clamp 예제</h4>
      				<Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="css/step02/3.6.css3-module/3.6.3.css3-webkit-line-clamp.html" className="uk_editor indent mt_m min_height_450 mb_result_height_300" mode="htmlmixed" theme="moxer" browser="default" result minHeight="450px" mbResultHeight="300px" />
      </Suspense></div>

      			<aside className="browser_support mt_m" data-tit="-webkit-line-clamp">
      				<ul>
      					<li className="ie false">지원안함</li>
      					<li className="edge">17.0</li>
      					<li className="chrome">6.0</li>
      					<li className="firefox">68.0</li>
      					<li className="opera">15.0</li>
      					<li className="safari">5.0</li>
      				</ul>
      			</aside>
      		</article>
      	</section>

      	<figure className="img_figure indent mt_l">
      		<img src={`${IMG.CSS}/03_css_06_1.png`} alt="CSS3 Module" />
      		<figcaption className="reference">
      			CSS3 Module
      		</figcaption>
      	</figure>

      	<aside className="reference_box mt_xxl">
      		<strong className="tit">CSS3 모듈 참조</strong>
      		<ul className="link_lst">
      			<li className="reference"><a href="https://www.w3.org/TR/css-values-3/" target="_blank" rel="noreferrer" className="fas" title="새창열림">https://www.w3.org/TR/css-values-3/</a></li>
      			<li className="reference"><a href="https://www.w3.org/TR/css-text-decor-3/" target="_blank" rel="noreferrer" className="fas" title="새창열림">https://www.w3.org/TR/css-text-decor-3/</a></li>
      			<li className="reference"><a href="https://www.w3.org/TR/css-fonts-3/" target="_blank" rel="noreferrer" className="fas" title="새창열림">https://www.w3.org/TR/css-fonts-3/</a></li>
      			<li className="reference"><a href="https://www.w3.org/TR/css-text-3/" target="_blank" rel="noreferrer" className="fas" title="새창열림">https://www.w3.org/TR/css-text-3/</a></li>
      			<li className="reference"><a href="https://www.w3.org/TR/css-images-3/" target="_blank" rel="noreferrer" className="fas" title="새창열림">https://www.w3.org/TR/css-images-3/</a></li>
      			<li className="reference"><a href="https://www.w3.org/TR/css-lists-3/" target="_blank" rel="noreferrer" className="fas" title="새창열림">https://www.w3.org/TR/css-lists-3/</a></li>
      			<li className="reference"><a href="https://www.w3.org/TR/css-tables-3/" target="_blank" rel="noreferrer" className="fas" title="새창열림">https://www.w3.org/TR/css-tables-3/</a></li>
      			<li className="reference"><a href="https://www.w3.org/TR/css-syntax-3/" target="_blank" rel="noreferrer" className="fas" title="새창열림">https://www.w3.org/TR/css-syntax-3/</a></li>
      			<li className="reference"><a href="https://www.w3.org/TR/css-display-3/" target="_blank" rel="noreferrer" className="fas" title="새창열림">https://www.w3.org/TR/css-display-3/</a></li>
      			<li className="reference"><a href="https://www.w3.org/TR/css-sizing-3/" target="_blank" rel="noreferrer" className="fas" title="새창열림">https://www.w3.org/TR/css-sizing-3/</a></li>
      			<li className="reference"><a href="https://www.w3.org/TR/css-break-3/" target="_blank" rel="noreferrer" className="fas" title="새창열림">https://www.w3.org/TR/css-break-3/</a></li>
      			<li className="reference"><a href="https://www.w3.org/TR/css-cascade-3/" target="_blank" rel="noreferrer" className="fas" title="새창열림">https://www.w3.org/TR/css-cascade-3/</a></li>
      			<li className="reference"><a href="https://www.w3.org/TR/css-overflow-3/" target="_blank" rel="noreferrer" className="fas" title="새창열림">https://www.w3.org/TR/css-overflow-3/</a></li>
      			<li className="reference"><a href="https://www.w3.org/TR/css-ui-3/" target="_blank" rel="noreferrer" className="fas" title="새창열림">https://www.w3.org/TR/css-ui-3/</a></li>
      			<li className="reference"><a href="https://www.w3.org/TR/css-color-3/" target="_blank" rel="noreferrer" className="fas" title="새창열림">https://www.w3.org/TR/css-color-3/</a></li>
      			<li className="reference"><a href="https://www.w3.org/TR/css-counter-styles-3/" target="_blank" rel="noreferrer" className="fas" title="새창열림">https://www.w3.org/TR/css-counter-styles-3/</a></li>
      			<li className="reference"><a href="https://www.w3.org/TR/css-content-3/" target="_blank" rel="noreferrer" className="fas" title="새창열림">https://www.w3.org/TR/css-content-3/</a></li>
      			<li className="reference"><a href="https://www.w3.org/TR/css-backgrounds-3/" target="_blank" rel="noreferrer" className="fas" title="새창열림">https://www.w3.org/TR/css-backgrounds-3/</a></li>
      			<li className="reference"><a href="https://www.w3.org/TR/css-position-3/" target="_blank" rel="noreferrer" className="fas" title="새창열림">https://www.w3.org/TR/css-position-3/</a></li>
      			<li className="reference"><a href="https://www.w3.org/TR/" target="_blank" rel="noreferrer" className="fas" title="새창열림">https://www.w3.org/TR/</a></li>
      			<li className="reference"><a href="https://www.w3.org/TR/css-values-3/" target="_blank" rel="noreferrer" className="fas" title="새창열림">CSS Values and Units Module Level 3</a></li>
      			<li className="reference"><a href="https://developer.mozilla.org/en-US/docs/Archive/CSS3" target="_blank" rel="noreferrer" className="fas" title="새창열림">MDN CSS modules</a></li>
      		</ul>
      	</aside>
    </>
  )
}

export default CssModule3Part1Page
