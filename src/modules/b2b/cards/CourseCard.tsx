import { Card as BaseCard, CardBody } from '@/comp/ui/Card' // UI 컴포넌트 · Card 컴포넌트
import { Icon } from '@/comp/ui/Icon' // Icon 컴포넌트
import { Tag } from '@/comp/ui/Tag' // Tag 컴포넌트
import { Link } from '@/lib/router' // 클라이언트 링크
import CardBackground from './CardBackground' // Card Background 컴포넌트
import type { CardMediaProps, CourseCardData } from './cardTypes' // card Types

/**
 * 교육방식 배지·썸네일·두 줄 제목·상세보기로 구성하는 교육과정 카드.
 *
 * 이미지 경로는 이 파일에 고정하지 않고, 사용하는 페이지·위젯에서 전달합니다.
 *
 * 방법 1. image prop으로 이미지 경로를 별도로 전달합니다.
 * <Card
 *   type="course"
 *   card={{
 *     id: 'python-intro',
 *     title: '파이썬 입문',
 *     format: '대면',
 *     href: '/b2b/courses/python-intro'
 *   }}
 *   image="/images/courses/python-intro.png"
 * />
 *
 * 방법 2. card 데이터 안에 image를 포함해 전달합니다.
 * <Card
 *   type="course"
 *   card={{
 *     id: 'python-intro',
 *     title: '파이썬 입문',
 *     format: '대면',
 *     href: '/b2b/courses/python-intro',
 *     image: '/images/courses/python-intro.png'
 *   }}
 * />
 *
 * 두 방식은 동일하게 이미지를 표시합니다. 둘 다 지정하면 별도의 image prop이 우선합니다.
 * public/images/courses/python-intro.png 파일은 /images/courses/python-intro.png로 참조합니다.
 */
export default function CourseCard ({
  card,
  shadow = false,
  // image prop을 생략한 경우 card 데이터의 이미지 경로·설정을 사용합니다. null이면 숨깁니다.
  image = card.image,
  // src·alt·width·height·fit·position을 추가하거나 이미지의 기본 설정을 덮어씁니다.
  imageProps,
  // slots.image로 이미지 영역을 직접 구성할 수 있습니다. null이면 숨깁니다.
  slots,
  // true이면 기본 배경 이미지 리소스를 미리 불러옵니다.
  priority = false
}: Readonly<{ card: CourseCardData } & CardMediaProps>) {
  return (
    // 카드 전체가 하나의 링크이며, 상세보기 영역도 같은 링크에 포함됩니다.
    <BaseCard
      shadow={shadow}
      as={Link}
      href={card.href}
      className="card_course"
      media={
        <div className="card_course-media">
          {/* 전달받은 경로를 CSS 배경 이미지로 표시합니다. 이미지 슬롯이 있으면 슬롯이 우선합니다. */}
          <CardBackground
            className="card_course-thumbnail"
            image={image}
            imageProps={{
              // 기본 cover로 썸네일을 채웁니다. imageProps.fit을 전달하면 마지막에 적용됩니다.
              fit: typeof image === 'object' && image !== null ? image.fit ?? 'cover' : 'cover',
              ...imageProps
            }}
            priority={priority}
          >
            {slots?.image}
          </CardBackground>
          {/* 썸네일 위에 교육방식 배지를 겹쳐 표시합니다. */}
          <Tag variant="borderless" round className="card_course-format">
            <span className="card_course-format-icon" aria-hidden="true">
              {/* 아이콘 생략 시 사람 그룹 아이콘을 사용합니다. null이면 아이콘을 표시하지 않습니다. */}
              {card.icon === undefined ? (
                <Icon size={20}>
                  <circle cx="9" cy="7" r="3" />
                  <path d="M2 20v-2a7 7 0 0 1 14 0v2M16 4a3 3 0 0 1 0 6M19 13a6 6 0 0 1 3 5v2" />
                </Icon>
              ) : card.icon}
            </span>
            {card.format}
          </Tag>
        </div>
      }
    >
      <CardBody className="card_course-body">
        {/* 제목은 CSS에서 최대 두 줄까지 표시합니다. */}
        <strong className="card_course-title">{card.title}</strong>
        {/* 별도의 중첩 링크 없이 상세 이동을 안내하며, 문구를 생략하면 '상세보기'를 사용합니다. */}
        <span className="card_course-action">
          {card.action ?? '상세보기'}
          <Icon name="arrow-left" className="card_arrow-icon" size={18} />
        </span>
      </CardBody>
    </BaseCard>
  )
}
