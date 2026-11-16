import Card from '@/comp/ui/Card' // Card 컴포넌트
import type { CardMediaProps } from '@/comp/ui/Card' // Card Media Props 타입

/** 맞춤상담의 문구·연결·이미지는 이 위젯 호출부에서 관리합니다. */
export default function MainConsultationCard ({
  designType = 'typeB',
  image = {
    src: designType === 'typeA' ? '/images/pages/main/consultation-glass.png' : '/images/pages/main/hero-objects/ribbed-sphere.webp',
    width: 380,
    height: 300
  },
  imageProps,
  shadow = false,
  slots,
  priority = true
}: Readonly<CardMediaProps & { designType?: 'typeA' | 'typeB' }>) {
  return (
    <Card
      type="image"
      card={{
        id: 'consultation',
        tone: 'mint',
        label: '기업교육 맞춤상담',
        title: designType === 'typeA' ? '기업교육\n맞춤상담' : '기업교육\n문의하기',
        description: '평균 1일 이내 신속 답변!',
        href: '/b2b/contact/education',
        action: designType === 'typeA' ? '맞춤상담예약' : '맞춤 상담신청'
      }}
      shadow={shadow}
      image={image}
      imageProps={imageProps}
      slots={slots ?? (designType === 'typeB' ? { image: <><span className="main-consultation_sphere" /><span className="main-consultation_flower" /></> } : undefined)}
      priority={priority}
    />
  )
}
