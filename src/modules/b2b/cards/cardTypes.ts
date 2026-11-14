import type { CSSProperties, ReactNode } from 'react' // React

/** 경로·대체 텍스트·표시 크기·이미지 맞춤 방식은 호출 측에서 지정합니다. */
export interface CardImageData {
  readonly src: string
  readonly alt?: string
  readonly width?: number
  readonly height?: number
  readonly fit?: CSSProperties['backgroundSize']
  readonly position?: CSSProperties['backgroundPosition']
}

export type CardImageSource = string | CardImageData | null

export interface CardAppearanceProps {
  /** true이면 카드 그림자를 표시합니다. 기본 false. */
  readonly shadow?: boolean
}

export interface TestimonialCardProps extends CardMediaProps {
  /** 단독 사용 시 선택 상태를 표시합니다. 슬라이더에서는 활성 슬라이드에 적용합니다. */
  readonly selected?: boolean
}

export interface CardMediaProps extends CardAppearanceProps {
  /** 호출 위치에서 기본 이미지 경로 또는 상세 설정을 지정합니다. null은 이미지 숨김. */
  readonly image?: CardImageSource
  /** 호출 위치에서 크기·설명·맞춤 방식을 지정합니다. */
  readonly imageProps?: Partial<CardImageData>
  /** 이미지 영역을 사용자 마크업으로 교체합니다. null이면 숨깁니다. */
  readonly slots?: { readonly image?: ReactNode }
  readonly priority?: boolean
}

export interface PromotionCardData {
  readonly id: string
  readonly title: string
  readonly description: string
  readonly image?: CardImageSource
  readonly href: string
  readonly action: string
}

export interface ImageCardData {
  readonly id: string
  readonly title: string
  readonly description: string
  readonly image?: CardImageSource
  readonly href: string
  readonly action: string
  /** @deprecated 링크 이름은 보이는 제목·설명·동작 문구로 계산합니다. 기존 데이터 호환용. */
  readonly label?: string
  readonly tone: 'mint' | 'lavender'
}

export interface QuickLinkCardData {
  readonly id: string
  readonly title: string
  readonly href: string
  readonly icon: ReactNode
  readonly tone: 'cream' | 'gray' | 'sage'
}

/** 썸네일과 카테고리를 갖는 콘텐츠 카드. 메인·목록·추천 영역에서 재사용합니다. */
export interface ContentCardData {
  readonly id: string
  readonly category: string
  readonly title: string
  readonly description: string
  readonly href: string
  readonly image?: CardImageSource
}

/** 교육방식 배지·썸네일·제목·상세보기로 구성하는 교육과정 카드. */
export interface CourseCardData {
  readonly id: string
  readonly title: string
  readonly format: string
  /** 교육방식 아이콘. 생략하면 사람 그룹 아이콘, null이면 숨깁니다. */
  readonly icon?: ReactNode
  readonly href: string
  readonly image?: CardImageSource
  /** 기본값은 '상세보기'입니다. */
  readonly action?: string
}

/** 업종·고객 인용문·작성자로 구성하는 고객사례 카드. image는 원형 프로필입니다. */
export interface TestimonialCardData {
  readonly category: string
  readonly quote: string
  readonly author: string
  readonly image?: CardImageSource
}

/** 가운데 정렬 제목·설명과 버튼 영역을 갖는 안내 카드. */
export interface CalloutCardData {
  readonly id?: string
  readonly title: string
  readonly description: string
}

export interface CalloutCardProps extends CardAppearanceProps {
  readonly actions: ReactNode
}

export type CardProps =
  | ({ type: 'callout'; card: CalloutCardData } & CalloutCardProps)
  | ({ type: 'testimonial'; card: TestimonialCardData } & TestimonialCardProps)
  | ({ type: 'promotion'; card: PromotionCardData } & CardMediaProps)
  | ({ type: 'image'; card: ImageCardData } & CardMediaProps)
  | ({ type: 'content'; card: ContentCardData } & CardMediaProps)
  | ({ type: 'course'; card: CourseCardData } & CardMediaProps)
  | ({ type: 'quick-link'; card: QuickLinkCardData } & CardAppearanceProps)
