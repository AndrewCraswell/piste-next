import React from "react"
import { render } from "react-dom"
import { initializeIcons } from "@fluentui/react"

import { Auth0Provider } from "@auth0/auth0-react"
import { getBaseUrl } from "$lib/getBaseUrl"
import { Provider } from "react-redux"
import { store } from "$store"
import { BrowserRouter } from "react-router-dom"
import { App } from "./App"
import { AuthenticatedApp } from "$components/AuthenticatedApp"
import { AuthorizedApolloProvider } from "$components/AuthorizedApolloProvider"
import { ThemeProvider } from "$components/ThemeProvider"

import "./styles/globals.css"
import "modern-normalize"

initializeIcons()

render(
  <React.StrictMode>
    <Auth0Provider
      domain={import.meta.env.VITE_AUTH0_DOMAIN}
      clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
      redirectUri={getBaseUrl()}
      cacheLocation="localstorage"
      audience={import.meta.env.VITE_AUTH0_HASURA_AUDIENCE}
    >
      <BrowserRouter>
        <AuthorizedApolloProvider>
          <ThemeProvider>
            <Provider store={store}>
              <AuthenticatedApp>
                <App />
              </AuthenticatedApp>
            </Provider>
          </ThemeProvider>
        </AuthorizedApolloProvider>
      </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
)
