import { Body1, Text } from "@fluentui/react-components"

import { useGetAssessmentByIdQuery } from "$queries"
import styled from "@emotion/styled"
import { useParams } from "react-router-dom"
import { AssessmentResponseList } from "$components/AssessmentResponseList"
import { LinkButton } from "$components/LinkButton"
import { useTrackPisteMetric } from "$components/ApplicationInsightsProvider"
import { DefaultPageLayout } from "$components/AppShell/components"

const PageSection = styled.div`
  margin-top: 3em;
`

function ViewAssessmentPage() {
  const pageTitle = "View assessment"
  useTrackPisteMetric({ componentName: "ViewAssessmentPage" })
  const params = useParams()

  const assessmentId = params.assessmentId as string

  const { data: assessmentData, loading: isAssessmentLoading } =
    useGetAssessmentByIdQuery({
      variables: {
        id: assessmentId,
      },
      skip: !assessmentId,
    })

  const assessment = assessmentData?.assessments_assessments_by_pk
  // const hasAssessment = !!assessment
  // const metrics = hasAssessment
  //   ? assessmentData.assessments_assessments_by_pk?.assessment_metrics!
  //   : []

  if (!isAssessmentLoading && !assessment) {
    return <Body1>No assessment found.</Body1>
  }

  return (
    <DefaultPageLayout title={pageTitle}>
      <Body1 block>{assessment?.description}</Body1>

      <PageSection>
        <LinkButton
          appearance="primary"
          href={`/assessments/${assessmentId}/submit/`}
        >
          Start assessment
        </LinkButton>
      </PageSection>

      {/* <PageSection>
        <Text as="h2" size={400} weight="semibold" block>
          Assessment metrics
        </Text>
        TODO: Render metrics cards
      </PageSection>

      <PageSection>
        <Text as="h2" size={400} weight="semibold" block>
          Fencer cohorts
        </Text>
        TODO: Render cohort cards
      </PageSection> */}

      <PageSection>
        <Text as="h2" size={400} weight="semibold" block>
          Evaluations history
        </Text>
        <AssessmentResponseList assessmentId={assessmentId} />
      </PageSection>
    </DefaultPageLayout>
  )
}

export default ViewAssessmentPage
