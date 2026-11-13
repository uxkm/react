import Card from '@/modules/b2b/cards/Card' // Card 컴포넌트
import type { TestimonialCardProps } from '@/modules/b2b/cards/cardTypes' // Testimonial Card Props 타입

/** 첨부 시안의 금융 고객사례 문구. 프로필 이미지는 image prop으로 교체합니다. */
export default function MainFinanceTestimonialCard (props: Readonly<TestimonialCardProps>) {
  return (
    <Card
      type="testimonial"
      card={{
        category: '금융',
        quote: '임원이 먼저 배우니\n전사 AI 전환에\n속도가 붙었습니다',
        author: 'A금융 인재개발팀 김OO 팀장'
      }}
      {...props}
    />
  )
}
