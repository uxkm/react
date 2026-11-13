import Card from '@/modules/b2b/cards/Card'
import type { CardMediaProps } from '@/modules/b2b/cards/cardTypes'

/** 콘텐츠 데이터는 위젯에서 관리하고 표현은 공통 카드 모듈에 위임합니다. */
export default function MainHrTrendCard ({
  // 원본에 포함된 흰 여백이 썸네일 가장자리에 드러나지 않도록 확대합니다.
  image = {
    src: '/images/@dummy/hr-trend.png',
    fit: '120% auto'
  },
  imageProps,
  shadow = false,
  slots,
  priority = false
}: Readonly<CardMediaProps>) {
  return (
    <Card
      type="content"
      card={{
        id: 'hr-trend',
        category: 'HR 트렌드',
        title: 'HR 담당자를 위한 글로벌 AI 트렌드와 활용',
        description: '멀캠ON 세미나에서 글로벌 AI 트렌드와 HR 담당자를 위한 활용 인사이트를 만나보세요.',
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
