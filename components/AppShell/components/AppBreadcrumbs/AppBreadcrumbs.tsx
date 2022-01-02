import { useBreadcrumbs } from "$hooks/useBreadcrumbs"
import styled from "@emotion/styled"
import { Breadcrumb, IBreadcrumbItem } from "@fluentui/react"
import router from "next/router"
import { useCallback } from "react"

const BreadcrumbBar = styled(Breadcrumb)`
  margin: 0;
  grid-area: page-header;
  border-bottom: 1px solid ${({ theme }) => theme.palette.neutralLight};
  padding: 0 24px;

  ol.ms-Breadcrumb-list {
    height: 44px;

    li > a,
    button {
      ${({ theme }) => theme.fonts.medium as unknown as string};
    }
  }

  .ms-TooltipHost {
    pointer-events: none;
  }
`
export interface IAppBreadcrumbsProps {
  crumbs: IBreadcrumbItem[]
}

export const AppBreadcrumbs: React.FunctionComponent<IAppBreadcrumbsProps> = ({
  crumbs,
}) => {
  const onLinkClick = useCallback((event) => {
    if (event.target instanceof HTMLAnchorElement) {
      event.preventDefault()
      router.push(event.target.href)
    }
  }, [])

  return (
    <BreadcrumbBar
      items={crumbs}
      maxDisplayedItems={3}
      overflowAriaLabel="More links"
      onClick={onLinkClick}
    />
  )
}
