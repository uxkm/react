import { familySites, footerLinks } from './footerData'

export interface FooterMenuLink {
  readonly label: string
  readonly href?: string
  readonly strong?: boolean
}

export const footerCompanyLinks: readonly FooterMenuLink[] = [
  { label: '회사소개', href: '/b2b/company/intro' },
  { label: '채용안내', href: footerLinks.find(link => link.label === '채용안내')?.href },
  { label: '윤리경영', href: '/b2b/company/ethics/management' },
  { label: '부정제보', href: 'https://ethics.multicampus.com/' }
]

export const footerGuideLinks: readonly FooterMenuLink[] = [
  { label: '공지사항', href: 'https://www.multicampus.com/om/about/sub/reqestBoardList' },
  { label: '자료실', href: '/b2b/insight/resources/list' },
  { label: '오시는 길', href: footerLinks.find(link => link.label.startsWith('찾아오시는 길'))?.href },
  { label: '오픈소스 라이선스', href: footerLinks.find(link => link.label === '오픈소스라이선스')?.href }
]

export const footerTypeBFamilySites: readonly FooterMenuLink[] = familySites.slice(0, 4).map((site, index) => ({
  ...site, label: index === 0 ? '멀티캠퍼스 교육사이트' : site.label
}))

/**
 * 이용약관·개인정보는 운영 공개 경로를 유지합니다.
 * 이러닝·위치기반·사업자 정보확인은 현재 페이지 레이어로 연결될 예정이라 href는 비웁니다.
 */
export const footerTypeBLegalLinks: readonly FooterMenuLink[] = [
  { label: '이용약관', href: 'https://www.multicampus.com/b2b/kr/agree/agree.html' },
  { label: '개인정보 처리방침', href: 'https://www.multicampus.com/b2b/kr/agree2/agree.html', strong: true },
  { label: '이러닝 서비스약관', href: '' },
  { label: '위치기반 서비스 약관', href: '' },
  { label: '사업자 정보확인', href: '' }
]

export const footerTypeBSocials = [
  { label: '네이버 블로그', icon: 'naver', href: 'https://blog.naver.com/multicampus_official' },
  { label: '유튜브', icon: 'youtube', href: 'https://www.youtube.com/multicampus_official' },
  { label: '링크드인', icon: 'linkedin', href: 'https://www.linkedin.com/company/multicampus-korea/' }
] as const

/** 마크 아이콘 + 안내 문구. 문구는 m.multicampus.com 푸터 `.cert_info` 구조를 따른다. */
export const footerTypeBCertifications = [
  {
    mark: 'marks/cert-1.png',
    width: 40,
    height: 40,
    alt: '우수훈련기관 인증 마크',
    lines: [
      '고용노동부 | 직업능력심사평가원',
      '원격평생교육원 우수훈련기관 5년',
      '인증기간 : 2022.01~2026.12'
    ]
  },
  {
    mark: 'marks/cert-2.png',
    width: 40,
    height: 40,
    alt: '인적자원개발 우수기관 인증 마크',
    lines: [
      '고용노동부',
      '인적자원개발 우수기관 3년',
      '인증기간 : 2026.09~2029.09'
    ]
  },
  {
    mark: 'marks/cert-3.png',
    width: 40,
    height: 40,
    alt: '가족친화 인증기업 마크',
    lines: [
      '여성가족부',
      '가족친화 인증기업 3년',
      '인증기간 : 2024.12~2027.11'
    ]
  },
  {
    mark: 'marks/cert-4.png',
    width: 40,
    height: 40,
    alt: 'ISMS 인증 마크',
    lines: [
      '[인증범위] Total HRD 서비스 운영',
      '(멀티캠퍼스 이러닝 서비스, 집합교육 서비스,',
      'OPIc 평가 서비스, 지식컨텐츠 서비스)',
      '유효기간 : 2025.11.05~2028.11.04'
    ]
  },
  {
    mark: 'marks/cert-5.png',
    width: 40,
    height: 56,
    alt: 'The EdTech Awards 마크',
    lines: [
      '[인증범위] 멀티캠퍼스 B2B서비스',
      'MLP Platform',
      '미국 2025 The EdTech Awards',
      ': Cool Tool Finalist 등재',
      '인증기간: 2025.04.09~'
    ]
  }
] as const
