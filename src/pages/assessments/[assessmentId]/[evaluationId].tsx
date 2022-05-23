import type { NextPage } from "next"
import { Text } from "@fluentui/react-components"

import { PageTitle } from "$components"
import { useTitle } from "$hooks"

export const EditEvaluation: NextPage = () => {
  const pageTitle = "Edit evaluation"
  useTitle(pageTitle)

  return (
    <>
      <PageTitle>Edit evaluation</PageTitle>
      <Text>TODO: Add an edit page</Text>
    </>
  )
}

export default EditEvaluation
