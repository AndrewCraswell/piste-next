import React from "react"
import { render } from "react-dom"
import { initializeIcons } from "@fluentui/react"
import { MsalProvider } from "@azure/msal-react"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"

import { store } from "$store"
import { AuthenticatedApp } from "$components/AuthenticatedApp"
import { AuthorizedApolloProvider } from "$components/AuthorizedApolloProvider"
import { AppThemeProvider } from "$components/AppThemeProvider"
import { ApplicationInsightsProvider } from "$components/ApplicationInsightsProvider"
import { Routes } from "./Routes"
import { msalClient } from "$lib/msalClient"

import "./styles/globals.scss"
import "modern-normalize"

initializeIcons()

render(
  <React.StrictMode>
    <ApplicationInsightsProvider>
      <BrowserRouter>
        <AppThemeProvider>
          <Provider store={store}>
            <MsalProvider instance={msalClient}>
              <AuthenticatedApp>
                <AuthorizedApolloProvider>
                  <Routes />
                </AuthorizedApolloProvider>
              </AuthenticatedApp>
            </MsalProvider>
          </Provider>
        </AppThemeProvider>
      </BrowserRouter>
    </ApplicationInsightsProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
