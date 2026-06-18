import { usePageMeta } from '@/components/common/PageMeta'
import { IMG } from '@/config/path'

const PAGE_LAYOUT = {
  mainClass: 'css bookmark',
  type: 'publishing',
  info: true,
  note: false,
  sideMenu: true,
  reference: false,
  contentList: false,
  depth3Last: true,
  bottomEditor: false,
  comments: false,
}

const PAGE_DATA = {
  title: '참조 사이트',
  description:
    'W3C CSS 기술 문서에 대한 진행별 상태 및 도움이 되는 사이트 정보를 모아놓은 섹션입니다.',
  keyword:
    'W3C, style, css, Cascading Style Sheets, 기술 문서, 진행별 상태, 참조 사이트, 북마크, bookmark, css 도움되는 사이트',
}

const REFERENCES = [
  [
    'W3C ALL STANDARDS AND DRAFTS',
    '모든 표준 및 초안 명세서',
    'https://www.w3.org/TR/',
  ],
  [
    'W3C HTML 및 CSS',
    'HTML 및 CSS',
    'https://www.w3.org/standards/webdesign/htmlcss',
  ],
  [
    'W3C CSS Specs',
    'W3C CSS current work & how to participate',
    'https://www.w3.org/Style/CSS/current-work',
  ],
  [
    'W3C Cascading Style Sheets, level 1',
    'W3C Recommendation 17 Dec 1996, revised 11 Apr 2008 superseded on 13 September 2018',
    'https://www.w3.org/TR/CSS1/',
  ],
  [
    'W3C CSS 2.1 기술 표준 문서',
    'W3C Recommendation 07 June 2011, edited in place 12 April 2016 to point to new work',
    'https://www.w3.org/TR/CSS2/',
  ],
  [
    'W3C CSS Snapshot 2018',
    'W3C Working Group Note, 22 January 2019',
    'https://www.w3.org/TR/CSS22/',
  ],
  [
    'W3C Selectors Level 3',
    'W3C Recommendation 06 November 2018',
    'https://www.w3.org/TR/selectors-3/',
  ],
  [
    'W3C Selectors Level 4',
    'W3C Working Draft, 21 November 2018',
    'https://www.w3.org/TR/selectors-4/',
  ],
  [
    'Cascading Style Sheets Spec Table (CSS)',
    'CSS 2.1의 속성 요약 명세 테이블',
    'https://www.w3.org/TR/CSS21/propidx.html',
  ],
  [
    'CSS Values and Units Module Level 3',
    'W3C Candidate Recommendation, 6 June 2019',
    'https://www.w3.org/TR/css-values-3/',
  ],
  [
    'CSS tips & tricks',
    'CSS tips & tricks Examples',
    'https://www.w3.org/Style/Examples/007/',
  ],
  [
    'CSS Template Layout Module',
    "Editor's Draft 1 March 2016",
    'https://drafts.csswg.org/css-template/',
  ],
  ['csszengarden', 'www.csszengarden.com', 'http://www.csszengarden.com/'],
  ['css-tricks', 'css-tricks.com', 'https://css-tricks.com/'],
  ['CSS3 TEST', 'css3test.com', 'https://css3test.com/'],
  [
    'CSS4 Selectors',
    'css4-selectors.com',
    'https://css4-selectors.com/selectors/',
  ],
  ['CSS open Api', 'OverAPI.com', 'http://overapi.com/css'],
  [
    'data-URI converter',
    'Image to data-URI converter',
    'https://websemantics.uk/tools/image-to-data-uri-converter/',
  ],
  [
    'HTML5기술지원센터',
    'koreahtml5',
    'https://www.koreahtml5.kr/front/devSupport/usingExList.do',
  ],
]

function BookmarkPage() {
  usePageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  })

  return (
    <>
      <blockquote
        className="uk_note mt_xxl"
        role="note"
        aria-label="CSS 기술 문서에 대한 진행별 상태 요약 설명"
      >
        <strong className="sound_only">요약 설명</strong>
        <p>
          CSS 기술 문서에 대한 진행별 상태
          <br />
          FPWD(First Public Working Draft) : 첫번째 공식 초안 단계
          <br />
          WD(Working Draft) : 초안
          <br />
          CR(Candidate Recommendation) : 권고되는 표준 후보 스펙
          <br />
          PR(Proposed Recommendation) : 표준에 제안된 상태
          <br />
          REC(Recommendation) : 표준으로 채택된 상태
          <br />
          SPSD(Superseded Recommendation ) : 표준이 업데이트되면서 대체된 권고안(표준안)
        </p>
      </blockquote>

      <figure
        className="img_figure mt_l"
        aria-label="W3C css 기술 문서에 대한 진행별 상태 이미지 정보 W3C Recommendations and Notes"
      >
        <figcaption className="mt_0 reference">
          <a
            href="https://w3c.github.io/w3process/#recs-and-notes"
            target="_blank"
            rel="noreferrer"
            title="새창열림"
          >
            [W3C Recommendations and Notes]
          </a>
        </figcaption>
        <img
          src={`${IMG.CSS}/bookmark/uxkm_w3c-process-recs-and-notes.svg`}
          alt="W3C Recommendations and Notes"
          className="mt_m"
        />
      </figure>

      <section className="txt_ex" aria-label="css 참조 사이트 정보">
        <h2 className="sound_only">참조 사이트 링크</h2>

        {REFERENCES.map(([heading, label, href]) => (
          <article key={heading} className="indent_max txt_ex mt_l">
            <h3 className="ml_mn">{heading}</h3>
            <p className="reference indent mt_s">
              <a href={href} target="_blank" rel="noreferrer" title="새창열림">
                {label}
              </a>
            </p>
          </article>
        ))}
      </section>
    </>
  )
}

export default BookmarkPage
