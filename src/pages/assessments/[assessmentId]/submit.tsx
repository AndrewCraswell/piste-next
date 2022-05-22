import type { NextPage } from "next"
import { useRouter } from "next/router"
import { Body, Button, Text } from "@fluentui/react-components"
import { Card, CardHeader } from "@fluentui/react-components/unstable"
import { GuestRegular, ContactCardRegular } from "@fluentui/react-icons"

import {
  AssessmentMetricsForm,
  FormFencerLookupField,
  FormSection,
  PageTitle,
} from "$components"
import { useAccountProfile, useTitle } from "$hooks"
import {
  AddMetricAnswersMutationVariables,
  useAddAssessmentSubmissionMutation,
  useAddMetricAnswersMutation,
  useGetAssessmentByIdQuery,
} from "$queries"
import { DialogFooter, Persona, PersonaSize, Stack } from "@fluentui/react"
import { useCallback, useState } from "react"
import { Fencer } from "$types"
import { useForm } from "react-hook-form"
import { Dictionary } from "@reduxjs/toolkit"

// TODO: Add Notes field
// TODO: allow cancelling of the form
// TODO: Redirect to edit page when completed

export const SubmitAssessment: NextPage = () => {
  const pageTitle = "Submit assessment"
  useTitle(pageTitle)
  const { query } = useRouter()
  const { account } = useAccountProfile()
  const form = useForm()

  const assessmentId = query.assessmentId as string
  const { data: assessmentData, loading: isAssessmentLoading } =
    useGetAssessmentByIdQuery({
      variables: {
        id: assessmentId,
      },
      skip: !assessmentId,
    })

  const assessment = assessmentData?.assessments_assessments_by_pk
  const hasAssessment = !!assessment
  const metrics = hasAssessment
    ? assessmentData.assessments_assessments_by_pk?.assessment_metrics!
    : []

  const [addAnswers, { loading: isAddingAnswers }] =
    useAddMetricAnswersMutation()

  const [addSubmission, { loading: isAddingSubmission }] =
    useAddAssessmentSubmissionMutation()

  const onSubmit = useCallback(
    (values: Dictionary<any>) => {
      const fencerId = values.fencers[0].fencer.StudentId
      delete values.fencers

      const completedAnswersCount = Object.keys(values).filter(
        (key) => !!values[key]
      ).length
      const metricCount = metrics.length

      let status = "not-started"
      if (completedAnswersCount === metricCount) {
        status = "completed"
      } else if (completedAnswersCount > 0) {
        status = "in-progress"
      }

      addSubmission({
        variables: {
          submission: {
            assessment_id: assessmentId,
            fencer_id: fencerId,
            status_id: status,
          },
        },
        onCompleted: (submission) => {
          const submissionId =
            submission.insert_assessments_assessment_result_one?.id

          const answers: AddMetricAnswersMutationVariables["answers"] =
            Object.keys(values).map((key) => ({
              result_id: submissionId,
              metric_question_id: key,
              value: values[key],
            }))

          addAnswers({
            variables: { answers },
            onCompleted: ({ insert_assessments_metric_result: results }) => {
              const answers: Dictionary<string> = {}

              results?.returning.forEach((a) => {
                answers[a.metric_question_id] = a.value
              })

              form.reset(answers)
            },
          })
        },
      })
    },
    [addAnswers, addSubmission, assessmentId, form, metrics.length]
  )

  if (!isAssessmentLoading && !assessment) {
    return <Body>No assessment found.</Body>
  }

  const isLoading = isAddingSubmission || isAddingAnswers

  return (
    <>
      <PageTitle>
        {assessmentData?.assessments_assessments_by_pk?.title || pageTitle}
      </PageTitle>

      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormSection>
          <Stack horizontal tokens={{ childrenGap: "1rem" }}>
            <Stack.Item grow>
              <Card appearance="outline" style={{ height: "100%" }}>
                <CardHeader
                  image={<ContactCardRegular fontSize={"32px"} />}
                  header={
                    <Text as="h2" size={300} weight="semibold">
                      Fencer
                    </Text>
                  }
                  description={
                    <Text size={100}>Choose an athlete to evaluate</Text>
                  }
                />
                <FormFencerLookupField
                  name="fencers"
                  itemLimit={1}
                  inputProps={{
                    placeholder: "Fencer name",
                    required: true,
                  }}
                  size={PersonaSize.size40}
                  control={form.control}
                />
              </Card>
            </Stack.Item>
            <Stack.Item>
              <Card appearance="outline">
                <CardHeader
                  image={<GuestRegular fontSize={"32px"} />}
                  header={
                    <Text as="h2" size={300} weight="semibold">
                      Staff proctor
                    </Text>
                  }
                  description={
                    <Text size={100}>The staff providing the evaluation</Text>
                  }
                />
                <Persona
                  text={account.FullName}
                  secondaryText={account.Email}
                />
              </Card>
            </Stack.Item>
          </Stack>

          <AssessmentMetricsForm
            form={form}
            metrics={metrics}
            disabled={isLoading}
          />

          <DialogFooter>
            <Button
              type="submit"
              appearance="primary"
              disabled={!form.formState.isDirty || isLoading}
            >
              Save
            </Button>
            <Button>Cancel</Button>
          </DialogFooter>
        </FormSection>
      </form>
    </>
  )
}

export default SubmitAssessment
