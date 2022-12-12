import { isNodeComponentType } from "$lib/nodeUtilitities"
import { TabValue } from "@fluentui/react-components"
import React, { PropsWithChildren } from "react"

import { TabPanel, TabPanelProps } from "./TabPanel"

export type TabPanelListProps = PropsWithChildren<{
  selectedPanel: TabValue
}>

export function TabPanelList({ selectedPanel, children }: TabPanelListProps) {
  return (
    <>
      {React.Children.map(children, (element) => {
        if (isNodeComponentType(element, TabPanel)) {
          const { name } = (element as any).props as TabPanelProps
          return selectedPanel === name ? <>{element}</> : null
        }

        return null
      })}
    </>
  )
}
