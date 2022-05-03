import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client"
import { RetryLink } from "@apollo/client/link/retry"
import { BatchHttpLink } from "@apollo/client/link/batch-http"
import { useAuth0 } from "@auth0/auth0-react"
import { setContext } from "@apollo/client/link/context"
import { getBaseUrl } from "$lib"

export interface IAuthorizedApolloProviderProps {}

export const AuthorizedApolloProvider: React.FunctionComponent<
  IAuthorizedApolloProviderProps
> = ({ children }) => {
  const { getAccessTokenSilently } = useAuth0()

  const authMiddleware = setContext(async (_, { headers, ...context }) => {
    const token = await getAccessTokenSilently()

    return {
      headers: {
        ...headers,
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      ...context,
    }
  })

  const client = new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: ApolloLink.from([
      authMiddleware,
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

  return <ApolloProvider client={client}>{children}</ApolloProvider>
}
