import { MetricForm } from "./MetricForm"
import { FieldValues, UseFormReturn } from "react-hook-form"
import { GetAssessmentByIdQuery } from "$queries"
import { ConfirmDialog } from "$components"
import { FormSection } from "$components/Form"

// TODO: Allow form save

// TODO: Build adapter for the Metric Type
// TODO: Create stopwatch component

// TODO: Confirm form cancel if dirty, before navigating back to Assessments page

interface IAssessmentMetricsFormProps {
  metrics: NonNullable<
    GetAssessmentByIdQuery["assessments_assessments_by_pk"]
  >["assessment_metrics"]
  form: UseFormReturn<FieldValues, any>
}

export const AssessmentMetricsForm: React.FunctionComponent<
  IAssessmentMetricsFormProps
> = ({ metrics, form }) => {
  const { control } = form

  return (
    <FormSection>
      {metrics.map(({ metric_id, order_number, metric_question: q }) => (
        <MetricForm
          key={metric_id}
          id={q.id}
          title={q.title}
          description={q.description}
          type={q.metric_type_id}
          metricNumber={order_number}
          totalMetrics={metrics.length}
          control={control}
        />
      ))}
    </FormSection>
  )
}
