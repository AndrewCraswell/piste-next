import { INavLink, INavLinkGroup } from "@fluentui/react"

import { IUseSitemapOptions, useSitemap } from "./useSitemap"

function groupLinks(links: INavLink[]): INavLinkGroup[] {
  const groupedLinks = links.reduce((dictionary, link) => {
    const key = (link.group as string) || ""
    if (!dictionary[key]) {
      dictionary[key] = {
        name: key,
        links: [],
      } as INavLinkGroup
    }
    dictionary[key].links.push(link)

    return dictionary
  }, {} as Record<string, INavLinkGroup>)

  return Object.values(groupedLinks)
}

export function useSitemapGroups(
  options: IUseSitemapOptions = {}
): INavLinkGroup[] {
  const links = useSitemap(options)

  return groupLinks(links)
}
