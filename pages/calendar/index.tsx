import { PageTitle } from "$components"
import { useTitle } from "$hooks"
import type { NextPage } from "next"

export const Calendar: NextPage = () => {
  const pageTitle = "Calendar"
  useTitle(pageTitle)

  return (
    <>
      <PageTitle>{pageTitle}</PageTitle>
    </>
  )
}

export default Calendar
