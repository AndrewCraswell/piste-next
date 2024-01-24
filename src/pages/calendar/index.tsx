import { useTrackPisteMetric } from "$components/ApplicationInsightsProvider"
import { DefaultPageLayout } from "$components/AppShell/components"
function CalendarPage() {
  const pageTitle = "Calendar"
  useTrackPisteMetric({ componentName: "CalendarPage" })

  return (
    <DefaultPageLayout title={pageTitle}>
      <div style={{ width: "100%", height: "80vh" }}></div>
    </DefaultPageLayout>
  )
}

export default CalendarPage
