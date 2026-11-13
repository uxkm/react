import Card from '@/modules/b2b/cards/Card' // Card 컴포넌트
import type { CardMediaProps } from '@/modules/b2b/cards/cardTypes' // Card Media Props 타입

/** 진단추천의 문구·연결·이미지는 이 위젯 호출부에서 관리합니다. */
export default function MainDiagnosisCard ({
  image = {
    src: '/images/pages/main/diagnosis-glass.png',
    width: 310,
    height: 270
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
        id: 'diagnosis',
        tone: 'lavender',
        label: '간편 진단 및 맞춤 교육추천',
        title: '간편 진단 &\n맞춤 교육추천',
        description: '30초 간편진단',
        href: '/b2b/common/education-diagnosis',
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
