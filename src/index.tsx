import React from "react"
import { createRoot } from "react-dom/client"
import { initializeIcons } from "@fluentui/react"

import { Auth0Provider } from "@auth0/auth0-react"
import { getBaseUrl } from "$lib/getBaseUrl"
import { Provider } from "react-redux"
import { store } from "$store"
import { BrowserRouter } from "react-router-dom"
import { AuthenticatedApp } from "$components/AuthenticatedApp"
import { AuthorizedApolloProvider } from "$components/AuthorizedApolloProvider"
import { AppThemeProvider } from "$components/AppThemeProvider"
import { ApplicationInsightsProvider } from "$components/ApplicationInsightsProvider"
import { Routes } from "./Routes"

import "./styles/globals.scss"
import "modern-normalize"

initializeIcons()

const container = document.getElementById("root")!
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <ApplicationInsightsProvider>
      <Auth0Provider
        domain={import.meta.env.VITE_AUTH0_DOMAIN}
        clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
        authorizationParams={{
          redirect_uri: getBaseUrl(),
          audience: import.meta.env.VITE_AUTH0_HASURA_AUDIENCE,
        }}
        cacheLocation="localstorage"
      >
        <BrowserRouter>
          <AuthorizedApolloProvider>
            <AppThemeProvider>
              <Provider store={store}>
                <AuthenticatedApp>
                  <Routes />
                </AuthenticatedApp>
              </Provider>
            </AppThemeProvider>
          </AuthorizedApolloProvider>
        </BrowserRouter>
      </Auth0Provider>
    </ApplicationInsightsProvider>
  </React.StrictMode>
)
