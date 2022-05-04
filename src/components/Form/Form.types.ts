import { Control, ControllerProps } from "react-hook-form"
import { IStackProps } from "@fluentui/react"

export type FormFieldProps<T> = T & {
  name: string
  control: Control<any, object>
  controllerProps?: Omit<ControllerProps, "render" | "name" | "control">
}
