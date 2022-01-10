import { Theme as FluentNextTheme } from "@fluentui/react-components"
import { Theme as FluentTheme } from "@fluentui/react"

export interface IAppTheme extends FluentTheme {
  fluentV9: FluentNextTheme | undefined
}

export interface IEmotionalSupportProps {
  theme: IAppTheme
}
