import { Control, ControllerProps } from "react-hook-form"

export type FormFieldProps<T> = T & {
  name: string
  control: Control<any, object>
  controllerProps?: Omit<ControllerProps, "render" | "name" | "control">
}
