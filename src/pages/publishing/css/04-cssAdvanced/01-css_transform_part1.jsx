import { usePageMeta } from '@/components/common/PageMeta'
import '../../../../assets/css/transform_2d.scss'
import PublishingPartTabs from '@/components/docs/PublishingPartTabs'
import { IMG } from '@/config/path'
import { Suspense, lazy } from 'react'
const UkEditorTarget = lazy(() => import('@/components/code/UkEditorTarget'))
function EditorFallback() { return <div className="uk_editor min_height_300" aria-hidden /> }
import CodeBlock from '@/components/code/CodeBlock'

const PAGE_LAYOUT = {
  mainClass: "css_transform_2d",
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
  title: "Transform 2D",
  description: "CSS의 transform 속성은 요소가 위치하는 시각적 좌표 공간을 변형할 수 있도록 해주며, 2D Transform은 평면상에서 요소를 변형하는 기능으로 x축과 y축 좌표 체계를 사용합니다. 이 페이지에서는 요소를 이동하는 translate 함수, 회전하는 rotate 함수, 크기를 변경하는 scale 함수, 기울이는 skew 함수, 여러 변형을 한 번에 적용하는 matrix 함수와 각 변형 함수의 X축, Y축 개별 제어 방법을 함께 소개합니다.",
  keyword: "style, css, Cascading Style Sheets, 2D transform, transform",
}

