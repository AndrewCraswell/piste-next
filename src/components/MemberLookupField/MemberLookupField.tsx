import { useApolloClient } from "@apollo/client"
import { NormalPeoplePicker, PersonaSize, IPersonaProps } from "@fluentui/react"

import {
  SearchMembersDocument,
  SearchMembersQuery,
  SearchMembersQueryVariables,
  useMembersByIdsLazyQuery,
} from "$queries"

export const MemberLookupField: React.FunctionComponent = () => {
  const client = useApolloClient()
  const [getMembersByIds, { data: membersFound }] = useMembersByIdsLazyQuery()

  return (
    <NormalPeoplePicker
      inputProps={{
        placeholder: "Full name",
      }}
      onResolveSuggestions={async (filter) => {
        const { data } = await client.query<
          SearchMembersQuery,
          SearchMembersQueryVariables
        >({
          query: SearchMembersDocument,
          variables: { filter: `${filter}%` },
        })

        const suggestions: IPersonaProps[] = data!.AssociationMembersLookup.map(
          (m) => ({
            text: m.FullName,
            size: PersonaSize.size24,
            optionalText: m.AssociationMemberId,
            secondaryText: m.Club1Name || m.Club2Name || undefined,
          })
        )

        return suggestions
      }}
      resolveDelay={350}
      onChange={(items) => {
        const members = items ?? []
        const ids = members
          .map((m) => m.optionalText)
          .filter(Boolean) as string[]

        getMembersByIds({ variables: { ids } })
      }}
    />
  )
}
