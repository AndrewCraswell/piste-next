import { FormFieldProps } from "$components/Form/Form.types"
import { ITextFieldProps, TextField } from "@fluentui/react"
import { Controller } from "react-hook-form"

export type FormTextFieldProps = FormFieldProps<ITextFieldProps>

export const FormTextField: React.FunctionComponent<FormTextFieldProps> = (
  props
) => {
  const { name, control, controllerProps, onChange, onBlur, ...inputProps } =
    props

  return (
    <Controller
      defaultValue={inputProps.defaultValue}
      {...controllerProps}
      render={({ field, fieldState: { invalid, error } }) => (
        <TextField
          errorMessage={invalid ? error?.message : undefined}
          {...inputProps}
          {...field}
          onChange={(event, value) => {
            if (onChange) {
              onChange(event, value)
            }
            field.onChange(event, value)
          }}
          onBlur={(event) => {
            if (onBlur) {
              onBlur(event)
            }
            field.onBlur()
          }}
        />
      )}
      name={name}
      control={control}
    />
  )
}
