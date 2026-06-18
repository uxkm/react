import { useAccessibilityPageMeta } from '@/hooks/useAccessibilityPageMeta.js'
import { IMG } from '@/config/path'

const IMG_A11Y = IMG.A11Y

const PAGE_LAYOUT = {
  mainClass: 'a11yStart',
  type: 'accessibility',
  titleSticky: true,
  info: false,
  note: false,
  topAnimation: true,
  sideMenu: true,
  reference: false,
  contentList: true,
  depth3Last: true,
  bottomEditor: false,
}

const PAGE_DATA = {
  title: '접근성이란?',
  description:
    '접근성이란 웹사이트, 애플리케이션, 그리고 다양한 디지털 콘텐츠가 모든 사용자, 특히 장애가 있는 사용자에게도 원활하게 이용될 수 있도록 설계하는 것을 의미합니다. 이 페이지에서는 접근성의 정의, 중요성, 그리고 이를 구현하기 위한 모범 사례를 소개합니다.',
  keyword:
    'Accessibility, a11y, wcag, kwcag, macag, kiosk, 접근성, 웹 콘텐츠 접근성, 한국형 웹 콘텐츠 접근성, 모바일 앱 접근성, 무인정보단밀기 접근성',
}

function A11yStartPage() {
  useAccessibilityPageMeta({
    ...PAGE_DATA,
    layout: PAGE_LAYOUT,
  })

  return (
    <>
      <blockquote className="uk_note mt_xxl" role="note">
        <strong className="sound_only">요약 설명</strong>
        <p>
          접근성(accessibility)은 “ability to access(접근 가능성)”이며, 모든 사용자가 장애 여부와 상관없이
          웹사이트, 모바일 애플리케이션, 무인단말기(ATM, 키오스크, 자동 티켓 발매기 등등) 등 다양한 디지털
          서비스와 기술을 원활하게 이용할 수 있도록 보장하는 중요한 원칙입니다.
          <br />
          접근성을 향상시키는 것은 사용자 경험을 개선하고, 사회적 포용성을 높이며, 법적 요구사항을 충족시키는 데
          중요한 역할을 합니다.
        </p>
      </blockquote>

      <section className="mt_xxl indent">
        <h2 className="ml_mn">1.1. 접근성 (Accessibility)</h2>
        <p className="mt_l">
          접근성은 모든 사용자가 제품, 서비스, 환경에 쉽게 접근하고 사용할 수 있도록 하는 특성이며, 장애가 있는
          사람뿐만 아니라, 노인, 어린이, 임산부 등 다양한 사용자 그룹을 포함합니다.
          <br />
          국제표준화 기구(ISO) 및 웹 접근성 이니셔티브(WAI)와 같은 기구들은 접근성 관련 국제표준을 제공합니다.
          국내에서는 이러한 국제표준을 바탕으로 국내형 접근성 지침을 마련하여 적용하고 있습니다.
        </p>
        <blockquote className="uk_note mt_l" role="note">
          <strong className="sound_only">요약 설명</strong>
          <p>
            <span className="el_inline_block quote_text">
              Accessibility essenital for some, useful for all.
            </span>
            <br />
            <b className="el_inline_block t_black weight-600 quote_text">
              접근성은 일부에게는 필수이며 모두에게는 유용하다.
            </b>
            <br />– W3C WAI –
          </p>
          <p className="mt_ms">
            <span className="el_inline_block quote_text">
              Accessibility in the physical world is the degree to which an environment is usable by as many people as
              possible.
            </span>
            <br />
            <b className="el_inline_block t_black weight-600 quote_text">
              물리적 세계에서 접근성은 가능한 많은 사람들이 환경을 이용할 수 있는 정도.
            </b>
            <br />
          </p>
          <p className="mt_ms">
            <span className="el_inline_block quote_text">
              Digital accessibility is the ability of a website, mobile application or electronic document to be easily
              navigated and understood by a wide range of users, including those users who have visual, auditory, motor
              or cognitive disabilities.
            </span>
            <br />
            <b className="el_inline_block t_black weight-600 quote_text">
              디지털 접근성은 시각, 운동, 청각, 언어 또는 인지 장애가 있는 개인을 포함하여 광범위한 사용자가
              웹사이트, 모바일 어플리케이션 또는 전자 문서를 쉽게 탐색하고 이해할 수 있는 능력
            </b>
          </p>
        </blockquote>

        <figure className="img_figure mt_l a11y_1_figure">
          <figcaption className="mt_0 font-16 t_black">
            <b>[장애구분을 상징하는 다이어그램]</b>
          </figcaption>
          <div className="figure_inner">
            <figure>
              <img src={`${IMG_A11Y}/1_a11y01.png`} alt="고령자" />
              <figcaption>고령자</figcaption>
            </figure>
            <figure>
              <img src={`${IMG_A11Y}/1_a11y02.png`} alt="시각장애" />
              <figcaption>시각장애</figcaption>
            </figure>
            <figure>
              <img src={`${IMG_A11Y}/1_a11y03.png`} alt="시간제 휠체어 사용자" />
              <figcaption>시간제 휠체어 사용자</figcaption>
            </figure>
            <figure>
              <img src={`${IMG_A11Y}/1_a11y04.png`} alt="휠체어 사용자" />
              <figcaption>휠체어 사용자</figcaption>
            </figure>
          </div>
        </figure>

        <figure className="img_figure mt_l a11y_1_figure">
          <img src={`${IMG_A11Y}/1_a11y00.png`} alt="접근성이란?" />
          <figcaption>접근성이란?</figcaption>
        </figure>

        <article className="mt_xl indent">
          <h3 className="ml_mn t_blue">1.1.1. 일반인 vs 비장애인</h3>
          <blockquote className="uk_note mt_ml" role="note">
            <strong className="sound_only">요약 설명</strong>
            <p>
              <b className="t_black">올바른 용어를 사용해야 합니다.</b>
              <br />
              언어 사용은 사회적 감수성과 밀접하게 연결되어 있으며, 특히 장애를 가진 사람들을 언급할 때는 더욱
              신중해야 합니다.
            </p>
            <p>
              언어는 생각과 태도를 형성하는데 중요한 역할을 하므로, 용어 선택에 있어서 사려 깊고 섬세한 접근이
              필요합니다. 장애인과 비장애인을 구분하여 사용하는 것은 사회적 포용성을 증진하고 모든 사람의 존엄성을
              인정하는 데 기여합니다.
              <br />
              이와 같은 언어의 변화는 사회 전반의 인식 개선으로 이어질 수 있습니다.
            </p>
          </blockquote>
          <ol className="mt_ml ol_lst info_lst gap-column-ms">
            <li className="weight-600-before t_black_before">
              <strong>일반인 정의</strong>
              <p>
                일반적으로 사회 다수를 이루는 사람들을 가리키는 말입니다. 특별한 특징을 지니지 않는다는 뉘앙스를
                포함하고 있습니다.
                <br />
                <span className="t_red">
                  <b>문제점 :</b> 이 용어는 장애인을 포함하지 않는 ‘표준’ 혹은 ‘보통’의 범주를 설정함으로써, 장애인을
                  비정상적이거나 예외적인 집단으로 분리시키는 부정적인 인식을 강화할 수 있습니다. 이러한 이유 때문에
                  많은 사람들이 이 용어 사용을 피하려 하고 있습니다.
                </span>
              </p>
            </li>
            <li className="weight-600-before t_black_before">
              <strong>비장애인 정의</strong>
              <p>
                장애가 없는 사람들을 지칭하기 위해 사용되는 용어입니다. 장애인과 비장애인으로 구분하여 사용함으로써
                모든 사람들이 각자의 특성을 가지고 있음을 인정하는 데 도움을 줍니다.
                <br />
                <span className="t_blue">
                  <b>장점 :</b> ‘비장애인’이라는 용어는 장애인을 한 집단으로 명시하면서, 장애인과 비장애인이 동등하게
                  사회의 구성원임을 인식하는 데 긍정적인 역할을 합니다. 이는 통합적이고 포괄적인 사회를 지향하는 데
                  중요한 언어적 반영입니다.
                </span>
              </p>
            </li>
            <li className="weight-600-before t_black_before">
              <strong>언어의 중요성</strong>
              <p>
                사회적 감수성을 반영하는 언어 사용은 모든 구성원이 존중받고 포함된다는 느낌을 받도록 돕습니다.
                <br />
                ‘일반인’이라는 용어가 장애인을 일상에서 배제하는 듯한 뉘앙스를 줄 수 있다면, ‘비장애인’이라는 용어
                사용은 모든 인간이 각기 다른 특성을 가지고 있으며, 그것이 장애 여부에 관계없이 모두를 포괄한다는
                사실을 강조합니다.
              </p>
            </li>
          </ol>
          <figure className="img_figure mt_ml a11y_1_figure">
            <img
              src={`${IMG_A11Y}/1_a11y05.png`}
              alt="장애우 vs 장애인 올바른 용어를 사용하세요! 관련 웹툰 이미지"
              className="max-w700"
            />
            <figcaption>
              [출처] 장애인먼저실천운동본부, 한국장애인신문(http://www.koreadisablednews.com)
            </figcaption>
          </figure>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn t_blue">1.1.2. 장애의 유형</h3>
          <blockquote className="uk_note mt_ml" role="note">
            <strong className="sound_only">요약 설명</strong>
            <p>
              ‘장애인복지법’ 2조2항의 규정에서 장애유형은 크게 신체적 장애와 정신적 장애로 분류되며, 손상의 정도에
              따라 6등급으로 구분됩니다. 신체적 장애는 외부신체기능의 장애와 내부 기관의 장애로 구분되며, 정신적
              장애에는 지적장애, 정신장애, 자폐성장애가 있습니다.
            </p>
          </blockquote>
          <div className="mt_ml indent">
            <h4 className="ml_mn">신체적 장애</h4>
            <ul className="mt_s dot_lst">
              <li>
                <b>외부신체기능 장애</b> : 지체장애인, 뇌병변장애인, 시각장애인, 청각장애인, 언어장애인, 안면장애인
              </li>
              <li>
                <b>내부기관 장애</b> : 신장장애인, 심장장애인, 호흡기장애인, 간기능장애인, 장루요루장애인, 간질장애인
              </li>
            </ul>
          </div>
          <div className="mt_ml indent">
            <h4 className="ml_mn">정신적 장애</h4>
            <p className="mt_s dot_lst">지적장애인, 정신장애인, 자폐성장애인</p>
          </div>
          <figure className="img_figure mt_ml a11y_1_figure">
            <img src={`${IMG_A11Y}/1_a11y06.png`} alt="장애유형" className="max-w700" />
            <figcaption>[장애 유형]</figcaption>
          </figure>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn t_blue">1.1.3. 축약형 사용(A11Y)</h3>
          <blockquote className="uk_note mt_ml" role="note">
            <strong className="sound_only">요약 설명</strong>
            <p>
              ‘Accessibility’라는 단어의 긴 철자를 대문자 ‘A11Y’, 또는 소문자 ‘a11y’ 형태로도 표현되는데, 이것은
              ‘Accessibility’라는 단어의 긴 철자를 글자수가 한정된 소셜 미디어에서 축약형으로 사용한 것에서
              시작되었습니다.
              <br />
              즉, ‘Accessibility’의 ‘A’와 ‘Y’ 사이에는 11개의 글자가 있기 때문에 ‘A11Y’가 된 것입니다.
            </p>
          </blockquote>
          <figure className="img_figure mt_ml a11y_1_figure">
            <img src={`${IMG_A11Y}/1_a11y07.png`} alt="a11y" className="max-w700" />
            <figcaption>
              [출처] 장애인먼저실천운동본부, 한국장애인신문(http://www.koreadisablednews.com)
            </figcaption>
          </figure>
          <p className="mt_ml">
            <b>A11Y와 비슷하게 사용되고 있는 용어는 다음과 같습니다.</b>
          </p>
          <ul className="dot_lst indent">
            <li>
              <b>k8s</b> : Kubernetes(쿠버네티스)
            </li>
            <li>
              <b>i18n</b> : Internationalization(국제화)
            </li>
            <li>
              <b>l10n</b> : Localization(지역화)
            </li>
            <li>
              <b>m17n</b> : Multilingualization(다국어화)
            </li>
            <li>
              <b>c14n</b> : Canonicalization(정규화)
            </li>
          </ul>
          <p className="mt_ml">
            ‘A11Y’는 WCAG와 재활법 508조(Section 508 of the Rehabilitation Act)나 특정 국가들에만 국한되는 문제가
            아닙니다. 이는 세계 여러 나라의 웹 콘텐츠와 컴퓨터 시스템 접근성을 향상시키기 위한 국제적인 운동입니다.
            디지털화가 가속화 되어가는 국제 경제 상황에서, ‘A11Y’ 운동에 참여하고 있는 개발자들은 WCAG와 이와 유사한
            여러 지침들을 활용함으로써 국제적으로 웹사이트와 컴퓨터 시스템 접근성 향상을 위해 노력하는 동시에 모든
            국가들의 접근성 규정들을 준수하게 되는 것입니다.
          </p>
        </article>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn">1.2. 웹 접근성 (Web Accessibility)</h2>
        <blockquote className="uk_note mt_l" role="note">
          <strong className="sound_only">요약 설명</strong>
          <p>
            웹 접근성은 장애를 가진 사람들이 웹사이트와 웹 애플리케이션을 이해, 이용, 탐색할 수 있도록 보장하는
            것을 의미합니다. 국제표준화 기구에서는 웹 콘텐츠 접근성 지침(WCAG - Web Content Accessibility Guidelines)을
            제공하고 있으며, 이는 전 세계적으로 널리 채택되고 있습니다.
            <br />
            국내에서는 이를 기반으로 국내형 웹 접근성 지침(KWCAG - Korean Web Content Accessibility Guidelines)을
            개발하여 웹 접근성 향상을 위해 노력하고 있습니다.
          </p>
          <p className="mt_ms">
            <b>월드 와이드 웹을 창시한 팀 버너스 리(Tim Berners-Lee)는 웹을 다음과 같이 정의하였습니다.</b>
            <br />
            <i className="el_inline_block quote_text">
              The power of the Web is in its universality. Access by everyone regardless of disability is an essential
              aspect.
            </i>
            <br />
            <b className="t_black quote_text">
              웹의 힘은 보편성에 있습니다. 장애에 관계없이 모든 사람이 접근할 수 있는 것이 필수적인 요소입니다.
            </b>
          </p>
          <p className="mt_ms">
            즉, 웹 접근성이란, 제약을 가진 사용자(장애인, 노인 등), 혹은 어떠한 기술 환경에서도 전문적인 능력 없이
            웹 사이트에서 제공하는 모든 정보에 접근할 수 있도록 보장하는 것이며, 웹 접근성이 보장되면 취약계층뿐만
            아니라 일반 사람들도 혜택을 누릴 수 있게 됩니다.
          </p>
        </blockquote>

        <article className="mt_xl indent">
          <h3 className="ml_mn t_blue">1.2.1. 웹 접근성 준수 고려사항</h3>
          <ol className="mt_ml ol_lst info_lst gap-column-ms">
            <li className="weight-600-before t_black_before">
              <strong>시각</strong>
              <p>실명, 색각 이상, 다양한 형태의 저시력을 포함한 시각 장애</p>
            </li>
            <li className="weight-600-before t_black_before">
              <strong>이동성</strong>
              <p>
                파킨슨병, 근육병, 뇌성마비, 뇌졸중과 같은 조건으로 인한 근육 속도 저하, 근육 제어 손실로 말미암아 손을
                쓰기 어렵거나 쓸 수 없는 상태
              </p>
            </li>
            <li className="weight-600-before t_black_before">
              <strong>청각</strong>
              <p>영상, 음성 콘텐츠에 자막, 원고, 수화 등의 대체수단 부제로 인한 인식이 불가능한 상태</p>
            </li>
            <li className="weight-600-before t_black_before">
              <strong>인지</strong>
              <p>문제 해결과 논리 능력, 집중력, 기억력에 문제가 있는 정신 지체 및 발달 장애, 학습 장애(난독증, 난산증 등)</p>
            </li>
          </ol>
        </article>

        <figure className="img_figure mt_l a11y_1_figure">
          <img src={`${IMG_A11Y}/1_a11y08.png`} alt="웹 접근성 (Web Accessibility)" />
          <figcaption>웹 접근성 (Web Accessibility)</figcaption>
        </figure>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn">1.3. 모바일 접근성 (Mobile Accessibility)</h2>
        <blockquote className="uk_note mt_l" role="note">
          <strong className="sound_only">요약 설명</strong>
          <p>
            모바일 접근성은 모바일 디바이스와 애플리케이션을 사용할 때 모든 사람들이 정보와 기능에 접근할 수 있도록
            하는 것을 의미하며, 터치스크린 사용, 소형 화면 크기, 다양한 입력 방식 등 모바일 특성을 고려한
            접근성입니다.
          </p>
          <p className="mt_ms">
            국내 행정안전부고시 제2011-38호에 따르면
            <span className="el_block t_black weight-600 quote_text">
              <i className="weight-800">모바일 접근성</i>이란 모바일 기기를 사용하여 모바일 애플리케이션을 이용하고자
              하는 장애인, 고령자 등을 포함한 모든 사람들에게 활용가능성이 제공됨을 말한다.
            </span>
            라고 정의하고 있습니다.
          </p>
          <p className="mt_ms">
            국제 웹 접근성 이니셔티브는 모바일 접근성을 WCAG(Web Content Accessibility Guidelines)의 일환으로 다루고
            있으며, 국내에서는 이러한 국제 기준에 맞춰 모바일 앱 접근성 지침을 마련하여 적용하고 있습니다.
          </p>
        </blockquote>

        <article className="mt_xl indent">
          <h3 className="ml_mn t_blue">1.3.1. 모바일 접근성의 주요 측면</h3>
          <ol className="mt_ml ol_lst info_lst gap-column-ms">
            <li className="weight-600-before t_black_before">
              <strong>텍스트 및 타이포그래피</strong>
              <p>
                글꼴 크기, 줄 간격, 대비 및 텍스트 크기 조정 기능과 같은 요소를 고려하여 텍스트를 사용자가 읽고 이해할
                수 있도록 보장합니다.
              </p>
            </li>
            <li className="weight-600-before t_black_before">
              <strong>색상 및 대비</strong>
              <p>
                적절한 색상 조합 및 대비 수준을 적용하여 시각 장애 또는 색맹이 있는 개인이 텍스트 및 그래픽 요소를
                쉽게 구별하고 인식할 수 있도록 합니다.
              </p>
            </li>
            <li className="weight-600-before t_black_before">
              <strong>터치 대상</strong>
              <p>
                이동성 또는 손재주 장애가 있는 사용자가 쉽게 상호 작용할 수 있도록 적절한 간격으로 충분히 큰 터치
                대상을 설계합니다.
              </p>
            </li>
            <li className="weight-600-before t_black_before">
              <strong>스크린 리더 지원</strong>
              <p>시각 장애가 있는 사용자가 애플리케이션을 이해하고 탐색할 수 있도록 스크린 리더와의 호환성을 보장합니다.</p>
            </li>
            <li className="weight-600-before t_black_before">
              <strong>키보드 접근성</strong>
              <p>
                이동이 제한되거나 터치 스크린을 사용할 수 없는 사용자를 지원하기 위해 키보드 및 대체 입력 장치에 대한
                접근을 용이하게 합니다.
              </p>
            </li>
            <li className="weight-600-before t_black_before">
              <strong>방향 및 레이아웃</strong>
              <p>
                가로 또는 세로 모드에서 애플리케이션을 사용하는 기능과 같이 특정 선호 사항이나 신체적 제한이 있는
                사용자를 수용할 수 있도록 유연한 방향 및 레이아웃 설정을 허용합니다.
              </p>
            </li>
            <li className="weight-600-before t_black_before">
              <strong>캡션, 대본, 오디오 설명</strong>
              <p>
                청각 또는 시각 장애가 있는 사용자를 위해 폐쇄 캡션, 대본, 오디오 설명과 같은 멀티미디어 콘텐츠를
                소비하는 대체 수단을 제공합니다.
              </p>
            </li>
          </ol>
        </article>

        <figure className="img_figure mt_l a11y_1_figure">
          <img src={`${IMG_A11Y}/1_a11y09.png`} alt="모바일 접근성 (Mobile Accessibility)" />
          <figcaption>모바일 접근성 (Mobile Accessibility)</figcaption>
        </figure>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn">1.4. 무인단말기 접근성 (Kiosk Accessibility)</h2>
        <blockquote className="uk_note mt_l" role="note">
          <strong className="sound_only">요약 설명</strong>
          <p>
            무인단말기 접근성은 ATM, 키오스크, 자동 티켓 발매기 등과 같은 무인 서비스 단말기를 모든 사용자가 쉽게
            사용할 수 있도록 하는 것을 목표로 합니다.
          </p>
        </blockquote>

        <article className="mt_xl indent">
          <h3 className="ml_mn t_blue">1.4.1. 개념</h3>
          <p className="mt_ml">
            무인단말기 접근성은 장애를 가진 사용자를 포함하여 모든 사용자가 무인단말기를 이해하고, 사용하고, 탐색할
            수 있도록 보장하는 것을 목적으로 합니다. 이는 장비의 물리적 배치, 인터페이스 디자인, 입력 및 출력 방법 등
            다양한 측면을 포함합니다.
          </p>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn t_blue">1.4.2. 중요성</h3>
          <ol className="mt_ml">
            <li>
              점점 더 많은 서비스가 무인단말기를 통해 제공되고 있기 때문에, 이러한 기기의 접근성은 사용자에게
              독립성과 평등한 서비스 이용 기회를 제공하는 데 중요합니다.
            </li>
          </ol>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn t_blue">1.4.3. 구현 요소</h3>
          <ol className="mt_ml ol_lst info_lst gap-column-ms">
            <li className="weight-600-before t_black_before">
              <strong>물리적 접근성</strong>
              <p>
                단말기는 휠체어 사용자도 접근할 수 있는 높이와 위치에 설치되어야 합니다. 또한, 시각 장애인 사용자를
                위한 점자 표시나 오디오 출력 기능이 필요할 수 있습니다.
              </p>
            </li>
            <li className="weight-600-before t_black_before">
              <strong>인터페이스 접근성</strong>
              <p>
                화면에 표시되는 콘텐츠는 충분한 대비와 큰 글꼴 크기로 제공되어야 합니다. 입력 장치(버튼, 터치스크린
                등)는 다양한 사용자가 쉽게 조작할 수 있도록 설계되어야 합니다.
              </p>
            </li>
            <li className="weight-600-before t_black_before">
              <strong>소프트웨어 접근성</strong>
              <p>
                소프트웨어는 명확하고 간단한 메뉴 구조를 가지며, 필요한 경우 오디오 지원을 포함해야 합니다. 사용자가
                진행 상황을 쉽게 이해할 수 있도록 도와주는 피드백도 중요합니다.
              </p>
            </li>
            <li className="weight-600-before t_black_before">
              <strong>법적 요구사항</strong>
              <p>
                여러 국가에서는 무인단말기의 접근성을 법적으로 규정하고 있습니다. 예를 들어, 미국의 경우 미국
                장애인법(ADA - The Americans with Disabilities Act)과 같은 법률이 무인단말기의 접근성 기준을 정의하고
                있습니다.
              </p>
            </li>
          </ol>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn t_blue">1.4.4. 사용자별 무인정보단말기 이용상 어려움</h3>

          <div className="mt_ml indent">
            <h4 className="ml_mn">고령자(노인)</h4>
            <ol className="mt_ms ol_lst">
              <li>글씨나 아이콘이 너무 작고 흐려서 알아보기 어려움</li>
              <li>화면이 복잡하고 이해하기 어려워 무엇을 조작해야 하는지 알 수 없음</li>
              <li>음성안내가 제공되지 않아 내용을 파악하는 데 오래걸림</li>
              <li>사용자 입력 대기 시간이 짧아서 내용을 파악하기도 전에 초기 화면으로 전환되어 버림</li>
            </ol>
          </div>

          <div className="mt_ml indent">
            <h4 className="ml_mn">휠체어 사용자</h4>
            <ol className="mt_ms ol_lst">
              <li>디스플레이 위치가 높아 화면을 볼 수 없음</li>
              <li>조작 버튼 위치가 높아 조작이 어려움</li>
              <li>화면에 빛의 비침 때문에 따라 보기 어려움</li>
            </ol>
          </div>

          <div className="mt_ml indent">
            <h4 className="ml_mn">시각 장애인</h4>
            <ol className="mt_ms ol_lst">
              <li>
                <strong>전맹</strong> : 음성, 점자도 지원이 되지 않아 사용할 수 없음
              </li>
              <li>
                <strong>저시력</strong> : 화면 색 대비가 뚜렷하지 않아서 내용을 파악하기 어려움
              </li>
              <li>
                <strong>청각 장애인</strong> : 기계에서 신용카드가 나오지 않는 등 고장시, 담당자 통화 버튼으로
                음성통화가 어려워 도움을 청할 방법이 없음
              </li>
            </ol>
          </div>
        </article>

        <figure className="img_figure mt_l a11y_1_figure">
          <img src={`${IMG_A11Y}/1_a11y10.png`} alt="무인단말기 접근성 (Kiosk Accessibility)" />
          <figcaption>무인단말기 접근성 (Kiosk Accessibility)</figcaption>
        </figure>
      </section>

      <section className="indent mt_xxl">
        <h2 className="ml_mn">1.5. 접근성 모범사례 (Accessibility Best Practices)</h2>
        <blockquote className="uk_note mt_l" role="note">
          <strong className="sound_only">요약 설명</strong>
          <p>
            접근성은 특정 사용자만을 위한 기능이 아니라, 모든 사용자를 위한 기본 품질입니다. 아래는 접근성을 높이기
            위해 고려해야 할 대표 모범사례를 요약한 내용입니다 (시각적 표현, 조작 편의, 이해를 돕는 정보, 보조기술
            지원, 일관성).
          </p>
        </blockquote>

        <article className="mt_xl indent">
          <h3 className="ml_mn t_blue">1.5.1. 모범사례가 필요한 이유</h3>
          <ol className="mt_ml ol_lst info_lst gap-column-ms">
            <li className="weight-600-before t_black_before">
              <strong>모든 사용자의 사용 기회 보장</strong>
              <p>장애 유무나 환경에 관계없이 동등하게 정보와 기능을 이용할 수 있습니다.</p>
            </li>
            <li className="weight-600-before t_black_before">
              <strong>사용자 만족도 및 신뢰도 향상</strong>
              <p>이해·조작·인지 부담을 낮춰 서비스 경험이 개선됩니다.</p>
            </li>
            <li className="weight-600-before t_black_before">
              <strong>서비스 품질 및 경쟁력 강화</strong>
              <p>범용성 높은 UI는 유지보수성과 전환율 등 핵심 지표에도 긍정적입니다.</p>
            </li>
            <li className="weight-600-before t_black_before">
              <strong>사회적 가치 실현과 지속가능성 확보</strong>
              <p>포용적 설계는 규정 준수와 브랜드 신뢰를 함께 높입니다.</p>
            </li>
          </ol>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn t_blue">1.5.2. 핵심 모범사례 5가지</h3>
          <ol className="mt_ml ol_lst info_lst">
            <li>
              <strong className="t_black">시각적 표현의 배려</strong>
              <p className="mt_s">정보 구조를 명확히 하고 대비·가독성을 확보해 의미가 잘 전달되도록 합니다.</p>
            </li>
            <li>
              <strong className="t_black">조작 및 사용의 편의</strong>
              <p className="mt_s">누구나 쉽게 조작할 수 있도록 클릭/터치 영역과 조작 흐름을 단순하게 만듭니다.</p>
            </li>
            <li>
              <strong className="t_black">이해를 돕는 정보 제공</strong>
              <p className="mt_s">명확한 라벨·도움말·오류 안내로 사용자가 다음 행동을 예측할 수 있게 합니다.</p>
            </li>
            <li>
              <strong className="t_black">다양한 보조 수단 지원</strong>
              <p className="mt_s">대체 텍스트, 자막/원고, 스크린리더 친화적 구조 등 보조기술을 고려합니다.</p>
            </li>
            <li>
              <strong className="t_black">일관성 있는 경험 제공</strong>
              <p className="mt_s">동일한 의미의 UI는 같은 위치/형태로 제공해 학습 부담을 줄입니다.</p>
            </li>
          </ol>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn t_blue">1.5.3. 서비스 영역별 적용 예시</h3>
          <ol className="mt_ml ol_lst info_lst gap-column-ms">
            <li className="weight-600-before t_black_before">
              <strong>웹사이트</strong>
              <p>명확한 내비게이션, 키보드 접근, 충분한 대비와 대체 텍스트 제공</p>
            </li>
            <li className="weight-600-before t_black_before">
              <strong>모바일 앱</strong>
              <p>터치 타깃 크기 확보, 일관된 제스처/흐름, 스크린리더 라벨 제공</p>
            </li>
            <li className="weight-600-before t_black_before">
              <strong>무인단말기(키오스크)</strong>
              <p>큰 버튼/텍스트, 음성 안내 등 다양한 입력·출력 수단 고려</p>
            </li>
            <li className="weight-600-before t_black_before">
              <strong>영상 콘텐츠</strong>
              <p>자막/원고 제공, 필요 시 수어·화면해설 등 대체 수단 고려</p>
            </li>
            <li className="weight-600-before t_black_before">
              <strong>문서/파일(PDF 등)</strong>
              <p>문서 구조(제목/목록)와 태그, 대체 텍스트 등 접근 가능한 문서 작성</p>
            </li>
          </ol>
        </article>

        <article className="mt_xl indent">
          <h3 className="ml_mn t_blue">1.5.4. 적용 체크리스트</h3>
          <ol className="mt_ml ol_lst info_lst gap-column-ms">
            <li className="weight-600-before t_black_before">
              <strong>인지하기 쉬운가요?</strong>
              <p>중요 정보가 눈에 잘 띄고, 텍스트/아이콘 의미가 모호하지 않나요?</p>
            </li>
            <li className="weight-600-before t_black_before">
              <strong>조작하기 쉬운가요?</strong>
              <p>키보드/터치로 충분히 조작 가능하고, 실수 방지가 되어 있나요?</p>
            </li>
            <li className="weight-600-before t_black_before">
              <strong>이해하기 쉬운가요?</strong>
              <p>라벨/안내/오류 메시지가 친절하고, 다음 행동을 예측할 수 있나요?</p>
            </li>
            <li className="weight-600-before t_black_before">
              <strong>보조 수단을 지원하나요?</strong>
              <p>대체 텍스트, 자막/원고, 스크린리더 친화적 구조를 제공하나요?</p>
            </li>
            <li className="weight-600-before t_black_before">
              <strong>지속적으로 개선하나요?</strong>
              <p>사용자 피드백을 반영하고, 변경 시 접근성 회귀를 점검하나요?</p>
            </li>
          </ol>
        </article>

        <figure className="img_figure mt_l a11y_1_figure">
          <img src={`${IMG_A11Y}/1_a11y11.png`} alt="접근성 모범사례" />
          <figcaption>접근성 모범사례</figcaption>
        </figure>
      </section>

      <footer className="reference_box">
        <strong className="tit">접근성이란? 참조</strong>
        <ul className="link_lst">
          <li className="reference">
            <a href="https://www.w3.org/WAI/fundamentals/accessibility-principles/ko" target="_blank" rel="noreferrer" className="fas">
              W3C 접근성 원칙
            </a>
          </li>
          <li className="reference">
            <a href="https://www.w3.org/WAI/fundamentals/accessibility-intro/ko" target="_blank" rel="noreferrer" className="fas">
              W3C 웹 접근성 소개
            </a>
          </li>
          <li className="reference">
            <a href="https://developer.mozilla.org/ko/docs/Web/Accessibility" target="_blank" rel="noreferrer" className="fas">
              MDN 접근성
            </a>
          </li>
          <li className="reference">
            <a href="https://www.kioskui.or.kr/" target="_blank" rel="noreferrer" className="fas">
              무인정보단말기 UI 플랫폼
            </a>
          </li>
          <li className="reference">
            <a href="http://www.webwatch.or.kr/" target="_blank" rel="noreferrer" className="fas">
              웹와치
            </a>
          </li>
          <li className="reference">
            <a href="https://damoa.or.kr/main/inner.php?sMenu=main" target="_blank" rel="noreferrer" className="fas">
              다모아
            </a>
          </li>
          <li className="reference">
            <a
              href="https://www.bokjibank.or.kr/SW_bbs/notice/view.php?zipEncode=90wDU9vEU9wBLjxzJzspLrxydrMCH9MyMCvrjzvpLbxEun2ybrMCH9MyMmtpTvNBFDxzPzNj9qgBLLMz5v2AM0tzTfMB5v2AMKMAR9MyFD1u9qusKjxyVjMj9u3zM0tzNfgC39MBMahAW5cDZLgBVu2yPr3BU9YCIj2xxn1l9WMC19fDZLgB"
              target="_blank"
              rel="noreferrer"
              className="fas"
            >
              장애인복지통합정보망 복지뱅크 - 장애유형 15가지
            </a>
          </li>
        </ul>
      </footer>
    </>
  )
}

export default A11yStartPage
