import { AccountInfo, IPublicClientApplication } from "@azure/msal-browser"
import { IdTokenClaims } from "@azure/msal-common"
import { useMsal } from "@azure/msal-react"
import { useEffect, useState } from "react"
import { Account } from "types"

type MsalAccount = Partial<
  Pick<AccountInfo, "homeAccountId" | "localAccountId" | "username">
>

function getUserMetadata(
  msal: IPublicClientApplication,
  accounts: MsalAccount[]
): Account | null {
  if (msal && accounts?.length) {
    const account = msal.getAllAccounts()[0]

    const claims: IdTokenClaims = account?.idTokenClaims ?? {}

    return {
      oid: claims?.oid || "",
      username: account?.username || "",
      idTokenClaims: claims,
    }
  }

  return null
}

export const useAuthenticatedUser = (): Account | null => {
  const { instance, accounts } = useMsal()
  const [user, setUser] = useState<Account | null>(
    getUserMetadata(instance, accounts)
  )

  useEffect(() => {
    const user = getUserMetadata(instance, accounts)
    setUser(user)
  }, [accounts, instance])

  return user
}
