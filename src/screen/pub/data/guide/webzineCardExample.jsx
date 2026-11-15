import { Card } from '@/comp'
import { wrapPageExample } from '@/screen/pub/lib/pageExampleCode'

const leftCard = {
  id: 'webzine-left',
  category: '뉴스',
  date: '2026-11-15',
  title: '새로운 서비스가 바꾸는 일상의 모습',
  description: '서비스 업데이트와 그 안에 담긴 이야기를 살펴보세요.',
  keywords: ['서비스', '업데이트'],
  href: '#card-types',
  image: '/images/@dummy/naver-tech.png'
}

const rightCard = {
  id: 'webzine-right',
  category: '웹진',
  date: '2026-11-15',
  title: '현장의 이야기를 전하는 이번 달 웹진',
  description: '인터뷰와 사례를 통해 새로운 아이디어를 만나보세요.',
  keywords: ['인터뷰', '인사이트'],
  href: '#card-types',
  image: '/images/@dummy/naver-service.png'
}

export const webzineCardExample = {
  type: 'webzine',
  title: '유형 · 뉴스·웹진 (썸네일 좌측·우측)',
  description:
    'imagePosition="start"는 좌측, "end"는 우측 썸네일입니다. 분류·날짜·제목·설명·키워드를 조합하고 카드 전체가 하나의 링크로 동작합니다. 좁은 화면에서도 좌·우 배치를 유지하며, 이미지 누락·로드 실패 시 대체 아이콘을 표시합니다.',
  preview: (
    <div className="demo-stack">
      <Card
        type="webzine"
        imagePosition="start"
        card={leftCard}
      />
      <Card
        type="webzine"
        imagePosition="end"
        card={rightCard}
      />
    </div>
  ),
  code: wrapPageExample(
    `const leftCard = ${JSON.stringify(leftCard, null, 2)}
const rightCard = ${JSON.stringify(rightCard, null, 2)}

<div className="demo-stack">
  <Card
    type="webzine"
    imagePosition="start"
    card={leftCard}
  />
  <Card
    type="webzine"
    imagePosition="end"
    card={rightCard}
  />
</div>`,
    { name: 'WebzineCardExample', reactImports: [], compImports: ['Card'] }
  )
}
