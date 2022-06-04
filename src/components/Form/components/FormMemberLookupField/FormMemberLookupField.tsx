import { Controller } from "react-hook-form"

import {
  IMemberLookupFieldProps,
  MemberLookupField,
} from "$components/MemberLookupField"
import { FormFieldProps } from "$components/Form/Form.types"

export type FormMemberLookupFieldProps = FormFieldProps<IMemberLookupFieldProps>

export const FormMemberLookupField: React.FunctionComponent<
  FormMemberLookupFieldProps
> = (props) => {
  const { name, control, controllerProps, onChange, onBlur, ...inputProps } =
    props

  return (
    <Controller
      defaultValue={inputProps.defaultSelectedItems}
      {...controllerProps}
      render={({ field, fieldState: { error } }) => (
        <MemberLookupField
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
