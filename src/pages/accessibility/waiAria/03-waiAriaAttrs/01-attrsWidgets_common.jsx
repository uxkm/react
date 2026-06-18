

function AttrsWidgetsCommonPage() {

  return (
    <>
      <blockquote className="uk_note common_note mt_xxl" role="note">
      	<strong className="sound_only">요약 설명</strong>
      	<p>
      		<b>위젯 속성(Widget Attributes)</b>은 위젯의 동작, 외관, 상호작용 방식을 정의하는 속성을 의미합니다.
      		위젯은 웹 애플리케이션에서 사용자와 상호작용할 수 있는 요소를 나타내며,
      		이들 속성은 위젯이 어떻게 표시되고 작동하는지를 결정합니다.
      		웹 개발에서는 이러한 속성을 사용하여 다양한 사용자 인터페이스 요소를 설정하고 제어할 수 있습니다.<br />
      		특히 장애가 있는 사용자들을 위한 접근성을 개선하기 위해 중요한 역할을 합니다.
      	</p>
      	<p className="reference mt_ms">
      		<a href="https://www.w3.org/WAI/ARIA/apg/" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">WAI-ARIA Authoring Practices</a><br />
      		<a href="https://www.w3.org/TR/wai-aria-1.2/#attrs_widgets" target="_blank" rel="noreferrer" title="새창 열림" className="weight-500 fas">W3C ARIA Widget Attributes</a>
      	</p>
      </blockquote>
    </>
  )
}

export default AttrsWidgetsCommonPage
