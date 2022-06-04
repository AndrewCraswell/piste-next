import { useApollo } from "$lib/apolloClient"
import { ApolloProvider } from "@apollo/client"

export const AuthorizedApolloProvider: React.FunctionComponent = ({
  children,
}) => {
  const client = useApollo()

  return <ApolloProvider client={client}>{children}</ApolloProvider>
}
