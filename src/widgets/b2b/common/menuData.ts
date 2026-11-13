/** 전체메뉴 디자인의 서비스 내비게이션. PUB 작업 정보와 분리해 사용합니다. */
export interface B2bMenuLink {
  readonly label: string
  readonly href: string
}

export interface B2bMenuGroup {
  readonly label: string
  readonly href?: string
  readonly links: readonly B2bMenuLink[]
}

export interface B2bMenuData {
  readonly education: readonly B2bMenuGroup[]
  readonly services: readonly B2bMenuGroup[]
  readonly insights: readonly B2bMenuGroup[]
  readonly contact: B2bMenuGroup
  readonly company: readonly B2bMenuGroup[]
}

export const b2bMenu: B2bMenuData = {
  "education": [
    {
      "label": "AX교육",
      "links": [
        {
          "label": "Overview",
          "href": "/b2b/contents/ax/overview"
        },
        {
          "label": "AI교육 탐색",
          "href": "/b2b/contents/ax/ai-search"
        },
        {
          "label": "AX역량수준 진단",
          "href": "/b2b/contents/ax/competency"
        },
        {
          "label": "AI Studio",
          "href": "/b2b/contents/ax/ai-studio"
        },
        {
          "label": "AX 워크숍",
          "href": "/b2b/contents/ax/workshop"
        },
        {
          "label": "AX캠프",
          "href": "/b2b/contents/ax/camp"
        },
        {
          "label": "[공개교육] AI 로드맵",
          "href": "https://ui.multicampus.com/roadmap/it/ai.html"
        }
      ]
    },
    {
      "label": "IT교육",
      "links": [
        {
          "label": "IT교육",
          "href": "/b2b/contents/it"
        },
        {
          "label": "[공개교육] IT 로드맵",
          "href": "https://ui.multicampus.com/roadmap/it/offline.html"
        }
      ]
    },
    {
      "label": "직무교육",
      "links": [
        {
          "label": "직무 전문 역량",
          "href": "/b2b/contents/job/professional"
        },
        {
          "label": "산업 전문 역량",
          "href": "/b2b/contents/job/industry"
        },
        {
          "label": "자격대비",
          "href": "/b2b/contents/job/certification"
        }
      ]
    },
    {
      "label": "리더십",
      "links": [
        {
          "label": "리더십 교육",
          "href": "/b2b/contents/leadership"
        },
        {
          "label": "리더십 진단",
          "href": "/b2b/contents/leadership/assessment"
        },
        {
          "label": "임원 리더십",
          "href": "/b2b/contents/leadership/executive"
        },
        {
          "label": "MBA 프로그램",
          "href": "/b2b/contents/leadership/mba"
        },
        {
          "label": "SERICEO",
          "href": "https://www.sericeo.com/"
        }
      ]
    },
    {
      "label": "법정필수",
      "links": [
        {
          "label": "법정필수교육",
          "href": "/b2b/contents/mandatory"
        },
        {
          "label": "서비스 특징",
          "href": "/b2b/contents/mandatory/features"
        },
        {
          "label": "대표 과정",
          "href": "/b2b/contents/mandatory/courses"
        },
        {
          "label": "간편 견적받기",
          "href": "/b2b/contents/mandatory/estimate"
        }
      ]
    },
    {
      "label": "외국어",
      "links": [
        {
          "label": "외국어교육",
          "href": "/b2b/contents/language"
        },
        {
          "label": "AI 외국어",
          "href": "/b2b/contents/language/ai-language"
        },
        {
          "label": "외국어생활관",
          "href": "/b2b/contents/language/language-life"
        },
        {
          "label": "OPIc",
          "href": "https://www.opic.or.kr/"
        }
      ]
    },
    {
      "label": "중소기업 전용",
      "links": [
        {
          "label": "[상생협력] 중소기업 인재키움 프리미엄",
          "href": "/b2b/contents/small-business"
        }
      ]
    }
  ],
  "services": [
    {
      "label": "러닝플랫폼",
      "links": [
        {
          "label": "러닝플랫폼",
          "href": "/b2b/service/platform"
        },
        {
          "label": "AI 서비스",
          "href": "/b2b/service/platform/ai"
        },
        {
          "label": "플랫폼 활용 컨설팅",
          "href": "/b2b/service/platform/consulting"
        }
      ]
    },
    {
      "label": "러닝 서비스",
      "href": "/b2b/service/learning",
      "links": []
    },
    {
      "label": "진단 서비스",
      "href": "/b2b/service/diagnosis",
      "links": []
    },
    {
      "label": "컨설팅 서비스",
      "href": "/b2b/service/consulting",
      "links": []
    },
    {
      "label": "BPO 서비스",
      "href": "/b2b/service/bpo",
      "links": []
    }
  ],
  "insights": [
    {
      "label": "멀캠ON",
      "href": "/b2b/insight/on/list",
      "links": []
    },
    {
      "label": "자료실",
      "href": "/b2b/insight/resources/list",
      "links": []
    }
  ],
  "contact": {
    "label": "문의하기",
    "links": [
      {
        "label": "기업교육문의",
        "href": "/b2b/contact/education"
      },
      {
        "label": "플랫폼도입문의",
        "href": "/b2b/contact/platform"
      },
      {
        "label": "법정교육 간편견적",
        "href": "/b2b/contents/mandatory/estimate"
      },
      {
        "label": "진단&맞춤추천",
        "href": "/b2b/common/education-diagnosis"
      }
    ]
  },
  "company": [
    {
      "label": "멀티캠퍼스 소개",
      "href": "/b2b/company/intro",
      "links": []
    },
    {
      "label": "CEO인사말",
      "href": "/b2b/company/ceo",
      "links": []
    },
    {
      "label": "연혁",
      "href": "/b2b/company/history",
      "links": []
    },
    {
      "label": "윤리/준법경영",
      "links": [
        {
          "label": "SERICEO",
          "href": "/b2b/company/ethics/sericeo"
        },
        {
          "label": "경영원칙",
          "href": "/b2b/company/ethics/management"
        },
        {
          "label": "준법경영",
          "href": "/b2b/company/ethics/compliance"
        },
        {
          "label": "부정제보",
          "href": "https://ethics.multicampus.com/"
        }
      ]
    },
    {
      "label": "지속가능경영",
      "links": [
        {
          "label": "ESG경영체계",
          "href": "/b2b/company/sustainability/esg"
        },
        {
          "label": "환경경영",
          "href": "/b2b/company/sustainability/environment"
        },
        {
          "label": "다양성 / 노사",
          "href": "/b2b/company/sustainability/diversity"
        },
        {
          "label": "인권경영",
          "href": "/b2b/company/sustainability/human-rights"
        },
        {
          "label": "안전보건",
          "href": "/b2b/company/sustainability/safety"
        },
        {
          "label": "정보보호",
          "href": "/b2b/company/sustainability/information"
        },
        {
          "label": "소비자보호",
          "href": "/b2b/company/sustainability/consumer"
        },
        {
          "label": "사회공헌",
          "href": "/b2b/company/sustainability/contribution"
        },
        {
          "label": "ESG Data",
          "href": "/b2b/company/sustainability/esg-data"
        }
      ]
    },
    {
      "label": "투자자정보",
      "links": [
        {
          "label": "재무정보",
          "href": "/b2b/company/investors/financial"
        },
        {
          "label": "주주정보",
          "href": "/b2b/company/investors/shareholders"
        },
        {
          "label": "주가정보",
          "href": "/b2b/company/investors/stock-price"
        },
        {
          "label": "공시정보",
          "href": "/b2b/company/investors/disclosure"
        },
        {
          "label": "IR 자료실",
          "href": "/b2b/company/investors/ir"
        }
      ]
    },
    {
      "label": "홍보",
      "links": [
        {
          "label": "언론보도",
          "href": "/b2b/company/pr/news/list"
        },
        {
          "label": "수상실적",
          "href": "/b2b/company/pr/awards"
        }
      ]
    },
    {
      "label": "인재채용",
      "href": "https://careers.multicampus.com/ko/home",
      "links": []
    }
  ]
}
