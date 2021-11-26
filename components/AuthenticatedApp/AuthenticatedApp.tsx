import { PrimaryButton } from "@fluentui/react"
import React from "react"

import {
  useMsal,
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
  useMsalAuthentication,
} from "@azure/msal-react"
import { InteractionStatus, InteractionType } from "@azure/msal-browser"

export const AuthenticatedApp: React.FunctionComponent = ({ children }) => {
  const { login } = useMsalAuthentication(InteractionType.Popup, {})
  const { inProgress } = useMsal()

  return (
    <>
      <AuthenticatedTemplate>{children}</AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        {[InteractionStatus.Startup, InteractionStatus.HandleRedirect].includes(
          inProgress
        ) && <span>Loading...</span>}
        {[InteractionStatus.None, InteractionStatus.Login].includes(
          inProgress
        ) && (
          <PrimaryButton
            onClick={() => {
              login()
            }}
          >
            Sign in
          </PrimaryButton>
        )}
      </UnauthenticatedTemplate>
    </>
  )
}

export default React.memo(AuthenticatedApp)
