import React from "react"

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
