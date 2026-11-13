'use client'

import { useState } from 'react' // 상태 훅
import { YouTube } from '@/lib/youtube' // You Tube 컴포넌트
import { DemoLayout } from '@/screen/pub/layout/DemoLayout' // Demo Layout 컴포넌트
import { DemoBlock } from '@/screen/pub/widgets/preview/DemoBlock' // Demo Block 컴포넌트
import { wrapPageExample } from '@/screen/pub/lib/pageExampleCode' // wrap Page Example

/** Google IFrame API 샘플 영상 */
const SAMPLE_ID = 'M7lc1UVf-VE'

/** react-youtube 데모 */
export default function YoutubeDemoPage () {
  const [status, setStatus] = useState('대기')

  return (
    <DemoLayout
      title="YouTube"
      description="react-youtube — iframe 플레이어 (@/lib/youtube)"
      slug="youtube"
    >
      <DemoBlock
        title="임베드 플레이어"
        code={wrapPageExample(`const [status, setStatus] = useState('대기')

<>
  <p>상태: {status}</p>
  <YouTube
    videoId="M7lc1UVf-VE"
    opts={{
      width: '100%',
      height: '360',
      playerVars: { rel: 0 }
    }}
    onReady={() => setStatus('ready')}
    onPlay={() => setStatus('playing')}
    onPause={() => setStatus('paused')}
    onEnd={() => setStatus('ended')}
  />
</>`, {
          name: 'YoutubeExample',
          reactImports: ['useState'],
          compImports: [],
          extraImports: ["import { YouTube } from '@/lib/youtube'"]
        })}
      >
        <p style={{ margin: '0 0 12px', fontSize: 13, color: 'var(--color-text-muted)' }}>
          상태: {status}
        </p>
        <YouTube
          videoId={SAMPLE_ID}
          opts={{
            width: '100%',
            height: '360',
            playerVars: { rel: 0 }
          }}
          onReady={() => setStatus('ready')}
          onPlay={() => setStatus('playing')}
          onPause={() => setStatus('paused')}
          onEnd={() => setStatus('ended')}
        />
      </DemoBlock>
    </DemoLayout>
  )
}
