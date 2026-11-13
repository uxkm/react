import Card from '@/modules/b2b/cards/Card'
import type { TestimonialCardProps } from '@/modules/b2b/cards/cardTypes'

/** 첨부 시안의 리더십 고객사례 카드. */
export default function MainLeadershipTestimonialCard (props: Readonly<TestimonialCardProps>) {
  return (
    <Card
      type="testimonial"
      card={{
        category: '삼성인력개발원',
        quote: '리더가 바뀌지 않으면\n혁신은 일어나지\n않습니다',
        author: 'A금융 인재개발팀 김OO 팀장'
      }}
      {...props}
    />
  )
}
