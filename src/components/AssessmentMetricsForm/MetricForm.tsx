import { Control, Controller, FieldValues } from "react-hook-form"
import { useState } from "react"
import {
  RadioGroup,
  Radio,
  Body1,
  Text,
  Label,
} from "@fluentui/react-components"
import { Card, CardHeader } from "@fluentui/react-components/unstable"

import ReactMarkdown from "react-markdown"
import { ClipboardTaskRegular, ClipboardRegular } from "@fluentui/react-icons"

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
}

export const MetricForm: React.FunctionComponent<IMetricFormProps> = (
  props
) => {
  const {
    id,
    title,
    description,
    type,
    metricNumber,
    totalMetrics,
    control,
    disabled,
    required,
  } = props

  const [selectedValue, setValue] = useState<string | undefined>(undefined)

  return (
    <Card appearance={selectedValue ? "filled-alternative" : "outline"}>
      <CardHeader
        image={
          selectedValue ? (
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

      {/* TODO: use an adapter component to determine the proper type */}
      {/* TODO: Shift the RadioGroup into it's own Controller implementation */}
      <Label id={id}>Rate the student's proficiency</Label>

      <Controller
        render={({ field }) => (
          <RadioGroup
            layout="horizontal-stacked"
            aria-labelledby={id}
            {...field}
            onChange={(event, data) => {
              setValue(data.value)
              field.onChange(event)
            }}
            required={required}
            disabled={disabled}
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
