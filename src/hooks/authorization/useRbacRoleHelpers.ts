import { AppRole, ClubRole } from "$types/Rbac"
import { useMemo } from "react"
import { useCallback } from "react"

// Create mapping helpers to prepare for localization
export const useRbacRoleHelpers = () => {
  const getClubRoleName = useCallback((role: ClubRole): string => {
    // These are being manually mapped rather than using an Enum because
    //  the displayable name should be localized eventually, which must occur
    //  within the React render cycle
    const map: Record<ClubRole, string> = {
      owner: "Owner",
      admin: "Admin",
      coach: "Coach",
      armorer: "Armorer",
      member: "Member",
    }

    return map[role]
  }, [])

  const getAppRoleName = useCallback((role: AppRole): string => {
    const map: Record<AppRole, string> = {
      admin: "Admin",
      support: "Support",
    }

    return map[role]
  }, [])

  const isStaffRole = useCallback((roleName: string) => {
    const staffRoles: ClubRole[] = ["armorer", "coach", "owner", "admin"]
    return staffRoles.includes(roleName as ClubRole)
  }, [])

  return useMemo(
    () => ({
      getClubRoleName,
      getAppRoleName,
      isStaffRole,
    }),
    [getAppRoleName, getClubRoleName, isStaffRole]
  )
}
