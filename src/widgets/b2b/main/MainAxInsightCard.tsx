import Card from '@/modules/b2b/cards/Card' // Card 컴포넌트
import type { CardMediaProps } from '@/modules/b2b/cards/cardTypes' // Card Media Props 타입

/** 콘텐츠 데이터는 위젯에서 관리하고 표현은 공통 카드 모듈에 위임합니다. */
export default function MainAxInsightCard ({
  image = '/images/@dummy/ax-mind.jpg',
  imageProps,
  shadow = false,
  slots,
  priority = false
}: Readonly<CardMediaProps>) {
  return (
    <Card
      type="content"
      card={{
        id: 'ax-mind',
        category: 'AX',
        title: 'AI 시대, 당신의 마음은 안녕하십니까? - 정신건강의학과 윤대현 교수편',
        description: 'AI 시대의 변화 속에서 마음의 건강을 지키는 방법을 살펴봅니다.',
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
