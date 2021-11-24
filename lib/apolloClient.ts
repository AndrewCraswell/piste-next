import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: new HttpLink({
      uri: "https://piste.hasura.app/v1/graphql", //publicRuntimeConfig.GRAPHQL_API_URL,
      headers: {
        lang: "en",
      },
    }),
    cache: new InMemoryCache(),
  });
}

export default createApolloClient;
