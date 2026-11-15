'use client'

import { useState } from 'react'
import {
  Button,
  Card,
  CardDeck,
  Carousel,
  CarouselSlide,
  Icon,
  Progress,
  Tag,
  TagGroup
} from '@/comp'
import { wrapPageExample } from '@/screen/pub/lib/pageExampleCode'
import CourseCatalogDemo, { courseCatalogCode } from './courseCatalogExample'
import { corporateCardCompositionExamples } from './corporateCardExamples'

function ThumbnailFallbackDemo() {
  const [recovered, setRecovered] = useState(false)
  return (
    <div className="demo-stack">
      <CardDeck columns={2}>
        <Card
          type="course"
          card={{
            id: 'no-thumbnail',
            title: '이미지가 없는 교육과정',
            href: '#card-types'
          }}
        />
        <Card
          type="content"
          card={{
            id: 'failed-thumbnail',
            category: '인사이트',
            title: '이미지 로드 실패와 복구',
            description: '불러오기 실패 시에도 썸네일 크기를 유지합니다.',
            href: '#card-types'
          }}
          image={
            recovered
              ? { src: '/images/@dummy/hr-trend.png', fit: '120% auto' }
              : '/images/@dummy/card-thumbnail-unavailable.png'
          }
        />
      </CardDeck>
      <Button
        size="sm"
        variant="outline"
        onClick={() => setRecovered((value) => !value)}
      >
        {recovered ? '실패 이미지로 교체' : '정상 이미지로 교체'}
      </Button>
    </div>
  )
}

function LearningCardDemo() {
  const [saved, setSaved] = useState(false)
  return (
    <Card
      type="course"
      layout="horizontal"
      card={{
        id: 'learning-demo',
        category: '나의 학습',
        title: '데이터로 설득하는 보고서 작성',
        description: '학습기간 2026.11.01 ~ 2026.11.30',
        href: '#card-composition'
      }}
      image={{ src: '/images/@dummy/hr-trend.png', fit: '120% auto' }}
      slots={{
        badges: (
          <TagGroup tight>
            <Tag
              size="sm"
              color="success"
            >
              수강 중
            </Tag>
            <Tag
              size="sm"
              variant="outline"
            >
              온라인
            </Tag>
          </TagGroup>
        ),
        meta: (
          <Progress
            percent={60}
            showInfo
            ariaLabel="보고서 작성 과정 학습 진도"
          />
        ),
        footer: <span>10차시 중 6차시 완료</span>
      }}
      actions={
        <>
          <Button
            size="sm"
            variant="outline"
            ariaLabel="데이터로 설득하는 보고서 작성 찜하기"
            aria-pressed={saved}
            iconBefore={
              <Icon
                name={saved ? 'heart-filled' : 'heart'}
                size={16}
              />
            }
            onClick={() => setSaved(!saved)}
          >
            찜하기
          </Button>
          <Button
            tag="a"
            href="#card-types"
            size="sm"
          >
            이어서 학습
          </Button>
        </>
      }
    />
  )
}

const learningCode = `const [saved, setSaved] = useState(false)

<Card type="course" layout="horizontal" card={{
  id: 'learning', category: '나의 학습',
  title: '데이터로 설득하는 보고서 작성',
  description: '학습기간 2026.11.01 ~ 2026.11.30',
  href: '#card-composition'
}} image={{ src: '/images/@dummy/hr-trend.png', fit: '120% auto' }}
  slots={{
    badges: <TagGroup tight><Tag size="sm" color="success">수강 중</Tag><Tag size="sm" variant="outline">온라인</Tag></TagGroup>,
    meta: <Progress percent={60} showInfo ariaLabel="보고서 작성 과정 학습 진도" />,
    footer: <span>10차시 중 6차시 완료</span>
  }}
  actions={<>
    <Button size="sm" variant="outline" ariaLabel="데이터로 설득하는 보고서 작성 찜하기" aria-pressed={saved} iconBefore={<Icon name={saved ? 'heart-filled' : 'heart'} size={16} />} onClick={() => setSaved(!saved)}>
      찜하기
    </Button>
    <Button tag="a" href="#card-types" size="sm">이어서 학습</Button>
  </>}
/>`

const recommendations = [
  {
    id: 'ai',
    category: 'AI',
    title: 'AI로 달라지는 일하는 방법',
    description: '업무에 적용할 아이디어를 확인하세요.',
    href: '#card-composition',
    image: { src: '/images/@dummy/hr-trend.png', fit: '120% auto' }
  },
  {
    id: 'leadership',
    category: '리더십',
    title: '함께 성장하는 팀의 대화',
    description: '팀을 위한 커뮤니케이션을 배웁니다.',
    href: '#card-composition',
    image: { src: '/images/@dummy/hr-trend.png', fit: '120% auto' }
  },
  {
    id: 'data',
    category: '데이터',
    title: '숫자로 읽는 비즈니스',
    description: '데이터를 이해하는 관점을 넓혀 보세요.',
    href: '#card-composition',
    image: { src: '/images/@dummy/hr-trend.png', fit: '120% auto' }
  }
]

