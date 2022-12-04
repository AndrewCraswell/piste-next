import { TabValue } from "@fluentui/react-components"

export type TabPanelProps = {
  name: TabValue
}

export const TabPanel: React.FunctionComponent<TabPanelProps> = ({
  name,
  children,
}) => <>{children}</>
