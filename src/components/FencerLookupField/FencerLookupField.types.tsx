import { IPersonaProps } from "@fluentui/react"

import { Fencer } from "$types"

export interface IFencerPersona
  extends Pick<IPersonaProps, "text" | "size" | "secondaryText"> {
  fencer: Fencer
}
