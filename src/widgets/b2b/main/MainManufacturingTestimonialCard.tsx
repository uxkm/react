import Card from '@/modules/b2b/cards/Card'
import type { TestimonialCardProps } from '@/modules/b2b/cards/cardTypes'

/** 제조 고객사례의 UI 확인용 문구. */
export default function MainManufacturingTestimonialCard (props: Readonly<TestimonialCardProps>) {
  return (
    <Card
      type="testimonial"
      card={{
        category: '제조',
        quote: '직무별 진단으로\n꼭 필요한 교육만\n설계했습니다',
        author: 'B제조 인재개발팀 이OO 팀장'
      }}
      {...props}
    />
  )
}
