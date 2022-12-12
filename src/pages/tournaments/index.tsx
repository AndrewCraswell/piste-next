import { useTrackPisteMetric } from "$components/ApplicationInsightsProvider"
import { DefaultPageLayout } from "$components/AppShell/components"

function TournamentsPage() {
  const pageTitle = "Tournaments"
  useTrackPisteMetric({ componentName: "TournamentsPage" })

  return (
    <>
      <DefaultPageLayout title={pageTitle}></DefaultPageLayout>
    </>
  )
}

export default TournamentsPage
