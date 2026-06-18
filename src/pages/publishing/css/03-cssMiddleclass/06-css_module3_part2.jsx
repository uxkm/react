import { usePageMeta } from '@/components/common/PageMeta'
import '../../../../assets/css/css_module3_part2.scss'
import PublishingPartTabs from '@/components/docs/PublishingPartTabs'
import { IMG } from '@/config/path'
import { Suspense, lazy } from 'react'
const UkEditorTarget = lazy(() => import('@/components/code/UkEditorTarget'))
function EditorFallback() { return <div className="uk_editor min_height_300" aria-hidden /> }
import CodeBlock from '@/components/code/CodeBlock'

const PAGE_LAYOUT = {
  mainClass: "css_module3_part2",
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
  title: "CSS3 Module part-2",
  description: "CSS3 Module Level 3은 W3C에서 제공하는 CSS(Cascading Style Sheets) 모듈화 표준으로, 기존 CSS2의 기능을 확장하고 새로운 사용자 인터페이스 및 계산 기능을 제공합니다. 이 페이지에서는 CSS basic user interface module Level 3의 사용자 인터페이스 관련 속성, CSS3 gradient를 활용한 선형 및 방사형 그라디언트 구현 방법, calc() 함수를 사용한 동적 크기 계산 방법을 함께 소개합니다.",
  keyword: "style, css, Cascading Style Sheets, css3, 모듈, level3, css3에 신규 추가된 속성, CSS3 gradiant, calc()",
}

