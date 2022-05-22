import { useApolloClient } from "@apollo/client"
import {
  NormalPeoplePicker,
  IPersonaProps,
  IPeoplePickerProps,
  PersonaSize,
} from "@fluentui/react"
import { useCallback } from "react"

import {
  SearchMembersDocument,
  SearchMembersQuery,
  SearchMembersQueryVariables,
} from "$queries"
import { associationMemberToPersona } from "$lib"
import { IAssociationMemberPersona } from "$types"

export interface IMemberLookupFieldProps
  extends Partial<Omit<IPeoplePickerProps, "onChange">> {
  onChange?: (items: IAssociationMemberPersona[]) => void
  defaultFilter?: string
  size?: PersonaSize
}

export const MemberLookupField: React.FunctionComponent<
  IMemberLookupFieldProps
> = ({ size, defaultFilter = "%", ...pickerProps }) => {
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
        (member) => associationMemberToPersona(member, size)
      )

      return suggestions
    },
    [client, defaultFilter, size]
  )

  return (
    <NormalPeoplePicker
      inputProps={{
        placeholder: "Fencer name",
      }}
      onResolveSuggestions={resolveSuggestions}
      onEmptyResolveSuggestions={() => {
        return resolveSuggestions()
      }}
      resolveDelay={350}
      {...pickerProps}
      onChange={(items) => {
        if (pickerProps.onChange) {
          pickerProps.onChange(items as IAssociationMemberPersona[])
        }
      }}
    />
  )
}
