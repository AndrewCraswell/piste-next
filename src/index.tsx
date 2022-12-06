import React from "react"
import { render } from "react-dom"
import { initializeIcons } from "@fluentui/react"

import { Auth0Provider } from "@auth0/auth0-react"
import { getBaseUrl } from "$lib/getBaseUrl"
import { Provider } from "react-redux"
import { store } from "$store"
import { BrowserRouter, Routes } from "react-router-dom"
import { AuthenticatedApp } from "$components/AuthenticatedApp"
import { AuthorizedApolloProvider } from "$components/AuthorizedApolloProvider"
import { AppThemeProvider } from "$components/AppThemeProvider"
import { ApplicationInsightsProvider } from "$components/ApplicationInsightsProvider"

import "./styles/globals.scss"
import "modern-normalize"

initializeIcons()

render(
  <React.StrictMode>
    <ApplicationInsightsProvider>
      <Auth0Provider
        domain={import.meta.env.VITE_AUTH0_DOMAIN}
        clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
        redirectUri={getBaseUrl()}
        cacheLocation="localstorage"
        audience={import.meta.env.VITE_AUTH0_HASURA_AUDIENCE}
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
  </React.StrictMode>,
  document.getElementById("root")
)
