import { useApollo } from "$lib/apolloClient"
import { ApolloProvider } from "@apollo/client"
import { PropsWithChildren } from "react"

export function AuthorizedApolloProvider({ children }: PropsWithChildren<{}>) {
  const client = useApollo()

  return <ApolloProvider client={client}>{children}</ApolloProvider>
}
