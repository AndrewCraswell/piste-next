import { PersonaSize } from "@fluentui/react"

import { AssociationMember, IAssociationMemberPersona } from "$types"

export function associationMemberToPersona(
  member: AssociationMember
): IAssociationMemberPersona {
  return {
    text: member.FullName,
    size: PersonaSize.size24,
    secondaryText:
      member.Club1Name ||
      member.Club2Name ||
      member.Division ||
      member.Birthdate.toString(),
    member,
  }
}
