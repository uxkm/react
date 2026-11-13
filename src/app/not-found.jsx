import NotFoundView from '@/screen/error/NotFound' // Not Found View 컴포넌트

/** 404 탭 제목 */
export const metadata = {
  title: '404'
}

/** 없는 주소. NotFoundView 를 보여 준다 */
export default function NotFoundPage () {
  return <NotFoundView />
}
