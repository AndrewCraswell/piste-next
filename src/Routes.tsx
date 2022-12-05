import { Route, Routes as Router } from "react-router-dom"
import loadable from "@loadable/component"
import { AppShell } from "$components/AppShell"
import { Route404 } from "$components/ErrorPages/Route404"
import { ProtectedRbacRoute } from "$components/ProtectedRbacRoute"
import { useFeatureFlag } from "$hooks/configuration"

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
const UsersPage = loadable(() => import("./pages/users"))
const TournamentsPage = loadable(() => import("./pages/tournaments"))

export const Routes: React.FunctionComponent = () => {
  const { isEnabled: isUsersPageEnabled } = useFeatureFlag({
    key: "members-page",
    label: import.meta.env.MODE,
  })

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

        {isUsersPageEnabled && (
          <Route
            path="users"
            element={
              <ProtectedRbacRoute clubRoles={["Admin"]}>
                <UsersPage />
              </ProtectedRbacRoute>
            }
          />
        )}

        <Route path="profile" element={<ProfilePage />} />

        <Route path="tournaments" element={<TournamentsPage />} />

        <Route path="*" element={<Route404 />} />
      </Route>
    </Router>
  )
}

// TODO: Fetch app roles with profile
// TODO: Add hook to get club and club roles
