import { useFeatureFlag } from "$hooks/configuration"
import { AppRole, AtLeastOne, ClubRole, RbacRulesEvaluator } from "$types/Rbac"
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
  const { tagName, flatten, basePath, rbacRoles } = options
  let link: INavLink = {
    name: item.name,
    url: `${basePath ? basePath : ""}${item.url}`,
  }

  if (tagName) {
    const tag = item?.tags?.[tagName]
    if (tag === true) {
      // Just return the link
      // link = { ...link }
    } else {
      if (tag && tag.hidden !== true) {
        // If an RBAC policy was defined, evaluate if the current user can see the link
        if (tag.rbacPolicy) {
          const { appRules, clubRules } = tag.rbacPolicy

          // Make sure the user roles were passed to the hook so they can be evaluated against the policies
          if (rbacRoles) {
            const { appRoles, clubRoles } = rbacRoles

            if (appRules) {
              if (appRoles) {
                if (!RbacRulesEvaluator.isAuthorized(appRules, appRoles)) {
                  return
                }
              } else {
                console.error(
                  `[useSitemap] A link (${link.name}) has App Role RBAC policies defined, but no user app roles were passed to the hook. Skipping the evaluation of the policies.`
                )
              }
            }

            if (clubRules) {
              if (clubRoles) {
                if (!RbacRulesEvaluator.isAuthorized(clubRules, clubRoles)) {
                  return
                }
              } else {
                console.error(
                  `[useSitemap] A link (${link.name}) has Club Role RBAC policies defined, but no user club roles were passed to the hook. Skipping the evaluation of the policies.`
                )
              }
            }
          } else {
            console.error(
              `[useSitemap] A link (${link.name}) has RBAC policies defined, but no roles were passed to the hook. Skipping the evaluation of the policies.`
            )
          }
        }

        link = { ...link, ...tag.link }
        if (tag.group) {
          link.group = tag.group
        }
      } else {
        // The tag was either false or doesn't exist, don't add it to the nav
        return
      }
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

  // Link shims add onClick and other handlers to
  //  force links to behave like react-router links
  injectLinkShims?: boolean

  // Provide the roles to be used for evaluating
  //  Role Based Access Control policies on each link
  rbacRoles?: AtLeastOne<{
    clubRoles?: ClubRole[]
    appRoles?: AppRole[]
  }>
}

export function useSitemap(options: IUseSitemapOptions = {}): INavLink[] {
  const { onClick, onMouseOver } = useLinkShims()
  const sitemap = useSitemapData()

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
              breadcrumb: true,
            },
          },
          {
            name: "Clubs",
            url: "clubs/",
            tags: {
              nav: { link: { icon: "Teamwork", disabled: true } },
              breadcrumb: true,
            },
          },
          {
            name: "Billing",
            url: "billing/",
            tags: {
              nav: { link: { icon: "PaymentCard", disabled: true } },
              breadcrumb: true,
            },
          },
          {
            name: "Assessments",
            url: "assessments/",
            tags: {
              nav: {
                group: "Club",
                link: { icon: "TestPlan", disabled: false },
                rbacPolicy: {
                  clubRules: { anyOf: ["owner", "admin", "coach"] },
                },
              },
              breadcrumb: true,
            },
            children: [
              {
                name: "View assessment",
                url: "[assessmentId]/",
                tags: {
                  breadcrumb: true,
                },
                children: [
                  {
                    name: "Submit evaluation",
                    url: "submit/",
                    tags: {
                      breadcrumb: true,
                    },
                  },
                  {
                    name: "Edit evaluation",
                    url: "[evaluationId]/",
                    tags: {
                      breadcrumb: true,
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
                rbacPolicy: {
                  clubRules: { anyOf: ["owner", "admin", "coach"] },
                },
              },
              breadcrumb: true,
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
              breadcrumb: true,
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
              breadcrumb: true,
            },
          },
          {
            name: "Challenge",
            url: "challenge/",
            tags: {
              nav: { group: "Club", link: { icon: "Diamond", disabled: true } },
              breadcrumb: true,
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
              breadcrumb: true,
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
              breadcrumb: true,
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
              breadcrumb: true,
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
              breadcrumb: true,
            },
          },
          {
            name: "Profile",
            url: "profile/",
            tags: {
              breadcrumb: true,
            },
          },
        ].filter(Boolean) as IPageItem[],
      },
    ]

    return sitemap
  }, [isUsersPageEnabled])
}
