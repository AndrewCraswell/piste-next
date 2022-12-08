import { Outlet } from "react-router-dom"
import { useMemo } from "react"

import { UnauthorizedAppRole } from "$components/ErrorPages/UnauthorizedAppRole"
import { UnauthorizedClubRole } from "$components/ErrorPages/UnauthorizedClubRole"
import {
  ClubRole,
  AppRole,
  RbacRules,
  RbacRulesEvaluator,
  RbacPolicy,
} from "$types/Rbac"
import { useAccountClubRoles } from "$hooks/useAccountClubRoles"
import { useAccountAppRoles } from "$hooks/useAccountAppRoles"

const _emptyAppRules: RbacRules<AppRole> = {
  allOf: [],
  anyOf: [],
}

const _emptyClubRules: RbacRules<ClubRole> = {
  allOf: [],
  anyOf: [],
}

export type ProtectedRbacRouteProps = RbacPolicy

export const ProtectedRbacRoute: React.FunctionComponent<
  ProtectedRbacRouteProps
> = (props) => {
  const {
    appRules = _emptyAppRules,
    clubRules = _emptyClubRules,
    children,
  } = props

  const accountClubRoles = useAccountClubRoles()
  const accountAppRoles = useAccountAppRoles()

  const isAppRoleAuthorized = useMemo(() => {
    const rbacEvaluator = new RbacRulesEvaluator(appRules)
    return rbacEvaluator.isAuthorized(accountAppRoles)
  }, [accountAppRoles, appRules])

  const isClubRoleAuthorized = useMemo(() => {
    const rbacEvaluator = new RbacRulesEvaluator(clubRules)
    return rbacEvaluator.isAuthorized(accountClubRoles)
  }, [accountClubRoles, clubRules])

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
