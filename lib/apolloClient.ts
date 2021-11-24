import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client"

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: new HttpLink({
      uri: process.env.NEXT_PUBLIC_GRAPHQL_API_URL,
      headers: {
        lang: "en",
      },
    }),
    cache: new InMemoryCache(),
  })
}

export default createApolloClient
