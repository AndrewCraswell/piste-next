import { Stack } from "@fluentui/react"
import { PropsWithChildren } from "react"

const rowTokens = { childrenGap: 50 }

export function FormRow({ children }: PropsWithChildren<{}>) {
  return (
    <Stack horizontal tokens={rowTokens}>
      {children}
    </Stack>
  )
}
