import { Controller } from "react-hook-form"

import { FormFieldProps } from "$components/Form/Form.types"
import {
  FencerLookupField,
  IFencerLookupFieldProps,
} from "$components/FencerLookupField"

export type FormFencerLookupFieldProps = FormFieldProps<IFencerLookupFieldProps>

export function FormFencerLookupField(props: FormFencerLookupFieldProps) {
  const { name, control, controllerProps, onChange, onBlur, ...inputProps } =
    props

  return (
    <Controller
      defaultValue={inputProps.defaultSelectedItems}
      {...controllerProps}
      render={({ field, fieldState: { error } }) => (
        <FencerLookupField
          {...inputProps}
          {...field}
          selectedItems={field.value}
          onChange={(value) => {
            if (onChange) {
              onChange(value)
            }
            field.onChange(value)
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
