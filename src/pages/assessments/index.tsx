import { Body1, Text } from "@fluentui/react-components"
import styled from "@emotion/styled"

import { useGetAssessmentsQuery } from "$queries"
import { IAssessmentMetadata } from "$types"
import { formatFullName } from "$lib/formatFullName"
import {
  AssessmentCardSkeleton,
  AssessmentCard,
} from "$components/AssessmentCard"
import { useTrackPisteMetric } from "$components/ApplicationInsightsProvider"
import { DefaultPageLayout } from "$components/AppShell/components"

const AssessmentsGrid = styled.div`
  display: grid;
  grid-gap: 1rem;
  margin-top: 2rem;
  grid-template-columns: repeat(auto-fill, 280px);
`

const AssessmentsPage: React.FunctionComponent = () => {
  const pageTitle = "Assessments"
  useTrackPisteMetric({ componentName: "AssessmentsPage" })

  const { data, loading: isLoadingAssessments } = useGetAssessmentsQuery()
  const hasAssessments =
    data?.assessments_assessments && data.assessments_assessments.length > 0

  const assessments: IAssessmentMetadata[] =
    data?.assessments_assessments.map((a) => ({
      id: a.id,
      title: a.title,
      description: a.description,
      createdAt: a.created_at,
      metricsCount: a.assessment_metrics.length,
      cohortsCount: a.assessment_cohorts.length,
      authorName: formatFullName({
        firstName: a.account?.Student?.FirstName,
        lastName: a.account?.Student?.LastName,
        nickname: a.account?.Student?.Nickname,
      }),
    })) || []

  return (
    <DefaultPageLayout title={pageTitle}>
      <Body1 block style={{ marginBottom: "1rem", maxWidth: 600 }}>
        Assessments allow coaches to evaluate students against a set of
        skill-based criteria. The results should help fencers understand their
        skills development and how it impacts their journey.
      </Body1>

      <AssessmentsGrid>
        {isLoadingAssessments ? (
          <AssessmentCardSkeleton />
        ) : (
          <>
            {hasAssessments ? (
              <>
                {assessments.map((a) => (
                  <AssessmentCard key={a.id} assessment={a} />
                ))}
              </>
            ) : (
              <Text>No assessments yet.</Text>
            )}
          </>
        )}
      </AssessmentsGrid>
    </DefaultPageLayout>
  )
}

export default AssessmentsPage
