'use client'

import { useEffect, useRef } from 'react' // React
import { createViewer } from '@/lib/viewer' // create Viewer
import { DemoLayout } from '@/screen/pub/layout/DemoLayout' // Demo Layout 컴포넌트
import { DemoBlock } from '@/screen/pub/widgets/preview/DemoBlock' // Demo Block 컴포넌트
import { wrapPageExample } from '@/screen/pub/lib/pageExampleCode' // wrap Page Example

const images = [
  { src: 'https://picsum.photos/id/1015/800/600', alt: '산' },
  { src: 'https://picsum.photos/id/1025/800/600', alt: '강아지' },
  { src: 'https://picsum.photos/id/1035/800/600', alt: '숲' }
]

/** viewerjs 데모 */
export default function ViewerDemoPage () {
  const galleryRef = useRef(null)

  useEffect(() => {
    const viewer = createViewer(galleryRef.current, {
      toolbar: true,
      navbar: true,
      title: true
    })
    return () => {
      if (viewer) viewer.destroy()
    }
  }, [])

  return (
    <DemoLayout
      title="Viewer.js"
      description="viewerjs — 이미지 갤러리 확대 (@/lib/viewer)"
      slug="viewer"
    >
      <DemoBlock
        title="썸네일 클릭 → 뷰어"
        code={wrapPageExample(`const galleryRef = useRef(null)

useEffect(() => {
  const viewer = createViewer(galleryRef.current, {
    toolbar: true,
    navbar: true,
    title: true
  })
  return () => {
    if (viewer) viewer.destroy()
  }
}, [])

<ul ref={galleryRef} className="lib-demo-gallery">
  {images.map((img) => (
    <li key={img.src}>
      <img src={img.src} alt={img.alt} />
    </li>
  ))}
</ul>`, {
          name: 'ViewerExample',
          reactImports: ['useEffect', 'useRef'],
          compImports: [],
          extraImports: [
            `import { createViewer } from '@/lib/viewer'

const images = [
  { src: 'https://picsum.photos/id/1015/800/600', alt: '산' },
  { src: 'https://picsum.photos/id/1025/800/600', alt: '강아지' }
]`
          ]
        })}
      >
        <ul ref={galleryRef} className="lib-demo-gallery">
          {images.map((img) => (
            <li key={img.src}>
              <img src={img.src} alt={img.alt} />
            </li>
          ))}
        </ul>
      </DemoBlock>
    </DemoLayout>
  )
}
