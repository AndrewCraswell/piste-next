import type { NextPage } from "next"

import { PageTitle } from "$components"
import { useTitle } from "$hooks"

export const EditAssessment: NextPage = () => {
  const pageTitle = "Edit assessment"
  useTitle(pageTitle)

  return (
    <>
      <PageTitle>Edit assessment</PageTitle>
    </>
  )
}

export default EditAssessment
