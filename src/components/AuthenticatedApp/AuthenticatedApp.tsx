import { appInsights } from "$components/ApplicationInsightsProvider"
import { useAuth0 } from "@auth0/auth0-react"
import React from "react"

export const AuthenticatedApp: React.FunctionComponent = ({ children }) => {
  const { loginWithRedirect, isLoading, user, error } = useAuth0()

  if (error) {
    return (
      <span>
        An error was encountered while logging in. Please try again later.
      </span>
    )
  }

  if (isLoading) {
    return null
  }

  if (user) {
    if (user.sub) {
      console.log(user)
      appInsights.setAuthenticatedUserContext(
        user.sub.replace("|", ""),
        undefined,
        true
      )
    }

    return <>{children}</>
  } else {
    loginWithRedirect({
      prompt: "select_account",
      scope: "profile email openid",
    })

    return null
  }
}

export default React.memo(AuthenticatedApp)
