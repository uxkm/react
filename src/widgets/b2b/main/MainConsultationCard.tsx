import Card from '@/modules/b2b/cards/Card'
import type { CardMediaProps } from '@/modules/b2b/cards/cardTypes'

/** 맞춤상담의 문구·연결·이미지는 이 위젯 호출부에서 관리합니다. */
export default function MainConsultationCard ({
  image = {
    src: '/images/pages/main/consultation-glass.png',
    width: 380,
    height: 300
  },
  imageProps,
  shadow = false,
  slots,
  priority = true
}: Readonly<CardMediaProps>) {
  return (
    <Card
      type="image"
      card={{
        id: 'consultation',
        tone: 'mint',
        label: '기업교육 맞춤상담',
        title: '기업교육\n맞춤상담',
        description: '평균 1일 이내 신속 답변!',
        href: '/b2b/contact/education',
        action: '맞춤상담예약'
      }}
      shadow={shadow}
      image={image}
      imageProps={imageProps}
      slots={slots}
      priority={priority}
    />
  )
}
