import { useAuth0 } from "@auth0/auth0-react"
import { LDProvider, useFlags } from "launchdarkly-react-client-sdk"

export interface IAppConfigurationProviderProps {
  code: string
}

export const AppConfigurationProvider: React.FunctionComponent<
  IAppConfigurationProviderProps
> = ({ code, children }) => {
  const { user } = useAuth0()
  const { email, sub: userId } = user || {}

  return (
    <LDProvider
      user={{
        key: userId,
        email,
      }}
      clientSideID={code}
      options={{
        bootstrap: "localStorage",
        streaming: true,
        useReport: true,
      }}
      deferInitialization
    >
      {children}
    </LDProvider>
  )
}
