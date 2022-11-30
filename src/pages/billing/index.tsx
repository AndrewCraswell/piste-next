import { useTrackPisteMetric } from "$components/ApplicationInsightsProvider"
import { DefaultPageLayout } from "$components/AppShell/components"

const BillingPage: React.FunctionComponent = () => {
  const pageTitle = "Billing"
  useTrackPisteMetric({ componentName: "BillingPage" })

  return <DefaultPageLayout title={pageTitle}></DefaultPageLayout>
}

export default BillingPage
