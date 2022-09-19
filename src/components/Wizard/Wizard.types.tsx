import { WizardStepData, WizardStepStatus } from "./WizardContext.types"

export type StepsState = {
  steps: WizardStepData[]
  map: Record<string, WizardStepData>
}

export type StepsStatusAction = {
  type: "status"
  payload: {
    id: string
    status: WizardStepStatus
  }
}
