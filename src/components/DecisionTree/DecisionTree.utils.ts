import React from "react"

import { DecisionTemplate, IDecisionTemplateProps } from "./DecisionTemplate"
import { Dictionary } from "./DecisionTree.types"

export const getDecisionsDictionary = (children: React.ReactNode) => {
  const decisions: Dictionary<IDecisionTemplateProps> = {}

  React.Children.forEach(children, (node) => {
    if (isNodeComponentType(node, DecisionTemplate)) {
      const { id, nextId } = (node as any).props as IDecisionTemplateProps
      const decision: IDecisionTemplateProps = {
        id,
        nextId: nextId || undefined,
      }

      decisions[id] = decision
    }
  })

  return decisions
}

export const getDefaultDecisionId = (
  defaultId: string | undefined,
  children: React.ReactNode
) => {
  let resultId = defaultId

  if (!defaultId) {
    const firstDecision = React.Children.toArray(children).find((c) =>
      isNodeComponentType(c, DecisionTemplate)
    )

    if (firstDecision) {
      const props = (firstDecision as any).props as IDecisionTemplateProps
      resultId = props.id
    }
  }

  return resultId
}

export const isNodeComponentType = (
  node: React.ReactNode,
  component: React.FunctionComponent<any>
) => {
  const child = node as any
  return child.type.name === component.name
}

export const filterChildrenByNodeType = <P>(
  children: React.ReactNode,
  component: React.FunctionComponent<P>
): React.ReactNode => {
  return React.Children.toArray(children).filter(
    (node) => React.isValidElement(node) && isNodeComponentType(node, component)
  )
}
