# B2B 화면 구성

## OOCSS 클래스 규칙

구조·파트·스킨·상태를 구분합니다. B2B 전용 클래스의 파트와 스킨은 공통 UI와 동일하게 `_`로 연결합니다.

- 구조: `footer`, `header`, `card`
- 파트: `footer_company`, `footer_company-details`, `header_nav`, `card_content-title`
- 스킨: `footer_default`, `header_default`, `full-menu_default`, `card_content`, `card_callout`, `card_mint`
- 상태: `is-open`, `is-selected`, `is-disabled`

헤더·푸터·전체메뉴는 구조 클래스와 스킨 클래스를 함께 적용합니다. 예: `className="footer footer_default"`. 메인 섹션은 배치, 위젯은 데이터, 카드 모듈은 재사용 구조와 스킨을 담당합니다.

가이드 좌측 위젯 메뉴의 메인 구성 미리보기는 `/pub/preview/b2b/main-section?section=...`에서 선택한 영역만 표시합니다. `hero`·`cards`·`insights`·`cases`·`callouts`는 메인의 실제 섹션을 재사용하고, `newsletter`는 구독 카드만 표시합니다. 헤더·푸터·플로팅은 숨깁니다. `screen/b2b/main/sections/`는 페이지 구성용 폴더이므로 독립 라우트로 등록하지 않습니다.

2026-11-13 전달된 전체메뉴 디자인 기준입니다. 퍼블리싱 목록은 `public/data/pub/b2b/`의 JSON에서 관리합니다. 기존 화면 ID·담당자·일정·기획/디자인 링크·비고는 유지합니다. 일반 화면 본문은 퍼블리싱 골격이며, 전체메뉴 위젯과 B2B 공통 헤더는 `src/widgets/b2b/common/`에 구현했습니다.

`FullMenuContent`의 기업교육·회사소개 접기·펼치기는 공통 `Accordion`·`AccordionItem`·`AccordionPanel`로 구성합니다. `defaultValue={initialSection}`으로 처음 열릴 영역을 지정하고, `collapsible`로 모두 접기를 지원하며 `effect="none"`으로 즉시 전환합니다. 접근성 속성과 열린 상태는 공통 컴포넌트가 관리하며 프로젝트 스타일은 `.is-open`·`.accordion_trigger`를 사용합니다.

| 전체메뉴 | 화면 폴더 (`src/screen/b2b/` 기준) |
| --- | --- |
| 메인 | `main/` |
| 기업교육 > AX교육 | `contents/ax/{overview,ai-search,competency,ai-studio,workshop,camp}/` |
| 기업교육 > IT교육 | `contents/it/` |
| 기업교육 > 직무교육 | `contents/job/{professional,industry,certification}/` |
| 기업교육 > 리더십 | `contents/leadership/`, 하위 `assessment/`, `executive/`, `mba/` |
| 기업교육 > 법정필수 | `contents/mandatory/`, 하위 `features/`, `courses/`, `estimate/` |
| 기업교육 > 외국어 | `contents/language/`, 하위 `ai-language/`, `language-life/` |
| 기업교육 > 중소기업 전용 | `contents/small-business/` |
| 서비스 > 러닝플랫폼 | `service/platform/`, 하위 `ai/`, `consulting/` |
| 서비스 > 러닝·진단·컨설팅·BPO 서비스 | `service/{learning,diagnosis,consulting,bpo}/` |
| HR인사이트 > 멀캠ON·자료실 | `insight/{on,resources}/{list,detail}/` |
| 문의하기 > 기업교육문의·플랫폼도입문의 | `contact/{education,platform}/` |
| 문의하기 > 법정교육 간편견적 | `contents/mandatory/estimate/`로 연결, 중복 집계 제외 |
| 회사소개 > 멀티캠퍼스 소개·CEO인사말·연혁 | `company/{intro,ceo,history}/` |
| 회사소개 > 윤리/준법경영 | `company/ethics/{sericeo,management,compliance}/` |
| 회사소개 > 지속가능경영 | `company/sustainability/{esg,environment,diversity,human-rights,safety,information,consumer,contribution,esg-data}/` |
| 회사소개 > 투자자정보 | `company/investors/{financial,shareholders,stock-price,disclosure,ir}/` |
| 회사소개 > 홍보 | `company/pr/news/{list,detail}/`, `company/pr/awards/` |

