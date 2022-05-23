import { PersonaSize } from "@fluentui/react"

import { AssociationMember, IAssociationMemberPersona } from "$types"

export function associationMemberToPersona(
  member: AssociationMember,
  size: PersonaSize = PersonaSize.size24
): IAssociationMemberPersona {
  return {
    text: member.FullName,
    size,
    secondaryText:
      member.Club1Name ||
      member.Club2Name ||
      member.Division ||
      member.Birthdate.toString(),
    member,
  }
}
