import type { AppProps } from "next/app"
import { ApolloProvider } from "@apollo/client"
import { initializeIcons } from "@fluentui/react"
import { useApollo } from "$lib/apollo"
import {
  AppShell,
  AuthenticatedApp,
  OnboardingGate,
  ThemeProvider,
} from "$components"
import { Auth0Provider } from "@auth0/auth0-react"

import "../styles/globals.css"
import "modern-normalize"

initializeIcons()

function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState)

  let baseUrl = process.env.NEXT_PUBLIC_BASE_URL
  if (
    ["preview", "development"].includes(
      process.env.NEXT_PUBLIC_VERCEL_ENV ?? ""
    )
  ) {
    baseUrl = `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  }

  console.log(`VERCEL_ENV = ${process.env.NEXT_PUBLIC_VERCEL_ENV}`)
  console.log(`VERCEL_URL = ${process.env.NEXT_PUBLIC_VERCEL_URL}`)
  console.log(`BASE_URL = ${baseUrl}`)

  return (
    <Auth0Provider
      domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN as string}
      clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID as string}
      redirectUri={baseUrl}
    >
      <ApolloProvider client={apolloClient}>
        <ThemeProvider>
          <AuthenticatedApp>
            <OnboardingGate>
              <AppShell>
                <Component {...pageProps} />
              </AppShell>
            </OnboardingGate>
          </AuthenticatedApp>
        </ThemeProvider>
      </ApolloProvider>
    </Auth0Provider>
  )
}

export default App
