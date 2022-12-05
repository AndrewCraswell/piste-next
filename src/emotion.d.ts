import { IAppTheme } from "$components/AppThemeProvider"
import "@emotion/react"

declare module "@emotion/react" {
  export interface Theme extends IAppTheme {}
}
