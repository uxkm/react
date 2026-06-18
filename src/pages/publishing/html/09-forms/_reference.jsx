function FolderCommonReference({ sectionTitle = "" }) {
  return (
    <>
      <footer className="reference_box">
        <strong className="tit">{sectionTitle} 참조</strong>
        <ul className="link_lst">
          <li className="reference">
            <a
              href="https://www.w3.org/TR/html52/sec-forms.html#sec-forms"
              target="_blank"
              className="fas"
              title="새창열기"
            >
              W3C 문서
            </a>
          </li>
          <li className="reference">
            <a
              href="https://developer.mozilla.org/ko/docs/Web/HTML/Element"
              target="_blank"
              className="fas"
              title="새창열기"
            >
              MDN 문서
            </a>
          </li>
          <li className="reference">
            <a
              href="https://cccaccessibility.org/web/web-developer-tutorials/explicit-and-implicit-form-labels"
              target="_blank"
              className="fas"
              title="새창열기"
            >
              Explicit and Implicit Form Labels
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}

export default FolderCommonReference;
