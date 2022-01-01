import type { NextPage } from "next"
import { initializeApollo } from "$lib/apollo"
import { PageTitle } from "$components"
import { useTitle } from "$hooks"

export const <FTName | capitalize>: NextPage = () => {
  const pageTitle = "<FTName | capitalize>"
  useTitle(pageTitle)

  return (
    <>
      <PageTitle>{pageTitle}</PageTitle>
    </>
  )
}

export const getStaticProps = async () => {
  const apolloClient = initializeApollo()
  return { props: { initialApolloState: apolloClient.cache.extract() } }
}

export default <FTName | capitalize>
