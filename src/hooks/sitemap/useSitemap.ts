import { INavLink } from "@fluentui/react"

import { useLinkShims } from "../useLinkShims"
import { IPageItem, sitemap } from "./sitemap"

function flattenNavLinks(links: Array<INavLink[]>) {
  const flattenedLinks: INavLink[] = []
  return flattenedLinks.concat.apply([], links)
}

function traverseSitemap(
  item: IPageItem,
  options: IUseSitemapOptions = {}
): INavLink[] | undefined {
  const { tagName, flatten, basePath } = options
  let link: INavLink = {
    name: item.name,
    url: `${basePath ? basePath : ""}${item.url}`,
  }

  if (tagName) {
    //@ts-ignore
    const tag = item?.tags?.[tagName]
    if (tag) {
      link = { ...link, ...tag.link }
      if (tag.group) {
        link.group = tag.group
      }
    } else {
      return
    }
  }

  if (item.children) {
    const childOptions = { ...options, basePath: link.url }
    const children = item.children
      .map((n) => traverseSitemap(n, childOptions))
      .filter(Boolean) as Array<INavLink[]>

    const flattenedChildren = flattenNavLinks(children)
    if (flatten) {
      return [link, ...flattenedChildren]
    } else {
      link.links = flattenedChildren
    }
  }

  return [link]
}

export interface IUseSitemapOptions {
  tagName?: string
  flatten?: boolean
  basePath?: string
  injectLinkShims?: boolean
}

export function useSitemap(options: IUseSitemapOptions = {}): INavLink[] {
  const { onClick, onMouseOver } = useLinkShims()

  const links = sitemap
    .map((item) => traverseSitemap(item, options))
    .filter(Boolean) as Array<INavLink[]>

  return flattenNavLinks(links).map((item) => {
    if (options.injectLinkShims && !item.disabled) {
      item.onMouseOver = onMouseOver
      item.onClick = onClick
      item.links = item.links?.map((link) => ({
        ...link,
        onClick,
        onMouseOver,
      }))
    }

    return item
  })
}
