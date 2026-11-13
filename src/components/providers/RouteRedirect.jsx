'use client'

import { useEffect } from 'react' // effect 훅
import { useRouter } from 'next/navigation' // 라우터 훅
import NextLink from 'next/link' // Next Link 컴포넌트

/** 정적 export에는 HTTP 리다이렉트 서버가 없으므로 브라우저에서 이동한다. */
export default function RouteRedirect ({ href }) {
  const router = useRouter()
  useEffect(() => { router.replace(href) }, [href, router])
  return <NextLink href={href}>이동하기</NextLink>
}
