import React, {
  ComponentProps,
  useCallback,
  useEffect,
  useMemo,
  useReducer,
} from "react"

import { isNodeComponentType } from "$components/DecisionTree/DecisionTree.utils"
import { getInitialStepsState, stepsReducer } from "./Wizard.utils"
import { WizardContent } from "./Wizard.styles"
import { WizardContext } from "./WizardContext"
import { useNavigate, useParams } from "react-router-dom"
import { WizardStepper } from "./WizardStepper"
import { WizardStep } from "./WizardStep"
import { IWizardContext } from "."
import { WizardStepStatus } from "./WizardContext.types"

// TODO: Add loading visual

export interface IWizardProps {
  // Used when persisting form state into cache
  name?: string
}

export const Wizard: React.FunctionComponent<IWizardProps> = ({
  name,
  children,
}) => {
  const [{ steps, map }, dispatch] = useReducer(
    stepsReducer,
    getInitialStepsState(children)
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
      if (map[stepId]) {
        navigate(stepId)
      } else {
        throw new Error(
          `Wizard component is attempting to set the current step to a non-existent Id ${stepId}`
        )
      }
    },
    [map, navigate]
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

  const getStep = useCallback((stepId: string) => map[stepId], [map])

  const setStepStatus = useCallback(
    (stepId: string, status: WizardStepStatus) => {
      dispatch({
        type: "status",
        payload: {
          id: stepId,
          status,
        },
      })
    },
    []
  )

  const skip = useCallback(() => {
    if (currentStepId) {
      const currentStep = map[currentStepId]
      if (currentStep) {
        setStepStatus(currentStep.id, "skipped")
      }

      if (hasNext()) {
        next()
      }
    }
  }, [currentStepId, hasNext, map, next, setStepStatus])

  const contextValue: IWizardContext = useMemo(
    () => ({
      name,
      steps,
      currentStepId,
      currentStep: currentStepId ? map[currentStepId] : undefined,
      hasNext,
      hasPrevious,
      next,
      previous,
      skip,
      goToStep,
      getStep,
      setStepStatus,
    }),
    [
      currentStepId,
      getStep,
      goToStep,
      hasNext,
      hasPrevious,
      map,
      name,
      next,
      previous,
      setStepStatus,
      skip,
      steps,
    ]
  )

  // If no stepId is specified in the route parameters, redirect
  //  to the first step route. Similarly, if the parameter specifies
  //  a non-existent route, redirect to the first step instead
  useEffect(() => {
    if (!currentStepId || !map[currentStepId]) {
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
          React.Children.map(children, (node) => {
            if (
              React.isValidElement(node) &&
              isNodeComponentType(node, WizardStep)
            ) {
              const { id } = node.props as ComponentProps<typeof WizardStep>
              if (id === currentStepId) {
                return <div className="active">{node}</div>
              }
            }

            return node
          })
        }
      </WizardContent>
    </WizardContext.Provider>
  )
}
