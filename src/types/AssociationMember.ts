import { SearchMembersQuery, GetMembersByIdQuery } from "$queries"

export type AssociationMember = NonNullable<
  GetMembersByIdQuery["AssociationMembers_by_pk"]
>
