import { usePageMeta } from '@/components/common/PageMeta'
import '../../../../assets/css/css_transition.scss'
import { IMG } from '@/config/path'
import { Suspense, lazy } from 'react'
const UkEditorTarget = lazy(() => import('@/components/code/UkEditorTarget'))
function EditorFallback() { return <div className="uk_editor min_height_300" aria-hidden /> }
import CodeBlock from '@/components/code/CodeBlock'

const PAGE_LAYOUT = {
  mainClass: "css_transition",
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
  title: "Transition",
  description: "CSS의 transition 속성은 요소의 두 가지 상태 사이에 변화를 부드럽게 만들어주는 속성으로, transition-property, transition-duration, transition-timing-function, transition-delay를 위한 단축 속성입니다. 이 페이지에서는 트랜지션을 적용할 CSS 속성을 지정하는 transition-property, 트랜지션 지속 시간을 설정하는 transition-duration, 시간에 따른 변화 속도를 제어하는 transition-timing-function, 트랜지션 시작 지연 시간을 설정하는 transition-delay와 transition 축약형 속성을 함께 소개합니다.",
  keyword: "style, css, Cascading Style Sheets, transition",
}

function CssTransitionPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  })

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
      		<strong className="sound_only">요약 설명</strong>
      		<p>
      			<code>transition</code> CSS 속성은
      			<code>transition-property</code>,
      			<code>transition-duration</code>,
      			<code>transition-timing-function</code>,
      			<code>transition-delay</code>를 위한 단축 속성입니다.<br />
      			이 속성으로 요소의 두 가지 상태 사이에 변화를 줄 수 있습니다.<br />
      			<code>transition</code> 속성을 사용하여 정해진 시간 동안 요소의 속성값을 부드럽게 변화시킬 수 있습니다.
      		</p>
      		<p className="mt_s">
      			<code>transition</code>은 간단한 즉각적인 동작을 구현하는 용도로 적합합니다.<br />
      			<code>transition</code>은 페이지가 로드되면서 자동으로 시작되지 않으며, 반드시 <code>click</code>, <code>hover</code>, <code>focus</code> 등의 이벤트가 발생해야만 작동합니다.
      		</p>
      	</blockquote>

      	
      	<section className="txt_ex indent mt_xxl">
      		<h2 className="ml_mn"><i className="t_blue">transition-property</i> 속성</h2>
      		<p className="mt_l">
      			트랜지션을 적용해야 하는 CSS 속성의 이름 또는 이름들을 명시합니다.<br />
      			<code>transition</code> 효과를 적용할 속성들을 나열하며, 2개 이상일 경우 쉼표(,)로 구분합니다.<br />
      			CSS의 모든 속성에 적용(<code>all</code>)할 경우 생략 가능합니다.
      		</p>
      		<p className="mt_s">
      			
      			보통 숫자값을 갖는 속성들은 <code>transition</code>을 통해 점진적인 효과를 낼 수 있습니다. (전부 그렇지는 않으며, 브라우저마다 차이가 있습니다.)<br />
      			
      		</p>
      		
      <CodeBlock title="transition-property" language="javascript" className="uk_gist_code_box mt_m">
      {`div {
      					transition-property: none | all | [property];
      				}`}
      </CodeBlock>

      		<ol className="ol_lst mt_m indent">
      			<li><strong className="t_black weight-500">none</strong> : transition 효과를 지정하지 않습니다.</li>
      			<li><strong className="t_black weight-500">all</strong> : 모든 속성이 transition 효과를 얻습니다.</li>
      			<li>
      				<strong className="t_black weight-500">property</strong> : transition 효과를 얻게될 속성을 지정합니다.
      				<code>transform, width, height, opacity, border-radius, margin, color, font-size, padding</code> 등등
      			</li>
      		</ol>
      	</section>

      	
      	<section className="txt_ex indent mt_xxl">
      		<h2 className="ml_mn"><i className="t_blue">transition-duration</i> 속성 <span className="t_red">(필수 선언)</span></h2>
      		<p className="mt_l">
      			transition 효과의 지속 시간을 명시합니다.<br />
      			트랜지션 동안 모든 속성에 적용하는 단일 지속 시간을 명시하거나, 각 속성이 다른 주기로 트랜지션하게 하는 여러 지속 시간을 명시할 수 있습니다.
      		</p>
      		<p className="mt_s">
      			밀리초(millisecond, ms) 또는 초(second, s)로 지속시간을 설정할 수 있습니다.<br />
      			1s는 1초이며, 0.1s는 숫자 0을 생략하고 .1s로 표기할 수 있습니다. (ms 단위로 할 경우 1초 = 1000ms)<br />
      		</p>
      		
      <CodeBlock title="transition-duration" language="javascript" className="uk_gist_code_box mt_m">
      {`div {
      					transition-duration : 1s | 1000ms;
      				}`}
      </CodeBlock>

      	</section>

      	
      	<section className="txt_ex indent mt_xxl">
      		<h2 className="ml_mn"><i className="t_blue">transition-timing-function</i> 속성</h2>
      		<p className="mt_l">
      			<code>transition</code> 구문의 세번째 자리에 오는 <code>transition-timing-function</code>은 변화가 일어나는 속도를 설정합니다.<br />
      			즉, 속성의 중간값을 계산하는 방법을 정의하는 함수를 명시합니다.
      		</p>
      		<p className="mt_s">
      			대부분의 타이밍 함수는 큐빅 베지어(<code>cubic-bezier</code>)를 정의하는 네 점에 의해 정의되므로 상응하는 함수의 그래프로 제공하여 명시할 수 있습니다.<br />
      			이징(<code>easing</code>: 시간에 따른 파라미터 값의 변화율을 명시하는 함수)을 선택할 수도 있습니다.<br />
      			변화의 시작과 끝 타이밍을 정의하며, 더 정교하거나 현실적인 움직임을 표현하기 위해 사용됩니다.<br />
      			기본값은 <code>ease</code>이며, 기본값을 사용할 경우 생략할 수 있습니다.<br />
      		</p>
      		
      <CodeBlock title="transition-timing-function" language="javascript" className="uk_gist_code_box mt_m">
      {`div {
      					transition-timing-function: ease | linear | ease-in | ease-out | ease-in-out | step(n) | cubic-bezier(n,n,n,n);
      				}`}
      </CodeBlock>


      		
      		<article className="indent mt_xl">
      			<h3 className="ml_mn t_blue">ease</h3>
      			<p className="mt_m">초반은 느리게, 중간은 빠르게, 종료지점은 느리게 변화가 진행됩니다.</p>
      			
      <CodeBlock title="transition-timing-function [ease]" language="javascript" className="uk_gist_code_box mt_m">
      {`div {
      						transition-timing-function: ease;
      					}`}
      </CodeBlock>

      		</article>

      		
      		<article className="indent mt_xl">
      			<h3 className="ml_mn t_blue">linear</h3>
      			<p className="mt_m">시작부터 종료까지 동일한 속도로 진행됩니다.</p>
      			
      <CodeBlock title="transition-timing-function [linear]" language="javascript" className="uk_gist_code_box mt_m">
      {`div {
      						transition-timing-function: linear;
      					}`}
      </CodeBlock>

      		</article>

      		
      		<article className="indent mt_xl">
      			<h3 className="ml_mn t_blue">ease-in</h3>
      			<p className="mt_m">느리게 시작한 후 일정한 속도에 다다르면 그 상태로 등속 운동합니다.</p>
      			
      <CodeBlock title="transition-timing-function [ease-in]" language="javascript" className="uk_gist_code_box mt_m">
      {`div {
      						transition-timing-function: ease-in;
      					}`}
      </CodeBlock>

      		</article>

      		
      		<article className="indent mt_xl">
      			<h3 className="ml_mn t_blue">ease-out</h3>
      			<p className="mt_m">일정한 속도의 등속으로 시작해서 점점 느려지면서 멈춥니다.</p>
      			
      <CodeBlock title="transition-timing-function [ease-out]" language="javascript" className="uk_gist_code_box mt_m">
      {`div {
      						transition-timing-function: ease-out;
      					}`}
      </CodeBlock>

      		</article>

      		
      		<article className="indent mt_xl">
      			<h3 className="ml_mn t_blue">ease-in-out</h3>
      			<p className="mt_m"><code className="t_blue">ease</code>와 비슷합니다. 초반은 느리게, 중간은 빠르게, 종료지점은 느리게 변화가 진행됩니다.</p>
      			
      <CodeBlock title="transition-timing-function [ease-in-out]" language="javascript" className="uk_gist_code_box mt_m">
      {`div {
      						transition-timing-function: ease-in-out;
      					}`}
      </CodeBlock>

      		</article>

      		
      		<article className="indent mt_xl">
      			<h3 className="ml_mn t_blue">steps(n)</h3>
      			<p className="mt_m">
      				애니메이션의 흐름을 Step(단계)화해서 제어할 수 있습니다.<br />
      				<code>duration</code> 값과 연계해서 선언하여 일종의 Frame Rate(초당 프레임 수)를 설정하거나, 셀 애니메이션처럼 연계된 동작을 표현할 수도 있습니다.
      			</p>
      			
      <CodeBlock title="transition-timing-function [steps(n)]" language="javascript" className="uk_gist_code_box mt_m">
      {`div {
      						/* step-start */
      						transition-timing-function: step-start;

      						/* step-end */
      						transition-timing-function: step-end;

      						/* steps */
      						transition-timing-function: steps(4, start)
      					}`}
      </CodeBlock>

      			<div className="ol_lst mt_m">
      				<p>변화가 점진적으로 진행되지 않고, 주어진 설정과 간격에 따라 일시에 진행되는 <code>step-start</code>, <code>step-end</code>, <code>steps</code>가 있습니다.</p>
      				<ol className="indent mt_ms">
      					<li>
      						<code>step-start</code>: 모든 변화가 시작 지점에 이루어집니다.
      					</li>
      					<li className="mt_ms">
      						<code>step-end</code>: 모든 변화가 종료 지점에 이루어집니다.<br />
      						(<code>transition-timing-function: 2s step-end;</code>로 설정할 경우, 마우스 오버 후 2초 뒤에 변화가 일어납니다.)
      					</li>
      					<li className="mt_ms">
      						<code>steps</code>: 설정한 단계에 따라 간격을 두고 변화가 일어납니다.
      					</li>
      				</ol>
      			</div>
      		</article>

      		
      		<article className="indent mt_xl">
      			<h3 className="ml_mn t_blue">cubic-bezier(n,n,n,n)</h3>
      			<p className="mt_m">처음과 끝의 속도를 0과 1 사이의 수치를 이용하여 4단계로 지정할 수 있습니다. 베지어(Bezier) 곡선 운동을 정의합니다.</p>
      			
      <CodeBlock title="transition-timing-function [cubic-bezier(n,n,n,n)]" language="javascript" className="uk_gist_code_box mt_m">
      {`div {
      						transition-timing-function: cubic-bezier(n,n,n,n);
      					}`}
      </CodeBlock>

      			<div className="line_code mt_m">
      				<p>
      					<code>cubic-bezier</code> 곡선에서 그래프의 가로축은 시간, 세로축은 변화의 진행 정도를 의미합니다.<br />
      					가로축과 세로축 모두 시작값은 0이며, 종료값은 1입니다.
      				</p>
      			</div>
      			<figure className="img_figure mt_m">
      				<figcaption className="mt_0">[<code className="bg_none t_blue">cubic-bezier</code> 곡선 그래프]</figcaption>
      				<img src={`${IMG.CSS}/cssAdvanced/uxkm_transition_cubic-bezier.svg`} alt="cubic-bezier 곡선 그래프1" className="mt_m" />
      			</figure>
      			
      		</article>
      	</section>

      	
      	<section className="txt_ex indent mt_xxl">
      		<h2 className="ml_mn"><i className="t_blue">transition-delay</i> 속성</h2>
      		<p className="mt_l">
      			속성이 변한 시점과 트랜지션이 실제로 시작하는 사이에 기다리는 시간을 정의합니다. (효과의 지연시간을 정의)<br />
      			3s(3초)로 설정하면 이벤트 발생 3초 후에 <code>transition</code>이 작동됩니다.<br />
      			지연시간이 필요 없으면 생략할 수 있습니다.
      		</p>
      		
      <CodeBlock title="transition-delay" language="javascript" className="uk_gist_code_box mt_m">
      {`div {
      						transition-delay: 1s | 1000ms;
      					}`}
      </CodeBlock>

      	</section>

      	
      	<section className="txt_ex indent mt_xxl">
      		<h2 className="ml_mn"><i className="t_blue">transition</i> 작성 방법</h2>
      		<p className="mt_l">
      			<code>transition</code> 작성 방법은 다음과 같이 사용할 수 있습니다.<br />
      			아래 작성 방법 중 <i className="t_blue">최대 단축형</i>과 <i className="t_blue">확장 단축형</i>이 주로 사용됩니다.
      		</p>

      		
      		<article className="indent mt_xl">
      			<h3 className="ml_mn t_blue">기본형</h3>
      			<p className="mt_m">
      				<code>transition</code>의 속성을 분리해서 정의할 수 있습니다.<br />
      				코드가 길어지는 단점이 있지만, 전체 속성(<code>all</code>) 대신 꼭 필요한 속성만 사용할 수 있습니다.
      			</p>
      			
      <CodeBlock title="transition syntax [default]" language="javascript" className="uk_gist_code_box mt_m">
      {`div {
      						transition-property: transform, color, border;
      						transition-duration: .5s;
      						transition-timing-function: ease;
      						transition-delay: .2s;
      					}`}
      </CodeBlock>

      		</article>

      		
      		<article className="indent mt_xl">
      			<h3 className="ml_mn t_blue">최대 단축형 (주로 사용)</h3>
      			<p className="mt_m">
      				변경할 속성이 한 개 또는 모든 CSS 속성일 경우에 사용됩니다. (주로 property가 <code>all</code>일 경우에 많이 사용됩니다.)<br />
      				모든 CSS 속성에 적용하고, 기본 타이밍(<code>ease</code>)을 사용하고, 지연시간(delay)이 없을 경우<br />
      				<code>transition: .5s;</code> 이렇게 지속시간(duration)만 선언하여 사용할 수 있습니다.
      			</p>
      			
      <CodeBlock title="transition syntax [Maximum shortened]" language="javascript" className="uk_gist_code_box mt_m">
      {`div {
      						transition: all .5s ease 2s;
      						/* transition: property(css 속성) duration(지속시간) timing delay(지연시간); */
      					}`}
      </CodeBlock>

      		</article>

      		
      		<article className="indent mt_xl">
      			<h3 className="ml_mn t_blue">확장 단축형 (주로 사용)</h3>
      			<p className="mt_m">
      				변경할 속성이 두 개 이상일 때 사용되며, 각 속성별로 독립적인 움직임을 줄 수 있습니다.
      			</p>
      			
      <CodeBlock title="transition syntax [Expansion shortened]" language="javascript" className="uk_gist_code_box mt_m">
      {`div {
      						transition:
      							transform .5s ease .2s,
      							color .3s linear 1s;
      					}`}
      </CodeBlock>

      		</article>

      		
      		<article className="indent mt_xl">
      			<h3 className="ml_mn t_blue">대입형</h3>
      			<p className="mt_m">
      				<code>transition-property</code>에 나열된 순서대로 다른 <code>transition</code>의 속성이 대입 적용됩니다.
      			</p>
      			
      <CodeBlock title="transition syntax [Substitute type]" language="javascript" className="uk_gist_code_box mt_m">
      {`div {
      						transition-property: transform, color, border;
      						transition-duration: .5s, .3s, .25s;
      						transition-timing-function: ease, linear, linear;
      						transition-delay: .2s, 1s, 0s;
      					}`}
      </CodeBlock>

      		</article>

      		

      		
      		<article className="indent mt_xl">
      			<h3 className="ml_mn t_blue">transition 작성 시 주의사항</h3>
      			<div className="tit_h4 indent mt_m">
      				<h4 className="ml_mn weight-bold">transition 속성에서 각 항목의 순서는 중요합니다.</h4>
      				<p className="mt_ms">
      					시간으로 해석될 수 있는 값이 첫 번째에 위치한다면 <code>transition-duration</code>으로 적용되고,
      					두 번째에 위치한다면 <code>transition-delay</code>로 적용됩니다.
      				</p>
      				<p>
      					속성값 목록이 알맞은 길이를 갖지 않는다면, 어떻게 처리될지 궁금하다면 아래 <span className="t_black">[속성값 목록이 다른 개수를 가진 경우]</span>를 참고하세요.<br />
      					실제 속성의 개수보다 많이 기술된 것은 무시됩니다.
      				</p>
      			</div>
      			<div className="tit_h4 indent mt_ml">
      				<h4 className="ml_mn weight-bold">속성값 목록이 다른 개수를 가진 경우</h4>
      				<p className="mt_ms">어떤 속성의 값 목록이 다른 것보다 짧다면, 일치되도록 그 값을 반복합니다.</p>
      				
      <CodeBlock title="transition syntax" language="javascript" className="uk_gist_code_box indent mt_ms">
      {`div {
      								transition-property: opacity, left, top, height;
      								transition-duration: 3s, 5s;
      							}
      							/* 위는 아래와 같이 처리합니다. */
      							div {
      								transition-property: opacity, left, top, height;
      								transition-duration: 3s, 5s, 3s, 5s;
      							}`}
      </CodeBlock>

      				<p className="mt_ms">어떤 속성의 값 목록이 <code>transition-property</code> 목록보다 길다면, 필요 없는 값을 잘라냅니다.</p>
      				
      <CodeBlock title="transition syntax" language="javascript" className="uk_gist_code_box indent mt_ms">
      {`div {
      								transition-property: opacity, left;
      								transition-duration: 3s, 5s, 2s, 1s;
      							}
      							/* 위를 아래와 같이 해석합니다. */
      							div {
      								transition-property: opacity, left;
      								transition-duration: 3s, 5s;
      							}`}
      </CodeBlock>

      			</div>
      		</article>
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
      {`.button {
      					transition: transform 0.3s ease;
      				}

      				.button:hover {
      					transform: scale(1.1);
      				}

      				/* 사용자가 움직임 줄이기를 선호하는 경우 */
      				@media (prefers-reduced-motion: reduce) {
      					.button {
      						transition: none;
      					}

      					.button:hover {
      						transform: none;
      					}
      				}`}
      </CodeBlock>

      		<p className="mt_m">
      			<strong className="t_blue">권장사항:</strong> 모든 <code>transition</code>과 <code>animation</code>에 대해 <code>prefers-reduced-motion</code>을 고려하여 접근성을 향상시키세요.
      		</p>
      		<div className="view_editor edit_code mt_xl">
      			<h3 className="ve_tit">prefers-reduced-motion 예제</h3>
      			<Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="css/step03/4.2.transition/4.2.1.prefers-reduced-motion.html" className="uk_editor mt_m min_height_500 mb_result_height_530 indent" mode="htmlmixed" theme="moxer" browser="default" result minHeight="500px" mbResultHeight="530px" />
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

      	
      	<section className="view_editor edit_code mt_xxl">
      		<h2 className="ve_tit tit_h2">transition 예제</h2>
      		<Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="css/step03/4.2.transition/4.2.transition.html" className="uk_editor indent mt_ml min_height_550 mb_result_height_450" mode="htmlmixed" theme="moxer" browser="default" result minHeight="550px" mbResultHeight="450px" />
      </Suspense>
      	</section>

      	<section className="indent mt_xxl ">
      		<h2 className="ml_mn"><i className="t_blue">transition</i> 테스트 및 <i className="t_blue">요약설명</i></h2>
      		<p className="mt_l">
      			위에 설명된 <i className="t_blue">transition의 속성</i>을 직접 테스트 할 수 있습니다.<br />
      			각 속성의 input값을 변경하여 마우스오버(hover) 또는 result버튼을 클릭하세요.<br />
      			<span className="reference mt_l">테스트기 출처 : <a href="http://921430km.com/_temp/transform/transition.php" target="_blank" rel="noreferrer" title="새창열림">http://921430km.com/transition</a></span>
      		</p>

      		<div className="iframe_con kmtemp_resize_iframe mt_ml">
      			<iframe src="/_code_samples/kmtemp/transform/transition.html" width="100%" height="100%" scrolling="no"></iframe>
      		</div>
      	</section>

      	<aside className="browser_support mt_xxl" data-tit="transition">
      		<ul>
      			<li className="ie">10+</li>
      			<li className="edge">12.0</li>
      			<li className="chrome">26.0</li>
      			<li className="firefox">16.0</li>
      			<li className="opera">12.0</li>
      			<li className="safari">6.1</li>
      		</ul>
      	</aside>
      	<aside className="browser_support mt_xxl" data-tit="Prefix transition">
      		<ul>
      			<li className="ie">10+</li>
      			<li className="edge">12.0</li>
      			<li className="chrome">4.0 -webkit-</li>
      			<li className="firefox">4.0 -moz-</li>
      			<li className="opera">10.5 -o-</li>
      			<li className="safari">3.1 -webkit-</li>
      		</ul>
      	</aside>

      	<figure className="img_figure indent mt_l">
      		<img src={`${IMG.CSS}/04_css_02.png`} alt="CSS Transition" />
      		<figcaption className="reference">
      			CSS transition
      		</figcaption>
      	</figure>

      	<aside className="reference_box mt_xxl">
      		<strong className="tit">Transition 참조</strong>
      		<ul className="link_lst">
      			<li className="reference"><a href="https://www.w3.org/TR/css-transitions-1/" target="_blank" rel="noreferrer" className="fas" title="새창열림">W3C CSS Transitions</a></li>
      			<li className="reference"><a href="https://drafts.csswg.org/css-transitions/#transition-shorthand-property" target="_blank" rel="noreferrer" className="fas" title="새창열림">W3C CSS Transitions</a></li>
      			<li className="reference"><a href="https://developer.mozilla.org/ko/docs/Web/CSS/transition" target="_blank" rel="noreferrer" className="fas" title="새창열림">MDN CSS Transitions</a></li>
      			<li className="reference"><a href="https://easings.net/" target="_blank" rel="noreferrer" className="fas" title="새창열림">Easing Functions Cheat Sheet</a></li>
      			<li className="reference"><a href="https://cubic-bezier.com/#.17,.67,.83,.67" target="_blank" rel="noreferrer" className="fas" title="새창열림">cubic-bezier</a></li>
      		</ul>
      	</aside>
    </>
  )
}

export default CssTransitionPage
