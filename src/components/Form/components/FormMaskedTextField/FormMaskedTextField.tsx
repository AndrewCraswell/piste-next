import { FormFieldProps } from "$components/Form/Form.types"
import { IMaskedTextFieldProps, MaskedTextField } from "@fluentui/react"
import { Controller } from "react-hook-form"

export type FormMaskedTextFieldProps = FormFieldProps<IMaskedTextFieldProps>

export function FormMaskedTextField(props: FormMaskedTextFieldProps) {
  const { name, control, controllerProps, onChange, onBlur, ...inputProps } =
    props

  return (
    <Controller
      defaultValue={inputProps.defaultValue}
      {...controllerProps}
      render={({ field, fieldState: { invalid, error } }) => (
        <MaskedTextField
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
