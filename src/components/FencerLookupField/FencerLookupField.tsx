import {
  NormalPeoplePicker,
  IPersonaProps,
  IPeoplePickerProps,
  PersonaSize,
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
  size?: PersonaSize
}

export const FencerLookupField: React.FunctionComponent<
  IFencerLookupFieldProps
> = ({ size, ...pickerProps }) => {
  const client = useApolloClient()

  const resolveSuggestions = useCallback(
    async (filter: string = "") => {
      const { data } = await client.query<
        GetFencersQuery,
        GetFencersQueryVariables
      >({
        query: GetFencersDocument,
      })

      const filterFunc = fencerSearchFactory(filter)

      const suggestions: IPersonaProps[] = data!.Students.map((fencer) =>
        mapFencerToPersona(fencer, size)
      )
        .filter(filterFunc)
        .sort(sortFencerPersonaByName)

      return suggestions
    },
    [client, size]
  )

  const onEmptyResolveSuggestions = useCallback(() => {
    return resolveSuggestions()
  }, [resolveSuggestions])

  return (
    <NormalPeoplePicker
      inputProps={{
        placeholder: "Fencer name",
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
