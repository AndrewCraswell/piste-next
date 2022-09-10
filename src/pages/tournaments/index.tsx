import { useTitle } from "$hooks"
import { PageTitle } from "$components/PageTitle"
import { useTrackPisteMetric } from "$components/ApplicationInsightsProvider"

export const TournamentsPage: React.FunctionComponent = () => {
  const pageTitle = "Tournaments"
  useTitle(pageTitle)
  useTrackPisteMetric({ componentName: "TournamentsPage" })

  return (
    <>
      <PageTitle>{pageTitle}</PageTitle>
    </>
  )
}

export default TournamentsPage
