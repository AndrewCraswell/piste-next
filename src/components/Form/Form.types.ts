import { Control, ControllerProps, FieldValues } from "react-hook-form"

export type FormFieldProps<T, TForm extends FieldValues = any> = T & {
  name: string
  control: Control<TForm, object>
  controllerProps?: Omit<ControllerProps, "render" | "name" | "control">
}