각 화면은 `index.tsx`와 `skeleton/indexSkeleton.tsx`로 구성합니다. `contents/job/index.tsx` 등 기존 소개 화면, 견적 단계, 문의 입력 영역, 메일 연계는 보조 퍼블리싱 항목으로 유지합니다. 공통 위젯·메인 섹션 프리뷰는 가이드 좌측 위젯 메뉴에서 제공합니다. 공개교육 로드맵, 리더십의 SERICEO, OPIc, 부정제보, 인재채용은 기존 외부 링크를 유지하며 화면 파일을 추가하지 않습니다. 회사소개 윤리/준법경영 아래의 SERICEO는 첨부 이미지의 표기를 기준으로 내부 화면 골격을 등록했습니다.

변경된 경로는 AX캠프 `contents/ax/camp`, 주주정보 `company/investors/shareholders`, 언론보도 `company/pr/news/{list,detail}`입니다. 기존 경로 대신 새 경로를 사용합니다. 주가정보는 `stock-price`로 분리했습니다. 공통 전체메뉴 프리뷰는 `src/screen/pub/preview/b2b/full-menu/`에 유지하며, 회사소개는 해당 메뉴의 아코디언을 펼쳐 확인합니다.

첨부된 스타일 수치(헤더 높이 68px, 메뉴 패널 가로 패딩 30px·간격 8px·모서리 12px, 제목 20px/700·항목 18px/400)를 전체메뉴 스타일에 반영했습니다. `src/app/b2b/layout.jsx`가 `src/widgets/b2b/ProjectLayout.tsx`를 연결하고, ProjectLayout이 공통 헤더·푸터·퀵메뉴를 AppLayout props로 전달합니다. 헤더의 메뉴 버튼은 전체메뉴 모달을 엽니다. 실제 로고 파일명은 `/images/common/logo_black.png`입니다. 메뉴 데이터는 `src/widgets/b2b/common/menuData.ts`, 스타일은 `src/styles/pages/b2b/common/_header.scss`에서 관리합니다.

공통 푸터는 `src/widgets/b2b/common/Footer.tsx`에서 고객센터·SNS·패밀리사이트, 인증 마크, 하단 링크·회사 정보를 렌더링합니다. `ProjectLayout.tsx`의 `footer` prop으로 전달하며, 작업 프리뷰 `/pub/preview/b2b/footer`에서는 같은 위젯을 한 번만 표시합니다. 이미지 출처는 `public/images/common/footer/README.md`에 정리했습니다.

위젯 단독 프리뷰는 `/pub/preview/b2b/gnb`(헤더), `/pub/preview/b2b/footer`(푸터), `/pub/preview/b2b/full-menu`(전체메뉴)입니다. 이 화면들은 공통 배너·헤더·푸터·플로팅을 숨기고 위젯만 렌더링합니다. 브라우저 탭 제목은 유지합니다.

헤더 기본 높이는 68px입니다. 현재 `src/styles/pages/b2b/index.scss`에는 좁은 화면의 재배치 규칙이 있습니다. 1439px 이하에서는 body 최소 너비를 해제하고 헤더의 가로 메뉴를 숨겨 전체메뉴로 연결합니다. 767px 이하에서는 회사소개·기업교육문의 버튼도 숨기고 메인 카드·안내 영역 등을 한 열로 배치합니다. 화면 크기별 구성은 해당 SCSS의 media query에서 관리합니다.

