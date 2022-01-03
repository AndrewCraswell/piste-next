import { useRouter } from "next/router"
import { useCallback, useMemo } from "react"

export interface IUseLinkShimsResult {
  onMouseOver: (event: any) => void
  onClick: (event: any) => void
}

export function useLinkShims(): IUseLinkShimsResult {
  const router = useRouter()

  const onMouseOver = useCallback(
    (event: any) => {
      if (event.target instanceof HTMLAnchorElement) {
        router.prefetch(event.target.href)
      } else if (event.currentTarget instanceof HTMLAnchorElement) {
        router.prefetch(event.currentTarget.href)
      }
    },
    [router]
  )

  const onClick = useCallback(
    (event: any) => {
      if (event.target instanceof HTMLAnchorElement) {
        event.preventDefault()
        router.push(event.target.href)
      } else if (event.currentTarget instanceof HTMLAnchorElement) {
        event.preventDefault()
        router.push(event.currentTarget.href)
      }
    },
    [router]
  )

  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useMemo(
    () => ({
      onMouseOver,
      onClick,
    }),
    [onClick, onMouseOver]
  )
}
