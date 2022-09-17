import { ComponentProps, createContext } from "react"

import { WizardStep } from "./WizardStep"

// Get/set step status

export interface IWizardContext {
  currentStepId?: string
  steps: ComponentProps<typeof WizardStep>[]
  hasNext: () => string | undefined
  hasPrevious: () => string | undefined
  next: () => void
  previous: () => void
  reset: () => void
  goTo: (stepId: string, skipHistory?: boolean) => void
}

// TODO: Don't export this
export const contextDefault: IWizardContext = {
  steps: [],
  hasNext: () => undefined,
  hasPrevious: () => undefined,
  next: () => {},
  previous: () => {},
  reset: () => {},
  goTo: (stepId: string) => {},
  currentStepId: undefined,
}

export const WizardContext = createContext<IWizardContext>(contextDefault)
