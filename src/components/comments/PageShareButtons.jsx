import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import {
  buildFacebookShareUrl,
  buildNaverShareUrl,
  buildPageShareUrl,
  buildTwitterShareUrl,
  copyPageShareUrl,
  getPageShareTitle,
} from '@/lib/pageShareLinks'

const SHARE_CHANNELS = [
  {
    key: 'twitter',
    label: 'X(트위터)에 공유',
    iconClass: 'fab fa-x-twitter',
    buildUrl: ({ url, title }) => buildTwitterShareUrl({ url, title }),
  },
  {
    key: 'facebook',
    label: 'Facebook에 공유',
    iconClass: 'fab fa-facebook-f',
    buildUrl: ({ url }) => buildFacebookShareUrl({ url }),
  },
  {
    key: 'instagram',
    label: '인스타그램에 공유',
    iconClass: 'fab fa-instagram',
    type: 'copy',
    copyMessage: '링크가 복사되었습니다. 인스타그램에 붙여넣어 공유해 주세요.',
  },
  {
    key: 'naver',
    label: '네이버에 공유',
    iconClass: null,
    text: 'N',
    buildUrl: ({ url, title }) => buildNaverShareUrl({ url, title }),
  },
]

const COPY_MESSAGE_DURATION_MS = 2500

function PageShareButtons() {
  const { pathname } = useLocation()
  const [copyMessage, setCopyMessage] = useState('')
  const copyMessageTimerRef = useRef(null)

  const shareUrl = useMemo(() => buildPageShareUrl(pathname), [pathname])
  const shareTitle = useMemo(() => getPageShareTitle(), [pathname])

  useEffect(() => {
    if (copyMessageTimerRef.current != null) {
      clearTimeout(copyMessageTimerRef.current)
      copyMessageTimerRef.current = null
    }
    setCopyMessage('')
  }, [pathname])

  useEffect(() => {
    if (!copyMessage) return undefined

    copyMessageTimerRef.current = window.setTimeout(() => {
      setCopyMessage('')
      copyMessageTimerRef.current = null
    }, COPY_MESSAGE_DURATION_MS)

    return () => {
      if (copyMessageTimerRef.current != null) {
        clearTimeout(copyMessageTimerRef.current)
        copyMessageTimerRef.current = null
      }
    }
  }, [copyMessage])

  const openShareWindow = useCallback((url) => {
    window.open(url, '_blank', 'noopener,noreferrer,width=640,height=480')
  }, [])

  const showCopyMessage = useCallback(
    async (message) => {
      setCopyMessage('')
      try {
        await copyPageShareUrl(shareUrl)
        setCopyMessage(message)
      } catch {
        setCopyMessage('링크 복사에 실패했습니다.')
      }
    },
    [shareUrl],
  )

  const handleChannelShare = useCallback(
    (channel) => {
      if (channel.type === 'copy') {
        showCopyMessage(channel.copyMessage ?? '링크가 복사되었습니다.')
        return
      }

      openShareWindow(channel.buildUrl({ url: shareUrl, title: shareTitle }))
    },
    [openShareWindow, shareTitle, shareUrl, showCopyMessage],
  )

  const handleCopyLink = useCallback(async () => {
    await showCopyMessage('링크가 복사되었습니다.')
  }, [showCopyMessage])

  return (
    <div className="page_comments__share">
      <span className="page_comments__share_label">SNS 공유</span>
      <ul className="page_comments__share_list" aria-label="SNS 공유">
        {SHARE_CHANNELS.map((channel) => (
          <li key={channel.key}>
            <button
              type="button"
              className={[
                'page_comments__share_btn',
                channel.text ? 'page_comments__share_btn--text' : '',
                channel.key === 'naver' ? 'page_comments__share_btn--naver' : '',
                channel.key === 'instagram' ? 'page_comments__share_btn--instagram' : '',
              ]
                .filter(Boolean)
                .join(' ')}
              aria-label={channel.label}
              onClick={() => handleChannelShare(channel)}
            >
              {channel.iconClass ? (
                <i className={channel.iconClass} aria-hidden="true" />
              ) : (
                <span className="page_comments__share_text" aria-hidden="true">
                  {channel.text}
                </span>
              )}
              <span className="sound_only">{channel.label}</span>
            </button>
          </li>
        ))}
        <li>
          <button
            type="button"
            className="page_comments__share_btn"
            aria-label="페이지 링크 복사"
            onClick={handleCopyLink}
          >
            <i className="fas fa-link" aria-hidden="true" />
            <span className="sound_only">페이지 링크 복사</span>
          </button>
        </li>
      </ul>
      {copyMessage ? (
        <p className="page_comments__share_status" role="status">
          {copyMessage}
        </p>
      ) : null}
    </div>
  )
}

export default PageShareButtons
