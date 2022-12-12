import { filterChildrenByNodeType } from "$lib/nodeUtilitities"
import { Stack } from "@fluentui/react"
import { Badge, Tooltip } from "@fluentui/react-components"
import { MoreHorizontal16Regular } from "@fluentui/react-icons"
import { PropsWithChildren } from "react"

import { RoleBadge } from "./RoleBadge"

const listTokens = { childrenGap: 4 }

export type RoleBadgeListProps = PropsWithChildren<{
  maxItems?: number
}>

export function RoleBadgeList({ children, maxItems }: RoleBadgeListProps) {
  const roles = filterChildrenByNodeType(children, RoleBadge)
  const maxRolesToShow = maxItems ?? roles.length

  const visibleRoles = roles.slice(0, maxRolesToShow)
  const truncatedRoles = roles
    .slice(maxRolesToShow)
    .map((r) => r.props.role)
    .join(", ")

  return (
    <Stack horizontal tokens={listTokens}>
      {visibleRoles.map((element, i) => {
        const roleName = element.props.role
        return <RoleBadge key={i} role={roleName} />
      })}

      {truncatedRoles.length > 0 && (
        <Tooltip content={truncatedRoles} relationship="label">
          <Badge color="informative" shape="rounded">
            <MoreHorizontal16Regular />
          </Badge>
        </Tooltip>
      )}
    </Stack>
  )
}
