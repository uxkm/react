import { useEffect, useMemo, useState } from 'react'
import UkEditor from './UkEditor.jsx'
import { getCodeSampleUrl, loadCodeSample } from '../../utils/codeSamples.js'

/**
 * <UkEditorTarget /> — drop-in replacement for the previous
 *
 *   <div class="view_editor edit_code" data-target="html/.../sample.html">
 *     <div class="uk_editor ..." data-result data-mode="htmlmixed" ...>
 *       <textarea></textarea>
 *     </div>
 *   </div>
 *
 * pattern from `uk_common.js` / `uk_editor.js`. The `target` prop is the path
 * (relative to `public/code_samples/`) of the code sample that should be
 * loaded into the editor on mount. While loading, an empty `<UkEditor>` shell
 * is rendered so the SCSS dimensions stay stable.
 *
 * All other props are forwarded to `<UkEditor />`.
 */
function UkEditorTarget({ target, ...rest }) {
  const [code, setCode] = useState('')
  const [error, setError] = useState(null)

  // 샘플 HTML이 `script.js`, `styles.css` 같은 상대 경로 자산을 참조하면,
  // `srcDoc`로 렌더된 iframe은 부모 페이지의 URL을 base로 사용하므로
  // `/publishing/.../script.js` 같은 SPA 경로로 잘못 요청되어 404가 발생한다.
  // 샘플이 위치한 `code_samples/.../` 디렉터리를 base로 잡아 상대 경로가
  // 원본 자산 위치를 향하도록 한다.
  const baseHref = useMemo(() => {
    if (!target) return ''
    const sampleUrl = getCodeSampleUrl(target)
    if (!sampleUrl) return ''
    const lastSlash = sampleUrl.lastIndexOf('/')
    if (lastSlash < 0) return ''
    const dir = sampleUrl.slice(0, lastSlash + 1)
    if (typeof window !== 'undefined' && window.location?.origin) {
      try {
        return new URL(dir, window.location.origin).href
      } catch {
        return dir
      }
    }
    return dir
  }, [target])

  useEffect(() => {
    if (!target) return undefined
    const ctrl = new AbortController()
    loadCodeSample(target, { signal: ctrl.signal })
      .then((text) => setCode(text))
      .catch((err) => {
        if (err.name !== 'AbortError') {
          setError(err)
          setCode('')
        }
      })
    return () => ctrl.abort()
  }, [target])

  if (error) {
    return (
      <div className="uk_editor uk_editor_error" data-target={target}>
        <p className="uk_color_error">코드 샘플을 불러올 수 없습니다: {target}</p>
      </div>
    )
  }

  return <UkEditor {...rest} code={code} baseHref={baseHref} />
}

export default UkEditorTarget