function CssTransformPart1Page() {
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
      			<b>2D Transform</b>은 평면상에서 요소를 변형하는 기능으로, <code>x</code>축과 <code>y</code>축 좌표 체계를 사용합니다.<br />
      			좌표의 기준점은 <b>브라우저 화면의 왼쪽 상단</b>이며, <code>transform</code> 속성에 변환 함수(transform function)를 지정하여 요소를 <b>이동</b>(<code>translate</code>), <b>회전</b>(<code>rotate</code>), <b>크기 변경</b>(<code>scale</code>), <b>기울이기</b>(<code>skew</code>)할 수 있습니다.
      		</p>
      		<p className="mt_ms">
      			또한 <code>matrix()</code> 함수를 사용하면 위의 네 가지 변형을 한 번에 적용할 수 있으며, 각 변형 함수는 <code>X</code>축과 <code>Y</code>축을 개별적으로 제어하는 함수(<code>translateX</code>, <code>translateY</code>, <code>scaleX</code>, <code>scaleY</code> 등)도 제공합니다.
      		</p>
      	</blockquote>

      	<div className="ol_lst indent mt_l">
      		<p className="ml_mn font-16 t_black weight-500">transform 속성은 HTML 요소에 대해 다음과 같은 동작을 제공합니다.</p>
      		<ol>
      			<li className="line_code font14 mt_m">
      				<strong className="mb_sm">요소의 크기를 변경합니다.</strong>
      				<p><code>scale(</code>확대/축소<code>) : scaleX(), scaleY(), scale(x, y)</code></p>
      			</li>
      			<li className="line_code font14 mt_m">
      				<strong className="mb_sm">요소를 기울입니다.</strong>
      				<p><code>skew(</code>비틀기,기울기<code>) : skewX(), skewY()</code></p>
      			</li>
      			<li className="line_code font14 mt_m">
      				<strong className="mb_sm">요소를 움직입니다.</strong>
      				<p><code>translate(</code>이동<code>) : translateX(), translateY(), translate(x, y)</code></p>
      			</li>
      			<li className="line_code font14 mt_m">
      				<strong className="mb_sm">요소를 회전시킵니다.</strong>
      				<p><code>rotate(</code>회전<code>) : rotateX(), rotateY(), rotate(x, y)</code></p>
      			</li>
      			<li className="line_code font14 mt_m">
      				<strong className="mb_sm">요소에 위의 네 가지 동작 중 원하는 동작들을 한 번에 적용시킵니다. <code>skew() = tan()</code></strong>
      				<p><code>matrix( scaleX(), tanY(), tanX(), scaleY(), translateX(), translateY() )</code></p>
      			</li>
      		</ol>
      	</div>
      	
      <CodeBlock title="transform 2D" language="javascript" className="uk_gist_code_box indent mt_ml">
      {`div {
      				transform: none;
      				transform: matrix(1.0, 2.0, 3.0, 4.0, 5.0, 6.0);
      				transform: translate(12px, 50%);
      				transform: translateX(2em);
      				transform: translateY(3in);
      				transform: scale(2, 0.5);
      				transform: scaleX(2);
      				transform: scaleY(0.5);
      				transform: rotate(0.5turn);
      				transform: skewX(30deg);
      				transform: skewY(1.07rad);
      				transform: matrix3d(1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0);
      				transform: translate3d(12px, 50%, 3em);
      				transform: translateZ(2px);
      				transform: scale3d(2.5, 1.2, 0.3);
      				transform: scaleZ(0.3);
      				transform: rotate3d(1, 2.0, 3.0, 10deg);
      				transform: rotateX(10deg);
      				transform: rotateY(10deg);
      				transform: rotateZ(10deg);
      				transform: perspective(17px);

      				transform: translateX(10px) rotate(10deg) translateY(5px);
      			}`}
      </CodeBlock>


      	
      	<section className="txt_ex indent mt_xxl">
      		<h2 className="ml_mn">2D Transform</h2>
      		<blockquote className="uk_note mt_l" role="note">
      			<strong className="sound_only">요약 설명</strong>
      			<p>
      				transform(변형)은 <strong className="t_black">CSS3</strong>에 추가된 기능 중 하나로 2D의 변형을 말합니다.
      				변형은 쉽게 말해서 특정 요소를 여러 가지 방법으로 모양을 바꾸는 것을 의미합니다.<br />
      				일반적으로 변형(transform) 효과는 CSS transition(이동효과)와 함께 사용될 때, 또는 3D 기능들과 함께 사용될 때 진정한 효과가 나타납니다.
      				그렇지만 먼저 가장 기본적인 전환의 형태인 2D 전환에 대해서 이해해야 합니다.<br />
      				본 섹션에서는 2D 변형(전환)에 대해 학습합니다.
      			</p>
      		</blockquote>
      		<div className="indent mt_l">
      			<strong className="ml_mn font-16 t_black"><strong className="t_black">CSS3</strong> 2D transform 속성은 다음과 같습니다.</strong>
      			<div className="ol_lst mt_ms">
      				<ol>
      					<li><code>transform</code> : 요소에 2D 변형(transform)을 적용합니다.</li>
      					<li><code>transform-origin</code> : 요소에 변형(transform)을 적용하는 변환 중심을 설정합니다.</li>
      				</ol>
      			</div>
      		</div>
      		<div className="indent mt_l">
      			<strong className="ml_mn font-16 t_black el_block">
      				2D transform은 프로퍼티값으로 변환함수(transform function)를 사용합니다.<br />
      				변환함수는 다음과 같습니다.
      			</strong>
      			<div className="ol_lst mt_ms">
      				<ol>
      					<li><code>scale(x,y)</code> : 요소의 크기를 주어진 배율만큼 늘리거나 줄입니다. (단위 : 0과 양수)</li>
      					<li><code>scaleX(n)</code> : 요소의 x축 크기를 주어진 배율만큼 늘리거나 줄입니다. (단위 : 0과 양수)</li>
      					<li><code>scaleY(n)</code> : 요소의 y축 크기를 주어진 배율만큼 늘리거나 줄입니다. (단위 : 0과 양수)</li>
      					<li><code>skew(x축각도, y축각도)</code> : 요소를 주어진 각도만큼 각각 x축과 y축 방향으로 기울입니다. (단위 : +/- 각도(deg))</li>
      					<li><code>skewX(각도)</code> : 요소를 주어진 각도만큼 x축 방향으로 기울입니다. (단위 : +/- 각도(deg))</li>
      					<li><code>skewY(각도)</code> : 요소를 주어진 각도만큼 y축 방향으로 기울입니다. (단위 : +/- 각도(deg))</li>
      					<li><code>translate(x,y)</code> : 현재 위치에서 요소를 주어진 x축과 y축의 거리만큼 이동시킵니다. (단위 : px, %, em 등)</li>
      					<li><code>translateX(n)</code> : 현재 위치에서 요소를 주어진 x축의 거리만큼 이동시킵니다. (단위 : px, %, em 등)</li>
      					<li><code>translateY(n)</code> : 현재 위치에서 요소를 주어진 y축의 거리만큼 이동시킵니다. (단위 : px, %, em 등)</li>
      					<li><code>rotate(각도)</code> : 요소를 주어진 각도만큼 시계 방향이나 반시계 방향으로 회전시킵니다. (단위 : +/- 각도(deg))</li>
      					<li><code>matrix(n,n,n,n,n,n)</code> : 6개의 매개변수로 모든 2D 변형 함수를 한 번에 설정합니다. (단위 : px, %, em 등)</li>
      				</ol>
      			</div>
      		</div>

      		
      		<article className="indent mt_xl">
      			<h3 className="ml_mn" data-conlist-h4="true"><i className="t_blue">transform</i> 속성</h3>
      			<div className="ol_lst mt_m">
      				<ol>
      					
      					<li className="tit_h4 line_code">
      						<h4 className="mb_ms">scale() 함수</h4>
      						<p>
      							<code>scale()</code> 함수는 요소의 크기를 주어진 배율만큼 늘리거나 줄일 수 있습니다.<br />
      							값이 1이면 원래 크기를 유지하고, 1보다 크면 확대, 작으면 축소됩니다.<br />
      							부모 요소에 적용하면 하위요소까지 함께 확대/축소되므로 페이지 전체의 확대나 축소에도 사용할 수 있습니다.
      						</p>
      						<p>
      							<code>scale()</code> 함수는 이미지를 확대하거나 축소하는 기능으로도 사용하기 때문에 보통은 이미지 갤러리 등에서 많이 사용됩니다.<br />
      							예를 들어 마우스를 오버(hover)하면 이미지가 커지는 효과 등에 사용합니다.
      							<span className="scale_hover dp_pc">
      								<i><img src="/_assets/images/created_by02.jpg" /></i>
      							</span>
      						</p>
      						<p>
      							<code>transform: scale(<i className="t_blue">sx</i>, <i className="t_green">sy</i>);</code><br />
      							- 만약 <code className="t_green">sy</code>가 설정되어 있지 않다면, <code className="t_blue">sx</code>와 동일한 값으로 간주합니다.<br />
      							<code>ex) transform: scale(<i className="t_blue">2</i>, <i className="t_green">2</i>) == transform: scale(<i className="t_blue">2</i>)</code>
      						</p>
      						<p>
      							<code>transform: scaleX(<i className="t_blue">sx</i>)</code><br />
      							- <code>transform: scale(<i className="t_blue">sx</i>, 1)</code>와 같은 모습을 보여줍니다.
      						</p>
      						<p>
      							<code>transform: scaleY(<i className="t_green">sy</i>)</code><br />
      							- <code>transform: scale(1, <i className="t_green">sy</i>)</code>와 같은 모습을 보여줍니다.
      						</p>
      						
      <CodeBlock title="transform [scale function]" language="javascript" className="uk_gist_code_box mt_ms">
      {`.box1 {
      									transform: scale(1.5, 2);
      								}
      								.box2 {
      									transform: scale(0.7, 0.7);
      								}
      								/* 구형 브라우저 지원용 (현재는 대부분 불필요) */
      								/* -webkit-transform: scale(1.5, 2); */
      								/* -moz-transform: scale(1.5, 2); */
      								/* -o-transform: scale(1.5, 2); */
      								/* -ms-transform: scale(1.5, 2); */`}
      </CodeBlock>

      					</li>

      					
      					<li className="tit_h4 line_code mt_l">
      						<h4 className="mb_ms">skew() 함수</h4>
      						<p>
      							<code>skew()</code> 함수는 <code>x</code>축, <code>y</code>축을 기준으로 각도를 주어 모양을 변형시킵니다.<br />
      							주어진 각도가 양수이면 <code>x</code>, <code>y</code>축의 양의 방향으로, 음수이면 <code>x</code>, <code>y</code>축의 음의 방향으로 기울입니다.<br />
      							<code>x</code>, <code>y</code>축을 한번에 지정할 수 있으며, 콤마(,)로 구분하여 사용하고, <code>x</code>축, <code>y</code>축을 따로 명시하여 사용할 수도 있습니다.
      						</p>
      						<figure className="img_figure mt_ms">
      							<figcaption className="mt_0">[<code className="bg_none t_blue">skew()</code> 함수]</figcaption>
      							<img src={`${IMG.CSS}/cssAdvanced/uxkm_transform-skew.svg`} alt="skew() 함수" className="mt_m" />
      						</figure>
      						<p className="mt_ms">
      							비틀기의 원리 예시로 가로 방향으로 비틀면 <code>x</code>축은 가만히 있고 <code>y</code>축이 비튼 각도만큼 회전하게 됩니다.<br />
      							다시 말해, <code>skewX()</code>를 지정하면 <code>y</code>축이 회전하게 됩니다.<br />
      							값이 양수면 시계 반대방향으로 회전(비틀게 되고)하고, 값이 음수면 시계 방향으로 회전(비틀게)하게 됩니다.
      						</p>
      						
      						<p>
      							<code>transform: skew(<i className="t_blue">ax</i>, <i className="t_green">ay</i>);</code><br />
      							- 요소에 <code className="t_blue">x</code>, <code className="t_green">y</code>축을 중심으로 설정된 각도만큼 기울입니다.<br />
      							- 만약 <code className="t_green">ay</code>값을 지정하지 않으면, <code className="t_green">y</code>축으로는 기울임(skew) 연산이 적용되지 않습니다.<br />
      							ex) <code>transform: skew(20deg) == transform: skewX(20deg)</code>
      						</p>
      						
      						
      <CodeBlock title="transform [skew function]" language="javascript" className="uk_gist_code_box mt_ms">
      {`div { transform: skewX(angle); } /* x축을 기준으로 정해진 각도만큼 기울입니다. */
      								div { transform: skewY(angle); } /* y축을 기준으로 정해진 각도만큼 기울입니다. */

      								.box {
      									transform: skew(20deg, 30deg);
      								}
      								.box-x {
      									transform: skewX(20deg);
      								}
      								.box-y {
      									transform: skewY(30deg);
      								}
      								/* 구형 브라우저 지원용 (현재는 대부분 불필요) */
      								/* -webkit-transform, -moz-transform, -o-transform, -ms-transform */`}
      </CodeBlock>

      					</li>

      					
      					<li className="tit_h4 line_code mt_l">
      						<h4 className="mb_ms">translate() 함수</h4>
      						<p>
      							<code>translate()</code> 함수는 현재 위치에서 요소를 주어진 <code>x</code>축과 <code>y</code>축의 거리만큼 이동시킵니다.<br />
      							주어진 거리가 양수이면 기준점에서 오른쪽 방향으로, 음수이면 왼쪽 방향으로 이동합니다.
      						</p>
      						<p><code>translate()</code> 효과는 원래의 위치를 기반으로 이동하는 것을 의미하며, 중요한 것은 원래의 위치 정보는 남아있다는 사실입니다.</p>
      						<p><code>translate()</code> 값이 하나만 있을 경우에는 가로 방향 이동만을 나타내며 세로 방향 이동은 없다고 간주합니다.</p>
      						<p>
      							<code>transform: translate(<i className="t_blue">tx</i>, <i className="t_green">ty</i>);</code><br />
      							- 좌표평면에서의 2D 이동(translation) 함수입니다.<br />
      							- 만약 <code className="t_green">ty</code>값을 지정하지 않는다면, 0 값으로 가정하여 계산합니다.<br />
      							<code>ex) transform: translate(300px) == tranform: translateX(300px)</code>
      						</p>
      						
      						
      <CodeBlock title="transform [translate function]" language="javascript" className="uk_gist_code_box mt_ms">
      {`div { transform: translateX(tx); } /* 요소를 x축을 따라 지정된 값만큼 이동(translate)시킵니다. */
      								div { transform: translateY(ty); } /* 요소를 y축을 따라 지정된 값만큼 이동(translate)시킵니다. */

      								.box {
      									transform: translate(100px, 50px);
      								}
      								/* 구형 브라우저 지원용 (현재는 대부분 불필요) */
      								/* -webkit-transform, -moz-transform, -o-transform, -ms-transform */`}
      </CodeBlock>

      						<figure className="img_figure mt_ms">
      							<figcaption className="mt_0">
      								<i>[<code className="bg_none t_blue">translate</code> 함수 예시]</i><br />
      								<span className="mt_s">8번 박스를 이동시켰음에도 본래 차지(그 공간을 사용하지 않더라도)하고 있던 공간(빨간 보더 공간)은 유지합니다.</span>
      							</figcaption>
      							<img src={`${IMG.CSS}/cssAdvanced/uxkm_transform-translate.svg`} alt="translate 함수 예시" className="mt_m" />
      						</figure>
      						<blockquote className="uk_note mt_ms" role="note">
      							<h5 className="sound_only">요약 설명</h5>
      							<p>
      								크롬 개발자이자 프론트 엔드 개발의 선두주자인 Paul Irish는 position 속성값과 translate()
      								두 가지 방법을 사용한 애니메이션에 대해 다음과 같이 언급하고 있습니다.
      							</p>
      							<p className="mt_ms">
      								<b className="font-16">‘</b>
      								top/left는 각 프레임을 그려내는 데 너무 많은 시간을 소요한다. 그 결과 약간 뚝뚝 끊어지는 듯이 전이가 이루어진다.<br />
      								반면에 translate는 요소가 GPU(RenderLayer라고 불림)상에서 자기 자신의 레이어 위에 놓여지도록 만든다.<br />
      								GPU 상에서 그 자신의 레이어 위에 놓이기 때문에 2D 전환이 훨씬 더 빠르게 진행되고 프레임 속도도 빠르다.
      								<b className="font-16">’</b>
      							</p>
      						</blockquote>
      						<p className="mt_ms">
      							<b className="weight-500 t_blue">
      								<code className="t_blue">translate()</code> 함수와 <code className="t_blue">position</code> 과 연관된 속성인 <code className="t_blue">top, left, right, bottom</code> 의 차이
      							</b><br />
      							<code>position</code> 속성은 요소를 컨테이너를 기준으로 움직입니다.<br />
      							<code>translate()</code>는 언제나 요소의 본래(자신) 위치를 기준으로 하여 새 위치를 잡게 됩니다.<br />
      							<code>position: absolute;</code>가 적용된 요소는 레이아웃상의 다른 요소들과 완전히 별개의 존재가 되어 형제 요소들에게 어떤 영향도 미치지 않게 됩니다.<br />
      							<code>translate()</code> 함수는 물리적으로 시야에 존재하는 한 요소가 본래 차지하고 있던 공간을 그대로 유지하게 됩니다.
      						</p>
      					</li>

      					
      					<li className="tit_h4 line_code mt_l">
      						<h4 className="mb_ms">rotate() 함수</h4>
      						<p><code>rotate()</code> 함수는 각도(degree), 턴(turn)을 이용해서 지정할 수 있습니다.</p>
      						<p>
      							요소를 자신의 원점(또는 <code>transform-origin</code> 속성에 설정된 지점)을 기준으로 주어진 각도만큼 시계 방향이나 반시계 방향으로 회전시킵니다.<br />
      							회전의 각도가 양수이면 시계 방향으로 회전하고, 음수이면 시계 반대방향으로 회전하게 됩니다.
      						</p>
      						
      						
      <CodeBlock title="transform [rotate function]" language="javascript" className="uk_gist_code_box mt_ms">
      {`div { tranform: rotate(angle); }

      								.box {
      									transform: rotate(30deg);
      								}
      								/* 구형 브라우저 지원용 (현재는 대부분 불필요) */
      								/* -webkit-transform, -moz-transform, -o-transform, -ms-transform */`}
      </CodeBlock>

      					</li>

      					
      					<li className="tit_h4 line_code mt_l">
      						<h4 className="mb_ms">matrix() 함수</h4>
      						<p>
      							모든 2D transform 함수(<code>translate</code>, <code>rotate</code>, <code>scale</code>, <code>skew</code>)를 한 줄에 설정할 수 있습니다.<br />
      							이 함수는 2D 변형(transform)과 관련된 6개의 매개변수를 가집니다. <code>matrix()</code> 함수의 매개변수 순서는 다음과 같습니다.<br />
      							<code>matrix( scaleX(), tanY(), tanX(), scaleY(), translateX(), translateY() )</code>
      						</p>
      						<p>
      							너비(scaleX)와 높이(scaleY)는 0부터 9까지의 수치를 사용합니다.<br />
      							1은 기본 값, 2는 두 배, 0.5는 절반이며 음수는 사용할 수 없습니다.
      						</p>
      						<p>매트릭스에서의 기울기는 <code>skew()</code> 함수를 쓰지 않고 <code>tan()</code> 함수를 사용하며, 0부터 9까지의 수치로 표현합니다.</p>
      						
      						<figure className="img_figure mt_ms">
      							<figcaption className="mt_0">[ <b className="t_black weight-500">matrix 표</b> ]</figcaption>
      							
      							<img src={`${IMG.CSS}/cssAdvanced/uxkm_2D_affine_transformation_matrix 1.svg`} alt="matrix 표" className="max-w600 mt_m" />
      						</figure>
      						
      <CodeBlock title="transform [matrix function]" language="javascript" className="uk_gist_code_box mt_ms">
      {`.box {
      									transform: matrix(2, 0.3, 0.2, 1.3, 150, 100);
      								}
      								/* 구형 브라우저 지원용 (현재는 대부분 불필요) */
      								/* -webkit-transform, -moz-transform, -o-transform, -ms-transform */`}
      </CodeBlock>

      					</li>
      				</ol>
      			</div>
      		</article>

      		
      		<article className="indent mt_xl">
      			<h3 className="ml_mn"><i className="t_blue">transform-origin</i> 속성</h3>
      			<p className="mt_m">
      				<code>transform-origin</code>은 <code>transform</code>에 대한 원점을 지정하는 속성입니다.<br />
      				요소의 기본 기준점을 설정할 때 사용되며, 기본 기준점은 요소의 정중앙입니다. (50%, 50% 또는 center center)<br />
      				<code>translate()</code>는 기준점을 변경하여도 일정 거리만큼 이동하므로 의미가 없습니다.<br />
      				설정값으로 <code>%</code>, <code>px</code>, <code>top</code>, <code>left</code>, <code>bottom</code>, <code>right</code>을 사용할 수 있습니다.<br />
      				<code className="t_blue">0, 0</code>은 <code className="t_blue">top left</code>와 같고, <code className="t_green">100% 100%</code>는 <code className="t_green">bottom right</code>과 같은 값입니다.
      			</p>

      			<ol className="dot_lst indent mt_s">
      				<li>기본 값은 50% 50%. 즉 요소의 정중앙입니다.</li>
      				<li>값으로는 <code>px</code>, <code>%</code>, <code>cm</code> 등등 외에도 <code>left</code>, <code>center</code>, <code>right</code>, <code>top</code>, <code>bottom</code>를 쓸 수 있습니다.</li>
      			</ol>
      			
      <CodeBlock title="transform [transform-origin]" language="javascript" className="uk_gist_code_box mt_m">
      {`.box {
      						transform-origin: 50% 100%;
      						/* 구형 브라우저 지원용 (현재는 대부분 불필요) */
      						/* -webkit-transform-origin: 50% 100%; */
      						/* -moz-transform-origin: 50% 100%; */
      						/* -o-transform-origin: 50% 100%; */
      						/* -ms-transform-origin: 50% 100%; */
      					}

      					/* 백분율(%) 과 대응 가능한 키워드 */
      					.box {
      						transform-origin: 0 0;        /* left top */
      						transform-origin: 0 50%;      /* left center */
      						transform-origin: 0 100%;     /* left bottom */
      						transform-origin: 50% 0;      /* center top */
      						transform-origin: 50% 50%;    /* center center */
      						transform-origin: 50% 100%;   /* center bottom */
      						transform-origin: 100% 0;     /* right top */
      						transform-origin: 100% 50%;   /* right center */
      						transform-origin: 100% 100%;  /* right bottom */
      					}`}
      </CodeBlock>

      		</article>

      		
      		<article className="view_editor edit_code indent mt_xxl">
      			<h3 className="ve_tit ml_mn">2D Transform 예제</h3>
      			<Suspense fallback={<EditorFallback />}>
      <UkEditorTarget target="css/step03/4.1.transform/4.1.1.css3-2d-transform.html" className="uk_editor mt_m min_height_550 mb_result_height_500" mode="htmlmixed" theme="moxer" browser="default" result minHeight="550px" mbResultHeight="500px" />
      </Suspense>
      		</article>
      	</section>

      	
      	<article className="indent mt_xxl">
      	<h2 className="ml_mn"><i className="t_blue">2D transform</i> 테스트 및 <i className="t_blue">요약설명</i></h2>
      		<p className="mt_l">
      			위에 설명된 <i className="t_blue">transform의 속성</i> 과 <i className="t_blue">transform-origin</i>을 직접 테스트 할 수 있습니다.<br />
      			각 속성의 input값을 변경하여 마우스오버(hover) 또는 result버튼을 클릭하세요.<br />
      			<span className="reference mt_l">테스트기 출처 : <a href="http://921430km.com/_temp/transform/2d.php" target="_blank" rel="noreferrer" title="새창열림">http://921430km.com/2d</a></span>
      		</p>

      		<div className="iframe_con kmtemp_resize_iframe mt_ml">
      			<iframe src="/_code_samples/kmtemp/transform/2d.html" width="100%" height="100%" scrolling="no"></iframe>
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
      		<img src={`${IMG.CSS}/04_css_01_1.png`} alt="CSS transform 2D" />
      		<figcaption className="reference">
      			CSS transform 2D
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
      			<li className="reference"><a href="https://css-tricks.com/almanac/properties/b/backface-visibility/" target="_blank" rel="noreferrer" className="fas" title="새창열림">backface-visibility</a></li>
      			<li className="reference"><a href="http://westciv.com/tools/3Dtransforms/" target="_blank" rel="noreferrer" className="fas" title="새창열림">3D 변환 테스트 페이지</a></li>
      			<li className="reference"><a href="http://thewebrocks.com/demos/3D-css-tester/" target="_blank" rel="noreferrer" className="fas" title="새창열림">3D CSS Tester</a></li>
      		</ul>
      	</aside>
    </>
  )
}

export default CssTransformPart1Page
