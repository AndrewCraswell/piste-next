import { useMount } from "@fluentui/react-hooks"
import { useContext, useEffect } from "react"
import { UseFormReturn } from "react-hook-form"

import { WizardContext } from "./WizardContext"

export type UseWizardOptions = {
  form: UseFormReturn<any, object>
  storage: "localStorage" | "sessionStorage"
}

export const useWizard = (options?: UseWizardOptions) => {
  const context = useContext(WizardContext)
  const { name, currentStepId } = context

  // Save the form state in in persistent storage
  useEffect(() => {
    if (!options?.form) {
      return
    }

    const subscription = options.form.watch((value) => {
      if (currentStepId) {
        const cacheKey = name ?? currentStepId

        const previousState = JSON.parse(localStorage.getItem(cacheKey) || "{}")

        const state = {
          ...previousState,
          [currentStepId]: value,
        }

        localStorage.setItem(cacheKey, JSON.stringify(state))
      }
    })

    return () => subscription.unsubscribe()
  }, [currentStepId, name, options?.form])

  // Restore the form state from storage when mounted
  useMount(() => {
    if (!options?.form) {
      return
    }

    if (currentStepId) {
      const cacheKey = name ?? currentStepId
      const state = localStorage.getItem(cacheKey)

      if (state) {
        const parsed = JSON.parse(state)
        const formState = parsed[currentStepId]

        if (formState) {
          // Check if the value is a date, and properly deserialize
          Object.keys(formState).forEach((key) => {
            const date = new Date(formState[key])
            if (!isNaN(date.getDate())) {
              formState[key] = date
            }
          })

          // Set the form values from the restored form state
          options.form.reset(formState)
        }
      }
    }
  })

  return context
}