B2B 헤더는 `data-header-scroll="fixed"`로 스크롤 시 숨김을 비활성화하고 상단에 고정합니다. 헤더 높이 68px은 스크롤 중에도 유지합니다.

일반 B2B 본문은 공통 `max-width: 1600px`, `margin-inline: auto`를 적용합니다. 헤더·푸터·위젯 단독 프리뷰는 이 본문 폭 제한에서 제외합니다. 섹션별 전체 너비 구성은 각 본문 작업 시 적용합니다.

메인 화면 `src/screen/b2b/main/index.tsx`는 같은 폴더의 `sections/`에 있는 `MainHero`, `MainCardSection`, `MainInsightSection`, `MainCaseSection`, `MainCalloutSectionTypeA`을 호출합니다. 섹션은 제목·레이아웃·캐러셀을 구성하고, `src/widgets/b2b/main/`에는 섹션 내부에서 사용하는 카드·프로모션 배너·바로가기를 둡니다. 프로모션은 전달된 시안 1개와 제목만 바꾼 동작 확인용 샘플 1개를 등록했으며, 공통 Carousel의 전환·자동재생 제어를 사용합니다. 글래스 그래픽 3개는 시안 참조 생성 이미지로 `public/images/pages/main/`에 보관하며 최종 원본으로 교체할 수 있습니다.

메인 카드 영역은 `MainCardSection`이 프로모션·맞춤상담·진단추천·바로가기 레이아웃을 구성하고 각 영역에서 `MainPromotionBanner`, `MainConsultationCard`, `MainDiagnosisCard`, `MainQuickLinks`를 직접 호출합니다. 각 호출 위의 주석에 영역 설명과 필요한 옵션을 안내합니다. 각 위젯이 문구·링크·이미지를 관리하고 공통 `Card` 모듈을 호출합니다. 별도 통합 데이터 파일은 없습니다. 이미지 prop·슬롯 제어는 개별 위젯에서 지원하며, 섹션에는 `slots`를 사용하지 않습니다.

클래스·화면 식별자·프로젝트 전용 CSS 변수에서 프로젝트 접두사를 제거했습니다. 일반 본문 범위는 `project-content` 클래스로 지정하며, 전체메뉴는 공통 Menu와 충돌하지 않는 `full-menu-content`를 사용합니다. 프로젝트 폴더와 `/b2b` URL은 유지합니다.

## 메인 스크롤 등장 효과

`main/index.tsx`의 `useMainAos(loading)`이 `[data-main-reveal]` 바로 아래의 5개 본문 섹션에 AOS `fade-up`을 연결합니다. 이동 거리 40px, 전환 800ms, `ease-out-cubic`, 진입 offset 80px이며, 위로 스크롤해 진입 지점 이전으로 돌아가면 초기화되어 아래로 스크롤할 때마다 반복 실행합니다. 첫 화면에 이미 보이거나 해시 이동으로 지나온 영역은 즉시 표시하며, 위젯 프리뷰·헤더·푸터에는 적용하지 않습니다.

연동은 `src/widgets/b2b/main/useMainAos.js`, AOS 단일 초기화는 `src/lib/vendor/aos.js`, 이동 거리·동작 줄이기·인쇄 스타일은 `src/styles/pages/b2b/main/_main.scss`에서 관리합니다. 로딩 완료·이미지·폰트·본문 크기 변경에 맞춰 좌표를 갱신하고, 페이지 이동 시 섹션 속성과 관찰을 정리합니다. JavaScript·라이브러리 로딩 실패 또는 동작 줄이기 설정에서도 본문을 읽을 수 있습니다.

