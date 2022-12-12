import { ControllerRenderProps, FieldValues } from "react-hook-form"

export type MetricAdapterProps = {
  type: string
  required?: boolean
  disabled?: boolean
  field: ControllerRenderProps<FieldValues, string>
}
