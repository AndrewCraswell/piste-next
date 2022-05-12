import { Stack, IStackProps } from "@fluentui/react"

const maxWidthStyles = { maxWidth: 600 }

const formTokens: Partial<IStackProps> = {
  tokens: { childrenGap: 15 },
}

export const FormSection: React.FunctionComponent = ({ children }) => {
  return (
    <Stack {...formTokens} style={maxWidthStyles}>
      {children}
    </Stack>
  )
}
