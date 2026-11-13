import Card from '@/modules/b2b/cards/Card' // Card 컴포넌트
import type { CardMediaProps } from '@/modules/b2b/cards/cardTypes' // Card Media Props 타입

/** 콘텐츠 데이터는 위젯에서 관리하고 표현은 공통 카드 모듈에 위임합니다. */
export default function MainLeadershipInsightCard ({
  image = '/images/@dummy/leadership-ai.png',
  imageProps,
  shadow = false,
  slots,
  priority = false
}: Readonly<CardMediaProps>) {
  return (
    <Card
      type="content"
      card={{
        id: 'leadership-ai',
        category: '리더십',
        title: 'AI는 인류에게 위협일까, 기회일까? - 진화생물학자 최재천 교수편',
        description: 'AI 시대를 바라보는 새로운 관점과 조직의 미래를 위한 인사이트를 만나보세요.',
        href: '/b2b/insight/on/list'
      }}
      shadow={shadow}
      image={image}
      imageProps={imageProps}
      slots={slots}
      priority={priority}
    />
  )
}
