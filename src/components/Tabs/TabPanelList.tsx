import { TabValue } from "@fluentui/react-components"
import React from "react"

import { TabPanel, TabPanelProps } from "./TabPanel"
import { isNodeComponentType } from "./TabPanelList.utils"

export type TabPanelListProps = {
  selectedPanel: TabValue
}

export const TabPanelList: React.FunctionComponent<TabPanelListProps> = ({
  selectedPanel,
  children,
}) => {
  return React.Children.map(children, (element) => {
    if (isNodeComponentType(element, TabPanel)) {
      const { name } = (element as any).props as TabPanelProps
      return selectedPanel === name ? <>{element}</> : null
    }

    return null
  })
}
