import { useMount } from "@fluentui/react-hooks"
import { useContext, useEffect } from "react"
import { UseFormReturn } from "react-hook-form"

import { IProfileFormFields } from "$components/Forms"
import { StorageSerializer } from "$lib/StorageSerializer"
import { WizardContext } from "./WizardContext"

// TODO: Allow saving form values in SessionStorage, LocalStorage, or none
// TODO: Save form values in memory

export type UseWizardOptions = {
  form: UseFormReturn<any, object>
  storage?: "localStorage" | "sessionStorage"
  stepId?: string
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
      if (options.stepId) {
        const cacheKey = name ?? options.stepId
        const cached = localStorage.getItem(cacheKey) ?? "{}"
        const previousState = JSON.parse(cached)

        const state = {
          ...previousState,
          [options.stepId]: StorageSerializer.serialize(value),
        }

        localStorage.setItem(cacheKey, JSON.stringify(state))
      }
    })

    return () => subscription.unsubscribe()
  }, [currentStepId, name, options?.form, options?.stepId])

  // Restore the form state from storage when mounted
  useMount(() => {
    if (!options?.form) {
      return
    }

    if (options.stepId) {
      const cacheKey = name ?? options.stepId
      const cached = localStorage.getItem(cacheKey)

      if (cached) {
        const previousState = JSON.parse(cached)
        const formState = previousState[options.stepId]

        // Set the form values from the restored form state
        const deserializedForm =
          StorageSerializer.deserialize<IProfileFormFields>(formState)

        options.form.reset(deserializedForm)
      }
    }
  })

  return context
}
