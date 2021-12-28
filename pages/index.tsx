import type { NextPage } from "next"
import { Text } from "@fluentui/react"

import { initializeApollo } from "$lib/apollo"

const Home: NextPage = () => {
  return (
    <>
      <Text as="h1">Dashboard</Text>
    </>
  )
}

export const getStaticProps = async () => {
  const apolloClient = initializeApollo()
  return { props: { initialApolloState: apolloClient.cache.extract() } }
}

export default Home
