import { MetricAdapterProps } from "$components/MetricAdapter/MetricAdapter.types"
import { Label, Slider, useId, SpinButton } from "@fluentui/react-components"

type OneToTenDecimalSliderProps = Omit<MetricAdapterProps, "type">

export function OneToTenDecimalSlider(props: OneToTenDecimalSliderProps) {
  const { field, disabled, required } = props
  const id = useId("metric")

  return (
    <>
      <Label id={id}>Rate the student's proficiency</Label>
      <div style={{ display: "flex" }}>
        <Slider
          step={0.1}
          min={0}
          max={10}
          aria-labelledby={id}
          {...field}
          required={required}
          disabled={disabled}
          style={{ width: "80%", marginRight: 12 }}
        />
        <SpinButton
          min={0}
          max={10}
          aria-labelledby={id}
          {...field}
          onChange={(event, data) => {
            if (data.value !== undefined && data.value !== null) {
              field.onChange(data.value)
            } else if (data.displayValue !== undefined) {
              const newValue = parseFloat(data.displayValue)
              if (!Number.isNaN(newValue)) {
                field.onChange(newValue)
              }
            }
          }}
          step={0.1}
          stepPage={1}
          style={{ width: "20%", minWidth: 50 }}
        />
      </div>
    </>
  )
}
