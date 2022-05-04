import { Stack, IStackProps } from "@fluentui/react"

const formTokens: Partial<IStackProps> = {
  tokens: { childrenGap: 15 },
}

export const FormSection: React.FunctionComponent = ({ children }) => {
  return <Stack {...formTokens}>{children}</Stack>
}
