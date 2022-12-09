import { appInsights } from "$components/ApplicationInsightsProvider"
import { msalLoginRequest } from "$lib/msalClient"
import { InteractionType } from "@azure/msal-browser"
import { MsalAuthenticationTemplate, useMsal } from "@azure/msal-react"
import React from "react"

export const AuthenticatedApp: React.FunctionComponent = ({ children }) => {
  const { accounts, instance: msal } = useMsal()
  // TODO: Write a useMsalAccount() hook

  const account = accounts.length ? accounts[0] : null
  if (account && account.idTokenClaims?.sub) {
    appInsights.setAuthenticatedUserContext(
      account.idTokenClaims.sub!,
      undefined,
      true
    )

    msal.setActiveAccount(account)
  }

  return (
    <MsalAuthenticationTemplate
      interactionType={InteractionType.Redirect}
      authenticationRequest={msalLoginRequest}
      errorComponent={() => (
        <span>
          An error was encountered while logging in. Please try again later.
        </span>
      )}
      loadingComponent={() => <span>Logging in...</span>}
    >
      {children}
    </MsalAuthenticationTemplate>
  )
}

export default React.memo(AuthenticatedApp)
