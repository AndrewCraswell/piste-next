import type { NextPage } from "next"
import { Control, Controller, FieldValues, useForm } from "react-hook-form"
import { useCallback, useState } from "react"
import { useRouter } from "next/router"
import {
  Button,
  RadioGroup,
  Radio,
  Body,
  Text,
} from "@fluentui/react-components"
import { Label, Card, CardHeader } from "@fluentui/react-components/unstable"

import { PageTitle } from "$components"
import { useTitle } from "$hooks"
import { DialogFooter, Stack } from "@fluentui/react"
import ReactMarkdown from "react-markdown"
import { ClipboardTaskRegular } from "@fluentui/react-icons"
import { useGetAssessmentByIdQuery } from "$queries"

// TODO: Add skip question button
// TODO: Allow form save

// TODO: Build adapter for the Metric Type
// TODO: Create stopwatch component

export const ViewAssessment: NextPage = () => {
  const pageTitle = "View assessment"
  useTitle(pageTitle)
  const { query } = useRouter()
  const { control, handleSubmit } = useForm()

  const assessmentId = query.assessmentId as string

  const { data, loading } = useGetAssessmentByIdQuery({
    variables: {
      id: assessmentId,
    },
    skip: !assessmentId,
  })

  const onSubmit = useCallback((values) => {
    // TODO: implement
    console.log("SUBMIT HANDLED")
    console.log(values)
  }, [])

  const hasAssessment = !!data?.assessments_assessments_by_pk
  const metrics = hasAssessment
    ? data.assessments_assessments_by_pk?.assessment_metrics!
    : []
  const metricsCount = metrics.length

  if (!loading && !data?.assessments_assessments_by_pk) {
    return <Body>No assessment found.</Body>
  }

  return (
    <>
      <PageTitle>{pageTitle}</PageTitle>
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
              totalMetrics={metricsCount}
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
    </>
  )
}

export default ViewAssessment

interface IMetricFormProps {
  id: string
  title: string
  description: string | undefined | null
  type: string
  metricNumber: number
  totalMetrics: number
  control: Control<FieldValues, any>
}

const MetricForm: React.FunctionComponent<IMetricFormProps> = (props) => {
  const { id, title, description, type, metricNumber, totalMetrics, control } =
    props

  const [selectedValue, setValue] = useState<string | undefined>(undefined)

  return (
    <Card appearance={selectedValue ? "filled-alternative" : "outline"}>
      <CardHeader
        image={<ClipboardTaskRegular fontSize={"32px"} />}
        header={
          <Text as="h2" size={300} weight="semibold">
            {title}
          </Text>
        }
        description={
          <Text size={100}>
            Metric {metricNumber} of {totalMetrics}
          </Text>
        }
      ></CardHeader>

      <Body block>
        <ReactMarkdown>{description || ""}</ReactMarkdown>
      </Body>

      {/* TODO: use an adapter component to determine the proper type */}
      <Label id={id}>Rate the student's proficiency</Label>

      <Controller
        render={({ field }) => (
          <RadioGroup
            layout="horizontalStacked"
            aria-labelledby={id}
            {...field}
            onChange={(event, data) => {
              setValue(data.value)
              field.onChange(event)
            }}
          >
            <Radio label="0" value="0" />
            <Radio label="1" value="1" />
            <Radio label="2" value="2" />
            <Radio label="3" value="3" />
            <Radio label="4" value="4" />
            <Radio label="5" value="5" />
            <Radio label="6" value="6" />
            <Radio label="7" value="7" />
            <Radio label="8" value="8" />
            <Radio label="9" value="9" />
            <Radio label="10" value="10" />
          </RadioGroup>
        )}
        name={id}
        control={control}
        defaultValue=""
      />
    </Card>
  )
}
