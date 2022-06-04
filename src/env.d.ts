/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BRANDING_NAME: string
  readonly VITE_SITE_NAME: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
