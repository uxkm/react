import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getDefaultOgImageUrl, getSiteOrigin } from '@/config/site'

const DEFAULT_TITLE = 'UXKM'
const DEFAULT_DESCRIPTION = 'UXKM 웹 문서와 접근성 학습 콘텐츠를 제공합니다.'
const DEFAULT_OG_IMAGE_WIDTH = '1000'
const DEFAULT_OG_IMAGE_HEIGHT = '750'

/** 레거시 `mainClass: "css bookmark"`처럼 공백으로 구분된 body 클래스 목록 */
function splitMainClassTokens(mainClass) {
  return String(mainClass ?? '')
    .trim()
    .split(/\s+/)
    .filter(Boolean)
}

function ensureMetaTag(name) {
  let tag = document.querySelector(`meta[name="${name}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute('name', name)
    document.head.appendChild(tag)
  }
  return tag
}

function ensureMetaPropertyTag(property) {
  let tag = document.querySelector(`meta[property="${property}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute('property', property)
    document.head.appendChild(tag)
  }
  return tag
}

function emitPageMetaChange() {
  if (typeof window === 'undefined') return
  window.dispatchEvent(new Event('page-meta-change'))
}

export function usePageMeta({ title, description, keyword, layout }) {
  const { pathname } = useLocation()

  useLayoutEffect(() => {
    const prevTitle = document.title
    const prevMainClass = document.body.dataset.pageMainClass
    const prevType = document.body.dataset.pageType
    const prevInfo = document.body.dataset.pageInfo
    const prevNote = document.body.dataset.pageNote
    const prevSideMenu = document.body.dataset.pageSideMenu
    const prevReference = document.body.dataset.pageReference
    const prevContentList = document.body.dataset.pageContentList
    const prevDepth3Last = document.body.dataset.pageDepth3Last
    const prevBottomEditor = document.body.dataset.pageBottomEditor
    const prevComments = document.body.dataset.pageComments
    const prevTopAnimation = document.body.dataset.pageTopAnimation
    const appliedMainClass = layout?.mainClass?.trim()
    const appliedMainClassTokens = splitMainClassTokens(appliedMainClass)

    const normalizedTitle = title?.trim()
    const resolvedTitle =
      normalizedTitle && normalizedTitle !== DEFAULT_TITLE
        ? `${normalizedTitle} | ${DEFAULT_TITLE}`
        : DEFAULT_TITLE
    const resolvedDescription = description ?? DEFAULT_DESCRIPTION

    document.title = resolvedTitle
    ensureMetaTag('title').setAttribute('content', resolvedTitle)
    ensureMetaTag('author').setAttribute('content', DEFAULT_TITLE)
    ensureMetaTag('description').setAttribute('content', resolvedDescription)
    ensureMetaPropertyTag('og:title').setAttribute('content', resolvedTitle)
    ensureMetaPropertyTag('og:site_name').setAttribute('content', DEFAULT_TITLE)
    ensureMetaPropertyTag('og:description').setAttribute('content', resolvedDescription)

    if (keyword) ensureMetaTag('keywords').setAttribute('content', keyword)
    else ensureMetaTag('keywords').setAttribute('content', '')

    ensureMetaTag('content-language').setAttribute('content', 'kr')
    ensureMetaPropertyTag('og:type').setAttribute('content', 'website')
    const ogImageUrl = getDefaultOgImageUrl()
    ensureMetaPropertyTag('og:image').setAttribute('content', ogImageUrl)
    ensureMetaPropertyTag('og:image:type').setAttribute('content', 'image/png')
    ensureMetaPropertyTag('og:image:width').setAttribute('content', DEFAULT_OG_IMAGE_WIDTH)
    ensureMetaPropertyTag('og:image:height').setAttribute('content', DEFAULT_OG_IMAGE_HEIGHT)
    ensureMetaTag('twitter:card').setAttribute('content', 'summary_large_image')
    ensureMetaTag('twitter:image').setAttribute('content', ogImageUrl)
    ensureMetaTag('twitter:title').setAttribute('content', resolvedTitle)
    ensureMetaTag('twitter:description').setAttribute('content', resolvedDescription)
    ensureMetaPropertyTag('og:url').setAttribute(
      'content',
      pathname === '/' ? getSiteOrigin() : `${getSiteOrigin()}${pathname}`,
    )

    if (layout?.mainClass) document.body.dataset.pageMainClass = layout.mainClass
    appliedMainClassTokens.forEach((token) => document.body.classList.add(token))
    if (layout?.type) document.body.dataset.pageType = layout.type
    if (layout?.info !== undefined) document.body.dataset.pageInfo = String(layout.info)
    if (layout?.note !== undefined) document.body.dataset.pageNote = String(layout.note)
    if (layout?.sideMenu !== undefined) document.body.dataset.pageSideMenu = String(layout.sideMenu)
    if (layout?.reference !== undefined)
      document.body.dataset.pageReference = String(layout.reference)
    if (layout?.contentList !== undefined)
      document.body.dataset.pageContentList = String(layout.contentList)
    if (layout?.depth3Last !== undefined)
      document.body.dataset.pageDepth3Last = String(layout.depth3Last)
    if (layout?.bottomEditor !== undefined)
      document.body.dataset.pageBottomEditor = String(layout.bottomEditor)
    if (layout?.comments !== undefined)
      document.body.dataset.pageComments = String(layout.comments)
    if (layout?.topAnimation !== undefined)
      document.body.dataset.pageTopAnimation = String(layout.topAnimation)
    emitPageMetaChange()
    return () => {
      document.title = prevTitle
      if (prevMainClass === undefined) delete document.body.dataset.pageMainClass
      else document.body.dataset.pageMainClass = prevMainClass
      if (prevType === undefined) delete document.body.dataset.pageType
      else document.body.dataset.pageType = prevType
      if (prevInfo === undefined) delete document.body.dataset.pageInfo
      else document.body.dataset.pageInfo = prevInfo
      if (prevNote === undefined) delete document.body.dataset.pageNote
      else document.body.dataset.pageNote = prevNote
      if (prevSideMenu === undefined) delete document.body.dataset.pageSideMenu
      else document.body.dataset.pageSideMenu = prevSideMenu
      if (prevReference === undefined) delete document.body.dataset.pageReference
      else document.body.dataset.pageReference = prevReference
      if (prevContentList === undefined) delete document.body.dataset.pageContentList
      else document.body.dataset.pageContentList = prevContentList
      if (prevDepth3Last === undefined) delete document.body.dataset.pageDepth3Last
      else document.body.dataset.pageDepth3Last = prevDepth3Last
      if (prevBottomEditor === undefined) delete document.body.dataset.pageBottomEditor
      else document.body.dataset.pageBottomEditor = prevBottomEditor
      if (prevComments === undefined) delete document.body.dataset.pageComments
      else document.body.dataset.pageComments = prevComments
      if (prevTopAnimation === undefined) delete document.body.dataset.pageTopAnimation
      else document.body.dataset.pageTopAnimation = prevTopAnimation
      appliedMainClassTokens.forEach((token) => document.body.classList.remove(token))
      splitMainClassTokens(prevMainClass).forEach((token) => document.body.classList.add(token))
      emitPageMetaChange()
    }
  }, [description, keyword, layout, pathname, title])
}

function PageMeta(props) {
  usePageMeta(props)
  return null
}

export default PageMeta
