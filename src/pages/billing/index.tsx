import { useTrackPisteMetric } from "$components/ApplicationInsightsProvider"
import { DefaultPageLayout } from "$components/AppShell/components"

function BillingPage() {
  const pageTitle = "Billing"
  useTrackPisteMetric({ componentName: "BillingPage" })

  return <DefaultPageLayout title={pageTitle}></DefaultPageLayout>
}

export default BillingPage
