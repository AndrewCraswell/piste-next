import { Fencer } from "$types"
import { PersonaSize } from "@fluentui/react"
import { IFencerPersona } from "./FencerLookupField.types"

export function fencerSearchFactory(filter: RegExp) {
  return (persona: IFencerPersona) => {
    const fencer = persona.fencer
    const name =
      `${fencer.FirstName} ${fencer.LastName}` +
      (fencer.Nickname ? ` (${fencer.Nickname})` : "")

    const account = fencer.Account?.Student
    const email = fencer.Email || account?.Email || ""
    const phone = fencer.Phone || account?.Phone || ""

    if (filter) {
      return (
        name?.search(filter) > -1 ||
        email?.search(filter) > -1 ||
        phone?.search(filter) > -1
      )
    } else {
      return true
    }
  }
}

export function sortFencerPersonaByName(
  fencerA: IFencerPersona,
  fencerB: IFencerPersona
) {
  return fencerA.text!.localeCompare(fencerB.text!)
}

export function mapFencerToPersona(
  fencer: Fencer,
  size: PersonaSize = PersonaSize.size24
): IFencerPersona {
  const name =
    `${fencer.FirstName} ${fencer.LastName}` +
    (fencer.Nickname ? ` (${fencer.Nickname})` : "")

  const account = fencer.Account?.Student
  const email = fencer.Email || account?.Email
  const phone = fencer.Phone || account?.Phone

  return {
    text: name,
    size,
    secondaryText: email || phone || "Unknown",
    fencer,
  }
}
