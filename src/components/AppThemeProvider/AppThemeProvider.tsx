import { ThemeProvider as FluentProvider } from "@fluentui/react"
import React, { PropsWithChildren, useMemo, useState } from "react"
import { DefaultTheme, DarkTheme } from "@fluentui/theme-samples"
import {
  webLightTheme,
  webDarkTheme,
  FluentProvider as FluentNextProvider,
} from "@fluentui/react-components"
import { createContext } from "react"

import { AppTheme, IAppTheme } from "./AppThemeProvider.types"
import { useSearchParams } from "react-router-dom"
import { EmotionalSupport } from "./components/EmotionalSupport"

const lightTheme: IAppTheme = { ...DefaultTheme, fluentV9: webLightTheme }
const darkTheme: IAppTheme = { ...DarkTheme, fluentV9: webDarkTheme }

interface IAppThemeContextValue {
  themeName: AppTheme
  theme: IAppTheme
  setTheme: (name: AppTheme) => void
}

export const AppThemeContext = createContext<IAppThemeContextValue | undefined>(
  undefined
)

export function AppThemeProvider({ children }: PropsWithChildren<{}>) {
  const [params] = useSearchParams()
  const defaultTheme = (params.get("theme") as AppTheme) ?? "light"

  const [themeName, setTheme] = useState<AppTheme>(defaultTheme)

  const value: IAppThemeContextValue = useMemo(() => {
    let theme = lightTheme
    switch (themeName) {
      case "dark":
        theme = darkTheme
      // eslint-disable-next-line no-fallthrough
      case "light":
      default:
      // Nothing to do here
    }

    return {
      theme,
      themeName,
      setTheme,
    }
  }, [themeName])

  return (
    <AppThemeContext.Provider value={value}>
      <FluentProvider theme={value.theme}>
        <FluentNextProvider theme={value.theme.fluentV9}>
          <EmotionalSupport theme={value.theme}>{children}</EmotionalSupport>
        </FluentNextProvider>
      </FluentProvider>
    </AppThemeContext.Provider>
  )
}
