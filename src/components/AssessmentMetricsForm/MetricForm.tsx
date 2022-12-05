import {
  Control,
  Controller,
  FieldValues,
  UseFormReturn,
} from "react-hook-form"
import { Body1, Text } from "@fluentui/react-components"
import { Card, CardHeader } from "@fluentui/react-components/unstable"

import ReactMarkdown from "react-markdown"
import { ClipboardTaskRegular, ClipboardRegular } from "@fluentui/react-icons"
import { MetricAdapter } from "$components/MetricAdapter"

interface IMetricFormProps {
  id: string
  title: string
  description: string | undefined | null
  type: string
  metricNumber: number
  totalMetrics: number
  control: Control<FieldValues, any>
  disabled?: boolean
  required?: boolean
  value?: string | null
  form: UseFormReturn<FieldValues, any>
}

export const MetricForm: React.FunctionComponent<IMetricFormProps> = (
  props
) => {
  const {
    id,
    title,
    description,
    metricNumber,
    totalMetrics,
    control,
    disabled,
    required,
    value,
    form,
    type,
  } = props
  const { isDirty } = form.getFieldState(id)
  const currentValue = form.watch(id)

  return (
    <Card appearance={isDirty ? "filled-alternative" : "outline"}>
      <CardHeader
        image={
          currentValue ? (
            <ClipboardTaskRegular fontSize={"32px"} />
          ) : (
            <ClipboardRegular fontSize={"32px"} />
          )
        }
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

      <Body1 block>
        <ReactMarkdown linkTarget="_blank">{description || ""}</ReactMarkdown>
      </Body1>

      <Controller
        render={({ field }) => (
          <MetricAdapter
            disabled={disabled}
            required={required}
            type={type}
            field={field}
          />
        )}
        name={id}
        control={control}
        defaultValue={value}
      />
    </Card>
  )
}
