import { IPersonaProps, PersonaSize } from "@fluentui/react"

import { AssociationMember } from "$types"

// TODO: Put this in types file
export interface IAssociationMemberPersona
  extends Pick<
    IPersonaProps,
    "text" | "size" | "optionalText" | "secondaryText"
  > {
  member: AssociationMember
}

export function associationMemberToPersona(
  member: AssociationMember
): IAssociationMemberPersona {
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
