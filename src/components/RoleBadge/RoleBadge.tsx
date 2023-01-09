import { Badge } from "@fluentui/react-components"

import { ClubRole } from "$types/Rbac"
import { useRbacRoleHelpers } from "$hooks/authorization/useRbacRoleHelpers"

export type RoleBadgeProps = {
  role: ClubRole
}

export function RoleBadge({ role }: RoleBadgeProps) {
  const { getClubRoleName, isStaffRole } = useRbacRoleHelpers()

  return (
    <Badge color={isStaffRole(role) ? "brand" : "informative"} shape="rounded">
      {getClubRoleName(role)}
    </Badge>
  )
}
