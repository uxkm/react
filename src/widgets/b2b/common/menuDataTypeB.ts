import { type B2bMenuGroup } from './menuData';

export interface FullMenuTypeBSection {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly groups: readonly B2bMenuGroup[];
}

/** 현재 시안(typeB) 전체메뉴 — 기업교육·서비스·회사소개 3단 구성. */
export const fullMenuTypeBSections: readonly FullMenuTypeBSection[] = [
  {
    id: 'education',
    title: '기업교육',
    description: '조직과 개인의 성장을 위한 맞춤형 교육 과정을 제공합니다.',
    groups: [
      {
        label: 'AX교육',
        links: [
          { label: 'AX 해커톤', href: '/b2b/contents/ax/camp' },
          { label: 'AX 교육체계', href: '/b2b/contents/ax/overview' },
          { label: '[공개교육] AI 로드맵', href: 'https://ui.multicampus.com/roadmap/it/ai.html' },
          { label: 'AX 워크숍', href: '/b2b/contents/ax/workshop' },
          { label: 'AI Studio', href: '/b2b/contents/ax/ai-studio' },
          { label: 'AX 역량수준 진단', href: '/b2b/contents/ax/competency' },
        ],
      },
      {
        label: 'IT 교육',
        links: [
          { label: 'IT 교육체계', href: '/b2b/contents/it' },
          {
            label: '[공개교육] IT 로드맵',
            href: 'https://ui.multicampus.com/roadmap/it/offline.html',
          },
        ],
      },
      {
        label: '직무교육',
        links: [
          { label: '직무 교육체계', href: '/b2b/contents/job' },
          { label: '직무 전문 역량', href: '/b2b/contents/job/professional' },
          { label: '산업 전문 역량', href: '/b2b/contents/job/industry' },
          { label: '자격대비', href: '/b2b/contents/job/certification' },
        ],
      },
      {
        label: '리더십',
        links: [
          { label: '임원 리더십', href: '/b2b/contents/leadership/executive' },
          { label: 'SERICEO', href: 'https://www.sericeo.com/' },
          { label: '리더십 교육', href: '/b2b/contents/leadership' },
          { label: 'MBA 프로그램', href: '/b2b/contents/leadership/mba' },
          { label: '리더십 진단', href: '/b2b/contents/leadership/assessment' },
        ],
      },
      {
        label: '법정필수',
        links: [
          { label: '법정필수 교육', href: '/b2b/contents/mandatory' },
          { label: '서비스 특징', href: '/b2b/contents/mandatory/features' },
          { label: '대표과정', href: '/b2b/contents/mandatory/courses' },
          { label: '간편 견적받기', href: '/b2b/contents/mandatory/estimate' },
        ],
      },
      {
        label: '외국어',
        links: [
          { label: '외국어생활관', href: '/b2b/contents/language/language-life' },
          { label: '외국어 교육체계', href: '/b2b/contents/language' },
          { label: '사외외국어', href: '/b2b/contents/language/ai-language' },
          { label: 'OPIc', href: 'https://www.opic.or.kr/' },
        ],
      },
      {
        label: '중소기업 교육',
        links: [
          { label: '[90% 환급] 중소기업 인재키움 프리미엄', href: '/b2b/contents/small-business' },
        ],
      },
    ],
  },
  {
    id: 'services',
    title: '서비스',
    description: '학습 경험과 HRD 전문 서비스를 한곳에서 만나보세요.',
    groups: [
      {
        label: '러닝플랫폼',
        links: [
          { label: '러닝플랫폼', href: '/b2b/service/platform' },
          { label: '플랫폼 활용 컨설팅', href: '/b2b/service/platform/consulting' },
        ],
      },
      {
        label: '러닝 서비스',
        links: [
          { label: '이러닝', href: '/b2b/service/learning/elearning' },
          { label: '북러닝', href: '/b2b/service/learning/book' },
          { label: '마이크로러닝', href: '/b2b/service/learning/micro' },
        ],
      },
      {
        label: 'HRD 전문 서비스',
        links: [
          { label: '진단 서비스', href: '/b2b/service/diagnosis' },
          { label: '컨설팅 서비스', href: '/b2b/service/consulting' },
          { label: 'BPO 서비스', href: '/b2b/service/bpo' },
        ],
      },
      {
        label: 'HR 인사이트',
        links: [
          { label: '멀캠 ON', href: '/b2b/insight/on/list' },
          { label: '자료실', href: '/b2b/insight/resources/list' },
        ],
      },
      {
        label: '상담·신청',
        links: [
          { label: '기업교육 맞춤 상담', href: '/b2b/contact/education' },
          { label: '법정필수 간편견적', href: '/b2b/contents/mandatory/estimate' },
          { label: '진단&맞춤탐색', href: '/b2b/service/diagnosis' },
          { label: '기업교육 제안서 다운로드', href: '/b2b/insight/resources/list' },
        ],
      },
    ],
  },
  {
    id: 'company',
    title: '회사소개',
    description: '멀티캠퍼스의 비전과 경영 정보를 확인하세요.',
    groups: [
      {
        label: '기업소개',
        links: [
          { label: 'CEO 인사말', href: '/b2b/company/ceo' },
          { label: '멀티캠퍼스 소개', href: '/b2b/company/intro' },
          { label: '연혁', href: '/b2b/company/history' },
        ],
      },
      {
        label: '홍보',
        links: [
          { label: '언론보도', href: '/b2b/company/pr/news/list' },
          { label: '수상실적', href: '/b2b/company/pr/awards' },
        ],
      },
      {
        label: '인재채용',
        links: [{ label: '채용안내', href: 'https://careers.multicampus.com/ko/home' }],
      },
      {
        label: '투자정보',
        links: [
          { label: '공시정보·전자공고', href: '/b2b/company/investors/disclosure' },
          { label: '주주현황', href: '/b2b/company/investors/shareholders' },
          { label: '재무정보', href: '/b2b/company/investors/financial' },
          { label: 'IR 자료실', href: '/b2b/company/investors/ir' },
          { label: '주가정보', href: '/b2b/company/investors/stock-price' },
        ],
      },
      {
        label: '지속가능경영',
        links: [
          { label: 'ESG 경영', href: '/b2b/company/sustainability/esg' },
          { label: '환경경영', href: '/b2b/company/sustainability/environment' },
          { label: '인권경영', href: '/b2b/company/sustainability/human-rights' },
          { label: '정보보호', href: '/b2b/company/sustainability/information' },
          { label: '사회공헌', href: '/b2b/company/sustainability/contribution' },
          { label: 'ESG Data', href: '/b2b/company/sustainability/esg-data' },
          { label: '윤리규범', href: '/b2b/company/ethics/management' },
          { label: '제보/문의', href: 'https://ethics.multicampus.com/' },
          { label: '지배구조보고서', href: '/b2b/company/sustainability/esg' },
        ],
      },
      {
        label: '윤리·준법경영',
        links: [
          { label: '경영원칙', href: '/b2b/company/ethics/management' },
          { label: '부패제보', href: 'https://ethics.multicampus.com/' },
          { label: '준법경영', href: '/b2b/company/ethics/compliance' },
        ],
      },
    ],
  },
];
