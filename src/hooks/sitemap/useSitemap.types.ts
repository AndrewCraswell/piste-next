import { INavLink } from "@fluentui/react"

export interface INavTag {
  group?: string
  order?: number
  link?: Omit<Partial<INavLink>, "url">
}

export interface IPageItem {
  name: string
  url: string
  tags?: Record<string, INavTag>
  children?: IPageItem[]
}
