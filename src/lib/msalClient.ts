import {
  RedirectRequest,
  SilentRequest,
  Configuration,
  PublicClientApplication,
} from "@azure/msal-browser"

import { getBaseUrl } from "./getBaseUrl"

// domain={import.meta.env.VITE_AUTH0_DOMAIN}
// clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
// audience={import.meta.env.VITE_AUTH0_HASURA_AUDIENCE}

// By caching this data, we can improve performance by avoiding a web request
// This data is cached from: https://login.fencing.club/fencing.club/b2c_1_signupsignin/v2.0/.well-known/openid-configuration
const wellKnownResponse = `
{
  "issuer": "https://login.fencing.club/2570213d-1e98-4c4e-a812-009627feed82/v2.0/",
  "authorization_endpoint": "https://login.fencing.club/fencing.club/b2c_1_signupsignin/oauth2/v2.0/authorize",
  "token_endpoint": "https://login.fencing.club/fencing.club/b2c_1_signupsignin/oauth2/v2.0/token",
  "end_session_endpoint": "https://login.fencing.club/fencing.club/b2c_1_signupsignin/oauth2/v2.0/logout",
  "jwks_uri": "https://login.fencing.club/fencing.club/b2c_1_signupsignin/discovery/v2.0/keys",
  "response_modes_supported": [
    "query",
    "fragment",
    "form_post"
  ],
  "response_types_supported": [
    "code",
    "code id_token",
    "code token",
    "code id_token token",
    "id_token",
    "id_token token",
    "token",
    "token id_token"
  ],
  "scopes_supported": [
    "openid"
  ],
  "subject_types_supported": [
    "pairwise"
  ],
  "id_token_signing_alg_values_supported": [
    "RS256"
  ],
  "token_endpoint_auth_methods_supported": [
    "client_secret_post",
    "client_secret_basic"
  ],
  "claims_supported": [
    "idp",
    "emails",
    "name",
    "oid",
    "sub",
    "tfp",
    "iss",
    "iat",
    "exp",
    "aud",
    "acr",
    "nonce",
    "auth_time"
  ]
}
`

export const msalLoginRequest: RedirectRequest = {
  prompt: "select_account",
  scopes: ["profile", "openid"],
  state: window.location.origin,
}

export const msalSilentRequest: SilentRequest = {
  scopes: ["user", "profile"],
}

const msalConfig: Configuration = {
  auth: {
    clientId: "65316ec4-56b2-4cc7-a1c0-bd5b4a5b8213", // TODO: Parameterize the ClientId
    authority: "https://login.fencing.club/fencing.club/B2C_1_SignUpSignIn",
    knownAuthorities: ["login.fencing.club"],
    redirectUri: getBaseUrl(), // TODO: Redirect to Azure Function if it's a preview env
    authorityMetadata: wellKnownResponse,
  },
  cache: {
    cacheLocation: "localStorage",
  },
}

export const msalClient = new PublicClientApplication(msalConfig)
