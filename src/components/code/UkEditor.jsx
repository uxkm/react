import { useCallback, useEffect, useMemo, useRef, useState, startTransition } from 'react'
import CodeMirror from '@uiw/react-codemirror'
import { html } from '@codemirror/lang-html'
import { css } from '@codemirror/lang-css'
import { javascript } from '@codemirror/lang-javascript'
import { ayuMirageTheme } from './ayuMirageTheme.js'
import { normalizeCodeIndent } from './codeFormatting.js'
import { applyDetectClassesTo, getDetect } from '../../utils/deviceDetect.js'

/**
 * <UkEditor /> — React port of `uk_editor()` from
 * `src/assets/js/uk_editor.js`.
 *
 * Differences from the previous implementation:
 *   - Built on CodeMirror 6 (via `@uiw/react-codemirror`) instead of the
 *     vendored CodeMirror 5 bundle. The `mode` prop accepts the previous
 *     identifiers (`htmlmixed`, `htmlembedded`, `css`, `javascript`, `xml`)
 *     and is mapped to the corresponding CM6 language extension.
 *   - All DOM mutation and jQuery is replaced with React state. The Result
 *     iframe is rendered with `srcDoc` and re-keyed on Reset, instead of the
 *     previous `document.write` cycle.
 *   - The 5 editor buttons (Reset / Download / FullScreen / Browser / Info)
 *     and the 7 browser-window buttons (minimize / exitMinimize / fixed /
 *     exitFixed / fullscreen / exitFullscreen / closing) are all rendered as
 *     React JSX with the same class names so the previous SCSS keeps working.
 *   - Browser-specific gating (Download disabled on IE/Edge/Safari/device,
 *     FullScreen disabled on device, ...) uses `getDetect()` instead of jQuery
 *     ukDetect.
 *
 * Props:
 *   - code:        initial source code as a string (template literal)
 *   - mode:        previous `data-mode` value
 *   - result:      whether to render the Result iframe (default: true)
 *   - browser:     'default' | 'mini' | 'hidden' (initial Result panel state)
 *   - title:       title shown in the Result browser title bar
 *   - className:   extra class names appended to the outer wrapper
 *   - minHeight:   minimum height for the editor pane
 *   - onChange:    fires every time the editor content changes
 */

const BUTTON_LABELS = ['Reset', 'Download', 'FullScreen', 'Browser', 'Info']
const INFO_TEXTS_LEFT = [
  '초기 코드로 되돌립니다.',
  '코드를 html 파일로 다운로드할 수 있습니다.',
  '에디터를 브라우저 기준 전체 화면으로 확장합니다. 조금 더 편리한 코딩이 가능합니다.',
  'Result Area를 닫았을 때 다시 켭니다. Result Area가 닫혀 있을 때만 노출됩니다.',
  '이 정보 패널을 엽니다. 다시 닫으려면 패널을 클릭하세요.',
]
const INFO_TEXTS_RIGHT = [
  ['minimize', 'Result Area를 최소화 합니다.'],
  ['fixed', 'Result Area를 브라우저 기준 전체 화면으로 확대합니다.'],
  ['fullscreen', 'Result Area를 모니터 기준 전체 화면으로 확대합니다.'],
  ['closing', 'Result Area를 닫습니다. Browser button을 클릭하여 기본 모드로 되돌릴 수 있습니다.'],
]

function getLanguageExtensions(mode) {
  switch (mode) {
    case 'css':
      return [css()]
    case 'javascript':
    case 'jsx':
      return [javascript({ jsx: mode === 'jsx' })]
    case 'xml':
      return [html({ matchClosingTags: true })]
    case 'htmlmixed':
    case 'htmlembedded':
    case 'html':
    default:
      return [html({ matchClosingTags: true, autoCloseTags: true })]
  }
}

