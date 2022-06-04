import { IAppTheme } from "$components/ThemeProvider"
import "@emotion/react"

declare module "@emotion/react" {
  export interface Theme extends IAppTheme {}
}
