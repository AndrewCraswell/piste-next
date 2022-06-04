import { useMemo } from "react"
import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
  ApolloCache,
} from "@apollo/client"
import { RetryLink } from "@apollo/client/link/retry"
import { BatchHttpLink } from "@apollo/client/link/batch-http"
import { Auth0ContextInterface, useAuth0 } from "@auth0/auth0-react"
import { setContext } from "@apollo/client/link/context"

export function createApolloClient(
  tokenHandler?: Auth0ContextInterface["getAccessTokenSilently"]
) {
  return new ApolloClient({
    link: ApolloLink.from([
      authMiddlewareFactory(tokenHandler),
      new RetryLink(),
      new BatchHttpLink({
        uri: import.meta.env.VITE_GRAPHQL_API_URL,
        headers: {
          lang: "en",
        },
      }),
    ]),
    cache: new InMemoryCache({
      typePolicies: {
        AccountAppRoles: {
          keyFields: ["AppRoleId"],
        },
        AccountClubRoles: {
          keyFields: ["ClubRoleId"],
        },
        Accounts: {
          keyFields: ["Oid"],
        },
        Addresses: {
          keyFields: ["AddressId"],
        },
        AppRoles: {
          keyFields: ["RoleId"],
        },
        AssociationMembers: {
          keyFields: ["AssociationMemberId"],
        },
        ClubLocations: {
          keyFields: ["LocationId"],
        },
        ClubRoles: {
          keyFields: ["RoleId"],
        },
        Clubs: {
          keyFields: ["ClubId"],
        },
        Students: {
          keyFields: ["StudentId"],
        },
      },
    }),
    connectToDevTools: true,
  })
}

let apolloClient: ApolloClient<any>

export function initializeApollo(
  initialState = {},
  tokenHandler?: Auth0ContextInterface["getAccessTokenSilently"]
) {
  const _apolloClient = apolloClient ?? createApolloClient(tokenHandler)

  if (initialState) {
    const existingCache = _apolloClient.extract()
    _apolloClient.cache.restore({ ...existingCache, ...initialState })
  }

  if (!apolloClient) apolloClient = _apolloClient
  return _apolloClient
}

export const authMiddlewareFactory = (
  tokenHandler?: Auth0ContextInterface["getAccessTokenSilently"]
) => {
  return setContext(async (_, { headers, ...context }) => {
    const token = tokenHandler ? await tokenHandler() : undefined

    const allHeaders = {
      ...headers,
    }

    if (token) {
      allHeaders.Authorization = `Bearer ${token}`
    }

    return {
      headers: allHeaders,
      ...context,
    }
  })
}

export function useApollo() {
  const { getAccessTokenSilently } = useAuth0()

  const store = useMemo(
    () => initializeApollo({}, getAccessTokenSilently),
    [getAccessTokenSilently]
  )

  return store
}

export function cacheEvicter(options: {
  typeName: string
  idName?: string
  id: string
}) {
  const { id, idName = "id", typeName } = options

  return (cache: ApolloCache<any>) => {
    const normalizedId = cache.identify({
      [idName]: id,
      __typename: typeName,
    })

    const result = cache.evict({ id: normalizedId })

    if (result) {
      cache.gc()
    } else {
      console.warn(
        `Unable to evict item from cache: { __typename: "${typeName}", ${idName}: "${id}" }`
      )
    }
  }
}
