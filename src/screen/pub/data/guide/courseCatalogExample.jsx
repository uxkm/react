'use client'

import { useState } from 'react'
import { Button, Card, CardDeck, Icon, Modal, Tag, TagGroup } from '@/comp'

const courses = [
  {
    id: 'ai-practice',
    title: '생성형 AI로 시작하는 업무 자동화',
    labels: ['이러닝', '초급', '교재제공'],
    dates: ['신청일부터 30일간 학습'],
    rating: 4.8,
    reviews: 32,
    keywords: ['생성형 AI', '업무 자동화'],
    price: 120000,
    available: true
  },
  {
    id: 'data-report',
    title: '실무 데이터를 활용한 보고서 작성',
    labels: ['대면', '중급'],
    dates: ['2026.12.07 ~ 2026.12.08', '2026.12.14 ~ 2026.12.15'],
    rating: 0,
    reviews: 0,
    keywords: ['데이터 분석', '보고서'],
    price: 350000,
    available: false
  }
]

/** 과정 목록 템플릿을 공통 Card·Tag·Button·Modal로 구성한 예시 데이터입니다. */
export default function CourseCatalogDemo() {
  const [layout, setLayout] = useState('horizontal')
  const [savedIds, setSavedIds] = useState([])
  const [preview, setPreview] = useState(null)
  const [message, setMessage] = useState('')
  const toggleSaved = (id) =>
    setSavedIds((ids) =>
      ids.includes(id) ? ids.filter((item) => item !== id) : [...ids, id]
    )

  return (
    <div className="demo-stack">
      <div
        className="demo-row"
        role="group"
        aria-label="과정 카드 보기 방식"
      >
        <span>총 {courses.length}개 과정</span>
        <Button
          size="sm"
          variant="outline"
          aria-pressed={layout === 'horizontal'}
          onClick={() => setLayout('horizontal')}
        >
          목록형
        </Button>
        <Button
          size="sm"
          variant="outline"
          aria-pressed={layout === 'vertical'}
          onClick={() => setLayout('vertical')}
        >
          갤러리형
        </Button>
      </div>
      <CardDeck
        columns={2}
        style={{
          gridTemplateColumns:
            layout === 'horizontal' ? 'minmax(0, 1fr)' : undefined
        }}
      >
        {courses.map((course) => {
          const saved = savedIds.includes(course.id)
          return (
            <Card
              key={course.id}
              type="course"
              layout={layout}
              card={{ id: course.id, title: course.title, href: '#card-types' }}
              image={{ src: '/images/@dummy/hr-trend.png', fit: '120% auto' }}
              slots={{
                labels: (
                  <TagGroup
                    tight
                    ariaLabel="과정 속성"
                  >
                    {course.labels.map((label) => (
                      <Tag
                        key={label}
                        size="sm"
                        variant="outline"
                        color="default"
                      >
                        {label}
                      </Tag>
                    ))}
                  </TagGroup>
                ),
                schedule: (
                  <ul aria-label="교육일정">
                    {course.dates.map((date) => (
                      <li key={date}>{date}</li>
                    ))}
                  </ul>
                ),
                reviews: (
                  <>
                    <Icon
                      name="star"
                      size={16}
                    />
                    <span>평점 {course.rating} / 5</span>
                    <span>후기 {course.reviews}개</span>
                  </>
                ),
                keywords: (
                  <TagGroup
                    tight
                    ariaLabel="과정 키워드"
                  >
                    {course.keywords.map((word) => (
                      <Tag
                        key={word}
                        size="sm"
                        color="muted"
                      >
                        #{word}
                      </Tag>
                    ))}
                  </TagGroup>
                ),
                footer: (
                  <strong>{course.price.toLocaleString('ko-KR')}원</strong>
                )
              }}
              actions={
                <>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setPreview(course)}
                  >
                    맛보기
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    ariaLabel={`${course.title} 찜하기`}
                    aria-pressed={saved}
                    iconBefore={
                      <Icon
                        name={saved ? 'heart-filled' : 'heart'}
                        size={16}
                      />
                    }
                    onClick={() => toggleSaved(course.id)}
                  >
                    찜하기
                  </Button>
                  <Button
                    size="sm"
                    disabled={!course.available}
                    onClick={() =>
                      setMessage(
                        `${course.title}: 수강신청 예시를 선택했습니다.`
                      )
                    }
                  >
                    {course.available ? '수강신청' : '신청 마감'}
                  </Button>
                </>
              }
            />
          )
        })}
      </CardDeck>
      <p role="status">
        {message ||
          `찜한 과정 ${savedIds.length}개 · 신청과 결제는 연결하지 않은 UI 예제입니다.`}
      </p>
      <Modal
        open={preview !== null}
        onClose={() => setPreview(null)}
        title={preview ? `${preview.title} 맛보기` : '과정 맛보기'}
      >
        <p>
          과정 목표와 학습 구성을 소개하는 미리보기 영역입니다. 실제
          서비스에서는 맛보기 영상·콘텐츠를 연결합니다.
        </p>
      </Modal>
    </div>
  )
}

