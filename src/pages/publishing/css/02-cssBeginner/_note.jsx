function FolderCommonNote({ sectionTitle = "" }) {
  return (
    <>
      <blockquote className="uk_note" role="note">
      	<strong className="sound_only">{sectionTitle} 요약 설명</strong>
      	<ul>
      		<li>
      			CSS 초급 과정에서는 CSS 단위(상대 길이, 절대 길이)와 선택자(기본 선택자, 복합 선택자, 가상 클래스 등)를 학습합니다.
      			선택자 우선순위(specificity)를 이해하여 스타일이 적용되는 방식을 파악합니다.
      		</li>
      		<li>
      			텍스트와 콘텐츠 스타일링을 위해 색상, 글꼴, 텍스트 정렬 및 장식, 리스트, 테이블 등의 속성을 다룹니다.
      			배경 이미지와 색상을 설정하고, 박스 모델(마진, 패딩, 테두리)을 활용하여 요소의 크기와 여백을 조절합니다.
      		</li>
      		<li>
      			레이아웃을 구성하기 위해 <code>display</code>, <code>position</code>, <code>float</code> 등의 속성을 사용하며,
      			요소의 시각적 효과(<code>box-shadow</code>, <code>border-radius</code>, <code>overflow</code> 등)와 사용자 인터페이스 속성(<code>outline</code>, <code>cursor</code>)을 다룹니다.
      		</li>
      	</ul>
      </blockquote>
    </>
  )
}

export default FolderCommonNote
