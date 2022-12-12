import React, { PropsWithChildren } from "react"
import { useForm, SubmitHandler } from "react-hook-form"

export type FormProps = PropsWithChildren<{
  defaultValues?: any
  onSubmit?: SubmitHandler<any>
}>

export function Form({ defaultValues, children, onSubmit }: FormProps) {
  const { handleSubmit } = useForm({ defaultValues })

  return <form onSubmit={handleSubmit(onSubmit ?? (() => {}))}>{children}</form>
}
