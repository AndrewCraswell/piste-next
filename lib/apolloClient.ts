import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client"

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: new HttpLink({
      uri: `${process.env.NEXT_PUBLIC_BASE_URL}/api/graphql`,
      headers: {
        lang: "en",
      },
    }),
    cache: new InMemoryCache(),
    connectToDevTools: true,
  })
}

export default createApolloClient
