import { Button } from "@fluentui/react-components"
import { DialogFooter, Stack } from "@fluentui/react"
import { MetricForm } from "./MetricForm"
import { useForm } from "react-hook-form"
import { useCallback } from "react"
import { GetAssessmentByIdQuery } from "$queries"

// TODO: Add skip question button
// TODO: Allow form save

// TODO: Build adapter for the Metric Type
// TODO: Create stopwatch component

interface IAssessmentMetricsFormProps {
  metrics: NonNullable<
    GetAssessmentByIdQuery["assessments_assessments_by_pk"]
  >["assessment_metrics"]
}

export const AssessmentMetricsForm: React.FunctionComponent<
  IAssessmentMetricsFormProps
> = ({ metrics }) => {
  const { control, handleSubmit } = useForm()

  // TODO: Take the metrics as a prop

  const onSubmit = useCallback((values) => {
    // TODO: implement
    console.log("SUBMIT HANDLED")
    console.log(values)
  }, [])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack tokens={{ childrenGap: "1rem" }} style={{ maxWidth: 600 }}>
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

        <DialogFooter>
          <Button type="submit" appearance="primary">
            Save
          </Button>
          <Button>Cancel</Button>
        </DialogFooter>
      </Stack>
    </form>
  )
}
