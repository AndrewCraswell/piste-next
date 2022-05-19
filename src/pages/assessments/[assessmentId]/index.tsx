import type { NextPage } from "next"
import { PageTitle } from "$components"
import { useTitle } from "$hooks"

export const ViewAssessment: NextPage = () => {
  const pageTitle = "View assessment"
  useTitle(pageTitle)

  return (
    <>
      <PageTitle>{pageTitle}</PageTitle>
    </>
  )
}

export default ViewAssessment
