import { useFeatureFlag } from "$hooks/configuration"
import { INavLink } from "@fluentui/react"
import { useMemo } from "react"

import { useLinkShims } from "../useLinkShims"
import { IPageItem } from "./useSitemap.types"

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
    if (tag && tag.hidden !== true) {
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
  const sitemap = useSitemapData()

  const links = sitemap
    .map((item) => traverseSitemap(item, options))
    .filter(Boolean) as Array<INavLink[]>

  // TODO: Update the sitemap hook to add data for required app roles and club roles
  //    -> Filter links out if roles don't match

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

function useSitemapData() {
  const { isEnabled: isUsersPageEnabled } = useFeatureFlag({
    key: "users-page",
    label: import.meta.env.MODE,
  })

  return useMemo(() => {
    const sitemap: IPageItem[] = [
      {
        name: "Overview",
        url: "/",
        tags: {
          nav: {
            link: {
              icon: "ViewDashboard",
            },
          },
          breadcrumb: { link: { name: "Home" } },
        },
        children: [
          {
            name: "Calendar",
            url: "calendar/",
            tags: {
              nav: { link: { icon: "Calendar", disabled: true } },
              breadcrumb: {},
            },
          },
          {
            name: "Clubs",
            url: "clubs/",
            tags: {
              nav: { link: { icon: "Teamwork", disabled: true } },
              breadcrumb: {},
            },
          },
          {
            name: "Billing",
            url: "billing/",
            tags: {
              nav: { link: { icon: "PaymentCard", disabled: true } },
              breadcrumb: {},
            },
          },
          {
            name: "Assessments",
            url: "assessments/",
            tags: {
              nav: {
                group: "Club",
                link: { icon: "TestPlan", disabled: false },
              },
              breadcrumb: {},
            },
            children: [
              {
                name: "View assessment",
                url: "[assessmentId]/",
                tags: {
                  breadcrumb: {},
                },
                children: [
                  {
                    name: "Submit evaluation",
                    url: "submit/",
                    tags: {
                      breadcrumb: {},
                    },
                  },
                  {
                    name: "Edit evaluation",
                    url: "[evaluationId]/",
                    tags: {
                      breadcrumb: {},
                    },
                  },
                ],
              },
            ],
          },
          {
            name: "Users",
            url: "users/",
            tags: {
              nav: {
                group: "Club",
                link: { icon: "People", disabled: false },
                hidden: !isUsersPageEnabled,
              },
              breadcrumb: {},
            },
          },
          {
            name: "Classes",
            url: "classes/",
            tags: {
              nav: {
                group: "Club",
                link: { icon: "Education", disabled: true },
              },
              breadcrumb: {},
            },
          },
          {
            name: "Coaching",
            url: "coaching/",
            tags: {
              nav: {
                group: "Club",
                link: { icon: "UserEvent", disabled: true },
              },
              breadcrumb: {},
            },
          },
          {
            name: "Challenge",
            url: "challenge/",
            tags: {
              nav: { group: "Club", link: { icon: "Diamond", disabled: true } },
              breadcrumb: {},
            },
          },
          {
            name: "Armory",
            url: "armory/",
            tags: {
              nav: {
                group: "Club",
                link: { icon: "DeveloperTools", disabled: true },
              },
              breadcrumb: {},
            },
          },
          {
            name: "Store",
            url: "store/",
            tags: {
              nav: {
                group: "Club",
                link: { icon: "OfficeStoreLogo", disabled: true },
              },
              breadcrumb: {},
            },
          },
          {
            name: "Clinics",
            url: "clinics/",
            tags: {
              nav: {
                group: "Events",
                link: { icon: "Certificate", disabled: true },
              },
              breadcrumb: {},
            },
          },
          {
            name: "Tournaments",
            url: "tournaments/",
            tags: {
              nav: {
                group: "Events",
                link: { icon: "Trophy2", disabled: false },
              },
              breadcrumb: {},
            },
          },
          {
            name: "Profile",
            url: "profile/",
            tags: {
              breadcrumb: {},
            },
          },
        ].filter(Boolean),
      },
    ]

    return sitemap
  }, [isUsersPageEnabled])
}
