import { usePageMeta } from '@/components/common/PageMeta'
import '../../../../assets/css/transform_3d.scss'
import PublishingPartTabs from '@/components/docs/PublishingPartTabs'
import { IMG } from '@/config/path'
import { Suspense, lazy } from 'react'
const UkEditorTarget = lazy(() => import('@/components/code/UkEditorTarget'))
function EditorFallback() { return <div className="uk_editor min_height_300" aria-hidden /> }
import CodeBlock from '@/components/code/CodeBlock'

const PAGE_LAYOUT = {
  mainClass: "css_transform_3d",
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
  title: "Transform 3D",
  description: "CSS의 transform 속성은 요소가 위치하는 시각적 좌표 공간을 변형할 수 있도록 해주며, 3D Transform은 입체 공간에서 요소를 변형하는 기능으로 x축, y축, z축 좌표 체계를 사용합니다. 이 페이지에서는 요소를 입체적으로 이동하는 translate3d 함수, 회전하는 rotate3d 함수, 크기를 변경하는 scale3d 함수, 원근감을 표현하는 perspective 함수와 perspective, transform-style, backface-visibility 속성을 함께 소개합니다.",
  keyword: "style, css, Cascading Style Sheets, 3D transform, transform",
}

function CssTransformPart2Page() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  })

  return (
    <>
      <blockquote className="uk_note common_note mt_xxl" role="note">
      	<strong className="sound_only">요약 설명</strong>
      	<p>
      		CSS의 <code>transform</code> 속성은 요소가 위치하는 <b>시각적 좌표 공간(visual formatting model)</b>을 변형할 수 있도록 해줍니다.<br />
      		이 속성을 사용하면 요소를 <b>이동</b>(<code>translate</code>), <b>회전</b>(<code>rotate</code>), <b>크기 변경</b>(<code>scale</code>), <b>기울이기</b>(<code>skew</code>) 등 다양한 방식으로 변형할 수 있으며, <strong className="t_black">CSS3</strong>에서는 <b>2D</b>와 <b>3D</b> 변형 모두를 지원합니다.
      	</p>
      	<p className="mt_ms">
      		Transform은 <code>x</code>, <code>y</code>, <code>z</code> <b>좌표 체계</b>를 따르며, 좌표의 기준점은 <b>브라우저 화면의 왼쪽 상단</b>입니다.<br />
      		<b>Z축</b>은 화면 밖에서 사용자가 바라보는 방향을 기준으로 <b>앞/뒤</b> 방향을 나타내며, 각 축의 <b>화살표 방향이 양의 값</b>, 반대쪽이 <b>음의 값</b>이 됩니다.
      	</p>
      </blockquote>
      <PublishingPartTabs sectionType="css" />

      <blockquote className="uk_note mt_xxl" role="note">
      		<strong className="sound_only">요약 설명</strong>
      		
      		<p>
      			<b>3D Transform</b>은 입체 공간에서 요소를 변형하는 기능으로, <code>x</code>축, <code>y</code>축, <code>z</code>축 좌표 체계를 사용합니다.<br />
      			좌표의 기준점은 <b>브라우저 화면의 왼쪽 상단</b>이며, <code>x</code>축은 수평(왼쪽 및 오른쪽), <code>y</code>축은 수직(위 아래), <code>z</code>축은 깊이(앞으로 및 뒤로)를 나타냅니다.<br />
      			<code>transform</code> 속성에 변환 함수를 지정하여 요소를 <b>이동</b>(<code>translate3d</code>), <b>회전</b>(<code>rotate3d</code>), <b>크기 변경</b>(<code>scale3d</code>)할 수 있으며, <code>perspective()</code> 함수를 사용하여 원근감을 표현할 수 있습니다.
      		</p>
      		<p className="mt_ms">
      			3D Transform은 요소에 직접 적용하는 속성과 자식 요소를 3D로 처리하기 위해 부모 요소에 설정하는 속성으로 구분되며, <code>perspective</code>, <code>transform-style</code>, <code>backface-visibility</code> 등의 속성을 함께 사용하여 입체적인 효과를 구현합니다.
      		</p>
      	</blockquote>

      	
      	<section className="txt_ex indent mt_xxl">
      		<h2 className="ml_mn">3D Transform</h2>
      		<blockquote className="uk_note mt_l" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				CSS 3D transform은 평면에서의 여러 CSS 속성을 조합하고 3D 공간에서의 회전, 확대, 이동, 비틀기를 포함하여 원근감과 관찰자의 위치를 부여해 3D 공간을 만들어 낼 수 있습니다.<br />
      				3D transform은 크게 트랜스폼을 적용할 요소에 적용하는 속성과 자식 요소를 3D로 처리하기 위해 부모 요소에 설정하는 속성이 있습니다.<br />
      				<code>rotate3d()</code>, <code>translate3d()</code>, <code>scale3d()</code> 함수와 같이 입체적으로 보여지는 3D 변형에 관련된 함수는 <code>perspective()</code> 함수를 사용하여 원근감을 표현할 기준을 명시해야 합니다.
      			</p>
      			<p className="mt_s">
      				CSS에서 x축은 수평(왼쪽 및 오른쪽), y축은 수직(위 아래), z축은 깊이(앞으로 및 뒤로 / 더 멀리 그리고 더 깊이)를 나타냅니다.
      			</p>
      		</blockquote>
      		<div className="indent mt_l">
      			<p className="ml_mn font-16 t_black"><strong className="t_black">CSS3</strong> 3D transform 속성은 다음과 같습니다.</p>
      			<div className="ol_lst mt_ms">
      				<ol>
      					<li><code>transform</code> : 요소에 2D 또는 3D 변형(transform)을 적용합니다.</li>
      					<li><code>transform-origin</code> : 요소에 변형(transform)을 적용하는 변환 중심을 설정합니다. 기본값은 <code>transform-origin: 50% 50%;</code>입니다.</li>
      					<li><code>transform-style</code> : 요소에 변형을 적용할 때 그 변환이 자식(child) 요소들에게도 적용될지 안 될지를 설정합니다.</li>
      					<li><code>perspective</code> : 3D 요소에 원근감을 표현할 때 사용할 픽셀 수를 설정합니다.</li>
      					<li><code>perspective-origin</code> : 3D 요소에 원근감을 표현할 때 사용할 기준 축을 설정합니다.</li>
      					<li><code>backface-visibility</code> : 요소의 앞면만을 표현하고, 뒷면을 표현할지 안 할지를 설정합니다. 입체적인 뒷면의 가시성을 결정하는 속성입니다.</li>
      				</ol>
      			</div>
      		</div>
      		<div className="indent mt_l">
      			<p className="ml_mn font-16 t_black">자식 요소를 3D 처리하기 위한 부모 요소에 설정하기 위한 속성</p>
      			<div className="ol_lst mt_ms">
      				<ol>
      					<li><code>perspective</code> : 원근, 소실점, 투시도법</li>
      					<li><code>perspective-origin</code> : 원근법에 대한 기준점을 설정</li>
      					<li><code>transform-style</code> : preserve-3d 요소의 자식이 3D 공간에 배치</li>
      				</ol>
      			</div>
      		</div>
      		<div className="indent mt_l">
      			<p className="ml_mn font-16 t_black">
      				<strong className="t_black">CSS3</strong> 3D transform은 프로퍼티값으로 변환함수(transform function)를 사용합니다. 사용할 수 있는 변환함수는 다음과 같습니다.
      			</p>
      			<div className="ol_lst mt_ms">
      				<ol>
      					<li><code>translate3d(x, y, z)</code> : 요소의 위치를 X축으로 x만큼, Y축으로 y만큼, Z축으로 z만큼 이동시킵니다. (단위 : px, %, em 등)</li>
      					<li><code>translateX(n)</code> : 요소의 위치를 X축으로 x만큼 이동시킵니다. (단위 : px, %, em 등)</li>
      					<li><code>translateY(n)</code> : 요소의 위치를 Y축으로 y만큼 이동시킵니다. (단위 : px, %, em 등)</li>
      					<li><code>translateZ(n)</code> : 요소의 위치를 Z축으로 z만큼 이동시킵니다. (단위 : px, %, em 등)</li>
      					<li><code>scale3d(x, y, z)</code> : 요소의 크기를 X축으로 x배, Y축으로 y배, Z축으로 z배 확대 또는 축소시킵니다. (단위 : 0과 양수)</li>
      					<li><code>scaleX(n)</code> : 요소의 크기를 X축으로 x배 확대 또는 축소시킵니다. (단위 : 0과 양수)</li>
      					<li><code>scaleY(n)</code> : 요소의 크기를 Y축으로 y배 확대 또는 축소시킵니다. (단위 : 0과 양수)</li>
      					<li><code>scaleZ(n)</code> : 요소의 크기를 Z축으로 z배 확대 또는 축소시킵니다. (단위 : 0과 양수)</li>
      					<li><code>rotate3d(x, y, z, angle)</code> : 요소를 X축으로 x각도, Y축으로 y각도, Z축으로 z각도 회전시킵니다. (단위 : +/- 각도(deg))</li>
      					<li><code>rotateX(x)</code> : 요소를 X축으로 x각도 회전시킵니다. (단위 : +/- 각도(deg))</li>
      					<li><code>rotateY(y)</code> : 요소를 Y축으로 y각도 회전시킵니다. (단위 : +/- 각도(deg))</li>
      					<li><code>rotateZ(z)</code> : 요소를 Z축으로 z각도 회전시킵니다. (단위 : +/- 각도(deg))</li>
      				</ol>
      			</div>
      		</div>

      		
      		<article className="indent mt_xl">
      			<h3 className="ml_mn" data-conlist-h4="true"><i className="t_blue">transform 3D</i> 속성</h3>
      			<p className="mt_m t_666 font-16">
      				<strong className="t_black">CSS3</strong> 2D transform에서 설명한 부분은 제외합니다.<br />
      				<span className="el_block mt_sm"><code>transform : none | &lt;transform-function&gt; [ &lt;transform-function&gt; ]*</code></span>
      			</p>
      			<div className="ol_lst mt_m">
      				<ol>
      					
      					<li className="tit_h4 mt_l">
      						<h4 className="mb_s">z축에 대한 이해</h4>
      						<p>
      							transform 3D에서도 transform 2D의 값은 동일하게 사용됩니다.<br />
      							<code className="bg_none">x</code>, <code className="bg_none">y</code>축은 2D와 동일하게 좌/우, 상/하를 의미하며,
      							<code className="bg_none">z</code>축은 <mark>사용자와의 거리(3D)를 의미</mark>합니다.<br />
      							요소의 <code className="bg_none">z</code>값이 양수이면 사용자와 가까워지며(확대와 비슷), 음수이면 사용자와 멀어(축소와 비슷)집니다.
      						</p>
      						<figure className="img_figure mt_ms">
      							<figcaption className="mt_0">[3D 효과를 이해하기 위한 <i className="t_green">x축</i>, <i className="t_purple">y축</i>, <i className="t_blue">z축</i>에 대한 그림]</figcaption>
      							<img src={`${IMG.CSS}/cssAdvanced/uxkm_transform-perspective.svg`} alt="3D 효과를 이해하기 위한 x축, y축, z축에 대한 그림" className="mt_s" />
      						</figure>
      					</li>

      					
      					<li className="tit_h4 mt_l">
      						<h4 className="mb_ms">translate3d(x, y, z)</h4>
      						<p>
      							<code>translate3d(x, y, z)</code> 함수는 현재 위치에서 요소를 주어진 <code>x</code>축과 <code>y</code>축, <code>z</code>축의 거리만큼 이동시킵니다.<br />
      							주어진 거리가 양수이면 해당 축의 양의 방향으로, 음수이면 해당 축의 음의 방향으로 이동시킵니다.
      						</p>
      						
      <CodeBlock title="transform [translate3d(x, y, z)]" language="javascript" className="uk_gist_code_box mt_ms">
      {`/* 좌표 공간에서의 3D 이동(translation) 함수입니다. */
      								div { transform: translate3d(tx, ty, tz); }

      								.box1 {
      									transform: translate3d(100px, 50px, -150px);
      								}
      								/* 구형 브라우저 지원용 (현재는 대부분 불필요) */
      								/* -webkit-transform: translate3d(100px, 50px, -150px); */`}
      </CodeBlock>

      					</li>

      					
      					<li className="tit_h4 mt_l">
      						<h4 className="mb_ms">translateZ(tz)</h4>
      						<p>
      							현재 위치에서 요소를 주어진 z축의 거리만큼 이동시킵니다.<br />
      							값이 클수록 사용자와 가까워집니다.
      						</p>
      						
      <CodeBlock title="transform [translateZ(tz)]" language="javascript" className="uk_gist_code_box mt_ms">
      {`/* 요소를 Z축을 따라 지정된 값만큼 이동(translate)시킵니다. */
      								div { transform: translateZ(tz); }

      								.box1 {
      									transform: translateZ(200px);
      								}
      								/* 구형 브라우저 지원용 (현재는 대부분 불필요) */
      								/* -webkit-transform: translateZ(200px); */`}
      </CodeBlock>

      					</li>

      					
      					<li className="tit_h4 mt_l">
      						<h4 className="mb_ms">scale3d(sx, sy, sz)</h4>
      						<p>요소의 크기를 주어진 배율만큼 x축, y축과 z축 방향으로 늘리거나 줄입니다.</p>
      						
      <CodeBlock title="transform [scale3d(sx, sy, sz)]" language="javascript" className="uk_gist_code_box mt_ms">
      {`/* 3D 크기 변환 함수입니다. */
      								div { transform: scale3d(sx, sy, sz); }

      								.box1 {
      									transform: scale3d(2, 0.7, 0.2);
      								}
      								/* 구형 브라우저 지원용 (현재는 대부분 불필요) */
      								/* -webkit-transform: scale3d(2, 0.7, 0.2); */`}
      </CodeBlock>

      					</li>

      					
      					<li className="tit_h4 mt_l">
      						<h4 className="mb_ms">scaleZ(sz)</h4>
      						
      						<p>
      							
      							<code>scale()</code>의 기능이 요소를 늘리거나 줄이는 것인데 CSS는 두께의 개념이 없어 <code>z</code>축을 늘어나게 하는 것이 불가능합니다.<br />
      							따라서 <code>scaleZ()</code>의 <code>z</code>축은 그 자체로는 의미가 없습니다.<br />
      							<code>perspective</code>와 <code>translateZ()</code>를 같이 사용해야 목적에 맞는 구현이 가능합니다.
      						</p>
      						
      						
      <CodeBlock title="transform [scaleZ(sz)]" language="javascript" className="uk_gist_code_box mt_ms">
      {`/* 요소를 Z축 기준으로 지정된 값만큼 크기를 늘리거나 줄입니다. */
      								div { transform: scaleZ(sz); }

      								.box1 {
      									transform: scaleZ(10%) translateZ(30px) perspective(250px);
      								}
      								/* 구형 브라우저 지원용 (현재는 대부분 불필요) */
      								/* -webkit-transform: scaleZ(10%) translateZ(30px) perspective(250px); */`}
      </CodeBlock>

      					</li>

      					
      					<li className="tit_h4 mt_l">
      						<h4 className="mb_ms">rotate3d(x, y, z, angle)</h4>
      						<p>요소를 주어진 각도만큼 x축, y축과 z축을 기준으로 회전시킵니다.</p>
      						<ul className="dot_lst indent mt_sm">
      							<li>3D 공간에서 회전에는 3개의 자유도가 있으며 회전축을 나타냅니다.</li>
      							<li>회전축은 요소의 원점(<code>transform-origin</code>으로 정의된 값)과 <code>rotate3d(x, y, z, angle)</code>를 통과합니다.</li>
      						</ul>
      						
      <CodeBlock title="transform [rotate3d(x, y , z, angle)]" language="javascript" className="uk_gist_code_box mt_ms">
      {`div { transform: rotate3d(x, y, z, angle); }

      								.box1 {
      									transform: rotate3d(0, 1, 0, 60deg);
      								}
      								/* 구형 브라우저 지원용 (현재는 대부분 불필요) */
      								/* -webkit-transform: rotate3d(0, 1, 0, 60deg); */`}
      </CodeBlock>

      					</li>

      					
      					<li className="tit_h4 mt_l">
      						<h4 className="mb_ms">rotateX(angle), rotateY(angle)</h4>
      						<p>
      							<code className="t_blue">rotateX(angle)</code>, <code className="t_green">rotateY(angle)</code> 함수는 요소를 주어진 각도만큼 각각의 축(<code className="t_blue">x</code>, <code className="t_green">y</code>)을 기준으로 회전시킵니다.<br />
      							각 축이 기준이 되기 때문에 실제 움직임은 예상과 반대로 보일 수 있습니다.
      						</p>
      						<p>
      							예를 들어 물레방아가 위아래로 회전하는 모습을 표현하려면 <code>rotateX(-angle)</code>를 사용합니다.<br />
      							<code>rotateX()</code>는 <code>x</code>축을 기준으로 위아래 회전을 나타내며, 음수 값을 사용하면 자연스러운 회전 방향을 표현할 수 있습니다.
      						</p>
      						
      <CodeBlock title="transform [rotateX(angle), rotateY(angle)]" language="javascript" className="uk_gist_code_box mt_ms">
      {`/* 요소의 원점을 지나는 각 축을 기준으로 지정된 값만큼 회전시킵니다. */
      								div { transform: rotateX(angle); }  /* x축을 기준으로 세로 회전 */
      								div { transform: rotateY(angle); }  /* y축을 기준으로 가로 회전 */

      								.box1 {
      									transform: rotateX(20deg);
      								}
      								.box2 {
      									transform: rotateY(20deg);
      								}
      								/* 구형 브라우저 지원용 (현재는 대부분 불필요) */
      								/* -webkit-transform: rotateX(20deg); */
      								/* -webkit-transform: rotateY(20deg); */`}
      </CodeBlock>

      					</li>

      					

      					
      					<li className="tit_h4 mt_l">
      						<h4 className="mb_ms">rotateZ(angle)</h4>
      						<p>
      							<code>rotateZ()</code> 함수는 요소를 주어진 각도만큼 <code>z</code>축을 기준으로 회전시킵니다.<br />
      							<code>rotateX()</code>와 <code>rotateY()</code>가 3D 공간에서의 회전을 나타낸다면, <code>rotateZ()</code>는 화면을 바라보는 방향에서의 회전을 나타냅니다.
      						</p>
      						<p>
      							모니터에 있는 요소와 사용자 간의 거리가 <code>z</code>축이 되며, <code>rotateZ()</code>의 움직임은 transform 2D의 <code>rotate()</code>와 동일합니다.<br />
      							<code>angle</code>이 양수이면 시계 방향, 음수이면 반시계 방향으로 회전합니다.
      						</p>
      						<p>
      							예를 들어 팽이를 위에서 바라볼 때 시계 또는 반시계 방향으로 회전하는 모습이 <code>rotateZ()</code>에 해당합니다.<br />
      							반면 옆에서 바라볼 때 가로로 회전하는 모습은 <code>rotateY()</code>로 표현할 수 있습니다.
      						</p>
      						
      <CodeBlock title="transform [rotateZ(angle)]" language="javascript" className="uk_gist_code_box mt_ms">
      {`/* 요소의 원점을 지나는 Z축을 기준으로 지정된 값만큼 회전시킵니다. */
      								div { transform: rotateZ(angle); }

      								.box1 {
      									transform: rotateZ(20deg);
      								}
      								/* 구형 브라우저 지원용 (현재는 대부분 불필요) */
      								/* -webkit-transform: rotateZ(20deg); */`}
      </CodeBlock>

      					</li>

      					
      					<li className="tit_h4 mt_l">
      						<h4 className="mb_ms">matrix3d(n×16)</h4>
      						<p>4x4 행렬을 이용한 16개의 매개변수로 모든 3D 변형 함수를 한 번에 설정합니다.</p>
      						<p><code>matrix3d ​​( a1 , b1 , c1 , d1 , a2 , b2 , c2 , d2 , a3 , b3 , c3 , d3 , a4 , b4 , c4 , d4 );</code></p>
      						<div className="view_editor edit_code mt_s">
      							<Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="css/step03/4.1.transform/4.1.2.css3-3d-transform-matrix3d.html" className="uk_editor min_height_450" mode="htmlmixed" theme="moxer" browser="default" result minHeight="450px" />
      </Suspense></div>
      					</li>
      				</ol>
      			</div>
      		</article>

      		
      		<article className="indent mt_xl">
      			<h3 className="ml_mn"><i className="t_blue">transform-style</i> 속성</h3>
      			<p className="mt_m">요소에 변형을 적용할 때 그 변환이 자식(child) 요소들에게도 적용될지 안 될지를 설정합니다.</p>
      			
      <CodeBlock title="transform-style" language="javascript" className="uk_gist_code_box mt_m">
      {`div {
      						transform-style: flat | preserve-3d;
      					}`}
      </CodeBlock>

      			<div className="ol_lst indent mt_ml">
      				<ol>
      					<li className="tit_h4">
      						<h4 className="mb_sm">flat :</h4>
      						<p>
      							기본값으로 자식 요소는 2D의 2차원에서 부모 요소와 동일한 평면에 배치됩니다.<br />
      							즉, <code>flat</code>이 선언되면 자식은 3D 공간 값을 가지지 못합니다.
      						</p>
      						
      					</li>
      					<li className="tit_h4 mt_m">
      						<h4 className="mb_sm">preserve-3d :</h4>
      						<p>
      							자식 요소가 3D 공간에 배치되도록 지정합니다.<br />
      							<code>preserve-3d</code>가 선언되면 자식은 부모의 3D 영역을 공유하여 부모의 각도를 기준으로 3D transform 선언이 작동됩니다.
      						</p>
      					</li>
      				</ol>
      			</div>

      			<div className="view_editor edit_code mt_ml">
      				<Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="css/step03/4.1.transform/4.1.2.css3-3d-transform-style.html" className="uk_editor min_height_600 mb_result_height_450" mode="htmlmixed" theme="moxer" browser="default" result minHeight="600px" mbResultHeight="450px" />
      </Suspense></div>
      		</article>

      		
      		<article className="indent mt_xl">
      			<h3 className="ml_mn"><i className="t_blue">perspective</i> 속성</h3>
      			<p className="mt_m">
      				<code>perspective</code>는 3D 공간에서 요소와 관측 점과의 거리, 즉 원근감을 지정하는 속성입니다.<br />
      				<code>perspective</code> 속성으로 원근감을 지정하는 것과 동일하게 <code>transform</code> 속성의 <code>perspective()</code> 함수로도 지정할 수 있습니다.<br />
      				이때 속성 값이 작을수록 가깝게 보이고, 클수록 멀게 보입니다.
      			</p>
      			
      <CodeBlock title="perspective" language="javascript" className="uk_gist_code_box mt_m">
      {`div {
      						/* perspective를 별도의 속성으로 선언하는 경우 */
      						perspective : 100px;

      						/* transform의 함수로 선언하는 경우 */
      						transform: perspective(100px);
      					}`}
      </CodeBlock>


      			
      			<div className="view_editor edit_code mt_m">
      				<Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="css/step03/4.1.transform/4.1.2.css3-3d-transform-perspective.html" className="uk_editor min_height_550 mb_result_height_500" mode="htmlmixed" theme="moxer" browser="default" result minHeight="550px" mbResultHeight="500px" />
      </Suspense></div>
      		</article>

      		
      		<article className="indent mt_xl">
      			<h3 className="ml_mn"><i className="t_blue">transform-origin</i> 속성</h3>
      			<p className="t_666 mt_m">
      				transform 2D, 3D 구분없이 같은 값을 가집니다.<br />
      				<code>transform-origin</code>은 <code>CSS transform</code> 속성과 함께 사용되는 속성으로서, <code>rotate()</code>, <code>skew()</code> 등의 회전, 변형 속성의 중심(원점·기준점)을 지정합니다.<br />
      				속성의 값은 백분율(%)과 키워드 중 하나로 지정할 수 있으며, 기본 값은 <code className="bg_none">50% 50%</code>(center center)로 요소의 가운데(중심)입니다.<br />
      				0%는 단위를 생략하고 0으로 지정해도 됩니다. (0% = 0)
      			</p>
      			
      			
      <CodeBlock title="transform-origin" language="javascript" className="uk_gist_code_box mt_m">
      {`/* 백분율(%) 과 대응 가능한 키워드 */
      					div {
      						transform-origin: 0 0;        /* left top */
      						transform-origin: 0 50%;      /* left center */
      						transform-origin: 0 100%;     /* left bottom */
      						transform-origin: 50% 0;      /* center top */
      						transform-origin: 50% 50%;    /* center center */
      						transform-origin: 50% 100%;   /* center bottom */
      						transform-origin: 100% 0;     /* right top */
      						transform-origin: 100% 50%;   /* right center */
      						transform-origin: 100% 100%;  /* right bottom */
      					}

      					/* 왼쪽 상단 모서리를 중심으로 시계 방향으로 회전 */
      					div {
      						transform-origin: 0 0;       /* 왼쪽 상단을 기준으로 (left top과 동일) */
      						transform: rotate(45deg);    /* 45도 회전 (시계 방향) */
      					}

      					/* 오른쪽 하단 모서리를 중심으로 반 시계 방향으로 회전 */
      					div {
      						transform-origin: 100% 100%; /* 오른쪽 하단을 기준으로 (right bottom과 동일) */
      						transform: rotate(-45deg);   /* -45도 회전 (반 시계 방향) */
      					}`}
      </CodeBlock>

      			<div className="view_editor edit_code mt_ml">
      				<Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="css/step03/4.1.transform/4.1.2.css3-3d-transform-perspective-origin.html" className="uk_editor min_height_500 mb_result_height_450" mode="htmlmixed" theme="moxer" browser="default" result minHeight="500px" mbResultHeight="450px" />
      </Suspense></div>
      		</article>

      		
      		<article className="indent mt_xl">
      			<h3 className="ml_mn"><i className="t_blue">backface-visibility(이면가시성)</i> 속성</h3>
      			<p className="t_666 mt_m">
      				요소의 앞면만을 표현하고, 뒷면을 표현할지 안 할지를 설정합니다.<br />
      				<code>backface-visibility</code> 속성은 3D 변형과 연관되어 있으며 입체적인 뒷면의 가시성(뒤집어진 면)을 결정하는 속성입니다.<br />
      				즉, 변형이 가해져서 요소가 뒤집어 졌을 때, 이 속성으로 숨기거나 보여지게 할 수 있습니다.
      			</p>
      			
      <CodeBlock title="backface-visibility" language="javascript" className="uk_gist_code_box mt_m">
      {`div {
      						backface-visibility: visible | hidden | inherit | initial;
      					}`}
      </CodeBlock>

      			<div className="ol_lst mt_m indent">
      				<ol>
      					<li><strong className="t_black weight-500">visible</strong> : 기본값으로 이면(뒷면)을 보여줍니다. 화면을 마주 보지 않아도 요소가 항상 표시됩니다.</li>
      					<li><strong className="t_black weight-500">hidden</strong> : 뒤집어진 면을 숨깁니다. 화면을 마주 보지 않을 때 요소가 보이지 않습니다.</li>
      				</ol>
      			</div>

      			<figure className="img_figure mt_m">
      				<figcaption className="mt_0"><code className="bg_none t_444">[ backface-visibility ]</code></figcaption>
      				<img src={`${IMG.CSS}/cssAdvanced/uxkm_transform_backface-visibility.svg`} alt="backface-visibility" className="mt_s" />
      			</figure>
      			<div className="view_editor edit_code mt_ml">
      				<Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="css/step03/4.1.transform/4.1.2.css3-3d-transform-backface-visibility.html" className="uk_editor min_height_550 mb_result_height_500" mode="htmlmixed" theme="moxer" browser="default" result minHeight="550px" mbResultHeight="500px" />
      </Suspense></div>
      		</article>
      	</section>

      	
      	<article className="indent mt_xxl">
      		<h2 className="ml_mn"><i className="t_blue">3D transform</i> 테스트 및 <i className="t_blue">요약설명</i></h2>
      		<p className="mt_l">
      			위에 설명된 <i className="t_blue">3D transform의 속성</i> 과
      			<i className="t_blue">transform-origin</i>,
      			<i className="t_blue">transform-style</i>,
      			<i className="t_blue">perspective</i>,
      			<i className="t_blue">perspective-origin</i>,
      			<i className="t_blue">backface-visibility</i>를 직접 테스트 할 수 있습니다.<br />
      			각 속성의 input값을 변경하여 마우스오버(hover) 또는 result버튼을 클릭하세요.<br />
      			<span className="reference mt_l">테스트기 출처 : <a href="http://921430km.com/_temp/transform/3d.php" target="_blank" rel="noreferrer" title="새창열림">http://921430km.com/3d</a></span>
      		</p>

      		<div className="iframe_con kmtemp_resize_iframe mt_ml">
      			<iframe src="/_code_samples/kmtemp/transform/3d.html" width="100%" height="100%" scrolling="no"></iframe>
      		</div>
      	</article>

      	<aside className="browser_support mt_xxl" data-tit="transform">
      		<ul>
      			<li className="ie">10+</li>
      			<li className="edge">12.0</li>
      			<li className="chrome">36.0</li>
      			<li className="firefox">16.0</li>
      			<li className="opera">23.0</li>
      			<li className="safari">9.0</li>
      		</ul>
      	</aside>
      	<aside className="browser_support mt_xxl" data-tit="Prefix transform">
      		<ul>
      			<li className="ie">9</li>
      			<li className="edge">12.0</li>
      			<li className="chrome">4.0 ~ 35.0</li>
      			<li className="firefox">3.5 ~ 15.0</li>
      			<li className="opera">11.5 ~ 22.0</li>
      			<li className="safari">3.1 ~ 8.0</li>
      		</ul>
      	</aside>

      	<figure className="img_figure indent mt_l">
      		<img src={`${IMG.CSS}/04_css_01_2.png`} alt="CSS transform 3D" />
      		<figcaption className="reference">
      			CSS transform 3D
      		</figcaption>
      	</figure>

      	<aside className="reference_box mt_xxl">
      		<strong className="tit">Transform 참조</strong>
      		<ul className="link_lst">
      			<li className="reference"><a href="https://www.w3.org/TR/css-transforms-1/" target="_blank" rel="noreferrer" className="fas" title="새창열림">W3c CSS Transforms Module Level 1</a></li>
      			<li className="reference"><a href="https://drafts.csswg.org/css-transforms-2/" target="_blank" rel="noreferrer" className="fas" title="새창열림">W3C CSS Transforms Module Level 2</a></li>
      			<li className="reference"><a href="https://developer.mozilla.org/ko/docs/Web/CSS/transform" target="_blank" rel="noreferrer" className="fas" title="새창열림">MDN transform</a></li>
      			<li className="reference"><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function" target="_blank" rel="noreferrer" className="fas" title="새창열림">MDN transform function</a></li>
      			<li className="reference"><a href="http://www.useragentman.com/matrix/" target="_blank" rel="noreferrer" className="fas" title="새창열림">useragentman.com/matrix/</a></li>
      			<li className="reference"><a href="https://seulbinim.github.io/WSA/transform.html#perspective-%EC%86%8D%EC%84%B1" target="_blank" rel="noreferrer" className="fas" title="새창열림">웹접근성과 웹표준</a></li>
      			<li className="reference"><a href="https://css-tricks.com/almanac/properties/b/backface-visibility/" target="_blank" rel="noreferrer" className="fas" title="새창열림">backface-visibility</a></li>
      			<li className="reference"><a href="http://westciv.com/tools/3Dtransforms/" target="_blank" rel="noreferrer" className="fas" title="새창열림">3D 변환 테스트 페이지</a></li>
      			<li className="reference"><a href="http://thewebrocks.com/demos/3D-css-tester/" target="_blank" rel="noreferrer" className="fas" title="새창열림">3D CSS Tester</a></li>
      		</ul>
      	</aside>
    </>
  )
}

export default CssTransformPart2Page
