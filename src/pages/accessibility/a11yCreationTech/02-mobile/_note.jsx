function FolderCommonNote({ sectionTitle = "" }) {
  return (
    <>
      <blockquote className="uk_note" role="note">
      	<strong className="sound_only">{sectionTitle} 요약 설명</strong>
      	<ul>
      		<li>
      			<b>접근성 콘텐츠 제작 기법</b>은 모든 사용자,
      			특히 장애가 있는 사용자가 웹과 모바일 콘텐츠에 접근하고 사용할 수 있도록 보장하는 방법이며,
      			웹 접근성 지침(WCAG: Web Content Accessibility Guidelines)과 모바일 접근성 표준을 따르는 것이 중요합니다.
      		</li>
      		<li className="t_blue weight-500">
      			<b>모바일 앱 접근성 콘텐츠 제작 기법</b>이란,
      			사용자가 장애를 갖고 있거나 특정 기능에 제약이 있어도 모바일 앱을 원활하게 이용할 수 있도록 지원하는 방법을 말합니다.
      			접근성을 고려한 콘텐츠 제작은 다양한 사용자들의 요구를 반영해 앱의 전반적인 사용성을 크게 향상시킵니다.
      		</li>
      	</ul>
      </blockquote>
    </>
  )
}

export default FolderCommonNote
