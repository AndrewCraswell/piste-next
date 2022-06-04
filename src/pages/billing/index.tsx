import { PageTitle } from "$components/PageTitle"
import { useTitle } from "$hooks"

const BillingPage: React.FunctionComponent = () => {
  const pageTitle = "Billing"
  useTitle(pageTitle)

  return (
    <>
      <PageTitle>{pageTitle}</PageTitle>
    </>
  )
}

export default BillingPage
