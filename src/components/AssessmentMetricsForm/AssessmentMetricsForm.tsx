import { MetricForm } from "./MetricForm"
import { FieldValues, UseFormReturn } from "react-hook-form"
import { FormSection } from "$components/Form/components/FormSection"
import { MetricFieldItem } from "./AssessmentMetricsForm.types"
import { useMemo } from "react"
import { DialogFooter } from "@fluentui/react"
import { Button } from "@fluentui/react-components"

// TODO: Create stopwatch component

export const SUBMIT_BUTTON_ID = "assessmentSubmit"

interface IAssessmentMetricsFormProps {
  metrics: MetricFieldItem[]
  form: UseFormReturn<FieldValues, any>
  disabled?: boolean
  required?: boolean
  onCancel?: () => void
  isLoading?: boolean
}

export function AssessmentMetricsForm(props: IAssessmentMetricsFormProps) {
  const { metrics, form, disabled, required, onCancel, isLoading } = props
  const { control } = form

  // Sort the metrics by the proper order number
  const orderedMetrics = useMemo(
    () =>
      [...metrics]
        .sort((a, b) => a.order_number - b.order_number)
        .map((m) => ({
          metric_id: m.metric_id,
          order_number: m.order_number,
          metric_question: m.metric_question,
          value: m.value,
        })),
    [metrics]
  )

  return (
    <FormSection>
      {orderedMetrics.map(
        ({ metric_id, order_number, metric_question: q, value }) => (
          <MetricForm
            key={metric_id}
            id={q.id}
            title={q.title}
            description={q.description}
            type={q.metric_type_id}
            metricNumber={order_number}
            totalMetrics={metrics.length}
            control={control}
            disabled={disabled}
            required={required}
            value={value}
            form={form}
          />
        )
      )}

      <DialogFooter>
        <Button
          type="submit"
          id={SUBMIT_BUTTON_ID}
          appearance="primary"
          disabled={!form.formState.isDirty || isLoading}
        >
          Save
        </Button>
        {onCancel && <Button onClick={onCancel}>Cancel</Button>}
      </DialogFooter>
    </FormSection>
  )
}
