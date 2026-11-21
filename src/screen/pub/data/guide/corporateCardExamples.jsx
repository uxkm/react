import {
  Accordion,
  Button,
  Card,
  CardBody,
  CardDeck,
  Carousel,
  CarouselSlide,
  Icon,
  Stat,
  Tabs,
} from '@/comp';
import { wrapPageExample } from '@/screen/pub/lib/pageExampleCode';

const story = {
  id: 'story',
  category: 'Service',
  date: '2026-11-15',
  title: '새로운 가능성을 함께 발견하는 사람들',
  description: '기술과 일상에서 발견한 변화를 소개합니다.',
  href: '#card-types',
  keywords: ['사람', '새로운 경험'],
  image: '/images/@dummy/naver-story.jpg',
};
const news = {
  id: 'news',
  category: '보도자료',
  date: '2026-11-15',
  title: '함께 성장하는 새로운 파트너 프로그램을 소개합니다',
  href: '#card-types',
  keywords: ['파트너', '성장'],
};
const feature = {
  id: 'service',
  category: '서비스',
  title: '일상에 더 가까운\n기술의 가능성',
  description: '새로운 서비스와 기술이 만들어 가는 변화를 만나보세요.',
  href: '#card-types',
  action: '자세히 보기',
  image: '/images/@dummy/naver-service.png',
};
const technologies = [
  feature,
  {
    ...feature,
    id: 'technology',
    category: '기술',
    title: '새로운 도전을\n현실로 만드는 기술',
    image: '/images/@dummy/naver-tech.png',
  },
  {
    ...feature,
    id: 'sustainability',
    category: '지속가능성',
    title: '더 나은 내일을 위한\n연결과 실천',
  },
];

const code = (jsx, compImports, name) =>
  wrapPageExample(jsx, { compImports, reactImports: [], name });

export const corporateCardTypeExamples = [
  {
    type: 'overlay',
    title: '유형 · 이미지 오버레이',
    description:
      '스토리·이벤트·상단 헤드라인에 사용합니다. 이미지 위에 분류·날짜·제목·키워드를 배치하며 portrait·landscape 형식을 선택합니다. 이미지 실패 시에도 대체 아이콘과 정보를 유지합니다.',
    preview: (
      <Card
        type="overlay"
        card={story}
      />
    ),
    code: code(
      `<Card type="overlay" format="portrait" card={${JSON.stringify(story, null, 2)}} />`,
      ['Card'],
      'OverlayCardExample',
    ),
  },
  {
    type: 'news',
    title: '유형 · 이미지 없는 뉴스',
    description:
      '분류·날짜·제목·선택 설명·키워드만 표시합니다. 이미지 없는 콘텐츠를 위한 유형이므로 썸네일 공간이나 대체 아이콘을 만들지 않습니다.',
    preview: (
      <Card
        type="news"
        card={news}
      />
    ),
    code: code(
      `<Card type="news" card={${JSON.stringify(news, null, 2)}} />`,
      ['Card'],
      'NewsCardExample',
    ),
  },
  {
    type: 'feature',
    title: '유형 · 분할 소개',
    description:
      '이미지와 분류·제목·설명·CTA를 나누는 소개·프로모션 카드입니다. imagePosition=start·end, tone=surface·brand·dark를 지원하고, 좁은 화면에서는 세로 배치합니다. actions로 버튼을 조합할 수 있습니다.',
    preview: (
      <Card
        type="feature"
        card={feature}
        tone="brand"
      />
    ),
    code: code(
      `<Card type="feature" tone="brand" imagePosition="start" card={${JSON.stringify(feature, null, 2)}} />`,
      ['Card'],
      'FeatureCardExample',
    ),
  },
];

const mixedCode = `<div className="demo-corporate-feed">
  <Card type="overlay" card={${JSON.stringify(story, null, 2)}} />
  <div className="demo-stack">
    <Card type="news" card={${JSON.stringify(news, null, 2)}} />
    <Card type="news" card={{ id: 'report', category: '리포트', date: '2026-11-14', title: '우리의 변화를 기록한 새로운 소식', href: '#card-types' }} />
  </div>
  <Card type="content" card={{ id: 'thumbnail-news', category: '보도자료', date: '2026-11-13', title: '이미지와 함께 전하는 새로운 소식', href: '#card-types', keywords: ['서비스', '업데이트'], image: '/images/@dummy/naver-service.png' }} />
  <Card type="overlay" format="landscape" card={{ id: 'event', date: '2026-11-12', title: '새로운 경험이 시작되는 곳', href: 'https://www.navercorp.com/main', target: '_blank', image: '/images/@dummy/naver-tech.png' }} />
</div>`;

