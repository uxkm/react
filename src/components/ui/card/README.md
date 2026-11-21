# 공통 Card 유형

`@/comp/ui/Card`의 공통 `Card`가 기본 조합과 데이터 기반 11개 유형을 제공합니다. 콘텐츠형은 `media` 슬롯과 `CardBody`도 활용합니다.
전체 링크형은 `as={Link}`와 `href`를 사용해 Next.js 클라이언트 이동을 유지합니다.
카테고리·배경 그래픽·썸네일 확대 등 디자인은 카드 모듈에서, 콘텐츠는 각 위젯에서 관리합니다.

`화면·위젯 → 공통 Card(type, card) → 유형별 내부 구현` 구조이므로 서브페이지에서도 같은 모듈을 호출할 수 있습니다.

`Card`의 `type`과 `card`로 타입별 카드를 호출합니다. TypeScript가 각 타입에 필요한 데이터를 검사합니다. 타입별 컴포넌트를 직접 import해 사용해도 됩니다.

| type          | 모듈              | 구성                                                                |
| ------------- | ----------------- | ------------------------------------------------------------------- |
| `course`      | `CourseCard`      | 썸네일·제목·분류, 세로·가로 배치, 배지·정보·푸터 슬롯, 독립 액션    |
| `promotion`   | `PromotionCard`   | 큰 제목, 설명, 이미지, 하단 CTA                                     |
| `image`       | `ImageCard`       | 안내 문구, 제목, 이미지, 카드 전체 링크, CTA                        |
| `content`     | `ContentCard`     | 썸네일 배경, 카테고리, 날짜, 제목, 선택 설명·키워드, 카드 전체 링크 |
| `overlay`     | `OverlayCard`     | 이미지 위 분류·날짜·제목·키워드, 세로·가로 형식                     |
| `news`        | `NewsCard`        | 이미지 없는 분류·날짜·제목·설명·키워드                              |
| `webzine`     | `WebzineCard`     | 좌측·우측 썸네일과 분류·날짜·제목·설명·키워드                       |
| `feature`     | `FeatureCard`     | 이미지·본문 분할 소개, 선택 톤·이미지 위치, CTA·actions             |
| `quick-link`  | `QuickLinkCard`   | 제목, 아이콘, 카드 전체 링크                                        |
| `testimonial` | `TestimonialCard` | 업종, 인용문, 작성자, 프로필, 선택 테두리                           |
| `callout`     | `CalloutCard`     | 가운데 정렬 제목, 설명, 버튼·링크 영역                              |

```tsx
import { Card } from '@/comp'
import { Icon } from '@/comp/ui/Icon'

<Card type="promotion" card={{
  id: 'promotion', title: '우리회사 AI 역량은\n몇점일까?',
  description: 'AX 역량진단을 직접 체험해보세요',
  image: '/images/pages/main/ax-refresh.png',
  href: '/b2b/contents/ax/competency', action: 'AX 진단 체험하기'
}} priority />

<Card type="image" card={{
  id: 'consultation', tone: 'mint', label: '기업교육 맞춤상담',
  title: '기업교육\n맞춤상담', description: '평균 1일 이내 신속 답변!',
  image: '/images/pages/main/consultation-glass.png',
  href: '/b2b/contact/education', action: '맞춤상담예약'
}} />

<Card type="quick-link" card={{
  id: 'proposal', tone: 'cream', title: '기업교육 제안서\n다운로드',
  href: '/b2b/insight/resources/list', icon: <Icon name="download" />
}} />
```

제목과 설명의 `\n`은 줄바꿈으로 표시합니다. 이미지형 톤은 `mint`, `lavender`, 바로가기형 톤은 `cream`, `gray`, `sage`입니다. `icon`에는 ReactNode를 전달합니다. `priority`는 프로모션형과 이미지형 이미지에만 적용합니다.

카드 높이·그리드 배치·여러 카드의 조합·Carousel 제어는 호출하는 위젯에서 담당합니다. 프로모션 기본 최소 높이는 568px이며 이미지형과 바로가기형은 부모 그리드 높이에 맞춥니다. 공통 외형 스타일은 `src/styles/components/_card-types.scss`, 메인 배치는 `src/styles/pages/b2b/main/_main.scss`, 카드별 문구·이미지·링크는 각 `src/widgets/b2b/main/` 위젯의 카드 호출부에서 관리합니다.