function UkEditor({
  code = '',
  mode = 'htmlmixed',
  result = true,
  browser = 'default',
  title = 'UXKM editor',
  className = '',
  minHeight,
  onChange,
  showResultWindowControls = true,
  baseHref = '',
}) {
  const initialCode = useMemo(() => normalizeCodeIndent(code), [code])
  const initialCodeRef = useRef(initialCode)
  const wrapperRef = useRef(null)
  const [value, setValue] = useState(initialCode)

  // 샘플 HTML 안의 `script.js` 같은 상대 경로 자산이 부모 SPA URL 기준으로
  // 잘못 해석되지 않도록, iframe `srcDoc` 안에 `<base href>`를 주입한다.
  // - 사용자가 `<base>`를 직접 작성한 경우엔 덮어쓰지 않는다.
  // - `<head>`가 있으면 그 직후에, 없으면 문서 가장 앞에 삽입한다.
  const iframeSrcDoc = useMemo(() => {
    if (!baseHref) return value
    if (/<base\b[^>]*href=/i.test(value)) return value
    const escapedHref = String(baseHref)
      .replace(/&/g, '&amp;')
      .replace(/"/g, '&quot;')
    const baseTag = `<base href="${escapedHref}">`
    const headMatch = /<head\b[^>]*>/i.exec(value)
    if (headMatch) {
      const idx = headMatch.index + headMatch[0].length
      return `${value.slice(0, idx)}\n${baseTag}${value.slice(idx)}`
    }
    return `${baseTag}\n${value}`
  }, [value, baseHref])
  const [browserState, setBrowserState] = useState(browser)
  // 'default' | 'mini' | 'hidden' | 'fixed' | 'full'
  const [pullScreen, setPullScreen] = useState(false)
  const [showInfo, setShowInfo] = useState(false)
  const [iframeKey, setIframeKey] = useState(0)
  const [iframeTitle, setIframeTitle] = useState(title)

  const detect = useMemo(() => getDetect(), [])
  const isDevice = detect.deviceType === 'device'
  const browserName = detect.browser
  const downloadDisabled =
    browserName === 'ie' || browserName === 'edge' || browserName === 'safari' || isDevice

  // Apply ukDetect-style classes to the editor root, mirroring
  // `e.classList.add(device_check)` from the previous script.
  useEffect(() => {
    if (wrapperRef.current) {
      applyDetectClassesTo(wrapperRef.current, { deviceCheck: true })
    }
  }, [])

  // Re-sync the initial value if the parent passes a new `code` prop.
  useEffect(() => {
    initialCodeRef.current = initialCode
    startTransition(() => {
      setValue(initialCode)
      setIframeKey((k) => k + 1)
    })
  }, [initialCode])

  const languageExtensions = useMemo(() => getLanguageExtensions(mode), [mode])
  const editorMinHeight = minHeight ?? '320px'
  const editorMaxHeight = '600px'

  // Mirror `_html.classList.add('editor_full_screen')` behaviour: when an
  // editor enters full-screen mode, lock the body and tag the html element so
  // existing global CSS rules can adapt. Cleanup happens on state reset and on
  // unmount.
  useEffect(() => {
    const html = document.documentElement
    const wantsLock = pullScreen || browserState === 'fixed' || browserState === 'full'
    if (wantsLock) {
      html.style.overflow = 'hidden'
      html.classList.add('editor_full_screen')
    } else {
      html.style.removeProperty('overflow')
      html.classList.remove('editor_full_screen')
    }
    return () => {
      html.style.removeProperty('overflow')
      html.classList.remove('editor_full_screen')
    }
  }, [pullScreen, browserState])

  const handleChange = useCallback(
    (next) => {
      setValue(next)
      if (typeof onChange === 'function') onChange(next)
    },
    [onChange]
  )

  const handleReset = () => {
    setValue(initialCodeRef.current)
    setIframeKey((k) => k + 1)
  }

  const handleDownload = () => {
    if (downloadDisabled) {
      window.alert('파일 다운로드는 크롬, 파이어폭스, 오페라, 사파리 등 상위 브라우져에서 가능합니다.')
      return
    }
    const blob = new Blob([value], { type: 'text/html;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${iframeTitle || 'UkEditor'}.html`
    document.body.appendChild(a)
    a.click()
    a.remove()
    URL.revokeObjectURL(url)
  }

  const handlePullScreen = () => setPullScreen((p) => !p)

  const handleResultRestore = () => {
    setBrowserState('default')
    setIframeKey((k) => k + 1)
  }

  const handleInfoOpen = () => setShowInfo(true)
  const handleInfoClose = () => setShowInfo(false)

  const handleIframeLoad = (event) => {
    try {
      const doc = event.currentTarget.contentDocument
      const docTitle = doc?.title?.trim()
      if (docTitle) setIframeTitle(docTitle)
      else setIframeTitle(title)
    } catch {
      // cross-origin or detached frame: ignore
    }
  }

  const wantsResultPane = result
  const resultButtonVisible = wantsResultPane && browserState === 'hidden'

  const wrapperClassName = [
    'uk_editor',
    className,
    pullScreen ? 'fullscreen_mode' : '',
    showInfo ? 'editor_info' : '',
    browserState === 'mini' ? 'browser_mini' : '',
    browserState === 'hidden' ? 'browser_hide' : '',
    browserState === 'fixed' ? 'browser_fixed' : '',
    browserState === 'full' ? 'browser_full' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div
      ref={wrapperRef}
      className={wrapperClassName}
      data-result={wantsResultPane ? 'true' : 'false'}
      data-mode={mode}
      data-browser={browser}
    >
      <div className="code_wrap">
        <CodeMirror
          value={value}
          onChange={handleChange}
          theme={ayuMirageTheme}
          extensions={languageExtensions}
          editable={!isDevice}
          readOnly={isDevice}
          basicSetup={{
            lineNumbers: true,
            highlightActiveLine: true,
            highlightActiveLineGutter: true,
            tabSize: 2,
            indentOnInput: true,
            bracketMatching: true,
            closeBrackets: true,
            autocompletion: true,
            highlightSelectionMatches: true,
            foldGutter: true,
          }}
          minHeight={editorMinHeight}
          maxHeight={editorMaxHeight}
        />
      </div>

      {wantsResultPane ? (
        <div
          className="result_wrap"
          data-url={typeof window !== 'undefined' ? window.location.host + window.location.pathname : ''}
        >
          <iframe
            key={iframeKey}
            title={`${iframeTitle} preview`}
            tabIndex={-1}
            loading="lazy"
            srcDoc={iframeSrcDoc}
            onLoad={handleIframeLoad}
          />
          <p
            className={`browserTitle ${browserName} ${detect.deviceType}`}
            tabIndex={0}
            data-tit={iframeTitle}
            onClick={() => setBrowserState('default')}
          >
            <i className="fas fa-globe-asia" />
            {iframeTitle}
          </p>
          {showResultWindowControls ? (
            <div className={`browserBtn ${browserName}`}>
              <button
                type="button"
                tabIndex={-1}
                title="최소화"
                className="minimize_btn"
                onClick={() => setBrowserState('mini')}
              >
                minimize
              </button>
              <button
                type="button"
                tabIndex={-1}
                title="이전 크기로 복원"
                className="exitMinimize_btn"
                onClick={() => setBrowserState('default')}
              >
                exitMinimize
              </button>
              {!isDevice ? (
                <button
                  type="button"
                  tabIndex={-1}
                  title="브라우저 전체화면"
                  className="fixed_btn"
                  onClick={() => setBrowserState('fixed')}
                >
                  fixed
                </button>
              ) : null}
              <button
                type="button"
                tabIndex={-1}
                title="이전 크기로 복원"
                className="exitFixed_btn"
                onClick={() => {
                  if (browserState === 'fixed') setBrowserState('default')
                }}
              >
                exitFixed
              </button>
              <button
                type="button"
                tabIndex={-1}
                title="모니터 전체화면"
                className="fullscreen_btn"
                onClick={() => setBrowserState('full')}
              >
                fullscreen
              </button>
              <button
                type="button"
                tabIndex={-1}
                title="이전 크기로 복원"
                className="exitFullscreen_btn"
                onClick={() => {
                  if (browserState === 'full') setBrowserState('default')
                }}
              >
                exitFullscreen
              </button>
              <button
                type="button"
                tabIndex={-1}
                title="닫기"
                className="closing_btn"
                onClick={() => setBrowserState('hidden')}
              >
                closing
              </button>
            </div>
          ) : null}
        </div>
      ) : null}

      <div className="btn_wrap">
        <button type="button" tabIndex={-1} className="fas edit_btn Reset_btn" onClick={handleReset}>
          <i>Reset</i>
        </button>
        {!downloadDisabled ? (
          <button
            type="button"
            tabIndex={-1}
            className="fas edit_btn Download_btn"
            onClick={handleDownload}
          >
            <i>Download</i>
          </button>
        ) : null}
        {!isDevice ? (
          <button
            type="button"
            tabIndex={-1}
            className={`fas edit_btn FullScreen_btn ${pullScreen ? 'active' : ''}`}
            onClick={handlePullScreen}
          >
            <i>FullScreen</i>
          </button>
        ) : null}
        {resultButtonVisible ? (
          <button
            type="button"
            tabIndex={-1}
            className="fas edit_btn Browser_btn"
            onClick={handleResultRestore}
          >
            <i>Browser</i>
          </button>
        ) : null}
        {!isDevice ? (
          <button
            type="button"
            tabIndex={-1}
            className="fas edit_btn Info_btn"
            onClick={handleInfoOpen}
          >
            <i>Info</i>
          </button>
        ) : null}
      </div>

      {showInfo ? (
        <div
          className={`info_wrap ${browserName}`}
          data-left="Editor Box"
          data-right="Result Area"
          onClick={handleInfoClose}
          role="button"
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.key === 'Escape' || event.key === 'Enter') handleInfoClose()
          }}
        >
          <ul className="edite_info">
            {BUTTON_LABELS.map((label, index) => (
              <li key={label} className={`info_${label}`}>
                <div>
                  <strong>{label}</strong>
                  <i>{INFO_TEXTS_LEFT[index]}</i>
                </div>
              </li>
            ))}
          </ul>
          <ul className="browser_info">
            {INFO_TEXTS_RIGHT.map(([key, text]) => (
              <li key={key} className={`info_${key}`}>
                <div>
                  <strong>{key}</strong>
                  <i>{text}</i>
                </div>
              </li>
            ))}
          </ul>
          <p className="info_end">클릭 시 설명 창이 닫힙니다.</p>
        </div>
      ) : null}
    </div>
  )
}

export default UkEditor
