import NotFoundView from '@/screen/error/NotFound'

/** 404 탭 제목 */
export const metadata = {
  title: '404 · 퍼블리싱 목록'
}

/** 없는 주소. NotFoundView 를 보여 준다 */
export default function NotFoundPage () {
  return <NotFoundView />
}
