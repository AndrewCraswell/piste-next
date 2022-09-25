import { FormFieldProps } from "$components/Form/Form.types"
import styled from "@emotion/styled"
import { Select, SelectProps } from "@fluentui/react-components/unstable"
import { Controller, FieldValues } from "react-hook-form"

export type FormSelectFieldProps<TForm extends FieldValues = any> =
  FormFieldProps<SelectProps, TForm> & {
    placeholder?: string
  }

// TODO: Migrate to the Fluent v9 DropdownField component
// TODO: Fix the width issues

const StyledSelect = styled(Select)`
  width: 185px;

  select {
    width: inherit;
  }
`

export const FormSelectField: React.FunctionComponent<FormSelectFieldProps> = (
  props
) => {
  const {
    name,
    control,
    controllerProps,
    defaultValue,
    children,
    placeholder,
    ...inputProps
  } = props

  return (
    <Controller
      defaultValue={defaultValue}
      {...controllerProps}
      render={({ field, fieldState: { invalid, error } }) => {
        let value = field.value
        if (placeholder && value === undefined) {
          value = ""
        }

        return (
          <StyledSelect {...inputProps} {...field} value={value}>
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}

            {children}
          </StyledSelect>
        )
      }}
      name={name}
      control={control}
    />
  )
}
