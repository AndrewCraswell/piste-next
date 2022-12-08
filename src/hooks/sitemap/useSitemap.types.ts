import { RbacPolicy } from "$types/Rbac"
import { INavLink } from "@fluentui/react"

export interface INavTag {
  group?: string
  order?: number
  link?: Omit<Partial<INavLink>, "url">

  // Defines whether this link should be hidden
  //  Useful for combing with feature flags to hide unreleased pages
  hidden?: boolean

  // Defines a set of Role Based Access Control rules which determine
  //  when this link should be visible
  rbacPolicy?: RbacPolicy
}

export interface IPageItem {
  name: string
  url: string
  tags?: Record<string, INavTag | boolean | undefined>
  children?: IPageItem[]
}
