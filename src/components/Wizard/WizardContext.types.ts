import { ComponentProps } from "react"

import { WizardStep } from "./WizardStep"

export type WizardStepStatus = "completed" | "skipped" | "error" | "none"

export type WizardStepData = Omit<
  ComponentProps<typeof WizardStep>,
  "children"
> & {
  status: WizardStepStatus
}
