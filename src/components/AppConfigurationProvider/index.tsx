import { LDProvider } from "launchdarkly-react-client-sdk"

export interface IAppConfigurationProviderProps {
  code: string
}

export const AppConfigurationProvider: React.FunctionComponent<
  IAppConfigurationProviderProps
> = ({ code, children }) => {
  return (
    <LDProvider
      clientSideID={code}
      options={{ bootstrap: "localStorage", streaming: true }}
    >
      {children}
    </LDProvider>
  )
}
