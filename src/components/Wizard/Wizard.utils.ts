import React, { ComponentProps } from "react"

import { filterChildrenByNodeType } from "$components/DecisionTree/DecisionTree.utils"
import { IWizardStepProps, WizardStep } from "./WizardStep"

export const getStepsDictionary = (children: React.ReactNode) => {
  const steps: Record<string, ComponentProps<typeof WizardStep>> = {}

  const filteredSteps = filterChildrenByNodeType(children, WizardStep)
  React.Children.forEach(filteredSteps, (node) => {
    if (!React.isValidElement(node)) {
      return
    }

    const stepProps = node.props as ComponentProps<typeof WizardStep>
    steps[stepProps.id] = { ...stepProps }
  })

  return steps
}

export const getStepsArray = (
  children: React.ReactNode
): IWizardStepProps[] => {
  const stepNodes = filterChildrenByNodeType(children, WizardStep)
  const steps =
    React.Children.map(stepNodes, (stepNode) => {
      if (!React.isValidElement(stepNode)) {
        return
      }

      const { children, ...step } = stepNode.props as ComponentProps<
        typeof WizardStep
      >
      return step as IWizardStepProps
    }) || []

  return steps
}
