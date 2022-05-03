import { useMemo } from "react"
import { UseFormReturn } from "react-hook-form"

export function useFormHelpers<T>(form: UseFormReturn<T, object>) {
  const { setValue } = form

  return useMemo(
    () => ({
      setFormFields: (fields: Partial<T>) => {
        Object.keys(fields).forEach((name) => {
          const fieldName = name as keyof T
          const value = fields[fieldName] || ""

          // TODO: Fix this typing issue
          // @ts-ignore
          setValue(fieldName, value)
        })
      },
      sanitizeInput: (options: { value?: string | null; remove: string[] }) => {
        const { remove, value } = options

        return (
          remove.reduce(
            (val, char) => (val ? val.replaceAll(char, "") : ""),
            value
          ) ?? ""
        )
      },
    }),
    [setValue]
  )
}
