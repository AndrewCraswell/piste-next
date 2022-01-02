import "@emotion/react"
import { Theme as FluentTheme } from "@fluentui/react"

declare module "@emotion/react" {
  export interface Theme extends FluentTheme {}
}
