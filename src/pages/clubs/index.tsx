import { useTrackPisteMetric } from "$components/ApplicationInsightsProvider"
import { DefaultPageLayout } from "$components/AppShell/components"

const ClubsPage: React.FunctionComponent = () => {
  const pageTitle = "Clubs"
  useTrackPisteMetric({ componentName: "ClubsPage" })

  return <DefaultPageLayout title={pageTitle}></DefaultPageLayout>
}

export default ClubsPage
