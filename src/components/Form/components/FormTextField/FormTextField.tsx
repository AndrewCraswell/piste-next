import { FormFieldProps } from "$components/Form/Form.types"
import { ITextFieldProps, TextField } from "@fluentui/react"
import { Controller, FieldValues } from "react-hook-form"

export type FormTextFieldProps<TForm extends FieldValues = any> =
  FormFieldProps<ITextFieldProps, TForm>

export function FormTextField(props: FormTextFieldProps) {
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
