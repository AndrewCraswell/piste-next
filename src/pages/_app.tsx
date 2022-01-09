import type { AppProps } from "next/app"
import { ApolloProvider } from "@apollo/client"
import { initializeIcons } from "@fluentui/react"
import { useApollo } from "$lib"
import {
  AppShell,
  AuthenticatedApp,
  OnboardingGate,
  ThemeProvider,
} from "$components"
import { Auth0Provider } from "@auth0/auth0-react"
import { getBaseUrl } from "$lib"
import { Provider } from "react-redux"
import { store } from "$store"

import "../styles/globals.css"
import "modern-normalize"

initializeIcons()

function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps)

  return (
    <Auth0Provider
      domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN as string}
      clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID as string}
      redirectUri={getBaseUrl()}
    >
      <ApolloProvider client={apolloClient}>
        <ThemeProvider>
          <Provider store={store}>
            <AuthenticatedApp>
              <OnboardingGate>
                <AppShell>
                  <Component {...pageProps} />
                </AppShell>
              </OnboardingGate>
            </AuthenticatedApp>
          </Provider>
        </ThemeProvider>
      </ApolloProvider>
    </Auth0Provider>
  )
}

export default App
