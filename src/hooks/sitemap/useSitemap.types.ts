import { RbacRules } from "$types/Rbac"
import { INavLink } from "@fluentui/react"

export interface INavTag {
  group?: string
  order?: number
  link?: Omit<Partial<INavLink>, "url">
  hidden?: boolean
}

export interface IPageItem {
  name: string
  url: string
  rbac?: RbacRules
  tags?: Record<string, INavTag | undefined>
  children?: IPageItem[]
}
