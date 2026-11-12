'use client'

import { useEffect, useState } from 'react'
import { Lottie, Select } from '@/comp'
import { DemoLayout } from '@/screen/pub/layout/DemoLayout'
import { DemoBlock } from '@/screen/pub/widgets/preview/DemoBlock'
import { wrapPageExample } from '@/screen/pub/lib/pageExampleCode'

const LOTTIE_LIST_SRC = '/data/pub/lottie.json'

/** public/images/lottie 목록을 Select로 고르며 미리보기 */
function LottieFolderPreview () {
  const [files, setFiles] = useState([])
  const [name, setName] = useState('')
  const [listError, setListError] = useState(false)

  useEffect(() => {
    let cancelled = false

    function loadList () {
      fetch(`${LOTTIE_LIST_SRC}?t=${Date.now()}`, { cache: 'no-store' })
        .then((res) => {
          if (!res.ok) throw new Error(`Failed to load ${LOTTIE_LIST_SRC}`)
          return res.json()
        })
        .then((data) => {
          if (cancelled) return
          const list = Array.isArray(data?.files) ? data.files : []
          setFiles(list)
          setName((prev) => (prev && list.includes(prev) ? prev : (list[0] || '')))
          setListError(false)
        })
        .catch((err) => {
          console.error(err)
          if (!cancelled) setListError(true)
        })
    }

    loadList()
    // 폴더 추가·삭제 반영: 포커스 복귀 + 짧은 폴링 (서버 재시작 불필요)
    const onVisible = () => {
      if (document.visibilityState === 'visible') loadList()
    }
    const timer = window.setInterval(loadList, 2000)
    window.addEventListener('focus', loadList)
    document.addEventListener('visibilitychange', onVisible)
    return () => {
      cancelled = true
      window.clearInterval(timer)
      window.removeEventListener('focus', loadList)
      document.removeEventListener('visibilitychange', onVisible)
    }
  }, [])

  return (
    <div className="lib-demo-lottie-picker">
      <div className="form_field lib-demo-lottie-picker__field">
        <label className="form_field-label" htmlFor="lottie-file-select">
          Lottie 파일
        </label>
        <Select
          id="lottie-file-select"
          fit
          value={name}
          disabled={!files.length}
          placeholder={listError ? '목록을 불러오지 못했습니다' : '파일을 선택하세요'}
          options={files.map((file) => ({ value: file, label: file }))}
          onChange={(event) => setName(event.target.value)}
          aria-describedby="lottie-file-hint"
        />
        <p id="lottie-file-hint" className="form_field-hint">
          public/images/lottie 폴더의 JSON을 감지합니다. name=&quot;{name || '…'}&quot;
        </p>
      </div>

      {name
        ? (
          <Lottie
            key={name}
            name={name}
            loop
            controls
            width={320}
            height={320}
            ariaLabel={`${name} 애니메이션`}
            className="lib-demo-lottie-fireworks"
          />
          )
        : (
          <p className="lib-demo-lottie-picker__empty">
            {listError ? '목록을 불러오지 못했습니다.' : '선택 가능한 Lottie 파일이 없습니다.'}
          </p>
          )}
    </div>
  )
}

/** Lottie 컴포넌트 데모 — 폴더 목록 Select · controls */
export default function LottieDemoPage () {
  return (
    <DemoLayout
      title="Lottie"
      description="JSON 애니메이션 (@/comp Lottie). Icon처럼 name으로 호출하고, controls로 재생·정지를 옵션 제공합니다."
      slug="lottie"
    >
      <DemoBlock
        title="폴더 미리보기"
        description="public/images/lottie JSON 목록을 Select로 고르면 해당 애니메이션을 확인합니다."
        code={wrapPageExample(`const [files, setFiles] = useState([])
const [name, setName] = useState('')

useEffect(() => {
  fetch('/data/pub/lottie.json')
    .then((r) => r.json())
    .then((data) => {
      const list = data.files || []
      setFiles(list)
      setName(list[0] || '')
    })
}, [])

return (
  <>
    <Select
      value={name}
      options={files.map((file) => ({ value: file, label: file }))}
      onChange={(e) => setName(e.target.value)}
    />
    {name ? (
      <Lottie name={name} loop controls width={320} height={320} />
    ) : null}
  </>
)`, {
          name: 'LottiePickerExample',
          reactImports: ['useEffect', 'useState'],
          compImports: ['Lottie', 'Select']
        })}
      >
        <LottieFolderPreview />
      </DemoBlock>

      <DemoBlock
        title="controls — 재생·정지"
        description="name으로 파일을 지정하고 controls로 재생·정지를 켭니다."
        code={wrapPageExample(`<Lottie
  name="fireworks"
  loop
  controls
  width={320}
  height={400}
  ariaLabel="폭죽 애니메이션"
  className="lib-demo-lottie-fireworks"
/>`, {
          name: 'LottieControlsExample',
          reactImports: [],
          compImports: ['Lottie']
        })}
      >
        <Lottie
          name="fireworks"
          loop
          controls
          width={320}
          height={400}
          ariaLabel="폭죽 애니메이션"
          className="lib-demo-lottie-fireworks"
        />
      </DemoBlock>

      <DemoBlock
        title="기본 — controls 없음"
        description="controls를 끄면(기본값) 재생·정지 버튼 없이 자동 재생만 합니다."
        code={wrapPageExample(`<Lottie
  name="fresh"
  loop
  width={180}
  height={180}
  ariaLabel="fresh 애니메이션"
/>`, {
          name: 'LottieBasicExample',
          reactImports: [],
          compImports: ['Lottie']
        })}
      >
        <Lottie
          name="fresh"
          loop
          width={180}
          height={180}
          ariaLabel="fresh 애니메이션"
        />
      </DemoBlock>

      <DemoBlock
        title="loop={false} — 일회 재생"
        description="루프를 끄면 한 번만 재생합니다. controls로 다시 재생할 수 있습니다."
        code={wrapPageExample(`<Lottie
  name="check"
  loop={false}
  controls
  width={200}
  height={200}
  ariaLabel="체크 애니메이션"
/>`, {
          name: 'LottieOnceExample',
          reactImports: [],
          compImports: ['Lottie']
        })}
      >
        <Lottie
          name="check"
          loop={false}
          controls
          width={200}
          height={200}
          ariaLabel="체크 애니메이션"
        />
      </DemoBlock>
    </DemoLayout>
  )
}
