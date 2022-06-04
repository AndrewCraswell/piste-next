import { useCallback, useMemo } from "react"
import { useNavigate } from "react-router-dom"

export interface IUseLinkShimsResult {
  onMouseOver: (event: any) => void
  onClick: (event: any) => void
}

export function useLinkShims(): IUseLinkShimsResult {
  const navigate = useNavigate()

  const onMouseOver = useCallback((event: any) => {
    if (event.target instanceof HTMLAnchorElement) {
      // TODO: Prefetch route
      // router.prefetch(event.target.href)
    } else if (event.currentTarget instanceof HTMLAnchorElement) {
      // TODO: Prefetch route
      // router.prefetch(event.currentTarget.href)
    }
  }, [])

  const onClick = useCallback(
    (event: any) => {
      if (event.target instanceof HTMLAnchorElement) {
        event.preventDefault()

        const url = (event.target.href as string).replace(
          window.location.origin,
          ""
        )

        navigate(url)
      } else if (event.currentTarget instanceof HTMLAnchorElement) {
        event.preventDefault()

        const url = (event.currentTarget.href as string).replace(
          window.location.origin,
          ""
        )

        navigate(url)
      }
    },
    [navigate]
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
