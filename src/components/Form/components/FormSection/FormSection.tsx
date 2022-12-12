import { Stack, IStackProps } from "@fluentui/react"
import { PropsWithChildren } from "react"

const maxWidthStyles = { maxWidth: 600 }

const formTokens: Partial<IStackProps> = {
  tokens: { childrenGap: 16 },
}

export function FormSection({ children }: PropsWithChildren<{}>) {
  return (
    <Stack {...formTokens} style={maxWidthStyles}>
      {children}
    </Stack>
  )
}
