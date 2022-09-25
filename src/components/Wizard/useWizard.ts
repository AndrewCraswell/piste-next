import { useMount } from "@fluentui/react-hooks"
import { useContext, useEffect } from "react"
import { UseFormReturn } from "react-hook-form"

import { IProfileFormFields } from "$components/Forms"
import { StorageSerializer } from "$lib/StorageSerializer"
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
        const cached = localStorage.getItem(cacheKey) ?? "{}"
        const previousState = JSON.parse(cached)

        const state = {
          ...previousState,
          [currentStepId]: StorageSerializer.serialize(value),
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
      const cached = localStorage.getItem(cacheKey)

      if (cached) {
        const previousState = JSON.parse(cached)
        const formState = previousState[currentStepId]

        // Set the form values from the restored form state
        const deserializedForm =
          StorageSerializer.deserialize<IProfileFormFields>(formState)

        options.form.reset(deserializedForm)
      }
    }
  })

  return context
}
