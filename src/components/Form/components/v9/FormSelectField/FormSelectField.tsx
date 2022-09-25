import { FormFieldProps } from "$components/Form/Form.types"
import styled from "@emotion/styled"
import { Select, SelectProps } from "@fluentui/react-components/unstable"
import { Controller, FieldValues } from "react-hook-form"

export type FormSelectFieldProps<TForm extends FieldValues = any> =
  FormFieldProps<SelectProps, TForm>

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
  const { name, control, controllerProps, children, ...inputProps } = props
  return (
    <Controller
      defaultValue={inputProps.defaultValue}
      {...controllerProps}
      render={({ field, fieldState: { invalid, error } }) => (
        <StyledSelect {...inputProps} {...field}>
          {children}
        </StyledSelect>
      )}
      name={name}
      control={control}
    />
  )
}
