import { FormFieldProps } from "$components/Form/Form.types"
import { Dropdown, IDropdownProps } from "@fluentui/react"
import { Controller, FieldValues } from "react-hook-form"

export type FormDropdownProps<TForm extends FieldValues = any> = FormFieldProps<
  IDropdownProps,
  TForm
>

export const FormDropdown: React.FunctionComponent<FormDropdownProps> = (
  props
) => {
  const { name, control, controllerProps, onChange, onBlur, ...inputProps } =
    props

  return (
    <Controller
      defaultValue={inputProps.defaultValue}
      {...controllerProps}
      render={({ field, fieldState: { invalid, error } }) => (
        <Dropdown
          errorMessage={invalid ? error?.message : undefined}
          {...inputProps}
          {...field}
          onChange={(event, value) => {
            if (onChange) {
              onChange(event, value)
            }
            field.onChange(event, value?.key)
          }}
          onBlur={(event) => {
            if (onBlur) {
              onBlur(event)
            }
            field.onBlur()
          }}
          selectedKey={field.value}
        />
      )}
      name={name}
      control={control}
    />
  )
}
