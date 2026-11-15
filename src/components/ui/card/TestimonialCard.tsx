import { Stat } from '@/comp/ui/Stat' // Stat 컴포넌트
import type { TestimonialCardProps, TestimonialCardData } from './cardTypes' // card Types

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
  const settings = { ...(typeof image === 'string' ? { src: image } : image ?? {}), ...imageProps }
  const showImage = slots?.image === undefined && image !== null
  const fit = settings.fit === 'contain' ? 'contain' : 'cover'

  return (
    <Stat
      variant="testimonial"
      className="card_testimonial"
      title={card.category}
      value={card.quote}
      description={card.author}
      selected={selected}
      shadow={shadow}
      avatarProps={{
        src: showImage ? settings.src : undefined,
        alt: settings.alt,
        imageFit: fit,
        imagePosition: settings.position,
        priority
      }}
      avatar={slots?.image ?? undefined}
    />
  )
}
