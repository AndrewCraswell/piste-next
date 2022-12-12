import { TabValue } from "@fluentui/react-components"
import { PropsWithChildren } from "react"

export type TabPanelProps = PropsWithChildren<{
  name: TabValue
}>

export function TabPanel({ children }: TabPanelProps) {
  return <>{children}</>
}
