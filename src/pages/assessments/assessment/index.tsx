import { Body1, Text } from "@fluentui/react-components"

import { useTitle } from "$hooks"
import { useGetAssessmentByIdQuery } from "$queries"
import styled from "@emotion/styled"
import { useParams } from "react-router-dom"
import { AssessmentResponseList } from "$components/AssessmentResponseList"
import { LinkButton } from "$components/LinkButton"
import { PageTitle } from "$components/PageTitle"
import { useTrackPisteMetric } from "$components/ApplicationInsightsProvider"

const PageSection = styled.div`
  margin-top: 3em;
`

const ViewAssessmentPage: React.FunctionComponent = () => {
  const pageTitle = "View assessment"
  useTitle(pageTitle)
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
    <>
      <PageTitle>{assessment?.title || "View assessment"}</PageTitle>
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
    </>
  )
}

export default ViewAssessmentPage
