import { Outlet } from "react-router-dom"

import { UnauthorizedAppRole } from "$components/ErrorPages/UnauthorizedAppRole"
import { UnauthorizedClubRole } from "$components/ErrorPages/UnauthorizedClubRole"
import { useAccountProfile } from "$hooks/useAccountProfile"

export type ProtectedRbacRouteProps = {
  clubRoles?: string[]
  appRoles?: string[]
}

export const ProtectedRbacRoute: React.FunctionComponent<
  ProtectedRbacRouteProps
> = (props) => {
  const { appRoles = [], clubRoles = [], children } = props

  const accountClubRoles = useAccountClubRoles()
  const accountAppRoles = useAccountAppRoles()

  console.log("ClubRoles", accountClubRoles)
  console.log("AppRoles", accountAppRoles)

  const isAppRoleAuthorized = appRoles.every((r) =>
    accountAppRoles?.includes(r)
  )
  const isClubRoleAuthorized = clubRoles.every((r) =>
    accountClubRoles?.includes(r)
  )

  const isAuthorized = isAppRoleAuthorized && isClubRoleAuthorized

  if (isAuthorized) {
    return children ? <>{children}</> : <Outlet />
  }

  if (!isAppRoleAuthorized) {
    return <UnauthorizedAppRole />
  }

  if (!isClubRoleAuthorized) {
    return <UnauthorizedClubRole />
  }

  return null
}

export function useAccountClubRoles() {
  const { account } = useAccountProfile()

  // TODO: Get the current selected clubId
  return (
    account.clubRoles
      ?.filter((c) => c.clubId === "61B591E9-5093-4A05-A3C2-6E7154660BA2")
      .map((r) => r.name) ?? []
  )
}

export function useAccountAppRoles() {
  const { account } = useAccountProfile()
  return account.appRoles ?? []
}

// TODO: Add hook to get club and club roles
