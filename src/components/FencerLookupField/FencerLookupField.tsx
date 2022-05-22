import {
  NormalPeoplePicker,
  IPersonaProps,
  IPeoplePickerProps,
} from "@fluentui/react"
import { useCallback } from "react"
import { useApolloClient } from "@apollo/client"

import {
  GetFencersDocument,
  GetFencersQuery,
  GetFencersQueryVariables,
} from "$queries"
import {
  fencerSearchFactory,
  mapFencerToPersona,
  sortFencerPersonaByName,
} from "./FencerLookupField.utils"
import { IFencerPersona } from "./FencerLookupField.types"

export interface IFencerLookupFieldProps
  extends Partial<Omit<IPeoplePickerProps, "onChange">> {
  onChange?: (items: IFencerPersona[]) => void
}

export const FencerLookupField: React.FunctionComponent<
  IFencerLookupFieldProps
> = ({ ...pickerProps }) => {
  const client = useApolloClient()

  const resolveSuggestions = useCallback(
    async (filter: string = "") => {
      const { data } = await client.query<
        GetFencersQuery,
        GetFencersQueryVariables
      >({
        query: GetFencersDocument,
      })

      const filterExpression = new RegExp(filter, "i")
      const filterFunc = fencerSearchFactory(filterExpression)

      const suggestions: IPersonaProps[] = data!.Students.map(
        mapFencerToPersona
      )
        .filter(filterFunc)
        .sort(sortFencerPersonaByName)

      return suggestions
    },
    [client]
  )

  const onEmptyResolveSuggestions = useCallback(() => {
    return resolveSuggestions()
  }, [resolveSuggestions])

  return (
    <NormalPeoplePicker
      inputProps={{
        placeholder: "Full name",
      }}
      onResolveSuggestions={resolveSuggestions}
      onEmptyResolveSuggestions={onEmptyResolveSuggestions}
      resolveDelay={50}
      {...pickerProps}
      onChange={(items) => {
        if (pickerProps.onChange) {
          pickerProps.onChange(items as IFencerPersona[])
        }
      }}
    />
  )
}
