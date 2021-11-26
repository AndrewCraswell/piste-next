import { AccountInfo, IPublicClientApplication } from "@azure/msal-browser"
import { IdTokenClaims } from "@azure/msal-common"
import { useMsal } from "@azure/msal-react"
import { useEffect, useState } from "react"
import { User } from "types"

type MsalAccount = Partial<
  Pick<AccountInfo, "homeAccountId" | "localAccountId" | "username">
>

function getUserMetadata(
  msal: IPublicClientApplication,
  accounts: MsalAccount[]
): User | null {
  if (msal && accounts?.length) {
    let account = msal.getAllAccounts()[0]
    const claims = account?.idTokenClaims || ({} as IdTokenClaims)

    return {
      username: account?.username || "",
      idTokenClaims: claims,
    }
  }

  return null
}

export const useAuthenticatedUser = (): User | null => {
  const { instance, accounts } = useMsal()
  const [user, setUser] = useState<User | null>(
    getUserMetadata(instance, accounts)
  )

  useEffect(() => {
    const user = getUserMetadata(instance, accounts)
    setUser(user)
  }, [accounts, instance])

  return user
}
