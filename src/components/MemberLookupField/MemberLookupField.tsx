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
import { useCallback } from "react"

interface IMemberLookupFieldProps
  extends Partial<Omit<IPeoplePickerProps, "onChange">> {
  onChange: (items: AssociationMember[]) => void
  defaultFilter?: string
}

export const MemberLookupField: React.FunctionComponent<
  IMemberLookupFieldProps
> = ({ defaultFilter = "%", ...pickerProps }) => {
  const client = useApolloClient()

  // TODO: Enable "show more" suggestions
  const resolveSuggestions = useCallback(
    async (filter?: string) => {
      const { data } = await client.query<
        SearchMembersQuery,
        SearchMembersQueryVariables
      >({
        query: SearchMembersDocument,
        variables: {
          filter: (filter ? `${filter}%` : defaultFilter).replaceAll(" ", "%"),
        },
      })

      const suggestions: IPersonaProps[] = data!.AssociationMembers.map(
        associationMemberToPersona
      )

      return suggestions
    },
    [client, defaultFilter]
  )

  return (
    <NormalPeoplePicker
      inputProps={{
        placeholder: "Full name",
      }}
      onResolveSuggestions={resolveSuggestions}
      onEmptyResolveSuggestions={() => {
        return resolveSuggestions()
      }}
      resolveDelay={350}
      {...pickerProps}
      onChange={(items) => {
        const members = (items ?? []).map(
          (m) => (m as any).member as AssociationMember
        )

        if (pickerProps.onChange) {
          pickerProps.onChange(members)
        }
      }}
    />
  )
}
