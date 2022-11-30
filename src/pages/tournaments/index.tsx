import { useTrackPisteMetric } from "$components/ApplicationInsightsProvider"
import { DefaultPageLayout } from "$components/AppShell/components"

export const TournamentsPage: React.FunctionComponent = () => {
  const pageTitle = "Tournaments"
  useTrackPisteMetric({ componentName: "TournamentsPage" })

  return (
    <>
      <DefaultPageLayout title={pageTitle}></DefaultPageLayout>
    </>
  )
}

export default TournamentsPage
