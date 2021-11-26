import { ThemeProvider as FluentProvider, useTheme } from "@fluentui/react"
import { ThemeProvider as EmotionProvider } from "@emotion/react"
import styled from "@emotion/styled"
import React from "react"

const BodyGrow = styled.div`
  height: 100vh;
  background-color: ${({ theme }) => theme.palette.neutralLighterAlt};
`

const ThemeInner: React.FunctionComponent = ({ children }) => {
  const theme = useTheme()

  return (
    <EmotionProvider theme={theme}>
      <BodyGrow>{children}</BodyGrow>
    </EmotionProvider>
  )
}

export const ThemeProvider: React.FunctionComponent = ({ children }) => {
  return (
    <FluentProvider>
      <ThemeInner>{children}</ThemeInner>
    </FluentProvider>
  )
}
