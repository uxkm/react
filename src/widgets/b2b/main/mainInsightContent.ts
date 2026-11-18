import type { ContentCardData } from '@/comp/ui/Card'

/** typeB 인사이트. 추가 3개 콘텐츠는 멀티캠퍼스 공식 멀캠ON 목록을 참고합니다. */
export const mainInsightContent: readonly ContentCardData[] = [
  {
    id: 'hr-trend', category: 'HR 트렌드',
    title: 'HR 담당자를 위한 글로벌 AI 트렌드와 활용',
    description: '멀캠ON 10월 세미나에서 공개하는 2027 HR 트렌드의 핵심 키워드를 미리 살펴봅니다.',
    image: '/images/pages/main/ver3-home/insight-hr.png',
    href: '/b2b/insight/on/list'
  },
  {
    id: 'ax-mind', category: 'AX',
    title: 'AI 시대, 당신의 마음은 안녕하십니까? - 정신건강의학과 윤대현 교수편',
    description: '직급·직무별 출발선이 다른 조직에서 AI 리터러시 교육을 설계하는 단계별 접근법을 정리했습니다.',
    image: '/images/pages/main/ver3-home/insight-ax.png', href: '/b2b/insight/on/list'
  },
  {
    id: 'leadership-ai', category: '리더십',
    title: 'AI는 인류에게 위협일까, 기회일까? - 진화생물학자 최재천 교수편',
    description: '짧고 반복 가능한 학습 콘텐츠로 현업 적용률을 높인 운영 방식을 살펴봅니다.',
    image: '/images/pages/main/ver3-home/insight-leadership.png', href: '/b2b/insight/on/list'
  },
  {
    id: 'hr-trends-2027', category: 'HR 트렌드',
    title: '데이터로 읽는 2027 트렌드: HR이 주목해야 할 변화와 과제 - 생활변화관측소 박현영 소장편',
    description: '데이터로 살펴보는 변화와 HR이 준비할 과제를 만나보세요.',
    image: '/images/@dummy/hr-trends-2027.webp', href: '/b2b/insight/on/list'
  },
  {
    id: 'hr-growth', category: '리더십',
    title: '빠르게 성장하는 조직은 무엇이 다른가? 유니콘 기업으로 보는 성장 공식 - 갤럭시코퍼레이션 최용호 대표, 신태균 소장편',
    description: '빠르게 성장하는 조직을 통해 조직의 성장 방향을 살펴봅니다.',
    image: '/images/@dummy/hr-growth.webp', href: '/b2b/insight/on/list'
  },
  {
    id: 'ai-history', category: 'AX',
    title: 'AI 시대의 생존법, 역사 속에서 찾다 - 역사학자 심용환 소장편',
    description: '역사를 통해 AI 시대를 준비하는 새로운 관점을 만나보세요.',
    image: '/images/@dummy/ai-history.webp', href: '/b2b/insight/on/list'
  }
]
