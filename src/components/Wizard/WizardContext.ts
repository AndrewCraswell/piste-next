import { createContext } from "react"

import { WizardStepData, WizardStepStatus } from "./WizardContext.types"

export interface IWizardContext {
  name?: string
  currentStepId?: string
  currentStep?: WizardStepData
  steps: WizardStepData[]
  hasNext: () => string | undefined
  hasPrevious: () => string | undefined
  next: () => void
  previous: () => void
  skip: () => void
  goToStep: (stepId: string) => void
  getStep: (stepId: string) => WizardStepData | null
  setStepStatus: (stepId: string, status: WizardStepStatus) => void
}

const contextDefault: IWizardContext = {
  name: undefined,
  currentStepId: undefined,
  currentStep: undefined,
  steps: [],
  hasNext: () => undefined,
  hasPrevious: () => undefined,
  next: () => {},
  previous: () => {},
  skip: () => {},
  goToStep: (stepId: string) => {},
  getStep: (stepId: string) => null,
  setStepStatus: (stepId: string, status: WizardStepStatus) => {},
}

export const WizardContext = createContext<IWizardContext>(contextDefault)
