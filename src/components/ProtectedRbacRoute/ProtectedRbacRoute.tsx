import { UnauthorizedAppRole } from "$components/ErrorPages/UnauthorizedAppRole"
import { UnauthorizedClubRole } from "$components/ErrorPages/UnauthorizedClubRole"
import { Outlet } from "react-router-dom"

export type ProtectedRbacRouteProps = {
  clubRoles?: string[]
  appRoles?: string[]
}

export const ProtectedRbacRoute: React.FunctionComponent<
  ProtectedRbacRouteProps
> = (props) => {
  const { appRoles = [], clubRoles = [], children } = props

  const myAppRoles = ["Admin"]
  const myClubRoles = ["Owner"]

  const isAppRoleAuthorized = false
  const isClubRoleAuthorized = true
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
