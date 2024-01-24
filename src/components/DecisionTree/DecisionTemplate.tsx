import React from "react"

import { IDecisionTreeContext } from "./DecisionTreeContext"
import { useDecisionTree } from "./useDecisionTree"

export type DecisionTemplateProps = {
  id: string
  nextId?: string
  children?: React.ReactNode | Function
}

export type DecisionTemplateFunction = IDecisionTreeContext

export function DecisionTemplate(props: DecisionTemplateProps) {
  const { children } = props
  const context = useDecisionTree()

  if (typeof children == "function" || false) {
    return children(context)
  } else {
    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <React.Fragment>{children}</React.Fragment>
  }
}

export default DecisionTemplate
