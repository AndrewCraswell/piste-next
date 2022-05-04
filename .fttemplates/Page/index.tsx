import type { NextPage } from "next"
import { addApolloState, initializeApollo } from "$lib"
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

  // TODO: Perform query here
  // await apolloClient.query({
  //   query: SearchMembersDocument,
  //   variables: {
  //     filter: `%`,
  //     count: pageSize,
  //     offset: 0,
  //   },
  // })

  return addApolloState(apolloClient)
}

export default <FTName | capitalize>
