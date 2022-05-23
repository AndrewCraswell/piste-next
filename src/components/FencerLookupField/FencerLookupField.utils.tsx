import { formatFullName, formatPhoneNumber } from "$lib"
import { Fencer } from "$types"
import { PersonaSize } from "@fluentui/react"
import { IFencerPersona } from "./FencerLookupField.types"

export function fencerSearchFactory(searchText: string) {
  const filter = new RegExp(searchText, "i")

  return (persona: IFencerPersona) => {
    const fencer = persona.fencer
    const name = formatFullName({
      firstName: fencer.FirstName,
      lastName: fencer.LastName,
      nickname: fencer.Nickname,
    })

    const account = fencer.Account?.Student
    const email = fencer.Email || account?.Email || ""
    const phone = formatPhoneNumber(fencer.Phone || account?.Phone || "")

    return (
      name?.search(filter) > -1 ||
      email?.search(filter) > -1 ||
      phone?.search(filter) > -1
    )
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
  const name = formatFullName({
    firstName: fencer.FirstName,
    lastName: fencer.LastName,
    nickname: fencer.Nickname,
  })

  const account = fencer.Account?.Student
  const email = fencer.Email || account?.Email
  const phone = formatPhoneNumber(fencer.Phone || account?.Phone || "")

  return {
    text: name,
    size,
    secondaryText: email || phone || "Unknown",
    fencer,
  }
}
