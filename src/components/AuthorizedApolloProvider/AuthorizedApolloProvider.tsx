import { useApollo } from "$lib"
import { ApolloProvider } from "@apollo/client"

export interface IAuthorizedApolloProviderProps {
  pageProps: any
}

export const AuthorizedApolloProvider: React.FunctionComponent<
  IAuthorizedApolloProviderProps
> = ({ children, pageProps }) => {
  const client = useApollo(pageProps)

  return <ApolloProvider client={client}>{children}</ApolloProvider>
}
