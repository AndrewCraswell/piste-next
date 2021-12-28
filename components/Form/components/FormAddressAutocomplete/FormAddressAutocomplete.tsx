import { usePlacesWidget } from "react-google-autocomplete"

import { FormTextField, FormTextFieldProps } from "../FormTextField"
import { GoogleAddressResult } from "$types"
import { RefObject } from "react"

export type FormAddressAutocompleteProps = {
  onPlaceSelected?: (
    address: GoogleAddressResult,
    input: RefObject<HTMLInputElement>
  ) => void
} & Omit<FormTextFieldProps, "elementRef">

export const FormAddressAutocomplete: React.FunctionComponent<FormAddressAutocompleteProps> =
  (props) => {
    const { name, control, controllerProps, onPlaceSelected, ...inputProps } =
      props

    const { ref: autocompleteRef } = usePlacesWidget({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY,
      onPlaceSelected: (place, input) => {
        const address = new GoogleAddressResult(place)
        if (onPlaceSelected) {
          onPlaceSelected(address, input)
        }
      },
      options: {
        componentRestrictions: {
          country: ["us"],
        },
        types: ["address"],
        fields: ["address_components", "formatted_address"],
      },
    })

    return (
      <FormTextField
        name={name}
        control={control}
        controllerProps={controllerProps}
        {...inputProps}
        elementRef={(c) => {
          // @ts-ignore
          autocompleteRef.current = c?.querySelector("input")
        }}
      />
    )
  }
