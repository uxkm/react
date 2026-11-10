'use client'

/**
 * 가이드·데모 메뉴 — JSON 분류와 자동 생성된 화면 목록을 병합.
 * 기존 분류·라벨을 유지하고 신규 화면 추가·삭제를 자동 반영.
 */
import { useEffect, useState } from 'react'
import { pubPages } from '@/generated/pub-pages'
import { resolveGuideMenu } from '@/lib/guideMenu.mjs'

const GUIDE_MENU_URL = '/data/pub/guide-menu.json'

/** 가이드 홈 경로 (/pub/guide) — JSON intro 는 라벨용 */
export const guideHomePath = '/pub/guide'

/** 접근성 가이드 경로 (/pub/guide/accessibility) */
export const guideAccessibilityPath = '/pub/guide/accessibility'

export const demoHomePath = pubPages.demo.some((page) => page.id === 'libs') ? '/pub/demo/libs' : '/pub'

/** @deprecated guideHomePath 사용. 예전 /components/intro id 호환 */
export const guideHomeId = 'intro'

const EMPTY = {
  intro: { id: guideHomeId, label: '소개' },
  accessibility: { id: 'accessibility', label: '접근성' },
  guideMenu: [],
  guideDemoMenu: []
}

let cache = null

/** guide-menu.json 로드 (한 번만 fetch, 이후 캐시) */
export function loadGuideMenu () {
  if (!cache) {
    cache = fetch(GUIDE_MENU_URL)
      .then((res) => {
        if (!res.ok) throw new Error('guide-menu.json ' + res.status)
        return res.json()
      })
      .then((data) => resolveGuideMenu(data, pubPages, EMPTY))
      .catch((err) => {
        console.warn('[guideMenu]', err)
        cache = null
        return resolveGuideMenu({}, pubPages, EMPTY)
      })
  }
  return cache
}

/** 사이드 메뉴·소개 페이지용. 로드 전 null */
export function useGuideMenu () {
  const [menu, setMenu] = useState(null)

  useEffect(() => {
    let alive = true
    loadGuideMenu().then((data) => {
      if (alive) setMenu(data)
    })
    return () => { alive = false }
  }, [])

  return menu
}
