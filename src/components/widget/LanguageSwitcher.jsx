'use client'

/**
 * 전역 언어 전환 드롭다운.
 * 라벨은 한글 고정, 번역 중 진행률 표시. data-no-translate 로 번역 제외.
 */
import { useEffect, useId, useRef, useState } from 'react' // React
import { Button } from '../ui/Button.tsx' // Button 컴포넌트
import { useClickOutside } from '@/hooks/interaction/useClickOutside' // Click Outside 훅
import { useLocale } from '@/hooks/i18n/useLocale' // Locale 훅
import { classNames } from '@/utils/style/classNames' // 조건부 className 조합

/**
 * 전역 언어 전환 버튼.
 * 클릭 시 Dropdown 메뉴로 언어를 고른다. 라벨은 항상 한글.
 * 번역 중에는 라벨 옆에 진행률(%)을 표시한다.
 * data-no-translate 로 번역기 대상에서 제외.
 */
export function LanguageSwitcher ({
  className,
  /** 트리거 버튼 id. 없으면 useId 로 자동 생성 */
  id
}) {
  const autoId = useId()
  const triggerId = id || `app-language-${autoId}`
  const menuId = `${triggerId}-menu`
  const {
    locale,
    setLocale,
    locales,
    localeBusy,
    localeProgress,
    localeError,
    retryTranslation
  } = useLocale()
  /** 드롭다운 열림 */
  const [open, setOpen] = useState(false)
  const rootRef = useRef(null)
  const edgeRef = useRef('first')
  useEffect(() => {
    if (!open) return
    const items = rootRef.current?.querySelectorAll('[role="menuitemradio"]:not(:disabled)')
    const selected = rootRef.current?.querySelector('[aria-checked="true"]:not(:disabled)')
    const target = edgeRef.current === 'last' ? items?.[items.length - 1] : selected ?? items?.[0]
    target?.focus()
  }, [open])

  /** 바깥 클릭 시 메뉴 닫기 */
  useClickOutside(rootRef, () => setOpen(false), open)

  const current = locales.find((item) => item.code === locale) || locales[0]
  const showProgress = localeProgress != null
  const progressText = showProgress ? `${Math.max(0, Math.min(100, localeProgress))}%` : ''

  /** 언어 선택. 번역 중이거나 동일 언어면 무시 */
  const onSelect = (code) => {
    setOpen(false)
    rootRef.current?.querySelector('.dropdown_trigger')?.focus()
    if ((localeBusy && code !== 'ko') || code === locale) return
    void setLocale(code).catch(() => {})
  }

  return (
    <div
      ref={rootRef}
      className={classNames(
        'dropdown',
        'dropdown_placement-end',
        'lang-switcher',
        open && 'is-open',
        localeBusy && 'is-loading',
        className
      )}
      data-no-translate="true"
      lang="ko"
    >
      <Button
        id={triggerId}
        variant="select"
        color="default"
        size="sm"
        className="dropdown_trigger"
        open={open}
        haspopup="menu"
        expanded={open}
        ariaLabel={showProgress ? `${current.label} 언어 선택 ${progressText}` : `${current.label} 언어 선택`}
        aria-controls={open ? menuId : undefined}
        onClick={() => setOpen((prev) => !prev)}
        onKeyDown={(event) => {
          if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
            event.preventDefault()
            edgeRef.current = event.key === 'ArrowUp' ? 'last' : 'first'
            setOpen(true)
          }
        }}
      >
        <span className="lang-switcher_label-row">
          <span className="lang-switcher_label-text">{current.label}</span>
          {showProgress ? (
            <span className="lang-switcher_progress" aria-live="polite">
              {progressText}
            </span>
          ) : null}
        </span>
      </Button>
      {open ? (
        <div
          id={menuId}
          className="dropdown_menu"
          role="menu"
          aria-labelledby={triggerId}
          onKeyDown={(event) => {
            const items = Array.from(event.currentTarget.querySelectorAll('[role="menuitemradio"]:not(:disabled)'))
            const index = items.indexOf(document.activeElement)
            let next = index
            if (event.key === 'ArrowDown') next = (index + 1) % items.length
            else if (event.key === 'ArrowUp') next = (index - 1 + items.length) % items.length
            else if (event.key === 'Home') next = 0
            else if (event.key === 'End') next = items.length - 1
            else if (event.key === 'Escape' || event.key === 'Tab') {
              if (event.key === 'Escape') { event.preventDefault(); event.stopPropagation() }
              setOpen(false)
              rootRef.current?.querySelector('.dropdown_trigger')?.focus()
              return
            } else return
            event.preventDefault()
            items[next]?.focus()
          }}
        >
          {locales.map((item) => (
            <button
              key={item.code}
              type="button"
              role="menuitemradio"
              aria-checked={locale === item.code}
              className={classNames('menu_link', locale === item.code && 'is-active')}
              disabled={localeBusy && item.code !== 'ko'}
              tabIndex={-1}
              onClick={() => onSelect(item.code)}
            >
              {item.label}
            </button>
          ))}
        </div>
      ) : null}
      {localeError ? (
        <div className="lang-switcher_status lang-switcher_status_error">
          <span role="alert">{localeError}</span>
          {locale !== 'ko' ? (
            <button type="button" onClick={retryTranslation} disabled={localeBusy}>
              다시 시도
            </button>
          ) : null}
        </div>
      ) : null}
    </div>
  )
}

export default LanguageSwitcher
