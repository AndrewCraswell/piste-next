import { PersonaSize } from "@fluentui/react"

import { AssociationMember } from "$types"

export function associationMemberToPersona(member: AssociationMember) {
  return {
    text: member.FullName,
    size: PersonaSize.size24,
    optionalText: member.AssociationMemberId,
    secondaryText:
      member.Club1Name ||
      member.Club2Name ||
      member.Division ||
      member.Birthdate.toString(),
    member,
  }
}
