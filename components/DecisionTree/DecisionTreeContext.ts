import { createContext } from "react"

import { IDecisionTemplateProps } from "./DecisionTemplate"

export interface IDecisionTreeContext {
  decision: IDecisionTemplateProps | null
  hasNext: boolean
  hasPrevious: boolean
  next: () => void
  back: () => void
  reset: () => void
  goTo: (decisionId: string, skipHistory?: boolean) => void
}

const contextDefault: IDecisionTreeContext = {
  decision: null,
  hasNext: false,
  hasPrevious: false,
  next: () => {},
  back: () => {},
  reset: () => {},
  goTo: (decisionId: string) => {},
}

export const DecisionTreeContext =
  createContext<IDecisionTreeContext>(contextDefault)
