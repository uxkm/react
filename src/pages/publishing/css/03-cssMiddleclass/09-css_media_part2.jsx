import { usePageMeta } from '@/components/common/PageMeta'
import PublishingPartTabs from '@/components/docs/PublishingPartTabs'
import { IMG } from '@/config/path'
import { Suspense, lazy } from 'react'
const UkEditorTarget = lazy(() => import('@/components/code/UkEditorTarget'))
function EditorFallback() { return <div className="uk_editor min_height_300" aria-hidden /> }
import CodeBlock from '@/components/code/CodeBlock'

const PAGE_LAYOUT = {
  mainClass: "css_media_part2",
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
  title: "@media part-2",
  description: "@media는 출력 장치의 특징을 참조하여 CSS 코드를 분기 처리하는 규칙으로, 출력 장치의 유형, 크기, 해상도 등을 조건으로 사용하여 하나의 HTML 소스가 여러 가지 뷰를 갖도록 구현할 수 있으며, 이를 미디어 쿼리(Media Query)라고 합니다. 이 페이지에서는 모든 해상도를 커버하기 위한 미디어 쿼리 코드 템플릿, 반응형 웹과 적응형 웹의 차이점과 구현 방법, 컨테이너 쿼리(Container Queries)를 사용한 요소 기반 반응형 디자인 방법을 함께 소개합니다.",
  keyword: "style, css, Cascading Style Sheets, 반응형 웹, 적응형 웹, @media, 미디어 쿼리(Media Query)",
}

