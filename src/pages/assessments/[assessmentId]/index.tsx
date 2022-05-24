import type { NextPage } from "next"
import { useRouter } from "next/router"
import { Body1, Text } from "@fluentui/react-components"

import { AssessmentResponseList, LinkButton, PageTitle } from "$components"
import { useTitle } from "$hooks"
import { useGetAssessmentByIdQuery } from "$queries"
import Link from "next/link"
import styled from "@emotion/styled"

const PageSection = styled.div`
  margin-top: 3em;
`

export const ViewAssessment: NextPage = () => {
  const pageTitle = "View assessment"
  useTitle(pageTitle)
  const { query } = useRouter()

  const assessmentId = query.assessmentId as string

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
        <Link href={`/assessments/${assessmentId}/submit/`} passHref>
          <LinkButton appearance="primary" href="">
            Start assessment
          </LinkButton>
        </Link>
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

export default ViewAssessment
