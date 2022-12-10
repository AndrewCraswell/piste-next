import { ClubRole } from "$types/Rbac"
import { useAccountProfile } from "../useAccountProfile"

export function useAccountClubRoles(): ClubRole[] {
  const { account } = useAccountProfile()

  // TODO: Get the current selected clubId
  return (
    account.clubRoles
      ?.filter((c) => c.clubId === "61B591E9-5093-4A05-A3C2-6E7154660BA2")
      .map((r) => r.name)
      .flat() ?? []
  )
}
