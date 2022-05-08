import { SearchMembersQuery } from "$queries"

export type AssociationMember =
  SearchMembersQuery["AssociationMembersLookup"][0]
