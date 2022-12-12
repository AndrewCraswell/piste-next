import React, { PropsWithChildren } from "react"

import { IDecisionTreeContext } from "./DecisionTreeContext"
import { useDecisionTree } from "./useDecisionTree"

export type DecisionTemplateProps = PropsWithChildren<{
  id: string
  nextId?: string
}>

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
