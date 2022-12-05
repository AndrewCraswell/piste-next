import { ThemeProvider as FluentProvider } from "@fluentui/react"
import { ThemeProvider as EmotionProvider } from "@emotion/react"
import styled from "@emotion/styled"
import React, { useMemo } from "react"
import { DefaultTheme, DarkTheme } from "@fluentui/theme-samples"
import {
  webLightTheme,
  webDarkTheme,
  FluentProvider as FluentNextProvider,
} from "@fluentui/react-components"

import { IEmotionalSupportProps, IAppTheme } from "./ThemeProvider.types"
import { useSearchParams } from "react-router-dom"

const BodyGrow = styled.div`
  height: 100vh;
`

const EmotionalSupport: React.FunctionComponent<IEmotionalSupportProps> = ({
  children,
  theme,
}) => (
  <EmotionProvider theme={theme}>
    <BodyGrow>{children}</BodyGrow>
  </EmotionProvider>
)

export const ThemeProvider: React.FunctionComponent = ({ children }) => {
  const [params] = useSearchParams()
  const themeName = params.get("theme")

  const theme: IAppTheme = useMemo((): IAppTheme => {
    switch (themeName) {
      //@ts-ignore
      case "dark":
        return { ...DarkTheme, fluentV9: webDarkTheme }

      //@ts-ignore
      case "light":
      default:
        return { ...DefaultTheme, fluentV9: webLightTheme }
    }
  }, [themeName])

  return (
    <FluentProvider theme={theme}>
      <FluentNextProvider theme={theme.fluentV9}>
        <EmotionalSupport theme={theme}>{children}</EmotionalSupport>
      </FluentNextProvider>
    </FluentProvider>
  )
}
