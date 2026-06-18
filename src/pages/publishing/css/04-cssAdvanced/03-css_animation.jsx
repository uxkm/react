import { usePageMeta } from '@/components/common/PageMeta'
import '../../../../assets/css/css_animation.scss'
import { IMG } from '@/config/path'
import { Suspense, lazy } from 'react'
const UkEditorTarget = lazy(() => import('@/components/code/UkEditorTarget'))
function EditorFallback() { return <div className="uk_editor min_height_300" aria-hidden /> }
import CodeBlock from '@/components/code/CodeBlock'

const PAGE_LAYOUT = {
  mainClass: "css_animation",
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
  title: "Animation",
  description: "CSS의 animation 속성은 요소의 현재 스타일을 다른 스타일로 천천히 변화시킬 수 있게 해주며, 애니메이션을 만들기 위해서는 먼저 @keyframes로 키 프레임을 설정해야 합니다. 이 페이지에서는 애니메이션 이름을 지정하는 animation-name, 애니메이션 지속 시간을 설정하는 animation-duration, 시간에 따른 변화 속도를 제어하는 animation-timing-function, 애니메이션 반복 횟수를 설정하는 animation-iteration-count, 애니메이션 실행 방향을 설정하는 animation-direction, 애니메이션 시작 지연 시간을 설정하는 animation-delay, 애니메이션 적용 후 상태를 설정하는 animation-fill-mode와 animation 축약형 속성, @keyframes 규칙을 함께 소개합니다.",
  keyword: "style, css, Cascading Style Sheets, animation, key frame",
}

function CssAnimationPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  })

  return (
    <>
      <blockquote className="ani_note uk_note mt_xxl" role="note">
      		<strong className="sound_only">요약 설명</strong>
      		<p>
      			<strong className="t_black">CSS3</strong>에서는 <code>animation</code> 속성을 사용하여 요소의 현재 스타일을 다른 스타일로 천천히 변화시킬 수 있습니다.<br />
      			<strong className="t_black">CSS2</strong>에서는 이러한 효과를 표현하기 위해서는 자바스크립트나 플래시 등의 외부 플러그인을 사용해야만 했지만, <strong className="t_black">CSS3</strong>에서는 이러한 애니메이션 효과를 손쉽게 적용할 수 있게 되었습니다.<br />
      			애니메이션을 만들기 위해서는 가장 먼저 키 프레임을 설정(<code>@keyframes</code>)해야 합니다.<br />
      			키 프레임(<code>@keyframes</code>)은 전환(화면 이동) 효과가 발생하는 시작점과 종료점입니다.<br />
      			가장 간단한 형태의 애니메이션은 시작 프레임과 종료 프레임이라는 2개의 키 프레임으로 만들어지지만, 더 복잡한 애니메이션을 만들 경우에는 그 사이에 몇 개의 키 프레임을 더 추가하여 사용할 수 있습니다.<br />
      			CSS 전환(화면 이동) 효과인 <code>transition</code>은 사실상 2개의 키 프레임만을 사용한다고 할 수 있고, 이 점이 애니메이션과 구분되는 점입니다.
      		</p>
      	</blockquote>

      	
      	<section className="txt_ex indent mt_xxl">
      		<h2 className="ml_mn">animation 속성 <i className="t_blue">요약</i></h2>
      			<p className="mt_l"><code>animation</code>의 모든 속성에 대한 요약입니다. 아래 속성 설명에 각 속성에 대한 자세한 설명이 있습니다.</p>
      		<ol className="ol_lst mt_ms indent">
      			<li><code className="t_black weight-500">animation-name</code> : 선언된 애니메이션(<code className="bg_none">@keyframes</code>) 이름 선언합니다.</li>
      			<li><code className="t_black weight-500">animation-duration</code> : <code>ms</code> 단위로 실행되는 시간을 지정합니다.</li>
      			<li><code className="t_black weight-500">animation-timing-function</code> : <code className="bg_none">linear, ease</code> 등의 시간에 따른 변화 가감속 속도를 지정합니다.</li>
      			<li><code className="t_black weight-500">animation-iteration-count</code> : 애니메이션의 반복 효과 횟수 지정합니다. (기본값은 1)</li>
      			<li><code className="t_black weight-500">animation-direction</code> : 애니메이션이 반복되는 동안 실행되는 순서를 지정합니다. (기본은 <code className="bg_none">normal</code>, 반대라면 <code className="bg_none">alternate</code>, 무한반복 <code className="bg_none">infinite</code>)</li>
      			<li><code className="t_black weight-500">animation-delay</code> : 애니메이션 실행 시작 전에 실행 지연(유예) 시간을 지정합니다.</li>
      			<li><code className="t_black weight-500">animation-fill-mode</code> : 애니메이션의 적용 후에 대상의 상태를 지정합니다. (<code className="bg_none">backward, forward, both, none</code>)</li>
      			<li><code className="t_black weight-500">animation-play-state</code> : 실행중인 애니메이션을 멈추거나 다시 재생할 수 있습니다.</li>
      		</ol>
      	</section>

      	
      	<section className="txt_ex indent mt_xxl">
      		<h2 className="ml_mn">animation 속성 <i className="t_blue">상세</i></h2>
      		<p className="mt_l"><code>animation</code> CSS 속성은 다수의 스타일을 전환하는 애니메이션을 적용합니다.</p>

      		<ul className="ol_lst">
      			
      			<li className="tit_h3 mt_l">
      				<h3><i className="t_blue">animation-name</i> 속성 <i className="t_red">(필수 선언)</i></h3>
      				<p className="mt_ms">
      					애니메이션 효과의 이름을 설정합니다.<br />
      					<code>@keyframes</code> 규칙에서 정의된 이름을 사용하며, 여러 개의 애니메이션 이름을 콤마(,)로 구분하여 사용할 수 있습니다.<br />
      					애니메이션을 막으려면 <code>none</code>을 사용합니다.
      				</p>
      				
      <CodeBlock title="animation-name" language="javascript" className="uk_gist_code_box mt_m">
      {`div {
      							animation-name: myName;
      						}
      						@keyframes myName {
      							0% { … }
      							100% { … }
      						}
      						/* 위의 myName은 예시이며 목적에 맞는 이름을 자유롭게 지정할 수 있습니다. */`}
      </CodeBlock>

      			</li>

      			
      			<li className="tit_h3 mt_xl">
      				<h3><i className="t_blue">animation-duration</i> 속성 <i className="t_red">(필수 선언)</i></h3>
      				<p className="mt_ms">
      					애니메이션 효과를 재생할 시간을 설정합니다.<br />
      					<code>@keyframes</code>에서 선언한 0%부터 100%까지의 움직임을 몇 초에 걸쳐 구현할지를 정합니다.<br />
      					<code>ms</code> 또는 <code>s</code> 단위를 사용하며, 음수 값은 0으로 간주됩니다.
      				</p>
      				
      <CodeBlock title="animation-duration" language="javascript" className="uk_gist_code_box mt_m">
      {`div {
      							animation-duration: 1s; /* 1s = 1000ms */
      						}`}
      </CodeBlock>

      			</li>

      			
      			<li className="tit_h3 mt_xl">
      				<h3><i className="t_blue">animation-delay</i> 속성</h3>
      				<p className="mt_ms">
      					애니메이션 효과가 나타나기까지의 지연 시간을 설정하며,
      					<code>ms</code> 또는 <code>s</code> 단위를 사용합니다.<br />
      					양수 값은 그만큼 지연 시간을 의미하며, 음수 값을 사용하면 애니메이션이 즉시 시작되며 애니메이션의 중간 지점부터 재생됩니다. 예를 들어, <code>animation-duration: 5s</code>이고 <code>animation-delay: -2s</code>인 경우, 애니메이션은 즉시 시작되지만 2초 지점(40%)부터 재생됩니다.<br />
      					<i className="t_blue weight-500">※ 기본값은 0이며, 지연시간이 필요 없으면 생략 가능합니다.</i>
      				</p>
      				
      <CodeBlock title="animation-delay" language="javascript" className="uk_gist_code_box mt_m">
      {`div {
      							animation-delay: 1s; /* 1s = 1000ms */
      						}`}
      </CodeBlock>

      			</li>

      			
      			<li className="tit_h3 mt_xl">
      				<h3><i className="t_blue">animation-iteration-count</i> 속성</h3>
      				<p className="mt_ms">
      					애니메이션 효과가 몇 번 반복될지를 설정합니다.<br />
      					숫자(양의 정수)와 <code>infinite</code>(무한 반복)만 선언 가능하며, 0이나 음수는 재생되지 않습니다.<br />
      					<i className="t_blue weight-500">※ 기본값은 1이며, 기본값으로 사용할 경우 생략 가능합니다.</i>
      				</p>
      				
      <CodeBlock title="animation-iteration-count" language="javascript" className="uk_gist_code_box mt_m">
      {`div {
      							animation-iteration-count: count(숫자 또는 infinite);
      						}`}
      </CodeBlock>

      			</li>

      			
      			<li className="tit_h3 mt_xl">
      				<h3><i className="t_blue">animation-direction</i> 속성</h3>
      				<p className="mt_ms">
      					애니메이션의 진행 방향을 설정합니다.<br />
      					한 사이클(0%부터 100%)이 종료된 후 다음 반복 때 어떤 방향으로 움직임을 이어 나갈지 정의합니다.<br />
      					<i className="t_blue weight-500">※ 기본값은 normal이며, 기본값으로 사용할 경우 생략 가능합니다.</i>
      				</p>
      				
      <CodeBlock title="animation-direction" language="javascript" className="uk_gist_code_box mt_ms">
      {`div {
      							animation-direction: normal | alternate | reverse | alternate-reverse;
      						}`}
      </CodeBlock>

      				<ol className="ol_lst_second indent mt_m">
      					<li><strong className="t_black weight-500">normal</strong> : 기본값으로 한 사이클이 끝나도 같은 방향으로 움직입니다.</li>
      					<li><strong className="t_black weight-500">alternate</strong> : 한 사이클이 끝나면 역방향으로 움직입니다.</li>
      					<li><strong className="t_black weight-500">reverse</strong> : 처음부터 역방향으로 움직입니다.</li>
      					<li><strong className="t_black weight-500">alternate-reverse</strong> : 처음부터 역방향으로 움직이고, 한 사이클이 끝나면 정상 방향으로 움직입니다.(alternate의 반대)</li>
      				</ol>
      			</li>

      			
      			<li className="tit_h3 mt_xl">
      				<h3><i className="t_blue">animation-fill-mode</i> 속성</h3>
      				<p className="mt_ms">
      					애니메이션이 재생되기 전과 종료된 후의 요소 상태를 정의합니다.<br />
      					기본적으로 애니메이션이 시작되기 전에는 요소의 원래 CSS 위치에 있고, 종료 후에는 다시 원래 위치로 돌아갑니다. 하지만 애니메이션이 끝난 후 최종 상태를 유지하거나, 시작 전에 첫 번째 키프레임 상태로 미리 설정하고 싶을 때 이 속성을 사용합니다.<br />
      					요소의 CSS 위치와 <code>@keyframes</code> 위치 중 어느 것을 기준으로 할지 결정합니다.<br />
      					<i className="t_blue weight-500">※ 기본값은 none이며, 기본값으로 사용할 경우 생략 가능합니다.</i>
      				</p>
      				
      <CodeBlock title="animation-fill-mode" language="javascript" className="uk_gist_code_box mt_m">
      {`div {
      							animation-fill-mode: normal | forwards | backwards | both;
      						}`}
      </CodeBlock>

      				<ol className="ol_lst_second indent mt_m">
      					<li><strong className="t_black weight-500">normal</strong> : 대기(CSS 위치) {'>'} 시작(@keyframes 위치) {'>'} 종료(CSS 위치)</li>
      					<li><strong className="t_black weight-500">forwards</strong> : 대기(CSS 위치) {'>'} 시작(@keyframes 위치) {'>'} 종료(그대로 유지)</li>
      					<li><strong className="t_black weight-500">backwards</strong> : 대기(@keyframes 위치) {'>'} 시작(@keyframes 위치) {'>'} 종료(CSS 위치)</li>
      					<li><strong className="t_black weight-500">both</strong> : 대기(@keyframes 위치) {'>'} 시작(@keyframes 위치) {'>'} 종료(그대로 유지)</li>
      				</ol>
      				
      <CodeBlock title="animation-fill-mode" language="javascript" className="uk_gist_code_box mt_m">
      {`div {
      							left: 50px; //대기(CSS 위치)
      							animation-name: myName;
      							animation-duration: 1s;
      							animation-fill-mode: normal;
      						}
      						@keyframes myName {
      							0% { left: 0%; } //시작(@keyframes 위치)
      							100% { left: 100%; }
      						}`}
      </CodeBlock>

      			</li>

      			
      			<li className="tit_h3 mt_xl">
      				<h3><i className="t_blue">animation-play-state</i> 속성</h3>
      				<p className="mt_ms">
      					애니메이션 효과의 재생 상태를 설정합니다. 정지(<code>paused</code>)와 재생(<code>running</code>)을 제어할 수 있으며, 마우스 오버(hover) 또는 JavaScript 이벤트와 함께 사용합니다.<br />
      					<b className="t_red">이 속성은 축약형 문법에 포함될 수 없습니다.</b>
      				</p>
      				
      <CodeBlock title="animation-play-state" language="javascript" className="uk_gist_code_box mt_m">
      {`div {
      							animation-play-state: paused | running | initial | inherit;
      						}`}
      </CodeBlock>

      				<ol className="ol_lst_second indent mt_ms">
      					<li><strong className="t_black weight-500">paused</strong> : 애니메이션의 움직임을 정지시킵니다.</li>
      					<li><strong className="t_black weight-500">running</strong> : 정지된 애니메이션을 재생시킵니다.</li>
      				</ol>
      				
      <CodeBlock title="animation-play-state" language="javascript" className="uk_gist_code_box mt_ms">
      {`div { animation: myName 2.5s ease; }
      						div.paused { animation-play-state: paused; }
      						div.running { animation-play-state: running; }

      						@keyframes myName {
      							0% { left: 0%; }
      							100% { left: 100%; }
      						}`}
      </CodeBlock>

      			</li>
      		</ul>
      	</section>

      	
      	<section className="txt_ex indent mt_xxl">
      		<h2 className="ml_mn"><i className="t_blue">@keyframes 규칙</i></h2>
      		<blockquote className="uk_note mt_l" role="note">
      			<strong className="sound_only">@keyframes 규칙 요약 설명</strong>
      			<p>
      				<strong className="t_black">CSS3</strong>에서 애니메이션 효과를 사용하기 위해서는 우선 키 프레임(<code>@keyframes</code>)을 정의해야 합니다.<br />
      				키 프레임에는 특정한 시간에 요소가 가져야 할 CSS 스타일을 명시하며, 중간 프레임의 움직임은 자동으로 처리됩니다.<br />
      				애니메이션 효과가 동작하기 위해서는 <code>animation-name</code> 속성을 이용하여 요소와 키 프레임을 연결해야 합니다.
      			</p>
      		</blockquote>
      		<p className="mt_l">
      			키 프레임 단계를 세분화할 수 있으며, CSS 속성이 동일한 키 프레임은 콤마(,)로 그룹화할 수 있습니다.<br />
      			시점은 <code className="bg_none">%</code> 또는 <code className="bg_none">from</code>, <code className="bg_none">to</code>로 선언할 수 있으며,
      			<b><code className="bg_none weight-600">%</code> 사용을 권장합니다.</b>
      		</p>

      		
      		<div className="indent mt_xl">
      			<h3 className="ml_mn">각 프레임마다 CSS 지정</h3>
      			
      <CodeBlock title="animation [@keyframes rule]" language="javascript" className="uk_gist_code_box mt_m">
      {`@keyframes myName {
      						0% { background-color: pink; }
      						25% { background-color: brown; }
      						50% { background-color: red; }
      						75% { background-color: brown; }
      						100% { background-color: pink; }
      					}
      					/* 구형 브라우저 지원용 (현재는 대부분 불필요) */
      					/* @-webkit-keyframes myName { ... } */`}
      </CodeBlock>

      		</div>

      		
      		<div className="indent mt_xl">
      			<h3 className="ml_mn">CSS의 속성이 겹치는 경우 콤마로 구분하여 그룹화</h3>
      			
      <CodeBlock title="animation [@keyframes rule]" language="javascript" className="uk_gist_code_box mt_m">
      {`@keyframes myName {
      						0%, 100% { background-color: pink; }
      						25%, 75% { background-color: brown; }
      						50% { background-color: red; }
      					}
      					/* 구형 브라우저 지원용 (현재는 대부분 불필요) */
      					/* @-webkit-keyframes myName { ... } */`}
      </CodeBlock>

      		</div>
      	</section>

      	
      	<section className="txt_ex indent mt_xxl">
      		<h2 className="ml_mn">animation <i className="t_blue">작성 방법</i></h2>
      		<p className="mt_l">
      			모든 <code>animation</code> 속성을 한 줄로 축약하거나 각 속성별로 따로 선언할 수 있습니다.<br />
      			축약형 선언에서 <code>animation-delay</code>를 선언하려면 반드시 <code>animation-duration</code> 뒤에 선언해야 합니다.
      		</p>
      		

      		<ul className="ol_lst">
      			
      			<li className="tit_h3 mt_l">
      				<h3>속성별 선언</h3>
      				<p className="mt_ms">
      					속성별로 선언할 경우 선언 순서는 중요하지 않습니다.<br />
      					다만, 공동작업이나 추후 관리를 위해 축약형 선언의 순서에 맞춰 선언하는 것을 추천합니다.
      				</p>
      				
      <CodeBlock title="animation syntax [Declaration by attribute]" language="javascript" className="uk_gist_code_box mt_m">
      {`div {
      							animation-name: myName;
      							animation-duration: .5s;
      							animation-timing-function: ease-in;
      							animation-delay: 2s;
      							animation-iteration-count: 5;
      							animation-direction: alternate;
      						}`}
      </CodeBlock>

      			</li>

      			
      			<li className="tit_h3 mt_xl">
      				<h3>축약형 선언</h3>
      				<p className="mt_ms">
      					주로 쓰이는 방법입니다.<br />
      					대부분 하나의 객체당 하나의 <code>@keyframes</code>에 대한 <code>animation</code>을 적용하므로 이 경우 코드절약을 위해 한줄로 사용하는 것이 좋습니다.
      				</p>
      				
      <CodeBlock title="animation syntax [Abbreviated declaration]" language="javascript" className="uk_gist_code_box mt_m">
      {`div {
      							animation: ;
      						}
      						/* 위의 작성 순서는 아래와 같습니다. */
      						div {
      							animation: ;
      						}`}
      </CodeBlock>

      			</li>

      			
      			<li className="tit_h3 mt_xl">
      				<h3>복수 선언</h3>
      				<p className="mt_ms">
      					콤마(,)로 구분하여 두 개 이상의 <code>@keyframes</code> 규칙으로 정의된 애니메이션을 한 번에 선언할 수 있습니다.
      				</p>
      				
      <CodeBlock title="animation syntax [Multiple declaration]" language="javascript" className="uk_gist_code_box mt_m">
      {`div {
      							animation-name:
      								myName1 .5s 1s ease,
      								myName2 1s 2s ease-in-out both;
      						}`}
      </CodeBlock>

      			</li>

      			
      			<li className="tit_h3 mt_xl">
      				<h3>Steps 선언</h3>
      				<p className="mt_ms">
      					애니메이션의 흐름을 Step(단계)화해서 제어할 수 있습니다.<br />
      					<code>duration</code> 값과 연계해서 선언하여 일종의 Frame Rate(초당 프레임 수)를 설정하거나, 셀 애니메이션처럼 연계된 동작을 표현할 수도 있습니다.<br />
      					<code>steps(스텝 수)</code>로 선언합니다.
      				</p>
      				
      <CodeBlock title="animation syntax [Steps]" language="javascript" className="uk_gist_code_box mt_m">
      {`div {
      							animation-name: myName 60s steps(60) linear infinite;
      						}`}
      </CodeBlock>

      			</li>
      		</ul>

      		<div className="view_editor edit_code mt_xl">
      			<h3 className="ve_tit">animation 작성 예제</h3>
      			<Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="css/step03/4.3.animation/4.3.animation.html" className="uk_editor indent mt_m min_height_600" mode="htmlmixed" theme="moxer" browser="default" result minHeight="600px" />
      </Suspense></div>
      	</section>

      	
      	<section className="txt_ex indent mt_xxl">
      		<h2 className="ml_mn">접근성: <i className="t_blue">prefers-reduced-motion</i></h2>
      		<p className="mt_l">
      			일부 사용자는 움직임이나 애니메이션으로 인해 어지러움, 메스꺼움, 집중력 저하 등의 문제를 경험할 수 있습니다.<br />
      			<code>prefers-reduced-motion</code> 미디어 쿼리를 사용하면 사용자의 시스템 설정을 확인하여 애니메이션을 줄이거나 비활성화할 수 있습니다.
      		</p>
      		<p className="mt_s">
      			사용자가 시스템 설정에서 &quot;움직임 줄이기&quot; 옵션을 활성화하면, <code>prefers-reduced-motion: reduce</code>가 적용됩니다.
      		</p>
      		
      <CodeBlock title="prefers-reduced-motion" language="javascript" className="uk_gist_code_box mt_m">
      {`@keyframes slide {
      					from {
      						transform: translateX(0);
      					}
      					to {
      						transform: translateX(100px);
      					}
      				}

      				.box {
      					animation: slide 2s infinite;
      				}

      				/* 사용자가 움직임 줄이기를 선호하는 경우 */
      				@media (prefers-reduced-motion: reduce) {
      					.box {
      						animation: none;
      					}
      				}`}
      </CodeBlock>

      		<p className="mt_m">
      			<strong className="t_blue">권장사항:</strong> 모든 <code>animation</code>에 대해 <code>prefers-reduced-motion</code>을 고려하여 접근성을 향상시키세요.
      		</p>
      		<div className="view_editor edit_code mt_xl">
      			<h3 className="ve_tit">prefers-reduced-motion 예제</h3>
      			<Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="css/step03/4.3.animation/4.3.1.prefers-reduced-motion.html" className="uk_editor mt_m min_height_550 mb_result_height_570 indent" mode="htmlmixed" theme="moxer" browser="default" result minHeight="550px" mbResultHeight="570px" />
      </Suspense></div>

      		
      		<article className="indent mt_xl">
      			<h3 className="ml_mn t_blue">테스트 방법</h3>
      			<p className="mt_m">
      				<code>prefers-reduced-motion</code>을 테스트하는 방법:
      			</p>
      			<ul className="dot_lst indent mt_s">
      				<li><strong>Windows:</strong> 설정 → 접근성 → 시각 효과 → 애니메이션 효과</li>
      				<li><strong>macOS:</strong> 시스템 설정 → 접근성 → 디스플레이 → 움직임 줄이기</li>
      				<li><strong>브라우저 DevTools:</strong> 렌더링 탭에서 &quot;prefers-reduced-motion&quot; 에뮬레이션</li>
      			</ul>
      			<p className="mt_m">
      				시스템에서 &quot;움직임 줄이기&quot;를 활성화하면 애니메이션이 모두 비활성화되어 정적인 상태로 표시됩니다.
      				이를 통해 어지러움이나 메스꺼움을 경험하는 사용자도 편안하게 콘텐츠를 볼 수 있습니다.
      			</p>
      		</article>
      	</section>

      	
      	<section className="indent mt_xxl">
      		<h2 className="ml_mn"><i className="t_blue">animation</i> 테스트 및 <i className="t_blue">요약설명</i></h2>
      		<p className="mt_l">
      			위에 설명된 <i className="t_blue">animation의 속성</i>을 직접 테스트할 수 있습니다.<br />
      			각 속성의 input 값을 변경하여 마우스 오버(hover) 또는 result 버튼을 클릭하세요.<br />
      			<span className="reference mt_l">테스트기 출처 : <a href="http://921430km.com/_temp/transform/animation.php" target="_blank" rel="noreferrer" title="새창열림">http://921430km.com/animation</a></span>
      		</p>

      		<div className="iframe_con kmtemp_resize_iframe mt_ml">
      			<iframe src="/_code_samples/kmtemp/transform/animation.html" width="100%" height="100%" scrolling="no"></iframe>
      		</div>
      	</section>

      	<aside className="browser_support mt_xxl" data-tit="animation">
      		<ul>
      			<li className="ie">10+</li>
      			<li className="edge">12.0</li>
      			<li className="chrome">43.0</li>
      			<li className="firefox">16.0</li>
      			<li className="opera">30.1</li>
      			<li className="safari">9.0</li>
      		</ul>
      	</aside>

      	<aside className="browser_support mt_xxl" data-tit="Prefix animation">
      		<ul>
      			<li className="ie">10+</li>
      			<li className="edge">12.0</li>
      			<li className="chrome">4.0 -webkit-</li>
      			<li className="firefox">5.0 -moz-</li>
      			<li className="opera">12.5 -o-</li>
      			<li className="safari">4.0 -webkit-</li>
      		</ul>
      	</aside>

      	<figure className="img_figure indent mt_l">
      		<img src={`${IMG.CSS}/04_css_03.png`} alt="CSS Animation" />
      		<figcaption className="reference">
      			CSS Animation
      		</figcaption>
      	</figure>

      	<aside className="reference_box mt_xxl">
      		<strong className="tit">Animation 참조</strong>
      		<ul className="link_lst">
      			<li className="reference"><a href="https://www.w3.org/TR/css-animations-1/" target="_blank" rel="noreferrer" className="fas" title="새창열림">W3C CSS Animations Level 1 W3C Working Draft, 11 October 2018</a></li>
      			<li className="reference"><a href="https://drafts.csswg.org/css-animations/#animation" target="_blank" rel="noreferrer" className="fas" title="새창열림">W3C CSS Animations Level 1 Editor’s Draft, 30 September 2019</a></li>
      			<li className="reference"><a href="https://developer.mozilla.org/ko/docs/Web/CSS/animation" target="_blank" rel="noreferrer" className="fas" title="새창열림">MDN CSS animation</a></li>
      		</ul>
      	</aside>
    </>
  )
}

export default CssAnimationPage
