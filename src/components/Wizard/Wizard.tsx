import React, { ComponentProps, useCallback, useEffect, useMemo } from "react"

import { isNodeComponentType } from "$components/DecisionTree/DecisionTree.utils"
import { getStepsArray, getStepsDictionary } from "./Wizard.utils"
import { WizardContent } from "./Wizard.styles"
import { contextDefault, WizardContext } from "./WizardContext"
import { useNavigate, useParams } from "react-router-dom"
import { WizardStepper } from "./WizardStepper"
import { WizardStep } from "./WizardStep"
import { IWizardContext } from "."
import { WizardFooter } from "./WizardFooter"

export interface IWizardProps {}

// TODO: Add success status for steps
// TODO: Add error status for steps
// TODO: Add skipped status for steps

// TODO: Architect individual step status changing
// TODO: Implement the WizardFooter which has useWizard()

export const Wizard: React.FunctionComponent<IWizardProps> = ({ children }) => {
  const steps = useMemo(() => getStepsArray(children), [children])
  const stepsDictionary = useMemo(
    () => getStepsDictionary(children),
    [children]
  )

  const navigate = useNavigate()
  const { stepId: currentStepId } = useParams<{
    stepId?: string
  }>()

  const hasNext = useCallback((): string | undefined => {
    const index = steps.findIndex((step) => step.id === currentStepId)
    return index < steps.length - 1 ? steps[index + 1].id : undefined
  }, [currentStepId, steps])

  const hasPrevious = useCallback((): string | undefined => {
    const index = steps.findIndex((step) => step.id === currentStepId)
    return index > 0 ? steps[index - 1].id : undefined
  }, [currentStepId, steps])

  const goToStep = useCallback(
    (stepId: string) => {
      if (stepsDictionary[stepId]) {
        navigate(stepId)
      } else {
        throw new Error(
          `Wizard component is attempting to set the current step to a non-existent Id ${stepId}`
        )
      }
    },
    [navigate, stepsDictionary]
  )

  const next = useCallback(() => {
    const nextId = hasNext()
    if (nextId) {
      goToStep(nextId)
    }
  }, [goToStep, hasNext])

  const previous = useCallback(() => {
    const previousId = hasPrevious()
    if (previousId) {
      goToStep(previousId)
    }
  }, [goToStep, hasPrevious])

  const contextValue: IWizardContext = useMemo(
    () => ({
      ...contextDefault,
      steps,
      currentStepId,
      hasNext,
      hasPrevious,
      next,
      previous,
      goToStep,
    }),
    [currentStepId, goToStep, hasNext, hasPrevious, next, previous, steps]
  )

  // If no stepId is specified in the route parameters, redirect
  //  to the first step route. Similarly, if the parameter specifies
  //  a non-existent route, redirect to the first step instead
  useEffect(() => {
    if (!currentStepId || !stepsDictionary[currentStepId]) {
      const defaultStepId = steps[0].id
      goToStep(defaultStepId)
    }
  })

  return (
    <WizardContext.Provider value={contextValue}>
      <WizardStepper />

      <WizardContent>
        {
          // Filter out any steps that aren't the current active step
          React.Children.toArray(children).filter((node) => {
            if (
              React.isValidElement(node) &&
              isNodeComponentType(node, WizardStep)
            ) {
              const { id } = node.props as ComponentProps<typeof WizardStep>
              return id === currentStepId
            }
            return true
          })
        }
      </WizardContent>
      <WizardFooter />
    </WizardContext.Provider>
  )
}
