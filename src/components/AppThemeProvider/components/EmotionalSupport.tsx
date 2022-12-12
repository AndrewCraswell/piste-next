import { ThemeProvider } from "@emotion/react"
import styled from "@emotion/styled"
import React, { PropsWithChildren } from "react"

import { IAppTheme } from "../AppThemeProvider.types"

const BodyGrow = styled.div`
  height: 100vh;
`

export type EmotionalSupportProps = PropsWithChildren<{
  theme: IAppTheme
}>

export function EmotionalSupport({ children, theme }: EmotionalSupportProps) {
  return (
    <ThemeProvider theme={theme}>
      <BodyGrow>{children}</BodyGrow>
    </ThemeProvider>
  )
}
