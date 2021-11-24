import type { AppProps } from "next/app"
import { ApolloProvider } from "@apollo/client"
import { initializeIcons } from "@fluentui/react"

import { useApollo } from "$lib/apollo"
import { ThemeProvider } from "$components"

import "../styles/globals.css"
import "modern-normalize"

initializeIcons()

function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState)

  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default App
