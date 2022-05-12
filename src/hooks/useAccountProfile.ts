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
    let { AccountStudent, Oid, Address, PrimaryStudentId } =
      data?.Accounts[0] || {}

    // Use a series of fallbacks to determine the best full name
    const accountFullName = `${AccountStudent?.FirstName || ""} ${
      AccountStudent?.LastName || ""
    }`.trim()
    const userFullName =
      user?.name ||
      `${user?.given_name} ${user?.family_name}`.trim() ||
      user?.name ||
      user?.nickname

    // Use fallbacks to determine the best email
    const email = AccountStudent?.Email || user?.email

    return {
      UserId: Oid,
      PrimaryStudentId,
      FullName: accountFullName || userFullName,
      ...AccountStudent,
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