## 호출 위치에서 이미지 제어

별도 설정 파일 없이 JSX를 호출하는 위치에서 수정합니다. 메인 실제 사용 예제는 `src/widgets/b2b/main/MainConsultationCard.tsx`, `MainDiagnosisCard.tsx`, `MainPromotionBanner.tsx`에 있습니다.

이미지 prop 방식:

```tsx
<Card
  type="image"
  card={cardData}
  image="/images/pages/main/my-image.png"
  imageProps={{ width: 380, height: 300, alt: '이미지 설명', fit: 'cover', position: 'center' }}
/>
```

이미지 슬롯 방식:

```tsx
<Card
  type="image"
  card={cardData}
  slots={{
    image: (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: 'url(/images/pages/main/my-image.png) center / contain no-repeat',
        }}
      />
    ),
  }}
  imageProps={{ width: 380, height: 300, fit: 'contain' }}
/>
```

`CardBackground`가 기본 이미지를 CSS background로 표시합니다. 과정·콘텐츠 썸네일은 숨김 이미지로 로드 실패를 감지합니다. `imageProps`의 `width`·`height`는 배경 영역 크기(px), `fit`은 background-size, `position`은 background-position입니다. 생략하면 카드 타입 기본값을 사용합니다. 슬롯에는 사용자 정의 배경 마크업을 전달할 수 있습니다.

우선순위는 `slots.image` → 호출 prop `image` → `card.image`입니다. `slots.image={null}`로 이미지 표현을 숨길 수 있습니다. 과정·콘텐츠·오버레이·분할 소개에서는 `image={null}`이면 기본 대체 아이콘을 표시하며, 다른 유형은 `image={null}`로 이미지를 숨깁니다. 프로모션형·이미지형 카드와 `MainPromotionBanner`에서 동일하게 지원합니다. 바로가기형은 `card.icon`에 이미지나 아이콘 ReactNode를 전달합니다.

메인 화면의 섹션 구성은 `src/screen/b2b/main/sections/`에서 관리하고 `src/screen/b2b/main/index.tsx`에서 호출합니다. `src/widgets/b2b/main/`에는 섹션 내부에서 사용하는 카드·배너·바로가기만 둡니다.

`MainCardSection`은 프로모션·상담·진단·바로가기 레이아웃 안에서 각 위젯을 호출합니다. 섹션 전체를 호출하는 메인 페이지는 `<MainCardSection />`만 사용합니다. 각 위젯에서도 이미지 prop·슬롯을 그대로 전달할 수 있습니다.

```tsx
<MainCardSection />

// 이미지 변경은 MainCardSection 내부의 해당 위젯 호출에서 지정합니다.
<MainConsultationCard image="/images/pages/main/my-image.png" imageProps={{ width: 380, height: 300 }} />
```

카드 내용을 모아 둔 별도 데이터 파일은 없습니다.

카드 그림자는 `shadow` 옵션으로 제어하며 기본값은 `false`입니다. 공통 `Card`, 카드 유형과 메인 카드 위젯에서 지원합니다. `<MainHrTrendCard shadow />`처럼 전달하면 기본·호버 상태에 그림자를 표시하고, 생략하거나 `shadow={false}`이면 표시하지 않습니다. 공통 `Card`의 기존 `variant="shadow"`·`variant="elevated"`도 지원하며 명시한 `shadow` 값이 우선합니다.

메인 프로모션은 `MainPromotionBanner`에서 공통 `Carousel` → `CarouselSlide` → `Card type="promotion"` 순서로 조합합니다. 하단 이동·페이지 수·재생 제어도 공통 캐러셀의 UI를 사용합니다. `showControlsWhenSingle`은 1장일 때 제어부를 표시하되 이동·재생 버튼을 비활성화하는 옵션이며 기본값은 false입니다. 메인에서는 옵션을 생략하고 기본값을 사용합니다.

### 1장일 때 하단 컨트롤 표시 옵션

