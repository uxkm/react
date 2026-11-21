import { Button, Card, Icon, Tag, TagGroup } from '@/comp';
import { wrapPageExample } from '@/screen/pub/lib/pageExampleCode';
import { corporateCardTypeExamples } from './corporateCardExamples';
import { webzineCardExample } from './webzineCardExample';

/** 실제 제공하는 공통 Card 유형. 프로젝트 문구·데이터와 독립된 가이드 예제입니다. */
export const cardTypeExamples = [
  {
    type: 'course',
    title: '유형 · 교육과정',
    description:
      '작은 이미지도 카드 너비에 맞춰 확대합니다. 썸네일·분류·제목을 기본으로, TagGroup 배지와 일정·평점·가격·Button 액션을 슬롯으로 조합합니다. 상세 링크와 액션은 별도로 초점을 받습니다.',
    code: wrapPageExample(
      `<Card type="course" card={{
  id: 'course', category: 'AI · 데이터',
  title: '업무에 바로 쓰는 생성형 AI',
  description: '실습으로 배우는 업무 자동화',
  href: '#card-types'
}} image={{ src: '/images/@dummy/hr-trend.png', fit: '120% auto' }}
  slots={{
    badges: <TagGroup tight><Tag size="sm">온라인</Tag><Tag size="sm" color="success">교재 제공</Tag></TagGroup>,
    meta: <p>총 8시간 · 입문 · 평점 4.8 / 5</p>,
    footer: <strong>120,000원</strong>
  }}
  actions={<Button tag="a" href="#card-composition" size="sm">과정 비교</Button>}
/>`,
      {
        reactImports: [],
        compImports: ['Card', 'Button', 'Tag', 'TagGroup'],
        name: 'CourseCardExample',
      },
    ),
    preview: (
      <Card
        type="course"
        card={{
          id: 'course-demo',
          category: 'AI · 데이터',
          title: '업무에 바로 쓰는 생성형 AI',
          description: '실습으로 배우는 업무 자동화',
          href: '#card-types',
        }}
        image={{ src: '/images/@dummy/hr-trend.png', fit: '120% auto' }}
        slots={{
          badges: (
            <TagGroup tight>
              <Tag size="sm">온라인</Tag>
              <Tag
                size="sm"
                color="success"
              >
                교재 제공
              </Tag>
            </TagGroup>
          ),
          meta: <p>총 8시간 · 입문 · 평점 4.8 / 5</p>,
          footer: <strong>120,000원</strong>,
        }}
        actions={
          <Button
            tag="a"
            href="#card-composition"
            size="sm"
          >
            과정 비교
          </Button>
        }
      />
    ),
  },
  {
    type: 'promotion',
    title: '유형 · 프로모션',
    description:
      '큰 제목·설명·배경 이미지·CTA 링크를 조합합니다. type="promotion"과 card 데이터를 지정합니다.',
    code: wrapPageExample(
      `<Card type="promotion" card={{
  id: 'promotion',
  title: '새로운 배움을\\n시작하세요',
  description: '핵심 내용을 소개하고 다음 행동으로 안내합니다.',
  href: '#card-types',
  action: '자세히 보기'
}} image="/images/pages/main/ax-refresh.png"
  imageProps={{ width: 320, height: 220, fit: 'contain' }}
/>`,
      { reactImports: [], compImports: ['Card'], name: 'PromotionCardExample' },
    ),
    preview: (
      <Card
        type="promotion"
        card={{
          id: 'promotion-demo',
          title: '새로운 배움을\n시작하세요',
          description: '핵심 내용을 소개하고 다음 행동으로 안내합니다.',
          href: '#card-types',
          action: '자세히 보기',
        }}
        image="/images/pages/main/ax-refresh.png"
        imageProps={{ width: 320, height: 220, fit: 'contain' }}
      />
    ),
  },
  {
    type: 'image',
    title: '유형 · 이미지',
    description:
      '카드 전체가 하나의 링크입니다. tone은 mint·lavender이며, 높이는 호출 위치에서 지정합니다. image·imageProps·slots.image로 이미지를 제어합니다.',
    code: wrapPageExample(
      `<div style={{ height: 440 }}>
  <Card type="image" card={{
    id: 'image', tone: 'mint',
    title: '나에게 맞는\\n학습 찾기',
    description: '목표에 맞는 학습을 확인하세요.',
    href: '#card-types', action: '살펴보기'
  }} image="/images/pages/main/consultation-glass.png"
    imageProps={{ width: 240, height: 180, fit: 'contain' }}
  />
</div>`,
      { reactImports: [], compImports: ['Card'], name: 'ImageCardExample' },
    ),
    preview: (
      <Card
        type="image"
        card={{
          id: 'image-demo',
          tone: 'mint',
          title: '나에게 맞는\n학습 찾기',
          description: '목표에 맞는 학습을 확인하세요.',
          href: '#card-types',
          action: '살펴보기',
        }}
        image="/images/pages/main/consultation-glass.png"
        imageProps={{ width: 240, height: 180, fit: 'contain' }}
      />
    ),
  },
  {
    type: 'content',
    title: '유형 · 콘텐츠',
    description:
      '썸네일·카테고리·제목·설명으로 구성하며, 카드 전체를 링크로 제공합니다. 기본 썸네일 비율은 16:9입니다.',
    code: wrapPageExample(
      `<Card type="content" card={{
  id: 'content', category: '인사이트',
  title: '업무에 활용하는 새로운 아이디어',
  description: '콘텐츠의 핵심 내용을 간단하게 소개합니다.',
  href: '#card-types'
}} image={{ src: '/images/@dummy/hr-trend.png', fit: '120% auto' }} />`,
      { reactImports: [], compImports: ['Card'], name: 'ContentCardExample' },
    ),
    preview: (
      <Card
        type="content"
        card={{
          id: 'content-demo',
          category: '인사이트',
          title: '업무에 활용하는 새로운 아이디어',
          description: '콘텐츠의 핵심 내용을 간단하게 소개합니다.',
          href: '#card-types',
        }}
        image={{ src: '/images/@dummy/hr-trend.png', fit: '120% auto' }}
      />
    ),
  },
  {
    type: 'quick-link',
    title: '유형 · 바로가기',
    description:
      '제목과 아이콘을 갖는 링크 카드입니다. tone은 cream·gray·sage이며 icon에는 ReactNode를 전달합니다. 높이는 호출 위치에서 지정합니다.',
    code: wrapPageExample(
      `<div style={{ height: 160 }}>
  <Card type="quick-link" card={{
    id: 'quick-link', tone: 'cream',
    title: '안내 자료\\n다운로드', href: '#card-types',
    icon: <Icon name="download" size={32} />
  }} />
</div>`,
      {
        reactImports: [],
        compImports: ['Card', 'Icon'],
        name: 'QuickLinkCardExample',
      },
    ),
    preview: (
      <Card
        type="quick-link"
        card={{
          id: 'quick-link-demo',
          tone: 'cream',
          title: '안내 자료\n다운로드',
          href: '#card-types',
          icon: (
            <Icon
              name="download"
              size={32}
            />
          ),
        }}
      />
    ),
  },
  {
    type: 'testimonial',
    title: '유형 · 고객사례',
    description:
      '업종·인용문·작성자·프로필을 표시합니다. selected로 선택 테두리를 표시하고, 프로필 이미지가 없으면 사용자 아이콘을 제공합니다.',
    code: wrapPageExample(
      `<Card type="testimonial" selected card={{
  category: '고객사례',
  quote: '배운 내용을 바로 적용하며\\n팀의 변화를 만들었습니다.',
  author: '교육 담당자'
}} />`,
      {
        reactImports: [],
        compImports: ['Card'],
        name: 'TestimonialCardExample',
      },
    ),
    preview: (
      <Card
        type="testimonial"
        selected
        card={{
          category: '고객사례',
          quote: '배운 내용을 바로 적용하며\n팀의 변화를 만들었습니다.',
          author: '교육 담당자',
        }}
      />
    ),
  },
  {
    type: 'callout',
    title: '유형 · 안내',
    description:
      '가운데 정렬한 제목·설명과 actions 영역을 제공합니다. actions에는 버튼이나 링크를 전달합니다.',
    code: wrapPageExample(
      `<Card type="callout" card={{
  title: '더 알아보고 싶으신가요?',
  description: '안내를 확인하고 다음 단계를 시작하세요.'
}} actions={<Button tag="a" href="#card-types" round>안내 보기</Button>} />`,
      {
        reactImports: [],
        compImports: ['Card', 'Button'],
        name: 'CalloutCardExample',
      },
    ),
    preview: (
      <Card
        type="callout"
        card={{
          title: '더 알아보고 싶으신가요?',
          description: '안내를 확인하고 다음 단계를 시작하세요.',
        }}
        actions={
          <Button
            tag="a"
            href="#card-types"
            round
          >
            안내 보기
          </Button>
        }
      />
    ),
  },
  ...corporateCardTypeExamples,
  webzineCardExample,
];
