import type { NextPage } from "next"

import { PageTitle } from "$components"
import { useTitle } from "$hooks"

export const EditEvaluation: NextPage = () => {
  const pageTitle = "Edit evaluation"
  useTitle(pageTitle)

  return (
    <>
      <PageTitle>Edit evaluation</PageTitle>
    </>
  )
}

export default EditEvaluation
