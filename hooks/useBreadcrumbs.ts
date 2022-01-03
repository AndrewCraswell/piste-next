import { IBreadcrumbItem, INavLink } from "@fluentui/react"
import { useRouter } from "next/router"
import { useSitemap } from "./useSitemap"

export function useBreadcrumbs(): IBreadcrumbItem[] {
  const router = useRouter()
  const sitemap = useSitemap({
    tagName: "breadcrumb",
    injectLinkShims: true,
  })

  return getBreadcrumbs(router.pathname, sitemap, [])
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
