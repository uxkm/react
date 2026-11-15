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
  /** 이미지 경로 또는 상세 설정. 과정·콘텐츠·오버레이·분할 소개·웹진은 누락·null·로드 실패 시 대체 아이콘, 다른 유형은 null이면 숨깁니다. */
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
  readonly tone: 'cream' | 'gray' | 'sage' | 'surface'
  readonly description?: string
  readonly target?: '_self' | '_blank'
}

/** 썸네일과 카테고리를 갖는 콘텐츠 카드. 메인·목록·추천 영역에서 재사용합니다. */
export interface ContentCardData {
  readonly id: string
  readonly category: string
  readonly title: string
  readonly description?: string
  readonly href: string
  readonly image?: CardImageSource
  readonly date?: string
  readonly keywords?: readonly string[]
  readonly target?: '_self' | '_blank'
}

/** 날짜는 ISO YYYY-MM-DD 형식입니다. 이미지 없는 뉴스와 오버레이가 메타 구조를 공유합니다. */
export interface NewsCardData {
  readonly id: string
  readonly title: string
  readonly href: string
  readonly category?: string
  readonly date?: string
  readonly description?: string
  readonly keywords?: readonly string[]
  readonly target?: '_self' | '_blank'
}

export interface OverlayCardData extends NewsCardData {
  readonly image?: CardImageSource
}

/** 좌·우 썸네일을 갖는 뉴스·웹진 목록 카드. */
export interface WebzineCardData extends NewsCardData {
  readonly image?: CardImageSource
}

export interface WebzineCardProps extends CardMediaProps {
  readonly imagePosition?: 'start' | 'end'
}

export interface OverlayCardProps extends CardMediaProps {
  readonly format?: 'portrait' | 'landscape'
}

export interface FeatureCardData {
  readonly id: string
  readonly title: string
  readonly description: string
  readonly href: string
  readonly action: string
  readonly category?: string
  readonly image?: CardImageSource
  readonly target?: '_self' | '_blank'
}

export interface FeatureCardProps extends CardMediaProps {
  readonly imagePosition?: 'start' | 'end'
  readonly tone?: 'surface' | 'brand' | 'dark'
  readonly actions?: ReactNode
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

/** 과정 정보는 화면에서 조합합니다. 카드에는 제목·링크·미디어만 필수 구조로 둡니다. */
export interface CourseCardData {
  readonly id: string
  readonly title: string
  readonly href: string
  readonly category?: string
  readonly description?: string
  readonly image?: CardImageSource
}

export interface CourseCardProps extends Omit<CardMediaProps, 'slots'> {
  readonly layout?: 'vertical' | 'horizontal'
  /** image·labels를 제외한 슬롯은 상세 링크 밖에 배치합니다. */
  readonly slots?: {
    readonly image?: ReactNode
    /** 제목 앞의 읽기 전용 분류 배지. 링크·버튼 등 조작 요소는 badges에 전달합니다. */
    readonly labels?: ReactNode
    readonly badges?: ReactNode
    readonly schedule?: ReactNode
    readonly reviews?: ReactNode
    readonly keywords?: ReactNode
    readonly meta?: ReactNode
    readonly footer?: ReactNode
  }
  readonly actions?: ReactNode
}

export type TypedCardProps =
  | ({ type: 'webzine'; card: WebzineCardData } & WebzineCardProps)
  | ({ type: 'overlay'; card: OverlayCardData } & OverlayCardProps)
  | ({ type: 'news'; card: NewsCardData } & CardAppearanceProps)
  | ({ type: 'feature'; card: FeatureCardData } & FeatureCardProps)
  | ({ type: 'course'; card: CourseCardData } & CourseCardProps)
  | ({ type: 'callout'; card: CalloutCardData } & CalloutCardProps)
  | ({ type: 'testimonial'; card: TestimonialCardData } & TestimonialCardProps)
  | ({ type: 'promotion'; card: PromotionCardData } & CardMediaProps)
  | ({ type: 'image'; card: ImageCardData } & CardMediaProps)
  | ({ type: 'content'; card: ContentCardData } & CardMediaProps)
  | ({ type: 'quick-link'; card: QuickLinkCardData } & CardAppearanceProps)
