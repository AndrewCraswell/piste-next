import React from "react"
import { useForm, SubmitHandler } from "react-hook-form"

export type FormProps = {
  defaultValues?: any
  onSubmit?: SubmitHandler<any>
}

export const Form: React.FunctionComponent<FormProps> = ({
  defaultValues,
  children,
  onSubmit,
}) => {
  const { handleSubmit } = useForm({ defaultValues })

  return <form onSubmit={handleSubmit(onSubmit ?? (() => {}))}>{children}</form>
}
