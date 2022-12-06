import { formatFullName } from "$lib/formatFullName"
import { useGetAccountProfileQuery } from "$queries"
import { useAuth0 } from "@auth0/auth0-react"
import { useMemo } from "react"

export const useAccountProfile = () => {
  const { user, isLoading: isAuthLoading } = useAuth0()
  const { data, ...query } = useGetAccountProfileQuery({
    variables: {
      oid: user?.sub!,
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

    const userFullName =
      user?.name ||
      formatFullName({
        firstName: user?.given_name,
        lastName: user?.family_name,
        nickname: user?.nickname,
      })

    // Use fallbacks to determine the best email
    const email = Student?.Email || user?.email
    const userId = Oid || user?.sub!

    // Determine the user's roles
    const appRoles = AccountAppRoles?.map((r) => r.AppRole.Name)
    const clubRoles = AccountClubRoles?.map((r) => ({
      clubId: r.ClubId,
      name: r.ClubRole.Name,
    }))

    return {
      UserId: userId,
      PrimaryStudentId,
      isCalendarLinked: !!calendar,
      calendar,
      FullName: accountFullName || userFullName,
      Student,
      ...Address,
      Picture: user?.picture,
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
