import { MetricAdapterProps } from "$components/MetricAdapter/MetricAdapter.types"
import { Label, Radio, RadioGroup, useId } from "@fluentui/react-components"

type OneToTenRadiosProps = Omit<MetricAdapterProps, "type">

export function OneToTenRadios(props: OneToTenRadiosProps) {
  const { field, disabled, required } = props
  const id = useId("metric")

  return (
    <>
      <Label id={id}>Rate the student's proficiency</Label>
      <RadioGroup
        layout="horizontal-stacked"
        aria-labelledby={id}
        {...field}
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
    </>
  )
}