function CssMediaPart2Page() {
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
      			<b className="t_blue">@media part-2</b>에서는 <code>@media</code>의 속성 중<br />
      		</p>
      		<ul className="dot_lst indent_small">
      			<li className="before_note"><b>미디어 쿼리(Media Query) 코드 템플릿</b></li>
      			<li className="before_note"><b>반응형 웹과 적응형 웹</b></li>
      			<li className="before_note"><b>컨테이너 쿼리(Container Queries)</b>에 대한 내용을 다루고 있습니다.</li>
      		</ul>
      		
      	</blockquote>

      	
      	<section className="txt_ex indent mt_xxl">
      		<h2 className="ml_mn">미디어 쿼리(Media Query) 코드 템플릿</h2>
      		<p className="mt_l">
      			아래 예시들은 모든 해상도를 커버하기 위한 미디어 쿼리 코드 템플릿입니다.<br />
      			프로젝트 환경 또는 디자인에 따라 적절하게 선택하여 사용해야 합니다.
      		</p>

      		
      		<article className="indent mt_xl">
      			<h3 className="t_blue ml_mn">기본적인 미디어 쿼리 사용</h3>
      			<p className="mt_m">
      				뷰포트의 너비가 <code>480px</code>이거나 그 이하일 경우에는 배경색을 <span style={{ color: "#fff", background: "darkorange" }}>darkorange</span>로 표현합니다.<br />
      				하지만 뷰포트의 너비가 그 초과일 경우에는 배경색을 <span style={{ color: "#000", background: "lightblue" }}>lightblue</span>로 바꿔서 표현합니다.
      			</p>
      			
      <CodeBlock title="@media query [code template]" language="javascript" className="uk_gist_code_box mt_m">
      {`body { background-color: darkorange; }
      					@media screen and (min-width: 480px) {
      						body { background-color: lightblue; }
      					}`}
      </CodeBlock>

      		</article>

      		
      		<article className="indent mt_xl">
      			<h3 className="t_blue ml_mn">브라우저, 프린터 용도 분기</h3>
      			<p className="mt_m">
      				다음 예제를 웹 브라우저에서 실행하면 배경색을 검정색으로, 텍스트의 색상은 흰색으로 표현합니다.<br />
      				하지만 웹 페이지를 프린트하게 되면 배경색을 흰색으로, 텍스트의 색상을 검정색으로 바꿔서 프린트합니다.
      			</p>
      			
      <CodeBlock title="@media query [code template]" language="javascript" className="uk_gist_code_box mt_m">
      {`@media screen {
      						body { background-color: black; color: white; }
      					}
      					@media print {
      						body { background-color: white; color: black; }
      					}`}
      </CodeBlock>

      		</article>

      		
      		<article className="indent mt_xl">
      			<h3 className="t_blue ml_mn">Device 별 사이즈</h3>
      			<p className="mt_m">
      				일반적으로 사용하는 device별 미디어 쿼리 사이즈입니다.
      			</p>
      			
      <CodeBlock title="@media query [code template]" language="javascript" className="uk_gist_code_box mt_m">
      {`/* All Device */
      					@media screen {
      						/* 모든 해상도를 위한 공통 코드를 작성한다. 모든 해상도에서 이 코드가 실행됨. */
      					}

      					/* Mobile Device */
      					@media all and (max-width:768px) {
      						/*
      						768px 미만 해상도의 모바일 기기를 위한 코드를 작성한다.
      						모든 해상도에서 이 코드가 실행됨.
      						미디어 쿼리를 지원하지 않는 모바일 기기를 위해 미디어 쿼리 구문을 사용하지 않는다.
      						*/
      					}

      					/* Tablet Device */
      					@media all and (min-width:768px) {
      						/*
      						사용자 해상도가 768px 이상일 때 이 코드가 실행됨.
      						테블릿과 데스크톱의 공통 코드를 작성한다.
      						*/
      					}

      					/* Tablet & Desktop Device */
      					@media all and (min-width:768px) and (max-width:1024px) {
      						/*
      						사용자 해상도가 768px 이상이고 1024px 이하일 때 이 코드가 실행됨.
      						아이패드 또는 비교적 작은 해상도의 랩탑이나 데스크톱에 대응하는 코드를 작성한다.
      						*/
      					}

      					/* Desktop Device */
      					@media all and (min-width:1025px) {
      						/*
      						사용자 해상도가 1025px 이상일 때 이 코드가 실행됨.
      						1025px 이상의 랩탑 또는 데스크톱에 대응하는 코드를 작성한다.
      						*/
      					}`}
      </CodeBlock>

      		</article>

      		
      		<article className="indent mt_xl">
      			<h3 className="t_blue ml_mn">Mobile First 반응형 웹</h3>
      			<p className="mt_m">
      				Mobile부터 시작하여 Tablet, Desktop으로 변화하는 반응형 웹의 미디어 쿼리 템플릿입니다.
      			</p>
      			
      <CodeBlock title="@media query [code template]" language="javascript" className="uk_gist_code_box mt_m">
      {`/* All Device */

      					/* Custom, iPhone Retina : 320px ~ */
      					@media only screen and (min-width : 320px) { … }

      					/* Extra Small Devices, Phones : 480px ~ */
      					@media only screen and (min-width : 480px) { … }

      					/* Small Devices, Tablets : 768px ~ */
      					@media only screen and (min-width : 768px) { … }

      					/* Medium Devices, Desktops : 992px ~ */
      					@media only screen and (min-width : 992px) { … }

      					/* Large Devices, Wide Screens : 1200px ~ */
      					@media only screen and (min-width : 1200px) { … }`}
      </CodeBlock>

      		</article>

      		
      		<article className="indent mt_xl">
      			<h3 className="t_blue ml_mn">Desktop First 반응형 웹</h3>
      			<p className="mt_m">
      				Desktop부터 시작하여 Tablet, Mobile으로 변화하는 반응형 웹의 미디어 쿼리 템플릿입니다.
      			</p>
      			
      <CodeBlock title="@media query [code template]" language="javascript" className="uk_gist_code_box mt_m">
      {`/* All Device */

      					/* Large Devices, Wide Screens : ~ 1200px */
      					@media only screen and (max-width : 1200px) { … }

      					/* Medium Devices, Desktops : ~ 992px */
      					@media only screen and (max-width : 992px) { … }

      					/* Small Devices, Tablets : ~ 768px */
      					@media only screen and (max-width : 768px) { … }

      					/* Extra Small Devices, Phones : ~ 480px */
      					@media only screen and (max-width : 480px) { … }

      					/* Custom, iPhone Retina : ~ 320px */
      					@media only screen and (max-width : 320px) { … }`}
      </CodeBlock>

      		</article>

      		
      		<article className="indent mt_xl">
      			<h3 className="t_blue ml_mn">iOS 계열 CSS(@media)</h3>
      			<p className="mt_m">
      				Apple사의 여러 기기에 상세히 대응할 수 있는 <code>@media</code> 템플릿입니다.
      			</p>

      			
      			<div className="indent mt_l">
      				<h4 className="ml_mn">iPhone 4 and 4S (레거시 기기 지원용)</h4>
      				
      <CodeBlock title="@media query [code template = iPhone 4 and 4S]" language="javascript" className="uk_gist_code_box mt_ms">
      {`/* Portrait and Landscape */
      						@media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (min-resolution: 2dppx) { … }

      						/* Portrait */
      						@media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (min-resolution: 2dppx) and (orientation: portrait) { … }

      						/* Landscape */
      						@media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (min-resolution: 2dppx) and (orientation: landscape) { … }`}
      </CodeBlock>

      			</div>

      			
      			<div className="indent mt_l">
      				<h4 className="ml_mn">iPhone 5, 5S, 5C and 5SE (레거시 기기 지원용)</h4>
      				
      <CodeBlock title="@media query [code template = iPhone 5, 5S, 5C and 5SE]" language="javascript" className="uk_gist_code_box mt_ms">
      {`/* Portrait and Landscape */
      						@media only screen and (min-device-width: 320px) and (max-device-width: 568px) and (min-resolution: 2dppx) { … }

      						/* Portrait */
      						@media only screen and (min-device-width: 320px) and (max-device-width: 568px) and (min-resolution: 2dppx) and (orientation: portrait) { … }

      						/* Landscape */
      						@media only screen and (min-device-width: 320px) and (max-device-width: 568px) and (min-resolution: 2dppx) and (orientation: landscape) { … }`}
      </CodeBlock>

      			</div>

      			
      			<div className="indent mt_l">
      				<h4 className="ml_mn">iPhone 6, 6S, 7 and 8 (레거시 기기 지원용)</h4>
      				
      <CodeBlock title="@media query [code template = iPhone 6, 6S, 7 and 8]" language="javascript" className="uk_gist_code_box mt_ms">
      {`/* Portrait and Landscape */
      						@media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (min-resolution: 2dppx) { … }

      						/* Portrait */
      						@media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (min-resolution: 2dppx) and (orientation: portrait) { … }

      						/* Landscape */
      						@media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (min-resolution: 2dppx) and (orientation: landscape) { … }`}
      </CodeBlock>

      			</div>

      			
      			<div className="indent mt_l">
      				<h4 className="ml_mn">iPhone 6+, 7+ and 8+ (레거시 기기 지원용)</h4>
      				
      <CodeBlock title="@media query [code template = iPhone 6+, 7+ and 8+]" language="javascript" className="uk_gist_code_box mt_ms">
      {`/* Portrait and Landscape */
      						@media only screen and (min-device-width: 414px) and (max-device-width: 736px) and (min-resolution: 3dppx) { … }

      						/* Portrait */
      						@media only screen and (min-device-width: 414px) and (max-device-width: 736px) and (min-resolution: 3dppx) and (orientation: portrait) { … }

      						/* Landscape */
      						@media only screen and (min-device-width: 414px) and (max-device-width: 736px) and (min-resolution: 3dppx) and (orientation: landscape) { … }`}
      </CodeBlock>

      			</div>

      			
      			<div className="indent mt_l">
      				<h4 className="ml_mn">iPhone X (레거시 기기 지원용)</h4>
      				
      <CodeBlock title="@media query [code template = iPhone X]" language="javascript" className="uk_gist_code_box mt_ms">
      {`/* Portrait and Landscape */
      						@media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (min-resolution: 3dppx) { … }

      						/* Portrait */
      						@media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (min-resolution: 3dppx) and (orientation: portrait) { … }

      						/* Landscape */
      						@media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (min-resolution: 3dppx) and (orientation: landscape) { … }`}
      </CodeBlock>

      			</div>

      			
      			<div className="indent mt_l">
      				<h4 className="ml_mn">iPad 1, 2, Mini and Air (레거시 기기 지원용)</h4>
      				
      <CodeBlock title="@media query [code template = iPad 1, 2, Mini and Air]" language="javascript" className="uk_gist_code_box mt_ms">
      {`/* Portrait and Landscape */
      						@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (min-resolution: 1dppx) { … }

      						/* Portrait */
      						@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) and (min-resolution: 1dppx) { … }

      						/* Landscape */
      						@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) and (min-resolution: 1dppx) { … }`}
      </CodeBlock>

      			</div>

      			
      			<div className="indent mt_l">
      				<h4 className="ml_mn">iPad 3, 4 and Pro 9.7&quot;</h4>
      				
      <CodeBlock title="@media query [code template = iPad 3, 4 and Pro 9.7&quot;]" language="javascript" className="uk_gist_code_box mt_ms">
      {`/* Portrait and Landscape */
      						@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (min-resolution: 2dppx) { … }

      						/* Portrait */
      						@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) and (min-resolution: 2dppx) { … }

      						/* Landscape */
      						@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) and (min-resolution: 2dppx) { … }`}
      </CodeBlock>

      			</div>

      			
      			<div className="indent mt_l">
      				<h4 className="ml_mn">iPad Pro 10.5&quot;</h4>
      				
      <CodeBlock title="@media query [code template = iPad Pro 10.5&quot;]" language="javascript" className="uk_gist_code_box mt_ms">
      {`/* Portrait and Landscape */
      						@media only screen and (min-device-width: 834px) and (max-device-width: 1112px)and (min-resolution: 2dppx) { … }

      						/* Portrait */
      						/* Declare the same value for min- and max-width to avoid colliding with desktops */
      						/* Source: https://medium.com/connect-the-dots/css-media-queries-for-ipad-pro-8cad10e17106*/
      						@media only screen and (min-device-width: 834px) and (max-device-width: 834px) and (orientation: portrait) and (min-resolution: 2dppx) { … }

      						/* Landscape */
      						/* Declare the same value for min- and max-width to avoid colliding with desktops */
      						/* Source: https://medium.com/connect-the-dots/css-media-queries-for-ipad-pro-8cad10e17106*/
      						@media only screen and (min-device-width: 1112px) and (max-device-width: 1112px) and (orientation: landscape) and (min-resolution: 2dppx) { … }`}
      </CodeBlock>

      			</div>

      			
      			<div className="indent mt_l">
      				<h4 className="ml_mn">iPad Pro 12.9&quot;</h4>
      				
      <CodeBlock title="@media query [code template = iPad Pro 12.9&quot;]" language="javascript" className="uk_gist_code_box mt_ms">
      {`/* Portrait and Landscape */
      						@media only screen and (min-device-width: 1024px) and (max-device-width: 1366px) and (min-resolution: 2dppx) { … }

      						/* Portrait */
      						/* Declare the same value for min- and max-width to avoid colliding with desktops */
      						/* Source: https://medium.com/connect-the-dots/css-media-queries-for-ipad-pro-8cad10e17106*/
      						@media only screen   and (min-device-width: 1024px) and (max-device-width: 1024px) and (orientation: portrait) and (min-resolution: 2dppx) { … }

      						/* Landscape */
      						/* Declare the same value for min- and max-width to avoid colliding with desktops */
      						/* Source: https://medium.com/connect-the-dots/css-media-queries-for-ipad-pro-8cad10e17106*/
      						@media only screen and (min-device-width: 1366px) and (max-device-width: 1366px) and (orientation: landscape) and (min-resolution: 2dppx) { … }`}
      </CodeBlock>

      			</div>

      			
      			<div className="indent mt_l">
      				<h4 className="ml_mn">Apple Watch</h4>
      				
      <CodeBlock title="@media query [code template = Apple Watch]" language="javascript" className="uk_gist_code_box mt_ms">
      {`<style>
      						@media (max-device-width: 42mm) and (min-device-width: 38mm) { … }
      						</style>`}
      </CodeBlock>

      			</div>
      		</article>
      	</section>

      	
      	<section className="txt_ex indent mt_xxl">
      		<h2 className="ml_mn">반응형 웹과 적응형 웹</h2>
      		<p className="mt_l">
      			일반적으로 반응형 웹 디자인은 뷰포트 너비(<code>width</code> 프로퍼티)를 기준으로 하며, 뷰포트 너비에 따라 반응하는 범위를 <b>스크린 경계치(screen breakpoints)</b>라고 부릅니다.<br />
      			스마트폰, 태블릿, 데스크탑에 대해 최소한의 스크린 경계치를 고려해야 합니다.
      		</p>
      		<p className="mt_s">
      			반응형 웹과 적응형 웹은 모두 모바일 기기와 다양한 화면 크기에서 원활한 정보를 제공하여 더 나은 사용자 경험을 제공하기 위한 방법입니다.
      		</p>
      		<figure className="img_figure mt_m">
      			<img src={`${IMG.CSS}/cssMiddleclass/uxkm_media-query-breakpoints.svg`} alt="viewport breakpoint" />
      			<figcaption className="sound_only">[viewport breakpoint]</figcaption>
      		</figure>

      		
      		<article className="indent mt_xl">
      			<h3 className="ml_mn t_blue">반응형 웹(Responsive Web)</h3>
      			<p className="mt_m">
      				반응형 웹은 미디어 쿼리를 사용하여 화면 크기에 따라 레이아웃이 자동으로 조절되는 웹 디자인 방식입니다.<br />
      				하나의 템플릿으로 모든 기기에 대응할 수 있어 개발이 간편하지만, 모든 기기를 위한 CSS를 다운로드해야 하므로 로딩 시간이 길어질 수 있습니다.
      			</p>
      			<div className="ol_lst mt_m indent">
      				<ol>
      					<li>미디어 쿼리를 사용해 기기 화면의 크기를 확인하고, 유연한 이미지와 그리드로 화면 크기 변화에 따라 페이지 레이아웃을 조절합니다.</li>
      					<li>하나의 템플릿만 사용하므로 개발이 간편하고 유지보수가 쉽습니다.</li>
      					<li>모든 기기를 위한 CSS를 다운로드해야 하므로 데이터 사용량이 많고 로딩 시간이 길어질 수 있습니다.</li>
      					<li>기존 데스크톱 사이트가 있다면 재구축이 필요할 수 있습니다.</li>
      				</ol>
      			</div>
      		</article>

      		
      		<article className="indent mt_xl">
      			<h3 className="ml_mn t_blue">적응형 웹(Adaptive Web)</h3>
      			<p className="mt_m">
      				적응형 웹은 서버나 클라이언트에서 접근한 기기를 감지하여 해당 기기에 최적화된 템플릿을 제공하는 웹 디자인 방식입니다.<br />
      				기기별로 별도의 템플릿을 제작해야 하지만, 기기에 맞는 콘텐츠만 다운로드하므로 로딩 속도가 빠릅니다.
      			</p>
      			<div className="ol_lst mt_m indent">
      				<ol>
      					<li>접근한 기기를 감지하여 해당 기기에 맞는 템플릿을 제공합니다.</li>
      					<li>기기별로 다른 템플릿을 제작해야 하므로 개발이 복잡합니다.</li>
      					<li>기존 데스크톱 사이트가 있다면 모바일용 템플릿만 추가하면 되어 재구축이 필요 없습니다.</li>
      					<li>기기에 맞는 콘텐츠만 다운로드하므로 데이터 사용량이 적고 로딩 속도가 빠릅니다.</li>
      				</ol>
      			</div>
      		</article>

      		
      		<article className="indent mt_xl">
      			<h3 className="ml_mn t_blue">반응형 vs 적응형</h3>
      			<div className="table_summary value_150 mt_ml">
      				<ul className="lst_hd">
      					<li className="cell value">특징</li>
      					<li className="cell content">반응형 웹</li>
      					<li className="cell content">적응형 웹</li>
      				</ul>
      				<ul className="lst_bd">
      					<li>
      						<p className="cell value">기기 감지</p>
      						<p className="cell content" data-title="반응형 웹">미디어 쿼리로 기기 감지합니다.</p>
      						<p className="cell content" data-title="적응형 웹">서버 또는 브라우저에서 기기 감지합니다.</p>
      					</li>
      					<li>
      						<p className="cell value">템플릿</p>
      						<p className="cell content" data-title="반응형 웹">하나의 템플릿으로 충분합니다.</p>
      						<p className="cell content" data-title="적응형 웹">기기마다 다른 템플릿 필요합니다.</p>
      					</li>
      					<li>
      						<p className="cell value">콘텐츠 다운로드</p>
      						<p className="cell content" data-title="반응형 웹">모든 콘텐츠 다운로드 필요합니다.</p>
      						<p className="cell content" data-title="적응형 웹">기기에 맞는 콘텐츠만 다운로드 합니다.</p>
      					</li>
      					<li>
      						<p className="cell value">로딩 속도</p>
      						<p className="cell content" data-title="반응형 웹">로드되는 속도가 느립니다.</p>
      						<p className="cell content" data-title="적응형 웹">로드되는 속도가 빠릅니다.</p>
      					</li>
      					<li>
      						<p className="cell value">기존 사이트</p>
      						<p className="cell content" data-title="반응형 웹">기존 사이트 변경 및 재구축 필요합니다.</p>
      						<p className="cell content" data-title="적응형 웹">기존 사이트 변경 없이 구축 가능합니다.</p>
      					</li>
      				</ul>
      			</div>
      			<figure className="img_figure mt_m">
      				<img src={`${IMG.CSS}/cssMiddleclass/uxkm_media_awd-rwd.svg`} alt="반응형 웹 VS 적응형 웹" />
      				<figcaption>[반응형 웹 VS 적응형 웹]</figcaption>
      			</figure>
      		</article>

      		
      		<article className="indent mt_xl">
      			<h3 className="ml_mn t_blue">모바일 퍼스트 디자인(Mobile First Design)</h3>
      			<p className="mt_m">
      				모바일 퍼스트 디자인은 웹 애플리케이션을 처음 구축할 때 모바일을 우선으로 설계하는 방식입니다.<br />
      				모바일을 먼저 구축한 후, 데스크톱이나 다른 기기를 위한 반응형/적응형 웹을 추가합니다.
      			</p>
      			
      <CodeBlock title="@media query [Mobile First Design]" language="javascript" className="uk_gist_code_box mt_m">
      {`/* Mobile style */

      					/* Custom, iPhone Retina : 320px ~ */
      					@media only screen and (min-width : 320px) { … }

      					/* Extra Small Devices, Phones : 480px ~ */
      					@media only screen and (min-width : 480px) { … }

      					/* Small Devices, Tablets : 768px ~ */
      					@media only screen and (min-width : 768px) { … }

      					/* Medium Devices, Desktops : 992px ~ */
      					@media only screen and (min-width : 992px) { … }

      					/* Large Devices, Wide Screens : 1200px ~ */
      					@media only screen and (min-width : 1200px) { … }`}
      </CodeBlock>

      			<p className="mt_m">
      				위 CSS 코드처럼 모바일을 기본으로 삼아 코드를 짠 후, 다른 기기에 맞는 CSS 코드를 추가하는 방식입니다.
      			</p>
      			<div className="ol_lst mt_m">
      				<strong className="t_black font-16">모바일 퍼스트 디자인의 장점</strong>
      				<ol className="mt_sm indent">
      					<li>모바일을 데스크톱으로 확장하는 것은 쉽지만, 데스크톱을 모바일로 축소하는 것은 어렵습니다.</li>
      					<li>모바일은 화면이 작아 핵심 콘텐츠만 제공해야 하므로, 미니멀한 디자인이 가능합니다.</li>
      					<li>모바일 기준으로 작성한 웹 페이지는 데스크톱으로 쉽게 확장할 수 있습니다.</li>
      				</ol>
      			</div>

      			<figure className="img_figure mt_m">
      				<img src={`${IMG.CSS}/cssMiddleclass/uxkm_media_rwd_mobile-first.svg`} alt="모바일 우선주의(Mobile First)" />
      				<figcaption className="t_black weight-500">[모바일 우선주의(Mobile First)]</figcaption>
      				<p className="mt_s">
      					모바일 사이트에 미디어 쿼리를 추가하여 데스크탑 화면에 맞게 보여주는 방식이 반응형 웹의 'Mobile First'입니다.<br />
      					현재 우리나라에서는 '데스크탑 우선주의(Desktop First)'를 많이 사용하지만, 해외에서는 '모바일 우선주의(Mobile First)' 방식이 널리 사용되고 있습니다.
      				</p>
      			</figure>
      			<figure className="img_figure mt_m">
      				<img src={`${IMG.CSS}/cssMiddleclass/uxkm_media_rwd_desktop-first.svg`} alt="데스크탑 우선주의(Desktop First)" />
      				<figcaption className="t_black weight-500">[데스크탑 우선주의(Desktop First)]</figcaption>
      				<p className="mt_s">
      					모바일 퍼스트와는 반대로 데스크탑 화면에 맞추어진 사이트에 미디어쿼리를 더해 모바일 사이트를 만드는 방식입니다.<br />
      					우리나라에서 대부분의 사이트가 '데스크탑 우선주의(Desktop First)' 방식으로 사용되고 있습니다.
      				</p>
      			</figure>
      		</article>

      		
      		<article className="indent mt_xl">
      			<h3 className="ml_mn t_blue">데스크탑 퍼스트가 모바일 퍼스트에 비해 가질 수 있는 장점과 단점</h3>
      			<div className="ol_lst mt_m">
      				<ol>
      					<li className="line_code font14">
      						<strong className="mb_sm">장점</strong>
      						<p>확실한 구버전 IE대응</p>
      						<p>익숙한 작업 순서 유지</p>
      						<p>리뉴얼 없는 모바일 대응 추가</p>
      					</li>
      					<li className="line_code font14 mt_m">
      						<strong className="mb_sm">단점</strong>
      						<p>
      							<b className="t_blue">오버라이딩(속성 덮어쓰기) 발생</b><br />
      							데스크탑 퍼스트 방식에서는 모바일 화면을 만들기 위해 CSS 속성을 다시 덮어써야 하는 경우가 많아 코드가 길어집니다.
      						</p>
      						<p>
      							<b className="t_blue">사이드 이펙트(부작용) 문제</b><br />
      							데스크탑의 수정사항이 모바일에 영향을 미칠 수 있어, 수정 시 모바일 화면을 함께 확인해야 합니다.
      						</p>
      					</li>
      				</ol>
      			</div>
      		</article>

      		
      		<article className="indent mt_xl">
      			<h3 className="ml_mn t_blue" data-conlist-h4="true">반응형 웹페이지에서 사용되는 대부분의 레이아웃의 5가지 패턴 요약</h3>
      			<div className="ol_lst mt_m">
      				<p>
      					LukeW(모바일 우선주의 디자인의 창시자)가 제시한 5가지 레이아웃 패턴은 다음과 같습니다.
      				</p>
      				<ol className="indent mt_s">
      					<li>
      						<strong className="t_black weight-500">Mostly Fluid(유동형)</strong> :
      						일반적인 화면에서는 유동형 그리드와 유동형 이미지를 사용하여 레이아웃을 그대로 유지합니다.
      						가장 작은 화면에서는 수직으로 컬럼을 세우는 구조를 가지며, 가장 많이 사용되는 패턴입니다.
      					</li>
      					<li>
      						<strong className="t_black weight-500">Column Drop(열 드롭)</strong> :
      						화면이 작아짐에 따라 부차적인 컬럼을 아래로 떨어트리는 방법을 쓰는 패턴입니다.
      						대부분의 컬럼폭은 화면 크기가 달라져도 변함이 별도 없다는 특징이 있습니다.
      					</li>
      					<li>
      						<strong className="t_black weight-500">Layout Shifter(레이아웃 시프터)</strong> :
      						다양한 디바이스에 따라 각기 다른 레이아웃을 보여주는 패턴입니다.
      						복잡하고 많은 작업이 필요하지만 혁신적인 디자인을 담을 수 있다는 장점이 있습니다.
      					</li>
      					<li>
      						<strong className="t_black weight-500">Tiny Tweaks(작은 변화)</strong> :
      						하나의 컬럼을 사용하는 패턴입니다.
      						변화의 폭이 크지 않다는 특징이 있으며, 주로 글 내용을 중시하는 블로그에서 많이 사용되는 패턴입니다.
      					</li>
      					<li>
      						<strong className="t_black weight-500">Off Canvas(캔버스 오프)</strong> :
      						큰 화면에서는 모든 컬럼들을 보여주고 작은 화면에서는 하나의 메인 컬럼만 보여주며 다른 부가적인 컬럼들을 화면 밖에 숨겨놓는 패턴입니다.
      						숨겨진 컬럼들은 필요할 때만 접근하도록 합니다.
      					</li>
      				</ol>
      			</div>
      			<div className="ol_lst mt_l">
      				<ol>
      					
      					<li className="tit_h4">
      						<h4 className="mb_s">Mostly Fluid(유동형)</h4>
      						<p className="mt_ms">
      							일반적인 화면에서는 유동형 그리드와 이미지를 사용하여 레이아웃을 유지하고, 작은 화면에서는 컬럼이 수직으로 쌓이는 구조입니다.<br />
      							가장 많이 사용되는 패턴이며, 작은 화면과 큰 화면 사이에 하나의 중단점(breakpoint)만 있으면 됩니다.
      						</p>

      						<div className="reference_box mt_ms">
      							<p className="tit weight-500 t_blue">활용 사이트</p>
      							<ul className="link_lst">
      								<li className="reference"><a href="https://alistapart.com/" target="_blank" rel="noreferrer" className="fas" title="새창열림">A List Apart</a></li>
      								<li className="reference"><a href="https://mediaqueri.es/fss/" target="_blank" rel="noreferrer" className="fas" title="새창열림">Five Simple Steps</a></li>
      								<li className="reference"><a href="https://mediaqueri.es/pea/" target="_blank" rel="noreferrer" className="fas" title="새창열림">Princess Elisabeth Antarctica</a></li>
      								<li className="reference"><a href="https://mediaqueri.es/tre/" target="_blank" rel="noreferrer" className="fas" title="새창열림">Trent Walton</a></li>
      								<li className="reference"><a href="https://mediaqueri.es/sif/" target="_blank" rel="noreferrer" className="fas" title="새창열림">Sifter</a></li>
      								<li className="reference"><a href="https://mediaqueri.es/cho/" target="_blank" rel="noreferrer" className="fas" title="새창열림">ChoiceResponse</a></li>
      							</ul>
      						</div>
      						<figure className="img_figure mt_ms">
      							<img src={`${IMG.CSS}/cssMiddleclass/uxkm_md-patterns1.svg`} alt="유동형 Mostly fluid" />
      							<figcaption>[유동형 Mostly fluid]</figcaption>
      						</figure>
      						<div className="view_editor edit_code mt_ms">
      							<Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="css/step02/3.9.media/3.9.6.css3-media-rwd_mostly-fluid.html" className="uk_editor min_height_600 mb_result_height_500" mode="htmlmixed" theme="moxer" browser="default" result minHeight="600px" mbResultHeight="500px" />
      </Suspense></div>
      					</li>

      					
      					<li className="tit_h4 mt_l">
      						<h4 className="mb_s">Column Drop(열 드롭)</h4>
      						<p className="mt_ms">
      							화면이 작아짐에 따라 부차적인 컬럼을 아래로 떨어뜨리는 패턴입니다.<br />
      							대부분의 컬럼 폭은 화면 크기가 달라져도 변하지 않으며, 화면이 좁아지면 열들이 수직으로 쌓입니다.
      						</p>

      						<article className="reference_box mt_ms">
      							<p className="tit weight-500 t_blue">활용 사이트</p>
      							<ul className="link_lst">
      								<li className="reference"><a href="https://www.pinterest.co.kr/" target="_blank" rel="noreferrer" className="fas" title="새창열림">pinterest</a></li>
      								<li className="reference"><a href="https://mediaqueri.es/mod/" target="_blank" rel="noreferrer" className="fas" title="새창열림">Modernizr</a></li>
      								<li className="reference"><a href="https://mediaqueri.es/owl/" target="_blank" rel="noreferrer" className="fas" title="새창열림">Owltastic</a></li>
      								<li className="reference"><a href="https://mediaqueri.es/wee/" target="_blank" rel="noreferrer" className="fas" title="새창열림">Wee Nudge</a></li>
      								<li className="reference"><a href="https://mediaqueri.es/fds/" target="_blank" rel="noreferrer" className="fas" title="새창열림">Festival de Saintes</a></li>
      								<li className="reference"><a href="https://mediaqueri.es/ash/" target="_blank" rel="noreferrer" className="fas" title="새창열림">Ash Personal Training</a></li>
      							</ul>
      						</article>
      						<figure className="img_figure mt_ms">
      							<img src={`${IMG.CSS}/cssMiddleclass/uxkm_md-patterns2.svg`} alt="열 드롭 Column drop" />
      							<figcaption>[열 드롭 Column drop]</figcaption>
      						</figure>
      						<div className="view_editor edit_code mt_ms">
      							<Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="css/step02/3.9.media/3.9.6.css3-media-rwd_column-drop.html" className="uk_editor min_height_450 mb_result_height_400" mode="htmlmixed" theme="moxer" browser="default" result minHeight="450px" mbResultHeight="400px" />
      </Suspense></div>
      					</li>

      					
      					<li className="tit_h4 mt_l">
      						<h4 className="mb_s">Layout Shifter(레이아웃 시프터)</h4>
      						<p className="mt_ms">
      							다양한 디바이스에 따라 각기 다른 레이아웃을 보여주는 패턴입니다.<br />
      							여러 개의 중단점을 두어 화면 크기에 민감하게 반응하며, 컬럼을 떨어뜨리는 대신 컨텐츠를 이동시킵니다.
      							복잡한 작업이 필요하지만 혁신적인 디자인을 구현할 수 있습니다.
      						</p>

      						<article className="reference_box mt_ms">
      							<p className="tit weight-500 t_blue">활용 사이트</p>
      							<ul className="link_lst">
      								<li className="reference"><a href="http://www.anderssonwise.com/" target="_blank" rel="noreferrer" className="fas" title="새창열림">Andersson-Wise Architects</a></li>
      								<li className="reference"><a href="https://mediaqueri.es/fse/" target="_blank" rel="noreferrer" className="fas" title="새창열림">Food Sense</a></li>
      								<li className="reference"><a href="https://mediaqueri.es/pma/" target="_blank" rel="noreferrer" className="fas" title="새창열림">Performance Marketing Awards</a></li>
      								<li className="reference"><a href="https://mediaqueri.es/ffg/" target="_blank" rel="noreferrer" className="fas" title="새창열림">Forefathers Group</a></li>
      								<li className="reference"><a href="https://mediaqueri.es/bg/" target="_blank" rel="noreferrer" className="fas" title="새창열림">The Boston Globe</a></li>
      								<li className="reference"><a href="https://mediaqueri.es/awa/" target="_blank" rel="noreferrer" className="fas" title="새창열림">Andersson-Wise Architects</a></li>
      							</ul>
      						</article>
      						<figure className="img_figure mt_ms">
      							<img src={`${IMG.CSS}/cssMiddleclass/uxkm_md-patterns3.svg`} alt="레이아웃 시프터 Layout shifter" />
      							<figcaption>[레이아웃 시프터 Layout shifter]</figcaption>
      						</figure>
      						<div className="view_editor edit_code mt_ms">
      							<Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="css/step02/3.9.media/3.9.6.css3-media-rwd_layout-shifter.html" className="uk_editor min_height_600 mb_result_height_600" mode="htmlmixed" theme="moxer" browser="default" result minHeight="600px" mbResultHeight="600px" />
      </Suspense></div>
      					</li>

      					
      					<li className="tit_h4 mt_l">
      						<h4 className="mb_s">Tiny Tweaks(작은 변화)</h4>
      						<p className="mt_ms">
      							하나의 컬럼을 사용하는 패턴으로, 글꼴 크기나 이미지 크기만 조정하는 작은 변화만 이루어집니다.
      							변화의 폭이 크지 않으며, 주로 블로그나 단일 열 레이아웃에서 사용됩니다.
      						</p>

      						<article className="reference_box mt_ms">
      							<p className="tit weight-500 t_blue">활용 사이트</p>
      							<ul className="link_lst">
      								<li className="reference"><a href="https://mediaqueri.es/ff/" target="_blank" rel="noreferrer" className="fas" title="새창열림">Future Friendly</a></li>
      								<li className="reference"><a href="https://mediaqueri.es/pa/" target="_blank" rel="noreferrer" className="fas" title="새창열림">Path</a></li>
      								<li className="reference"><a href="https://mediaqueri.es/neo/" target="_blank" rel="noreferrer" className="fas" title="새창열림">Neovada</a></li>
      								<li className="reference"><a href="https://mediaqueri.es/lyc/" target="_blank" rel="noreferrer" className="fas" title="새창열림">Lycos</a></li>
      								<li className="reference"><a href="https://mediaqueri.es/dgf/" target="_blank" rel="noreferrer" className="fas" title="새창열림">Design made in Germany</a></li>
      							</ul>
      						</article>
      						<figure className="img_figure mt_ms">
      							<img src={`${IMG.CSS}/cssMiddleclass/uxkm_md-patterns4.svg`} alt="작은 변화 Tiny tweaks" />
      							<figcaption>[작은 변화 Tiny tweaks]</figcaption>
      						</figure>
      						<div className="view_editor edit_code mt_ms">
      							<Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="css/step02/3.9.media/3.9.6.css3-media-rwd_tiny-tweaks.html" className="uk_editor min_height_600 mb_result_height_600" mode="htmlmixed" theme="moxer" browser="default" result minHeight="600px" mbResultHeight="600px" />
      </Suspense></div>
      					</li>

      					
      					<li className="tit_h4 mt_l">
      						<h4 className="mb_s">Off Canvas(캔버스 오프)</h4>
      						<p className="mt_ms">
      							큰 화면에서는 모든 컬럼을 보여주고, 작은 화면에서는 메인 컬럼만 보여주며 부가적인 컬럼을 화면 밖에 숨겨놓는 패턴입니다.<br />
      							숨겨진 컬럼은 필요할 때만 접근할 수 있으며, 네비게이션이나 메뉴 같은 요소를 작은 화면에서는 클릭 시에만 보여줍니다.
      						</p>

      						<article className="reference_box mt_ms">
      							<p className="tit weight-500 t_blue">활용 사이트</p>
      							<ul className="link_lst">
      								<li className="reference"><a href="https://www.html5rocks.com/en/tutorials/developertools/async-call-stack/" target="_blank" rel="noreferrer" className="fas" title="새창열림">HTML5Rocks Articles</a></li>
      								<li className="reference"><a href="https://store.google.com/" target="_blank" rel="noreferrer" className="fas" title="새창열림">Google Nexus</a></li>
      							</ul>
      						</article>
      						<figure className="img_figure mt_ms">
      							<img src={`${IMG.CSS}/cssMiddleclass/uxkm_md-patterns5.svg`} alt="오프 캔버스 Off canvas" />
      							<figcaption>[오프 캔버스 Off canvas]</figcaption>
      						</figure>
      					</li>
      				</ol>
      			</div>
      		</article>
      	</section>

      	
      	<section className="txt_ex indent mt_xxl">
      		<h2 className="ml_mn">컨테이너 쿼리(Container Queries)</h2>
      		<p className="mt_l">
      			컨테이너 쿼리는 뷰포트 크기가 아닌 <b>부모 컨테이너의 크기</b>를 기준으로 스타일을 적용하는 기능입니다.<br />
      			미디어 쿼리는 뷰포트 전체 크기를 기준으로 하기 때문에, 페이지의 특정 컴포넌트만 독립적으로 반응형으로 만들기 어려웠습니다.<br />
      			컨테이너 쿼리를 사용하면 카드, 위젯, 사이드바 같은 개별 컴포넌트가 자신이 포함된 컨테이너의 크기에 따라 스타일을 조정할 수 있습니다.
      		</p>
      		<p className="mt_s">
      			컨테이너 쿼리는 <strong className="t_black">CSS Containment Module Level 3</strong>에 정의되어 있으며, 최신 브라우저에서 지원됩니다.
      		</p>

      		
      		<article className="indent mt_xl">
      			<h3 className="ml_mn t_blue">컨테이너 설정</h3>
      			<p className="mt_m">
      				컨테이너 쿼리를 사용하려면 먼저 컨테이너로 사용할 요소에 <code>container-type</code> 또는 <code>container</code> 속성을 설정해야 합니다.
      			</p>
      			
      <CodeBlock title="container-type" language="javascript" className="uk_gist_code_box mt_m">
      {`.card-container {
      						/* 컨테이너로 지정 */
      						container-type: inline-size;
      					}

      					/* 또는 container 속기형 사용 */
      					.card-container {
      						container: my-container / inline-size;
      					}`}
      </CodeBlock>

      			<p className="mt_m">
      				<code>container-type</code> 속성 값:
      			</p>
      			<ul className="dot_lst indent mt_s">
      				<li><code>inline-size</code>: 인라인 방향(가로) 크기를 기준으로 쿼리</li>
      				<li><code>block-size</code>: 블록 방향(세로) 크기를 기준으로 쿼리</li>
      				<li><code>size</code>: 인라인과 블록 방향 모두를 기준으로 쿼리</li>
      				<li><code>normal</code>: 컨테이너 쿼리 사용 안 함 (기본값)</li>
      			</ul>
      			<p className="mt_m">
      				<code>container-name</code>을 사용하면 여러 컨테이너 중 특정 컨테이너를 지정할 수 있습니다.
      			</p>
      			
      <CodeBlock title="container-name" language="javascript" className="uk_gist_code_box mt_m">
      {`.sidebar {
      						container-name: sidebar;
      						container-type: inline-size;
      					}

      					.main-content {
      						container-name: main;
      						container-type: inline-size;
      					}

      					/* 특정 컨테이너를 지정하여 쿼리 */
      					@container sidebar (min-width: 300px) {
      						.widget {
      							font-size: 1.2rem;
      						}
      					}`}
      </CodeBlock>

      		</article>

      		
      		<article className="indent mt_xl">
      			<h3 className="ml_mn t_blue">@container 규칙 사용</h3>
      			<p className="mt_m">
      				<code>@container</code> 규칙은 미디어 쿼리의 <code>@media</code>와 유사하지만, 뷰포트가 아닌 컨테이너의 크기를 기준으로 작동합니다.
      			</p>
      			
      <CodeBlock title="@container" language="javascript" className="uk_gist_code_box mt_m">
      {`.card-container {
      						container-type: inline-size;
      					}

      					.card {
      						padding: 1rem;
      						font-size: 1rem;
      					}

      					/* 컨테이너가 400px 이상일 때 */
      					@container (min-width: 400px) {
      						.card {
      							padding: 2rem;
      							font-size: 1.2rem;
      						}
      					}

      					/* 컨테이너가 600px 이상일 때 */
      					@container (min-width: 600px) {
      						.card {
      							display: grid;
      							grid-template-columns: 1fr 2fr;
      							gap: 2rem;
      						}
      					}`}
      </CodeBlock>

      		</article>

      		
      		<article className="view_editor edit_code mt_xl">
      			<h3 className="ml_mn ve_tit">컨테이너 쿼리 예제</h3>
      			<p className="mt_m">
      				카드 컴포넌트가 컨테이너 크기에 따라 레이아웃이 변경되는 예제입니다.
      			</p>
      			<Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="css/step02/3.9.media/3.9.7.container-query.html" className="uk_editor mt_m min_height_600 mb_result_height_500" mode="htmlmixed" theme="moxer" browser="default" result minHeight="600px" mbResultHeight="500px" />
      </Suspense>
      		</article>

      		<aside className="browser_support mt_xl" data-tit="container queries">
      			<ul>
      				<li className="edge">105.0</li>
      				<li className="chrome">105.0</li>
      				<li className="firefox">110.0</li>
      				<li className="opera">91.0</li>
      				<li className="safari">16.0</li>
      			</ul>
      		</aside>
      	</section>

      	<figure className="img_figure indent mt_l">
      		<img src={`${IMG.CSS}/03_css_09_2.png`} alt="CSS @Media" />
      		<figcaption className="reference">
      			CSS @Media
      		</figcaption>
      	</figure>

      	<aside className="reference_box mt_xxl">
      		<strong className="tit">@규칙(At-Rule) 참조</strong>
      		<ul className="link_lst">
      			<li className="reference"><a href="https://www.w3.org/TR/css3-mediaqueries/" target="_blank" rel="noreferrer" className="fas" title="새창열림">W3C Media Queries</a></li>
      			<li className="reference"><a href="https://www.w3.org/TR/mediaqueries-4/" target="_blank" rel="noreferrer" className="fas" title="새창열림">W3C Media Queries Level 4</a></li>
      			<li className="reference"><a href="https://www.w3.org/TR/css-contain-3/#container-queries" target="_blank" rel="noreferrer" className="fas" title="새창열림">W3C CSS Containment Module Level 3 - Container Queries</a></li>
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

export default CssMediaPart2Page
