import { FormFieldProps } from "$components/Form/Form.types"
import { DatePicker, IDatePickerProps } from "@fluentui/react"
import { Controller } from "react-hook-form"
import dayjs from "dayjs"

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
          {...inputProps}
          textField={{
            ...field,
            onChange: (event) => {
              if (onChange) {
                onChange(event)
              }
              field.onChange(event)
            },
            onBlur: (event) => {
              if (onBlur) {
                onBlur(event)
              }
              field.onChange(event, dayjs(field.value).format("M/DD/YYYY"))
              field.onBlur()
            },
          }}
          onSelectDate={(date) => {
            field.onChange(dayjs(date).format("M/DD/YYYY"))
          }}
        />
      )}
      name={name}
      control={control}
    />
  )
}