function CssModule3Part2Page() {
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
      			<b className="t_blue">CSS3 Module part-2</b>에서는 CSS3 모듈의 속성 중<br />
      		</p>
      		<ul className="dot_lst indent_small">
      			<li className="before_note"><b>CSS basic user interface module Level 3</b></li>
      			<li className="before_note"><b>CSS3 gradient</b></li>
      			<li className="before_note"><b>calc()</b>에 대한 내용을 다루고 있습니다.</li>
      		</ul>
      		
      	</blockquote>

      	
      	<section className="txt_ex indent mt_xxl">
      		<h2 className="ml_mn">CSS basic user interface module Level 3</h2>

      		
      		<article className="indent mt_l">
      			<h3 className="ml_mn"><i className="t_blue">outline-offset</i> 속성</h3>
      			<p className="mt_m">
      				요소의 가장자리 또는 경계의 간격을 설정합니다.
      			</p>
      			
      <CodeBlock title="outline-offset" language="javascript" className="uk_gist_code_box mt_m">
      {`div {
      						/* <length> values */
      						outline-offset: 3px;
      						outline-offset: 0.2em;

      						/* Global values */
      						outline-offset: inherit;
      						outline-offset: initial;
      						outline-offset: unset;
      					}`}
      </CodeBlock>


      			<div className="view_editor edit_code mt_l">
      				<h4 className="ve_tit">outline-offset 예제</h4>
      				<Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="css/step02/3.6.css3-module/3.6.4.css3-outline-offset.html" className="uk_editor indent mt_m min_height_500 mb_result_height_450" mode="htmlmixed" theme="moxer" browser="default" result minHeight="500px" mbResultHeight="450px" />
      </Suspense></div>

      			<aside className="browser_support mt_m" data-tit="outline-offset">
      				<ul>
      					<li className="ie false">지원안함</li>
      					<li className="edge">15.0</li>
      					<li className="chrome">1.0</li>
      					<li className="firefox">1.5</li>
      					<li className="opera">9.5</li>
      					<li className="safari">1.2</li>
      				</ul>
      			</aside>
      		</article>
      	</section>

      	
      	<section className="txt_ex indent mt_xxl">
      		<h2 className="ml_mn">CSS3 gradient</h2>

      		<blockquote className="uk_note css_gradiant_note mt_l" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				그래디언트(gradient)란 둘 이상의 색 사이의 색상 표현을 부드럽게 전환해주는 효과를 의미합니다.<br />
      				CSS3 이전에는 그래디언트 효과를 나타내기 위해서 별도의 여러 이미지 파일을 사용해야만 했지만, CSS3에서는 웹 브라우저가 간단히 그래디언트 효과를 나타낼 수 있게 해줍니다.
      			</p>
      			<p className="mt_s">
      				CSS3에서 제공하는 그래디언트는 다음과 같이 두 가지 형태가 있습니다.<br />
      				선형 그래디언트(linear gradients), 원형 그래디언트(radial gradients)
      			</p>
      		</blockquote>

      		
      		<article className="indent mt_xl">
      			<h3 className="ml_mn"><i className="t_blue">선형 그래디언트</i>(linear gradients) <i className="fab fa-css3-alt"></i></h3>
      			<p className="mt_m">
      				<strong className="t_black">CSS Module Level 3</strong><br />
      				선형 그래디언트(linear gradient)는 적용된 HTML 요소에 선형으로 그래디언트(gradient) 효과를 적용시킵니다.<br />
      				선형 그래디언트를 만들기 위해서는 최소한 두 개 이상의 색상 지정점이 필요하며, 각 색상 지정점에는 그래디언트 효과로 부드럽게 전환하고 싶은 색상을 명시합니다.<br />
      				가장 먼저 정의된 색상 지정점이 시작점이 되며, 마지막 지정점까지 차례대로 그래디언트 효과가 적용됩니다.<br />
      				브라우저 호환성을 위해 가장 먼저 나오는 <code>background</code> 속성은 <code>linear-gradient</code>를 지원하지 않는 브라우저를 위한 것이며, 벤더 프리픽스로 작성된 코드 다음에 CSS 표준 문법 코드를 작성해야 합니다.
      			</p>
      			
      <CodeBlock title="linear gradients" language="javascript" className="uk_gist_code_box mt_m">
      {`/* 위 설명글 배경에 적용 된 gradient 코드 */
      					div {
      						background: linear-gradient(to right, #1e73ff, green);

      						/* 구형 브라우저 지원용 (현재는 대부분 불필요 - 이하 예제에서는 생략) */
      						/* background: -webkit-linear-gradient(left, #1e73ff, green); */
      						/* background: -moz-linear-gradient(left, #1e73ff, green); */
      						/* background: -o-linear-gradient(left, #1e73ff, green); */
      					}`}
      </CodeBlock>


      			<figure className="img_figure mt_m">
      				<img src={`${IMG.CSS}/cssMiddleclass/uxkm_linear-gradient.svg`} alt="선형 그레이디언트의 구성" />
      				<figcaption>[선형 그레이디언트의 구성]</figcaption>
      			</figure>

      			<div className="ol_lst indent mt_m">
      				<ol>
      					<li className="line_code font14">
      						<strong className="mb_sm">선형 그래디언트의 진행 방향 설정</strong>
      						<p>
      							선형 그래디언트 효과가 진행될 방향을 설정할 수 있습니다.<br />
      							선형 그래디언트(linear gradient) 효과의 기본 진행 방향은 위쪽에서 아래쪽으로 진행됩니다.
      						</p>
      						
      <CodeBlock title="linear gradients" language="javascript" className="uk_gist_code_box mt_2">
      {`/* 기본. 위에서 아래로 진행(↓) */
      								div {
      									background: linear-gradient(red, blue);
      								}`}
      </CodeBlock>


      						<p className="mt_ms">
      							그래디언트의 진행 방향은 top, right, bottom, left 뿐만 아니라 대각선으로도 설정할 수 있습니다.
      						</p>
      						
      <CodeBlock title="linear gradients" language="javascript" className="uk_gist_code_box mt_2">
      {`/* 오른쪽에서 왼쪽으로 진행(←) */
      								div {
      									background: linear-gradient(to left, red, blue);
      								}

      								/* 오른쪽 아래에서 왼쪽 위로 진행(↖) */
      								div {
      									background: linear-gradient(to top left, red, blue);
      								}`}
      </CodeBlock>


      						<p className="mt_ms">
      							선형 그래디언트 효과의 진행 방향을 각도로 명시하여 설정할 수도 있습니다.<br />
      							각도가 양수일 때는 기준 각도를 중심으로 시계방향으로 회전하며, 음수일 때는 반시계방향으로 회전합니다.<br />
      							기준 각도인 0도(12시 방향)는 시계 중심에서 위쪽<code>(↑)</code>으로의 진행을 의미합니다.<br />
      							<span className="t_black">ex) <code>45deg(↗)</code>, <code>135deg(↘)</code>, <code>225deg(↙)</code>, <code>315deg(↖)</code></span>
      						</p>
      						
      <CodeBlock title="linear gradients" language="javascript" className="uk_gist_code_box mt_2">
      {`/* 45도를 기준으로 진행(↗) */
      								div {
      									background: linear-gradient(45deg, red, blue);
      								}`}
      </CodeBlock>

      					</li>
      					<li className="line_code font14 mt_m">
      						<strong className="mb_sm">선형 그래디언트의 투명도 설정</strong>
      						<p>
      							CSS3에서는 그래디언트의 투명도를 지원하며, 지정된 색상이 서서히 사라지는 효과를 사용할 수 있습니다.<br />
      							그래디언트에 투명도를 추가할 때에는 RGBA 색상값을 사용하면 됩니다.<br />
      							RGBA 색상값의 알파 채널 값은 완전한 투명 상태인 0.0부터 투명도가 전혀 없는 1.0 사이의 값을 가집니다.
      						</p>
      						
      <CodeBlock title="linear gradients" language="javascript" className="uk_gist_code_box mt_2">
      {`/* 45도(↗)를 기준으로, 빨강색으로 시작하여 50%만큼 투명한 파랑색으로 진행됩니다. */
      								div {
      									background: linear-gradient(45deg, rgba(255,0,0,1), rgba(0,0,255,0.5));
      								}`}
      </CodeBlock>

      					</li>
      					<li className="line_code font14 mt_m">
      						<strong className="mb_sm">반복 그래디언트(Repeating Gradients)</strong>
      						<p>repeating-linear-gradient() 메소드는 선형 그래디언트 효과가 계속 반복되도록 설정합니다.</p>
      						
      <CodeBlock title="linear gradients" language="javascript" className="uk_gist_code_box mt_2">
      {`div {
      									background: repeating-linear-gradient(150deg, red, white 10%, blue 20%);
      								}`}
      </CodeBlock>

      					</li>
      				</ol>
      			</div>

      			<div className="view_editor edit_code mt_l">
      				<h4 className="ve_tit">선형 그래디언트(linear gradients) 예제</h4>
      				<Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="css/step02/3.6.css3-module/3.6.5.css3-linear-gradients-css.html" className="uk_editor indent mt_m min_height_600 mb_result_height_650" mode="htmlmixed" theme="moxer" browser="default" result minHeight="600px" mbResultHeight="650px" />
      </Suspense></div>
      		</article>

      		
      		<article className="indent mt_xl">
      			<h3 className="ml_mn"><i className="t_blue">원형 그래디언트</i>(radial gradients) <i className="fab fa-css3-alt"></i></h3>
      			<p className="mt_m">
      				<strong className="t_black">CSS Module Level 3</strong><br />
      				원형 그래디언트(radial gradient)는 적용된 HTML 요소에 원형으로 그래디언트(gradient) 효과를 적용시킵니다.<br />
      				원형 그래디언트를 만들기 위해서는 최소한 두 개 이상의 색상 지정점이 필요하며, <code>background: radial-gradient(모양 크기 at 중심점, 색상지정점1, 색상지정점2, ...);</code> 형태로 사용합니다.<br />
      				원형 그래디언트는 기본적으로 모양은 <code>ellipse</code>(타원), 크기는 <code>farthest-corner</code>, 중심좌표는 <code>center</code>로 설정됩니다.
      			</p>
      			
      <CodeBlock title="radial gradients" language="javascript" className="uk_gist_code_box mt_m">
      {`div {
      						background: radial-gradient(red, orange, yellow, green, blue, indigo, purple);
      					}`}
      </CodeBlock>


      			<div className="ol_lst indent mt_m">
      				<ol>
      					<li className="line_code font14">
      						<strong className="mb_sm">색상 지정점 사이의 간격 조절</strong>
      						<p>원형 그래디언트에서 색상 지정점 사이의 간격을 조절할 수 있습니다.</p>
      						
      <CodeBlock title="radial gradients" language="javascript" className="uk_gist_code_box mt_2">
      {`div {
      									background: radial-gradient(red 5%, yellow 20%, orange 50%);
      								}`}
      </CodeBlock>

      					</li>
      					<li className="line_code font14 mt_m">
      						<strong className="mb_sm">원형 그래디언트의 모양 설정</strong>
      						<p>원형 그래디언트의 모양을 타원이 아닌 원으로도 설정할 수 있습니다.</p>
      						
      <CodeBlock title="radial gradients" language="javascript" className="uk_gist_code_box mt_2">
      {`div {
      									background: radial-gradient(circle, red, yellow, orange);
      								}`}
      </CodeBlock>

      					</li>
      					<li className="line_code font14 mt_m">
      						<strong className="mb_sm">원형 그래디언트의 크기 설정</strong>
      						<p>CSS를 이용하면 원형 그래디언트의 크기를 설정할 수 있다. 이때 크기를 나타내기 위해 사용할 수 있는 매개변수는 다음과 같습니다.</p>

      						<ol className="mt_s">
      							<li className="line_code indent">
      								<span className="ml_mn t_black">3.1. closest-side</span>
      								<p>원형 그래디언트의 크기가 가장 가까운 면에 닿을 만큼의 크기로 설정됩니다.</p>
      							</li>
      							<li className="line_code indent mt_s">
      								<span className="ml_mn t_black">3.2. farthest-side</span>
      								<p>원형 그래디언트의 크기가 가장 먼 면에 닿을 만큼의 크기로 설정됩니다. 따라서 가까운 면에서는 그래디언트의 일부분이 화면을 넘을 것입이다.</p>
      							</li>
      							<li className="line_code indent mt_s">
      								<span className="ml_mn t_black">3.3. closest-corner</span>
      								<p>원형 그래디언트의 크기가 가장 가까운 모서리에 닿을 만큼의 크기로 설정됩니다.</p>
      							</li>
      							<li className="line_code indent mt_s">
      								<span className="ml_mn t_black">3.4. farthest-corner</span>
      								<p>원형 그래디언트의 크기가 가장 먼 모서리에 닿을 만큼의 크기로 설정됩니다. 이 크기가 기본 설정이며, 가까운 모서리에서는 그래디언트의 일부분이 화면을 넘을 것입이다.</p>
      							</li>
      						</ol>
      						
      <CodeBlock title="radial gradients" language="javascript" className="uk_gist_code_box mt_ms">
      {`.box1 { background: radial-gradient(closest-side at 35% 35%, red, yellow, orange); }
      								.box2 { background: radial-gradient(farthest-side at 35% 35%, red, yellow, orange); }
      								.box3 { background: radial-gradient(closest-corner at 35% 35%, red, yellow, orange); }
      								.box4 { background: radial-gradient(farthest-corner at 35% 35%, red, yellow, orange); }`}
      </CodeBlock>

      					</li>
      					<li className="line_code font14 mt_m">
      						<strong className="mb_sm">반복 그래디언트(Repeating Gradients)</strong>
      						<p><code>repeating-radial-gradient()</code> 메소드는 원형 그래디언트 효과가 계속 반복되도록 설정합니다.</p>
      						
      <CodeBlock title="radial gradients" language="javascript" className="uk_gist_code_box mt_2">
      {`div {
      									background: repeating-radial-gradient(red, white 10%, blue 20%);
      								}`}
      </CodeBlock>

      					</li>
      				</ol>
      			</div>
      		</article>

      		<article className="view_editor edit_code mt_xl">
      			<h3 className="ve_tit">CSS3 그래디언트 예제</h3>
      			<Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="css/step02/3.6.css3-module/3.6.5.css3-linear-gradients.html" className="uk_editor indent mt_m min_height_500 mb_result_height_500" mode="htmlmixed" theme="moxer" browser="default" result minHeight="500px" mbResultHeight="500px" />
      </Suspense>
      		</article>

      		<aside className="browser_support mt_xl" data-tit="gradient">
      			<ul>
      				<li className="ie">10+</li>
      				<li className="edge">12.0</li>
      				<li className="chrome">26.0</li>
      				<li className="firefox">16.0</li>
      				<li className="opera">12.1</li>
      				<li className="safari">6.1</li>
      			</ul>
      		</aside>

      		<aside className="reference_box mt_xl">
      			<strong className="tit">gradients 참조</strong>
      			<ul className="link_lst">
      				<li className="reference"><a href="https://drafts.csswg.org/css-images-3/#gradients" target="_blank" rel="noreferrer" className="fas" title="새창열림">W3C CSS Images Module Level 3</a></li>
      				<li className="reference"><a href="https://developer.mozilla.org/ko/docs/Web/CSS/gradient" target="_blank" rel="noreferrer" className="fas" title="새창열림">MDN gradient</a></li>
      				<li className="reference"><a href="https://www.colorzilla.com/gradient-editor/" target="_blank" rel="noreferrer" className="fas" title="새창열림">gradient-editor</a></li>
      				<li className="reference"><a href="http://www.css3generator.com/" target="_blank" rel="noreferrer" className="fas" title="새창열림">css3generator.com</a></li>
      				<li className="reference"><a href="https://www.cssmatic.com/box-shadow" target="_blank" rel="noreferrer" className="fas" title="새창열림">cssmatic.com</a></li>
      			</ul>
      		</aside>
      	</section>

      	
      	<section className="txt_ex indent mt_xxl">
      		<h2 className="ml_mn">calc()</h2>
      		<p className="mt_l">
      			<strong className="t_black">CSS Values and Units Module Level 3</strong><br />
      			<code>calc()</code> CSS 함수를 사용하면 CSS 속성의 값으로 계산식을 지정할 수 있습니다.<br />
      			<code>&lt;length&gt;</code>, <code>&lt;frequency&gt;</code>, <code>&lt;angle&gt;</code>, <code>&lt;time&gt;</code>, <code>&lt;percentage&gt;</code>, <code>&lt;number&gt;</code>, 또는 <code>&lt;integer&gt;</code>를 받는 속성의 값으로 사용할 수 있습니다.<br />
      			<code>calc()</code> 함수는 매개변수로 표현식 하나를 받고, 표현식의 결과가 최종 값이 됩니다. 표현식은 단순 계산식은 무엇이든 가능하며, 표준 연산자 우선순위를 따릅니다.<br />
      			피연산자로는 <code>&lt;length&gt;</code> 구문의 아무 값이나 사용할 수 있고, 원한다면 서로 다른 단위끼리도 계산할 수 있으며, 괄호를 사용해서 연산 순서를 바꿀 수도 있습니다.
      		</p>

      		<div className="ol_lst indent mt_ms">
      			<ol>
      				<li className="line_code font14"><strong>+ 덧셈.</strong></li>
      				<li className="line_code font14 mt_sm"><strong>- 뺄셈.</strong></li>
      				<li className="line_code font14 mt_sm">
      					<strong className="mb_sm">* 곱셈.</strong>
      					<p>하나 이상의 피연산자가 <code>&lt;number&gt;</code>여야 합니다.</p>
      				</li>
      				<li className="line_code font14 mt_sm">
      					<strong className="mb_sm">/ 나눗셈.</strong>
      					<p>오른쪽 피연산자는 <code>&lt;number&gt;</code>여야 합니다.</p>
      				</li>
      			</ol>
      		</div>

      		<div className="ol_lst indent mt_ml">
      			<p className="font-16 weight-500 ml_mn t_black"><b>calc() 계산순서</b></p>
      			<ol className="mt_s">
      				<li>왼쪽에서 오른쪽으로 계산합니다.</li>
      				<li>사칙연산과 마찬가지로 곱셈(<code>*</code>), 나눗셈(<code>/</code>)이 먼저 연산되며, 덧셈(<code>+</code>), 뺄셈(<code>-</code>)은 나중에 연산됩니다.</li>
      				<li>괄호가 있으면 괄호 안부터 계산합니다.</li>
      			</ol>
      		</div>

      		<div className="ol_lst indent mt_ml">
      			<p className="font-16 weight-500 ml_mn t_black"><b>calc() CSS 함수 사용시 참고사항은 아래와 같습니다.</b></p>
      			<ol className="mt_s">
      				<li>0으로 나누면 CSS 파서에서 오류가 발생합니다.</li>
      				<li>
      					<code>calc(100% - 20px)</code>과 같이 덧셈(<code>+</code>), 뺄셈(<code>-</code>) 연산자의 경우 앞뒤 공백이 반드시 필요하지만, 곱셈(<code>*</code>), 나눗셈(<code>/</code>)은 공백이 필요하지 않습니다.<br />
      					하지만 일관성을 유지하기 위해 모든 연산자에 공백을 사용하는 것을 권장합니다.
      				</li>
      				<li>
      					<code>calc(50% -8px)</code>은 백분율 값과 음수 길이로 해석되어 유효하지 않지만, <code>calc(50% - 8px)</code>은 백분율과 길이의 뺄셈으로 해석됩니다.<br />
      					마찬가지로, <code>calc(8px + -50%)</code>는 길이와 음의 백분율 간의 덧셈으로 처리됩니다.
      				</li>
      				<li>표의 행, 열, 행/열 그룹, 자동이나 고정 레이아웃 칸에서 백분율을 포함한 수학식을 너비나 높이로 사용하면 <code>auto</code> 키워드를 사용한 것과 동일하게 처리됩니다.</li>
      				<li><code>calc()</code> 함수를 중첩해서 사용하면 내부의 <code>calc()</code>는 단순한 괄호로 간주됩니다.</li>
      			</ol>
      		</div>
      		
      		
      <CodeBlock title="calc()" language="javascript" className="uk_gist_code_box mt_ml">
      {`/* 전체 너비에서 100px만큼만 작은 크기를 구할 때 */
      				.box1 {
      					width: calc(100% - 100px);
      				}

      				/* 전체 너비에서 중간에 60px 만 띄우고 싶을 경우 */
      				.box1, .box2 {
      					float: left;
      					width: calc(50% - 30px);
      				}
      				.box2 { margin-left: 60px;}

      				/* 각 요소 사이에 글꼴의 4배(4em) 만큼 간격을 두고 싶을때 */
      				.box1, .box2 {
      					width: calc(50% - 2em);
      				}

      				/* 두 요소를 2px의 테두리로 둘러싸고 싶을때 */
      				.box1, .box2 {
      					width: calc(50% - 2em - 4px);
      					border: 2px solid #000;
      				}

      				/* 복잡한 연산공식을 사용해야 하는 경우 */
      				.box1, .box2 {
      					width: calc((50% + 2em)/2 + 14px);
      				}`}
      </CodeBlock>


      		<article className="view_editor edit_code mt_xl">
      			<h3 className="ve_tit">calc() 예제1</h3>
      			<Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="css/step02/3.6.css3-module/3.6.6.css3-calc.html" className="uk_editor indent mt_m min_height_500 mb_result_height_450" mode="htmlmixed" theme="moxer" browser="default" result minHeight="500px" mbResultHeight="450px" />
      </Suspense>
      		</article>

      		<article className="view_editor edit_code mt_xl">
      			<h3 className="ve_tit">calc() 예제2</h3>
      			<Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="css/step02/3.6.css3-module/3.6.6.css3-calc2.html" className="uk_editor indent mt_m min_height_470 mb_result_height_450" mode="htmlmixed" theme="moxer" browser="default" result minHeight="470px" mbResultHeight="450px" />
      </Suspense>
      		</article>

      		<aside className="browser_support mt_xl" data-tit="calc()">
      			<ul>
      				<li className="ie">9+</li>
      				<li className="edge">12.0</li>
      				<li className="chrome">26.0</li>
      				<li className="firefox">16.0</li>
      				<li className="opera">15.0</li>
      				<li className="safari">7.0</li>
      			</ul>
      		</aside>

      		<aside className="reference_box mt_l">
      			<strong className="tit">calc() 참조</strong>
      			<ul className="link_lst">
      				<li className="reference"><a href="https://www.w3.org/TR/css-values-3/#calc" target="_blank" rel="noreferrer" className="fas" title="새창열림">W3C CSS Values and Units Module Level 3</a></li>
      				<li className="reference"><a href="https://developer.mozilla.org/ko/docs/Web/CSS/calc" target="_blank" rel="noreferrer" className="fas" title="새창열림">MDN calc()</a></li>
      				<li className="reference"><a href="https://www.sitepoint.com/css3-calc-function/" target="_blank" rel="noreferrer" className="fas" title="새창열림">sitepoint css3-calc-function</a></li>
      				<li className="reference"><a href="https://www.hongkiat.com/blog/css3-calc-function/" target="_blank" rel="noreferrer" className="fas" title="새창열림">hongkiat.com css3-calc-function</a></li>
      				<li className="reference"><a href="https://meiert.com/en/indices/css-properties/" target="_blank" rel="noreferrer" className="fas" title="새창열림">css-properties</a></li>
      			</ul>
      		</aside>
      	</section>

      	<figure className="img_figure indent mt_l">
      		<img src={`${IMG.CSS}/03_css_06_2.png`} alt="CSS3 Module" />
      		<figcaption className="reference">
      			CSS3 Module
      		</figcaption>
      	</figure>

      	<aside className="reference_box mt_xxl">
      		<h2 className="tit">CSS3 모듈 참조</h2>
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

export default CssModule3Part2Page
