import { ControllerRenderProps, FieldValues } from "react-hook-form"

export interface IMetricAdapterProps {
  type: string
  required?: boolean
  disabled?: boolean
  field: ControllerRenderProps<FieldValues, string>
}
