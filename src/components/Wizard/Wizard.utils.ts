import React, { ComponentProps } from "react"

import { filterChildrenByNodeType } from "$components/DecisionTree/DecisionTree.utils"
import { WizardStep } from "./WizardStep"
import { WizardStepData } from "./WizardContext.types"
import { Reducer } from "@reduxjs/toolkit"
import { StepsStatusAction, StepsState } from "./Wizard.types"

export const getStepsArray = (children: React.ReactNode): WizardStepData[] => {
  const stepNodes = filterChildrenByNodeType(children, WizardStep)
  const steps =
    React.Children.map(stepNodes, (stepNode) => {
      if (!React.isValidElement(stepNode)) {
        return
      }

      const { children: descendants, ...step } =
        stepNode.props as ComponentProps<typeof WizardStep>
      return { ...step, status: "none" } as WizardStepData
    }) || []

  return steps
}

const stepsArrayToMap = (steps: WizardStepData[]) =>
  steps.reduce((map, step) => {
    map[step.id] = step
    return map
  }, {} as Record<string, WizardStepData>)

export const getInitialStepsState = (children: React.ReactNode) => {
  const steps = getStepsArray(children)

  return {
    steps,
    map: stepsArrayToMap(steps),
  } as StepsState
}

export const stepsReducer: Reducer<StepsState, StepsStatusAction> = (
  state = { steps: [], map: {} },
  action
) => {
  const { type, payload } = action

  switch (type) {
    case "status":
      const steps = [...state.steps]
      const idx = steps.findIndex((s) => s.id === payload.id)

      if (idx !== -1) {
        steps[idx].status = payload.status

        return {
          steps,
          map: stepsArrayToMap(steps),
        }
      } else {
        // No status updated, just return the existing state
        return state
      }
    default:
      return state
  }
}
