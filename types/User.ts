export type User = {
  username: string
  idTokenClaims: IdTokenClaims
}

export type IdTokenClaims = {
  oid?: string
}
