'use client';

import { useState } from 'react';
import { Tab, Tabs } from '@/comp';

const categories = [
  {
    value: 'courses',
    label: '교육과정',
    tabs: [
      {
        value: 'all',
        label: '전체 과정',
        content: '직무·리더십·AI 교육과정을 확인하세요.',
      },
      {
        value: 'recommended',
        label: '추천 과정',
        content: '업무 목표에 맞는 추천 교육과정입니다.',
      },
    ],
  },
  {
    value: 'resources',
    label: '학습자료',
    tabs: [
      {
        value: 'all',
        label: '전체 자료',
        content: '가이드와 리포트를 한곳에서 확인하세요.',
      },
      {
        value: 'guides',
        label: '가이드',
        content: '실무에서 활용할 수 있는 학습 가이드입니다.',
      },
      {
        value: 'reports',
        label: '리포트',
        content: '새로운 교육 트렌드를 담은 리포트입니다.',
      },
    ],
  },
];

export default function NestedTabsDemo() {
  const [category, setCategory] = useState('courses');
  const [selectedTabs, setSelectedTabs] = useState({
    courses: 'all',
    resources: 'all',
  });

  return (
    <Tabs
      label="콘텐츠 대분류"
      variant="card"
      layout="equal"
      value={category}
      onChange={setCategory}
    >
      {categories.map((group) => (
        <Tab
          key={group.value}
          value={group.value}
          label={group.label}
        >
          <Tabs
            label={`${group.label} 하위 분류`}
            variant="pill"
            size="sm"
            layout="scroll"
            indicatorSlide
            navFade
            value={selectedTabs[group.value]}
            onChange={(value) =>
              setSelectedTabs((previous) => ({
                ...previous,
                [group.value]: value,
              }))
            }
          >
            {group.tabs.map((tab) => (
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
  );
}

export const nestedTabsCode = `'use client'

import { useState } from 'react'
import { Tab, Tabs } from '@/comp'

const categories = [
  {
    value: 'courses',
    label: '교육과정',
    tabs: [
      {
        value: 'all',
        label: '전체 과정',
        content: '직무·리더십·AI 교육과정을 확인하세요.'
      },
      {
        value: 'recommended',
        label: '추천 과정',
        content: '업무 목표에 맞는 추천 교육과정입니다.'
      }
    ]
  },
  {
    value: 'resources',
    label: '학습자료',
    tabs: [
      {
        value: 'all',
        label: '전체 자료',
        content: '가이드와 리포트를 한곳에서 확인하세요.'
      },
      {
        value: 'guides',
        label: '가이드',
        content: '실무에서 활용할 수 있는 학습 가이드입니다.'
      },
      {
        value: 'reports',
        label: '리포트',
        content: '새로운 교육 트렌드를 담은 리포트입니다.'
      }
    ]
  }
]

export default function NestedTabsDemo() {
  const [category, setCategory] = useState('courses')
  const [selectedTabs, setSelectedTabs] = useState({
    courses: 'all',
    resources: 'all'
  })

  return (
    <Tabs
      label="콘텐츠 대분류"
      variant="card"
      layout="equal"
      value={category}
      onChange={setCategory}
    >
      {categories.map((group) => (
        <Tab
          key={group.value}
          value={group.value}
          label={group.label}
        >
          <Tabs
            label={\`\${group.label} 하위 분류\`}
            variant="pill"
            size="sm"
            layout="scroll"
            indicatorSlide
            navFade
            value={selectedTabs[group.value]}
            onChange={(value) =>
              setSelectedTabs((previous) => ({
                ...previous,
                [group.value]: value
              }))
            }
          >
            {group.tabs.map((tab) => (
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
`;
