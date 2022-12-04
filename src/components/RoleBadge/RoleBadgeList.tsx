import { filterChildrenByNodeType } from "$lib/nodeUtilitities"
import { Stack } from "@fluentui/react"
import { Badge, Tooltip } from "@fluentui/react-components"
import { MoreHorizontal16Regular } from "@fluentui/react-icons"
import React from "react"

import { RoleBadge } from "./RoleBadge"

const listTokens = { childrenGap: 4 }

export type RoleBadgeListProps = {
  maxItems?: number
}

export const RoleBadgeList: React.FunctionComponent<RoleBadgeListProps> = ({
  children,
  maxItems,
}) => {
  const roles = filterChildrenByNodeType(children, RoleBadge)
  const maxRolesToShow = maxItems ?? roles.length

  const visibleRoles = roles.slice(0, maxRolesToShow)
  const truncatedRoles = roles
    .slice(maxRolesToShow)
    .map((r) => r.props.name)
    .join(", ")

  return (
    <Stack horizontal tokens={listTokens}>
      {visibleRoles.map((element, i) => {
        const roleName = element.props.name
        return <RoleBadge name={roleName} />
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