export const courseCatalogCode = `'use client'

import { useState } from 'react'
import { Button, Card, CardDeck, Icon, Modal, Tag, TagGroup } from '@/comp'

const courses = [
  {
    id: 'ai-practice',
    title: '생성형 AI로 시작하는 업무 자동화',
    labels: ['이러닝', '초급', '교재제공'],
    dates: ['신청일부터 30일간 학습'],
    rating: 4.8,
    reviews: 32,
    keywords: ['생성형 AI', '업무 자동화'],
    price: 120000,
    available: true
  },
  {
    id: 'data-report',
    title: '실무 데이터를 활용한 보고서 작성',
    labels: ['대면', '중급'],
    dates: ['2026.12.07 ~ 2026.12.08', '2026.12.14 ~ 2026.12.15'],
    rating: 0,
    reviews: 0,
    keywords: ['데이터 분석', '보고서'],
    price: 350000,
    available: false
  }
]

/** 과정 목록 템플릿을 공통 Card·Tag·Button·Modal로 구성한 예시 데이터입니다. */
export default function CourseCatalogDemo() {
  const [layout, setLayout] = useState('horizontal')
  const [savedIds, setSavedIds] = useState([])
  const [preview, setPreview] = useState(null)
  const [message, setMessage] = useState('')
  const toggleSaved = (id) =>
    setSavedIds((ids) =>
      ids.includes(id) ? ids.filter((item) => item !== id) : [...ids, id]
    )

  return (
    <div className="demo-stack">
      <div
        className="demo-row"
        role="group"
        aria-label="과정 카드 보기 방식"
      >
        <span>총 {courses.length}개 과정</span>
        <Button
          size="sm"
          variant="outline"
          aria-pressed={layout === 'horizontal'}
          onClick={() => setLayout('horizontal')}
        >
          목록형
        </Button>
        <Button
          size="sm"
          variant="outline"
          aria-pressed={layout === 'vertical'}
          onClick={() => setLayout('vertical')}
        >
          갤러리형
        </Button>
      </div>
      <CardDeck
        columns={2}
        style={{
          gridTemplateColumns:
            layout === 'horizontal' ? 'minmax(0, 1fr)' : undefined
        }}
      >
        {courses.map((course) => {
          const saved = savedIds.includes(course.id)
          return (
            <Card
              key={course.id}
              type="course"
              layout={layout}
              card={{ id: course.id, title: course.title, href: '#card-types' }}
              image={{ src: '/images/@dummy/hr-trend.png', fit: '120% auto' }}
              slots={{
                labels: (
                  <TagGroup
                    tight
                    ariaLabel="과정 속성"
                  >
                    {course.labels.map((label) => (
                      <Tag
                        key={label}
                        size="sm"
                        variant="outline"
                        color="default"
                      >
                        {label}
                      </Tag>
                    ))}
                  </TagGroup>
                ),
                schedule: (
                  <ul aria-label="교육일정">
                    {course.dates.map((date) => (
                      <li key={date}>{date}</li>
                    ))}
                  </ul>
                ),
                reviews: (
                  <>
                    <Icon
                      name="star"
                      size={16}
                    />
                    <span>평점 {course.rating} / 5</span>
                    <span>후기 {course.reviews}개</span>
                  </>
                ),
                keywords: (
                  <TagGroup
                    tight
                    ariaLabel="과정 키워드"
                  >
                    {course.keywords.map((word) => (
                      <Tag
                        key={word}
                        size="sm"
                        color="muted"
                      >
                        #{word}
                      </Tag>
                    ))}
                  </TagGroup>
                ),
                footer: (
                  <strong>{course.price.toLocaleString('ko-KR')}원</strong>
                )
              }}
              actions={
                <>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setPreview(course)}
                  >
                    맛보기
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    ariaLabel={\`\${course.title} 찜하기\`}
                    aria-pressed={saved}
                    iconBefore={
                      <Icon
                        name={saved ? 'heart-filled' : 'heart'}
                        size={16}
                      />
                    }
                    onClick={() => toggleSaved(course.id)}
                  >
                    찜하기
                  </Button>
                  <Button
                    size="sm"
                    disabled={!course.available}
                    onClick={() =>
                      setMessage(
                        \`\${course.title}: 수강신청 예시를 선택했습니다.\`
                      )
                    }
                  >
                    {course.available ? '수강신청' : '신청 마감'}
                  </Button>
                </>
              }
            />
          )
        })}
      </CardDeck>
      <p role="status">
        {message ||
          \`찜한 과정 \${savedIds.length}개 · 신청과 결제는 연결하지 않은 UI 예제입니다.\`}
      </p>
      <Modal
        open={preview !== null}
        onClose={() => setPreview(null)}
        title={preview ? \`\${preview.title} 맛보기\` : '과정 맛보기'}
      >
        <p>
          과정 목표와 학습 구성을 소개하는 미리보기 영역입니다. 실제
          서비스에서는 맛보기 영상·콘텐츠를 연결합니다.
        </p>
      </Modal>
    </div>
  )
}
`
