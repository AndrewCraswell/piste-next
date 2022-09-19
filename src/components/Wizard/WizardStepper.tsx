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
import { Checkmark16Regular, Dismiss16Regular } from "@fluentui/react-icons"

export const WizardStepper: React.FunctionComponent = () => {
  const { steps, currentStep } = useWizard()
  const { onClick } = useLinkShims()

  return (
    <Stepper>
      {steps.map((step, i) => {
        const { id, label, optional, status } = step
        const stepNum = i + 1

        return (
          <React.Fragment key={id}>
            <StepLink
              href={`${id}`}
              className={`${currentStep?.id === id ? "active" : ""} ${status}`}
              onClick={onClick}
            >
              <StepIcon className="icon">
                {(!status || status === "none") && stepNum}
                {status === "skipped" && <Dismiss16Regular />}
                {status === "completed" && <Checkmark16Regular />}
                {status === "error" && <span>!</span>}
              </StepIcon>
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
