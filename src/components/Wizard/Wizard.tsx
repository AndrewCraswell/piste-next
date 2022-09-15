import React, { ComponentProps, useCallback, useEffect, useMemo } from "react"

import { Button, Text } from "@fluentui/react-components"
import { isNodeComponentType } from "$components/DecisionTree/DecisionTree.utils"
import { getStepsArray, getStepsDictionary } from "./Wizard.utils"
import {
  Step,
  StepIcon,
  StepCaption,
  Connector,
  WizardContent,
} from "./Wizard.styles"
import { contextDefault, WizardContext } from "./WizardContext"
import { useWizard } from "./useWizard"
import styled from "@emotion/styled"
import { useNavigate, useParams } from "react-router-dom"

export interface IWizardProps {}

// TODO: Make the step marker a link
// TODO: Implement the WizardFooter which has useWizard()

// TODO: Add success status for steps
// TODO: Add error status for steps
// TODO: Add skipped status for steps

// TODO: Architect individual step status changing

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

  const contextValue = useMemo(
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

      <div style={{ marginTop: "15em" }}>
        <Button disabled={!hasPrevious()} onClick={previous}>
          Back
        </Button>

        <Button appearance="transparent">Skip</Button>
        <Button disabled={!hasNext()} appearance="primary" onClick={next}>
          Save and continue
        </Button>
      </div>
    </WizardContext.Provider>
  )
}

export interface IWizardStepProps {
  id: string
  label: string
  optional?: boolean
}

export const WizardStep: React.FunctionComponent<IWizardStepProps> = ({
  children,
}) => {
  return <>{children}</>
}

export const Stepper = styled.div`
  display: flex;
`

export const WizardStepper: React.FunctionComponent = () => {
  const { steps, currentStepId } = useWizard()

  return (
    <Stepper>
      {steps.map((step, i) => {
        const { id, label, optional } = step
        const stepNum = i + 1

        return (
          <React.Fragment key={id}>
            <Step className={`${currentStepId === id ? "active" : ""}`}>
              <StepIcon className="icon">{stepNum}</StepIcon>
              <div className="label">
                <Text>{label}</Text>
                {optional && <StepCaption block>Optional</StepCaption>}
              </div>
            </Step>

            {stepNum < steps.length && <Connector />}
          </React.Fragment>
        )
      })}
    </Stepper>
  )
}
