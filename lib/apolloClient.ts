import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client"
import { getBaseUrl } from "./getBaseUrl"

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: new HttpLink({
      uri: `${getBaseUrl()}/api/graphql`,
      headers: {
        lang: "en",
      },
    }),
    cache: new InMemoryCache(),
    connectToDevTools: true,
  })
}

export default createApolloClient
