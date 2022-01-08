import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client"

function createApolloClient() {
  console.log("apolloClient")
  const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : process.env.NEXT_PUBLIC_BASE_URL
  console.log(`VERCEL_URL = ${process.env.NEXT_PUBLIC_VERCEL_URL}`)
  console.log(`BASE_URL = ${baseUrl}`)

  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: new HttpLink({
      uri: `${baseUrl}/api/graphql`,
      headers: {
        lang: "en",
      },
    }),
    cache: new InMemoryCache(),
    connectToDevTools: true,
  })
}

export default createApolloClient
