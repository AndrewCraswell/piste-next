import { FormFieldProps } from "$components/Form/Form.types"
import { DatePicker, IDatePickerProps } from "@fluentui/react"
import { Controller } from "react-hook-form"

export type FormDatePickerProps = FormFieldProps<IDatePickerProps>

export const FormDatePicker: React.FunctionComponent<FormDatePickerProps> = (
  props
) => {
  const { name, control, controllerProps, onChange, onBlur, ...inputProps } =
    props

  return (
    <Controller
      defaultValue={inputProps.defaultValue}
      {...controllerProps}
      render={({ field }) => (
        <DatePicker
          {...field}
          {...inputProps}
          onChange={(event) => {
            if (onChange) {
              onChange(event)
            }
            field.onChange(event)
          }}
          onBlur={(event) => {
            if (onBlur) {
              onBlur(event)
            }
            field.onBlur()
          }}
          onSelectDate={(date) => {
            field.onChange(date)
          }}
        />
      )}
      name={name}
      control={control}
    />
  )
}
