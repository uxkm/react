import { usePageMeta } from "@/components/common/PageMeta";

const PAGE_LAYOUT = {
  mainClass: "html_bookmark",
  type: "publishing",
  info: true,
  note: false,
  sideMenu: true,
  reference: false,
  contentList: false,
  depth3Last: true,
  comments: false,
};

const PAGE_DATA = {
  title: "HTML 참조 사이트",
  description: "HTML의 도움이 되는 사이트 정보를 모아놓은 섹션입니다.",
  keyword: "Markup, HTML, 참조 사이트, 북마크, bookmark, html 도움되는 사이트",
};

const MAIN_REFERENCES = [
  [
    "W3C New in HTML 5.1",
    "What’s New in HTML 5.1",
    "https://www.sitepoint.com/whats-new-in-html-5-1/",
  ],
  [
    "W3C HTML 5.1",
    "W3C Recommendation 3 October 2017",
    "https://www.w3.org/TR/html51/",
  ],
  [
    "W3C HTML 5.2",
    "W3C Recommendation, 14 December 2017",
    "https://www.w3.org/TR/html52/",
  ],
  [
    "W3C HTML 5.3",
    "W3C Working Draft, 18 October 2018",
    "https://www.w3.org/TR/html53/",
  ],
  [
    "HTML Spec whatwg",
    "HTML Spec whatwg",
    "https://html.spec.whatwg.org/multipage/",
  ],
  [
    "W3C HTML HTML 4.01 Specification",
    "W3C Recommendation 24 December 1999",
    "https://www.w3.org/TR/1999/REC-html401-19991224/",
  ],
  [
    "MDN Web Doc",
    "HTML elements reference",
    "https://developer.mozilla.org/en-US/docs/Web/HTML/Element",
  ],
  [
    "W3C doctype",
    "Doctypes and markup styles",
    "https://www.w3.org/wiki/Doctypes_and_markup_styles",
  ],
  [
    "W3C Contents Model",
    "W3C Contents Model",
    "https://www.w3.org/TR/html52/dom.html#content-models",
  ],
  [
    "W3C Tutorials w3schools",
    "W3C Tutorials w3schools",
    "https://www.w3schools.com/html/default.asp",
  ],
  ["HTML Cheat Sheet", "OverApi HTML Cheat Sheet", "http://overapi.com/html"],
  ["W3C Github", "W3C Github", "https://github.com/w3c/html"],
  [
    "WHATWG Elements",
    "W3C List of elements",
    "https://html.spec.whatwg.org/multipage/indices.html#attributes-table",
  ],
  ["caniuse.com", "caniuse.com", "https://caniuse.com/"],
  [
    "MDN Web Demo",
    "Demos of open web technologies",
    "https://developer.cdn.mozilla.net/en-US/docs/Web/Demos_of_open_web_technologies",
  ],
];

const EXTRA_REFERENCES = [
  ["W3C HTML 5.1 Changes:", "https://www.w3.org/TR/html51/changes.html"],
  [
    "W3C HTML 5.2 Changes:",
    "https://www.w3.org/TR/2016/WD-html52-20160818/changes.html#changes-fpwd",
  ],
  [
    "HTML 5.1 Implementation report:",
    "http://w3c.github.io/test-results/html51/implementation-report.html",
  ],
  [
    "Welcome to HTML 5.2!:",
    "http://developer.telerik.com/featured/welcome-to-html-5-2/",
  ],
  [
    "HTML5.2の第一草案が公開されました:",
    "https://www.internetacademy.jp/blog/ja/2016/09/20160904-hiroki.html",
  ],
  [
    "HTML 5.1勧告によるHTML5の仕様変更点まとめ:",
    "http://mae.chab.in/archives/2948",
  ],
  [
    "PLAN 2014:",
    "https://dev.w3.org/html5/decision-policy/html5-2014-plan.html",
  ],
  ["웹플랫폼워킹그룹:", "https://www.w3.org/WebPlatform/WG/"],
  ["웹플랫폼워킹그룹 기술사양 공개 GitHub:", "https://github.com/w3c/html"],
  [
    "W3C 블로그 – WORKING ON HTML 5.1:",
    "https://www.w3.org/blog/2016/04/working-on-html5-1/",
  ],
  [
    "Picturefill – A RESPONSIVE IMAGE POLYFILL :",
    "http://scottjehl.github.io/picturefill/",
  ],
  [
    "Using Responsive Images (Now) :",
    "http://alistapart.com/article/using-responsive-images-now",
  ],
  [
    "Built-in Browser Support for Responsive Images :",
    "https://www.html5rocks.com/ko/tutorials/responsive/picture-element/",
  ],
];

function BookmarkPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  });

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          W3C의 규격이 W3C 권고안에 이르기까지의 과정은
          <br />
          &quot;초안 (Working Draft)&quot;
          <br />
          {"->"} &quot;최종 초안 (Last Call Working Draft)&quot;
          <br />
          {"->"} &quot;권고 후보 (CR : Candidate Recommendation)&quot;
          <br />
          {"->"} &quot;권고안 (PR : Proposed Recommendation)&quot;
          <br />
          {"->"} &quot;W3C 권고안 (Rec : Recommendation)&quot;
          <br />
          이라는 5개의 단계가 있습니다.
        </p>
      </blockquote>

      <section className="txt_ex">
        <h2 className="sound_only">참조 사이트 링크</h2>

        {MAIN_REFERENCES.map(([heading, label, href]) => (
          <article key={heading} className="indent_max txt_ex mt_l">
            <h3 className="ml_mn">{heading}</h3>
            <p className="reference indent mt_s">
              <a href={href} target="_blank" rel="noreferrer" title="새창열림">
                {label}
              </a>
            </p>
          </article>
        ))}

        <article className="ol_lst indent mt_xxl">
          <h3 className="sound_only">기타 링크</h3>
          <ol>
            {EXTRA_REFERENCES.map(([label, href], index) => (
              <li
                key={href}
                className={`reference${index === 0 ? "" : " mt_s"}`}
              >
                {label}
                <br />
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  title="새창열림"
                >
                  {href}
                </a>
              </li>
            ))}
          </ol>
        </article>
      </section>
      <aside className="browser_support mt_xxl" data-tit="bookmark page">
        <ul>
          <li className="ie">지원</li>
          <li className="edge">지원</li>
          <li className="chrome">지원</li>
          <li className="firefox">지원</li>
          <li className="opera">지원</li>
          <li className="safari">지원</li>
        </ul>
      </aside>
    </>
  );
}

export default BookmarkPage;
