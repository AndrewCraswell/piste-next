import dayjs from "dayjs"
import { useMemo } from "react"
import { FieldValues, UseFormReturn } from "react-hook-form"

export function useFormHelpers<T extends FieldValues>(
  form: UseFormReturn<T, object>
) {
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
      sanitizeInput,
      sanitizePhone,
      sanitizePostal,
      sanitizeDate,
    }),
    [setValue]
  )
}

// TODO: Shift sanitizers into sanitization class

function sanitizeInput(options: { value?: string | null; remove: string[] }) {
  const { remove, value } = options

  return (
    remove.reduce(
      (val, char) => (val ? val.replaceAll(char, "") : ""),
      value
    ) ?? ""
  )
}

function sanitizePhone(phoneNumber: string | null | undefined) {
  return sanitizeInput({
    value: phoneNumber,
    remove: ["+", "_", "(", ")", " ", "", "-"],
  }).slice(0, 10)
}

function sanitizePostal(postalNumber: string | null | undefined) {
  return sanitizeInput({
    value: postalNumber,
    remove: ["_", "(", ")", " ", "", "-"],
  }).slice(0, 9)
}

function sanitizeDate(
  date: string | number | Date | dayjs.Dayjs | null | undefined
) {
  return dayjs(date).format("YYYY-MM-DD")
}
