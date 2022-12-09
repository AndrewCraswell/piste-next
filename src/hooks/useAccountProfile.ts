import { formatFullName } from "$lib/formatFullName"
import { useGetAccountProfileQuery } from "$queries"
import { AppRole, ClubRole } from "$types/Rbac"
import { useMsal } from "@azure/msal-react"
import { useMemo } from "react"

export const useAccountProfile = () => {
  const { accounts, inProgress: isAuthLoading } = useMsal()
  const user = accounts.length ? accounts[0] : null
  console.log("user", user)

  const { data, ...query } = useGetAccountProfileQuery({
    variables: {
      oid: user?.idTokenClaims?.sub!,
    },
  })

  const account = useMemo(() => {
    let {
      Student,
      Oid,
      Address,
      PrimaryStudentId,
      calendar,
      AccountAppRoles,
      AccountClubRoles,
    } = data?.Accounts_by_pk || {}

    // Use a series of fallbacks to determine the best full name
    const accountFullName = formatFullName({
      firstName: Student?.FirstName,
      lastName: Student?.LastName,
      nickname: Student?.Nickname,
    })

    const userFullName = user?.name

    // Use fallbacks to determine the best email
    const email = Student?.Email || user?.idTokenClaims?.email
    const userId = Oid || user?.idTokenClaims?.sub!

    // Determine the user's roles
    const appRoles = AccountAppRoles?.map((r) => r.AppRole.Name) as AppRole[]
    const clubRoles = AccountClubRoles?.map((r) => ({
      clubId: r.ClubId,
      name: r.ClubRole.Name as unknown as ClubRole[],
    }))

    return {
      UserId: userId,
      PrimaryStudentId,
      isCalendarLinked: !!calendar,
      calendar,
      FullName: accountFullName || userFullName,
      Student,
      ...Address,
      Email: email,
      appRoles,
      clubRoles,
    }
  }, [user, data])

  return useMemo(
    () => ({
      account,
      ...query,
      loading: query.loading || isAuthLoading,
    }),
    [account, isAuthLoading, query]
  )
}
