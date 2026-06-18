import { useEffect, useMemo, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import hljs from 'highlight.js/lib/common'
import 'highlight.js/styles/atom-one-dark.css'
import { applyDetectClassesTo } from '../../utils/deviceDetect.js'
import {
  applyColorMarkers,
  applyGulpDiffMarkers,
  escapeHtml,
  normalizeCodeIndent,
  splitHtmlIntoLines,
} from './codeFormatting.js'

/**
 * <CodeBlock /> — React port of `uk_gist_skin_code()` from
 * `src/assets/js/uk_common.js`.
 */
function CodeBlock({
  id,
  title,
  filename,
  language,
  lineNumbers = true,
  defaultOpen = true,
  className = '',
  linkedFullCodeId,
  isFullCodeLayer = false,
  children,
}) {
  const containerRef = useRef(null)
  const [open, setOpen] = useState(defaultOpen)
  const [fullLayerOpen, setFullLayerOpen] = useState(false)

  const isHiddenFullLayer = isFullCodeLayer || className.includes('full_code_layer')

  const normalized = useMemo(() => {
    if (typeof children === 'string') return normalizeCodeIndent(children)
    if (Array.isArray(children)) return normalizeCodeIndent(children.join(''))
    return ''
  }, [children])

  const { highlightedLines, detectedLanguage } = useMemo(() => {
    if (!normalized) return { highlightedLines: [], detectedLanguage: '' }

    const { source, suffixes } = applyGulpDiffMarkers(normalized)
    let value
    let detected = ''

    try {
      const result = language
        ? hljs.highlight(source, { language, ignoreIllegals: true })
        : hljs.highlightAuto(source)
      value = result.value
      detected = result.language || ''
    } catch {
      value = escapeHtml(source)
    }

    const withMarkers = applyColorMarkers(value)
    const lines = splitHtmlIntoLines(withMarkers).map((line, index) => {
      const suffix = suffixes[index] ?? ''
      return suffix ? `${line}${suffix}` : line
    })

    return { highlightedLines: lines, detectedLanguage: detected }
  }, [normalized, language])

  const lineCount = highlightedLines.length

  useEffect(() => {
    if (containerRef.current) {
      applyDetectClassesTo(containerRef.current, {
        deviceCheck: true,
        osCheck: true,
      })
    }
  }, [])

  useEffect(() => {
    if (!fullLayerOpen) return undefined
    const prevOverflow = document.documentElement.style.overflowY
    document.documentElement.style.overflowY = 'hidden'
    return () => {
      document.documentElement.style.overflowY = prevOverflow
    }
  }, [fullLayerOpen])

  const wrapperClassName = ['uk_gist_code_box', 'code_show', className].filter(Boolean).join(' ')

  const codeClassName = [
    'uk_gist_code_wrap',
    'hljs',
    detectedLanguage ? `language-${detectedLanguage}` : '',
  ]
    .filter(Boolean)
    .join(' ')

  const heightParityClass =
    typeof window !== 'undefined' && window.innerHeight % 2 === 1 ? 'height_odd' : 'height_even'

  const openFullLayer = () => {
    if (!linkedFullCodeId) return
    setFullLayerOpen(true)
  }

  const closeFullLayer = () => {
    setFullLayerOpen(false)
  }

  const fullLayerSource =
    typeof document !== 'undefined' && linkedFullCodeId && fullLayerOpen
      ? document.getElementById(linkedFullCodeId)
      : null

  const fullLayerBoxHtml = fullLayerSource?.querySelector('.uk_gist_code_box')?.innerHTML ?? ''

  const codeBox = (
    <div
      ref={containerRef}
      className={wrapperClassName}
      data-tit={title || undefined}
      data-filename={filename || undefined}
      data-open={open ? 'true' : 'false'}
    >
      {filename && !isHiddenFullLayer ? (
        <div className={`file_name_box${open ? '' : ' on'}`}>
          <button
            type="button"
            className={`file_name toggle_btn${open ? '' : ' on'}`}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {filename} <span>[{open ? 'close' : 'open'}]</span>
          </button>
          {linkedFullCodeId ? (
            <button type="button" className="view_full_layer" onClick={openFullLayer}>
              View full code
            </button>
          ) : null}
        </div>
      ) : null}

      {filename && isHiddenFullLayer ? (
        <div className="file_name_box">
          <span className="file_name">{filename}</span>
          <button type="button" className="code_layer_close">
            <i>layer close</i>
          </button>
        </div>
      ) : null}

      <div className={`uk_gist_content${open ? ' active' : ''}`}>
        {lineNumbers && lineCount > 0 ? (
          <ol className="line_number">
            {highlightedLines.map((_, index) => (
              <li key={index} />
            ))}
          </ol>
        ) : null}

        <pre className="uk_gist_code_pre">
          <code
            className={codeClassName}
            dangerouslySetInnerHTML={{
              __html: highlightedLines
                .map((line) => `<span class="uk_gist_code_line">${line}</span>`)
                .join('\n'),
            }}
          />
        </pre>
      </div>

      <div className="uk_gist_footer">
        {title ? (
          <>
            <b>{title}</b> code example
          </>
        ) : (
          'Code example'
        )}{' '}
        <span className="by">
          <span className="hyphen">-</span> create <i>❤</i> by <b>uxkm</b>
        </span>
      </div>
    </div>
  )

  return (
    <>
      {isFullCodeLayer ? (
        <div id={id} className="uk_gist_code_layer">
          {codeBox}
        </div>
      ) : (
        codeBox
      )}

      {fullLayerOpen && fullLayerBoxHtml
        ? createPortal(
            <div
              className={`uk_gist_code_layer view_show ${heightParityClass}`}
              onClick={(event) => {
                if (event.target.closest('.code_layer_close')) {
                  closeFullLayer()
                }
              }}
            >
              <div
                className={`uk_gist_code_box full_code_layer code_show ${heightParityClass}`}
                dangerouslySetInnerHTML={{ __html: fullLayerBoxHtml }}
              />
            </div>,
            document.body,
          )
        : null}
    </>
  )
}

export default CodeBlock
