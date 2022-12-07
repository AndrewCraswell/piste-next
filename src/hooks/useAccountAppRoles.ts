import { AppRole } from "$types/Rbac"
import { useAccountProfile } from "./useAccountProfile"

export function useAccountAppRoles(): AppRole[] {
  const { account } = useAccountProfile()
  return account.appRoles ?? []
}
