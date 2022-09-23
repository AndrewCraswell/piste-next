import {
  InputField,
  InputFieldProps,
} from "@fluentui/react-components/unstable"
import { Controller, FieldValues } from "react-hook-form"

import { FormFieldProps } from "$components/Form/Form.types"
import React from "react"

export type FormInputFieldProps<TForm extends FieldValues = any> =
  FormFieldProps<InputFieldProps, TForm>

export const FormInputField: React.FunctionComponent<FormInputFieldProps> =
  React.forwardRef<HTMLInputElement, FormInputFieldProps>((props, ref) => {
    const { name, control, controllerProps, ...inputProps } = props

    return (
      <Controller
        defaultValue={inputProps.defaultValue}
        {...controllerProps}
        render={({ field, fieldState: { invalid, error } }) => (
          <InputField
            validationMessage={invalid ? error?.message : undefined}
            validationState={invalid ? "error" : undefined}
            {...inputProps}
            {...field}
            value={field.value || ""}
            ref={ref}
          />
        )}
        name={name}
        control={control}
      />
    )
  })

FormInputField.displayName = "FormInputField"
