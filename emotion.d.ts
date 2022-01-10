import { IAppTheme } from "$components"
import "@emotion/react"

declare module "@emotion/react" {
  export interface Theme extends IAppTheme {}
}
