import { Badge } from "@fluentui/react-components"

import { ClubRole } from "$types/Rbac"
import { useRoleNameMappers } from "$hooks/authorization/useRoleNameMappers"

export type RoleBadgeProps = {
  role: ClubRole
}

export const RoleBadge: React.FunctionComponent<RoleBadgeProps> = ({
  role,
}) => {
  const { getClubRoleName } = useRoleNameMappers()
  const isStaff = role !== "member"

  return (
    <Badge color={isStaff ? "brand" : "informative"} shape="rounded">
      {getClubRoleName(role)}
    </Badge>
  )
}
