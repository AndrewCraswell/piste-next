import type { NextPage } from "next"
import { PageTitle } from "$components"
import { useTitle } from "$hooks"

export const Assessments: NextPage = () => {
  const pageTitle = "Assessments"
  useTitle(pageTitle)

  return (
    <>
      <PageTitle>{pageTitle}</PageTitle>
    </>
  )
}

export default Assessments
