function FolderCommonReference({ sectionTitle = "" }) {
  return (
    <>
      <footer className="reference_box">
      	<strong className="tit">{sectionTitle} 참조</strong>
      	<ul className="link_lst">
      		<li className="reference"><a href="https://www.w3.org/TR/WCAG22/" title="새창 열림" target="_blank" className="fas">Web Content Accessibility Guidelines (WCAG) 2.2</a></li>
      		<li className="reference"><a href="https://www.w3.org/WAI/WCAG22/Understanding/" title="새창 열림" target="_blank" className="fas">WCAG 2.2 Understanding Docs</a></li>
      		<li className="reference"><a href="https://www.w3.org/WAI/WCAG22/quickref/?versions=2.2&showtechniques=111" title="새창 열림" target="_blank" className="fas">WCAG (Quick Reference)</a></li>
      		<li className="reference"><a href="https://a11ykr.github.io/wcag22/" title="새창 열림" target="_blank" className="fas">웹 콘텐츠 접근성 지침(WCAG) 2.2 - 번역판</a></li>
      		<li className="reference"><a href="https://codepen.io/smashingmag/pen/MWLgQzm" title="새창 열림" target="_blank" className="fas">smashingmagazine - WCAG 2.2 Checklist with Filter and Links</a></li>
      		<li className="reference"><a href="https://developer.mozilla.org/ko/docs/Web/Accessibility/Guides/Understanding_WCAG" title="새창 열림" target="_blank" className="fas">MDN 웹 컨텐츠 접근성 지침 이해하기</a></li>
      		<li className="reference"><a href="https://blog.naver.com/prologue/PrologueList.naver?blogId=mohw2016" title="새창 열림" target="_blank" className="fas">보건복지부 블로그</a></li>
      		<li className="reference"><a href="https://www.mois.go.kr/frt/bbs/type001/commonSelectBoardArticle.do?bbsId=BBSMSTR_000000000045&nttId=69451" title="새창 열림" target="_blank" className="fas">행정안전부 - 전자정부 웹사이트 UI UX 가이드라인</a></li>
      		<li className="reference"><a href="https://nuli.navercorp.com/community/article" title="새창 열림" target="_blank" className="fas">널리 알리는 기술 소식 커뮤니티</a></li>
      	</ul>
      </footer>
    </>
  )
}

export default FolderCommonReference
