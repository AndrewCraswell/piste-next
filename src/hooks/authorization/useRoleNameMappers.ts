import { AppRole, ClubRole } from "$types/Rbac"
import { useMemo } from "react"
import { useCallback } from "react"

// Create mapping helpers to prepare for localization
export const useRoleNameMappers = () => {
  const getClubRoleName = useCallback((role: ClubRole): string => {
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

  return useMemo(
    () => ({
      getClubRoleName,
      getAppRoleName,
    }),
    [getAppRoleName, getClubRoleName]
  )
}
