import { Stack } from "@fluentui/react"

const rowTokens = { childrenGap: 50 }

export const FormRow: React.FunctionComponent = ({ children }) => {
  return (
    <Stack horizontal tokens={rowTokens}>
      {children}
    </Stack>
  )
}
