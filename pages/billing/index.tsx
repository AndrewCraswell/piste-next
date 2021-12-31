import { PageTitle } from "$components"
import { useTitle } from "$hooks"
import type { NextPage } from "next"

const Billing: NextPage = () => {
  const pageTitle = "Billing"
  useTitle(pageTitle)

  return (
    <>
      <PageTitle>{pageTitle}</PageTitle>
    </>
  )
}

export default Billing
