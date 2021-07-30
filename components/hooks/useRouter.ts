import { useRouter as useNextRouter } from 'next/router'

export default function useRouter() {
  const router = useNextRouter()

  const push = (route: string) => () => router.push(route)

  return { router, push }
}
