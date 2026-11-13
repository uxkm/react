# B2B 화면 구성

## OOCSS 클래스 규칙

구조·파트·스킨·상태를 구분합니다. B2B 전용 클래스의 파트와 스킨은 공통 UI와 동일하게 `_`로 연결합니다.

- 구조: `footer`, `header`, `card`
- 파트: `footer_company`, `footer_company-details`, `header_nav`, `card_content-title`
- 스킨: `footer_default`, `header_default`, `full-menu_default`, `card_content`, `card_callout`, `card_mint`
- 상태: `is-open`, `is-selected`, `is-disabled`

헤더·푸터·전체메뉴는 구조 클래스와 스킨 클래스를 함께 적용합니다. 예: `className="footer footer_default"`. 메인 섹션은 배치, 위젯은 데이터, 카드 모듈은 재사용 구조와 스킨을 담당합니다.

퍼블리싱 목록의 메인 구성 항목은 `/b2b/common/main-section?section=...`에서 선택한 영역만 표시합니다. `hero`·`cards`·`insights`·`cases`·`callouts`는 메인의 실제 섹션을 재사용하고, `newsletter`는 구독 카드만 표시합니다. 헤더·푸터·플로팅은 숨깁니다. 미구현 통합검색은 작업 예정 안내를 표시합니다. `screen/b2b/main/sections/`는 페이지 구성용 폴더이므로 독립 라우트로 등록하지 않습니다.

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
| 문의하기 > 진단&맞춤추천 | `src/widgets/b2b/previews/education-diagnosis/` |
| 회사소개 > 멀티캠퍼스 소개·CEO인사말·연혁 | `company/{intro,ceo,history}/` |
| 회사소개 > 윤리/준법경영 | `company/ethics/{sericeo,management,compliance}/` |
| 회사소개 > 지속가능경영 | `company/sustainability/{esg,environment,diversity,human-rights,safety,information,consumer,contribution,esg-data}/` |
| 회사소개 > 투자자정보 | `company/investors/{financial,shareholders,stock-price,disclosure,ir}/` |
| 회사소개 > 홍보 | `company/pr/news/{list,detail}/`, `company/pr/awards/` |

각 화면은 `index.tsx`와 `skeleton/indexSkeleton.tsx`로 구성합니다. `contents/job/index.tsx` 등 기존 소개 화면, 견적 단계, 문의 입력 영역, 메일 연계, 공통 프리뷰는 보조 퍼블리싱 항목으로 유지합니다. 공개교육 로드맵, 리더십의 SERICEO, OPIc, 부정제보, 인재채용은 기존 외부 링크를 유지하며 화면 파일을 추가하지 않습니다. 회사소개 윤리/준법경영 아래의 SERICEO는 첨부 이미지의 표기를 기준으로 내부 화면 골격을 등록했습니다.

변경된 경로는 AX캠프 `contents/ax/camp`, 주주정보 `company/investors/shareholders`, 언론보도 `company/pr/news/{list,detail}`입니다. 기존 경로 대신 새 경로를 사용합니다. 주가정보는 `stock-price`로 분리했습니다. 공통 전체메뉴 프리뷰는 `src/widgets/b2b/previews/full-menu/`에 유지하며, 회사소개는 해당 메뉴의 아코디언을 펼쳐 확인합니다.

첨부된 스타일 수치(헤더 높이 68px, 메뉴 패널 가로 패딩 30px·간격 8px·모서리 12px, 제목 20px/700·항목 18px/400)를 전체메뉴 스타일에 반영했습니다. `src/app/b2b/template.jsx`가 공통 헤더를 등록하고, 헤더의 메뉴 버튼은 전체메뉴 모달을 엽니다. 실제 로고 파일명은 `/images/common/logo_black.png`입니다. 메뉴 데이터는 `navigation/menuData.ts`, 스타일은 `src/styles/pages/b2b/_navigation.scss`에서 관리합니다.

공통 푸터는 `src/widgets/b2b/common/Footer.tsx`에서 고객센터·SNS·패밀리사이트, 인증 마크, 하단 링크·회사 정보를 렌더링합니다. `template.jsx`의 Footer 슬롯으로 등록하며, 작업 프리뷰 `/b2b/common/footer`에서는 같은 위젯을 한 번만 표시합니다. 이미지 출처는 `public/images/common/footer/README.md`에 정리했습니다.

위젯 단독 프리뷰는 `/b2b/common/gnb`(헤더), `/b2b/common/footer`(푸터), `/b2b/common/full-menu`(전체메뉴)입니다. 이 화면들은 공통 배너·헤더·푸터·플로팅을 숨기고 위젯만 렌더링합니다. 브라우저 탭 제목은 유지합니다.

헤더는 반응형 디자인이 제공되기 전까지 PC 디자인으로 유지합니다. 최소 너비 1440px, 높이 68px이며 메뉴·회사소개·기업교육문의 버튼을 숨기거나 두 줄로 바꾸지 않습니다. 좁은 화면에서는 body 최소 너비 1440px을 유지하고 페이지 전체를 가로 스크롤로 확인합니다. 헤더 내부에는 별도 스크롤을 만들지 않습니다.

B2B 헤더는 `data-header-scroll="fixed"`로 스크롤 시 숨김을 비활성화하고 상단에 고정합니다. 헤더 높이 68px은 스크롤 중에도 유지합니다.

일반 B2B 본문은 공통 `max-width: 1600px`, `margin-inline: auto`를 적용합니다. 헤더·푸터·위젯 단독 프리뷰는 이 본문 폭 제한에서 제외합니다. 섹션별 전체 너비 구성은 각 본문 작업 시 적용합니다.

메인 화면 `src/screen/b2b/main/index.tsx`는 같은 폴더의 `sections/`에 있는 `MainHero`, `MainCardSection`, `MainInsightSection`, `MainCaseSection`을 호출합니다. 섹션은 제목·레이아웃·캐러셀을 구성하고, `src/widgets/b2b/main/`에는 섹션 내부에서 사용하는 카드·프로모션 배너·바로가기를 둡니다. 프로모션은 전달된 시안 1개와 제목만 바꾼 동작 확인용 샘플 1개를 등록했으며, 공통 Carousel의 전환·자동재생 제어를 사용합니다. 글래스 그래픽 3개는 시안 참조 생성 이미지로 `public/images/pages/main/`에 보관하며 최종 원본으로 교체할 수 있습니다.



메인 카드 영역은 `MainCardSection`이 프로모션·맞춤상담·진단추천·바로가기 레이아웃을 구성하고 각 영역에서 `MainPromotionBanner`, `MainConsultationCard`, `MainDiagnosisCard`, `MainQuickLinks`를 직접 호출합니다. 각 호출 위의 주석에 영역 설명과 필요한 옵션을 안내합니다. 각 위젯이 문구·링크·이미지를 관리하고 공통 `Card` 모듈을 호출합니다. 별도 통합 데이터 파일은 없습니다. 이미지 prop·슬롯 제어는 개별 위젯에서 지원하며, 섹션에는 `slots`를 사용하지 않습니다.

클래스·화면 식별자·프로젝트 전용 CSS 변수에서 프로젝트 접두사를 제거했습니다. 일반 본문 범위는 `project-content` 클래스로 지정하며, 전체메뉴는 공통 Menu와 충돌하지 않는 `full-menu-content`를 사용합니다. 프로젝트 폴더와 `/b2b` URL은 유지합니다.