export const cardCompositionExamples = [
  {
    id: 'thumbnail-fallback',
    title: '조합 · 썸네일 대체 표시',
    description:
      '과정·콘텐츠 카드에서 이미지가 없거나 로드에 실패하면 미디어 예제와 같은 그림 아이콘을 표시합니다. 정상 이미지로 바꾸면 대체 표시가 사라집니다.',
    preview: <ThumbnailFallbackDemo />,
    code: wrapPageExample(
      `const [recovered, setRecovered] = useState(false)

<CardDeck columns={2}>
  <Card type="course" card={{ id: 'no-thumbnail', title: '이미지가 없는 교육과정', href: '#card-types' }} />
  <Card type="content" card={{ id: 'failed-thumbnail', category: '인사이트', title: '이미지 로드 실패와 복구', description: '불러오기 실패 시에도 썸네일 크기를 유지합니다.', href: '#card-types' }}
    image={recovered ? { src: '/images/@dummy/hr-trend.png', fit: '120% auto' } : '/images/@dummy/card-thumbnail-unavailable.png'} />
</CardDeck>
<Button size="sm" variant="outline" onClick={() => setRecovered(value => !value)}>{recovered ? '실패 이미지로 교체' : '정상 이미지로 교체'}</Button>`,
      {
        name: 'ThumbnailFallbackExample',
        reactImports: ['useState'],
        compImports: ['Card', 'CardDeck', 'Button']
      }
    )
  },
  {
    id: 'catalog',
    title: '조합 · 과정 검색 결과 카드',
    description:
      '과정 목록의 정보 구조를 기존 course 유형에 적용했습니다. 제목 앞 속성 배지·여러 일정·평점과 후기·키워드·가격·맛보기·찜·신청 상태를 조합합니다. 목록형과 갤러리형을 전환할 수 있으며 내용은 예시 데이터입니다.',
    preview: <CourseCatalogDemo />,
    code: courseCatalogCode
  },
  {
    id: 'learning',
    title: '조합 · 학습 현황과 찜하기',
    description:
      '같은 과정 카드를 가로형으로 사용합니다. Tag·Progress·Icon·Button으로 상태·진도·찜·학습 액션을 구성하며, 찜하기는 실제로 전환됩니다.',
    preview: <LearningCardDemo />,
    code: wrapPageExample(learningCode, {
      name: 'LearningCardExample',
      reactImports: ['useState'],
      compImports: ['Card', 'Tag', 'TagGroup', 'Progress', 'Button', 'Icon']
    })
  },
  {
    id: 'recommendations',
    title: '조합 · 추천 콘텐츠 캐러셀',
    description:
      '기존 content 유형을 Carousel·CarouselSlide와 조합합니다. 한 번에 한 장씩 탐색하며 자동 재생 없이 이전·다음·페이지 번호를 제공합니다.',
    preview: (
      <Carousel
        ariaLabel="추천 콘텐츠 예제"
        navigation
        pagination="fraction"
      >
        {recommendations.map((card) => (
          <CarouselSlide key={card.id}>
            <Card
              type="content"
              card={card}
            />
          </CarouselSlide>
        ))}
      </Carousel>
    ),
    code: wrapPageExample(
      `const cards = ${JSON.stringify(recommendations, null, 2)}

<Carousel ariaLabel="추천 콘텐츠 예제" navigation pagination="fraction">
  {cards.map(card => (
    <CarouselSlide key={card.id}><Card type="content" card={card} /></CarouselSlide>
  ))}
</Carousel>`,
      {
        name: 'RecommendedCardsExample',
        reactImports: [],
        compImports: ['Card', 'Carousel', 'CarouselSlide']
      }
    )
  },
  {
    id: 'services',
    title: '조합 · 서비스 바로가기와 안내',
    description:
      '기존 quick-link·callout 유형을 CardDeck으로 배치합니다. 새 유형 없이 Icon과 Button을 조합해 탐색·문의 영역에 재사용합니다.',
    preview: (
      <CardDeck columns={2}>
        <Card
          type="quick-link"
          card={{
            id: 'catalog',
            tone: 'sage',
            title: '분야별 과정 찾기',
            href: '#card-types',
            icon: (
              <Icon
                name="search"
                size={32}
              />
            )
          }}
        />
        <Card
          type="callout"
          card={{
            title: '학습 상담',
            description: '목표에 맞는 학습을 찾아보세요.'
          }}
          actions={
            <Button
              tag="a"
              href="#card-types"
              size="sm"
            >
              상담 안내
            </Button>
          }
        />
      </CardDeck>
    ),
    code: wrapPageExample(
      `<CardDeck columns={2}>
  <Card type="quick-link" card={{ id: 'catalog', tone: 'sage', title: '분야별 과정 찾기', href: '#card-types', icon: <Icon name="search" size={32} /> }} />
  <Card type="callout" card={{ title: '학습 상담', description: '목표에 맞는 학습을 찾아보세요.' }} actions={<Button tag="a" href="#card-types" size="sm">상담 안내</Button>} />
</CardDeck>`,
      {
        name: 'ServiceCardsExample',
        reactImports: [],
        compImports: ['Card', 'CardDeck', 'Icon', 'Button']
      }
    )
  },
  ...corporateCardCompositionExamples
]
