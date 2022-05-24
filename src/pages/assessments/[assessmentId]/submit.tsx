import type { NextPage } from "next"
import { useRouter } from "next/router"
import { Body1, Button, Text } from "@fluentui/react-components"
import { Card, CardHeader } from "@fluentui/react-components/unstable"
import { GuestRegular, ContactCardRegular } from "@fluentui/react-icons"

import {
  AssessmentMetricsForm,
  ConfirmDialog,
  FormFencerLookupField,
  FormSection,
  PageTitle,
} from "$components"
import { useAccountProfile, useDisclosure, useTitle } from "$hooks"
import {
  AddMetricAnswersMutationVariables,
  useAddAssessmentEvaluationMutation,
  useAddMetricAnswersMutation,
  useGetAssessmentByIdQuery,
  useGetMetricAnswersByAssessmentIdLazyQuery,
} from "$queries"
import { DialogFooter, Persona, PersonaSize, Stack } from "@fluentui/react"
import { useCallback, useMemo } from "react"
import { useForm } from "react-hook-form"
import { Dictionary } from "@reduxjs/toolkit"

// TODO: Add Notes field

export const SubmitEvaluation: NextPage = () => {
  const pageTitle = "Submit evaluation"
  useTitle(pageTitle)

  const { query } = useRouter()
  const { account } = useAccountProfile()
  const form = useForm()
  const router = useRouter()
  const {
    isOpen: isConfirmOpen,
    onOpen: openConfirm,
    onClose: closeConfirm,
  } = useDisclosure(false)

  const assessmentId = query.assessmentId as string
  const { data: assessmentData, loading: isAssessmentLoading } =
    useGetAssessmentByIdQuery({
      variables: {
        id: assessmentId,
      },
      skip: !assessmentId,
    })

  const [getAssessmentEvaluations] =
    useGetMetricAnswersByAssessmentIdLazyQuery()

  const assessment = assessmentData?.assessments_assessments_by_pk
  const hasAssessment = !!assessment
  const metrics = hasAssessment
    ? assessmentData.assessments_assessments_by_pk?.assessment_metrics!
    : []

  const [addAnswers, { loading: isAddingAnswers }] =
    useAddMetricAnswersMutation()

  const [addEvaluation, { loading: isAddingEvaluation }] =
    useAddAssessmentEvaluationMutation()

  const redirectToAssessment = useCallback(() => {
    const redirectUrl = `/assessments/${assessmentId}/`
    router.push(redirectUrl)
  }, [assessmentId, router])

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

      addEvaluation({
        variables: {
          evaluation: {
            assessment_id: assessmentId,
            fencer_id: fencerId,
            status_id: status,
          },
        },
        onCompleted: (evaluation) => {
          const evaluationId =
            evaluation.insert_assessments_assessment_result_one?.id

          const answers: AddMetricAnswersMutationVariables["answers"] =
            Object.keys(values).map((key) => ({
              result_id: evaluationId,
              metric_question_id: key,
              value: values[key],
            }))

          addAnswers({
            variables: { answers },
            onCompleted: ({ insert_assessments_metric_result: results }) => {
              //TODO: This function should only redirect the page
              const answers: Dictionary<string> = {}

              results?.returning.forEach((a) => {
                answers[a.metric_question_id] = a.value
              })

              getAssessmentEvaluations({
                variables: {
                  assessmentId,
                },
              })

              form.reset(answers)

              // TODO: Enable this once the edit page is completed
              //const redirectUrl = `/assessments/${assessmentId}/${evaluationId}/`
              //router.push(redirectUrl)
              redirectToAssessment()
            },
          })
        },
      })
    },
    [
      addAnswers,
      addEvaluation,
      assessmentId,
      form,
      getAssessmentEvaluations,
      metrics.length,
      redirectToAssessment,
    ]
  )

  const isLoading = isAddingEvaluation || isAddingAnswers
  const fencerField = form.watch("fencers") as Array<any> | undefined

  const isDirty = useMemo(() => {
    const dirtyCount = Object.keys(form.formState.dirtyFields).length
    if (dirtyCount === 0) {
      return false
    } else if (dirtyCount === 1 && fencerField?.length === 0) {
      return false
    } else {
      return true
    }
  }, [fencerField, form.formState.dirtyFields])

  const cancelEvaluation = useCallback(() => {
    if (isDirty) {
      openConfirm()
    } else {
      redirectToAssessment()
    }
  }, [isDirty, openConfirm, redirectToAssessment])

  if (!isAssessmentLoading && !assessment) {
    return <Body1>No assessment found.</Body1>
  }

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
            <Stack.Item style={{ minWidth: 256 }}>
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
              disabled={!isDirty || isLoading}
            >
              Save
            </Button>
            <Button onClick={cancelEvaluation}>Cancel</Button>
          </DialogFooter>
        </FormSection>
      </form>
      <ConfirmDialog
        hidden={!isConfirmOpen}
        title="Leave without saving?"
        onClose={closeConfirm}
        confirmLabel="Yes"
        onConfirmed={redirectToAssessment}
      >
        Are you sure you want to leave without saving? Any changes will be lost.
      </ConfirmDialog>
    </>
  )
}

export default SubmitEvaluation
