export type User = {
  username: string
  idTokenClaims: IdTokenClaims
}

export type IdTokenClaims = {
  oid?: string
  family_name?: string
  given_name?: string
  name?: string
  emails?: string[]
  idp?: string
  exp?: number
  iss?: string
}
