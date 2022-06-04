import { formatFullName } from "$lib/formatFullName"
import { useAccountProfileQuery } from "$queries"
import { useAuth0 } from "@auth0/auth0-react"
import { useMemo } from "react"

export const useAccountProfile = () => {
  const { user, isLoading: isAuthLoading } = useAuth0()
  const { data, ...query } = useAccountProfileQuery({
    variables: {
      oid: user?.sub!,
    },
  })

  const account = useMemo(() => {
    let { Student, Oid, Address, PrimaryStudentId, calendar } =
      data?.Accounts[0] || {}

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
