import { useTrackPisteMetric } from "$components/ApplicationInsightsProvider"
import { PageTitle } from "$components/PageTitle"
import { useTitle } from "$hooks"

const BillingPage: React.FunctionComponent = () => {
  const pageTitle = "Billing"
  useTitle(pageTitle)
  useTrackPisteMetric({ componentName: "BillingPage" })

  return (
    <>
      <PageTitle>{pageTitle}</PageTitle>
    </>
  )
}

export default BillingPage