const carouselCode = `const stories = ${JSON.stringify([story, { ...story, id: 'story-next', title: '기술로 연결되는 내일의 일상', image: '/images/@dummy/naver-tech.png' }], null, 2)}

<Carousel ariaLabel="헤드라인 카드 예제" navigation pagination="fraction">
  {stories.map(card => <CarouselSlide key={card.id}><Card type="overlay" format="landscape" card={card} /></CarouselSlide>)}
</Carousel>
<Card type="feature" imagePosition="end" card={${JSON.stringify({ ...feature, id: 'campaign', category: '캠페인', title: '새로운 소식을 만나보세요' }, null, 2)}} />`;

const accordionCode = `const features = ${JSON.stringify(technologies, null, 2)}

<Accordion defaultValue="service" items={features.map(card => ({
  value: card.id, label: card.category,
  content: <Card type="feature" tone={card.id === 'technology' ? 'dark' : 'brand'} card={card} />
}))} />`;

const resources = [
  {
    id: 'partner',
    label: '파트너 지원',
    links: ['비즈니스 지원', '파트너 교육', '성장 프로그램'],
  },
  {
    id: 'developer',
    label: '개발자 지원',
    links: ['개발자 센터', 'API 문서', '오픈소스'],
  },
];

const tabsCode = `const groups = ${JSON.stringify(resources, null, 2)}

<Tabs tabs={groups.map(group => ({ value: group.id, label: group.label, content:
  <CardDeck columns={3}>
    {group.links.map((title, index) => <Card key={title} type="quick-link" card={{
      id: group.id + index, title, href: 'https://www.navercorp.com/main', target: '_blank', tone: 'surface',
      icon: <Button presentation iconOnly size="sm" ariaLabel="새 창 열림"><Icon name="external" size={20} /></Button>
    }} />)}
  </CardDeck>
}))} />`;

