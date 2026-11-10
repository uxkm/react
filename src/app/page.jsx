import { projects } from '@/generated/projects'
import RouteRedirect from '@/comp/providers/RouteRedirect'

export default function HomePage () {
  return <RouteRedirect href={projects.some(({ id }) => id === 'b2b') ? '/b2b' : '/pub'} />
}
