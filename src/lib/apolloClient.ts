import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client"
import { getBaseUrl } from "./getBaseUrl"
import { useMemo } from "react"

const APOLLO_STATE_PROP_NAME = "__APOLLO_STATE__"

export function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: new HttpLink({
      uri: `${getBaseUrl()}/api/graphql/`,
      headers: {
        lang: "en",
      },
    }),
    cache: new InMemoryCache(),
    connectToDevTools: true,
  })
}

let apolloClient: ApolloClient<any>

export function initializeApollo(initialState = {}) {
  const _apolloClient = apolloClient ?? createApolloClient()

  if (initialState) {
    const existingCache = _apolloClient.extract()
    _apolloClient.cache.restore({ ...existingCache, ...initialState })
  }

  if (typeof window === "undefined") return _apolloClient

  if (!apolloClient) apolloClient = _apolloClient
  return _apolloClient
}

export function addApolloState(client: ApolloClient<any>, pageProps: any) {
  if (pageProps?.props) {
    pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract()
  }

  return pageProps
}

export function useApollo(pageProps: any) {
  const state = pageProps[APOLLO_STATE_PROP_NAME]
  const store = useMemo(() => initializeApollo(state), [state])
  return store
}
