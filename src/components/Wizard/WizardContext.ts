import { ComponentProps } from "react"
import { createContext } from "react"

import { WizardStep } from "./Wizard"

// Get/set step status

export interface IWizardContext {
  currentStepId?: string
  steps: ComponentProps<typeof WizardStep>[]
  hasNext: () => string | undefined
  hasPrevious: () => string | undefined
  next: () => void
  back: () => void
  reset: () => void
  goTo: (stepId: string, skipHistory?: boolean) => void
}

// TODO: Don't export this
export const contextDefault: IWizardContext = {
  steps: [],
  hasNext: () => undefined,
  hasPrevious: () => undefined,
  next: () => {},
  back: () => {},
  reset: () => {},
  goTo: (stepId: string) => {},
  currentStepId: undefined,
}

export const WizardContext = createContext<IWizardContext>(contextDefault)
