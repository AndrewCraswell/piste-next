import { Theme as FluentNextTheme } from "@fluentui/react-components"
import { Theme as FluentTheme } from "@fluentui/react"

export type AppTheme = "light" | "dark"

export interface IAppTheme extends FluentTheme {
  fluentV9: FluentNextTheme
}
