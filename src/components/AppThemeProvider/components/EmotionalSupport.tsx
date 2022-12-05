import { ThemeProvider } from "@emotion/react"
import styled from "@emotion/styled"
import React from "react"

const BodyGrow = styled.div`
  height: 100vh;
`

export interface IEmotionalSupportProps {
  theme: IAppTheme
}

export const EmotionalSupport: React.FunctionComponent<
  IEmotionalSupportProps
> = ({ children, theme }) => (
  <ThemeProvider theme={theme}>
    <BodyGrow>{children}</BodyGrow>
  </ThemeProvider>
)
