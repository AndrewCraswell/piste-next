import { IBreadcrumbItem, INavLink } from "@fluentui/react"
import { useMemo } from "react"
import { useSearchParams, useLocation } from "react-router-dom"
import { useSitemap } from "./useSitemap"

export function useBreadcrumbs(): IBreadcrumbItem[] {
  const [queryParams] = useSearchParams()
  const { pathname } = useLocation()
  const sitemap = useSitemap({
    tagName: "breadcrumb",
    injectLinkShims: true,
  })

  const breadcrumbs = useMemo(() => {
    const query = queryParams

    const crumbs = getBreadcrumbs(pathname + "/", sitemap, []).map((b) => ({
      ...b,
      text: replaceRouteTokens(b.text, query),
      href: b.href ? replaceRouteTokens(b.href, query) : undefined,
    }))

    return crumbs
  }, [pathname, queryParams, sitemap])

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

function replaceRouteTokens(str: string, query: URLSearchParams) {
  let result = str

  query.forEach((value, key) => {
    const token = `[${key}]`
    const val = Array.isArray(value)
      ? (value as string[]).join("")
      : (value as string)

    result = result.replaceAll(token, val)
  })

  return result
}
