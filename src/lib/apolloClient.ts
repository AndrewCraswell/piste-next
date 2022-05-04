import { useMemo } from "react"
import { ApolloClient, ApolloLink, InMemoryCache } from "@apollo/client"
import { RetryLink } from "@apollo/client/link/retry"
import { BatchHttpLink } from "@apollo/client/link/batch-http"
import { Auth0ContextInterface, useAuth0 } from "@auth0/auth0-react"
import { setContext } from "@apollo/client/link/context"

import { getBaseUrl } from "$lib"

const APOLLO_STATE_PROP_NAME = "__APOLLO_STATE__"

export function createApolloClient(
  tokenHandler?: Auth0ContextInterface["getAccessTokenSilently"]
) {
  const isSsr = typeof window === "undefined"

  return new ApolloClient({
    ssrMode: isSsr,
    link: ApolloLink.from([
      authMiddlewareFactory(tokenHandler),
      new RetryLink(),
      new BatchHttpLink({
        uri: `${getBaseUrl()}/api/graphql/`,
        headers: {
          lang: "en",
        },
      }),
    ]),
    cache: new InMemoryCache(),
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

  if (typeof window === "undefined") return _apolloClient

  if (!apolloClient) apolloClient = _apolloClient
  return _apolloClient
}

export const authMiddlewareFactory = (
  tokenHandler?: Auth0ContextInterface["getAccessTokenSilently"]
) => {
  return setContext(async (_, { headers, ...context }) => {
    const isSsr = typeof window === "undefined"
    const token = tokenHandler ? await tokenHandler() : undefined

    const allHeaders = {
      ...headers,
    }

    if (token) {
      allHeaders.Authorization = `Bearer ${token}`
    } else if (isSsr) {
      const graphqlSecret = process.env.HASURA_GRAPHQL_ADMIN_SECRET
      if (graphqlSecret) {
        allHeaders["x-hasura-admin-secret"] = graphqlSecret
      }
    }

    return {
      headers: allHeaders,
      ...context,
    }
  })
}

export function addApolloState(
  client: ApolloClient<any>,
  pageProps: any = { props: {} }
) {
  if (pageProps?.props) {
    pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract()
  }

  return pageProps
}

export function useApollo(pageProps: any = {}) {
  const { getAccessTokenSilently } = useAuth0()

  const state = pageProps[APOLLO_STATE_PROP_NAME]

  const store = useMemo(
    () => initializeApollo(state, getAccessTokenSilently),
    [state, getAccessTokenSilently]
  )
  return store
}
