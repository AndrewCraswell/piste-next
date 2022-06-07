import { Body1, Text } from "@fluentui/react-components"
import { Card, CardHeader } from "@fluentui/react-components/unstable"
import { GuestRegular, ContactCardRegular } from "@fluentui/react-icons"

import { useDisclosure, useTitle } from "$hooks"
import {
  useGetAssessmentEvaluationByIdQuery,
  useUpdateMetricAnswerMutation,
} from "$queries"
import { Stack } from "@fluentui/react"
import { useCallback, useMemo } from "react"
import { useForm } from "react-hook-form"
import { Dictionary } from "@reduxjs/toolkit"
import { useNavigate, useParams } from "react-router-dom"
import { formatFullName } from "$lib/formatFullName"
import { MetricFieldItem } from "$components/AssessmentMetricsForm/AssessmentMetricsForm.types"
import { BackLink } from "$components/BackLink"
import {
  SUBMIT_BUTTON_ID,
  AssessmentMetricsForm,
} from "$components/AssessmentMetricsForm"
import { ConfirmDialog } from "$components/ConfirmDialog"
import { FormSection } from "$components/Form/components/FormSection"
import { PageTitle } from "$components/PageTitle"
import { PersonaAvatar } from "$components/PersonaAvatar"
import { useTrackPisteMetric } from "$components/ApplicationInsightsProvider"

export const EditEvaluationPage: React.FunctionComponent = () => {
  const pageTitle = "Edit evaluation"
  useTitle(pageTitle)
  useTrackPisteMetric({ componentName: "EditEvaluationPage" })

  const params = useParams()
  const form = useForm()
  const navigate = useNavigate()
  const {
    isOpen: isConfirmOpen,
    onOpen: openConfirm,
    onClose: closeConfirm,
  } = useDisclosure(false)

  const evaluationId = params.evaluationId as string
  const assessmentId = params.assessmentId as string

  const { data: evaluationData, loading: isLoadingEvaluation } =
    useGetAssessmentEvaluationByIdQuery({
      skip: !evaluationId,
      variables: {
        id: evaluationId!,
      },
    })

  const [updateAnswer, { loading: isAddingAnswer }] =
    useUpdateMetricAnswerMutation()

  const redirectToAssessment = useCallback(() => {
    const redirectUrl = `/assessments/${assessmentId}/`
    navigate(redirectUrl)
  }, [assessmentId, navigate])

  const onSubmit = useCallback(
    (values: Dictionary<string>, event) => {
      if (event.nativeEvent.submitter.id !== SUBMIT_BUTTON_ID) {
        return
      }

      const changes = form.formState.dirtyFields

      Object.keys(changes).forEach((questionId) => {
        const value = values[questionId] || null
        updateAnswer({
          variables: {
            evaluationId,
            questionId,
            value: value?.toString(),
          },
          onCompleted: () => {
            form.reset(values)
          },
        })
      })
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [form.formState.dirtyFields]
  )

  const cancelEvaluation = useCallback(() => {
    if (form.formState.isDirty) {
      openConfirm()
    } else {
      redirectToAssessment()
    }
  }, [form.formState.isDirty, openConfirm, redirectToAssessment])

  const isLoading = isLoadingEvaluation || isAddingAnswer
  const evaluation = evaluationData?.assessments_assessment_result_by_pk
  const fencer = evaluation?.fencer
  const proctor = evaluation?.proctor?.Student

  const metrics: MetricFieldItem[] = useMemo(() => {
    return (
      evaluation?.metric_results.map((m) => ({
        metric_id: m.id,
        metric_question: m.metric_question,
        metric_type_id: m.metric_question.metric_type_id,
        order_number: m.metric_question.assessment_metrics[0].order_number,
        notes: m.notes,
        value: m.value,
      })) || []
    )
  }, [evaluation?.metric_results])

  if (!isLoadingEvaluation && !evaluationData) {
    return <Body1>No evaluation found.</Body1>
  }

  return (
    <>
      <BackLink onClick={cancelEvaluation}>Return to assessment</BackLink>
      <PageTitle>{evaluation?.assessment.title || pageTitle}</PageTitle>
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
                    <Text size={100}>
                      The athlete this assessment was filed for
                    </Text>
                  }
                />

                <PersonaAvatar
                  text={formatFullName({
                    firstName: fencer?.FirstName,
                    lastName: fencer?.LastName,
                    nickname: fencer?.Nickname,
                  })}
                  secondaryText={fencer?.Email || fencer?.Phone || ""}
                  size={40}
                />
              </Card>
            </Stack.Item>
            {/* TODO: Separate this into it's own component */}
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
                <PersonaAvatar
                  text={formatFullName({
                    firstName: proctor?.FirstName,
                    lastName: proctor?.LastName,
                    nickname: proctor?.Nickname,
                  })}
                  secondaryText={proctor?.Email || proctor?.Phone || ""}
                  size={40}
                />
              </Card>
            </Stack.Item>
          </Stack>

          <AssessmentMetricsForm
            form={form}
            metrics={metrics}
            disabled={isLoading}
            isLoading={isLoading}
            onCancel={cancelEvaluation}
          />
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

export default EditEvaluationPage
