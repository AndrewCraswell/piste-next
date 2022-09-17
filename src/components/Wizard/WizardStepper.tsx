import React from "react"

import { Text } from "@fluentui/react-components"
import {
  StepLink,
  StepIcon,
  StepCaption,
  Connector,
  Stepper,
} from "./WizardStepper.styles"
import { useWizard } from "./useWizard"
import { useLinkShims } from "$hooks"

export const WizardStepper: React.FunctionComponent = () => {
  const { steps, currentStepId } = useWizard()
  const { onClick } = useLinkShims()

  return (
    <Stepper>
      {steps.map((step, i) => {
        const { id, label, optional } = step
        const stepNum = i + 1

        return (
          <React.Fragment key={id}>
            <StepLink
              href={`${id}`}
              className={`${currentStepId === id ? "active" : ""}`}
              onClick={onClick}
            >
              <StepIcon className="icon">{stepNum}</StepIcon>
              <div className="label">
                <Text>{label}</Text>
                {optional && <StepCaption block>Optional</StepCaption>}
              </div>
            </StepLink>

            {stepNum < steps.length && <Connector />}
          </React.Fragment>
        )
      })}
    </Stepper>
  )
}
