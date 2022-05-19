import { IBreadcrumbItem, INavLink } from "@fluentui/react"
import { useRouter } from "next/router"
import type { ParsedUrlQuery } from "querystring"
import { useMemo } from "react"
import { useSitemap } from "./useSitemap"

export function useBreadcrumbs(): IBreadcrumbItem[] {
  const router = useRouter()
  const sitemap = useSitemap({
    tagName: "breadcrumb",
    injectLinkShims: true,
  })

  const breadcrumbs = useMemo(() => {
    const query = router.query

    const crumbs = getBreadcrumbs(router.pathname + "/", sitemap, []).map(
      (b) => ({
        ...b,
        text: replaceRouteTokens(b.text, query),
        href: b.href ? replaceRouteTokens(b.href, query) : undefined,
      })
    )

    return crumbs
  }, [router, sitemap])

  return breadcrumbs
}

function getBreadcrumbs(
  pathname: string,
  links: INavLink[] = [],
  parents: INavLink[] = []
): IBreadcrumbItem[] {
  if (links) {
    const matchedLink = links.find((n) => pathname.startsWith(n.url))
    if (matchedLink) {
      return getBreadcrumbs(pathname, matchedLink.links, [
        ...parents,
        matchedLink,
      ])
    }
  }

  return parents.map((item) => ({
    text: item.name,
    key: item.url,
    href: item.url,
    onMouseOver: item.onMouseOver,
    onClick: item.onClick,
  })) as IBreadcrumbItem[]
}

function replaceRouteTokens(str: string, query: ParsedUrlQuery) {
  let result = str

  Object.keys(query).forEach((k) => {
    const token = `[${k}]`
    const value = Array.isArray(query[k])
      ? (query[k] as string[]).join("")
      : (query[k] as string)

    result = result.replaceAll(token, value)
  })

  return result
}
