import { usePageMeta } from '@/components/common/PageMeta'
import PublishingPartTabs from '@/components/docs/PublishingPartTabs'
import { IMG } from '@/config/path'
import { Suspense, lazy } from 'react'
const UkEditorTarget = lazy(() => import('@/components/code/UkEditorTarget'))
function EditorFallback() { return <div className="uk_editor min_height_300" aria-hidden /> }
import CodeBlock from '@/components/code/CodeBlock'

const PAGE_LAYOUT = {
  mainClass: "css_media_part1",
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
  title: "@media part-1",
  description: "@media는 출력 장치의 특징을 참조하여 CSS 코드를 분기 처리하는 규칙으로, 출력 장치의 유형, 크기, 해상도 등을 조건으로 사용하여 하나의 HTML 소스가 여러 가지 뷰를 갖도록 구현할 수 있으며, 이를 미디어 쿼리(Media Query)라고 합니다. 이 페이지에서는 미디어 유형(Media types), 미디어 기능(Media features), 미디어 논리 연산자(Logical operators), 미디어 쿼리(Media Query) 문법을 함께 소개합니다.",
  keyword: "style, css, Cascading Style Sheets, @media, 미디어 유형, 미디어 기능, 미디어 쿼리, 미디어 연산자",
}

function CssMediaPart1Page() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  })

  return (
    <>
      <blockquote className="uk_note common_note mt_xxl" role="note">
      	<strong className="sound_only">요약 설명</strong>
      	<p>
      		<code>@media</code>는 출력 장치의 특징을 참조하여 CSS 코드를 분기 처리하는 규칙입니다.<br />
      		출력 장치의 유형, 크기, 해상도 등을 조건으로 하여 하나의 HTML 소스가 여러 가지 뷰를 갖도록 구현할 수 있으며, 이를 <b>미디어 쿼리(Media Query)</b>라고 합니다.
      	</p>
      	<p className="mt_ms">
      		미디어 쿼리는 <strong className="t_black">CSS2</strong>부터 사용되었으며, <strong className="t_black">CSS3</strong>에서 본격적으로 쓰이기 시작했습니다.<br />
      		<strong className="t_black">CSS2</strong>에서는 매체 유형(media type)만 지원했지만, <strong className="t_black">CSS3</strong>에서는 매체 유형과 <code>width</code>, <code>height</code>, <code>color</code> 등의 표현식으로 구성된 미디어 쿼리를 사용할 수 있습니다.<br />
      		반응형 웹의 핵심 기법으로, 뷰포트 해상도에 따라 CSS 코드를 분기하여 반응형 레이아웃을 구현하거나 문서를 인쇄할 때 사용됩니다.
      	</p>
      </blockquote>
      <PublishingPartTabs sectionType="css" />

      <blockquote className="uk_note mt_xxl" role="note">
      		<strong className="sound_only">요약 설명</strong>
      		<p>
      			<b className="t_blue">@media part-1</b>에서는 <code>@media</code>의 속성 중<br />
      		</p>
      		<ul className="dot_lst indent_small">
      			<li className="before_note"><b>미디어 유형(Media types)</b></li>
      			<li className="before_note"><b>미디어 기능(Media features)</b></li>
      			<li className="before_note"><b>미디어 논리 연산자(Logical operators)</b></li>
      			<li className="before_note"><b>미디어 쿼리(Media Query) 문법</b>에 대한 내용을 다루고 있습니다.</li>
      		</ul>
      		
      	</blockquote>

      	
      	<section className="txt_ex indent mt_xxl" data-conlist="false">
      		<h2 className="ml_mn" data-conlist="false">미디어 유형(Media types)</h2>
      		<p className="mt_l">
      			<strong className="t_black">CSS3</strong>의 매체 유형은 이전 <strong className="t_black">CSS2</strong>에서 정의된 것을 그대로 사용하고 있습니다.
      		</p>
      		<p className="mt_s">
      			<strong className="t_black">CSS2.1</strong>과 <strong className="t_black">Media Queries 3</strong> 모듈에서 여러 가지 추가 유형(<code>tty</code>, <code>tv</code>, <code>projection</code>, <code>handheld</code>, <code>braille</code>, <code>embossed</code>, <code>aural</code>)을 정의했으나 <strong className="t_black">Media Queries 4</strong>에서 제거되었으므로 사용해서는 안 됩니다.<br />
      			<code>aural</code>은 유사한 유형인 <code>speech</code>로 대체되었습니다.
      		</p>
      		<p className="mt_s">
      			미디어 유형은 선택사항입니다. 미디어 유형을 표시하지 않으면 미디어 쿼리는 기본값으로 모든 미디어 유형에 대한 것으로 해석됩니다.
      		</p>
      		
      <CodeBlock title="Media types" language="javascript" className="uk_gist_code_box mt_m">
      {`@media [all | print | screen | speech] and (min-width: 700px) { … }`}
      </CodeBlock>


      		
      		<article className="indent_max mt_xl">
      			<h3 className="ml_mn t_blue">all</h3>
      			<p className="mt_ms">
      				기본값으로 모든 미디어 장치(<code>print</code> | <code>screen</code> | <code>speech</code>)에 사용됩니다.<br />
      				미디어 타입이 생략되어 있어도 미디어 타입의 기본값은 <code>all</code>입니다.
      			</p>
      		</article>

      		
      		<article className="indent_max mt_xl">
      			<h3 className="ml_mn t_blue">print</h3>
      			<p className="mt_ms">프린터에 사용됩니다.</p>
      		</article>

      		
      		<article className="indent_max mt_xl">
      			<h3 className="ml_mn t_blue">screen</h3>
      			<p className="mt_ms">컴퓨터나 태블릿, 스마트폰 등 스크린이 있는 매체에 사용됩니다.</p>
      		</article>

      		
      		<article className="indent_max mt_xl">
      			<h3 className="ml_mn t_blue">speech</h3>
      			<p className="mt_ms">웹 페이지를 읽어주는 화면 낭독기(스크린 리더)에 사용됩니다.</p>
      		</article>

      		
      <CodeBlock title="Media types" language="javascript" className="uk_gist_code_box mt_xl">
      {`/* 모든 유형의 장치이며 최소너비 700px 일 때 스타일을 적용 */
      				@media (min-width: 700px) {background-color: yellow;}
      				@media all and (min-width: 700px) { … }

      				/* 인쇄할 페이지 설정 */
      				@media print {
      					body {
      						font-size: 12pt;
      					}
      				}`}
      </CodeBlock>

      	</section>

      	
      	<section className="txt_ex indent mt_xxl">
      		<h2 className="ml_mn">미디어 기능(Media features)</h2>
      		<p className="mt_l">
      			미디어 유형을 지정한 뒤에 규칙을 적용할 미디어 기능을 선정할 수 있습니다.<br />
      			미디어 기능은 사용자 에이전트, 출력 장치 또는 환경의 특정 특성을 설명합니다.<br />
      			미디어 기능 표현식은 해당 존재 또는 값을 테스트하며 전적으로 선택 사항입니다. 각 미디어 기능 표현식은 괄호로 묶어야 합니다.<br />
      			<code>orientation</code> 기능을 제외한 모든 기능 앞에는 <code>min</code> 또는 <code>max</code> 접두사를 사용할 수 있습니다.
      		</p>
      		<p className="mt_s">
      			<code>@media</code> 기능들을 적절히 활용하면 반응형 웹 사이트를 제작하는 데 유용합니다.
      			
      		</p>

      		
      		<article className="indent_max mt_xl">
      			<h3 className="ml_mn t_blue">뷰포트 크기에 따라 미디어 쿼리 적용</h3>
      			<p className="mt_m">
      				미디어 쿼리를 사용하면 반응형 환경을 만들 수 있습니다.<br />
      				이 환경에서는 작은 화면과 큰 화면 및 그 사이의 모든 화면 크기에 특정 스타일이 적용됩니다.<br />
      				미디어 쿼리 구문에서는 기기 특성에 따라 적용될 수 있는 규칙 생성을 허용합니다.
      			</p>
      			
      <CodeBlock title="Media features [query]" language="javascript" className="uk_gist_code_box mt_m">
      {`@media (query) {
      						/* CSS Rules used when query matches */
      					}`}
      </CodeBlock>

      			<p className="mt_m">
      				쿼리할 수 있는 항목에는 여러 가지가 있지만, 반응형 웹 디자인에 가장 자주 사용되는 항목은 <code>min-width</code>, <code>max-width</code>, <code>min-height</code>, <code>max-height</code>입니다.
      			</p>
      			<ol className="ol_lst indent mt_ms">
      				<li><code>min-width</code> : 쿼리에 정의된 값보다 큰 브라우저 너비에 적용되는 규칙입니다.</li>
      				<li><code>max-width</code> : 쿼리에 정의된 값보다 작은 브라우저 너비에 적용되는 규칙입니다.</li>
      				<li><code>min-height</code> : 쿼리에 정의된 값보다 큰 브라우저 높이에 적용되는 규칙입니다.</li>
      				<li><code>max-height</code> : 쿼리에 정의된 값보다 작은 브라우저 높이에 적용되는 규칙입니다.</li>
      				<li><code>orientation: portrait</code> : 높이가 너비보다 크거나 같은 브라우저에 적용되는 규칙입니다.</li>
      				<li><code>orientation: landscape</code> : 너비가 높이보다 큰 브라우저에 적용되는 규칙입니다.</li>
      			</ol>
      		</article>

      		
      		<article className="indent_max mt_xl">
      			<h3 className="ml_mn t_blue">width</h3>
      			<p className="mt_m">
      				뷰포트의 너비와 높이를 지정합니다.<br />
      				뷰포트의 크기는 HTML <code>body</code> 콘텐츠를 표시하는 영역으로 실제 스크린의 크기와는 다릅니다.<br />
      				반응형 웹 구현 시 가장 일반적으로 사용하는 조건입니다.
      			</p>
      			<ol className="ol_lst indent mt_m">
      				<li><span className="t_black">Value</span> : <code>&lt;length&gt;</code></li>
      				<li><span className="t_black">Applies to</span> : visual and tactile media types</li>
      				<li><span className="t_black">Accepts min/max prefixes</span> : yes</li>
      			</ol>
      			
      <CodeBlock title="Media features [width, height]" language="javascript" className="uk_gist_code_box mt_m">
      {`<style>
      					/* 모든 장치에서 최소 너비 20em 이상이면 적용 */
      					@media (min-width: 20em) { … }

      					/* 뷰포트 너비가 768px 이상 '그리고' 1024px 이하이면 실행 */
      					@media all and (min-width:768px) and (max-width:1024px) { … }

      					/* 뷰포트 너비가 768px 이거나 '또는' 1024px 이면 실행 */
      					@media all and (width:768px), (width:1024px) { … }

      					/* 뷰포트 너비가 768px 이상 '그리고' 1024px 이하가 '아니면' 실행 */
      					@media not all and (min-width:768px) and (max-width:1024px) { … }

      					/* 뷰포트 너비가 768px 이하 '또는' 뷰포트의 높이가 800px 이하이면 실행 */
      					@media all and (max-width:768px), (max-height:800px) { … }
      					</style>`}
      </CodeBlock>

      		</article>

      		
      		<article className="indent_max mt_xl">
      			<h3 className="ml_mn t_blue">device-width, device-height</h3>
      			<p className="mt_m">
      				스크린의 너비와 높이를 지정합니다.<br />
      				스크린은 출력 장치가 픽셀을 표시할 수 있는 모든 영역으로 일반적으로 HTML <code>body</code> 콘텐츠를 표시하는 뷰포트보다 큽니다.
      			</p>
      			<ol className="ol_lst indent mt_m">
      				<li><span className="t_black">Value</span> : <code>&lt;length&gt;</code></li>
      				<li><span className="t_black">Applies to</span> : visual and tactile media types</li>
      				<li><span className="t_black">Accepts min/max prefixes</span> : yes</li>
      			</ol>
      			
      <CodeBlock title="Media features [device-width, device-height]" language="css" className="uk_gist_code_box mt_m">
      {`<!-- 장치 너비가 450px보다 작을 때 적용 -->
      					<link rel="stylesheet" media="screen and (max-device-width: 450px)" href="rwd.css">

      					<style>
      						/* 스크린 너비가 320px '그리고' 높이가 480px 이면 실행 */
      						@media all and (device-width:320px) and (device-height:480px) { … }

      						/* 스크린 너비가 최소 320px 이상 '그리고' 높이가 최소 480px 이상이면 실행 */
      						@media all and (min-device-width:320px) and (min-device-height:480px) { … }
      					</style>`}
      </CodeBlock>

      		</article>

      		
      		<article className="indent_max mt_xl">
      			<h3 className="ml_mn t_blue">aspect-ratio</h3>
      			<p className="mt_m">
      				화면 영역의 가로 세로 비율을 지정합니다.<br />
      				슬래시(<code>/</code>)를 사용하여 뷰포트의 너비와 높이에 대한 비율(양의 정수)을 [너비<code>/</code>높이] 순으로 작성해야 합니다.<br />
      				<code>min</code>/<code>max</code> 접두사를 사용하면 너비 값의 최소/최대 비율을 정할 수 있습니다.
      			</p>
      			<ol className="ol_lst indent mt_m">
      				<li><span className="t_black">Value</span> : <code>&lt;ratio&gt;</code></li>
      				<li><span className="t_black">Applies to</span> : bitmat media types</li>
      				<li><span className="t_black">Accepts min/max prefixes</span> : yes</li>
      			</ol>
      			
      <CodeBlock title="Media features [aspect-ratio]" language="javascript" className="uk_gist_code_box mt_m">
      {`/* 가로 화면 비가 1:1 이상일 때 적용. 즉, 화면이 직사각이거나 세로일 때만 적용 */
      					@media screen and (min-aspect-ratio: 1/1) { … }

      					/* 뷰포트 너비가 5, 높이가 4 비율이면 실행 */
      					@media all and (aspect-ratio:5/4) { … }

      					/* 뷰포트 너비가 5/4 비율 이상이면 실행 */
      					@media all and (min-aspect-ratio:5/4) { … }

      					/* 뷰포트 너비가 5/4 비율 이하면 실행 */
      					@media all and (max-aspect-ratio:5/4) { … }`}
      </CodeBlock>

      		</article>

      		
      		<article className="indent_max mt_xl">
      			<h3 className="ml_mn t_blue">device-aspect-ratio</h3>
      			<p className="mt_m">
      				스크린의 너비와 높이에 대한 비율을 지정합니다. '너비/높이' 순으로 조건을 작성합니다.<br />
      				<code>min</code>/<code>max</code> 접두사를 사용하면 너비 값의 최소/최대 비율을 정할 수 있습니다.
      			</p>
      			<ol className="ol_lst indent mt_m">
      				<li><span className="t_black">Value</span> : <code>&lt;ratio&gt;</code></li>
      				<li><span className="t_black">Applies to</span> : bitmat media types</li>
      				<li><span className="t_black">Accepts min/max prefixes</span> : yes</li>
      			</ol>
      			
      <CodeBlock title="Media features [device-aspect-ratio]" language="javascript" className="uk_gist_code_box mt_m">
      {`/* 장치 가로 세로 비가 16:9일 때 적용 */
      					@media screen and (device-aspect-ratio: 16/9) { … }

      					/* 스크린 너비가 5, 높이가 4 비율이면 실행 */
      					@media all and (device-aspect-ratio:5/4) { … }

      					/* 스크린 너비가 5/4 비율 이상이면 실행 */
      					@media all and (min-device-aspect-ratio:5/4) { … }

      					/* 스크린 너비가 5/4 비율 이하면 실행 */
      					@media all and (max-device-aspect-ratio:5/4) { … }`}
      </CodeBlock>

      		</article>

      		
      		<article className="indent_max mt_xl">
      			<h3 className="ml_mn t_blue">orientation</h3>
      			<p className="mt_m">
      				뷰포트의 너비와 높이 비율을 이용하여 가로 모드인지 세로 모드인지를 판단합니다.
      			</p>
      			<ol className="ol_lst indent mt_m">
      				<li><span className="t_black">Value</span> : <code>portrait</code> | <code>landscape</code></li>
      				<li><span className="t_black">Applies to</span> : bitmap media types</li>
      				<li><span className="t_black">Accepts min/max prefixes</span> : no</li>
      			</ol>
      			
      <CodeBlock title="Media features [orientation]" language="javascript" className="uk_gist_code_box mt_m">
      {`/* 세로 모드. 뷰포트의 높이가 너비에 비해 상대적으로 크면 실행 */
      					@media all and (orientation: portrait) { … }

      					/* 가로 모드. 뷰포트의 너비가 높이에 비해 상대적으로 크면 실행 */
      					@media all and (orientation: landscape) { … }`}
      </CodeBlock>

      		</article>

      		
      		<article className="indent_max mt_xl">
      			<h3 className="ml_mn t_blue">color</h3>
      			<p className="mt_m">
      				매체 장치의 색상 구성요소당 비트 수를 지정합니다. 장치가 색깔 장치가 아니면 값은 0입니다.<br />
      				출력 장치가 컬러가 아닌 경우 0의 값에 대응합니다.
      			</p>
      			<ol className="ol_lst indent mt_m">
      				<li><span className="t_black">Value</span> : <code>&lt;integer&gt;</code></li>
      				<li><span className="t_black">Applies to</span> : visual media types</li>
      				<li><span className="t_black">Accepts min/max prefixes</span> : yes</li>
      			</ol>
      			
      <CodeBlock title="Media features [color]" language="javascript" className="uk_gist_code_box mt_m">
      {`/* 출력 장치가 컬러를 지원하면 실행 */
      					@media all and (color) { … }

      					/* 출력 장치가 컬러가 아니면 실행 */
      					@media all and (color:0) { … }

      					/* 출력 장치가 4비트 이하 색상이면 실행 */
      					@media all and (min-color: 4) { … }

      					/* 출력 장치가 8비트 색상이면 실행 */
      					@media all and (color:8) { … }

      					/* 출력 장치가 8비트 이상 색상이면 실행 */
      					@media all and (min-color:8) { … }

      					/* 출력 장치가 8비트 이하 색상이면 실행 */
      					@media all and (max-color:8) { … }`}
      </CodeBlock>

      		</article>

      		
      		<article className="indent_max mt_xl">
      			<h3 className="ml_mn t_blue">color-index</h3>
      			<p className="mt_m">
      				출력 장치가 색상 색인 테이블을 사용하는 경우 표현할 수 있는 색의 수를 지정합니다.<br />
      				출력 장치가 색상 색인 테이블을 사용하지 않으면 0의 값에 대응합니다. 현재 제대로 지원하는 브라우저가 없습니다.
      			</p>
      			<ol className="ol_lst indent mt_m">
      				<li><span className="t_black">Value</span> : <code>&lt;integer&gt;</code></li>
      				<li><span className="t_black">Applies to</span> : visual media types</li>
      				<li><span className="t_black">Accepts min/max prefixes</span> : yes</li>
      			</ol>
      			
      <CodeBlock title="Media features [color-index]" language="css" className="uk_gist_code_box mt_m">
      {`<!-- 최소 256 색상을 지닌 모든 장치에 적용 -->
      					<link rel="stylesheet" media="all and (min-color-index: 256)" href="rwd.css">

      					<style>
      						/* 출력 장치가 색상 색인 테이블을 사용하면 실행 */
      						@media all and (color-index) { … }

      						/* 출력 장치가 색상 색인 테이블을 사용하지 않으면 실행 */
      						@media all and (color-index:0) { … }

      						/* 출력 장치가 256 색을 지원하면 실행 */
      						@media all and (color-index:256) { … }

      						/* 출력 장치가 256 이상 색을 지원하면 실행 */
      						@media all and (min-color-index:256) { … }

      						/* 출력 장치가 256 이하 색을 지원하면 실행 */
      						@media all and (max-color-index:256) { … }
      					</style>`}
      </CodeBlock>

      		</article>

      		
      		<article className="indent_max mt_xl">
      			<h3 className="ml_mn t_blue">monochrome</h3>
      			<p className="mt_m">
      				출력 장치가 흑백인 경우 픽셀당 비트 수를 지정합니다.<br />
      				출력 장치가 흑백이 아니라면 0의 값에 대응합니다.
      			</p>
      			<ol className="ol_lst indent mt_m">
      				<li><span className="t_black">Value</span> : <code>&lt;integer&gt;</code></li>
      				<li><span className="t_black">Applies to</span> : visual media types</li>
      				<li><span className="t_black">Accepts min/max prefixes</span> : yes</li>
      			</ol>
      			
      <CodeBlock title="Media features [monochrome]" language="javascript" className="uk_gist_code_box mt_m">
      {`/* 출력 장치가 흑백이면 실행 */
      					@media all and (monochrome) { … }

      					/* 출력 장치가 흑백이 아니면 실행 */
      					@media all and (monochrome:0) { … }

      					/* 출력 장치가 흑백이고 2비트 이상이면 실행 */
      					@media all and (min-monochrome:2) { … }

      					/* 출력 장치가 흑백이고 2비트 이하이면 실행 */
      					@media all and (max-monochrome:2) { … }`}
      </CodeBlock>

      		</article>

      		
      		<article className="indent_max mt_xl">
      			<h3 className="ml_mn t_blue">resolution</h3>
      			<p className="mt_m">
      				출력 장치의 해상력에 대응합니다.<br />
      				<code>min</code>/<code>max</code> 접두사는 사각형 아닌 픽셀(인쇄 장치)에도 대응하지만 접두사 없는 <code>resolution</code> 조건은 사각형 픽셀에만 대응합니다.<br />
      				조건의 값으로 <code>dpi</code>(dots per inch)와 <code>dpcm</code>(dots per centimeter) 단위를 사용할 수 있습니다.
      			</p>
      			<ol className="ol_lst indent mt_m">
      				<li><span className="t_black">Value</span> : <code>&lt;resolution&gt;</code></li>
      				<li><span className="t_black">Applies to</span> : bitmap media types</li>
      				<li><span className="t_black">Accepts min/max prefixes</span> : yes</li>
      			</ol>
      			
      <CodeBlock title="Media features [resolution]" language="javascript" className="uk_gist_code_box mt_m">
      {`/* 최소 300dpi 이상 해상도를 지닌 장치에 적용 */
      					@media screen and (min-resolution: 300dpi) { … }

      					/* 1인치당 96개의 사각형 화소를 제공하면 실행 */
      					@media all and (resolution:96dpi) { … }

      					/* 1인치당 96개 이상의 화소를 제공하면 실행 */
      					@media all and (min-resolution:96dpi) { … }

      					/* 1인치당 96개 이하의 화소를 제공하면 실행 */
      					@media all and (max-resolution:96dpi) { … }`}
      </CodeBlock>

      		</article>
      	</section>

      	
      	<section className="txt_ex indent mt_xxl">
      		<h2 className="ml_mn">미디어 논리 연산자(Logical operators)</h2>
      		<p className="mt_l">
      			<code>not</code>, <code>and</code>, <code>only</code>와 같은 논리 연산자를 사용해 조합하여 복잡한 쿼리를 만들 수 있습니다.<br />
      			여러 미디어 쿼리를 쉼표(<code>,</code>)로 구분해서 하나의 규칙으로 만들 수도 있습니다.
      		</p>

      		
      		<article className="indent_max mt_xl">
      			<h3 className="ml_mn t_blue">and 연산자 - 논리곱 연산자</h3>
      			<p className="mt_m">
      				여러 미디어 특징들을 하나로 결합합니다.<br />
      				새로운 미디어 특징들을 추가할 때마다 <code>and</code> 연산자를 사용합니다.
      			</p>
      			
      <CodeBlock title="@media [Logical operators]" language="javascript" className="uk_gist_code_box mt_m">
      {`@media (min-width: 700px) and (orientation: portrait) { … }`}
      </CodeBlock>

      			<p className="mt_m">
      				위 한줄 예제는 <i className="t_blue">[모든 유형의 장치, 최소 너비 700px 이상, 세로 모드]</i>의 조건에 적용되는 예제입니다.
      			</p>
      			<div className="view_editor edit_code mt_m">
      				<Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="css/step02/3.9.media/3.9.3.media-and.html" className="uk_editor min_height_450" mode="htmlmixed" theme="moxer" browser="default" result minHeight="450px" />
      </Suspense></div>
      		</article>

      		
      		<article className="indent_max mt_xl">
      			<h3 className="ml_mn t_blue">콤마(,) 또는 or 연산자 - 논리합 연산자</h3>
      			<p className="mt_m">
      				쉼표는 각각 개별 미디어 쿼리로 인식합니다.<br />
      				쉼표는 여러 미디어 쿼리를 단일 규칙으로 결합하는 데 사용되며, 쉼표로 구분된 목록의 각 쿼리는 다른 쿼리와 별도로 처리됩니다.<br />
      				따라서 목록의 쿼리 중 하나라도 <code>true</code>이면 전체 미디어 문이 <code>true</code>를 반환합니다. 즉, 목록은 논리 OR 연산자처럼 동작합니다.
      			</p>
      			
      <CodeBlock title="@media [OR operator]" language="javascript" className="uk_gist_code_box mt_m">
      {`@media (min-width: 700px), print and (orientation: landscape) { … }`}
      </CodeBlock>

      			<p className="mt_m">
      				위 한줄 예제는 <i className="t_blue">[모든 유형의 장치, 최소 너비 700px 이상 or 프린트 장치 가로 방향]</i>의 조건에 적용되는 예제입니다.
      			</p>
      			<div className="view_editor edit_code mt_m">
      				<Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="css/step02/3.9.media/3.9.3.media-or.html" className="uk_editor min_height_450" mode="htmlmixed" theme="moxer" browser="default" result minHeight="450px" />
      </Suspense></div>
      		</article>

      		
      		<article className="indent_max mt_xl">
      			<h3 className="ml_mn t_blue">not 연산자 - 부정 논리 연산자</h3>
      			<p className="mt_m">
      				<code>not</code> 연산자는 미디어 쿼리를 부정하는 데 사용됩니다. 쿼리가 참이면 <code>false</code>를 반환하고, 그렇지 않으면 <code>true</code>를 반환합니다.<br />
      				쉼표로 구분된 쿼리 목록에 있으면 해당 쿼리가 적용되는 특정 쿼리만 무효화됩니다.<br />
      				<code>not</code> 연산자를 사용하는 경우 매체 유형도 지정해야 합니다.
      			</p>
      			
      <CodeBlock title="@media [Negation logical operator]" language="javascript" className="uk_gist_code_box mt_m">
      {`<style>
      					@media not all and (color) { … }
      					@media not (all and (color)) { … }
      					</style>`}
      </CodeBlock>

      			<p className="mt_m">
      				
      				위 예제는 <i className="t_blue">모든 색상 장치에서 이 스타일을 적용하지 않겠다는 조건</i>입니다.
      			</p>

      			
      <CodeBlock title="@media [Negation logical operator]" language="javascript" className="uk_gist_code_box mt_m">
      {`<style>
      					@media not screen and (color), print and (color) { … }
      					</style>`}
      </CodeBlock>

      			<p className="mt_m">
      				위 한줄 예제는 <i className="t_blue">모든 스크린 색상 장치에서 적용하지 않거나, 프린트 색상 장치에서 적용되는 조건</i>입니다.<br />
      				쉼표로 분리하여 사용할 때, 미디어 구문은 개별 미디어 쿼리로 인식하므로 not은 쉼표 이후에 영향을 미치지 않습니다.
      			</p>
      			<div className="view_editor edit_code mt_m">
      				<Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="css/step02/3.9.media/3.9.3.media-not.html" className="uk_editor min_height_450" mode="htmlmixed" theme="moxer" browser="default" result minHeight="450px" />
      </Suspense></div>
      		</article>

      		
      		<article className="indent_max mt_xl">
      			<h3 className="ml_mn t_blue">only 연산자</h3>
      			<p className="mt_m">
      				<code>only</code> 연산자는 전체 쿼리와 일치하는 경우에만 스타일을 적용하는 데 사용합니다.<br />
      				미디어 쿼리를 지원하지 않는 브라우저(정확히는 legacy user agents)가 주어진 스타일을 적용하는 것을 방지합니다.<br />
      				<code>not</code>이나 <code>only</code>를 사용하려면 미디어 유형을 규정해야 합니다.<br />
      				미디어 쿼리는 대소문자를 구별하지 않습니다.
      			</p>
      			
      <CodeBlock title="@media [only operator]" language="css" className="uk_gist_code_box mt_m">
      {`<link rel="stylesheet" media="only screen and (color)" href="rwd.css">`}
      </CodeBlock>

      		</article>
      	</section>

      	
      	<section className="txt_ex indent mt_xxl">
      		<h2 className="ml_mn">미디어 쿼리(Media Query) 문법</h2>
      		<p className="mt_l">
      			만약 웹 페이지에 접속하고 있는 기기의 매체 유형과 명시된 매체 유형이 일치하고, 모든 표현식이 참(<code>true</code>)이면, 미디어 쿼리는 참(<code>true</code>)을 반환합니다.<br />
      			이렇게 미디어 쿼리의 반환값이 참이면, 해당 블록 안에 명시된 CSS 스타일 코드가 실행됩니다.<br />
      			여기에 <code>and</code>, <code>only</code>, <code>not</code> 등과 같은 키워드를 사용하여 더욱 복잡한 조건을 명시할 수도 있습니다.
      		</p>
      		
      <CodeBlock title="@media query syntax" language="javascript" className="uk_gist_code_box mt_m">
      {`@media not|only media type and (media feature) { … }`}
      </CodeBlock>


      		
      		<article className="indent_max mt_xl">
      			<h3 className="ml_mn t_blue">CSS 코드 내부에서 분기하는 방법</h3>
      			<p className="mt_m">
      				CSS 코드 내부에서 사용하는 미디어 쿼리의 기본적인 문법 예는 다음과 같습니다. 일반적으로 권장하고 널리 쓰이는 방식입니다.<br />
      			</p>
      			
      <CodeBlock title="@media query syntax [css inside]" language="javascript" className="uk_gist_code_box mt_m">
      {`@media only all and (조건문) { 실행문 }`}
      </CodeBlock>

      			<div className="ol_lst mt_m indent">
      				<ol>
      					<li className="line_code font14">
      						<strong className="mb_sm">@media</strong>
      						<p>미디어 쿼리가 시작됨을 선언합니다. @media, only, all, and, (조건문) 사이에 포함되어 있는 공백은 필수적입니다.</p>
      					</li>
      					<li className="line_code font14 mt_sm">
      						<strong className="mb_sm">only</strong>
      						<p>only 키워드는 미디어 쿼리를 지원하는 사용자 에이전트만 미디어 쿼리 구문을 해석하라는 명령이며 생략 가능합니다.</p>
      						<p>생략했을 때 기본 값은 only로 처리 됩니다. 생략해도 무방하므로 이 키워드는 일반적으로 작성하지 않습니다.</p>
      						<p>이 자리에는 not 키워드를 사용할 수 있는데 뒤에 오는 모든 조건을 부정하는 연산을 합니다.</p>
      					</li>
      					<li className="line_code font14 mt_sm">
      						<strong className="mb_sm">all</strong>
      						<p>all 키워드는 미디어 쿼리를 해석해야 할 대상 미디어를 선언한 것입니다.</p>
      						<p>all 이면 모든 미디어가 이 구문을 해석해야 합니다.</p>
      						<p>all 키워드 대신 screen 또는 print와 같은 특정 미디어를 구체적으로 언급할 수도 있습니다.</p>
      						<p>all 키워드는 생략 가능하고 생략했을 때 기본 값은 all 으로 처리됩니다.</p>
      						<p>all, screen, print를 가장 많이 씁니다.</p>
      					</li>
      					<li className="line_code font14 mt_sm">
      						<strong className="mb_sm">and</strong>
      						<p>and 키워드는 논리적으로 'AND' 연산을 수행하여 앞과 뒤의 조건을 모두 만족해야 한다는 것을 의미합니다.</p>
      						<p>조건이 유일하거나 또는 only, all과 같은 선행 키워드가 생략되면 and 키워드는 사용하지 말아야 합니다.</p>
      						<p>and 대신 콤마 , 기호를 사용하면 'OR' 연산을 수행합니다.</p>
      						<p>'OR' 연산은 나열된 조건 중에서 하나만 참이어도 {'{'}실행문{'}'}을 해석합니다.</p>
      					</li>
      					<li className="line_code font14 mt_sm">
      						<strong className="mb_sm">(조건문)</strong>
      						<p>브라우저는 조건문이 참일때{'{'}실행문{'}'}을 처리하고 거짓일 때 무시합니다.</p>
      						<p>조건문은 두 가지 이상 등장할 수 있습니다.</p>
      						<p>둘 이상의 조건문은 and 키워드 또는 콤마(,) 기호로 연결해야 합니다.</p>
      					</li>
      					<li className="line_code font14 mt_sm">
      						<strong className="mb_sm">{'{'}실행문{'}'}</strong>
      						<p>일반적인 CSS 코드를 이 괄호 안에 작성합니다.</p>
      						<p>브라우저는 (조건문)이 참일때 실행문 안쪽에 있는 CSS 코드를 해석합니다.</p>
      					</li>
      				</ol>
      			</div>
      			
      <CodeBlock title="@media query syntax [css inside]" language="javascript" className="uk_gist_code_box mt_m">
      {`<style>
      					/* 뷰포트 너비가 768px 이상 '그리고' 1024px 이하이면 실행 */
      					@media all and (min-width:768px) and (max-width:1024px) { … }

      					/* 뷰포트 너비가 768px 이거나 '또는' 1024px 이면 실행 */
      					@media all and (width:768px), (width:1024px) { … }

      					/* 뷰포트 너비가 768px 이상 '그리고' 1024px 이하가 '아니면' 실행 */
      					@media not all and (min-width:768px) and (max-width:1024px) { … }

      					/* 스크린 너비가 320px '그리고' 높이가 480px 이면 실행 */
      					@media all and (device-width:320px) and (device-height:480px) { … }

      					/* 스크린 너비가 최소 320px 이상 '그리고' 높이가 최소 480px 이상이면 실행 */
      					@media all and (min-device-width:320px) and (min-device-height:480px) { … }
      					</style>`}
      </CodeBlock>

      		</article>

      		
      		<article className="indent_max mt_xl">
      			<h3 className="ml_mn t_blue">CSS 코드 외부에서 분기하는 방법</h3>
      			<p className="mt_m">
      				조건문에 따라 별도의 외부 CSS 파일을 참조하여 분기하는 방법이며, 이 방식은 성능 최적화 측면에서 권장하지 않습니다.
      			</p>
      			
      <CodeBlock title="@media query syntax [css outside]" language="css" className="uk_gist_code_box mt_m">
      {`<!--
      					데스크탑 브라우저 사용자가 언제든 조건을 변경(예를 들면 창 크기를 조절해서 해상도를 바꿈)할 수 있기 때문에
      					웹 브라우저는 조건에 관계 없이 A.css 파일과 B.css 파일을 항상 요청합니다.
      					HTTP 요청을 불필요하게 두 번 발생시켜 이 페이지를 처음 로딩하는 사용자에게는 성능 저하의 원인이 됩니다.
      					CSS 파일은 하나로 병합하고 CSS 코드 내부에서 조건 분기하는 방식을 권장합니다.
      					-->
      					<link rel="stylesheet" type="text/css" media="all and (조건A)" href="A.css">
      					<link rel="stylesheet" type="text/css" media="all and (조건B)" href="B.css">

      					<!-- 스크린 장치 최소 화면이 500px보다 크고 800px보다 작을 때 스타일 적용 -->
      					<link rel="stylesheet" media="screen and (min-width: 500px) and (max-width: 800px)" href="rwd.css">`}
      </CodeBlock>

      		</article>
      	</section>

      	<figure className="img_figure indent mt_l">
      		<img src={`${IMG.CSS}/03_css_09_1.png`} alt="CSS @media" />
      		<figcaption className="reference">
      			CSS @media
      		</figcaption>
      	</figure>

      	<aside className="reference_box mt_xxl">
      		<strong className="tit">@규칙(At-Rule) 참조</strong>
      		<ul className="link_lst">
      			<li className="reference"><a href="https://www.w3.org/TR/css3-mediaqueries/" target="_blank" rel="noreferrer" className="fas" title="새창열림">W3C Media Queries</a></li>
      			<li className="reference"><a href="https://www.w3.org/TR/mediaqueries-4/" target="_blank" rel="noreferrer" className="fas" title="새창열림">W3C Media Queries Level 4</a></li>
      			<li className="reference"><a href="https://drafts.csswg.org/mediaqueries-3/" target="_blank" rel="noreferrer" className="fas" title="새창열림">W3C Media Queries Level drafts 3</a></li>
      			<li className="reference"><a href="https://drafts.csswg.org/mediaqueries-4/" target="_blank" rel="noreferrer" className="fas" title="새창열림">W3C Media Queries Level drafts 4</a></li>
      			<li className="reference"><a href="https://drafts.csswg.org/mediaqueries-5/" target="_blank" rel="noreferrer" className="fas" title="새창열림">W3C Media Queries Level drafts 5</a></li>
      			<li className="reference"><a href="https://developer.mozilla.org/ko/docs/Web/Guide/CSS/Media_queries" target="_blank" rel="noreferrer" className="fas" title="새창열림">MDN 미디어 쿼리 사용하기</a></li>
      			<li className="reference"><a href="https://dev.opera.com/articles/an-introduction-to-meta-viewport-and-viewport/" target="_blank" rel="noreferrer" className="fas" title="새창열림">메타 뷰포트 소개 @viewport</a></li>
      			<li className="reference"><a href="https://visual.ly/community/infographic/technology/adaptive-web-design-vs-responsive-web-design" target="_blank" rel="noreferrer" className="fas" title="새창열림">AWD vs RWD</a></li>
      			<li className="reference"><a href="https://torquemag.io/2013/09/responsive-design-vs-adaptive-design/" target="_blank" rel="noreferrer" className="fas" title="새창열림">반응형 디자인과 적응형 디자인</a></li>
      			<li className="reference"><a href="https://en.wikipedia.org/wiki/Adaptive_web_design" target="_blank" rel="noreferrer" className="fas" title="새창열림">적응형 웹 디자인</a></li>
      			<li className="reference"><a href="https://www.techrepublic.com/blog/web-designer/what-is-the-difference-between-responsive-vs-adaptive-web-design/" target="_blank" rel="noreferrer" className="fas" title="새창열림">RWD vs AWD 차이점</a></li>
      			<li className="reference"><a href="https://www.lukew.com/ff/entry.asp?933" target="_blank" rel="noreferrer" className="fas" title="새창열림">Luke Wroblewski 모바일 퍼스트</a></li>
      			<li className="reference"><a href="https://tobyyun.tumblr.com/post/58232536556/rwd-3-%EB%AA%A8%EB%B0%94%EC%9D%BC-%ED%8D%BC%EC%8A%A4%ED%8A%B8%EB%AA%A8%EB%B0%94%EC%9D%BC-%EC%9A%B0%EC%84%A0%EC%A3%BC%EC%9D%98" target="_blank" rel="noreferrer" className="fas" title="새창열림">Toby Yun 모바일 퍼스트</a></li>
      			<li className="reference"><a href="https://developers.google.com/web/fundamentals/design-and-ux/responsive" target="_blank" rel="noreferrer" className="fas" title="새창열림">반응형 웹 디자인 기본사항</a></li>
      			<li className="reference"><a href="https://bradfrost.com/blog/post/responsive-nav-patterns/" target="_blank" rel="noreferrer" className="fas" title="새창열림">responsive navigation patterns</a></li>
      		</ul>
      	</aside>
    </>
  )
}

export default CssMediaPart1Page
