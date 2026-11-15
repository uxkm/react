'use client'

import { useState } from 'react'
import { Tab, Tabs } from '@/comp'
import { wrapPageExample } from '@/screen/pub/lib/pageExampleCode'

const keywords = [
  { value: 'all', label: '전체', content: '모든 주제의 콘텐츠를 확인하세요.' },
  { value: 'ai', label: 'AI', content: 'AI를 업무에 활용하는 콘텐츠입니다.' },
  {
    value: 'leadership',
    label: '리더십',
    content: '함께 성장하는 리더십 콘텐츠입니다.'
  },
  {
    value: 'data',
    label: '데이터',
    content: '데이터 분석과 활용 콘텐츠입니다.'
  },
  {
    value: 'career',
    label: '커리어',
    content: '커리어 성장을 위한 콘텐츠입니다.'
  }
]

const groups = [
  {
    value: 'learning',
    label: '교육과정',
    tabs: [keywords[0], keywords[1], keywords[2]]
  },
  {
    value: 'insights',
    label: '인사이트',
    tabs: [keywords[0], keywords[3], keywords[4]]
  }
]

export function KeywordTabsDemo() {
  return (
    <Tabs
      label="관심 키워드"
      variant="keyword"
      defaultValue="all"
    >
      {keywords.map((tab) => (
        <Tab
          key={tab.value}
          value={tab.value}
          label={tab.label}
        >
          <p className="tabs_panel-placeholder">{tab.content}</p>
        </Tab>
      ))}
    </Tabs>
  )
}

export function NestedKeywordTabsDemo() {
  const [group, setGroup] = useState('learning')
  const [selectedKeywords, setSelectedKeywords] = useState({
    learning: 'all',
    insights: 'all'
  })
  return (
    <Tabs
      label="키워드 대분류"
      variant="keyword"
      value={group}
      onChange={setGroup}
    >
      {groups.map((item) => (
        <Tab
          key={item.value}
          value={item.value}
          label={item.label}
        >
          <Tabs
            label={`${item.label} 키워드`}
            variant="keyword"
            size="sm"
            value={selectedKeywords[item.value]}
            onChange={(value) =>
              setSelectedKeywords((previous) => ({
                ...previous,
                [item.value]: value
              }))
            }
          >
            {item.tabs.map((tab) => (
              <Tab
                key={tab.value}
                value={tab.value}
                label={tab.label}
              >
                <p className="tabs_panel-placeholder">{tab.content}</p>
              </Tab>
            ))}
          </Tabs>
        </Tab>
      ))}
    </Tabs>
  )
}

export const keywordTabsCode = wrapPageExample(
  `const keywords = ${JSON.stringify(keywords, null, 2)}

<Tabs label="관심 키워드" variant="keyword" defaultValue="all">
  {keywords.map(tab => (
    <Tab key={tab.value} value={tab.value} label={tab.label}>
      <p className="tabs_panel-placeholder">{tab.content}</p>
    </Tab>
  ))}
</Tabs>`,
  { name: 'KeywordTabsExample', reactImports: [], compImports: ['Tab', 'Tabs'] }
)

export const nestedKeywordTabsCode = wrapPageExample(
  `const groups = ${JSON.stringify(groups, null, 2)}
const [group, setGroup] = useState('learning')
const [selectedKeywords, setSelectedKeywords] = useState({ learning: 'all', insights: 'all' })

<Tabs label="키워드 대분류" variant="keyword" value={group} onChange={setGroup}>
  {groups.map(item => (
    <Tab key={item.value} value={item.value} label={item.label}>
      <Tabs
        label={\`\${item.label} 키워드\`}
        variant="keyword"
        size="sm"
        value={selectedKeywords[item.value]}
        onChange={value => setSelectedKeywords(previous => ({ ...previous, [item.value]: value }))}
      >
        {item.tabs.map(tab => (
          <Tab key={tab.value} value={tab.value} label={tab.label}>
            <p className="tabs_panel-placeholder">{tab.content}</p>
          </Tab>
        ))}
      </Tabs>
    </Tab>
  ))}
</Tabs>`,
  {
    name: 'NestedKeywordTabsExample',
    reactImports: ['useState'],
    compImports: ['Tab', 'Tabs']
  }
)
