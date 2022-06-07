/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BRANDING_NAME: string
  readonly VITE_SITE_NAME: string
  readonly VITE_GOOGLE_PLACES_API_KEY: string
  readonly VITE_AUTH0_CLIENT_ID: string
  readonly VITE_AUTH0_DOMAIN: string
  readonly VITE_GRAPHQL_API_URL: string
  readonly VITE_AUTH0_HASURA_AUDIENCE: string
  readonly VITE_APPLICATION_INSIGHTS_KEY: string
  readonly VITE_APPLICATION_INSIGHTS_CONNECTION_STRING: string
  readonly VITE_NYLAS_CLIENT_ID: string
  readonly VITE_NYLAS_API_URL: string
  readonly VITE_BACKEND_API_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
