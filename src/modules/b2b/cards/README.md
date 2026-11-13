# B2B 카드 모듈

모든 타입은 `@/comp/ui/Card`의 공통 `Card`를 조합합니다. 콘텐츠형은 `media` 슬롯과 `CardBody`도 활용합니다.
전체 링크형은 `as={Link}`와 `href`를 사용해 Next.js 클라이언트 이동을 유지합니다.
카테고리·배경 그래픽·썸네일 확대 등 디자인은 카드 모듈에서, 콘텐츠는 각 위젯에서 관리합니다.

`위젯 → 타입별 카드 모듈 → 공통 Card 컴포넌트` 구조이므로 서브페이지에서도 같은 모듈을 호출할 수 있습니다.

`Card`의 `type`과 `card`로 타입별 카드를 호출합니다. TypeScript가 각 타입에 필요한 데이터를 검사합니다. 타입별 컴포넌트를 직접 import해 사용해도 됩니다.

| type | 모듈 | 구성 |
| --- | --- | --- |
| `promotion` | `PromotionCard` | 큰 제목, 설명, 이미지, 하단 CTA |
| `image` | `ImageCard` | 안내 문구, 제목, 이미지, 카드 전체 링크, CTA |
| `content` | `ContentCard` | 썸네일 배경, 카테고리, 제목, 설명, 카드 전체 링크 |
| `quick-link` | `QuickLinkCard` | 제목, 아이콘, 카드 전체 링크 |

```tsx
import Card from '@/modules/b2b/cards/Card'
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

카드 높이·그리드 배치·여러 카드의 조합·Carousel 제어는 호출하는 위젯에서 담당합니다. 프로모션 기본 최소 높이는 568px이며 이미지형과 바로가기형은 부모 그리드 높이에 맞춥니다. 공통 외형 스타일은 `src/styles/pages/b2b/modules/_cards.scss`, 메인 배치는 `src/styles/pages/b2b/home/_main.scss`, 카드별 문구·이미지·링크는 각 `src/widgets/b2b/main/` 위젯의 카드 호출부에서 관리합니다.

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
  slots={{ image: <div style={{ width: '100%', height: '100%', background: 'url(/images/pages/main/my-image.png) center / contain no-repeat' }} /> }}
  imageProps={{ width: 380, height: 300, fit: 'contain' }}
/>
```

`CardBackground`가 기본 이미지를 태그 없이 CSS background로 표시합니다. `imageProps`의 `width`·`height`는 배경 영역 크기(px), `fit`은 background-size, `position`은 background-position입니다. 생략하면 카드 타입 기본값을 사용합니다. 슬롯에는 사용자 정의 배경 마크업을 전달할 수 있습니다.

우선순위는 `slots.image` → 호출 prop `image` → `card.image`입니다. `slots.image={null}` 또는 `image={null}`로 이미지 영역을 숨길 수 있습니다. 프로모션형·이미지형 카드와 `MainPromotionBanner`에서 동일하게 지원합니다. 바로가기형은 `card.icon`에 이미지나 아이콘 ReactNode를 전달합니다.

메인 화면의 섹션 구성은 `src/screen/b2b/main/sections/`에서 관리하고 `src/screen/b2b/main/index.tsx`에서 호출합니다. `src/widgets/b2b/main/`에는 섹션 내부에서 사용하는 카드·배너·바로가기만 둡니다.

`MainCardSection`은 프로모션·상담·진단·바로가기 레이아웃 안에서 각 위젯을 호출합니다. 섹션 전체를 호출하는 메인 페이지는 `<MainCardSection />`만 사용합니다. 각 위젯에서도 이미지 prop·슬롯을 그대로 전달할 수 있습니다.

```tsx
<MainCardSection />

// 이미지 변경은 MainCardSection 내부의 해당 위젯 호출에서 지정합니다.
<MainConsultationCard image="/images/pages/main/my-image.png" imageProps={{ width: 380, height: 300 }} />
```

