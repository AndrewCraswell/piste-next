import { AssociationMember } from "$types"

export function getMemberDetailsFromAssociation(member?: AssociationMember) {
  if (member) {
    return {
      fullName: member.FullName,
      secondaryText:
        member.Club1Name ||
        member.Club2Name ||
        member.Division ||
        member.Birthdate.toString(),
      memberId: member.AssociationMemberId,
      membershipExpiration: member.Expiration,
      birthdate: member.Birthdate,
      foilRating: member.Foil,
      epeeRating: member.Epee,
      sabreRating: member.Saber,
    }
  } else {
    return null
  }
}
