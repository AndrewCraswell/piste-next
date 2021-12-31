import { useEffect, useRef } from "react"

export interface UseTitleOptions {
  restoreOnUnmount?: boolean
  useSiteName?: boolean
}

const DEFAULT_USE_TITLE_OPTIONS: UseTitleOptions = {
  restoreOnUnmount: false,
  useSiteName: true,
}

export function useTitle(
  title: string,
  options: UseTitleOptions = DEFAULT_USE_TITLE_OPTIONS
) {
  const prevTitleRef = useRef(document.title)

  if (document.title !== title) {
    if (options.useSiteName)
      document.title = `${process.env.NEXT_PUBLIC_SITE_NAME} | ${title}`
  }

  useEffect(() => {
    if (options && options.restoreOnUnmount) {
      return () => {
        document.title = prevTitleRef.current
      }
    } else {
      return
    }
  }, [])
}
