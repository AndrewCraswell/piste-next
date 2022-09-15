import { Route, Routes as Router } from "react-router-dom"
import loadable from "@loadable/component"
import { AppShell } from "$components/AppShell"
import { Body1 } from "@fluentui/react-components"

const OverviewPage = loadable(() => import("./pages/overview"))
const BillingPage = loadable(() => import("./pages/billing"))
const CalendarPage = loadable(() => import("./pages/calendar"))
const ClubsPage = loadable(() => import("./pages/clubs"))
const ProfilePage = loadable(() => import("./pages/profile"))
const AssessmentsPage = loadable(() => import("./pages/assessments"))
const ViewAssessmentPage = loadable(
  () => import("./pages/assessments/assessment")
)
const SubmitEvaluationPage = loadable(
  () => import("./pages/assessments/assessment/submit")
)
const EditEvaluationPage = loadable(
  () => import("./pages/assessments/assessment/edit")
)
const TournamentsPage = loadable(() => import("./pages/tournaments"))
const OnboardingPage = loadable(() => import("./pages/onboarding"))
const AthleteOnboardingPage = loadable(
  () => import("./pages/onboarding/athlete")
)

export const Routes: React.FunctionComponent = () => {
  return (
    <Router>
      {/* Root route */}
      <Route path="/" element={<AppShell />}>
        <Route path="/" element={<OverviewPage />} />

        <Route path="calendar" element={<CalendarPage />} />
        <Route path="clubs" element={<ClubsPage />} />
        <Route path="billing" element={<BillingPage />} />

        {/* Assessments routes */}
        <Route path="assessments" element={<AssessmentsPage />} />
        <Route
          path="assessments/:assessmentId"
          element={<ViewAssessmentPage />}
        />
        <Route
          path="assessments/:assessmentId/submit"
          element={<SubmitEvaluationPage />}
        />
        <Route
          path="assessments/:assessmentId/:evaluationId"
          element={<EditEvaluationPage />}
        />

        <Route path="profile" element={<ProfilePage />} />

        <Route path="tournaments" element={<TournamentsPage />} />

        {/* Onboarding routes */}
        <Route path="onboarding" element={<OnboardingPage />} />
        <Route path="onboarding/athlete" element={<AthleteOnboardingPage />}>
          <Route path=":stepId" element={<AthleteOnboardingPage />}></Route>
        </Route>
        <Route path="onboarding/family" element={<p>Family onboarding page</p>}>
          <Route path=":stepId" element={<p>Family onboarding page</p>} />
        </Route>
        <Route path="onboarding/club" element={<p>Club onboarding page</p>}>
          <Route path=":stepId" element={<p>Club onboarding page</p>} />
        </Route>

        <Route path="*" element={<Body1>Page not found.</Body1>} />
      </Route>
    </Router>
  )
}
