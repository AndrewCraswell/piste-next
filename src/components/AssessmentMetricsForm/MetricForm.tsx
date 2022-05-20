import { Control, Controller, FieldValues } from "react-hook-form"
import { useState } from "react"
import { RadioGroup, Radio, Body, Text } from "@fluentui/react-components"
import { Label, Card, CardHeader } from "@fluentui/react-components/unstable"

import ReactMarkdown from "react-markdown"
import { ClipboardTaskRegular } from "@fluentui/react-icons"

interface IMetricFormProps {
  id: string
  title: string
  description: string | undefined | null
  type: string
  metricNumber: number
  totalMetrics: number
  control: Control<FieldValues, any>
}

export const MetricForm: React.FunctionComponent<IMetricFormProps> = (
  props
) => {
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
