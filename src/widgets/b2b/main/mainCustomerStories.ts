import type { TestimonialCardData } from '@/comp/ui/Card'

/** 첨부 시안의 UI 확인용 고객사례 문구. 실제 사례 원문 확보 시 교체합니다. */
const stories: readonly (TestimonialCardData & { avatar: string })[] = [
  {
    avatar: 'leadership',
    category: '삼성인력개발원',
    quote: '리더가 바뀌지 않으면\n혁신은 일어나지\n않습니다',
    author: 'A금융 인재개발팀 김OO 팀장'
  },
  {
    avatar: 'public',
    category: '기관',
    quote: '현업의 아이디어를\nAI 에이전트로\n만들어낸 G기관',
    author: 'G기관 디지털혁신실 박OO 팀장'
  },
  {
    avatar: 'manufacturing',
    category: '제조',
    quote: '직무별 진단으로\n꼭 필요한 교육만\n설계한 B제조',
    author: 'B제조 HRD팀 이OO 파트장\n생산기술팀 장OO 팀장'
  },
  {
    avatar: 'finance',
    category: '금융',
    quote: '임원이 먼저 배우니\n전사 AI 전환에\n속도가 붙었습니다',
    author: 'A금융 인재개발팀 김OO 팀장'
  }
]

/** 첫 화면에서 금융 카드 다음에 기관과 인력개발원 카드가 이어지는 순환 구성입니다. */
export const mainCustomerStories = [...stories, stories[1], stories[0], ...stories.slice(2)]
