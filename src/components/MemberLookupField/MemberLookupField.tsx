import { useApolloClient } from "@apollo/client"
import {
  NormalPeoplePicker,
  PersonaSize,
  IPersonaProps,
  IPeoplePickerProps,
} from "@fluentui/react"

import {
  SearchMembersDocument,
  SearchMembersQuery,
  SearchMembersQueryVariables,
} from "$queries"
import { AssociationMember } from "$types"
import { associationMemberToPersona } from "./MemberLookupField.utils"

interface IMemberLookupFieldProps
  extends Partial<Omit<IPeoplePickerProps, "onChange">> {
  onChange: (items: AssociationMember[]) => void
}

export const MemberLookupField: React.FunctionComponent<
  IMemberLookupFieldProps
> = (props) => {
  const client = useApolloClient()

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
          associationMemberToPersona
        )

        return suggestions
      }}
      resolveDelay={350}
      {...props}
      onChange={(items) => {
        const members = (items ?? []).map(
          (m) => (m as any).member as AssociationMember
        )

        if (props.onChange) {
          props.onChange(members)
        }
      }}
    />
  )
}
