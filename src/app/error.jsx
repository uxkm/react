'use client'

import ErrorView from '@/screen/error/ErrorView' // Error View 컴포넌트

/** 라우트 오류 화면. ErrorView 에 오류와 다시 시도를 넘긴다 */
export default function ErrorPage ({ error, reset }) {
  return <ErrorView error={error} reset={reset} />
}
