import { useMemo } from "react"
import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
  ApolloCache,
} from "@apollo/client"
import { RetryLink } from "@apollo/client/link/retry"
import { BatchHttpLink } from "@apollo/client/link/batch-http"
import { setContext } from "@apollo/client/link/context"
import { useMsal } from "@azure/msal-react"
import { IPublicClientApplication } from "@azure/msal-browser"
import { msalSilentRequest } from "./msalClient"

type MsalAcquireTokenSilent = IPublicClientApplication["acquireTokenSilent"]

export function createApolloClient(tokenHandler?: MsalAcquireTokenSilent) {
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
  tokenHandler?: MsalAcquireTokenSilent
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
  tokenHandler?: MsalAcquireTokenSilent
) => {
  return setContext(async (_, { headers, ...context }) => {
    const allHeaders = {
      ...headers,
    }

    try {
      const token = tokenHandler
        ? await tokenHandler(msalSilentRequest)
        : undefined

      if (token?.accessToken) {
        allHeaders.Authorization = `Bearer ${token.accessToken}`
      }
    } catch (e) {
      console.error(e)
    }

    return {
      headers: allHeaders,
      ...context,
    }
  })
}

export function useApollo() {
  const { instance: msal } = useMsal()

  const store = useMemo(
    () => initializeApollo({}, msal.acquireTokenSilent),
    [msal.acquireTokenSilent]
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