`MainPromotionBanner`에 `showControlsWhenSingle`을 직접 전달할 수 있습니다. 기본값은 `false`이며 현재 메인 레이아웃에서는 `<MainPromotionBanner />`로 호출합니다.

```tsx
// 1장이어도 이전·다음·페이지 수·재생 제어부를 표시합니다(이동·재생은 비활성).
<MainPromotionBanner showControlsWhenSingle />

// 1장일 때 하단 컨트롤 전체를 숨깁니다.
<MainPromotionBanner showControlsWhenSingle={false} />
```

이 옵션은 컨트롤에만 적용되며 카드의 CTA 링크는 유지합니다. 2장 이상이면 옵션값과 무관하게 정상적인 이동·자동재생 제어를 제공합니다.

카드 배경 CSS는 `src/styles/components/_card-types.scss`에서 조정합니다. `--card-background-image`, `--card-background-size`, `--card-background-position`, `--card-background-width`, `--card-background-height` 변수를 사용합니다. `alt`가 있으면 배경 영역에 접근성 설명을 제공하고, 빈 값이면 장식으로 처리합니다. `priority`는 배경 리소스를 미리 불러옵니다.

메인 프로모션은 [멀티캠퍼스 첫 비주얼](https://www.multicampus.com/b2b/kr/index.html)의 인터랙션을 참고해 `effect="fade"`·`speed={500}`·5초 간격으로 전환합니다. 이미지는 3.2초 동안 1.4배에서 원래 크기로 줄어들고, 제목은 0.5초 뒤 아래에서 올라오며 설명과 CTA는 각각 1초·1.5초 뒤 나타납니다. 모션은 `src/styles/pages/b2b/main/_main.scss`의 `promotion-visual-enter`·`promotion-title-enter`·`promotion-fade-enter`에서 조정합니다. 동작 줄이기 환경에서는 전환 시간과 등장·확대 애니메이션을 생략합니다.

## 콘텐츠 카드 재사용

```tsx
<Card
  type="content"
  card={{
    id: 'article',
    category: 'HR 트렌드',
    title: '콘텐츠 제목',
    description: '콘텐츠 설명',
    href: '/b2b/insight/on/list',
  }}
  image={{ src: '/images/@dummy/hr-trend.png', fit: '120% auto' }}
  imageProps={{ fit: 'cover', position: 'center' }}
/>
```

`MainInsightSection`은 3열 배치를 담당하며 각 콘텐츠 위젯이 기본 데이터를 관리합니다.
`children`에 `CarouselSlide`를 전달하면 카드 교체·추가가 가능합니다. 기본 3장은 모두 보이므로 이동 버튼이 비활성화되며, 카드를 추가하면 이동이 활성화됩니다.

### 고객사례 카드

세 번째 본문 섹션 `MainCaseSection`은 화면 전체 너비의 공통 `Carousel`에서 고객사례 위젯을 직접 호출합니다. 가운데 활성 카드에만 파란 테두리가 표시되고, 좌우 카드는 회전 없이 축소됩니다. 이전·다음 버튼, 드래그, 키보드로 순환 이동합니다. UI 확인 단계에서는 리더십·금융·제조 위젯을 2회 반복해 순환에 필요한 6장을 구성합니다.

`MainFinanceTestimonialCard`는 첨부 시안의 문구를 사용하고, 프로필 이미지를 전달하기 전에는 원형 사용자 아이콘을 표시합니다. UI 확인용 이미지는 `/images/@dummy/`에서 호출합니다. 슬라이더 밖에서는 `selected` 옵션으로 파란 테두리를 표시할 수 있습니다. 기본 테두리는 투명합니다.

```tsx
<Card
  type="testimonial"
  card={{
    category: '금융',
    quote: '임원이 먼저 배우니\n전사 AI 전환에\n속도가 붙었습니다',
    author: 'A금융 인재개발팀 김OO 팀장',
  }}
  shadow={false}
/>
```

고객사례 카드 전체는 공통 `Stat`에 등록한 `variant="testimonial"` 유형을 사용합니다. B2B 모듈은 업종·인용문·작성자 데이터를 각각 `title`·`value`·`description`으로 전달하고 프로필 이미지만 조합합니다.

```tsx
<Stat
  variant="testimonial"
  title="금융"
  value={'임원이 먼저 배우니\n전사 AI 전환에\n속도가 붙었습니다'}
  description="A금융 인재개발팀 김OO 팀장"
  selected
/>
```

`image`·`imageProps`·`slots.image`로 원형 프로필을 교체할 수 있습니다. `Stat` 직접 호출 시에는 `avatar`로 프로필 내용을 전달합니다. 원형 틀은 공통 `<Avatar variant="testimonial" className="stat_avatar">`로 구성하고, 프로필 이미지가 없으면 내부에 기존 공통 `<Icon name="user" />`를 표시합니다. 크기·배경색·기본 아이콘·이미지 맞춤·로드 실패 fallback은 `Avatar variant="testimonial"`에서 관리합니다. 인용문은 `strong.stat_value`와 `blockquote.stat_quote`로 표시합니다.

### 상담·구독 안내 카드

네 번째 본문 섹션 `screen/b2b/main/sections/MainCalloutSection.tsx`는 `MainInquiryCalloutCard`·`MainNewsletterCalloutCard` 위젯을 2열로 호출합니다. 공통 카드 입구의 `type="callout"`은 가운데 정렬 제목·설명과 `actions` 영역을 제공하며, 기본 높이는 387px입니다. 제목은 `strong.card_callout-title`, 링크는 공통 `Button`·`Link`를 사용합니다. `shadow` 옵션의 기본값은 false입니다.

안내 카드는 불투명한 흰 배경을 사용합니다. 가로 스크롤 시 뷰포트 가장자리에서 합성 띠가 생기지 않도록 `backdrop-filter`와 반투명 배경은 사용하지 않습니다.

```tsx
<Card
  type="callout"
  card={{ title: '무엇이든 물어보세요', description: '조직에 꼭 맞는 솔루션을 제안해 드립니다.' }}
  actions={
    <Button
      tag="a"
      href="/b2b/contact/education"
      round
    >
      기업교육문의
    </Button>
  }
/>
```

소셜 채널 로고는 공통 `Icon`의 `naver`·`youtube`·`linkedin` 유형으로 제공합니다. 뉴스레터 구독 링크는 공식 멀캠ON 게시물에 안내된 `https://bit.ly/HeyMate_subscribe`를 사용합니다.

공통 유형의 구조·스킨은 `src/styles/components/_card-types.scss`에서 관리합니다. 카드 내부 요소의 유형 스킨은 Button·Avatar·Tag에서 관리하고, 메인 고유 배치만 `src/styles/pages/b2b/main/_main.scss`에 둡니다. 가이드의 컴포넌트 → Card에서 11개 유형과 사용 코드를 확인합니다.

## 모바일 과정 카드와 조합

[멀티캠퍼스 모바일](https://m.multicampus.com/)의 공개 화면 템플릿에서 `wrap_st_thumb`·`st_label`·`st_title`·`st_schedule`·`st_tag`·후기 영역과 Swiper 구성을 확인했습니다. 화면의 실제 시각 배치는 브라우저 연결 제한으로 확인하지 못했습니다. 해당 정보 구조를 참고해 `course`를 추가했고 기존 콘텐츠·바로가기·안내 유형도 재사용합니다. 가이드 문구·가격·평점·진도는 예시 데이터입니다.

```tsx
import { Button, Card, Progress, Tag, TagGroup } from '@/comp';

<Card
  type="course"
  layout="horizontal"
  card={{ id: 'learning', title: '업무에 활용하는 AI', href: '/learning', category: 'AI' }}
  image={{ src: '/images/@dummy/hr-trend.png', fit: '120% auto' }}
  slots={{
    badges: (
      <TagGroup tight>
        <Tag size="sm">온라인</Tag>
        <Tag
          size="sm"
          color="success"
        >
          수강 중
        </Tag>
      </TagGroup>
    ),
    meta: (
      <Progress
        percent={60}
        showInfo
        ariaLabel="AI 과정 학습 진도"
      />
    ),
    footer: <span>10차시 중 6차시 완료</span>,
  }}
  actions={
    <Button
      tag="a"
      href="/learning/resume"
      size="sm"
    >
      이어서 학습
    </Button>
  }
/>;
```

기본 `layout="vertical"`은 추천 과정, `horizontal`은 목록·나의 학습에 사용합니다. Card는 배치만 담당하고 배지는 Tag·TagGroup, 진도는 Progress, 찜·신청·학습은 Button·Icon으로 구성합니다. `slots.badges`·`slots.meta`·`slots.footer`와 `actions`는 상세 링크의 형제이므로 독립적인 조작 요소를 전달할 수 있습니다. `slots.image`는 상세 링크 안에 있어 버튼·링크를 넣지 않습니다. 이미지 숨김·교체는 기존 `image`·`imageProps`·`slots.image` 계약을 따릅니다. 빈 슬롯은 렌더하지 않습니다.

`content + Carousel·CarouselSlide`로 추천 콘텐츠를, `quick-link·callout + CardDeck·Icon·Button`으로 서비스 탐색과 상담 영역을 구성합니다. 동작 예제와 복사 가능한 코드는 `/pub/guide/card#card-composition`에 있습니다.

카드 CTA는 `Button`의 `arrow`·`arrow-pill` 유형을 사용하며, 링크 카드 내부 CTA는 `presentation`으로 표시합니다. 안내 카드의 `gradient`·`soft-outline`·`social` 버튼과 `Tag category`·`Tag brand` 배지는 각 컴포넌트에서 관리합니다. Card 스타일은 위치·정렬·간격만 제어합니다. 각 유형의 독립 예제는 Button·Avatar·Tag 가이드에서 제공합니다.

과정·콘텐츠 썸네일과 기본 `card_media` 안의 `img`·`picture`는 원본 크기나 HTML width·height 값과 관계없이 미디어 영역 너비를 채웁니다. 기본 맞춤은 `cover`이며 비율을 유지하고 넘치는 부분은 잘립니다. 전체 이미지를 보이려면 `--card-thumbnail-fit: contain`을 지정합니다. 가로형 과정 카드는 지정된 썸네일 열 너비에 맞춥니다.

`hr-trend.png` 원본(714×373)에는 왼쪽 36px·상단 13px 등의 흰 여백이 포함되어 있습니다. 해당 샘플의 모든 카드 호출은 `fit: '120% auto'`로 원본 여백을 미디어 영역 밖으로 잘라 표시합니다. 다른 이미지의 기본 `cover`는 유지합니다.

## 과정 목록 카드

[분석한 과정 목록](https://m.multicampus.com/course/corsList?clsfCd1=160000000000000&uuid=ff8c5e3a-071c-4681-ab30-51f060b49bd3)의 라우트가 사용하는 공개 목록·카드·버튼 템플릿을 확인했습니다. 실제 목록 응답과 브라우저 시각 배치는 확인하지 못했으므로 과정명·가격·일정·평점은 가이드용 예시입니다.

별도 타입을 늘리지 않고 `course`에 아래 슬롯을 추가했습니다.

| 목록 정보                   | 조합                                                  |
| --------------------------- | ----------------------------------------------------- |
| 학습유형·난이도·교재        | `slots.labels` + 읽기 전용 TagGroup·Tag, 제목 앞 표시 |
| 복수 교육일정·상시 학습기간 | `slots.schedule` + 목록·time                          |
| 평점·후기 수                | `slots.reviews` + Icon·텍스트, 0도 그대로 표시        |
| 관련 키워드                 | `slots.keywords` + TagGroup·Tag                       |
| 교육비                      | 기존 `slots.footer` + 금액 텍스트                     |
| 맛보기·찜·신청·마감         | 기존 `actions` + Button·Icon·Modal                    |
| 목록·갤러리 전환            | 기존 `layout="horizontal"`·`vertical` + CardDeck      |

`labels`는 상세 링크 안에 있어 링크·버튼·체크형 Tag를 넣지 않습니다. 조작 가능한 배지는 기존 `slots.badges`에 전달합니다. 일정·후기·키워드는 링크 밖에 배치하며, 미지정 시 빈 영역을 만들지 않습니다. 각 슬롯은 ReactNode이므로 화면에서 데이터 형식과 표현을 정합니다. `src/screen/pub/data/guide/courseCatalogExample.jsx`에 동작 예제가 있습니다.

가이드에서는 두 과정의 목록형·갤러리형 전환, 과정별 찜 상태, 맛보기 모달, 활성·마감 신청 버튼을 제공합니다. 실제 신청·결제는 호출하지 않으며 신청 버튼은 예시 선택 상태를 안내합니다. 원본 사이트의 인증·신청 로직은 공통 Card에 포함하지 않습니다.

찜하기는 고정 문구와 과정명을 포함한 고정 `aria-label`을 사용합니다. `aria-pressed={saved}`로 찜 여부를 전달하고, 아이콘만 `heart` → `heart-filled`로 전환합니다. 버튼의 토글 상태에는 `aria-selected` 대신 `aria-pressed`를 사용합니다. 아이콘은 `Button.iconBefore`에 전달해 텍스트와 세로 중앙 정렬하고, 중복 음성 안내를 피하도록 장식으로 처리합니다. [WAI-ARIA 버튼 패턴](https://www.w3.org/WAI/ARIA/apg/patterns/button/)의 고정 이름 토글 버튼 규칙을 따릅니다.

## 썸네일 누락·로드 실패

과정·콘텐츠·오버레이·분할 소개 카드의 기본 미디어는 이미지 경로 미지정·빈 문자열·null 또는 이미지 로드 실패 시 미디어 가이드와 같은 `Icon name="image"`를 표시합니다. 대체 표시는 기존 `card_media-placeholder` 스킨을 재사용하며 카드 너비와 썸네일 비율을 유지합니다. 정상 경로로 교체하면 이미지 표시로 복구합니다. 아이콘은 장식으로 처리하고, 실패한 이미지의 alt를 정상 이미지처럼 읽지 않습니다.

사용자 `slots.image`가 있으면 호출부의 마크업을 우선하고 실패 처리는 호출부가 담당합니다. `slots.image={null}`의 명시적 숨김은 유지합니다. 프로모션·이미지형 배경 그래픽은 기존 누락·숨김 동작을 유지합니다. `/pub/guide/card`의 ‘썸네일 대체 표시’에서 주소 누락·404·정상 이미지 복구를 확인할 수 있습니다.

## 네이버 기업 사이트 카드 분석

분석 기준은 [네이버 기업 사이트 메인](https://www.navercorp.com/main)의 공개 HTML·CSS입니다. [We the Navigators 제목 이미지](https://www.navercorp.com/img/pc/main-news-title.png)는 섹션 제목이며 카드 자체가 아닙니다. 소스의 이미지·일반 텍스트·이미지 없는 상태를 구분했습니다. 원본 브라우저 화면은 직접 확인하지 못했습니다. 가이드는 구조를 참고한 샘플 문구·날짜·수치를 사용합니다.

| 원본 영역·패턴             | 확인한 정보와 동작                                  | 공통 유형·조합                                                     |
| -------------------------- | --------------------------------------------------- | ------------------------------------------------------------------ |
| We the Navigators 스토리   | 배경 위 분류·날짜·제목·키워드, 하단 어두운 오버레이 | `overlay`, 기본 portrait                                           |
| 이미지 없는 보도자료       | 이미지 마크업 없이 분류·날짜·제목, 회색 배경        | `news`, 썸네일·대체 아이콘 없음                                    |
| 이미지가 있는 보도자료     | 상단 썸네일과 하단 분류·날짜·제목                   | 기존 `content`에 선택 date·keywords·target 추가                    |
| 이벤트 피드 배너           | 이미지·날짜·제목, 선택 분류, 외부 이동              | `overlay` landscape + target                                       |
| 상단 헤드라인              | 넓은 비주얼 위 분류·날짜·제목, 슬라이드 탐색        | `overlay` landscape + Carousel·CarouselSlide                       |
| 중간 캠페인 배너           | 우측 이미지, 좌측 제목·설명·CTA                     | `feature` + imagePosition=end, 필요 시 Carousel                    |
| 서비스·기술·지속가능성     | 이미지와 본문이 분할된 펼침 패널, 상세 이동         | `feature` + Accordion, 버튼과 링크 분리                            |
| 파트너·개발자 지원         | 제목과 우하단 이동 아이콘, 새 창 링크 타일, 탭 전환 | 기존 `quick-link` surface + Icon·Button presentation·Tabs·CardDeck |
| 주가·짧은 공지             | 수치·증감과 간단한 소식                             | 기본 Card·Stat, news와 Carousel 조합                               |
| 헤더의 내비게이션 미리보기 | 썸네일·분류·제목과 요약 링크                        | 기존 content 또는 CardHeader·Body·Footer 조합                      |

스토리·뉴스 피드의 원본은 큰 화면에서 Masonry, 작은 화면에서 Swiper 배치를 사용합니다. 카드 자체와 배치·동작을 분리해 가이드에는 혼합 그리드와 별도의 캐러셀 예제를 제공합니다. 순서·여러 카드의 배치와 상태는 호출 화면이 담당합니다.

`overlay`는 전체 링크 하나로 동작하고, 텍스트 아래 어두운 그라데이션을 둡니다. `format=portrait|landscape`, `--card-overlay-height`로 형식·높이를 지정합니다. 정보가 길어지면 높이를 늘리며 숨겨진 제목을 만들지 않습니다. 영상이 필요하면 `slots.image`에 음소거·인라인 재생 등 화면 정책에 맞춘 미디어를 전달하고 제어 버튼은 카드 링크 밖에 둡니다.

`news`는 처음부터 이미지가 없는 콘텐츠를 위한 유형입니다. 이미지 주소가 없는 content·overlay·feature의 로드 실패 대체 표시와 구분됩니다. `content`는 기존 사용법을 유지하고 description을 선택값으로 변경했으며 ISO YYYY-MM-DD의 date와 keywords·target을 추가했습니다. 날짜는 time, 키워드는 공통 TagGroup·Tag로 표시합니다.

`feature`는 imagePosition=start|end, tone=surface|brand|dark를 지원합니다. 작은 화면에서는 이미지 위·본문 아래로 배치합니다. 카드 전체 대신 CTA만 링크이며, actions로 Button·Link를 조합할 수 있습니다. slots.image=null이면 미디어를 숨기고 본문만 한 열로 표시합니다. 새 유형의 기본 이미지도 누락·실패 시 미디어 아이콘으로 대체합니다.

새 창 링크에는 target과 noopener noreferrer, ‘새 창 열림’ 제목을 연결합니다. 전체 링크 카드 안의 키워드·아이콘은 조작 요소를 만들지 않습니다. 실제 내비게이션·펼침·탭·캐러셀은 기존 공통 컴포넌트가 담당합니다. 예제와 복사 코드는 `/pub/guide/card#card-composition`에 있습니다.

## 뉴스·웹진 가로 카드

`type="webzine"`는 `imagePosition="start"`(기본)로 썸네일을 좌측에, `imagePosition="end"`로 우측에 배치합니다. 두 배치는 같은 데이터·미디어 계약을 사용하며 모바일에서도 좌·우 구조를 유지합니다. 분류·ISO 날짜·설명·키워드는 선택값이고, 카드 전체가 상세 링크 하나로 동작합니다.

```tsx
<Card
  type="webzine"
  imagePosition="start"
  card={{
    id: 'news',
    category: '뉴스',
    date: '2026-11-15',
    title: '새로운 서비스 이야기',
    description: '새롭게 달라진 서비스를 소개합니다.',
    keywords: ['서비스', '업데이트'],
    href: '/news/detail',
    image: '/images/@dummy/naver-tech.png',
  }}
/>
// 우측 썸네일은 같은 데이터에 imagePosition="end"를 지정합니다.
```

썸네일 기본 너비는 `--card-webzine-media-width: 32%`, 비율은 `--card-webzine-media-ratio: 3 / 2`입니다. 경로 누락·null·로드 실패 시 기존 미디어 대체 아이콘을 표시하며 `slots.image=null`을 명시하면 본문만 한 열로 표시합니다. image·imageProps·slots.image·priority·shadow·target도 기존 계약을 따릅니다. 이미지 슬롯에는 버튼이나 링크를 넣지 않습니다. 가이드의 ‘뉴스·웹진’에서 두 방향 예제와 정렬된 사용 코드를 제공합니다.
