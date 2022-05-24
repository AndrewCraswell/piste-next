import {
  TabValue,
  SelectTabEvent,
  SelectTabData,
} from "@fluentui/react-components"
import { useState, useCallback, useMemo } from "react"

export function useTabs(defaultTabName?: string) {
  const [selectedTab, setTab] = useState<TabValue>(defaultTabName)

  const onTabSelected = useCallback(
    (event: SelectTabEvent, data: SelectTabData) => {
      setTab(data.value)
    },
    []
  )

  return useMemo(
    () => ({
      selectedTab,
      setTab,
      onTabSelected,
    }),
    [onTabSelected, selectedTab]
  )
}
