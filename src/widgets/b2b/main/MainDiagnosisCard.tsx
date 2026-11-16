import Card from '@/comp/ui/Card' // Card 컴포넌트
import type { CardMediaProps } from '@/comp/ui/Card' // Card Media Props 타입

/** 진단추천의 문구·연결·이미지는 이 위젯 호출부에서 관리합니다. */
export default function MainDiagnosisCard ({
  designType = 'typeB',
  image = {
    src: designType === 'typeA' ? '/images/pages/main/diagnosis-glass.png' : '/images/pages/main/diagnosis-flower.webp',
    width: 310,
    height: 270
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
        id: 'diagnosis',
        tone: 'lavender',
        label: '간편 진단 및 맞춤 교육추천',
        title: designType === 'typeA' ? '간편 진단 &\n맞춤 교육추천' : '간편 진단 &\n맞춤 추천받기',
        description: '30초 간편진단',
        href: '/b2b/service/diagnosis',
        action: '진단시작하기'
      }}
      shadow={shadow}
      image={image}
      imageProps={imageProps}
      slots={slots}
      priority={priority}
    />
  )
}
