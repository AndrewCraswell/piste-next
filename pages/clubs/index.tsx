import { PageTitle } from "$components"
import { useTitle } from "$hooks"
import type { NextPage } from "next"

const Clubs: NextPage = () => {
  const pageTitle = "Clubs"
  useTitle(pageTitle)

  return (
    <>
      <PageTitle>{pageTitle}</PageTitle>
    </>
  )
}

export default Clubs