참고한 [CJ](https://www.cj.net/)의 본문 섹션별 1회 진입 흐름을 AOS로 구성했습니다. [삼성E&A](https://www.samsungena.com/)는 GSAP·ScrollTrigger 등 별도 스크롤 연출 도구를 사용하며, 여기서는 현재 메인 레이아웃에 맞는 섹션 등장 효과를 적용합니다.

## 메인 시안 typeA / typeB

- 기본 `/b2b`는 typeB 레이아웃에 영상 히어로를 표시합니다. 기존 부유체 히어로는 `/b2b?type=typeB`, 이전 시안은 `/b2b?type=typeA`에서 확인합니다.
- 영상 히어로는 `<MainHero type="typeVideo" />`, `/b2b?type=typeVideo`, 또는 `/pub/preview/b2b/main-section?section=hero&type=typeVideo`로도 호출합니다. 영상과 포스터는 `public/assets/b2b/main/`에 있습니다. PC에서 배경을 반복 재생하고, 모션 축소 시에는 포스터를 표시합니다. 태블릿·모바일에서는 기존 배경을 사용합니다.
- typeB 공지는 `MainTopBanner`에서 헤더 아래에 배치합니다. 헤더는 hero 위의 고정 오버레이이고, hero는 상단부터 `100dvh`를 채웁니다. 헤더 자체의 `backdrop-filter: blur(24px) saturate(1.3)`와 내비 영역의 흰색 6% 표면을 조합해 실제 hero를 흐리게 비춥니다. 표준 속성은 WebKit 속성 뒤에 선언해 CSS 최적화 후에도 유지합니다. 두 번째 섹션부터 내비 표면은 흰색 78%·글자는 검정으로 전환하며, 공지 배너도 같은 반투명 표면과 상태별 글자 색상을 공유합니다.
- PC 첫 hero 안에서 휠을 내리거나 위로 스와이프하면 추천·상담 섹션으로 이동합니다. PageDown·ArrowDown·Space와 하단 이동 버튼도 지원합니다. 이후 본문은 일반 스크롤이며, 모달 안의 스크롤과 확대 제스처는 유지합니다. 모션 축소 환경에서는 즉시 이동합니다. 태블릿·모바일(1099px 이하)은 자동 섹션 이동과 하단 스크롤 안내 없이 일반 스크롤을 사용하며, 창 크기를 바꾸면 동작도 전환됩니다.
- PC·모바일용 배경은 시안 분위기를 참고한 생성 이미지입니다. `public/images/pages/main/hero-type-b.webp`, `hero-type-b-mobile.webp`를 실제 디자인 원본으로 교체할 수 있습니다.

PC hero는 `MainHero`의 `main-hero_artwork` 안에서 투명 도형 8개를 따로 배치합니다. `styles/pages/b2b/main/_hero-artwork.scss`가 도형별 위치·크기·7~18초의 부유 애니메이션을 관리합니다. 화면 밖에서는 재생을 멈추며, 모션 축소 설정에서는 정지합니다. 도형은 장식 요소로 접근성 트리와 클릭 영역에서 제외합니다. 태블릿·모바일은 기존 배경 이미지를 사용합니다.

두 번째 섹션 `MainCardSection`은 typeB에서 프로모션·진단·문의 순서의 3:1:1 카드 배치를 사용하며, 1099px 이하에서는 같은 순서로 세로 배치합니다. 프로모션은 Physical AI와 AX 진단의 두 슬라이드를 표시합니다. 기존 카드 배치·바로가기는 `designType="typeA"`로 보존합니다. 카드 스타일은 `styles/pages/b2b/main/_card-section.scss`에 있습니다.

PC hero의 왼쪽 하단 구체는 `main-hero_overlap`으로 분리합니다. 나머지 도형은 `main-hero_artwork` 안에서 잘라내고, 구체만 hero 아래 흰색 영역으로 100px 이어지도록 배치합니다. 다음 카드 섹션은 180px 간격을 두어 구체와 콘텐츠가 충돌하지 않게 합니다.

우측 퀵메뉴는 기본적으로 +와 맨 위로 버튼만 표시합니다. +를 누르면 서비스 링크 3개가 위로 펼쳐지고, +는 닫기 모양으로 회전합니다. 링크는 접힌 동안 inert 처리하며, Escape로 닫고 +로 포커스를 돌려줍니다. 맨 위로 이동·링크 선택 시 메뉴를 닫습니다. Floating은 bottom-right 배치와 푸터 경계 회피를 사용하며, 태블릿·모바일 숨김 규칙을 유지하며 PC에서는 첫 hero와 맨 위에서도 계속 표시합니다.

### 디자인 유형별 보존 범위

`useMainDesignType`으로 헤더·전체메뉴·공지·퀵메뉴·푸터·본문의 typeA와 typeB를 전환합니다. `useMainPageType`은 typeB 레이아웃에서 히어로 배경도 선택합니다. 전체메뉴 현재 시안은 `FullMenuTypeB`(기업교육·서비스·회사소개 3단), 원본은 `FullMenuTypeA`(아코디언)입니다. 단독 프리뷰 `/pub/preview/b2b/full-menu`에서 확인합니다.

| 영역 | typeA | typeB |
| --- | --- | --- |
| Header / 공지 | 기존 흰 헤더, 헤더 위 공지 | hero에서 투명·아래에서 흰 헤더, 헤더 안 공지 |
| 전체메뉴 | `FullMenuTypeA`, 아코디언 접기·펼치기 | `FullMenuTypeB`, 기업교육·서비스·회사소개 3단 메가메뉴 |
| 퀵메뉴 | `QuickMenuTypeA`, 원형 링크 3개 상시 표시, 우측 상단 | `QuickMenuTypeB`, +로 링크 펼침, 우측 하단 |
| 첫 번째 섹션 | `MainHeroTypeA`, 기존 텍스트 타이틀 | `MainHero`, 전체 화면 비주얼·분리 도형 |
| 두 번째 섹션 | `MainCardSection` typeA, 기존 카드·바로가기 | `MainCardSection` typeB, 큰 프로모션·진단·문의 |
| 세 번째 섹션 | `MainInsightSectionTypeA`, 기존 제목·카드 3개 | `MainInsightSection` typeB, PC 3개씩·모바일 1개씩 이동 |
| 네 번째 섹션 | `MainCaseSectionTypeA`, 기존 coverflow·6개 카드 | `MainCaseSection` typeB, 전체 너비·중앙 정렬·활성 카드 올림 |
| 다섯 번째 섹션 | `MainCalloutSectionTypeA`, 상담·뉴스레터 카드 | 표시하지 않음 |
| Footer | `FooterTypeA`, 기존 고객센터·패밀리사이트 선택·GO | `FooterTypeB`, 어두운 다열 구성·태블릿/모바일 아코디언 |

퀵메뉴 스타일도 `quick-menu_typeA` / `quick-menu_typeB`와 Floating 유형 클래스로 구분합니다. 원본 스타일은 `common/_quick-menu-type-a.scss`에서 유지합니다. typeA의 모바일 재배치 기준은 기존 767px, typeB는 태블릿을 포함한 1099px입니다.

세 번째 인사이트 섹션도 유형을 구분합니다. 원본은 `MainInsightSectionTypeA`에 보관하고 `MainInsightSection`의 `designType`으로 선택합니다. typeB는 평문 제목·썸네일·카테고리·제목·설명의 카드 6개를 표시합니다. 콘텐츠는 `widgets/b2b/main/mainInsightContent.ts`, 스타일은 `styles/pages/b2b/main/_insight-section.scss`에서 관리합니다.

- PC(1100px 이상): 3개 표시·3개씩 이동, 반복 없음. 처음에는 이전 버튼, 마지막에는 다음 버튼을 disabled 처리합니다. dot은 표시하지 않습니다.
- 태블릿·모바일(1099px 이하): 1.12개 표시로 우측 다음 카드 일부 노출, 1개씩 이동, 하단 dot 6개로 직접 이동합니다. 화살표는 숨깁니다.
- typeA는 기존 제목의 브랜드 장식·3개 카드·이동 단위·페이지네이션 없음 구성을 유지합니다.

추가 콘텐츠 3개와 썸네일은 멀티캠퍼스 공식 멀캠ON 목록을 확인했으며, 이미지 출처는 `public/images/@dummy/README.md`에 기록했습니다.

네 번째 고객사례도 `MainCaseSectionTypeA`에 원본을 보존합니다. typeB는 화면 전체 너비의 어두운 배경에 같은 너비의 카드를 가운데 정렬하고 한 개씩 자동 순환합니다. 활성 카드만 `translateY(-18px)`로 위로 올라옵니다. 좌우 버튼은 없고, 키보드로 카드 전체에 초점이 가면 자동 재생이 멈춥니다. 카드 초점은 `aria-label`로 내용을 읽고 내부 마크업은 `aria-hidden`으로 중복 초점을 막습니다. 작은 화면의 더보기 버튼은 카드 아래에 표시합니다.

고객사례 문구는 `widgets/b2b/main/mainCustomerStories.ts`의 시안 기반 UI 확인용 샘플 4종을 순환 확인을 위해 반복한 구성입니다. 실제 고객사 발언으로 확정된 자료가 아닙니다. 배경·간격·활성 효과는 `styles/pages/b2b/main/_case-section.scss`에서 관리합니다. 더보기는 내부 고객사례 목록 라우트가 없어 현재 공식 BPO 서비스의 고객사례가 있는 `https://www.multicampus.com/b2b/kr/service/bpo.html`로 연결했습니다.

다섯 번째 상담·뉴스레터 섹션은 `MainCalloutSectionTypeA`로 보관하며 typeA에서만 렌더링합니다. typeB는 네 번째 고객사례 다음에 푸터가 이어지고, 메인 하단의 별도 흰 여백도 제거합니다. 독립 섹션 프리뷰에서는 원본 상담·뉴스레터 카드를 계속 확인할 수 있습니다.


푸터의 원본 마크업과 동작은 `FooterTypeA.tsx`에서 유지하고, 새 디자인은 `FooterTypeB.tsx`·`footerTypeBData.ts`·`common/_footer-type-b.scss`로 분리합니다. 1099px 이하에서는 로고/SNS·고객센터·회사/안내/Family site 아코디언·회사 정보·약관·인증·저작권 순으로 표시합니다. 단독 프리뷰도 `?type=typeA`로 원본을 확인할 수 있습니다. typeB의 이용약관·개인정보는 공식 공개 경로를 새 창으로 연결하고, 이러닝·위치기반·사업자 정보확인은 현재 페이지 레이어 연결 예정이라 `<a href="">`로 둡니다. 기존 인증 이미지와 대체 텍스트는 두 타입에서 공유합니다.


전체메뉴 typeB는 `common/_full-menu-type-b.scss`에서 별도로 관리합니다. 기업교육·서비스·회사소개를 세 행으로 표시하며, PC 1440px 이상에서는 소개 카드(220px)와 공통 7열 그리드를 사용해 각 행의 메뉴 시작 위치를 맞춥니다. 테두리는 전체 행에 두지 않고 왼쪽 소개 카드에만 연회색 배경과 장식 도형을 표시합니다. 1100~1439px에서는 메뉴 4열, 태블릿은 소개 카드 아래 3열, 모바일은 2열로 재배치합니다. 원본 `FullMenuTypeA`의 아코디언 구조와 데이터는 유지합니다.

전체메뉴 typeB는 dialog 높이를 `100dvh`로 제한하고, 상단 로고·닫기 영역을 flex 고정 행으로 유지합니다. `.full-menu-content_typeB`만 독립 스크롤하며 배경 페이지와 dialog 자체는 스크롤하지 않습니다. typeA 스크롤 구조는 유지합니다.
