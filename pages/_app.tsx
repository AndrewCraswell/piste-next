import type { AppProps } from "next/app"
import { ApolloProvider } from "@apollo/client"
import { initializeIcons } from "@fluentui/react"
import { MsalProvider } from "@azure/msal-react"

import { useApollo } from "$lib/apollo"
import {
  AppShell,
  AuthenticatedApp,
  OnboardingGate,
  ThemeProvider,
} from "$components"
import { msal } from "$lib/authConfig"

import "../styles/globals.css"
import "modern-normalize"

initializeIcons()

function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState)

  return (
    <ApolloProvider client={apolloClient}>
      <MsalProvider instance={msal}>
        <ThemeProvider>
          <AuthenticatedApp>
            {/* <OnboardingGate> */}
            <AppShell>
              <Component {...pageProps} />
            </AppShell>
            {/* </OnboardingGate> */}
          </AuthenticatedApp>
        </ThemeProvider>
      </MsalProvider>
    </ApolloProvider>
  )
}

export default App