export const corporateCardCompositionExamples = [
  {
    id: 'corporate-feed',
    title: '조합 · 스토리·뉴스 혼합 피드',
    description:
      'We the Navigators 영역에서 확인한 세로 오버레이, 텍스트 뉴스, 썸네일 뉴스, 가로 이벤트 오버레이를 함께 구성합니다. 글 순서와 문구를 유지하며 좁은 화면에서는 한 열로 표시합니다. 예제 문구와 날짜는 샘플입니다.',
    preview: (
      <div className="demo-corporate-feed">
        <Card
          type="overlay"
          card={story}
        />
        <div className="demo-stack">
          <Card
            type="news"
            card={news}
          />
          <Card
            type="news"
            card={{
              id: 'report',
              category: '리포트',
              date: '2026-11-14',
              title: '우리의 변화를 기록한 새로운 소식',
              href: '#card-types',
            }}
          />
        </div>
        <Card
          type="content"
          card={{
            id: 'thumbnail-news',
            category: '보도자료',
            date: '2026-11-13',
            title: '이미지와 함께 전하는 새로운 소식',
            href: '#card-types',
            keywords: ['서비스', '업데이트'],
            image: '/images/@dummy/naver-service.png',
          }}
        />
        <Card
          type="overlay"
          format="landscape"
          card={{
            id: 'event',
            date: '2026-11-12',
            title: '새로운 경험이 시작되는 곳',
            href: 'https://www.navercorp.com/main',
            target: '_blank',
            image: '/images/@dummy/naver-tech.png',
          }}
        />
      </div>
    ),
    code: code(mixedCode, ['Card'], 'CorporateFeedExample'),
  },
  {
    id: 'corporate-headline',
    title: '조합 · 헤드라인 슬라이드와 프로모션',
    description:
      '상단 비주얼은 overlay + Carousel, 중간 배너는 feature의 이미지 우측 배치로 재사용합니다. 자동 재생 없이 이전·다음과 페이지 번호로 탐색합니다.',
    preview: (
      <div className="demo-stack">
        <Carousel
          ariaLabel="헤드라인 카드 예제"
          navigation
          pagination="fraction"
        >
          {[
            story,
            {
              ...story,
              id: 'story-next',
              title: '기술로 연결되는 내일의 일상',
              image: '/images/@dummy/naver-tech.png',
            },
          ].map((card) => (
            <CarouselSlide key={card.id}>
              <Card
                type="overlay"
                format="landscape"
                card={card}
              />
            </CarouselSlide>
          ))}
        </Carousel>
        <Card
          type="feature"
          imagePosition="end"
          card={{
            ...feature,
            id: 'campaign',
            category: '캠페인',
            title: '새로운 소식을 만나보세요',
          }}
        />
      </div>
    ),
    code: code(carouselCode, ['Card', 'Carousel', 'CarouselSlide'], 'CorporateHeadlineExample'),
  },
  {
    id: 'corporate-features',
    title: '조합 · 펼침형 서비스·기술 소개',
    description:
      '서비스·기술·지속가능성 소개는 feature + Accordion으로 구성합니다. 펼침 버튼과 상세 링크를 분리하고, Enter·Space로 펼치거나 접을 수 있습니다.',
    preview: (
      <Accordion
        defaultValue="service"
        items={technologies.map((card) => ({
          value: card.id,
          label: card.category,
          content: (
            <Card
              type="feature"
              tone={card.id === 'technology' ? 'dark' : 'brand'}
              card={card}
            />
          ),
        }))}
      />
    ),
    code: code(accordionCode, ['Accordion', 'Card'], 'CorporateFeaturesExample'),
  },
  {
    id: 'corporate-resources',
    title: '조합 · 파트너·개발자 지원 링크 타일',
    description:
      'quick-link에 surface 톤과 새 창 이동을 추가했습니다. Tabs·CardDeck·Icon·Button의 표시 전용 아이콘을 조합합니다.',
    preview: (
      <Tabs
        tabs={resources.map((group) => ({
          value: group.id,
          label: group.label,
          content: (
            <CardDeck columns={3}>
              {group.links.map((title, index) => (
                <Card
                  key={title}
                  type="quick-link"
                  card={{
                    id: group.id + index,
                    title,
                    href: 'https://www.navercorp.com/main',
                    target: '_blank',
                    tone: 'surface',
                    icon: (
                      <Button
                        presentation
                        iconOnly
                        size="sm"
                        ariaLabel="새 창 열림"
                      >
                        <Icon
                          name="external"
                          size={20}
                        />
                      </Button>
                    ),
                  }}
                />
              ))}
            </CardDeck>
          ),
        }))}
      />
    ),
    code: code(
      tabsCode,
      ['Tabs', 'Card', 'CardDeck', 'Icon', 'Button'],
      'CorporateResourcesExample',
    ),
  },
  {
    id: 'corporate-summary',
    title: '조합 · 지표와 간단한 소식',
    description:
      '상단 주가·짧은 소식은 기본 Card·Stat과 news를 조합해 표현합니다. 수치는 UI 확인용 예시이며 실시간 데이터가 아닙니다. 내비게이션 미리보기의 썸네일과 설명도 기존 content로 재사용합니다.',
    preview: (
      <CardDeck columns={2}>
        <Card
          href="#card-types"
          size="compact"
        >
          <CardBody>
            <Stat
              title="서비스 지표 · 예시"
              value="24,800"
              suffix="건"
              description="전일 대비 +3.2%"
            />
          </CardBody>
        </Card>
        <Card
          type="news"
          card={{
            id: 'brief',
            category: '소식',
            date: '2026-11-15',
            title: '새로운 업데이트를 확인하세요',
            href: '#card-types',
          }}
        />
      </CardDeck>
    ),
    code: code(
      `<CardDeck columns={2}>
  <Card href="#card-types" size="compact"><CardBody><Stat title="서비스 지표 · 예시" value="24,800" suffix="건" description="전일 대비 +3.2%" /></CardBody></Card>
  <Card type="news" card={{ id: 'brief', category: '소식', date: '2026-11-15', title: '새로운 업데이트를 확인하세요', href: '#card-types' }} />
</CardDeck>`,
      ['Card', 'CardDeck', 'CardBody', 'Stat'],
      'CorporateSummaryExample',
    ),
  },
];
