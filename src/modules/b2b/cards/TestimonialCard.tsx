import { Stat } from '@/comp/ui/Stat'
import CardBackground from './CardBackground'
import type { TestimonialCardProps, TestimonialCardData } from './cardTypes'

/** 인용문과 작성자 정보를 강조하는 고객사례 카드. */
export default function TestimonialCard ({
  card,
  selected = false,
  shadow = false,
  image = card.image,
  imageProps,
  slots,
  priority = false
}: Readonly<{ card: TestimonialCardData } & TestimonialCardProps>) {
  const profileSource = imageProps?.src ?? (typeof image === 'string' ? image : image?.src)
  const hasProfile = slots?.image !== null && (slots?.image !== undefined || Boolean(profileSource))

  return (
    <Stat
      variant="testimonial"
      className="card_testimonial"
      title={card.category}
      value={card.quote}
      description={card.author}
      selected={selected}
      shadow={shadow}
      avatar={hasProfile ? (
        <CardBackground
          as="span"
          className="card_testimonial-avatar"
          image={image}
          imageProps={{ fit: 'cover', ...imageProps }}
          priority={priority}
        >
          {slots?.image}
        </CardBackground>
      ) : undefined}
    />
  )
}
