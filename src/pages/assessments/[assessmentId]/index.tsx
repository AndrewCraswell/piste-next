import type { NextPage } from "next"
import { useRouter } from "next/router"
import { Body, Text } from "@fluentui/react-components"

import { AssessmentResponseList, PageTitle } from "$components"
import { useTitle } from "$hooks"
import { useGetAssessmentByIdQuery } from "$queries"

export const ViewAssessment: NextPage = () => {
  const pageTitle = "View assessment"
  useTitle(pageTitle)
  const { query } = useRouter()

  const assessmentId = query.assessmentId as string

  const { data, loading: isAssessmentLoading } = useGetAssessmentByIdQuery({
    variables: {
      id: assessmentId,
    },
    skip: !assessmentId,
  })

  const assessment = data?.assessments_assessments_by_pk
  const hasAssessment = !!assessment
  const metrics = hasAssessment
    ? data.assessments_assessments_by_pk?.assessment_metrics!
    : []

  if (!isAssessmentLoading && !assessment) {
    return <Body>No assessment found.</Body>
  }

  return (
    <>
      <PageTitle>
        {data?.assessments_assessments_by_pk?.title || "View assessment"}
      </PageTitle>
      <Body block>{assessment?.description}</Body>

      <PageSection>
        <Text as="h2" size={400} weight="semibold" block>
          Assessment cohorts
        </Text>
        TODO: Render cohort cards
      </PageSection>

      <PageSection>
        <Text as="h2" size={400} weight="semibold" block>
          Assessment results
        </Text>
        <AssessmentResponseList isLoadingResponses={isAssessmentLoading} />
      </PageSection>
    </>
  )
}

export default ViewAssessment

const PageSection: React.FunctionComponent = ({ children }) => {
  return <div style={{ marginTop: "3rem" }}>{children}</div>
}