카드 내용을 모아 둔 별도 데이터 파일은 없습니다.

카드 그림자는 `shadow` 옵션으로 제어하며 기본값은 `false`입니다. 공통 `Card`, B2B 카드 모듈과 메인 카드 위젯에서 지원합니다. `<MainHrTrendCard shadow />`처럼 전달하면 기본·호버 상태에 그림자를 표시하고, 생략하거나 `shadow={false}`이면 표시하지 않습니다. 공통 `Card`의 기존 `variant="shadow"`·`variant="elevated"`도 지원하며 명시한 `shadow` 값이 우선합니다.

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

카드 배경 CSS는 `src/styles/pages/b2b/modules/_cards.scss`에서 조정합니다. `--card-background-image`, `--card-background-size`, `--card-background-position`, `--card-background-width`, `--card-background-height` 변수를 사용합니다. `alt`가 있으면 배경 영역에 접근성 설명을 제공하고, 빈 값이면 장식으로 처리합니다. `priority`는 배경 리소스를 미리 불러옵니다.

메인 프로모션은 [멀티캠퍼스 첫 비주얼](https://www.multicampus.com/b2b/kr/index.html)의 인터랙션을 참고해 `effect="fade"`·`speed={500}`·5초 간격으로 전환합니다. 이미지는 3.2초 동안 1.4배에서 원래 크기로 줄어들고, 제목은 0.5초 뒤 아래에서 올라오며 설명과 CTA는 각각 1초·1.5초 뒤 나타납니다. 모션은 `home/_main.scss`의 `promotion-visual-enter`·`promotion-title-enter`·`promotion-fade-enter`에서 조정합니다. 동작 줄이기 환경에서는 전환 시간과 등장·확대 애니메이션을 생략합니다.

## 콘텐츠 카드 재사용

```tsx
<Card
  type="content"
  card={{
    id: 'article',
    category: 'HR 트렌드',
    title: '콘텐츠 제목',
    description: '콘텐츠 설명',
    href: '/b2b/insight/on/list'
  }}
  image="/images/@dummy/hr-trend.png"
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
    author: 'A금융 인재개발팀 김OO 팀장'
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

`image`·`imageProps`·`slots.image`로 원형 프로필을 교체할 수 있습니다. `Stat` 직접 호출 시에는 `avatar`로 프로필 내용을 전달합니다. 원형 틀은 일반 `<span className="profile">`로 구성하고, 프로필 이미지가 없으면 내부에 기존 공통 `<Icon name="user" />`를 표시합니다. 인용문은 `strong.stat_value`와 `blockquote.stat_quote`로 표시합니다.

### 상담·구독 안내 카드

네 번째 본문 섹션 `screen/b2b/main/sections/MainCalloutSection.tsx`는 `MainInquiryCalloutCard`·`MainNewsletterCalloutCard` 위젯을 2열로 호출합니다. 공통 카드 입구의 `type="callout"`은 가운데 정렬 제목·설명과 `actions` 영역을 제공하며, 기본 높이는 387px입니다. 제목은 `strong.card_callout-title`, 링크는 공통 `Button`·`Link`를 사용합니다. `shadow` 옵션의 기본값은 false입니다.

안내 카드는 불투명한 흰 배경을 사용합니다. 가로 스크롤 시 뷰포트 가장자리에서 합성 띠가 생기지 않도록 `backdrop-filter`와 반투명 배경은 사용하지 않습니다.

```tsx
<Card
  type="callout"
  card={{ title: '무엇이든 물어보세요', description: '조직에 꼭 맞는 솔루션을 제안해 드립니다.' }}
  actions={<Button tag="a" href="/b2b/contact/education" round>기업교육문의</Button>}
/>
```

소셜 채널 로고는 공통 `Icon`의 `naver`·`youtube`·`linkedin` 유형으로 제공합니다. 뉴스레터 구독 링크는 공식 멀캠ON 게시물에 안내된 `https://bit.ly/HeyMate_subscribe`를 사용합니다.
